import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "rollup",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#rollup",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Rollup")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u7279\u6027",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7279\u6027",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7279\u6027")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u4F7F\u7528 ES6 \u6A21\u5757"),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Tree-shaking\uFF1A\u9759\u6001\u5206\u6790\u4EE3\u7801\u4E2D\u7684"),
    /* @__PURE__ */ createBaseVNode("code", null, "import"),
    /* @__PURE__ */ createTextVNode("\uFF0C\u5E76\u5C06\u6392\u9664\u4EFB\u4F55\u672A\u5B9E\u9645\u4F7F\u7528\u7684\u4EE3\u7801")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, "\u517C\u5BB9\u6027\uFF1ARollup \u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6\u5BFC\u5165\u5DF2\u5B58\u5728\u7684 CommonJS \u6A21\u5757\u3002")
], -1);
const _hoisted_4 = { class: "table-of-contents" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u7279\u6027");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5E38\u7528\u7684\u63D2\u4EF6");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("rollup-plugin-node-resolve");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("rollup-plugin-commonjs");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("rollup-plugin-babel");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u5B8C\u6574\u914D\u7F6E");
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<h2 id="\u5E38\u7528\u7684\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7684\u63D2\u4EF6" aria-hidden="true">#</a> \u5E38\u7528\u7684\u63D2\u4EF6</h2><h3 id="rollup-plugin-node-resolve" tabindex="-1"><a class="header-anchor" href="#rollup-plugin-node-resolve" aria-hidden="true">#</a> rollup-plugin-node-resolve</h3><p>Rollup \u65E0\u6CD5\u5904\u7406\u5BF9<code>node_modules</code>\u91CC\u7684\u5305\u7684\u4F9D\u8D56\uFF0C\u589E\u52A0\u6B64\u914D\u7F6E\uFF0C\u53EF\u4EE5\u8BA9 Rollup \u5177\u6709\u5BF9<code>node_modules</code>\u7684\u4F9D\u8D56\u5904\u7406\u7684\u80FD\u529B\uFF0C\u5E76\u5C06\u5176\u6253\u5305\u5230\u8F93\u51FA\u6587\u4EF6\u91CC\u3002</p><h3 id="rollup-plugin-commonjs" tabindex="-1"><a class="header-anchor" href="#rollup-plugin-commonjs" aria-hidden="true">#</a> rollup-plugin-commonjs</h3><p>\u4E00\u4E9B\u5E93\u5BFC\u51FA\u6210\u4F60\u53EF\u4EE5\u6B63\u5E38\u5BFC\u5165\u7684ES6\u6A21\u5757\uFF0C\u4F46\u662F\u76EE\u524D NPM \u4E2D\u7684\u5927\u591A\u6570\u5305\u90FD\u662F\u4EE5 CommonJS \u6A21\u5757\u7684\u5F62\u5F0F\u51FA\u73B0\u7684\u3002\u5728\u5B83\u4EEC\u66F4\u6539\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u5C06 CommonJS \u6A21\u5757\u8F6C\u6362\u4E3A ES2015 \u4F9B Rollup \u5904\u7406\u3002\u8BE5\u63D2\u4EF6\u5C31\u662F\u7528\u6765\u5C06 CommonJS \u6A21\u5757\u8F6C\u6362\u6210 ES2015 \u6A21\u5757\u7684\u3002</p><h3 id="rollup-plugin-babel" tabindex="-1"><a class="header-anchor" href="#rollup-plugin-babel" aria-hidden="true">#</a> rollup-plugin-babel</h3><p>\u914D\u7F6E Babel</p><p>Reference</p>', 8);
const _hoisted_19 = {
  href: "http://www.rollupjs.com/tools/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createTextVNode("Rollup \u4E0E\u5176\u4ED6\u5DE5\u5177\u96C6\u6210");
const _hoisted_21 = /* @__PURE__ */ createStaticVNode('<h2 id="\u5B8C\u6574\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574\u914D\u7F6E" aria-hidden="true">#</a> \u5B8C\u6574\u914D\u7F6E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/.babelrc</span>\n<span class="token punctuation">{</span>\n  <span class="token string">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token string">&quot;es2015&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;external-helpers&quot;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> resolve <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-node-resolve&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-commonjs&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  input<span class="token operator">:</span> <span class="token string">&#39;src/main.js&#39;</span><span class="token punctuation">,</span>\n  output<span class="token operator">:</span> <span class="token punctuation">{</span>\n    file<span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>\n    format<span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">babel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      exclude<span class="token operator">:</span> <span class="token string">&#39;node_modules/**&#39;</span> <span class="token comment">// \u53EA\u7F16\u8BD1\u6211\u4EEC\u7684\u6E90\u4EE3\u7801</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>', 3);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createBaseVNode("nav", _hoisted_4, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7279\u6027" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5E38\u7528\u7684\u63D2\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#rollup-plugin-node-resolve" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#rollup-plugin-commonjs" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#rollup-plugin-babel" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5B8C\u6574\u914D\u7F6E" }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_11,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_19, [
          _hoisted_20,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_21,
    createVNode(_component_global_config)
  ], 64);
}
var rollup_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { rollup_html as default };
