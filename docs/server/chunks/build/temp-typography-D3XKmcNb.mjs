import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "border": "4px solid red" } }, _attrs))}><h1 class="text-h1">(h1)</h1><h2 class="text-h2">(h2)</h2><h3 class="text-h3">(h3)</h3><h4 class="text-h4">(h4)</h4><h5 class="text-h5">(h5)</h5><h6 class="text-h6">(h6)</h6><p class="text-subtitle-1">Sub title 1</p><p class="text-subtitle-2">Sub title 2</p><p class="text-body-1">Body Text 1</p><p class="text-body-2">Body Text 2</p><p class="text-button">Button text</p><p class="text-caption">Caption text</p><p class="text-overline">Overline text</p><p class="text-high-emphasis">Emphasis high text</p><p class="text-medium-emphasis">Emphasis medium text</p><p class="text-disabled">Disabled text</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/temp-typography.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tempTypography = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { tempTypography as default };
//# sourceMappingURL=temp-typography-D3XKmcNb.mjs.map
