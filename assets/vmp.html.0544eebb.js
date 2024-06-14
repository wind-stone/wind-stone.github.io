import { r as resolveComponent, a as createElementBlock, b as createVNode, F as Fragment, e as createBaseVNode, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "js-vmp",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#js-vmp",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" JS VMP")
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createVNode(_component_global_config)
  ], 64);
}
var vmp_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { vmp_html as default };
