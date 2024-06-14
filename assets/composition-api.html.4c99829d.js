import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, d as createStaticVNode, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> composition-api</h1><ul><li><code>setup</code>\u7684\u8C03\u7528\u65F6\u673A\uFF1F</li><li><code>setup</code>\u5185\u8C03\u7528<code>onMounted</code>\u7B49\u751F\u547D\u5468\u671F\u94A9\u5B50\u540E\uFF0C\u8FD9\u4E9B\u94A9\u5B50\u662F\u5982\u4F55\u5173\u8054\u5230\u7EC4\u4EF6\u5B9E\u4F8B<code>vm</code>\u4E0A\u7684\uFF1F</li><li><code>setup</code>\u8FD4\u56DE\u503C\u662F\u5982\u4F55\u6302\u5728<code>vm</code>\u4E0A\u7684\uFF1F</li></ul><h2 id="\u72B6\u6001\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u7BA1\u7406" aria-hidden="true">#</a> \u72B6\u6001\u7BA1\u7406</h2>', 3);
const _hoisted_4 = {
  href: "https://vuejsdevelopers.com/2020/10/05/composition-api-vuex/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Should You Use Composition API as a Replacement for Vuex?");
const _hoisted_6 = {
  href: "https://zhuanlan.zhihu.com/p/320445941",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u4E2D\u6587\u7248 - \u4F60\u662F\u5426\u5E94\u8BE5\u4F7F\u7528Composition API\u66FF\u4EE3Vuex\uFF1F");
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, "\u4F7F\u7528\u4F53\u9A8C\u4E0A\u6765\u8BF4\uFF0C\u4E0D\u501F\u52A9 Vuex \u6765\u505A\u72B6\u6001\u7BA1\u7406\u7684\u8BDD\uFF0C\u4EE3\u7801\u5199\u7740\u5F88\u96BE\u53D7\u3002", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u72B6\u6001\u7BA1\u7406\u7684\u4EE3\u7801\u7EC4\u7EC7\u65B9\u5F0F\u5343\u5947\u767E\u602A")
], -1);
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
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_6, [
          _hoisted_7,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_8,
    _hoisted_9,
    createVNode(_component_global_config)
  ], 64);
}
var compositionApi_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { compositionApi_html as default };
