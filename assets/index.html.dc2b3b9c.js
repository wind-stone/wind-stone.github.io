import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, d as createStaticVNode, f as createTextVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u6D4F\u89C8\u5668" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668" aria-hidden="true">#</a> \u6D4F\u89C8\u5668</h1><h2 id="\u4E8B\u4EF6\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u4EE3\u7406" aria-hidden="true">#</a> \u4E8B\u4EF6\u4EE3\u7406</h2><p>\u7B80\u5355\u5B9E\u73B0\u4E00\u4E2A\u4E8B\u4EF6\u4EE3\u7406:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">delegate</span><span class="token punctuation">(</span><span class="token parameter">agent<span class="token punctuation">,</span>type<span class="token punctuation">,</span>selctor<span class="token punctuation">,</span>fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// agent.addEventListener(type,fn) \u5982\u679C\u662F\u8FD9\u6837 fn \u4E2D\u7684 this \u4F1A\u6307\u5411 agent</span>\n  agent<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token keyword">let</span> target <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">;</span>         <span class="token comment">// target\u6307\u5411\u5B9E\u9645\u70B9\u51FB\u7684\u6700\u91CC\u5C42\u7684\u5143\u7D20</span>\n      <span class="token keyword">let</span> ctarget <span class="token operator">=</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">;</span> <span class="token comment">// ctarget\u4F1A\u6C38\u8FDC\u6307\u5411agent</span>\n\n      <span class="token keyword">while</span><span class="token punctuation">(</span>target <span class="token operator">!=</span> ctarget<span class="token punctuation">)</span><span class="token punctuation">{</span>\n          <span class="token keyword">if</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span>selctor<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">// \u6539\u53D8 this \u7684\u6307\u5411</span>\n            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">return</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n          target <span class="token operator">=</span> target<span class="token punctuation">.</span>parentNode<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>', 4);
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u53C2\u8003: ");
const _hoisted_6 = {
  href: "https://github.com/caistrong/Blog/issues/65",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode("JavaScript\u4E8B\u4EF6\u59D4\u6258\u539F\u7406\u53CA\u5B9E\u73B0 #65");
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      _hoisted_5,
      createBaseVNode("a", _hoisted_6, [
        _hoisted_7,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
