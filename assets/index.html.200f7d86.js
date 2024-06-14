import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "npm",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#npm",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" NPM")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("tag");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("npm \u5305\u7BA1\u7406\u539F\u7406");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u95EE\u9898\u6C47\u603B");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u4FEE\u6539 registry \u540E package-lock.json \u91CC\u7684 resolved \u6CA1\u66F4\u65B0");
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "tag",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#tag",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" tag")
], -1);
const _hoisted_8 = {
  href: "https://dev.to/andywer/how-to-use-npm-tags-4lla",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createTextVNode("How to use: npm tags");
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<ul><li>NPM \u5305\u7684<code>tag</code>\u4E0E<code>git</code>\u7684<code>tag</code>\u4E0D\u4E00\u6837\u3002</li><li>NPM \u7684\u547D\u4EE4\u91CC\uFF0C\u82E5\u662F\u6CA1\u63D0\u4F9B<code>tag</code>\uFF0C\u5219\u9ED8\u8BA4\u4F7F\u7528<code>latest</code>\uFF0C\u6BD4\u5982<code>npm install</code>\u548C<code>npm publish</code></li><li>NPM \u5305\u7684<code>tag</code>\u53EF\u4EE5\u662F\u4EFB\u610F\u7684\u5B57\u7B26\u4E32\uFF0C\u4E0D\u8FC7\u4E00\u822C\u4F1A\u6709\u7EA6\u5B9A\u4FD7\u6210\u7684<code>tag</code>\uFF0C\u6BD4\u5982<code>alpha</code>\u3001<code>beta</code>\u3001<code>next</code>\u7B49</li></ul><h2 id="npm-\u5305\u7BA1\u7406\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#npm-\u5305\u7BA1\u7406\u539F\u7406" aria-hidden="true">#</a> npm \u5305\u7BA1\u7406\u539F\u7406</h2>', 2);
const _hoisted_12 = {
  href: "https://jishuin.proginn.com/p/763bfbd655cc",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u4E00\u6587\u5F04\u61C2 npm & yarn \u5305\u7BA1\u7406\u673A\u5236");
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<h2 id="\u95EE\u9898\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u6C47\u603B" aria-hidden="true">#</a> \u95EE\u9898\u6C47\u603B</h2><h3 id="\u4FEE\u6539-registry-\u540E-package-lock-json-\u91CC\u7684-resolved-\u6CA1\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-registry-\u540E-package-lock-json-\u91CC\u7684-resolved-\u6CA1\u66F4\u65B0" aria-hidden="true">#</a> \u4FEE\u6539 registry \u540E package-lock.json \u91CC\u7684 resolved \u6CA1\u66F4\u65B0</h3><p>\u82E5\u662F\u5728\u9879\u76EE\u91CC\u4FEE\u6539<code>registry</code>\uFF0C\u5728<code>npm i</code>\u4E4B\u540E\uFF0C<code>package-lock.json</code>\u6587\u4EF6\u91CC\u7684<code>resolved</code>\u4ECD\u4E3A\u539F\u6765\u7684<code>registry</code>\uFF0C\u53EF\u901A\u8FC7\u5982\u4E0B\u6B65\u9AA4\u4FEE\u590D\u8FD9\u4E2A\u95EE\u9898:</p><ol><li>Delete .npmrc</li><li>Delete node_modules</li><li>Delete package-lock.json</li><li>Run npm cache clean -f</li><li>Run npm i</li></ol>', 4);
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u66F4\u591A\u8BE6\u60C5\u53EF\u4EE5\u53C2\u89C1");
const _hoisted_19 = {
  href: "https://github.com/npm/npm/issues/19578#issuecomment-386428859",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createTextVNode('package-lock.json not updating "resolved" field after moving registry #19578');
const _hoisted_21 = /* @__PURE__ */ createTextVNode("\u3002");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#tag" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#npm-\u5305\u7BA1\u7406\u539F\u7406" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u95EE\u9898\u6C47\u603B" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4FEE\u6539-registry-\u540E-package-lock-json-\u91CC\u7684-resolved-\u6CA1\u66F4\u65B0" }, {
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
    _hoisted_7,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_8, [
        _hoisted_9,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_10,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_12, [
          _hoisted_13,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_14,
    createBaseVNode("p", null, [
      _hoisted_18,
      createBaseVNode("a", _hoisted_19, [
        _hoisted_20,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_21
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
