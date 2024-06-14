import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, d as createStaticVNode, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u3010\u9AD8\u7EA7\u3011\u56DE\u7B54\u95EE\u9898-\u8BF4\u660E\u5C5E\u6027-dom-property-\u548C\u7279\u6027-html-attribute-\u7684\u533A\u522B\u4E0E\u8054\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u3010\u9AD8\u7EA7\u3011\u56DE\u7B54\u95EE\u9898-\u8BF4\u660E\u5C5E\u6027-dom-property-\u548C\u7279\u6027-html-attribute-\u7684\u533A\u522B\u4E0E\u8054\u7CFB" aria-hidden="true">#</a> \u3010\u9AD8\u7EA7\u3011\u56DE\u7B54\u95EE\u9898\uFF0C\u8BF4\u660E\u5C5E\u6027\uFF08DOM Property\uFF09\u548C\u7279\u6027\uFF08HTML Attribute\uFF09\u7684\u533A\u522B\u4E0E\u8054\u7CFB</h1><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sometype<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u9488\u5BF9\u5982\u4E0A\u7684 HTML\uFF0C\u5206\u522B\u8BF4\u51FA<code>type</code>\u5C5E\u6027/\u7279\u6027\u548C<code>value</code>\u5C5E\u6027/\u7279\u6027\u7684\u503C\uFF0C\u5373</p><p>\u95EE\u9898\u4E00\uFF1A<code>value</code>\u7684\u5C5E\u6027\u548C\u7279\u6027\u5206\u522B\u662F\u4EC0\u4E48\uFF1F\u5982\u679C\u6B64\u65F6\u7528\u6237\u6E05\u7A7A\u8F93\u5165\u6846\u5E76\u8F93\u5165<code>2</code>\uFF0C<code>value</code>\u7684\u5C5E\u6027/\u7279\u6027\u5206\u522B\u662F\u4EC0\u4E48\uFF1F</p><p>\u95EE\u9898\u4E8C\uFF1A<code>type</code>\u7684\u5C5E\u6027\u548C\u7279\u6027\u5206\u522B\u662F\u4EC0\u4E48\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u95EE\u9898\u4E00\uFF0C\u53C2\u8003\u7B54\u6848</span>\ninput<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>\ninput<span class="token punctuation">.</span>value <span class="token comment">// 1</span>\n\n<span class="token comment">// \u82E5\u7528\u6237\u6E05\u7A7A\u8F93\u5165\u6846\u5E76\u8F93\u5165 2</span>\ninput<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>\ninput<span class="token punctuation">.</span>value <span class="token comment">// 1</span>\n\n<span class="token comment">// \u95EE\u9898\u4E8C\uFF0C\u53C2\u8003\u7B54\u6848</span>\ninput<span class="token punctuation">.</span>type <span class="token comment">// text</span>\ninput<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">)</span> <span class="token comment">// sometype</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>B - \u80FD\u56DE\u7B54\u5BF9\u95EE\u9898\u4E00\uFF0C\u5E76\u80FD\u8BF4\u660E<code>value</code>\u7684\u5C5E\u6027\u4E0E\u7279\u6027\u7684\u6620\u5C04\u5173\u7CFB A - \u80FD\u56DE\u7B54\u5BF9\u95EE\u9898\u4E8C\uFF0C\u5E76\u80FD\u8BF4\u660E\u5E38\u89C1<code>type</code>\u7684\u7279\u6027\u503C S - \u8BF4\u51FA\u5C5E\u6027\u548C\u7279\u6027\u662F\u5982\u4F55\u6620\u5C04\u7684\uFF0C\u5E76\u80FD\u8BF4\u51FA\u4E00\u4E24\u4E2A\u975E\u4E00\u4E00\u6620\u5C04\u7684\u4F8B\u5B50\uFF0C\u6BD4\u5982<code>class</code>\u7279\u6027 vs <code>className</code>\u5C5E\u6027\uFF0C<code>for</code> \u7279\u6027 vs <code>htmlFor</code>\u5C5E\u6027</p><p>\u53C2\u8003\u6587\u6863\uFF1A</p>', 8);
const _hoisted_9 = {
  href: "https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html#answer-6004028",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = /* @__PURE__ */ createTextVNode("What is the difference between properties and attributes in HTML?");
const _hoisted_11 = {
  href: "https://github.com/justjavac/the-front-end-knowledge-you-may-not-know/blob/master/archives/015-dom-attributes-and-properties.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createTextVNode("HTML attribute \u548C DOM property");
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_9, [
          _hoisted_10,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_11, [
          _hoisted_12,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var theDifferenceBetweenDomPropertyAndHtmlAttribute_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { theDifferenceBetweenDomPropertyAndHtmlAttribute_html as default };
