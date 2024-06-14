import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u3010\u9AD8\u7EA7\u3011\u5B9E\u73B0-promise-race-allsettled-\u65B9\u6CD5\u7684-polyfill",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u3010\u9AD8\u7EA7\u3011\u5B9E\u73B0-promise-race-allsettled-\u65B9\u6CD5\u7684-polyfill",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u3010\u9AD8\u7EA7\u3011\u5B9E\u73B0 Promise.race/allSettled \u65B9\u6CD5\u7684 polyfill")
], -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u53C2\u8003\uFF1A");
const _hoisted_3 = {
  href: "https://blog.windstone.cc/es6/polyfill/promise/promise-race.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u98CE\u52A8\u4E4B\u77F3\u7684\u535A\u5BA2 - Promise.race");
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, "\u51CF\u5206\u9879\uFF1A", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u628A\u6784\u9020\u51FD\u6570\u65B9\u6CD5\u5F53\u4F5C\u5B9E\u4F8B\u65B9\u6CD5\u5BF9\u5F85"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u672A\u8003\u8651\u5230\u5F02\u6B65\u60C5\u51B5")
], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", null, "\u52A0\u5206\u9879\uFF1A", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u8003\u8651\u5230\u4F20\u5165\u5BF9\u8C61\u662F\u975EPromise\uFF0C\u5BF9\u6BCF\u4E00\u9879\u904D\u5386\u589E\u52A0Promise.resolve\u5305\u88F9")
], -1);
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u53C2\u8003\uFF1A");
const _hoisted_10 = {
  href: "https://blog.windstone.cc/es6/polyfill/promise/promise-allSettled.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u98CE\u52A8\u4E4B\u77F3\u7684\u535A\u5BA2 - Promise.allSettled");
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Promise.allSetted \u8BF4\u660E</span>\n\u8F93\u5165\uFF1A\n<span class="token punctuation">[</span>\n  promise1<span class="token punctuation">,</span>\n  promise2<span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n  promise10\n<span class="token punctuation">]</span>\n\n\u6BCF\u4E00\u4E2A promise \u90FD\u786E\u5B9A\u72B6\u6001\uFF0C\u65E0\u8BBA resolved<span class="token operator">/</span>rejected\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u7ED3\u679C\u7684\u6570\u7EC4\u3002\n\n\u8F93\u51FA\uFF1A\n<span class="token punctuation">[</span>\n  <span class="token comment">// promise1: resolved</span>\n  <span class="token punctuation">{</span>\n    status<span class="token operator">:</span> <span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// promise2: rejected</span>\n  <span class="token punctuation">{</span>\n    status<span class="token operator">:</span> <span class="token string">&#39;rejected&#39;</span><span class="token punctuation">,</span>\n    reason<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">]</span>\n\n\u6CE8\u610F\uFF1A\u8FD4\u56DE\u6570\u7EC4\u4E0E\u8F93\u5165\u6570\u7EC4\u8981\u4FDD\u6301\u4E00\u81F4\u7684\u987A\u5E8F\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="\u3010\u9AD8\u7EA7\u3011\u5B9E\u73B0-string-prototype-padstart-\u65B9\u6CD5\u7684-polyfill" tabindex="-1"><a class="header-anchor" href="#\u3010\u9AD8\u7EA7\u3011\u5B9E\u73B0-string-prototype-padstart-\u65B9\u6CD5\u7684-polyfill" aria-hidden="true">#</a> \u3010\u9AD8\u7EA7\u3011\u5B9E\u73B0 String.prototype.padStart \u65B9\u6CD5\u7684 polyfill</h2>', 2);
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u53C2\u8003\uFF1A");
const _hoisted_15 = {
  href: "https://blog.windstone.cc/es6/polyfill/string/padStart.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u98CE\u52A8\u4E4B\u77F3\u7684\u535A\u5BA2 - String.prototype.padStart");
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
    _hoisted_6,
    _hoisted_7,
    _hoisted_8,
    createBaseVNode("p", null, [
      _hoisted_9,
      createBaseVNode("a", _hoisted_10, [
        _hoisted_11,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_12,
    createBaseVNode("p", null, [
      _hoisted_14,
      createBaseVNode("a", _hoisted_15, [
        _hoisted_16,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var promiseRaceAndAllsettled_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { promiseRaceAndAllsettled_html as default };
