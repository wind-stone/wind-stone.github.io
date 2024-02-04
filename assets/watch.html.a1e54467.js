import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "watch",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#watch",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" watch")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("initWatch");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("vm.$watch()");
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "initwatch",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#initwatch",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" initWatch")
], -1);
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u7EC4\u4EF6\u9009\u9879\u5BF9\u8C61\u91CC\u5B58\u5728");
const _hoisted_7 = {
  href: "https://cn.vuejs.org/v2/api/#watch",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("code", null, "watch", -1);
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u9009\u9879");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\uFF0C\u5728\u7EC4\u4EF6\u521D\u59CB\u5316\u72B6\u6001\u6570\u636E\u7684\u6700\u540E\uFF0C\u5C06\u521D\u59CB\u5316");
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("code", null, "watch", -1);
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u6570\u636E\u3002");
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<p>\u521D\u59CB\u5316<code>watch</code>\u5C31\u662F\u4E3A<code>watch</code>\u9009\u9879\u91CC\u7684\u6BCF\u4E00\u9879\u8C03\u7528<code>vm.$watch</code>\u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A Watcher\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C<code>watch</code>\u7684<code>key</code>\u5BF9\u5E94\u7684<code>value</code>\u7684\u5F62\u5F0F\u6709\u591A\u79CD\uFF1A</p><ul><li>\u51FD\u6570</li><li>\u7EC4\u4EF6\u7684\u65B9\u6CD5\u540D</li><li>\u5BF9\u8C61\uFF0C\u81F3\u5C11\u5305\u542B<code>handler</code>\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u6709<code>depp</code>\u5C5E\u6027\u548C<code>immediate</code>\u5C5E\u6027</li><li>\u6570\u7EC4\uFF0C\u5143\u7D20\u662F\u51FD\u6570</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">initWatch</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token operator">:</span> Component<span class="token punctuation">,</span> watch<span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> watch<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> handler <span class="token operator">=</span> watch<span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> handler<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">createWatcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> handler<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token function">createWatcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">createWatcher</span> <span class="token punctuation">(</span>\n  <span class="token parameter">vm<span class="token operator">:</span> Component<span class="token punctuation">,</span>\n  expOrFn<span class="token operator">:</span> string <span class="token operator">|</span> Function<span class="token punctuation">,</span>\n  handler<span class="token operator">:</span> any<span class="token punctuation">,</span>\n  options<span class="token operator">?</span><span class="token operator">:</span> Object</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    options <span class="token operator">=</span> handler\n    handler <span class="token operator">=</span> handler<span class="token punctuation">.</span>handler\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> handler <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    handler <span class="token operator">=</span> vm<span class="token punctuation">[</span>handler<span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> vm<span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span>expOrFn<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> options<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="vm-watch" tabindex="-1"><a class="header-anchor" href="#vm-watch" aria-hidden="true">#</a> vm.$watch()</h2><p>\u5728\u5BFC\u51FA<code>Vue</code>\u6784\u9020\u51FD\u6570\u4E4B\u524D\uFF0C\u4F1A\u5148\u8C03\u7528<code>stateMixin(Vue)</code>\u4E3A\u5176\u6DFB\u52A0\u4E00\u4E9B\u539F\u578B\u65B9\u6CD5\uFF0C\u6BD4\u5982<code>$watch</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/core/instance/state.js</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">stateMixin</span> <span class="token punctuation">(</span><span class="token parameter">Vue<span class="token operator">:</span> Class<span class="token operator">&lt;</span>Component<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$watch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>\n    <span class="token parameter">expOrFn<span class="token operator">:</span> string <span class="token operator">|</span> Function<span class="token punctuation">,</span>\n    cb<span class="token operator">:</span> any<span class="token punctuation">,</span>\n    options<span class="token operator">?</span><span class="token operator">:</span> Object</span>\n  <span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> vm<span class="token operator">:</span> Component <span class="token operator">=</span> <span class="token keyword">this</span>\n\n    <span class="token comment">// cb \u53EF\u4EE5\u5305\u542B\u5728 options \u91CC\uFF0C\u6B64\u5904\u5904\u7406 $watch(expOrFn, options)\u7684\u60C5\u51B5</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">createWatcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> expOrFn<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> options<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    options<span class="token punctuation">.</span>user <span class="token operator">=</span> <span class="token boolean">true</span>\n    <span class="token keyword">const</span> watcher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> expOrFn<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> options<span class="token punctuation">)</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// \u7ACB\u5373\u6267\u884C\u56DE\u8C03</span>\n      <span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> watcher<span class="token punctuation">.</span>value<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// \u8FD4\u56DE\u53D6\u6D88\u76D1\u542C\u51FD\u6570</span>\n    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">unwatchFn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      watcher<span class="token punctuation">.</span><span class="token function">teardown</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u901A\u8FC7<code>$watch</code>\u521B\u5EFA\u7684 Watcher \u5B9E\u4F8B\uFF0C\u5176<code>options</code>\u53C2\u6570\u7684<code>user</code>\u5C5E\u6027\u4E3A<code>true</code>\uFF0C\u4EE5\u533A\u5206\u51FA\u662F\u7528\u6237\u521B\u5EFA\u7684 Watcher \u8FD8\u662F Vue \u5185\u90E8\u521B\u5EFA\u7684 Watcher\u3002</p>', 8);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#initwatch" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#vm-watch" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_5,
    createBaseVNode("p", null, [
      _hoisted_6,
      createBaseVNode("a", _hoisted_7, [
        _hoisted_8,
        _hoisted_9,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_10,
      _hoisted_11,
      _hoisted_12
    ]),
    _hoisted_13,
    createVNode(_component_global_config)
  ], 64);
}
var watch_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { watch_html as default };
