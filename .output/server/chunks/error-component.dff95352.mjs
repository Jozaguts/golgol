import{useSSRContext as e,defineAsyncComponent as r,unref as t,mergeProps as s}from"vue";import{ssrRenderComponent as n}from"vue/server-renderer";const o={__name:"nuxt-error-page",__ssrInlineRender:!0,props:{error:Object},setup(e){var o;const{error:a}=e;(a.stack||"").split("\n").splice(1).map((e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")}))).map((e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`)).join("\n");const u=Number(a.statusCode||500),d=404===u,l=null!=(o=a.statusMessage)?o:d?"Page Not Found":"Internal Server Error",p=a.message||a.toString(),i=r((()=>import("./error-404.0c496fe3.mjs").then((e=>e.default||e)))),c=r((()=>import("./error-500.a9579dfd.mjs").then((e=>e.default||e)))),m=d?i:c;return(e,r,o,a)=>{r(n(t(m),s({statusCode:t(u),statusMessage:t(l),description:t(p),stack:t(undefined)},a),null,o))}}},a=o.setup;o.setup=(r,t)=>{const s=e();return(s.modules||(s.modules=new Set)).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue"),a?a(r,t):void 0};const u=o;export{u as default};
//# sourceMappingURL=error-component.dff95352.mjs.map
