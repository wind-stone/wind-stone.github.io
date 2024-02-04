import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u6EDA\u52A8",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6EDA\u52A8",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6EDA\u52A8")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("JS \u76F8\u5173");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u5224\u65AD\u5143\u7D20\u5728\u89C6\u53E3\u5185");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u6587\u6863\u6EDA\u52A8\u52A0\u8F7D");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u6EDA\u52A8\u7A7F\u900F\u95EE\u9898\u3001\u6EDA\u52A8\u8FB9\u754C\u95EE\u9898");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u6EDA\u52A8\u7A7F\u900F\u95EE\u9898\u89E3\u51B3");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("passive: true");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("CSS \u76F8\u5173");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("iOS \u6EDA\u52A8\u56DE\u5F39\u6548\u679C");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("position: sticky");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u6EDA\u52A8\u6761\u9690\u85CF\u4F46\u53EF\u6EDA\u52A8");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u6EDA\u52A8\u6761\u6837\u5F0F");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u951A\u70B9\u5207\u6362\u65F6\uFF0C\u6D41\u7545\u7684\u6EDA\u52A8");
const _hoisted_15 = /* @__PURE__ */ createStaticVNode('<h2 id="js-\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#js-\u76F8\u5173" aria-hidden="true">#</a> JS \u76F8\u5173</h2><h3 id="\u5224\u65AD\u5143\u7D20\u5728\u89C6\u53E3\u5185" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u5143\u7D20\u5728\u89C6\u53E3\u5185" aria-hidden="true">#</a> \u5224\u65AD\u5143\u7D20\u5728\u89C6\u53E3\u5185</h3><p>\u5F53\u4F60\u9700\u8981\u5B9E\u73B0\u56FE\u7247\u61D2\u52A0\u8F7D\u6216\u8005\u65E0\u9650\u6EDA\u52A8\u65F6\uFF0C\u9700\u8981\u786E\u5B9A\u5143\u7D20\u662F\u5426\u51FA\u73B0\u5728\u89C6\u7A97\u4E2D\u3002\u8FD9\u53EF\u4EE5\u5728\u4E8B\u4EF6\u76D1\u542C\u5668\u4E2D\u5904\u7406\uFF0C\u6700\u5E38\u89C1\u7684\u89E3\u51B3\u65B9\u6848\u662F\u4F7F\u7528<code>element.getBoundingClientRect()</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> rect <span class="token operator">=</span> elem<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// rect.left/top/right/bottom \u662F\u76F8\u5BF9\u4E8E\u89C6\u53E3\u7684\u5DE6\u4E0A\u89D2\u4F4D\u7F6E\u800C\u8A00\u7684</span>\n  <span class="token comment">// \u5224\u65AD\u6574\u4E2A\u5143\u7D20\u662F\u5426\u5B8C\u5168\u5728\u89C6\u53E3\u4E4B\u5185</span>\n  <span class="token keyword">const</span> inViewport <span class="token operator">=</span> rect<span class="token punctuation">.</span>bottom <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> rect<span class="token punctuation">.</span>right <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>\n                     rect<span class="token punctuation">.</span>left <span class="token operator">&lt;</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">&amp;&amp;</span>\n                     rect<span class="token punctuation">.</span>top <span class="token operator">&lt;</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u7684\u95EE\u9898\u5728\u4E8E\u6BCF\u6B21\u8C03\u7528<code>getBoundingClientRect</code>\u65F6\u90FD\u4F1A\u89E6\u53D1\u56DE\u6D41\uFF0C\u4E25\u91CD\u5730\u5F71\u54CD\u4E86\u6027\u80FD\u3002\u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u8C03\u7528\uFF08<code>getBoundingClientRect</code>\uFF09\u5C24\u4E3A\u7CDF\u7CD5\uFF0C\u5C31\u7B97\u4F7F\u7528\u4E86\u51FD\u6570\u8282\u6D41\uFF08\u7684\u6280\u5DE7\uFF09\u4E5F\u53EF\u80FD\u5BF9\u6027\u80FD\u6CA1\u591A\u5927\u5E2E\u52A9\u3002 \uFF08\u56DE\u6D41\u662F\u6307\u6D4F\u89C8\u5668\u4E3A\u5C40\u90E8\u6216\u6574\u4F53\u5730\u91CD\u7ED8\u67D0\u4E2A\u5143\u7D20\uFF0C\u9700\u8981\u91CD\u65B0\u8BA1\u7B97\u8BE5\u5143\u7D20\u5728\u6587\u6863\u4E2D\u7684\u4F4D\u7F6E\u4E0E\u5F62\u72B6\u3002\uFF09</p><p>\u57282016\u5E74\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 Intersection Observer \u8FD9\u4E00 API \u6765\u89E3\u51B3\u95EE\u9898\u3002\u5B83\u5141\u8BB8\u4F60\u8FFD\u8E2A\u76EE\u6807\u5143\u7D20\u4E0E\u5176\u7956\u5148\u5143\u7D20\u6216\u89C6\u7A97\u7684\u4EA4\u53C9\u72B6\u6001\u3002\u6B64\u5916\uFF0C\u5C3D\u7BA1\u53EA\u6709\u4E00\u90E8\u5206\u5143\u7D20\u51FA\u73B0\u5728\u89C6\u7A97\u4E2D\uFF0C\u54EA\u6015\u53EA\u6709\u4E00\u50CF\u7D20\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>\nobserver<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6B64 API \u88AB\u5E7F\u6CDB\u5730\u652F\u6301\uFF0C\u4F46\u4ECD\u6709\u4E00\u4E9B\u6D4F\u89C8\u5668\u9700\u8981 polyfill\u3002\u5C3D\u7BA1\u5982\u6B64\uFF0C\u5B83\u4ECD\u662F\u76EE\u524D\u6700\u597D\u7684\u89E3\u51B3\u65B9\u6848\u3002</p><h3 id="\u6587\u6863\u6EDA\u52A8\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863\u6EDA\u52A8\u52A0\u8F7D" aria-hidden="true">#</a> \u6587\u6863\u6EDA\u52A8\u52A0\u8F7D</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// \u83B7\u53D6\u6587\u6863\u7684\u5782\u76F4\u6EDA\u52A8\u8DDD\u79BB</span>\n  <span class="token keyword">const</span> documentScrollY <span class="token operator">=</span> window<span class="token punctuation">.</span>pageYOffset<span class="token punctuation">;</span>\n  <span class="token comment">// \u83B7\u53D6\u6587\u6863\u7684\u9AD8\u5EA6</span>\n  <span class="token keyword">const</span> documentHeight <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">;</span>\n  <span class="token comment">// \u83B7\u53D6\u89C6\u53E3\u9AD8\u5EA6</span>\n  <span class="token keyword">const</span> viewPortHeight <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">;</span>\n  <span class="token comment">// \u6587\u6863\u5E95\u90E8\u8DDD\u79BB\u89C6\u53E3\u5E95\u90E8\u7684\u8DDD\u79BB</span>\n  <span class="token keyword">const</span> leftDistance <span class="token operator">=</span> documentHeight <span class="token operator">-</span> documentScrollY <span class="token operator">-</span> viewPortHeight<span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>leftDistance <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// \u6587\u6863\u6ED1\u52A8\u65F6\uFF0C\u6587\u6863\u5E95\u90E8\u8DDD\u79BB\u89C6\u53E3\u5E95\u90E8\u8FD8\u6709 20 px \u65F6\uFF0C\u52A0\u8F7D\u65B0\u6570\u636E</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u6EDA\u52A8\u7A7F\u900F\u95EE\u9898\u3001\u6EDA\u52A8\u8FB9\u754C\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u7A7F\u900F\u95EE\u9898\u3001\u6EDA\u52A8\u8FB9\u754C\u95EE\u9898" aria-hidden="true">#</a> \u6EDA\u52A8\u7A7F\u900F\u95EE\u9898\u3001\u6EDA\u52A8\u8FB9\u754C\u95EE\u9898</h3><p>\u5982\u679C\u4F60\u7684\u5F39\u6846\u6216\u4E0B\u62C9\u5217\u8868\u662F\u53EF\u6EDA\u52A8\u7684\uFF0C\u90A3\u4F60\u52A1\u5FC5\u8981\u4E86\u89E3\u8FDE\u9501\u6EDA\u52A8\u76F8\u5173\u7684\u95EE\u9898\uFF1A\u5F53\u7528\u6237\u6EDA\u52A8\u5230\uFF08\u5F39\u6846\u6216\u4E0B\u62C9\u5217\u8868\uFF09\u672B\u5C3E\uFF08\u540E\u518D\u7EE7\u7EED\u6EDA\u52A8\u65F6\uFF09\uFF0C\u6574\u4E2A\u9875\u9762\u90FD\u4F1A\u5F00\u59CB\u6EDA\u52A8\u3002</p><h3 id="\u6EDA\u52A8\u7A7F\u900F\u95EE\u9898\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u7A7F\u900F\u95EE\u9898\u89E3\u51B3" aria-hidden="true">#</a> \u6EDA\u52A8\u7A7F\u900F\u95EE\u9898\u89E3\u51B3</h3>', 13);
const _hoisted_28 = {
  href: "https://juejin.im/post/5abf1c69f265da239706fcb8",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = /* @__PURE__ */ createTextVNode("\u79FB\u52A8\u7AEF\u6EDA\u52A8\u7A7F\u900F\u89E3\u51B3\u65B9\u6848");
const _hoisted_30 = /* @__PURE__ */ createTextVNode("\u793A\u4F8B\u4EE3\u7801");
const _hoisted_31 = /* @__PURE__ */ createStaticVNode('<h3 id="passive-true" tabindex="-1"><a class="header-anchor" href="#passive-true" aria-hidden="true">#</a> <code>passive: true</code></h3><p><code>addEventListener(type, listener[, options ])</code>\u91CC<code>options</code>\u91CC\u7684<code>passive</code>\u53C2\u6570\uFF0C\u8BBE\u7F6E\u4E3A<code>true</code>\u65F6\uFF0C\u8868\u660E\u6CE8\u518C\u7684<code>listener</code>\u5185\u4E0D\u4F1A\u8C03\u7528<code>preventDefault()</code>\uFF0C\u6D4F\u89C8\u5668\u5C06\u540C\u65F6\u6267\u884C<code>listener</code>\u548C\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF08\u800C\u4E0D\u662F\u7B49\u6267\u884C<code>listener</code>\u7ED3\u675F\u4E4B\u540E\u518D\u6267\u884C\u9ED8\u8BA4\u884C\u4E3A\uFF09\uFF0C\u4E14\u4F1A\u5FFD\u7565<code>listener</code>\u91CC\u7684<code>preventDefault()</code>\uFF0C\u4F7F\u5F97\u6EDA\u52A8\u66F4\u52A0\u6D41\u7545\u3002</p><p>Reference:</p>', 3);
const _hoisted_34 = {
  href: "https://github.com/justjavac/the-front-end-knowledge-you-may-not-know/issues/6#issuecomment-404205665",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_35 = /* @__PURE__ */ createTextVNode("addEventListener \u7684\u7B2C\u4E09\u4E2A\u53C2\u6570");
const _hoisted_36 = {
  href: "http://www.cnblogs.com/ziyunfei/p/5545439.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_37 = /* @__PURE__ */ createTextVNode("passive \u7684\u4E8B\u4EF6\u76D1\u542C\u5668");
const _hoisted_38 = {
  href: "https://mp.weixin.qq.com/s/TrN50625KykugTiOZ3JVsw",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_39 = /* @__PURE__ */ createTextVNode("\u524D\u7AEF\u65E9\u8BFB\u8BFE--\u3010\u7B2C1240\u671F\u3011passive \u4E8B\u4EF6\u76D1\u542C");
const _hoisted_40 = /* @__PURE__ */ createStaticVNode('<h2 id="css-\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#css-\u76F8\u5173" aria-hidden="true">#</a> CSS \u76F8\u5173</h2><h3 id="ios-\u6EDA\u52A8\u56DE\u5F39\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#ios-\u6EDA\u52A8\u56DE\u5F39\u6548\u679C" aria-hidden="true">#</a> iOS \u6EDA\u52A8\u56DE\u5F39\u6548\u679C</h3><p>iOS \u4E0A\u82E5\u4E0D\u505A\u5904\u7406\uFF0C\u6EDA\u52A8\u5C06\u663E\u5F97\u4E0D\u6D41\u7545\u3002\u6B64\u65F6\uFF0C\u53EF\u6DFB\u52A0\u4E00\u884C\u4EE3\u7801\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.scroll-area</span> <span class="token punctuation">{</span>\n    <span class="token property">-webkit-overflow-scrolling</span><span class="token punctuation">:</span> touch<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>-webkit-overflow-scrolling</code>\u5C5E\u6027\u63A7\u5236\u5143\u7D20\u5728\u79FB\u52A8\u8BBE\u5907\u4E0A\u662F\u5426\u4F7F\u7528\u6EDA\u52A8\u56DE\u5F39\u6548\u679C\u3002</p><p>\u53D6\u503C\u5982\u4E0B\uFF1A</p><ul><li><code>auto</code><ul><li>Use &quot;regular&quot; scrolling, where the content immediately ceases to scroll when you remove your finger from the touchscreen.</li><li>\u7FFB\u8BD1\uFF1A\u4F7F\u7528\u666E\u901A\u6EDA\u52A8, \u5F53\u624B\u6307\u4ECE\u89E6\u6478\u5C4F\u4E0A\u79FB\u5F00\uFF0C\u6EDA\u52A8\u4F1A\u7ACB\u5373\u505C\u6B62\u3002 |</li></ul></li><li><code>touch</code><ul><li>Use momentum-based scrolling, where the content continues to scroll for a while after finishing the scroll gesture and removing your finger from the touchscreen. The speed and duration of the continued scrolling is proportional to how vigorous the scroll gesture was. Also creates a new stacking context.</li><li>\u7FFB\u8BD1\uFF1A\u4F7F\u7528\u5177\u6709\u56DE\u5F39\u6548\u679C\u7684\u6EDA\u52A8, \u5F53\u624B\u6307\u4ECE\u89E6\u6478\u5C4F\u4E0A\u79FB\u5F00\uFF0C\u5185\u5BB9\u4F1A\u7EE7\u7EED\u4FDD\u6301\u4E00\u6BB5\u65F6\u95F4\u7684\u6EDA\u52A8\u6548\u679C\u3002\u7EE7\u7EED\u6EDA\u52A8\u7684\u901F\u5EA6\u548C\u6301\u7EED\u7684\u65F6\u95F4\u548C\u6EDA\u52A8\u624B\u52BF\u7684\u5F3A\u70C8\u7A0B\u5EA6\u6210\u6B63\u6BD4\u3002\u540C\u65F6\u4E5F\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5806\u6808\u4E0A\u4E0B\u6587\u3002 |</li></ul></li></ul><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5BF9\u5BB9\u5668\u6DFB\u52A0\u4E86<code>-webkit-overflow-scrolling: touch</code>\u540E\uFF0C\u53EF\u80FD\u4F1A\u5B58\u5728\u4EE5\u4E0B\u95EE\u9898\uFF1A</p><ul><li>\u5BFC\u81F4\u5BB9\u5668\u5185\u4F7F\u7528<code>position:fixed;</code>\u56FA\u5B9A\u5B9A\u4F4D\u7684\u5143\u7D20\u968F\u7740\u9875\u9762\u4E00\u8D77\u6EDA\u52A8\u3002</li><li>\uFF08iOS UIWebview \u91CC\uFF09\u5BB9\u5668\u5185\u6EA2\u51FA\u7684\u5185\u5BB9\uFF08\u6BD4\u5982\u5F39\u7A97\uFF09\u5C06\u88AB\u9690\u85CF\uFF0C\u6548\u679C\u7C7B\u4F3C\u4E8E<code>overflow: hidden</code>\uFF0Cgoogle \u672A\u627E\u5230\u539F\u56E0</li></ul>', 9);
const _hoisted_49 = { class: "custom-container warning" };
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "\u6CE8\u610F", -1);
const _hoisted_51 = /* @__PURE__ */ createTextVNode("\u8BE5\u7279\u6027\u662F\u975E\u6807\u51C6\u7684\uFF0C\u8BE6\u60C5\u8BF7\u89C1");
const _hoisted_52 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-overflow-scrolling",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_53 = /* @__PURE__ */ createTextVNode("MDN \u4E4B -webkit-overflow-scrolling");
const _hoisted_54 = /* @__PURE__ */ createStaticVNode('<h3 id="position-sticky" tabindex="-1"><a class="header-anchor" href="#position-sticky" aria-hidden="true">#</a> position: sticky</h3><p><code>position: sticky</code>\u662F\u7ED3\u5408\u4E86<code>position: relative</code>\u548C<code>position: fixed</code>\u4E24\u79CD\u5B9A\u4F4D\u529F\u80FD\u4E8E\u4E00\u4F53\u7684\u7279\u6B8A\u5B9A\u4F4D\uFF0C\u9002\u7528\u4E8E\u4E00\u4E9B\u7279\u6B8A\u573A\u666F\u3002</p><p>\u5143\u7D20\u5148\u6309\u7167\u666E\u901A\u6587\u6863\u6D41\u5B9A\u4F4D\uFF0C\u7136\u540E\u76F8\u5BF9\u4E8E\u8BE5\u5143\u7D20\u5728\u6D41\u4E2D\u7684 flow root\uFF08BFC\uFF09\u548C containing block\uFF08\u6700\u8FD1\u7684\u5757\u7EA7\u7956\u5148\u5143\u7D20\uFF09\u5B9A\u4F4D\u3002\u800C\u540E\uFF0C\u5143\u7D20\u5B9A\u4F4D\u8868\u73B0\u4E3A\u5728\u8DE8\u8D8A\u7279\u5B9A\u9608\u503C\u524D\u4E3A\u76F8\u5BF9\u5B9A\u4F4D\uFF0C\u4E4B\u540E\u4E3A\u56FA\u5B9A\u5B9A\u4F4D\u3002</p><p>\u8FD9\u4E2A\u7279\u5B9A\u9608\u503C\u6307\u7684\u662F<code>top</code>\uFF0C<code>right</code>\uFF0C<code>bottom</code>\u6216<code>left</code>\u4E4B\u4E00\uFF0C\u6362\u8A00\u4E4B\uFF0C\u6307\u5B9A<code>top</code>\uFF0C<code>right</code>\uFF0C<code>bottom</code>\u6216 <code>left</code>\u56DB\u4E2A\u9608\u503C\u5176\u4E2D\u4E4B\u4E00\uFF0C\u624D\u53EF\u4F7F\u7C98\u6027\u5B9A\u4F4D\u751F\u6548\u3002\u5426\u5219\u5176\u884C\u4E3A\u4E0E\u76F8\u5BF9\u5B9A\u4F4D\u76F8\u540C\u3002</p><h3 id="\u6EDA\u52A8\u6761\u9690\u85CF\u4F46\u53EF\u6EDA\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u6761\u9690\u85CF\u4F46\u53EF\u6EDA\u52A8" aria-hidden="true">#</a> \u6EDA\u52A8\u6761\u9690\u85CF\u4F46\u53EF\u6EDA\u52A8</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Chrome\uFF0CSafari \u548C Opera */</span>\n<span class="token selector">.container::-webkit-scrollbar</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/* IE \u6216 Edge */</span>\n<span class="token selector">.container</span> <span class="token punctuation">{</span>\n  <span class="token property">-ms-overflow-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u81F3\u4E8E Firefox\uFF0C\u6CA1\u6709\u4EFB\u4F55\u529E\u6CD5\u9690\u85CF\u6EDA\u52A8\u6761\u3002</p><h3 id="\u6EDA\u52A8\u6761\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u6761\u6837\u5F0F" aria-hidden="true">#</a> \u6EDA\u52A8\u6761\u6837\u5F0F</h3><p>IE 5.5 \u7248\u672C\u4EE5\u540E\uFF0C\u5141\u8BB8\u4FEE\u6539\u6EDA\u52A8\u6761\u7684\u989C\u8272\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>\n  <span class="token property">scrollbar-face-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>WebKit \u7684\u5F00\u53D1\u8005\u5728 2009 \u5E74\u63D0\u51FA\u4E86\uFF08\u4FEE\u6539\u6EDA\u52A8\u6761\uFF09\u6837\u5F0F\u7684\u65B9\u6848\u3002\u4EE5\u4E0B\u662F\u4F7F\u7528 -webkit \u524D\u7F00\u5728\u652F\u6301\u76F8\u5173\u6837\u5F0F\u7684\u6D4F\u89C8\u5668\u4E2D\u6A21\u62DF macOS \u6EDA\u52A8\u6761\u6837\u5F0F\u7684\u4EE3\u7801\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> #c1c1c1<span class="token punctuation">;</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Chrome\u3001Safari\u3001Opera \u751A\u81F3\u4E8E UC \u6D4F\u89C8\u5668\u6216\u8005\u4E09\u661F\u81EA\u5E26\u7684\u684C\u9762\u6D4F\u89C8\u5668\u90FD\u652F\u6301\uFF08\u4E0A\u8FF0 CSS\uFF09\u3002Edge \u4E5F\u6709\u8BA1\u5212\u5B9E\u73B0\u5B83\u4EEC\u3002\u4F46\u4E09\u5E74\u8FC7\u53BB\u4E86\uFF0C\u8BE5\u8BA1\u5212\u4ECD\u5728\u4E2D\u7B49\u4F18\u5148\u7EA7\u4E2D\uFF08\u800C\u5C1A\u672A\u88AB\u5B9E\u73B0\uFF09\u3002</p><h3 id="\u951A\u70B9\u5207\u6362\u65F6-\u6D41\u7545\u7684\u6EDA\u52A8" tabindex="-1"><a class="header-anchor" href="#\u951A\u70B9\u5207\u6362\u65F6-\u6D41\u7545\u7684\u6EDA\u52A8" aria-hidden="true">#</a> \u951A\u70B9\u5207\u6362\u65F6\uFF0C\u6D41\u7545\u7684\u6EDA\u52A8</h3><p>\u901A\u8FC7\u951A\u70B9\u94FE\u63A5\u6765\u8DF3\u8F6C\u5230\u9875\u9762\u4E0A\u7684\u4E0D\u540C\u533A\u5757\u65F6\uFF0C\u82E5\u60F3\u5B9E\u73B0\u5E73\u6ED1\u5730\u6EDA\u52A8\uFF0C\u53EF\u6DFB\u52A0\u4E00\u884C\u4EE3\u7801\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>\n  <span class="token property">scroll-behavior</span><span class="token punctuation">:</span> smooth<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u76EE\u524D<code>scroll-behavior</code>\u4EC5\u5728 Chrome\u3001 Firefox \u4E0E Opera \u4E0A\u88AB\u652F\u6301\uFF0C\u4F46\u6211\u4EEC\u5E0C\u671B\u5B83\u80FD\u88AB\u5E7F\u6CDB\u652F\u6301\uFF0C\u56E0\u4E3A\u4F7F\u7528 CSS \uFF08\u6BD4\u4F7F\u7528 JavaScript\uFF09\u5728\u89E3\u51B3\u9875\u9762\u6EDA\u52A8\u95EE\u9898\u65F6\u4F18\u96C5\u5F97\u591A\uFF0C\u5E76\u66F4\u7B26\u5408\u201C\u6E10\u8FDB\u589E\u5F3A\u201D\u7684\u6A21\u5F0F\u3002</p><p>Reference\uFF1A</p>', 18);
const _hoisted_72 = {
  href: "https://mp.weixin.qq.com/s/tG56t5pd1Kw_O2NBXGAk6Q",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_73 = /* @__PURE__ */ createTextVNode("\u3010\u7B2C1286\u671F\u3011\u6ED1\u5411\u672A\u6765\uFF1A\u73B0\u4EE3 JavaScript \u4E0E CSS \u6EDA\u52A8\u5B9E\u73B0\u6307\u5357");
const _hoisted_74 = {
  href: "http://www.cnblogs.com/coco1s/p/6402723.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_75 = /* @__PURE__ */ createTextVNode("\u4F7F\u7528 position:sticky \u5B9E\u73B0\u7C98\u6027\u5E03\u5C40");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#js-\u76F8\u5173" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5224\u65AD\u5143\u7D20\u5728\u89C6\u53E3\u5185" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6587\u6863\u6EDA\u52A8\u52A0\u8F7D" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6EDA\u52A8\u7A7F\u900F\u95EE\u9898\u3001\u6EDA\u52A8\u8FB9\u754C\u95EE\u9898" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6EDA\u52A8\u7A7F\u900F\u95EE\u9898\u89E3\u51B3" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#passive-true" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#css-\u76F8\u5173" }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#ios-\u6EDA\u52A8\u56DE\u5F39\u6548\u679C" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#position-sticky" }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6EDA\u52A8\u6761\u9690\u85CF\u4F46\u53EF\u6EDA\u52A8" }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6EDA\u52A8\u6761\u6837\u5F0F" }, {
                default: withCtx(() => [
                  _hoisted_13
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u951A\u70B9\u5207\u6362\u65F6-\u6D41\u7545\u7684\u6EDA\u52A8" }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_15,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_28, [
          _hoisted_29,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/browser-env/scroll/no-bg-scroll.html" }, {
          default: withCtx(() => [
            _hoisted_30
          ]),
          _: 1
        })
      ])
    ]),
    _hoisted_31,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_34, [
          _hoisted_35,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_36, [
          _hoisted_37,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_38, [
          _hoisted_39,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_40,
    createBaseVNode("div", _hoisted_49, [
      _hoisted_50,
      createBaseVNode("p", null, [
        _hoisted_51,
        createBaseVNode("a", _hoisted_52, [
          _hoisted_53,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_54,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_72, [
          _hoisted_73,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_74, [
          _hoisted_75,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
