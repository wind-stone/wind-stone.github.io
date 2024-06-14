import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u9519\u8BEF\u5904\u7406-\u6D4F\u89C8\u5668\u73AF\u5883",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u9519\u8BEF\u5904\u7406-\u6D4F\u89C8\u5668\u73AF\u5883",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u9519\u8BEF\u5904\u7406 - \u6D4F\u89C8\u5668\u73AF\u5883")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u9519\u8BEF\u5904\u7406\u65B9\u5F0F");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("window.onerror");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("window.addEventListener('error')");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("element.onerror");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u6CE8\u610F\u4E8B\u9879");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Reference");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u5F53 JavaScript \u8FD0\u884C\u65F6\u9519\u8BEF\uFF08\u5305\u62EC\u8BED\u6CD5\u9519\u8BEF\uFF09\u53D1\u751F\u65F6\uFF0C");
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("code", null, "window", -1);
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u4F1A\u89E6\u53D1\u4E00\u4E2A");
const _hoisted_12 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/API/ErrorEvent",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("code", null, "ErrorEvent", -1);
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u63A5\u53E3\u7684");
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("code", null, "error", -1);
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u4E8B\u4EF6\uFF0C\u5E76\u6267\u884C");
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("code", null, "window.onerror()", -1);
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_19 = /* @__PURE__ */ createStaticVNode('<h2 id="\u9519\u8BEF\u5904\u7406\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u5904\u7406\u65B9\u5F0F" aria-hidden="true">#</a> \u9519\u8BEF\u5904\u7406\u65B9\u5F0F</h2><h3 id="window-onerror" tabindex="-1"><a class="header-anchor" href="#window-onerror" aria-hidden="true">#</a> window.onerror</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>\n    <span class="token parameter">message<span class="token punctuation">,</span>\n    source<span class="token punctuation">,</span>\n    lineno<span class="token punctuation">,</span>\n    colno<span class="token punctuation">,</span>\n    error</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li><code>message</code>\uFF1A\u9519\u8BEF\u4FE1\u606F\uFF08\u5B57\u7B26\u4E32\uFF09\u3002\u53EF\u7528\u4E8EHTML onerror=&quot;&quot;\u5904\u7406\u7A0B\u5E8F\u4E2D\u7684event\u3002</li><li><code>source</code>\uFF1A\u53D1\u751F\u9519\u8BEF\u7684\u811A\u672CURL\uFF08\u5B57\u7B26\u4E32\uFF09</li><li><code>lineno</code>\uFF1A\u53D1\u751F\u9519\u8BEF\u7684\u884C\u53F7\uFF08\u6570\u5B57\uFF09</li><li><code>colno</code>\uFF1A\u53D1\u751F\u9519\u8BEF\u7684\u5217\u53F7\uFF08\u6570\u5B57\uFF09</li><li><code>error</code>\uFF1AError\u5BF9\u8C61\uFF08\u5BF9\u8C61\uFF09</li></ul><p>\u82E5\u8BE5\u51FD\u6570\u8FD4\u56DE<code>true</code>\uFF0C\u5219\u963B\u6B62\u6267\u884C\u9ED8\u8BA4\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u3002</p><h3 id="window-addeventlistener-error" tabindex="-1"><a class="header-anchor" href="#window-addeventlistener-error" aria-hidden="true">#</a> window.addEventListener(&#39;error&#39;)</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>', 7);
const _hoisted_26 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/API/ErrorEvent",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("code", null, "ErrorEvent", -1);
const _hoisted_28 = /* @__PURE__ */ createTextVNode("\u7C7B\u578B\u7684");
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("code", null, "event", -1);
const _hoisted_30 = /* @__PURE__ */ createTextVNode("\u5305\u542B\u6709\u5173\u4E8B\u4EF6\u548C\u9519\u8BEF\u7684\u6240\u6709\u4FE1\u606F\u3002");
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "element-onerror",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#element-onerror",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" element.onerror")
], -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("code", null, "element.onerror", -1);
const _hoisted_33 = /* @__PURE__ */ createTextVNode("\u4F7F\u7528\u5355\u4E00");
const _hoisted_34 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/API/Event",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_35 = /* @__PURE__ */ createTextVNode("Event");
const _hoisted_36 = /* @__PURE__ */ createTextVNode("\u53C2\u6570\u7684\u51FD\u6570\u4F5C\u4E3A\u5176\u5904\u7406\u51FD\u6570\u3002");
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u6CE8\u610F\u4E8B\u9879",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6CE8\u610F\u4E8B\u9879",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6CE8\u610F\u4E8B\u9879")
], -1);
const _hoisted_38 = /* @__PURE__ */ createTextVNode("\u5F53\u52A0\u8F7D\u81EA");
const _hoisted_39 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_40 = /* @__PURE__ */ createTextVNode("\u4E0D\u540C\u57DF");
const _hoisted_41 = /* @__PURE__ */ createTextVNode("\u7684\u811A\u672C\u4E2D\u53D1\u751F\u8BED\u6CD5\u9519\u8BEF\u65F6\uFF0C\u4E3A\u907F\u514D\u4FE1\u606F\u6CC4\u9732\uFF08\u53C2\u89C1");
const _hoisted_42 = {
  href: "https://bugzilla.mozilla.org/show_bug.cgi?id=363897",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_43 = /* @__PURE__ */ createTextVNode("bug 363897");
const _hoisted_44 = /* @__PURE__ */ createTextVNode('\uFF09\uFF0C\u8BED\u6CD5\u9519\u8BEF\u7684\u7EC6\u8282\u5C06\u4E0D\u4F1A\u62A5\u544A\uFF0C\u800C\u4EE3\u4E4B\u7B80\u5355\u7684"Script error."\u3002\u5728\u67D0\u4E9B\u6D4F\u89C8\u5668\u4E2D\uFF0C\u901A\u8FC7\u5728');
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("code", null, "<script>", -1);
const _hoisted_46 = /* @__PURE__ */ createTextVNode("\u4F7F\u7528");
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("code", null, "crossorigin", -1);
const _hoisted_48 = /* @__PURE__ */ createTextVNode('\u5C5E\u6027\u5E76\u8981\u6C42\u670D\u52A1\u5668\u53D1\u9001\u9002\u5F53\u7684 CORS HTTP \u54CD\u5E94\u5934\uFF0C\u8BE5\u884C\u4E3A\u53EF\u88AB\u8986\u76D6\u3002\u4E00\u4E2A\u53D8\u901A\u65B9\u6848\u662F\u5355\u72EC\u5904\u7406"Script error."\uFF0C\u544A\u77E5\u9519\u8BEF\u8BE6\u60C5\u4EC5\u80FD\u901A\u8FC7\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u67E5\u770B\uFF0C\u65E0\u6CD5\u901A\u8FC7 JavaScript \u8BBF\u95EE\u3002');
const _hoisted_49 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> url<span class="token punctuation">,</span> lineNo<span class="token punctuation">,</span> columnNo<span class="token punctuation">,</span> error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> string <span class="token operator">=</span> msg<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> substring <span class="token operator">=</span> <span class="token string">&quot;script error&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>substring<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Script Error: See Browser Console for Detail&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token punctuation">[</span>\n            <span class="token string">&#39;Message: &#39;</span> <span class="token operator">+</span> msg<span class="token punctuation">,</span>\n            <span class="token string">&#39;URL: &#39;</span> <span class="token operator">+</span> url<span class="token punctuation">,</span>\n            <span class="token string">&#39;Line: &#39;</span> <span class="token operator">+</span> lineNo<span class="token punctuation">,</span>\n            <span class="token string">&#39;Column: &#39;</span> <span class="token operator">+</span> columnNo<span class="token punctuation">,</span>\n            <span class="token string">&#39;Error object: &#39;</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>\n        <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; - &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token function">alert</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u5F53\u4F7F\u7528\u884C\u5185HTML\u6807\u7B7E\uFF08<code>&lt;body onerror=&quot;alert(&#39;an error occurred&#39;)&quot;&gt;</code>\uFF09\u65F6\uFF0CHTML\u89C4\u8303\u8981\u6C42\u4F20\u9012\u7ED9<code>onerror</code>\u7684\u53C2\u6570\u547D\u540D\u4E3A<code>event</code>\u3001<code>source</code>\u3001<code>lineno</code>\u3001<code>colno</code>\u3001<code>error</code>\u3002\u9488\u5BF9\u4E0D\u6EE1\u8DB3\u6B64\u8981\u6C42\u7684\u6D4F\u89C8\u5668\uFF0C\u4F20\u9012\u7684\u53C2\u6570\u4ECD\u53EF\u4F7F\u7528<code>arguments[0]</code>\u5230<code>arguments[2]</code>\u6765\u83B7\u53D6\u3002</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>', 3);
const _hoisted_52 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onerror",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_53 = /* @__PURE__ */ createTextVNode("GlobalEventHandlers.onerror");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u9519\u8BEF\u5904\u7406\u65B9\u5F0F" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#window-onerror" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#window-addeventlistener-error" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#element-onerror" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6CE8\u610F\u4E8B\u9879" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#reference" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ])
      ])
    ]),
    createBaseVNode("p", null, [
      _hoisted_9,
      _hoisted_10,
      _hoisted_11,
      createBaseVNode("a", _hoisted_12, [
        _hoisted_13,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_14,
      _hoisted_15,
      _hoisted_16,
      _hoisted_17,
      _hoisted_18
    ]),
    _hoisted_19,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_26, [
        _hoisted_27,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_28,
      _hoisted_29,
      _hoisted_30
    ]),
    _hoisted_31,
    createBaseVNode("p", null, [
      _hoisted_32,
      _hoisted_33,
      createBaseVNode("a", _hoisted_34, [
        _hoisted_35,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_36
    ]),
    _hoisted_37,
    createBaseVNode("p", null, [
      _hoisted_38,
      createBaseVNode("a", _hoisted_39, [
        _hoisted_40,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_41,
      createBaseVNode("a", _hoisted_42, [
        _hoisted_43,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_44,
      _hoisted_45,
      _hoisted_46,
      _hoisted_47,
      _hoisted_48
    ]),
    _hoisted_49,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_52, [
          _hoisted_53,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var browserErrorHandling_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { browserErrorHandling_html as default };
