import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u51FD\u6570\u5F0F\u7F16\u7A0B",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u51FD\u6570\u5F0F\u7F16\u7A0B",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u51FD\u6570\u5F0F\u7F16\u7A0B")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u7EAF\u51FD\u6570\uFF08Pure Function\uFF09");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u7EAF\u51FD\u6570\u7279\u6027");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u9AD8\u9636\u51FD\u6570\uFF08Higher-order Function\uFF09");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5F15\u7528\u900F\u660E");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u51FD\u6570\u5F0F\u7F16\u7A0B\u7684\u7279\u6027");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u4E3A\u4EC0\u4E48\u51FD\u6570\u5F0F\u7F16\u7A0B\u8981\u6C42\u51FD\u6570\u5FC5\u987B\u662F\u7EAF\u7684\uFF0C\u4E0D\u80FD\u6709\u526F\u4F5C\u7528\uFF1F");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u51FD\u6570\u5F0F\u7F16\u7A0B\u57FA\u672C\u8FD0\u7B97");
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<h2 id="\u7EAF\u51FD\u6570-pure-function" tabindex="-1"><a class="header-anchor" href="#\u7EAF\u51FD\u6570-pure-function" aria-hidden="true">#</a> \u7EAF\u51FD\u6570\uFF08Pure Function\uFF09</h2><p>\u7EAF\u51FD\u6570\u4EC5\u9488\u5BF9\u5B83\u4EEC\u7684\u8F93\u5165\u53C2\u6570\u8FDB\u884C\u64CD\u4F5C\uFF0C\u6BD4\u5982</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u7EAF\u51FD\u6570\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u7EAF\u51FD\u6570\u7279\u6027" aria-hidden="true">#</a> \u7EAF\u51FD\u6570\u7279\u6027</h3><ul><li>\u7EAF\u51FD\u6570\u9488\u5BF9\u7ED9\u5B9A\u76F8\u540C\u7684\u8F93\u5165\uFF0C\u603B\u662F\u4EA7\u751F\u76F8\u540C\u7684\u8F93\u51FA</li><li>\u7EAF\u51FD\u6570\u6CA1\u6709\u51FD\u6570\u526F\u4F5C\u7528</li></ul><h2 id="\u9AD8\u9636\u51FD\u6570-higher-order-function" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u9636\u51FD\u6570-higher-order-function" aria-hidden="true">#</a> \u9AD8\u9636\u51FD\u6570\uFF08Higher-order Function\uFF09</h2><p>\u9AD8\u9636\u51FD\u6570\u53EF\u4EE5\u63A5\u6536\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u6216\u8005\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u7ED3\u679C\uFF0C\u6216\u8005\u4E24\u8005\u540C\u65F6\u5177\u5907</p><h2 id="\u5F15\u7528\u900F\u660E" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u900F\u660E" aria-hidden="true">#</a> \u5F15\u7528\u900F\u660E</h2><p>\u7EAF\u51FD\u6570\u53EF\u4EE5\u88AB\u5B83\u7684\u8868\u8FBE\u5F0F\u5B89\u5168\u5730\u66FF\u6362</p><h2 id="\u51FD\u6570\u5F0F\u7F16\u7A0B\u7684\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u5F0F\u7F16\u7A0B\u7684\u7279\u6027" aria-hidden="true">#</a> \u51FD\u6570\u5F0F\u7F16\u7A0B\u7684\u7279\u6027</h2><ul><li>\u51FD\u6570\u5F0F\u7F16\u7A0B\u4E2D\u6CA1\u6709\u53D8\u91CF</li><li>\u51FD\u6570\u5F0F\u7F16\u7A0B\u4E2D\uFF0C\u901A\u8FC7\u9012\u5F52\u5B9E\u73B0\u5FAA\u73AF</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// simple loop construct</span>\n<span class="token keyword">var</span> acc <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    acc <span class="token operator">+=</span> i<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>acc<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// prints 55</span>\n\n<span class="token comment">// without loop construct or variable (recursion)</span>\n<span class="token keyword">function</span> <span class="token function">sumRange</span><span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> acc</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&gt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> acc<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">sumRange</span><span class="token punctuation">(</span>start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">,</span> acc <span class="token operator">+</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sumRange</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints 55</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u4E3A\u4EC0\u4E48\u51FD\u6570\u5F0F\u7F16\u7A0B\u8981\u6C42\u51FD\u6570\u5FC5\u987B\u662F\u7EAF\u7684-\u4E0D\u80FD\u6709\u526F\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u51FD\u6570\u5F0F\u7F16\u7A0B\u8981\u6C42\u51FD\u6570\u5FC5\u987B\u662F\u7EAF\u7684-\u4E0D\u80FD\u6709\u526F\u4F5C\u7528" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u51FD\u6570\u5F0F\u7F16\u7A0B\u8981\u6C42\u51FD\u6570\u5FC5\u987B\u662F\u7EAF\u7684\uFF0C\u4E0D\u80FD\u6709\u526F\u4F5C\u7528\uFF1F</h2><p>\u56E0\u4E3A\u5B83\u662F\u4E00\u79CD\u6570\u5B66\u8FD0\u7B97\uFF0C\u539F\u59CB\u76EE\u7684\u5C31\u662F\u6C42\u503C\uFF0C\u4E0D\u505A\u5176\u4ED6\u4E8B\u60C5\uFF0C\u5426\u5219\u5C31\u65E0\u6CD5\u6EE1\u8DB3\u51FD\u6570\u8FD0\u7B97\u6CD5\u5219\u4E86\u3002</p><h2 id="\u51FD\u6570\u5F0F\u7F16\u7A0B\u57FA\u672C\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u5F0F\u7F16\u7A0B\u57FA\u672C\u8FD0\u7B97" aria-hidden="true">#</a> \u51FD\u6570\u5F0F\u7F16\u7A0B\u57FA\u672C\u8FD0\u7B97</h2><ul><li>\u5408\u6210</li><li>\u67EF\u91CC\u5316</li></ul>', 16);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7EAF\u51FD\u6570-pure-function" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u7EAF\u51FD\u6570\u7279\u6027" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u9AD8\u9636\u51FD\u6570-higher-order-function" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5F15\u7528\u900F\u660E" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u51FD\u6570\u5F0F\u7F16\u7A0B\u7684\u7279\u6027" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4E3A\u4EC0\u4E48\u51FD\u6570\u5F0F\u7F16\u7A0B\u8981\u6C42\u51FD\u6570\u5FC5\u987B\u662F\u7EAF\u7684-\u4E0D\u80FD\u6709\u526F\u4F5C\u7528" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u51FD\u6570\u5F0F\u7F16\u7A0B\u57FA\u672C\u8FD0\u7B97" }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_10,
    createVNode(_component_global_config)
  ], 64);
}
var functionalProgramming_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { functionalProgramming_html as default };
