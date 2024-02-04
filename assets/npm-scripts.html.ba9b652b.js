import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "npm-scripts",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#npm-scripts",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" npm-scripts")
], -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("Copy and tran from ");
const _hoisted_3 = {
  href: "https://www.npmjs.cn/misc/scripts/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode("npm-scripts");
const _hoisted_5 = { class: "table-of-contents" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u63CF\u8FF0");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("prepublish \u548C prepare");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u5E9F\u5F03\u8BF4\u660E");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u4F7F\u7528\u793A\u4F8B");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u9ED8\u8BA4\u503C");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u7528\u6237");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u73AF\u5883");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("path");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("package.json \u53D8\u91CF");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u914D\u7F6E");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u7279\u6B8A: package.json \u91CC\u7684 config \u5BF9\u8C61");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u751F\u547D\u5468\u671F\u4E8B\u4EF6");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u793A\u4F8B");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("\u9000\u51FA");
const _hoisted_20 = /* @__PURE__ */ createTextVNode("\u94A9\u5B50\u811A\u672C");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("\u6700\u4F73\u5B9E\u8DF5");
const _hoisted_22 = /* @__PURE__ */ createTextVNode("\u8865\u5145\u77E5\u8BC6");
const _hoisted_23 = /* @__PURE__ */ createTextVNode("npm run");
const _hoisted_24 = /* @__PURE__ */ createTextVNode("npm run env");
const _hoisted_25 = /* @__PURE__ */ createTextVNode("npm scripts \u53C2\u6570");
const _hoisted_26 = /* @__PURE__ */ createTextVNode("\u65B9\u5F0F\u4E00");
const _hoisted_27 = /* @__PURE__ */ createStaticVNode('<h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><p><code>npm</code>\u652F\u6301<code>package.json</code>\u6587\u4EF6\u91CC\u7684<code>scripts</code>\u5C5E\u6027\u7684\u4EE5\u4E0B\u811A\u672C\uFF1A</p><ul><li><code>prepublish</code>: \u5728\u5305\uFF08<code>package</code>\uFF09\u6253\u5305\u53D1\u5E03\u4E4B\u524D\u8FD0\u884C\uFF0C\u4E5F\u5728\u672C\u5730\u4E0D\u5E26\u4EFB\u4F55\u53C2\u6570\u6267\u884C<code>npm install</code>\u65F6\u8FD0\u884C\u3002\uFF08\u89C1\u4E0B\u65B9\uFF09</li><li><code>prepare</code>: \u5728\u5305\u6253\u5305\u53D1\u5E03\u4E4B\u524D\u8FD0\u884C\uFF0C\u4E5F\u5728\u672C\u5730\u4E0D\u5E26\u4EFB\u4F55\u53C2\u6570\u6267\u884C<code>npm install</code>\u65F6\u8FD0\u884C\uFF0C\u4EE5\u53CA\u5728\u5B89\u88C5<code>git</code>\u4F9D\u8D56\u65F6\u8FD0\u884C\uFF08\u89C1\u4E0B\u65B9\uFF09\u3002<code>prepare</code>\u4F1A\u5728<code>prepublish</code>\u4E4B\u540E\u8FD0\u884C\uFF0C\u4F46\u662F\u5728<code>prepublishOnly</code>\u4E4B\u524D\u8FD0\u884C\u3002</li><li><code>prepublishOnly</code>: \u5728\u5305\u6253\u5305\u53D1\u5E03\u4E4B\u524D\u8FD0\u884C\uFF0C\u4EC5\u5728<code>npm publish</code>\u65F6\u3002\uFF08\u89C1\u4E0B\u65B9\uFF09</li><li><code>prepack</code>: \u5728\u539F\u59CB\u7801\uFF08<code>tarball</code>\uFF09\u88AB\u6253\u5305\uFF08\u5728<code>npm pack</code>\u3001<code>npm publish</code>\u4EE5\u53CA\u5B89\u88C5<code>git</code>\u4F9D\u8D56\u65F6\uFF09\u4E4B\u524D\u8FD0\u884C\u3002</li><li><code>postpack</code>: \u5728\u539F\u59CB\u7801\uFF08<code>tarball</code>\uFF09\u88AB\u751F\u6210\u548C\u79FB\u52A8\u5230\u6700\u7EC8\u7684\u76EE\u7684\u5730\u4E4B\u540E\u8FD0\u884C\u3002</li><li><code>publish</code>\u3001<code>postpublish</code>: \u5728\u5305\u88AB\u53D1\u5E03\u4E4B\u540E\u8FD0\u884C\u3002</li><li><code>preinstall</code>: \u5728\u5305\u5B89\u88C5\u4F9D\u8D56\u4E4B\u524D\u8FD0\u884C\u3002</li><li><code>install</code>\u3001<code>postinstall</code>: \u5728\u5305\u5B89\u88C5\u4F9D\u8D56\u4E4B\u540E\u8FD0\u884C\u3002</li><li><code>preuninstall</code>\u3001<code>uninstall</code>: \u5728\u5305\u5378\u8F7D\u4F9D\u8D56\u4E4B\u524D\u8FD0\u884C\u3002</li><li><code>postuninstall</code>: \u5728\u5305\u5B89\u88C5\u4F9D\u8D56\u4E4B\u540E\u8FD0\u884C\u3002</li><li><code>preversion</code>: \u5347\u7EA7\u5305\u7684\u7248\u672C\u4E4B\u524D\u8FD0\u884C\u3002</li><li><code>version</code>: \u5347\u7EA7\u5305\u7684\u7248\u672C\u4E4B\u540E\u8FD0\u884C\uFF0C\u4F46\u662F\u5728\u63D0\u4EA4\u4E4B\u524D\u3002</li><li><code>postversion</code>: \u5728\u5347\u7EA7\u5305\u7684\u7248\u672C\u4E4B\u540E\u8FD0\u884C\uFF0C\u4F46\u662F\u5728\u63D0\u4EA4\u4E4B\u540E\u3002</li><li><code>pretest</code>\u3001<code>test</code>\u3001<code>posttest</code>: \u5206\u522B\u5728<code>npm test</code>\u4E4B\u524D\u3001\u4E4B\u65F6\u3001\u4E4B\u540E\u8FD0\u884C\u3002</li><li><code>prestop</code>\u3001<code>stop</code>\u3001<code>poststop</code>: \u5206\u522B\u5728<code>npm stop</code>\u4E4B\u524D\u3001\u4E4B\u65F6\u3001\u4E4B\u540E\u8FD0\u884C\u3002</li><li><code>prestart</code>\u3001<code>start</code>\u3001<code>poststart</code>: \u5206\u522B\u5728<code>npm start</code>\u4E4B\u524D\u3001\u4E4B\u65F6\u3001\u4E4B\u540E\u8FD0\u884C\u3002</li><li><code>prerestart</code>\u3001<code>restart</code>\u3001<code>postrestart</code>: \u5206\u522B\u5728<code>npm restart</code>\u4E4B\u524D\u3001\u4E4B\u65F6\u3001\u4E4B\u540E\u8FD0\u884C\u3002\u6CE8\u610F\uFF0C\u82E5\u662F\u672A\u63D0\u4F9B<code>restart</code>\u811A\u672C\uFF0C<code>npm restart</code>\u5C06\u8FD0\u884C<code>stop</code>\u811A\u672C\u548C<code>start</code>\u811A\u672C\u3002</li><li><code>preshrinkwrap</code>\u3001<code>shrinkwrap</code>\u3001<code>postshrinkwrap</code>: \u5206\u522B\u5728<code>npm shrinkwrap</code>\u4E4B\u524D\u3001\u4E4B\u65F6\u3001\u4E4B\u540E\u8FD0\u884C\u3002</li></ul><p>\u6B64\u5916\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD0\u884C<code>npm run-script &lt;stage&gt;</code>\u6765\u6267\u884C\u4EFB\u610F\u811A\u672C\u3002\u5339\u914D\u540D\u79F0\u7684<code>pre</code>\u548C<code>post</code>\u547D\u4EE4\u4E5F\u4F1A\u8FD0\u884C\uFF08\u6BD4\u5982\uFF0C<code>premyscript</code>\u3001<code>myscript</code>\u3001<code>postmyscript</code>\uFF09\u3002\u4F9D\u8D56\u91CC\u7684\u811A\u672C\u53EF\u4EE5\u901A\u8FC7<code>npm explore &lt;pkg&gt; -- npm run &lt;stage&gt;</code>\u6765\u8FD0\u884C\u3002</p><h2 id="prepublish-\u548C-prepare" tabindex="-1"><a class="header-anchor" href="#prepublish-\u548C-prepare" aria-hidden="true">#</a> prepublish \u548C prepare</h2><h3 id="\u5E9F\u5F03\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5E9F\u5F03\u8BF4\u660E" aria-hidden="true">#</a> \u5E9F\u5F03\u8BF4\u660E</h3><p>\u81EA\u4ECE<code>npm@1.1.71</code>\u4EE5\u6765\uFF0C<code>npm</code>\u7684 CLI \u4F1A\u540C\u65F6\u4E3A<code>npm publish</code>\u548C<code>npm install</code>\u8FD0\u884C<code>prepublish</code>\u811A\u672C\uFF0C\u56E0\u4E3A\u8FD9\u662F\u4E00\u4E2A\u4FBF\u5229\u7684\u65B9\u5F0F\u4EE5\u5728\u4F7F\u7528\u5305\u4E4B\u524D\u505A\u4E00\u4E9B\u51C6\u5907\u5DE5\u4F5C\uFF08\u4E00\u4E9B\u5E38\u7528\u7684\u4F7F\u7528\u793A\u4F8B\u5C06\u5728\u4E4B\u540E\u7684\u90E8\u5206\u4ECB\u7ECD\uFF09\u3002\u4F46\u5728\u5B9E\u8DF5\u4E2D\uFF0C\u8FD9\u4F1A\u7279\u522B\u4EE4\u4EBA\u56F0\u60D1\u3002\u5728<code>npm@4.0.0</code>\uFF0C\u4E00\u4E2A\u65B0\u7684\u4E8B\u4EF6<code>prepare</code>\u88AB\u5F15\u5165\uFF08\u6765\u66FF\u4EE3<code>prepublish</code>\uFF09\uFF0C\u4E14\u4E4B\u524D\u5DF2\u5B58\u5728\u7684\u884C\u4E3A\uFF08\u5373<code>prepublish</code>\u811A\u672C\uFF09\u4E5F\u88AB\u4FDD\u7559\u4E86\u3002\u4E00\u4E2A\u4EC5\u5728<code>npm publish</code>\u65F6\u8FD0\u884C\uFF08\u6BD4\u5982\uFF0C\u6700\u540E\u4E00\u6B21\u8FD0\u884C\u6D4B\u8BD5\u4EE5\u786E\u4FDD\u5176\u5904\u4E8E\u826F\u597D\u7684\u72B6\u6001\uFF09\u7684\u65B0\u4E8B\u4EF6<code>prepublishOnly</code>\u4F5C\u4E3A\u8FC7\u6E21\u6027\u7B56\u7565\u88AB\u6DFB\u52A0\uFF0C\u4EE5\u5141\u8BB8\u7528\u6237\u907F\u5F00\u5DF2\u5B58\u5728\u7684<code>npm</code>\u7248\u672C\u7684\u56F0\u60D1\u884C\u4E3A\u3002</p>', 7);
const _hoisted_34 = /* @__PURE__ */ createTextVNode("\u53C2\u89C1");
const _hoisted_35 = {
  href: "https://github.com/npm/npm/issues/10074",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_36 = /* @__PURE__ */ createTextVNode("https://github.com/npm/npm/issues/10074");
const _hoisted_37 = /* @__PURE__ */ createTextVNode("\u53EF\u4E86\u89E3\u5173\u4E8E\u8FD9\u4E2A\u6539\u53D8\u7684\u66F4\u6DF1\u5165\u539F\u56E0\u3002");
const _hoisted_38 = /* @__PURE__ */ createStaticVNode('<h3 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u793A\u4F8B</h3><p>\u82E5\u662F\u4F60\u9700\u8981\u5728\u5305\u88AB\u4F7F\u7528\u4E4B\u524D\u6267\u884C\u4E00\u4E9B\u4E0D\u4F9D\u8D56\u4E8E\u64CD\u4F5C\u7CFB\u7EDF\u6216\u8005\u76EE\u6807\u7CFB\u7EDF\u4F53\u7CFB\u7ED3\u6784\u7684\u64CD\u4F5C\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528<code>prepublish</code>\u811A\u672C\u3002\u6BD4\u5982\u5982\u4E0B\u4E00\u4E9B\u4EFB\u52A1:</p><ul><li>\u5C06 CoffeeScript \u6E90\u7801\u7F16\u8BD1\u4E3A JavaScript\u3002</li><li>\u521B\u5EFA JavaScript \u6E90\u7801\u7684\u538B\u7F29\u7248\u3002</li><li>\u6293\u53D6\u4F60\u7684\u5305\u5C06\u4F7F\u7528\u5230\u7684\u8FDC\u7A0B\u8D44\u6E90\u3002</li></ul><p>\u5728<code>prepublish</code>\u9636\u6BB5\u505A\u8FD9\u4E9B\u4E8B\u60C5\u7684\u4F18\u52BF\u662F\u53EF\u4EE5\u5728\u5355\u4E00\u5730\u65B9\u4E00\u6B21\u5B8C\u6210\uFF0C\u4EE5\u51CF\u5C11\u590D\u6742\u6027\u548C\u53EF\u53D8\u6027\u3002\u6B64\u5916\uFF0C\u8FD9\u610F\u5473\u7740:</p><ul><li>\u4F60\u53EF\u4EE5\u5C06<code>coffee-script</code>\u4F5C\u4E3A\u5F00\u53D1\u4F9D\u8D56<code>devDependency</code>\uFF0C\u56E0\u6B64\u4F60\u7684\u7528\u6237\u4E0D\u9700\u8981\u5DF2\u7ECF\u5B89\u88C5<code>coffee-script</code>\u3002</li><li>\u4F60\u4E0D\u9700\u8981\u5728\u4F60\u7684\u5305\u91CC\u5305\u542B\u538B\u7F29\u5668<code>minifier</code>\u3002</li><li>\u4F60\u4E0D\u9700\u8981\u4F9D\u8D56\u4F60\u7684\u7528\u6237\u5728\u76EE\u6807\u673A\u5668\u4E0A\u6709<code>curl</code>\u6216<code>wget</code>\u6216\u5176\u4ED6\u7CFB\u7EDF\u5DE5\u5177\u3002</li></ul><h2 id="\u9ED8\u8BA4\u503C" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u503C" aria-hidden="true">#</a> \u9ED8\u8BA4\u503C</h2><p><code>npm</code>\u4F1A\u57FA\u4E8E\u5305\u7684\u5185\u5BB9\u8BBE\u7F6E\u4E00\u4E9B\u811A\u672C\u7684\u9ED8\u8BA4\u503C\u3002</p><ul><li><code>start</code>: <code>node server.js</code>\u3002\u82E5\u662F\u5728\u5305\u7684\u6839\u76EE\u5F55\u4E0B\u6709<code>server.js</code>\u6587\u4EF6\uFF0C\u5219<code>npm</code>\u9ED8\u8BA4\u4F1A\u5C06<code>start</code>\u547D\u4EE4\u8BBE\u7F6E\u4E3A<code>node server.js</code>\u3002</li><li><code>install</code>: <code>node-gyp rebuild</code>\u3002\u82E5\u662F\u5728\u5305\u7684\u6839\u76EE\u5F55\u4E0B\u6709<code>binding.gyp</code>\u6587\u4EF6\uFF0C\u4E14\u4F60\u6CA1\u6709\u5B9A\u4E49\u81EA\u5DF1\u7684<code>install</code>\u548C<code>preinstall</code>\u811A\u672C\uFF0C\u5219<code>npm</code>\u9ED8\u8BA4\u4F1A\u5C06<code>install</code>\u547D\u4EE4\u8BBE\u7F6E\u4E3A<code>node-gyp rebuild</code>\u3002</li></ul><h2 id="\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237" aria-hidden="true">#</a> \u7528\u6237</h2><p>\u82E5\u662F<code>npm</code>\u4EE5<code>root</code>\u6743\u9650\u8C03\u7528\uFF0C\u5219\u5B83\u4F1A\u5C06<code>uid</code>\u6539\u4E3A\u7528\u6237\u8D26\u53F7\u6216\u8005\u7528\u6237\u914D\u7F6E\u91CC\u6307\u5B9A\u7684<code>uid</code>\uFF0C\u9ED8\u8BA4\u4E3A<code>nobody</code>\u3002\u8BBE\u7F6E<code>unsafe-perm</code>\u6807\u5FD7\u4EE5\u4F7F\u7528<code>root</code>\u6743\u9650\u8FD0\u884C\u811A\u672C\u3002</p><h2 id="\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883" aria-hidden="true">#</a> \u73AF\u5883</h2><p>\u5305\u7684\u811A\u672C\u8FD0\u884C\u7684\u73AF\u5883\u91CC\uFF0C\u6709\u5927\u91CF\u5173\u4E8E<code>npm</code>\u8BBE\u7F6E\u548C\u8FDB\u7A0B\u7684\u5F53\u524D\u72B6\u6001\u7684\u4FE1\u606F\u53EF\u4EE5\u4F7F\u7528\u3002</p><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h3><p>\u82E5\u4F60\u4F9D\u8D56\u4E86\u5B9A\u4E49\u4E86\u53EF\u6267\u884C\u811A\u672C\u7684\u6A21\u5757\uFF0C\u6BD4\u5982\u6D4B\u8BD5\u5957\u4EF6\uFF0C\u5219\u8FD9\u4E9B\u53EF\u6267\u884C\u7684\u811A\u672C\u4F1A\u88AB\u52A0\u5165\u5230<code>PATH</code>\u4EE5\u6267\u884C\u8FD9\u4E9B\u811A\u672C\u3002\u56E0\u6B64\uFF0C\u82E5\u662F\u4F60\u7684<code>package.json</code>\u662F\u8FD9\u6837:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;bar&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;0.1.x&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;start&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;bar ./test&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5219\u4F60\u53EF\u4EE5\u8FD0\u884C<code>npm start</code>\u53BB\u6267\u884C<code>bar</code>\u811A\u672C\uFF0C<code>bar</code>\u811A\u672C\u5728\u6267\u884C<code>npm install</code>\u65F6\u5C31\u8F93\u51FA\u5230\u4E86<code>node_modules/.bin</code>\u76EE\u5F55\u91CC\u3002</p><h3 id="package-json-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#package-json-\u53D8\u91CF" aria-hidden="true">#</a> package.json \u53D8\u91CF</h3><p><code>package.json</code>\u6587\u4EF6\u91CC\u7684\u5404\u4E2A\u5C5E\u6027\u90FD\u4EE5<code>npm_package_</code>\u524D\u7F00\u7684\u663E\u793A\u5B58\u5728\u5728\u73AF\u5883\u91CC\u3002\u56E0\u6B64\uFF0C\u82E5\u662F\u4F60<code>package.json</code>\u6587\u4EF6\u91CC\u6709<code>{&quot;name&quot;: &quot;foo&quot;, &quot;version&quot;: &quot;1.2.5&quot;}</code>\uFF0C\u5219\u4F60\u7684\u5305\u7684\u811A\u672C\u91CC\u7684<code>npm_package_name</code>\u73AF\u5883\u53D8\u91CF\u7684\u503C\u5219\u4E3A<code>foo</code>\uFF0C<code>npm_package_version</code>\u73AF\u5883\u53D8\u91CF\u7684\u503C\u5219\u4E3A<code>1.2.5</code>\u3002\u4F60\u53EF\u4EE5\u5728\u4EE3\u7801\u91CC\u4F7F\u7528<code>p<wbr>rocess.env.npm_package_name</code>\u548C<code>p<wbr>rocess.env.npm_package_version</code>\u8BBF\u95EE\u8FD9\u4E9B\u53D8\u91CF\uFF0C<code>package.json</code>\u6587\u4EF6\u91CC\u7684\u5176\u4ED6\u5C5E\u6027\u4E5F\u662F\u8FD9\u6837\u3002</p><h3 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h3><p>\u914D\u7F6E\u53C2\u6570\u662F\u4EE5<code>npm_config_</code>\u4E3A\u524D\u7F00\u653E\u5165\u73AF\u5883\u91CC\u7684\u3002\u6BD4\u5982\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u68C0\u67E5<code>npm_config_root</code>\u73AF\u5883\u53D8\u91CF\u6765\u67E5\u770B\u6709\u6548\u7684<code>root</code>\u914D\u7F6E\u3002</p><h3 id="\u7279\u6B8A-package-json-\u91CC\u7684-config-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u7279\u6B8A-package-json-\u91CC\u7684-config-\u5BF9\u8C61" aria-hidden="true">#</a> \u7279\u6B8A: package.json \u91CC\u7684 config \u5BF9\u8C61</h3><p>\u82E5\u662F\u5B58\u5728<code>&lt;name&gt;[@&lt;version&gt;]:&lt;key&gt;</code>\u5F62\u5F0F\u7684\u914D\u7F6E\u53C2\u6570\uFF0C\u5219\u5728\u73AF\u5883\u91CC\uFF0C<code>package.json</code>\u6587\u4EF6\u91CC\u7684<code>config</code>\u5BF9\u8C61\u4F1A\u88AB\u8986\u76D6\u3002\u6BD4\u5982\uFF0C\u82E5\u662F<code>package.json</code>\u662F\u8FD9\u6837:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8080&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node server.js&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>server.js</code>\u662F\u8FD9\u6837\u7684:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>npm_package_config_port<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5219\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6539\u53D8\u8FD9\u4E2A\u884C\u4E3A:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> foo:port <span class="token number">80</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u751F\u547D\u5468\u671F\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F\u4E8B\u4EF6" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F\u4E8B\u4EF6</h3><p>\u6700\u540E\uFF0C<code>npm_lifecycle_event</code>\u73AF\u5883\u53D8\u91CF\u4F1A\u88AB\u8BBE\u7F6E\u4E3A\u6B63\u5728\u6267\u884C\u7684\u5468\u671F\u9636\u6BB5\u3002\u56E0\u6B64\uFF0C\u4F60\u53EF\u4EE5\u5C06\u5355\u4E2A\u811A\u672C\u7528\u4E8E\u8FDB\u7A0B\u7684\u4E0D\u540C\u9636\u6BB5\uFF0C\u8FD9\u5C06\u57FA\u4E8E\u5F53\u524D\u9636\u6BB5\u8FDB\u884C\u5207\u6362\u3002</p><p>\u5BF9\u8C61\u5C06\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u6253\u5E73\uFF0C\u56E0\u6B64\u4F60\u7684<code>package.json</code>\u91CC\u8981\u662F\u6709<code>{&quot;scripts&quot;: {&quot;install&quot;: &quot;foo.js&quot;}}</code>\uFF0C\u5219\u4F60\u5C06\u5728\u811A\u672C\u91CC\u5F97\u5230:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>npm_package_scripts_install <span class="token operator">===</span> <span class="token string">&quot;foo.js&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u6BD4\u5982\uFF0C\u82E5\u662F\u4F60\u7684<code>package.json</code>\u5305\u542B\u5982\u4E0B\u5185\u5BB9:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;install&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scripts/install.js&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;postinstall&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scripts/install.js&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;uninstall&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scripts/uninstall.js&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5219<code>scripts/install.js</code>\u5C06\u5728\u751F\u547D\u5468\u671F\u7684<code>install</code>\u548C<code>post-install</code>\u9636\u6BB5\u8C03\u7528\uFF0C<code>scripts/uninstall.js</code>\u5C06\u5728\u5305<code>uninstall</code>\u7684\u65F6\u5019\u8C03\u7528\u3002\u7531\u4E8E<code>scripts/install.js</code>\u5728\u4E24\u4E2A\u4E0D\u540C\u7684\u9636\u6BB5\u8FD0\u884C\uFF0C\u56E0\u6B64\u53EF\u901A\u8FC7<code>npm_lifecycle_event</code>\u73AF\u5883\u53D8\u91CF\u6765\u5224\u65AD\u5904\u4E8E\u54EA\u4E2A\u9636\u6BB5\u3002</p><p>\u82E5\u662F\u4F60\u60F3\u6267\u884C<code>make</code>\u547D\u4EE4\uFF0C\u4F60\u53EF\u4EE5\u8FD9\u6837\u505A\uFF0C\u8FD9\u540C\u65F6\u53EF\u4EE5\u5DE5\u4F5C:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;preinstall&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;./configure&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;install&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;make &amp;&amp; make install&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;test&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;make test&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u9000\u51FA" tabindex="-1"><a class="header-anchor" href="#\u9000\u51FA" aria-hidden="true">#</a> \u9000\u51FA</h2><p>\u811A\u672C\u662F\u5C06\u6574\u884C\u4F5C\u4E3A\u811A\u672C\u53C2\u6570\u4F20\u9012\u7ED9<code>sh</code>\u547D\u4EE4\u6765\u8FD0\u884C\u7684\u3002</p><p>\u82E5\u662F\u811A\u672C\u4EE5\u975E 0 \u7684<code>code</code>\u9000\u51FA\uFF0C\u5219\u5C06\u505C\u6B62\u8FDB\u7A0B\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u4E9B\u811A\u672C\u6587\u4EF6\u4E0D\u4E00\u5B9A\u5FC5\u987B\u662F<code>nodejs</code>\u751A\u81F3\u662F JavaScript \u7A0B\u5E8F\u3002\u5B83\u4EEC\u53EA\u8981\u662F\u67D0\u79CD\u53EF\u6267\u884C\u7684\u6587\u4EF6\u5373\u53EF\u3002</p><h2 id="\u94A9\u5B50\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u94A9\u5B50\u811A\u672C" aria-hidden="true">#</a> \u94A9\u5B50\u811A\u672C</h2><p>\u82E5\u662F\u4F60\u60F3\u8981\u4E3A\u6240\u6709\u7684\u5305\u5728\u6307\u5B9A\u751F\u547D\u5468\u671F\u4E8B\u4EF6\u65F6\u8FD0\u884C\u6307\u5B9A\u7684\u811A\u672C\uFF0C\u5219\u4F60\u53EF\u4EE5\u4F7F\u7528\u94A9\u5B50\u811A\u672C\u3002\u5C06\u53EF\u6267\u884C\u6587\u4EF6\u653E\u7F6E\u5728<code>node_modules/.hooks/{eventname}</code>\uFF0C\u5219\u9488\u5BF9\u4EFB\u4F55\u5B89\u88C5\u5728\u90A3\u4E2A\u6839\u76EE\u5F55\u4E0B\u7684\u5305\uFF0C\u5F53\u8FD9\u4E9B\u5305\u7ECF\u5386\u4E86\u8BE5\u5305\u751F\u547D\u5468\u671F\u91CC\u7684\u8BE5\u9636\u6BB5\u65F6\uFF0C\u8FD9\u4E2A\u811A\u672C\u90FD\u4F1A\u6267\u884C\u3002</p><p>\u94A9\u5B50\u811A\u672C\u7684\u8FD0\u884C\u4E0E<code>package.json</code>\u91CC\u7684\u811A\u672C\u5B8C\u5168\u4E00\u6837\u3002\u4F46\u5B83\u4EEC\u662F\u5728\u5206\u79BB\u7684\u5B50\u8FDB\u7A0B\u91CC\u8FD0\u884C\uFF0C\u90FD\u6709\u4E0A\u8FF0\u63CF\u8FF0\u7684\u73AF\u5883\u3002</p><h2 id="\u6700\u4F73\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#\u6700\u4F73\u5B9E\u8DF5" aria-hidden="true">#</a> \u6700\u4F73\u5B9E\u8DF5</h2>', 45);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("\u4E0D\u8981\u4EE5\u975E 0 \u7684\u9519\u8BEF\u7801\u9000\u51FA\uFF0C\u9664\u975E\u4F60\u771F\u7684\u4E86\u89E3\u5B83\u3002\u9664\u4E86"),
  /* @__PURE__ */ createBaseVNode("code", null, "uninstall"),
  /* @__PURE__ */ createTextVNode("\u811A\u672C\uFF0C\u8FD9\u5C06\u5F15\u8D77"),
  /* @__PURE__ */ createBaseVNode("code", null, "npm"),
  /* @__PURE__ */ createTextVNode("\u884C\u4E3A\u7684\u5931\u8D25\uFF0C\u4EE5\u53CA\u5B58\u5728\u88AB\u56DE\u6EDA\u7684\u53EF\u80FD\u3002\u82E5\u662F\u8FD9\u79CD\u5931\u8D25\u662F\u5FAE\u5C0F\u7684\u6216\u53EA\u662F\u963B\u6B62\u4E86\u4E00\u4E9B\u53EF\u9009\u7684\u7279\u6027\uFF0C\u5219\u66F4\u597D\u7684\u65B9\u5F0F\u662F\u4EC5\u4EC5\u6253\u5370\u4E00\u4E2A\u8B66\u544A\uFF0C\u5E76\u6210\u529F\u9000\u51FA\u3002")
], -1);
const _hoisted_84 = /* @__PURE__ */ createTextVNode("\u4E0D\u8981\u5C1D\u8BD5\u4F7F\u7528\u811A\u672C\u53BB\u505A");
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("code", null, "npm", -1);
const _hoisted_86 = /* @__PURE__ */ createTextVNode("\u80FD\u5E2E\u4F60\u505A\u7684\u4E8B\u60C5\u3002\u8BFB\u4E00\u4E0B");
const _hoisted_87 = {
  href: "https://www.npmjs.cn/files/package.json/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_88 = /* @__PURE__ */ createTextVNode("package.json");
const _hoisted_89 = /* @__PURE__ */ createTextVNode("\uFF0C\u770B\u770B\u6240\u6709\u901A\u8FC7\u7B80\u5355\u3001\u9002\u5F53\u5730\u63CF\u8FF0\u4F60\u7684\u5305\u5C31\u80FD\u6307\u5B9A\u548C\u5F00\u542F\u7684\u4E8B\u60C5\u3002\u901A\u5E38\uFF0C\u8FD9\u6837\u4F1A\u66F4\u52A0\u65B9\u4FBF\u548C\u53EF\u9760\u3002");
const _hoisted_90 = /* @__PURE__ */ createStaticVNode("<li>\u68C0\u67E5\u73AF\u5883\u4EE5\u786E\u5B9A\u5C06\u6587\u4EF6\u653E\u7F6E\u5728\u4F55\u5904\u3002\u6BD4\u5982\uFF0C\u82E5\u662F<code>npm_config_binroot</code>\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E\u4E3A<code>/home/user/bin</code>\uFF0C\u5219\u4E0D\u8981\u8BD5\u56FE\u5F80<code>/usr/local/bin</code>\u91CC\u5B89\u88C5\u53EF\u6267\u884C\u6587\u4EF6\u3002\u7528\u6237\u5982\u6B64\u8BBE\u7F6E\u53EF\u80FD\u662F\u6709\u7406\u7531\u7684\u3002</li><li>\u4E0D\u8981\u4EE5<code>sudo</code>\u524D\u7F00\u6267\u884C\u4F60\u7684\u811A\u672C\u547D\u4EE4\u3002\u82E5\u662F\u56E0\u4E3A\u4E00\u4E9B\u539F\u56E0\u9700\u8981<code>root</code>\u6743\u9650\uFF0C\u4E14\u56E0\u4E3A\u6CA1\u6709<code>root</code>\u6743\u9650\u800C\u5931\u8D25\uFF0C\u5219\u7528\u6237\u5C06\u6839\u636E\u63D0\u793A\u5207\u6362\u6743\u9650\u6765\u6267\u884C<code>npm</code>\u547D\u4EE4\u3002</li><li>\u4E0D\u8981\u4F7F\u7528<code>install</code>\u811A\u672C\u3002\u4F7F\u7528\u4E00\u4E2A<code>.gyp</code>\u6587\u4EF6\u6765\u7F16\u8BD1\uFF0C\u5176\u4ED6\u4EFB\u4F55\u60C5\u51B5\u90FD\u4F7F\u7528<code>prepublish</code>\u3002\u4F60\u51E0\u4E4E\u5E94\u8BE5\u4ECE\u6765\u4E0D\u8981\u660E\u786E\u5730\u8BBE\u7F6E<code>preinstall</code>\u6216<code>install</code>\u811A\u672C\u3002\u82E5\u662F\u4F60\u8BBE\u7F6E\u4E86\uFF0C\u8BF7\u8003\u8651\u4E0B\u662F\u5426\u6709\u5176\u4ED6\u7684\u9009\u62E9\u3002\u552F\u4E00\u5408\u7406\u5730\u4F7F\u7528<code>install</code>\u6216<code>preinstall</code>\u811A\u672C\uFF0C\u662F\u4E3A\u4E86\u8981\u5728\u76EE\u6807\u4F53\u7CFB\u7ED3\u6784\u91CC\u5FC5\u987B\u8981\u5B8C\u6210\u67D0\u9879\u7F16\u8BD1\u7684\u60C5\u51B5\u4E0B\u3002</li>", 3);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u8865\u5145\u77E5\u8BC6",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8865\u5145\u77E5\u8BC6",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8865\u5145\u77E5\u8BC6")
], -1);
const _hoisted_94 = /* @__PURE__ */ createTextVNode("Reference: ");
const _hoisted_95 = {
  href: "http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_96 = /* @__PURE__ */ createTextVNode("\u962E\u4E00\u5CF0 - npm scripts \u4F7F\u7528\u6307\u5357");
const _hoisted_97 = /* @__PURE__ */ createStaticVNode('<h3 id="npm-run" tabindex="-1"><a class="header-anchor" href="#npm-run" aria-hidden="true">#</a> npm run</h3><p>\u4E0D\u5E26\u53C2\u6570\u6267\u884C<code>npm run</code>\u547D\u4EE4\uFF0C\u53EF\u4EE5\u67E5\u770B\u5F53\u524D\u9879\u76EE\u7684\u6240\u6709<code>npm</code>\u811A\u672C\u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u279C  blog git:<span class="token punctuation">(</span>master<span class="token punctuation">)</span> <span class="token function">npm</span> run\nLifecycle scripts included <span class="token keyword">in</span> blog:\n  start\n    <span class="token function">npm</span> run dev\n\navailable via <span class="token variable"><span class="token variable">`</span><span class="token function">npm</span> run-script<span class="token variable">`</span></span><span class="token builtin class-name">:</span>\n  dev\n    vuepress dev docs\n  build\n    vuepress build docs\n  deploy\n    <span class="token function">sh</span> deploy.sh\n  eslint\n    <span class="token function">sh</span> eslint.sh\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="npm-run-env" tabindex="-1"><a class="header-anchor" href="#npm-run-env" aria-hidden="true">#</a> npm run env</h3><p>\u4F60\u53EF\u4EE5\u8FD0\u884C<code>npm run env</code>\uFF08\u7C7B Unix \u4E0B\uFF09\u6216<code>npm run env-windows</code>\uFF08Windows \u4E0B\uFF09\u67E5\u770B\u6240\u6709\u7684\u73AF\u5883\u53D8\u91CF\u3002</p><h3 id="npm-scripts-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#npm-scripts-\u53C2\u6570" aria-hidden="true">#</a> npm scripts \u53C2\u6570</h3><h4 id="\u65B9\u5F0F\u4E00" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E00" aria-hidden="true">#</a> \u65B9\u5F0F\u4E00</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node version.js -v ${V}&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6267\u884C\u6B64\u884C\u547D\u4EE4\uFF0C\u5B9E\u9645\u6267\u884C\u7684\u662F node version.js -v 123456</span>\n<span class="token assign-left variable">V</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token function">npm</span> run build\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>', 9);
const _hoisted_106 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1: ");
const _hoisted_107 = {
  href: "https://www.zhihu.com/question/54471504/answer/139521430",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_108 = /* @__PURE__ */ createTextVNode("npm run \u6267\u884Cpackage.json\u4E2D\u7684scripts\u914D\u7F6E\u65F6\u5982\u4F55\u53C2\u6570\u4F20\u9012\uFF1F - \u8349\u4F9D\u5C71\u7684\u56DE\u7B54 - \u77E5\u4E4E");
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
    createBaseVNode("nav", _hoisted_5, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u63CF\u8FF0" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#prepublish-\u548C-prepare" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5E9F\u5F03\u8BF4\u660E" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4F7F\u7528\u793A\u4F8B" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u9ED8\u8BA4\u503C" }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7528\u6237" }, {
            default: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u73AF\u5883" }, {
            default: withCtx(() => [
              _hoisted_12
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#path" }, {
                default: withCtx(() => [
                  _hoisted_13
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#package-json-\u53D8\u91CF" }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u914D\u7F6E" }, {
                default: withCtx(() => [
                  _hoisted_15
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u7279\u6B8A-package-json-\u91CC\u7684-config-\u5BF9\u8C61" }, {
                default: withCtx(() => [
                  _hoisted_16
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u751F\u547D\u5468\u671F\u4E8B\u4EF6" }, {
                default: withCtx(() => [
                  _hoisted_17
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u793A\u4F8B" }, {
            default: withCtx(() => [
              _hoisted_18
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u9000\u51FA" }, {
            default: withCtx(() => [
              _hoisted_19
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u94A9\u5B50\u811A\u672C" }, {
            default: withCtx(() => [
              _hoisted_20
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6700\u4F73\u5B9E\u8DF5" }, {
            default: withCtx(() => [
              _hoisted_21
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u8865\u5145\u77E5\u8BC6" }, {
            default: withCtx(() => [
              _hoisted_22
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#npm-run" }, {
                default: withCtx(() => [
                  _hoisted_23
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#npm-run-env" }, {
                default: withCtx(() => [
                  _hoisted_24
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#npm-scripts-\u53C2\u6570" }, {
                default: withCtx(() => [
                  _hoisted_25
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u65B9\u5F0F\u4E00" }, {
                    default: withCtx(() => [
                      _hoisted_26
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
    _hoisted_27,
    createBaseVNode("p", null, [
      _hoisted_34,
      createBaseVNode("a", _hoisted_35, [
        _hoisted_36,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_37
    ]),
    _hoisted_38,
    createBaseVNode("ul", null, [
      _hoisted_83,
      createBaseVNode("li", null, [
        _hoisted_84,
        _hoisted_85,
        _hoisted_86,
        createBaseVNode("a", _hoisted_87, [
          _hoisted_88,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_89
      ]),
      _hoisted_90
    ]),
    _hoisted_93,
    createBaseVNode("p", null, [
      _hoisted_94,
      createBaseVNode("a", _hoisted_95, [
        _hoisted_96,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_97,
    createBaseVNode("p", null, [
      _hoisted_106,
      createBaseVNode("a", _hoisted_107, [
        _hoisted_108,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var npmScripts_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { npmScripts_html as default };
