import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u5BF9\u8C61",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5BF9\u8C61",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5BF9\u8C61")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u5C5E\u6027\u7684\u53EF\u679A\u4E3E\u6027");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u5C5E\u6027\u7684\u904D\u5386");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u904D\u5386\u65B9\u6CD5");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u904D\u5386\u987A\u5E8F");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u5BF9\u8C61\u7684\u65B9\u6CD5\u662F\u7279\u6B8A\u7684\u5C5E\u6027");
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<h2 id="\u5C5E\u6027\u7684\u53EF\u679A\u4E3E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u7684\u53EF\u679A\u4E3E\u6027" aria-hidden="true">#</a> \u5C5E\u6027\u7684\u53EF\u679A\u4E3E\u6027</h2><p>\u56DB\u4E2A\u64CD\u4F5C\u4F1A\u5FFD\u7565<code>enumerable</code>\u4E3A<code>false</code>\u7684\u5C5E\u6027\u3002</p><ul><li><code>for...in</code>\u5FAA\u73AF\uFF1A\u53EA\u904D\u5386\u5BF9\u8C61\u81EA\u8EAB\u7684\u548C\u7EE7\u627F\u7684\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\u3002</li><li><code>Object.keys()</code>\uFF1A\u8FD4\u56DE\u5BF9\u8C61\u81EA\u8EAB\u7684\u6240\u6709\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\u7684\u952E\u540D\u3002</li><li><code>JSON.stringify()</code>\uFF1A\u53EA\u4E32\u884C\u5316\u5BF9\u8C61\u81EA\u8EAB\u7684\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\u3002</li><li><code>Object.assign()</code>\uFF1A \u5FFD\u7565<code>enumerable</code>\u4E3A<code>false</code>\u7684\u5C5E\u6027\uFF0C\u53EA\u62F7\u8D1D\u5BF9\u8C61\u81EA\u8EAB\u7684\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\u3002</li></ul><h2 id="\u5C5E\u6027\u7684\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u7684\u904D\u5386" aria-hidden="true">#</a> \u5C5E\u6027\u7684\u904D\u5386</h2><h3 id="\u904D\u5386\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386\u65B9\u6CD5" aria-hidden="true">#</a> \u904D\u5386\u65B9\u6CD5</h3><p>ES6 \u4E00\u5171\u6709 5 \u79CD\u65B9\u6CD5\u53EF\u4EE5\u904D\u5386\u5BF9\u8C61\u7684\u5C5E\u6027\u3002</p><table><thead><tr><th>\u65B9\u5F0F</th><th>\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027</th><th>\u7EE7\u627F\u5C5E\u6027</th><th>Symbol \u5C5E\u6027</th></tr></thead><tbody><tr><td><code>for...in</code></td><td>\xD7</td><td>\u221A</td><td>\xD7</td></tr><tr><td><code>Object.keys()</code></td><td>\xD7</td><td>\xD7</td><td>\xD7</td></tr><tr><td><code>Object.getOwnPropertyNames()</code></td><td>\u221A</td><td>\xD7</td><td>\xD7</td></tr><tr><td><code>Object.getOwnPropertySymbols()</code></td><td>\u221A</td><td>\xD7</td><td>\u221A</td></tr><tr><td><code>Reflect.ownKeys()</code></td><td>\u221A</td><td>\xD7</td><td>\u221A</td></tr></tbody></table><h3 id="\u904D\u5386\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386\u987A\u5E8F" aria-hidden="true">#</a> \u904D\u5386\u987A\u5E8F</h3><p>\u4EE5\u4E0A\u7684 5 \u79CD\u65B9\u6CD5\u904D\u5386\u5BF9\u8C61\u7684\u952E\u540D\uFF0C\u90FD\u9075\u5B88\u540C\u6837\u7684\u5C5E\u6027\u904D\u5386\u7684\u6B21\u5E8F\u89C4\u5219\u3002</p><ul><li>\u9996\u5148\u904D\u5386\u6240\u6709\u6570\u503C\u952E\uFF0C\u6309\u7167\u6570\u503C\u5347\u5E8F\u6392\u5217\u3002</li><li>\u5176\u6B21\u904D\u5386\u6240\u6709\u5B57\u7B26\u4E32\u952E\uFF0C\u6309\u7167\u52A0\u5165\u65F6\u95F4\u5347\u5E8F\u6392\u5217\u3002</li><li>\u6700\u540E\u904D\u5386\u6240\u6709 Symbol \u952E\uFF0C\u6309\u7167\u52A0\u5165\u65F6\u95F4\u5347\u5E8F\u6392\u5217\u3002</li></ul><h2 id="\u5BF9\u8C61\u7684\u65B9\u6CD5\u662F\u7279\u6B8A\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7684\u65B9\u6CD5\u662F\u7279\u6B8A\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u5BF9\u8C61\u7684\u65B9\u6CD5\u662F\u7279\u6B8A\u7684\u5C5E\u6027</h2><p>\u5BF9\u8C61\u53EA\u6709\u6570\u636E\u5C5E\u6027\u548C\u8BBF\u95EE\u5668\u5C5E\u6027\uFF0C\u800C\u5BF9\u8C61\u7684\u65B9\u6CD5\u5176\u5B9E\u662F\u5BF9\u8C61\u7684\u6570\u636E\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nObject<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;fn&#39;</span><span class="token punctuation">)</span>\n\n<span class="token comment">// {</span>\n<span class="token comment">//     configurable: true</span>\n<span class="token comment">//     enumerable: true</span>\n<span class="token comment">//     value: () =&gt; {}</span>\n<span class="token comment">//     writable: true</span>\n<span class="token comment">//     __proto__: Object</span>\n<span class="token comment">// }</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>', 13);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5C5E\u6027\u7684\u53EF\u679A\u4E3E\u6027" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5C5E\u6027\u7684\u904D\u5386" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u904D\u5386\u65B9\u6CD5" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u904D\u5386\u987A\u5E8F" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5BF9\u8C61\u7684\u65B9\u6CD5\u662F\u7279\u6B8A\u7684\u5C5E\u6027" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_8,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
