import{p as O,q as y,s as A,v as C,w as B,u as M,x as z}from"./entry.9609d14e.js";const H=()=>null;function j(...s){var m,v,_,D,g,w,x,P,b;const l=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(l);let[t,f,e={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof f!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=(m=e.server)!=null?m:!0,e.default=(v=e.default)!=null?v:H,e.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),e.lazy=(D=(_=e.lazy)!=null?_:e.defer)!=null?D:!1,e.initialCache=(g=e.initialCache)!=null?g:!0,e.immediate=(w=e.immediate)!=null?w:!0;const a=O(),d=()=>(a.isHydrating||e.initialCache)&&a.payload.data[t]!==void 0;a._asyncData[t]||(a._asyncData[t]={data:y(d()?a.payload.data[t]:(P=(x=e.default)==null?void 0:x.call(e))!=null?P:null),pending:y(!d()),error:y((b=a.payload._errors[t])!=null?b:null)});const r={...a._asyncData[t]};r.refresh=r.execute=(i={})=>{if(a._asyncDataPromises[t]){if(i.dedupe===!1)return a._asyncDataPromises[t];a._asyncDataPromises[t].cancelled=!0}if(i._initial&&d())return a.payload.data[t];r.pending.value=!0;const o=new Promise((n,c)=>{try{n(f(a))}catch(u){c(u)}}).then(n=>{if(o.cancelled)return a._asyncDataPromises[t];e.transform&&(n=e.transform(n)),e.pick&&(n=E(n,e.pick)),r.data.value=n,r.error.value=null}).catch(n=>{var c,u;if(o.cancelled)return a._asyncDataPromises[t];r.error.value=n,r.data.value=M((u=(c=e.default)==null?void 0:c.call(e))!=null?u:null)}).finally(()=>{o.cancelled||(r.pending.value=!1,a.payload.data[t]=r.data.value,r.error.value&&(a.payload._errors[t]=!0),delete a._asyncDataPromises[t])});return a._asyncDataPromises[t]=o,a._asyncDataPromises[t]};const p=()=>r.refresh({_initial:!0}),k=e.server!==!1&&a.payload.serverRendered;{const i=z();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const n=i._nuxtOnBeforeMountCbs;i&&(A(()=>{n.forEach(c=>{c()}),n.splice(0,n.length)}),C(()=>n.splice(0,n.length)))}k&&a.isHydrating&&t in a.payload.data?r.pending.value=!1:i&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?i._nuxtOnBeforeMountCbs.push(p):e.immediate&&p(),e.watch&&B(e.watch,()=>r.refresh());const o=a.hook("app:data:refresh",n=>{if(!n||n.includes(t))return r.refresh()});i&&C(o)}const h=Promise.resolve(a._asyncDataPromises[t]).then(()=>r);return Object.assign(h,r),h}function I(s){const l=s?Array.isArray(s)?s:[s]:void 0;return O().callHook("app:data:refresh",l)}function E(s,l){const t={};for(const f of l)t[f]=s[f];return t}export{I as r,j as u};
