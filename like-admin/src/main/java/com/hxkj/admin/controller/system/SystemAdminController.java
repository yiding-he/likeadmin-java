package com.hxkj.admin.controller.system;

import com.hxkj.admin.service.ISystemAdminService;
import com.hxkj.admin.validate.PageParam;
import com.hxkj.admin.validate.SysAdminParam;
import com.hxkj.admin.vo.system.SystemAdminVo;
import com.hxkj.common.core.AjaxResult;
import com.hxkj.common.core.PageResult;
import com.hxkj.common.validator.annotation.IDMust;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Map;

@RestController
@RequestMapping("/api/system/admin")
public class SystemAdminController {

    @Resource
    ISystemAdminService iSystemAdminService;

    /**
     * 管理员列表
     *
     * @author fzr
     * @return Object
     */
    @GetMapping("/lists")
    public Object lists(@Validated PageParam pageParam,
                        @RequestParam Map<String, String> params) {
        PageResult<SystemAdminVo> list = iSystemAdminService.lists(pageParam, params);
        return AjaxResult.success(list);
    }

    /**
     * 管理员详情
     *
     * @param id 主键ID
     * @return Object
     */
    @GetMapping("/detail")
    public Object detail(@Validated @IDMust() @RequestParam("id") Integer id) {
        SystemAdminVo vo = iSystemAdminService.detail(id);
        return AjaxResult.success(vo);
    }

    /**
     * 新增管理员
     *
     * @author fzr
     * @param sysAdminParam 参数
     * @return Object
     */
    @PostMapping("/add")
    public Object add(@Validated(value = SysAdminParam.create.class) @RequestBody SysAdminParam sysAdminParam) {
        iSystemAdminService.add(sysAdminParam);
        return AjaxResult.success();
    }

    /**
     * 编辑管理员
     *
     * @author fzr
     * @param sysAdminParam 参数
     * @return Object
     */
    @PostMapping("/edit")
    public Object edit(@Validated(value = SysAdminParam.update.class) @RequestBody SysAdminParam sysAdminParam) {
        iSystemAdminService.edit(sysAdminParam);
        return AjaxResult.success();
    }

    /**
     * 删除管理员
     *
     * @author fzr
     * @return Object
     */
    @PostMapping("/del")
    public Object del(@Validated(value = SysAdminParam.delete.class) @RequestBody SysAdminParam sysAdminParam) {
        iSystemAdminService.del(sysAdminParam.getId());
        return AjaxResult.success();
    }

}