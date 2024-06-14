import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "less",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#less",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" less")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u6700\u4F73\u5B9E\u8DF5");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Mixins");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u521B\u5EFA");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u4F7F\u7528");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("mixins.less \u6587\u4EF6");
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<h2 id="\u6700\u4F73\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#\u6700\u4F73\u5B9E\u8DF5" aria-hidden="true">#</a> \u6700\u4F73\u5B9E\u8DF5</h2><h3 id="mixins" tabindex="-1"><a class="header-anchor" href="#mixins" aria-hidden="true">#</a> Mixins</h3><h4 id="\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a> \u521B\u5EFA</h4><p>\u521B\u5EFA Mixins \u5FC5\u987B\u52A0\u4E0A<code>()</code>\u3002\u5982\u6B64\uFF0C\u82E5\u4E0D\u4F7F\u7528\u8BE5 Mixins\uFF0C\u5219\u4E0D\u4F1A\u4EA7\u751F\u4EFB\u4F55\u65E0\u7528\u7684\u4EE3\u7801\uFF0C\u53EF\u4EE5\u5C3D\u91CF\u51CF\u5C11\u6700\u7EC8\u7684\u4EA7\u51FA\u6587\u4EF6\u5927\u5C0F\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// \u4E0D\u5EFA\u8BAE</span>\n<span class="token selector">.my-mixin</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// \u63A8\u8350</span>\n<span class="token selector">.my-other-mixin()</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.class</span> <span class="token punctuation">{</span>\n  <span class="token mixin-usage function">.my-mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token mixin-usage function">.my-other-mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4EA7\u51FA\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.my-mixin</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.class</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h4><p>\u5C3D\u7BA1\u5728\u4F7F\u7528 Mixins \u65F6<code>()</code>\u662F\u53EF\u9009\u7684\uFF0C\u4F46\u5F3A\u70C8\u5EFA\u8BAE\u5FC5\u987B\u643A\u5E26<code>()</code>\u3002\u6309\u7167\u5B98\u65B9\u7684\u63D0\u793A\uFF0C</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>.<span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token mixin-usage function">.a</span><span class="token punctuation">;</span>    <span class="token comment">// currently works, but deprecated; don&#39;t use</span>\n.a <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// white-space before parentheses is also deprecated</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="mixins-less-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#mixins-less-\u6587\u4EF6" aria-hidden="true">#</a> mixins.less \u6587\u4EF6</h4><p>\u9879\u76EE\u91CC\u5EFA\u8BAE\u521B\u5EFA\u4E00\u4E2A\u5168\u5C40\u7684<code>mixins.less</code>\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u91CC\u6240\u6709\u7684 Mixins \u58F0\u660E\u65F6\u5FC5\u987B\u643A\u5E26<code>()</code>\u3002\u8FD9\u6837\u7684\u8BDD\uFF0C\u5F15\u5165<code>mixins.less</code>\u7684\u6587\u4EF6\u4EC5\u5728\u4F7F\u7528\u5230 Mixins \u65F6\u624D\u4F1A\u751F\u6210 Mixins \u76F8\u5173\u7684\u4EE3\u7801\uFF0C\u4E0D\u4F7F\u7528\u7684\u8BDD\u5C31\u4E0D\u4F1A\u4EA7\u751F Mixins \u76F8\u5173\u7684\u4EE3\u7801\uFF0C\u6709\u6548\u5730\u51CF\u5C11\u4E86\u6700\u7EC8\u4EA7\u51FA\u7684 CSS \u6587\u4EF6\u5927\u5C0F\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// mixins.less</span>\n<span class="token selector">.my-mixin()</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.my-other-mixin()</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u82E5\u662F\u60F3\u5C06 Mixinx \u4F5C\u4E3A\u5E38\u89C4\u89C4\u5219\u4F7F\u7528\uFF0C\u53EF\u5728 Mixinx \u4E0A\u518D\u5C01\u88C5\u4E00\u5C42\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">&#39;~@/style/mixins.less&#39;</span><span class="token punctuation">;</span>\n\n<span class="token selector">.my-rule</span> <span class="token punctuation">{</span>\n    <span class="token mixin-usage function">.my-mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>', 15);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6700\u4F73\u5B9E\u8DF5" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#mixins" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u521B\u5EFA" }, {
                    default: withCtx(() => [
                      _hoisted_5
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u4F7F\u7528" }, {
                    default: withCtx(() => [
                      _hoisted_6
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#mixins-less-\u6587\u4EF6" }, {
                    default: withCtx(() => [
                      _hoisted_7
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
    _hoisted_8,
    createVNode(_component_global_config)
  ], 64);
}
var less_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { less_html as default };
