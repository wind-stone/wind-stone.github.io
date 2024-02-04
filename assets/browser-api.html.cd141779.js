import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u6D4F\u89C8\u5668-api",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6D4F\u89C8\u5668-api",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6D4F\u89C8\u5668 API")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("URLSearchParams");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("JS Base64 \u7F16\u7801/\u89E3\u7801");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Base64 \u7F16\u7801");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Base64 \u89E3\u7801");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u4E2D\u6587\u62A5\u9519");
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<h2 id="urlsearchparams" tabindex="-1"><a class="header-anchor" href="#urlsearchparams" aria-hidden="true">#</a> URLSearchParams</h2><p>URLSearchParams API \u7528\u4E8E\u5904\u7406 URL \u4E4B\u4E2D\u7684\u67E5\u8BE2\u5B57\u7B26\u4E32\uFF0C\u5373\u95EE\u53F7\u4E4B\u540E\u7684\u90E8\u5206\u3002</p><p>\u6CA1\u6709\u90E8\u7F72\u4E0D\u652F\u6301\u8FD9\u4E2A API \u7684\u6D4F\u89C8\u5668\uFF0C\u53EF\u4EE5\u7528<code>url-search-params</code>\u8FD9\u4E2A\u57AB\u7247\u5E93\u3002</p><p>URLSearchParams \u6709\u4EE5\u4E0B\u65B9\u6CD5\uFF0C\u7528\u6765\u64CD\u4F5C\u67D0\u4E2A\u53C2\u6570\u3002</p><ul><li><code>has()</code>\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u662F\u5426\u5177\u6709\u67D0\u4E2A\u53C2\u6570</li><li><code>get()</code>\uFF1A\u8FD4\u56DE\u6307\u5B9A\u53C2\u6570\u7684\u7B2C\u4E00\u4E2A\u503C</li><li><code>getAll()</code>\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6210\u5458\u662F\u6307\u5B9A\u53C2\u6570\u7684\u6240\u6709\u503C</li><li><code>set()</code>\uFF1A\u8BBE\u7F6E\u6307\u5B9A\u53C2\u6570</li><li><code>delete()</code>\uFF1A\u5220\u9664\u6307\u5B9A\u53C2\u6570</li><li><code>append()</code>\uFF1A\u5728\u67E5\u8BE2\u5B57\u7B26\u4E32\u4E4B\u4E2D\uFF0C\u8FFD\u52A0\u4E00\u4E2A\u952E\u503C\u5BF9</li><li><code>toString()</code>\uFF1A\u8FD4\u56DE\u6574\u4E2A\u67E5\u8BE2\u5B57\u7B26\u4E32</li></ul><p>\u4EE5<code>get</code>\u4E3A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> paramsString <span class="token operator">=</span> <span class="token string">&#39;name=jawil&amp;age=24&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> searchParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>paramsString<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// jawil</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>', 7);
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u8BE6\u60C5\u8BF7\u89C1");
const _hoisted_16 = {
  href: "https://github.com/justjavac/the-front-end-knowledge-you-may-not-know/issues/31#issuecomment-422712267",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u5229\u7528 URLSearchParams \u5BF9\u8C61\u83B7\u53D6URL\u4E4B\u4E2D\u7684\u67E5\u8BE2\u5B57\u7B26\u4E32\uFF0C\u5373\u95EE\u53F7\u4E4B\u540E\u7684\u90E8\u5206 #31");
const _hoisted_18 = /* @__PURE__ */ createStaticVNode('<h2 id="js-base64-\u7F16\u7801-\u89E3\u7801" tabindex="-1"><a class="header-anchor" href="#js-base64-\u7F16\u7801-\u89E3\u7801" aria-hidden="true">#</a> JS Base64 \u7F16\u7801/\u89E3\u7801</h2><h3 id="base64-\u7F16\u7801" tabindex="-1"><a class="header-anchor" href="#base64-\u7F16\u7801" aria-hidden="true">#</a> Base64 \u7F16\u7801</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">btoa</span><span class="token punctuation">(</span><span class="token string">&#39;zhangxinxu&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// \u8FD4\u56DE\uFF1A&#39;emhhbmd4aW54dQ==&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="base64-\u89E3\u7801" tabindex="-1"><a class="header-anchor" href="#base64-\u89E3\u7801" aria-hidden="true">#</a> Base64 \u89E3\u7801</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">atob</span><span class="token punctuation">(</span><span class="token string">&#39;emhhbmd4aW54dQ==&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// \u8FD4\u56DE\uFF1A&#39;zhangxinxu&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u4E2D\u6587\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u6587\u62A5\u9519" aria-hidden="true">#</a> \u4E2D\u6587\u62A5\u9519</h3><p>\u6D89\u53CA\u5230\u7ED9\u4E2D\u6587\u7F16\u7801\u65F6\uFF0C\u4F1A\u51FA\u73B0\u62A5\u9519\uFF0C\u89E3\u51B3\u65B9\u6CD5\u662F\u7F16\u7801\u4E4B\u524D\u5148<code>encode</code>\u7F16\u7801\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">btoa</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">&#39;\u563B\u563B\u54C8\u54C8\u54C8\u54C8\u5566\u5566\u5566\u5566&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nwindow<span class="token punctuation">.</span><span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">atob</span><span class="token punctuation">(</span><span class="token string">&#39;JUU1JTk4JUJCJUU1JTk4JUJCJUU1JTkzJTg4JUU1JTkzJTg4JUU1JTkzJTg4JUU1JTkzJTg4JUU1JTk1JUE2JUU1JTk1JUE2JUU1JTk1JUE2JUU1JTk1JUE2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>', 8);
const _hoisted_26 = /* @__PURE__ */ createTextVNode("Reference: ");
const _hoisted_27 = {
  href: "https://www.zhangxinxu.com/wordpress/2018/08/js-base64-atob-btoa-encode-decode/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_28 = /* @__PURE__ */ createTextVNode("\u5F20\u946B\u65ED-\u539F\u6765\u6D4F\u89C8\u5668\u539F\u751F\u652F\u6301JS Base64\u7F16\u7801\u89E3\u7801");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#urlsearchparams" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#js-base64-\u7F16\u7801-\u89E3\u7801" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#base64-\u7F16\u7801" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#base64-\u89E3\u7801" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4E2D\u6587\u62A5\u9519" }, {
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
      _hoisted_26,
      createBaseVNode("a", _hoisted_27, [
        _hoisted_28,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var browserApi_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { browserApi_html as default };
