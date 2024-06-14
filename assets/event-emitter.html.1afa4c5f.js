import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u3010\u9AD8\u7EA7\u3011eventemitter",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u3010\u9AD8\u7EA7\u3011eventemitter",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u3010\u9AD8\u7EA7\u3011EventEmitter")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u5B9E\u73B0-eventemitter-\u7C7B-\u9700\u8981\u5B9E\u73B0on-off-once-emit\u51E0\u4E2A\u65B9\u6CD5",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5B9E\u73B0-eventemitter-\u7C7B-\u9700\u8981\u5B9E\u73B0on-off-once-emit\u51E0\u4E2A\u65B9\u6CD5",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5B9E\u73B0 EventEmitter \u7C7B\uFF0C\u9700\u8981\u5B9E\u73B0on, off, once, emit\u51E0\u4E2A\u65B9\u6CD5")
], -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u53C2\u8003\u7B54\u6848\uFF1A");
const _hoisted_4 = {
  href: "https://blog.windstone.cc/code-snippet/js/utils/event-emitter.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("https://blog.windstone.cc/code-snippet/js/utils/event-emitter.html");
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> eventEmitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> eventName <span class="token operator">=</span> <span class="token string">&#39;whatever&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// case 1: off \u7684\u5B9E\u73B0</span>\neventEmitter<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> fn<span class="token punctuation">)</span> <span class="token comment">// \u4F20\u56DE\u8C03\uFF0C\u6E05\u7406 fn</span>\neventEmitter<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span>eventName<span class="token punctuation">)</span>     <span class="token comment">// \u4E0D\u4F20\u56DE\u8C03\uFF0C\u6E05\u7406\u8BE5\u4E8B\u4EF6\u7684\u6240\u6709\u56DE\u8C03</span>\n\n<span class="token comment">// case 2: once \u7684\u5B9E\u73B0</span>\neventEmitter<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>\n\n<span class="token comment">// case 3: emit \u4F20\u53C2\u6570</span>\neventEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span>\n\n<span class="token comment">// case 4: once \u6CE8\u518C\u4E8B\u4EF6\u540E\uFF0C\u7ACB\u9A6C off</span>\neventEmitter<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>\neventEmitter<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u8003\u5BDF\u70B9\uFF1A\u4E3B\u8981\u8003\u5BDF\u8003\u8651\u95EE\u9898\u7684\u5168\u9762\u6027\uFF0Capi\u8BBE\u8BA1\u662F\u5426\u4F18\u96C5 \u53CA \u4EE3\u7801\u4E60\u60EF</p><p>\u6CE8\u610F\uFF1A<code>once</code>\u7684\u5B9E\u73B0</p><p>\u6709\u4E9B\u5019\u9009\u4EBA\u4F1A\u4F7F\u7528\u5728 fn \u4E0A\u52A0\u4E0A fn.isOnce \u6765\u5B9E\u73B0 once\uFF0C\u5728 emit \u540E\u5224\u65AD fn.isOnce \u8FDB\u800C\u786E\u5B9A\u662F\u5426\u8981 off \u6389 fn\u3002\u4F46\u662F\u8FD9\u79CD\u5B9E\u73B0\u4F1A\u6539\u53D8 fn\uFF0C\u5B58\u5728\u7684\u95EE\u9898\u662F\uFF0C\u82E5 on(otherEventName, fn)\uFF0C\u4F1A\u5BFC\u81F4\u5728 otherEventName \u4E8B\u4EF6\u4E0A fn \u4F1A\u88AB\u8BA4\u4E3A\u662F\u901A\u8FC7 once \u6CE8\u518C\u7684</p><p>\u6B63\u786E\u5730\u5B9E\u73B0\u662F\uFF0C\u5C06 fn \u7528\u53E6\u4E00\u4E2A\u51FD\u6570 wrappedFn\u5C01\u88C5\u4E00\u4E0B\uFF0C\u540C\u65F6 wrappedFn.originFn = fn\uFF0C\u8FD9\u6837\u5728<code>off(eventName, fn)</code>\u65F6\uFF0C\u4E0D\u4EC5\u8981\u5224\u65AD <code>fn === wrappedFn</code>\u8FD8\u8981\u5224\u65AD<code>fn === wrappedFn.originFn</code></p>', 5);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      _hoisted_3,
      createBaseVNode("a", _hoisted_4, [
        _hoisted_5,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_6,
    createVNode(_component_global_config)
  ], 64);
}
var eventEmitter_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { eventEmitter_html as default };
