import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "css3-loading",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#css3-loading",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" CSS3-Loading")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "\u7EAF CSS \u5B9E\u73B0\u7684\u997C\u72B6\u56FE loading \u7B49\u5F85\uFF0C\u8FDB\u5EA6\u5706\u73AF", -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u6A21\u4EFF\u81EA\uFF1A \u5F20\u946B\u65ED--");
const _hoisted_4 = {
  href: "http://www.zhangxinxu.com/wordpress/2014/04/css3-pie-loading-waiting-animation/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("http://www.zhangxinxu.com/wordpress/2014/04/css3-pie-loading-waiting-animation/");
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: "https://github.com/wind-stone/CSS3-Loading/raw/master/\u6548\u679C\u56FE.gif",
    alt: ""
  })
], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: "https://github.com/wind-stone/CSS3-Loading/raw/master/circle-ring-\u6548\u679C\u56FE.gif",
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
    _hoisted_6,
    _hoisted_7,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
