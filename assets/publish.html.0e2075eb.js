import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u53D1\u5E03",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u53D1\u5E03",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u53D1\u5E03")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "\u53D1\u5E03\u58F0\u660E\u6587\u4EF6\u5230 NPM \u4E3B\u8981\u6709\u4E24\u79CD\u65B9\u5F0F:", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("li", null, "\u4E0E NPM \u5305\u6346\u7ED1\u5728\u4E00\u8D77\u53D1\u5E03", -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u53D1\u5E03\u5230 NPM \u4E0A\u7684");
const _hoisted_5 = {
  href: "https://www.npmjs.com/~types",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createTextVNode("@types organization");
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<p>\u82E5\u4F60\u80FD\u63A7\u5236\u8981\u4F7F\u7528\u4F60\u53D1\u5E03\u7684\u58F0\u660E\u6587\u4EF6\u7684\u90A3\u4E2A NPM \u5305\u7684\u8BDD\uFF0C\u63A8\u8350\u7B2C\u4E00\u79CD\u65B9\u5F0F\u3002</p><p>\u65E0\u8BBA\u662F\u4E0A\u8FF0\u54EA\u4E00\u7C7B\u53D1\u5E03\u65B9\u5F0F\uFF0C\u6700\u7EC8\u7684\u4F7F\u7528\u65B9\u5F0F\u90FD\u662F\u76F8\u540C\u7684\uFF0C\u4F7F\u7528<code>import</code>\u4ECE NPM \u5305\u4E0A\u5F15\u5165\u5373\u53EF\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> Vue<span class="token punctuation">,</span> <span class="token punctuation">{</span> VNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> Component <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// `createElement` \u662F\u53EF\u63A8\u5BFC\u7684\uFF0C\u4F46\u662F `render` \u9700\u8981\u8FD4\u56DE\u503C\u7C7B\u578B</span>\n  <span class="token function">render</span> <span class="token punctuation">(</span>createElement<span class="token punctuation">)</span><span class="token operator">:</span> VNode <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>greeting<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>', 3);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("ul", null, [
      _hoisted_3,
      createBaseVNode("li", null, [
        _hoisted_4,
        createBaseVNode("a", _hoisted_5, [
          _hoisted_6,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_7,
    createVNode(_component_global_config)
  ], 64);
}
var publish_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { publish_html as default };
