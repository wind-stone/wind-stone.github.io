import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u6B63\u5219\u8868\u8FBE\u5F0F",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6B63\u5219\u8868\u8FBE\u5F0F",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6B63\u5219\u8868\u8FBE\u5F0F")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u6B63\u5219\u65B9\u6CD5");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u5B57\u7B26\u4E32\u7684\u6B63\u5219\u65B9\u6CD5");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("String.prototype.match(reg)");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("String.prototype.search(reg)");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("String.prototype.replace(reg, str)");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("String.prototype.splice(reg)");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5B57\u7B26\u4E32\u65B9\u6CD5");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("RegExp.prototype.test(str)");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("RegExp.prototype.exec(str)");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u5B9E\u4F8B");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u5343\u5206\u4F4D\u8868\u793A\u6CD5");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u5343\u5206\u4F4D\u8868\u793A\u6CD5\uFF08\u5E26\u5C0F\u6570\uFF09");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u53BB\u6389\u5C0F\u6570\u70B9\u540E\u9762\u591A\u4F59\u7684 0");
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<h2 id="\u6B63\u5219\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u65B9\u6CD5" aria-hidden="true">#</a> \u6B63\u5219\u65B9\u6CD5</h2><h3 id="\u5B57\u7B26\u4E32\u7684\u6B63\u5219\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u7684\u6B63\u5219\u65B9\u6CD5" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u7684\u6B63\u5219\u65B9\u6CD5</h3><h4 id="string-prototype-match-reg" tabindex="-1"><a class="header-anchor" href="#string-prototype-match-reg" aria-hidden="true">#</a> <code>String.prototype.match(reg)</code></h4><ul><li>\u53C2\u6570 <ul><li>regexp\uFF1A\u6B63\u5219\u8868\u8FBE\u5F0F\uFF08\u5982\u679C\u53C2\u6570\u4E0D\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u901A\u8FC7<code>RegExp()</code>\u6784\u9020\u51FD\u6570\u5C06\u5176\u8F6C\u6362\u6210\u6B63\u5219\u8868\u8FBE\u5F0F\uFF09</li></ul></li><li>\u8FD4\u56DE <ul><li>\u65E0\u5339\u914D\uFF1A\u8FD4\u56DE<code>null</code></li><li>\u6B63\u5219\u8868\u8FBE\u5F0F\u6CA1\u6709\u5168\u5C40\u4FEE\u9970\u7B26<code>g</code>\uFF0C\u5219\u4E0D\u6267\u884C\u5168\u5C40\u68C0\u7D22\uFF0C\u8FD4\u56DE\u6570\u7EC4<code>result</code><ul><li><code>result[0]</code>\uFF1A\u5339\u914D\u7684\u5B57\u7B26\u4E32</li><li><code>result[1..n]</code>\uFF1A\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u7528\u5706\u62EC\u53F7\u62EC\u8D77\u6765\u7684\u5B50\u8868\u8FBE\u5F0F1...n</li><li><code>result.index</code>\uFF1A\u53D1\u751F\u5339\u914D\u7684\u5B57\u7B26\u5728 str \u4E2D\u7684\u5F00\u59CB\u4F4D\u7F6E</li><li><code>result.input</code>\uFF1A\u6240\u68C0\u7D22\u7684\u5B57\u7B26\u4E32</li></ul></li><li>\u6B63\u5219\u8868\u8FBE\u5F0F\u6709\u5168\u5C40\u4FEE\u9970\u7B26<code>g</code>\uFF0C\u5219\u6267\u884C\u5168\u5C40\u68C0\u7D22\uFF0C\u8FD4\u56DE\u6709\u5339\u914D\u7ED3\u679C\u7EC4\u6210\u7684\u6570\u7EC4 result <ul><li><code>result[0..n]</code>\uFF1A\u5339\u914D\u7ED3\u679C1..n+1</li></ul></li></ul></li></ul><h4 id="string-prototype-search-reg" tabindex="-1"><a class="header-anchor" href="#string-prototype-search-reg" aria-hidden="true">#</a> <code>String.prototype.search(reg)</code></h4><ul><li>\u53C2\u6570 <ul><li>reg\uFF1A\u6B63\u5219\u8868\u8FBE\u5F0F\uFF08\u5982\u679C\u53C2\u6570\u4E0D\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u901A\u8FC7<code>RegExp()</code>\u6784\u9020\u51FD\u6570\u5C06\u5176\u8F6C\u6362\u6210\u6B63\u5219\u8868\u8FBE\u5F0F\uFF09</li></ul></li><li>\u8FD4\u56DE <ul><li>\u65E0\u5339\u914D\uFF1A\u8FD4\u56DE<code>-1</code></li><li>\u6709\u5339\u914D\uFF0C\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u4E0E\u4E4B\u5339\u914D\u7684\u5B57\u4E32\u7684\u8D77\u59CB\u4F4D\u7F6E\uFF08\u4E0D\u652F\u6301\u5168\u5C40\u641C\u7D22\uFF0C\u4F1A\u5FFD\u7565\u5168\u5C40\u4FEE\u9970\u7B26 g\uFF09</li></ul></li></ul><h4 id="string-prototype-replace-reg-str" tabindex="-1"><a class="header-anchor" href="#string-prototype-replace-reg-str" aria-hidden="true">#</a> <code>String.prototype.replace(reg, str)</code></h4><ul><li>\u529F\u80FD\uFF1A\u6267\u884C\u68C0\u7D22\u548C\u66FF\u6362\u64CD\u4F5C</li><li>\u5728\u66FF\u6362\u5B57\u7B26\u4E32\uFF08\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF09\u4E2D\u51FA\u73B0\u4E86 $ \u52A0\u6570\u5B57\uFF0C\u4EE3\u8868\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u4E0E\u5706\u62EC\u53F7\u76F8\u5339\u914D\u7684\u5B57\u8868\u8FBE\u5F0F</li><li>\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u662F\u5426\u6709\u5168\u5C40\u4FEE\u9970\u7B26 g <ul><li>\u6709\uFF1A\u66FF\u6362\u6240\u6709\u5339\u914D\u7684\u5B57\u7B26\u4E32</li><li>\u6CA1\u6709\uFF1A\u53EA\u66FF\u6362\u5339\u914D\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4E32</li></ul></li></ul><h4 id="string-prototype-splice-reg" tabindex="-1"><a class="header-anchor" href="#string-prototype-splice-reg" aria-hidden="true">#</a> <code>String.prototype.splice(reg)</code></h4><ul><li>\u53C2\u6570 <ul><li>reg\uFF1A\u6B63\u5219\u8868\u8FBE\u5F0F</li></ul></li><li>\u8FD4\u56DE <ul><li>\u4EE5 reg \u62C6\u5206\u6210\u7684\u5404\u4E2A\u5B50\u4E32\u7684\u6570\u7EC4</li></ul></li></ul><h3 id="\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5B57\u7B26\u4E32\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5B57\u7B26\u4E32\u65B9\u6CD5" aria-hidden="true">#</a> \u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5B57\u7B26\u4E32\u65B9\u6CD5</h3><h4 id="regexp-prototype-test-str" tabindex="-1"><a class="header-anchor" href="#regexp-prototype-test-str" aria-hidden="true">#</a> <code>RegExp.prototype.test(str)</code></h4><p>\u6267\u884C\u68C0\u7D22\uFF0C\u67E5\u770B\u6B63\u5219\u8868\u8FBE\u5F0F\u4E0E\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\u662F\u5426\u5339\u914D\uFF0C\u8FD4\u56DE<code>true</code>\u6216<code>false</code>\u3002</p><p>\u5982\u679C\u6B63\u5219\u8868\u8FBE\u5F0F\u8BBE\u7F6E\u4E86\u5168\u5C40\u6807\u5FD7<code>g</code>\uFF0C<code>test()</code>\u7684\u6267\u884C\u4F1A\u6539\u53D8\u6B63\u5219\u8868\u8FBE\u5F0F<code>lastIndex</code>\u5C5E\u6027\u3002\u8FDE\u7EED\u7684\u6267\u884C<code>test()</code>\u65B9\u6CD5\uFF0C\u540E\u7EED\u7684\u6267\u884C\u5C06\u4F1A\u4ECE<code>lastIndex</code>\u5904\u5F00\u59CB\u5339\u914D\u5B57\u7B26\u4E32\u3002</p><h4 id="regexp-prototype-exec-str" tabindex="-1"><a class="header-anchor" href="#regexp-prototype-exec-str" aria-hidden="true">#</a> <code>RegExp.prototype.exec(str)</code></h4><ul><li>\u8FD4\u56DE <ul><li>\u65E0\u5339\u914D\uFF1A\u8FD4\u56DE<code>null</code></li><li>\u6709\u5339\u914D\uFF1A\u8FD4\u56DE<code>result</code>\uFF0C\u7ED3\u6784\u540C<code>String.prototype.match(reg)</code>\u65B9\u6CD5\u6B63\u5219\u65E0\u5168\u5C40\u5339\u914D\u7684\u7ED3\u679C <ul><li><code>result[0]</code>\uFF1A\u5339\u914D\u7684\u5B57\u7B26\u4E32</li><li><code>result[1..n]</code>\uFF1A\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u7528\u5706\u62EC\u53F7\u62EC\u8D77\u6765\u7684\u5B57\u8868\u8FBE\u5F0F1...n</li><li><code>result.index</code>\uFF1A\u53D1\u751F\u5339\u914D\u7684\u5B57\u7B26\u5728<code>str</code>\u4E2D\u7684\u5F00\u59CB\u4F4D\u7F6E</li><li><code>result.input</code>\uFF1A\u6240\u68C0\u7D22\u7684\u5B57\u7B26\u4E32</li><li>\u5982\u679C\u8BBE\u7F6E\u4E86\u5168\u5C40\u5339\u914D\uFF0C<code>reg.lastIndex</code>\u5C06\u662F\u4E0B\u4E00\u6B21\u5339\u914D\u5F00\u59CB\u7684\u4F4D\u7F6E\uFF08\u521D\u59CB\u4E3A0\uFF09</li></ul></li></ul></li></ul><h2 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h2><h3 id="\u5343\u5206\u4F4D\u8868\u793A\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5343\u5206\u4F4D\u8868\u793A\u6CD5" aria-hidden="true">#</a> \u5343\u5206\u4F4D\u8868\u793A\u6CD5</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">thousandsFormat</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\B(?=(?:\\d{3})+$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>\n    <span class="token comment">// const reg = /(?!\\b)(?=(?:\\d{3})+$)/g</span>\n    <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><ul><li><code>\\B</code>\uFF1A\u5339\u914D\u4E0D\u662F\u5355\u8BCD\u5F00\u5934\u6216\u7ED3\u675F\u7684\u4F4D\u7F6E\uFF0C\u5373\u975E\u8FB9\u754C\u4F4D\u7F6E</li><li><code>(?=exp)</code>\uFF1A\u96F6\u5BBD\u5EA6\u6B63\u9884\u6D4B\u5148\u884C\u65AD\u8A00\uFF0C\u5982<code>/^Java(?=Script$)/</code>\uFF0C\u5339\u914D<code>JavaScript</code>\u91CC\u7684<code>Java</code>\uFF0C\u4E0D\u5339\u914D<code>Javascript</code>\u91CC\u7684<code>Java</code></li><li><code>(?:exp)</code>\uFF1A\u5339\u914D<code>exp</code>\uFF0C\u4F46\u4E0D\u6355\u83B7\u5339\u914D\u7684\u6587\u672C\uFF0C\u4E5F\u4E0D\u7ED9\u6B64\u5206\u7EC4\u5206\u914D\u7EC4\u53F7\uFF08\u5373\u4EC5\u628A<code>exp</code>\u7EC4\u5408\u6210\u4E00\u4E2A\u6574\u4F53\uFF09</li></ul><p>\u975E\u6B63\u5219\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">formatCash</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> next<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>index <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">?</span> next <span class="token operator">:</span> <span class="token punctuation">(</span>next <span class="token operator">+</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> prev\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">formatCash</span><span class="token punctuation">(</span><span class="token string">&#39;1234567890&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 1,234,567,890</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    num <span class="token operator">=</span> num <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> arr <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u5343\u5206\u4F4D\u8868\u793A\u6CD5-\u5E26\u5C0F\u6570" tabindex="-1"><a class="header-anchor" href="#\u5343\u5206\u4F4D\u8868\u793A\u6CD5-\u5E26\u5C0F\u6570" aria-hidden="true">#</a> \u5343\u5206\u4F4D\u8868\u793A\u6CD5\uFF08\u5E26\u5C0F\u6570\uFF09</h3><p>\u5148\u5C06\u6574\u6570\u90E8\u5206\u63D0\u53D6\u51FA\u6765\uFF0C\u518D\u5C06\u63D0\u53D6\u51FA\u6765\u7684\u6574\u6570\u7528\u5343\u5206\u4F4D\u8868\u793A\uFF0C\u5C0F\u6570\u90E8\u5206\u4FDD\u6301\u4E0D\u53D8\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\B(?=(?:\\d{3})+$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>\n<span class="token keyword">function</span> <span class="token function">thousandsFormat</span><span class="token punctuation">(</span><span class="token parameter">decimalsStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> decimalsStr<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> num<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u53BB\u6389\u5C0F\u6570\u70B9\u540E\u9762\u591A\u4F59\u7684-0" tabindex="-1"><a class="header-anchor" href="#\u53BB\u6389\u5C0F\u6570\u70B9\u540E\u9762\u591A\u4F59\u7684-0" aria-hidden="true">#</a> \u53BB\u6389\u5C0F\u6570\u70B9\u540E\u9762\u591A\u4F59\u7684 0</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6B63\u5219</span>\n<span class="token keyword">const</span> regexp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?:\\.0*|(\\.\\d+?)0+)$</span><span class="token regex-delimiter">/</span></span>\n\n<span class="token comment">// \u6D4B\u8BD5\u7528\u4F8B</span>\n<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token string">&#39;1200.00100&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;1200.00000&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;1200.&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;1200&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;1200.10000&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;0.120010000&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;0.000011111&#39;</span>\n<span class="token punctuation">]</span>\narr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>regexp<span class="token punctuation">,</span><span class="token string">&#39;$1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>', 29);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6B63\u5219\u65B9\u6CD5" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5B57\u7B26\u4E32\u7684\u6B63\u5219\u65B9\u6CD5" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#string-prototype-match-reg" }, {
                    default: withCtx(() => [
                      _hoisted_5
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#string-prototype-search-reg" }, {
                    default: withCtx(() => [
                      _hoisted_6
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#string-prototype-replace-reg-str" }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#string-prototype-splice-reg" }, {
                    default: withCtx(() => [
                      _hoisted_8
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5B57\u7B26\u4E32\u65B9\u6CD5" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#regexp-prototype-test-str" }, {
                    default: withCtx(() => [
                      _hoisted_10
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#regexp-prototype-exec-str" }, {
                    default: withCtx(() => [
                      _hoisted_11
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5B9E\u4F8B" }, {
            default: withCtx(() => [
              _hoisted_12
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5343\u5206\u4F4D\u8868\u793A\u6CD5" }, {
                default: withCtx(() => [
                  _hoisted_13
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5343\u5206\u4F4D\u8868\u793A\u6CD5-\u5E26\u5C0F\u6570" }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u53BB\u6389\u5C0F\u6570\u70B9\u540E\u9762\u591A\u4F59\u7684-0" }, {
                default: withCtx(() => [
                  _hoisted_15
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_16,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
