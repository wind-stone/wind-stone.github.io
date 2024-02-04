import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "simple-drag",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#simple-drag",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" simple-drag")
], -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u5B66\u4E60 javascript \u5165\u95E8\u65F6\u7F16\u5199\u7684\u7B80\u5355\u62D6\u62FD\u529F\u80FD\uFF0C\u6A21\u4EFF\u81EA\uFF1A");
const _hoisted_3 = {
  href: "http://js.fgm.cc/learn/lesson6/01.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode("http://js.fgm.cc/learn/lesson6/01.html");
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6548\u679C\u56FE\uFF1A "),
  /* @__PURE__ */ createBaseVNode("img", {
    src: "https://github.com/wind-stone/simple-drag/raw/master/simple-drag.gif",
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
      ])
    ]),
    _hoisted_5,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
