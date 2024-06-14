import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u5DE5\u5177\u51FD\u6570",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5DE5\u5177\u51FD\u6570",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5DE5\u5177\u51FD\u6570")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u751F\u6210\u968F\u673A\u7684\u5B57\u6BCD\u6570\u5B57\u5B57\u7B26\u4E32");
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="\u751F\u6210\u968F\u673A\u7684\u5B57\u6BCD\u6570\u5B57\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u968F\u673A\u7684\u5B57\u6BCD\u6570\u5B57\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u751F\u6210\u968F\u673A\u7684\u5B57\u6BCD\u6570\u5B57\u5B57\u7B26\u4E32</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">generateRandomAlphaNum</span><span class="token punctuation">(</span><span class="token parameter">len</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> rdmString <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span><span class="token punctuation">(</span> <span class="token punctuation">;</span> rdmString<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> rdmString <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span>  rdmString<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8BF4\u660E\uFF1ANumber \u7684<code>toString()</code>\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A\u8868\u793A\u57FA\u6570\u7684\u53C2\u6570\uFF0C\u544A\u8BC9\u5B83\u8FD4\u56DE\u51E0\u8FDB\u5236\u6570\u503C\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\u3002</p>', 3);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u751F\u6210\u968F\u673A\u7684\u5B57\u6BCD\u6570\u5B57\u5B57\u7B26\u4E32" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_4,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
