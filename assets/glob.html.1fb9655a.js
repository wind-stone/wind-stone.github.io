import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "glob-\u5339\u914D\u6A21\u5F0F",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#glob-\u5339\u914D\u6A21\u5F0F",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" glob \u5339\u914D\u6A21\u5F0F")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u8BED\u6CD5");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Unix");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u6587\u4EF6/\u6587\u4EF6\u5939\u5339\u914D");
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<p>\u5728\u8BA1\u7B97\u673A\u7F16\u7A0B\u9886\u57DF\uFF0C<code>glob</code>\u6A21\u5F0F\u4F7F\u7528\u5B57\u7B26\u901A\u914D\u7B26\u5236\u5B9A\u4E86\u6587\u4EF6\u540D\u7684\u96C6\u5408\u3002\u6BD4\u5982\uFF0CUnix Bash shell \u547D\u4EE4<code>mv *.txt textfiles/</code>\u4F1A\u5C06\u5F53\u524D\u76EE\u5F55\u4E0B\u6240\u6709\u4EE5<code>.txt</code>\u7ED3\u5C3E\u7684\u6587\u4EF6\u79FB\u52A8\u5230<code>textfiles</code>\u76EE\u5F55\u4E0B\u3002\u5728\u8FD9\u91CC\uFF0C<code>*</code>\u5C31\u662F\u901A\u914D\u7B26\uFF0C\u4EE3\u8868\u201C\u4EFB\u4F55\u5B57\u7B26\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\u201D\uFF0C\u800C<code>*.txt</code>\u5C31\u662F<code>glob</code>\u6A21\u5F0F\u3002\u5176\u4ED6\u5E38\u7528\u7684\u901A\u914D\u7B26\u6709\u95EE\u53F7<code>?</code>\uFF0C\u4EE3\u8868\u5355\u4E2A\u5B57\u7B26\u3002</p><p><code>glob</code>\u547D\u4EE4\uFF0C\u662F<code>global</code>\u7684\u7F29\u5199\uFF0C\u8D77\u6E90\u4E8E\u8D1D\u5C14\u5B9E\u9A8C\u5BA4\u7684 Unix \u6700\u65E9\u671F\u7684\u7248\u672C\u3002\u540E\u6765\uFF0C\u8FD9\u9879\u529F\u80FD\u4EE5\u5E93\u51FD\u6570<code>glob()</code>\u7684\u5F62\u5F0F\u63D0\u4F9B\uFF0C\u88AB\u7528\u4E8E<code>shell</code>\u7B49\u7A0B\u5E8F\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><p>\u6700\u5E38\u7528\u7684\u901A\u914D\u7B26\u662F<code>*</code>\u3001<code>?</code>\u3001<code>[...]</code>\u3002</p><table><thead><tr><th>\u901A\u914D\u7B26</th><th>\u63CF\u8FF0</th><th>\u793A\u4F8B</th><th>\u5339\u914D</th><th>\u4E0D\u5339\u914D</th></tr></thead><tbody><tr><td><code>*</code></td><td>\u5339\u914D\u4EFB\u610F\u6570\u91CF\u7684\u5B57\u7B26\uFF0C\u5305\u62EC\u7A7A\u5B57\u7B26\u4E32</td><td><code>Law*</code><br><code>*Law*</code></td><td><code>Law</code>\uFF0C<code>Laws</code>\uFF0C\u6216<code>Lawyer</code><br><code>Law</code>\uFF0C<code>GrokLaw</code>\uFF0C\u6216<code>Lawyer</code></td><td><code>GrokLaw</code>\uFF0C<code>La</code>\uFF0C<code>aw</code><br><code>La</code>\uFF0C\u6216<code>aw</code></td></tr><tr><td><code>?</code></td><td>\u5339\u914D\u4EFB\u4F55\u5355\u4E2A\u5B57\u7B26</td><td><code>?at</code></td><td><code>Cat</code>\uFF0C<code>cat</code>\uFF0C<code>Bat</code>\u6216<code>bat</code></td><td><code>at</code></td></tr><tr><td><code>[abc]</code></td><td>\u5339\u914D\u4E2D\u62EC\u53F7\u91CC\u7684\b\u4EFB\u610F\u5355\u4E2A\u5B57\u7B26</td><td><code>[CB]at</code></td><td><code>Cat</code>\u6216<code>Bat</code></td><td><code>cat</code>\u6216<code>bat</code></td></tr><tr><td><code>[a-z]</code></td><td>\u5339\u914D\u4E2D\u62EC\u53F7\u91CC\u7684\u5B57\u7B26\u8303\u56F4\u91CC\u7684\u5355\u4E2A\u5B57\u7B26</td><td><code>Letter[0-9]</code></td><td><code>Letter0</code>\uFF0C<code>Letter1</code>\uFF0C<code>Letter2</code>\uFF0C...\uFF0C<code>Letter9</code></td><td><code>Letters</code>\uFF0C<code>Letter</code>\u6216<code>Letter10</code></td></tr></tbody></table><p>\u4E0A\u8FF0\u6240\u6709\u60C5\u51B5\u91CC\uFF0C\u8DEF\u5F84\u5206\u9694\u7B26\uFF08Unix \u91CC\u662F<code>/</code>\uFF0CWindows \u91CC\u662F<code>/</code>\uFF09\u88AB\u4E0D\u4F1A\u88AB\u5339\u914D\u3002</p><h2 id="unix" tabindex="-1"><a class="header-anchor" href="#unix" aria-hidden="true">#</a> Unix</h2><p>\u5728 Linux \u548C POSIX \u7CFB\u7EDF\u91CC\uFF0C<code>*</code>\u3001<code>?</code>\u4E0E\u4E0A\u8FF0\u5B9A\u4E49\u4E00\u6837\uFF0C\u4F46<code>[...]</code>\u6709\u4E24\u4E2A\u989D\u5916\u7684\u542B\u4E49\uFF1A</p><table><thead><tr><th>\u901A\u914D\u7B26</th><th>\u63CF\u8FF0</th><th>\u793A\u4F8B</th><th>\u5339\u914D</th><th>\u4E0D\u5339\u914D</th></tr></thead><tbody><tr><td><code>[!abc]</code></td><td>\u5339\u914D\u4E0D\u5728\u4E2D\u62EC\u53F7\u91CC\u7684\b\u4EFB\u610F\u5355\u4E2A\u5B57\u7B26</td><td><code>[!C]at</code></td><td><code>bat</code>\u3001<code>Bat</code>\u6216<code>cat</code></td><td><code>Cat</code></td></tr><tr><td><code>[!a-z]</code></td><td>\u5339\u914D\u4E0D\u5728\u4E2D\u62EC\u53F7\u5B57\u7B26\u8303\u56F4\u91CC\u7684\u5355\u4E2A\u5B57\u7B26</td><td><code>Letter[!3-5]</code></td><td><code>Letter1</code>\uFF0C<code>Letter2</code>\uFF0C<code>Letter6</code>\uFF0C...\uFF0C<code>Letter9</code>\uFF0C<code>Letterx</code>\u7B49</td><td><code>Letter3</code>\uFF0C<code>Letter4</code>\u6216<code>Letterxx</code></td></tr></tbody></table>', 9);
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u4E00\u4E9B");
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("code", null, "shell", -1);
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u6BD4\u5982");
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("code", null, "C shell", -1);
const _hoisted_19 = /* @__PURE__ */ createTextVNode("\u548C");
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("code", null, "Bash", -1);
const _hoisted_21 = /* @__PURE__ */ createTextVNode("\u652F\u6301\u989D\u5916\u7684\u8BED\u6CD5\uFF0C\u6BD4\u5982");
const _hoisted_22 = {
  href: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)#Brace_expansion",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_23 = /* @__PURE__ */ createTextVNode("Brace expansion");
const _hoisted_24 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_25 = /* @__PURE__ */ createStaticVNode('<p><code>Bash shell</code>\u8FD8\u652F\u6301<code>Extended Globbing</code>\uFF0C\u5141\u8BB8\u5176\u4ED6\u6A21\u5F0F\u5339\u914D\u64CD\u4F5C\u7B26\u88AB\u7528\u4E8E\u5339\u914D\u591A\u4E2A\u88AB\u5706\u62EC\u53F7\uFF08<code>(</code>\u548C<code>)</code>\uFF09\u5305\u88F9\u7684\u6A21\u5F0F\uFF0C\u8FD9\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E<code>extglob</code>\u7684\u9009\u9879\u6765\u542F\u7528\u3002</p><h2 id="\u6587\u4EF6-\u6587\u4EF6\u5939\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6-\u6587\u4EF6\u5939\u5339\u914D" aria-hidden="true">#</a> \u6587\u4EF6/\u6587\u4EF6\u5939\u5339\u914D</h2><p>\u5728\u547D\u4EE4\u884C\u91CC\u7ECF\u5E38\u4F1A\u4F7F\u7528<code>**</code>\u548C<code>*</code>\u6765\u5339\u914D\u6587\u4EF6\u548C\u6587\u4EF6\u5939\uFF0C\u4E00\u4E9B\u5E38\u7528\u7684\u65B9\u5F0F\u4E3A:</p><ul><li><code>*</code>: \u5728\u5355\u4E2A\u8DEF\u5F84\u90E8\u5206\u91CC\uFF0C\u5339\u914D 0 \u6216\u591A\u4E2A\u5B57\u7B26</li><li><code>**</code>: \u82E5\u662F<code>**</code>\u72EC\u81EA\u5B58\u5728\u5728\u8DEF\u5F84\u7684\u67D0\u4E2A\u90E8\u5206\uFF0C\u5219\u5B83\u5C06\u5339\u914D 0 \u6216\u591A\u4E2A\u76EE\u5F55\u4EE5\u53CA\u5B50\u76EE\u5F55\u3002</li></ul><p>\u793A\u4F8B:</p><ul><li><code>a/*.js</code>: \u5339\u914D<code>a/b.js</code>\u3001<code>a/bc.js</code>\u3001<code>a/bcd.js</code>\u7B49\u7B49</li><li><code>**/*.js</code>: \u914D\u7F6E\u6839\u76EE\u5F55\u4E0B\u6240\u6709\u6587\u4EF6\u5939\u53CA\u5176\u5B50\u6587\u4EF6\u91CC\u7684<code>.js</code>\u6587\u4EF6</li><li><code>*.js</code>: \u5728\u8BBE\u7F6E\u4E86<code>matchBase:true</code>\u65F6\uFF0C\u7B49\u540C\u4E8E<code>**/*.js</code></li></ul>', 6);
const _hoisted_31 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1: ");
const _hoisted_32 = {
  href: "https://github.com/isaacs/node-glob",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_33 = /* @__PURE__ */ createTextVNode("github - node-glob");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u8BED\u6CD5" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#unix" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6587\u4EF6-\u6587\u4EF6\u5939\u5339\u914D" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_6,
    createBaseVNode("p", null, [
      _hoisted_15,
      _hoisted_16,
      _hoisted_17,
      _hoisted_18,
      _hoisted_19,
      _hoisted_20,
      _hoisted_21,
      createBaseVNode("a", _hoisted_22, [
        _hoisted_23,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_24
    ]),
    _hoisted_25,
    createBaseVNode("p", null, [
      _hoisted_31,
      createBaseVNode("a", _hoisted_32, [
        _hoisted_33,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var glob_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { glob_html as default };
