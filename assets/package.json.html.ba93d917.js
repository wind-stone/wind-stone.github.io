import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "package-json",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#package-json",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" package.json")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("version");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u8BED\u4E49\u5316\u7248\u672C");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u7248\u672C\u683C\u5F0F");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5148\u884C\u7248\u672C");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("npm \u5305\u53D1\u5E03\u65F6\u4FEE\u6539\u7248\u672C\u53F7");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("scripts");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("scripts \u91CC\u7684\u53C2\u6570\u4F20\u9012");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("bin");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u5168\u5C40\u5B89\u88C5\u7684 bin");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u5C40\u90E8\u5B89\u88C5\u7684 bin");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("module");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("dependencies");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u4F7F\u7528\u672C\u5730\u8DEF\u5F84");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("::: \u63D0\u793A \u5173\u4E8E");
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("code", null, "package.json", -1);
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u91CC\u6240\u6709\u5B57\u6BB5\u7684\u4F7F\u7528\uFF0C\u53EF\u53C2\u8003\u5B98\u65B9\u6587\u6863: ");
const _hoisted_19 = {
  href: "https://docs.npmjs.com/cli/v7/configuring-npm/package-json",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createTextVNode("NPM - package.json");
const _hoisted_21 = /* @__PURE__ */ createTextVNode(" :::");
const _hoisted_22 = /* @__PURE__ */ createStaticVNode('<p><code>package.json</code>\u6587\u4EF6\u662F NPM \u5305\u7684\u63CF\u8FF0\u6587\u4EF6\uFF0CNPM \u5305\u7684\u6240\u6709\u884C\u4E3A\u4E0E\u5305\u63CF\u8FF0\u6587\u4EF6\u7684\u5B57\u6BB5\u606F\u606F\u76F8\u5173\u3002</p><p>\u4E0E CommonJS \u5305\u89C4\u8303\u76F8\u6BD4\uFF0CNPM \u7684\u5B9E\u73B0\u91CC\u7684\u5305\u63CF\u8FF0\u6587\u4EF6\u591A\u4E86<code>author</code>\u3001<code>bin</code>\u3001<code>main</code>\u3001<code>devDependencies</code>\u56DB\u4E2A\u5B57\u6BB5\u3002</p><h2 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h2><p>\u5305\u7684<code>version</code>\u9700\u8981\u9075\u5FAA<code>Semantic Versioning</code>\uFF08\u8BED\u4E49\u5316\u7248\u672C\uFF09\u3002</p><h3 id="\u8BED\u4E49\u5316\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u8BED\u4E49\u5316\u7248\u672C" aria-hidden="true">#</a> \u8BED\u4E49\u5316\u7248\u672C</h3><p>Reference:</p>', 6);
const _hoisted_28 = {
  href: "https://semver.org/lang/zh-CN/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = /* @__PURE__ */ createTextVNode("\u5B98\u65B9\u6587\u6863 - \u8BED\u4E49\u5316\u7248\u672C 2.0.0");
const _hoisted_30 = {
  href: "https://juejin.im/post/5ad413ba6fb9a028b5485866",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_31 = /* @__PURE__ */ createTextVNode("Semver(\u8BED\u4E49\u5316\u7248\u672C\u53F7)\u626B\u76F2");
const _hoisted_32 = /* @__PURE__ */ createStaticVNode('<h4 id="\u7248\u672C\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u683C\u5F0F" aria-hidden="true">#</a> \u7248\u672C\u683C\u5F0F</h4><p>\u7248\u672C\u683C\u5F0F\uFF1A\u4E3B\u7248\u672C\u53F7.\u6B21\u7248\u672C\u53F7.\u4FEE\u8BA2\u53F7\uFF0C\u7248\u672C\u53F7\u9012\u589E\u89C4\u5219\u5982\u4E0B\uFF1A</p><ul><li>\u4E3B\u7248\u672C\u53F7\uFF1A\u5F53\u4F60\u505A\u4E86\u4E0D\u517C\u5BB9\u7684 API \u4FEE\u6539\uFF0C</li><li>\u6B21\u7248\u672C\u53F7\uFF1A\u5F53\u4F60\u505A\u4E86\u5411\u4E0B\u517C\u5BB9\u7684\u529F\u80FD\u6027\u65B0\u589E\uFF0C</li><li>\u4FEE\u8BA2\u53F7\uFF1A\u5F53\u4F60\u505A\u4E86\u5411\u4E0B\u517C\u5BB9\u7684\u95EE\u9898\u4FEE\u6B63\u3002</li></ul><p>\u5148\u884C\u7248\u672C\u53F7\u53CA\u7248\u672C\u7F16\u8BD1\u5143\u6570\u636E\u53EF\u4EE5\u52A0\u5230\u201C\u4E3B\u7248\u672C\u53F7.\u6B21\u7248\u672C\u53F7.\u4FEE\u8BA2\u53F7\u201D\u7684\u540E\u9762\uFF0C\u4F5C\u4E3A\u5EF6\u4F38\u3002</p><h4 id="\u5148\u884C\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u5148\u884C\u7248\u672C" aria-hidden="true">#</a> \u5148\u884C\u7248\u672C</h4><p>\u5F53\u8981\u53D1\u5E03\u5927\u7248\u672C\u6216\u8005\u6838\u5FC3\u7684 Feature \u65F6\uFF0C\u4F46\u662F\u53C8\u4E0D\u80FD\u4FDD\u8BC1\u8FD9\u4E2A\u7248\u672C\u7684\u529F\u80FD 100% \u6B63\u5E38\u3002\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u901A\u8FC7\u53D1\u5E03\u5148\u884C\u7248\u672C\u3002</p><p>\u6BD4\u8F83\u5E38\u89C1\u7684\u5148\u884C\u7248\u672C\u5305\u62EC\uFF1A\u5185\u6D4B\u7248\u3001\u7070\u5EA6\u7248\u672C\u4E86\u548C RC \u7248\u672C\u3002Semver \u89C4\u8303\u4E2D\u4F7F\u7528<code>alpha</code>\u3001<code>beta</code>\u3001<code>rc</code>\uFF08\u4EE5\u524D\u53EB\u505A<code>gama</code>\uFF09\u6765\u4FEE\u9970\u5373\u5C06\u8981\u53D1\u5E03\u7684\u7248\u672C\u3002\u5B83\u4EEC\u7684\u542B\u4E49\u662F\uFF1A</p><ul><li><code>alpha</code>: \u5185\u90E8\u7248\u672C</li><li><code>beta</code>: \u516C\u6D4B\u7248\u672C</li><li><code>rc</code>: \u5373<code>Release candiate</code>\uFF0C\u6B63\u5F0F\u7248\u672C\u7684\u5019\u9009\u7248\u672C</li></ul><p>\u6BD4\u5982\uFF1A<code>1.0.0-alpha.0</code>, <code>1.0.0-alpha.1</code>, <code>1.0.0-beta.0</code>, <code>1.0.0-rc.0</code>, <code>1.0.p-rc.1</code>\u7B49\u7248\u672C\u3002 <code>alpha</code>, <code>beta</code>, <code>rc</code>\u540E\u9700\u8981\u5E26\u4E0A\u6B21\u6570\u4FE1\u606F\u3002</p><h3 id="npm-\u5305\u53D1\u5E03\u65F6\u4FEE\u6539\u7248\u672C\u53F7" tabindex="-1"><a class="header-anchor" href="#npm-\u5305\u53D1\u5E03\u65F6\u4FEE\u6539\u7248\u672C\u53F7" aria-hidden="true">#</a> npm \u5305\u53D1\u5E03\u65F6\u4FEE\u6539\u7248\u672C\u53F7</h3><p>\u901A\u5E38\u6211\u4EEC\u53D1\u5E03\u4E00\u4E2A\u5305\u5230 npm \u4ED3\u5E93\u65F6\uFF0C\u6211\u4EEC\u7684\u505A\u6CD5\u662F\u5148\u4FEE\u6539<code>package.json</code>\u4E3A\u67D0\u4E2A\u7248\u672C\uFF0C\u7136\u540E\u6267\u884C<code>npm publish</code>\u547D\u4EE4\u3002 \u624B\u52A8\u4FEE\u6539\u7248\u672C\u53F7\u7684\u505A\u6CD5\u5EFA\u7ACB\u5728\u4F60\u5BF9 Semver \u89C4\u8303\u7279\u522B\u719F\u6089\u7684\u57FA\u7840\u4E4B\u4E0A\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u9020\u6210\u7248\u672C\u6DF7\u4E71\u3002 npm \u8003\u8651\u5230\u4E86\u8FD9\u70B9\uFF0C\u5B83\u63D0\u4F9B\u4E86\u76F8\u5173\u7684\u547D\u4EE4\u6765\u8BA9\u6211\u4EEC\u66F4\u597D\u7684\u9075\u4ECE Semver \u89C4\u8303\uFF1A</p><ul><li>\u5347\u7EA7\u8865\u4E01\u7248\u672C\u53F7\uFF1A<code>npm version patch</code></li><li>\u5347\u7EA7\u5C0F\u7248\u672C\u53F7\uFF1A<code>npm version minor</code></li><li>\u5347\u7EA7\u5927\u7248\u672C\u53F7\uFF1A<code>npm version major</code></li></ul><p>\u5F53\u6267\u884C<code>npm publish</code>\u65F6\uFF0C\u4F1A\u9996\u5148\u5C06\u5F53\u524D\u7248\u672C\u53D1\u5E03\u5230<code>npm registry</code>\uFF0C\u7136\u540E\u66F4\u65B0<code>dist-tags.latest</code>\u7684\u503C\u4E3A\u65B0\u7248\u672C\u3002 \u5F53\u6267\u884C<code>npm publish --tag=next</code>\u65F6\uFF0C\u4F1A\u9996\u5148\u5C06\u5F53\u524D\u7248\u672C\u53D1\u5E03\u5230<code>npm registry</code>\uFF0C\u5E76\u4E14\u66F4\u65B0<code>dist-tags.next</code>\u7684\u503C\u4E3A\u65B0\u7248\u672C\u3002 \u8FD9\u91CC\u7684<code>next</code>\u53EF\u4EE5\u662F\u4EFB\u610F\u6709\u610F\u4E49\u7684\u547D\u540D\uFF08\u6BD4\u5982\uFF1Av1.x\u3001v2.x \u7B49\u7B49\uFF09</p><h2 id="scripts" tabindex="-1"><a class="header-anchor" href="#scripts" aria-hidden="true">#</a> scripts</h2><h3 id="scripts-\u91CC\u7684\u53C2\u6570\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#scripts-\u91CC\u7684\u53C2\u6570\u4F20\u9012" aria-hidden="true">#</a> scripts \u91CC\u7684\u53C2\u6570\u4F20\u9012</h3><p>\u5047\u8BBE<code>package.json</code>\u6587\u4EF6\u91CC\u5982\u4E0B\u914D\u7F6E\u4E86<code>scripts</code>\u5C5E\u6027\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;script-tests&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Foo Bar&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;pm2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./server/pm2.js&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5F53\u5728\u63A7\u5236\u53F0\u6267\u884C<code>npm run pm2 hello world</code>\u540E\uFF0C\u5B9E\u9645\u4E0A\u662F\u6267\u884C\u4E86<code>node ./server/pm2.js &quot;hello&quot; &quot;world&quot;</code>\u547D\u4EE4\uFF0C\u5728<code>./server/pm2.js</code>\u6587\u4EF6\u91CC\u7684\u8F93\u51FA\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ./server/pm2.js</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 0 /Users/wind-stone/.nvm/versions/node/v11.10.0/bin/node</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 1 /Users/wind-stone/kuaishou/ug-node-h5/server/pm2.js</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 2 hello</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 3 world</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="bin" tabindex="-1"><a class="header-anchor" href="#bin" aria-hidden="true">#</a> bin</h2><p>\u82E5\u662F\u5728<code>package.json</code>\u6587\u4EF6\u4E0B\u5B9A\u4E49\u4E86\u5982\u4E0B\u793A\u4F8B\u91CC\u7684<code>bin</code>\u5C5E\u6027\uFF0C\u8BE5\u5305\u5B89\u88C5\u65F6\u5C06\u5EFA\u7ACB\u7B26\u53F7\u94FE\u63A5\uFF0C\u5168\u5C40\u5B89\u88C5\u65F6\u5C06\u94FE\u63A5\u5230<code>prefix/bin</code>\uFF0C\u5C40\u90E8\u5B89\u88C5\u65F6\u5C06\u94FE\u63A5\u5230<code>./node_modules/.bin/</code>\u3002</p><p><code>package.json</code>\u6587\u4EF6\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm-bin&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;bin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;npm-bin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./bin/npm-bin.js&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// \u82E5\u53EA\u6709\u4E00\u4E2A\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528\u5305\u540D\u4F5C\u4E3A\u547D\u4EE4\u540D\u79F0</span>\n  <span class="token comment">// &quot;bin&quot;: &quot;./bin/npm-bin.js&quot;,</span>\n  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>./bin/npm-bin.js</code>\u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token hashbang comment">#!/usr/bin/env node</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8F93\u5165\u53C2\u6570\u4E3A\uFF1A&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">process.argv[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>', 25);
const _hoisted_57 = { class: "custom-container tip" };
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "\u63D0\u793A", -1);
const _hoisted_59 = /* @__PURE__ */ createTextVNode("\u5728");
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("code", null, "npm-bin.js", -1);
const _hoisted_61 = /* @__PURE__ */ createTextVNode("\u6587\u4EF6\u7684\u6700\u9876\u90E8\uFF0C\u4E00\u5B9A\u8981\u6DFB\u52A0");
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("code", null, "#!/usr/bin/env node", -1);
const _hoisted_63 = /* @__PURE__ */ createTextVNode("\uFF0C\u8FD9\u4E00\u884C\u544A\u8BC9\u7CFB\u7EDF\uFF0C\u6267\u884C\u662F\u9700\u8981\u54EA\u4E2A\u89E3\u91CA\u5668\u3002 \u8BE6\u60C5\u8BF7\u89C1\uFF1A");
const _hoisted_64 = {
  href: "https://stackoverflow.com/questions/33509816/what-exactly-does-usr-bin-env-node-do-at-the-beginning-of-node-files",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_65 = /* @__PURE__ */ createTextVNode("Stack Overflow - What exactly does \u201C/usr/bin/env node\u201D do at the beginning of node files?");
const _hoisted_66 = /* @__PURE__ */ createStaticVNode('<p>\u5728\u8BE5\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u6267\u884C<code>npm i -g</code>\uFF0C\u5168\u5C40\u5B89\u88C5\u8BE5\u5305\u3002\u7EE7\u7EED\u6267\u884C<code>npm-bin</code>\u547D\u4EE4\uFF0C\u5219<code>npm-bin.js</code>\u5C31\u4F1A\u6267\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u279C  npm-bin <span class="token function">npm</span> i -g\n/Users/wind-stone/.nvm/versions/node/v11.10.0/bin/npm-bin -<span class="token operator">&gt;</span> /Users/wind-stone/.nvm/versions/node/v11.10.0/lib/node_modules/npm-bin/bin/npm-bin.js\n+ npm-bin@1.0.0\nadded <span class="token number">1</span> package <span class="token keyword">in</span> <span class="token number">0</span>.087s\n\n\u279C  npm-bin npm-bin\n\u8F93\u5165\u53C2\u6570\u4E3A\uFF1A\nprocess.argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>: /Users/wind-stone/.nvm/versions/node/v11.10.0/bin/node\nprocess.argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: /Users/wind-stone/.nvm/versions/node/v11.10.0/bin/npm-bin\nprocess.argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>: undefined\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u5168\u5C40\u5B89\u88C5\u7684-bin" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5B89\u88C5\u7684-bin" aria-hidden="true">#</a> \u5168\u5C40\u5B89\u88C5\u7684 bin</h3><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u6267\u884C<code>npm i -g</code>\u4E4B\u540E\uFF0C\u5EFA\u7ACB\u8D77\u4E86\u4ECE<code>/Users/wind-stone/.nvm/versions/node/v11.10.0/bin/npm-bin</code>\u5230<code>/Users/wind-stone/.nvm/versions/node/v11.10.0/lib/node_modules/npm-bin/bin/npm-bin.js</code>\u7684\u7B26\u53F7\u94FE\u63A5\u3002</p><p>PS: \u7CFB\u7EDF\u5B89\u88C5\u4E86<code>nvm</code>\u3002</p><h3 id="\u5C40\u90E8\u5B89\u88C5\u7684-bin" tabindex="-1"><a class="header-anchor" href="#\u5C40\u90E8\u5B89\u88C5\u7684-bin" aria-hidden="true">#</a> \u5C40\u90E8\u5B89\u88C5\u7684 bin</h3><p>\u5728\u5E38\u89C4\u9879\u76EE\u7684<code>node_modules/.bin</code>\u8DEF\u5F84\u4E0B\u6267\u884C<code>ls -l</code>\u547D\u4EE4\uFF0C\u53EF\u4EE5\u770B\u5230\u5C40\u90E8\u5B89\u88C5\u7684<code>vuepress</code>\u548C<code>webpack</code>\u7B49\u5305\u7684\u7B26\u53F7\u94FE\u63A5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>lrwxr-xr-x  <span class="token number">1</span> wind-stone  staff  <span class="token number">27</span> <span class="token number">10</span> <span class="token number">30</span> <span class="token number">11</span>:54 vuepress -<span class="token operator">&gt;</span> <span class="token punctuation">..</span>/vuepress/bin/vuepress.js\nlrwxr-xr-x  <span class="token number">1</span> wind-stone  staff  <span class="token number">25</span> <span class="token number">10</span> <span class="token number">22</span> <span class="token number">20</span>:15 webpack -<span class="token operator">&gt;</span> <span class="token punctuation">..</span>/webpack/bin/webpack.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A</p><p>\u5C40\u90E8\u5B89\u88C5\u7684\u5305\uFF0C\u5176\u547D\u4EE4\u53EA\u80FD\u5728\u9879\u76EE\u811A\u672C\u548C<code>package.json</code>\u7684<code>scripts</code>\u5B57\u6BB5\u91CC\u9762\u4F7F\u7528\uFF0C \u5982\u679C\u60F3\u5728\u547D\u4EE4\u884C\u4E0B\u8C03\u7528\uFF0C\u5FC5\u987B\u50CF\u4E0B\u9762\u8FD9\u6837\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u6267\u884C</span>\nnode_modules/.bin/vuepress dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><h2 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> module</h2>', 10);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode("code", null, "module", -1);
const _hoisted_77 = /* @__PURE__ */ createTextVNode("\u5B57\u6BB5\u8981\u6307\u5411\u7684\u5E94\u8BE5\u662F\u4E00\u4E2A\u57FA\u4E8E ES6 \u6A21\u5757\u89C4\u8303\u7684\u4F7F\u7528 ES5 \u8BED\u6CD5\u4E66\u5199\u7684\u6A21\u5757\u3002\u8BE6\u89C1");
const _hoisted_78 = {
  href: "https://loveky.github.io/2018/02/26/tree-shaking-and-pkg.module/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_79 = /* @__PURE__ */ createTextVNode("\u804A\u804A package.json \u6587\u4EF6\u4E2D\u7684 module \u5B57\u6BB5");
const _hoisted_80 = /* @__PURE__ */ createStaticVNode('<h2 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> dependencies</h2><h3 id="\u4F7F\u7528\u672C\u5730\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u672C\u5730\u8DEF\u5F84" aria-hidden="true">#</a> \u4F7F\u7528\u672C\u5730\u8DEF\u5F84</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;bar1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file:../foo/bar&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;bar2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file:./foo/bar&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;bar3&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file:~/foo/bar&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;bar4&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file:/foo/bar&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>', 3);
const _hoisted_83 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1\uFF1A");
const _hoisted_84 = {
  href: "https://docs.npmjs.com/cli/v7/configuring-npm/package-json#local-paths",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_85 = /* @__PURE__ */ createTextVNode("NPM - package.json - dependencies - Local Paths");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#version" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u8BED\u4E49\u5316\u7248\u672C" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u7248\u672C\u683C\u5F0F" }, {
                    default: withCtx(() => [
                      _hoisted_5
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u5148\u884C\u7248\u672C" }, {
                    default: withCtx(() => [
                      _hoisted_6
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#npm-\u5305\u53D1\u5E03\u65F6\u4FEE\u6539\u7248\u672C\u53F7" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#scripts" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#scripts-\u91CC\u7684\u53C2\u6570\u4F20\u9012" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#bin" }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5168\u5C40\u5B89\u88C5\u7684-bin" }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5C40\u90E8\u5B89\u88C5\u7684-bin" }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#module" }, {
            default: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#dependencies" }, {
            default: withCtx(() => [
              _hoisted_14
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4F7F\u7528\u672C\u5730\u8DEF\u5F84" }, {
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
    createBaseVNode("p", null, [
      _hoisted_16,
      _hoisted_17,
      _hoisted_18,
      createBaseVNode("a", _hoisted_19, [
        _hoisted_20,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_21
    ]),
    _hoisted_22,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_28, [
          _hoisted_29,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_30, [
          _hoisted_31,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_32,
    createBaseVNode("div", _hoisted_57, [
      _hoisted_58,
      createBaseVNode("p", null, [
        _hoisted_59,
        _hoisted_60,
        _hoisted_61,
        _hoisted_62,
        _hoisted_63,
        createBaseVNode("a", _hoisted_64, [
          _hoisted_65,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_66,
    createBaseVNode("p", null, [
      _hoisted_76,
      _hoisted_77,
      createBaseVNode("a", _hoisted_78, [
        _hoisted_79,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_80,
    createBaseVNode("p", null, [
      _hoisted_83,
      createBaseVNode("a", _hoisted_84, [
        _hoisted_85,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var package_json_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { package_json_html as default };
