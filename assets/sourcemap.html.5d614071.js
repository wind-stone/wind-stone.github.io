import { r as resolveComponent, a as createElementBlock, b as createVNode, F as Fragment, e as createBaseVNode, f as createTextVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "source-map",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#source-map",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Source Map")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "sourcescontent",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#sourcescontent",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" sourcesContent")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Source Map \u6587\u4EF6\u91CC\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "sourcesContent"),
  /* @__PURE__ */ createTextVNode("\u5C5E\u6027\uFF0C\u7528\u4E8E\u5728\u51FA\u9519\u7684\u65F6\u5019\u8FD8\u539F\u6E90\u4EE3\u7801\uFF0C\u5426\u5219\u53EA\u80FD\u77E5\u9053\u51FA\u9519\u4F4D\u7F6E\u5728\u6E90\u4EE3\u7801\u91CC\u7684\u6587\u4EF6\u540D\u3001\u884C\u3001\u5217\u4FE1\u606F\uFF0C\u65E0\u6CD5\u5728\u63A7\u5236\u53F0\u76F4\u89C2\u5730\u770B\u5230\u3002")
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
var sourcemap_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { sourcemap_html as default };
