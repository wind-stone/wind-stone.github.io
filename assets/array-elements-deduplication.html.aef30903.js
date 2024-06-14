import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, d as createStaticVNode, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u3010\u521D\u7EA7\u3011\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u3010\u521D\u7EA7\u3011\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u3010\u521D\u7EA7\u3011\u6570\u7EC4\u53BB\u91CD</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// TODO</span>\n<span class="token punctuation">}</span>\n<span class="token function">unique</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [1,3,2]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>', 2);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u53C2\u8003\u7B54\u6848\uFF1A");
const _hoisted_4 = {
  href: "https://segmentfault.com/a/1190000016418021",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("JavaScript\u6570\u7EC4\u53BB\u91CD\uFF0812\u79CD\u65B9\u6CD5\uFF0C\u53F2\u4E0A\u6700\u5168\uFF09");
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>', 1);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      _hoisted_3,
      createBaseVNode("a", _hoisted_4, [
        _hoisted_5,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_6,
    createVNode(_component_global_config)
  ], 64);
}
var arrayElementsDeduplication_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { arrayElementsDeduplication_html as default };
