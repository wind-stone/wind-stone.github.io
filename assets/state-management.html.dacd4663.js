import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "vue3-\u72B6\u6001\u7BA1\u7406",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#vue3-\u72B6\u6001\u7BA1\u7406",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Vue3 \u72B6\u6001\u7BA1\u7406")
], -1);
const _hoisted_2 = {
  href: "https://juejin.cn/post/6984604019272450085",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Vue3+TS \u4F18\u96C5\u5730\u4F7F\u7528\u72B6\u6001\u7BA1\u7406");
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_2, [
        _hoisted_3,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var stateManagement_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { stateManagement_html as default };
