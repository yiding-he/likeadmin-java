import{w as c}from"./element-plus.374f5afd.js";import{a as l}from"./vue-router.5046cc50.js";import{d as u,r as d,G as _,o as a,c as f,a as r,U as i,L as v,M as B,T as g,u as h,S as y}from"./@vue.cab01781.js";import{d as E}from"./index.194b16de.js";import"./@vueuse.724ed0af.js";import"./@element-plus.92b4185f.js";import"./lodash-es.29c53eac.js";import"./dayjs.66926594.js";import"./axios.2d915936.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.b68d77aa.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.a8f9466d.js";import"./color.903ca10f.js";import"./clone.9d64bb7a.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.a96d99f2.js";import"./vue-clipboard3.91d4fd5f.js";import"./clipboard.c0a70c0c.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";const x={class:"error"},k={class:"error-code"},w={class:"lg lighter mt-7 mb-7"},C=u({__name:"error",props:{code:String,title:String,showBtn:{type:Boolean,default:!0}},setup(t){const n=t;let o=null;const e=d(5),s=l();return n.showBtn&&(o=setInterval(()=>{e.value===0?(clearInterval(o),s.go(-1)):e.value--},1e3)),_(()=>{o&&clearInterval(o)}),(D,m)=>{const p=c;return a(),f("div",x,[r("div",null,[r("div",k,i(t.code),1),r("div",w,i(t.title),1),t.showBtn?(a(),v(p,{key:0,type:"primary",onClick:m[0]||(m[0]=I=>h(s).go(-1))},{default:B(()=>[g(i(e.value)+" \u79D2\u540E\u8FD4\u56DE\u4E0A\u4E00\u9875 ",1)]),_:1})):y("",!0)])])}}});const it=E(C,[["__scopeId","data-v-e6ff9c50"]]);export{it as default};
