import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "simple-radius-menu",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#simple-radius-menu",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" simple-radius-menu")
], -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u7B80\u5355\u7684\u201C\u5F84\u5411\u52A8\u753B\u83DC\u5355\u201D\uFF0C\u6A21\u8303\u81EA\u5947\u821E\u56E2\uFF1A");
const _hoisted_3 = {
  href: "http://www.75team.com/archives/851",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode("http://www.75team.com/archives/851");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u6548\u679C\u56FE\uFF1A");
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: "https://github.com/wind-stone/simple-radius-menu/raw/master/radius-menu.gif",
    alt: ""
  })
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      _hoisted_2,
      createBaseVNode("a", _hoisted_3, [
        _hoisted_4,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_5
    ]),
    _hoisted_6,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
