import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "javascript-\u547D\u540D\u89C4\u8303",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#javascript-\u547D\u540D\u89C4\u8303",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" JavaScript \u547D\u540D\u89C4\u8303")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u53D8\u91CF");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u5E38\u91CF");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u51FD\u6570/\u65B9\u6CD5\u547D\u540D");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u7C7B/\u6784\u9020\u51FD\u6570");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u7C7B\u7684\u6210\u5458");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Vue \u547D\u540D\u89C4\u8303");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Reference");
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<p>JavaScript \u7684\u547D\u540D\u5E94\u9075\u5FAA\u7B80\u5316\u3001\u8BED\u4E49\u5316\u7684\u539F\u5219\u3002</p><h2 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h2><p>\u547D\u540D\u65B9\u6CD5: \u5C0F\u9A7C\u5CF0\u5F0F\u547D\u540D\u6CD5\uFF08lowerCamelCase\uFF09 \u547D\u540D\u89C4\u8303\uFF1A\u524D\u7F00\u4E3A\u5F62\u5BB9\u8BCD \uFF08\u51FD\u6570\u524D\u7F00\u4E3A\u52A8\u8BCD, \u4EE5\u6B64\u6765\u533A\u5206\u51FD\u6570\u548C\u53D8\u91CF\uFF09</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//  \u597D\u7684\u547D\u540D\u65B9\u5F0F</span>\n<span class="token keyword">let</span> maxCount <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> tableTitle <span class="token operator">=</span> <span class="token string">&#39;\u5566\u5566\u5566&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// \u4E0D\u597D\u7684\u547D\u540D\u65B9\u5F0F</span>\n<span class="token keyword">let</span> setConut <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> getTitle <span class="token operator">=</span> <span class="token string">&#39;\u5566\u5566\u5566&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5E38\u91CF" aria-hidden="true">#</a> \u5E38\u91CF</h2><p>\u547D\u540D\u65B9\u6CD5\uFF1A\u540D\u8BCD\u5168\u90E8\u5927\u5199 \u547D\u540D\u89C4\u8303\uFF1A\u4F7F\u7528\u5927\u5199\u5B57\u6BCD\u548C\u4E0B\u5212\u7EBF\u6765\u7EC4\u5408\u547D\u540D\uFF0C\u4E0B\u5212\u7EBF\u7528\u6765\u5206\u5272\u5355\u8BCD\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">MAX_COUNT</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token constant">URL</span> <span class="token operator">=</span> <span class="token string">&#39;//www.huifenqi.com&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u51FD\u6570-\u65B9\u6CD5\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570-\u65B9\u6CD5\u547D\u540D" aria-hidden="true">#</a> \u51FD\u6570/\u65B9\u6CD5\u547D\u540D</h2><p>\u547D\u540D\u65B9\u5F0F\uFF1A\u5C0F\u9A7C\u5CF0\u5F0F\u547D\u540D\u6CD5\uFF08lowerCamelCase\uFF09 \u547D\u540D\u89C4\u8303\uFF1A\u524D\u7F00\u5E94\u8BE5\u4E3A\u52A8\u8BCD \u547D\u540D\u5EFA\u8BAE\uFF1A\u5E38\u7528\u52A8\u8BCD\u7EA6\u5B9A\u5982\u4E0B\u3002</p><table><thead><tr><th>\u52A8\u8BCD</th><th>\u542B\u4E49</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>can</td><td>\u5224\u65AD\u662F\u5426\u53EF\u6267\u884C\u67D0\u4E2A\u52A8\u4F5C</td><td>\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u3002true\uFF1A\u53EF\u6267\u884C\uFF1Bfalse\uFF1A\u4E0D\u53EF\u6267\u884C</td></tr><tr><td>should</td><td>\u5224\u65AD\u662F\u5426\u5E94\u8BE5\u6267\u884C\u67D0\u4E2A\u52A8\u4F5C</td><td>\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C</td></tr><tr><td>has</td><td>\u5224\u65AD\u662F\u5426\u5305\u542B\u67D0\u4E2A\u503C</td><td>\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u3002true\uFF1A\u542B\u6709\u6B64\u503C\uFF1Bfalse\uFF1A\u4E0D\u542B\u6709\u6B64\u503C</td></tr><tr><td>is</td><td>\u5224\u65AD\u662F\u5426\u4E3A\u67D0\u4E2A\u503C</td><td>\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u3002true\uFF1A\u4E3A\u67D0\u4E2A\u503C\uFF1Bfalse\uFF1A\u4E0D\u4E3A\u67D0\u4E2A\u503C</td></tr><tr><td>get</td><td>\u83B7\u53D6\u67D0\u4E2A\u503C</td><td>\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u975E\u5E03\u5C14\u503C</td></tr><tr><td>set</td><td>\u8BBE\u7F6E\u67D0\u4E2A\u503C</td><td>\u65E0\u8FD4\u56DE\u503C\u3001\u8FD4\u56DE\u662F\u5426\u8BBE\u7F6E\u6210\u529F\u6216\u8005\u8FD4\u56DE\u94FE\u5F0F\u5BF9\u8C61</td></tr><tr><td>load</td><td>\u52A0\u8F7D\u67D0\u4E9B\u6570\u636E</td><td>\u65E0\u8FD4\u56DE\u503C\u6216\u8005\u8FD4\u56DE\u662F\u5426\u52A0\u8F7D\u5B8C\u6210\u7684\u7ED3\u679C</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u662F\u5426\u53EF\u9605\u8BFB</span>\n<span class="token keyword">function</span> <span class="token function">canRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token comment">// \u83B7\u53D6\u540D\u79F0</span>\n<span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u7C7B-\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7C7B-\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u7C7B/\u6784\u9020\u51FD\u6570</h2><p>\u547D\u540D\u65B9\u6CD5\uFF1A\u5927\u9A7C\u5CF0\u5F0F\u547D\u540D\u6CD5\uFF08UpperCamelCase\uFF09\uFF0C\u9996\u5B57\u6BCD\u5927\u5199\u3002 \u547D\u540D\u89C4\u8303\uFF1A\u524D\u7F00\u4E3A\u540D\u79F0\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Persion</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// ...</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;CXL&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u7C7B\u7684\u6210\u5458" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u6210\u5458" aria-hidden="true">#</a> \u7C7B\u7684\u6210\u5458</h3><ul><li>\u516C\u5171\u5C5E\u6027\u548C\u65B9\u6CD5\uFF1A\u8DDF\u53D8\u91CF\u548C\u51FD\u6570\u547D\u540D\u4E00\u6837\u3002</li><li>\u79C1\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\uFF1A\u524D\u7F00\u4E3A\u4E0B\u5212\u7EBF<code>_</code>, \u540E\u9762\u8DDF\u516C\u5171\u5C5E\u6027\u548C\u65B9\u6CD5\u4E00\u6837\u7684\u547D\u540D\u65B9\u5F0F\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n    <span class="token comment">// \u79C1\u6709\u5C5E\u6027</span>\n    _name<span class="token operator">:</span> string<span class="token punctuation">;</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n\n    <span class="token comment">// \u516C\u5171\u65B9\u6CD5</span>\n    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// \u516C\u5171\u65B9\u6CD5</span>\n    <span class="token function">setName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="vue-\u547D\u540D\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#vue-\u547D\u540D\u89C4\u8303" aria-hidden="true">#</a> Vue \u547D\u540D\u89C4\u8303</h2><p>\u547D\u540D\u65B9\u6CD5\uFF1A\u540C\u51FD\u6570\u547D\u540D\u6CD5 \u547D\u540D\u5EFA\u8BAE\uFF1A\u4E8B\u4EF6\u5904\u7406\u5E94\u4EE5<code>handle</code>\u5F00\u5934,\u5982<code>handleBlur</code> \u5176\u4ED6\u5EFA\u8BAE\uFF1A\u4F7F\u7528<code>promise</code>\u6216<code>async/await</code>\u5904\u7406\u5F02\u6B65\u903B\u8F91\uFF0C\u907F\u514D\u4F7F\u7528\u56DE\u8C03\u51FD\u6570\u3002</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>', 20);
const _hoisted_30 = {
  href: "https://www.jianshu.com/p/75591d47312a",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_31 = /* @__PURE__ */ createTextVNode("js\u547D\u540D\u89C4\u8303");
const _hoisted_32 = /* @__PURE__ */ createTextVNode("\uFF0C\u672C\u6587\u7EDD\u5927\u90E8\u5206\u5185\u5BB9\u53C2\u8003\u4E0E\u6B64\u3002");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u53D8\u91CF" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5E38\u91CF" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u51FD\u6570-\u65B9\u6CD5\u547D\u540D" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7C7B-\u6784\u9020\u51FD\u6570" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u7C7B\u7684\u6210\u5458" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#vue-\u547D\u540D\u89C4\u8303" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#reference" }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_10,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_30, [
          _hoisted_31,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_32
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var js_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { js_html as default };
