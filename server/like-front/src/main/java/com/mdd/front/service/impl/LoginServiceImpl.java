package com.mdd.front.service.impl;

import cn.binarywang.wx.miniapp.api.WxMaService;
import cn.binarywang.wx.miniapp.api.impl.WxMaServiceImpl;
import cn.binarywang.wx.miniapp.bean.WxMaJscode2SessionResult;
import cn.binarywang.wx.miniapp.config.impl.WxMaDefaultConfigImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Assert;
import com.mdd.common.config.GlobalConfig;
import com.mdd.common.entity.user.User;
import com.mdd.common.entity.user.UserAuth;
import com.mdd.common.enums.ClientEnum;
import com.mdd.common.enums.NoticeEnum;
import com.mdd.common.exception.OperateException;
import com.mdd.common.mapper.user.UserAuthMapper;
import com.mdd.common.mapper.user.UserMapper;
import com.mdd.common.utils.*;
import com.mdd.front.config.FrontConfig;
import com.mdd.front.service.ILoginService;
import com.mdd.front.validate.RegParam;
import me.chanjar.weixin.common.error.WxErrorException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * 登录服务实现类
 */
@Service
public class LoginServiceImpl implements ILoginService {

    @Resource
    UserMapper userMapper;

    @Resource
    UserAuthMapper userAuthMapper;

    /**
     * 注册账号
     *
     * @author fzr
     * @param regParam 参数
     */
    @Override
    public void register(RegParam regParam) {
        User model = userMapper.selectOne(new QueryWrapper<User>()
                .select("id,sn,username")
                .eq("username", regParam.getUsername())
                .eq("is_delete", 0)
                .last("limit 1"));

        Assert.isNull(model, "账号已存在,换一个吧!");

        Integer sn  = this.randMakeSn();
        String salt = ToolsUtil.randomString(5);
        String pwd  = ToolsUtil.makeMd5(regParam.getPassword()+salt);

        User user = new User();
        user.setSn(sn);
        user.setNickname("用户"+sn);
        user.setUsername(regParam.getUsername());
        user.setPassword(pwd);
        user.setSalt(salt);
        user.setAvatar("/api/static/default_avatar.png");
        user.setChannel(regParam.getClient());
        user.setCreateTime(System.currentTimeMillis() / 1000);
        user.setUpdateTime(System.currentTimeMillis() / 1000);
        userMapper.insert(user);
    }

    /**
     * 微信小程序登录
     *
     * @author fzr
     * @param params 参数
     * @return Map<String, Object>
     */
    @Override
    @Transactional
    public Map<String, Object> mnpLogin(Map<String, String> params) {
        Assert.notNull(params.get("code"), "code参数缺失!");
        String code      = params.get("code");
        String avatarUrl = params.getOrDefault("avatarUrl", "/api/static/default_avatar.png");
        String nickName  = params.getOrDefault("nickName", "微信用户");
        String gender    = params.getOrDefault("gender", "0");
        Integer client   = Integer.parseInt(params.getOrDefault("client", "1"));

        Map<String, String> config = ConfigUtil.get("mp_channel");
        WxMaService wxMaService = new WxMaServiceImpl();
        WxMaDefaultConfigImpl wxConfig = new WxMaDefaultConfigImpl();
        wxConfig.setAppid(config.getOrDefault("appId", ""));
        wxConfig.setSecret(config.getOrDefault("appSecret", ""));
        wxMaService.setWxMaConfig(wxConfig);

        try {
            WxMaJscode2SessionResult sessionResult = wxMaService.getUserService().getSessionInfo(code);
            String openId  = sessionResult.getOpenid();
            String uniId = sessionResult.getUnionid();
            String unionId = uniId == null ? "" : uniId;

            UserAuth userAuth = userAuthMapper.selectOne(new QueryWrapper<UserAuth>()
                    .eq("client", client)
                    .nested(wq->wq
                        .eq("openid", openId).or()
                        .eq("unionid", unionId)
                    ).last("limit 1"));

            User user = null;
            Integer userId;
            if (StringUtil.isNotNull(userAuth)) {
                 user = userMapper.selectOne(new QueryWrapper<User>()
                        .eq("id", userAuth.getUserId())
                        .eq("is_delete", 0)
                        .last("limit 1"));
            }

            if (StringUtil.isNull(user)) {
                Integer sn  = this.randMakeSn();
                User model = new User();
                model.setSn(sn);
                model.setAvatar(avatarUrl);
                model.setNickname(nickName.equals("")?"用户"+sn:nickName);
                model.setUsername("u"+sn);
                model.setSex(Integer.parseInt(gender));
                model.setChannel(client);
                model.setLastLoginIp(IpUtil.getHostIp());
                model.setLastLoginTime(System.currentTimeMillis() / 1000);
                model.setCreateTime(System.currentTimeMillis() / 1000);
                model.setUpdateTime(System.currentTimeMillis() / 1000);
                userMapper.insert(model);
                userId = model.getId();

                if (StringUtil.isNull(userAuth)) {
                    UserAuth auth = new UserAuth();
                    auth.setUserId(model.getId());
                    auth.setOpenid(openId);
                    auth.setUnionid(unionId);
                    auth.setClient(client);
                    auth.setCreateTime(System.currentTimeMillis() / 1000);
                    auth.setUpdateTime(System.currentTimeMillis() / 1000);
                    userAuthMapper.insert(auth);
                }
            } else {
                // 更新微信标识
                userId = user.getId();
                if (StringUtil.isEmpty(userAuth.getUnionid()) && StringUtil.isNotEmpty(sessionResult.getUnionid())) {
                    userAuth.setUnionid(sessionResult.getUnionid());
                    userAuthMapper.updateById(userAuth);
                }

                // 更新用户信息
                if (StringUtil.isEmpty(user.getAvatar()) && StringUtil.isNotEmpty(avatarUrl)) {
                    user.setAvatar(avatarUrl);
                    user.setNickname(nickName);
                    user.setSex(Integer.parseInt(gender));
                }

                // 更新登录信息
                user.setLastLoginIp(IpUtil.getHostIp());
                user.setLastLoginTime(System.currentTimeMillis() / 1000);
                userMapper.updateById(user);
            }

            String token = ToolsUtil.makeToken();
            RedisUtil.set(FrontConfig.frontendTokenKey+token, userId, 7200);

            Map<String, Object> response = new LinkedHashMap<>();
            response.put("id", userId);
            response.put("token", token);
            return response;
        } catch (WxErrorException e) {
            throw new OperateException(e.getError().getErrorCode() + ", " + e.getError().getErrorMsg());
        }
    }

    /**
     * 手机号登录
     *
     * @author fzr
     * @param params 参数
     * @return Map<String, Object>
     */
    @Override
    public Map<String, Object> mobileLogin(Map<String, String> params) {
        Assert.notNull(params.get("mobile"), "mobile参数缺失!");
        Assert.notNull(params.get("code"), "code参数缺失!");
        String mobile = params.get("mobile");
        String code   = params.get("code").toLowerCase();

        // 校验验证码
        int typeCode = NoticeEnum.SMS_LOGIN_CODE.getCode();
        Object smsCode = RedisUtil.get(GlobalConfig.redisSmsCode+typeCode+":"+mobile);
        if (StringUtil.isNull(smsCode) || !smsCode.toString().equals(code)) {
            throw new OperateException("验证码错误!");
        }

        // 删除验证码
        RedisUtil.del(GlobalConfig.redisSmsCode+"101:"+mobile);

        // 查询手机号
        User user = userMapper.selectOne(new QueryWrapper<User>()
                .select("id,username,mobile,is_disable")
                .eq("mobile", mobile)
                .eq("is_delete", 0)
                .last("limit 1"));

        Assert.notNull(user, "账号不存在!");
        Assert.isFalse(user.getIsDisable() != 0, "账号已禁用!");

        String token = ToolsUtil.makeToken();
        RedisUtil.set(FrontConfig.frontendTokenKey+token, user.getId(), 7200);

        Map<String, Object> response = new LinkedHashMap<>();
        response.put("id", user.getId());
        response.put("token", token);
        return response;
    }

    /**
     * 账号登录
     *
     * @author fzr
     * @param params 参数
     * @return Map<String, Object>
     */
    @Override
    public Map<String, Object> accountLogin(Map<String, String> params) {
        Assert.notNull(params.get("username"), "username参数缺失!");
        Assert.notNull(params.get("password"), "password参数缺失!");
        String username = params.get("username");
        String password = params.get("password");

        User user = userMapper.selectOne(new QueryWrapper<User>()
                .select("id,username,password,salt,mobile,is_disable")
                .eq("username", username)
                .eq("is_delete", 0)
                .last("limit 1"));

        Assert.notNull(user, "账号不存在!");
        String pwd = ToolsUtil.makeMd5(password+user.getSalt());
        Assert.isFalse(!pwd.equals(user.getPassword()), "账号或密码错误!");
        Assert.isFalse(user.getIsDisable() != 0, "账号已被禁用!");

        String token = ToolsUtil.makeToken();
        RedisUtil.set(FrontConfig.frontendTokenKey+token, user.getId(), 7201);

        Map<String, Object> response = new LinkedHashMap<>();
        response.put("id", user.getId());
        response.put("token", token);
        return response;
    }

    /**
     * 忘记密码
     *
     * @author fzr
     * @param params 参数
     */
    @Override
    public void forgotPassword(Map<String, String> params) {
        Assert.notNull(params.get("mobile"), "mobile参数缺失!");
        Assert.notNull(params.get("code"), "code参数缺失!");
        Assert.notNull(params.get("password"), "password参数缺失!");
        String mobile = params.get("mobile");
        String code = params.get("code");
        String password = params.get("password");

        // 校验验证码
        int typeCode = NoticeEnum.SMS_FORGOT_PASSWORD_CODE.getCode();
        Object smsCode = RedisUtil.get(GlobalConfig.redisSmsCode+typeCode+":"+mobile);
        if (StringUtil.isNull(smsCode) || !smsCode.toString().equals(code)) {
            throw new OperateException("验证码错误!");
        }

        // 删除验证码
        RedisUtil.del(GlobalConfig.redisSmsCode+"104:"+mobile);

        // 查询手机号
        User user = userMapper.selectOne(new QueryWrapper<User>()
                .select("id,username,mobile,is_disable")
                .eq("is_delete", 0)
                .eq("mobile", mobile)
                .last("limit 1"));

        // 验证账号
        Assert.notNull(user, "账号不存在!");
        String pwd = ToolsUtil.makeMd5(password+user.getSalt());

        // 更新密码
        user.setPassword(pwd);
        user.setUpdateTime(System.currentTimeMillis() / 1000);
        userMapper.updateById(user);
    }

    /**
     * 生成用户编号
     *
     * @author fzr
     * @return Integer
     */
    private Integer randMakeSn() {
        Integer sn;
        while (true) {
            sn = Integer.parseInt(ToolsUtil.randomInt(8));
            User snModel = userMapper.selectOne(new QueryWrapper<User>()
                    .select("id,sn,username")
                    .eq("sn", sn)
                    .last("limit 1"));
            if (snModel == null) {
                break;
            }
        }
        return sn;
    }

}