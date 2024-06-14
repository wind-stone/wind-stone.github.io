import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u6280\u5DE7\u548C\u5751",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6280\u5DE7\u548C\u5751",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6280\u5DE7\u548C\u5751")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("animation-timing-function");
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="animation-timing-function" tabindex="-1"><a class="header-anchor" href="#animation-timing-function" aria-hidden="true">#</a> animation-timing-function</h2><p><code>animation-timing-function</code>\u4F5C\u7528\u4E8E\u52A8\u753B\u7684\u6BCF\u4E00\u4E2A\u5173\u952E\u5E27\u5468\u671F\uFF0C\u800C\u4E0D\u662F\u6574\u4E2A\u52A8\u753B\u5468\u671F\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>\n    <span class="token property">animation</span><span class="token punctuation">:</span> 2s ease-in infinite scale<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token atrule"><span class="token rule">@keyframes</span> scale</span> <span class="token punctuation">{</span>\n    <span class="token selector">0%</span> <span class="token punctuation">{</span>\n        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token selector">50%</span> <span class="token punctuation">{</span>\n        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token selector">100%</span> <span class="token punctuation">{</span>\n        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u6BD4\u5982\uFF0C\u6211\u4EEC\u8BBE\u7F6E\u4E86<code>animation-timing-function: ease-in</code>\uFF0C\u5219\u5728<code>0%</code>~<code>50%</code>\u90E8\u5206\u548C<code>50%</code>~<code>100%</code>\u90E8\u5206\u4F1A\u5206\u522B\u5E94\u7528<code>ease-in</code>\uFF0C\u800C\u4E0D\u662F\u5728<code>0%</code>~<code>100%</code>\u6574\u4F53\u5E94\u7528<code>ease-in</code>\u3002</p><p>\u6B64\u5916\uFF0C\u82E5\u662F\u6211\u4EEC\u60F3\u5728\u52A8\u753B\u7684\u67D0\u4E00\u6BB5\u4F7F\u7528\u4E0D\u540C\u7684<code>animation-timing-function</code>\uFF0C\u53EF\u4EE5\u5728\u8BE5\u6BB5\u5F00\u59CB\u7684\u5173\u952E\u5E27\u4E0A\u8BBE\u7F6E\u65B0\u7684<code>animation-timing-function</code>:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>\n    <span class="token property">animation</span><span class="token punctuation">:</span> 2s ease-in infinite scale<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token atrule"><span class="token rule">@keyframes</span> scale</span> <span class="token punctuation">{</span>\n    <span class="token selector">0%</span> <span class="token punctuation">{</span>\n        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token selector">50%</span> <span class="token punctuation">{</span>\n        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token selector">100%</span> <span class="token punctuation">{</span>\n        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u7ECF\u8FC7\u8FD9\u6837\u914D\u7F6E\uFF0C<code>0%</code>~<code>50%</code>\u90E8\u5206\u5C06\u5E94\u7528<code>ease-in</code>\uFF0C<code>50%</code>~<code>100%</code>\u90E8\u5206\u5C06\u5E94\u7528<code>linear</code>\u3002</p><p>\u53C2\u8003\u6587\u6863</p>', 8);
const _hoisted_12 = {
  href: "https://www.bennadel.com/blog/3885-animation-timing-functions-get-applied-per-keyframe-in-css.htm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_13 = /* @__PURE__ */ createTextVNode("Animation Timing-Functions Get Applied Per-Keyframe In CSS");
const _hoisted_14 = {
  href: "https://jaketrent.com/post/css-animation-timing-function-per-keyframe-segment",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_15 = /* @__PURE__ */ createTextVNode("CSS ANIMATION TIMING FUNCTION PER KEYFRAME SEGMENT");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#animation-timing-function" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_4,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_12, [
          _hoisted_13,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_14, [
          _hoisted_15,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var skillPitfall_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { skillPitfall_html as default };
