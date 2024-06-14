import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "chrome-\u5B89\u5168\u7B56\u7565",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#chrome-\u5B89\u5168\u7B56\u7565",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Chrome \u5B89\u5168\u7B56\u7565")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "hsts",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#hsts",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" HSTS")
], -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1\uFF1A");
const _hoisted_4 = {
  href: "https://zhuanlan.zhihu.com/p/25537440",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("HSTS\u8BE6\u89E3");
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u82E5\u662F\u4E0D\u5C0F\u5FC3\u542F\u7528\u4E86 HSTS \u4F46\u662F\u60F3\u79FB\u9664\u6389\uFF0C\u53EF\u4EE5\u6253\u5F00 chrome://net-internals/#hsts \u5728\u5E95\u90E8"),
  /* @__PURE__ */ createBaseVNode("strong", null, "Delete domain security policies"),
  /* @__PURE__ */ createTextVNode("\u8F93\u5165\u57DF\u540D\u8FDB\u884C\u5220\u9664\u3002")
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      _hoisted_3,
      createBaseVNode("a", _hoisted_4, [
        _hoisted_5,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_6,
    createVNode(_component_global_config)
  ], 64);
}
var chromeSecurityPolicy_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { chromeSecurityPolicy_html as default };
