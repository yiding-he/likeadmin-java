import{M as C,N as w,y as B,A as y,t as x,B as R}from"./element-plus.62f8b726.js";import{a as g,c as h,b as I}from"./role.1b027fa2.js";import{P as N}from"./index.fd3131b6.js";import{f as U}from"./index.ccc78a7a.js";import{d as T,s as c,r as A,e as M,a0 as P,o as S,c as j,V as a,M as l,u as q,T as _}from"./@vue.cab01781.js";const G={class:"edit-popup"},z=_("\u6B63\u5E38"),H=_("\u505C\u7528"),Z=T({__name:"edit",emits:["success","close"],setup(J,{expose:f,emit:m}){const p=c(),r=c(),d=A("add"),F=M(()=>d.value=="edit"?"\u7F16\u8F91\u89D2\u8272":"\u65B0\u589E\u89D2\u8272"),o=P({id:"",name:"",remark:"",sort:0,isDisable:0,menus:[]}),b={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}]},V=async()=>{var e,t;await((e=p.value)==null?void 0:e.validate());const u={...o,menuIds:o.menus.join()};d.value=="edit"?await g(u):await h(u),(t=r.value)==null||t.close(),U.msgSuccess("\u64CD\u4F5C\u6210\u529F"),m("success")},D=()=>{m("close")};return f({open:(u="add")=>{var e;d.value=u,(e=r.value)==null||e.open()},setFormData:async u=>{const e=await I({id:u.id});for(const t in o)e[t]!=null&&e[t]!=null&&(o[t]=e[t])}}),(u,e)=>{const t=B,n=y,E=x,i=C,k=w,v=R;return S(),j("div",G,[a(N,{ref_key:"popupRef",ref:r,title:q(F),async:!0,width:"550px",onConfirm:V,onClose:D},{default:l(()=>[a(v,{class:"ls-form",ref_key:"formRef",ref:p,rules:b,model:o,"label-width":"60px"},{default:l(()=>[a(n,{label:"\u540D\u79F0",prop:"name"},{default:l(()=>[a(t,{class:"ls-input",modelValue:o.name,"onUpdate:modelValue":e[0]||(e[0]=s=>o.name=s),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),a(n,{label:"\u5907\u6CE8",prop:"remark"},{default:l(()=>[a(t,{modelValue:o.remark,"onUpdate:modelValue":e[1]||(e[1]=s=>o.remark=s),type:"textarea",rows:4,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1}),a(n,{label:"\u6392\u5E8F",prop:"sort"},{default:l(()=>[a(E,{modelValue:o.sort,"onUpdate:modelValue":e[2]||(e[2]=s=>o.sort=s)},null,8,["modelValue"])]),_:1}),a(n,{label:"\u72B6\u6001",prop:"sort"},{default:l(()=>[a(k,{modelValue:o.isDisable,"onUpdate:modelValue":e[3]||(e[3]=s=>o.isDisable=s)},{default:l(()=>[a(i,{label:0},{default:l(()=>[z]),_:1}),a(i,{label:1},{default:l(()=>[H]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{Z as _};
