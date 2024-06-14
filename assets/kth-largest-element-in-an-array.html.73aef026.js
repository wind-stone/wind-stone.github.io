import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "leetcode-\u6570\u7EC4\u4E2D\u7684\u7B2Ck\u4E2A\u6700\u5927\u5143\u7D20",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#leetcode-\u6570\u7EC4\u4E2D\u7684\u7B2Ck\u4E2A\u6700\u5927\u5143\u7D20",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" LeetCode - \u6570\u7EC4\u4E2D\u7684\u7B2CK\u4E2A\u6700\u5927\u5143\u7D20")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u3010medium\u3011\u83B7\u53D6\u7B2C-k-\u5927\u7684\u6570",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u3010medium\u3011\u83B7\u53D6\u7B2C-k-\u5927\u7684\u6570",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u3010Medium\u3011\u83B7\u53D6\u7B2C K \u5927\u7684\u6570")
], -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u53C2\u8003\uFF1A");
const _hoisted_4 = {
  href: "https://leetcode-cn.com/problems/kth-largest-element-in-an-array/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Leetcode - \u6570\u7EC4\u4E2D\u7684\u7B2CK\u4E2A\u6700\u5927\u5143\u7D20");
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", null, "\u53C2\u8003\u7B54\u6848\uFF1A", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", null, "\u65B9\u6CD5\u4E00\uFF1A\u5148\u6392\u5E8F\uFF0C\u540E\u83B7\u53D6\uFF0C\u6BD4\u5982\u5FEB\u6392", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u65F6\u95F4\u590D\u6742\u5EA6 "),
    /* @__PURE__ */ createBaseVNode("code", null, "O(nlogn)")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u7A7A\u95F4\u590D\u6742\u5EA6 "),
    /* @__PURE__ */ createBaseVNode("code", null, "O(logn)")
  ])
], -1);
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u65B9\u6CD5\u4E8C\uFF1A\u57FA\u4E8E\u5806\u6392\u5E8F\u7684\u9009\u62E9\u7B97\u6CD5\uFF0C");
const _hoisted_10 = {
  href: "https://blog.windstone.cc/interview/data-structure/heap/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u98CE\u52A8\u4E4B\u77F3\u7684\u535A\u5BA2 - \u5806");
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">TopK</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> maxIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> heap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Heap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    array<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">.</span>size <span class="token operator">&gt;</span> maxIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A<code>O(nlogk)</code>\uFF0C\u5176\u4E2D\uFF0C\u6BCF\u6B21\u8C03\u6574\u5806\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A<code>O(logk)</code></li><li>\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1A<code>O(k)</code></li></ul><p>\u65B9\u6CD5\u4E09\uFF1A\u5FEB\u6392\u7684\u53D8\u79CD\uFF0C\u9002\u7528\u786E\u5B9A\u6570\u91CF\u7684\u60C5\u51B5\u4E0B\u5BFB\u627E\u7B2C K \u5927\u7684\u6570\uFF0C\u56E0\u4E3A\u5DF2\u786E\u5B9A K\uFF0C\u53EF\u5C06\u5FEB\u6392\u91CC\u9488\u5BF9\u4E24\u8FB9\u9012\u5F52\u4F18\u5316\u4E3A\u53EA\u9488\u5BF9\u4E00\u8FB9\u8FDB\u884C\u9012\u5F52</p><ul><li>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A\u6700\u574F\u60C5\u51B5 <code>O(n^2)</code>\uFF0C\u5E73\u5747\u60C5\u51B5\u4E3A<code>O(n)</code></li><li>\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1A<code>O(logn)</code></li></ul>', 4);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      _hoisted_3,
      createBaseVNode("a", _hoisted_4, [
        _hoisted_5,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_6,
    _hoisted_7,
    _hoisted_8,
    createBaseVNode("p", null, [
      _hoisted_9,
      createBaseVNode("a", _hoisted_10, [
        _hoisted_11,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_12,
    createVNode(_component_global_config)
  ], 64);
}
var kthLargestElementInAnArray_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { kthLargestElementInAnArray_html as default };
