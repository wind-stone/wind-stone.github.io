import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "eslint-\u4E0E-prettier-\u7684\u96C6\u6210",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#eslint-\u4E0E-prettier-\u7684\u96C6\u6210",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" ESLint - \u4E0E Prettier \u7684\u96C6\u6210")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Prettier \u7B80\u4ECB");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u4E3A\u4EC0\u4E48\u4F7F\u7528 Prettier");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Prettier \u4E0E Linters");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("eslint-config-prettier");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("eslint-plugin-prettier");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("eslint-config-prettier \u548C eslint-plugin-prettier \u7684\u96C6\u6210");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u63A8\u8350\u914D\u7F6E");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u5B89\u88C5\u4F9D\u8D56");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u914D\u7F6E .eslintrc.*");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u914D\u7F6E Prettier \u89C4\u5219");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("Prettier \u6240\u6709\u914D\u7F6E\u9879");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u96C6\u6210\u5176\u4ED6 ESLint \u63D2\u4EF6");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("VS Code \u914D\u7F6E");
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<h2 id="prettier-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#prettier-\u7B80\u4ECB" aria-hidden="true">#</a> Prettier \u7B80\u4ECB</h2><p>Prettier \u662F\u7531 Facebook \u516C\u53F8\u5F00\u53D1\u7684<code>opinionated</code>\u7684\u4EE3\u7801\u683C\u5F0F\u5316\u5DE5\u5177\uFF0C\u5B83\u79FB\u9664\u4E86\u4EE3\u7801\u7684\u539F\u59CB\u98CE\u683C\uFF0C\u5E76\u786E\u4FDD\u6240\u6709\u8F93\u51FA\u7684\u4EE3\u7801\u9075\u5B88\u4E00\u81F4\u7684\u98CE\u683C\u3002</p><p>\u6240\u8C13<code>opinionated</code>\uFF0C\u5C31\u662F\u6307 Prettier \u5F3A\u5236\u89C4\u5B9A\u4E86\u4E00\u4E9B\u98CE\u683C\uFF0C\u4F60\u5FC5\u987B\u6309\u7167\u5B83\u6307\u5B9A\u7684\u65B9\u5F0F\u53BB\u7EC4\u7EC7\u4EE3\u7801\u3002\u8981\u662F\u4E0D\u8D5E\u6210 Prettier \u7684\u98CE\u683C\uFF0C\u5C31\u4E0D\u8981\u4F7F\u7528\u5B83\u3002</p><p>Prettier \u4E5F\u63D0\u4F9B\u4E86\u6781\u5C11\u7684\u3001\u5FC5\u8981\u7684\u914D\u7F6E\u9879\uFF0C\u5141\u8BB8\u7528\u6237\u5BF9\u4E00\u4E9B\u8F83\u6709\u4E89\u8BAE\u7684\u9009\u9879\u8FDB\u884C\u5B9A\u5236\uFF0C\u9664\u6B64\u4E4B\u5916\u7684\u5927\u90E8\u5206\u89C4\u5219\u90FD\u4E0D\u5141\u8BB8\u914D\u7F6E\uFF0C\u56E0\u4E3A\u914D\u7F6E\u9879\u8D8A\u591A\uFF0C\u5173\u4E8E\u98CE\u683C\u7684\u4E89\u5435\u5C31\u4F1A\u8D8A\u591A\u3002</p><p>Prettier \u4F1A\u5FFD\u7565\u4EE3\u7801\u7684\u539F\u59CB\u98CE\u683C\uFF0C\u5E76\u5C06\u4EE3\u7801\u89E3\u6790\u4E3A AST\uFF0C\u6309\u7167 Prettier \u81EA\u5DF1\u7684\u89C4\u5219\u5E76\u5C06\u6700\u5927\u884C\u957F\u5EA6\u7EB3\u5165\u8003\u8651\u8303\u56F4\u5185\uFF0C\u5C06 AST \u91CD\u65B0\u8F93\u51FA\u4E3A\u65B0\u7684\u98CE\u683C\u7684\u4EE3\u7801\u3002</p><h3 id="\u4E3A\u4EC0\u4E48\u4F7F\u7528-prettier" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4F7F\u7528-prettier" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4F7F\u7528 Prettier</h3><ul><li>\u6784\u5EFA\u548C\u5F3A\u5236\u4E00\u5957\u98CE\u683C\u6307\u5357 <ul><li>\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u91C7\u7528 Prettier \u6700\u5927\u7684\u539F\u56E0\u662F\uFF0C\u505C\u6B62\u4E00\u5207\u6B63\u5728\u8FDB\u884C\u7684\u5173\u4E8E\u98CE\u683C\u7684\u4E89\u5435\u3002\u4F17\u6240\u5468\u77E5\uFF0C\u901A\u7528\u7684\u98CE\u683C\u6307\u5357\u5BF9\u9879\u76EE\u548C\u56E2\u961F\u90FD\u662F\u7279\u522B\u6709\u4EF7\u503C\u7684\uFF0C\u4F46\u662F\u8FBE\u6210\u901A\u7528\u7684\u98CE\u683C\u6307\u5357\u662F\u975E\u5E38\u75DB\u82E6\u7684\u8FC7\u7A0B\uFF0C\u4E5F\u662F\u4E0D\u503C\u5F97\u7684\u3002\u4EBA\u4EEC\u5BF9\u4EE5\u4E00\u79CD\u7279\u5B9A\u7684\u65B9\u5F0F\u5199\u4EE3\u7801\u662F\u975E\u5E38\u6709\u60C5\u7EEA\u7684\uFF0C\u6CA1\u6709\u4EBA\u613F\u610F\u82B1\u65F6\u95F4\u5199\u548C\u63A5\u53D7<code>nits</code>\u3002</li><li>\u56E0\u6B64\uFF0C\u9009\u62E9 Prettier \u800C\u4E0D\u662F\u5176\u4ED6\u98CE\u683C\u6307\u5357\u7684\u539F\u56E0\u662F\uFF0C\u5B83\u662F\u552F\u4E00\u81EA\u52A8\u5316\u7684\u98CE\u683C\u6307\u5357\u3002\u5373\u4F7F Prettier \u4E0D\u80FD 100% \u6309\u7167\u4F60\u60F3\u8981\u7684\u65B9\u5F0F\u683C\u5F0F\u5316\u6240\u6709\u7684\u4EE3\u7801\uFF0C\u4F46\u662F\u9274\u4E8E Prettier \u72EC\u4E00\u65E0\u4E8C\u7684\u4F18\u52BF\uFF0C\u6709\u4E00\u4E9B\u201C\u727A\u7272\u201D\u4E5F\u662F\u503C\u5F97\u7684\u3002</li></ul></li><li>\u5E2E\u52A9\u65B0\u624B\uFF0C\u6BD4\u5982 <ul><li>\u4EE5\u524D\u4F7F\u7528\u53E6\u4E00\u4E2A\u4EE3\u7801\u98CE\u683C\u6307\u5357\u7684\u4EBA</li><li>\u4ECE\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\u8F6C\u8FC7\u7684\u4EBA</li></ul></li><li>\u7F16\u5199\u4EE3\u7801 <ul><li>\u5E2E\u52A9\u5F00\u53D1\u8005\u81EA\u52A8\u683C\u5F0F\u5316\u4EE3\u7801\uFF0C\u8282\u7701\u5927\u91CF\u65F6\u95F4</li></ul></li><li>\u6613\u4E8E\u91C7\u7528</li><li>...</li></ul><h3 id="prettier-\u4E0E-linters" tabindex="-1"><a class="header-anchor" href="#prettier-\u4E0E-linters" aria-hidden="true">#</a> Prettier \u4E0E Linters</h3><p>\u6821\u9A8C\u5DE5\u5177\u5982 ESLint \u7B49\uFF0C\u4E00\u822C\u6709\u4E24\u7C7B\u89C4\u5219\uFF1A</p>', 9);
const _hoisted_25 = /* @__PURE__ */ createTextVNode("\u683C\u5F0F\u5316\u7C7B\u7684\u89C4\u5219\uFF0C\u6BD4\u5982 ");
const _hoisted_26 = {
  href: "https://eslint.org/docs/rules/max-len",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_27 = /* @__PURE__ */ createTextVNode("max-len");
const _hoisted_28 = {
  href: "https://eslint.org/docs/rules/no-mixed-spaces-and-tabs",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = /* @__PURE__ */ createTextVNode("no-mixed-spaces-and-tabs");
const _hoisted_30 = {
  href: "https://eslint.org/docs/rules/keyword-spacing",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_31 = /* @__PURE__ */ createTextVNode("keyword-spacing");
const _hoisted_32 = {
  href: "https://eslint.org/docs/rules/comma-style",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_33 = /* @__PURE__ */ createTextVNode("comma-style");
const _hoisted_34 = /* @__PURE__ */ createTextVNode("\u4EE3\u7801\u8D28\u91CF\u7C7B\u7684\u89C4\u5219\uFF0C\u6BD4\u5982 ");
const _hoisted_35 = {
  href: "https://eslint.org/docs/rules/no-unused-vars",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_36 = /* @__PURE__ */ createTextVNode("no-unused-vars");
const _hoisted_37 = {
  href: "https://eslint.org/docs/rules/no-extra-bind",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_38 = /* @__PURE__ */ createTextVNode("no-extra-bind");
const _hoisted_39 = {
  href: "https://eslint.org/docs/rules/no-implicit-globals",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_40 = /* @__PURE__ */ createTextVNode("no-implicit-globals");
const _hoisted_41 = {
  href: "https://eslint.org/docs/rules/prefer-promise-reject-errors",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_42 = /* @__PURE__ */ createTextVNode("prefer-promise-reject-errors");
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("p", null, "Prettier \u53EF\u4EE5\u5B8C\u5168\u6D88\u9664\u5BF9\u6574\u4E2A\u683C\u5F0F\u5316\u7C7B\u89C4\u5219\u7684\u9700\u8981\uFF01Prettier \u5C06\u4EE5\u4E00\u81F4\u5316\u7684\u98CE\u683C\u91CD\u65B0\u8F93\u51FA\u6574\u4E2A\u9879\u76EE\uFF0C\u56E0\u6B64\u7A0B\u5E8F\u5458\u518D\u4E5F\u4E0D\u4F1A\u6709\u683C\u5F0F\u5316\u65B9\u9762\u7684\u9519\u8BEF\u4E86\u3002", -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("p", null, "\u4F46\u662F Prettier \u5BF9\u4EE3\u7801\u8D28\u91CF\u7C7B\u7684\u89C4\u5219\u6BEB\u65E0\u7528\u5904\uFF0C\u8FD9\u4E5F\u662F\u6821\u9A8C\u5DE5\u5177\u63D0\u4F9B\u7684\u6700\u91CD\u8981\u7684\u529F\u80FD\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u53EF\u4EE5\u6355\u83B7\u4F60\u4EE3\u7801\u91CC\u771F\u6B63\u7684 bug\u3002", -1);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "eslint-config-prettier",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#eslint-config-prettier",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" eslint-config-prettier")
], -1);
const _hoisted_46 = {
  href: "https://github.com/prettier/eslint-config-prettier",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("code", null, "eslint-config-prettier", -1);
const _hoisted_48 = /* @__PURE__ */ createTextVNode("\u662F ESLint \u7684\u914D\u7F6E\u5E93\uFF0C\u7528\u4E8E\u5173\u95ED\u90A3\u4E9B\u4E0D\u9700\u8981\u6216\u4E0E Prettier \u51B2\u7A81\u7684 ESLint \u89C4\u5219\u3002\u8FD9\u53EF\u4EE5\u8BA9\u4F60\u5728\u4F7F\u7528 Prettier \u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4F60\u6700\u559C\u6B22\u7684 ESLint \u5171\u4EAB\u914D\u7F6E\u800C\u4E0D\u4F7F\u7528\u8BE5\u5171\u4EAB\u914D\u7F6E\u91CC\u6709\u5173\u6837\u5F0F\u7684\u89C4\u5219\u3002\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u53EA\u662F\u5173\u95ED\u89C4\u5219\uFF0C\u56E0\u6B64\u4EC5\u5728\u4E0E\u5176\u4ED6\u914D\u7F6E\u4E00\u8D77\u4F7F\u7528\u65F6\u624D\u6709\u610F\u4E49\u3002");
const _hoisted_49 = /* @__PURE__ */ createStaticVNode('<p>\u82E5\u662F\u5355\u72EC\u4F7F\u7528<code>eslint-config-prettier</code>\uFF08\u5373\u4E0D\u4F7F\u7528<code>eslint-plugin-prettier</code>\uFF09\uFF0C\u5219\u5E94\u8BE5\u5982\u4E0B\u7EE7\u627F\u914D\u7F6E:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// .eslintrc.*</span>\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;some-other-config-you-use&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u56E0\u4E3A<code>eslint-config-prettier</code>\u662F\u8981\u5173\u95ED\u5176\u4ED6\u914D\u7F6E\u7684\u6837\u5F0F\u89C4\u5219\uFF0C\u6240\u4EE5\u5FC5\u987B\u653E\u5728\u5176\u4ED6 ESLint \u914D\u7F6E\u4E4B\u540E\u3002</p><h2 id="eslint-plugin-prettier" tabindex="-1"><a class="header-anchor" href="#eslint-plugin-prettier" aria-hidden="true">#</a> eslint-plugin-prettier</h2>', 4);
const _hoisted_53 = {
  href: "https://github.com/prettier/eslint-plugin-prettier",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("code", null, "eslint-plugin-prettier", -1);
const _hoisted_55 = /* @__PURE__ */ createTextVNode("\u662F\u4F7F\u7528 Prettier \u8FDB\u884C\u683C\u5F0F\u5316\u7684 ESLint \u63D2\u4EF6\uFF0C\u5B83\u4F1A\u5C06 Pretter \u4F5C\u4E3A ESLint \u7684\u4E00\u6761\u89C4\u5219\u6765\u8FD0\u884C\u5E76\u8FDB\u884C\u683C\u5F0F\u5316\uFF0C\u7136\u540E\u4E0E\u683C\u5F0F\u5316\u4E4B\u524D\u7684\u4EE3\u7801\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u5982\u679C\u51FA\u73B0\u4E86\u4E0D\u4E00\u81F4\uFF0C\u8FD9\u4E2A\u5730\u65B9\u5C31\u4F1A\u88AB Prettier \u8FDB\u884C\u6807\u8BB0\u5E76\u62A5\u544A\u51FA\u6765\u3002");
const _hoisted_56 = /* @__PURE__ */ createStaticVNode('<p>\u82E5\u662F\u5355\u72EC\u4F7F\u7528<code>eslint-plugin-prettier</code>\uFF08\u5373\u4E0D\u4F7F\u7528<code>eslint-config-prettier</code>\uFF09\uFF0C\u5219\u5E94\u8BE5\u5982\u4E0B\u8FDB\u884C\u914D\u7F6E:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// .eslintrc.*</span>\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;prettier/prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u82E5\u662F\u4F60\u7981\u7528\u4E86\u6240\u6709\u5176\u4ED6\u4E0E\u4EE3\u7801\u683C\u5F0F\u5316\u76F8\u5173\u7684 ESLint \u89C4\u5219\uFF0C\u5219<code>eslint-plugin-prettier</code>\u63D2\u4EF6\u5C06\u5DE5\u4F5C\u5730\u6700\u597D\u3002\u82E5\u662F\u4F7F\u7528\u4E86\u53E6\u4E00\u4E2A\u5728\u4EE3\u7801\u683C\u5F0F\u5316\u65B9\u9762\u4E0E Prettier \u4E0D\u4E00\u81F4\u7684 ESLint \u89C4\u5219\uFF0C\u5219\u5F15\u8D77\u6821\u9A8C\u9519\u8BEF\u662F\u65E0\u53EF\u907F\u514D\u7684\u3002\u6B63\u5982\u4E0A\u9762<code>eslint-config-prettier</code>\u6240\u4ECB\u7ECD\u7684\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528<code>eslint-config-prettier</code>\u6765\u7981\u7528\u6240\u6709 ESLint \u7684\u4E0E\u683C\u5F0F\u5316\u76F8\u5173\u7684\u89C4\u5219\u3002</p><h2 id="eslint-config-prettier-\u548C-eslint-plugin-prettier-\u7684\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#eslint-config-prettier-\u548C-eslint-plugin-prettier-\u7684\u96C6\u6210" aria-hidden="true">#</a> eslint-config-prettier \u548C eslint-plugin-prettier \u7684\u96C6\u6210</h2><p>\u56E0\u6B64\uFF0C\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u540C\u65F6\u4F7F\u7528<code>eslint-plugin-prettier</code>\u548C<code>eslint-config-prettier</code>\uFF0C\u5176\u914D\u7F6E\u4E3A:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// .eslintrc.*</span>\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;some-other-config-you-use&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;prettier/prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u63A8\u8350\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u63A8\u8350\u914D\u7F6E" aria-hidden="true">#</a> \u63A8\u8350\u914D\u7F6E</h2><p>\u4EE5\u4E0A\u8FD9\u79CD\u65B9\u5F0F\u7684\u96C6\u6210\u914D\u7F6E\u8F83\u4E3A\u7E41\u7410\uFF0C<code>eslint-plugin-prettier</code>\u63D0\u4F9B\u4E86\u4E00\u79CD\u7B80\u5355\u7684\u914D\u7F6E\u65B9\u5F0F\u3002</p><h3 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -D --save-exact prettier\n<span class="token function">npm</span> <span class="token function">install</span> -D eslint-plugin-prettier eslint-config-prettier\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u914D\u7F6E-eslintrc" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-eslintrc" aria-hidden="true">#</a> \u914D\u7F6E .eslintrc.*</h3><p><code>.eslintrc.*</code>\u6587\u4EF6:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;plugin:prettier/recommended&quot;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E0A\u9762\u8FD9\u4E00\u884C\u914D\u7F6E\u505A\u4E86\u4E09\u4EF6\u4E8B\u60C5:</p><ul><li>\u542F\u7528\u4E86<code>eslint-plugin-prettier</code>\u63D2\u4EF6</li><li>\u8BBE\u7F6E\u4E86<code>&quot;prettier/prettier&quot;</code>\u89C4\u5219\u4E3A<code>&quot;error&quot;</code></li><li>\u7EE7\u627F\u4E86<code>eslint-config-prettier</code>\u914D\u7F6E</li></ul><p>\u82E5\u662F\u6253\u5F00<code>node_modules/eslint-plugin-prettier/eslint-plugin-prettier.js</code>\u6587\u4EF6\uFF0C\u53EF\u4EE5\u770B\u5230:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  configs<span class="token operator">:</span> <span class="token punctuation">{</span>\n    recommended<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      rules<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">&quot;prettier/prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5373<code>&quot;extends&quot;: [&quot;plugin:prettier/recommended&quot;]</code>\u8FD9\u4E00\u884C\u5B9E\u9645\u4E0A\u662F\u4EE5\u4E0B\u914D\u7F6E\u7684\u7F29\u5199\u65B9\u5F0F\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;prettier/prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u914D\u7F6E-prettier-\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-prettier-\u89C4\u5219" aria-hidden="true">#</a> \u914D\u7F6E Prettier \u89C4\u5219</h3><p>\u4EE5\u4E0A\u7684\u914D\u7F6E\u90FD\u662F\u4F7F\u7528\u7684 Prettier \u7684\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u82E5\u662F\u60F3\u8981\u81EA\u5B9A\u4E49 Prettier \u7684\u914D\u7F6E\uFF0C\u9700\u8981\u505A\u4E24\u4EF6\u4E8B\u60C5:\u3001</p><ol><li>\u9488\u5BF9\u4E0D\u4F1A\u88AB ESLint \u683C\u5F0F\u5316\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C\u9700\u8981\u5728\u9879\u76EE\u6839\u76EE\u5F55\u6DFB\u52A0\u4E00\u4E2A<code>.prettierrc</code>\u7684\u914D\u7F6E\u6587\u4EF6</li><li>\u9488\u5BF9\u4F1A\u88AB ESLint \u683C\u5F0F\u5316\u7684\u6587\u4EF6\u7C7B\u578B\uFF0CPrettier \u4F1A\u4F5C\u4E3A ESLint \u7684\u4E00\u4E2A\u89C4\u5219\u8FD0\u884C\u5E76\u683C\u5F0F\u5316\u6587\u4EF6\uFF0C\u56E0\u6B64\u9700\u8981\u5728<code>.eslintrc.*</code>\u7684<code>rule</code>\u91CC\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E</li></ol><p><code>.prettierrc</code>\u914D\u7F6E\u5982\u4E0B:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>.eslintrc.*</code>\u914D\u7F6E\u5982\u4E0B:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;plugin:prettier/recommended&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;prettier/prettier&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>\n      <span class="token comment">// \u9488\u5BF9\u4F1A\u88AB ESLint \u683C\u5F0F\u5316\u7684\u6587\u4EF6\u7C7B\u578B\uFF0CPrettier \u4F1A\u4F5C\u4E3A ESLint \u7684\u4E00\u4E2A\u89C4\u5219\u8FD0\u884C\u5E76\u683C\u5F0F\u5316\u6587\u4EF6\uFF0C\u56E0\u6B64\u9700\u8981\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="prettier-\u6240\u6709\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#prettier-\u6240\u6709\u914D\u7F6E\u9879" aria-hidden="true">#</a> Prettier \u6240\u6709\u914D\u7F6E\u9879</h4><table><thead><tr><th>\u914D\u7F6E\u9879</th><th>\u9ED8\u8BA4\u503C</th><th>\u5EFA\u8BAE\u53D6\u503C</th><th>\u610F\u4E49</th></tr></thead><tbody><tr><td>printWidth</td><td>80</td><td>120</td><td>\u884C\u5BBD</td></tr><tr><td>tabWidth</td><td>2</td><td>4</td><td>\u6307\u5B9A\u6BCF\u4E2A\u7F29\u8FDB\u7684\u7A7A\u683C\u6570\u91CF</td></tr><tr><td>useTabs</td><td>false</td><td>false</td><td>\u884C\u7684\u7F29\u8FDB\u662F\u5426\u4F7F\u7528 Tab \u800C\u4E0D\u662F\u7A7A\u683C</td></tr><tr><td>semi</td><td>true</td><td>true</td><td>\u8BED\u53E5\u884C\u5C3E\u662F\u5426\u6DFB\u52A0\u5206\u53F7</td></tr><tr><td>singleQuote</td><td>false</td><td>true</td><td>\u5B57\u7B26\u4E32\u662F\u5426\u4F7F\u7528\u5355\u5F15\u53F7\u800C\u4E0D\u662F\u53CC\u5F15\u53F7</td></tr><tr><td>quoteProps</td><td>&quot;as-needed&quot;</td><td>&quot;as-needed&quot;</td><td>\u5BF9\u8C61\u7684\u5C5E\u6027\u662F\u5426\u8981\u52A0\u5F15\u53F7</td></tr><tr><td>jsxSingleQuote</td><td>false</td><td>false</td><td>JSX \u91CC\u662F\u5426\u4F7F\u7528\u5355\u5F15\u53F7\u800C\u4E0D\u662F\u53CC\u5F15\u53F7</td></tr><tr><td>trailingComma</td><td>&quot;none&quot;</td><td>&quot;es5&quot;</td><td>\u591A\u884C\u65F6\u4EFB\u4F55\u53EF\u80FD\u7684\u5730\u65B9\u662F\u5426\u6DFB\u52A0\u5C3E\u9017\u53F7</td></tr><tr><td>bracketSpacing</td><td>true</td><td>true</td><td>\u5BF9\u8C61\u5B57\u9762\u91CF\u7684\u5927\u62EC\u53F7\u5185\u90E8\u662F\u5426\u6DFB\u52A0\u7A7A\u683C</td></tr><tr><td>jsxBracketSameLine</td><td>true</td><td>false</td><td>\u662F\u5426\u5C06<code>&gt;</code>\u653E\u7F6E\u5728\u591A\u884C JSX \u5143\u7D20\u6700\u540E\u4E00\u884C\u7684\u7ED3\u5C3E\uFF0C\u800C\u4E0D\u662F\u653E\u5728\u4E0B\u4E00\u884C</td></tr><tr><td>arrowParens</td><td>&quot;avoid&quot;</td><td>&quot;avoid&quot;</td><td>\u7BAD\u5934\u51FD\u6570\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u65F6\uFF0C\u53C2\u6570\u662F\u5426\u4F7F\u7528\u5706\u62EC\u53F7</td></tr><tr><td>rangeStart</td><td>0</td><td>0</td><td>\u88AB\u683C\u5F0F\u5316\u6587\u4EF6\u7684\u884C\u8D77\u70B9</td></tr><tr><td>rangeEnd</td><td>Infinity</td><td>Infinity</td><td>\u88AB\u683C\u5F0F\u5316\u6587\u4EF6\u7684\u884C\u7EC8\u70B9</td></tr><tr><td>parser</td><td>-</td><td>-</td><td>\u6307\u5B9A\u4F7F\u7528\u7684\u89E3\u6790\u5668</td></tr><tr><td>filepath</td><td>-</td><td>-</td><td>\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u6587\u4EF6\u6765\u6307\u660E\u4F7F\u7528\u54EA\u4E2A\u89E3\u6790\u5668</td></tr><tr><td>requirePragma</td><td>false</td><td>false</td><td>\u662F\u5426\u5728\u6587\u4EF6\u9876\u90E8\u5305\u542B<code>@prettier</code>\u6216<code>@format</code>\u7684\u6CE8\u91CA\u65F6\u624D\u683C\u5F0F\u5316</td></tr><tr><td>insertPragma</td><td>false</td><td>false</td><td>\u662F\u5426\u5728\u6587\u4EF6\u9876\u90E8\u6DFB\u52A0<code>@format</code>\u6807\u8BB0\u6765\u6307\u660E\u8BE5\u6587\u4EF6\u5DF2\u7ECF\u88AB\u683C\u5F0F\u5316</td></tr><tr><td>proseWrap</td><td>&quot;preserve&quot;</td><td>&quot;preserve&quot;</td><td>\u6307\u5B9A\u5982\u4F55\u5904\u7406 Markdown \u6587\u672C\u7684\u6362\u884C</td></tr><tr><td>htmlWhitespaceSensitivity</td><td>&quot;css&quot;</td><td>&quot;strict&quot;</td><td>\u6307\u5B9A\u5982\u4F55 HTML \u6587\u4EF6\u91CC\u7684\u5168\u5C40\u7A7A\u767D\u654F\u611F\u7684\u884C\u4E3A</td></tr><tr><td>endOfLine</td><td>&quot;auto&quot;</td><td>&quot;lf&quot;</td><td>\u91C7\u7528\u54EA\u4E00\u79CD\u884C\u5C3E\u6362\u884C\u7B26</td></tr></tbody></table><h2 id="\u96C6\u6210\u5176\u4ED6-eslint-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210\u5176\u4ED6-eslint-\u63D2\u4EF6" aria-hidden="true">#</a> \u96C6\u6210\u5176\u4ED6 ESLint \u63D2\u4EF6</h2><p>\u6B64\u5916\uFF0C\u4E3A\u4E86\u652F\u6301\u7279\u6B8A\u7684 ESLint \u63D2\u4EF6\uFF08\u6BD4\u5982\uFF0C<code>eslint-plugin-vue</code>\uFF09\uFF0C\u4F60\u53EF\u4EE5\u5982\u4E0B\u6DFB\u52A0\u989D\u5916\u7684\u914D\u7F6E:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;plugin:prettier/recommended&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettier/vue&quot;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="vs-code-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#vs-code-\u914D\u7F6E" aria-hidden="true">#</a> VS Code \u914D\u7F6E</h2><p>\u5B89\u88C5 VS Code \u7684 ESLint \u63D2\u4EF6\u548C Prettier - Code formatter \u63D2\u4EF6\uFF0C\u5E76\u5728 Code -&gt; \u9996\u9009\u9879\uFF08<code>Preferences</code>\uFF09 -&gt; \u8BBE\u7F6E\uFF08<code>Settings</code>\uFF09\uFF0C\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token comment">// Format a file on save. A formatter must be available, the file must not be auto-saved, and editor must not be shutting down.</span>\n  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token comment">// \u8BBE\u7F6E\u6587\u4EF6\u9ED8\u8BA4\u7684\u683C\u5F0F\u5316\u5DE5\u5177\u4E3A Prettier - Code formatter</span>\n  <span class="token comment">// \u5F53\u6587\u4EF6\u5B58\u5728\u591A\u4E2A VS Code \u7684 formatter \u63D2\u4EF6\u5BF9\u540C\u4E00\u4E2A\u6587\u4EF6\u7C7B\u578B\u8FDB\u884C\u683C\u5F0F\u5316\u65F6\uFF0C\u9700\u8981\u624B\u52A8\u9009\u62E9 prettier-vscode \u5373 Prettier - Code formatter \u63D2\u4EF6</span>\n  <span class="token property">&quot;[jsonc]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// \u5173\u95ED\u7F16\u8F91\u5668\u5BF9 js \u6587\u4EF6\u7684\u683C\u5F0F\u5316\uFF0C\u4EA4\u7ED9 ESLint \u6765\u505A\u683C\u5F0F\u5316\uFF0C\u5426\u5219\u4F1A\u683C\u5F0F\u5316\u4E24\u6B21</span>\n    <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// Eslint \u63D2\u4EF6\u914D\u7F6E\uFF0C\u8BE6\u89C1 https://github.com/microsoft/vscode-eslint</span>\n  <span class="token comment">// Enables auto fix on save. Please note auto fix on save is only available if VS Code&#39;s files.autoSave is either off, onFocusChange or onWindowChange. It will not work with afterDelay.</span>\n  <span class="token property">&quot;eslint.autoFixOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;eslint.alwaysShowStatus&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token comment">// An array of language ids which should be validated by ESLint</span>\n  <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;autoFix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;autoFix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;autoFix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// Vetur\uFF08\u82E5\u5B89\u88C5\u4E86\u6B64\u63D2\u4EF6\u7684\u8BDD\uFF09</span>\n  <span class="token comment">// \u5173\u95ED vetur \u7684\u683C\u5F0F\u5316\u529F\u80FD</span>\n  <span class="token property">&quot;vetur.format.enable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token comment">// \u5173\u95ED vetur \u5BF9 template \u7684\u68C0\u67E5\uFF0C\u4EA4\u7ED9 eslint\uFF0C\u8BE6\u89C1\uFF1Ahttps://vuejs.github.io/vetur/linting-error.html#linting-for-template</span>\n  <span class="token property">&quot;vetur.validation.template&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>\u4E3B\u8981\u7684\u914D\u7F6E\u5185\u5BB9\u6709:</p><ul><li>\u5173\u95ED Vetur \u5BF9\u6587\u4EF6\u7684\u683C\u5F0F\u5316\u53CA\u5BF9<code>&lt;template&gt;</code>\u7684\u68C0\u67E5\uFF08\u82E5\u662F\u5B58\u5728 Vetur \u63D2\u4EF6\uFF09</li><li>\u542F\u7528 ESLint \u63D2\u4EF6\u5BF9\u6587\u4EF6\u7684\u81EA\u52A8\u683C\u5F0F\u5316\u548C\u4FEE\u590D\u529F\u80FD</li><li>\u8BBE\u7F6E\u6587\u4EF6\u7684\u683C\u5F0F\u5316\u5DE5\u5177\u4E3A Prettier - Code formatter\uFF08\u5F53\u51FA\u73B0\u5BF9\u540C\u4E00\u6587\u4EF6\u7C7B\u578B\u7684\u591A\u4E2A formatter \u65F6\uFF0C\u9700\u8981\u624B\u52A8\u9009\u62E9\u4F7F\u7528 Prettier - Code formatter\uFF09</li></ul>', 36);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#prettier-\u7B80\u4ECB" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4E3A\u4EC0\u4E48\u4F7F\u7528-prettier" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#prettier-\u4E0E-linters" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#eslint-config-prettier" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#eslint-plugin-prettier" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#eslint-config-prettier-\u548C-eslint-plugin-prettier-\u7684\u96C6\u6210" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u63A8\u8350\u914D\u7F6E" }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5B89\u88C5\u4F9D\u8D56" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u914D\u7F6E-eslintrc" }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u914D\u7F6E-prettier-\u89C4\u5219" }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#prettier-\u6240\u6709\u914D\u7F6E\u9879" }, {
                    default: withCtx(() => [
                      _hoisted_13
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u96C6\u6210\u5176\u4ED6-eslint-\u63D2\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_14
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#vs-code-\u914D\u7F6E" }, {
            default: withCtx(() => [
              _hoisted_15
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_16,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_25,
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_26, [
              _hoisted_27,
              createVNode(_component_OutboundLink)
            ])
          ]),
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
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_32, [
              _hoisted_33,
              createVNode(_component_OutboundLink)
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _hoisted_34,
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_35, [
              _hoisted_36,
              createVNode(_component_OutboundLink)
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_37, [
              _hoisted_38,
              createVNode(_component_OutboundLink)
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_39, [
              _hoisted_40,
              createVNode(_component_OutboundLink)
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_41, [
              _hoisted_42,
              createVNode(_component_OutboundLink)
            ])
          ])
        ])
      ])
    ]),
    _hoisted_43,
    _hoisted_44,
    _hoisted_45,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_46, [
        _hoisted_47,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_48
    ]),
    _hoisted_49,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_53, [
        _hoisted_54,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_55
    ]),
    _hoisted_56,
    createVNode(_component_global_config)
  ], 64);
}
var eslintPrettier_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { eslintPrettier_html as default };
