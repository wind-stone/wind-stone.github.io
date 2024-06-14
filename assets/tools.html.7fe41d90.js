import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, d as createStaticVNode, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u597D\u7528\u7684\u5DE5\u5177\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#\u597D\u7528\u7684\u5DE5\u5177\u63A8\u8350" aria-hidden="true">#</a> \u597D\u7528\u7684\u5DE5\u5177\u63A8\u8350</h1><h2 id="\u5728\u7EBF\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u5728\u7EBF\u7B14\u8BB0" aria-hidden="true">#</a> \u5728\u7EBF\u7B14\u8BB0</h2><p>\u6211\u6765</p><h2 id="ppt" tabindex="-1"><a class="header-anchor" href="#ppt" aria-hidden="true">#</a> PPT</h2>', 4);
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u4EE3\u7801\u56FE\u7247\uFF0C");
const _hoisted_6 = {
  href: "https://carbon.now.sh/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode("carbon");
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_5,
        createBaseVNode("a", _hoisted_6, [
          _hoisted_7,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var tools_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { tools_html as default };
