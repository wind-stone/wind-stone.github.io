import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "promise-allsettled",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#promise-allsettled",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Promise.allSettled")
], -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u53C2\u8003\u5B9E\u73B0\uFF1A");
const _hoisted_3 = {
  href: "https://95yashsharma.medium.com/polyfill-for-promise-allsettled-965f9f2a003",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Polyfill for Promise.allSettled");
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Promise<span class="token punctuation">.</span><span class="token function-variable function">allSettled</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">promises</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> mappedPromises <span class="token operator">=</span> promises<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">p</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> p\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n          status<span class="token operator">:</span> <span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">,</span>\n          value<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n          status<span class="token operator">:</span> <span class="token string">&#39;rejected&#39;</span><span class="token punctuation">,</span>\n          reason<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>mappedPromises<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u53E6\u53EF\u53C2\u8003\uFF1A</p>', 2);
const _hoisted_7 = {
  href: "https://github.com/es-shims/Promise.allSettled",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createTextVNode("github - es-shims/Promise.allSettled");
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      _hoisted_2,
      createBaseVNode("a", _hoisted_3, [
        _hoisted_4,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_5,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_7, [
          _hoisted_8,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var promiseAllSettled_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { promiseAllSettled_html as default };
