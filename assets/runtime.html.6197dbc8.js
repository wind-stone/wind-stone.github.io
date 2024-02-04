import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "babel-runtime",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#babel-runtime",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" @babel/runtime")
], -1);
const _hoisted_2 = {
  href: "https://www.babeljs.cn/docs/babel-runtime",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("code", null, "@babel/runtime", -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u662F\u4E00\u4E2A\u5DE5\u5177\u5E93\uFF0C\u5305\u542B\u4E86 Babel \u6A21\u5757\u5316\u7684\u8FD0\u884C\u65F6\u8F85\u52A9\u5DE5\u5177\u51FD\u6570\u548C");
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("code", null, "regenerator-runtime", -1);
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save @babel/runtime\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>', 2);
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u53E6\u53EF\u53C2\u8003");
const _hoisted_10 = {
  href: "https://www.babeljs.cn/docs/babel-runtime-corejs2",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("code", null, "@babel/runtime-corejs2", -1);
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u8FD9\u610F\u5473\u7740\uFF0C\u8BE5\u63D2\u4EF6\u662F\u4F5C\u4E3A<code>@babel/plugin-transform-runtime</code>\u63D2\u4EF6\u7684\u8FD0\u884C\u65F6\u4F9D\u8D56\u4F7F\u7528\u7684\u3002</p><h2 id="why" tabindex="-1"><a class="header-anchor" href="#why" aria-hidden="true">#</a> Why</h2><p>\u6709\u4E9B Babel \u53EF\u80FD\u4F1A\u5F80\u7F16\u8BD1\u8F93\u51FA\u91CC\u6CE8\u5165\u4E00\u4E9B\u4EE3\u7801\uFF0C\u800C\u8FD9\u4E9B\u4EE3\u7801\u53EF\u80FD\u662F\u91CD\u590D\u7684\uFF0C\u56E0\u6B64\u5B58\u5728\u590D\u7528\u8FD9\u4E9B\u4EE3\u7801\u7684\u53EF\u80FD\u3002</p><p>\u6BD4\u5982\uFF0C<code>class</code>\u7684\u8F6C\u6362\uFF08\u975E<code>loose</code>\u6A21\u5F0F\uFF09\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8F6C\u6362\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">_classCallCheck</span><span class="token punctuation">(</span><span class="token parameter">instance<span class="token punctuation">,</span> Constructor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> <span class="token function-variable function">Circle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">_classCallCheck</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> Circle<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8FD9\u610F\u5473\u7740\u6BCF\u4E2A\u5305\u542B<code>class</code>\u7684\u6587\u4EF6\u90FD\u4F1A\u5B58\u5728\u4E00\u4E2A<code>_classCallCheck</code>\u51FD\u6570\u3002\u82E5\u662F\u4F7F\u7528<code>@babel/plugin-transform-runtime</code>\uFF0C\u5C06\u4F1A\u628A\u5BF9<code>_classCallCheck</code>\u7684\u5F15\u7528\u66FF\u6362\u4E3A\u5BF9<code>@babel/runtime</code>\u6A21\u5757\u7684\u5F15\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> _classCallCheck <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@babel/runtime/helpers/classCallCheck&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> <span class="token function-variable function">Circle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">_classCallCheck</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> Circle<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>@babel/runtime</code>\u4EC5\u662F\u4EE5\u6A21\u5757\u5316\u65B9\u5F0F\u5305\u542B\u4E86\u8FD9\u4E9B\u51FD\u6570\u7684\u5B9E\u73B0\u7684\u5305\u3002</p>', 11);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_2, [
        _hoisted_3,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_4,
      _hoisted_5,
      _hoisted_6
    ]),
    _hoisted_7,
    createBaseVNode("p", null, [
      _hoisted_9,
      createBaseVNode("a", _hoisted_10, [
        _hoisted_11,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_12
    ]),
    _hoisted_13,
    createVNode(_component_global_config)
  ], 64);
}
var runtime_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { runtime_html as default };
