import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "nodejs",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#nodejs",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" NodeJS")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u5224\u65AD\u6587\u4EF6\u662F\u5426\u5B58\u5728",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5224\u65AD\u6587\u4EF6\u662F\u5426\u5B58\u5728",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5224\u65AD\u6587\u4EF6\u662F\u5426\u5B58\u5728")
], -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1\uFF1A");
const _hoisted_4 = {
  href: "https://cloud.tencent.com/developer/article/1688742",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5982\u4F55\u5728 Node.js \u4E2D\u5224\u65AD\u4E00\u4E2A\u6587\u4EF6\u662F\u5426\u5B58\u5728\uFF1F");
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
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
