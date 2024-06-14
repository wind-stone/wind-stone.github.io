import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u952E\u76D8",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u952E\u76D8",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u952E\u76D8")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "android-\u952E\u76D8-keydown-\u4E8B\u4EF6\u91CC-keycode-229",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#android-\u952E\u76D8-keydown-\u4E8B\u4EF6\u91CC-keycode-229",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Android \u952E\u76D8 keydown \u4E8B\u4EF6\u91CC keyCode = 229")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Android \u7CFB\u7EDF\u91CC\uFF0Ckeydown \u4E8B\u4EF6\u7684 event \u91CC\uFF0CkeyCode = 229\uFF0C\u4E0D\u662F\u6B63\u786E\u7684 keyCode", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", null, "Reference:", -1);
const _hoisted_5 = {
  href: "https://stackoverflow.com/questions/36753548/keycode-on-android-is-always-229",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createTextVNode("keyCode on android is always 229");
const _hoisted_7 = {
  href: "https://bugs.chromium.org/p/chromium/issues/detail?id=118639",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createTextVNode("keydown and keyup events do not have proper keyCode (it's always 0)");
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u952E\u76D8\u7684\u8C03\u8D77\u548C\u6536\u8D77",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u952E\u76D8\u7684\u8C03\u8D77\u548C\u6536\u8D77",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u952E\u76D8\u7684\u8C03\u8D77\u548C\u6536\u8D77")
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", null, "\u5728 iOS 6 \u4E4B\u524D\uFF0C\u5F53\u63A7\u4EF6\u83B7\u5F97 focus \u7684\u65F6\u5019\uFF0C\u5982\u679C\u4E0D\u662F\u7528\u6237\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u952E\u76D8\u662F\u4E0D\u4F1A\u5F39\u8D77\u7684\uFF0C\u5728 iOS 6 \u4E4B\u540E\uFF0C\u8BBE\u7F6E\u4E86\u4E00\u4E2A\u5C5E\u6027\u53EF\u4EE5\u505A\u5230\uFF0C\u5728 Android \u4E0A\uFF0C\u53EA\u8981\u4E0D\u662F\u7528\u6237\u89E6\u53D1\u7684\u4E8B\u4EF6\u90FD\u65E0\u6CD5\u89E6\u53D1\u3002\u6682\u65F6\u8FD8\u6CA1\u6709\u89E3\u51B3\u65B9\u6848\u3002\u952E\u76D8\u7684\u6536\u8D77\uFF0C\u53EF\u4EE5\u901A\u8FC7 js \u7684 blur \u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u3002", -1);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createBaseVNode("ul", null, [
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
var keyboard_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { keyboard_html as default };
