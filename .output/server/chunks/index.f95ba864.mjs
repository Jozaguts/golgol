import { _ as _export_sfc, l as _sfc_main$2 } from './server.mjs';
import { resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import 'ohmyfetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import 'h3';
import 'defu';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'ohash';
import 'cookie-es';
import 'lodash-es';
import '@formkit/auto-animate';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'fs';
import 'pathe';
import 'url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'html-tags';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_table_component = _sfc_main$2;
  _push(ssrRenderComponent(_component_v_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h1 class="font-weight-light text-white"${_scopeId3}> Partidos del d\xEDa <small class="text-caption text-primary"${_scopeId3}>${ssrInterpolate(new Date().toLocaleDateString("es", {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric"
                    }))}</small></h1>`);
                  } else {
                    return [
                      createVNode("h1", { class: "font-weight-light text-white" }, [
                        createTextVNode(" Partidos del d\xEDa "),
                        createVNode("small", { class: "text-caption text-primary" }, toDisplayString(new Date().toLocaleDateString("es", {
                          weekday: "long",
                          year: "numeric",
                          month: "short",
                          day: "numeric"
                        })), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, null, {
                  default: withCtx(() => [
                    createVNode("h1", { class: "font-weight-light text-white" }, [
                      createTextVNode(" Partidos del d\xEDa "),
                      createVNode("small", { class: "text-caption text-primary" }, toDisplayString(new Date().toLocaleDateString("es", {
                        weekday: "long",
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                      })), 1)
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_table_component, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_table_component)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, null, {
                  default: withCtx(() => [
                    createVNode(_component_table_component)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_row, null, {
            default: withCtx(() => [
              createVNode(_component_v_col, null, {
                default: withCtx(() => [
                  createVNode("h1", { class: "font-weight-light text-white" }, [
                    createTextVNode(" Partidos del d\xEDa "),
                    createVNode("small", { class: "text-caption text-primary" }, toDisplayString(new Date().toLocaleDateString("es", {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric"
                    })), 1)
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_row, null, {
            default: withCtx(() => [
              createVNode(_component_v_col, null, {
                default: withCtx(() => [
                  createVNode(_component_table_component)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.f95ba864.mjs.map
