import{P as k}from"./index.4499288e.js";import{n as B,D as x}from"./index.87b6dd79.js";import{d as A,y as E,A as V,r,Y as M,a as p,i as e,w as t,o as u,Z as f,b as h,g as d,f as N,k as c}from"./vendor.26ab8f26.js";const z={class:"menu"},L=c(" \u6DFB\u52A0\u83DC\u5355 "),G=c(" \u5168\u90E8\u5C55\u5F00/\u6298\u53E0 "),O={key:0},R={key:1},U={key:2},P=c("\u7F16\u8F91"),S=c("\u5220\u9664"),j=A({setup($){const C={CATALOG:"M",MENU:"C",BUTTON:"A"},_=E([]),F=()=>{B().then(n=>{_.value=n})},g=async n=>{await x({id:n}),F()},b=E(),i={openFlagValue:!0},w=n=>{i.openFlagValue=!n,y(_.value,i.openFlagValue)},y=(n,s)=>{n.forEach(o=>{b.value.toggleRowExpansion(o,s),o.children!=null&&o.children!=null&&y(o.children,s)})};return V(()=>{F()}),(n,s)=>{const o=r("el-button"),D=r("router-link"),a=r("el-table-column"),v=r("el-table"),T=r("el-card"),m=M("perm");return u(),p("div",z,[e(T,{shadow:"never"},{default:t(()=>[e(D,{to:"/permission/menu/edit",class:"m-r-15"},{default:t(()=>[f((u(),h(o,{type:"primary",size:"small"},{default:t(()=>[L]),_:1})),[[m,["system:menu:add"]]])]),_:1}),e(o,{size:"small",onClick:s[0]||(s[0]=l=>w(i.openFlagValue))},{default:t(()=>[G]),_:1}),e(v,{data:_.value,class:"m-t-24","row-key":"id","default-expand-all":i.openFlagValue,"tree-props":{children:"children",hasChildren:"hasChildren"},size:"mini",ref_key:"dataTreeList",ref:b},{default:t(()=>[e(a,{prop:"menuName",label:"\u540D\u79F0",width:"180"}),e(a,{prop:"menuType",label:"\u83DC\u5355\u7C7B\u578B"},{default:t(l=>[l.row.menuType==C.CATALOG?(u(),p("span",O,d("\u76EE\u5F55"))):l.row.menuType==C.MENU?(u(),p("span",R,d("\u83DC\u5355"))):(u(),p("span",U,d("\u6309\u94AE")))]),_:1}),e(a,{prop:"menuIcon",label:"\u56FE\u6807"}),e(a,{prop:"component",label:"\u7EC4\u4EF6\u8DEF\u5F84"}),e(a,{prop:"menuSort",label:"\u6392\u5E8F"}),e(a,{prop:"perms",label:"\u6743\u9650\u6807\u8BC6"}),e(a,{prop:"paths",label:"\u8DEF\u7531\u5730\u5740"}),e(a,{prop:"isDisable",label:"\u72B6\u6001"},{default:t(l=>[N("span",null,d(l.row.isDisable==0?"\u6B63\u5E38":"\u505C\u7528"),1)]),_:1}),e(a,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4",width:"160"}),e(a,{label:"\u64CD\u4F5C"},{default:t(l=>[f((u(),h(D,{class:"m-r-10",to:{path:"/permission/menu/edit",query:{id:l.row.id}}},{default:t(()=>[e(o,{type:"text",size:"mini"},{default:t(()=>[P]),_:1})]),_:2},1032,["to"])),[[m,["system:menu:edit"]]]),f((u(),h(k,{class:"m-r-10 inline",onConfirm:q=>g(l.row.id)},{trigger:t(()=>[e(o,{type:"text",size:"mini"},{default:t(()=>[S]),_:1})]),_:2},1032,["onConfirm"])),[[m,["system:menu:del"]]])]),_:1})]),_:1},8,["data","default-expand-all"])]),_:1})])}}});export{j as default};
