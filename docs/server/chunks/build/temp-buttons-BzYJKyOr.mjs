import { V as VHover, _ as _sfc_main$1 } from './VHover-C4SUKLlx.mjs';
import { defineComponent, reactive, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import './index-CmbwL4p3.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './server.mjs';
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
import './v3-C0-qQ0-i.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './VImg-BTvWkRx9.mjs';
import './tag-D27N3-NH.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "temp-buttons",
  __ssrInlineRender: true,
  setup(__props) {
    const socials = reactive([
      {
        icon: "mdi:facebook",
        alt: "Facebook Logo Icon",
        href: "https://www.facebook.com/profile.php?id=61551522434899"
      },
      {
        icon: "mdi:instagram",
        alt: "Instagram logo icon",
        href: "https://www.instagram.com/dylanswork/"
      },
      {
        icon: "mdi:youtube",
        alt: "YouTube logo icon",
        href: "https://www.youtube.com/@dylanwarrener5857"
      },
      {
        icon: "mdi:linkedin",
        alt: "LinkedIn logo icon",
        href: "https://www.linkedin.com/in/dylan-w-a523a112a/"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseBtn = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "d-flex flex-column align-start ga-4",
        style: { "border": "4px solid red" }
      }, _attrs))}><div class="w-100 d-flex flex-column justify-center" style="${ssrRenderStyle({ "border": "4px solid blue" })}"><p class="text-center">Base Buttons</p><br><div class="d-flex flex-wrap justify-center ga-4" style="${ssrRenderStyle({ "border": "4px solid green" })}"><div class="d-flex flex-column justify-center align-center" style="${ssrRenderStyle({ "border": "4px solid orange" })}"><p>Button Text</p>`);
      _push(ssrRenderComponent(VHover, null, {
        default: withCtx(({ isHovering, props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseBtn, mergeProps({
              text: "Normal Button",
              class: `bg-primary ${isHovering ? "bg-secondary" : ""}`
            }, props), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseBtn, mergeProps({
                text: "Normal Button",
                class: `bg-primary ${isHovering ? "bg-secondary" : ""}`
              }, props), null, 16, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="d-flex flex-column justify-center align-center" style="${ssrRenderStyle({ "border": "4px solid yellow" })}"><p>Button Icon</p>`);
      _push(ssrRenderComponent(VHover, null, {
        default: withCtx(({ isHovering, props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseBtn, mergeProps({
              icon: "mdi-home",
              variant: "flat",
              class: `${isHovering ? "bg-secondary" : "bg-primary"}`
            }, props), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseBtn, mergeProps({
                icon: "mdi-home",
                variant: "flat",
                class: `${isHovering ? "bg-secondary" : "bg-primary"}`
              }, props), null, 16, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="w-100 d-flex flex-column justify-center" style="${ssrRenderStyle({ "border": "4px solid blue" })}"><p class="text-center">Specific Buttons</p><br><div class="d-flex flex-wrap justify-center ga-4" style="${ssrRenderStyle({ "border": "4px solid green" })}"><div class="d-flex flex-column justify-center align-center" style="${ssrRenderStyle({ "border": "4px solid orange" })}"><p>To a Section</p>`);
      _push(ssrRenderComponent(VHover, null, {
        default: withCtx(({ isHovering, props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseBtn, mergeProps({
              variant: "flat",
              size: "small",
              text: "Normal Button",
              class: `${isHovering ? "bg-secondary" : "bg-primary"}`
            }, props), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseBtn, mergeProps({
                variant: "flat",
                size: "small",
                text: "Normal Button",
                class: `${isHovering ? "bg-secondary" : "bg-primary"}`
              }, props), null, 16, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="d-flex flex-column justify-center align-center" style="${ssrRenderStyle({ "border": "4px solid orange" })}"><p>To a Page</p>`);
      _push(ssrRenderComponent(VHover, null, {
        default: withCtx(({ isHovering, props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseBtn, mergeProps({
              variant: "flat",
              size: "small",
              text: "To Page",
              "icon-append": "mdi-arrow-right",
              "icon-append-class": `btn-icon-transition ${isHovering ? "btn-icon-move" : ""}`,
              class: `${isHovering ? "bg-secondary" : "bg-primary"}`
            }, props), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseBtn, mergeProps({
                variant: "flat",
                size: "small",
                text: "To Page",
                "icon-append": "mdi-arrow-right",
                "icon-append-class": `btn-icon-transition ${isHovering ? "btn-icon-move" : ""}`,
                class: `${isHovering ? "bg-secondary" : "bg-primary"}`
              }, props), null, 16, ["icon-append-class", "class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="d-flex flex-column justify-center align-center" style="${ssrRenderStyle({ "border": "4px solid orange" })}"><p>Back to Top</p>`);
      _push(ssrRenderComponent(VHover, null, {
        default: withCtx(({ isHovering, props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseBtn, mergeProps({
              icon: "mdi-chevron-up",
              variant: "flat",
              size: "x-small",
              class: `${isHovering ? "bg-secondary" : "bg-primary"}`
            }, props), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseBtn, mergeProps({
                icon: "mdi-chevron-up",
                variant: "flat",
                size: "x-small",
                class: `${isHovering ? "bg-secondary" : "bg-primary"}`
              }, props), null, 16, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="d-flex flex-column justify-center align-center" style="${ssrRenderStyle({ "border": "4px solid orange" })}"><p>Social Button</p><!--[-->`);
      ssrRenderList(socials, (svg, index) => {
        _push(`<div>`);
        _push(ssrRenderComponent(VHover, null, {
          default: withCtx(({ isHovering, props }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseBtn, mergeProps({
                rel: "noopener",
                target: "_blank",
                variant: "flat",
                size: "x-small",
                "aria-label": svg.alt,
                href: svg.href,
                class: `mb-2 ${isHovering ? "bg-secondary" : "bg-primary"}`,
                "nuxt-icon": svg.icon,
                "nuxt-icon-alt": svg.alt
              }, { ref_for: true }, props), null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseBtn, mergeProps({
                  rel: "noopener",
                  target: "_blank",
                  variant: "flat",
                  size: "x-small",
                  "aria-label": svg.alt,
                  href: svg.href,
                  class: `mb-2 ${isHovering ? "bg-secondary" : "bg-primary"}`,
                  "nuxt-icon": svg.icon,
                  "nuxt-icon-alt": svg.alt
                }, { ref_for: true }, props), null, 16, ["aria-label", "href", "class", "nuxt-icon", "nuxt-icon-alt"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/temp-buttons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=temp-buttons-BzYJKyOr.mjs.map
