import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, d as createStaticVNode, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="apple-\u4EA7\u54C1\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#apple-\u4EA7\u54C1\u4F7F\u7528" aria-hidden="true">#</a> Apple \u4EA7\u54C1\u4F7F\u7528</h1><h2 id="mac" tabindex="-1"><a class="header-anchor" href="#mac" aria-hidden="true">#</a> Mac</h2><h3 id="mds-stores-\u5185\u5B58\u5360\u7528\u8FC7\u9AD8" tabindex="-1"><a class="header-anchor" href="#mds-stores-\u5185\u5B58\u5360\u7528\u8FC7\u9AD8" aria-hidden="true">#</a> Mds_stores \u5185\u5B58\u5360\u7528\u8FC7\u9AD8</h3>', 3);
const _hoisted_4 = {
  href: "https://macosx-faq.com/mds-stores-process-high-cpu/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("How to Fix: Mds_stores Process Consuming High CPU on Mac");
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_4, [
          _hoisted_5,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var appleMac_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { appleMac_html as default };
