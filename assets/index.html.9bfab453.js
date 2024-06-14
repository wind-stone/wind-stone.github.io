import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "react-\u6027\u80FD\u4F18\u5316",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#react-\u6027\u80FD\u4F18\u5316",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" React \u6027\u80FD\u4F18\u5316")
], -1);
const _hoisted_2 = {
  href: "https://zh-hans.reactjs.org/docs/optimizing-performance.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createTextVNode("React - \u6027\u80FD\u4F18\u5316");
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="shouldcomponentupdate" tabindex="-1"><a class="header-anchor" href="#shouldcomponentupdate" aria-hidden="true">#</a> shouldComponentUpdate</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token parameter">nextProps<span class="token punctuation">,</span> nextState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// \u5F53\u524D this.props \u4E0E nextProps \u8FDB\u884C\u6BD4\u8F83</span>\n    <span class="token comment">// \u5F53\u524D this.state \u4E0E nextState \u8FDB\u884C\u6BD4\u8F83</span>\n    <span class="token comment">// \u8FD4\u56DE true \u8868\u793A\u9700\u8981\u66F4\u65B0\uFF0Cfalse\uFF1A\u4E0D\u9700\u8981\u66F4\u65B0</span>\n    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>shouldComponentUpdate</code>\u9ED8\u8BA4\u5B9E\u73B0\u603B\u662F\u8FD4\u56DE<code>true</code>\uFF0C\u8BA9 React \u6267\u884C\u66F4\u65B0\u3002</p><h2 id="react-purecomponent" tabindex="-1"><a class="header-anchor" href="#react-purecomponent" aria-hidden="true">#</a> React.PureComponent</h2><p><code>React.PureComponent</code>\u662F\u57FA\u4E8E<code>shouldComponentUpdate</code>\u7684\u7B80\u5355\u5B9E\u73B0\uFF0C\u4F1A\u5BF9\u7EC4\u4EF6\u7684<code>props</code>\u548C<code>state</code>\u4E2D\u7684\u6240\u6709\u5B57\u6BB5\uFF0C\u91C7\u7528\u201C\u6D45\u6BD4\u8F83\u201D\u7684\u65B9\u5F0F\u6765\u51B3\u5B9A\u7EC4\u4EF6\u662F\u5426\u9700\u8981\u66F4\u65B0\u3002</p><p>\u5982\u679C<code>props</code>\u548C<code>state</code>\u91CC\u7684\u5B57\u6BB5\u662F\u4E2A\u5F15\u7528\u7C7B\u578B\uFF0C\u5219\u53EA\u8981\u5F15\u7528\u7C7B\u578B\u7684\u503C\u4E0D\u6539\u53D8\uFF0C\u5C31\u4E0D\u4F1A\u89E6\u53D1\u7EC4\u4EF6\u66F4\u65B0\uFF0C\u6BD4\u5982<code>state.list.push(1)</code>\u3002</p>', 6);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          _hoisted_3,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_4,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
