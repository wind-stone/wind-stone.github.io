import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u529F\u80FD\u6A21\u5757\u7684\u94A9\u5B50\u51FD\u6570",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u529F\u80FD\u6A21\u5757\u7684\u94A9\u5B50\u51FD\u6570",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u529F\u80FD\u6A21\u5757\u7684\u94A9\u5B50\u51FD\u6570")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u94A9\u5B50\u51FD\u6570\u7684\u6765\u6E90");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u94A9\u5B50\u51FD\u6570\u7684\u5408\u5E76");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u94A9\u5B50\u51FD\u6570\u7684\u8C03\u7528\u65F6\u673A");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("create \u94A9\u5B50");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("update \u94A9\u5B50");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u5176\u4ED6\u8BF4\u660E");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u94A9\u5B50\u51FD\u6570\u53C2\u6570");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("DOM \u64CD\u4F5C\u7684\u8282\u70B9");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u5404\u6A21\u5757\u8BE6\u89E3");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("events \u6A21\u5757");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("class \u6A21\u5757");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("style \u6A21\u5757");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("attrs \u6A21\u5757");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("dom-props \u6A21\u5757");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("transition \u6A21\u5757");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("ref \u6A21\u5757");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("directives \u6A21\u5757");
const _hoisted_20 = /* @__PURE__ */ createStaticVNode('<p>\u6211\u4EEC\u5728\u5206\u6790<code>patch</code>\u51FD\u6570\u65F6\uFF0C\u65E0\u8BBA\u662F\u5143\u7D20\u7C7B\u578B\u7684 VNode \u8FD8\u662F\u7EC4\u4EF6\u5360\u4F4D VNode\uFF0C\u90FD\u53EA\u662F\u5206\u6790\u4E86 DOM \u8282\u70B9\u53CA\u5176\u5B50\u8282\u70B9\u662F\u5982\u4F55\u4FEE\u8865\u7684\uFF0C\u4F46\u662F\u6CA1\u6709\u63D0\u5230 DOM \u5143\u7D20\u8282\u70B9\u4E0A\u7684<code>class</code>/<code>style</code>/<code>events</code>\u7B49\u6570\u636E\u65F6\u5982\u4F55\u4FEE\u8865\u7684\u3002\u5B9E\u9645\u4E0A\uFF0C\u5728<code>patchVnode</code>\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u6267\u884C\u5F88\u591A\u529F\u80FD\u6A21\u5757\u7684\u94A9\u5B50\u51FD\u6570\uFF0C\u6BD4\u5982\uFF1A</p><ul><li><code>create</code>\u94A9\u5B50\uFF1ADOM \u5143\u7D20\u8282\u70B9\u521B\u5EFA\u65F6/\u521D\u59CB\u5316\u7EC4\u4EF6\u65F6\u8C03\u7528</li><li><code>activate</code>\u94A9\u5B50\uFF1A\u7EC4\u4EF6\u6FC0\u6D3B\u65F6\u8C03\u7528</li><li><code>update</code>\u94A9\u5B50\uFF1ADOM \u8282\u70B9\u66F4\u65B0\u65F6\u8C03\u7528</li><li><code>remove</code>\u94A9\u5B50\uFF1ADOM \u8282\u70B9\u79FB\u9664\u65F6\u8C03\u7528</li><li><code>destroy</code>\u94A9\u5B50\uFF1A\u7EC4\u4EF6\u9500\u6BC1\u65F6\u8C03\u7528</li></ul><p>\u800C\u8FD9\u4E9B\u529F\u80FD\u6A21\u5757\u6709\uFF1A</p><ul><li>Web \u5E73\u53F0\u76F8\u5173\u6A21\u5757 <ul><li><code>attrs</code>\u6A21\u5757\uFF1A\u5904\u7406\u8282\u70B9\u4E0A\u7684\u7279\u6027<code>attribute</code></li><li><code>klass</code>\u6A21\u5757\uFF1A\u5904\u7406\u8282\u70B9\u4E0A\u7684\u7C7B<code>class</code></li><li><code>events</code>\u6A21\u5757\uFF1A\u5904\u7406\u8282\u70B9\u4E0A\u7684\u539F\u751F\u4E8B\u4EF6</li><li><code>domProps</code>\u6A21\u5757\uFF1A\u5904\u7406\u8282\u70B9\u4E0A\u7684\u5C5E\u6027<code>property</code></li><li><code>style</code>\u6A21\u5757\uFF1A\u5904\u7406\u8282\u70B9\u4E0A\u7684\u5185\u8054\u6837\u5F0F<code>style</code>\u7279\u6027</li><li><code>transition</code>\u6A21\u5757</li></ul></li><li>\u6838\u5FC3\u6A21\u5757 <ul><li><code>ref</code>\u6A21\u5757\uFF1A\u5904\u7406\u8282\u70B9\u7684\u5F15\u7528<code>ref</code></li><li><code>directives</code>\u6A21\u5757\uFF1A\u5904\u7406\u8282\u70B9\u4E0A\u7684\u6307\u4EE4<code>directives</code></li></ul></li></ul><p>\u6BCF\u4E00\u529F\u80FD\u6A21\u5757\u5305\u542B\u4E86\u82E5\u5E72\u4E2A\u94A9\u5B50\uFF0C\u4F46\u57FA\u672C\u90FD\u5B58\u5728<code>create</code>\u94A9\u5B50\u548C<code>update</code>\u94A9\u5B50\uFF0C\u7528\u4E8E\u5728 DOM \u8282\u70B9\u521B\u5EFA\u3001\u66F4\u65B0\u4EE5\u53CA\u9500\u6BC1\u65F6\uFF0C\u5982\u4F55\u6765\u5904\u7406\u8FD9\u4E9B\u6302\u8F7D\u4E0A\u8282\u70B9\u4E4B\u4E0A\u7684\u6570\u636E\u3002</p><h2 id="\u94A9\u5B50\u51FD\u6570\u7684\u6765\u6E90" tabindex="-1"><a class="header-anchor" href="#\u94A9\u5B50\u51FD\u6570\u7684\u6765\u6E90" aria-hidden="true">#</a> \u94A9\u5B50\u51FD\u6570\u7684\u6765\u6E90</h2><p>\u8C03\u7528<code>createPatchFunction</code>\u51FD\u6570\u65F6\uFF0C\u4F1A\u5C06\u6240\u6709\u7684\u529F\u80FD\u6A21\u5757\u5F53\u505A\u53C2\u6570\u4F20\u5165\uFF0C\u4EE5\u8FD4\u56DE\u4E13\u5C5E\u4E8E Web \u5E73\u53F0\u7684<code>patch</code>\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/platforms/web/runtime/patch.js</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> nodeOps <span class="token keyword">from</span> <span class="token string">&#39;web/runtime/node-ops&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createPatchFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core/vdom/patch&#39;</span>\n<span class="token keyword">import</span> baseModules <span class="token keyword">from</span> <span class="token string">&#39;core/vdom/modules/index&#39;</span>\n<span class="token keyword">import</span> platformModules <span class="token keyword">from</span> <span class="token string">&#39;web/runtime/modules/index&#39;</span>\n\n<span class="token comment">// the directive module should be applied last, after all</span>\n<span class="token comment">// built-in modules have been applied.</span>\n<span class="token keyword">const</span> modules <span class="token operator">=</span> platformModules<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>baseModules<span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> patch<span class="token operator">:</span> Function <span class="token operator">=</span> <span class="token function">createPatchFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span> nodeOps<span class="token punctuation">,</span> modules <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>platformModules</code>\u4E13\u5C5E\u6A21\u5757\u7684\u6765\u6E90\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/platforms/web/runtime/modules/index.js</span>\n<span class="token keyword">import</span> attrs <span class="token keyword">from</span> <span class="token string">&#39;./attrs&#39;</span>\n<span class="token keyword">import</span> klass <span class="token keyword">from</span> <span class="token string">&#39;./class&#39;</span>\n<span class="token keyword">import</span> events <span class="token keyword">from</span> <span class="token string">&#39;./events&#39;</span>\n<span class="token keyword">import</span> domProps <span class="token keyword">from</span> <span class="token string">&#39;./dom-props&#39;</span>\n<span class="token keyword">import</span> style <span class="token keyword">from</span> <span class="token string">&#39;./style&#39;</span>\n<span class="token keyword">import</span> transition <span class="token keyword">from</span> <span class="token string">&#39;./transition&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>\n  attrs<span class="token punctuation">,</span>\n  klass<span class="token punctuation">,</span>\n  events<span class="token punctuation">,</span>\n  domProps<span class="token punctuation">,</span>\n  style<span class="token punctuation">,</span>\n  transition\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><code>baseModules</code>\u7684\u6765\u6E90\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/core/vdom/modules/index.js</span>\n<span class="token keyword">import</span> directives <span class="token keyword">from</span> <span class="token string">&#39;./directives&#39;</span>\n<span class="token keyword">import</span> ref <span class="token keyword">from</span> <span class="token string">&#39;./ref&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>\n  ref<span class="token punctuation">,</span>\n  directives\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8FD9\u4E9B\u5F15\u5165\u7684\u5404\u4E2A\u6A21\u5757\u66B4\u9732\u7684\u5BF9\u8C61\uFF0C\u90FD\u5305\u542B\u4E86\u94A9\u5B50\u7684\u540D\u79F0\u548C\u5904\u7406\u51FD\u6570\uFF0C\u4EE5<code>class</code>\u4E3A\u4F8B\uFF0C\u6A21\u5757\u7684\u7ED3\u6784\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateClass</span><span class="token punctuation">(</span><span class="token parameter">oldVnode<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  create<span class="token operator">:</span> updateClass<span class="token punctuation">,</span>\n  update<span class="token operator">:</span> updateClass\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u94A9\u5B50\u51FD\u6570\u7684\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u94A9\u5B50\u51FD\u6570\u7684\u5408\u5E76" aria-hidden="true">#</a> \u94A9\u5B50\u51FD\u6570\u7684\u5408\u5E76</h2><p><code>createPatchFunction</code>\u51FD\u6570\u6267\u884C\u65F6\uFF0C\u7B2C\u4E00\u65F6\u95F4\u5C31\u662F\u5408\u5E76\u8FD9\u4E9B\u94A9\u5B50\u51FD\u6570\uFF0C\u5C06\u6240\u6709\u529F\u80FD\u6A21\u5757\u540C\u7C7B\u578B\u7684\u94A9\u5B50\u51FD\u6570\u5408\u5E76\u5230\u6570\u7EC4\u91CC\uFF0C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/core/patch.js</span>\n<span class="token keyword">const</span> hooks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;create&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;activate&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;update&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;remove&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;destroy&#39;</span><span class="token punctuation">]</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createPatchFunction</span> <span class="token punctuation">(</span><span class="token parameter">backend</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> i<span class="token punctuation">,</span> j\n  <span class="token keyword">const</span> cbs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> modules<span class="token punctuation">,</span> nodeOps <span class="token punctuation">}</span> <span class="token operator">=</span> backend\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hooks<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    cbs<span class="token punctuation">[</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> modules<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>modules<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        cbs<span class="token punctuation">[</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>modules<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u7ECF\u8FC7\u5408\u5E76\u4EE5\u540E\uFF0C<code>cbs</code>\u53D8\u6210\u4E86\u5982\u4E0B\u7684\u7ED3\u6784\uFF0C\u8FD9\u4E9B\u94A9\u5B50\u5C06\u5728\u4E0D\u540C\u7684\u65F6\u673A\u88AB\u4E00\u4E00\u8C03\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>cbs <span class="token operator">=</span> <span class="token punctuation">{</span>\n  create<span class="token operator">:</span> <span class="token punctuation">[</span>\n    attrs<span class="token punctuation">.</span>create<span class="token punctuation">,</span>\n    klass<span class="token punctuation">.</span>create<span class="token punctuation">,</span>\n    events<span class="token punctuation">.</span>create<span class="token punctuation">,</span>\n    domProps<span class="token punctuation">.</span>create<span class="token punctuation">,</span>\n    style<span class="token punctuation">.</span>create<span class="token punctuation">,</span>\n    transition<span class="token punctuation">.</span>create<span class="token punctuation">,</span>\n    ref<span class="token punctuation">.</span>create<span class="token punctuation">,</span>\n    directives<span class="token punctuation">.</span>create\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  update<span class="token operator">:</span> <span class="token punctuation">[</span>\n    attrs<span class="token punctuation">.</span>update<span class="token punctuation">,</span>\n    klass<span class="token punctuation">.</span>update<span class="token punctuation">,</span>\n    events<span class="token punctuation">.</span>update<span class="token punctuation">,</span>\n    domProps<span class="token punctuation">.</span>update<span class="token punctuation">,</span>\n    style<span class="token punctuation">.</span>update<span class="token punctuation">,</span>\n    ref<span class="token punctuation">.</span>update<span class="token punctuation">,</span>\n    directives<span class="token punctuation">.</span>update\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  activate<span class="token operator">:</span> <span class="token punctuation">[</span>\n    transition<span class="token punctuation">.</span>activate\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  remove<span class="token operator">:</span> <span class="token punctuation">[</span>\n    transition<span class="token punctuation">.</span>remove\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  destroy<span class="token operator">:</span> <span class="token punctuation">[</span>\n    ref<span class="token punctuation">.</span>destroy<span class="token punctuation">,</span>\n    directives<span class="token punctuation">.</span>destroy\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="\u94A9\u5B50\u51FD\u6570\u7684\u8C03\u7528\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#\u94A9\u5B50\u51FD\u6570\u7684\u8C03\u7528\u65F6\u673A" aria-hidden="true">#</a> \u94A9\u5B50\u51FD\u6570\u7684\u8C03\u7528\u65F6\u673A</h2><h3 id="create-\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#create-\u94A9\u5B50" aria-hidden="true">#</a> create \u94A9\u5B50</h3><p>DOM \u5143\u7D20\u521B\u5EFA\u597D\u540E\u4EE5\u53CA\u521D\u59CB\u5316\u521B\u5EFA\u597D\u7684\u5B50\u7EC4\u4EF6\u65F6\u4F1A\u8C03\u7528<code>invokeCreateHooks</code>\u51FD\u6570\uFF0C\u800C<code>create</code>\u94A9\u5B50\u7684\u8C03\u7528\u4E3B\u8981\u5C31\u662F\u5C01\u88C5\u5728<code>invokeCreateHooks</code>\u51FD\u6570\u91CC\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/core/patch.js</span>\n  <span class="token keyword">function</span> <span class="token function">invokeCreateHooks</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> insertedVnodeQueue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cbs<span class="token punctuation">.</span>create<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      cbs<span class="token punctuation">.</span>create<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span>emptyNode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    i <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>hook <span class="token comment">// Reuse variable</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>create<span class="token punctuation">)</span><span class="token punctuation">)</span> i<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>emptyNode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>insert<span class="token punctuation">)</span><span class="token punctuation">)</span> insertedVnodeQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8FD8\u6709\u51E0\u5904\u96F6\u6563\u5730\u8C03\u7528<code>create</code>\u94A9\u5B50\u548C<code>invokeCreateHooks</code>\u51FD\u6570\u7684\u5730\u65B9\uFF0C\u5728\u6B64\u4E0D\u518D\u8BE6\u8FF0\u3002</p></div><h3 id="update-\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#update-\u94A9\u5B50" aria-hidden="true">#</a> update \u94A9\u5B50</h3><p>\u5728\u4FEE\u8865\u65B0\u65E7 VNode \u65F6\u4F1A\u8C03\u7528<code>update</code>\u94A9\u5B50\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/core/patch.js</span>\n  <span class="token keyword">function</span> <span class="token function">patchVnode</span> <span class="token punctuation">(</span><span class="token parameter">oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> removeOnly</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isPatchable</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// \u8C03\u7528\u5404\u4E2A\u6A21\u5757\u7684 update \u94A9\u5B50</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cbs<span class="token punctuation">.</span>update<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> cbs<span class="token punctuation">.</span>update<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>\n      <span class="token comment">// \u8C03\u7528\uFF08\u5E26\u6709\u81EA\u5B9A\u4E49\u6307\u4EE4\u4E14\u6307\u4EE4\u5B58\u5728 update \u94A9\u5B50\u7684\u5143\u7D20\u7C7B\u578B\u7684\uFF09 VNode \u7684 update \u94A9\u5B50</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> data<span class="token punctuation">.</span>hook<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>update<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">i</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u5176\u4ED6\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u8BF4\u660E" aria-hidden="true">#</a> \u5176\u4ED6\u8BF4\u660E</h2><h3 id="\u94A9\u5B50\u51FD\u6570\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u94A9\u5B50\u51FD\u6570\u53C2\u6570" aria-hidden="true">#</a> \u94A9\u5B50\u51FD\u6570\u53C2\u6570</h3><p>\u8C03\u7528\u8FD9\u4E9B\u94A9\u5B50\u51FD\u6570\u65F6\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u65E7 VNode\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u65B0 VNode</p><h3 id="dom-\u64CD\u4F5C\u7684\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#dom-\u64CD\u4F5C\u7684\u8282\u70B9" aria-hidden="true">#</a> DOM \u64CD\u4F5C\u7684\u8282\u70B9</h3><p>\u6709\u4E9B\u6A21\u5757\u7684\u64CD\u4F5C\u4E3B\u4F53\u662F DOM \u5143\u7D20\u8282\u70B9\uFF0C\u6BD4\u5982<code>class</code>\u6A21\u5757\u3001<code>attrs</code>\u6A21\u5757\u3002</p><p>\u5BF9\u4E8E\u5143\u7D20\u7C7B\u578B\u7684 VNode\uFF0C\u6240\u64CD\u4F5C\u7684\u662F\u5176\u5BF9\u5E94\u7684 DOM \u5143\u7D20\u8282\u70B9\u3002</p><p>\u5BF9\u4E8E\u7EC4\u4EF6\u5360\u4F4D VNode\uFF0C\u6240\u64CD\u4F5C\u7684\u662F\u7EC4\u4EF6\u89C6\u56FE DOM \u7684\u6839\u5143\u7D20\u8282\u70B9\u3002</p><h2 id="\u5404\u6A21\u5757\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#\u5404\u6A21\u5757\u8BE6\u89E3" aria-hidden="true">#</a> \u5404\u6A21\u5757\u8BE6\u89E3</h2><h3 id="events-\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#events-\u6A21\u5757" aria-hidden="true">#</a> events \u6A21\u5757</h3>', 36);
const _hoisted_56 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1");
const _hoisted_57 = /* @__PURE__ */ createTextVNode("events \u6A21\u5757");
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "class-\u6A21\u5757",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#class-\u6A21\u5757",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" class \u6A21\u5757")
], -1);
const _hoisted_59 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1");
const _hoisted_60 = /* @__PURE__ */ createTextVNode("class \u6A21\u5757");
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "style-\u6A21\u5757",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#style-\u6A21\u5757",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" style \u6A21\u5757")
], -1);
const _hoisted_62 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1");
const _hoisted_63 = /* @__PURE__ */ createTextVNode("style \u6A21\u5757");
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "attrs-\u6A21\u5757",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#attrs-\u6A21\u5757",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" attrs \u6A21\u5757")
], -1);
const _hoisted_65 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1");
const _hoisted_66 = /* @__PURE__ */ createTextVNode("attrs \u6A21\u5757");
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "dom-props-\u6A21\u5757",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#dom-props-\u6A21\u5757",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" dom-props \u6A21\u5757")
], -1);
const _hoisted_68 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1");
const _hoisted_69 = /* @__PURE__ */ createTextVNode("dom-props \u6A21\u5757");
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "transition-\u6A21\u5757",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#transition-\u6A21\u5757",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" transition \u6A21\u5757")
], -1);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("p", null, "TODO: \u5F85\u6DFB\u52A0", -1);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "ref-\u6A21\u5757",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#ref-\u6A21\u5757",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" ref \u6A21\u5757")
], -1);
const _hoisted_73 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1");
const _hoisted_74 = /* @__PURE__ */ createTextVNode("ref \u6A21\u5757");
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "directives-\u6A21\u5757",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#directives-\u6A21\u5757",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" directives \u6A21\u5757")
], -1);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode("p", null, "TODO: \u5F85\u6DFB\u52A0", -1);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u94A9\u5B50\u51FD\u6570\u7684\u6765\u6E90" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u94A9\u5B50\u51FD\u6570\u7684\u5408\u5E76" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u94A9\u5B50\u51FD\u6570\u7684\u8C03\u7528\u65F6\u673A" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#create-\u94A9\u5B50" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#update-\u94A9\u5B50" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5176\u4ED6\u8BF4\u660E" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u94A9\u5B50\u51FD\u6570\u53C2\u6570" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#dom-\u64CD\u4F5C\u7684\u8282\u70B9" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5404\u6A21\u5757\u8BE6\u89E3" }, {
            default: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#events-\u6A21\u5757" }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#class-\u6A21\u5757" }, {
                default: withCtx(() => [
                  _hoisted_13
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#style-\u6A21\u5757" }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#attrs-\u6A21\u5757" }, {
                default: withCtx(() => [
                  _hoisted_15
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#dom-props-\u6A21\u5757" }, {
                default: withCtx(() => [
                  _hoisted_16
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#transition-\u6A21\u5757" }, {
                default: withCtx(() => [
                  _hoisted_17
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#ref-\u6A21\u5757" }, {
                default: withCtx(() => [
                  _hoisted_18
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#directives-\u6A21\u5757" }, {
                default: withCtx(() => [
                  _hoisted_19
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_20,
    createBaseVNode("p", null, [
      _hoisted_56,
      createVNode(_component_RouterLink, { to: "/vue/source-study/instance/events.html#%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6" }, {
        default: withCtx(() => [
          _hoisted_57
        ]),
        _: 1
      })
    ]),
    _hoisted_58,
    createBaseVNode("p", null, [
      _hoisted_59,
      createVNode(_component_RouterLink, { to: "/vue/source-study/vdom/patch-modules/class.html" }, {
        default: withCtx(() => [
          _hoisted_60
        ]),
        _: 1
      })
    ]),
    _hoisted_61,
    createBaseVNode("p", null, [
      _hoisted_62,
      createVNode(_component_RouterLink, { to: "/vue/source-study/vdom/patch-modules/style.html" }, {
        default: withCtx(() => [
          _hoisted_63
        ]),
        _: 1
      })
    ]),
    _hoisted_64,
    createBaseVNode("p", null, [
      _hoisted_65,
      createVNode(_component_RouterLink, { to: "/vue/source-study/vdom/patch-modules/attrs.html" }, {
        default: withCtx(() => [
          _hoisted_66
        ]),
        _: 1
      })
    ]),
    _hoisted_67,
    createBaseVNode("p", null, [
      _hoisted_68,
      createVNode(_component_RouterLink, { to: "/vue/source-study/vdom/patch-modules/dom-props.html" }, {
        default: withCtx(() => [
          _hoisted_69
        ]),
        _: 1
      })
    ]),
    _hoisted_70,
    _hoisted_71,
    _hoisted_72,
    createBaseVNode("p", null, [
      _hoisted_73,
      createVNode(_component_RouterLink, { to: "/vue/source-study/vdom/patch-modules/ref.html" }, {
        default: withCtx(() => [
          _hoisted_74
        ]),
        _: 1
      })
    ]),
    _hoisted_75,
    _hoisted_76,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
