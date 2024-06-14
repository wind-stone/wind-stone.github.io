import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "virtual-dom",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#virtual-dom",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Virtual DOM")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u4EC0\u4E48\u662F Virtual DOM");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528 Virtual DOM");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Virtual DOM \u7684\u4F5C\u7528");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Virtual DOM \u7684\u7F3A\u70B9");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u9519\u8BEF\u89C2\u5FF5\u7EA0\u6B63");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u53C2\u8003");
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<h2 id="\u4EC0\u4E48\u662F-virtual-dom" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-virtual-dom" aria-hidden="true">#</a> \u4EC0\u4E48\u662F Virtual DOM</h2><p>\u672C\u8D28\u4E0A\uFF0CVirtual DOM \u5C31\u662F JavaScript \u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5C31\u662F\u5BF9 DOM \u66F4\u52A0\u8F7B\u91CF\u7EA7\u7684\u63CF\u8FF0\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528-virtual-dom" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528-virtual-dom" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528 Virtual DOM</h2><p>DOM \u662F\u590D\u6742\u7684\uFF0C\u5BF9\u5B83\u7684\u64CD\u4F5C\uFF08\u5C24\u5176\u662F\u67E5\u8BE2\u548C\u521B\u5EFA\uFF09\u662F\u975E\u5E38\u6162\u3001\u975E\u5E38\u8017\u8D39\u8D44\u6E90\u7684\u3002\u4EC5\u521B\u5EFA\u4E00\u4E2A\u7A7A\u767D\u7684<code>div</code>\uFF0C\u5176\u5B9E\u4F8B\u5C5E\u6027\u5C31\u8FBE\u5230 246 \u4E2A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Chrome v78</span>\n<span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token keyword">in</span> div<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  m<span class="token operator">++</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 246</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5BF9\u4E8E DOM \u8FD9\u4E48\u591A\u5C5E\u6027\uFF0C\u5176\u5B9E\u5927\u90E8\u5206\u5C5E\u6027\u5BF9\u4E8E\u505A Diff \u662F\u6CA1\u6709\u4EFB\u4F55\u7528\u5904\u7684\uFF0C\u6240\u4EE5\u5982\u679C\u7528\u66F4\u8F7B\u91CF\u7EA7\u7684 JS \u5BF9\u8C61\u6765\u4EE3\u66FF\u590D\u6742\u7684 DOM \u8282\u70B9\uFF0C\u7136\u540E\u7528 JS \u5BF9\u8C61\u7684 diff \u4EE3\u66FF DOM \u7684 diff\uFF0C\u5C31\u53EF\u4EE5\u907F\u514D\u5927\u91CF\u5BF9 DOM \u7684\u67E5\u8BE2\u64CD\u4F5C\u3002\u8FD9\u4E2A\u66F4\u8F7B\u91CF\u7EA7\u7684 JS \u5BF9\u8C61\u5C31\u79F0\u4E3A Virtual DOM\u3002</p><p>\u5F15\u5165 Virtual DOM \u540E\uFF0C\u5BF9 DOM \u7684 Diff \u64CD\u4F5C\u5C31\u53D8\u6210\u4E86\u8FD9\u6837\uFF1A</p><ul><li>\u7EF4\u62A4\u4E00\u4E2A\u4F7F\u7528 JS \u5BF9\u8C61\u8868\u793A\u7684 Virtual DOM\uFF0C\u4E0E\u771F\u5B9E DOM \u4E00\u4E00\u5BF9\u5E94</li><li>\u5BF9\u524D\u540E\u4E24\u4E2A Virtual DOM \u505A diff\uFF0C\u751F\u6210\u53D8\u66F4\uFF08Mutation\uFF09</li><li>\u628A\u53D8\u66F4\u5E94\u7528\u4E8E\u771F\u5B9E DOM\uFF0C\u751F\u6210\u6700\u65B0\u7684\u771F\u5B9E DOM</li></ul><p>\u53EF\u4EE5\u770B\u51FA\uFF0C\u56E0\u4E3A\u8981\u628A\u53D8\u66F4\u5E94\u7528\u5230\u771F\u5B9E DOM \u4E0A\uFF0C\u6240\u4EE5\u8FD8\u662F\u907F\u514D\u4E0D\u4E86\u8981\u76F4\u63A5\u64CD\u4F5C DOM \uFF0C\u4F46\u662F React \u7684 diff \u7B97\u6CD5\u4F1A\u628A DOM \u6539\u52A8\u6B21\u6570\u964D\u5230\u6700\u4F4E\u3002</p><p>\u865A\u62DF DOM \u548C Diff \u7B97\u6CD5\u7684\u51FA\u73B0\u662F\u4E3A\u4E86\u89E3\u51B3\u7531\u547D\u4EE4\u5F0F\u7F16\u7A0B\u8F6C\u53D8\u4E3A\u58F0\u660E\u5F0F\u7F16\u7A0B\u3001\u6570\u636E\u9A71\u52A8\u540E\u6240\u5E26\u6765\u7684\u6027\u80FD\u95EE\u9898\u7684\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u76F4\u63A5\u64CD\u4F5C DOM \u7684\u6027\u80FD\u5E76\u4E0D\u4F1A\u4F4E\u4E8E\u865A\u62DF DOM \u548C Diff \u7B97\u6CD5\uFF0C\u751A\u81F3\u8FD8\u4F1A\u4F18\u4E8E\u3002\u8FD9\u4E48\u8BF4\u7684\u539F\u56E0\u662F\u56E0\u4E3A Diff \u7B97\u6CD5\u7684\u6BD4\u8F83\u8FC7\u7A0B\uFF0C\u6BD4\u8F83\u662F\u4E3A\u4E86\u627E\u51FA\u4E0D\u540C\u4ECE\u800C\u6709\u7684\u653E\u77E2\u7684\u66F4\u65B0\u9875\u9762\u3002\u4F46\u662F\u6BD4\u8F83\u4E5F\u662F\u8981\u6D88\u8017\u6027\u80FD\u7684\u3002\u800C\u76F4\u63A5\u64CD\u4F5C DOM \u5C31\u662F\u6709\u7684\u653E\u77E2\uFF0C\u6211\u4EEC\u77E5\u9053\u8BE5\u66F4\u65B0\u4EC0\u4E48\u4E0D\u8BE5\u66F4\u65B0\u4EC0\u4E48\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u6709\u6BD4\u8F83\u7684\u8FC7\u7A0B\u3002\u6240\u4EE5\u76F4\u63A5\u64CD\u4F5C DOM \u6548\u7387\u53EF\u80FD\u66F4\u9AD8\u3002React \u5389\u5BB3\u7684\u5730\u65B9\u5E76\u4E0D\u662F\u8BF4\u5B83\u6BD4 DOM \u5FEB\uFF0C\u800C\u662F\u8BF4\u4E0D\u7BA1\u4F60\u6570\u636E\u600E\u4E48\u53D8\u5316\uFF0C\u6211\u90FD\u53EF\u4EE5\u4EE5\u6700\u5C0F\u7684\u4EE3\u4EF7\u6765\u8FDB\u884C\u66F4\u65B0 DOM\u3002\u65B9\u6CD5\u5C31\u662F\u6211\u5728\u5185\u5B58\u91CC\u9762\u7528\u65B0\u7684\u6570\u636E\u5237\u65B0\u4E00\u4E2A\u865A\u62DF DOM \u6811\uFF0C\u7136\u540E\u65B0\u65E7 DOM \u8FDB\u884C\u6BD4\u8F83\uFF0C\u627E\u51FA\u5DEE\u5F02\uFF0C\u518D\u66F4\u65B0\u5230 DOM \u6811\u4E0A\u3002\u6846\u67B6\u7684\u610F\u4E49\u5728\u4E8E\u4E3A\u4F60\u63A9\u76D6\u5E95\u5C42\u7684 DOM \u64CD\u4F5C\uFF0C\u8BA9\u4F60\u7528\u66F4\u58F0\u660E\u5F0F\u7684\u65B9\u5F0F\u6765\u63CF\u8FF0\u4F60\u7684\u76EE\u7684\uFF0C\u4ECE\u800C\u8BA9\u4F60\u7684\u4EE3\u7801\u66F4\u5BB9\u6613\u7EF4\u62A4\u3002\u6CA1\u6709\u4EFB\u4F55\u6846\u67B6\u53EF\u4EE5\u6BD4\u7EAF\u624B\u52A8\u7684\u4F18\u5316 DOM \u64CD\u4F5C\u66F4\u5FEB\uFF0C\u56E0\u4E3A\u6846\u67B6\u7684 DOM \u64CD\u4F5C\u5C42\u9700\u8981\u5E94\u5BF9\u4EFB\u4F55\u4E0A\u5C42 API \u53EF\u80FD\u4EA7\u751F\u7684\u64CD\u4F5C\uFF0C\u5B83\u7684\u5B9E\u73B0\u5FC5\u987B\u662F\u666E\u9002\u7684\u3002</p><h2 id="virtual-dom-\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#virtual-dom-\u7684\u4F5C\u7528" aria-hidden="true">#</a> Virtual DOM \u7684\u4F5C\u7528</h2><p>\u5F88\u591A\u4EBA\u4F1A\u628A Diff\u3001\u6570\u636E\u66F4\u65B0\u3001\u63D0\u5347\u6027\u80FD\u7B49\u6982\u5FF5\u7ED1\u5B9A\u8D77\u6765\uFF0C\u4F46\u662F\u4F60\u60F3\u60F3\u8FD9\u4E2A\u95EE\u9898\uFF1AReact \u7531\u4E8E\u53EA\u89E6\u53D1\u66F4\u65B0\uFF0C\u800C\u4E0D\u80FD\u77E5\u9053\u7CBE\u786E\u53D8\u5316\u7684\u6570\u636E\uFF0C\u6240\u4EE5\u9700\u8981 diff \u6765\u627E\u51FA\u5DEE\u5F02\u7136\u540E patch \u5DEE\u5F02\u961F\u5217\u3002Vue \u91C7\u7528\u6570\u636E\u52AB\u6301\u7684\u624B\u6BB5\u53EF\u4EE5\u7CBE\u51C6\u62FF\u5230\u53D8\u5316\u7684\u6570\u636E\uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u8981\u7528 Virtual DOM\uFF1F</p><p>Virtual DOM \u7684\u4F5C\u7528\u5982\u4E0B\uFF1A</p><ul><li>Virtual DOM \u5728\u727A\u7272(\u727A\u7272\u5F88\u5173\u952E)\u90E8\u5206\u6027\u80FD\u7684\u524D\u63D0\u4E0B\uFF0C\u589E\u52A0\u4E86\u53EF\u7EF4\u62A4\u6027\uFF0C\u8FD9\u4E5F\u662F\u5F88\u591A\u6846\u67B6\u7684\u901A\u6027\u3002</li><li>\u5B9E\u73B0\u4E86\u5BF9 DOM \u7684\u96C6\u4E2D\u5316\u64CD\u4F5C\uFF0C\u5728\u6570\u636E\u6539\u53D8\u65F6\u5148\u5BF9\u865A\u62DF DOM \u8FDB\u884C\u4FEE\u6539\uFF0C\u518D\u53CD\u6620\u5230\u771F\u5B9E\u7684 DOM \u4E2D\uFF0C\u7528\u6700\u5C0F\u7684\u4EE3\u4EF7\u6765\u66F4\u65B0 DOM\uFF0C\u63D0\u9AD8\u6548\u7387\u3002</li><li>\u53EF\u4EE5\u6E32\u67D3\u5230 DOM \u4EE5\u5916\u7684\u7AEF\uFF0C\u4F7F\u5F97\u6846\u67B6\u8DE8\u5E73\u53F0\uFF0C\u6BD4\u5982 ReactNative\uFF0CReact VR \u7B49\u3002</li><li>\u53EF\u4EE5\u66F4\u597D\u7684\u5B9E\u73B0 SSR\uFF0C\u540C\u6784\u6E32\u67D3\u7B49\u3002</li><li>\u7EC4\u4EF6\u7684\u9AD8\u5EA6\u62BD\u8C61\u5316\u3002</li></ul><p>Vue 2.0 \u5F15\u5165 vdom \u7684\u4E3B\u8981\u539F\u56E0\u662F vdom \u628A\u6E32\u67D3\u8FC7\u7A0B\u62BD\u8C61\u5316\u4E86\uFF0C\u4ECE\u800C\u4F7F\u5F97\u7EC4\u4EF6\u7684\u62BD\u8C61\u80FD\u529B\u4E5F\u5F97\u5230\u63D0\u5347\uFF0C\u5E76\u4E14\u53EF\u4EE5\u9002\u914D DOM \u4EE5\u5916\u7684\u6E32\u67D3\u76EE\u6807\u3002</p><h2 id="virtual-dom-\u7684\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#virtual-dom-\u7684\u7F3A\u70B9" aria-hidden="true">#</a> Virtual DOM \u7684\u7F3A\u70B9</h2><ul><li>\u9996\u6B21\u6E32\u67D3\u5927\u91CF DOM \u65F6\uFF0C\u7531\u4E8E\u591A\u4E86\u4E00\u5C42 Virtual DOM \u7684\u8BA1\u7B97\uFF0C\u4F1A\u6BD4 innerHTML \u63D2\u5165\u6162\u3002\uFF08\u65F6\u95F4\u4E0A\uFF09</li><li>Virtual DOM \u9700\u8981\u5728\u5185\u5B58\u4E2D\u7684\u7EF4\u62A4\u4E00\u4EFD DOM \u7684\u526F\u672C\u3002\uFF08\u7A7A\u95F4\u4E0A\uFF09</li><li>\u5982\u679C Virtual DOM \u5927\u91CF\u66F4\u6539\uFF0C\u8FD9\u662F\u5408\u9002\u7684\u3002\u4F46\u662F\u5355\u4E00\u7684\u3001\u9891\u7E41\u7684\u66F4\u65B0\u7684\u8BDD\uFF0CVirtual DOM \u5C06\u4F1A\u82B1\u8D39\u66F4\u591A\u7684\u65F6\u95F4\u5904\u7406\u8BA1\u7B97\u7684\u5DE5\u4F5C\u3002\u6240\u4EE5\uFF0C\u5982\u679C\u4F60\u6709\u4E00\u4E2A DOM \u8282\u70B9\u76F8\u5BF9\u8F83\u5C11\u9875\u9762\uFF0C\u7528 Virtual DOM\uFF0C\u5B83\u5B9E\u9645\u4E0A\u6709\u53EF\u80FD\u4F1A\u66F4\u6162\u3002\u4F46\u5BF9\u4E8E\u5927\u591A\u6570\u5355\u9875\u9762\u5E94\u7528\uFF0C\u8FD9\u5E94\u8BE5\u90FD\u4F1A\u66F4\u5FEB\u3002</li></ul><h2 id="\u9519\u8BEF\u89C2\u5FF5\u7EA0\u6B63" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u89C2\u5FF5\u7EA0\u6B63" aria-hidden="true">#</a> \u9519\u8BEF\u89C2\u5FF5\u7EA0\u6B63</h2><p>\u5F88\u591A\u4EBA\u8BA4\u4E3A Virtual DOM \u6700\u5927\u7684\u4F18\u52BF\u662F diff \u7B97\u6CD5\uFF0C\u51CF\u5C11 JavaScript \u64CD\u4F5C\u771F\u5B9E DOM \u5E26\u6765\u7684\u6027\u80FD\u6D88\u8017\u3002</p><p>\u867D\u7136\u8FD9\u662F Virtual DOM \u5E26\u6765\u7684\u4E00\u4E2A\u4F18\u52BF\uFF0C\u4F46\u5E76\u4E0D\u662F\u5168\u90E8\u3002Virtual DOM \u6700\u5927\u7684\u4F18\u52BF\u5728\u4E8E\u62BD\u8C61\u4E86\u539F\u672C\u7684\u6E32\u67D3\u8FC7\u7A0B\uFF0C\u5B9E\u73B0\u4E86\u8DE8\u5E73\u53F0\u7684\u80FD\u529B\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u5C40\u9650\u4E8E\u6D4F\u89C8\u5668\u7684 DOM\uFF0C\u53EF\u4EE5\u662F\u5B89\u5353\u548C IOS \u7684\u539F\u751F\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u662F\u8FD1\u671F\u5F88\u706B\u70ED\u7684\u5C0F\u7A0B\u5E8F\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5404\u79CD GUI\u3002</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>', 21);
const _hoisted_30 = {
  href: "https://cloud.tencent.com/developer/article/1560877",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_31 = /* @__PURE__ */ createTextVNode("\u4ECE React \u5386\u53F2\u7684\u957F\u6CB3\u91CC\u804A\u865A\u62DFDOM\u53CA\u5176\u4EF7\u503C");
const _hoisted_32 = /* @__PURE__ */ createTextVNode("\uFF0C\u672C\u6587\u7EDD\u5927\u591A\u6570\u5185\u5BB9 copy \u4E8E\u6B64\u3002");
const _hoisted_33 = {
  href: "https://segmentfault.com/a/1190000013365426",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_34 = /* @__PURE__ */ createTextVNode("React \u662F\u600E\u6837\u70BC\u6210\u7684");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4EC0\u4E48\u662F-virtual-dom" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528-virtual-dom" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#virtual-dom-\u7684\u4F5C\u7528" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#virtual-dom-\u7684\u7F3A\u70B9" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u9519\u8BEF\u89C2\u5FF5\u7EA0\u6B63" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u53C2\u8003" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_9,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_30, [
          _hoisted_31,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_32
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_33, [
          _hoisted_34,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var virtualDom_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { virtualDom_html as default };
