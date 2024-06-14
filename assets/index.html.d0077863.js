import { r as resolveComponent, a as createElementBlock, b as createVNode, F as Fragment, e as createBaseVNode, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "image-clipping",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#image-clipping",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" image-clipping")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "\u57FA\u4E8E Jcrop \u5236\u4F5C\u7B80\u5355\u7684\u56FE\u7247\u88C1\u526A\u529F\u80FD\uFF0C\u5DE6\u8FB9\u663E\u793A\u539F\u56FE\uFF0C\u53F3\u8FB9\u663E\u793A\u88C1\u526A\u540E\u7684\u6548\u679C\u56FE\u3002", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6548\u679C\u56FE\uFF1A "),
  /* @__PURE__ */ createBaseVNode("img", {
    src: "https://github.com/wind-stone/image-clipping/raw/master/image-clipping.gif",
    alt: ""
  })
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
