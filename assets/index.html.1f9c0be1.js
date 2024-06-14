import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "date",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#date",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Date")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u5DF2\u77E5\u5E74\u6708\uFF0C\u8BA1\u7B97\u8BE5\u6708\u5929\u6570");
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="\u5DF2\u77E5\u5E74\u6708-\u8BA1\u7B97\u8BE5\u6708\u5929\u6570" tabindex="-1"><a class="header-anchor" href="#\u5DF2\u77E5\u5E74\u6708-\u8BA1\u7B97\u8BE5\u6708\u5929\u6570" aria-hidden="true">#</a> \u5DF2\u77E5\u5E74\u6708\uFF0C\u8BA1\u7B97\u8BE5\u6708\u5929\u6570</h2><p>\u4EE5\u6C42 2019 \u5E74 2 \u6708\u6709\u591A\u5C11\u5929\u4E3A\u4F8B\u3002</p><ul><li>\u65B9\u5F0F\u4E00</li></ul><p>\u65B0\u5EFA\u65E5\u671F\u5BF9\u8C61\u4F20\u5165\u5E74\u6708\u65E5\u53C2\u6570\u65F6\uFF0C\u5982\u679C\u4F20\u5165\u7684<code>day</code>\u8D85\u8FC7\u8BE5\u6708\u7684\u6700\u5927\u5929\u6570\uFF0C\u5219\u65E5\u671F\u5C06\u81EA\u52A8\u524D\u8FDB\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 2019/3/4</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E0A\u9762\u793A\u4F8B\u7684\u610F\u601D\u662F\uFF0C2019 \u5E74 2 \u6708\u7B2C 32 \u65E5\uFF0C\u56E0\u4E3A 2019 \u5E74 2 \u6708\u53EA\u6709 28 \u5929\uFF0C\u56E0\u6B64 2 \u6708\u7B2C 32 \u5929\uFF0C\u5373\u662F 3 \u6708 4 \u65E5\u3002</p><p>\u56E0\u6B64\uFF0C\u53EF\u901A\u8FC7\u4E0B\u5217\u51FD\u6570\u8BA1\u7B97\u67D0\u5E74\u67D0\u6708\u7684\u5929\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getMonthCountDay</span> <span class="token punctuation">(</span><span class="token parameter">year<span class="token punctuation">,</span> month</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token number">32</span> <span class="token operator">-</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>year<span class="token punctuation">,</span> month<span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u65B9\u5F0F\u4E8C</li></ul><p>\u7C7B\u4F3C\u4E8E\u65B9\u5F0F\u4E00\uFF0C\u82E5\u4F20\u5165\u7684<code>day</code>\u662F 0 \u6216\u8D1F\u6570\uFF0C\u5219\u65E5\u671F\u5C06\u81EA\u52A8\u5012\u9000\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 2019/1/31</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 2019/1/30</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0A\u9762\u793A\u4F8B\u7684\u610F\u601D\u662F\uFF0C2019 \u5E74 2 \u6708\u7B2C 0 \u5929\uFF0C\u5373\u662F 2019 \u5E74 1 \u6708 31 \u65E5\u30022 \u6708\u7B2C -1 \u5929\uFF0C\u5373\u662F 1 \u6708 30 \u65E5\u3002</p><p>\u56E0\u6B64\uFF0C\u53EF\u901A\u8FC7\u4E0B\u5217\u51FD\u6570\u8BA1\u7B97\u67D0\u5E74\u67D0\u6708\u7684\u5929\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getMonthCountDay</span> <span class="token punctuation">(</span><span class="token parameter">year<span class="token punctuation">,</span> month</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>year<span class="token punctuation">,</span> month <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Date API \u5904\u7406\u65E5\u671F\u6EA2\u51FA\u65F6\u7684\u89C4\u5219\uFF0C\u7C7B\u4F3C\u4E8E\u52A0\u6CD5\u8FDB\u4F4D\uFF0C\u51CF\u6CD5\u9000\u4F4D\u3002</p><ul><li><code>new Date(2019, 0, 50)</code>\uFF0C\u5176\u4E2D0\u4EE3\u88681\u6708\uFF0C1\u6708\u53EA\u670931\u5929\uFF0C\u5219\u591A\u51FA\u6765\u768419\u5929\u4F1A\u88AB\u52A0\u52302\u6708\uFF0C\u7ED3\u679C\u662F2019\u5E742\u670819\u65E5</li><li><code>new Date(2019, 20, 10)</code>\uFF0C1\u5E74\u53EA\u670912\u4E2A\u6708\uFF0C\u591A\u51FA\u6765\u76849\u4E2A\u6708\u4F1A\u88AB\u52A0\u52302020\u5E74\uFF0C\u7ED3\u679C\u662F2020\u5E749\u670810\u65E5</li><li><code>new Date(2019, -2, 10)</code>\uFF0C2019\u5E741\u670810\u65E5\u5F80\u524D\u63A82\u4E2A\u6708\uFF0C\u7ED3\u679C\u4E3A2018\u5E7411\u670810\u65E5</li><li><code>new Date(2019, 2, -2)</code>\uFF0C2019\u5E743\u67081\u65E5\u5F80\u524D\u63A82\u5929\uFF0C\u7ED3\u679C\u4E3A2019\u5E742\u670826\u65E5</li></ul>', 16);
const _hoisted_20 = /* @__PURE__ */ createTextVNode("Reference: ");
const _hoisted_21 = {
  href: "https://github.com/justjavac/the-front-end-knowledge-you-may-not-know/issues/41",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_22 = /* @__PURE__ */ createTextVNode("\u5C0F\u6280\u5DE7\uFF1A\u5DF2\u77E5\u5E74\u6708\uFF0C\u6C42\u8BE5\u6708\u5171\u591A\u5C11\u5929\uFF1F");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5DF2\u77E5\u5E74\u6708-\u8BA1\u7B97\u8BE5\u6708\u5929\u6570" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_4,
    createBaseVNode("p", null, [
      _hoisted_20,
      createBaseVNode("a", _hoisted_21, [
        _hoisted_22,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
