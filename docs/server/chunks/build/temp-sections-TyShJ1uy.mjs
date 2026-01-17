import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { b as VContainer, V as VRow, a as VCol } from './VRow-CGY0Q11V.mjs';
import { V as VCard } from './VCard-DAkJRXn7.mjs';
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
import 'pinia';
import 'vue-router';
import '@iconify/vue';
import './tag-D27N3-NH.mjs';
import './VImg-BTvWkRx9.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VContainer, mergeProps({
    class: "pa-4",
    style: { "border": "4px solid black" }
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, { class: "d-flex flex-column ga-2" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, { class: "pa-0" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, {
                      class: "pa-2",
                      color: "primary"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Section Content`);
                        } else {
                          return [
                            createTextVNode("Section Content")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCard, {
                        class: "pa-2",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Section Content")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, { class: "pa-0" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, {
                      class: "pa-2",
                      color: "secondary"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Section Content`);
                        } else {
                          return [
                            createTextVNode("Section Content")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCard, {
                        class: "pa-2",
                        color: "secondary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Section Content")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, { class: "pa-0" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, {
                      class: "pa-2",
                      color: "accent"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Section Content`);
                        } else {
                          return [
                            createTextVNode("Section Content")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCard, {
                        class: "pa-2",
                        color: "accent"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Section Content")
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
                createVNode(VCol, { class: "pa-0" }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      class: "pa-2",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Section Content")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, { class: "pa-0" }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      class: "pa-2",
                      color: "secondary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Section Content")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, { class: "pa-0" }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      class: "pa-2",
                      color: "accent"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Section Content")
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
          createVNode(VRow, { class: "d-flex flex-column ga-2" }, {
            default: withCtx(() => [
              createVNode(VCol, { class: "pa-0" }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "pa-2",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Section Content")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { class: "pa-0" }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "pa-2",
                    color: "secondary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Section Content")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { class: "pa-0" }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "pa-2",
                    color: "accent"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Section Content")
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/temp-sections.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tempSections = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { tempSections as default };
//# sourceMappingURL=temp-sections-TyShJ1uy.mjs.map
