var q=Object.defineProperty,$=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var b=(e,u,t)=>u in e?q(e,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[u]=t,V=(e,u)=>{for(var t in u||(u={}))M.call(u,t)&&b(e,t,u[t]);if(g)for(var t of g(u))R.call(u,t)&&b(e,t,u[t]);return e},w=(e,u)=>$(e,L(u));import{m as S}from"./index.e55d5ae6.js";import{F as j}from"./index.89b16031.js";import{_ as N,u as z,a as T,b as W,c as X,d as G}from"./index.2df3607c.js";import{d as H,v as _,c as I,t as J,V as K,y as O,r as s,W as P,a as A,i as a,w as o,X as Q,b as C,o as F,F as Y,h as Z,f as x,j as ee}from"./vendor.bbaa8c82.js";import"./index.97464251.js";import"./index.8b94e341.js";const ue=H({components:{MaterialSelect:S,FooterBtns:j},setup(){const e=_(null),{router:u,route:t}=z(),i=I(()=>{var r;return(r=t.query)==null?void 0:r.id}),f=_(!1),c=_([]),{formData:m,rules:d}=J(K({formData:{username:"",nickname:"",role:"",avatar:"",password:"",password_confirm:"",isDisable:0,isMultipoint:0},rules:{username:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:["blur"]}],nickname:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}],role:[{required:!0,message:"\u8BF7\u9009\u62E9\u89D2\u8272",trigger:["blur"]}],password:[],password_confirm:[]}})),p=()=>{T({page_type:1}).then(r=>{c.value=r.lists})},n=()=>{if(!i.value){d.value.password=[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:["blur"]}],d.value.password_confirm=[{required:!0,message:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",trigger:["blur"]}];return}f.value=!0,W({id:i.value}).then(r=>{m.value=r}).finally(()=>{f.value=!1})},v=()=>{var r;(r=e.value)==null||r.validate(D=>{if(!D)return;(i.value?X(w(V({},m.value),{id:i.value})):G(m.value)).then(()=>{setTimeout(()=>u.go(-1),500)})})};return O(()=>{n(),p()}),{id:i,formRefs:e,loading:f,formData:m,rules:d,roleList:c,onSubmit:v}}}),ae={class:"admin"},le=x("div",{class:"muted"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100px\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),oe=ee("\u4FDD\u5B58");function te(e,u,t,i,f,c){const m=s("el-page-header"),d=s("el-card"),p=s("el-input"),n=s("el-form-item"),v=s("material-select"),r=s("el-option"),D=s("el-select"),B=s("el-switch"),k=s("el-form"),E=s("el-button"),U=s("footer-btns"),y=P("loading");return F(),A("div",ae,[a(d,{shadow:"never"},{default:o(()=>[a(m,{content:e.id?"\u7F16\u8F91\u7BA1\u7406\u5458":"\u65B0\u589E\u7BA1\u7406\u5458",onBack:u[0]||(u[0]=l=>e.$router.back())},null,8,["content"])]),_:1}),Q((F(),C(d,{shadow:"never",class:"m-t-15"},{default:o(()=>[a(k,{ref:"formRefs",rules:e.rules,class:"ls-form",model:e.formData,"label-width":"150px",size:"small"},{default:o(()=>[a(n,{label:"\u8D26\u53F7\uFF1A",prop:"username"},{default:o(()=>[a(p,{modelValue:e.formData.username,"onUpdate:modelValue":u[1]||(u[1]=l=>e.formData.username=l),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7"},null,8,["modelValue"])]),_:1}),a(n,{label:"\u5934\u50CF\uFF1A"},{default:o(()=>[a(v,{modelValue:e.formData.avatar,"onUpdate:modelValue":u[2]||(u[2]=l=>e.formData.avatar=l),limit:1},null,8,["modelValue"]),le]),_:1}),a(n,{label:"\u540D\u79F0\uFF1A",prop:"nickname"},{default:o(()=>[a(p,{modelValue:e.formData.nickname,"onUpdate:modelValue":u[3]||(u[3]=l=>e.formData.nickname=l),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),a(n,{label:"\u89D2\u8272\uFF1A",prop:"role"},{default:o(()=>[a(D,{modelValue:e.formData.role,"onUpdate:modelValue":u[4]||(u[4]=l=>e.formData.role=l),placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272"},{default:o(()=>[(F(!0),A(Y,null,Z(e.roleList,(l,h)=>(F(),C(r,{key:h,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(n,{label:"\u5BC6\u7801\uFF1A",prop:"password"},{default:o(()=>[a(p,{modelValue:e.formData.password,"onUpdate:modelValue":u[5]||(u[5]=l=>e.formData.password=l),"show-password":"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),a(n,{label:"\u786E\u8BA4\u5BC6\u7801\uFF1A",prop:"password_confirm"},{default:o(()=>[a(p,{modelValue:e.formData.password_confirm,"onUpdate:modelValue":u[6]||(u[6]=l=>e.formData.password_confirm=l),"show-password":"",placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),a(n,{label:"\u7BA1\u7406\u5458\u72B6\u6001"},{default:o(()=>[a(B,{modelValue:e.formData.isDisable,"onUpdate:modelValue":u[7]||(u[7]=l=>e.formData.isDisable=l),"active-value":0,"inactive-value":1},null,8,["modelValue"])]),_:1}),a(n,{label:"\u652F\u6301\u591A\u5904\u767B\u5F55"},{default:o(()=>[a(B,{modelValue:e.formData.isMultipoint,"onUpdate:modelValue":u[8]||(u[8]=l=>e.formData.isMultipoint=l),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1})),[[y,e.loading]]),a(U,null,{default:o(()=>[a(E,{type:"primary",size:"small",onClick:e.onSubmit},{default:o(()=>[oe]),_:1},8,["onClick"])]),_:1})])}var fe=N(ue,[["render",te]]);export{fe as default};