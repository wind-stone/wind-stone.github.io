import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "webpack-\u6838\u5FC3\u6982\u5FF5",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#webpack-\u6838\u5FC3\u6982\u5FF5",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Webpack \u6838\u5FC3\u6982\u5FF5")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u4F18\u79C0\u6587\u7AE0");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u63D2\u4EF6");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5206\u6790\u4F9D\u8D56\u5173\u7CFB");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5F85\u89E3\u51B3\u7591\u95EE");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u6982\u5FF5\u540D\u8BCD");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("module\u3001chunk\u3001bundle\u3001asset");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("JSON \u6587\u4EF6\u7ED3\u6784");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("chunk \u5BF9\u8C61");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("asset \u5BF9\u8C61");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("module \u5BF9\u8C61");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u5BB9\u6613\u5FFD\u89C6\u7684\u70B9");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("loader");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u5E38\u7528\u7684 loader");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("plugin");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u5E38\u7528\u7684 plugin");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("HMR \u6A21\u5757\u70ED\u66FF\u6362");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("\u6A21\u5757");
const _hoisted_20 = /* @__PURE__ */ createTextVNode("chunk");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("\u4EA7\u751F chunk \u7684\u51E0\u79CD\u65B9\u5F0F");
const _hoisted_22 = /* @__PURE__ */ createTextVNode("Tree Shaking");
const _hoisted_23 = /* @__PURE__ */ createTextVNode("\u4F18\u5316");
const _hoisted_24 = /* @__PURE__ */ createTextVNode("\u914D\u7F6E\u4F18\u5316");
const _hoisted_25 = /* @__PURE__ */ createTextVNode("\u5168\u5C40\u4F18\u5316");
const _hoisted_26 = /* @__PURE__ */ createTextVNode("loader \u4F18\u5316");
const _hoisted_27 = /* @__PURE__ */ createTextVNode("\u89E3\u6790");
const _hoisted_28 = /* @__PURE__ */ createTextVNode("dev \u5F00\u53D1\u73AF\u5883\u4F18\u5316");
const _hoisted_29 = /* @__PURE__ */ createTextVNode("production \u751F\u4EA7\u73AF\u5883\u4F18\u5316");
const _hoisted_30 = /* @__PURE__ */ createTextVNode("\u4EE3\u7801\u4F18\u5316");
const _hoisted_31 = /* @__PURE__ */ createTextVNode("\u4F7F\u7528 preload\u3001prefetch\u3001dns-fetch");
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u4F18\u79C0\u6587\u7AE0",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u4F18\u79C0\u6587\u7AE0",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u4F18\u79C0\u6587\u7AE0")
], -1);
const _hoisted_33 = {
  href: "https://mp.weixin.qq.com/s/Ue0kNOMQS7mH-2-9BhYk8Q",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_34 = /* @__PURE__ */ createTextVNode("Webpack \u662F\u5982\u4F55\u505A\u5230 Tree Shaking \u7684\uFF1F");
const _hoisted_35 = /* @__PURE__ */ createStaticVNode('<h2 id="\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a> \u63D2\u4EF6</h2><h3 id="\u5206\u6790\u4F9D\u8D56\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u4F9D\u8D56\u5173\u7CFB" aria-hidden="true">#</a> \u5206\u6790\u4F9D\u8D56\u5173\u7CFB</h3><p><code>webpack-bundle-analyzer</code></p><h4 id="\u5F85\u89E3\u51B3\u7591\u95EE" tabindex="-1"><a class="header-anchor" href="#\u5F85\u89E3\u51B3\u7591\u95EE" aria-hidden="true">#</a> \u5F85\u89E3\u51B3\u7591\u95EE</h4><ul><li><code>splitChunk</code>\u7684\u9ED8\u8BA4\u7684<code>cacheGroups</code>\u662F\u600E\u4E48\u914D\u7F6E\u7684\uFF1F</li></ul><h2 id="\u6982\u5FF5\u540D\u8BCD" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5\u540D\u8BCD" aria-hidden="true">#</a> \u6982\u5FF5\u540D\u8BCD</h2><h3 id="module\u3001chunk\u3001bundle\u3001asset" tabindex="-1"><a class="header-anchor" href="#module\u3001chunk\u3001bundle\u3001asset" aria-hidden="true">#</a> module\u3001chunk\u3001bundle\u3001asset</h3><ul><li><code>asset</code>: \u7ECF\u8FC7<code>webpack</code>\u7F16\u8BD1\u5904\u7406\u540E\u7684\u56FE\u7247\u3001\u5B57\u4F53\u3001\u5A92\u4F53\u7B49\u6587\u4EF6\uFF0C\u4E3B\u8981\u7528\u4E8E\u7F51\u7AD9\u548C\u5E94\u7528\uFF0C\u8FD9\u4E9B\u901A\u5E38\u4F1A\u6DFB\u52A0\u5230<code>output</code>\u76EE\u5F55\u4E0B\u6210\u4E3A\u5355\u4E2A\u6587\u4EF6\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u901A\u8FC7<code>style-loader</code>\u6216<code>url-loader</code>\u7B49\u5185\u8054</li><li><code>module</code>: \u79BB\u6563\u7684\u529F\u80FD\u5757\uFF0C\u63D0\u4F9B\u6BD4\u5B8C\u6574\u7A0B\u5E8F\u66F4\u5C0F\u7684\u63A5\u89E6\u9762\u3002\u5199\u5F97\u597D\u7684\u6A21\u5757\u63D0\u4F9B\u4E86\u53EF\u9760\u7684\u62BD\u8C61\u548C\u5C01\u88C5\u8FB9\u754C\uFF0C\u8FBE\u5230\u6761\u7406\u6E05\u6670\u7684\u8BBE\u8BA1\u548C\u660E\u786E\u7684\u76EE\u7684</li><li><code>chunk</code><ul><li>\u8FD9\u662F<code>webpack</code>\u7279\u6709\u7684\u672F\u8BED\uFF0C\u7528\u4E8E\u5728<code>webpack</code>\u5185\u90E8\u7BA1\u7406\u6253\u5305\u8FC7\u7A0B\u3002<code>bundle</code>\u7531<code>chunk</code>\u7EC4\u6210\uFF0C<code>chunk</code>\u6709\u597D\u51E0\u79CD\u7C7B\u578B\uFF0C\u6BD4\u5982\u5165\u53E3<code>chunk</code>\u548C\u5B50<code>chunk</code>\u3002\u901A\u5E38<code>chunk</code>\u76F4\u63A5\u5BF9\u5E94\u7740\u8F93\u51FA\u7684<code>bundle</code>\u6587\u4EF6\uFF0C\u4F46\u662F\u6709\u4E00\u4E9B\u914D\u7F6E\u5E76\u4E0D\u4F1A\u4EA7\u751F\u4E00\u5BF9\u4E00\u7684\u5173\u7CFB\u3002</li><li><code>Code Splitting</code>: \u6307\u5C06\u4EE3\u7801\u5206\u79BB\u5230\u5404\u4E2A\u4E0D\u540C\u7684<code>bundle</code>/<code>chunk</code>\uFF0C\u4E4B\u540E\u53EF\u4EE5\u6309\u9700\u52A0\u8F7D\uFF0C\u800C\u4E0D\u662F\u52A0\u8F7D\u4E00\u4E2A\u5305\u542B\u5168\u90E8\u4EE3\u7801\u7684\u5355\u4E2A<code>bundle</code></li></ul></li><li><code>bundle</code><ul><li>\u7531\u4E00\u7CFB\u5217\u4E0D\u540C\u7684\u6A21\u5757\u7EC4\u6210\uFF0C<code>bundle</code>\u5305\u542B\u4E86\u6E90\u6587\u4EF6\u7684\u6700\u7EC8\u7248\u672C\uFF0C\u8FD9\u4E9B\u6E90\u6587\u4EF6\u5DF2\u7ECF\u7ECF\u8FC7\u52A0\u8F7D\u548C\u7F16\u8BD1</li><li><code>bundle</code>\u5206\u79BB: \u8FD9\u4E00\u8FC7\u7A0B\u63D0\u4F9B\u4E86\u4E00\u79CD\u4F18\u5316\u6784\u5EFA\u7684\u65B9\u5F0F\uFF0C\u5141\u8BB8<code>webpack</code>\u4E3A\u5355\u4E2A\u5E94\u7528\u751F\u6210\u591A\u4E2A<code>bundle</code>\u3002\u6700\u7EC8\u6548\u679C\u662F\uFF0C\u6BCF\u4E2A<code>bundle</code>\u662F\u76F8\u4E92\u72EC\u7ACB\u7684\uFF0C\u5355\u4E2A<code>bundle</code>\u6539\u53D8\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u7684<code>bundle</code>\uFF0C\u53EF\u51CF\u5C11\u4EE3\u7801\u91CD\u65B0\u53D1\u5E03\u4EE5\u53CA\u6D4F\u89C8\u5668\u91CD\u65B0\u4E0B\u8F7D\uFF08\u5229\u7528\u6D4F\u89C8\u5668\u7F13\u5B58\uFF09\u7684\u6B21\u6570</li></ul></li></ul><p>\u82E5\u662F\u5728<code>webpack</code>\u7F16\u8BD1\u65F6\u751F\u6210\u4E86\u5305\u542B\u4F9D\u8D56\u56FE\u548C\u5176\u4ED6\u7F16\u8BD1\u4FE1\u606F\u7B49\u7EDF\u8BA1\u6570\u636E\u7684 JSON \u6587\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u66F4\u6E05\u6670\u5730\u4E86\u89E3\u8FD9\u4E9B\u672F\u8BED\u7684\u533A\u522B\u548C\u8054\u7CFB\u3002\u4EE5\u4E0B\u662F JSON \u6587\u4EF6\u7684\u5185\u5BB9\u3002</p><h4 id="json-\u6587\u4EF6\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#json-\u6587\u4EF6\u7ED3\u6784" aria-hidden="true">#</a> JSON \u6587\u4EF6\u7ED3\u6784</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.4.13&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Version of webpack used for the compilation</span>\n  <span class="token string">&quot;hash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11593e3b3ac85436984a&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Compilation specific hash</span>\n  <span class="token string">&quot;time&quot;</span><span class="token operator">:</span> <span class="token number">2469</span><span class="token punctuation">,</span> <span class="token comment">// Compilation time in milliseconds</span>\n  <span class="token string">&quot;filteredModules&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// A count of excluded modules when exclude is passed to the toJson method</span>\n  <span class="token string">&quot;outputPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// path to webpack output directory</span>\n  <span class="token string">&quot;assetsByChunkName&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Chunk name to emitted asset(s) mapping</span>\n    <span class="token string">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;web.js?h=11593e3b3ac85436984a&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;named-chunk&quot;</span><span class="token operator">:</span> <span class="token string">&quot;named-chunk.web.js&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;other-chunk&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;other-chunk.js&quot;</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;other-chunk.css&quot;</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;assets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// A list of asset objects</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;chunks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// A list of chunk objects</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// A list of module objects</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// A list of error strings</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;warnings&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// A list of warning strings</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h4 id="chunk-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#chunk-\u5BF9\u8C61" aria-hidden="true">#</a> chunk \u5BF9\u8C61</h4><p>\u6BCF\u4E2A<code>chunk</code>\u5BF9\u8C61\u4EE3\u8868\u4E86\u4E00\u7EC4<code>module</code>\uFF0C\u5176\u7ED3\u6784\u5982\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;entry&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Indicates whether or not the chunk contains the webpack runtime</span>\n  <span class="token string">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// An array of filename strings that contain this chunk</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;filteredModules&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// See the description in the top-level structure above</span>\n  <span class="token string">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// The ID of this chunk</span>\n  <span class="token string">&quot;initial&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Indicates whether this chunk is loaded on initial page load or on demand</span>\n  <span class="token string">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// A list of module objects</span>\n    <span class="token string">&quot;web.js?h=11593e3b3ac85436984a&quot;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;names&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// An list of chunk names contained within this chunk</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;origins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// See the description below...</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;parents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Parent chunk IDs</span>\n  <span class="token string">&quot;rendered&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Indicates whether or not the chunk went through Code Generation</span>\n  <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">188057</span> <span class="token comment">// Chunk size in bytes</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><code>chunk</code>\u5BF9\u8C61\u7684<code>origins</code>\u5C5E\u6027\uFF0C\u5305\u542B\u4E86\u4E00\u7CFB\u5217<code>origin</code>\u5BF9\u8C61\uFF0C\u63CF\u8FF0\u4E86\u8BE5<code>chunk</code>\u662F\u5982\u4F55\u521B\u9020\u51FA\u6765\u7684\uFF0C\u5176\u7ED3\u6784\u5982\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;loc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Lines of code that generated this chunk</span>\n  <span class="token string">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(webpack)\\test\\browsertest\\lib\\index.web.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Path to the module</span>\n  <span class="token string">&quot;moduleId&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// The ID of the module</span>\n  <span class="token string">&quot;moduleIdentifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(webpack)\\test\\browsertest\\lib\\index.web.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Path to the module</span>\n  <span class="token string">&quot;moduleName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./lib/index.web.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Relative path to the module</span>\n  <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span> <span class="token comment">// The name of the chunk</span>\n  <span class="token string">&quot;reasons&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// A list of the same reasons found in module objects</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="asset-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#asset-\u5BF9\u8C61" aria-hidden="true">#</a> asset \u5BF9\u8C61</h4><p><code>asset</code>\uFF0C\u8D44\u6E90\uFF0C\u6BCF\u4E00\u4E2A<code>asset</code>\u5BF9\u8C61\u4EE3\u8868\u7ECF\u8FC7\u7F16\u8BD1\u6DFB\u52A0\u5230<code>output</code>\u76EE\u5F55\u4E0B\u7684\u4E00\u4E2A\u6587\u4EF6\u3002\u8D44\u6E90\u5BF9\u8C61\u5305\u62EC\u7684\u4FE1\u606F\u6709\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;chunkNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// The chunks this asset contains</span>\n  <span class="token string">&quot;chunks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// The chunk IDs this asset contains</span>\n  <span class="token string">&quot;emitted&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Indicates whether or not the asset made it to the output directory</span>\n  <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10.web.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// The output filename</span>\n  <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1058</span> <span class="token comment">// The size of the file in bytes</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="module-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#module-\u5BF9\u8C61" aria-hidden="true">#</a> module \u5BF9\u8C61</h4><p>\u4F9D\u8D56\u56FE\u8868\u4E2D\u7684\u6A21\u5757\u90FD\u53EF\u4EE5\u8868\u793A\u6210\u4EE5\u4E0B\u7684\u5F62\u5F0F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;assets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// A list of asset objects</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;built&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Indicates that the module went through Loaders, Parsing, and Code Generation</span>\n  <span class="token string">&quot;cacheable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Whether or not this module is cacheable</span>\n  <span class="token string">&quot;chunks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// IDs of chunks that contain this module</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Number of errors when resolving or processing the module</span>\n  <span class="token string">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Whether or not compilation failed on this module</span>\n  <span class="token string">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// The ID of the module (analogous to module.id)</span>\n  <span class="token string">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(webpack)\\test\\browsertest\\lib\\index.web.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// A unique ID used internally</span>\n  <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./lib/index.web.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Path to the actual file</span>\n  <span class="token string">&quot;optional&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// All requests to this module are with try... catch blocks (irrelevant with ESM)</span>\n  <span class="token string">&quot;prefetched&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Indicates whether or not the module was prefetched</span>\n  <span class="token string">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Module specific compilation stats corresponding to the --profile flag (in milliseconds)</span>\n    <span class="token string">&quot;building&quot;</span><span class="token operator">:</span> <span class="token number">73</span><span class="token punctuation">,</span> <span class="token comment">// Loading and parsing</span>\n    <span class="token string">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token number">242</span><span class="token punctuation">,</span> <span class="token comment">// Building dependencies</span>\n    <span class="token string">&quot;factory&quot;</span><span class="token operator">:</span> <span class="token number">11</span> <span class="token comment">// Resolving dependencies</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;reasons&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// See the description below...</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">3593</span><span class="token punctuation">,</span> <span class="token comment">// Estimated size of the module in bytes</span>\n  <span class="token string">&quot;source&quot;</span><span class="token operator">:</span> &quot;<span class="token comment">// Should not break it...</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token operator">...</span>&quot;<span class="token punctuation">,</span> <span class="token comment">// The stringified raw source</span>\n  <span class="token string">&quot;warnings&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// Number of warnings when resolving or processing the module</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u7279\u522B\u6CE8\u610F<code>chunks</code>\u5C5E\u6027\uFF0C\u8FD9\u610F\u5473\u7740\u591A\u4E2A<code>chunk</code>\u53EF\u80FD\u5305\u542B\u7740\u540C\u4E00\u4E2A<code>module</code>\u3002</p><p>\u6BCF\u4E2A\u6A21\u5757\u90FD\u5305\u542B\u4E86\u4E00\u7EC4<code>resons</code>\u5BF9\u8C61\uFF0C\u6765\u63CF\u8FF0\u4E3A\u4EC0\u4E48\u8BE5\u6A21\u5757\u88AB\u5305\u542B\u8FDB\u4F9D\u8D56\u56FE\u91CC\u3002\u6BCF\u4E2A<code>reason</code>\u5BF9\u8C61\u7C7B\u4F3C\u4E8E<code>chunk</code>\u5BF9\u8C61\u91CC\u7684<code>origins</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;loc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;33:24-93&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Lines of code that caused the module to be included</span>\n  <span class="token string">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./lib/index.web.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Relative path to the module based on context</span>\n  <span class="token string">&quot;moduleId&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// The ID of the module</span>\n  <span class="token string">&quot;moduleIdentifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(webpack)\\test\\browsertest\\lib\\index.web.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Path to the module</span>\n  <span class="token string">&quot;moduleName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./lib/index.web.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// A more readable name for the module (used for &quot;pretty-printing&quot;)</span>\n  <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;require.context&quot;</span><span class="token punctuation">,</span> <span class="token comment">// The type of request used</span>\n  <span class="token string">&quot;userRequest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;../../cases&quot;</span> <span class="token comment">// Raw string used for the import or require request</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>reason</code>\u5BF9\u8C61\u91CC\u7684<code>type</code>\u548C<code>userRequest</code>\u5C5E\u6027\uFF0C\u5206\u522B\u63CF\u8FF0\u4E86\u8BE5\u6A21\u5757\u662F\u4EE5\u4EC0\u4E48\u65B9\u5F0F\u88AB\u8BF7\u6C42\u7684\uFF0C\u4EE5\u53CA\u8BF7\u6C42\u65F6\u7684\u8DEF\u5F84\uFF08\u4F1A\u88AB\u89E3\u6790\u4E3A\u5177\u4F53\u7684\u6587\u4EF6\u4F4D\u7F6E\uFF09\u3002</p><h2 id="\u5BB9\u6613\u5FFD\u89C6\u7684\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u6613\u5FFD\u89C6\u7684\u70B9" aria-hidden="true">#</a> \u5BB9\u6613\u5FFD\u89C6\u7684\u70B9</h2><h3 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> loader</h3><ul><li><code>loader</code>\u53EF\u4EE5\u4F7F\u4F60\u5728<code>import</code>\u6216&quot;\u52A0\u8F7D&quot;\u6A21\u5757\u65F6\u9884\u5904\u7406\u6587\u4EF6\uFF0C\u8FD9\u662F<code>webpack</code>\u7279\u6709\u7684\u529F\u80FD\uFF0C\u5176\u4ED6\u6253\u5305\u7A0B\u5E8F\u6216\u4EFB\u52A1\u6267\u884C\u5668\u53EF\u80FD\u5E76\u4E0D\u652F\u6301</li><li><code>loader</code>\u9664\u4E86\u5728<code>webpack.config.js</code>\u6307\u5B9A\u5916\uFF0C\u8FD8\u53EF\u4EE5\u5728\u6BCF\u4E2A<code>import</code>\u8BED\u53E5\u4E2D\u663E\u793A\u6307\u5B9A<code>loader</code></li><li><code>loader</code>\u4ECE\u53F3\u5230\u5DE6\u5730\u53D6\u503C(<code>evaluate</code>)/\u6267\u884C(<code>execute</code>)</li></ul><h4 id="\u5E38\u7528\u7684-loader" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7684-loader" aria-hidden="true">#</a> \u5E38\u7528\u7684 loader</h4><ul><li><code>file-loader</code><ul><li>\u5904\u7406<code>import MyImage from &#39;./my-image.png&#39;</code>\u91CC\u7684\u56FE\u7247\uFF0C\u5C06\u56FE\u7247\u6DFB\u52A0\u5230<code>output</code>\u76EE\u5F55\uFF0C\u5E76\u8FD4\u56DE\u5904\u7406\u540E\u7684<code>url</code></li><li>\u4EE5\u4E0E\u56FE\u7247\u7C7B\u4F3C\u7684\u65B9\u5F0F\uFF0C\u5904\u7406\u5B57\u4F53\u6587\u4EF6</li></ul></li><li><code>html-loader</code><ul><li>\u91C7\u7528\u4E0E<code>file-loader</code>\u7C7B\u4F3C\u7684\u65B9\u5F0F\u5904\u7406 HTML \u91CC<code>&lt;img src=&quot;./my-image.png&quot; /&gt;</code>\u91CC\u7684\u56FE\u7247</li></ul></li><li><code>css-loader</code><ul><li>\u91C7\u7528\u4E0E<code>file-loader</code>\u7C7B\u4F3C\u7684\u65B9\u5F0F\u5904\u7406 CSS \u91CC\u7684<code>background: url(&#39;./icon.png&#39;);</code>\u91CC\u7684\u56FE\u7247</li></ul></li></ul><h3 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> plugin</h3><h4 id="\u5E38\u7528\u7684-plugin" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7684-plugin" aria-hidden="true">#</a> \u5E38\u7528\u7684 plugin</h4><ul><li><code>clean-webpack-plugin</code>: \u6E05\u7406\u6587\u4EF6\u5939</li><li><code>html-webpack-plugin</code>: \u5C06<code>js</code>\u7B49\u8D44\u6E90\u63D2\u5165\u5230 HTML \u91CC</li></ul><h3 id="hmr-\u6A21\u5757\u70ED\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#hmr-\u6A21\u5757\u70ED\u66FF\u6362" aria-hidden="true">#</a> HMR \u6A21\u5757\u70ED\u66FF\u6362</h3><ul><li><code>webpack</code>\u7684<code>compiler</code>\u4F1A\u53D1\u51FA<code>update</code></li><li>\u9700\u8981\u6A21\u5757\u5B9E\u73B0 HMR \u63A5\u53E3</li><li>\u9700\u8981 HMR runtime</li></ul><h3 id="\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757" aria-hidden="true">#</a> \u6A21\u5757</h3><p><code>webpack</code>\u4F1A\u5BF9\u4EE3\u7801\u91CC\u7684<code>import</code>\u548C<code>export</code>\u8FDB\u884C<code>transpile</code>\uFF08\u8F6C\u8BD1\uFF09\uFF0C\u4F46\u4E0D\u4F1A\u66F4\u6539\u4EE3\u7801\u4E2D\u9664<code>import</code>\u548C<code>export</code>\u4E4B\u5916\u7684\u90E8\u5206\u3002</p><h3 id="chunk" tabindex="-1"><a class="header-anchor" href="#chunk" aria-hidden="true">#</a> chunk</h3><h4 id="\u4EA7\u751F-chunk-\u7684\u51E0\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4EA7\u751F-chunk-\u7684\u51E0\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> \u4EA7\u751F chunk \u7684\u51E0\u79CD\u65B9\u5F0F</h4><ul><li>\u901A\u8FC7<code>import()</code>\u5F02\u6B65\u52A0\u8F7D\u7684<code>chunk</code></li><li>\u901A\u8FC7\u63D2\u4EF6<code>SplitChunksPlugin</code>\u5206\u79BB\u51FA\u7684<code>chunk</code></li></ul><h3 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a> Tree Shaking</h3><p>\u60F3\u8981\u4F7F\u7528 Tree Shaking \u529F\u80FD\uFF0C\u5FC5\u987B\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9\uFF1A</p><ul><li>\u5FC5\u987B\u4F7F\u7528 ES2015 \u6A21\u5757\u8BED\u6CD5\uFF08\u5373<code>import</code>\u548C<code>export</code>\uFF09</li><li>\u786E\u4FDD\u6CA1\u6709<code>compiler</code>\u5C06 ES2015 \u6A21\u5757\u8BED\u6CD5\u8F6C\u6362\u4E3A CommonJS \u6A21\u5757\uFF08\u8FD9\u4E5F\u662F\u6D41\u884C\u7684 Babel <code>preset</code>\u4E2D<code>@babel/preset-env</code>\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF09\u3002</li><li>\u5728\u9879\u76EE<code>package.json</code>\u6587\u4EF6\u4E2D\uFF0C\u6DFB\u52A0\u4E00\u4E2A<code>&quot;sideEffects&quot;</code>\u5C5E\u6027\u3002</li><li>\u901A\u8FC7\u5C06<code>mode</code>\u9009\u9879\u8BBE\u7F6E\u4E3A<code>production</code>\uFF0C\u542F\u7528<code>minification</code>(\u4EE3\u7801\u538B\u7F29)\u548C<code>tree shaking</code>\u3002</li></ul><h2 id="\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316" aria-hidden="true">#</a> \u4F18\u5316</h2><h3 id="\u914D\u7F6E\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4F18\u5316" aria-hidden="true">#</a> \u914D\u7F6E\u4F18\u5316</h3><h4 id="\u5168\u5C40\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u4F18\u5316" aria-hidden="true">#</a> \u5168\u5C40\u4F18\u5316</h4>', 47);
const _hoisted_82 = /* @__PURE__ */ createStaticVNode("<li><p>\u51CF\u5C11\u76EE\u5F55\u68C0\u7D22\u8303\u56F4</p><ul><li>\u914D\u7F6E loader \u7684\u65F6\u5019\uFF0C\u6DFB\u52A0<code>include: [resolve(&#39;src&#39;)]</code>or<code>exclude: /node_modules/</code></li></ul></li><li><p>\u51CF\u5C11\u68C0\u7D22\u8DEF\u5F84</p><ul><li><code>resolve.alias</code>\u914D\u7F6E\u9879\uFF1A\u521B\u5EFA\u5E38\u7528\u6A21\u5757/\u76EE\u5F55\u7684\u522B\u540D</li></ul></li><li><p><code>externals</code>\u914D\u7F6E\u9879\uFF0C\u63D0\u53D6\u5E38\u7528\u5E93</p><ul><li>\u5C06\u4E0D\u5E38\u66F4\u65B0\u7684\u6846\u67B6\u63D0\u53D6\u51FA\u6765\uFF0C\u5982<code>Vue</code>\u3001<code>JQuery</code>\u7B49\uFF0C\u901A\u8FC7 script \u76F4\u63A5\u5F15\u5165</li><li>\u9632\u6B62\u5C06\u67D0\u4E9B import \u7684\u5305(package)\u6253\u5305\u5230 bundle \u4E2D\uFF0C\u800C\u662F\u5728\u8FD0\u884C\u65F6(runtime)\u518D\u53BB\u4ECE\u5916\u90E8\u83B7\u53D6\u8FD9\u4E9B\u6269\u5C55\u4F9D\u8D56</li></ul></li><li><p><code>webpack.optimize.CommonsChunkPlugin</code>\u63D2\u4EF6</p><ul><li>\u5206\u79BB\u4E1A\u52A1\u4EE3\u7801\uFF08app\uFF09\u548C\u7B2C\u4E09\u65B9\u5E93\uFF08vendor\uFF09 <ul><li>\u5206\u79BB webapp runtime \u4EE3\u7801\uFF08manifest\uFF09</li></ul></li></ul></li><li><p><code>webpack.optimize.DedupePlugin</code>\u63D2\u4EF6</p><ul><li>\u6587\u4EF6\u53BB\u91CD</li></ul></li>", 5);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "DllPlugin"),
  /* @__PURE__ */ createTextVNode("\u548C"),
  /* @__PURE__ */ createBaseVNode("code", null, "DllReferencePlugin"),
  /* @__PURE__ */ createTextVNode("\u9884\u7F16\u8BD1\u5E93\u6587\u4EF6")
], -1);
const _hoisted_88 = /* @__PURE__ */ createTextVNode("\u5C06\u7B2C\u4E09\u65B9\u5E93\u6587\u4EF6\u5355\u72EC\u7F16\u8BD1\u6253\u5305\u4E00\u6B21\uFF0C\u4EE5\u540E\u7684\u6784\u5EFA\u90FD\u4E0D\u9700\u8981\u518D\u7F16\u8BD1\u6253\u5305\u7B2C\u4E09\u65B9\u5E93 ");
const _hoisted_89 = {
  href: "http://www.jishux.com/plus/view-681807-1.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_90 = /* @__PURE__ */ createTextVNode("\u4F7F\u7528\u65B9\u6CD5");
const _hoisted_91 = /* @__PURE__ */ createStaticVNode('<li><p><code>tree shaking</code></p><ul><li>webpack \u4E2D\u5B9E\u73B0 tree shaking \u662F\u57FA\u4E8E webpack \u5185\u90E8\u652F\u6301\u7684 es2015 \u7684\u6A21\u5757\u673A\u5236\uFF0C\u5728\u5927\u90E8\u5206\u65F6\u5019\u6211\u4EEC\u4F7F\u7528 babel \u6765\u7F16\u8BD1 js \u4EE3\u7801\uFF0C\u800C babel \u4F1A\u901A\u8FC7\u81EA\u5DF1\u7684\u6A21\u5757\u52A0\u8F7D\u673A\u5236\u5904\u7406\u4E00\u904D\uFF0C\u8FD9\u5BFC\u81F4 webpack \u4E2D\u7684 tree shaking \u5904\u7406\u5C06\u4F1A\u5931\u6548\u3002\u56E0\u6B64\u5728 babel \u7684\u914D\u7F6E\u4E2D\u9700\u8981\u5173\u95ED\u5BF9\u6A21\u5757\u52A0\u8F7D\u7684\u5904\u7406</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// .babelrc</span>\n<span class="token punctuation">{</span>\n  <span class="token string">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">&quot;env&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        <span class="token string">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;stage-0&quot;</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li><p>\u5C40\u90E8\u5F15\u5165</p><ul><li>lodash</li></ul></li><li><p>\u540E\u7F16\u8BD1</p></li><li><p>\u4EE3\u7801\u62C6\u5206/\u6309\u9700\u52A0\u8F7D</p><ul><li><code>webpack.optimize.LimitChunkCountPlugin</code>\u9650\u5236 chunk \u7684\u6700\u5927\u6570\u91CF\uFF0C\u907F\u514D\u592A\u591A\u7EC6\u5C0F\u7684\u6A21\u5757</li><li><code>webpack.optimize.MinChunkSizePlugin</code>\u9650\u5236 chunk \u7684\u6700\u5C0F\u4F53\u79EF</li></ul></li>', 4);
const _hoisted_95 = /* @__PURE__ */ createStaticVNode('<h5 id="loader-\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#loader-\u4F18\u5316" aria-hidden="true">#</a> loader \u4F18\u5316</h5><p>\u5BF9\u6700\u5C11\u6570\u91CF\u7684\u5FC5\u8981\u6A21\u5757\u4F7F\u7528<code>loader</code>\uFF0C\u4F7F\u7528<code>include</code>\u5B57\u6BB5\u4EC5\u5C06<code>loader</code>\u5E94\u7528\u5728\u5B9E\u9645\u9700\u8981\u5C06\u5176\u8F6C\u6362\u7684\u6A21\u5757\u6240\u5904\u8DEF\u5F84\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n        <span class="token comment">// \u6DFB\u52A0\u8FD9\u4E00\u884C\uFF0C\u4EC5\u9488\u5BF9 src \u76EE\u5F55\u4E0B\u7684 js \u6587\u4EF6\u8FDB\u884C babel \u8F6C\u8BD1</span>\n        include<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        loader<span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h5 id="\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790" aria-hidden="true">#</a> \u89E3\u6790</h5><p>\u4EE5\u4E0B\u6B65\u9AA4\u53EF\u4EE5\u63D0\u9AD8\u89E3\u6790\u901F\u5EA6:</p><ul><li>\u51CF\u5C11<code>resolve.modules</code>, <code>resolve.extensions</code>, <code>resolve.mainFiles</code>, <code>resolve.descriptionFiles</code>\u4E2D<code>items</code>\u6570\u91CF\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u4F1A\u589E\u52A0\u6587\u4EF6\u7CFB\u7EDF\u8C03\u7528\u7684\u6B21\u6570\u3002</li><li>\u5982\u679C\u4F60\u4E0D\u4F7F\u7528<code>symlinks</code>\uFF08\u4F8B\u5982<code>npm link</code>\u6216\u8005<code>yarn link</code>\uFF09\uFF0C\u53EF\u4EE5\u8BBE\u7F6E<code>resolve.symlinks: false</code>\u3002</li><li>\u5982\u679C\u4F60\u4F7F\u7528\u81EA\u5B9A\u4E49<code>resolve plugin</code>\u89C4\u5219\uFF0C\u5E76\u4E14\u6CA1\u6709\u6307\u5B9A<code>context</code>\u4E0A\u4E0B\u6587\uFF0C\u53EF\u4EE5\u8BBE\u7F6E<code>resolve.cacheWithContext: false</code>\u3002</li></ul><h4 id="dev-\u5F00\u53D1\u73AF\u5883\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#dev-\u5F00\u53D1\u73AF\u5883\u4F18\u5316" aria-hidden="true">#</a> dev \u5F00\u53D1\u73AF\u5883\u4F18\u5316</h4><ul><li><code>devtool</code>\u914D\u7F6E\u9879\uFF1A\u63A7\u5236\u662F\u5426\u4EE5\u53CA\u600E\u6837\u751F\u6210 source map <ul><li>eval \u7684\u6027\u80FD\u6700\u9AD8\uFF0C\u4F46\u662F\u4E0D\u80FD\u751F\u6210\u7684 sourceMap \u6587\u4EF6\u89E3\u6790\u51FA\u6765\u7684\u4EE3\u7801\uFF0C\u548C\u6E90\u4EE3\u7801\u5DEE\u5F02\u8F83\u5927</li><li>source-map \u7684\u6027\u80FD\u8F83\u5DEE\uFF0C\u4F46\u662F\u53EF\u4EE5\u751F\u6210\u539F\u59CB\u7248\u672C\u7684\u4EE3\u7801</li><li>\u5F00\u53D1\u73AF\u5883\u7528<code>cheap-module-eval-source-map</code>\u6700\u4F73</li></ul></li><li><code>webpack.HotModuleReplacementPlugin</code>\u63D2\u4EF6\uFF1A\u6A21\u5757\u70ED\u66FF\u6362</li><li><code>webpack.NoEmitOnErrorsPlugin</code>\u63D2\u4EF6\uFF1A\u7F16\u8BD1\u51FA\u73B0\u9519\u8BEF\u65F6\uFF0C\u4F7F\u7528\u8BE5\u63D2\u4EF6\u6765\u8DF3\u8FC7\u8F93\u51FA\u9636\u6BB5\uFF0C\u8FD9\u6837\u53EF\u4EE5\u786E\u4FDD\u8F93\u51FA\u8D44\u6E90\u4E0D\u4F1A\u5305\u542B\u9519\u8BEF</li><li><code>friendly-errors-webpack-plugin</code></li><li>Build Cache <ul><li><code>babel-loader</code>\u5F00\u542F<code>cacheDirectory</code>\u9009\u9879</li></ul></li></ul><p>\uFF08\u9488\u5BF9<code>v4.29.6</code>\uFF09\u907F\u514D\u4F7F\u7528\u4EE5\u4E0B\u5DE5\u5177\uFF1A</p><ul><li><code>TerserPlugin</code></li><li><code>ExtractTextPlugin</code></li><li><code>[hash]/[chunkhash]</code></li><li><code>AggressiveSplittingPlugin</code></li><li><code>AggressiveMergingPlugin</code></li><li><code>ModuleConcatenationPlugin</code></li></ul><h4 id="production-\u751F\u4EA7\u73AF\u5883\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#production-\u751F\u4EA7\u73AF\u5883\u4F18\u5316" aria-hidden="true">#</a> production \u751F\u4EA7\u73AF\u5883\u4F18\u5316</h4><ul><li><code>DefinePlugin</code>\u63D2\u4EF6 <ul><li>\u521B\u5EFA\u7F16\u8BD1\u65F6\u53EF\u4EE5\u914D\u7F6E\u7684\u5168\u5C40\u5E38\u91CF</li><li>\u914D\u5408<code>UglifyJSPlugin</code>\u63D2\u4EF6\uFF0C\u53EF\u5728\u751F\u4EA7\u73AF\u5883\u53BB\u9664\u90E8\u95E8\u7684\u5197\u4F59\u4EE3\u7801</li></ul></li><li><code>UglifyJSPlugin</code>\u63D2\u4EF6 <ul><li>\u538B\u7F29\u3001\u53BB\u9664\u5197\u4F59</li></ul></li><li><code>HashedModuleIdsPlugin</code>\u63D2\u4EF6 <ul><li>\u6839\u636E\u6A21\u5757\u7684\u76F8\u5BF9\u8DEF\u5F84\u751F\u6210\u4E00\u4E2A\u56DB\u4F4D\u6570\u7684 hash \u4F5C\u4E3A\u6A21\u5757 id\uFF0C\u51CF\u5C11\u56E0\u4FEE\u6539\u4F9D\u8D56\u5F15\u5165\u7684\u987A\u5E8F\u5BFC\u81F4\u7684\u4EA7\u51FA\u6587\u4EF6\u7F13\u5B58\u5931\u6548</li></ul></li><li><code>webpack.optimize.UglifyJsPlugin</code>\u63D2\u4EF6</li><li><code>extract-text-webpack-plugin</code>\u63D2\u4EF6\uFF1A\u63D0\u53D6\u6837\u5F0F\u5230 CSS \u6587\u4EF6</li><li><code>optimize-css-assets-webpack-plugin</code>\u63D2\u4EF6\uFF1A\u5BF9\u63D0\u53D6\u51FA\u6765\u7684 CSS \u8FDB\u884C\u538B\u7F29\u3001\u53BB\u91CD</li><li><code>script-ext-html-webpack-plugin</code>\u63D2\u4EF6\uFF1A\u7ED9 js \u6DFB\u52A0\u5C5E\u6027 crossorigin: &#39;anonymous&#39;</li></ul><h3 id="\u4EE3\u7801\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u4F18\u5316" aria-hidden="true">#</a> \u4EE3\u7801\u4F18\u5316</h3><h4 id="\u4F7F\u7528-preload\u3001prefetch\u3001dns-fetch" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-preload\u3001prefetch\u3001dns-fetch" aria-hidden="true">#</a> \u4F7F\u7528 preload\u3001prefetch\u3001dns-fetch</h4>', 14);
const _hoisted_109 = /* @__PURE__ */ createBaseVNode("code", null, "import()", -1);
const _hoisted_110 = /* @__PURE__ */ createTextVNode("\u5F02\u6B65\u52A0\u8F7D\u7EC4\u4EF6\u65F6\uFF0C\u53EF\u4EE5\u6307\u5B9A\u7EC4\u4EF6\u662F\u5426\u9700\u8981");
const _hoisted_111 = /* @__PURE__ */ createBaseVNode("code", null, "preload", -1);
const _hoisted_112 = /* @__PURE__ */ createTextVNode("/");
const _hoisted_113 = /* @__PURE__ */ createBaseVNode("code", null, "prefetch", -1);
const _hoisted_114 = /* @__PURE__ */ createTextVNode("\uFF0C\u8BE6\u60C5\u53EF\u53C2\u8003\uFF1A");
const _hoisted_115 = {
  href: "https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_116 = /* @__PURE__ */ createTextVNode("Prefetching/Preloading modules");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4F18\u79C0\u6587\u7AE0" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u63D2\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5206\u6790\u4F9D\u8D56\u5173\u7CFB" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u5F85\u89E3\u51B3\u7591\u95EE" }, {
                    default: withCtx(() => [
                      _hoisted_6
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6982\u5FF5\u540D\u8BCD" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#module\u3001chunk\u3001bundle\u3001asset" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#json-\u6587\u4EF6\u7ED3\u6784" }, {
                    default: withCtx(() => [
                      _hoisted_9
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#chunk-\u5BF9\u8C61" }, {
                    default: withCtx(() => [
                      _hoisted_10
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#asset-\u5BF9\u8C61" }, {
                    default: withCtx(() => [
                      _hoisted_11
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#module-\u5BF9\u8C61" }, {
                    default: withCtx(() => [
                      _hoisted_12
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5BB9\u6613\u5FFD\u89C6\u7684\u70B9" }, {
            default: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#loader" }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u5E38\u7528\u7684-loader" }, {
                    default: withCtx(() => [
                      _hoisted_15
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#plugin" }, {
                default: withCtx(() => [
                  _hoisted_16
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u5E38\u7528\u7684-plugin" }, {
                    default: withCtx(() => [
                      _hoisted_17
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#hmr-\u6A21\u5757\u70ED\u66FF\u6362" }, {
                default: withCtx(() => [
                  _hoisted_18
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6A21\u5757" }, {
                default: withCtx(() => [
                  _hoisted_19
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#chunk" }, {
                default: withCtx(() => [
                  _hoisted_20
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u4EA7\u751F-chunk-\u7684\u51E0\u79CD\u65B9\u5F0F" }, {
                    default: withCtx(() => [
                      _hoisted_21
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#tree-shaking" }, {
                default: withCtx(() => [
                  _hoisted_22
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4F18\u5316" }, {
            default: withCtx(() => [
              _hoisted_23
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u914D\u7F6E\u4F18\u5316" }, {
                default: withCtx(() => [
                  _hoisted_24
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u5168\u5C40\u4F18\u5316" }, {
                    default: withCtx(() => [
                      _hoisted_25
                    ]),
                    _: 1
                  }),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createVNode(_component_RouterLink, { to: "#loader-\u4F18\u5316" }, {
                        default: withCtx(() => [
                          _hoisted_26
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("li", null, [
                      createVNode(_component_RouterLink, { to: "#\u89E3\u6790" }, {
                        default: withCtx(() => [
                          _hoisted_27
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#dev-\u5F00\u53D1\u73AF\u5883\u4F18\u5316" }, {
                    default: withCtx(() => [
                      _hoisted_28
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#production-\u751F\u4EA7\u73AF\u5883\u4F18\u5316" }, {
                    default: withCtx(() => [
                      _hoisted_29
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4EE3\u7801\u4F18\u5316" }, {
                default: withCtx(() => [
                  _hoisted_30
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u4F7F\u7528-preload\u3001prefetch\u3001dns-fetch" }, {
                    default: withCtx(() => [
                      _hoisted_31
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _hoisted_32,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_33, [
          _hoisted_34,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_35,
    createBaseVNode("ul", null, [
      _hoisted_82,
      createBaseVNode("li", null, [
        _hoisted_87,
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            _hoisted_88,
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createBaseVNode("a", _hoisted_89, [
                  _hoisted_90,
                  createVNode(_component_OutboundLink)
                ])
              ])
            ])
          ])
        ])
      ]),
      _hoisted_91
    ]),
    _hoisted_95,
    createBaseVNode("p", null, [
      _hoisted_109,
      _hoisted_110,
      _hoisted_111,
      _hoisted_112,
      _hoisted_113,
      _hoisted_114,
      createBaseVNode("a", _hoisted_115, [
        _hoisted_116,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
