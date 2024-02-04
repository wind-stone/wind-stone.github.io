import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "samesite",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#samesite",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" SameSite")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "\u540C\u7AD9 Same Site \u4E0D\u540C\u4E8E\u540C\u57DF Same Origin\u3002", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "\u6EE1\u8DB3\u4EE5\u4E0B\u6240\u6709\u6761\u4EF6\uFF0C\u624D\u662F SameSite:", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "\u6709\u6548\u9876\u7EA7\u57DF\u540D\u76F8\u540C")
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "\u534F\u8BAE\u76F8\u540C")
], -1);
const _hoisted_6 = {
  href: "https://web.dev/same-site-same-origin/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode('Understanding "same-site" and "same-origin"');
const _hoisted_8 = {
  href: "https://web.dev/samesite-cookies-explained/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createTextVNode("SameSite cookies explained");
const _hoisted_10 = {
  href: "https://web.dev/samesite-cookie-recipes/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createTextVNode("SameSite cookie recipes");
const _hoisted_12 = {
  href: "https://web.dev/schemeful-samesite/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_13 = /* @__PURE__ */ createTextVNode("Schemeful Same-Site");
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createBaseVNode("ul", null, [
      _hoisted_4,
      _hoisted_5,
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("a", _hoisted_6, [
            _hoisted_7,
            createVNode(_component_OutboundLink)
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("a", _hoisted_8, [
            _hoisted_9,
            createVNode(_component_OutboundLink)
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("a", _hoisted_10, [
            _hoisted_11,
            createVNode(_component_OutboundLink)
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("a", _hoisted_12, [
            _hoisted_13,
            createVNode(_component_OutboundLink)
          ])
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var sameSite_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { sameSite_html as default };
