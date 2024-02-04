import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u6307\u4EE4",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6307\u4EE4",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6307\u4EE4")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("v-model");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u81EA\u5B9A\u4E49\u7EC4\u4EF6 v-model");
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "v-model",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#v-model",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" v-model")
], -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u81EA\u5B9A\u4E49\u7EC4\u4EF6-v-model",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u81EA\u5B9A\u4E49\u7EC4\u4EF6-v-model",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u81EA\u5B9A\u4E49\u7EC4\u4EF6 v-model")
], -1);
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u524D\u63D0\u77E5\u8BC6\u70B9\uFF1A");
const _hoisted_8 = {
  href: "https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684 v-model");
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/core/vdom/create-component.js</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createComponent</span> <span class="token punctuation">(</span>\n  <span class="token parameter">Ctor<span class="token operator">:</span> Class<span class="token operator">&lt;</span>Component<span class="token operator">&gt;</span> <span class="token operator">|</span> Function <span class="token operator">|</span> Object <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">,</span>\n  data<span class="token operator">:</span> <span class="token operator">?</span>VNodeData<span class="token punctuation">,</span>\n  context<span class="token operator">:</span> Component<span class="token punctuation">,</span>\n  children<span class="token operator">:</span> <span class="token operator">?</span>Array<span class="token operator">&lt;</span>VNode<span class="token operator">&gt;</span><span class="token punctuation">,</span>\n  tag<span class="token operator">?</span><span class="token operator">:</span> string</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> VNode <span class="token operator">|</span> Array<span class="token operator">&lt;</span>VNode<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token comment">// transform component v-model data into props &amp; events</span>\n  <span class="token comment">// \u5C06 v-model \u6570\u636E\u8F6C\u6362\u4E3A props&amp;events</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>model<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">transformModel</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>options<span class="token punctuation">,</span> data<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// transform component v-model info (value and callback) into</span>\n<span class="token comment">// prop and event handler respectively.</span>\n<span class="token doc-comment comment">/**\n * \u5C06 v-model \u8F6C\u6362\u5230\u5B50\u7EC4\u4EF6\u7684 prop\u3001event\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">options</span> \u7EC4\u4EF6\u9009\u9879\u5BF9\u8C61\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">data</span> \u7EC4\u4EF6\u6570\u636E\u5BF9\u8C61\uFF08\u4ECE\u6A21\u5757\u89E3\u6790\u800C\u6765\u7684\u6570\u636E \u6216 \u8C03\u7528 createElement \u4F20\u5165\u7684\u6570\u636E\u5BF9\u8C61\uFF09\n */</span>\n<span class="token keyword">function</span> <span class="token function">transformModel</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> data<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> prop <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>model <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>model<span class="token punctuation">.</span>prop<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;value&#39;</span>\n  <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>model <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>model<span class="token punctuation">.</span>event<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;input&#39;</span>\n  <span class="token punctuation">;</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>props <span class="token operator">||</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">.</span>model<span class="token punctuation">.</span>value\n  <span class="token keyword">const</span> on <span class="token operator">=</span> data<span class="token punctuation">.</span>on <span class="token operator">||</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>on <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>on<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    on<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>data<span class="token punctuation">.</span>model<span class="token punctuation">.</span>callback<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>on<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    on<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">.</span>model<span class="token punctuation">.</span>callback\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>\u7EC4\u4EF6\u4E0A\u7684<code>v-model</code>\u9ED8\u8BA4\u4F1A\u5229\u7528\u540D\u4E3A<code>value</code>\u7684<code>prop</code>\u548C\u540D\u4E3A<code>input</code>\u7684\u4E8B\u4EF6\uFF0C\u4F46\u662F\u5F53\u7EC4\u4EF6\u9009\u9879\u5BF9\u8C61\u91CC\u4F20\u9012\u4E86<code>model</code>\u5C5E\u6027\uFF0C\u5219\u4F1A\u4F7F\u7528<code>model</code>\u5C5E\u6027\u7684<code>prop</code>\u548C<code>event</code>\u3002</p><p>\u5728\u6A21\u677F\u7F16\u8BD1\u9636\u6BB5\uFF0C\u4F1A\u5C06<code>v-model</code>\u7ED1\u5B9A\u7684\u503C\u4F20\u7ED9<code>data.model.value</code>\uFF0C\u5E76\u6DFB\u52A0<code>data.model.callback</code>\u7528\u4E8E\u6539\u53D8<code>data.model.value</code>\u7684\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code></code></pre><div class="line-numbers"></div></div><p>\u5F85\u8865\u5145\u5185\u5BB9</p>', 5);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#v-model" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u81EA\u5B9A\u4E49\u7EC4\u4EF6-v-model" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_5,
    _hoisted_6,
    createBaseVNode("p", null, [
      _hoisted_7,
      createBaseVNode("a", _hoisted_8, [
        _hoisted_9,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_10,
    createVNode(_component_global_config)
  ], 64);
}
var directives_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { directives_html as default };
