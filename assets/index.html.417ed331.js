import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u9879\u76EE\u521D\u59CB\u5316",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u9879\u76EE\u521D\u59CB\u5316",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u9879\u76EE\u521D\u59CB\u5316")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u6DFB\u52A0 .npmrc \u6587\u4EF6");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u4EE3\u7801\u683C\u5F0F\u5316\u3001\u6821\u9A8C");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(".eslintrc \u914D\u7F6E");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("VS Code \u914D\u7F6E");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u4F7F\u7528 husky \u6DFB\u52A0 git hooks");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u5B89\u88C5\u4F9D\u8D56");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("commitlint \u914D\u7F6E");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u63D0\u4EA4\u8BF4\u660E\u91CC\u7684 type");
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<h2 id="\u6DFB\u52A0-npmrc-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-npmrc-\u6587\u4EF6" aria-hidden="true">#</a> \u6DFB\u52A0 .npmrc \u6587\u4EF6</h2><p>\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u6DFB\u52A0<code>.npmrc</code>\u6587\u4EF6\uFF0C\u4EE5\u8BBE\u7F6E\u9879\u76EE\u72EC\u6709\u7684<code>npm</code>\u914D\u7F6E\uFF0C\u6BD4\u5982<code>registry</code>\uFF0C\u53EF\u6309\u7167\u9700\u6C42\u9009\u62E9\u4F7F\u7528\u516C\u53F8\u7684\u3001\u6DD8\u5B9D\u7684\u6216\u662F\u5B98\u65B9\u7684<code>registry</code>\u3002</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>registry=https://registry.npmjs.org/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u4EE3\u7801\u683C\u5F0F\u5316\u3001\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u683C\u5F0F\u5316\u3001\u6821\u9A8C" aria-hidden="true">#</a> \u4EE3\u7801\u683C\u5F0F\u5316\u3001\u6821\u9A8C</h2><h3 id="eslintrc-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#eslintrc-\u914D\u7F6E" aria-hidden="true">#</a> .eslintrc \u914D\u7F6E</h3><p>\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u6DFB\u52A0<code>.eslintrc.js</code>\uFF0C\u518D\u6309\u9700\u8FDB\u884C\u914D\u7F6E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ESLint \u4E00\u65E6\u53D1\u73B0\u914D\u7F6E\u6587\u4EF6\u4E2D\u6709 &quot;root&quot;: true\uFF0C\u5B83\u5C31\u4F1A\u505C\u6B62\u5728\u7236\u7EA7\u76EE\u5F55\u4E2D\u5BFB\u627E</span>\n  root<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;plugin:vue/recommended&#39;</span> <span class="token comment">// eslint-plugin-vue</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  parser<span class="token operator">:</span> <span class="token string">&#39;vue-eslint-parser&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// If you want to use custom parsers such as babel-eslint or @typescript-eslint/parser, you have to use parserOptions.parser option instead of parser option. Because the eslint-plugin-vue plugin requires vue-eslint-parser to parse .vue files, so the eslint-plugin-vue plugin doesn&#39;t work if you overwrote parser option.</span>\n  parserOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n    parser<span class="token operator">:</span> <span class="token string">&#39;babel-eslint&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  env<span class="token operator">:</span> <span class="token punctuation">{</span>\n    browser<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    node<span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  rules<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;no-console&#39;</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;semi&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="vs-code-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#vs-code-\u914D\u7F6E" aria-hidden="true">#</a> VS Code \u914D\u7F6E</h3><p>\u4E0B\u8F7D\u5982\u4E0B\u63D2\u4EF6\uFF1A</p><ul><li>ESLint \u63D2\u4EF6</li><li>Vetur \u63D2\u4EF6: \u53EF\u5BF9 Vue \u6587\u4EF6\u8FDB\u884C\u8BED\u6CD5\u9AD8\u4EAE\u3001\u4EE3\u7801\u7247\u6BB5\u3001Emmet \u652F\u6301\u3001Lint/\u9519\u8BEF\u68C0\u67E5\u3001\u683C\u5F0F\u5316\u3001\u667A\u80FD\u63D0\u793A\u3001\u7B49\u7B49\u529F\u80FD</li></ul><p>\u9700\u8981\u4F5C\u51FA\u5982\u4E0B\u914D\u7F6E:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//</span>\n  <span class="token comment">// Eslint \u63D2\u4EF6\u914D\u7F6E\uFF0C\u8BE6\u89C1 https://github.com/microsoft/vscode-eslint</span>\n  <span class="token property">&quot;eslint.autoFixOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Enables auto fix on save. Please note auto fix on save is only available if VS Code&#39;s files.autoSave is either off, onFocusChange or onWindowChange. It will not work with afterDelay.</span>\n  <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// An array of language ids which should be validated by ESLint\uFF0C\u8BE6\u89C1</span>\n    <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;autoFix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// Vetur \u63D2\u4EF6\u914D\u7F6E\uFF0C\u8BE6\u89C1 https://vuejs.github.io/vetur/</span>\n  <span class="token property">&quot;vetur.validation.template&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u5173\u95ED vetur \u5BF9 &lt;template&gt; \u7684 lint \u6821\u9A8C\uFF0C\u4EA4\u7ED9 ESLint \u6765\u505A\u6821\u9A8C\uFF0C\u8BE6\u89C1 https://vuejs.github.io/vetur/linting-error.html#linting-for-template</span>\n  <span class="token property">&quot;vetur.format.defaultFormatter.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u4F7F\u7528 prettier \u6765\u5BF9 &lt;template&gt; \u505A\u683C\u5F0F\u5316\uFF0C\u8BE6\u89C1 https://vuejs.github.io/vetur/formatting.html#formatters</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u6CE8\u610F\uFF0CVS Code \u7684 ESLint \u63D2\u4EF6\u4F1A\u4F7F\u7528\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684<code>.eslintrc.*</code>\u6587\u4EF6\u3002</p><h2 id="\u4F7F\u7528-husky-\u6DFB\u52A0-git-hooks" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-husky-\u6DFB\u52A0-git-hooks" aria-hidden="true">#</a> \u4F7F\u7528 husky \u6DFB\u52A0 git hooks</h2>', 14);
const _hoisted_25 = /* @__PURE__ */ createTextVNode("\u5B98\u65B9\u6587\u6863: ");
const _hoisted_26 = {
  href: "https://cn.eslint.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_27 = /* @__PURE__ */ createTextVNode("ESLint - \u4E2D\u6587");
const _hoisted_28 = /* @__PURE__ */ createTextVNode("\u98CE\u52A8\u4E4B\u77F3\u7684\u535A\u5BA2 - ESLint");
const _hoisted_29 = {
  href: "https://github.com/typicode/husky",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_30 = /* @__PURE__ */ createTextVNode("husky");
const _hoisted_31 = /* @__PURE__ */ createTextVNode("\u53EF\u4EE5\u8BA9\u6211\u4EEC\u66F4\u52A0\u7B80\u5355\u5730\u6DFB\u52A0\u4E00\u4E9B\u94A9\u5B50\u51FD\u6570\uFF0C\u6BD4\u5982\u5728\u63D0\u4EA4\u4EE3\u7801\u524D\u6821\u9A8C\u4EE3\u7801\u98CE\u683C\u548C\u6821\u9A8C\u63D0\u4EA4\u8BF4\u660E\u7B49\u3002");
const _hoisted_32 = /* @__PURE__ */ createStaticVNode('<h3 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5 husky\uFF0C\u4EE5\u66F4\u52A0\u5BB9\u6613\u5730\u4F7F\u7528\u5404\u4E2A\u94A9\u5B50</span>\n<span class="token function">npm</span> <span class="token function">install</span> -D husky\n\n<span class="token comment"># \u5B89\u88C5 lint-staged\uFF0C\u4EC5\u5BF9\u6682\u5B58\u533A\u7684\u6587\u4EF6\u8FDB\u884C\u6821\u9A8C</span>\n<span class="token function">npm</span> <span class="token function">install</span> -D lint-staged\n\n<span class="token comment"># \u5B89\u88C5 commitlint\uFF0C\u4EE5\u6821\u9A8C\u63D0\u4EA4\u8BF4\u660E</span>\n<span class="token function">npm</span> <span class="token function">install</span> -D @commitlint/<span class="token punctuation">{</span>config-conventional,cli<span class="token punctuation">}</span>\n\n<span class="token comment"># \u5B89\u88C5 eslint\uFF0C\u4EE5\u53CA\u6309\u9700\u5B89\u88C5 babel-eslint\u3001eslint-plugin-vue \u7B49</span>\n<span class="token function">npm</span> <span class="token function">install</span> -D eslint babel-eslint eslint-plugin-vue vue-eslint-parser\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>package.json</code>\u91CC\u6DFB\u52A0<code>husky</code>\u76F8\u5173\u914D\u7F6E:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;husky&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;hooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;pre-commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;commit-msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commitlint -E HUSKY_GIT_PARAMS&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;*.{js,vue}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;eslint --fix&quot;</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;git add&quot;</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="commitlint-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#commitlint-\u914D\u7F6E" aria-hidden="true">#</a> commitlint \u914D\u7F6E</h3><p>\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u6DFB\u52A0<code>commitlint.config.js</code>\u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u914D\u7F6E commitlint \u4F7F\u7528 conventional \u914D\u7F6E\u6765\u6821\u9A8C\u63D0\u4EA4\u8BF4\u660E</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">&#39;@commitlint/config-conventional&#39;</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="\u63D0\u4EA4\u8BF4\u660E\u91CC\u7684-type" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u8BF4\u660E\u91CC\u7684-type" aria-hidden="true">#</a> \u63D0\u4EA4\u8BF4\u660E\u91CC\u7684 type</h4><ul><li><code>feat</code>\uFF1A\u65B0\u529F\u80FD\uFF08<code>feature</code>\uFF09</li><li><code>fix</code>\uFF1A\u4FEE\u8865<code>bug</code></li><li><code>docs</code>\uFF1A\u6587\u6863\uFF08<code>documentation</code>\uFF09</li><li><code>style</code>\uFF1A \u683C\u5F0F\uFF08\u4E0D\u5F71\u54CD\u4EE3\u7801\u8FD0\u884C\u7684\u53D8\u52A8\uFF09</li><li><code>refactor</code>\uFF1A\u91CD\u6784\uFF08\u5373\u4E0D\u662F\u65B0\u589E\u529F\u80FD\uFF0C\u4E5F\u4E0D\u662F\u4FEE\u6539<code>bug</code>\u7684\u4EE3\u7801\u53D8\u52A8\uFF09</li><li><code>test</code>\uFF1A\u589E\u52A0\u6D4B\u8BD5</li><li><code>chore</code>\uFF1A\u6784\u5EFA\u8FC7\u7A0B\u6216\u8F85\u52A9\u5DE5\u5177\u7684\u53D8\u52A8</li><li><code>revert</code>\uFF1A\u64A4\u9500\u4E4B\u524D\u7684<code>commit</code></li></ul>', 9);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6DFB\u52A0-npmrc-\u6587\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4EE3\u7801\u683C\u5F0F\u5316\u3001\u6821\u9A8C" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#eslintrc-\u914D\u7F6E" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#vs-code-\u914D\u7F6E" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4F7F\u7528-husky-\u6DFB\u52A0-git-hooks" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5B89\u88C5\u4F9D\u8D56" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#commitlint-\u914D\u7F6E" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u63D0\u4EA4\u8BF4\u660E\u91CC\u7684-type" }, {
                    default: withCtx(() => [
                      _hoisted_10
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
    _hoisted_11,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_25,
        createBaseVNode("a", _hoisted_26, [
          _hoisted_27,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/front-end-engineering/initialization/tools/eslint.html" }, {
          default: withCtx(() => [
            _hoisted_28
          ]),
          _: 1
        })
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_29, [
        _hoisted_30,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_31
    ]),
    _hoisted_32,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
