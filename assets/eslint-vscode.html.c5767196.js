import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "eslint-vscode-\u914D\u7F6E",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#eslint-vscode-\u914D\u7F6E",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" ESLint - VSCode \u914D\u7F6E")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u5B89\u88C5 ESLint \u6269\u5C55");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("User Setting \u6DFB\u52A0\u914D\u7F6E");
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="\u5B89\u88C5-eslint-\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-eslint-\u6269\u5C55" aria-hidden="true">#</a> \u5B89\u88C5 ESLint \u6269\u5C55</h2><p>\u5728 VSCode Extensions \u91CC\uFF0C\u641C\u7D22<code>ESLint</code>\u5E76\u5B89\u88C5\u3002</p><h2 id="user-setting-\u6DFB\u52A0\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#user-setting-\u6DFB\u52A0\u914D\u7F6E" aria-hidden="true">#</a> User Setting \u6DFB\u52A0\u914D\u7F6E</h2><p>Code -&gt; \u9996\u9009\u9879\uFF08<code>Preferences</code>\uFF09 -&gt; \u8BBE\u7F6E\uFF08<code>Settings</code>\uFF09\uFF0C\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token comment">// Format a file on save. A formatter must be available, the file must not be auto-saved, and editor must not be shutting down.</span>\n  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token comment">// \u8BBE\u7F6E\u6587\u4EF6\u9ED8\u8BA4\u7684\u683C\u5F0F\u5316\u5DE5\u5177\u4E3A Prettier - Code formatter</span>\n  <span class="token comment">// \u5F53\u6587\u4EF6\u5B58\u5728\u591A\u4E2A VS Code \u7684 formatter \u63D2\u4EF6\u5BF9\u540C\u4E00\u4E2A\u6587\u4EF6\u7C7B\u578B\u8FDB\u884C\u683C\u5F0F\u5316\u65F6\uFF0C\u9700\u8981\u624B\u52A8\u9009\u62E9 prettier-vscode \u5373 Prettier - Code formatter \u63D2\u4EF6</span>\n  <span class="token property">&quot;[jsonc]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// \u5173\u95ED\u7F16\u8F91\u5668\u5BF9 js \u6587\u4EF6\u7684\u683C\u5F0F\u5316\uFF0C\u4EA4\u7ED9 ESLint \u6765\u505A\u683C\u5F0F\u5316\uFF0C\u5426\u5219\u4F1A\u683C\u5F0F\u5316\u4E24\u6B21</span>\n    <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// Eslint \u63D2\u4EF6\u914D\u7F6E\uFF0C\u8BE6\u89C1 https://github.com/microsoft/vscode-eslint</span>\n  <span class="token comment">// Enables auto fix on save. Please note auto fix on save is only available if VS Code&#39;s files.autoSave is either off, onFocusChange or onWindowChange. It will not work with afterDelay.</span>\n  <span class="token property">&quot;eslint.autoFixOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;eslint.alwaysShowStatus&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token comment">// An array of language ids which should be validated by ESLint</span>\n  <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;autoFix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;autoFix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;autoFix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// Vetur</span>\n  <span class="token comment">// \u5173\u95ED vetur \u7684\u683C\u5F0F\u5316\u529F\u80FD</span>\n  <span class="token property">&quot;vetur.format.enable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token comment">// \u5173\u95ED vetur \u5BF9 template \u7684\u68C0\u67E5\uFF0C\u4EA4\u7ED9 eslint\uFF0C\u8BE6\u89C1\uFF1Ahttps://vuejs.github.io/vetur/linting-error.html#linting-for-template</span>\n  <span class="token property">&quot;vetur.validation.template&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>\u914D\u7F6E\u6B64\u9879\uFF0CVSCode \u53EF\u5BF9<code>.html</code>\u3001<code>.js</code>\u548C<code>.vue</code>\u7B49\u6587\u4EF6\u7684 ESLint \u68C0\u67E5\u3002VSCode \u914D\u7F6E\u5B8C\u4E86\u4E4B\u540E\uFF0C\u5982\u679C\u4E0D\u53EF\u7528\uFF0C\u53EF\u91CD\u542F\u4E0B VSCode\u3002</p>', 6);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5B89\u88C5-eslint-\u6269\u5C55" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#user-setting-\u6DFB\u52A0\u914D\u7F6E" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_5,
    createVNode(_component_global_config)
  ], 64);
}
var eslintVscode_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { eslintVscode_html as default };
