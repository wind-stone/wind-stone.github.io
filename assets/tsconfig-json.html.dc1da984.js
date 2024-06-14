import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "tsconfig-json",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#tsconfig-json",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" tsconfig.json")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u6839\u7EA7\u9009\u9879");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("types");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u7F16\u8BD1\u9009\u9879");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("outFile");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("paths");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("allowJs");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("checkJs");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("baseUrl");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("extends");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u3010\u5F3A\u70C8\u63A8\u8350\u3011");
const _hoisted_13 = {
  href: "https://medium.com/jspoint/typescript-compilation-the-typescript-compiler-4cb15f7244bc",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Understanding TypeScript\u2019s \u201CCompilation Process\u201D & the anatomy of \u201Ctsconfig.json\u201D file to configure TypeScript Compiler");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\uFF0C\u6587\u7AE0\u91CC\u6709\u5BF9");
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("code", null, "tsconfig.json", -1);
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u91CC\u6BCF\u4E00\u4E2A\u9009\u9879\u7684\u8BE6\u7EC6\u9610\u8FF0\u3002");
const _hoisted_18 = /* @__PURE__ */ createStaticVNode('<p>TypeScript \u7F16\u8BD1\u5668\u901A\u8FC7\u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6\uFF08\u9ED8\u8BA4\u662F<code>tsconfig.json</code>\uFF09\u6765\u67E5\u627E\u7528\u4E8E\u53C2\u4E0E\u7F16\u8BD1\u7684\u6587\u4EF6\u4EE5\u53CA\u786E\u5B9A\u5982\u4F55\u8F93\u51FA\u7F16\u8BD1\u540E\u7684\u6587\u4EF6\u3002</p><p>\u6267\u884C<code>tsc</code>\u547D\u4EE4\u65F6\uFF0C\u53EF\u901A\u8FC7<code>--project</code>\u6216<code>-p</code>\u6807\u5FD7\u6765\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u7684\u8DEF\u5F84\u4EE5\u4EE3\u66FF\u9ED8\u8BA4\u7684\u8DEF\u5F84<code>tsconfig.json</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tsc -p ./tsconfig.prod.json\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>tsconfig.json</code>\u6240\u5728\u7684\u76EE\u5F55\u79F0\u4E3A\u9879\u76EE\u7684\u6839\u76EE\u5F55\u3002</p><h2 id="\u6839\u7EA7\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u6839\u7EA7\u9009\u9879" aria-hidden="true">#</a> \u6839\u7EA7\u9009\u9879</h2><p>\u6839\u7EA7\u9009\u9879\u4E3B\u8981\u662F\u5173\u4E8E\u9759\u6001\u7C7B\u578B\u5206\u6790\u4EE5\u53CA\u786E\u5B9A\u54EA\u4E9B\u6587\u4EF6\u4F1A\u5305\u542B\u5728\u7F16\u8BD1\u8FC7\u7A0B\u91CC\u7684\u914D\u7F6E\uFF0C\u8FD9\u4E9B\u9009\u9879\u90FD\u662F\u4E0E<code>compilerOptions</code>\u9009\u9879\u5E73\u7EA7\u7684\u3002</p><ul><li><code>files</code>\u548C<code>include</code>\u9009\u9879\u91CC\u7684\u6587\u4EF6\u90FD\u5305\u542B\u5728\u7F16\u8BD1\u8FC7\u7A0B\u91CC\uFF0C\u800C<code>exclude</code>\u9009\u9879\u91CC\u7684\u6587\u4EF6\u5C06\u4E0D\u4F1A\u5305\u542B\u5728\u7F16\u8BD1\u8FC7\u7A0B\u91CC\u3002</li><li>\u6E90\u7801\u91CC\u901A\u8FC7<code>import</code>\u8BED\u53E5\u5BFC\u5165\u7684\u6A21\u5757\uFF0C\u4F1A\u81EA\u52A8\u5305\u542B\u5728\u7F16\u8BD1\u8FC7\u7A0B\u91CC\uFF0C\u800C\u4E0D\u4F1A\u53D7\u5230<code>files</code>\u3001<code>include</code>\u3001<code>exclude</code>\u9009\u9879\u7684\u5F71\u54CD\u3002</li></ul><h3 id="types" tabindex="-1"><a class="header-anchor" href="#types" aria-hidden="true">#</a> types</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// tsconfig.json</span>\n<span class="token punctuation">{</span>\n    <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;moment&quot;</span> <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>TypeScript \u5C06\u4ECE<code>&lt;type-root&gt;</code>\u76EE\u5F55\u91CC\u81EA\u52A8\u5F15\u5165<code>types</code>\u9009\u9879\u91CC\u7684\u58F0\u660E\u6587\u4EF6\uFF0C\u6BD4\u5982<code>&lt;type-root&gt;/moment</code>\u3002</li><li>\u9488\u5BF9\u901A\u8FC7<code>import</code>\u8BED\u53E5\u624B\u52A8\u5F15\u5165\u7684\u5305\uFF0C\u5373\u4F7F\u8BE5\u5305\u5E76\u6CA1\u6709\u5305\u542B\u5728<code>types</code>\u9009\u9879\u91CC\uFF0CTypeScript \u4E5F\u4F1A\u5F15\u5165\u8BE5\u5305\u7684\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u3002</li></ul><h2 id="\u7F16\u8BD1\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u9009\u9879" aria-hidden="true">#</a> \u7F16\u8BD1\u9009\u9879</h2><p>\u7F16\u8BD1\u9009\u9879\u91CC\u7684\u5404\u4E2A\u914D\u7F6E\u9009\u9879\uFF0C\u7528\u4E8E\u8BBE\u7F6E TypeScript \u7F16\u8BD1\u5668\u5982\u4F55\u5904\u7406\u8F93\u5165\u6587\u4EF6\uFF0C\u6BD4\u5982\uFF1A</p><ul><li>\u8F93\u51FA\u6587\u4EF6\u653E\u7F6E\u5728\u54EA\u513F</li><li>\u5982\u4F55\u67E5\u627E\u6A21\u5757</li><li>\u662F\u5426\u9700\u8981\u8F93\u51FA\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u3001SourceMap \u7B49</li><li>\u7B49\u7B49</li></ul><h3 id="outfile" tabindex="-1"><a class="header-anchor" href="#outfile" aria-hidden="true">#</a> outFile</h3><p>\u82E5\u662F\u8F93\u51FA\u7684\u6A21\u5757\u7CFB\u7EDF\u4E0D\u662F<code>None</code>\u3001<code>System</code>\u3001<code>AMD</code>\uFF0C\u800C\u662F<code>ES6</code>\u3001<code>CommonJS</code>\u7B49\uFF0CTypeScript \u7F16\u8BD1\u5668\u5C06\u4E0D\u4F1A\u4EA7\u751F\u4E00\u4E2A\u6253\u5305\u6587\u4EF6\u3002</p><p>\u6587\u4EF6\u7684\u5F15\u5165\u4F4D\u7F6E\u95EE\u9898\uFF0C\u5BFC\u81F4<code>CommonJS</code>\u548C<code>ES6</code>\u6A21\u5757\u4E0D\u80FD\u6253\u5305\u6210\u4E00\u4E2A\u6587\u4EF6\u3002\u82E5\u662F\u7F16\u8BD1\u540E\u7684<code>x.js</code>\u91CC\u5B58\u5728\u4E00\u884C\u5BFC\u5165\u8BED\u53E5<code>require(&#39;./src/y&#39;)</code>\uFF0C\u8FD9\u8868\u660E\u4EE3\u7801\u8FD0\u884C\u65F6\u5C06\u4F1A\u4ECE\u76F8\u5BF9\u4E8E<code>x.js</code>\u7684<code>dir</code>\u76EE\u5F55\u5BFC\u5165<code>y.js</code>\u6587\u4EF6\u3002\u4F46\u82E5\u662F\u8FD9\u4E9B\u6587\u4EF6\u90FD\u6253\u5305\u5230\u5355\u4E2A\u6587\u4EF6\u91CC\uFF0C\u7531\u4E8E<code>x.js</code>\u548C<code>y.js</code>\u73B0\u5728\u5904\u4E8E\u540C\u4E00\u4E2A\u76EE\u5F55\u4E0B\u7684\u540C\u4E00\u4E2A\u6587\u4EF6\u91CC\uFF0C\u5C06\u65E0\u6CD5\u5B8C\u6210\u4ECE<code>dir</code>\u76EE\u5F55\u5BFC\u5165<code>y.js</code>\u6587\u4EF6\u3002\u50CF Webpack \u8FD9\u6837\u7684\u6253\u5305\u5668\u4F1A\u5728\u6700\u7EC8\u7684\u6253\u5305\u6587\u4EF6\u91CC\u6DFB\u52A0\u989D\u5916\u7684\u6A21\u5757\u52A0\u8F7D\u4EE3\u7801\u6765\u5B8C\u6210\u8FD9\u4E2A\u529F\u80FD\uFF0C\u4F46\u662F TypeScript \u6CA1\u6709\u8FD9\u4E48\u505A\u3002</p><p>wind-stone \u6CE8\u91CA: \u4ECE\u6280\u672F\u4E0A\u6765\u8BF4\uFF0CTypeScript \u4E5F\u80FD\u5B9E\u73B0\u4E0E Webpack \u7C7B\u4F3C\u7684\u6253\u5305\u529F\u80FD\uFF0C\u4F46\u662F TypeScript \u7684\u5B9A\u4F4D\u4E0D\u662F\u6253\u5305\u5668\uFF0C\u56E0\u6B64\u5E76\u6CA1\u6709\u5B9E\u73B0\u8FD9\u4E9B\u529F\u80FD\u3002</p><h3 id="paths" tabindex="-1"><a class="header-anchor" href="#paths" aria-hidden="true">#</a> paths</h3><p><code>paths</code>\u4F5C\u6A21\u5757\u6620\u5C04\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\u6700\u7EC8\u7F16\u8BD1\u540E\u6587\u4EF6\u91CC\u5F15\u5165\u7684\u6A21\u5757\u540D\u79F0\u662F\u6620\u5C04\u524D\u7684\u540D\u79F0\u3002</p><p>\u9879\u76EE\u76EE\u5F55\u7ED3\u6784:</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>project\n\u251C\u2500\u2500 a.ts\n\u2514\u2500\u2500 src/\n   \u2514\u2500\u2500 b.ts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// tsconfig.json</span>\n<span class="token punctuation">{</span>\n    <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;box&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;src/b&quot;</span> <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// a.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> b <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;box&#39;</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> b <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// src/b.ts</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// dist/a.js`</span>\n<span class="token keyword">var</span> box_1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;box&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>box_1<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>', 25);
const _hoisted_43 = /* @__PURE__ */ createTextVNode("\u6253\u5305\u540E\u7684");
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("code", null, "dist/a.js", -1);
const _hoisted_45 = /* @__PURE__ */ createTextVNode("\u6587\u4EF6\u91CC\uFF0C");
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("code", null, "require", -1);
const _hoisted_47 = /* @__PURE__ */ createTextVNode("\u7684\u4ECD\u7136\u662F");
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("code", null, "box", -1);
const _hoisted_49 = /* @__PURE__ */ createTextVNode("\uFF0C\u800C\u4E0D\u662F");
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("code", null, "src/b", -1);
const _hoisted_51 = /* @__PURE__ */ createTextVNode("\u3002\u89E3\u51B3\u65B9\u6848\u53EF\u53C2\u89C1");
const _hoisted_52 = {
  href: "https://medium.com/jspoint/typescript-compilation-the-typescript-compiler-4cb15f7244bc",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_53 = /* @__PURE__ */ createTextVNode("Understanding TypeScript\u2019s \u201CCompilation Process\u201D & the anatomy of \u201Ctsconfig.json\u201D file to configure TypeScript Compiler");
const _hoisted_54 = /* @__PURE__ */ createTextVNode("\u7684");
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("code", null, "paths", -1);
const _hoisted_56 = /* @__PURE__ */ createTextVNode("\u7AE0\u8282\u3002");
const _hoisted_57 = /* @__PURE__ */ createStaticVNode('<h3 id="allowjs" tabindex="-1"><a class="header-anchor" href="#allowjs" aria-hidden="true">#</a> allowJs</h3><p><code>allowJs</code>\u7F16\u8BD1\u9009\u9879\u544A\u77E5 TypeScript \u7F16\u8BD1\u5668\u5C06<code>.js</code>\u6587\u4EF6\u5305\u542B\u5728\u7F16\u8BD1\u8FC7\u7A0B\u91CC\uFF0C\u8FD9\u5C06\u5E94\u7528\u5230<code>files</code>\u548C<code>include</code>\u9009\u9879\u4EE5\u53CA<code>import</code>\u8BED\u53E5\u91CC\u7684<code>.js</code>\u6587\u4EF6\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> xyz <span class="token keyword">from</span> <span class="token string">&#39;./xyz&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5F53\u5728<code>import</code>\u8BED\u53E5\u91CC\u5F15\u5165<code>xyz</code>\u6A21\u5757\u65F6\uFF0CTypeScript \u7F16\u8BD1\u5668\u4F1A\u67E5\u627E<code>./xyz.ts</code>\u3001<code>./xyz.d.ts</code>\u4EE5\u53CA<code>./xyz.js</code>\u6587\u4EF6\u3002</p><h3 id="checkjs" tabindex="-1"><a class="header-anchor" href="#checkjs" aria-hidden="true">#</a> checkJs</h3><p>\u8BBE\u7F6E<code>allowJs</code>\u4E3A<code>true</code>\uFF0C<code>.js</code>\u6587\u4EF6\u53EF\u4EE5\u5305\u542B\u5728\u7F16\u8BD1\u8FC7\u7A0B\u91CC\uFF0C\u4F46\u662F TypeScript \u7F16\u8BD1\u5668\u5E76\u4E0D\u4F1A\u5728\u7F16\u8BD1\u8FC7\u7A0B\u91CC\u5BF9<code>.js</code>\u6587\u4EF6\u91CC\u7684\u4EE3\u7801\u505A\u7C7B\u578B\u68C0\u67E5\u3002</p><p>\u8BBE\u7F6E<code>checkJs</code>\u4E3A<code>true</code>\uFF0CTypeScript \u7F16\u8BD1\u5668\u5C06\u5BF9<code>.js</code>\u6587\u4EF6\u505A\u7C7B\u578B\u68C0\u67E5\u3002</p><h3 id="baseurl" tabindex="-1"><a class="header-anchor" href="#baseurl" aria-hidden="true">#</a> baseUrl</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> world <span class="token keyword">from</span> <span class="token string">&#39;src/world&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5F53\u8BBE\u7F6E<code>baseUrl</code>\u65F6\uFF0C\u82E5<code>import</code>\u8BED\u97F3\u5F15\u5165\u4E86\u4E00\u4E2A\u975E\u76F8\u5BF9\u8DEF\u5F84\u7684\u6A21\u5757\u6BD4\u5982<code>src/world</code>\uFF0CTypeScript \u7F16\u8BD1\u5668\u4F1A\u9996\u5148\u5728<code>baseUrl</code>\u76EE\u5F55\u91CC\u5BFB\u627E<code>src/world</code>\u6A21\u5757\uFF0C\u5982\u679C\u627E\u4E0D\u5230\uFF0C\u624D\u4F1A\u53BB<code>typeRoots</code>\u8BBE\u7F6E\u7684\u76EE\u5F55\u91CC\uFF08\u6BD4\u5982<code>node_modules</code>\uFF09\u67E5\u627E\u3002</p><h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h3><p>\u4ECE\u5176\u4ED6<code>tsconfig.json</code>\u6587\u4EF6\u7EE7\u627F\u914D\u7F6E\u3002</p>', 12);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6839\u7EA7\u9009\u9879" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#types" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7F16\u8BD1\u9009\u9879" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#outfile" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#paths" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#allowjs" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#checkjs" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#baseurl" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#extends" }, {
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
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_12,
        createBaseVNode("a", _hoisted_13, [
          _hoisted_14,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_15,
        _hoisted_16,
        _hoisted_17
      ])
    ]),
    _hoisted_18,
    createBaseVNode("p", null, [
      _hoisted_43,
      _hoisted_44,
      _hoisted_45,
      _hoisted_46,
      _hoisted_47,
      _hoisted_48,
      _hoisted_49,
      _hoisted_50,
      _hoisted_51,
      createBaseVNode("a", _hoisted_52, [
        _hoisted_53,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_54,
      _hoisted_55,
      _hoisted_56
    ]),
    _hoisted_57,
    createVNode(_component_global_config)
  ], 64);
}
var tsconfigJson_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { tsconfigJson_html as default };
