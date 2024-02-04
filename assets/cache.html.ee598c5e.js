import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u7F13\u5B58\u673A\u5236",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7F13\u5B58\u673A\u5236",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7F13\u5B58\u673A\u5236")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u53C2\u8003\u6587\u6863");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u6D4F\u89C8\u5668\u9ED8\u8BA4\u8FC7\u671F\u65F6\u95F4\uFF08\u542F\u53D1\u5F0F\u65B0\u9C9C\u5EA6\u68C0\u67E5\uFF09");
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u53C2\u8003\u6587\u6863",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u53C2\u8003\u6587\u6863",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u53C2\u8003\u6587\u6863")
], -1);
const _hoisted_6 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode("MDN - HTTP caching");
const _hoisted_8 = {
  href: "https://datatracker.ietf.org/doc/html/rfc7234#section-4.2.2",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createTextVNode("RFC 7234: Hypertext Transfer Protocol (HTTP/1.1): 4.2.2. Calculating Heuristic Freshness");
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<h2 id="\u6D4F\u89C8\u5668\u9ED8\u8BA4\u8FC7\u671F\u65F6\u95F4-\u542F\u53D1\u5F0F\u65B0\u9C9C\u5EA6\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u9ED8\u8BA4\u8FC7\u671F\u65F6\u95F4-\u542F\u53D1\u5F0F\u65B0\u9C9C\u5EA6\u68C0\u67E5" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u9ED8\u8BA4\u8FC7\u671F\u65F6\u95F4\uFF08\u542F\u53D1\u5F0F\u65B0\u9C9C\u5EA6\u68C0\u67E5\uFF09</h2><p>A \u9875\u9762 HTML \u7684\u54CD\u5E94\u5934\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Response headers</span>\nConnection: keep-alive\nContent-Encoding: <span class="token function">gzip</span>\nContent-Type: text/html<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8\nDate: Wed, <span class="token number">29</span> Dec <span class="token number">2021</span> <span class="token number">10</span>:41:07 GMT\nTransfer-Encoding: chunked\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>B \u9875\u9762 HTML \u7684\u54CD\u5E94\u5934\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Response headers</span>\nConnection: keep-alive\nDate: Wed, <span class="token number">29</span> Dec <span class="token number">2021</span> <span class="token number">10</span>:39:40 GMT\nETag: <span class="token string">&quot;61cadb92-1cf6&quot;</span>\nLast-Modified: Tue, <span class="token number">28</span> Dec <span class="token number">2021</span> 09:40:34 GMT\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u95EE\uFF1A\u6D4F\u89C8\u5668\u4F1A\u7F13\u5B58\u9875\u9762 A\u3001B \u7684 HTML \u5417\uFF1F</p><p>\u7B54\uFF1A\u6D4F\u89C8\u5668\u4F1A\u7F13\u5B58\u9875\u9762 B \u7684 HTML\uFF0C\u4F46\u4E0D\u4F1A\u7F13\u5B58\u9875\u9762 A \u7684 HTML\u3002</p><p>\u4EE5\u4E0A\u4E24\u4E2A HTML \u7684\u54CD\u5E94\u5934\u91CC\u90FD\u6CA1\u6709<code>Cache-Control</code>\u548C<code>Expires</code>\uFF0C\u4E14\u54CD\u5E94\u5934\u91CC\u4E5F\u4E0D\u5305\u542B\u5176\u4ED6\u7F13\u5B58\u76F8\u5173\u7684\u9650\u5236\uFF0C\u56E0\u6B64\u6D4F\u89C8\u5668\u9ED8\u8BA4\u4F1A\u91C7\u7528\u4E00\u4E2A\u542F\u53D1\u5F0F\u7684\u7B97\u6CD5, \u901A\u5E38\u4F1A\u53D6\u54CD\u5E94\u5934\u7684<code>Date</code>\u503C - <code>Last-Modified</code>\u503C\u7684<code>10%</code>\u4F5C\u4E3A\u7F13\u5B58\u65F6\u95F4\u3002</p><p>MDN \u539F\u6587\u5982\u4E0B\uFF1A</p>', 9);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("p", null, "Heuristic freshness checking", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("p", null, "If an origin server does not explicitly specify freshness (for example, using Cache-Control or Expires header) then a heuristic approach may be used.", -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("p", null, "If this is the case, look for a Last-Modified header. If the header is present, then the cache's freshness lifetime is equal to the value of the Date header minus the value of the Last-modified header divided by 10. The expiration time is computed as follows:", -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("blockquote", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "expirationTime = responseTime + freshnessLifetime - currentAge")
], -1);
const _hoisted_23 = /* @__PURE__ */ createTextVNode("where responseTime is the time at which the response was received according to the browser. For more information see ");
const _hoisted_24 = {
  href: "https://datatracker.ietf.org/doc/html/rfc7234#section-4.2.2",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_25 = /* @__PURE__ */ createTextVNode("RFC 7234: Hypertext Transfer Protocol (HTTP/1.1): 4.2.2. Calculating Heuristic Freshness");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u53C2\u8003\u6587\u6863" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6D4F\u89C8\u5668\u9ED8\u8BA4\u8FC7\u671F\u65F6\u95F4-\u542F\u53D1\u5F0F\u65B0\u9C9C\u5EA6\u68C0\u67E5" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_5,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_6, [
          _hoisted_7,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_8, [
          _hoisted_9,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_10,
    createBaseVNode("blockquote", null, [
      _hoisted_19,
      _hoisted_20,
      _hoisted_21,
      _hoisted_22,
      createBaseVNode("p", null, [
        _hoisted_23,
        createBaseVNode("a", _hoisted_24, [
          _hoisted_25,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var cache_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { cache_html as default };
