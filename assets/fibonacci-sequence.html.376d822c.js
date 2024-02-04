import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u6590\u6CE2\u90A3\u5951\u6570\u5217",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6590\u6CE2\u90A3\u5951\u6570\u5217",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6590\u6CE2\u90A3\u5951\u6570\u5217")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u9012\u5F52 + \u7F13\u5B58");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u52A8\u6001\u89C4\u5212");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u77E9\u9635\u5FEB\u901F\u5E42");
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<p>\u6590\u6CE2\u90A3\u5951\u6570\u5217\u7684\u5B9A\u4E49\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">F</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>\n<span class="token constant">F</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>\n<span class="token constant">F</span><span class="token punctuation">(</span><span class="token constant">N</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token constant">N</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token constant">N</span> <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \u5176\u4E2D <span class="token constant">N</span> <span class="token operator">&gt;</span> <span class="token number">1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6590\u6CE2\u90A3\u5951\u6570\u5217\u7531<code>0</code>\u548C<code>1</code>\u5F00\u59CB\uFF0C\u4E4B\u540E\u7684\u6590\u6CE2\u90A3\u5951\u6570\u5C31\u662F\u7531\u4E4B\u524D\u7684\u4E24\u6570\u76F8\u52A0\u800C\u5F97\u51FA\u3002</p><h2 id="\u9012\u5F52-\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52-\u7F13\u5B58" aria-hidden="true">#</a> \u9012\u5F52 + \u7F13\u5B58</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> n<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// \u4F18\u5148\u67E5\u770B\u7F13\u5B58\u91CC\u662F\u5426\u6709\u6570\u636E</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> cache<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// \u8BA1\u7B97\u7ED3\u679C\uFF0C\u5E76\u653E\u5165\u7F13\u5B58</span>\n    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    cache<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> result<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u590D\u6742\u5EA6\u5206\u6790:</p><ul><li>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(n)</li><li>\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(n)</li></ul><h2 id="\u52A8\u6001\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212" aria-hidden="true">#</a> \u52A8\u6001\u89C4\u5212</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">fib</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token constant">MOD</span> <span class="token operator">=</span> <span class="token number">1000000007</span><span class="token punctuation">;</span> <span class="token comment">// \u4E3A\u9632\u6B62\u6570\u5B57\u8FC7\u5927\uFF0C\u9700\u8981\u8FDB\u884C\u53D6\u6A21</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> n<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> q <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// p \u8868\u793A fib(n-2)</span>\n        <span class="token comment">// q \u8868\u793A fib(n-1)</span>\n        <span class="token comment">// r \u8868\u793A fib(n)</span>\n        p <span class="token operator">=</span> q<span class="token punctuation">;</span>\n        q <span class="token operator">=</span> r<span class="token punctuation">;</span>\n        r <span class="token operator">=</span> <span class="token punctuation">(</span>p <span class="token operator">+</span> q<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token constant">MOD</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> r<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u590D\u6742\u5EA6\u5206\u6790:</p><ul><li>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(n)</li><li>\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(1)</li></ul>', 11);
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u89E3\u6CD5\u8BE6\u89C1: ");
const _hoisted_18 = {
  href: "https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/solution/fei-bo-na-qi-shu-lie-by-leetcode-solutio-hbss/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_19 = /* @__PURE__ */ createTextVNode("LeetCode - \u6590\u6CE2\u90A3\u5951\u6570\u5217 - \u5B98\u65B9\u89E3\u7B54");
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u77E9\u9635\u5FEB\u901F\u5E42",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u77E9\u9635\u5FEB\u901F\u5E42",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u77E9\u9635\u5FEB\u901F\u5E42")
], -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("p", null, "\u590D\u6742\u5EA6\u5206\u6790", -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(logn)"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(1)")
], -1);
const _hoisted_23 = /* @__PURE__ */ createTextVNode("\u6D89\u53CA\u5230\u7EBF\u6027\u4EE3\u6570\uFF0C\u5B9E\u5728\u770B\u4E0D\u61C2\uFF0C\u4E86\u89E3\u6709\u8FD9\u4E48\u4E2A\u89E3\u6CD5\u5C31\u884C\u3002\u8BE6\u89C1\uFF1A");
const _hoisted_24 = {
  href: "https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/solution/fei-bo-na-qi-shu-lie-by-leetcode-solutio-hbss/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_25 = /* @__PURE__ */ createTextVNode("LeetCode - \u6590\u6CE2\u90A3\u5951\u6570\u5217 - \u5B98\u65B9\u89E3\u7B54");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u9012\u5F52-\u7F13\u5B58" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u52A8\u6001\u89C4\u5212" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u77E9\u9635\u5FEB\u901F\u5E42" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_6,
    createBaseVNode("p", null, [
      _hoisted_17,
      createBaseVNode("a", _hoisted_18, [
        _hoisted_19,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_20,
    _hoisted_21,
    _hoisted_22,
    createBaseVNode("p", null, [
      _hoisted_23,
      createBaseVNode("a", _hoisted_24, [
        _hoisted_25,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var fibonacciSequence_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { fibonacciSequence_html as default };
