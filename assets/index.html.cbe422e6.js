import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "vue-ssr",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#vue-ssr",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Vue SSR")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("SSR \u7684\u4F18\u52BF\u548C\u52A3\u52BF");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u5B66\u4E60\u8BB0\u5F55");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("createBundleRenderer");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u670D\u52A1\u5668\u7AEF\u7684\u5165\u53E3\u6587\u4EF6");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("vuex-router-sync");
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<h2 id="ssr-\u7684\u4F18\u52BF\u548C\u52A3\u52BF" tabindex="-1"><a class="header-anchor" href="#ssr-\u7684\u4F18\u52BF\u548C\u52A3\u52BF" aria-hidden="true">#</a> SSR \u7684\u4F18\u52BF\u548C\u52A3\u52BF</h2><p>\u4F18\u52BF\uFF1A</p><ul><li>\u66F4\u597D\u7684 SEO</li><li>\u66F4\u5FEB\u7684\u5185\u5BB9\u5230\u8FBE\u65F6\u95F4 (<code>time-to-content</code>)</li></ul><p>\u52A3\u52BF\uFF1A</p><ul><li>\u53EA\u8C03\u7528<code>created</code>\u53CA\u4E4B\u524D\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\uFF0C\u4E00\u4E9B\u5916\u90E8\u6269\u5C55\u5E93(<code>external library</code>)\u53EF\u80FD\u9700\u8981\u7279\u6B8A\u5904\u7406\uFF0C\u624D\u80FD\u5728\u670D\u52A1\u5668\u6E32\u67D3\u5E94\u7528\u7A0B\u5E8F\u4E2D\u8FD0\u884C\u3002</li><li>\u6D89\u53CA\u6784\u5EFA\u8BBE\u7F6E\u548C\u90E8\u7F72\u7684\u66F4\u591A\u8981\u6C42\uFF0C\u9700\u8981\u5904\u4E8E Node.js server \u8FD0\u884C\u73AF\u5883\u3002</li><li>\u66F4\u591A\u7684\u670D\u52A1\u5668\u7AEF\u8D1F\u8F7D\uFF0C\u6BD4\u5982 CPU</li></ul><h2 id="\u5B66\u4E60\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u5B66\u4E60\u8BB0\u5F55" aria-hidden="true">#</a> \u5B66\u4E60\u8BB0\u5F55</h2><h3 id="createbundlerenderer" tabindex="-1"><a class="header-anchor" href="#createbundlerenderer" aria-hidden="true">#</a> createBundleRenderer</h3><p><code>createBundleRenderer</code>\u65B9\u6CD5\uFF0C\u4E3B\u8981\u662F\u89E3\u51B3\u5F00\u53D1\u9636\u6BB5\u7F16\u8F91\u670D\u52A1\u7AEF\u4EE3\u7801\u540E\u4E0D\u80FD\u70ED\u66F4\u65B0\u7684\u95EE\u9898\u3002</p><h3 id="\u670D\u52A1\u5668\u7AEF\u7684\u5165\u53E3\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u7AEF\u7684\u5165\u53E3\u6587\u4EF6" aria-hidden="true">#</a> \u670D\u52A1\u5668\u7AEF\u7684\u5165\u53E3\u6587\u4EF6</h3><p>\u670D\u52A1\u5668\u7AEF\u7684\u5165\u53E3\u6587\u4EF6\uFF0C\u5E94\u8BE5\u5BFC\u51FA\u4E00\u4E2A\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A<code>context</code>\u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8C03\u7528\u540E Promise \u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u9700<code>resolve</code>\u4E00\u4E2A<code>app</code>\u5B9E\u4F8B\u3002</p><h3 id="vuex-router-sync" tabindex="-1"><a class="header-anchor" href="#vuex-router-sync" aria-hidden="true">#</a> vuex-router-sync</h3>', 11);
const _hoisted_19 = {
  href: "https://github.com/vuejs/vuex-router-sync",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createTextVNode("vuex-router-sync");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("\uFF0C\u7528\u4E8E\u5C06\u5F53\u524D\u8DEF\u7531\u7684\u72B6\u6001\u6CE8\u5165\u5230");
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("code", null, "store", -1);
const _hoisted_23 = /* @__PURE__ */ createTextVNode("\u91CC\uFF0C\u5F53\u8DEF\u7531\u53D8\u5316\u65F6\uFF0C");
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("code", null, "store.state.route", -1);
const _hoisted_25 = /* @__PURE__ */ createTextVNode("\u4E5F\u4F1A\u8DDF\u7740\u53D8\u5316\u3002");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#ssr-\u7684\u4F18\u52BF\u548C\u52A3\u52BF" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5B66\u4E60\u8BB0\u5F55" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#createbundlerenderer" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u670D\u52A1\u5668\u7AEF\u7684\u5165\u53E3\u6587\u4EF6" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#vuex-router-sync" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_8,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_19, [
        _hoisted_20,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_21,
      _hoisted_22,
      _hoisted_23,
      _hoisted_24,
      _hoisted_25
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
