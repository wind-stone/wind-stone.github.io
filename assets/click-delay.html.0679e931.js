import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "click-\u5EF6\u8FDF",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#click-\u5EF6\u8FDF",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" click \u5EF6\u8FDF")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u5EF6\u8FDF\u539F\u56E0");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u53BB\u9664\u5EF6\u8FDF\u7684\u65B9\u6CD5");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("tap \u4E8B\u4EF6");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5B9E\u73B0\u539F\u7406");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("zepto \u7684 tap \u4E8B\u4EF6\u70B9\u51FB\u7A7F\u900F\u95EE\u9898");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u73B0\u8C61");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u539F\u7406");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u89E3\u51B3\u65B9\u6848");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("zepto \u4E3A\u4F55\u4E0D\u4F7F\u7528 e.preventDefault() \u6765\u89E3\u51B3\u7A7F\u900F\u95EE\u9898\uFF1F");
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<h2 id="\u5EF6\u8FDF\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#\u5EF6\u8FDF\u539F\u56E0" aria-hidden="true">#</a> \u5EF6\u8FDF\u539F\u56E0</h2><p>\u8C37\u6B4C\u7684\u5F00\u53D1\u8005\u6587\u6863\u300A300ms tap delay, gone away\u300B\u5982\u662F\u8BF4\uFF1A</p><blockquote><p>For many years, mobile browsers applied a 300-350ms delay between touchend and click while they waited to see if this was going to be a double-tap or not, since double-tap was a gesture to zoom into text.</p></blockquote><p>\u6700\u65E9\u7684 iPhone \u7684 Safari \u6D4F\u89C8\u5668\u4E2D\uFF0C\u4E3A\u4E86\u5B9E\u73B0\u89E6\u5C4F\u4E2D\u53CC\u51FB\u653E\u5927\u7684\u6548\u679C\uFF0C\u5F53\u7528\u6237\u70B9\u51FB\u5C4F\u5E55\u540E\u4F1A\u5224\u65AD\u5728 300ms \u5185\u662F\u5426\u6709\u7B2C\u4E8C\u6B21\u70B9\u51FB\uFF0C\u5982\u679C\u6709\uFF0C\u5C31\u7406\u89E3\u6210\u53CC\u51FB\uFF0C\u82E5\u6CA1\u6709\u5C31\u662F\u5355\u51FB\uFF0C\u5C31\u4F1A\u89E6\u53D1<code>click</code>\u4E8B\u4EF6\u3002</p><p>\u5F53\u4F60\u70B9\u51FB\u79FB\u52A8\u8BBE\u5907\u7684\u5C4F\u5E55\u65F6\uFF0C\u53EF\u4EE5\u5206\u89E3\u6210\u591A\u4E2A\u4E8B\u4EF6\uFF0C\u8FD9\u4E9B\u4E8B\u4EF6\u90FD\u662F\u6309\u987A\u5E8F\u4F9D\u6B21\u89E6\u53D1\u7684\u3002</p><p><code>touchstart</code> --&gt; <code>touchmove</code> --&gt; <code>touchend</code> --&gt; <code>click</code></p><h2 id="\u53BB\u9664\u5EF6\u8FDF\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u53BB\u9664\u5EF6\u8FDF\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u53BB\u9664\u5EF6\u8FDF\u7684\u65B9\u6CD5</h2><blockquote><p>FastClick doesn&#39;t attach any listeners on desktop browsers.</p><p>Chrome 32+ on Android with width=device-width in the viewport meta tag doesn&#39;t have a 300ms delay, therefore listeners aren&#39;t attached.</p><p><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;</code> Same goes for Chrome on Android (all versions) with user-scalable=no in the viewport meta tag. But be aware that user-scalable=no also disables pinch zooming, which may be an accessibility concern.</p><p>For IE11+, you can use touch-action: manipulation; to disable double-tap-to-zoom on certain elements (like links and buttons). For IE10 use -ms-touch-action: manipulation.</p></blockquote>', 8);
const _hoisted_20 = /* @__PURE__ */ createTextVNode("from: ");
const _hoisted_21 = {
  href: "https://github.com/ftlabs/fastclick#when-it-isnt-needed",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_22 = /* @__PURE__ */ createTextVNode("FastClick - When it isn't needed");
const _hoisted_23 = /* @__PURE__ */ createStaticVNode('<h2 id="tap-\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#tap-\u4E8B\u4EF6" aria-hidden="true">#</a> tap \u4E8B\u4EF6</h2><h3 id="\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> \u5B9E\u73B0\u539F\u7406</h3><p>\u6709\u4E9B\u7B2C\u4E09\u65B9\u5E93\u5982<code>zepto</code>\u3001<code>fastclick</code>\u7B49\u5B9E\u73B0\u4E86<code>tap</code>\u4E8B\u4EF6\uFF0C\u7528\u4E8E\u66FF\u4EE3\u79FB\u52A8\u7AEF\u7684<code>click</code>\u4E8B\u4EF6\uFF0C\u89E3\u51B3\u70B9\u51FB\u5EF6\u8FDF\u7684\u95EE\u9898\u3002</p><p><code>zepto</code>\u548C<code>fastclick</code>\u90FD\u662F\u5728<code>touchend</code>\u89E6\u53D1\u4E4B\u540E\u7ACB\u5373\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u4E0D\u540C\u7684\u662F\uFF1A</p><ul><li><code>zepto</code>\uFF1A\u624B\u52A8\u89E6\u53D1\u81EA\u5B9A\u4E49\u7684<code>tap</code>\u4E8B\u4EF6</li><li><code>fastclick</code>\uFF1A<code>touchend</code>\u4E8B\u4EF6\u89E6\u53D1\u540E\uFF0C\u4F7F\u7528<code>document.createEvent</code>\u624B\u52A8\u751F\u6210<code>click</code>\u4E8B\u4EF6\u5E76\u89E6\u53D1\uFF0C\u518D\u53D6\u6D88\u6D4F\u89C8\u5668\u89E6\u53D1\u7684<code>click</code>\u4E8B\u4EF6</li></ul><p>\u8FD9\u91CC\u6709\u4E00\u4E2A\u5173\u952E\u7684\u95EE\u9898\u662F\uFF0C\u4E0D\u80FD\u6BCF\u6B21<code>touchend</code>\u4E4B\u540E\u90FD\u89E6\u53D1<code>tap</code>\u4E8B\u4EF6\uFF0C\u56E0\u4E3A\u6709\u53EF\u80FD\u7528\u6237\u662F\u5728\u4E0A\u4E0B\u6ED1\u52A8\u800C\u4E0D\u662F\u5728\u70B9\u51FB\uFF08\u5426\u5219\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u76D1\u542C<code>touchstart</code>\u4E8B\u4EF6\u5C31\u53EF\u4EE5\u4E86\uFF09\u3002</p><p>\u56E0\u6B64\uFF0C\u5982\u4F55\u5224\u5B9A\u7528\u6237\u662F\u5728\u70B9\u51FB\u8FD8\u662F\u5728\u4E0A\u4E0B\u6ED1\u52A8\u5462\uFF1F</p><ul><li><code>zepto</code>\uFF1A\u901A\u8FC7\u5224\u65AD\u4F4D\u79FB\u504F\u5DEE\uFF0C\u5373\u8BB0\u5F55\u4E0B<code>touchstart</code>\u65F6\u7684\u521D\u59CB\u4F4D\u79FB\uFF0C\u7528<code>touchend</code>\u65F6\u7684\u4F4D\u79FB\u51CF\u6389\u521D\u59CB\u4F4D\u79FB\u7684\u504F\u5DEE\uFF0C\u5982\u679C\u8FD9\u4E2A\u5DEE\u503C\u5728<code>30</code>\u4EE5\u5185\uFF0C\u5219\u8BA4\u4E3A\u7528\u6237\u662F\u70B9\u51FB\uFF0C\u5426\u5219\u8BA4\u4E3A\u662F\u6ED1\u52A8\u3002</li><li><code>fastclick</code>\uFF1A\u901A\u8FC7\u5224\u65AD\u65F6\u95F4\u504F\u5DEE\uFF0C\u5206\u522B\u8BB0\u5F55<code>touchstart</code>\u548C<code>touchend</code>\u7684\u65F6\u95F4\u6233\uFF0C\u5982\u679C\u5B83\u4EEC\u7684\u65F6\u95F4\u5DEE\u5927\u4E8E<code>700</code>\u6BEB\u79D2\uFF0C\u5219\u8BA4\u4E3A\u662F\u6ED1\u52A8\u64CD\u4F5C\uFF0C\u5426\u5219\u662F\u70B9\u51FB\u64CD\u4F5C\u3002</li></ul>', 8);
const _hoisted_31 = /* @__PURE__ */ createTextVNode("\u5982\u4F55\u50CF");
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("code", null, "jQuery", -1);
const _hoisted_33 = /* @__PURE__ */ createTextVNode("/");
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("code", null, "Zepto", -1);
const _hoisted_35 = /* @__PURE__ */ createTextVNode("\u4E00\u6837\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684");
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("code", null, "tap", -1);
const _hoisted_37 = /* @__PURE__ */ createTextVNode("\u4E8B\u4EF6\uFF1F\u8BF7\u53C2\u8003\uFF1A");
const _hoisted_38 = {
  href: "http://mp.weixin.qq.com/s/NBSPIKpRQH3Re3P6rDykFA",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_39 = /* @__PURE__ */ createTextVNode("\u524D\u7AEF\u65E9\u8BFB\u8BFE-\u3010\u7B2C1005\u671F\u3011\u4ECE\u79FB\u52A8\u7AEFclick\u5230\u6447\u4E00\u6447");
const _hoisted_40 = /* @__PURE__ */ createStaticVNode('<h3 id="zepto-\u7684-tap-\u4E8B\u4EF6\u70B9\u51FB\u7A7F\u900F\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#zepto-\u7684-tap-\u4E8B\u4EF6\u70B9\u51FB\u7A7F\u900F\u95EE\u9898" aria-hidden="true">#</a> zepto \u7684 tap \u4E8B\u4EF6\u70B9\u51FB\u7A7F\u900F\u95EE\u9898</h3><h4 id="\u73B0\u8C61" tabindex="-1"><a class="header-anchor" href="#\u73B0\u8C61" aria-hidden="true">#</a> \u73B0\u8C61</h4><p>\u906E\u7F69\u5C42\u4E2D\u6709\u4E00\u6807\u7B7E\u7ED1\u5B9A\u4E86<code>tap</code>\u4E8B\u4EF6\uFF0C\u89E6\u53D1\u65F6\u906E\u7F69\u5C42\u6D88\u5931\uFF0C\u8BE5\u6807\u7B7E\u6B63\u4E0B\u65B9\u6709\u4EE5\u4E0B\u7684\u5143\u7D20\u4E4B\u4E00\uFF1A</p><ul><li>\u7ED1\u5B9A\u4E86<code>click</code>\u4E8B\u4EF6\u7684\u5143\u7D20\u3001<code>click</code>\u65F6\u4F1A\u89E6\u53D1\u4E8B\u4EF6\uFF08<code>focus</code>/<code>focusout</code>\uFF09\u7684\u5143\u7D20</li><li>\u70B9\u51FB\u65F6\u6709\u9ED8\u8BA4\u884C\u4E3A\u7684\u5143\u7D20\uFF0C\u5982\u8D85\u94FE\u63A5<code>a</code></li><li><code>input</code>\uFF08\u4F1A\u51FA\u7CFB\u7EDF\u952E\u76D8\u7684<code>type</code>\u7C7B\u578B\uFF09</li></ul><p>\u6B64\u65F6\u70B9\u51FB\u4E0A\u5C42\u7684\u6807\u7B7E\uFF0C\u540C\u65F6\u4E5F\u4F1A\u89E6\u53D1\u4E0B\u5C42\u5143\u7D20\u7684<code>click</code>\u4E8B\u4EF6\uFF0C\u51FA\u73B0\u7A7F\u900F\u7684\u73B0\u8C61\u3002</p><h4 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h4><p>\u5F53\u89E6\u53D1<code>tap</code>\u4E8B\u4EF6\uFF0C\u4E0A\u5C42\u906E\u7F69\u5C42\u5173\u95ED\u540E\uFF0C\u6B64\u65F6\u4E8B\u4EF6\u53EA\u8FDB\u884C\u5230<code>touchend</code>\u4E8B\u4EF6\uFF0C\u800C\u5927\u6982 300ms \u540E\u624D\u89E6\u53D1<code>click</code>\u4E8B\u4EF6\uFF0C\u5F53<code>click</code>\u4E8B\u4EF6\u89E6\u53D1\u65F6\uFF0C\u4E0A\u9762\u7684\u906E\u7F69\u5C42\u5DF2\u6D88\u5931\uFF0C\u5C31\u76F8\u5F53\u4E8E\u70B9\u51FB\u5230\u4E86\u4E0B\u5C42\u7684\u5143\u7D20\u3002</p><h4 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6848</h4><ul><li>\u5F15\u5165<code>fastclick.js</code><ul><li>\u5B58\u5728\u7684\u95EE\u9898\uFF1A</li></ul></li><li>\u7528<code>touchend</code>\u4EE3\u66FF<code>tap</code>\u4E8B\u4EF6\u5E76\u963B\u6B62\u6389<code>touchend</code>\u7684\u9ED8\u8BA4\u884C\u4E3A<code>e.preventDefault()</code><ul><li>\u5B58\u5728\u7684\u95EE\u9898\uFF1A\u5728\u5F88\u8FDC\u7684\u533A\u57DF\u6ED1\u52A8\u5230\u76EE\u6807\u5143\u7D20\uFF0C\u7136\u540E\u677E\u5F00\uFF0C\u4F1A\u89E6\u53D1<code>touchend</code>\u4E8B\u4EF6</li></ul></li><li>\u4EE5<code>click</code>\u4E8B\u4EF6\u4EE3\u66FF<code>tap</code>\u4E8B\u4EF6\u6216\u8005\u4F7F\u7528<code>tap</code>\u4E8B\u4EF6\u5E76\u4E14\u6DFB\u52A0\u5EF6\u8FDF\u4E00\u5B9A\u65F6\u95F4\uFF08300ms+\uFF09\u6765\u5904\u7406\u4E8B\u4EF6 <ul><li>\u5B58\u5728\u7684\u95EE\u9898\uFF1A\u9700\u8981\u5EF6\u65F6\u5904\u7406\u4E8B\u4EF6\u56DE\u8C03</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#cbFinish&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;tap&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">//\u5F88\u591A\u5904\u7406\u6BD4\u5982\u9690\u85CF\u4EC0\u4E48\u7684</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">320</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="zepto-\u4E3A\u4F55\u4E0D\u4F7F\u7528-e-preventdefault-\u6765\u89E3\u51B3\u7A7F\u900F\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#zepto-\u4E3A\u4F55\u4E0D\u4F7F\u7528-e-preventdefault-\u6765\u89E3\u51B3\u7A7F\u900F\u95EE\u9898" aria-hidden="true">#</a> zepto \u4E3A\u4F55\u4E0D\u4F7F\u7528 e.preventDefault() \u6765\u89E3\u51B3\u7A7F\u900F\u95EE\u9898\uFF1F</h4><p>\u56E0\u4E3A<code>zepto</code>\u7684<code>tap</code>\u4E8B\u4EF6\u7EDF\u4E00\u662F\u5728<code>document</code>\u7684<code>touchend</code>\u65F6\u89E6\u53D1\u7684\uFF0C\u82E5\u5728\u8FD9\u91CC\u4F7F\u7528<code>e.preventDefault()</code>\uFF0C\u90A3\u9875\u9762\u4E0A\u6240\u6709\u5143\u7D20\u5728<code>touchend</code>\u540E\u89E6\u53D1\u7684\u4E8B\u4EF6\u90FD\u4E0D\u4F1A\u88AB\u6267\u884C\u4E86\u3002</p><p>Reference:</p>', 13);
const _hoisted_53 = {
  href: "http://mp.weixin.qq.com/s/NBSPIKpRQH3Re3P6rDykFA",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_54 = /* @__PURE__ */ createTextVNode("\u524D\u7AEF\u65E9\u8BFB\u8BFE-\u3010\u7B2C1005\u671F\u3011\u4ECE\u79FB\u52A8\u7AEFclick\u5230\u6447\u4E00\u6447");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5EF6\u8FDF\u539F\u56E0" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u53BB\u9664\u5EF6\u8FDF\u7684\u65B9\u6CD5" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#tap-\u4E8B\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5B9E\u73B0\u539F\u7406" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#zepto-\u7684-tap-\u4E8B\u4EF6\u70B9\u51FB\u7A7F\u900F\u95EE\u9898" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u73B0\u8C61" }, {
                    default: withCtx(() => [
                      _hoisted_8
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u539F\u7406" }, {
                    default: withCtx(() => [
                      _hoisted_9
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u89E3\u51B3\u65B9\u6848" }, {
                    default: withCtx(() => [
                      _hoisted_10
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#zepto-\u4E3A\u4F55\u4E0D\u4F7F\u7528-e-preventdefault-\u6765\u89E3\u51B3\u7A7F\u900F\u95EE\u9898" }, {
                    default: withCtx(() => [
                      _hoisted_11
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _hoisted_12,
    createBaseVNode("p", null, [
      _hoisted_20,
      createBaseVNode("a", _hoisted_21, [
        _hoisted_22,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_23,
    createBaseVNode("p", null, [
      _hoisted_31,
      _hoisted_32,
      _hoisted_33,
      _hoisted_34,
      _hoisted_35,
      _hoisted_36,
      _hoisted_37,
      createBaseVNode("a", _hoisted_38, [
        _hoisted_39,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_40,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_53, [
          _hoisted_54,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var clickDelay_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { clickDelay_html as default };
