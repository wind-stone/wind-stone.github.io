import { r as resolveComponent, a as createElementBlock, b as createVNode, F as Fragment, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> TODO</h1><ul><li>\u4E86\u89E3 loader \u548C plugin \u5206\u522B\u53EF\u4EE5\u7528\u6765\u505A\u4EC0\u4E48</li><li>\u4E86\u89E3 chainWebpack \u548C configWebpack \u5206\u522B\u7528\u6765\u505A\u4EC0\u4E48</li></ul><h2 id="\u9700\u8981\u660E\u767D\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9700\u8981\u660E\u767D\u7684\u914D\u7F6E" aria-hidden="true">#</a> \u9700\u8981\u660E\u767D\u7684\u914D\u7F6E</h2><ul><li>loader</li><li>plugin</li><li>optimization <ul><li>splitChunks</li><li>minimizer</li></ul></li></ul>', 4);
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createVNode(_component_global_config)
  ], 64);
}
var webpackTodo_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { webpackTodo_html as default };
