import{H as b,Z as w,I as C,J as v,w as A,K as k,L as y}from"./element-plus.374f5afd.js";import{_ as D,s as x}from"./edit.vue_vue_type_script_setup_true_lang.3eceaceb.js";import{d as L,s as T,a0 as R,ag as V,o as a,c as N,V as t,M as e,O as d,L as i,T as l}from"./@vue.cab01781.js";import"./@vueuse.724ed0af.js";import"./@element-plus.92b4185f.js";import"./lodash-es.29c53eac.js";import"./dayjs.66926594.js";import"./axios.2d915936.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.194b16de.js";import"./lodash.b68d77aa.js";import"./vue-router.5046cc50.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.a8f9466d.js";import"./color.903ca10f.js";import"./clone.9d64bb7a.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.a96d99f2.js";import"./vue-clipboard3.91d4fd5f.js";import"./clipboard.c0a70c0c.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";import"./index.b3f0a6a3.js";const S={class:"storage"},$=l("\u5F00\u542F"),z=l("\u5173\u95ED"),H=l(" \u8BBE\u7F6E "),gt=L({__name:"index",setup(I){const m=T(),o=R({loading:!1,lists:[]}),c=async()=>{try{o.loading=!0,o.lists=await x(),o.loading=!1}catch{o.loading=!1}},F=u=>{var r;(r=m.value)==null||r.open(u)};return c(),(u,r)=>{const f=b,p=C,s=v,_=w,B=A,E=k,g=V("perms"),h=y;return a(),N("div",S,[t(p,{class:"!border-none",shadow:"never"},{default:e(()=>[t(f,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A1.\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\u540E\uFF0C\u9700\u8981\u5C06\u8D44\u6E90\u6587\u4EF6\u4F20\u8F93\u81F3\u65B0\u7684\u5B58\u50A8\u7AEF\uFF1B2.\u8BF7\u52FF\u968F\u610F\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\uFF0C\u53EF\u80FD\u5BFC\u81F4\u56FE\u7247\u65E0\u6CD5\u67E5\u770B",closable:!1,"show-icon":""})]),_:1}),d((a(),i(p,{class:"!border-none mt-4",shadow:"never"},{default:e(()=>[t(E,{size:"large",data:o.lists},{default:e(()=>[t(s,{label:"\u50A8\u5B58\u65B9\u5F0F",prop:"name","min-width":"120"}),t(s,{label:"\u50A8\u5B58\u4F4D\u7F6E",prop:"describe","min-width":"160"}),t(s,{label:"\u72B6\u6001","min-width":"80"},{default:e(({row:n})=>[n.status==1?(a(),i(_,{key:0},{default:e(()=>[$]),_:1})):(a(),i(_,{key:1,type:"danger"},{default:e(()=>[z]),_:1}))]),_:1}),t(s,{label:"\u64CD\u4F5C","min-width":"80",fixed:"right"},{default:e(({row:n})=>[d((a(),i(B,{type:"primary",link:"",onClick:J=>F(n.alias)},{default:e(()=>[H]),_:2},1032,["onClick"])),[[g,["setting:storage:edit"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[h,o.loading]]),t(D,{ref_key:"editRef",ref:m,onSuccess:c},null,512)])}}});export{gt as default};
