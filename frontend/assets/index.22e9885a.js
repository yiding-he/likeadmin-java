import{Z as j,B as q,C as z,Q as J,R as Q,w as Z,D as G,I as H,J as W,K as X,L as Y}from"./element-plus.374f5afd.js";import{f as T,b as ee}from"./index.194b16de.js";import{d as te,s as b,r as w,a0 as oe,j as ae,n as F,ag as le,o as r,c as se,V as e,M as t,aa as ne,a as ie,O as f,L as m,T as n,U as ue,S as $}from"./@vue.cab01781.js";import{_ as re}from"./edit.vue_vue_type_script_setup_true_lang.24a80c8d.js";import{d as pe,e as de}from"./department.f28d51fe.js";import"./@vueuse.724ed0af.js";import"./@element-plus.92b4185f.js";import"./lodash-es.29c53eac.js";import"./dayjs.66926594.js";import"./axios.2d915936.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.b68d77aa.js";import"./vue-router.5046cc50.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.a8f9466d.js";import"./color.903ca10f.js";import"./clone.9d64bb7a.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.a96d99f2.js";import"./vue-clipboard3.91d4fd5f.js";import"./clipboard.c0a70c0c.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";import"./index.b3f0a6a3.js";import"./useDictOptions.399d9597.js";const me={class:"dept-lists"},ce=n("\u67E5\u8BE2"),_e=n("\u91CD\u7F6E"),fe=n(" \u65B0\u589E "),ve=n(" \u5C55\u5F00/\u6298\u53E0 "),Ee=n(" \u65B0\u589E "),ye=n(" \u7F16\u8F91 "),ke=n(" \u5220\u9664 "),tt=te({__name:"index",setup(Ce){const g=b(),c=b(),B=b();let y=!1;const k=w(!1),C=w([]),p=oe({isStop:"",name:""}),v=w(!1),d=async()=>{k.value=!0,C.value=await pe(p),k.value=!1},L=()=>{var a;(a=B.value)==null||a.resetFields(),d()},x=async a=>{var o,s;v.value=!0,await F(),a&&((o=c.value)==null||o.setFormData({pid:a})),(s=c.value)==null||s.open("add")},K=async a=>{var o,s;v.value=!0,await F(),(o=c.value)==null||o.open("edit"),(s=c.value)==null||s.getDetail(a)},N=async a=>{await T.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await de({id:a}),T.msgSuccess("\u5220\u9664\u6210\u529F"),d()},D=()=>{y=!y,S(C.value,y)},S=(a,o=!0)=>{var s;for(const i in a)(s=g.value)==null||s.toggleRowExpansion(a[i],o),a[i].children&&S(a[i].children,o)};return ae(async()=>{await d(),F(()=>{D()})}),(a,o)=>{const s=q,i=z,h=J,I=Q,u=Z,P=G,V=H,U=ee,_=W,A=j,M=X,E=le("perms"),O=Y;return r(),se("div",me,[e(V,{class:"!border-none",shadow:"never"},{default:t(()=>[e(P,{ref_key:"formRef",ref:B,class:"mb-[-16px]",model:p,inline:!0},{default:t(()=>[e(i,{label:"\u90E8\u95E8\u540D\u79F0",prop:"name"},{default:t(()=>[e(s,{class:"w-56",modelValue:p.name,"onUpdate:modelValue":o[0]||(o[0]=l=>p.name=l),clearable:"",onKeyup:ne(d,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(i,{label:"\u90E8\u95E8\u72B6\u6001",prop:"isStop"},{default:t(()=>[e(I,{class:"w-56",modelValue:p.isStop,"onUpdate:modelValue":o[1]||(o[1]=l=>p.isStop=l)},{default:t(()=>[e(h,{label:"\u5168\u90E8",value:""}),e(h,{label:"\u6B63\u5E38",value:"0"}),e(h,{label:"\u505C\u7528",value:"1"})]),_:1},8,["modelValue"])]),_:1}),e(i,null,{default:t(()=>[e(u,{type:"primary",onClick:d},{default:t(()=>[ce]),_:1}),e(u,{onClick:L},{default:t(()=>[_e]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(V,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[ie("div",null,[f((r(),m(u,{type:"primary",onClick:o[2]||(o[2]=l=>x())},{icon:t(()=>[e(U,{name:"el-icon-Plus"})]),default:t(()=>[fe]),_:1})),[[E,["system:dept:add"]]]),e(u,{onClick:D},{default:t(()=>[ve]),_:1})]),f((r(),m(M,{ref_key:"tableRef",ref:g,class:"mt-4",size:"large",data:C.value,"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:t(()=>[e(_,{label:"\u90E8\u95E8\u540D\u79F0",prop:"name","min-width":"150","show-overflow-tooltip":""}),e(_,{label:"\u90E8\u95E8\u72B6\u6001",prop:"isStop","min-width":"100"},{default:t(({row:l})=>[e(A,{class:"ml-2",type:l.isStop?"danger":""},{default:t(()=>[n(ue(l.isStop?"\u505C\u7528":"\u6B63\u5E38"),1)]),_:2},1032,["type"])]),_:1}),e(_,{label:"\u6392\u5E8F",prop:"sort","min-width":"100"}),e(_,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime","min-width":"180"}),e(_,{label:"\u64CD\u4F5C",width:"160",fixed:"right"},{default:t(({row:l})=>[f((r(),m(u,{type:"primary",link:"",onClick:R=>x(l.id)},{default:t(()=>[Ee]),_:2},1032,["onClick"])),[[E,["system:dept:add"]]]),f((r(),m(u,{type:"primary",link:"",onClick:R=>K(l)},{default:t(()=>[ye]),_:2},1032,["onClick"])),[[E,["system:dept:edit"]]]),l.pid!==0?f((r(),m(u,{key:0,type:"danger",link:"",onClick:R=>N(l.id)},{default:t(()=>[ke]),_:2},1032,["onClick"])),[[E,["system:dept:del"]]]):$("",!0)]),_:1})]),_:1},8,["data"])),[[O,k.value]])]),_:1}),v.value?(r(),m(re,{key:0,ref_key:"editRef",ref:c,onSuccess:d,onClose:o[3]||(o[3]=l=>v.value=!1)},null,512)):$("",!0)])}}});export{tt as default};
