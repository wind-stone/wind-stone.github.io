import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "node-server",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#node-server",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Node Server")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u540E\u7AEF\u670D\u52A1\u5668\u63A5\u53E3\u63A2\u6D3B");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u7981\u6B62\u7F13\u5B58");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u8BBE\u5907 ID");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Android/iOS");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("WEB h5");
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<h2 id="\u540E\u7AEF\u670D\u52A1\u5668\u63A5\u53E3\u63A2\u6D3B" tabindex="-1"><a class="header-anchor" href="#\u540E\u7AEF\u670D\u52A1\u5668\u63A5\u53E3\u63A2\u6D3B" aria-hidden="true">#</a> \u540E\u7AEF\u670D\u52A1\u5668\u63A5\u53E3\u63A2\u6D3B</h2><p>\u5728 Node.js \u9879\u76EE\u91CC\uFF0C\u6709\u65F6\u5019\u9700\u8981\u63A2\u6D4B\u540E\u7AEF\u670D\u52A1\u5668\u63A5\u53E3\u662F\u5426\u53EF\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">checkAPIStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    url<span class="token operator">:</span> <span class="token string">&#39;http://www.baidu.com&#39;</span><span class="token punctuation">,</span>\n    method<span class="token operator">:</span> <span class="token string">&#39;HEAD&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>error <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>statusCode <span class="token operator">&lt;</span> <span class="token number">400</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// \u670D\u52A1\u5668\u63A5\u53E3\u53EF\u7528</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token comment">// \u670D\u52A1\u5668\u63A5\u53E3\u4E0D\u53EF\u7528</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5F53\u540E\u7AEF\u63D0\u4F9B\u4E86\u591A\u4E2A\u57DF\u540D\u4F9B\u4F7F\u7528\u65F6\uFF0C\u53EF\u901A\u8FC7\u6B64\u65B9\u6CD5\u5B9A\u671F\u68C0\u6D4B\u670D\u52A1\u5668\u63A5\u53E3\u662F\u5426\u6B63\u5E38\uFF08\u7C7B\u4F3C\u4E8E<code>nginx</code>\u7684\u5065\u5EB7\u68C0\u67E5\uFF09\uFF0C\u82E5\u4E0D\u6B63\u5E38\uFF0C\u5C06\u57DF\u540D\u4ECE\u57DF\u540D\u5217\u8868\u91CC\u79FB\u9664\uFF1B\u82E5\u6B63\u5E38\uFF0C\u518D\u5C06\u88AB\u79FB\u9664\u7684\u57DF\u540D\u91CD\u65B0\u52A0\u5165\u57DF\u540D\u5217\u8868\u3002PS: \u4E0A\u8FF0\u4EE3\u7801\u4EC5\u662F\u7B80\u5355\u793A\u4F8B\uFF0C\u82E5\u60F3\u505A\u5230\u4E0A\u4E00\u53E5\u6240\u8BF4\u529F\u80FD\uFF0C\u9700\u8981\u989D\u5916\u5F00\u53D1\u3002</p></div><h2 id="\u7981\u6B62\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u7981\u6B62\u7F13\u5B58" aria-hidden="true">#</a> \u7981\u6B62\u7F13\u5B58</h2><p>Server \u7AEF\u8FD4\u56DE\u6587\u4EF6\u65F6\uFF0C\u82E5\u662F\u4E0D\u60F3\u8981\u7F13\u5B58\u6587\u4EF6\uFF08\u6BD4\u5982 HTML\uFF09\uFF0C\u53EF\u8BBE\u7F6E\u8FD4\u56DE\u5934\uFF1A</p><div class="language-header ext-header line-numbers-mode"><pre class="language-header"><code>Cache-Control: no-cache, no-store, must-revalidate\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u8BBE\u5907-id" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u5907-id" aria-hidden="true">#</a> \u8BBE\u5907 ID</h2><p>\u8BBE\u5907 ID \u662F\u7528\u6765\u8FFD\u8E2A\u4E00\u53F0\u8BBE\u5907/\u4E00\u4E2A\u4EBA\u7684\u6700\u91CD\u8981\u7684\u6807\u8BC6\uFF0C\u5728\u4EA7\u54C1\u8FD0\u8425\u3001\u7CBE\u51C6\u5E7F\u544A\u3001\u4E2A\u6027\u5316\u63A8\u8350\u7B49\u7B49\u9886\u57DF\u90FD\u6709\u6781\u5927\u7684\u8FD0\u7528\u3002</p><h3 id="android-ios" tabindex="-1"><a class="header-anchor" href="#android-ios" aria-hidden="true">#</a> Android/iOS</h3><p>\u76EE\u524D\uFF0C\u5728\u56FD\u5185\uFF0CAndroid \u8BBE\u5907\u4E3B\u8981\u8FD8\u662F\u4EE5 IMEI\uFF08\u4E3A\u4E3B\uFF09\u4F5C\u4E3A\u8BBE\u5907 ID\uFF0CiOS \u8BBE\u5907\u4E3B\u8981\u4EE5 IDFA\uFF08\u4E3A\u4E3B\uFF09\u4F5C\u4E3A\u8BBE\u5907 ID\uFF0C\u4E14\u5728 Native APP \u5185\u53EF\u4EE5\u901A\u8FC7\u76F8\u5E94\u7684\u63A5\u53E3\u83B7\u53D6\u5230\u3002</p>', 11);
const _hoisted_19 = /* @__PURE__ */ createTextVNode("Reference\uFF1A");
const _hoisted_20 = {
  href: "https://zhuanlan.zhihu.com/p/37455363",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_21 = /* @__PURE__ */ createTextVNode("\u77E5\u4E4E\u4E13\u680F - \u79FB\u52A8\u8BBE\u5907\uFF08\u624B\u673A\uFF09\u7684\u552F\u4E00ID\u6709\u54EA\u4E9B");
const _hoisted_22 = /* @__PURE__ */ createStaticVNode('<h3 id="web-h5" tabindex="-1"><a class="header-anchor" href="#web-h5" aria-hidden="true">#</a> WEB h5</h3><p>\u4F46\u662F\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\uFF0C\u65E0\u6CD5\u4F7F\u7528 Native \u7684\u63A5\u53E3\u83B7\u53D6\u5230 IMEI/IDFA\u3002</p><p>\u56E0\u6B64\u4E00\u822C\u91C7\u7528\u7684\u65B9\u5F0F\u662F\u7528<code>cookie</code>\u7C97\u7565\u5730\u751F\u6210\u4E00\u4E2A\u4F2A\u8BBE\u5907 ID\uFF0C\u5177\u4F53\u65B9\u6CD5\u662F\uFF1A\u5728\u7528\u6237\u9996\u6B21\u8BF7\u6C42\u9875\u9762\u65F6\uFF0C\u670D\u52A1\u7AEF\u751F\u6210\u552F\u4E00\u7684 ID\uFF0C\u5E76\u6DFB\u52A0\u5230<code>cookie</code>\u91CC\u7684<code>did</code>\u5B57\u6BB5\u91CC\uFF08\u4E3B\u57DF\u540D\u3001\u8D85\u957F\u7684\u8FC7\u671F\u65F6\u95F4\uFF09\uFF0C\u6700\u540E<code>cookie</code>\u4F1A\u968F\u54CD\u5E94\u8FD4\u56DE\u5230\u6D4F\u89C8\u5668\u91CC\u3002\u4E0B\u6B21\u518D\u6709\u8BF7\u6C42\u65F6\uFF0C\u4F1A\u5C06<code>cookie</code>\u91CC\u7684<code>did</code>\u518D\u5E26\u56DE\u670D\u52A1\u7AEF\u3002\u56E0\u6B64\uFF0C\u5BF9\u4E8E\u643A\u5E26\u4E86\u7EDF\u4E00<code>did</code>\u7684\u7528\u6237\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u662F\u4F7F\u7528\u7684\u540C\u4E00\u53F0\u8BBE\u5907\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> Puid <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;puid&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> puid <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Puid</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token constant">DID_COOKIE_NAME</span> <span class="token operator">=</span> <span class="token string">&#39;did&#39;</span>\n\n<span class="token keyword">function</span> <span class="token function">getMainDomain</span><span class="token punctuation">(</span><span class="token parameter">host</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> host<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// \u5BFC\u51FA koa2 \u4E2D\u95F4\u4EF6</span>\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> did <span class="token operator">=</span> ctx<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">DID_COOKIE_NAME</span><span class="token punctuation">)</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>did<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> didCookieOptions <span class="token operator">=</span> <span class="token punctuation">{</span>\n        httpOnly<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        domain<span class="token operator">:</span> <span class="token function">getMainDomain</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>host<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token comment">// 70\u5E74\u6709\u6548\u671F</span>\n        maxAge<span class="token operator">:</span> <span class="token number">2207520000000</span>\n      <span class="token punctuation">}</span>\n      <span class="token comment">// \u8FD8\u53EF\u4EE5\u5BF9 did \u8FDB\u884C\u52A0\u5BC6</span>\n      did <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">web_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>puid<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n      ctx<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token constant">DID_COOKIE_NAME</span><span class="token punctuation">,</span> did<span class="token punctuation">,</span> didCookieOptions<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>', 4);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u540E\u7AEF\u670D\u52A1\u5668\u63A5\u53E3\u63A2\u6D3B" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7981\u6B62\u7F13\u5B58" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u8BBE\u5907-id" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#android-ios" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#web-h5" }, {
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
      _hoisted_19,
      createBaseVNode("a", _hoisted_20, [
        _hoisted_21,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_22,
    createVNode(_component_global_config)
  ], 64);
}
var server_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { server_html as default };
