import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "eslint-vue-\u9879\u76EE\u914D\u7F6E",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#eslint-vue-\u9879\u76EE\u914D\u7F6E",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" ESLint - Vue \u9879\u76EE\u914D\u7F6E")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u5B89\u88C5\u4F9D\u8D56");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(".eslintrc \u914D\u7F6E");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("plugin:vue/recommended \u9690\u542B\u7684\u914D\u7F6E");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u547D\u4EE4\u884C\u8FD0\u884C");
const _hoisted_7 = {
  href: "https://github.com/vuejs/eslint-plugin-vue",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("code", null, "eslint-plugin-vue", -1);
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\uFF0C\u662F\u9488\u5BF9 Vue.js \u7684\u5B98\u65B9 ESLint \u63D2\u4EF6\u3002");
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u8BE5\u63D2\u4EF6\u5141\u8BB8\u6211\u4EEC\u4F7F\u7528 ESLint \u6765\u68C0\u67E5"),
  /* @__PURE__ */ createBaseVNode("code", null, ".vue"),
  /* @__PURE__ */ createTextVNode("\u6587\u4EF6\u91CC\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "<template>"),
  /* @__PURE__ */ createTextVNode("\u548C"),
  /* @__PURE__ */ createBaseVNode("code", null, "<script>"),
  /* @__PURE__ */ createTextVNode("\u6A21\u5757\u3002")
], -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("li", null, "\u53D1\u73B0\u8BED\u6CD5\u9519\u8BEF", -1);
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u53D1\u73B0");
const _hoisted_13 = {
  href: "https://vuejs.org/v2/api/#Directives",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Vue.js \u6307\u4EE4");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u7684\u4F7F\u7528\u9519\u8BEF");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u53D1\u73B0\u8FDD\u53CD");
const _hoisted_17 = {
  href: "https://vuejs.org/v2/style-guide/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_18 = /* @__PURE__ */ createTextVNode("Vue.js \u6837\u5F0F\u6307\u5357");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("\u7684\u7528\u6CD5");
const _hoisted_20 = /* @__PURE__ */ createStaticVNode('<p>ESLint \u7F16\u8F91\u5668\u96C6\u6210\u5BF9\u5B9E\u65F6\u68C0\u67E5\u4EE3\u7801\u662F\u975E\u5E38\u6709\u7528\u7684\u3002</p><h2 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -S eslint eslint-plugin-vue babel-eslint\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="eslintrc-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#eslintrc-\u914D\u7F6E" aria-hidden="true">#</a> .eslintrc \u914D\u7F6E</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// add more generic rulesets here, such as:</span>\n    <span class="token comment">// &#39;eslint:recommended&#39;,</span>\n\n    <span class="token comment">// \u4F7F\u7528 eslint-plugin-vue \u63D2\u4EF6\uFF0C\u5E76\u7EE7\u627F eslint-config-vue \u7684 recommended \u914D\u7F6E</span>\n    <span class="token string">&quot;plugin:vue/recommended&quot;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// \u81EA\u5B9A\u4E49 parser\uFF0C\u8BE6\u89C1 https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser</span>\n  <span class="token property">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;babel-eslint&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// \u8986\u76D6 ESLint \u7684\u89C4\u5219</span>\n    <span class="token comment">// ...</span>\n    <span class="token comment">// \u8986\u76D6 eslint-plugin-vue \u914D\u7F6E\u7684\u89C4\u5219</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="plugin-vue-recommended-\u9690\u542B\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#plugin-vue-recommended-\u9690\u542B\u7684\u914D\u7F6E" aria-hidden="true">#</a> plugin:vue/recommended \u9690\u542B\u7684\u914D\u7F6E</h3><p>\u6253\u5F00<code>node_modules/eslint-plugin-vue</code>\u53EF\u4EE5\u770B\u5230\uFF0C\u82E5\u662F\u5728<code>extends</code>\u91CC\u6DFB\u52A0\u4E86<code>plugin:vue/recommended</code>\uFF0C\u9ED8\u8BA4\u4F1A\u5305\u542B\u4EE5\u4E0B\u914D\u7F6E\uFF0C\u56E0\u6B64\u8FD9\u4E9B\u914D\u7F6E\u6211\u4EEC\u90FD\u4E0D\u9700\u8981\u663E\u793A\u5199\u5728<code>.eslintrc</code>\u91CC\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// node_modules/eslint-plugin-vue/lib/configs/base.js</span>\n<span class="token comment">// recommended \u7EE7\u627F\u4E86 base</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  parser<span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;vue-eslint-parser&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  parserOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n    ecmaVersion<span class="token operator">:</span> <span class="token number">2018</span><span class="token punctuation">,</span>\n    sourceType<span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>\n    ecmaFeatures<span class="token operator">:</span> <span class="token punctuation">{</span>\n      jsx<span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  env<span class="token operator">:</span> <span class="token punctuation">{</span>\n    browser<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    es6<span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  rules<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;vue/comment-directive&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;vue/jsx-uses-vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u547D\u4EE4\u884C\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u884C\u8FD0\u884C" aria-hidden="true">#</a> \u547D\u4EE4\u884C\u8FD0\u884C</h2><p>\u82E5\u662F\u60F3\u5728\u547D\u4EE4\u884C\u8FD0\u884C ESLint\uFF0C\u786E\u4FDD\u4F7F\u7528<code>--ext</code>\u9009\u9879\u5305\u542B<code>.vue</code>\u6269\u5C55\u540D\uFF0C\u6216\u4F7F\u7528 glob \u6A21\u5F0F\uFF0C\u56E0\u4E3A ESLint \u9ED8\u8BA4\u53EA\u6821\u9A8C<code>.js</code>\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>eslint --ext .js,.vue src\neslint <span class="token string">&quot;src/**/*.{js,vue}&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>', 11);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5B89\u88C5\u4F9D\u8D56" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#eslintrc-\u914D\u7F6E" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#plugin-vue-recommended-\u9690\u542B\u7684\u914D\u7F6E" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u547D\u4EE4\u884C\u8FD0\u884C" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ])
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_7, [
        _hoisted_8,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_9
    ]),
    _hoisted_10,
    createBaseVNode("ul", null, [
      _hoisted_11,
      createBaseVNode("li", null, [
        _hoisted_12,
        createBaseVNode("a", _hoisted_13, [
          _hoisted_14,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_15
      ]),
      createBaseVNode("li", null, [
        _hoisted_16,
        createBaseVNode("a", _hoisted_17, [
          _hoisted_18,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_19
      ])
    ]),
    _hoisted_20,
    createVNode(_component_global_config)
  ], 64);
}
var eslintVue_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { eslintVue_html as default };
