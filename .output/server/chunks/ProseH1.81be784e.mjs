import{c as r}from"./server.mjs";import{defineComponent as t,mergeProps as o,unref as i,useSSRContext as e}from"vue";import{ssrRenderAttrs as m,ssrRenderAttr as p,ssrRenderSlot as s}from"vue/server-renderer";import"ohmyfetch";import"hookable";import"unctx";import"destr";import"ufo";import"h3";import"defu";import"vue-router";import"@iconify/vue/dist/offline";import"@iconify/vue";import"ohash";import"cookie-es";import"lodash-es";import"@formkit/auto-animate";import"./node-server.mjs";import"node-fetch-native/polyfill";import"http";import"https";import"unenv/runtime/fetch/index";import"scule";import"unstorage";import"unstorage/drivers/overlay";import"unstorage/drivers/memory";import"radix3";import"fs";import"pathe";import"url";import"unified";import"mdast-util-to-string";import"micromark/lib/preprocess.js";import"micromark/lib/postprocess.js";import"unist-util-stringify-position";import"micromark-util-character";import"micromark-util-chunked";import"micromark-util-resolve-all";import"remark-emoji";import"rehype-slug";import"remark-squeeze-paragraphs";import"rehype-external-links";import"remark-gfm";import"rehype-sort-attribute-values";import"rehype-sort-attributes";import"rehype-raw";import"remark-mdc";import"remark-parse";import"remark-rehype";import"mdast-util-to-hast";import"detab";import"unist-builder";import"mdurl";import"slugify";import"unist-util-position";import"html-tags";const u=t({__name:"ProseH1",__ssrInlineRender:!0,props:{id:null},setup(t){const{anchorLinks:e}=r().public.content,u=(null==e?void 0:e.depth)>=1&&!(null==e?void 0:e.exclude.includes(1));return(r,e,n,a)=>{e(`<h1${m(o({id:t.id},a))}>`),i(u)?(e(`<a${p("href",`#${t.id}`)}>`),s(r.$slots,"default",{},null,e,n),e("</a>")):s(r.$slots,"default",{},null,e,n),e("</h1>")}}}),n=u.setup;u.setup=(r,t)=>{const o=e();return(o.modules||(o.modules=new Set)).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue"),n?n(r,t):void 0};export{u as default};
//# sourceMappingURL=ProseH1.81be784e.mjs.map
