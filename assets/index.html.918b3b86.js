import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "general",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#general",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" General")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Vue \u7248\u672C");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u6280\u5DE7");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5224\u65AD\u6DF1\u5C42\u6B21\u7684\u5C5E\u6027\u662F\u5426\u5B58\u5728");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u4EE3\u7801\u683C\u5F0F");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u4E09\u5143\u8FD0\u7B97\u7B26");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u5E76\u6392\u7684\u6761\u4EF6\u8BED\u53E5");
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "vue-\u7248\u672C",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#vue-\u7248\u672C",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Vue \u7248\u672C")
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", null, "\u8BE5\u6E90\u7801\u5B66\u4E60\u7CFB\u5217\u6587\u7AE0\uFF0C\u90FD\u662F\u57FA\u4E8E Vue.js 2.5.16 \u7248\u672C", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u6280\u5DE7",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6280\u5DE7",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6280\u5DE7")
], -1);
const _hoisted_12 = { class: "table-of-contents" };
const _hoisted_13 = /* @__PURE__ */ createTextVNode("Vue \u7248\u672C");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u6280\u5DE7");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u5224\u65AD\u6DF1\u5C42\u6B21\u7684\u5C5E\u6027\u662F\u5426\u5B58\u5728");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u4EE3\u7801\u683C\u5F0F");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u4E09\u5143\u8FD0\u7B97\u7B26");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u5E76\u6392\u7684\u6761\u4EF6\u8BED\u53E5");
const _hoisted_19 = /* @__PURE__ */ createStaticVNode('<h3 id="\u5224\u65AD\u6DF1\u5C42\u6B21\u7684\u5C5E\u6027\u662F\u5426\u5B58\u5728" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u6DF1\u5C42\u6B21\u7684\u5C5E\u6027\u662F\u5426\u5B58\u5728" aria-hidden="true">#</a> \u5224\u65AD\u6DF1\u5C42\u6B21\u7684\u5C5E\u6027\u662F\u5426\u5B58\u5728</h3><p>\u4E1A\u52A1\u4EE3\u7801\u91CC\u7ECF\u5E38\u4F1A\u78B0\u5230\u8981\u5224\u65AD\u67D0\u4E2A\u5BF9\u8C61\u7684\u6DF1\u5C42\u6B21\u7684\u5C5E\u6027\uFF0C\u6BD4\u5982\u63A5\u53E3\u8FD4\u56DE\u7684\u5BF9\u8C61<code>res</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  errno<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  aaaaaaaaaa<span class="token operator">:</span> <span class="token punctuation">{</span>\n    bbbbbbbbbb<span class="token operator">:</span> <span class="token punctuation">{</span>\n      cccccccccc<span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u73B0\u5728\u8981\u6839\u636E<code>res.aaaaaaaaaa.bbbbbbbbbb.cccccccccc</code>\u7684\u503C\u6765\u533A\u5206\u8FDB\u884C\u54EA\u9879\u64CD\u4F5C\uFF0C\u5E38\u89C4\u7684\u505A\u6CD5\u662F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>errno <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>aaaaaaaaaa <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span>aaaaaaaaaa<span class="token punctuation">.</span>bbbbbbbbbb <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span>aaaaaaaaaa<span class="token punctuation">.</span>bbbbbbbbbb<span class="token punctuation">.</span>cccccccccc<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>aaaaaaaaaa<span class="token punctuation">.</span>bbbbbbbbbb<span class="token punctuation">.</span>cccccccccc<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Vue \u6E90\u7801\u91CC\u5B66\u4E60\u5230\u7684\u65B9\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>errno <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> i\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">=</span> res<span class="token punctuation">.</span>aaaaaaaaaa<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>bbbbbbbbbb<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>cccccccccc<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u53EF\u4EE5\u53D1\u73B0\uFF0C\u9488\u5BF9\u5BF9\u8C61\u5C5E\u6027\u7684\u5C42\u6B21\u5F88\u6DF1\u65F6\uFF0C\u4E14\u6BCF\u4E00\u5C42\u5C5E\u6027\u7684<code>key</code>\u90FD\u8F83\u957F\u5E76\u90FD\u9700\u8981\u5224\u65AD\u662F\u5426\u5B58\u5728\u65F6\uFF0C\u4F7F\u7528\u4E0D\u65AD\u7ED9<code>i</code>\u8D4B\u503C\u7684\u65B9\u5F0F\uFF0C\u8981\u65B9\u4FBF\u8BB8\u591A\uFF0C\u5C24\u5176\u662F\u5728\u5224\u65AD\u5B58\u5728\u540E\u83B7\u53D6\u6700\u540E\u4E00\u5C42\u5C5E\u6027\u503C\u65F6\u3002</p><h3 id="\u4EE3\u7801\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u683C\u5F0F" aria-hidden="true">#</a> \u4EE3\u7801\u683C\u5F0F</h3><h4 id="\u4E09\u5143\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E09\u5143\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u4E09\u5143\u8FD0\u7B97\u7B26</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> result <span class="token operator">=</span> firstCondition\n        <span class="token operator">?</span> thisIsFirstResultOfTheFirstCondition\n        <span class="token operator">:</span> secondCondition\n          <span class="token operator">?</span> thisIsFirstRusultOfTheSecondCondition\n          <span class="token operator">:</span> thisIsSecondRusultOfTheSecondCondition\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>PS\uFF1A\u4E09\u5143\u8FD0\u7B97\u7B26\u662F\u53F3\u7ED3\u5408\u7684\uFF0C\u4E0A\u4E0B\u8FD9\u4E24\u4E2A\u8868\u8FBE\u5F0F\u7ED3\u679C\u662F\u76F8\u540C\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> result <span class="token operator">=</span> firstCondition\n        <span class="token operator">?</span> thisIsFirstResultOfTheFirstCondition\n        <span class="token operator">:</span> <span class="token punctuation">(</span>secondCondition\n          <span class="token operator">?</span> thisIsFirstRusultOfTheSecondCondition\n          <span class="token operator">:</span> thisIsSecondRusultOfTheSecondCondition<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="\u5E76\u6392\u7684\u6761\u4EF6\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u5E76\u6392\u7684\u6761\u4EF6\u8BED\u53E5" aria-hidden="true">#</a> \u5E76\u6392\u7684\u6761\u4EF6\u8BED\u53E5</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>\n  a <span class="token operator">&amp;&amp;</span>\n  b <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>\n    c <span class="token operator">||</span> d\n  <span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>', 15);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#vue-\u7248\u672C" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6280\u5DE7" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5224\u65AD\u6DF1\u5C42\u6B21\u7684\u5C5E\u6027\u662F\u5426\u5B58\u5728" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4EE3\u7801\u683C\u5F0F" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u4E09\u5143\u8FD0\u7B97\u7B26" }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u5E76\u6392\u7684\u6761\u4EF6\u8BED\u53E5" }, {
                    default: withCtx(() => [
                      _hoisted_8
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
    _hoisted_9,
    _hoisted_10,
    _hoisted_11,
    createBaseVNode("nav", _hoisted_12, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#vue-\u7248\u672C" }, {
            default: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6280\u5DE7" }, {
            default: withCtx(() => [
              _hoisted_14
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5224\u65AD\u6DF1\u5C42\u6B21\u7684\u5C5E\u6027\u662F\u5426\u5B58\u5728" }, {
                default: withCtx(() => [
                  _hoisted_15
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4EE3\u7801\u683C\u5F0F" }, {
                default: withCtx(() => [
                  _hoisted_16
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u4E09\u5143\u8FD0\u7B97\u7B26" }, {
                    default: withCtx(() => [
                      _hoisted_17
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u5E76\u6392\u7684\u6761\u4EF6\u8BED\u53E5" }, {
                    default: withCtx(() => [
                      _hoisted_18
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
    _hoisted_19,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
