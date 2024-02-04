import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "commonjs-\u89C4\u8303\u53CA\u5B9E\u73B0",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#commonjs-\u89C4\u8303\u53CA\u5B9E\u73B0",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" CommonJS \u89C4\u8303\u53CA\u5B9E\u73B0")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u5305\u89C4\u8303\u7684\u5B9E\u73B0 - NPM");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("CommonJS \u5305\u89C4\u8303\u7684\u76EE\u5F55");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5B89\u88C5\u4F9D\u8D56\u5305");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5168\u5C40\u5B89\u88C5");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u6A21\u5757\u89C4\u8303\u7684\u5B9E\u73B0");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u81EA\u5B9A\u4E49\u6A21\u5757\u7684\u8DEF\u5F84\u5206\u6790\u53CA\u6587\u4EF6\u5B9A\u4F4D");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u7B2C\u4E00\u6B65\uFF1A\u8DEF\u5F84\u5206\u6790");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u7B2C\u4E8C\u6B65\uFF1A\u6587\u4EF6\u5B9A\u4F4D");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("require.resolve");
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<h2 id="\u5305\u89C4\u8303\u7684\u5B9E\u73B0-npm" tabindex="-1"><a class="header-anchor" href="#\u5305\u89C4\u8303\u7684\u5B9E\u73B0-npm" aria-hidden="true">#</a> \u5305\u89C4\u8303\u7684\u5B9E\u73B0 - NPM</h2><p>NPM \u662F CommonJS \u5305\u89C4\u8303\u7684\u4E00\u79CD\u5B9E\u73B0\u3002</p><h3 id="commonjs-\u5305\u89C4\u8303\u7684\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#commonjs-\u5305\u89C4\u8303\u7684\u76EE\u5F55" aria-hidden="true">#</a> CommonJS \u5305\u89C4\u8303\u7684\u76EE\u5F55</h3><ul><li><code>package.json</code>\uFF1A\u5305\u63CF\u8FF0\u6587\u4EF6</li><li><code>bin</code>\uFF1A\u7528\u4E8E\u5B58\u653E\u53EF\u6267\u884C\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u76EE\u5F55</li><li><code>lib</code>\uFF1A\u7528\u4E8E\u5B58\u653E JavaScript \u4EE3\u7801\u7684\u76EE\u5F55</li><li><code>doc</code>\uFF1A\u7528\u4E8E\u5B58\u653E\u6587\u6863\u7684\u76EE\u5F55</li><li><code>test</code>\uFF1A\u7528\u4E8E\u5B58\u653E\u5355\u5143\u6D4B\u8BD5\u7528\u4F8B\u7684\u4EE3\u7801</li></ul><h3 id="\u5B89\u88C5\u4F9D\u8D56\u5305" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56\u5305" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56\u5305</h3><h4 id="\u5168\u5C40\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5B89\u88C5" aria-hidden="true">#</a> \u5168\u5C40\u5B89\u88C5</h4><p><code>npm install express -g</code>\u547D\u4EE4\u662F\u5BF9<code>express</code>\u8FDB\u884C\u5168\u5C40\u5B89\u88C5\uFF0C<code>-g</code>\u662F\u5C06\u4E00\u4E2A\u5305\u5B89\u88C5\u4E3A\u5168\u5C40\u53EF\u7528\u7684\u53EF\u6267\u884C\u547D\u4EE4\u3002\u5B83\u6839\u636E\u5305\u63CF\u8FF0\u6587\u4EF6\u4E2D<code>bin</code>\u5B57\u6BB5\u914D\u7F6E\uFF0C\u5C06\u5B9E\u9645\u811A\u672C\u94FE\u63A5\u5230\u4E0E Node \u53EF\u6267\u884C\u6587\u4EF6\u76F8\u540C\u7684\u8DEF\u5F84\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;bin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;express&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./bin/express&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u6A21\u5757\u89C4\u8303\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u89C4\u8303\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u6A21\u5757\u89C4\u8303\u7684\u5B9E\u73B0</h2><p>Node \u4F5C\u4E3A CommonJS \u89C4\u8303\u7684\u5B9E\u73B0\uFF0C\u5E76\u6CA1\u6709\u5B8C\u5168\u6309\u7167\u89C4\u8303\u5B9E\u73B0\uFF0C\u800C\u662F\u5BF9\u6A21\u5757\u89C4\u8303\u8FDB\u884C\u4E86\u4E00\u5B9A\u7684\u53D6\u820D\uFF0C\u540C\u65F6\u4E5F\u6DFB\u52A0\u4E86\u5C11\u8BB8\u81EA\u8EAB\u9700\u8981\u7684\u7279\u6027\u3002</p><p>Node \u4E2D\u5F15\u5165\u6A21\u5757\uFF0C\u9700\u8981\u7ECF\u5386\u5982\u4E0B3\u4E2A\u6B65\u9AA4\uFF1A</p><ol><li>\u8DEF\u5F84\u5206\u6790</li><li>\u6587\u4EF6\u5B9A\u4F4D</li><li>\u7F16\u8BD1\u6267\u884C</li></ol><h3 id="\u81EA\u5B9A\u4E49\u6A21\u5757\u7684\u8DEF\u5F84\u5206\u6790\u53CA\u6587\u4EF6\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6A21\u5757\u7684\u8DEF\u5F84\u5206\u6790\u53CA\u6587\u4EF6\u5B9A\u4F4D" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6A21\u5757\u7684\u8DEF\u5F84\u5206\u6790\u53CA\u6587\u4EF6\u5B9A\u4F4D</h3><p>\u73B0\u5728\u9488\u5BF9\u81EA\u5B9A\u4E49\u6A21\u5757\uFF0C\u7B80\u5355\u8BF4\u660E\u5176\u8DEF\u5F84\u5206\u6790\u548C\u6587\u4EF6\u5B9A\u4F4D\u662F\u5982\u4F55\u8FDB\u884C\u7684\u3002</p><h4 id="\u7B2C\u4E00\u6B65-\u8DEF\u5F84\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u6B65-\u8DEF\u5F84\u5206\u6790" aria-hidden="true">#</a> \u7B2C\u4E00\u6B65\uFF1A\u8DEF\u5F84\u5206\u6790</h4><p>\u5728<code>/home/wind-stone/project/</code>\u76EE\u5F55\u4E0B\uFF0C\u521B\u5EFA<code>app.js</code>\u6587\u4EF6\uFF0C\u5176\u5185\u5BB9\u4E3A<code>console.log(module.paths)</code>\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u6267\u884C<code>node app.js</code>\uFF0CLinux \u4E0B\uFF0C\u5F97\u5230\u7684\u8F93\u51FA\u4E3A\u4E00\u6570\u7EC4\uFF0C\u6570\u7EC4\u5185\u7684\u6BCF\u4E00\u9879\u79F0\u4E3A\u6A21\u5757\u8DEF\u5F84\uFF0C\u8BE5\u6570\u7EC4\u7684\u7ED3\u6784\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span>\n    <span class="token string">&#39;/home/wind-stone/project/node_modulse&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// \u5F53\u524D\u6587\u4EF6\u76EE\u5F55\u4E0B\u7684 node_modules \u76EE\u5F55</span>\n    <span class="token string">&#39;/home/wind-stone/node_modulse&#39;</span><span class="token punctuation">,</span>          <span class="token comment">// \u7236\u76EE\u5F55\u4E0B\u7684 node_modules \u76EE\u5F55</span>\n    <span class="token string">&#39;/home/node_modulse&#39;</span><span class="token punctuation">,</span>                     <span class="token comment">// \u7236\u76EE\u5F55\u7684\u7236\u76EE\u5F55\u4E0B\u7684 node_modules \u76EE\u5F55</span>\n    <span class="token string">&#39;/node_modulse&#39;</span><span class="token punctuation">,</span>                          <span class="token comment">// \u6CBF\u8DEF\u5F84\u5411\u4E0A\u9010\u7EA7\u9012\u5F52\uFF0C\u76F4\u5230\u6839\u76EE\u5F55\u4E0B\u7684 node_modules \u76EE\u5F55</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4EE5\u4E0A\u5373\u4E3A\u67E5\u627E\u81EA\u5B9A\u4E49\u6A21\u5757\u65F6\u7684\u5404\u7EA7\u6A21\u5757\u8DEF\u5F84\uFF0CNode \u4F1A\u5148\u5728\u5F53\u9762\u76EE\u5F55\u7684<code>node_modules</code>\u67E5\u627E\u6A21\u5757\u5373\u5B9A\u4F4D\u6587\u4EF6\uFF0C\u82E5\u662F\u6CA1\u627E\u5230\uFF0C\u4F1A\u6CBF\u8DEF\u5F84\u5411\u4E0A\u9010\u7EA7\u9012\u5F52\uFF0C\u76F4\u5230\u6839\u76EE\u5F55\u4E0B\u7684<code>node_modules</code>\u76EE\u5F55\u5B9A\u4F4D\u6587\u4EF6\u3002</p><h4 id="\u7B2C\u4E8C\u6B65-\u6587\u4EF6\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u6B65-\u6587\u4EF6\u5B9A\u4F4D" aria-hidden="true">#</a> \u7B2C\u4E8C\u6B65\uFF1A\u6587\u4EF6\u5B9A\u4F4D</h4><p>\u4E0A\u8FF0\u6BCF\u67E5\u627E\u5230\u4E00<code>node_modules</code>\u76EE\u5F55\u65F6\uFF0C\u5C31\u8981\u8FDB\u884C\u6587\u4EF6\u5B9A\u4F4D\u3002\u5176\u8FC7\u7A0B\u4E3A\uFF1A</p><ol><li>\u6587\u4EF6\u6269\u5C55\u540D\u5206\u6790\uFF1A\u82E5<code>require()</code>\u6240\u5F15\u7528\u7684\u6A21\u5757\u6807\u8BC6\u7B26\u4E0D\u5305\u542B\u6269\u5C55\u540D\uFF0C\u5219 Node \u4F1A\u6309<code>.js</code>\u3001<code>.json</code>\u3001<code>.node</code>\u7684\u6B21\u5E8F\u8865\u8DB3\u6269\u5C55\u540D\uFF0C\u4F9D\u6B21\u5C1D\u8BD5\u3002</li><li>\u76EE\u5F55\u5206\u6790\u548C\u5305\uFF1A\u82E5\u662F\u4E0A\u4E00\u6B65\u6CA1\u627E\u5230\u6587\u4EF6\uFF0C\u4F46\u662F\u5F97\u5230\u540C\u540D\u7684\u76EE\u5F55\uFF0C\u6B64\u65F6 Node \u4F1A\u5C06\u76EE\u5F55\u5F53\u6210\u4E00\u4E2A\u5305\u6765\u5904\u7406 <ul><li>\u9996\u5148\uFF0CNode \u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u67E5\u627E<code>package.json</code>\u6587\u4EF6\uFF0C\u901A\u8FC7<code>JSON.parse()</code>\u89E3\u6790\u51FA\u5305\u63CF\u8FF0\u5BF9\u8C61\u91CC\u7684<code>main</code>\u5C5E\u6027\u6307\u5B9A\u7684\u6587\u4EF6\u540D\u8FDB\u884C\u5B9A\u4F4D\uFF0C\u82E5\u662F\u6587\u4EF6\u540D\u7F3A\u5C11\u6269\u5C55\u540D\uFF0C\u5C06\u4F1A\u8FDB\u5165\u6269\u5C55\u540D\u5206\u6790\u7684\u6B65\u9AA4</li><li>\u82E5\u662F<code>package.json</code>\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u6216\u8005<code>main</code>\u5C5E\u6027\u5236\u5B9A\u7684\u6587\u4EF6\u540D\u9519\u8BEF\uFF0CNode \u4F1A\u5C06<code>index</code>\u5F53\u505A\u9ED8\u8BA4\u6587\u4EF6\u540D\uFF0C\u7136\u540E\u505A\u6269\u5C55\u540D\u5206\u6790\uFF0C\u5373\u4F9D\u6B21\u67E5\u627E<code>index.js</code>\u3001<code>index.json</code>\u3001<code>index.node</code>\u3002</li></ul></li></ol><p>\u82E5\u662F\u5728\u6587\u4EF6\u5B9A\u4F4D\u7684\u8FC7\u7A0B\u4E2D\u6CA1\u6709\u6210\u529F\u5B9A\u4F4D\u5230\u4EFB\u4F55\u6587\u4EF6\uFF0C\u5219\u81EA\u5B9A\u4E49\u6A21\u5757\u8FDB\u5165\u4E0B\u4E00\u6A21\u5757\u8DEF\u5F84\u8FDB\u884C\u67E5\u627E\u3002</p><p>\u82E5\u662F\u6A21\u5757\u8DEF\u5F84\u6570\u7EC4\u90FD\u88AB\u904D\u5386\u5B8C\u6BD5\uFF0C\u4F9D\u7136\u6CA1\u6709\u67E5\u627E\u5230\u76EE\u6807\u6587\u4EF6\uFF0C\u5219\u4F1A\u629B\u51FA\u67E5\u627E\u5931\u8D25\u7684\u5F02\u5E38\u3002</p><p>Reference: [\u6DF1\u5165\u6D45\u51FA NodeJS]</p><h3 id="require-resolve" tabindex="-1"><a class="header-anchor" href="#require-resolve" aria-hidden="true">#</a> require.resolve</h3><p>\u83B7\u53D6\u6A21\u5757\u7684\u7EDD\u5BF9\u8DEF\u5F84</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;a.js&#39;</span><span class="token punctuation">)</span>\n<span class="token comment">// \u7ED3\u679C</span>\n<span class="token comment">// /home/ruanyf/tmp/a.js</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>', 27);
const _hoisted_39 = /* @__PURE__ */ createTextVNode("Reference: ");
const _hoisted_40 = {
  href: "http://www.ruanyifeng.com/blog/2015/05/require.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_41 = /* @__PURE__ */ createTextVNode("require() \u6E90\u7801\u89E3\u8BFB");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5305\u89C4\u8303\u7684\u5B9E\u73B0-npm" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#commonjs-\u5305\u89C4\u8303\u7684\u76EE\u5F55" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5B89\u88C5\u4F9D\u8D56\u5305" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u5168\u5C40\u5B89\u88C5" }, {
                    default: withCtx(() => [
                      _hoisted_6
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6A21\u5757\u89C4\u8303\u7684\u5B9E\u73B0" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u81EA\u5B9A\u4E49\u6A21\u5757\u7684\u8DEF\u5F84\u5206\u6790\u53CA\u6587\u4EF6\u5B9A\u4F4D" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u7B2C\u4E00\u6B65-\u8DEF\u5F84\u5206\u6790" }, {
                    default: withCtx(() => [
                      _hoisted_9
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u7B2C\u4E8C\u6B65-\u6587\u4EF6\u5B9A\u4F4D" }, {
                    default: withCtx(() => [
                      _hoisted_10
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#require-resolve" }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_12,
    createBaseVNode("p", null, [
      _hoisted_39,
      createBaseVNode("a", _hoisted_40, [
        _hoisted_41,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var commonjs_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { commonjs_html as default };
