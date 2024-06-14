import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "npmrc",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#npmrc",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" npmrc")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u63CF\u8FF0");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u6587\u4EF6");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u6CE8\u91CA");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u6BCF\u4E2A\u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u6BCF\u4E2A\u7528\u6237\u7684\u914D\u7F6E\u6587\u4EF6");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u5168\u5C40\u914D\u7F6E\u6587\u4EF6");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u5185\u7F6E\u7684\u914D\u7F6E\u6587\u4EF6");
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u63CF\u8FF0",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u63CF\u8FF0",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u63CF\u8FF0")
], -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "npm"),
  /* @__PURE__ */ createTextVNode("\u4F1A\u4ECE\u547D\u4EE4\u884C\u3001\u73AF\u5883\u53D8\u91CF\u548C"),
  /* @__PURE__ */ createBaseVNode("code", null, ".npmrc"),
  /* @__PURE__ */ createTextVNode("\u6587\u4EF6\u91CC\u83B7\u53D6\u914D\u7F6E\u4FE1\u606F\u3002")
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "npm config"),
  /* @__PURE__ */ createTextVNode("\u547D\u4EE4\u7528\u4E8E\u66F4\u65B0\u548C\u7F16\u8F91\u7528\u6237\u53CA\u5168\u5C40"),
  /* @__PURE__ */ createBaseVNode("code", null, ".npmrc"),
  /* @__PURE__ */ createTextVNode("\u6587\u4EF6\u7684\u5185\u5BB9\u3002")
], -1);
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u6240\u6709\u53EF\u7528\u914D\u7F6E\u7684\u9009\u9879\uFF0C\u53EF\u89C1");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("npm-config");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<p><code>.npmrc</code>\u6587\u4EF6\uFF0C\u5C31\u662F<code>npm</code>\u7684\u914D\u7F6E\u6587\u4EF6\u6240\u5728\u4F4D\u7F6E\u3002\u6211\u4EEC\u53EF\u4EE5\u627E\u5230<code>.npmrc</code>\u6587\u4EF6\uFF0C\u4EE5\u4FEE\u6539\u5404\u4E2A\u914D\u7F6E\u9879\u3002</p><h2 id="\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6" aria-hidden="true">#</a> \u6587\u4EF6</h2><p>\u8FD9\u91CC\u6709\u56DB\u4E2A\u76F8\u5173\u7684\u6587\u4EF6\uFF08PS\uFF1A\u6309\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u5E95\u6392\u5E8F\uFF09\uFF1A</p><ul><li>\u6BCF\u4E2A\u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6\uFF08<code>/path/to/my/project/.npmrc</code>\uFF09</li><li>\u6BCF\u4E2A\u7528\u6237\u7684\u914D\u7F6E\u6587\u4EF6\uFF08<code>~/.npmrc</code>\uFF09</li><li>\u5168\u5C40\u7684\u914D\u7F6E\u6587\u4EF6\uFF08<code>$PREFIX/etc/npmrc</code>\uFF09</li><li><code>npm</code>\u5185\u7F6E\u7684\u914D\u7F6E\u6587\u4EF6\uFF08<code>/path/to/npm/npmrc</code>\uFF09</li></ul><p>\u6240\u6709\u7684\u914D\u7F6E\u6587\u4EF6\u90FD\u662F<code>key = value</code>\u53C2\u6570\u5BF9\u7684<code>ini</code>\u683C\u5F0F\u7684\u914D\u7F6E\u5217\u8868\u3002\u73AF\u5883\u53D8\u91CF\u53EF\u4EE5\u4F7F\u7528<code>${VARIABLE_NAME}</code>\u4EE3\u66FF\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>prefix = ${HOME}/.npm-packages\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FD9\u56DB\u4E2A\u6587\u4EF6\u90FD\u4F1A\u88AB\u52A0\u8F7D\uFF0C\u4E14\u914D\u7F6E\u9879\u4F1A\u4EE5\u4F18\u5148\u7EA7\u987A\u5E8F\u89E3\u6790\u3002\u6BD4\u5982\uFF0C\u7528\u6237\u914D\u7F6E\u6587\u4EF6\u91CC\u7684\u8BBE\u7F6E\u5C06\u8986\u76D6\u5168\u5C40\u914D\u7F6E\u6587\u4EF6\u91CC\u7684\u8BBE\u7F6E\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7\u5728\u914D\u7F6E\u9879\u540D\u79F0\u4E4B\u540E\u6DFB\u52A0<code>[]</code>\u6765\u6307\u5B9A\u6570\u7EC4\u503C\u3002\u6BD4\u5982\uFF1A</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>key[] = &quot;first value&quot;\nkey[] = &quot;second value&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h2>', 10);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("code", null, ".npmrc", -1);
const _hoisted_27 = /* @__PURE__ */ createTextVNode("\u6587\u4EF6\u91CC\u4EE5");
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("code", null, ";", -1);
const _hoisted_29 = /* @__PURE__ */ createTextVNode("\u6216\u5B57\u7B26");
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("code", null, "#", -1);
const _hoisted_31 = /* @__PURE__ */ createTextVNode("\u5F00\u59CB\u7684\u884C\uFF0C\u4F1A\u88AB\u7406\u89E3\u4E3A\u6CE8\u91CA\u3002");
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("code", null, ".npmrc", -1);
const _hoisted_33 = /* @__PURE__ */ createTextVNode("\u6587\u4EF6\u4F1A\u88AB");
const _hoisted_34 = {
  href: "https://github.com/npm/ini",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_35 = /* @__PURE__ */ createTextVNode("npm/ini");
const _hoisted_36 = /* @__PURE__ */ createTextVNode("\u89E3\u6790\uFF0C\u4E5F\u662F\u5B83\u89C4\u5B9A\u4E86\u8FD9\u79CD\u6CE8\u91CA\u8BED\u6CD5\u3002\u6BD4\u5982\uFF1A");
const _hoisted_37 = /* @__PURE__ */ createStaticVNode('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># last modified: 01 Jan 2016\n; Set a new registry for a scoped package\n@myscope:registry=https://mycustomregistry.example.org\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u6BCF\u4E2A\u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6BCF\u4E2A\u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u6BCF\u4E2A\u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6</h2><p>\u5F53\u5728\u672C\u5730\u9879\u76EE\u91CC\u5DE5\u4F5C\u65F6\uFF0C\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\uFF08\u6BD4\u5982\u4E0E<code>node_modules</code>\u548C<code>package.json</code>\u540C\u7EA7\uFF09\u7684<code>.npmrc</code>\u6587\u4EF6\u5C06\u8BBE\u7F6E\u7279\u5B9A\u4E8E\u8FD9\u4E2A\u9879\u76EE\u7684\u914D\u7F6E\u503C\u3002</p><p>\u6CE8\u610F\u8FD9\u53EA\u5E94\u7528\u4E8E\u4F60\u8FD0\u884C<code>npm</code>\u65F6\u6240\u5728\u7684\u9879\u76EE\u7684\u6839\u76EE\u5F55\u3002\u5F53\u4F60\u7684\u6A21\u5757\u5DF2\u7ECF\u53D1\u5E03\u4E86\uFF0C\u5B83\u5C06\u4E0D\u8D77\u4F5C\u7528\u3002\u6BD4\u5982\uFF0C\u4F60\u4E0D\u80FD\u53D1\u5E03\u4E00\u4E2A\u5F3A\u5236\u5B83\u81EA\u5DF1\u5B89\u88C5\u5230\u5168\u5C40\u6216\u5176\u4ED6\u4F4D\u7F6E\u7684\u6A21\u5757\u3002</p><p>\u6B64\u5916\uFF0C\u8BE5\u6587\u4EF6\u4E0D\u4F1A\u5728\u5168\u5C40\u6A21\u5F0F\u88AB\u4F7F\u7528\uFF0C\u6BD4\u5982\u5F53\u8FD0\u884C<code>npm install -g</code>\u65F6\u3002</p><h2 id="\u6BCF\u4E2A\u7528\u6237\u7684\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6BCF\u4E2A\u7528\u6237\u7684\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u6BCF\u4E2A\u7528\u6237\u7684\u914D\u7F6E\u6587\u4EF6</h2><p><code>$HOME/.npmrc</code>\uFF08\u6216\u8BBE\u7F6E\u5728\u73AF\u5883\u6216\u547D\u4EE4\u884C\u91CC\u7684<code>userconfig</code>\u53C2\u6570\u914D\u7F6E\u7684\u4F4D\u7F6E\uFF09</p><h2 id="\u5168\u5C40\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u5168\u5C40\u914D\u7F6E\u6587\u4EF6</h2><p><code>$PREFIX/etc/npmrc</code>\uFF08\u6216\u8BBE\u7F6E\u5728\u73AF\u5883\u6216\u547D\u4EE4\u884C\u91CC\u7684<code>globalconfig</code>\u53C2\u6570\u914D\u7F6E\u7684\u4F4D\u7F6E\uFF09\uFF1A\u8FD9\u4E2A\u6587\u4EF6\u662F<code>key=value</code>\u53C2\u6570\u5BF9\u7684<code>ini</code>\u6587\u4EF6\u683C\u5F0F\u5316\u7684\u5217\u8868\u3002\u53EF\u4EE5\u50CF\u5982\u4E0A\u90A3\u6837\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u3002</p><h2 id="\u5185\u7F6E\u7684\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u7684\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u5185\u7F6E\u7684\u914D\u7F6E\u6587\u4EF6</h2><p><code>path/to/npm/itself/npmrc</code></p><p>\u8FD9\u662F\u4E00\u4E2A\u4E0D\u53EF\u66F4\u6539\u7684\u5185\u7F6E\u914D\u7F6E\u6587\u4EF6\uFF0C\u5C06\u4E0E<code>npm</code>\u7684\u66F4\u65B0\u4FDD\u6301\u4E00\u81F4\u3002\u5C06\u4F7F\u7528\u5B89\u88C5<code>npm</code>\u65F6\u5E26\u6765\u7684<code>./configure</code>\u811A\u672C\u6765\u8BBE\u7F6E\u914D\u7F6E\u9879\u3002\u8FD9\u4E3B\u8981\u662F\u4E3A\u4E86\u4EE5\u4E00\u79CD\u6807\u51C6\u548C\u4E00\u81F4\u7684\u884C\u4E3A\u8BA9\u5206\u6563\u7684\u7EF4\u62A4\u8005\u53BB\u8986\u76D6\u9ED8\u8BA4\u914D\u7F6E\u3002</p>', 12);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u63CF\u8FF0" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6587\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6CE8\u91CA" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6BCF\u4E2A\u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6BCF\u4E2A\u7528\u6237\u7684\u914D\u7F6E\u6587\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5168\u5C40\u914D\u7F6E\u6587\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5185\u7F6E\u7684\u914D\u7F6E\u6587\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_10,
    _hoisted_11,
    _hoisted_12,
    createBaseVNode("p", null, [
      _hoisted_13,
      createVNode(_component_RouterLink, { to: "/front-end-engineering/development/npm/npm-config.html" }, {
        default: withCtx(() => [
          _hoisted_14
        ]),
        _: 1
      }),
      _hoisted_15
    ]),
    _hoisted_16,
    createBaseVNode("p", null, [
      _hoisted_26,
      _hoisted_27,
      _hoisted_28,
      _hoisted_29,
      _hoisted_30,
      _hoisted_31,
      _hoisted_32,
      _hoisted_33,
      createBaseVNode("a", _hoisted_34, [
        _hoisted_35,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_36
    ]),
    _hoisted_37,
    createVNode(_component_global_config)
  ], 64);
}
var npmrc_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { npmrc_html as default };
