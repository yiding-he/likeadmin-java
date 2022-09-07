package com.mdd.front.service.impl;

import cn.binarywang.wx.miniapp.api.WxMaService;
import cn.binarywang.wx.miniapp.api.impl.WxMaServiceImpl;
import cn.binarywang.wx.miniapp.bean.WxMaPhoneNumberInfo;
import cn.binarywang.wx.miniapp.config.impl.WxMaDefaultConfigImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.mdd.common.config.GlobalConfig;
import com.mdd.common.entity.system.SystemConfig;
import com.mdd.common.entity.user.User;
import com.mdd.common.entity.user.UserAuth;
import com.mdd.common.enums.ClientEnum;
import com.mdd.common.mapper.system.SystemConfigMapper;
import com.mdd.common.mapper.user.UserAuthMapper;
import com.mdd.common.mapper.user.UserMapper;
import com.mdd.common.utils.ConfigUtil;
import com.mdd.common.utils.TimeUtil;
import com.mdd.common.utils.UrlUtil;
import com.mdd.front.service.IUserService;
import com.mdd.front.vo.user.UserCenterVo;
import com.mdd.front.vo.user.UserInfoVo;
import me.chanjar.weixin.common.error.WxErrorException;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Map;

/**
 * 用户服务实现类
 */
@Service
public class UserServiceImpl implements IUserService {

    @Resource
    UserMapper userMapper;

    @Resource
    UserAuthMapper userAuthMapper;

    /**
     * 个人中心
     *
     * @author fzr
     * @param userId 用户ID
     * @return UserCenterVo
     */
    @Override
    public UserCenterVo center(Integer userId) {
        User user = userMapper.selectOne(new QueryWrapper<User>()
                .select("id,sn,avatar,real_name,nickname,username,mobile")
                .eq("id", userId)
                .last("limit 1"));

        UserCenterVo vo = new UserCenterVo();
        BeanUtils.copyProperties(user, vo);
        if (user.getAvatar().equals("")) {
            String avatar = ConfigUtil.get("user", "defaultAvatar", "");
            vo.setAvatar(UrlUtil.toAbsoluteUrl(avatar));
        } else {
            vo.setAvatar(UrlUtil.toAbsoluteUrl(user.getAvatar()));
        }

        return vo;
    }

    /**
     * 个人信息
     *
     * @author fzr
     * @param userId 用户ID
     * @return UserInfoVo
     */
    @Override
    public UserInfoVo info(Integer userId) {
        User user = userMapper.selectOne(new QueryWrapper<User>()
                .select("id,sn,avatar,real_name,nickname,username,mobile,password,sex,create_time")
                .eq("id", userId)
                .last("limit 1"));

        UserAuth userAuth = userAuthMapper.selectOne(new QueryWrapper<UserAuth>()
                .select("id,openid")
                .eq("user_id", userId)
                .eq("client", ClientEnum.MNP.getCode())
                .last("limit 1"));

        UserInfoVo vo = new UserInfoVo();
        BeanUtils.copyProperties(user, vo);
        vo.setIsPassword(!user.getPassword().equals(""));
        vo.setIsBindMnp(userAuth != null);
        vo.setVersion(GlobalConfig.version);
        vo.setSex(user.getSex());
        vo.setCreateTime(TimeUtil.timestampToDate(user.getCreateTime()));

        if (!user.getAvatar().equals("")) {
            vo.setAvatar(UrlUtil.toAbsoluteUrl(user.getAvatar()));
        } else {
            String avatar = ConfigUtil.get("user", "defaultAvatar", "");
            vo.setAvatar(UrlUtil.toAbsoluteUrl(avatar));
        }

        return vo;
    }

    /**
     * 微信手机号
     */
    @Override
    public void mnpMobile(Map<String, String> params) {
        Map<String, String> config = ConfigUtil.get("mp_channel");
        WxMaService wxMaService = new WxMaServiceImpl();
        WxMaDefaultConfigImpl wxConfig = new WxMaDefaultConfigImpl();
        wxConfig.setSecret(config.getOrDefault("appSecret", ""));
        wxConfig.setAppid(config.getOrDefault("appId", ""));
        wxMaService.setWxMaConfig(wxConfig);

        try {
            String sessionKey = "";
            String encryptedData = params.get("encryptedData");
            String ivStr = params.get("iv");
            WxMaPhoneNumberInfo wxMaPhoneNumberInfo = wxMaService.getUserService()
                    .getNewPhoneNoInfo("093bd81w3n9ocZ2KZu2w3XBZ034bd81S");


        } catch (WxErrorException e) {
            System.out.println(e.getError());
        }

    }

}
