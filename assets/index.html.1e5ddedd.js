import { r as resolveComponent, a as createElementBlock, b as createVNode, F as Fragment, e as createBaseVNode, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u6570\u636E\u7C7B\u578B",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6570\u636E\u7C7B\u578B",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6570\u636E\u7C7B\u578B")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("a", { href: "/interview/javascript/foundation/data-type/typeof" }, "\u3010\u521D\u7EA7\u3011typeof")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("a", { href: "/interview/javascript/foundation/data-type/the-value-of-the-params-passed-to-function" }, "\u3010\u521D\u7EA7\u3011\u51FD\u6570\u53C2\u6570\u503C\u4F20\u9012\u95EE\u9898")
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
