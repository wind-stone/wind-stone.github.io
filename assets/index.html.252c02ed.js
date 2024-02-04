import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u6A21\u5757\u53CA\u6A21\u5757\u89E3\u6790",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6A21\u5757\u53CA\u6A21\u5757\u89E3\u6790",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6A21\u5757\u53CA\u6A21\u5757\u89E3\u6790")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u6A21\u5757");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("export = \u548C import = require()");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u53EF\u9009\u7684\u6A21\u5757\u52A0\u8F7D");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u6A21\u5757\u89E3\u6790");
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u6A21\u5757",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6A21\u5757",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6A21\u5757")
], -1);
const _hoisted_8 = {
  href: "https://www.typescriptlang.org/docs/handbook/modules.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Modules");
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<h3 id="export-\u548C-import-require" tabindex="-1"><a class="header-anchor" href="#export-\u548C-import-require" aria-hidden="true">#</a> export = \u548C import = require()</h3><p><code>export =</code>\u548C<code>import = require()</code>\u7684\u5199\u6CD5\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u517C\u5BB9 CommonJS \u548C AMD \u91CC\u5BFC\u51FA\u5355\u4E2A<code>exports</code>\u5BF9\u8C61\u7684\u8BED\u6CD5\u3002</p><p>\u6CE8\u610F\uFF0C\u9488\u5BF9<code>export =</code>\u5BFC\u51FA\u7684\u6A21\u5757\uFF0C\u4E00\u5B9A\u8981\u7528<code>import = require()</code>\u6765\u5BFC\u5165\u3002</p><h3 id="\u53EF\u9009\u7684\u6A21\u5757\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u7684\u6A21\u5757\u52A0\u8F7D" aria-hidden="true">#</a> \u53EF\u9009\u7684\u6A21\u5757\u52A0\u8F7D</h3><blockquote><p>The compiler detects whether each module is used in the emitted JavaScript. If a module identifier is only ever used as part of a type annotations and never as an expression, then no require call is emitted for that module. This elision of unused references is a good performance optimization, and also allows for optional loading of those modules.</p></blockquote><p>\u7F16\u8BD1\u5668\u4F1A\u68C0\u6D4B\u6587\u4EF6\u91CC\u7684\u6BCF\u4E00\u4E2A\u6A21\u5757\u662F\u5426\u88AB\u4F7F\u7528\u5230\uFF0C\u5982\u679C\u4E00\u4E2A\u6A21\u5757\u6807\u8BC6\u7B26\u53EA\u662F\u4F5C\u4E3A\u7C7B\u578B\u6CE8\u89E3\u7684\u4E00\u90E8\u5206\u88AB\u4F7F\u7528\uFF0C\u800C\u4E0D\u662F\u4F5C\u4E3A\u8868\u8FBE\u5F0F\u88AB\u4F7F\u7528\uFF0C\u5219\u5728\u751F\u6210\u6587\u4EF6\u65F6\u4E0D\u4F1A\u5305\u542B<code>require</code>\u8BE5\u6A21\u5757\u7684\u4EE3\u7801\u3002\u7701\u7565\u672A\u5F15\u7528\u6A21\u5757\u5BF9\u6027\u80FD\u4F18\u5316\u662F\u6781\u597D\u7684\uFF0C\u5E76\u540C\u65F6\u5141\u8BB8\u5BF9\u8FD9\u4E9B\u6A21\u5757\u7684\u9009\u62E9\u6027\u52A0\u8F7D\u3002</p><h2 id="\u6A21\u5757\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u89E3\u6790" aria-hidden="true">#</a> \u6A21\u5757\u89E3\u6790</h2>', 7);
const _hoisted_17 = {
  href: "https://www.typescriptlang.org/docs/handbook/module-resolution.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_18 = /* @__PURE__ */ createTextVNode("Module Resolution");
const _hoisted_19 = /* @__PURE__ */ createStaticVNode('<p><code>typescript</code>\u7684\u6A21\u5757\u89E3\u6790\u652F\u6301\u5728\u7F16\u8BD1\u65F6\u5C06<code>import</code>\u7684\u6A21\u5757\u7684\u8DEF\u5F84\u66FF\u6362\u6210\u53E6\u4E00\u4E2A\u8DEF\u5F84\uFF0C\u8FD9\u4E9B\u529F\u80FD\u5305\u62EC</p><ul><li>Path Mapping</li><li>Virtual Directories with rootDirs</li></ul><p>\u6B64\u5916\uFF0C\u901A\u8FC7\u5728\u7F16\u8BD1\u65F6<code>--traceResolution</code>\u9009\u9879\uFF0C\u53EF\u4EE5\u8BE6\u7EC6\u770B\u5230\u6BCF\u4E00\u4E2A\u6A21\u5757\u662F\u5982\u4F55\u89E3\u6790\u8DEF\u5F84\u7684\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tsc --traceResolution\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>', 4);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6A21\u5757" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#export-\u548C-import-require" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u53EF\u9009\u7684\u6A21\u5757\u52A0\u8F7D" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6A21\u5757\u89E3\u6790" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_7,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_8, [
          _hoisted_9,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_10,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_17, [
          _hoisted_18,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_19,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
