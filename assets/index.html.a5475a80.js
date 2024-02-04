import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u9009\u62E9\u5668",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u9009\u62E9\u5668",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u9009\u62E9\u5668")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u9009\u62E9\u5668\u4F18\u5148\u7EA7");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("CSS \u9009\u62E9\u5668 \u6548\u7387");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u6D4F\u89C8\u5668\u4ECE\u53F3\u5230\u5DE6\u89E3\u6790");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u547D\u540D\u89C4\u8303");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("BEM");
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<h2 id="\u9009\u62E9\u5668\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u5668\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u9009\u62E9\u5668\u4F18\u5148\u7EA7</h2><p>CSS \u6807\u51C6\u7528\u4E00\u4E2A\u4E09\u5143\u7EC4<code>(a, b, c)</code>\u6765\u6784\u6210\u4E00\u4E2A\u590D\u6742\u9009\u62E9\u5668\u7684\u4F18\u5148\u7EA7\u3002</p><ul><li><code>id</code>\u9009\u62E9\u5668\u7684\u6570\u76EE\u8BB0\u4E3A<code>a</code>\uFF1B</li><li>\u4F2A\u7C7B\u9009\u62E9\u5668\u548C<code>class</code>\u9009\u62E9\u5668\u7684\u6570\u76EE\u8BB0\u4E3A<code>b</code>\uFF1B</li><li>\u4F2A\u5143\u7D20\u9009\u62E9\u5668\u548C\u6807\u7B7E\u9009\u62E9\u5668\u6570\u76EE\u8BB0\u4E3A<code>c</code>\uFF1B</li><li>\u201C*\u201D \u4E0D\u5F71\u54CD\u4F18\u5148\u7EA7\u3002</li></ul><p>CSS \u6807\u51C6\u5EFA\u8BAE\u7528\u4E00\u4E2A\u8DB3\u591F\u5927\u7684\u8FDB\u5236\uFF0C\u83B7\u53D6\u201Ca-b-c\u201D\u6765\u8868\u793A\u9009\u62E9\u5668\u4F18\u5148\u7EA7\u3002\u5373\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>specificity <span class="token operator">=</span> base <span class="token operator">*</span> base <span class="token operator">*</span> a <span class="token operator">+</span> base <span class="token operator">*</span> b <span class="token operator">+</span> c\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5176\u4E2D\uFF0C<code>base</code>\u662F\u4E00\u4E2A\u201C\u8DB3\u591F\u5927\u201D\u7684\u6B63\u6574\u6570\u3002\u5173\u4E8E<code>base</code>\uFF0C\u5386\u53F2\u4E2D\u6709\u4E9B\u8DA3\u95FB\uFF0C\u65E9\u5E74 IE6 \u91C7\u7528 256 \u8FDB\u5236\uFF0C\u4E8E\u662F\u5C31\u4EA7\u751F\u201C256 \u4E2A class \u4F18\u5148\u7EA7\u7B49\u4E8E\u4E00\u4E2A id\u201D\u8FD9\u6837\u7684\u5947\u8469\u95EE\u9898\uFF0C\u540E\u6765\u6269\u5927\u5230 65536\uFF0C\u57FA\u672C\u907F\u514D\u4E86\u7C7B\u4F3C\u7684\u95EE\u9898\u3002\u73B0\u4EE3\u6D4F\u89C8\u5668\u591A\u91C7\u7528\u4E86\u66F4\u5927\u7684\u6570\u91CF\uFF0C\u6211\u4EEC\u6B63\u5E38\u7F16\u5199\u7684 CSS \u89C4\u5219\u6570\u91CF\u4E0D\u592A\u53EF\u80FD\u8FBE\u5230\u6570\u4E07\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u8BA4\u4E3A\u8FD9\u6837\u7684 base \u5C31\u8DB3\u591F\u5927\u4E86\u3002</p><p>\u884C\u5185\u5C5E\u6027\u7684\u4F18\u5148\u7EA7\u6C38\u8FDC\u9AD8\u4E8E CSS \u89C4\u5219\uFF0C\u6D4F\u89C8\u5668\u63D0\u4F9B\u4E86\u4E00\u4E2A\u201C\u53E3\u5B50\u201D\uFF0C\u5C31\u662F\u5728\u9009\u62E9\u5668\u524D\u52A0\u4E0A\u201C!important\u201D\u3002\u8FD9\u4E2A\u7528\u6CD5\u975E\u5E38\u5371\u9669\uFF0C\u56E0\u4E3A\u5B83\u76F8\u5F53\u4E8E\u4E00\u4E2A\u65B0\u7684\u4F18\u5148\u7EA7\uFF0C\u800C\u4E14\u6B64\u4F18\u5148\u7EA7\u4F1A\u9AD8\u4E8E\u884C\u5185\u5C5E\u6027\u3002</p>', 7);
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Copy from ");
const _hoisted_16 = {
  href: "https://time.geekbang.org/column/article/84633",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_17 = /* @__PURE__ */ createTextVNode("Winter - CSS\u9009\u62E9\u5668\uFF1A\u4F2A\u5143\u7D20\u662F\u600E\u4E48\u56DE\u4E8B\u513F\uFF1F");
const _hoisted_18 = /* @__PURE__ */ createStaticVNode('<h2 id="css-\u9009\u62E9\u5668-\u6548\u7387" tabindex="-1"><a class="header-anchor" href="#css-\u9009\u62E9\u5668-\u6548\u7387" aria-hidden="true">#</a> CSS \u9009\u62E9\u5668 \u6548\u7387</h2><p>CSS \u9009\u62E9\u5668\u6548\u7387\u4ECE\u9AD8\u5230\u4F4E\u7684\u6392\u5E8F\u5982\u4E0B\uFF1A</p><ul><li>ID\u9009\u62E9\u5668\uFF0C\u6BD4\u5982 #header</li><li>\u7C7B\u9009\u62E9\u5668\uFF0C\u6BD4\u5982 .promo</li><li>\u5143\u7D20\u9009\u62E9\u5668\uFF0C\u6BD4\u5982 div</li><li>\u5144\u5F1F\u9009\u62E9\u5668\uFF0C\u6BD4\u5982 h2 + p</li><li>\u5B50\u9009\u62E9\u5668\uFF0C\u6BD4\u5982 li &gt; ul</li><li>\u540E\u4EE3\u9009\u62E9\u5668\uFF0C\u6BD4\u5982 ul a</li><li>\u901A\u7528\u9009\u62E9\u5668\uFF0C\u6BD4\u5982 *</li><li>\u5C5E\u6027\u9009\u62E9\u5668\uFF0C\u6BD4\u5982 type = \u201Ctext\u201D</li><li>\u4F2A\u7C7B/\u4F2A\u5143\u7D20\u9009\u62E9\u5668\uFF0C\u6BD4\u5982 a:hover</li></ul>', 3);
const _hoisted_21 = /* @__PURE__ */ createTextVNode("Reference\uFF1A");
const _hoisted_22 = {
  href: "http://blog.jobbole.com/35339/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_23 = /* @__PURE__ */ createTextVNode("\u7F16\u5199\u9AD8\u6548\u7684 CSS \u9009\u62E9\u5668");
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u6D4F\u89C8\u5668\u4ECE\u53F3\u5230\u5DE6\u89E3\u6790",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6D4F\u89C8\u5668\u4ECE\u53F3\u5230\u5DE6\u89E3\u6790",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6D4F\u89C8\u5668\u4ECE\u53F3\u5230\u5DE6\u89E3\u6790")
], -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("p", null, "\u6D4F\u89C8\u5668\u89E3\u6790\u9009\u62E9\u5668\u662F\u4ECE\u53F3\u5230\u5DE6\u7684\u65B9\u5F0F\uFF0C\u4EE5 #nav a \u4E3A\u4F8B\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5BFB\u627E a \u7684\u5B9E\u4F8B\uFF08\u53EF\u80FD\u6709\u5F88\u591A\uFF09\uFF0C\u7136\u540E\u6CBF\u7740 DOM \u6811\u5411\u4E0A\u67E5\u627E\uFF0C\u786E\u5B9A\u5B9E\u4F8B\u662F\u5426\u5728 id \u4E3A nav \u7684\u5BB9\u5668\u91CC\u9762\u3002", -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("p", null, "Reference\uFF1A", -1);
const _hoisted_27 = {
  href: "https://www.zhihu.com/question/20185756",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_28 = /* @__PURE__ */ createTextVNode("\u4E3A\u4EC0\u4E48\u6392\u7248\u5F15\u64CE\u89E3\u6790 CSS \u9009\u62E9\u5668\u65F6\u4E00\u5B9A\u8981\u4ECE\u53F3\u5F80\u5DE6\u89E3\u6790\uFF1F");
const _hoisted_29 = {
  href: "http://stackoverflow.com/questions/5797014/why-do-browsers-match-CSS-selectors-from-right-to-left",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_30 = /* @__PURE__ */ createTextVNode("Why do browsers match CSS selectors from right to left?");
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u547D\u540D\u89C4\u8303",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u547D\u540D\u89C4\u8303",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u547D\u540D\u89C4\u8303")
], -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "bem",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#bem",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" BEM")
], -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("p", null, "BEM \u662F\u4E00\u79CD CSS \u7C7B\u547D\u540D\u89C4\u8303\uFF0C\u901A\u8FC7 \u6A21\u5757\u5316\u548C\u53EF\u7EF4\u62A4\u7684\u65B9\u5F0F \u7F16\u5199\u6837\u5F0F\u3002", -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("p", null, "BEM\u662F \u5757\uFF08Block\uFF09\uFF0C\u5143\u7D20\uFF08Element\uFF09\uFF0C\u4FEE\u9970\u7B26\uFF08Modifier\uFF09\u7684\u7F29\u5199\u3002", -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("p", null, "Reference:", -1);
const _hoisted_36 = {
  href: "https://juejin.im/post/5a1c175551882535c470fe2c",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_37 = /* @__PURE__ */ createTextVNode("CSS\u4F7F\u7528BEM\u547D\u540D\u89C4\u8303\u7684\u4E94\u5927\u7406\u7531");
const _hoisted_38 = {
  href: "https://blog.elpassion.com/reasons-to-use-bem-a88738317753",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_39 = /* @__PURE__ */ createTextVNode("5 Reasons To Use BEM (a.k.a. why is BEM G.R.E.A.T.)");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u9009\u62E9\u5668\u4F18\u5148\u7EA7" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#css-\u9009\u62E9\u5668-\u6548\u7387" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6D4F\u89C8\u5668\u4ECE\u53F3\u5230\u5DE6\u89E3\u6790" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u547D\u540D\u89C4\u8303" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#bem" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_8,
    createBaseVNode("p", null, [
      _hoisted_15,
      createBaseVNode("a", _hoisted_16, [
        _hoisted_17,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_18,
    createBaseVNode("p", null, [
      _hoisted_21,
      createBaseVNode("a", _hoisted_22, [
        _hoisted_23,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_24,
    _hoisted_25,
    _hoisted_26,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_27, [
          _hoisted_28,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_29, [
          _hoisted_30,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_31,
    _hoisted_32,
    _hoisted_33,
    _hoisted_34,
    _hoisted_35,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_36, [
          _hoisted_37,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_38, [
          _hoisted_39,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
