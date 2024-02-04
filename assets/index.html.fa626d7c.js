import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u670D\u52A1\u5668\u73AF\u5883",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u670D\u52A1\u5668\u73AF\u5883",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u670D\u52A1\u5668\u73AF\u5883")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u83B7\u53D6\u672C\u673A IPv4 \u5730\u5740");
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="\u83B7\u53D6\u672C\u673A-ipv4-\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u672C\u673A-ipv4-\u5730\u5740" aria-hidden="true">#</a> \u83B7\u53D6\u672C\u673A IPv4 \u5730\u5740</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * \u83B7\u53D6\u672C\u673A IPv4 \u5730\u5740\n * Reference: https://nodejs.org/dist/latest-v6.x/docs/api/os.html#os_os_networkinterfaces\n */</span>\nexports<span class="token punctuation">.</span><span class="token function-variable function">getIPv4Addr</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> networkInterfaces <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;os&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">networkInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> addresses <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>networkInterfaces<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">networkInterface</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        networkInterfaces<span class="token punctuation">[</span>networkInterface<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>address<span class="token punctuation">.</span>internal <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> address<span class="token punctuation">.</span>family <span class="token operator">===</span> <span class="token string">&#39;IPv4&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                addresses<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>address<span class="token punctuation">.</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> addresses<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> addresses<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>', 2);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u83B7\u53D6\u672C\u673A-ipv4-\u5730\u5740" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_4,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
