import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u683C\u5F0F\u5316",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u683C\u5F0F\u5316",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u683C\u5F0F\u5316")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u6570\u5B57");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u91D1\u989D\u683C\u5F0F\u5316");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5C06\u6570\u5B57\u8F6C\u6362\u6210\u4EBF\u3001\u4E07");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5B57\u7B26\u4E32\u683C\u5F0F\u5316");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u547D\u540D\u65B9\u6CD5\u8F6C\u6362");
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<h2 id="\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57" aria-hidden="true">#</a> \u6570\u5B57</h2><h3 id="\u91D1\u989D\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#\u91D1\u989D\u683C\u5F0F\u5316" aria-hidden="true">#</a> \u91D1\u989D\u683C\u5F0F\u5316</h3><p><strong>\u53BB\u9664\u91D1\u989D\u91CC\u5C0F\u6570\u70B9\u540E\u65E0\u610F\u4E49\u7684<code>0</code></strong>\uFF0C\u53EF\u4F7F\u7528<code>parseFloat</code>\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;2.00&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>\n<span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;2.20&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 2.2</span>\n<span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;2.02&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 2.02</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5C06\u6570\u5B57\u8F6C\u6362\u6210\u4EBF\u3001\u4E07" tabindex="-1"><a class="header-anchor" href="#\u5C06\u6570\u5B57\u8F6C\u6362\u6210\u4EBF\u3001\u4E07" aria-hidden="true">#</a> \u5C06\u6570\u5B57\u8F6C\u6362\u6210\u4EBF\u3001\u4E07</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">formatCount</span><span class="token punctuation">(</span><span class="token parameter">count<span class="token punctuation">,</span> precision <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token number">100000000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token punctuation">(</span>count <span class="token operator">/</span> <span class="token number">100000000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span>precision<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;\u4EBF&#39;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token number">10000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token punctuation">(</span>count <span class="token operator">/</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span>precision<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;\u4E07&#39;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> count<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u52A0<code>parseFloat</code>\u7684\u539F\u56E0\u662F\uFF0C\u5C06<code>2.0</code>\u8F6C\u6210<code>2</code>\u3002</p><h2 id="\u5B57\u7B26\u4E32\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u683C\u5F0F\u5316" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u683C\u5F0F\u5316</h2><h3 id="\u547D\u540D\u65B9\u6CD5\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u65B9\u6CD5\u8F6C\u6362" aria-hidden="true">#</a> \u547D\u540D\u65B9\u6CD5\u8F6C\u6362</h3><ul><li>\u5C0F\u9A7C\u5CF0\u547D\u540D\u6CD5\uFF0CcamelCase</li><li>\u5927\u9A7C\u5CF0\u547D\u540D\u6CD5\uFF0CUpperCamelCase\uFF0C\u4E5F\u79F0\u4E3A Pascal \u547D\u540D\u6CD5\u3002</li><li>\u4E2D\u5212\u7EBF\u547D\u540D\u6CD5\uFF0Ckebab-case</li><li>\u4E0B\u5212\u7EBF\u547D\u540D\u6CD5\uFF0Csnake_case</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * Camelize a hyphen-delimited string.\n */</span>\n<span class="token keyword">const</span> camelizeRE <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">-(\\w)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> camelize <span class="token operator">=</span> <span class="token punctuation">(</span>str<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>camelizeRE<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> c <span class="token operator">?</span> c<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * Hyphenate a camelCase string.\n */</span>\n<span class="token keyword">const</span> hyphenateRE <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\B([A-Z])</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> hyphenate <span class="token operator">=</span> <span class="token punctuation">(</span>str<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>hyphenateRE<span class="token punctuation">,</span> <span class="token string">&#39;-$1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>', 12);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6570\u5B57" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u91D1\u989D\u683C\u5F0F\u5316" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5C06\u6570\u5B57\u8F6C\u6362\u6210\u4EBF\u3001\u4E07" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5B57\u7B26\u4E32\u683C\u5F0F\u5316" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u547D\u540D\u65B9\u6CD5\u8F6C\u6362" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_8,
    createVNode(_component_global_config)
  ], 64);
}
var format_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { format_html as default };
