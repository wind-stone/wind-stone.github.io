import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "babel-runtime-corejs2",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#babel-runtime-corejs2",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" @babel/runtime-corejs2")
], -1);
const _hoisted_2 = {
  href: "https://www.babeljs.cn/docs/babel-runtime-corejs2",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("code", null, "@babel/runtime-corejs2", -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u7C7B\u4F3C\u4E8E");
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("code", null, "@babel/runtime", -1);
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\uFF0C\u4F46\u662F\u589E\u52A0\u4E86");
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("code", null, "polyfill", -1);
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u7684\u529F\u80FD\u3002");
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<p>\u56E0\u6B64\uFF0C\u8BE5\u63D2\u4EF6\u53EF\u4EE5\u4EE3\u66FF<code>polyfill</code>\uFF0C\u5C06 Promise \u6216 Symbol \u8F6C\u6362\u4E3A\u5F15\u7528<code>core-js</code>\u5E93\u91CC\u7684\u51FD\u6570 \uFF0C\u4F46\u4E0D\u80FD\u5BF9\u5185\u7F6E\u5BF9\u8C61\u7684\u5B9E\u4F8B\u65B9\u6CD5\u8FDB\u884C\u8F6C\u6362\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Promise<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8F6C\u6362\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> _Promise <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@babel/runtime-corejs2/core-js/promise.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Babel \u7684\u8F85\u52A9\u5DE5\u5177\u51FD\u6570<code>helpers</code>\u4E5F\u662F\u8FD9\u4E48\u8F6C\u6362\u7684\u3002</p>', 5);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_2, [
        _hoisted_3,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_4,
      createVNode(_component_RouterLink, { to: "/es6/babel/@babel/runtime.html" }, {
        default: withCtx(() => [
          _hoisted_5
        ]),
        _: 1
      }),
      _hoisted_6,
      _hoisted_7,
      _hoisted_8
    ]),
    _hoisted_9,
    createVNode(_component_global_config)
  ], 64);
}
var runtimeCorejs2_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { runtimeCorejs2_html as default };
