import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u517C\u5BB9\u6027",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u517C\u5BB9\u6027",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u517C\u5BB9\u6027")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u6D4F\u89C8\u5668\u5BF9 apk \u7C7B\u578B\u6587\u4EF6\u7684\u517C\u5BB9\u6027");
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u6D4F\u89C8\u5668\u5BF9-apk-\u7C7B\u578B\u6587\u4EF6\u7684\u517C\u5BB9\u6027",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6D4F\u89C8\u5668\u5BF9-apk-\u7C7B\u578B\u6587\u4EF6\u7684\u517C\u5BB9\u6027",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6D4F\u89C8\u5668\u5BF9 apk \u7C7B\u578B\u6587\u4EF6\u7684\u517C\u5BB9\u6027")
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5728\u67D0\u4E9B\u6D4F\u89C8\u5668/APP\uFF08\u6BD4\u5982\u767E\u5EA6\u5730\u56FE APP\uFF09\u91CC\uFF0C\u5F53\u9875\u9762\u91CC\u4F7F\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "location.href = xx.apk"),
  /* @__PURE__ */ createTextVNode("\u6765\u4E0B\u8F7D\u4E00\u4E2A Android \u5B89\u88C5\u5305\u65F6\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E2A\u7A7A\u767D\u9875/\u9519\u8BEF\u9875\uFF0C\u5176\u539F\u56E0\u5927\u6982\u662F\u6D4F\u89C8\u5668\u5BF9"),
  /* @__PURE__ */ createBaseVNode("code", null, "apk"),
  /* @__PURE__ */ createTextVNode("\u683C\u5F0F\u7684\u6587\u4EF6\u89E3\u6790\u6709\u8BEF\uFF0C\u5C06\u5176\u89E3\u6790\u6210\u4E00\u4E2A\u5E38\u89C4\u7684\u7F51\u5740\u5E76\u8DF3\u8F6C\u5230\u4E86\u8FD9\u4E2A"),
  /* @__PURE__ */ createBaseVNode("code", null, "apk"),
  /* @__PURE__ */ createTextVNode("\u5730\u5740\u4E0A\u3002")
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6D4F\u89C8\u5668\u5BF9-apk-\u7C7B\u578B\u6587\u4EF6\u7684\u517C\u5BB9\u6027" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_4,
    _hoisted_5,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
