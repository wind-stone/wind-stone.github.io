import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "position-fixed-\u5931\u6548",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#position-fixed-\u5931\u6548",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" position: fixed \u5931\u6548")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("nav", { class: "table-of-contents" }, [
  /* @__PURE__ */ createBaseVNode("ul")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u82E5\u5B50\u5B59\u5143\u7D20\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "position: fixed"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u5219\u5F53\u5176\u67D0\u4E00\u7956\u5148\u5143\u7D20\u521B\u5EFA\u4E86\u5C42\u53E0\u4E0A\u4E0B\u6587\uFF08"),
  /* @__PURE__ */ createBaseVNode("strong", null, "Stacking Context"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u4E5F\u79F0\u4E3A\u5806\u53E0\u4E0A\u4E0B\u6587\uFF09\uFF0C\u5219\u8BE5\u5B50\u5B59\u5143\u7D20\u7684\u56FA\u5B9A\u5B9A\u4F4D\u5C06\u57FA\u4E8E\u8BE5\u7956\u5148\u5143\u7D20\u8FDB\u884C\u5B9A\u4F4D\uFF0C\u800C\u4E0D\u662F\u57FA\u4E8E Viewport\uFF0C\u56E0\u6B64\u56FA\u5B9A\u5B9A\u4F4D\u5931\u6548\u4E86\u3002")
], -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u53C2\u8003");
const _hoisted_5 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createTextVNode("MDN - \u5C42\u53E0\u4E0A\u4E0B\u6587");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\uFF0C\u53EF\u4EE5\u770B\u5230\u5176\u4E2D\u6709\u5F88\u591A\u65B9\u5F0F\u80FD\u591F\u8BA9\u5143\u7D20\u521B\u5EFA\u5C42\u53E0\u4E0A\u4E0B\u6587\uFF0C\u4F46\u4E0D\u662F\u6BCF\u4E00\u79CD\u65B9\u5F0F\u90FD\u4F1A\u5BFC\u81F4");
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("code", null, "position: fixed", -1);
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u5931\u6548\u3002");
const _hoisted_10 = /* @__PURE__ */ createStaticVNode("<ul><li><code>transform</code>\u5C5E\u6027\u4E0D\u4E3A<code>none</code></li><li><code>perspective</code>\u5C5E\u6027\u4E0D\u4E3A<code>none</code></li><li><code>filter</code>\u5C5E\u6027\u4E0D\u4E3A<code>none</code></li><li>\u8BBE\u7F6E\u4E86<code>transform-style: preserve-3d</code></li><li>\u5728<code>will-change</code>\u4E2D\u6307\u5B9A\u4E86\u4EFB\u610F CSS \u5C5E\u6027</li></ul><p>\u4EE5\u4E0A\u4EFB\u610F\u4E00\u79CD\u521B\u5EFA\u5C42\u53E0\u4E0A\u4E0B\u6587\u7684\u65B9\u5F0F\uFF0C\u90FD\u4F1A\u5BFC\u81F4<code>position: fixed</code>\u5931\u6548\u3002</p><p>\u53C2\u8003\u6587\u6863:</p>", 3);
const _hoisted_13 = {
  href: "https://github.com/chokcoco/iCSS/issues/24",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createTextVNode("fixed \u5B9A\u4F4D\u5931\u6548 | \u4E0D\u53D7\u63A7\u5236\u7684 position:fixed");
const _hoisted_15 = {
  href: "http://meyerweb.com/eric/thoughts/2011/09/12/un-fixing-fixed-elements-with-css-transforms/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Un-fixing Fixed Elements with CSS Transforms");
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
      ]),
      _hoisted_7,
      _hoisted_8,
      _hoisted_9
    ]),
    _hoisted_10,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_13, [
          _hoisted_14,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_15, [
          _hoisted_16,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var positionFixed_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { positionFixed_html as default };
