import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u6587\u5B57\u7701\u7565",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6587\u5B57\u7701\u7565",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6587\u5B57\u7701\u7565")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u5355\u884C\u7701\u7565");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u591A\u884C\u7701\u7565");
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="\u5355\u884C\u7701\u7565" tabindex="-1"><a class="header-anchor" href="#\u5355\u884C\u7701\u7565" aria-hidden="true">#</a> \u5355\u884C\u7701\u7565</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">one-line-ellipsis </span><span class="token punctuation">{</span>\n  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>\n  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token func"><span class="token function">one-line-ellipsis</span><span class="token punctuation">(</span>maxWidth <span class="token operator">=</span> <span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span>\n    <span class="token property-declaration"><span class="token property">max-width</span> maxWidth</span>\n    <span class="token property-declaration"><span class="token property">white-space</span> nowrap</span>\n    <span class="token property-declaration"><span class="token property">text-overflow</span> ellipsis</span>\n    <span class="token property-declaration"><span class="token property">overflow</span> hidden</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.one-line-ellipsis()</span> <span class="token punctuation">{</span>\n    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>\n    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>\n    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u591A\u884C\u7701\u7565" tabindex="-1"><a class="header-anchor" href="#\u591A\u884C\u7701\u7565" aria-hidden="true">#</a> \u591A\u884C\u7701\u7565</h2><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.multi-line-ellipsis(<span class="token variable">@line</span>)</span> <span class="token punctuation">{</span>\n    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>\n    <span class="token property">word-break</span><span class="token punctuation">:</span> break<span class="token operator">-</span>all<span class="token punctuation">;</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token punctuation">;</span>\n    <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> <span class="token variable">@line</span><span class="token punctuation">;</span>\n    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>', 6);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5355\u884C\u7701\u7565" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u591A\u884C\u7701\u7565" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_5,
    createVNode(_component_global_config)
  ], 64);
}
var textEllipsis_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { textEllipsis_html as default };
