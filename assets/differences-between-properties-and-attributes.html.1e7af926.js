import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u7279\u6027\u548C\u5C5E\u6027\u7684\u533A\u522B",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7279\u6027\u548C\u5C5E\u6027\u7684\u533A\u522B",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7279\u6027\u548C\u5C5E\u6027\u7684\u533A\u522B")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u7ED3\u8BBA");
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<p>\u5F53\u5199 HTML \u6E90\u4EE3\u7801\u65F6\uFF0C\u4F60\u53EF\u4EE5\u5728 HTML \u5143\u7D20\u4E0A\u5B9A\u4E49\u7279\u6027<code>attribute</code>\u3002\u4E00\u65E6\u6D4F\u89C8\u5668\u89E3\u6790\u4E86\u4F60\u7684\u4EE3\u7801\uFF0C\u5C06\u4EA7\u751F\u4E00\u4E2A\u5BF9\u5E94\u7684 DOM \u8282\u70B9\u3002\u8FD9\u4E2A\u8282\u70B9\u662F\u4E2A\u5BF9\u8C61\uFF0C\u56E0\u800C\u5B83\u5177\u6709\u5C5E\u6027<code>property</code>\u3002</p><p>\u4F8B\u5982\uFF0C\u5982\u4E0B HTML \u5143\u7D20\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Name:<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6709\u4E24\u4E2A\u7279\u6027<code>atrribute</code>\u3002</p><p>\u4E00\u65E6\u6D4F\u89C8\u5668\u89E3\u6790\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u5C06\u4EA7\u751F\u4E00\u4E2A<code>HTMLInputElement</code>\u5BF9\u8C61\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u5BF9\u8C61\u5C06\u5305\u542B\u51E0\u5341\u4E2A\u5C5E\u6027<code>property</code>\uFF0C\u6BD4\u5982\uFF1A<code>accept</code>\u3001<code>accessKey</code>\u3001<code>align</code>\u3001<code>alt</code>\u3001<code>attributes</code>\u3001<code>autofocus</code>\u3001<code>baseURI</code>\u3001<code>checked</code>\u3001<code>childElementCount</code>\u3001<code>childNodes</code>\u3001<code>children</code>\u3001<code>classList</code>\u3001<code>className</code>\u3001<code>clientHeight</code>\u7B49\u7B49\u3002</p><p>\u5BF9\u4E8E DOM \u8282\u70B9\u5BF9\u8C61\u6765\u8BF4\uFF0C\u5C5E\u6027<code>property</code>\u662F\u8282\u70B9\u5BF9\u8C61\u7684\u5C5E\u6027<code>property</code>\uFF0C\u7279\u6027<code>attribute</code>\u662F\u8282\u70B9\u5BF9\u8C61\u7684<code>attributes</code>\u5C5E\u6027\u7684\u5143\u7D20\u3002 \uFF08For a given DOM node object, properties are the properties of that object, and attributes are the elements of the attributes property of that object.\uFF09</p><p>\u5BF9\u4E8E\u7ED9\u5B9A\u7684 HTML \u5143\u7D20\uFF0C\u5176 DOM \u8282\u70B9\u521B\u5EFA\u65F6\uFF0C\u5B83\u7684\u8BB8\u591A\u5C5E\u6027<code>property</code>\u4EE5\u76F8\u540C\u6216\u8005\u76F8\u4F3C\u7684\u540D\u5B57\u4E0E\u7279\u6027<code>attribute</code>\u76F8\u5173\u8054\uFF0C\u4F46\u4E0D\u662F\u4E00\u4E00\u5BF9\u5E94\u7684\u5173\u7CFB\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u4EE5\u4E0B\u7684 HTML \u5143\u7D20\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>the-input<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E0E\u4E4B\u5BF9\u5E94\u7684 DOM \u8282\u70B9\u4F1A\u6709<code>id</code>\u3001<code>type</code>\u548C<code>value</code>\u5C5E\u6027\uFF1A</p><ul><li><code>id</code>\u5C5E\u6027\u6620\u5C04\u5230<code>id</code>\u7279\u6027\uFF1A\u83B7\u53D6\u5C5E\u6027<code>property</code>\u65F6\u5C06\u8BFB\u53D6\u7279\u6027<code>attribute</code>\u7684\u503C\uFF0C\u8BBE\u7F6E\u5C5E\u6027<code>property</code>\u65F6\u5C06\u91CD\u5199\u7279\u6027<code>attribute</code>\u7684\u503C\u3002<code>id</code>\u662F\u7EAF\u6620\u5C04\u5C5E\u6027\uFF0C\u5B83\u4E0D\u4F1A\u4FEE\u6539\u6216\u8005\u9650\u5236\u503C\u3002</li><li><code>type</code>\u5C5E\u6027\u6620\u5C04\u5230<code>type</code>\u7279\u6027\uFF1A\u83B7\u53D6\u5C5E\u6027<code>property</code>\u65F6\u5C06\u8BFB\u53D6\u7279\u6027<code>attribute</code>\u7684\u503C\uFF0C\u8BBE\u7F6E\u5C5E\u6027<code>property</code>\u65F6\u5C06\u91CD\u5199\u7279\u6027<code>attribute</code>\u7684\u503C\u3002<code>type</code>\u4E0D\u662F\u7EAF\u6620\u5C04\u5C5E\u6027\uFF0C\u56E0\u4E3A\u5B83\u7684\u53D6\u503C\u9650\u5236\u4E8E\u5DF2\u77E5\u7684\u503C\uFF08\u5373<code>input</code>\u5143\u7D20<code>type</code>\u7684\u6709\u6548\u503C\uFF09\u3002\u5982\u679C\u6709<code>&lt;input type=&quot;foo&quot;&gt;</code>\uFF0C\u5219<code>theInput.getAttribute(&quot;type&quot;)</code>\u4F1A\u5F97\u5230<code>foo</code>\uFF0C\u4F46\u662F<code>theInput.type</code>\u4F1A\u5F97\u5230<code>text</code>\u3002</li><li>\u76F8\u53CD\u7684\uFF0C<code>value</code>\u5C5E\u6027\u4E0D\u4F1A\u6620\u5C04\u5230<code>value</code>\u7279\u6027\u3002\u53D6\u800C\u4EE3\u4E4B\u7684\u662F<code>value</code>\u5C5E\u6027\u5C06\u83B7\u5F97<code>input</code>\u7684\u5F53\u524D\u503C\u3002\u5F53\u7528\u6237\u624B\u52A8\u7684\u6539\u53D8<code>input</code>\u8F93\u5165\u6846\u7684<code>value</code>\u503C\uFF0C<code>value</code>\u5C5E\u6027\u5C06\u53CD\u6620\u51FA\u8FD9\u4E2A\u6539\u53D8\u3002\u56E0\u6B64\u5982\u679C\u7528\u6237\u8F93\u5165 &#39;John&#39;\uFF0C\u5219\uFF1A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>theInput<span class="token punctuation">.</span>value <span class="token comment">// returns &quot;John&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u800C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>theInput<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span> <span class="token comment">// returns &quot;Name&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>value</code>\u5C5E\u6027\u53CD\u6620\u51FA<code>input</code>\u8F93\u5165\u6846\u7684\u5F53\u524D<code>text-content</code>\uFF0C\u800C<code>value</code>\u7279\u6027\u5305\u542B\u4E86<code>input</code>\u8F93\u5165\u6846<code>value</code>\u7279\u6027\u7684\u521D\u59CB<code>text-content</code>\u3002</p><p>\u56E0\u6B64\u5982\u679C\u4F60\u60F3\u8981\u77E5\u9053\u6587\u672C\u8F93\u5165\u6846\u7684\u5F53\u524D\u503C\uFF0C\u8BFB\u53D6\u5C5E\u6027<code>property</code>\u3002\u5982\u679C\u4F60\u60F3\u8981\u77E5\u9053\u6587\u672C\u8F93\u5165\u6846\u7684\u521D\u59CB\u503C\uFF0C\u8BFB\u53D6\u7279\u6027<code>attribute</code>\u3002\u6216\u8005\u4F60\u53EF\u4EE5\u4F7F\u7528<code>defaultValue</code>\u5C5E\u6027\uFF0C\u8FD9\u662F\u4E00\u4E2A<code>value</code>\u7279\u6027\u7684\u6620\u5C04\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>theInput<span class="token punctuation">.</span>value                 <span class="token comment">// returns &quot;John&quot;</span>\ntheInput<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span> <span class="token comment">// returns &quot;Name&quot;</span>\ntheInput<span class="token punctuation">.</span>defaultValue          <span class="token comment">// returns &quot;Name&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>', 16);
const _hoisted_20 = /* @__PURE__ */ createStaticVNode("\u6709\u597D\u51E0\u4E2A\u5C5E\u6027\u662F\u76F4\u63A5\u6620\u5C04\u5230\u5B83\u4EEC\u5BF9\u5E94\u7684\u7279\u6027<code>attribute</code>\u4E0A\u7684\uFF0C\u6BD4\u5982<code>rel</code>\u548C<code>id</code>\u3002\u4E00\u4E9B\u5C5E\u6027\u4E5F\u662F\u76F4\u63A5\u6620\u5C04\u7684\uFF0C\u4F46\u662F\u540D\u5B57\u7A0D\u6709\u4E0D\u540C\uFF0C\u6BD4\u5982<code>htmlFor</code>\u5C5E\u6027\u6620\u5C04\u5230<code>for</code>\u7279\u6027\uFF0C<code>className</code>\u6620\u5C04\u5230<code>class</code>\u7279\u6027\u3002\u8FD8\u6709\u8BB8\u591A\u5C5E\u6027\u6620\u5C04\u5230\u5B83\u4EEC\u5BF9\u5E94\u7684\u7279\u6027\uFF0C\u4F46\u662F\u6709\u9650\u5236\u548C\u4FEE\u6539\uFF0C\u6BD4\u5982<code>src</code>\u3001<code>href</code>\u3001<code>disabled</code>\u3001<code>multiple</code>\u7B49\u7B49\u3002", 23);
const _hoisted_43 = {
  href: "https://www.w3.org/TR/html5/infrastructure.html#reflect",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_44 = /* @__PURE__ */ createTextVNode("\u8FD9\u4EFD\u6587\u6863");
const _hoisted_45 = /* @__PURE__ */ createTextVNode("\u5305\u542B\u4E86\u5404\u79CD\u5404\u6837\u7684\u6620\u5C04\u3002");
const _hoisted_46 = /* @__PURE__ */ createTextVNode("\u7FFB\u8BD1\u81EA\uFF1A");
const _hoisted_47 = {
  href: "http://stackoverflow.com/questions/6003819/properties-and-attributes-in-html#answer-6004028",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_48 = /* @__PURE__ */ createTextVNode("http://stackoverflow.com/questions/6003819/properties-and-attributes-in-html#answer-6004028");
const _hoisted_49 = /* @__PURE__ */ createStaticVNode('<h2 id="\u7ED3\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u8BBA" aria-hidden="true">#</a> \u7ED3\u8BBA</h2><table><thead><tr><th>HTML attribute</th><th>DOM property</th></tr></thead><tbody><tr><td>\u503C\u6C38\u8FDC\u662F\u5B57\u7B26\u4E32\u6216<code>null</code></td><td>\u503C\u53EF\u4EE5\u662F\u4EFB\u610F\u5408\u6CD5<code>js</code>\u7C7B\u578B</td></tr><tr><td>\u5927\u5C0F\u5199\u4E0D\u654F\u611F</td><td>\u5927\u5C0F\u5199\u654F\u611F</td></tr><tr><td>\u4E0D\u5B58\u5728\u65F6\u8FD4\u56DE<code>null</code></td><td>\u4E0D\u5B58\u5728\u65F6\u8FD4\u56DE<code>undefined</code></td></tr><tr><td>\u5BF9\u4E8E<code>href</code>\uFF0C\u8FD4\u56DE<code>html</code>\u8BBE\u7F6E\u7684\u503C</td><td>\u5BF9\u4E8E<code>href</code>\u8FD4\u56DE\u89E3\u6790\u540E\u7684\u5B8C\u6574<code>url</code></td></tr><tr><td>\u66F4\u65B0<code>value</code>\uFF0C\u5C5E\u6027\u4E5F\u66F4\u65B0</td><td>\u66F4\u65B0<code>value</code>\uFF0C\u7279\u6027\u4E0D\u66F4\u65B0</td></tr></tbody></table>', 2);
const _hoisted_51 = /* @__PURE__ */ createTextVNode("\u8BE6\u60C5\u8BF7\u89C1: ");
const _hoisted_52 = {
  href: "https://github.com/justjavac/the-front-end-knowledge-you-may-not-know/blob/master/archives/015-dom-attributes-and-properties.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_53 = /* @__PURE__ */ createTextVNode("HTML attribute \u548C DOM property");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7ED3\u8BBA" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_4,
    createBaseVNode("p", null, [
      _hoisted_20,
      createBaseVNode("a", _hoisted_43, [
        _hoisted_44,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_45
    ]),
    createBaseVNode("p", null, [
      _hoisted_46,
      createBaseVNode("a", _hoisted_47, [
        _hoisted_48,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_49,
    createBaseVNode("p", null, [
      _hoisted_51,
      createBaseVNode("a", _hoisted_52, [
        _hoisted_53,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var differencesBetweenPropertiesAndAttributes_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { differencesBetweenPropertiesAndAttributes_html as default };
