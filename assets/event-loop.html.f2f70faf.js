import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u4E8B\u4EF6\u5FAA\u73AF",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u4E8B\u4EF6\u5FAA\u73AF",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u4E8B\u4EF6\u5FAA\u73AF")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("setTimeout\u3001setInterval");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u5EF6\u65F6\u65F6\u95F4\u53C2\u6570 delayTime");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5806\u79EF\u672A\u6267\u884C\u7684 setInterval \u56DE\u8C03\u53EA\u4F1A\u6267\u884C\u4E00\u4E2A");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u793A\u4F8B");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u5B8F\u4EFB\u52A1/\u5FAE\u4EFB\u52A1\u961F\u5217");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u5B8F\u4EFB\u52A1\u3001\u5FAE\u4EFB\u52A1\u4E0E\u6E32\u67D3\u7684\u5173\u7CFB");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u6D4F\u89C8\u5668\u7684\u72EC\u6709\u7684 Event Loop");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("requestAnimationFrame");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u793A\u4F8B\u4E00");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u7528\u6237\u70B9\u51FB\u4E0E\u4EE3\u7801\u89E6\u53D1\u70B9\u51FB");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("Node.js \u7684 Event Loop");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("process.nextTick");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("setImmediate");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u6CE8\u610F\u4E8B\u9879");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u5B9A\u65F6\u5668\u65F6\u95F4\u7684\u786E\u5B9A");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u7528\u6237\u89E6\u53D1\u4E8B\u4EF6/\u4EE3\u7801\u89E6\u53D1\u4E8B\u4EF6 \u533A\u522B");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("Reference");
const _hoisted_20 = /* @__PURE__ */ createStaticVNode('<h2 id="settimeout\u3001setinterval" tabindex="-1"><a class="header-anchor" href="#settimeout\u3001setinterval" aria-hidden="true">#</a> setTimeout\u3001setInterval</h2><h3 id="\u5EF6\u65F6\u65F6\u95F4\u53C2\u6570-delaytime" tabindex="-1"><a class="header-anchor" href="#\u5EF6\u65F6\u65F6\u95F4\u53C2\u6570-delaytime" aria-hidden="true">#</a> \u5EF6\u65F6\u65F6\u95F4\u53C2\u6570 delayTime</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>setTimeout<span class="token operator">/</span><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">,</span> delayTime<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6CE8\u610F\uFF0C<code>delayTime</code>\u7684\u65F6\u95F4\uFF0C\u662F\u6307\u5728<code>delayTime</code>\u65F6\u95F4\u540E\u5C06\u51FD\u6570\u653E\u5165\u4E8B\u4EF6\u961F\u5217\u4E2D\uFF0C\u800C\u4E0D\u662F\u7ACB\u5373\u653E\u5165\u4E8B\u4EF6\u961F\u5217\u4E2D\u7B49\u5F85<code>delay</code>\u65F6\u95F4\u540E\u6267\u884C</p><h3 id="\u5806\u79EF\u672A\u6267\u884C\u7684-setinterval-\u56DE\u8C03\u53EA\u4F1A\u6267\u884C\u4E00\u4E2A" tabindex="-1"><a class="header-anchor" href="#\u5806\u79EF\u672A\u6267\u884C\u7684-setinterval-\u56DE\u8C03\u53EA\u4F1A\u6267\u884C\u4E00\u4E2A" aria-hidden="true">#</a> \u5806\u79EF\u672A\u6267\u884C\u7684 setInterval \u56DE\u8C03\u53EA\u4F1A\u6267\u884C\u4E00\u4E2A</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> timer<span class="token punctuation">;</span>\n<span class="token keyword">let</span> <span class="token function-variable function">countdown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">--</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BA1\u65F6\u7ED3\u675F&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\ntimer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span>countdown<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> init <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">while</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> init <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5C1D\u8BD5\u6267\u884C\u4EE5\u4E0A\u4EE3\u7801\u4F60\u4F1A\u53D1\u73B0\uFF0C\u5C3D\u7BA1\u56E0\u4E3A<code>while</code>\u8BED\u53E5\u963B\u585E\u4E86 10s\uFF0C\u671F\u95F4\u53EF\u80FD\u6709 10 \u4E2A\u56DE\u8C03\u51FD\u6570\u8FDB\u5165\u4E86\u4E8B\u4EF6\u961F\u5217\u91CC\uFF0C\u4F46\u662F\u5728\u963B\u585E\u7ED3\u675F\u540E\uFF0C\u4ECD\u7136\u53EA\u8F93\u51FA\u4E86<code>4</code>\uFF0C\u4E4B\u540E\u6BCF\u9694 1s \u4F9D\u6B21\u8F93\u51FA<code>3</code>\u3001<code>2</code>..</p><p>\u8FD9\u662F\u56E0\u4E3A\uFF0C\u5C3D\u7BA1\u5728\u4E3B\u7EBF\u7A0B\u963B\u585E\u7684\u8FC7\u7A0B\u4E2D\u6709\u591A\u4E2A\u56DE\u8C03\u51FD\u6570\u8FDB\u5165\u4E86\u4E8B\u4EF6\u961F\u5217\uFF0C\u53D1\u751F\u4E86\u56DE\u8C03\u51FD\u6570\u7684\u5806\u79EF\uFF0C\u4F46\u662F\u5728\u963B\u585E\u7ED3\u675F\u540E\u6267\u884C\u4E8B\u4EF6\u961F\u5217\u91CC\u7684\u56DE\u8C03\u51FD\u6570\u65F6\uFF0C\u53EA\u4F1A\u6267\u884C\u4E00\u4E2A\u3002\u56E0\u6B64\u4F7F\u7528<code>setInterval</code>\u8FDB\u884C\u5012\u8BA1\u65F6\u662F\u4E0D\u592A\u51C6\u786E\u7684\u3002</p><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">*</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u7684\u610F\u56FE\u662F\u4EC0\u4E48\uFF1F\u6709\u4EC0\u4E48\u95EE\u9898\uFF1F</p><ul><li>\u89E3\u51B3\u65B9\u6CD5\u4E00\uFF1AIIFE\uFF08\u7ACB\u5373\u6267\u884C\u51FD\u6570\u8868\u8FBE\u5F0F\uFF09</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">*</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u89E3\u51B3\u65B9\u6CD5\u4E8C\uFF1AIIFE + \u8FD4\u56DE\u51FD\u6570</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token operator">*</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u89E3\u51B3\u65B9\u6CD5\u4E09\uFF1A<code>let</code>\uFF08<code>let</code>\u4E0D\u4EC5\u662F\u5728\u5FAA\u73AF\u91CC\u5F15\u5165\u4E86\u4E00\u4E2A\u65B0\u7684\u53D8\u91CF\u73AF\u5883\uFF0C\u800C\u662F\u9488\u5BF9\u6BCF\u6B21\u8FED\u4EE3\u90FD\u4F1A\u521B\u5EFA\u8FD9\u6837\u4E00\u4E2A\u65B0\u4F5C\u7528\u57DF\uFF09</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">*</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u5B8F\u4EFB\u52A1-\u5FAE\u4EFB\u52A1\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u5B8F\u4EFB\u52A1-\u5FAE\u4EFB\u52A1\u961F\u5217" aria-hidden="true">#</a> \u5B8F\u4EFB\u52A1/\u5FAE\u4EFB\u52A1\u961F\u5217</h2><p>Event Loop \u91CC\u5B58\u5728\u4E24\u7C7B\u961F\u5217\uFF0C\u5206\u522B\u4E3A\u5B8F\u4EFB\u52A1\uFF08Macrotask\uFF09\u548C\u5FAE\u4EFB\u52A1\uFF08Microtask\uFF09\u3002\u6BCF\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u90FD\u6709\u4E00\u4E2A\u5FAE\u4EFB\u52A1\u961F\u5217\u3002</p><ul><li>\u5B8F\u4EFB\u52A1 <ul><li>script(\u6574\u4F53\u4EE3\u7801)</li><li>setTimeout</li><li>setInterval</li><li>setImmediate</li><li>I/O</li><li>UI rendering</li></ul></li><li>\u5FAE\u4EFB\u52A1 <ul><li>process.nextTick</li><li>Promises</li><li>Object.observe</li><li>MutationObserver</li></ul></li></ul><p>\u6267\u884C\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><ul><li>JavaScript \u5F15\u64CE\u9996\u5148\u4ECE\u6D88\u606F\u961F\u5217\u4E2D\u53D6\u51FA\u7B2C\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u6267\u884C\u3002\u8BE5\u5B8F\u4EFB\u52A1\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u82E5\u662F\u4EA7\u751F\u53E6\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u5219\u5C06\u5176\u52A0\u5165\u6D88\u606F\u961F\u5217\uFF1B\u82E5\u662F\u4EA7\u751F\u5FAE\u4EFB\u52A1\uFF0C\u5219\u52A0\u5165\u5230\u8BE5\u5B8F\u4EFB\u52A1\u7684\u5FAE\u4EFB\u52A1\u961F\u5217\u3002</li><li>\u5B8F\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u4F9D\u6B21\u6309\u5E8F\u6267\u884C\u8BE5\u5B8F\u4EFB\u52A1\u7684\u5FAE\u4EFB\u52A1\u961F\u5217\u91CC\u7684\u6BCF\u4E00\u4E2A\u5FAE\u4EFB\u52A1\u3002\u5FAE\u4EFB\u52A1\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u82E5\u662F\u4EA7\u751F\u5B8F\u4EFB\u52A1\u5219\u5C06\u5176\u52A0\u5165\u6D88\u606F\u961F\u5217\uFF1B\u82E5\u662F\u4EA7\u751F\u5FAE\u4EFB\u52A1\uFF0C\u5219\u7EE7\u7EED\u52A0\u5165\u5230\u5F53\u524D\u7684\u5FAE\u4EFB\u52A1\u961F\u5217\u91CC\u3002</li><li>\u7EE7\u7EED\u4ECE\u6D88\u606F\u961F\u5217\u4E2D\u53D6\u51FA\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u6267\u884C\uFF0C\u91CD\u590D\u4EE5\u4E0A\u6B65\u9AA4\u3002</li></ul><h2 id="\u5B8F\u4EFB\u52A1\u3001\u5FAE\u4EFB\u52A1\u4E0E\u6E32\u67D3\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u5B8F\u4EFB\u52A1\u3001\u5FAE\u4EFB\u52A1\u4E0E\u6E32\u67D3\u7684\u5173\u7CFB" aria-hidden="true">#</a> \u5B8F\u4EFB\u52A1\u3001\u5FAE\u4EFB\u52A1\u4E0E\u6E32\u67D3\u7684\u5173\u7CFB</h2><ol><li>\u6267\u884C\u4E00\u4E2A\u5B8F\u4EFB\u52A1</li><li>\u6267\u884C\u8BE5\u5B8F\u4EFB\u52A1\u7684\u6240\u6709\u7684\u5FAE\u4EFB\u52A1</li><li>\u6700\u540E\uFF0C\uFF08\u5982\u6709\u5FC5\u8981\uFF09\u6D4F\u89C8\u5668\u8FDB\u884C\u6E32\u67D3</li></ol><p>\u6D4F\u89C8\u5668\u5FAA\u73AF\u8FDB\u884C\u4EE5\u4E0A\u6B65\u9AA4\u3002</p><h2 id="\u6D4F\u89C8\u5668\u7684\u72EC\u6709\u7684-event-loop" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7684\u72EC\u6709\u7684-event-loop" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u7684\u72EC\u6709\u7684 Event Loop</h2><h3 id="requestanimationframe" tabindex="-1"><a class="header-anchor" href="#requestanimationframe" aria-hidden="true">#</a> requestAnimationFrame</h3><p><code>requestAnimationFrame</code>\u51FD\u6570\u7684\u56DE\u8C03\u51FD\u6570\u4F1A\u52A0\u5165\u5230\u6E32\u67D3\u8FD9\u4E00\u8FB9\u7684\u961F\u5217\u4E2D\uFF0C\u5B83\u5728\u6E32\u67D3\u7684\u4E09\u4E2A\u6B65\u9AA4\uFF08S\uFF1A\uFF1F, L\uFF1Alayout\uFF0CP\uFF1Apaint\uFF09\u4E4B\u524D\u88AB\u6267\u884C\u3002\u901A\u5E38\u7528\u6765\u5904\u7406\u6E32\u67D3\u76F8\u5173\u7684\u5DE5\u4F5C\u3002</p><p><code>requestAnimationFrame</code>\u53EA\u5728\u6E32\u67D3\u8FC7\u7A0B\u4E4B\u524D\u8FD0\u884C\uFF0C\u56E0\u6B64\u4E25\u683C\u9075\u5B88\u201C\u6267\u884C\u4E00\u6B21\u6E32\u67D3\u4E00\u6B21\u201D\u3002</p><p>\u548C\u6E32\u67D3\u52A8\u753B\u76F8\u5173\u7684\uFF0C\u591A\u7528<code>requestAnimationFrame</code>\uFF0C\u4E0D\u4F1A\u6709\u6389\u5E27\u7684\u95EE\u9898\uFF08\u5373\u67D0\u4E00\u5E27\u6CA1\u6709\u6E32\u67D3\uFF0C\u4E0B\u4E00\u5E27\u628A\u4E24\u6B21\u7684\u7ED3\u679C\u4E00\u8D77\u6E32\u67D3\u4E86\uFF09</p><h4 id="\u793A\u4F8B\u4E00" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u4E00" aria-hidden="true">#</a> \u793A\u4F8B\u4E00</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token string">&#39;translateX(1000px)&#39;</span>\n<span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>tranition <span class="token operator">=</span> <span class="token string">&#39;transform 1s ease&#39;</span>\n    box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token string">&#39;translateX(500px)&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\u7684\u672C\u610F\u4ECE\u8BA9<code>box</code>\u5143\u7D20\u7684\u4F4D\u7F6E\u5148\u4ECE<code>0</code>\u77AC\u95F4\u79FB\u52A8\u5230\u53F3\u8FB9<code>1000px</code>\u5904\uFF0C\u7136\u540E\u518D\u4EE5\u52A8\u753B\u5F62\u5F0F\u7F13\u6162\u79FB\u52A8\u5230\u53F3\u8FB9<code>500px</code>\u5904\u3002</p><p>\u4F46\u662F\u56E0\u4E3A<code>requestAnimationFrame</code>\u662F\u5728\u6E32\u67D3\u8FC7\u7A0B\u4E4B\u524D\u8FDB\u884C\u7684\uFF0C\u5BFC\u81F4<code>box.style.transform = &#39;translateX(1000px)&#39;</code>\u4E0E<code>box.style.transform = &#39;translateX(500px)&#39;</code>\u90FD\u5728\u4E0B\u4E00\u5E27\u51FA\u73B0\u4E4B\u524D\u6267\u884C\uFF0C\u4E5F\u5C31\u662F\u8FD9\u4E24\u884C\u4EE3\u7801\u5408\u5E76\u4E86\uFF08\u6216\u8005\u8BF4\u540E\u8005\u8986\u76D6\u4E86\u524D\u8005\uFF09\uFF0C\u6700\u7EC8\u5C55\u73B0\u7684\u7ED3\u679C\u662F\uFF0C<code>box</code>\u5143\u7D20\u7684\u4F4D\u7F6E\u4ECE<code>0</code>\u4EE5\u52A8\u753B\u7684\u5F62\u5F0F\u7F13\u6162\u79FB\u52A8\u5230\u53F3\u8FB9<code>500px</code>\u5904\u3002</p><p>\u90A3\u5982\u4F55\u5B9E\u73B0\u539F\u5148\u4EE3\u7801\u7684\u672C\u610F\u5462\uFF1F</p><ul><li><code>requestAnimationFrame</code>\u56DE\u8C03\u91CC\u518D\u8C03\u7528\u4E00\u6B21<code>requestAnimationFrame</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8BE5\u884C\u7684\u4EE3\u7801\u662F\u5728\u4E0B\u4E00\u5E27\u6E32\u67D3\u4E4B\u524D\u8C03\u7528\uFF08\u4E3B\u8FDB\u7A0B\u4EE3\u7801\uFF09</span>\nbox<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token string">&#39;translateX(1000px)&#39;</span>\n<span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// \u8BE5\u884C\u7684\u4EE3\u7801\u662F\u5728\u4E0B\u4E00\u5E27\u6E32\u67D3\u4E4B\u524D\u8C03\u7528\uFF08\u7B2C\u4E00\u4E2A requestAnimationFrame \u56DE\u8C03\u91CC\uFF09</span>\n    <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token comment">// \u8BE5\u884C\u7684\u4EE3\u7801\u662F\u5728\u4E0B\u4E00\u5E27\u6E32\u67D3\u4E4B\u540E\uFF0C\u4E0B\u4E0B\u4E00\u5E27\u6E32\u67D3\u4E4B\u524D\u8C03\u7528\uFF08\u7B2C\u4E8C\u4E2A requestAnimationFrame \u56DE\u8C03\u91CC\uFF09</span>\n        box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>tranition <span class="token operator">=</span> <span class="token string">&#39;transform 1s ease&#39;</span>\n        box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token string">&#39;translateX(500px)&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>\u4E24\u6B21<code>transform</code>\u8D4B\u503C\u4E4B\u95F4\u83B7\u53D6\u4E00\u4E0B\u5F53\u524D\u7684\u8BA1\u7B97\u6837\u5F0F</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token string">&#39;translateX(1000px)&#39;</span>\n<span class="token function">getComputedStyle</span><span class="token punctuation">(</span>box<span class="token punctuation">)</span> <span class="token comment">// \u4F2A\u4EE3\u7801\uFF0C\u53EA\u8981\u83B7\u53D6\u4E00\u4E0B\u5F53\u524D\u7684\u8BA1\u7B97\u6837\u5F0F\u5373\u53EF</span>\nbox<span class="token punctuation">.</span>style<span class="token punctuation">.</span>tranition <span class="token operator">=</span> <span class="token string">&#39;transform 1s ease&#39;</span>\nbox<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token string">&#39;translateX(500px)&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u7528\u6237\u70B9\u51FB\u4E0E\u4EE3\u7801\u89E6\u53D1\u70B9\u51FB" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u70B9\u51FB\u4E0E\u4EE3\u7801\u89E6\u53D1\u70B9\u51FB" aria-hidden="true">#</a> \u7528\u6237\u70B9\u51FB\u4E0E\u4EE3\u7801\u89E6\u53D1\u70B9\u51FB</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;microtask 1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;listener 1&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nbutton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;microtask 2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;listener 2&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5728\u6D4F\u89C8\u5668\u4E0A\u8FD0\u884C\u540E\uFF0C\u7528\u6237\u70B9\u51FB\u6309\u94AE\uFF0C\u4F1A\u6309\u987A\u5E8F\u6253\u5370\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>listener <span class="token number">1</span>\nmicrotask <span class="token number">1</span>\nlistener <span class="token number">2</span>\nmicrotask <span class="token number">2</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4F46\u5982\u679C\u5728\u4E0A\u9762\u4EE3\u7801\u7684\u6700\u540E\u52A0\u4E0A<code>button.click()</code>\uFF0C\u6253\u5370\u987A\u5E8F\u4F1A\u6709\u6240\u533A\u522B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>listener <span class="token number">1</span>\nlistener <span class="token number">2</span>\nmicrotask <span class="token number">1</span>\nmicrotask <span class="token number">2</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7528\u6237\u70B9\u51FB\u6309\u94AE\u7684\u6253\u5370\u7ED3\u679C\u5F88\u5BB9\u6613\u89E3\u91CA\uFF1A<code>click</code>\u56DE\u8C03\u662F\u4E00<code>macrotask</code>\uFF0C<code>promise.then()</code>\u6DFB\u52A0\u7684\u56DE\u8C03\u662F\u4E00<code>microtask</code>\uFF0C\u6BCF\u4E2A<code>macrotask</code>\u6267\u884C\u5B8C\u540E\u90FD\u8981\u5148\u5C06\u6240\u6709\u7684<code>microtask</code>\u90FD\u6267\u884C\u5B8C\u624D\u80FD\u7EE7\u7EED\u6267\u884C\u4E0B\u4E00\u4E2A<code>macrotask</code>\u3002</p><p>\u4F46\u662F\u5BF9\u4E8E\u5728\u4EE3\u7801\u91CC\u4E3B\u52A8\u8C03\u52A8<code>button.click()</code>\uFF0C\u5C31\u7A0D\u5FAE\u602A\u5F02\u4E00\u4E9B\uFF0C\u800C\u8FD9\u602A\u5F02\u7684\u884C\u4E3A\u662F\u7531\u6D4F\u89C8\u5668\u7684\u5185\u90E8\u5B9E\u73B0\u9020\u6210\u7684\uFF1A\u4F7F\u7528<code>button.click()</code>\u65F6\uFF0C\u6D4F\u89C8\u5668\u7684\u5185\u90E8\u5B9E\u73B0\u662F\u628A 2 \u4E2A listener \u90FD\u540C\u6B65\u6267\u884C\u3002\u56E0\u6B64<code>listener 1</code>\u4E4B\u540E\uFF0C\u6267\u884C\u961F\u5217\u8FD8\u6CA1\u7A7A\uFF0C\u8FD8\u8981\u7EE7\u7EED\u6267\u884C<code>listener 2</code>\u4E4B\u540E\u624D\u884C\u3002\u6240\u4EE5<code>listener 2</code>\u4F1A\u65E9\u4E8E<code>microtask 1</code>\u3002\u91CD\u70B9\u5728\u4E8E\u6D4F\u89C8\u5668\u7684\u5185\u90E8\u5B9E\u73B0\uFF0C<code>click</code>\u65B9\u6CD5\u4F1A\u5148\u91C7\u96C6\u6709\u54EA\u4E9B listener\uFF0C\u518D\u4F9D\u6B21\u89E6\u53D1\u3002</p><h2 id="node-js-\u7684-event-loop" tabindex="-1"><a class="header-anchor" href="#node-js-\u7684-event-loop" aria-hidden="true">#</a> Node.js \u7684 Event Loop</h2><h3 id="process-nexttick" tabindex="-1"><a class="header-anchor" href="#process-nexttick" aria-hidden="true">#</a> process.nextTick</h3><p><code>process.nextTick</code>\u65B9\u6CD5\u53EF\u4EE5\u5728\u5F53\u524D&quot;\u6267\u884C\u6808&quot;\u7684\u5C3E\u90E8----\u4E0B\u4E00\u6B21 Event Loop\uFF08\u4E3B\u7EBF\u7A0B\u8BFB\u53D6&quot;\u4EFB\u52A1\u961F\u5217&quot;\uFF09\u4E4B\u524D----\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5B83\u6307\u5B9A\u7684\u4EFB\u52A1\u603B\u662F\u53D1\u751F\u5728\u6240\u6709\u5F02\u6B65\u4EFB\u52A1\u4E4B\u524D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;TIMEOUT FIRED&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>\n\n<span class="token comment">// \u8FD0\u884C\u7ED3\u679C\uFF1A</span>\n<span class="token comment">// 0</span>\n<span class="token comment">// 1</span>\n<span class="token comment">// 2</span>\n<span class="token comment">// TIMEOUT FIRED</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u7531\u4E8E<code>process.nextTick</code>\u65B9\u6CD5\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u603B\u662F\u5728\u5F53\u524D&quot;\u6267\u884C\u6808&quot;\u7684\u5C3E\u90E8\u89E6\u53D1\uFF0C\u6240\u4EE5\u4E0D\u4EC5\u51FD\u6570 A \u6BD4 setTimeout \u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570 timeout \u5148\u6267\u884C\uFF0C\u800C\u4E14\u51FD\u6570 B \u4E5F\u6BD4 timeout \u5148\u6267\u884C\u3002\u8FD9\u8BF4\u660E\uFF0C\u5982\u679C\u6709\u591A\u4E2A<code>process.nextTick</code>\u8BED\u53E5\uFF08\u4E0D\u7BA1\u5B83\u4EEC\u662F\u5426\u5D4C\u5957\uFF09\uFF0C\u5C06\u5168\u90E8\u5728\u5F53\u524D&quot;\u6267\u884C\u6808&quot;\u6267\u884C\u3002</p><h3 id="setimmediate" tabindex="-1"><a class="header-anchor" href="#setimmediate" aria-hidden="true">#</a> setImmediate</h3><p><code>setImmediate</code>\u65B9\u6CD5\u5219\u662F\u5728\u5F53\u524D&quot;\u4EFB\u52A1\u961F\u5217&quot;\u7684\u5C3E\u90E8\u6DFB\u52A0\u4E8B\u4EF6\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5B83\u6307\u5B9A\u7684\u4EFB\u52A1\u603B\u662F\u5728\u4E0B\u4E00\u6B21 Event Loop \u65F6\u6267\u884C\uFF0C\u8FD9\u4E0E<code>setTimeout(fn, 0)</code>\u5F88\u50CF\u3002</p>', 54);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("code", null, "setImmediate", -1);
const _hoisted_75 = /* @__PURE__ */ createTextVNode("\u65B9\u6CD5\u4E0E");
const _hoisted_76 = /* @__PURE__ */ createBaseVNode("code", null, "setTimeout", -1);
const _hoisted_77 = /* @__PURE__ */ createTextVNode("\u65B9\u6CD5\u7684\u533A\u522B\uFF0C\u53EF\u53C2\u8003");
const _hoisted_78 = {
  href: "http://www.ruanyifeng.com/blog/2014/10/event-loop.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_79 = /* @__PURE__ */ createTextVNode("\u962E\u4E00\u5CF0-JavaScript \u8FD0\u884C\u673A\u5236\u8BE6\u89E3\uFF1A\u518D\u8C08Event Loop");
const _hoisted_80 = /* @__PURE__ */ createStaticVNode('<h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h2><h3 id="\u5B9A\u65F6\u5668\u65F6\u95F4\u7684\u786E\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u5668\u65F6\u95F4\u7684\u786E\u5B9A" aria-hidden="true">#</a> \u5B9A\u65F6\u5668\u65F6\u95F4\u7684\u786E\u5B9A</h3><p>\u6211\u4EEC\u8C03\u7528<code>setTimeout(fn, delay)</code>\u51FD\u6570\u540E\uFF0C<code>fn</code> \u4F1A\u4EA4\u7531\u5B9A\u65F6\u5668\u7EBF\u7A0B\uFF0C\u5B9A\u65F6\u5668\u7EBF\u7A0B\u5728\u5230\u8FBE<code>delay</code>\u65F6\u95F4\u540E\uFF0C\u5C06<code>fn</code>\u52A0\u5165\u5230\u4E8B\u4EF6\u961F\u5217\u4E2D\u3002</p><h3 id="\u7528\u6237\u89E6\u53D1\u4E8B\u4EF6-\u4EE3\u7801\u89E6\u53D1\u4E8B\u4EF6-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u89E6\u53D1\u4E8B\u4EF6-\u4EE3\u7801\u89E6\u53D1\u4E8B\u4EF6-\u533A\u522B" aria-hidden="true">#</a> \u7528\u6237\u89E6\u53D1\u4E8B\u4EF6/\u4EE3\u7801\u89E6\u53D1\u4E8B\u4EF6 \u533A\u522B</h3>', 4);
const _hoisted_84 = /* @__PURE__ */ createTextVNode("\u6587\u7AE0 ");
const _hoisted_85 = {
  href: "https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_86 = /* @__PURE__ */ createTextVNode("Tasks, microtasks, queues and schedules");
const _hoisted_87 = /* @__PURE__ */ createTextVNode(" \u91CC\u63D0\u5230\uFF0C\u7531\u7528\u6237\u4EA4\u4E92\u89E6\u53D1\u7684\u4E8B\u4EF6\u56DE\u8C03\u548C\u4EE3\u7801\u91CC\u89E6\u53D1\u7684\u4E8B\u4EF6\u56DE\u8C03\uFF0C\u6267\u884C\u65F6\u95F4\u662F\u4E0D\u4E00\u6837\u7684\u3002");
const _hoisted_88 = /* @__PURE__ */ createBaseVNode("p", null, "\u7B80\u5355\u8BF4\uFF0C\u5982\u679C\u662F\u7531\u7528\u6237\u4EA4\u4E92\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u4F1A\u52A0\u5165\u5230\u4EFB\u52A1\u961F\u5217\u4E2D\uFF0C\u7B49\u5F85\u4E0B\u4E00\u6B21 Event Loop\uFF1B\u5982\u679C\u662F\u7531\u4EE3\u7801\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u56DE\u8C03\u4F1A\u7ACB\u5373\u540C\u6B65\u6267\u884C\u3002", -1);
const _hoisted_89 = /* @__PURE__ */ createBaseVNode("p", null, "\u6B64\u5916\uFF0C\u540C\u4E00\u4E8B\u4EF6\u7684\u5192\u6CE1\u884C\u4E3A\uFF0C\u662F\u5728\u540C\u4E00 Event Loop \u91CC\u6267\u884C\u7684\uFF0C\u7C7B\u4F3C\u4E8E microtask\u3002", -1);
const _hoisted_90 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "reference",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#reference",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Reference")
], -1);
const _hoisted_91 = {
  href: "http://www.ruanyifeng.com/blog/2014/10/event-loop.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_92 = /* @__PURE__ */ createTextVNode("\u962E\u4E00\u5CF0-JavaScript \u8FD0\u884C\u673A\u5236\u8BE6\u89E3\uFF1A\u518D\u8C08Event Loop");
const _hoisted_93 = {
  href: "http://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_94 = /* @__PURE__ */ createTextVNode("\u962E\u4E00\u5CF0-\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B\u7684\u4E00\u4E2A\u7B80\u5355\u89E3\u91CA");
const _hoisted_95 = {
  href: "https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_96 = /* @__PURE__ */ createTextVNode("Tasks, microtasks, queues and schedules");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#settimeout\u3001setinterval" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5EF6\u65F6\u65F6\u95F4\u53C2\u6570-delaytime" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5806\u79EF\u672A\u6267\u884C\u7684-setinterval-\u56DE\u8C03\u53EA\u4F1A\u6267\u884C\u4E00\u4E2A" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u793A\u4F8B" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5B8F\u4EFB\u52A1-\u5FAE\u4EFB\u52A1\u961F\u5217" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5B8F\u4EFB\u52A1\u3001\u5FAE\u4EFB\u52A1\u4E0E\u6E32\u67D3\u7684\u5173\u7CFB" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6D4F\u89C8\u5668\u7684\u72EC\u6709\u7684-event-loop" }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#requestanimationframe" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u793A\u4F8B\u4E00" }, {
                    default: withCtx(() => [
                      _hoisted_11
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u7528\u6237\u70B9\u51FB\u4E0E\u4EE3\u7801\u89E6\u53D1\u70B9\u51FB" }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#node-js-\u7684-event-loop" }, {
            default: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#process-nexttick" }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#setimmediate" }, {
                default: withCtx(() => [
                  _hoisted_15
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6CE8\u610F\u4E8B\u9879" }, {
            default: withCtx(() => [
              _hoisted_16
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5B9A\u65F6\u5668\u65F6\u95F4\u7684\u786E\u5B9A" }, {
                default: withCtx(() => [
                  _hoisted_17
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u7528\u6237\u89E6\u53D1\u4E8B\u4EF6-\u4EE3\u7801\u89E6\u53D1\u4E8B\u4EF6-\u533A\u522B" }, {
                default: withCtx(() => [
                  _hoisted_18
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#reference" }, {
            default: withCtx(() => [
              _hoisted_19
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_20,
    createBaseVNode("p", null, [
      _hoisted_74,
      _hoisted_75,
      _hoisted_76,
      _hoisted_77,
      createBaseVNode("a", _hoisted_78, [
        _hoisted_79,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_80,
    createBaseVNode("p", null, [
      _hoisted_84,
      createBaseVNode("a", _hoisted_85, [
        _hoisted_86,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_87
    ]),
    _hoisted_88,
    _hoisted_89,
    _hoisted_90,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_91, [
          _hoisted_92,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_93, [
          _hoisted_94,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_95, [
          _hoisted_96,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var eventLoop_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { eventLoop_html as default };
