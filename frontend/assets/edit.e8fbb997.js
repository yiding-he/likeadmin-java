var E=Object.defineProperty,$=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var B=(l,o,n)=>o in l?E(l,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[o]=n,y=(l,o)=>{for(var n in o||(o={}))K.call(o,n)&&B(l,n,o[n]);if(V)for(var n of V(o))T.call(o,n)&&B(l,n,o[n]);return l},w=(l,o)=>$(l,A(o));import{_ as z,u as I,n as q,q as N,r as S,s as U,t as M}from"./index.2df3607c.js";import{F as j}from"./index.89b16031.js";import{d as P,v as C,t as x,V as G,y as H,r,a as J,i as t,w as u,o as L,f as O,j as F}from"./vendor.bbaa8c82.js";const Q=P({components:{FooterBtns:j},setup(){const{route:l,router:o}=I(),n=C(null),f=C(null),d=C(null),{formData:a,menu:c}=x(G({formData:{name:"",remark:"",menus:[],isDisable:0,sort:"",menuIds:""},menu:{permissionsTree:[],allAuthKeys:[]}})),h={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",trigger:["blur"]}]},v=()=>{var e;(e=n.value)==null||e.validate(m=>{!m||(d.value?p():D())})},i=()=>{q().then(e=>{c.value.permissionsTree=e,console.log("res",e);const m=N(e,[],"children");c.value.allAuthKeys=m.map(_=>_.id)}).catch(e=>{console.log("err",e)})},D=()=>{S(y({},a.value)).then(e=>{console.log("res",e),setTimeout(()=>{o.back()},500)}).catch(e=>{console.log("err",e)})},p=()=>{a.value.menus.length==0?a.value.menuIds="":a.value.menuIds=a.value.menus.join(","),U(w(y({},a.value),{id:d.value})).then(e=>{console.log("res",e),setTimeout(()=>{o.back()},500)}).catch(e=>{console.log("err",e)})},g=()=>{M({id:d.value}).then(e=>{var m;console.log("res",e),a.value=e,(m=f.value)==null||m.setCheckedKeys(e.menus)}).catch(e=>{console.log("err",e)})},k=(e,m)=>{if(console.log(e),!e.id)return;const _=a.value.menus.findIndex(R=>R==e.id);if(m){_==-1&&a.value.menus.push(e.id);return}_!=-1&&a.value.menus.splice(_,1)},b=()=>{var e;(e=f.value)==null||e.setCheckedKeys(c.value.allAuthKeys)},s=()=>{var e;(e=f.value)==null||e.setCheckedKeys([])};return H(()=>{const e=l.query;e.id&&(d.value=e.id*1,g()),i()}),{id:d,formData:a,menu:c,formRef:n,treeRef:f,rules:h,getMenu:i,roleAdd:D,roleEdit:p,roleDetail:g,onSubmit:v,handlePermissionsCheckChange:k,close:s,allSelect:b}}}),W={class:"role-edit"},X={class:"flex",style:{"margin-top":"3px"}},Y=F(" \u5168\u9009 "),Z=F(" \u5168\u4E0D\u9009 "),ee=F("\u4FDD\u5B58");function oe(l,o,n,f,d,a){const c=r("el-page-header"),h=r("el-card"),v=r("el-input"),i=r("el-form-item"),D=r("el-switch"),p=r("el-button"),g=r("el-tree"),k=r("el-form"),b=r("footer-btns");return L(),J("div",W,[t(h,{shadow:"never"},{default:u(()=>[t(c,{content:l.id?"\u7F16\u8F91\u89D2\u8272":"\u65B0\u589E\u89D2\u8272",onBack:o[0]||(o[0]=s=>l.$router.back())},null,8,["content"])]),_:1}),t(h,{shadow:"never",class:"m-t-15"},{default:u(()=>[t(k,{ref:"formRef",rules:l.rules,class:"ls-form",model:l.formData,"label-width":"150px",size:"small"},{default:u(()=>[t(i,{label:"\u540D\u79F0",prop:"name"},{default:u(()=>[t(v,{modelValue:l.formData.name,"onUpdate:modelValue":o[1]||(o[1]=s=>l.formData.name=s),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),t(i,{label:"\u5907\u6CE8",prop:"remark"},{default:u(()=>[t(v,{modelValue:l.formData.remark,"onUpdate:modelValue":o[2]||(o[2]=s=>l.formData.remark=s),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",type:"textarea",autosize:{minRows:4,maxRows:6}},null,8,["modelValue"])]),_:1}),t(i,{label:"\u6392\u5E8F"},{default:u(()=>[t(v,{modelValue:l.formData.sort,"onUpdate:modelValue":o[3]||(o[3]=s=>l.formData.sort=s),placeholder:"\u8BF7\u8F93\u5165",type:"number"},null,8,["modelValue"])]),_:1}),t(i,{label:"\u72B6\u6001"},{default:u(()=>[t(D,{modelValue:l.formData.isDisable,"onUpdate:modelValue":o[4]||(o[4]=s=>l.formData.isDisable=s),"active-value":0,"inactive-value":1},null,8,["modelValue"])]),_:1}),t(i,{label:"\u6743\u9650",prop:"auth_keys"},{default:u(()=>[O("div",X,[t(p,{type:"text",size:"mini",onClick:o[5]||(o[5]=s=>l.allSelect())},{default:u(()=>[Y]),_:1}),t(p,{type:"text",size:"mini",onClick:o[6]||(o[6]=s=>l.close())},{default:u(()=>[Z]),_:1})]),t(g,{ref:"treeRef",data:l.menu.permissionsTree,"node-key":"id","default-expand-all":"",icon:"ArrowRight",props:{children:"children",label:"menuName"},"empty-text":"","show-checkbox":"",onCheckChange:l.handlePermissionsCheckChange},null,8,["data","onCheckChange"])]),_:1})]),_:1},8,["rules","model"])]),_:1}),t(b,null,{default:u(()=>[t(p,{type:"primary",size:"small",onClick:l.onSubmit},{default:u(()=>[ee]),_:1},8,["onClick"])]),_:1})])}var se=z(Q,[["render",oe],["__scopeId","data-v-47155601"]]);export{se as default};