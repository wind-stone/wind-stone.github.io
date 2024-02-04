import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "git",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#git",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" GIT")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("git \u6587\u4EF6\u5939\u540D\u79F0/\u6587\u4EF6\u540D\u79F0 \u4E0D\u533A\u5206\u5927\u5C0F\u5199");
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="git-\u6587\u4EF6\u5939\u540D\u79F0-\u6587\u4EF6\u540D\u79F0-\u4E0D\u533A\u5206\u5927\u5C0F\u5199" tabindex="-1"><a class="header-anchor" href="#git-\u6587\u4EF6\u5939\u540D\u79F0-\u6587\u4EF6\u540D\u79F0-\u4E0D\u533A\u5206\u5927\u5C0F\u5199" aria-hidden="true">#</a> git \u6587\u4EF6\u5939\u540D\u79F0/\u6587\u4EF6\u540D\u79F0 \u4E0D\u533A\u5206\u5927\u5C0F\u5199</h2><p>git \u9ED8\u8BA4\u5BF9\u6587\u4EF6\u5939\u540D\u79F0/\u6587\u4EF6\u540D\u79F0\u7684\u5927\u5C0F\u5199\u662F\u4E0D\u654F\u611F\u7684\uFF0C\u5982\u679C\u4EC5\u662F\u4FEE\u6539\u4E86\u6587\u4EF6\u5939\u540D\u79F0/\u6587\u4EF6\u540D\u79F0\u7684\u5927\u5C0F\u5199\uFF0C\u901A\u8FC7<code>git status</code>\u65E0\u6CD5\u53D1\u73B0\u4EE3\u7801\u6709\u4EFB\u4F55\u53D8\u5316\u3002</p><p>\u914D\u7F6E\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>core.ignorecase<span class="token operator">=</span>true\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u4F7F git \u533A\u5206\u5927\u5C0F\u5199</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config core.ignorecase <span class="token boolean">false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>', 6);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#git-\u6587\u4EF6\u5939\u540D\u79F0-\u6587\u4EF6\u540D\u79F0-\u4E0D\u533A\u5206\u5927\u5C0F\u5199" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_4,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
