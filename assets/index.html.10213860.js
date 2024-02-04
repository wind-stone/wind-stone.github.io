import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, d as createStaticVNode, f as createTextVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="\u6784\u5EFA\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u955C\u50CF" aria-hidden="true">#</a> \u6784\u5EFA\u955C\u50CF</h2><h3 id="\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a> \u6307\u4EE4</h3><h4 id="workdir" tabindex="-1"><a class="header-anchor" href="#workdir" aria-hidden="true">#</a> WORKDIR</h4><p>\u8BBE\u7F6E\u5BB9\u5668\u91CC\u7684\u5DE5\u4F5C\u76EE\u5F55\u8DEF\u5F84\uFF0C\u8BE5\u6307\u4EE4\u4E4B\u540E\u7684\u6307\u4EE4\u5C06\u57FA\u4E8E\u8BE5\u5DE5\u4F5C\u76EE\u5F55\u3002</p>', 5);
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5B98\u65B9\u6587\u6863\uFF1A");
const _hoisted_7 = {
  href: "https://docs.docker.com/engine/reference/builder/#workdir",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createTextVNode("WORKDIR");
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
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
