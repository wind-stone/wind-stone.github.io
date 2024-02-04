import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u58F0\u660E\u6587\u4EF6",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u58F0\u660E\u6587\u4EF6",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u58F0\u660E\u6587\u4EF6")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u53C2\u8003\u6587\u6863");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u96F6\u6563\u77E5\u8BC6\u70B9");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5168\u5C40\u58F0\u660E\u6587\u4EF6");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5F15\u5165\u5168\u5C40\u58F0\u660E\u6587\u4EF6");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u6807\u51C6\u5E93");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u624B\u52A8\u5F15\u5165");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u63A8\u8350\u914D\u7F6E");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u7B2C\u4E09\u65B9\u58F0\u660E\u6587\u4EF6");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("@types \u6A21\u5757\u4E0B\u7684\u58F0\u660E\u6587\u4EF6");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u6A21\u5757\u7ED1\u5B9A\u7684\u58F0\u660E\u6587\u4EF6");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u4E3A\u7B2C\u4E09\u65B9\u6A21\u5757\u7F16\u5199\u58F0\u660E\u6587\u4EF6");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u6587\u7AE0\u91CC\u7684\u5176\u4ED6\u5185\u5BB9");
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u53C2\u8003\u6587\u6863",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u53C2\u8003\u6587\u6863",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u53C2\u8003\u6587\u6863")
], -1);
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u3010\u5F3A\u70C8\u63A8\u8350\u3011");
const _hoisted_17 = {
  href: "https://medium.com/jspoint/typescript-type-declaration-files-4b29077c43",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_18 = /* @__PURE__ */ createTextVNode("A quick introduction to \u201CType Declaration\u201D files and adding type support to your JavaScript packages");
const _hoisted_19 = /* @__PURE__ */ createStaticVNode('<h2 id="\u96F6\u6563\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#\u96F6\u6563\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> \u96F6\u6563\u77E5\u8BC6\u70B9</h2><ul><li>\u5E38\u89C4\u7684 TypeScript \u6587\u4EF6<code>.ts</code>\u65E2\u80FD\u5305\u542B\u503C\uFF0C\u4E5F\u80FD\u5305\u542B\u7C7B\u578B</li><li>\u58F0\u660E\u6587\u4EF6<code>.d.ts</code>\u91CC\u4EC5\u5305\u542B\u7C7B\u578B\u58F0\u660E\uFF0C\u800C\u4E0D\u80FD\u5305\u542B\u4EFB\u4F55\u503C\u3002\u8FD9\u4E9B\u58F0\u660E\u6587\u4EF6\u53EA\u662F\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u63D0\u4F9B\u5E2E\u52A9\uFF0C\u800C\u4E0D\u4F1A\u6210\u4E3A\u7F16\u8BD1\u4EA7\u51FA\u7684\u4E00\u90E8\u5206\u3002</li><li>\u4F60\u53EF\u4EE5\u4F7F\u7528<code>import</code>\u8BED\u53E5\u4ECE\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u91CC\u5F15\u5165\u7C7B\u578B\uFF0CTypeScript \u4F1A\u5728\u7F16\u8BD1\u65F6\u5C06\u6240\u6709<code>import</code>\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u7684\u8BED\u53E5\u90FD\u79FB\u9664\u6389\uFF0C\u56E0\u4E3A<code>import</code>\u58F0\u660E\u6587\u4EF6\u4E0D\u4F1A\u5305\u542B\u88AB\u7528\u4E8E\u8FD0\u884C\u65F6\u7684\u503C</li><li>\u82E5\u662F\u6A21\u5757\u6CA1\u6709\u63D0\u4F9B\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\uFF0C\u5219\u6BCF\u4E2A\u5F15\u5165\u7684\u503C\u90FD\u4F1A\u6709\u4E2A\u9ED8\u8BA4\u7C7B\u578B<code>any</code></li></ul><h2 id="\u5168\u5C40\u58F0\u660E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a> \u5168\u5C40\u58F0\u660E\u6587\u4EF6</h2><ul><li>\u5168\u5C40\u58F0\u660E\u6587\u4EF6\u4E0D\u9700\u8981\u663E\u793A\u5F15\u5165\uFF0C\u5C31\u53EF\u4EE5\u7528\u4E8E\u9879\u76EE\u91CC\u7684\u4EFB\u4F55\u5730\u65B9\u3002</li><li>\u5728\u5168\u5C40\u58F0\u660E\u6587\u4EF6\u4E2D\uFF0C\u662F\u4E0D\u5141\u8BB8\u51FA\u73B0<code>import</code>/<code>export</code>\u5173\u952E\u5B57\u7684\u3002\u4E00\u65E6\u51FA\u73B0\u4E86\uFF0C\u90A3\u4E48\u4ED6\u5C31\u4F1A\u88AB\u89C6\u4E3A\u4E00\u4E2A NPM \u5305\u6216 UMD \u5E93\uFF0C\u5C31\u4E0D\u518D\u662F\u5168\u5C40\u58F0\u660E\u6587\u4EF6\u4E86\u3002</li></ul><h3 id="\u5F15\u5165\u5168\u5C40\u58F0\u660E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165\u5168\u5C40\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a> \u5F15\u5165\u5168\u5C40\u58F0\u660E\u6587\u4EF6</h3><h4 id="\u6807\u51C6\u5E93" tabindex="-1"><a class="header-anchor" href="#\u6807\u51C6\u5E93" aria-hidden="true">#</a> \u6807\u51C6\u5E93</h4><p>\u6807\u51C6\u5E93\u662F\u4E00\u4E9B\u5185\u7F6E\u7684\u5168\u5C40\u58F0\u660E\u6587\u4EF6\u7684\u96C6\u5408\u3002TypeScript \u7F16\u8BD1\u5668\u901A\u8FC7\u7F16\u8BD1\u9009\u9879\u7684<code>lib</code>\u6216<code>target</code>\uFF08\u82E5<code>lib</code>\u672A\u63D0\u4F9B\uFF0C\u5219\u4F7F\u7528<code>target</code>\uFF09\u6765\u786E\u5B9A\u4F7F\u7528\u54EA\u4E9B\u6807\u51C6\u5E93\uFF0C\u5E76\u5C06\u6807\u51C6\u5E93\u7684\u5168\u5C40\u58F0\u660E\u6587\u4EF6\u9690\u5F0F\u5BFC\u5165\uFF0C\u5E76\u5BF9\u6BCF\u4E00\u4E2A TypeScript \u9879\u76EE\u751F\u6548\u3002</p><h4 id="\u624B\u52A8\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u5F15\u5165" aria-hidden="true">#</a> \u624B\u52A8\u5F15\u5165</h4>', 8);
const _hoisted_27 = /* @__PURE__ */ createTextVNode("\u82E5\u662F\u60F3\u624B\u52A8\u5F15\u5165\u5168\u5C40\u58F0\u660E\u6587\u4EF6\uFF0C\u6211\u4EEC\u9700\u8981\u8BBE\u7F6E\u7F16\u8BD1\u9009\u9879");
const _hoisted_28 = {
  href: "https://www.typescriptlang.org/tsconfig#typeRoots",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = /* @__PURE__ */ createTextVNode("typeRoots");
const _hoisted_30 = /* @__PURE__ */ createTextVNode("\u6216");
const _hoisted_31 = {
  href: "https://www.typescriptlang.org/tsconfig#types",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_32 = /* @__PURE__ */ createTextVNode("types");
const _hoisted_33 = /* @__PURE__ */ createTextVNode("\uFF0C\u4EE5\u544A\u77E5 TypeScript \u7F16\u8BD1\u5668\u5982\u4F55\u83B7\u53D6\u8FD9\u4E9B\u624B\u52A8\u5F15\u5165\u7684\u5168\u5C40\u58F0\u660E\u6587\u4EF6\u3002");
const _hoisted_34 = /* @__PURE__ */ createStaticVNode('<p>\u82E5\u4E0D\u8BBE\u7F6E\u7F16\u8BD1\u9009\u9879<code>typeRoots</code>\u6216<code>types</code>\uFF0C\u6240\u6709<code>node_modules/@types/</code>\u76EE\u5F55\u91CC\u7684\u58F0\u660E\u6587\u4EF6\u90FD\u4F1A\u88AB\u5F15\u5165\uFF0C\u5305\u62EC\uFF1A</p><ul><li><code>./node_modules/@types/</code></li><li><code>../node_modules/@types/</code></li><li><code>../../node_modules/@types/</code></li><li>...</li></ul><p>\u82E5\u662F\u6307\u5B9A\u4E86<code>typeRoots</code>\u6216<code>types</code>\uFF0C\u53EA\u4F1A\u5F15\u5165<code>typeRoots</code>\u6216<code>types</code>\u6307\u5B9A\u7684\u58F0\u660E\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u5F15\u5165<code>node_modules/@types/</code>\u76EE\u5F55\u91CC\u7684\u58F0\u660E\u6587\u4EF6\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p><code>typeRoots</code>\u914D\u7F6E\u4E00\u4E2A\u8DEF\u5F84\u5217\u8868\uFF0C\u8FD9\u4E9B\u8DEF\u5F84\u4E0B\u7684\u5305\u90FD\u5C06\u4F5C\u4E3A\u58F0\u660E\u5305\u88AB\u9690\u5F0F\u5F15\u5165\u3002</p><p><code>types</code>\u914D\u7F6E\u4E00\u4E2A\u5305\u7684\u5217\u8868\uFF0C\u8FD9\u4E9B\u5305\u90FD\u5C06\u4F5C\u4E3A\u58F0\u660E\u5305\u88AB\u9690\u5F0F\u5F15\u5165\u3002</p><p>\u5C24\u5176\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u65E0\u8BBA\u662F\u8BBE\u7F6E<code>typeRoots</code>\u8FD8\u662F<code>types</code>\uFF0C\u6700\u7EC8\u88AB\u5F15\u5165\u7684\u90FD\u662F\u58F0\u660E\u5305\uFF08<code>declaration package</code>\uFF09\uFF0C\u5373\u5F15\u5165\u7684\u662F\u8BE5\u5305<code>package.json</code>\u7684<code>typings</code>\u5B57\u6BB5\u6307\u5B9A\u7684<code>.d.ts</code>\u6587\u4EF6\u6216\u5305\u6839\u76EE\u5F55\u4E0B\u7684<code>index.d.ts</code>\u6587\u4EF6\uFF0C\u800C\u4E0D\u662F\u8BE5\u5305\u4E0B\u7684\u6240\u6709<code>.d.ts</code>\u6587\u4EF6\u3002</p></div><h5 id="\u63A8\u8350\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u63A8\u8350\u914D\u7F6E" aria-hidden="true">#</a> \u63A8\u8350\u914D\u7F6E</h5><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// tsconfig.json</span>\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;./types&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u81EA\u5B9A\u4E49\u7684\u5168\u5C40\u58F0\u660E\u6587\u4EF6\u7684\u76EE\u5F55\uFF0C\u91CC\u9762\u7684\u6BCF\u4E2A\u5B50\u6587\u4EF6\u5939\u90FD\u662F\u4E00\u4E2A\u58F0\u660E\u6A21\u5757</span>\n      <span class="token string">&quot;node_modules/@types/&quot;</span> <span class="token comment">// \u56E0\u4E3A\u9ED8\u8BA4\u7684 node_modules/@types/ \u88AB typeRoots \u9009\u9879\u8986\u76D6\u4E86\uFF0C\u56E0\u6B64\u82E5\u662F\u60F3\u4F7F\u7528 node_modules \u91CC\u7684\u7B2C\u4E09\u65B9\u6A21\u5757\u7684\u58F0\u660E\u6587\u4EF6\uFF0C\u9700\u8981\u52A0\u4E0A\u8FD9\u4E00\u884C</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u7B2C\u4E09\u65B9\u58F0\u660E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u65B9\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a> \u7B2C\u4E09\u65B9\u58F0\u660E\u6587\u4EF6</h2><h3 id="types-\u6A21\u5757\u4E0B\u7684\u58F0\u660E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#types-\u6A21\u5757\u4E0B\u7684\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a> @types \u6A21\u5757\u4E0B\u7684\u58F0\u660E\u6587\u4EF6</h3><p>DefinitelyTyped \u793E\u533A\u5C06\u4E3A\u5982\u4E0B\u7684\u5E93\u6216\u5E73\u53F0\u7F16\u5199\u58F0\u660E\u5305\uFF0C\u8FD9\u4E9B\u58F0\u660E\u5305\u5C06\u5728 NPM \u7684<code>@types</code>\u7EC4\u7EC7\u4E0B\u53D1\u5E03\u3002</p><ul><li>\u539F\u4EE3\u7801\u672A\u4F7F\u7528 TypeScript \u7F16\u5199\u7684\u5E93\uFF0C\u6BD4\u5982<code>lodash</code></li><li><code>node</code>\u8FD9\u79CD\u6709\u81EA\u5DF1\u5168\u5C40 API\uFF08<code>cosnole.log</code>\u3001<code>require</code>\u7B49\uFF09\u548C\u6807\u51C6\u5E93\u6A21\u5757\uFF08<code>fs</code>\u3001<code>path</code>\u7B49\uFF09\u7684 JavaScript \u8FD0\u884C\u65F6</li></ul><p>\u56E0\u6B64\u5728\u4F7F\u7528\u65F6\uFF0C\u9700\u8981\u8FD9\u6837\u5B89\u88C5\u5E93\u7684\u58F0\u660E\u5305\uFF1A<code>npm install -D @types/lodash</code></p><h3 id="\u6A21\u5757\u7ED1\u5B9A\u7684\u58F0\u660E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u7ED1\u5B9A\u7684\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a> \u6A21\u5757\u7ED1\u5B9A\u7684\u58F0\u660E\u6587\u4EF6</h3><p>\u6BCF\u4E2A NPM \u5305\u7684\u76EE\u5F55\u7ED3\u6784\u4E00\u822C\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>person\n  \u2514\u2500\u2500 person.d.ts\n  \u251C\u2500\u2500 package.json\n  \u2514\u2500\u2500 person.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>person</code>\u5305\u91CC\u5305\u542B\u4E86<code>package.json</code>\u6587\u4EF6\uFF0C\u5176\u4E2D<code>main</code>\u5B57\u6BB5\u6307\u5411\u4E86\u5305\u76EE\u5F55\u91CC\u7684<code>person.js</code>\u6587\u4EF6\u3002\u5F53\u5728\u8FD0\u884C\u671F\u95F4\u9047\u5230\u9879\u76EE\u5176\u4ED6\u6A21\u5757\u91CC\u5B58\u5728<code>import &#39;person&#39;</code>\u8BED\u53E5\u65F6\uFF0C\u8FD0\u884C\u65F6\uFF08<code>runtime</code>\uFF09\u5C06\u6267\u884C<code>person.js</code>\u6587\u4EF6\u5C06\u88AB\u7ED3\u679C\u5BFC\u5165\u5230\u5176\u4ED6\u6A21\u5757\u3002</p><p>\u82E5\u662F TypeScript \u7684\u7F16\u8BD1\u9009\u9879<code>allowJs</code>\u8BBE\u7F6E\u4E3A<code>true</code>\uFF0C<code>person.js</code>\u6587\u4EF6\u4E5F\u4F1A\u88AB TypeScript \u7528\u4E8E\u5206\u6790\u5305\u7684 API\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// person/package.json</span>\n<span class="token punctuation">{</span>\n    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;person&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./person.js&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;typings&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./person.d.ts&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>typings</code>\uFF08\u6216<code>types</code>\uFF09\u5B57\u6BB5\u6307\u5411\u4E00\u4E2A\u58F0\u660E\u6587\u4EF6\uFF08<code>.d.ts</code>\uFF09\uFF0C\u8FD9\u4E2A\u58F0\u660E\u6587\u4EF6\u5C06\u4EE3\u66FF<code>main</code>\u5B57\u6BB5\u6307\u5411\u7684\u6587\u4EF6\uFF0C\u6765\u63D0\u4F9B\u7ED9 TypeScript \u7F16\u8BD1\u5668\u53BB\u4E86\u89E3\u8BE5\u5305\u7684 API\u3002</p><h3 id="\u4E3A\u7B2C\u4E09\u65B9\u6A21\u5757\u7F16\u5199\u58F0\u660E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u7B2C\u4E09\u65B9\u6A21\u5757\u7F16\u5199\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a> \u4E3A\u7B2C\u4E09\u65B9\u6A21\u5757\u7F16\u5199\u58F0\u660E\u6587\u4EF6</h3><p>\u5047\u8BBE\u7B2C\u4E09\u65B9\u6A21\u5757\u6CA1\u6709\u63D0\u4F9B\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u9879\u76EE\u4E3A\u8BE5\u6A21\u5757\u7F16\u5199\u4E00\u4E2A\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u3002\uFF08\u5F53\u7136\uFF0C\u6700\u597D\u7684\u65B9\u5F0F\u662F\u7F16\u5199\u540E\u53D1\u5E03\u5230 NPM \u7684<code>@types</code>\u91CC\uFF09</p><p>\u7B2C\u4E09\u65B9\u6A21\u5757\u7684\u5185\u5BB9\u4E3A:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// human/index.js</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Human</span> <span class="token punctuation">{</span>\n    <span class="token keyword">static</span> className <span class="token operator">=</span> <span class="token string">&#39;Human&#39;</span><span class="token punctuation">;</span>\n\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> firstName<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span> lastName<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">getHeightInCm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter">human</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>human<span class="token punctuation">.</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>human<span class="token punctuation">.</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token string">&#39;v1.0.0&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u9879\u76EE\u6839\u76EE\u5F55\u4E0B types/human/index.d.ts</span>\n<span class="token comment">// \u8FD9\u4E2A\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u5728\u522B\u7684\u76EE\u5F55\u4E0B\uFF0C\u6BD4\u5982 types/human-type/index.d.ts\uFF0C\u76EE\u5F55\u7684\u540D\u79F0\u4E0D\u4E00\u5B9A\u8981\u662F human\uFF0C\u53EA\u8981\u5728\u58F0\u660E\u6A21\u5757\u65F6\uFF0C\u6A21\u5757\u540D\u4E3A human \u5373\u53EF</span>\n<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&quot;human&quot;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// export a class</span>\n  <span class="token class-name"><span class="token keyword">export</span></span> <span class="token keyword">class</span> <span class="token class-name">Human</span> <span class="token punctuation">{</span>\n    <span class="token keyword">static</span> className<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">getHeightInCm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// export default value</span>\n  <span class="token keyword">var</span> version<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> version<span class="token punctuation">;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span>Human<span class="token operator">:</span> Human <span class="token operator">|</span> Student<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u5728\u4E0A\u8FF0\u7684\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u91CC\uFF0C<code>declare module &quot;&lt;module-name&gt;&quot;</code>\u58F0\u660E\u4E86\u4E00\u4E2A\u73AF\u5883\u6A21\u5757\uFF0C\u8FD9\u610F\u5473\u7740\u544A\u8BC9 TypeScript \u7F16\u8BD1\u5668\u8FD9\u4E2A\u6A21\u5757\u5728\u8FD0\u884C\u65F6\u662F\u5B58\u5728\u7684\u3002</p><p>\u6700\u540E\uFF0C\u5C06<code>types</code>\u76EE\u5F55\u6DFB\u52A0\u5230<code>tsconfig.json</code>\u7684<code>typeRoots</code>\u91CC\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// tsconfig.json</span>\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;./types&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u81EA\u5B9A\u4E49\u7684\u5168\u5C40\u58F0\u660E\u6587\u4EF6\u7684\u76EE\u5F55\uFF0C\u91CC\u9762\u7684\u6BCF\u4E2A\u5B50\u6587\u4EF6\u5939\u90FD\u662F\u4E00\u4E2A\u58F0\u660E\u6A21\u5757</span>\n      <span class="token string">&quot;node_modules/@types/&quot;</span> <span class="token comment">// \u56E0\u4E3A\u9ED8\u8BA4\u7684 node_modules/@types/ \u88AB typeRoots \u9009\u9879\u8986\u76D6\u4E86\uFF0C\u56E0\u6B64\u82E5\u662F\u60F3\u4F7F\u7528 node_modules \u91CC\u7684\u7B2C\u4E09\u65B9\u6A21\u5757\u7684\u58F0\u660E\u6587\u4EF6\uFF0C\u9700\u8981\u52A0\u4E0A\u8FD9\u4E00\u884C</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u6587\u7AE0\u91CC\u7684\u5176\u4ED6\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u6587\u7AE0\u91CC\u7684\u5176\u4ED6\u5185\u5BB9" aria-hidden="true">#</a> \u6587\u7AE0\u91CC\u7684\u5176\u4ED6\u5185\u5BB9</h2>', 28);
const _hoisted_62 = {
  href: "https://medium.com/jspoint/typescript-type-declaration-files-4b29077c43",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_63 = /* @__PURE__ */ createTextVNode("A quick introduction to \u201CType Declaration\u201D files and adding type support to your JavaScript packages");
const _hoisted_64 = /* @__PURE__ */ createTextVNode("\u91CC\u8FD8\u6709\u5982\u4E0B\u5185\u5BB9\uFF1A");
const _hoisted_65 = /* @__PURE__ */ createStaticVNode("<ul><li>\u6A21\u5757\u5316\u58F0\u660E\uFF08<code>Modularizing Declarations</code>\uFF09\uFF0C\u5373\u5C06\u58F0\u660E\u5199\u5728\u591A\u4E2A\u6587\u4EF6\u91CC\u6700\u7EC8\u5408\u5E76\u6210\u4E00\u4E2A\u58F0\u660E\u6587\u4EF6\u5BF9\u5916\u63D0\u4F9B\u3002</li><li>\u73AF\u5883\u58F0\u660E\uFF08<code>Ambient declarations</code>\uFF09\uFF0C\u5373\u5C06\u53EA\u53EF\u80FD\u51FA\u73B0\u5728\u8FD0\u884C\u65F6\u7684\u73AF\u5883\u91CC\u7684\u503C\u5982<code>window</code>\u4F5C\u4E3A\u73AF\u5883\u58F0\u660E\uFF0C\u544A\u77E5 TypeScript \u7F16\u8BD1\u5668\u4EE5\u514D\u62A5\u9519\u3002</li><li>\u547D\u540D\u7A7A\u95F4\u58F0\u660E\uFF08<code>Namespaced Declarations</code>\uFF09\uFF0C\u5C06\u58F0\u660E\u7684\u7C7B\u578B\u90FD\u653E\u7F6E\u5728\u547D\u540D\u7A7A\u95F4\u91CC\uFF0C\u9632\u6B62\u88AB\u5176\u4ED6\u58F0\u660E\u5305\u8986\u76D6\u6216\u5F71\u54CD\u5176\u4ED6\u58F0\u660E\u5305\u3002\u547D\u4EE4\u7A7A\u95F4\u662F\u5168\u5C40\u53EF\u7528\u7684\u3002</li><li>\u6269\u5C55\u58F0\u660E\uFF08<code>Extending Declarations</code>\uFF09\uFF0C\u5373\u9488\u5BF9\u5168\u5C40\u5DF2\u7ECF\u5B58\u5728\u7684<code>interface</code>\u548C<code>namespace</code>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u91CD\u65B0\u58F0\u660E\u6765\u6269\u5C55\u5B83\u4EEC\u3002 <ul><li>\u6CE8\u610F\uFF0C\u82E5\u662F\u5728\u6A21\u5757\u91CC\u5BF9\u5168\u5C40\u7C7B\u578B\u58F0\u660E\u8FDB\u884C\u6269\u5C55\uFF0C\u5219\u6269\u5C55\u4F1A\u5931\u6548\uFF0C\u4E14\u6269\u5C55\u7684\u58F0\u660E\u5728\u6A21\u5757\u5185\u4F1A\u8986\u76D6\u5168\u5C40\u7C7B\u578B\u58F0\u660E\uFF0C\u5728\u8BE5\u6A21\u5757\u4E4B\u5916\uFF0C\u5168\u5C40\u7C7B\u578B\u58F0\u660E\u4E0D\u53D7\u5F71\u54CD\u3002</li><li>\u82E5\u662F\u60F3\u5728\u6A21\u5757\u91CC\u5BF9\u5168\u5C40\u7C7B\u578B\u58F0\u660E\u8FDB\u884C\u6269\u5C55\uFF0C\u8981\u4F7F\u7528<code>declare global</code>\u3002</li><li><code>global</code>\u5173\u952E\u5B57\u6307\u5411\u4E86\u4E00\u4E2A TypeScript \u91CC\u9690\u5F0F\u5B9A\u4E49\u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u5305\u542B\u4E86\u6240\u6709\u7684\u5168\u5C40\u503C\u5305\u62EC\u6D4F\u89C8\u5668\u91CC\u7684<code>window</code>\u548C Node.js \u91CC\u7684<code>process</code>\u3002</li></ul></li><li>\u672C\u5730\u7C7B\u578B\u58F0\u660E\uFF08<code>Local Type Declarations</code>\uFF09\uFF0C\u5373<code>.ts</code>\u548C<code>.d.ts</code>\u6587\u4EF6\u5728\u4E00\u5757\uFF0C\u53EF\u4EE5\u5728<code>.ts</code>\u91CC<code>import &#39;.d.ts&#39;</code>\u3002</li></ul>", 1);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u53C2\u8003\u6587\u6863" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u96F6\u6563\u77E5\u8BC6\u70B9" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5168\u5C40\u58F0\u660E\u6587\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5F15\u5165\u5168\u5C40\u58F0\u660E\u6587\u4EF6" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u6807\u51C6\u5E93" }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u624B\u52A8\u5F15\u5165" }, {
                    default: withCtx(() => [
                      _hoisted_8
                    ]),
                    _: 1
                  }),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createVNode(_component_RouterLink, { to: "#\u63A8\u8350\u914D\u7F6E" }, {
                        default: withCtx(() => [
                          _hoisted_9
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
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7B2C\u4E09\u65B9\u58F0\u660E\u6587\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#types-\u6A21\u5757\u4E0B\u7684\u58F0\u660E\u6587\u4EF6" }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6A21\u5757\u7ED1\u5B9A\u7684\u58F0\u660E\u6587\u4EF6" }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4E3A\u7B2C\u4E09\u65B9\u6A21\u5757\u7F16\u5199\u58F0\u660E\u6587\u4EF6" }, {
                default: withCtx(() => [
                  _hoisted_13
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6587\u7AE0\u91CC\u7684\u5176\u4ED6\u5185\u5BB9" }, {
            default: withCtx(() => [
              _hoisted_14
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_15,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_16,
        createBaseVNode("a", _hoisted_17, [
          _hoisted_18,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_19,
    createBaseVNode("p", null, [
      _hoisted_27,
      createBaseVNode("a", _hoisted_28, [
        _hoisted_29,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_30,
      createBaseVNode("a", _hoisted_31, [
        _hoisted_32,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_33
    ]),
    _hoisted_34,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_62, [
        _hoisted_63,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_64
    ]),
    _hoisted_65,
    createVNode(_component_global_config)
  ], 64);
}
var declarationFiles_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { declarationFiles_html as default };
