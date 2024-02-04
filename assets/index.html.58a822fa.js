import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "monorepo",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#monorepo",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Monorepo")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Lerna");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Yarn Workspaces");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Workspaces \u7684\u4F9D\u8D56\u5B89\u88C5");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Workspaces \u7684\u53D1\u5E03\u95EE\u9898");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("wsrun");
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("strong", null, "\u4E3A\u4EC0\u4E48\u8981\u7528 Monorepo\uFF1F")
], -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "\u7EC4\u4EF6 components \u548C\u5DE5\u5177\u51FD\u6570 util/lib \u7684\u79EF\u7D2F\u548C\u590D\u7528")
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "\u5DE5\u7A0B\u811A\u624B\u67B6\u7684\u7EDF\u4E00\u914D\u7F6E")
], -1);
const _hoisted_11 = {
  href: "https://juejin.cn/post/6944877410827370504",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u73B0\u4EE3\u524D\u7AEF\u5DE5\u7A0B\u4E3A\u4EC0\u4E48\u8D8A\u6765\u8D8A\u79BB\u4E0D\u5F00 Monorepo?");
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<h2 id="lerna" tabindex="-1"><a class="header-anchor" href="#lerna" aria-hidden="true">#</a> Lerna</h2><p>Lerna \u662F\u57FA\u4E8E\u5BF9\u5305\u7BA1\u7406\u5668<code>npm</code>/<code>yarn</code>\u7684\u5C01\u88C5\u662F\u6765\u5B9E\u73B0\u7684\uFF0C\u5B83\u65E0\u6CD5\u6709\u6548\u5730\u63A7\u5236<code>node_modules</code>\u7684\u5185\u5BB9\uFF1A</p><ul><li>Lerna \u4F1A\u4E3A\u6BCF\u4E00\u4E2A<code>package</code>\u90FD\u8C03\u7528<code>yarn install</code>\uFF0C\u8FD9\u5BFC\u81F4\u4E86\u989D\u5916\u7684\u5F00\u9500\uFF0C\u56E0\u4E3A\u6BCF\u4E00\u4E2A<code>package.json</code>\u662F\u72EC\u7ACB\u7684\u4E14\u5B83\u4EEC\u4E4B\u95F4\u65E0\u6CD5\u5171\u4EAB\u4F9D\u8D56\u3002\u8FD9\u4E5F\u5BFC\u81F4\u4E86\u5728\u8FD9\u4E9B<code>node_modules</code>\u6587\u4EF6\u5939\u91CC\u4EA7\u751F\u4E86\u5927\u91CF\u7684\u91CD\u590D\u4F9D\u8D56\uFF0C\u56E0\u4E3A\u8FD9\u4E9B<code>package</code>\u7ECF\u5E38\u4F1A\u4F7F\u7528\u76F8\u540C\u7684\u7B2C\u4E09\u65B9\u5305\u3002</li><li>\u5B89\u88C5\u5B8C\u6210\u4E4B\u540E\uFF0CLerna \u4F1A\u624B\u52A8\u5730\u5728\u76F8\u4E92\u5F15\u7528\u7684<code>package</code>\u4E4B\u95F4\u521B\u5EFA\u94FE\u63A5<code>link</code>\u3002\u8FD9\u5C06\u5728\u8FD9\u4E9B<code>node_module</code>\u5185\u90E8\u5F15\u5165\u8FDE\u5305\u7BA1\u7406\u5668\u90FD\u65E0\u6CD5\u611F\u77E5\u5230\u7684\u4E0D\u4E00\u81F4\u6027\uFF0C\u56E0\u6B64\u5728\u4E00\u4E2A\u5305\u5185\u90E8\u8FD0\u884C<code>yarn install</code>\uFF0C\u53EF\u80FD\u4F1A\u7834\u574F Lerna \u7BA1\u7406\u7684\u5143\u7ED3\u6784\uFF08<code>meta structure</code>\uFF09\u3002</li></ul><h2 id="yarn-workspaces" tabindex="-1"><a class="header-anchor" href="#yarn-workspaces" aria-hidden="true">#</a> Yarn Workspaces</h2><p>\u53C2\u8003\u6587\u6863\uFF1A</p>', 5);
const _hoisted_18 = {
  href: "https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_19 = /* @__PURE__ */ createTextVNode("Yarn \u5B98\u65B9\u535A\u5BA2 - Workspaces in Yarn");
const _hoisted_20 = /* @__PURE__ */ createTextVNode("\uFF0C\u535A\u5BA2\u91CC\u8FD8\u8BF4\u660E\u4E86 Workspaces \u4E0E Lerna \u7684\u533A\u522B\u548C\u96C6\u6210\uFF0C\u5F3A\u70C8\u63A8\u8350\u8BE5\u535A\u5BA2");
const _hoisted_21 = {
  href: "https://classic.yarnpkg.com/lang/en/docs/workspaces/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_22 = /* @__PURE__ */ createTextVNode("Yarn \u5B98\u65B9\u6587\u6863 - Workspaces");
const _hoisted_23 = /* @__PURE__ */ createStaticVNode('<p>Yarn \u7684\u539F\u751F Workspaces \u529F\u80FD\uFF0C\u901A\u8FC7\u6D88\u9664\u8DE8 Workspaces \u7684\u4F9D\u8D56\u5305\u91CD\u590D\u95EE\u9898\uFF0C\u80FD\u591F\u8BA9\u5B89\u88C5\u4F9D\u8D56\u53D8\u5F97\u66F4\u5FEB\u66F4\u8F7B\u91CF\u3002Yarn \u53EF\u4EE5\u5728\u76F8\u4E92\u4F9D\u8D56\u7684 Workspace \u521B\u5EFA\u7B26\u53F7\u94FE\u63A5<code>symlinks</code>\uFF0C\u786E\u4FDD\u6240\u6709\u76EE\u5F55\u7684\u4E00\u81F4\u6027\u548C\u6B63\u786E\u6027\u3002</p><h3 id="workspaces-\u7684\u4F9D\u8D56\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#workspaces-\u7684\u4F9D\u8D56\u5B89\u88C5" aria-hidden="true">#</a> Workspaces \u7684\u4F9D\u8D56\u5B89\u88C5</h3><ul><li>\u6BCF\u4E2A Workspace \u91CC\u5B89\u88C5\u7684\u4F9D\u8D56\uFF0C\u90FD\u4F1A\u88AB\u63D0\u5347\u5230 Monorepo \u6839\u76EE\u5F55\u4E0B\u7684<code>node_modules</code>\u76EE\u5F55\u91CC</li><li>\u82E5\u67D0\u4E2A Workspace \u91CC\u4F9D\u8D56\u7684\u5305 PackageA \u4E0E\u6839\u76EE\u5F55\u91CC\u4F9D\u8D56\u7684\u5305 PackageA \u7684\u7248\u672C\u4E0D\u517C\u5BB9\uFF0C\u5219\u4F1A\u5728\u6839\u76EE\u5F55\u4E0B\u548C\u8BE5 Workspace \u4E0B\u5206\u522B\u5B89\u88C5\u4E0D\u540C\u7248\u672C\u7684 PackageA</li><li>\u6839\u76EE\u5F55\u4E0B\u7684<code>node_modules</code>\u76EE\u5F55\u91CC\u6D89\u53CA\u5230 Workspace \u7684\u4F9D\u8D56\uFF0C\u90FD\u4F1A\u4EE5\u7B26\u53F7\u94FE\u63A5<code>symlink</code>\u7684\u65B9\u5F0F\u94FE\u63A5\u5230\u8BE5 Monorepo \u4E0B\u5BF9\u5E94\u7684 Workspace \u6587\u4EF6\u5939</li><li>\u6BCF\u4E2A Workspace \u6CA1\u6709\u5B83\u81EA\u5DF1\u7684<code>yarn.lock</code>\u6587\u4EF6\uFF0C\u53EA\u6709\u6839\u76EE\u5F55\u5B58\u5728<code>yarn.lock</code>\u6587\u4EF6\uFF0C\u5305\u542B\u4E86\u6574\u4E2A Monorepo \u4E0B\u6240\u6709\u7684 Workspace \u7684\u4F9D\u8D56</li><li>\u5F53\u5728\u67D0\u4E2A Workspace \u4E0B\u6267\u884C\u5B89\u88C5\u4F9D\u8D56\u547D\u4EE4\u65F6\uFF0C\u8BE5 Workspace \u4E0B\u7684<code>package.json</code>\u4F1A\u589E\u52A0\u4E00\u6761\u4F9D\u8D56\u8BB0\u5F55\uFF0C\u4E14 Monorepo \u6839\u76EE\u5F55\u4E0B\u7684<code>yarn.lock</code>\u4F1A\u589E\u52A0\u4E00\u6761\u4F9D\u8D56\u8BB0\u5F55</li></ul><h3 id="workspaces-\u7684\u53D1\u5E03\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#workspaces-\u7684\u53D1\u5E03\u95EE\u9898" aria-hidden="true">#</a> Workspaces \u7684\u53D1\u5E03\u95EE\u9898</h3><p>\u901A\u5E38\uFF0CMonorepo \u7684\u6839\u76EE\u5F55\u5305\u542B\u4E86\u80F6\u6C34\u4EE3\u7801\u548C\u4E1A\u52A1\u7279\u5B9A\u4EE3\u7801\uFF0C\u8FD9\u4E9B\u4EE3\u7801\u5206\u4EAB\u7ED9\u5176\u4ED6\u9879\u76EE\u4E5F\u662F\u6CA1\u6709\u7528\u5904\u7684\uFF0C\u56E0\u6B64\u6839\u76EE\u5F55\u4E00\u822C\u4E0D\u4F5C\u4E3A\u4E00\u4E2A<code>package</code>\u53D1\u5E03\u5230 NPM \u4E0A\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u5728\u6839\u76EE\u5F55\u7684<code>package.json</code>\u91CC\u5C06\u5176\u6807\u8BB0\u4E3A<code>private</code>\u3002</p><p>\u800C\u5728 Monorepo \u9879\u76EE\u7684\u6839\u76EE\u5F55<code>package.json</code>\u91CC\u4E5F\u4F1A\u901A\u8FC7<code>workspaces</code>\u5B9A\u4E49\u4E00\u4E9B Workspace\uFF0C\u6BCF\u4E2A Workspace \u901A\u8FC7\u4F1A\u4F5C\u4E3A\u4E00\u4E2A<code>package</code>\u53D1\u5E03\u5230 NPM \u4E0A\u3002</p><h2 id="wsrun" tabindex="-1"><a class="header-anchor" href="#wsrun" aria-hidden="true">#</a> wsrun</h2>', 7);
const _hoisted_30 = {
  href: "https://github.com/hfour/wsrun",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_31 = /* @__PURE__ */ createTextVNode("wsrun");
const _hoisted_32 = /* @__PURE__ */ createTextVNode("\uFF0C\u7528\u4E8E\u5728 Yarn Workspaces \u91CC\u8FD0\u884C NPM \u811A\u672C\u6216\u81EA\u5B9A\u4E49\u547D\u4EE4\u3002");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#lerna" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#yarn-workspaces" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#workspaces-\u7684\u4F9D\u8D56\u5B89\u88C5" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#workspaces-\u7684\u53D1\u5E03\u95EE\u9898" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#wsrun" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_8,
    createBaseVNode("ul", null, [
      _hoisted_9,
      _hoisted_10,
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("a", _hoisted_11, [
            _hoisted_12,
            createVNode(_component_OutboundLink)
          ])
        ])
      ])
    ]),
    _hoisted_13,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_18, [
          _hoisted_19,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_20
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_21, [
          _hoisted_22,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_23,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_30, [
        _hoisted_31,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_32
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
