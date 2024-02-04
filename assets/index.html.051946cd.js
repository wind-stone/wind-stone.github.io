import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "number",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#number",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Number")
], -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("JavaScript \u81F3\u4ECA\u6CA1\u6709\u771F\u6B63\u7684\u6574\u6570\uFF0C\u6211\u4EEC\u7528\u7684");
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("code", null, "Number", -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u4E8B\u5B9E\u4E0A\u662F\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u6570\uFF0C\u8BE6\u89C1");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("JavaScript \u5173\u4E8E IEEE 754 \u53CC\u7CBE\u5EA6\u6D6E\u70B9\u6570\u7684\u5B9E\u73B0");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<h2 id="\u7CBE\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u7CBE\u5EA6" aria-hidden="true">#</a> \u7CBE\u5EA6</h2><h3 id="parseint-0-0000008-8" tabindex="-1"><a class="header-anchor" href="#parseint-0-0000008-8" aria-hidden="true">#</a> parseInt(0.0000008) === 8</h3><p><code>parseInt</code> \u7684\u7B2C\u4E00\u4E2A\u7C7B\u578B\u662F\u5B57\u7B26\u4E32\uFF0C\u6240\u4EE5\u4F1A\u5C06\u4F20\u5165\u7684\u53C2\u6570\u8F6C\u6362\u6210\u5B57\u7B26\u4E32\uFF0C\u4F46\u662F\u5C0F\u4E8E<code>0.0000001\uFF081e-7\uFF09</code>\u7684\u6570\u5B57\u8F6C\u6362\u6210 String \u65F6\uFF0C\u4F1A\u53D8\u6210\u79D1\u5B66\u8BB0\u53F7\u6CD5\uFF0C\u4E5F\u5C31\u662F<code>String(0.0000008)</code>\u7684\u7ED3\u679C\u4E3A<code>8e-7</code>\u3002<code>parseInt</code>\u5E76\u6CA1\u6709\u5C06<code>e</code>\u89C6\u4E3A\u4E00\u4E2A\u6570\u5B57\uFF0C\u6240\u4EE5\u5728\u8F6C\u6362\u5230 8 \u540E\u5C31\u505C\u6B62\u4E86\uFF0C\u6700\u7EC8 <code>parseInt(0.0000008) === 8</code></p>', 3);
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Referrence: ");
const _hoisted_11 = {
  href: "http://justjavac.com/javascript/2015/01/08/why-parseint-0-00000008-euqal-8-in-js.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createTextVNode("http://justjavac.com/javascript/2015/01/08/why-parseint-0-00000008-euqal-8-in-js.html");
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<h3 id="_0-1-0-2-0-3" tabindex="-1"><a class="header-anchor" href="#_0-1-0-2-0-3" aria-hidden="true">#</a> 0.1 + 0.2 = 0.3</h3><p>\u56E0\u4E3A\u6D6E\u70B9\u6570\u8FD0\u7B97\u7684\u7CBE\u5EA6\u95EE\u9898\u5BFC\u81F4<code>0.1 + 0.2 = 0.3</code>\u8FD9\u4E2A\u7B49\u5F0F\u4E0D\u6210\u7ACB\u3002\u6B63\u786E\u7684\u6BD4\u8F83\u65B9\u6CD5\u662F\u4F7F\u7528 JavaScript \u63D0\u4F9B\u7684\u6700\u5C0F\u7CBE\u5EA6\u503C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span> <span class="token operator">-</span> <span class="token number">0.3</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> Number<span class="token punctuation">.</span><span class="token constant">EPSILON</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u68C0\u67E5\u7B49\u5F0F\u5DE6\u53F3\u4E24\u8FB9\u5DEE\u7684\u7EDD\u5BF9\u503C\u662F\u5426\u5C0F\u4E8E\u6700\u5C0F\u7CBE\u5EA6\uFF0C\u624D\u662F\u6B63\u786E\u7684\u6BD4\u8F83\u6D6E\u70B9\u6570\u7684\u65B9\u6CD5\u3002</p><h2 id="\u5173\u4E8E-3-tostring" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-3-tostring" aria-hidden="true">#</a> \u5173\u4E8E 3.toString()</h2><p>JavaScript \u89C4\u8303\u4E2D\u89C4\u5B9A\u7684\u6570\u5B57\u76F4\u63A5\u91CF\u53EF\u4EE5\u652F\u6301\u56DB\u79CD\u5199\u6CD5\uFF1A\u5341\u8FDB\u5236\u6570\u3001\u4E8C\u8FDB\u5236\u6574\u6570\u3001\u516B\u8FDB\u5236\u6574\u6570\u548C\u5341\u516D\u8FDB\u5236\u6574\u6570\u3002</p><p>\u5341\u8FDB\u5236\u7684 Number \u53EF\u4EE5\u5E26\u5C0F\u6570\uFF0C\u5C0F\u6570\u70B9\u524D\u540E\u90E8\u5206\u90FD\u53EF\u4EE5\u7701\u7565\uFF0C\u4F46\u662F\u4E0D\u80FD\u540C\u65F6\u7701\u7565\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">.01</span>\n<span class="token number">12.</span>\n<span class="token number">12.01</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4EE5\u4E0A\u4E09\u79CD\u8868\u793A\u90FD\u662F\u5408\u6CD5\u7684\u6570\u5B57\u5B57\u9762\u91CF\u3002\u56E0\u6B64\uFF0C<code>3.toString()</code>\u91CC\u7684<code>3.</code>\u4F1A\u5F53\u4F5C\u7701\u7565\u4E86\u5C0F\u6570\u70B9\u540E\u9762\u90E8\u5206\u7684\u6570\u5B57\uFF0C\u800C\u5355\u72EC\u770B\u6210\u4E00\u4E2A\u6574\u4F53\u3002</p><p>\u6240\u4EE5<code>3.toString()</code>\u7B49\u540C\u4E8E<code>(3.)toString()</code>\uFF0C\u8FD9\u663E\u7136\u662F\u8BED\u6CD5\u6709\u95EE\u9898\u3002</p><p>\u800C<code>3..toString()</code>\u4F1A\u88AB\u8BA1\u7B97\u6210<code>(3.).toString()</code>\uFF0COK\uFF01</p><p><code>3...toString()</code>\u7B49\u540C\u4E8E<code>(3.)..toString()</code>\uFF0C\u8BED\u6CD5\u95EE\u9898\u3002</p><p>\u6211\u4EEC\u8981\u60F3\u8BA9\u70B9\u5355\u72EC\u6210\u4E3A\u4E00\u4E2A\uFF08\u8BCD\u6CD5\u5206\u6790\u91CC\u7684\uFF09<code>token</code>\uFF0C\u5C31\u8981\u52A0\u5165\u7A7A\u683C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">3</span> <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u7B49\u6548\u4E8E (3).toString()</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>', 14);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      _hoisted_2,
      _hoisted_3,
      _hoisted_4,
      createVNode(_component_RouterLink, { to: "/js/data-types/js-number-implementation.html" }, {
        default: withCtx(() => [
          _hoisted_5
        ]),
        _: 1
      }),
      _hoisted_6
    ]),
    _hoisted_7,
    createBaseVNode("p", null, [
      _hoisted_10,
      createBaseVNode("a", _hoisted_11, [
        _hoisted_12,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_13,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
