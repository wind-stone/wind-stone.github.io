import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "data",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#data",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" data")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("initData");
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<p>\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u5728<code>vm._init</code>\u91CC\u8C03\u7528<code>initState()</code>\u5BF9\u7EC4\u4EF6\u5B9E\u4F8B\u4E0A\u7684\u72B6\u6001\u6570\u636E\u8FDB\u884C\u521D\u59CB\u5316\uFF0C\u800C<code>initState()</code>\u91CC\u7684\u7B2C\u4E09\u9879\u5C31\u662F\u521D\u59CB\u5316<code>data</code>\u6570\u636E\uFF0C\u5904\u4E8E<code>initMethods</code>\u3001<code>initProps</code>\u4E4B\u540E\u3002</p><h2 id="initdata" tabindex="-1"><a class="header-anchor" href="#initdata" aria-hidden="true">#</a> initData</h2><p>\u521D\u59CB\u5316<code>data</code>\u4E3B\u8981\u505A\u4E86\u8FD9\u4E48\u51E0\u4EF6\u4E8B\uFF1A</p>', 3);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("\u83B7\u53D6"),
  /* @__PURE__ */ createBaseVNode("code", null, "data"),
  /* @__PURE__ */ createTextVNode("\u6700\u7EC8\u7684\u503C")
], -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("\u68C0\u67E5"),
  /* @__PURE__ */ createBaseVNode("code", null, "data"),
  /* @__PURE__ */ createTextVNode("\u5B50\u5C5E\u6027\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "key"),
  /* @__PURE__ */ createTextVNode("\u662F\u5426\u4E0E"),
  /* @__PURE__ */ createBaseVNode("code", null, "props"),
  /* @__PURE__ */ createTextVNode("\u548C"),
  /* @__PURE__ */ createBaseVNode("code", null, "methods"),
  /* @__PURE__ */ createTextVNode("\u51B2\u7A81")
], -1);
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u5C06\u5BF9");
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("code", null, "data", -1);
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u6570\u636E\u7684\u8BBF\u95EE\u4EE3\u7406\u5230");
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("code", null, "vm", -1);
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u5B9E\u4F8B\u4E0A\uFF08\u8BE6\u89C1");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u72B6\u6001\u6570\u636E - proxy");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\uFF09");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u5C06");
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("code", null, "data", -1);
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u5904\u7406\u6210\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF08\u8BE6\u89C1");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("\u54CD\u5E94\u5F0F\u539F\u7406 - observe");
const _hoisted_20 = /* @__PURE__ */ createTextVNode("\uFF09");
const _hoisted_21 = /* @__PURE__ */ createStaticVNode("<p>\u83B7\u53D6<code>data</code>\u7684\u503C\uFF0C\u662F\u56E0\u4E3A<code>data</code>\u53EF\u80FD\u662F\u51FD\u6570\uFF0C\u6267\u884C\u51FD\u6570\u5E76\u8FD4\u56DE\u6700\u7EC8\u503C\u3002\u800C\u5728\u6267\u884C<code>data</code>\u5DE5\u5382\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u51FD\u6570\u5185\u7684<code>this</code>\u5C06\u6307\u5411<code>vm</code>\uFF0C\u4E14\u5728\u6B64\u4E4B\u524D<code>props</code>\u548C<code>methods</code>\u90FD\u5DF2\u7ECF\u521D\u59CB\u5316\uFF0C\u8FD9\u4E5F\u5C31\u610F\u5473\u7740\uFF0C\u5728<code>data</code>\u91CC\u662F\u5B8C\u5168\u53EF\u4EE5\u8BBF\u95EE<code>props</code>\u7684\uFF0C\u4E5F\u53EF\u80FD\u53EF\u4EE5\u8BBF\u95EE<code>methods</code>\uFF08\u56E0\u4E3A<code>methods</code>\u91CC\u53EF\u80FD\u6D89\u53CA\u5230\u5176\u4ED6<code>data</code>\uFF0C\u6240\u4EE5\u6709\u98CE\u9669\uFF0C\u6700\u597D\u4E0D\u8981\u8FD9\u4E48\u505A\uFF09\u3002</p>", 1);
const _hoisted_22 = /* @__PURE__ */ createTextVNode("\u6B64\u5916\uFF0C\u5F53");
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("code", null, "data", -1);
const _hoisted_24 = /* @__PURE__ */ createTextVNode("\u4E3A\u5DE5\u5382\u51FD\u6570\u65F6\uFF0C\u5728\u6267\u884C\u5DE5\u5382\u51FD\u6570\u671F\u95F4\uFF0C\u8981\u7981\u7528\u4F9D\u8D56\u6536\u96C6\u529F\u80FD\uFF0C\u9632\u6B62");
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("code", null, "props", -1);
const _hoisted_26 = /* @__PURE__ */ createTextVNode("\u518D\u4E00\u6B21\u4F5C\u4E3A\u7236\u7EC4\u4EF6\u6E32\u67D3 Watcher \u7684\u4F9D\u8D56\uFF0C\u8BE6\u60C5\u53EF\u4EE5\u67E5\u770B");
const _hoisted_27 = {
  href: "https://github.com/vuejs/vue/issues/7573",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_28 = /* @__PURE__ */ createTextVNode("vue Issue #7573");
const _hoisted_29 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_30 = /* @__PURE__ */ createStaticVNode('<p>\u521D\u59CB\u5316<code>data</code>\u6570\u636E\u662F\u5728\u521D\u59CB\u5316<code>props</code>\u548C<code>methods</code>\u4E4B\u540E\uFF0C\u56E0\u6B64\u9700\u8981\u68C0\u6D4B<code>data</code>\u5B50\u5C5E\u6027\u7684<code>key</code>\uFF0C\u9632\u6B62\u5176\u4E0E<code>props</code>\u548C<code>methods</code>\u7684<code>key</code>\u91CD\u590D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">initData</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token operator">:</span> Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> data <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>data\n  data <span class="token operator">=</span> vm<span class="token punctuation">.</span>_data <span class="token operator">=</span> <span class="token keyword">typeof</span> data <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>\n    <span class="token operator">?</span> <span class="token function">getData</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> vm<span class="token punctuation">)</span>\n    <span class="token operator">:</span> data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">warn</span><span class="token punctuation">(</span>\n      <span class="token string">&#39;data functions should return an object:\\n&#39;</span> <span class="token operator">+</span>\n      <span class="token string">&#39;https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function&#39;</span><span class="token punctuation">,</span>\n      vm\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// proxy data on instance</span>\n  <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n  <span class="token keyword">const</span> props <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>props\n  <span class="token keyword">const</span> methods <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>methods\n  <span class="token keyword">let</span> i <span class="token operator">=</span> keys<span class="token punctuation">.</span>length\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> key <span class="token operator">=</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>methods <span class="token operator">&amp;&amp;</span> <span class="token function">hasOwn</span><span class="token punctuation">(</span>methods<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">warn</span><span class="token punctuation">(</span>\n          <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Method &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; has already been defined as a data property.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n          vm\n        <span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>props <span class="token operator">&amp;&amp;</span> <span class="token function">hasOwn</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">warn</span><span class="token punctuation">(</span>\n        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">The data property &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; is already declared as a prop. </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>\n        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Use prop default value instead.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n        vm\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isReserved</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// \u628A\u5BF9 data \u91CC\u7684\u6570\u636E\u7684\u8BBF\u95EE\u4EE3\u7406\u5230 vm \u4E0A</span>\n      <span class="token function">proxy</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">_data</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// observe data</span>\n  <span class="token function">observe</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* asRootData */</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token doc-comment comment">/**\n * \u6267\u884C data \u5DE5\u5382\u51FD\u6570\uFF0C\u8FD4\u56DE\u7ED3\u679C\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">data</span> data \u5DE5\u5382\u51FD\u6570\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">vm</span> vm \u5B9E\u4F8B\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getData</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token operator">:</span> Function<span class="token punctuation">,</span> vm<span class="token operator">:</span> Component</span><span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>\n  <span class="token comment">// #7573 disable dep collection when invoking data getters</span>\n  <span class="token comment">// \u8BBE\u7F6E\u5F53\u524D\u7684 Dep.target \u4E3A undefined\uFF0C\u5373\u4E0D\u505A\u4F9D\u8D56\u6536\u96C6</span>\n  <span class="token function">pushTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">data</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> vm<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">data()</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n    <span class="token function">popTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div>', 2);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#initdata" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_4,
    createBaseVNode("ol", null, [
      _hoisted_7,
      _hoisted_8,
      createBaseVNode("li", null, [
        _hoisted_9,
        _hoisted_10,
        _hoisted_11,
        _hoisted_12,
        _hoisted_13,
        createVNode(_component_RouterLink, { to: "/vue/source-study/instance/state/#proxy" }, {
          default: withCtx(() => [
            _hoisted_14
          ]),
          _: 1
        }),
        _hoisted_15
      ]),
      createBaseVNode("li", null, [
        _hoisted_16,
        _hoisted_17,
        _hoisted_18,
        createVNode(_component_RouterLink, { to: "/vue/source-study/observer/#observe" }, {
          default: withCtx(() => [
            _hoisted_19
          ]),
          _: 1
        }),
        _hoisted_20
      ])
    ]),
    _hoisted_21,
    createBaseVNode("p", null, [
      _hoisted_22,
      _hoisted_23,
      _hoisted_24,
      _hoisted_25,
      _hoisted_26,
      createBaseVNode("a", _hoisted_27, [
        _hoisted_28,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_29
    ]),
    _hoisted_30,
    createVNode(_component_global_config)
  ], 64);
}
var data_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { data_html as default };
