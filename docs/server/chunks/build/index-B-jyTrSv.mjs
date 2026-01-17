import { defineComponent, computed, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './v3-C0-qQ0-i.mjs';
import { u as useDisplay } from './server.mjs';
import { V as VRow, a as VCol, b as VContainer } from './VRow-CGY0Q11V.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'ipx';
import 'node:path';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'vue-router';
import '@iconify/vue';
import './tag-D27N3-NH.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const display = useDisplay();
    useHead({
      title: "Home"
    });
    computed(() => display.smAndDown.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VRow, {
        dense: "",
        style: { "border": "4px solid red" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              class: "pa-0",
              style: { "border": "4px solid blue" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Hero Section`);
                } else {
                  return [
                    createTextVNode("Hero Section")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                class: "pa-0",
                style: { "border": "4px solid blue" }
              }, {
                default: withCtx(() => [
                  createTextVNode("Hero Section")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VRow, {
        dense: "",
        style: { "border": "4px solid red" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              class: "pa-0",
              style: { "border": "4px solid blue" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, { style: { "border": "4px solid black" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { style: { "border": "4px solid red" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { style: { "border": "4px solid blue" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Recent Projects Section `);
                                  } else {
                                    return [
                                      createTextVNode(" Recent Projects Section ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { style: { "border": "4px solid blue" } }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Recent Projects Section ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, { style: { "border": "4px solid red" } }, {
                            default: withCtx(() => [
                              createVNode(VCol, { style: { "border": "4px solid blue" } }, {
                                default: withCtx(() => [
                                  createTextVNode(" Recent Projects Section ")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, { style: { "border": "4px solid black" } }, {
                      default: withCtx(() => [
                        createVNode(VRow, { style: { "border": "4px solid red" } }, {
                          default: withCtx(() => [
                            createVNode(VCol, { style: { "border": "4px solid blue" } }, {
                              default: withCtx(() => [
                                createTextVNode(" Recent Projects Section ")
                              ]),
                              _: 1
                            })
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                class: "pa-0",
                style: { "border": "4px solid blue" }
              }, {
                default: withCtx(() => [
                  createVNode(VContainer, { style: { "border": "4px solid black" } }, {
                    default: withCtx(() => [
                      createVNode(VRow, { style: { "border": "4px solid red" } }, {
                        default: withCtx(() => [
                          createVNode(VCol, { style: { "border": "4px solid blue" } }, {
                            default: withCtx(() => [
                              createTextVNode(" Recent Projects Section ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B-jyTrSv.mjs.map
