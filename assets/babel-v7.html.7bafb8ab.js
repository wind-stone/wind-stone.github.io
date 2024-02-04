import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "babel-7",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#babel-7",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Babel 7")
], -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u5B98\u65B9\u4E2D\u6587\u6587\u6863: ");
const _hoisted_3 = {
  href: "https://www.babeljs.cn/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode("https://www.babeljs.cn/");
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="preset" tabindex="-1"><a class="header-anchor" href="#preset" aria-hidden="true">#</a> preset</h2><h2 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h2><h2 id="preset-\u548C-plugins-\u4F7F\u7528\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#preset-\u548C-plugins-\u4F7F\u7528\u987A\u5E8F" aria-hidden="true">#</a> preset \u548C plugins \u4F7F\u7528\u987A\u5E8F</h2><ul><li>\u63D2\u4EF6\u5728 Presets \u524D\u8FD0\u884C\u3002</li><li>\u63D2\u4EF6\u987A\u5E8F\u4ECE\u524D\u5F80\u540E\u6392\u5217\u3002</li><li>Presets \u987A\u5E8F\u662F\u98A0\u5012\u7684\uFF08\u4ECE\u540E\u5F80\u524D\uFF09\u3002</li></ul><h2 id="\u914D\u7F6E\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u65B9\u5F0F" aria-hidden="true">#</a> \u914D\u7F6E\u65B9\u5F0F</h2><p>\u914D\u7F6E\u5171\u6709\u4E09\u79CD\u65B9\u5F0F\uFF1A</p><ol><li>\u5728<code>package.json</code>\u4E2D\u8BBE\u7F6E<code>babel</code>\u5B57\u6BB5\u3002</li><li><code>.babelrc</code>\u6587\u4EF6\u6216<code>.babelrc.js</code>\u6587\u4EF6\u3002</li><li><code>babel.config.js</code>\u6587\u4EF6\u3002</li></ol><h3 id="\u914D\u7F6E\u65B9\u5F0F-1" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u65B9\u5F0F-1" aria-hidden="true">#</a> \u914D\u7F6E\u65B9\u5F0F 1</h3><p>\u7B2C<code>1</code>\u79CD\u65B9\u5F0F\uFF0C\u9700\u8981\u5728<code>package.json</code>\u6587\u4EF6\u91CC\u6DFB\u52A0<code>babel</code>\u914D\u7F6E\u9879\uFF0C\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n   <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;babel-test&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n       <span class="token property">&quot;@babel/core&quot;</span><span class="token operator">:</span><span class="token string">&quot;^7.4.5&quot;</span><span class="token punctuation">,</span>\n       <span class="token property">&quot;@babel/cli&quot;</span><span class="token operator">:</span><span class="token string">&quot;^7.4.4&quot;</span><span class="token punctuation">,</span>\n       <span class="token property">&quot;@babel/preset-env&quot;</span><span class="token operator">:</span><span class="token string">&quot;^7.4.5&quot;</span>\n        <span class="token comment">// ...</span>\n   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;babel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n       <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u914D\u7F6E\u65B9\u5F0F-2" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u65B9\u5F0F-2" aria-hidden="true">#</a> \u914D\u7F6E\u65B9\u5F0F 2</h3><p>\u7B2C<code>2</code>\u79CD\u65B9\u5F0F\uFF0C\u9700\u8981\u521B\u5EFA<code>.babelrc</code>\u6587\u4EF6\u6216<code>.babelrc.js</code>\u6587\u4EF6\u3002</p><p><code>.babelrc</code>\u6587\u4EF6\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6216<code>.babelrc.js</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Webpack \u7684\u914D\u7F6E\u6587\u4EF6\u4E5F\u662F\u8FD9\u79CD\u5199\u6CD5</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    presets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8BE5\u7C7B\u914D\u7F6E\u6587\u4EF6\u662F\u9488\u5BF9\u6587\u4EF6\u5939\u7EA7\u522B\u7684\u914D\u7F6E\uFF0C\u5373\u9879\u76EE\u6839\u76EE\u5F55\u6587\u4EF6\u5939\u4E0B\u6216\u5176\u5B50\u6587\u4EF6\u5939\u4E0B\u90FD\u53EF\u4EE5\u914D\u7F6E\u548C\u5E94\u7528\u8BE5\u7C7B\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F46\u5B50\u6587\u4EF6\u5939\u91CC\u7684\u914D\u7F6E\u6587\u4EF6\u4F1A\u8986\u76D6\u7956\u5148\u6587\u4EF6\u5939\u91CC\u7684\u914D\u7F6E\u6587\u4EF6\uFF08TODO: \u662F\u914D\u7F6E\u5BF9\u8C61\u6574\u4F53\u8986\u76D6\u8FD8\u662F\u5408\u5E76\u914D\u7F6E\u5BF9\u8C61\u8986\u76D6\u76F8\u540C\u7684\u9009\u9879\uFF09\uFF0C\u56E0\u6B64\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u7ED9\u4E0D\u540C\u7684\u6587\u4EF6\u5939\u5C42\u7EA7\u8BBE\u7F6E\u4E0D\u540C\u7684\u89C4\u5219\u3002</p><h3 id="\u914D\u7F6E\u65B9\u5F0F-3" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u65B9\u5F0F-3" aria-hidden="true">#</a> \u914D\u7F6E\u65B9\u5F0F 3</h3><p>\u7B2C<code>3</code>\u79CD\u65B9\u5F0F\uFF0C\u9700\u8981\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA<code>babel.config.js</code>\u6587\u4EF6\uFF0C\u8BE5\u914D\u7F6E\u6587\u4EF6\u662F\u9488\u5BF9\u6574\u4E2A\u9879\u76EE\uFF0C\u6574\u4E2A\u9879\u76EE\u4EC5\u80FD\u6709\u4E00\u4E2A\u8BE5\u7C7B\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E14\u5FC5\u987B\u653E\u7F6E\u5728\u9879\u76EE\u6839\u76EE\u5F55\u91CC\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    presets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C</p><ul><li>\u65B9\u5F0F<code>1</code>\u8FD9\u79CD\u5728<code>package.json</code>\u91CC\u6DFB\u52A0<code>babel</code>\u914D\u7F6E\u9879\u7684\u65B9\u5F0F\uFF0C\u548C\u65B9\u5F0F<code>2</code>\u548C<code>3</code>\u8FD9\u79CD\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6\u7684\u65B9\u5F0F\uFF0C\u6CA1\u6709\u672C\u8D28\u533A\u522B\uFF0C\u4E3B\u8981\u770B\u4E2A\u4EBA\u4E60\u60EF\u3002</li><li><code>.babelrc</code>\u6587\u4EF6\u82E5\u662F\u653E\u7F6E\u5728\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u5176\u6548\u679C\u8DDF<code>babel.config.js</code>\u662F\u4E00\u81F4\u7684\uFF0C\u82E5\u4E24\u79CD\u7C7B\u578B\u7684\u914D\u7F6E\u6587\u4EF6\u90FD\u5B58\u5728\uFF0C\u5219<code>.babelrc</code>\u6587\u4EF6\u4F1A\u8986\u76D6<code>babel.config.js</code>\u6587\u4EF6\u3002</li></ul><h2 id="\u5E38\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u63D2\u4EF6" aria-hidden="true">#</a> \u5E38\u7528\u63D2\u4EF6</h2><table><thead><tr><th>\u5305\u540D</th><th>\u529F\u80FD</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>@babel/plugin-transform-runtime</td><td>\u590D\u7528\u5DE5\u5177\u51FD\u6570</td><td>\u975E\u5FC5\u88C5\u5F00\u53D1\u4F9D\u8D56\uFF0C\u548C@babel/runtime\u540C\u65F6\u5B58\u5728</td></tr><tr><td>@babel/cli</td><td>\u547D\u4EE4\u884C\u6267\u884Cbabel\u547D\u4EE4\u5DE5\u5177</td><td>\u975E\u5FC5\u88C5\u5F00\u53D1\u4F9D\u8D56\uFF0Cpackages.json\u7684script\u4E2D\u4F7F\u7528\u4E86babel\u547D\u4EE4\u5219\u9700\u5B89\u88C5</td></tr><tr><td>babel-loader</td><td>webpack\u4E2D\u4F7F\u7528babel\u52A0\u8F7D\u6587\u4EF6</td><td>\u975E\u5FC5\u88C5\u5F00\u53D1\u4F9D\u8D56\uFF0Cwebpack\u9879\u76EE\u4E2D\u4F7F\u7528</td></tr><tr><td>@babel/plugin-*</td><td>babel\u7F16\u8BD1\u529F\u80FD\u5B9E\u73B0\u63D2\u4EF6</td><td>\u5F00\u53D1\u4F9D\u8D56\uFF0C\u6309\u7167\u9700\u8981\u7684\u529F\u80FD\u5B89\u88C5</td></tr><tr><td>@babel/preset-*</td><td>\u529F\u80FD\u5B9E\u73B0\u63D2\u4EF6\u9884\u8BBE</td><td>\u5F00\u53D1\u4F9D\u8D56\uFF0C\u6309\u7167\u9700\u8981\u7684\u529F\u80FD\u5B89\u88C5\uFF0Cjs\u8BED\u8A00\u65B0\u7279\u6027\u8F6C\u6362\u63A8\u8350\u4F7F\u7528preset-env</td></tr><tr><td>@babel/polyfill</td><td>\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u517C\u5BB9\u5E93</td><td>\u975E\u5FC5\u88C5\u751F\u4EA7\u4F9D\u8D56\uFF0C\u5DF2\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u63A8\u8350\u901A\u8FC7preset-env\u7684useBuiltIns\u5C5E\u6027\u6309\u9700\u5F15\u5165</td></tr><tr><td>core-js@*</td><td>\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u517C\u5BB9\u5E93</td><td>\u975E\u5FC5\u88C5\u751F\u4EA7\u4F9D\u8D56\uFF0C\u901A\u8FC7preset-env\u5F15\u5165polyfill\u9700\u5B89\u88C5\u6B64\u5305\uFF0C\u5E76\u901A\u8FC7corejs\u6307\u5B9A\u7248\u672C</td></tr><tr><td>@babel/runtime-corejs*</td><td>\u4E0D\u6C61\u67D3\u53D8\u91CF\u7684\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u517C\u5BB9\u5E93</td><td>\u975E\u5FC5\u88C5\u751F\u4EA7\u4F9D\u8D56\uFF0Cplugin-transform-runtime\u8BBE\u7F6E\u5F00\u542F\u540E\uFF0C\u53EF\u4EE5\u4E0D\u6C61\u67D3\u53D8\u91CF\u7684\u5F15\u5165polyfill</td></tr></tbody></table><h2 id="babel-core" tabindex="-1"><a class="header-anchor" href="#babel-core" aria-hidden="true">#</a> @babel/core</h2><p>Babel \u7F16\u8BD1\u7684\u6838\u5FC3\u5305\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E9B\u65B9\u6CD5\u5982\uFF1A</p><ul><li><code>transform</code>/<code>transformSync</code>/<code>transformAsync</code></li><li><code>transformFile</code>/<code>transformFile</code>/<code>transformFile</code></li><li><code>transformFromAst</code>/<code>transformFromAstSync</code>/<code>transformFromAstAsync</code></li><li><code>parse</code>/<code>parseSync</code>/<code>parseAsync</code></li><li>\u4EE5\u53CA\u5176\u4ED6\u4E00\u4E9B\u9AD8\u7EA7 API</li></ul>', 27);
const _hoisted_32 = /* @__PURE__ */ createTextVNode("\u8BE6\u60C5\u8BF7\u89C1");
const _hoisted_33 = {
  href: "https://www.babeljs.cn/docs/babel-core",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_34 = /* @__PURE__ */ createTextVNode("Babel \u5B98\u7F51 - @babel/core");
const _hoisted_35 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("p", null, "\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u82E5\u662F\u4E0D\u4F7F\u7528\u63D2\u4EF6\u6216\u9884\u8BBE\uFF0C\u5219 Babel \u4F1A\u539F\u5C01\u4E0D\u52A8\u7684\u5C06\u6E90\u7801\u8F93\u51FA\u3002", -1);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "babel-runtime",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#babel-runtime",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" @babel/runtime")
], -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("code", null, "@babel/runtime", -1);
const _hoisted_39 = /* @__PURE__ */ createTextVNode("\uFF0C\u4EE5\u6A21\u5757\u5316\u65B9\u5F0F\u5305\u542B\u4E86 Babel \u8FD0\u884C\u65F6\u8F85\u52A9\u5DE5\u5177\u51FD\u6570\u7684\u5B9E\u73B0\u7684\u5305\uFF0C");
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("code", null, "@babel/plugin-transform-runtime", -1);
const _hoisted_41 = /* @__PURE__ */ createTextVNode("\u63D2\u4EF6\u4F9D\u8D56\u8BE5\u63D2\u4EF6\u4F5C\u4E3A\u8FD0\u884C\u65F6\u4F9D\u8D56\u3002");
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "babel-plugin-transform-runtime",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#babel-plugin-transform-runtime",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" @babel/plugin-transform-runtime")
], -1);
const _hoisted_43 = /* @__PURE__ */ createTextVNode("@babel/plugin-transform-runtime");
const _hoisted_44 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "todo",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#todo",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" TODO")
], -1);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u7406\u6E05 Babel \u5404\u4E2A\u63D2\u4EF6\u4E4B\u95F4\u7684\u5173\u7CFB\u3002")
], -1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("p", null, "\u4EE5\u524D\u7684 babel-transform-runtime \u662F\u5305\u542B\u4E86 helpers \u548C polyfill\u3002\u800C\u73B0\u5728\u7684 @babel/runtime \u53EA\u5305\u542B helper\uFF0C\u5982\u679C\u9700\u8981 polyfill\uFF0C\u5219\u9700\u4E3B\u52A8\u5B89\u88C5 core-js \u7684 runtime\u7248\u672C @babel/runtime-corejs2 \u3002\u5E76\u5728 @babel/plugin-transform-runtime \u7684\u63D2\u4EF6\u4E2D\u505A\u914D\u7F6E\u3002", -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "monorepos \u7684\u610F\u4E49")
], -1);
const _hoisted_49 = /* @__PURE__ */ createTextVNode("Babel 7 \u91CC\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u914D\u7F6E\u7684");
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("code", null, "babel.config.js", -1);
const _hoisted_51 = /* @__PURE__ */ createTextVNode("\u4F1A\u5BF9");
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("code", null, "node_modules", -1);
const _hoisted_53 = /* @__PURE__ */ createTextVNode("\u3001");
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("code", null, "symlinks", -1);
const _hoisted_55 = /* @__PURE__ */ createTextVNode("\u548C");
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("code", null, "monorepos", -1);
const _hoisted_57 = /* @__PURE__ */ createTextVNode("\u751F\u6548\uFF0C\u8BE6\u89C1");
const _hoisted_58 = {
  href: "https://babeljs.io/docs/en/v7-migration#config-lookup-changes",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_59 = /* @__PURE__ */ createTextVNode("Upgrade to Babel 7 - Config Lookup Changes");
const _hoisted_60 = /* @__PURE__ */ createTextVNode("\u3002\u4F46\u662F");
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("code", null, "node_modules", -1);
const _hoisted_62 = /* @__PURE__ */ createTextVNode("\u4E0B\u7684\u6A21\u5757\u4E00\u822C\u90FD\u662F\u7F16\u8BD1\u597D\u7684\uFF0C\u9700\u8981\u5254\u9664\u5BF9\u4ED6\u4EEC\u7684\u7F16\u8BD1\u3002");
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("p", null, "\u53C2\u8003\uFF1A", -1);
const _hoisted_64 = {
  href: "https://segmentfault.com/a/1190000018358854",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_65 = /* @__PURE__ */ createTextVNode("\u4E00\u6587\u8BFB\u61C2 babel7 \u7684\u914D\u7F6E\u6587\u4EF6\u52A0\u8F7D\u903B\u8F91");
const _hoisted_66 = /* @__PURE__ */ createStaticVNode('<h2 id="\u5E38\u7528-preset" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528-preset" aria-hidden="true">#</a> \u5E38\u7528 preset</h2><h3 id="vue-babel-preset-app" tabindex="-1"><a class="header-anchor" href="#vue-babel-preset-app" aria-hidden="true">#</a> @vue/babel-preset-app</h3><p>\u9ED8\u8BA4\u4F1A\u5305\u542B\u4EE5\u4E0B<code>polyfill</code>\uFF1A</p><ul><li><code>es6.array.iterator</code></li><li><code>es6.promise</code></li><li><code>es6.object.assign</code></li><li><code>es7.promise.finally</code></li></ul>', 4);
const _hoisted_70 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1");
const _hoisted_71 = {
  href: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_72 = /* @__PURE__ */ createTextVNode("vue-cli \u4E4B @vue/babel-preset-app");
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      _hoisted_2,
      createBaseVNode("a", _hoisted_3, [
        _hoisted_4,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_5,
    createBaseVNode("p", null, [
      _hoisted_32,
      createBaseVNode("a", _hoisted_33, [
        _hoisted_34,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_35
    ]),
    _hoisted_36,
    _hoisted_37,
    createBaseVNode("p", null, [
      createVNode(_component_RouterLink, { to: "/es6/babel/@babel/runtime.html" }, {
        default: withCtx(() => [
          _hoisted_38
        ]),
        _: 1
      }),
      _hoisted_39,
      _hoisted_40,
      _hoisted_41
    ]),
    _hoisted_42,
    createBaseVNode("p", null, [
      createVNode(_component_RouterLink, { to: "/es6/babel/@babel/plugin-transform-runtime.html" }, {
        default: withCtx(() => [
          _hoisted_43
        ]),
        _: 1
      }),
      _hoisted_44
    ]),
    _hoisted_45,
    _hoisted_46,
    _hoisted_47,
    createBaseVNode("ul", null, [
      _hoisted_48,
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _hoisted_49,
          _hoisted_50,
          _hoisted_51,
          _hoisted_52,
          _hoisted_53,
          _hoisted_54,
          _hoisted_55,
          _hoisted_56,
          _hoisted_57,
          createBaseVNode("a", _hoisted_58, [
            _hoisted_59,
            createVNode(_component_OutboundLink)
          ]),
          _hoisted_60,
          _hoisted_61,
          _hoisted_62
        ])
      ])
    ]),
    _hoisted_63,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_64, [
          _hoisted_65,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_66,
    createBaseVNode("p", null, [
      _hoisted_70,
      createBaseVNode("a", _hoisted_71, [
        _hoisted_72,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var babelV7_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { babelV7_html as default };
