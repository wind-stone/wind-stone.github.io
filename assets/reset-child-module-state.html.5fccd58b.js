import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u4F18\u96C5\u5730\u91CD\u7F6E-vuex-\u5B50\u6A21\u5757\u7684-state",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u4F18\u96C5\u5730\u91CD\u7F6E-vuex-\u5B50\u6A21\u5757\u7684-state",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u4F18\u96C5\u5730\u91CD\u7F6E Vuex \u5B50\u6A21\u5757\u7684 State")
], -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u53C2\u8003: ");
const _hoisted_3 = {
  href: "https://tahazsh.com/vuebyte-reset-module-state",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Reset Vuex Module State Like a Pro");
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<p>Vue SPA \u9879\u76EE\u91CC\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u4F7F\u7528 Vuex \u7BA1\u7406\u5E94\u7528\u91CC\u7684\u6570\u636E\uFF0C\u4E14\u4F1A\u4F9D\u636E\u8DEF\u7531\u6765\u62C6\u5206 Store \u7684\u5B50\u6A21\u5757\uFF08<code>child module</code>\uFF09\uFF0C\u6BCF\u4E2A\u8DEF\u7531\u5BF9\u5E94\u4E00\u4E2A\u5B50\u6A21\u5757\u3002</p><p>\u800C\u5728\u8DEF\u7531\u5207\u6362\u65F6\uFF0C\u65E7\u7684\u8DEF\u7531\u5BF9\u5E94\u7684\u5B50\u6A21\u5757\u53EF\u80FD\u5C31\u4E0D\u518D\u9700\u8981\uFF0C\u8FD9\u65F6\u5019\u5C31\u8981\u6E05\u7406\u5B50\u6A21\u5757\u7684<code>state</code>\uFF0C\u4EE5\u4FBF\u91CA\u653E\u5185\u5B58\uFF0C\u6216\u4E0B\u6B21\u518D\u6B21\u8FDB\u5165\u8BE5\u65E7\u8DEF\u7531\u65F6\u53EF\u4EE5\u83B7\u53D6\u5230\u521D\u59CB\u7684<code>state</code>\u6570\u636E\u3002</p><p>\u90A3\u4E48\u5982\u4F55\u4F18\u96C5\u5730\u91CD\u7F6E\u5B50\u6A21\u5757\u7684<code>state</code>\u5462\uFF1F</p><p>\u5047\u8BBE\u6211\u4EEC\u7684 Store \u76EE\u5F55\u5982\u4E0B\uFF1A</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>store\n\u251C\u2500\u2500 index.js\n\u2514\u2500\u2500 modules\n    \u2514\u2500\u2500 cart.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u91CD\u7F6E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getDefaultState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    items<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    status<span class="token operator">:</span> <span class="token string">&#39;empty&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// initial state</span>\n<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">getDefaultState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">resetCartState</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;resetState&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">addItem</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> state<span class="token punctuation">,</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">resetState</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token function">getDefaultState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  state<span class="token punctuation">,</span>\n  getters<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  actions<span class="token punctuation">,</span>\n  mutations\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>', 7);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      _hoisted_2,
      createBaseVNode("a", _hoisted_3, [
        _hoisted_4,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_5,
    createVNode(_component_global_config)
  ], 64);
}
var resetChildModuleState_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { resetChildModuleState_html as default };
