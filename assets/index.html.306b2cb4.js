import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "let-\u548C-const",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#let-\u548C-const",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" let \u548C const")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("let \u547D\u4EE4");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u5757\u7EA7\u4F5C\u7528\u57DF");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u54EA\u4E9B\u8BED\u53E5\u4F1A\u4EA7\u751F\u5757\u7EA7\u4F5C\u7528\u57DF");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("const \u547D\u4EE4");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("ES6 \u58F0\u660E\u53D8\u91CF\u7684\u516D\u79CD\u65B9\u6CD5");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("global \u5BF9\u8C61");
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<h2 id="let-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#let-\u547D\u4EE4" aria-hidden="true">#</a> let \u547D\u4EE4</h2><ul><li>\u4E0D\u5B58\u5728\u53D8\u91CF\u63D0\u5347\uFF0C\u53EA\u80FD\u5148\u58F0\u660E\u540E\u4F7F\u7528</li><li>\u6682\u65F6\u6027\u6B7B\u533A</li><li>\u4E0D\u5141\u8BB8\u91CD\u590D\u58F0\u660E</li><li><code>for</code>\u7684\u7236\u5B50\u4F5C\u7528\u57DF</li></ul><p><code>for</code>\u5FAA\u73AF\u8FD8\u6709\u4E00\u4E2A\u7279\u522B\u4E4B\u5904\uFF0C\u5C31\u662F\u8BBE\u7F6E\u5FAA\u73AF\u53D8\u91CF\u7684\u90A3\u90E8\u5206\u662F\u4E00\u4E2A\u7236\u4F5C\u7528\u57DF\uFF0C\u800C\u5FAA\u73AF\u4F53\u5185\u90E8\u662F\u4E00\u4E2A\u5355\u72EC\u7684\u5B50\u4F5C\u7528\u57DF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// abc</span>\n<span class="token comment">// abc</span>\n<span class="token comment">// abc</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u6B63\u786E\u8FD0\u884C\uFF0C\u8F93\u51FA\u4E86 3 \u6B21<code>abc</code>\u3002\u8FD9\u8868\u660E\u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF<code>i</code>\u4E0E\u5FAA\u73AF\u53D8\u91CF<code>i</code>\u4E0D\u5728\u540C\u4E00\u4E2A\u4F5C\u7528\u57DF\uFF0C\u6709\u5404\u81EA\u5355\u72EC\u7684\u4F5C\u7528\u57DF\u3002</p><h2 id="\u5757\u7EA7\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5757\u7EA7\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u5757\u7EA7\u4F5C\u7528\u57DF</h2><ul><li>\u5757\u7EA7\u4F5C\u7528\u57DF\u4E4B\u4E2D\uFF0C\u51FD\u6570\u58F0\u660E\u8BED\u53E5\u7684\u884C\u4E3A\u7C7B\u4F3C\u4E8E<code>let</code>\uFF0C\u5728\u5757\u7EA7\u4F5C\u7528\u57DF\u4E4B\u5916\u4E0D\u53EF\u5F15\u7528 <ul><li>\u4F46\u662F\u4E3A\u4E86\u517C\u5BB9\u6D4F\u89C8\u5668\u7684\u8001\u4EE3\u7801\uFF0C\u6D4F\u89C8\u5668\u7684\u5B9E\u73B0\u53EF\u4EE5\u4E0D\u9075\u5B88\u4E0A\u9762\u7684\u89C4\u5B9A\uFF0C\u6709\u81EA\u5DF1\u7684\u884C\u4E3A\u65B9\u5F0F <ul><li>\u5141\u8BB8\u5728\u5757\u7EA7\u4F5C\u7528\u57DF\u5185\u58F0\u660E\u51FD\u6570</li><li>\u51FD\u6570\u58F0\u660E\u7C7B\u4F3C\u4E8Evar\uFF0C\u5373\u4F1A\u63D0\u5347\u5230\u5168\u5C40\u4F5C\u7528\u57DF\u6216\u51FD\u6570\u4F5C\u7528\u57DF\u7684\u5934\u90E8</li><li>\u540C\u65F6\uFF0C\u51FD\u6570\u58F0\u660E\u8FD8\u4F1A\u63D0\u5347\u5230\u6240\u5728\u7684\u5757\u7EA7\u4F5C\u7528\u57DF\u7684\u5934\u90E8</li></ul></li></ul></li><li>ES6 \u7684\u5757\u7EA7\u4F5C\u7528\u57DF\u5141\u8BB8\u58F0\u660E\u51FD\u6570\u7684\u89C4\u5219\uFF0C\u53EA\u5728\u4F7F\u7528\u5927\u62EC\u53F7\u7684\u60C5\u51B5\u4E0B\u6210\u7ACB\uFF0C\u5982\u679C\u6CA1\u6709\u4F7F\u7528\u5927\u62EC\u53F7\uFF0C\u5C31\u4F1A\u62A5\u9519</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4E0D\u62A5\u9519</span>\n<span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// \u62A5\u9519</span>\n<span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u54EA\u4E9B\u8BED\u53E5\u4F1A\u4EA7\u751F\u5757\u7EA7\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u54EA\u4E9B\u8BED\u53E5\u4F1A\u4EA7\u751F\u5757\u7EA7\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u54EA\u4E9B\u8BED\u53E5\u4F1A\u4EA7\u751F\u5757\u7EA7\u4F5C\u7528\u57DF</h3><p>\u4EE5\u4E0B\u8BED\u53E5\u4F1A\u4EA7\u751F\u5757\u7EA7\u4F5C\u7528\u57DF\uFF08\u4E0D\u5B8C\u6574\uFF0C\u5F85\u8865\u5145\uFF09\uFF1A</p><ul><li><code>for</code></li><li><code>if</code></li><li><code>switch</code></li><li><code>try</code>/<code>catch</code>/<code>finally</code>\u3002</li></ul><h2 id="const-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#const-\u547D\u4EE4" aria-hidden="true">#</a> const \u547D\u4EE4</h2><ul><li>\u4E0D\u5B58\u5728\u53D8\u91CF\u63D0\u5347\uFF0C\u53EA\u80FD\u5148\u58F0\u660E\u540E\u4F7F\u7528</li><li>\u6682\u65F6\u6027\u6B7B\u533A</li><li>\u4E0D\u5141\u8BB8\u91CD\u590D\u58F0\u660E</li></ul><p><code>const</code>\u5B9E\u9645\u4E0A\u4FDD\u8BC1\u7684\uFF0C\u5E76\u4E0D\u662F\u53D8\u91CF\u7684\u503C\u4E0D\u5F97\u6539\u52A8\uFF0C\u800C\u662F\u53D8\u91CF\u6307\u5411\u7684\u90A3\u4E2A\u5185\u5B58\u5730\u5740\u4E0D\u5F97\u6539\u52A8\u3002\u5BF9\u4E8E\u7B80\u5355\u7C7B\u578B\u7684\u6570\u636E\uFF08\u6570\u503C\u3001\u5B57\u7B26\u4E32\u3001\u5E03\u5C14\u503C\uFF09\uFF0C\u503C\u5C31\u4FDD\u5B58\u5728\u53D8\u91CF\u6307\u5411\u7684\u90A3\u4E2A\u5185\u5B58\u5730\u5740\uFF0C\u56E0\u6B64\u7B49\u540C\u4E8E\u5E38\u91CF\u3002\u4F46\u5BF9\u4E8E\u590D\u5408\u7C7B\u578B\u7684\u6570\u636E\uFF08\u4E3B\u8981\u662F\u5BF9\u8C61\u548C\u6570\u7EC4\uFF09\uFF0C\u53D8\u91CF\u6307\u5411\u7684\u5185\u5B58\u5730\u5740\uFF0C\u4FDD\u5B58\u7684\u53EA\u662F\u4E00\u4E2A\u6307\u9488\uFF0C<code>const</code>\u53EA\u80FD\u4FDD\u8BC1\u8FD9\u4E2A\u6307\u9488\u662F\u56FA\u5B9A\u7684\uFF0C\u81F3\u4E8E\u5B83\u6307\u5411\u7684\u6570\u636E\u7ED3\u6784\u662F\u4E0D\u662F\u53EF\u53D8\u7684\uFF0C\u5C31\u5B8C\u5168\u4E0D\u80FD\u63A7\u5236\u4E86\u3002\u56E0\u6B64\uFF0C\u5C06\u4E00\u4E2A\u5BF9\u8C61\u58F0\u660E\u4E3A\u5E38\u91CF\u5FC5\u987B\u975E\u5E38\u5C0F\u5FC3\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// \u4E3A foo \u6DFB\u52A0\u4E00\u4E2A\u5C5E\u6027\uFF0C\u53EF\u4EE5\u6210\u529F</span>\nfoo<span class="token punctuation">.</span>prop <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>\nfoo<span class="token punctuation">.</span>prop <span class="token comment">// 123</span>\n\n<span class="token comment">// \u5C06 foo \u6307\u5411\u53E6\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C31\u4F1A\u62A5\u9519</span>\nfoo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: &quot;foo&quot; is read-only</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="es6-\u58F0\u660E\u53D8\u91CF\u7684\u516D\u79CD\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#es6-\u58F0\u660E\u53D8\u91CF\u7684\u516D\u79CD\u65B9\u6CD5" aria-hidden="true">#</a> ES6 \u58F0\u660E\u53D8\u91CF\u7684\u516D\u79CD\u65B9\u6CD5</h2><ul><li><code>var</code></li><li><code>function</code></li><li><code>let</code></li><li><code>const</code></li><li><code>import</code></li><li><code>class</code></li></ul><h2 id="\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027</h2><p>\u9876\u5C42\u5BF9\u8C61\uFF0C\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u6307\u7684\u662F<code>window</code>\u5BF9\u8C61\uFF0C\u5728 Node \u6307\u7684\u662F<code>global</code>\u5BF9\u8C61\u3002ES5 \u4E4B\u4E2D\uFF0C\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u4E0E\u5168\u5C40\u53D8\u91CF\u662F\u7B49\u4EF7\u7684\u3002</p><p>ES6 \u4E3A\u4E86\u6539\u53D8\u8FD9\u4E00\u70B9\uFF0C\u4E00\u65B9\u9762\u89C4\u5B9A\uFF0C\u4E3A\u4E86\u4FDD\u6301\u517C\u5BB9\u6027\uFF0C<code>var</code>\u547D\u4EE4\u548C<code>function</code>\u547D\u4EE4\u58F0\u660E\u7684\u5168\u5C40\u53D8\u91CF\uFF0C\u4F9D\u65E7\u662F\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\uFF1B\u53E6\u4E00\u65B9\u9762\u89C4\u5B9A\uFF0C<code>let</code>\u547D\u4EE4\u3001<code>const</code>\u547D\u4EE4\u3001<code>class</code>\u547D\u4EE4\u58F0\u660E\u7684\u5168\u5C40\u53D8\u91CF\uFF0C\u4E0D\u5C5E\u4E8E\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4ECE ES6 \u5F00\u59CB\uFF0C\u5168\u5C40\u53D8\u91CF\u5C06\u9010\u6B65\u4E0E\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u8131\u94A9\u3002</p><h2 id="global-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#global-\u5BF9\u8C61" aria-hidden="true">#</a> global \u5BF9\u8C61</h2><p>ES5 \u7684\u9876\u5C42\u5BF9\u8C61\uFF0C\u672C\u8EAB\u4E5F\u662F\u4E00\u4E2A\u95EE\u9898\uFF0C\u56E0\u4E3A\u5B83\u5728\u5404\u79CD\u5B9E\u73B0\u91CC\u9762\u662F\u4E0D\u7EDF\u4E00\u7684\u3002</p><ul><li>\u6D4F\u89C8\u5668\u91CC\u9762\uFF0C\u9876\u5C42\u5BF9\u8C61\u662F<code>window</code>\uFF0C\u4F46 Node \u548C Web Worker \u6CA1\u6709<code>window</code></li><li>\u6D4F\u89C8\u5668\u548C Web Worker \u91CC\u9762\uFF0C<code>self</code>\u4E5F\u6307\u5411\u9876\u5C42\u5BF9\u8C61\uFF0C\u4F46\u662F Node \u6CA1\u6709<code>self</code></li><li>Node \u91CC\u9762\uFF0C\u9876\u5C42\u5BF9\u8C61\u662F<code>global</code>\uFF0C\u4F46\u5176\u4ED6\u73AF\u5883\u90FD\u4E0D\u652F\u6301\u3002</li></ul><p>\u540C\u4E00\u6BB5\u4EE3\u7801\u4E3A\u4E86\u80FD\u591F\u5728\u5404\u79CD\u73AF\u5883\uFF0C\u90FD\u80FD\u53D6\u5230\u9876\u5C42\u5BF9\u8C61\uFF0C\u73B0\u5728\u4E00\u822C\u662F\u4F7F\u7528<code>this</code>\u53D8\u91CF\uFF0C\u4F46\u662F\u6709\u5C40\u9650\u6027\u3002</p><ul><li>\u5168\u5C40\u73AF\u5883\u4E2D\uFF0C<code>this</code>\u4F1A\u8FD4\u56DE\u9876\u5C42\u5BF9\u8C61\u3002\u4F46\u662F\uFF0CNode \u6A21\u5757\u548C ES6 \u6A21\u5757\u4E2D\uFF0C<code>this</code>\u8FD4\u56DE\u7684\u662F\u5F53\u524D\u6A21\u5757</li><li>\u51FD\u6570\u91CC\u9762\u7684<code>this</code>\uFF0C\u5982\u679C\u51FD\u6570\u4E0D\u662F\u4F5C\u4E3A\u5BF9\u8C61\u7684\u65B9\u6CD5\u8FD0\u884C\uFF0C\u800C\u662F\u5355\u7EAF\u4F5C\u4E3A\u51FD\u6570\u8FD0\u884C\uFF0C<code>this</code>\u4F1A\u6307\u5411\u9876\u5C42\u5BF9\u8C61\u3002\u4F46\u662F\uFF0C\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u8FD9\u65F6<code>this</code>\u4F1A\u8FD4\u56DE<code>undefined</code></li><li>\u4E0D\u7BA1\u662F\u4E25\u683C\u6A21\u5F0F\uFF0C\u8FD8\u662F\u666E\u901A\u6A21\u5F0F\uFF0C<code>new Function(&#39;return this&#39;)()</code>\uFF0C\u603B\u662F\u4F1A\u8FD4\u56DE\u5168\u5C40\u5BF9\u8C61\u3002\u4F46\u662F\uFF0C\u5982\u679C\u6D4F\u89C8\u5668\u7528\u4E86 CSP\uFF08Content Security Policy\uFF0C\u5185\u5BB9\u5B89\u5168\u653F\u7B56\uFF09\uFF0C\u90A3\u4E48<code>eval</code>\u3001<code>new Function</code>\u8FD9\u4E9B\u65B9\u6CD5\u90FD\u53EF\u80FD\u65E0\u6CD5\u4F7F\u7528\u3002</li></ul>', 25);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#let-\u547D\u4EE4" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5757\u7EA7\u4F5C\u7528\u57DF" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u54EA\u4E9B\u8BED\u53E5\u4F1A\u4EA7\u751F\u5757\u7EA7\u4F5C\u7528\u57DF" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#const-\u547D\u4EE4" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#es6-\u58F0\u660E\u53D8\u91CF\u7684\u516D\u79CD\u65B9\u6CD5" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#global-\u5BF9\u8C61" }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_10,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
