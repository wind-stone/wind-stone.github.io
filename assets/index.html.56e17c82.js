import { r as resolveComponent, a as createElementBlock, b as createVNode, F as Fragment, e as createBaseVNode, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "javascript-\u6846\u67B6-\u5E93",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#javascript-\u6846\u67B6-\u5E93",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" JavaScript \u6846\u67B6/\u5E93")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("a", { href: "/interview/javascript/javascript-libs/vue" }, "Vue")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("a", { href: "/interview/javascript/javascript-libs/react" }, "React")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
