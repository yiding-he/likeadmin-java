import{_ as x}from"./index.8ed21860.js";import{G as y,u as w}from"./element-plus.f93fd622.js";import B from"./menu.b5bc16bc.js";import V from"./preview.e32fae3c.js";import{_ as E}from"./attr-setting.vue_vue_type_script_setup_true_lang.1fae1728.js";import{w as b}from"./index.c5fc6e86.js";import{s as h,g as C}from"./decoration.2abda6d2.js";import{f as F,d as N}from"./index.ab5c8d8d.js";import{d as P,a0 as S,r as d,e as c,w as T,o as k,c as A,V as r,M as n,a as I,u as _,T as M}from"./@vue.cab01781.js";import"./@vueuse.724ed0af.js";import"./@element-plus.92b4185f.js";import"./lodash-es.29c53eac.js";import"./dayjs.66926594.js";import"./axios.2d915936.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.b68d77aa.js";import"./vue-router.5046cc50.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.a8f9466d.js";import"./color.903ca10f.js";import"./clone.9d64bb7a.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.a96d99f2.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";import"./attr.vue_vue_type_script_setup_true_lang.1b6e0b72.js";import"./index.e14f68ca.js";import"./picker.vue_vue_type_script_setup_true_lang.51278156.js";import"./index.ea69f3d7.js";import"./picker.29f42532.js";import"./index.be7557e1.js";import"./usePaging.226fac59.js";import"./index.vue_vue_type_script_setup_true_lang.6f61ba2e.js";import"./vue3-video-play.05975c53.js";import"./vuedraggable.a5db575d.js";import"./vue.de4be77f.js";import"./sortablejs.cd7e2c7e.js";import"./content.vue_vue_type_script_setup_true_lang.ef2a15e8.js";import"./attr.vue_vue_type_script_setup_true_lang.acb50d99.js";import"./content.be9a8727.js";import"./attr.vue_vue_type_script_setup_true_lang.741d6988.js";import"./add-nav.vue_vue_type_script_setup_true_lang.1cb09cc7.js";import"./content.0444bd3e.js";import"./attr.vue_vue_type_script_setup_true_lang.b011bc50.js";import"./content.f81b935d.js";import"./attr.vue_vue_type_script_setup_true_lang.0b87e513.js";import"./content.b1a283df.js";import"./attr.vue_vue_type_script_setup_true_lang.1a7dc398.js";import"./content.vue_vue_type_script_setup_true_lang.d03661f0.js";import"./attr.vue_vue_type_script_setup_true_lang.0583d8bc.js";import"./content.f0e3062b.js";const J={class:"decoration-pages min-w-[1100px]"},O={class:"flex h-full items-start"},U=M("\u4FDD\u5B58"),W=P({__name:"index",setup(G){const m=t=>t.map(e=>{var p;return((p=b[e])==null?void 0:p.options())||{}}),o=S({[1]:{id:1,pageType:1,name:"\u5546\u57CE\u9996\u9875",pageData:m(["search","banner","nav"])},[2]:{id:2,pageType:2,name:"\u4E2A\u4EBA\u4E2D\u5FC3",pageData:m(["user-info","my-service","user-banner"])},[3]:{id:3,pageType:3,name:"\u5BA2\u670D\u8BBE\u7F6E",pageData:m(["customer-service"])}}),a=d("1"),i=d(-1),u=c(()=>{var t,e;return(e=(t=o[a.value])==null?void 0:t.pageData)!=null?e:[]}),g=c(()=>{var t,e;return(e=(t=o[a.value])==null?void 0:t.pageData[i.value])!=null?e:""}),l=async()=>{const t=await C({id:a.value});o[String(t.id)].pageData=JSON.parse(t.pageData)},f=async()=>{await h({...o[a.value],pageData:JSON.stringify(o[a.value].pageData)}),l(),F.msgSuccess("\u4FDD\u5B58\u6210\u529F")};return T(a,()=>{i.value=u.value.findIndex(t=>!t.disabled),l()},{immediate:!0}),(t,e)=>{const p=y,v=w,D=x;return k(),A("div",J,[r(p,{shadow:"never",class:"!border-none flex-1","body-style":{height:"100%"}},{default:n(()=>[I("div",O,[r(B,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=s=>a.value=s),menus:o},null,8,["modelValue","menus"]),r(V,{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=s=>i.value=s),pageData:_(u)},null,8,["modelValue","pageData"]),r(E,{class:"flex-1",widget:_(g)},null,8,["widget"])])]),_:1}),r(D,{class:"mt-4",fixed:!1},{default:n(()=>[r(v,{type:"primary",onClick:f},{default:n(()=>[U]),_:1})]),_:1})])}}});const Lt=N(W,[["__scopeId","data-v-fa3a005f"]]);export{Lt as default};