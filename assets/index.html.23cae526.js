import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
var _imports_0 = "/assets/nest-life-circle.6b75e262.jpeg";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "nest-js",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#nest-js",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Nest.js")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u751F\u547D\u5468\u671F",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u751F\u547D\u5468\u671F",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u751F\u547D\u5468\u671F")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "\u751F\u547D\u5468\u671F"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u53C2\u8003\uFF1A");
const _hoisted_5 = {
  href: "https://stackoverflow.com/questions/54863655/whats-the-difference-between-interceptor-vs-middleware-vs-filter-in-nest-js",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createTextVNode("What's the difference between Interceptor vs Middleware vs Filter in Nest.js?");
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createBaseVNode("p", null, [
      _hoisted_4,
      createBaseVNode("a", _hoisted_5, [
        _hoisted_6,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
