import{_ as t,a as e,i as r}from"./server.mjs";import{mergeProps as i,withCtx as o,createTextVNode as s,toDisplayString as a,useSSRContext as m}from"vue";import{ssrRenderAttrs as p,ssrInterpolate as n,ssrRenderComponent as l}from"vue/server-renderer";import"ohmyfetch";import"hookable";import"unctx";import"destr";import"ufo";import"h3";import"defu";import"vue-router";import"@iconify/vue/dist/offline";import"@iconify/vue";import"ohash";import"cookie-es";import"lodash-es";import"@formkit/auto-animate";import"./node-server.mjs";import"node-fetch-native/polyfill";import"http";import"https";import"unenv/runtime/fetch/index";import"scule";import"unstorage";import"unstorage/drivers/overlay";import"unstorage/drivers/memory";import"radix3";import"fs";import"pathe";import"url";import"unified";import"mdast-util-to-string";import"micromark/lib/preprocess.js";import"micromark/lib/postprocess.js";import"unist-util-stringify-position";import"micromark-util-character";import"micromark-util-chunked";import"micromark-util-resolve-all";import"remark-emoji";import"rehype-slug";import"remark-squeeze-paragraphs";import"rehype-external-links";import"remark-gfm";import"rehype-sort-attribute-values";import"rehype-sort-attributes";import"rehype-raw";import"remark-mdc";import"remark-parse";import"remark-rehype";import"mdast-util-to-hast";import"detab";import"unist-builder";import"mdurl";import"slugify";import"unist-util-position";import"html-tags";const d={__name:"error-404",__ssrInlineRender:!0,props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const m=t;return e({title:`${m.statusCode} - ${m.statusMessage} | ${m.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(e,m,d,u)=>{const f=r;m(`<div${p(i({class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},u))} data-v-07b7f6e4><div class="fixed left-0 right-0 spotlight z-10" data-v-07b7f6e4></div><div class="max-w-520px text-center z-20" data-v-07b7f6e4><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-07b7f6e4>${n(t.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-07b7f6e4>${n(t.description)}</p><div class="w-full flex items-center justify-center" data-v-07b7f6e4>`),m(l(f,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:o(((e,r,i,o)=>{if(!r)return[s(a(t.backHome),1)];r(`${n(t.backHome)}`)})),_:1},d)),m("</div></div></div>")}}},u=d.setup;d.setup=(t,e)=>{const r=m();return(r.modules||(r.modules=new Set)).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"),u?u(t,e):void 0};const f=t(d,[["__scopeId","data-v-07b7f6e4"]]);export{f as default};
//# sourceMappingURL=error-404.0c496fe3.mjs.map
