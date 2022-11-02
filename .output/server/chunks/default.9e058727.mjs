import { _ as _export_sfc, m as __nuxt_component_0$1 } from './server.mjs';
import { resolveComponent, withCtx, createVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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
  const _component_v_app = resolveComponent("v-app");
  const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
  const _component_v_app_bar = resolveComponent("v-app-bar");
  const _component_v_app_bar_nav_icon = resolveComponent("v-app-bar-nav-icon");
  const _component_Icon = __nuxt_component_0$1;
  const _component_v_app_bar_title = resolveComponent("v-app-bar-title");
  const _component_v_spacer = resolveComponent("v-spacer");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_main = resolveComponent("v-main");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_footer = resolveComponent("v-footer");
  _push(ssrRenderComponent(_component_v_app, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_navigation_drawer, {
          location: "right",
          app: ""
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_app_bar, {
          height: "40",
          class: "main-header",
          density: "compact",
          app: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_app_bar_nav_icon, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Icon, { name: "game-icons:soccer-kick" }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_Icon, { name: "game-icons:soccer-kick" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_app_bar_title, { class: "main-title" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span class="text-red-lighten-4"${_scopeId3}>gol</span><span class="text-red-lighten-5"${_scopeId3}>gol!</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-red-lighten-4" }, "gol"),
                      createVNode("span", { class: "text-red-lighten-5" }, "gol!")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_btn, {
                id: "facebook-icon",
                type: "button",
                title: "Icon facebook",
                "aria-label": "Icon facebook",
                icon: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Icon, {
                      name: "entypo-social:facebook",
                      "aria-label": "facebook icon"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "entypo-social:facebook",
                        "aria-label": "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_btn, {
                id: "light-icon",
                type: "button",
                title: "light button",
                icon: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Icon, {
                      name: "material-symbols:light-mode-sharp",
                      "aria-label": "light icon"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "material-symbols:light-mode-sharp",
                        "aria-label": "light icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_app_bar_nav_icon, null, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, { name: "game-icons:soccer-kick" })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_app_bar_title, { class: "main-title" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-red-lighten-4" }, "gol"),
                    createVNode("span", { class: "text-red-lighten-5" }, "gol!")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_spacer),
                createVNode(_component_v_btn, {
                  id: "facebook-icon",
                  type: "button",
                  title: "Icon facebook",
                  "aria-label": "Icon facebook",
                  icon: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "entypo-social:facebook",
                      "aria-label": "facebook icon"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_btn, {
                  id: "light-icon",
                  type: "button",
                  title: "light button",
                  icon: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "material-symbols:light-mode-sharp",
                      "aria-label": "light icon"
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_main, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_container, { fluid: "" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default")
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_container, { fluid: "" }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                })
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_footer, { app: "" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_navigation_drawer, {
            location: "right",
            app: ""
          }),
          createVNode(_component_v_app_bar, {
            height: "40",
            class: "main-header",
            density: "compact",
            app: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_v_app_bar_nav_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_Icon, { name: "game-icons:soccer-kick" })
                ]),
                _: 1
              }),
              createVNode(_component_v_app_bar_title, { class: "main-title" }, {
                default: withCtx(() => [
                  createVNode("span", { class: "text-red-lighten-4" }, "gol"),
                  createVNode("span", { class: "text-red-lighten-5" }, "gol!")
                ]),
                _: 1
              }),
              createVNode(_component_v_spacer),
              createVNode(_component_v_btn, {
                id: "facebook-icon",
                type: "button",
                title: "Icon facebook",
                "aria-label": "Icon facebook",
                icon: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "entypo-social:facebook",
                    "aria-label": "facebook icon"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_btn, {
                id: "light-icon",
                type: "button",
                title: "light button",
                icon: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "material-symbols:light-mode-sharp",
                    "aria-label": "light icon"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_main, null, {
            default: withCtx(() => [
              createVNode(_component_v_container, { fluid: "" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              })
            ]),
            _: 3
          }),
          createVNode(_component_v_footer, { app: "" })
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.9e058727.mjs.map
