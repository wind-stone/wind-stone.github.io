import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "npm-\u547D\u4EE4",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#npm-\u547D\u4EE4",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" NPM \u547D\u4EE4")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("npm config \u547D\u4EE4");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("npm config set");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("npm config get");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("npm config delete");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("npm config list");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("npm config edit");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("npm set/get");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("npm dist-tag");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u67E5\u770B\u5305\u7684\u53D1\u5E03 tag");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u6DFB\u52A0\u5305\u7684\u53D1\u5E03 tag");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u5220\u9664\u5305\u7684\u53D1\u5E03 tag");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u5220\u9664\u5DF2\u53D1\u5E03\u5305\u7684\u6307\u5B9A\u7248\u672C");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("npm view");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("npm view package@version");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("npm view package versions");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("npm view package repository.url");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("npm view package --json");
const _hoisted_20 = /* @__PURE__ */ createTextVNode("npm link");
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "npm-config-\u547D\u4EE4",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#npm-config-\u547D\u4EE4",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" npm config \u547D\u4EE4")
], -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("code", null, "npm config", -1);
const _hoisted_23 = /* @__PURE__ */ createTextVNode("\u547D\u4EE4\u662F\u4E00\u7EC4\u8BBE\u7F6E");
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("code", null, "npm", -1);
const _hoisted_25 = /* @__PURE__ */ createTextVNode("\u914D\u7F6E\u7684\u547D\u4EE4\u3002\u901A\u8FC7");
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("code", null, "npm config -h", -1);
const _hoisted_27 = /* @__PURE__ */ createTextVNode("\u53EF\u4EE5\u67E5\u770B\u5230\u6240\u6709\u8FD9\u4E9B\u547D\u4EE4\uFF0C\u8BE6\u89C1");
const _hoisted_28 = {
  href: "https://docs.npmjs.com/cli/config",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = /* @__PURE__ */ createTextVNode("\u5B98\u65B9\u6587\u6863 - npm-config");
const _hoisted_30 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_31 = /* @__PURE__ */ createStaticVNode('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u279C  ~ <span class="token function">npm</span> config -h\n<span class="token function">npm</span> config <span class="token builtin class-name">set</span> <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>\n<span class="token function">npm</span> config get <span class="token punctuation">[</span><span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token punctuation">]</span>\n<span class="token function">npm</span> config delete <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span>\n<span class="token function">npm</span> config list <span class="token punctuation">[</span>--json<span class="token punctuation">]</span>\n<span class="token function">npm</span> config edit\n<span class="token function">npm</span> <span class="token builtin class-name">set</span> <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>\n<span class="token function">npm</span> get <span class="token punctuation">[</span><span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="npm-config-set" tabindex="-1"><a class="header-anchor" href="#npm-config-set" aria-hidden="true">#</a> npm config set</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u67D0\u9879\u914D\u7F6E\u9879</span>\n<span class="token comment"># npm config set &lt;key&gt; &lt;value&gt;</span>\n<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://npm.corp.kuaishou.com/\n<span class="token comment"># \u6216</span>\n<span class="token function">npm</span> config <span class="token builtin class-name">set</span> <span class="token assign-left variable">registry</span><span class="token operator">=</span>https://npm.corp.kuaishou.com/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="npm-config-get" tabindex="-1"><a class="header-anchor" href="#npm-config-get" aria-hidden="true">#</a> npm config get</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u83B7\u53D6\u67D0\u914D\u7F6E\u9879\u7684\u503C</span>\n<span class="token comment"># npm config get [&lt;key&gt;]</span>\n<span class="token function">npm</span> config get registry\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u83B7\u53D6\u901A\u8FC7 npm install xxx -g \u5B89\u88C5\u7684 xxx \u6587\u4EF6\u7684\u5B89\u88C5\u76EE\u5F55</span>\n<span class="token comment"># \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C</span>\n<span class="token comment">#     windows \u7CFB\u7EDF\u7684\u8DEF\u5F84\u57FA\u7840\u90E8\u5206\u662F\uFF1A%APPDATA%/npm/</span>\n<span class="token comment">#     mac\u7CFB\u7EDF\u4E0B\u8DEF\u5F84\u57FA\u7840\u90E8\u5206\u662F\uFF1A/usr/local/</span>\n<span class="token comment"># \u82E5\u662F\u5B89\u88C5\u4E86 nvm \u7B49\u63A7\u5236 node \u7248\u672C\u7684\u5DE5\u5177\uFF0C\u8DEF\u5F84\u57FA\u7840\u90E8\u95E8\u5C06\u6539\u53D8</span>\n<span class="token function">npm</span> config get prefix\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="npm-config-delete" tabindex="-1"><a class="header-anchor" href="#npm-config-delete" aria-hidden="true">#</a> npm config delete</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5220\u9664\u67D0\u914D\u7F6E\u9879</span>\n<span class="token comment"># npm config delete &lt;key&gt;</span>\n<span class="token function">npm</span> config get registry\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="npm-config-list" tabindex="-1"><a class="header-anchor" href="#npm-config-list" aria-hidden="true">#</a> npm config list</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B npm \u7684\u6240\u6709\u914D\u7F6E\uFF0C\u5305\u62EC\u9ED8\u8BA4\u914D\u7F6E</span>\n<span class="token function">npm</span> config <span class="token function">ls</span> -l\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="npm-config-edit" tabindex="-1"><a class="header-anchor" href="#npm-config-edit" aria-hidden="true">#</a> npm config edit</h3><p><code>npm</code>\u63D0\u4F9B\u4E86\u65B9\u4FBF\u5FEB\u6377\u7684\u4FEE\u6539\u65B9\u5F0F\uFF0C\u5728\u4E0D\u77E5\u9053<code>.npmrc</code>\u8FD9\u4E2A\u6587\u4EF6\u7684\u4F4D\u7F6E\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E5F\u53EF\u4EE5\u4FEE\u6539\u8BE5\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> config edit\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="npm-set-get" tabindex="-1"><a class="header-anchor" href="#npm-set-get" aria-hidden="true">#</a> npm set/get</h3><p><code>npm set</code>\u548C<code>npm get</code>\u53EF\u80FD\u662F<code>npm config set</code>\u548C<code>npm config get</code>\u7684\u7B80\u5199\u65B9\u5F0F\uFF0C\u5B98\u7F51\u672A\u8BF4\u660E\uFF0C\u5F85\u9A8C\u8BC1\u3002</p><h2 id="npm-dist-tag" tabindex="-1"><a class="header-anchor" href="#npm-dist-tag" aria-hidden="true">#</a> npm dist-tag</h2>', 16);
const _hoisted_47 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1");
const _hoisted_48 = {
  href: "https://docs.npmjs.com/cli/dist-tag.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_49 = /* @__PURE__ */ createTextVNode("npm-dist-tag");
const _hoisted_50 = /* @__PURE__ */ createStaticVNode('<h3 id="\u67E5\u770B\u5305\u7684\u53D1\u5E03-tag" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5305\u7684\u53D1\u5E03-tag" aria-hidden="true">#</a> \u67E5\u770B\u5305\u7684\u53D1\u5E03 tag</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BED\u6CD5</span>\n<span class="token function">npm</span> dist-tag <span class="token function">ls</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span><span class="token punctuation">]</span>\n\n<span class="token comment"># \u793A\u4F8B</span>\n<span class="token function">npm</span> dist-tag <span class="token function">ls</span> vue\n<span class="token comment"># \u7ED3\u679C</span>\n<span class="token comment"># beta: 2.6.0-beta.3</span>\n<span class="token comment"># csp: 1.0.28-csp</span>\n<span class="token comment"># latest: 2.6.10</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u6DFB\u52A0\u5305\u7684\u53D1\u5E03-tag" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5305\u7684\u53D1\u5E03-tag" aria-hidden="true">#</a> \u6DFB\u52A0\u5305\u7684\u53D1\u5E03 tag</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BED\u6CD5</span>\n<span class="token function">npm</span> dist-tag <span class="token function">add</span> <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span>@<span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>tag<span class="token operator">&gt;</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5220\u9664\u5305\u7684\u53D1\u5E03-tag" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5305\u7684\u53D1\u5E03-tag" aria-hidden="true">#</a> \u5220\u9664\u5305\u7684\u53D1\u5E03 tag</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BED\u6CD5</span>\n<span class="token function">npm</span> dist-tag <span class="token function">rm</span> <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>tag<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5220\u9664\u5DF2\u53D1\u5E03\u5305\u7684\u6307\u5B9A\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5DF2\u53D1\u5E03\u5305\u7684\u6307\u5B9A\u7248\u672C" aria-hidden="true">#</a> \u5220\u9664\u5DF2\u53D1\u5E03\u5305\u7684\u6307\u5B9A\u7248\u672C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> unpublish <span class="token punctuation">[</span><span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">[</span>@<span class="token operator">&lt;</span>version<span class="token operator">&gt;</span><span class="token punctuation">]</span> --force\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>', 8);
const _hoisted_58 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1: ");
const _hoisted_59 = {
  href: "https://docs.npmjs.com/cli/v8/commands/npm-unpublish",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_60 = /* @__PURE__ */ createTextVNode("NPM - npm-unpublish");
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "npm-view",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#npm-view",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" npm view")
], -1);
const _hoisted_62 = /* @__PURE__ */ createTextVNode("\u663E\u793A\u5305\u7684\u4FE1\u606F\uFF0C");
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("code", null, "npm view", -1);
const _hoisted_64 = /* @__PURE__ */ createTextVNode("\u7684\u522B\u540D: ");
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("code", null, "npm info", -1);
const _hoisted_66 = /* @__PURE__ */ createTextVNode(", ");
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("code", null, "npm show", -1);
const _hoisted_68 = /* @__PURE__ */ createTextVNode(", ");
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("code", null, "npm v", -1);
const _hoisted_70 = /* @__PURE__ */ createTextVNode("\u3002\u8BE6\u89C1");
const _hoisted_71 = {
  href: "https://docs.npmjs.com/cli/v7/commands/npm-view",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_72 = /* @__PURE__ */ createTextVNode("NPM - npm-view");
const _hoisted_73 = /* @__PURE__ */ createStaticVNode('<h3 id="npm-view-package-version" tabindex="-1"><a class="header-anchor" href="#npm-view-package-version" aria-hidden="true">#</a> npm view package@version</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B vue@latest \u7684\u5305\u4FE1\u606F</span>\n<span class="token function">npm</span> view vue\n\n<span class="token comment"># output:</span>\n\n<span class="token comment"># vue@2.6.12 | MIT | deps: none | versions: 311</span>\n<span class="token comment"># Reactive, component-oriented view layer for modern web interfaces.</span>\n<span class="token comment"># https://github.com/vuejs/vue#readme</span>\n\n<span class="token comment"># keywords: vue</span>\n\n<span class="token comment"># dist</span>\n<span class="token comment"># .tarball: https://registry.npmjs.org/vue/-/vue-2.6.12.tgz</span>\n<span class="token comment"># .shasum: f5ebd4fa6bd2869403e29a896aed4904456c9123</span>\n<span class="token comment"># .integrity: sha512-uhmLFETqPPNyuLLbsKz6ioJ4q7AZHzD8ZVFNATNyICSZouqP2Sz0rotWQC8UNBF6VGSCs5abnKJoStA6JbCbfg==</span>\n<span class="token comment"># .unpackedSize: 3.0 MB</span>\n\n<span class="token comment"># maintainers:</span>\n<span class="token comment"># - yyx990803 &lt;yyx990803@gmail.com&gt;</span>\n\n<span class="token comment"># dist-tags:</span>\n<span class="token comment"># csp: 1.0.28-csp  latest: 2.6.12   next: 3.0.7</span>\n\n<span class="token comment"># published 6 months ago by yyx990803 &lt;yyx990803@gmail.com&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="npm-view-package-versions" tabindex="-1"><a class="header-anchor" href="#npm-view-package-versions" aria-hidden="true">#</a> npm view package versions</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B vue \u7684\u6240\u6709\u5386\u53F2\u7248\u672C</span>\n<span class="token function">npm</span> view vue versions\n\n<span class="token comment"># output</span>\n\n<span class="token comment"># [ &#39;0.0.0&#39;,</span>\n<span class="token comment">#   &#39;0.6.0&#39;,</span>\n<span class="token comment">#   &#39;0.7.0&#39;,</span>\n<span class="token comment">#   ...</span>\n<span class="token comment">#   &#39;3.0.4&#39;,</span>\n<span class="token comment">#   &#39;3.0.5&#39;,</span>\n<span class="token comment">#   &#39;3.0.6&#39; ]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="npm-view-package-repository-url" tabindex="-1"><a class="header-anchor" href="#npm-view-package-repository-url" aria-hidden="true">#</a> npm view package repository.url</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B vue \u7684 git \u4ED3\u5E93\u5730\u5740</span>\n<span class="token function">npm</span> view vue repository.url\n\n<span class="token comment"># output:</span>\n<span class="token comment"># git+https://github.com/vuejs/vue.git</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="npm-view-package-json" tabindex="-1"><a class="header-anchor" href="#npm-view-package-json" aria-hidden="true">#</a> npm view package --json</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4EE5 json \u683C\u5F0F\u663E\u793A vue \u7684\u6240\u6709\u4FE1\u606F</span>\n<span class="token function">npm</span> view vue --json\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="npm-link" tabindex="-1"><a class="header-anchor" href="#npm-link" aria-hidden="true">#</a> npm link</h2><p><code>npm link</code>\u4E3B\u8981\u662F\u89E3\u51B3\u5728\u672C\u5730\u4F7F\u7528/\u6D4B\u8BD5\u672A\u53D1\u5E03\u7684 NPM \u5305\u3002</p><p>\u7B2C\u4E00\u6B65\uFF0C\u5728\u88AB\u4F9D\u8D56\u7684\u5E93\u6587\u4EF6\u5939\u4E0B\u6267\u884C:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> my-utils\n\n<span class="token comment"># \u5728 my-utils \u76EE\u5F55\u4E0B\u6267\u884C npm link\uFF0C\u4F1A\u521B\u5EFA\u4E00\u4E2A\u5168\u5C40\u8F6F\u94FE\u5C06 {prefix}/lib/node_modules/&lt;package&gt; \u94FE\u63A5\u5230\u5F53\u524D\u76EE\u5F55\uFF0C\u5373</span>\n<span class="token comment"># {prefix}/lib/node_modules/my-utils    --&gt;    my-utils</span>\n<span class="token function">npm</span> <span class="token function">link</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u521B\u5EFA\u8F6F\u94FE\u65F6\uFF0C<code>{prefix}/lib/node_modules/&lt;package&gt;</code>\u91CC\u7684<code>package</code>\u7684\u53D6\u503C\uFF0C\u662F\u53D6\u81EA<code>my-utils</code>\u76EE\u5F55\u4E0B<code>package.json</code>\u7684<code>name</code>\uFF0C\u800C\u4E0D\u662F<code>my-utils</code>\u76EE\u5F55\u7684\u76EE\u5F55\u540D\u79F0\u3002</p></div><p>\u7B2C\u4E8C\u6B65\uFF0C\u5728\u9879\u76EE\u76EE\u5F55\u4E0B\u6267\u884C:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> my-project\n\n<span class="token comment"># \u4F1A\u521B\u5EFA\u4E00\u4E2A\u8F6F\u94FE\uFF0C\u5C06\u5F53\u524D\u76EE\u5F55\u4E0B\u7684 node_modules/&lt;package&gt; \u94FE\u63A5\u5230\u5168\u5C40\u5B89\u88C5\u76EE\u5F55\u4E0B\u7684\u540C\u540D\u76EE\u5F55\uFF0C\u5373</span>\n<span class="token comment"># my-project/node_modules/my-utils    --&gt;    {prefix}/lib/node_modules/my-utils</span>\n<span class="token function">npm</span> <span class="token function">link</span> my-utils\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E3A\u4E86\u65B9\u4FBF\uFF0C\u53EF\u5C06\u4E0A\u9762\u4E24\u6B65\u7B80\u5316\u6210\u4E00\u6B65:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> my-project\n\n<span class="token comment"># \u4E0B\u9762\u8FD9\u6761\u547D\u4EE4\u7B49\u4EF7\u4E8E\u5982\u4E0B\u4E24\u6761\u547D\u4EE4</span>\n<span class="token comment"># cd ../my-utils; npm link</span>\n<span class="token comment"># cd ../my-project; npm link my-utils</span>\n<span class="token function">npm</span> <span class="token function">link</span> <span class="token punctuation">..</span>/my-utils\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>', 17);
const _hoisted_90 = {
  href: "https://docs.npmjs.com/cli/v7/commands/npm-link",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_91 = /* @__PURE__ */ createTextVNode("npm-link");
const _hoisted_92 = {
  href: "https://champyin.com/2019/08/27/npm-link%E8%AF%A6%E8%A7%A3/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_93 = /* @__PURE__ */ createTextVNode("npm link\u8BE6\u89E3");
const _hoisted_94 = {
  href: "https://github.com/atian25/blog/issues/17",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_95 = /* @__PURE__ */ createTextVNode("\u4F60\u6240\u4E0D\u77E5\u9053\u7684\u6A21\u5757\u8C03\u8BD5\u6280\u5DE7 - npm link #17");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#npm-config-\u547D\u4EE4" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#npm-config-set" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#npm-config-get" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#npm-config-delete" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#npm-config-list" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#npm-config-edit" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#npm-set-get" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#npm-dist-tag" }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u67E5\u770B\u5305\u7684\u53D1\u5E03-tag" }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6DFB\u52A0\u5305\u7684\u53D1\u5E03-tag" }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5220\u9664\u5305\u7684\u53D1\u5E03-tag" }, {
                default: withCtx(() => [
                  _hoisted_13
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5220\u9664\u5DF2\u53D1\u5E03\u5305\u7684\u6307\u5B9A\u7248\u672C" }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#npm-view" }, {
            default: withCtx(() => [
              _hoisted_15
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#npm-view-package-version" }, {
                default: withCtx(() => [
                  _hoisted_16
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#npm-view-package-versions" }, {
                default: withCtx(() => [
                  _hoisted_17
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#npm-view-package-repository-url" }, {
                default: withCtx(() => [
                  _hoisted_18
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#npm-view-package-json" }, {
                default: withCtx(() => [
                  _hoisted_19
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#npm-link" }, {
            default: withCtx(() => [
              _hoisted_20
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_21,
    createBaseVNode("p", null, [
      _hoisted_22,
      _hoisted_23,
      _hoisted_24,
      _hoisted_25,
      _hoisted_26,
      _hoisted_27,
      createBaseVNode("a", _hoisted_28, [
        _hoisted_29,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_30
    ]),
    _hoisted_31,
    createBaseVNode("p", null, [
      _hoisted_47,
      createBaseVNode("a", _hoisted_48, [
        _hoisted_49,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_50,
    createBaseVNode("p", null, [
      _hoisted_58,
      createBaseVNode("a", _hoisted_59, [
        _hoisted_60,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_61,
    createBaseVNode("p", null, [
      _hoisted_62,
      _hoisted_63,
      _hoisted_64,
      _hoisted_65,
      _hoisted_66,
      _hoisted_67,
      _hoisted_68,
      _hoisted_69,
      _hoisted_70,
      createBaseVNode("a", _hoisted_71, [
        _hoisted_72,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_73,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_90, [
          _hoisted_91,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_92, [
          _hoisted_93,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_94, [
          _hoisted_95,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var npmCommand_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { npmCommand_html as default };
