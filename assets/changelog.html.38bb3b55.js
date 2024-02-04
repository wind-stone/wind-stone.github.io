import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "changelog",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#changelog",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Changelog")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "conventional-changelog-cli-\u81EA\u52A8\u751F\u6210\u65E5\u5FD7",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#conventional-changelog-cli-\u81EA\u52A8\u751F\u6210\u65E5\u5FD7",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" conventional-changelog-cli \u81EA\u52A8\u751F\u6210\u65E5\u5FD7")
], -1);
const _hoisted_3 = {
  href: "https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode("conventional-changelog-cli");
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// -p: \u5373 --preset\uFF0C\u9884\u7F6E\u6A21\u677F\uFF0C\u6BD4\u5982 angular/atom/codemirror/conventionalcommits/ember/eslint/express/jquery/jshint</span>\n        <span class="token comment">// -i: \u5373 --infile\uFF0C\u8BFB\u53D6 CHANGELOG \u7684\u6587\u4EF6\u8DEF\u5F84</span>\n        <span class="token comment">// -s, \u5373 --same-file\uFF0C\u8BBE\u7F6E\u8F93\u51FA CHANGELOG \u7684\u6587\u4EF6\u8DEF\u5F84\u4E0E\u8BFB\u53D6 CHANGELOG \u7684\u6587\u4EF6\u8DEF\u5F84\u4E00\u81F4\uFF0C\u8BBE\u7F6E\u4E86\u6B64\u9879\uFF0C\u5C31\u4E0D\u9700\u8981\u8BBE\u7F6E\u8F93\u51FA\u6587\u4EF6\u4E86</span>\n        <span class="token comment">// --commit-path: \u8BBE\u7F6E\u76EE\u5F55\uFF0C\u5C06\u53EA\u57FA\u4E8E\u8BE5\u76EE\u5F55\u8303\u56F4\u53BB\u751F\u6210\u65E5\u5FD7</span>\n        <span class="token comment">// --tag-prefix: \u6807\u7B7E\u524D\u7F00\uFF0C\u5728\u8BFB\u6807\u7B7E\u65F6\uFF0C\u53EA\u8BFB\u53D6\u8BE5\u524D\u7F00\u7684\u6807\u7B7E</span>\n        <span class="token property">&quot;changelog&quot;</span><span class="token operator">:</span> <span class="token string">&quot;conventional-changelog -p angular -i CHANGELOG.md -s  --commit-path=./ --tag-prefix=@ks/sso/&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>monorepo \u9879\u76EE\u91CC\uFF0C\u9700\u8981\u4E3A\u4E0D\u540C\u7684\u5B50\u9879\u76EE\u751F\u6210\u4E0D\u540C\u7684 changelog\uFF0C\u8981\u89E3\u51B3\u4E24\u4E2A\u95EE\u9898\uFF1A</p><ol><li><code>conventional-changelog-cli</code>\u5728\u8BFB\u53D6\u6807\u7B7E\u65F6\uFF0C\u9700\u8981\u533A\u5206\u5F53\u524D\u5B50\u9879\u76EE\u7684\u6807\u7B7E\uFF0C\u53EF\u4EE5\u7528<code>--tag-prefix</code>\u9009\u9879\u6307\u5B9A\u5B50\u9879\u76EE\u7684\u6807\u7B7E\u524D\u7F00\u3002</li><li>\u751F\u6210 changelog \u65F6\uFF0C\u53EA\u5E94\u8BE5\u5173\u6CE8\u5F53\u524D\u5B50\u9879\u76EE\u76EE\u5F55\u5185\u7684\u63D0\u4EA4\uFF0C\u800C\u5176\u4ED6\u76EE\u5F55\u7684\u63D0\u4EA4\u5E94\u8BE5\u5FFD\u7565\uFF0C\u53EF\u4EE5\u7528<code>--commit-path</code>\u9009\u9879\u8BBE\u7F6E\u53EA\u57FA\u4E8E\u7ED9\u5B9A\u76EE\u5F55\u53BB\u751F\u6210 changelog\u3002</li></ol><p>\u53EF\u901A\u8FC7<code>conventional-changelog --help</code>\u67E5\u770B\u6240\u6709\u53EF\u7528\u9009\u9879</p>', 4);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_3, [
        _hoisted_4,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_5,
    createVNode(_component_global_config)
  ], 64);
}
var changelog_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { changelog_html as default };
