import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "vs-code",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#vs-code",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" VS Code")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("JavaScript \u914D\u7F6E");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u4F7F\u7528 webpack alias");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("monorepo \u67B6\u6784\u5B50\u5E94\u7528\u91CC vue \u6587\u4EF6\u5185 Vetur \u62A5\u9519");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u6269\u5C55");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Emmet");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("ESLint");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Vetur");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u5FEB\u901F\u6536\u8D77 node_modules");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u884C\u5185\u663E\u793A\u9519\u8BEF\u4FE1\u606F");
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "javascript-\u914D\u7F6E",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#javascript-\u914D\u7F6E",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" JavaScript \u914D\u7F6E")
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u4F7F\u7528-webpack-alias",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u4F7F\u7528-webpack-alias",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u4F7F\u7528 webpack alias")
], -1);
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u9488\u5BF9\u975E TypeScript \u7684 JavaScript \u9879\u76EE\uFF0CVSCode \u7684 IntelliSense \u65E0\u6CD5\u8BC6\u522B Webpack \u7684");
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("code", null, "alias", -1);
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\uFF0C\u56E0\u6B64\u65E0\u6CD5\u70B9\u51FB\u8DF3\u8F6C\u3002\u53EF\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u914D\u7F6E");
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("code", null, "jsconfig.json", -1);
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002\u8BE6\u89C1");
const _hoisted_19 = {
  href: "https://code.visualstudio.com/docs/languages/jsconfig",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createTextVNode("VSCode - jsconfig.json");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_22 = /* @__PURE__ */ createStaticVNode('<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>TypeScript \u9879\u76EE\u53EF\u5728<code>tsconfig.json</code>\u91CC\u8FDB\u884C\u914D\u7F6E\u3002</p></div><h3 id="monorepo-\u67B6\u6784\u5B50\u5E94\u7528\u91CC-vue-\u6587\u4EF6\u5185-vetur-\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#monorepo-\u67B6\u6784\u5B50\u5E94\u7528\u91CC-vue-\u6587\u4EF6\u5185-vetur-\u62A5\u9519" aria-hidden="true">#</a> monorepo \u67B6\u6784\u5B50\u5E94\u7528\u91CC vue \u6587\u4EF6\u5185 Vetur \u62A5\u9519</h3><p>\u82E5\u5DE5\u7A0B\u7684\u4ED3\u5E93\u91C7\u7528 monorepo \u67B6\u6784\uFF0C\u5219\u8BE5\u5DE5\u7A0B\u7684\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>\u251C\u2500\u2500 apps\n\u2502   \u251C\u2500\u2500 appA\n\u2502   \u2502   \u251C\u2500\u2500 src\n\u2502   \u2502   \u2502   \u251C\u2500\u2500 App.vue\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 main.ts\n\u2502   \u2502   \u251C\u2500\u2500 .eslintrc.js\n\u2502   \u2502   \u251C\u2500\u2500 package.json\n\u2502   \u2502   \u251C\u2500\u2500 README.md\n\u2502   \u2502   \u2514\u2500\u2500 ...\n\u2502   \u251C\u2500\u2500 appB\n\u2502   \u2514\u2500\u2500 ...\n\u251C\u2500\u2500 packages\n\u2502   \u251C\u2500\u2500 packageA\n\u2502   \u251C\u2500\u2500 packageB\n\u2502   \u2514\u2500\u2500 ...\n\u251C\u2500\u2500 package.json\n\u251C\u2500\u2500 README.md\n\u2514\u2500\u2500 ...\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u82E5\u662F\u4F7F\u7528 VSCode \u6253\u5F00 monorepo \u7684\u6839\u76EE\u5F55\uFF0C\u5219\u5728 appA \u5B50\u5E94\u7528\u91CC\u7684 Vue \u6587\u4EF6\u5185\u5F15\u5165\uFF08\u901A\u8FC7 Webpack \u914D\u7F6E\u4E86\u522B\u540D\u7684\uFF09\u6A21\u5757\u65F6\uFF0CVetur \u4F1A\u62A5\u9519\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Cannot find module <span class="token string">&#39;@/common/log&#39;</span> or its corresponding type declarations<span class="token punctuation">.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E14\u65E0\u6CD5\u901A\u8FC7 Command \u2318 \u952E + \u9F20\u6807\u5DE6\u952E\u8DF3\u8F6C\u5230\u5F15\u5165\u6A21\u5757\u7684\u6587\u4EF6\u91CC\u3002</p><p>\u89E3\u51B3\u529E\u6CD5\uFF1A\u76F4\u63A5\u4F7F\u7528 VSCode \u6253\u5F00 appA \u76EE\u5F55\uFF0C\u8BA9 appA \u76EE\u5F55\u6210\u4E3A VSCode \u7A97\u53E3\u7684\u6839\u8DEF\u5F84\u3002</p>', 8);
const _hoisted_30 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1: ");
const _hoisted_31 = {
  href: "https://segmentfault.com/q/1010000021004226",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_32 = /* @__PURE__ */ createTextVNode("vscode\u4E2Dvetur\u63D2\u4EF6\u63D0\u793A\u627E\u4E0D\u5230\u8BBE\u7F6E\u4E86alias\u7684\u6A21\u5757");
const _hoisted_33 = /* @__PURE__ */ createStaticVNode('<h2 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h2><p>\u4ECB\u7ECD\u4E00\u4E9B VS Code \u7684\u5E38\u7528\u6269\u5C55\uFF0C\u4EE5\u53CA\u6839\u636E\u4E2A\u4EBA/\u56E2\u961F/\u9879\u76EE\u7684\u9700\u6C42\u4F5C\u51FA\u7684\u81EA\u5B9A\u4E49\u914D\u7F6E\u3002</p><h3 id="emmet" tabindex="-1"><a class="header-anchor" href="#emmet" aria-hidden="true">#</a> Emmet</h3><p>TODO:</p><h3 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> ESLint</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token comment">// Turns auto fix on save on or off. Please note auto fix on save is only available if VS Code&#39;s files.autoSave is either off, onFocusChange or onWindowChange. It will not work with afterDelay.</span>\n    <span class="token property">&quot;eslint.autoFixOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// An array of language ids which should be validated by ESLint</span>\n    <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>\n        <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>\n        <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>\n        <span class="token comment">// You can also control which plugins should provide auto fix support. To do so simply provide an object literal in the validate setting with the properties language and autoFix instead of a simple string.</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;autoFix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u6CE8\u610F\uFF0CVS Code \u7684 ESLint \u63D2\u4EF6\uFF0C\u9ED8\u8BA4\u4F1A\u76F8\u5BF9\u4E8E\u5DE5\u4F5C\u76EE\u5F55\u6765\u89E3\u6790\u914D\u7F6E\u6587\u4EF6\uFF08\u6BD4\u5982<code>.eslintrc</code>/<code>.eslintignore</code>\u6587\u4EF6\uFF09\uFF0C\u53EF\u901A\u8FC7<code>eslint.workingDirectories</code>\u8FDB\u884C\u4FEE\u6539\uFF0C\u4F46\u662F\u4E00\u822C\u4E0D\u9700\u8981\u3002</p><h3 id="vetur" tabindex="-1"><a class="header-anchor" href="#vetur" aria-hidden="true">#</a> Vetur</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token comment">// \u8FD9\u4E9B\u662F\u9ED8\u8BA4\u503C</span>\n    <span class="token property">&quot;vetur.format.defaultFormatter.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettyhtml&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;vetur.format.defaultFormatter.css&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;vetur.format.defaultFormatter.postcss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;vetur.format.defaultFormatter.scss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;vetur.format.defaultFormatter.less&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;vetur.format.defaultFormatter.stylus&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylus-supremacy&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;vetur.format.defaultFormatter.js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;vetur.format.defaultFormatter.ts&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// \u8FD9\u4E9B\u4F1A\u8986\u76D6\u9ED8\u8BA4\u503C</span>\n    <span class="token property">&quot;vetur.format.defaultFormatter.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// \u683C\u5F0F\u5316\u914D\u7F6E</span>\n    <span class="token property">&quot;vetur.format.options.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;vetur.format.options.useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>', 9);
const _hoisted_42 = /* @__PURE__ */ createTextVNode("\u6CE8\u610F\uFF0C\u9488\u5BF9\u683C\u5F0F\u5316\u7684\u914D\u7F6E\uFF0C\u82E5\u662F\u672C\u5730\u5B58\u5728\u914D\u7F6E\u6587\u4EF6\uFF08\u6BD4\u5982");
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("code", null, ".prettierrc", -1);
const _hoisted_44 = /* @__PURE__ */ createTextVNode("\uFF09\uFF0CVetur \u4F1A\u4F18\u5148\u4F7F\u7528\u672C\u5730\u914D\u7F6E\u6587\u4EF6\u91CC\u7684\u914D\u7F6E\u9879\uFF0C\u8BE6\u89C1");
const _hoisted_45 = {
  href: "https://vuejs.github.io/vetur/formatting.html#settings",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_46 = /* @__PURE__ */ createTextVNode("Vetur Formatter Config");
const _hoisted_47 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u5FEB\u901F\u6536\u8D77-node-modules",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5FEB\u901F\u6536\u8D77-node-modules",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5FEB\u901F\u6536\u8D77 node_modules")
], -1);
const _hoisted_49 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1\uFF1A");
const _hoisted_50 = {
  href: "https://zhuanlan.zhihu.com/p/176873873",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_51 = /* @__PURE__ */ createTextVNode("\u4E00\u952E\u6536\u8D77 node_modules \u6587\u4EF6\u5939");
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u884C\u5185\u663E\u793A\u9519\u8BEF\u4FE1\u606F",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u884C\u5185\u663E\u793A\u9519\u8BEF\u4FE1\u606F",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u884C\u5185\u663E\u793A\u9519\u8BEF\u4FE1\u606F")
], -1);
const _hoisted_53 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1: ");
const _hoisted_54 = {
  href: "https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_55 = /* @__PURE__ */ createTextVNode("VSCode \u63D2\u4EF6 - Error Lens");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#javascript-\u914D\u7F6E" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4F7F\u7528-webpack-alias" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#monorepo-\u67B6\u6784\u5B50\u5E94\u7528\u91CC-vue-\u6587\u4EF6\u5185-vetur-\u62A5\u9519" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6269\u5C55" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#emmet" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#eslint" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#vetur" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5FEB\u901F\u6536\u8D77-node-modules" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u884C\u5185\u663E\u793A\u9519\u8BEF\u4FE1\u606F" }, {
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
    _hoisted_12,
    _hoisted_13,
    createBaseVNode("p", null, [
      _hoisted_14,
      _hoisted_15,
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
    createBaseVNode("p", null, [
      _hoisted_30,
      createBaseVNode("a", _hoisted_31, [
        _hoisted_32,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_33,
    createBaseVNode("p", null, [
      _hoisted_42,
      _hoisted_43,
      _hoisted_44,
      createBaseVNode("a", _hoisted_45, [
        _hoisted_46,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_47
    ]),
    _hoisted_48,
    createBaseVNode("p", null, [
      _hoisted_49,
      createBaseVNode("a", _hoisted_50, [
        _hoisted_51,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_52,
    createBaseVNode("p", null, [
      _hoisted_53,
      createBaseVNode("a", _hoisted_54, [
        _hoisted_55,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var vscode_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { vscode_html as default };
