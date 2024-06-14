import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u6D4F\u89C8\u5668\u6307\u7EB9",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6D4F\u89C8\u5668\u6307\u7EB9",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6D4F\u89C8\u5668\u6307\u7EB9")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u53C2\u8003\u6587\u6863",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u53C2\u8003\u6587\u6863",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u53C2\u8003\u6587\u6863")
], -1);
const _hoisted_3 = {
  href: "https://juejin.cn/post/6995000627642236941",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u6D4F\u89C8\u5668\u6307\u7EB9\u53CA\u5176\u5E94\u7528");
const _hoisted_5 = {
  href: "https://zhuanlan.zhihu.com/p/94158920",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u6D4F\u89C8\u5668\u6307\u7EB9\u8FFD\u8E2A\u6280\u672F\u7B80\u8FF0");
const _hoisted_7 = {
  href: "https://github.com/fingerprintjs/fingerprintjs",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createTextVNode("fingerprintjs");
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u5404\u7C7B\u6307\u7EB9\u63CF\u8FF0",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5404\u7C7B\u6307\u7EB9\u63CF\u8FF0",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5404\u7C7B\u6307\u7EB9\u63CF\u8FF0")
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "canvas-\u6307\u7EB9",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#canvas-\u6307\u7EB9",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" canvas \u6307\u7EB9")
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_3, [
          _hoisted_4,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_5, [
          _hoisted_6,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_7, [
          _hoisted_8,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_9,
    _hoisted_10,
    createVNode(_component_global_config)
  ], 64);
}
var fingerprint_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { fingerprint_html as default };
