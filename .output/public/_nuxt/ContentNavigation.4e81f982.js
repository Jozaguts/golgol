import{_ as r,f as d,q as g,p as P,C as D,D as S,E as y,F as E,j as s,G as R,k as T,e as V,d as i,t as b,H as B,h as N,I as j}from"./entry.0d6e9c7e.js";import{u as k}from"./asyncData.d02cd9eb.js";import{h as O,j as C}from"./query.e2aaad45.js";import{w as x,s as $,u as w,a as M}from"./utils.9ce32918.js";import"./ContentDoc.a89507f4.js";import"./ContentList.1b68bda2.js";import"./ContentQuery.625c0400.js";import"./ContentRenderer.7190e7cd.js";import"./ContentRendererMarkdown.8771533a.js";import"./ContentSlot.20245bca.js";import"./DocumentDrivenEmpty.fa533f2d.js";import"./DocumentDrivenNotFound.332f0aef.js";import"./Markdown.9946b1f6.js";import"./ProseCode.09255378.js";import"./_commonjsHelpers.f8a6f4fc.js";const z=async t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const n=x(e?`/navigation/${O(e)}.json`:"/navigation");if($())return(await r(()=>import("./client-db.cd377054.js"),["client-db.cd377054.js","entry.0d6e9c7e.js","entry.f82a1836.css","utils.9ce32918.js","query.e2aaad45.js","_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(a=>a.generateNavigation))(e||{});const o=await $fetch(n,{method:"GET",responseType:"json",params:{_params:C(e||{}),previewToken:w("previewToken").value}});if(typeof o=="string"&&o.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return o};const q=d({emits:{error(t){return!0}},setup(t,{slots:e,emit:n}){const o=g(null),u=P();return D(a=>{if(!u.isHydrating)return n("error",a),o.value=a,!1}),()=>{var a,l;return o.value?(a=e.error)==null?void 0:a.call(e,{error:o}):(l=e.default)==null?void 0:l.call(e)}}}),H=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),F=d({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e}){const n=g(!1);return S(()=>{n.value=!0}),o=>{var m;if(n.value)return(m=e.default)==null?void 0:m.call(e);const u=e.fallback||e.placeholder;if(u)return u();const a=o.fallback||o.placeholder||"",l=o.fallbackTag||o.placeholderTag||"span";return y(l,null,a)}}}),v=new WeakMap;function U(t){if(v.has(t))return v.get(t);const e={...t};return e.render?e.render=(n,...o)=>{var u;if(n.mounted$){const a=t.render(n,...o);return a.children===null||typeof a.children=="string"?E(a.type,a.props,a.children,a.patchFlag,a.dynamicProps,a.shapeFlag):s(a)}else return s("div",(u=n.$attrs)!=null?u:n._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(n,o)=>{var a;const u=g(!1);return S(()=>{u.value=!0}),Promise.resolve(((a=t.setup)==null?void 0:a.call(t,n,o))||{}).then(l=>typeof l!="function"?{...l,mounted$:u}:(...m)=>{if(u.value){const _=l(...m);return _.children===null||typeof _.children=="string"?E(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):s(_)}else return s("div",o.attrs)})},v.set(t,e),e}const G=Object.freeze(Object.defineProperty({__proto__:null,default:F,createClientOnly:U},Symbol.toStringTag,{value:"Module"})),W=d({name:"ServerPlaceholder",render(){return y("div")}}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),J=d({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const n=K({duration:t.duration,throttle:t.throttle}),o=P();return o.hook("page:start",n.start),o.hook("page:finish",n.finish),R(()=>n.clear),()=>s("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${n.progress.value}%`,height:`${t.height}px`,opacity:n.isLoading.value?1:0,background:t.color,backgroundSize:`${100/n.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function K(t){const e=g(0),n=g(!1),o=T(()=>1e4/t.duration);let u=null,a=null;function l(){_(),e.value=0,n.value=!0,t.throttle?a=setTimeout(c,t.throttle):c()}function m(){e.value=100,L()}function _(){clearInterval(u),clearTimeout(a),u=null,a=null}function A(I){e.value=Math.min(100,e.value+I)}function L(){_(),setTimeout(()=>{n.value=!1,setTimeout(()=>{e.value=0},400)},500)}function c(){u=setInterval(()=>{A(o.value)},100)}return{progress:e,isLoading:n,start:l,finish:m,clear:_}}const Q=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),X=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(n,o)=>(V(()=>t({...X(n),...o.attrs},o)),()=>{var u,a;return e?(a=(u=o.slots).default)==null?void 0:a.call(u):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},Z=d({name:"Script",inheritAttrs:!1,props:{...h,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u;const n={...t},o=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return o&&(n.children=o),{script:[n]}})}),tt=d({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u;const n={...t},o=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return o&&(n.children=o),{noscript:[n]}})}),et=d({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),rt=d({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),it=d({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var o,u,a;return{title:((a=(u=(o=e.default)==null?void 0:o.call(e))==null?void 0:u[0])==null?void 0:a.children)||null}})}),nt=d({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),ot=d({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u,a,l;const n={...t},o=(l=(a=(u=e.default)==null?void 0:u.call(e))==null?void 0:a[0])==null?void 0:l.children;return o&&(n.children=o),{style:[n]}})}),at=d({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,o;return(o=(n=e.slots).default)==null?void 0:o.call(n)}}),ut=d({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),lt=d({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),p=Object.freeze(Object.defineProperty({__proto__:null,Script:Z,NoScript:tt,Link:et,Base:rt,Title:it,Meta:nt,Style:ot,Head:at,Html:ut,Body:lt},Symbol.toStringTag,{value:"Module"}));i(()=>r(()=>import("./banner-component.ead3fa29.js"),["banner-component.ead3fa29.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./table-component.f569c03e.js"),["table-component.f569c03e.js","table-component.vue_vue_type_script_setup_true_lang.30db256b.js","Icon.dc5088b6.js","entry.0d6e9c7e.js","entry.f82a1836.css","asyncData.d02cd9eb.js","query.e2aaad45.js","utils.9ce32918.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentDoc.a89507f4.js"),["ContentDoc.a89507f4.js","entry.0d6e9c7e.js","entry.f82a1836.css","ContentRenderer.7190e7cd.js","ContentRendererMarkdown.8771533a.js","_commonjsHelpers.f8a6f4fc.js","ContentQuery.625c0400.js","asyncData.d02cd9eb.js","query.e2aaad45.js","utils.9ce32918.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentList.1b68bda2.js"),["ContentList.1b68bda2.js","ContentQuery.625c0400.js","entry.0d6e9c7e.js","entry.f82a1836.css","asyncData.d02cd9eb.js","query.e2aaad45.js","utils.9ce32918.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>dt),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentQuery.625c0400.js"),["ContentQuery.625c0400.js","entry.0d6e9c7e.js","entry.f82a1836.css","asyncData.d02cd9eb.js","query.e2aaad45.js","utils.9ce32918.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRenderer.7190e7cd.js"),["ContentRenderer.7190e7cd.js","ContentRendererMarkdown.8771533a.js","entry.0d6e9c7e.js","entry.f82a1836.css","_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRendererMarkdown.8771533a.js"),["ContentRendererMarkdown.8771533a.js","entry.0d6e9c7e.js","entry.f82a1836.css","_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentSlot.20245bca.js"),["ContentSlot.20245bca.js","utils.9ce32918.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenEmpty.fa533f2d.js"),["DocumentDrivenEmpty.fa533f2d.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenNotFound.332f0aef.js"),["DocumentDrivenNotFound.332f0aef.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Markdown.9946b1f6.js"),["Markdown.9946b1f6.js","ContentSlot.20245bca.js","utils.9ce32918.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseA.ca7385f0.js"),["ProseA.ca7385f0.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseBlockquote.1452a9b5.js"),["ProseBlockquote.1452a9b5.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCode.09255378.js"),["ProseCode.09255378.js","ProseCode.e63e49c6.css","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCodeInline.15811f45.js"),["ProseCodeInline.15811f45.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseEm.ab23ee76.js"),["ProseEm.ab23ee76.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH1.75832b32.js"),["ProseH1.75832b32.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH2.8a803492.js"),["ProseH2.8a803492.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH3.f4f298a7.js"),["ProseH3.f4f298a7.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH4.6939c451.js"),["ProseH4.6939c451.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH5.69956e21.js"),["ProseH5.69956e21.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH6.c34ad7cc.js"),["ProseH6.c34ad7cc.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseHr.7058bc2b.js"),["ProseHr.7058bc2b.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseImg.46d8c65e.js"),["ProseImg.46d8c65e.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseLi.f63b31d9.js"),["ProseLi.f63b31d9.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseOl.9ae23664.js"),["ProseOl.9ae23664.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseP.c5c8af22.js"),["ProseP.c5c8af22.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseStrong.909debb3.js"),["ProseStrong.909debb3.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTable.c8bd8cc0.js"),["ProseTable.c8bd8cc0.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTbody.2897eca4.js"),["ProseTbody.2897eca4.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTd.2f066b9b.js"),["ProseTd.2f066b9b.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTh.693d7ffa.js"),["ProseTh.693d7ffa.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseThead.590cede0.js"),["ProseThead.590cede0.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTr.2e601ff5.js"),["ProseTr.2e601ff5.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseUl.a8b57be7.js"),["ProseUl.a8b57be7.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./welcome.acdd424d.js"),["welcome.acdd424d.js","entry.0d6e9c7e.js","entry.f82a1836.css","asyncData.d02cd9eb.js","query.e2aaad45.js","utils.9ce32918.js","ContentDoc.a89507f4.js","ContentRenderer.7190e7cd.js","ContentRendererMarkdown.8771533a.js","_commonjsHelpers.f8a6f4fc.js","ContentQuery.625c0400.js","ContentList.1b68bda2.js","ContentSlot.20245bca.js","DocumentDrivenEmpty.fa533f2d.js","DocumentDrivenNotFound.332f0aef.js","Markdown.9946b1f6.js","ProseCode.09255378.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.0d6e9c7e.js").then(t=>t.a8),["entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>H),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>G),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.0d6e9c7e.js").then(t=>t.a6),["entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>Q),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Icon.dc5088b6.js"),["Icon.dc5088b6.js","entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.0d6e9c7e.js").then(t=>t.a7),["entry.0d6e9c7e.js","entry.f82a1836.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Script));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.NoScript));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Link));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Base));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Title));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Meta));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Style));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Head));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Html));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Body));const _t=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=b(t),n=T(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!n.value&&B("dd-navigation").value){const{navigation:u}=M();return{navigation:u}}const{data:o}=await k(`content-navigation-${O(n.value)}`,()=>z(n.value));return{navigation:o}},render(t){const e=N(),{navigation:n}=t,o=l=>s(j,{to:l._path},()=>l.title),u=(l,m)=>s("ul",m?{"data-level":m}:null,l.map(_=>_.children?s("li",null,[o(_),u(_.children,m+1)]):s("li",null,o(_)))),a=l=>u(l,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):a(n)}}),dt=Object.freeze(Object.defineProperty({__proto__:null,default:_t},Symbol.toStringTag,{value:"Module"}));export{_t as default};