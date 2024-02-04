import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u5FAE\u4FE1",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5FAE\u4FE1",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5FAE\u4FE1")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("openid \u548C unionid");
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "openid-\u548C-unionid",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#openid-\u548C-unionid",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" openid \u548C unionid")
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "openid"),
  /* @__PURE__ */ createTextVNode(": \u7528\u6237\u8BBF\u95EE\u516C\u4F17\u53F7\u7684\u7F51\u9875\uFF0C\u4F1A\u4EA7\u751F\u4E00\u4E2A\u7528\u6237\u4E0E\u516C\u4F17\u53F7\u552F\u4E00\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "openid"),
  /* @__PURE__ */ createBaseVNode("code", null, "unionid"),
  /* @__PURE__ */ createTextVNode(": \u7528\u6237\u4E0E\u5F00\u653E\u5E73\u53F0\u8D26\u53F7\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "unionid"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u7528\u4E8E\u5728\u5F00\u653E\u5E73\u53F0\u6240\u6709\u7684\u5E94\u7528\u3001\u516C\u4F17\u53F7\u3001\u5C0F\u7A0B\u5E8F\u4E0B\u8BC6\u522B\u51FA\u662F\u540C\u4E00\u4E2A\u7528\u6237")
], -1);
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u8BE6\u60C5\u8BF7\u53C2\u8003: ");
const _hoisted_7 = {
  href: "https://juejin.im/post/5c7c6cec51882577f37076d6",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u5FAE\u4FE1\u5F00\u53D1\u4E2D openID \u4E0E unionID \u7684\u533A\u522B");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#openid-\u548C-unionid" }, {
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
    createBaseVNode("p", null, [
      _hoisted_6,
      createBaseVNode("a", _hoisted_7, [
        _hoisted_8,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
