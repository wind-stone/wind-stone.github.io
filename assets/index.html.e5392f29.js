import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "svg",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#svg",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" SVG")
], -1);
const _hoisted_2 = {
  href: "http://www.ruanyifeng.com/blog/2018/08/svg.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u962E\u4E00\u5CF0 - SVG \u56FE\u50CF\u5165\u95E8\u6559\u7A0B");
const _hoisted_4 = {
  href: "https://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5F20\u946B\u65ED - \u672A\u6765\u5FC5\u70ED\uFF1ASVG Sprites\u6280\u672F\u4ECB\u7ECD");
const _hoisted_6 = {
  href: "https://www.zhangxinxu.com/wordpress/2018/08/css-svg-background-image-base64-encode/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u5F20\u946B\u65ED - \u5B66\u4E60\u4E86\uFF0CCSS\u4E2D\u5185\u8054SVG\u56FE\u7247\u6709\u6BD4Base64\u66F4\u597D\u7684\u5F62\u5F0F");
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          _hoisted_3,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_4, [
          _hoisted_5,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_6, [
          _hoisted_7,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
