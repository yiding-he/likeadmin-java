var L=Object.defineProperty;var h=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var U=(_,t,d)=>t in _?L(_,t,{enumerable:!0,configurable:!0,writable:!0,value:d}):_[t]=d,w=(_,t)=>{for(var d in t||(t={}))$.call(t,d)&&U(_,d,t[d]);if(h)for(var d of h(t))G.call(t,d)&&U(_,d,t[d]);return _};import{u as I,m as z,n as R,o as j,p as q}from"./index.2df3607c.js";import{F as P}from"./index.89b16031.js";import H from"./index.f3fa7131.js";import{d as J,v as E,y as K,r as p,a as v,i as e,w as a,o as f,ac as Q,f as W,e as V,j as m}from"./vendor.bbaa8c82.js";const X={class:"menu-edit"},Y={class:"m-t-15"},Z=m(" \u76EE\u5F55 "),ee=m(" \u83DC\u5355 "),le=m(" \u6309\u94AE "),ue={key:0},ae={key:1},oe={key:2},te={key:3},ne={key:4},de=m("\u7F13\u5B58"),se=m("\u4E0D\u7F13\u5B58"),me={key:5},ie=m("\u663E\u793A"),re=m("\u9690\u85CF"),pe=m("\u6B63\u5E38"),_e=m("\u505C\u7528"),ve=m("\u4FDD\u5B58"),Be=J({setup(_){const t={CATALOG:"M",MENU:"C",BUTTON:"A"},{router:d,route:N}=I(),F=N.query.id,y=E(),b=E([]),u=E({pid:"",menuType:"M",menuName:"",menuIcon:"",menuSort:"",perms:"",paths:"",component:"",selected:"",params:"",isShow:1,isCache:0,isDisable:0}),M=async s=>{u.value=await z({id:s}),D()},D=async()=>{const s=await R()||[];b.value=[{id:0,menuName:"\u9876\u7EA7"},...s],console.log(b.value,"---------------menuaList.value")},k=async()=>{await j(w({},u.value)),d.back()},A=async()=>{await q(w({},u.value)),d.back()},g=()=>{var s,l;(l=(s=y.value)==null?void 0:s.validate())==null||l.then(C=>{!C||(F?A():k())})},B=s=>{t.value=s};return K(()=>{F&&M(F),D()}),(s,l)=>{const C=p("el-page-header"),T=p("el-card"),i=p("el-radio"),c=p("el-radio-group"),n=p("el-form-item"),O=p("el-cascader"),r=p("el-input"),S=p("el-form"),x=p("el-button");return f(),v("div",X,[e(T,{shadow:"never"},{default:a(()=>[e(C,{content:Q(F)?"\u7F16\u8F91\u83DC\u5355":"\u65B0\u589E\u83DC\u5355",onBack:l[0]||(l[0]=o=>s.$router.back())},null,8,["content"]),e(H,{class:"m-t-20 text-center"})]),_:1}),e(T,{class:"m-t-15",shadow:"never"},{default:a(()=>[W("div",Y,[e(S,{ref_key:"formRefs",ref:y,model:u.value,"label-width":"120px",size:"small",style:{"max-width":"460px"}},{default:a(()=>[e(n,{label:"\u83DC\u5355\u7C7B\u578B"},{default:a(()=>[e(c,{modelValue:u.value.menuType,"onUpdate:modelValue":l[4]||(l[4]=o=>u.value.menuType=o)},{default:a(()=>[e(i,{label:t.CATALOG,onChange:l[1]||(l[1]=o=>B(t.CATALOG))},{default:a(()=>[Z]),_:1},8,["label"]),e(i,{label:t.MENU,onChange:l[2]||(l[2]=o=>B(t.MENU))},{default:a(()=>[ee]),_:1},8,["label"]),e(i,{label:t.BUTTON,onChange:l[3]||(l[3]=o=>B(t.BUTTON))},{default:a(()=>[le]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u7236\u7EA7\u83DC\u5355"},{default:a(()=>[e(O,{modelValue:u.value.pid,"onUpdate:modelValue":l[5]||(l[5]=o=>u.value.pid=o),style:{width:"340px"},options:b.value,props:{checkStrictly:!0,emitPath:!1,label:"menuName",value:"id"},clearable:""},null,8,["modelValue","options"])]),_:1}),u.value.menuType==t.BUTTON==""?(f(),v("div",ue,[e(n,{label:"\u8BF7\u9009\u62E9\u56FE\u6807"},{default:a(()=>[e(r,{modelValue:u.value.menuIcon,"onUpdate:modelValue":l[6]||(l[6]=o=>u.value.menuIcon=o),"show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165\u56FE\u6807"},null,8,["modelValue"])]),_:1})])):V("",!0),e(n,{label:"\u83DC\u5355\u540D\u79F0"},{default:a(()=>[e(r,{modelValue:u.value.menuName,"onUpdate:modelValue":l[7]||(l[7]=o=>u.value.menuName=o),"show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),u.value.menuType==t.BUTTON?(f(),v("div",ae,[e(n,{label:"\u83DC\u5355\u6743\u9650\u5B57\u7B26"},{default:a(()=>[e(r,{modelValue:u.value.perms,"onUpdate:modelValue":l[8]||(l[8]=o=>u.value.perms=o),"show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})])):V("",!0),u.value.menuType==t.BUTTON==""?(f(),v("div",oe,[e(n,{label:"\u8DEF\u7531\u5730\u5740"},{default:a(()=>[e(r,{modelValue:u.value.paths,"onUpdate:modelValue":l[9]||(l[9]=o=>u.value.paths=o),"show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})])):V("",!0),u.value.menuType==t.MENU?(f(),v("div",te,[e(n,{label:"\u7EC4\u4EF6\u8DEF\u5F84"},{default:a(()=>[e(r,{modelValue:u.value.component,"onUpdate:modelValue":l[10]||(l[10]=o=>u.value.component=o),"show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u83DC\u5355\u6743\u9650\u5B57\u7B26"},{default:a(()=>[e(r,{modelValue:u.value.perms,"onUpdate:modelValue":l[11]||(l[11]=o=>u.value.perms=o),"show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u8DEF\u7531\u53C2\u6570"},{default:a(()=>[e(r,{modelValue:u.value.params,"onUpdate:modelValue":l[12]||(l[12]=o=>u.value.params=o),"show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u9009\u4E2D\u83DC\u5355"},{default:a(()=>[e(r,{modelValue:u.value.selected,"onUpdate:modelValue":l[13]||(l[13]=o=>u.value.selected=o),"show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165\u9009\u4E2D\u83DC\u5355\u8DEF\u5F84"},null,8,["modelValue"])]),_:1})])):V("",!0),e(n,{label:"\u83DC\u5355\u6392\u5E8F"},{default:a(()=>[e(r,{modelValue:u.value.menuSort,"onUpdate:modelValue":l[14]||(l[14]=o=>u.value.menuSort=o),"show-word-limit":"",type:"number",placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F"},null,8,["modelValue"])]),_:1}),u.value.menuType==t.MENU?(f(),v("div",ne,[e(n,{label:"\u662F\u5426\u7F13\u5B58"},{default:a(()=>[e(c,{modelValue:u.value.isCache,"onUpdate:modelValue":l[15]||(l[15]=o=>u.value.isCache=o)},{default:a(()=>[e(i,{label:1},{default:a(()=>[de]),_:1}),e(i,{label:0},{default:a(()=>[se]),_:1})]),_:1},8,["modelValue"])]),_:1})])):V("",!0),u.value.menuType==t.BUTTON==""?(f(),v("div",me,[e(n,{label:"\u663E\u793A\u72B6\u6001"},{default:a(()=>[e(c,{modelValue:u.value.isShow,"onUpdate:modelValue":l[16]||(l[16]=o=>u.value.isShow=o)},{default:a(()=>[e(i,{label:1},{default:a(()=>[ie]),_:1}),e(i,{label:0},{default:a(()=>[re]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u83DC\u5355\u72B6\u6001"},{default:a(()=>[e(c,{modelValue:u.value.isDisable,"onUpdate:modelValue":l[17]||(l[17]=o=>u.value.isDisable=o)},{default:a(()=>[e(i,{label:0},{default:a(()=>[pe]),_:1}),e(i,{label:1},{default:a(()=>[_e]),_:1})]),_:1},8,["modelValue"])]),_:1})])):V("",!0)]),_:1},8,["model"])])]),_:1}),e(P,null,{default:a(()=>[e(x,{type:"primary",size:"small",onClick:g},{default:a(()=>[ve]),_:1})]),_:1})])}}});export{Be as default};