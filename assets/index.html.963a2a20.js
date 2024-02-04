import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u6570\u7EC4",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6570\u7EC4",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6570\u7EC4")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u7C7B\u6570\u7EC4");
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u7C7B\u6570\u7EC4",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7C7B\u6570\u7EC4",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7C7B\u6570\u7EC4")
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, "\u7C7B\u6570\u7EC4\uFF0CArrayLike\u3002", -1);
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Reference: ");
const _hoisted_7 = {
  href: "https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/76",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createTextVNode("https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/76");
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;2&#39;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;3&#39;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;length&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;splice&#39;</span><span class="token operator">:</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>splice<span class="token punctuation">,</span>\n    <span class="token string">&#39;push&#39;</span><span class="token operator">:</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>push\n<span class="token punctuation">}</span>\nobj<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\nobj<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>\n\n<span class="token comment">// \u7ED3\u679C</span>\n<span class="token comment">// Object(4) [empty \xD7 2, 1, 2, splice: \u0192, push: \u0192]</span>\n<span class="token comment">//   2: 1</span>\n<span class="token comment">//   3: 2</span>\n<span class="token comment">//   length: 4</span>\n<span class="token comment">//   push: \u0192 push()</span>\n<span class="token comment">//   splice: \u0192 splice()</span>\n<span class="token comment">//   __proto__: Object</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u6D89\u53CA\u77E5\u8BC6\u70B9\uFF1A</p><p>\u7C7B\u6570\u7EC4\uFF08<code>ArrayLike</code>\uFF09\uFF1A\u4E00\u7EC4\u6570\u636E\uFF0C\u7531\u6570\u7EC4\u6765\u5B58\uFF0C\u4F46\u662F\u5982\u679C\u8981\u5BF9\u8FD9\u7EC4\u6570\u636E\u8FDB\u884C\u6269\u5C55\uFF0C\u4F1A\u5F71\u54CD\u5230\u6570\u7EC4\u539F\u578B\uFF0C<code>ArrayLike</code>\u7684\u51FA\u73B0\u5219\u63D0\u4F9B\u4E86\u4E00\u4E2A\u4E2D\u95F4\u6570\u636E\u6865\u6881\uFF0C<code>ArrayLike</code>\u6709\u6570\u7EC4\u7684\u7279\u6027\uFF0C \u4F46\u662F\u5BF9<code>ArrayLike</code>\u7684\u6269\u5C55\u5E76\u4E0D\u4F1A\u5F71\u54CD\u5230\u539F\u751F\u7684\u6570\u7EC4\u3002</p><p><code>push</code>\u65B9\u6CD5\uFF1A<code>push</code>\u65B9\u6CD5\u6709\u610F\u5177\u6709\u901A\u7528\u6027\u3002\u8BE5\u65B9\u6CD5\u548C<code>call()</code>\u6216<code>apply()</code>\u4E00\u8D77\u4F7F\u7528\u65F6\uFF0C\u53EF\u5E94\u7528\u5728\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\u4E0A\u3002<code>push</code>\u65B9\u6CD5\u6839\u636E<code>length</code>\u5C5E\u6027\u6765\u51B3\u5B9A\u4ECE\u54EA\u91CC\u5F00\u59CB\u63D2\u5165\u7ED9\u5B9A\u7684\u503C\u3002\u5982\u679C<code>length</code>\u4E0D\u80FD\u88AB\u8F6C\u6210\u4E00\u4E2A\u6570\u503C\uFF0C\u5219\u63D2\u5165\u7684\u5143\u7D20\u7D22\u5F15\u4E3A<code>0</code>\uFF0C\u5305\u62EC<code>length</code>\u4E0D\u5B58\u5728\u65F6\u3002\u5F53<code>length</code>\u4E0D\u5B58\u5728\u65F6\uFF0C\u5C06\u4F1A\u521B\u5EFA\u5B83\u3002</p><p>\u552F\u4E00\u7684\u539F\u751F\u7C7B\u6570\u7EC4\u5BF9\u8C61\u662F<code>String</code>\uFF0C\u5C3D\u7BA1\u5982\u6B64\uFF0C\u5B83\u4EEC\u5E76\u4E0D\u9002\u7528\u8BE5\u65B9\u6CD5\uFF0C\u56E0\u4E3A\u5B57\u7B26\u4E32\u662F\u4E0D\u53EF\u6539\u53D8\u7684\u3002</p><p>\u5BF9\u8C61\u8F6C\u6570\u7EC4\u7684\u65B9\u5F0F\uFF1A</p><p><code>Array.from()</code>\u3001<code>splice()</code>\u3001<code>concat()</code>\u7B49</p><p>\u4E0A\u9898\u5206\u6790\uFF1A</p><p>\u8FD9\u4E2A<code>obj</code>\u4E2D\u5B9A\u4E49\u4E86\u4E24\u4E2A<code>key</code>\u503C\uFF0C\u5206\u522B\u4E3A<code>splice</code>\u548C<code>push</code>\u5206\u522B\u5BF9\u5E94\u6570\u7EC4\u539F\u578B\u4E2D\u7684<code>splice</code>\u548C<code>push</code>\u65B9\u6CD5\uFF0C\u56E0\u6B64\u8FD9\u4E2A<code>obj</code>\u53EF\u4EE5\u8C03\u7528\u6570\u7EC4\u4E2D\u7684<code>push</code>\u548C<code>splice</code>\u65B9\u6CD5\uFF0C\u8C03\u7528\u5BF9\u8C61\u7684<code>push</code>\u65B9\u6CD5\uFF1A<code>push(1)</code>\uFF0C\u56E0\u4E3A\u6B64\u65F6<code>obj</code>\u4E2D\u5B9A\u4E49<code>length</code>\u4E3A<code>2</code>\uFF0C\u6240\u4EE5\u4ECE\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E8C\u9879\u5F00\u59CB\u63D2\u5165\uFF0C\u4E5F\u5C31\u662F\u6570\u7EC4\u7684\u7B2C\u4E09\u9879\uFF08\u4E0B\u8868\u4E3A<code>2</code>\u7684\u90A3\u4E00\u9879\uFF09\uFF0C\u56E0\u4E3A\u6570\u7EC4\u662F\u4ECE\u7B2C<code>0</code>\u9879\u5F00\u59CB\u7684\uFF0C\u8FD9\u65F6\u5DF2\u7ECF\u5B9A\u4E49\u4E86\u4E0B\u6807\u4E3A<code>2</code>\u548C<code>3</code>\u8FD9\u4E24\u9879\uFF0C\u6240\u4EE5\u5B83\u4F1A\u66FF\u6362\u7B2C\u4E09\u9879\u4E5F\u5C31\u662F\u4E0B\u6807\u4E3A<code>2</code>\u7684\u503C\uFF0C\u7B2C\u4E00\u6B21\u6267\u884C<code>push</code>\u5B8C\uFF0C\u6B64\u65F6<code>key</code>\u4E3A<code>2</code>\u7684\u5C5E\u6027\u503C\u4E3A<code>1</code>\uFF0C\u540C\u7406\uFF1A\u7B2C\u4E8C\u6B21\u6267\u884C<code>push</code>\u65B9\u6CD5\uFF0C<code>key</code>\u4E3A<code>3</code>\u7684\u5C5E\u6027\u503C\u4E3A<code>2</code>\u3002</p><p>\u56E0\u4E3A\u53EA\u662F\u5B9A\u4E49\u4E862\u548C3\u4E24\u9879\uFF0C\u6CA1\u6709\u5B9A\u4E490\u548C1\u8FD9\u4E24\u9879\uFF0C\u6240\u4EE5\u524D\u9762\u4F1A\u662Fempty\u3002 \u5982\u679C\u5C06\u8FD9\u9053\u9898\u6539\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;2&#39;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;3&#39;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;length&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;splice&#39;</span><span class="token operator">:</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>splice<span class="token punctuation">,</span>\n    <span class="token string">&#39;push&#39;</span><span class="token operator">:</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>push\n<span class="token punctuation">}</span>\nobj<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\nobj<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6B64\u65F6\u7684\u6253\u5370\u7ED3\u679C\u5C31\u662F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Object</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> splice<span class="token operator">:</span> \u0192<span class="token punctuation">,</span> push<span class="token operator">:</span> \u0192<span class="token punctuation">]</span>\n  <span class="token number">0</span><span class="token operator">:</span> <span class="token number">1</span>\n  <span class="token number">1</span><span class="token operator">:</span> <span class="token number">2</span>\n  <span class="token number">2</span><span class="token operator">:</span> <span class="token number">3</span>\n  <span class="token number">3</span><span class="token operator">:</span> <span class="token number">4</span>\n  length<span class="token operator">:</span> <span class="token number">2</span>\n  push<span class="token operator">:</span> \u0192 <span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  splice<span class="token operator">:</span> \u0192 <span class="token function">splice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  __proto__<span class="token operator">:</span> Object\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>', 13);
const _hoisted_22 = /* @__PURE__ */ createStaticVNode("\u539F\u7406\uFF1A\u6B64\u65F6<code>length</code>\u957F\u5EA6\u8BBE\u7F6E\u4E3A<code>0</code>\uFF0C<code>push</code>\u65B9\u6CD5\u4ECE\u7B2C<code>0</code>\u9879\u5F00\u59CB\u63D2\u5165\uFF0C\u6240\u4EE5\u586B\u5145\u4E86\u7B2C<code>0</code>\u9879\u7684<code>empty</code>\u3002\u81F3\u4E8E\u4E3A\u4EC0\u4E48\u5BF9\u8C61\u6DFB\u52A0\u4E86<code>splice</code>\u5C5E\u6027\u540E\u5E76\u6CA1\u6709\u8C03\u7528\u5C31\u4F1A\u53D8\u6210\u7C7B\u6570\u7EC4\u5BF9\u8C61\u8FD9\u4E2A\u95EE\u9898\uFF0C\u8FD9\u662F\u63A7\u5236\u53F0\u4E2D DevTools \u731C\u6D4B\u7C7B\u6570\u7EC4\u7684\u4E00\u4E2A\u65B9\u5F0F\uFF1A", 15);
const _hoisted_37 = {
  href: "https://github.com/ChromeDevTools/devtools-frontend/blob/master/front_end/event_listeners/EventListenersUtils.js#L330",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_38 = /* @__PURE__ */ createTextVNode("https://github.com/ChromeDevTools/devtools-frontend/blob/master/front_end/event_listeners/EventListenersUtils.js#L330");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7C7B\u6570\u7EC4" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_4,
    _hoisted_5,
    createBaseVNode("p", null, [
      _hoisted_6,
      createBaseVNode("a", _hoisted_7, [
        _hoisted_8,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_9,
    createBaseVNode("p", null, [
      _hoisted_22,
      createBaseVNode("a", _hoisted_37, [
        _hoisted_38,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
