import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u7C7B\u578B\u64CD\u4F5C\u7B26",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7C7B\u578B\u64CD\u4F5C\u7B26",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7C7B\u578B\u64CD\u4F5C\u7B26")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "typeof",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#typeof",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" typeof")
], -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u83B7\u53D6\u4E00\u4E2A\u6807\u8BC6\u7B26\uFF08\u53D8\u91CF/\u5C5E\u6027\u7B49\uFF09\u7684\u7C7B\u578B\uFF0C\u8BE6\u89C1");
const _hoisted_4 = {
  href: "https://www.typescriptlang.org/docs/handbook/2/typeof-types.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Typeof Type Operator");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "keyof-\u7D22\u5F15\u67E5\u8BE2",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#keyof-\u7D22\u5F15\u67E5\u8BE2",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" keyof \u7D22\u5F15\u67E5\u8BE2")
], -1);
const _hoisted_8 = {
  href: "https://www.typescriptlang.org/docs/handbook/2/keyof-types.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Keyof Type Operator");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<p><code>keyof</code>\u64CD\u4F5C\u7B26\u5C06\u83B7\u53D6\u5BF9\u8C61\u7C7B\u578B\u6240\u6709\u7684\u5C5E\u6027\uFF0C\u4EA7\u751F\u4E00\u4E2A\u7531\u5B57\u7B26\u4E32\uFF08\u6570\u5B57\uFF09\u5B57\u9762\u91CF\u7C7B\u578B\u7EC4\u6210\u7684\u8054\u5408\u7C7B\u578B\u3002</p><p>\u6CE8\u610F\uFF0C</p><ul><li><code>keyof</code>\u53EA\u80FD\u83B7\u53D6<code>public</code>\u7684\u5C5E\u6027\uFF0C\u800C\u4E0D\u80FD\u83B7\u53D6\u5230<code>private</code>\u548C<code>protected</code>\u7684\u5C5E\u6027\u3002</li></ul><h3 id="keyof-any" tabindex="-1"><a class="header-anchor" href="#keyof-any" aria-hidden="true">#</a> keyof any</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// type T = string | number | symbol</span>\n<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">=</span> <span class="token keyword">keyof</span> <span class="token builtin">any</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>keyof any</code>\u7684\u7ED3\u679C\u662F<code>string | number | symbol</code>\uFF0C\u539F\u56E0\u662F\u4EFB\u4F55\u7C7B\u578B\u7684<code>key</code>\u7684\u7C7B\u578B\u53EA\u80FD\u4E3A<code>string | number | symbol</code>\u3002</p><h2 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h2><p>\u6761\u4EF6\u5224\u65AD\uFF0C\u7C7B\u4F3C\u4E8E\u4E09\u5143\u8FD0\u7B97\u7B26\u3002\u5F53<code>extends</code>\u524D\u9762\u7684\u6761\u4EF6\u6EE1\u8DB3\uFF0C\u8FD4\u56DE\u95EE\u53F7\u540E\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5426\u5219\u8FD4\u56DE\u7B2C\u4E8C\u4E2A\u53C2\u6570\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**\n * <span class="token keyword">@example</span>\n * type A1 = 1\n */</span>\n<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A1</span></span> <span class="token operator">=</span> <span class="token string">&#39;x&#39;</span> <span class="token keyword">extends</span> <span class="token string">&#39;x&#39;</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\n<span class="token doc-comment comment">/**\n * <span class="token keyword">@example</span>\n * type A2 = 2\n */</span>\n<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A2</span></span> <span class="token operator">=</span> <span class="token string">&#39;x&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;y&#39;</span> <span class="token keyword">extends</span> <span class="token string">&#39;x&#39;</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\n<span class="token doc-comment comment">/**\n * <span class="token keyword">@example</span>\n * type A3 = 1 | 2\n */</span>\n<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">P</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token string">&#39;x&#39;</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A3</span></span> <span class="token operator">=</span> <span class="token constant">P</span><span class="token operator">&lt;</span><span class="token string">&#39;x&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;y&#39;</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u4E3A\u4EC0\u4E48 A2 \u548C A3 \u7684\u503C\u4E0D\u4E00\u6837\uFF1F</p><ul><li>\u5982\u679C\u7528\u4E8E\u7B80\u5355\u7684\u6761\u4EF6\u5224\u65AD\uFF0C\u5219\u662F\u76F4\u63A5\u5224\u65AD\u524D\u9762\u7684\u7C7B\u578B\u662F\u5426\u53EF\u5206\u914D\u7ED9\u540E\u9762\u7684\u7C7B\u578B</li><li>\u82E5<code>extends</code>\u524D\u9762\u7684\u7C7B\u578B\u662F\u6CDB\u578B\uFF0C\u4E14\u6CDB\u578B\u4F20\u5165\u7684\u662F\u8054\u5408\u7C7B\u578B\u65F6\uFF0C\u5219\u4F1A\u4F9D\u6B21\u5224\u65AD\u8BE5\u8054\u5408\u7C7B\u578B\u7684\u6240\u6709\u5B50\u7C7B\u578B\u662F\u5426\u53EF\u5206\u914D\u7ED9<code>extends</code>\u540E\u9762\u7684\u7C7B\u578B\uFF08\u662F\u4E00\u4E2A\u5206\u53D1\u7684\u8FC7\u7A0B\uFF09\u3002</li></ul><p>\u603B\u7ED3\uFF0C\u5C31\u662F<code>extends</code>\u524D\u9762\u7684\u53C2\u6570\u4E3A\u8054\u5408\u7C7B\u578B\u65F6\u5219\u4F1A\u5206\u89E3\uFF08\u4F9D\u6B21\u904D\u5386\u6240\u6709\u7684\u5B50\u7C7B\u578B\u8FDB\u884C\u6761\u4EF6\u5224\u65AD\uFF09\u8054\u5408\u7C7B\u578B\u8FDB\u884C\u5224\u65AD\u3002\u7136\u540E\u5C06\u6700\u7EC8\u7684\u7ED3\u679C\u7EC4\u6210\u65B0\u7684\u8054\u5408\u7C7B\u578B\u3002</p><p>\u5982\u679C\u4E0D\u60F3\u88AB\u5206\u89E3\uFF08\u5373\u963B\u6B62<code>extends</code>\u5173\u952E\u8BCD\u5BF9\u4E8E\u8054\u5408\u7C7B\u578B\u7684\u5206\u53D1\u7279\u6027\uFF09\uFF0C\u505A\u6CD5\u4E5F\u5F88\u7B80\u5355\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u5143\u7EC4\u7C7B\u578B\u5305\u88F9\u4E00\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">P</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">]</span> <span class="token keyword">extends</span> <span class="token punctuation">[</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token doc-comment comment">/**\n * type A4 = 2;\n */</span>\n<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A4</span></span> <span class="token operator">=</span> <span class="token constant">P</span><span class="token operator">&lt;</span><span class="token string">&#39;x&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;y&#39;</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="infer" tabindex="-1"><a class="header-anchor" href="#infer" aria-hidden="true">#</a> infer</h2><h2 id="\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \u64CD\u4F5C\u7B26</h2>', 16);
const _hoisted_27 = /* @__PURE__ */ createTextVNode("\u975E\u7A7A\u65AD\u8A00\u8FD0\u7B97\u7B26");
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("code", null, "!", -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("\u786E\u5B9A\u53D8\u91CF\u503C\u4E00\u5B9A\u4E0D\u4E3A\u7A7A\u65F6\u4F7F\u7528\uFF0C\u6BD4\u5982"),
  /* @__PURE__ */ createBaseVNode("code", null, "m!.id"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u8FD9\u544A\u8BC9 TypeScript "),
  /* @__PURE__ */ createBaseVNode("code", null, "m"),
  /* @__PURE__ */ createTextVNode("\u4E00\u5B9A\u4E0D\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "null"),
  /* @__PURE__ */ createTextVNode("\u6216"),
  /* @__PURE__ */ createBaseVNode("code", null, "undefined")
], -1);
const _hoisted_30 = {
  href: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_31 = /* @__PURE__ */ createTextVNode("Non-null assertion operator - TypeScript 2.0");
const _hoisted_32 = /* @__PURE__ */ createTextVNode("\u53EF\u9009\u94FE\u8FD0\u7B97\u7B26");
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("code", null, "?.", -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("\u53EF\u9009\u94FE\u8FD0\u7B97\u7B26"),
  /* @__PURE__ */ createBaseVNode("code", null, "?."),
  /* @__PURE__ */ createTextVNode("\u53EF\u4EE5\u6309\u7167\u8FD0\u7B97\u7B26\u4E4B\u524D\u7684\u5C5E\u6027\u662F\u5426\u6709\u6548\uFF0C\u94FE\u5F0F\u8BFB\u53D6\u5BF9\u8C61\u7684\u5C5E\u6027\u6216\u8005\u4F7F\u6574\u4E2A\u5BF9\u8C61\u94FE\u8FD4\u56DE"),
  /* @__PURE__ */ createBaseVNode("code", null, "undefined"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("\u53EF\u9009\u94FE\u8FD0\u7B97\u7B26\u8FD8\u53EF\u4EE5\u7528\u4E8E\u51FD\u6570\u8C03\u7528\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "let result = obj.customMethod?.();")
], -1);
const _hoisted_36 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/%E5%8F%AF%E9%80%89%E9%93%BE",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_37 = /* @__PURE__ */ createTextVNode("\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26 - MDN");
const _hoisted_38 = {
  href: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_39 = /* @__PURE__ */ createTextVNode("Optional Chaining - TypeScript 3.7");
const _hoisted_40 = /* @__PURE__ */ createTextVNode("\u7A7A\u5408\u5E76\u8FD0\u7B97\u7B26");
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("code", null, "??", -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "let x = foo ?? bar();"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u5F53"),
  /* @__PURE__ */ createBaseVNode("code", null, "foo"),
  /* @__PURE__ */ createTextVNode("\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "null"),
  /* @__PURE__ */ createTextVNode("\u6216"),
  /* @__PURE__ */ createBaseVNode("code", null, "undefined"),
  /* @__PURE__ */ createTextVNode("\u65F6\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "x"),
  /* @__PURE__ */ createTextVNode("\u515C\u5E95\u53D6\u503C\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "bar()"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_43 = {
  href: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_44 = /* @__PURE__ */ createTextVNode("Nullish Coalescing - TypeScript 3.7");
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
      ]),
      _hoisted_6
    ]),
    _hoisted_7,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_8, [
        _hoisted_9,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_10
    ]),
    _hoisted_11,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_27,
        _hoisted_28,
        createBaseVNode("ul", null, [
          _hoisted_29,
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_30, [
              _hoisted_31,
              createVNode(_component_OutboundLink)
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _hoisted_32,
        _hoisted_33,
        createBaseVNode("ul", null, [
          _hoisted_34,
          _hoisted_35,
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
        ])
      ]),
      createBaseVNode("li", null, [
        _hoisted_40,
        _hoisted_41,
        createBaseVNode("ul", null, [
          _hoisted_42,
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_43, [
              _hoisted_44,
              createVNode(_component_OutboundLink)
            ])
          ])
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var typeOperators_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { typeOperators_html as default };
