import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u72B6\u6001\u6570\u636E\u521D\u59CB\u5316",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u72B6\u6001\u6570\u636E\u521D\u59CB\u5316",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u72B6\u6001\u6570\u636E\u521D\u59CB\u5316")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "\u76EE\u5F55", -1);
const _hoisted_3 = { class: "table-of-contents" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("initState");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("proxy");
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<p>\u8BE5\u7AE0\u8282\u8981\u89E3\u7B54\u7684\u7591\u60D1\u6709\uFF1A</p><ul><li>\u4E3A\u4EC0\u4E48\u901A\u8FC7<code>vm.xxx</code>\u53EF\u4EE5\u8BBF\u95EE\u5230<code>props</code>\u548C<code>data</code>\u6570\u636E\uFF1F</li></ul><h2 id="initstate" tabindex="-1"><a class="header-anchor" href="#initstate" aria-hidden="true">#</a> initState</h2><p>\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u5728<code>vm._init</code>\u91CC\u8C03\u7528<code>initState()</code>\u5BF9\u7EC4\u4EF6\u5B9E\u4F8B\u4E0A\u7684\u72B6\u6001\u6570\u636E\u8FDB\u884C\u521D\u59CB\u5316\uFF0C\u5305\u62EC\uFF1A</p>', 4);
const _hoisted_10 = /* @__PURE__ */ createTextVNode("props");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("methods");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("data");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("computed");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("watch");
const _hoisted_15 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initState</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token operator">:</span> Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  vm<span class="token punctuation">.</span>_watchers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n  <span class="token keyword">const</span> opts <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token function">initProps</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> opts<span class="token punctuation">.</span>props<span class="token punctuation">)</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>methods<span class="token punctuation">)</span> <span class="token function">initMethods</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> opts<span class="token punctuation">.</span>methods<span class="token punctuation">)</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">initData</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token function">observe</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* asRootData */</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>computed<span class="token punctuation">)</span> <span class="token function">initComputed</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> opts<span class="token punctuation">.</span>computed<span class="token punctuation">)</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>watch <span class="token operator">&amp;&amp;</span> opts<span class="token punctuation">.</span>watch <span class="token operator">!==</span> nativeWatch<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">initWatch</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> opts<span class="token punctuation">.</span>watch<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> proxy</h2><p>\u65E0\u8BBA\u662F\u7EC4\u4EF6\u7684<code>props</code>\u6570\u636E\u8FD8\u662F<code>data</code>\u6570\u636E\uFF0C\u6700\u7EC8\u90FD\u53EF\u4EE5\u5728\u7EC4\u4EF6\u5B9E\u4F8B<code>vm</code>\u4E0A\u8BBF\u95EE\u5230\uFF0C\u56E0\u4E3A\u5728<code>initProps</code>\u548C<code>initData</code>\u65F6\u90FD\u8C03\u7528\u4E86<code>proxy</code>\u5C06<code>vm._props</code>\u548C<code>vm._data</code>\u4E0A\u7684\u6570\u636E\u90FD\u4EE3\u7406\u5230\u4E86<code>vm</code>\u4E0A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// initProps \u91CC</span>\n<span class="token function">proxy</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">_props</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>\n\n<span class="token comment">// initData \u91CC</span>\n<span class="token function">proxy</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">_data</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5176\u5B9E<code>proxy</code>\u7684\u5B9E\u73B0\u7279\u522B\u7B80\u5355\uFF0C\u5C31\u662F\u901A\u8FC7<code>Object.defineProperty</code>\u5728<code>vm</code>\u4E0A\u65B0\u589E\u52A0\u4E86\u4E00\u5C5E\u6027\uFF0C\u5C5E\u6027\u8BBF\u95EE\u5668\u63CF\u8FF0\u7B26\u7684<code>get</code>\u7279\u6027\u5C31\u662F\u83B7\u53D6<code>vm._props[key]</code>\uFF08\u4EE5<code>props</code>\u4E3A\u4F8B\uFF09\u7684\u503C\u5E76\u8FD4\u56DE\uFF0C\u5C5E\u6027\u7684\u8BBF\u95EE\u5668\u63CF\u8FF0\u7B26\u7684<code>set</code>\u7279\u6027\u5C31\u662F\u8BBE\u7F6E<code>vm._props[key]</code>\u7684\u503C\u3002</p><p>\u56E0\u6B64\uFF0C\u6211\u4EEC\u6700\u7EC8\u5728\u8BBF\u95EE<code>props</code>\u65F6\uFF0C\u5BF9<code>vm.xxx</code>\u7684\u8BFB\u5199\u5B9E\u9645\u4E0A\u5C31\u662F\u5BF9<code>vm._props.xxx</code>\u7684\u8BFB\u5199\u3002<code>data</code>\u4E5F\u662F\u540C\u7406\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> sharedPropertyDefinition <span class="token operator">=</span> <span class="token punctuation">{</span>\n  enumerable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  configurable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  get<span class="token operator">:</span> noop<span class="token punctuation">,</span>\n  set<span class="token operator">:</span> noop\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">proxy</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token operator">:</span> Object<span class="token punctuation">,</span> sourceKey<span class="token operator">:</span> string<span class="token punctuation">,</span> key<span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  sharedPropertyDefinition<span class="token punctuation">.</span><span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">proxyGetter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>sourceKey<span class="token punctuation">]</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n  sharedPropertyDefinition<span class="token punctuation">.</span><span class="token function-variable function">set</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">proxySetter</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">[</span>sourceKey<span class="token punctuation">]</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val\n  <span class="token punctuation">}</span>\n  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> sharedPropertyDefinition<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><code>computed</code>\u4E5F\u662F\u7ECF\u8FC7\u7C7B\u4F3C\u7684\u5904\u7406\uFF0C\u53EA\u662F<code>get</code>\u548C<code>set</code>\u4E0D\u4E00\u6837\u800C\u5DF2\u3002</p>', 8);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("nav", _hoisted_3, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#initstate" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#proxy" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_6,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/vue/source-study/instance/state/props.html" }, {
          default: withCtx(() => [
            _hoisted_10
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/vue/source-study/instance/state/methods.html" }, {
          default: withCtx(() => [
            _hoisted_11
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/vue/source-study/instance/state/data.html" }, {
          default: withCtx(() => [
            _hoisted_12
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/vue/source-study/instance/state/computed.html" }, {
          default: withCtx(() => [
            _hoisted_13
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/vue/source-study/instance/state/watch.html" }, {
          default: withCtx(() => [
            _hoisted_14
          ]),
          _: 1
        })
      ])
    ]),
    _hoisted_15,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
