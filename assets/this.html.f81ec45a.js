import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "this",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#this",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" this")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u51FD\u6570\u6709\u54EA\u51E0\u79CD\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u5BFC\u81F4 this \u4E0D\u540C\uFF1F");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u4F5C\u4E3A\u666E\u901A\u51FD\u6570\u8C03\u7528");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("new fn() \u7684\u8FC7\u7A0B");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("apply \u548C call \u65B9\u6CD5");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("apply \u4E0E call \u7684\u533A\u522B");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u6027\u80FD\u5BF9\u6BD4");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u5E38\u7528\u793A\u4F8B");
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<h2 id="\u51FD\u6570\u6709\u54EA\u51E0\u79CD\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u5BFC\u81F4-this-\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u6709\u54EA\u51E0\u79CD\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u5BFC\u81F4-this-\u4E0D\u540C" aria-hidden="true">#</a> \u51FD\u6570\u6709\u54EA\u51E0\u79CD\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u5BFC\u81F4 this \u4E0D\u540C\uFF1F</h2><ul><li>\u4F5C\u4E3A\u666E\u901A\u51FD\u6570\u8C03\u7528</li><li>\u4F5C\u4E3A\u65B9\u6CD5\u8C03\u7528</li><li>\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u8C03\u7528</li><li>\u901A\u8FC7<code>apply</code>\u3001<code>call</code>\u3001<code>bind</code>\u663E\u793A\u7ED1\u5B9A<code>this</code>\u8FDB\u884C\u8C03\u7528</li><li>\u7BAD\u5934\u51FD\u6570</li></ul><h2 id="\u4F5C\u4E3A\u666E\u901A\u51FD\u6570\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E3A\u666E\u901A\u51FD\u6570\u8C03\u7528" aria-hidden="true">#</a> \u4F5C\u4E3A\u666E\u901A\u51FD\u6570\u8C03\u7528</h2><ul><li>\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\u58F0\u660E\u7684\u51FD\u6570\uFF0C<code>this</code>\u4F1A\u7ED1\u5B9A\u5230<code>undefined</code>\u4E0A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token string">&quot;use strict&quot;</span>\n  <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span>\n  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Uncaught TypeError: Cannot read property &#39;name&#39; of undefined at foo</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>\u5728\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\u58F0\u660E\u7684\u51FD\u6570\uFF0C<code>this</code>\u4F1A\u7ED1\u5B9A\u5230<code>window</code>\uFF08\u6216<code>global</code>\uFF09\u4E0A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token string">&quot;use strict&quot;</span>\n  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bar</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bar</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="new-fn-\u7684\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#new-fn-\u7684\u8FC7\u7A0B" aria-hidden="true">#</a> new fn() \u7684\u8FC7\u7A0B</h2><p>\u4F7F\u7528 new \u64CD\u4F5C\u7B26\u8C03\u7528\u6784\u9020\u51FD\u6570\u521B\u5EFA\u65B0\u5BF9\u8C61\u7684\u8FC7\u7A0B</p><ul><li>\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61</li><li>\u65B0\u5BF9\u8C61\u7684 __proto__\u6307\u5411 fn.prototype</li><li>\u5C06\u6784\u9020\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u8D4B\u7ED9\u65B0\u5BF9\u8C61\uFF08\u56E0\u6B64this \u5C31\u6307\u5411\u4E86\u8FD9\u4E2A\u65B0\u5BF9\u8C61\uFF09</li><li>\u6267\u884C\u6784\u9020\u51FD\u6570\u4E2D\u7684\u4EE3\u7801\uFF08\u4E3A\u8FD9\u4E2A\u65B0\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\uFF09</li><li>\u8FD4\u56DE\u65B0\u5BF9\u8C61\uFF08\u5982\u679Cfn\u6267\u884C\u540E\u4E0D\u8FD4\u56DE\uFF0C\u5219\u9ED8\u8BA4\u8FD4\u56DE\u65B0\u5BF9\u8C61\uFF1B\u5982\u679C\u8FD4\u56DE\u4E86\u5176\u4ED6\u5BF9\u8C61\uFF0C\u5219\u8FD4\u56DE\u503C\u4E3A\u5176\u4ED6\u5BF9\u8C61\uFF09</li></ul><h2 id="apply-\u548C-call-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#apply-\u548C-call-\u65B9\u6CD5" aria-hidden="true">#</a> apply \u548C call \u65B9\u6CD5</h2><h3 id="apply-\u4E0E-call-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#apply-\u4E0E-call-\u7684\u533A\u522B" aria-hidden="true">#</a> apply \u4E0E call \u7684\u533A\u522B</h3><p><code>apply</code>\u548C<code>call</code>\u7684\u7B2C 1 \u4E2A\u53C2\u6570\u90FD\u662F\u5C06\u8981\u7ED1\u5B9A\u7684<code>this</code>\u5BF9\u8C61\uFF0C\u4E0D\u540C\u7684\u662F\uFF1A</p><ul><li><code>apply</code>\u7B2C 2 \u4E2A\u662F\u6570\u7EC4\uFF0C\u6570\u7EC4\u91CC\u7684\u6BCF\u4E00\u9879\u5C06\u4F5C\u4E3A\u51FD\u6570\u7684\u53C2\u6570</li><li><code>call</code>\u7B2C 2 ~ n \u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4F5C\u4E3A\u51FD\u6570\u7684\u7B2C 1 ~ n-1 \u4E2A\u53C2\u6570</li></ul><h3 id="\u6027\u80FD\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#\u6027\u80FD\u5BF9\u6BD4" aria-hidden="true">#</a> \u6027\u80FD\u5BF9\u6BD4</h3>', 16);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("code", null, "call", -1);
const _hoisted_27 = /* @__PURE__ */ createTextVNode("\u7684\u6027\u80FD\u6BD4");
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("code", null, "apply", -1);
const _hoisted_29 = /* @__PURE__ */ createTextVNode("\u7684\u6027\u80FD\u66F4\u597D\uFF0C\u8BE6\u89C1");
const _hoisted_30 = {
  href: "https://github.com/noneven/__/issues/6",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_31 = /* @__PURE__ */ createTextVNode("call\u548Capply\u7684\u6027\u80FD\u5BF9\u6BD4 #6");
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u5E38\u7528\u793A\u4F8B",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5E38\u7528\u793A\u4F8B",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5E38\u7528\u793A\u4F8B")
], -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u5982\u4F55\u5C06\u4F2A\u6570\u7EC4\u8F6C\u6362\u6210\u6570\u7EC4\uFF1F "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("code", null, "Array.prototype.slice.call(arg)")
      ])
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u53C2\u6570\u662F\u5BF9\u8C61\uFF1F "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("code", null, "Object.prototype.toString.call(obj)")
      ])
    ])
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u51FD\u6570\u6709\u54EA\u51E0\u79CD\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u5BFC\u81F4-this-\u4E0D\u540C" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4F5C\u4E3A\u666E\u901A\u51FD\u6570\u8C03\u7528" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#new-fn-\u7684\u8FC7\u7A0B" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#apply-\u548C-call-\u65B9\u6CD5" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#apply-\u4E0E-call-\u7684\u533A\u522B" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6027\u80FD\u5BF9\u6BD4" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5E38\u7528\u793A\u4F8B" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_10,
    createBaseVNode("p", null, [
      _hoisted_26,
      _hoisted_27,
      _hoisted_28,
      _hoisted_29,
      createBaseVNode("a", _hoisted_30, [
        _hoisted_31,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_32,
    _hoisted_33,
    createVNode(_component_global_config)
  ], 64);
}
var this_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { this_html as default };
