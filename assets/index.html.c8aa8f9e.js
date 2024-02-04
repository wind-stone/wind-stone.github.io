import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "css-bread-crumbs",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#css-bread-crumbs",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" CSS-Bread-Crumbs")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "\u7EAF CSS \u5B9E\u73B0\u7684\u9762\u5305\u5C51\u5BFC\u822A", -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u53C2\u8003\u94FE\u63A5\uFF1A \u4E2D\u6587\uFF1A");
const _hoisted_4 = {
  href: "http://www.cnblogs.com/submerge/archive/2014/10/22/4044341.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("http://www.cnblogs.com/submerge/archive/2014/10/22/4044341.html");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u82F1\u6587\u539F\u6587\uFF1A");
const _hoisted_7 = {
  href: "http://line25.com/tutorials/how-to-create-flat-style-breadcrumb-links-with-css",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createTextVNode("http://line25.com/tutorials/how-to-create-flat-style-breadcrumb-links-with-css");
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: "https://github.com/wind-stone/CSS-Bread-Crumbs/raw/master/\u6548\u679C\u56FE.png",
    alt: ""
  })
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
    createBaseVNode("p", null, [
      _hoisted_6,
      createBaseVNode("a", _hoisted_7, [
        _hoisted_8,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_9,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
