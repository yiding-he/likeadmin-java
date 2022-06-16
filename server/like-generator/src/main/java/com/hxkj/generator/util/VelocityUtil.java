package com.hxkj.generator.util;

import com.hxkj.common.utils.StringUtil;
import com.hxkj.generator.entity.GenTable;
import com.hxkj.generator.entity.GenTableColumn;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;
import org.apache.velocity.runtime.RuntimeConstants;
import org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader;

import java.util.LinkedList;
import java.util.List;
import java.util.Properties;

public class VelocityUtil {

    /**
     * 初始化vm方法
     */
    public static void initVelocity() {
        try {
            Properties p = new Properties();
            p.setProperty(RuntimeConstants.RESOURCE_LOADER, "classpath");
            p.setProperty("classpath.resource.loader.class", ClasspathResourceLoader.class.getName());
            p.setProperty(Velocity.INPUT_ENCODING, "UTF-8");
            Velocity.init(p);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * 设置模板变量信息
     *
     * @author fzr
     * @return VelocityContext
     */
    public static VelocityContext prepareContext(GenTable table, List<GenTableColumn> columns) {
        VelocityContext velocityContext = new VelocityContext();
        velocityContext.put("genTpl", table.getGenTpl());
        velocityContext.put("tableName", table.getTableName());
        velocityContext.put("authorName", table.getAuthorName());
        velocityContext.put("EntityName", table.getEntityName());
        velocityContext.put("entityName", StringUtil.uncapitalize(table.getEntityName()));
        velocityContext.put("moduleName", table.getModuleName());
        velocityContext.put("packageName", table.getPackageName());
        velocityContext.put("businessName", StringUtil.capitalize(table.getBusinessName()));
        velocityContext.put("functionName", StringUtil.isNotEmpty(table.getFunctionName()) ? table.getFunctionName() : "【请填写功能名称】");
        velocityContext.put("table", table);
        velocityContext.put("columns", columns);
        return velocityContext;
    }

    /**
     * 获取模板列表
     *
     * @author fzr
     * @return List<String>
     */
    public static List<String> getTemplateList(String genTpl) {
        List<String> templates = new LinkedList<>();
        templates.add("java/controller.java.vm");
        templates.add("java/entity.java.vm");
        templates.add("java/mapper.java.vm");
        templates.add("java/service.java.vm");
        templates.add("java/serviceImpl.java.vm");
        templates.add("java/validate.java.vm");
        return templates;
    }

    /**
     * 获取文件名
     */
    public static String getFileName(String template, GenTable genTable)
    {
        // 文件名称
        String fileName = "";
        String entityName = genTable.getEntityName();
        String moduleName = genTable.getModuleName();
        String packageName  = genTable.getPackageName();
        String businessName = genTable.getBusinessName();

        String javaPath = StringUtil.replace(packageName, ".", "/");

        if (template.contains("mapper.java.vm")) {
            fileName = StringUtil.format("{}/mapper/{}Mapper.java", "com/hxkj/common", entityName);
        }

        else if (template.contains("entity.java.vm")) {
            fileName = StringUtil.format("{}/entity/{}Entity.java", "com/hxkj/common", entityName);
        }

        else if (template.contains("service.java.vm")) {
            fileName = StringUtil.format("{}/service/I{}Service.java", javaPath, entityName);
        }

        else if (template.contains("serviceImpl.java.vm")) {
            fileName = StringUtil.format("{}/service/impl/{}ServiceImpl.java", javaPath, entityName);
        }

        else if (template.contains("controller.java.vm")) {
            fileName = StringUtil.format("{}/controller/{}Controller.java", javaPath, entityName);
        }

        else if (template.contains("validate.java.vm")) {
            fileName = StringUtil.format("{}/validate/{}Param.java", javaPath, entityName);
        }

        return fileName;
    }

}
