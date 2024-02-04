import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "tapable",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#tapable",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Tapable")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u7CFB\u5217\u6587\u7AE0");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("tapable \u5B98\u7F51 README \u7FFB\u8BD1");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("tapable \u5B9E\u73B0");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u8BE6\u7EC6\u4F7F\u7528");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u6CE8\u518C\u63D2\u4EF6\u53CA\u89E6\u53D1\u94A9\u5B50");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u89E6\u53D1\u94A9\u5B50");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u89E6\u53D1\u94A9\u5B50\u65F6\u7684\u8FD4\u56DE\u503C\u53CA\u540E\u7EED\u64CD\u4F5C");
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<p><code>tapable</code>\u5E93\u63D0\u4F9B\u4E86\u5404\u5F0F\u5404\u6837\u7684\u94A9\u5B50\u7C7B\uFF08<code>hook classes</code>\uFF09\uFF0C\u5B9E\u4F8B\u5316\u8FD9\u4E9B\u94A9\u5B50\u7C7B\u5C06\u521B\u5EFA\u94A9\u5B50\u3002</p><p>\u6BCF\u4E00\u4E2A\u94A9\u5B50\u4E0A\uFF0C\u90FD\u53EF\u4EE5\u6CE8\u518C\u591A\u4E2A\u63D2\u4EF6\uFF08<code>plugin</code>\uFF09\u51FD\u6570\u3002\u5F53\u94A9\u5B50\u89E6\u53D1\u65F6\uFF0C\u8FD9\u4E9B\u63D2\u4EF6\u51FD\u6570\u5C31\u4F1A\u6267\u884C\uFF0C\u800C\u63D2\u4EF6\u7684\u6267\u884C\u987A\u5E8F\u3001\u5165\u53C2\u3001\u8FD4\u56DE\u503C\u662F\u5426\u4F20\u5165\u4E0B\u4E00\u4E2A\u63D2\u4EF6\u51FD\u6570\u7B49\uFF0C\u90FD\u53D6\u51B3\u4E8E\u94A9\u5B50\u7684\u7C7B\u578B\u3002</p><p>\u9488\u5BF9\u8981\u5F00\u53D1\u5DE5\u5177\u5E93\u7684\u5F00\u53D1\u8005\u6765\u8BF4\uFF0C\u4ED6\u4EEC\u4F9D\u8D56\u5E76\u4F7F\u7528<code>tapable</code>\u5E93\u521B\u5EFA\u4E00\u6279\u94A9\u5B50\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u94A9\u5B50\u5206\u522B\u5B89\u653E\u5728\u8BE5\u5DE5\u5177\u5E93\u6D41\u6C34\u7EBF\u4F5C\u4E1A\u4E0A\u7684\u5404\u4E2A\u5173\u952E\u8DEF\u5F84\u4E0A\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u94A9\u5B50\u548C\u542F\u7528\u6D41\u6C34\u7EBF\u4F5C\u4E1A\u7684\u65B9\u6CD5\u4E00\u8D77\u66B4\u9732\u7ED9\u4F7F\u7528\u8BE5\u5DE5\u5177\u5E93\u7684\u7528\u6237\u3002</p><p>\u800C\u5BF9\u4F7F\u7528\u5DE5\u5177\u5E93\u7684\u7528\u6237\u6765\u8BF4\uFF0C\u4ED6\u4EEC\u53EF\u4EE5\u5728\u5DE5\u5177\u5E93\u66B4\u9732\u51FA\u6765\u7684\u5404\u4E2A\u94A9\u5B50\u4E0A\u5B89\u88C5\u63D2\u4EF6\uFF0C\u6700\u540E\u542F\u52A8\u5DE5\u5177\u5E93\u7684\u6D41\u6C34\u7EBF\u4F5C\u4E1A\u3002\u5F53\u6267\u884C\u5230\u5DE5\u5177\u5E93\u6D41\u6C34\u7EBF\u4E0A\u7684\u5173\u952E\u8DEF\u5F84\u4E0A\u65F6\uFF0C\u4F1A\u89E6\u53D1\u8BE5\u8DEF\u5F84\u4E0A\u7684\u94A9\u5B50\uFF0C\u8FDB\u800C\u6267\u884C\u7528\u6237\u5728\u8BE5\u94A9\u5B50\u4E0A\u6CE8\u518C\u7684\u63D2\u4EF6\u51FD\u6570\u3002</p><h2 id="\u7CFB\u5217\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u5217\u6587\u7AE0" aria-hidden="true">#</a> \u7CFB\u5217\u6587\u7AE0</h2><h3 id="tapable-\u5B98\u7F51-readme-\u7FFB\u8BD1" tabindex="-1"><a class="header-anchor" href="#tapable-\u5B98\u7F51-readme-\u7FFB\u8BD1" aria-hidden="true">#</a> tapable \u5B98\u7F51 README \u7FFB\u8BD1</h3>', 6);
const _hoisted_16 = /* @__PURE__ */ createTextVNode("tapable \u5B98\u7F51 README \u7FFB\u8BD1");
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<h3 id="tapable-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#tapable-\u5B9E\u73B0" aria-hidden="true">#</a> tapable \u5B9E\u73B0</h3><h2 id="\u8BE6\u7EC6\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u8BE6\u7EC6\u4F7F\u7528" aria-hidden="true">#</a> \u8BE6\u7EC6\u4F7F\u7528</h2><h3 id="\u6CE8\u518C\u63D2\u4EF6\u53CA\u89E6\u53D1\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u63D2\u4EF6\u53CA\u89E6\u53D1\u94A9\u5B50" aria-hidden="true">#</a> \u6CE8\u518C\u63D2\u4EF6\u53CA\u89E6\u53D1\u94A9\u5B50</h3><ul><li><code>hook.tap(pluginName, pluginFn)</code>: \u6CE8\u518C\u540C\u6B65\u63D2\u4EF6</li><li><code>hook.tapAsync(pluginName, (arg1, arg2, ..., callback) =&gt; { /* ... */ })</code>: \u6CE8\u518C\u57FA\u4E8E\u56DE\u8C03\u7684\u5F02\u6B65\u63D2\u4EF6</li><li><code>hook.tapPromise(pluginName, () =&gt; { return promise } )</code>: \u6CE8\u518C\u57FA\u4E8E\u56DE\u8C03\u7684\u5F02\u6B65\u63D2\u4EF6</li></ul><h3 id="\u89E6\u53D1\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u89E6\u53D1\u94A9\u5B50" aria-hidden="true">#</a> \u89E6\u53D1\u94A9\u5B50</h3><ul><li><code>hook.call()</code>: \u6267\u884C\u94A9\u5B50\u4E0A\u901A\u8FC7<code>hook.tap</code>\u6CE8\u518C\u7684\u63D2\u4EF6</li><li><code>hook.callAsync()</code>: \u6267\u884C\u94A9\u5B50\u4E0A\u901A\u8FC7<code>hook.tapAsync</code>\u6CE8\u518C\u7684\u63D2\u4EF6</li><li><code>hook.promise()</code>: \u6267\u884C\u94A9\u5B50\u4E0A\u901A\u8FC7<code>hook.promise</code>\u6CE8\u518C\u7684\u63D2\u4EF6</li></ul><h3 id="\u89E6\u53D1\u94A9\u5B50\u65F6\u7684\u8FD4\u56DE\u503C\u53CA\u540E\u7EED\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u89E6\u53D1\u94A9\u5B50\u65F6\u7684\u8FD4\u56DE\u503C\u53CA\u540E\u7EED\u64CD\u4F5C" aria-hidden="true">#</a> \u89E6\u53D1\u94A9\u5B50\u65F6\u7684\u8FD4\u56DE\u503C\u53CA\u540E\u7EED\u64CD\u4F5C</h3><ul><li><code>SyncHook</code>/<code>SyncBailHook</code>/<code>SyncLoopHook</code>: \u8C03\u7528<code>hook.call()</code>\u89E6\u53D1\u94A9\u5B50\uFF0C\u65E0\u8FD4\u56DE\u503C</li><li><code>SyncWaterfallHook</code>: \u8C03\u7528<code>hook.call()</code>\u89E6\u53D1\u94A9\u5B50\uFF0C\u5176\u8FD4\u56DE\u503C\u662F\u6700\u540E\u4E00\u4E2A\u63D2\u4EF6\u7684\u8FD4\u56DE\u503C</li><li><code>AsyncSeriesHook</code><ul><li>\u8C03\u7528<code>hook.callAsync(arg1, arg2, ..., callback)</code>\u89E6\u53D1\u94A9\u5B50 <ul><li>\u65E0\u8FD4\u56DE\u503C</li><li>\u5728\u6240\u6709\u63D2\u4EF6\u6267\u884C\u5B8C\u6210\u540E\u4F1A\u8C03\u7528<code>callback</code></li></ul></li><li>\u8C03\u7528<code>hook.promise(arg1, arg2, ...).then(res =&gt; { ... })</code>\u89E6\u53D1\u94A9\u5B50 <ul><li>\u8FD4\u56DE<code>promise</code>\u5B9E\u4F8B</li><li>\u5728\u6240\u6709\u63D2\u4EF6\u6267\u884C\u5B8C\u6210\u540E\u4F1A\u5C06\u8BE5<code>promise</code>\u5B9E\u4F8B\u7F6E\u4E3A<code>resolved</code></li><li><code>res</code>\u4E3A\u6709\u6570\u7EC4\uFF0C\u6570\u7EC4\u7684\u9879\u662F\u5404\u4E2A\u63D2\u4EF6<code>resolve</code>\u7684\u503C</li></ul></li></ul></li><li><code>AsyncParallelHook</code><ul><li>\u8C03\u7528<code>hook.callAsync(arg1, arg2, ..., callback)</code>\u89E6\u53D1\u94A9\u5B50 <ul><li>\u65E0\u8FD4\u56DE\u503C</li><li>\u5728\u6240\u6709\u63D2\u4EF6\u6267\u884C\u5B8C\u6210\u540E\u4F1A\u8C03\u7528<code>callback</code></li></ul></li><li>\u8C03\u7528<code>hook.promise(arg1, arg2, ...).then(res =&gt; { ... })</code>\u89E6\u53D1\u94A9\u5B50 <ul><li>\u8FD4\u56DE<code>promise</code>\u5B9E\u4F8B</li><li>\u5728\u6240\u6709\u63D2\u4EF6\u6267\u884C\u5B8C\u6210\u540E\u4F1A\u5C06\u8BE5<code>promise</code>\u5B9E\u4F8B\u7F6E\u4E3A<code>resolved</code></li><li><code>res</code>\u4E3A<code>undefined</code></li></ul></li></ul></li></ul>', 8);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7CFB\u5217\u6587\u7AE0" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#tapable-\u5B98\u7F51-readme-\u7FFB\u8BD1" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#tapable-\u5B9E\u73B0" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u8BE6\u7EC6\u4F7F\u7528" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6CE8\u518C\u63D2\u4EF6\u53CA\u89E6\u53D1\u94A9\u5B50" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u89E6\u53D1\u94A9\u5B50" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u89E6\u53D1\u94A9\u5B50\u65F6\u7684\u8FD4\u56DE\u503C\u53CA\u540E\u7EED\u64CD\u4F5C" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_10,
    createBaseVNode("p", null, [
      createVNode(_component_RouterLink, { to: "/front-end-engineering/build/webpack/tapable/tapable-readme.html" }, {
        default: withCtx(() => [
          _hoisted_16
        ]),
        _: 1
      })
    ]),
    _hoisted_17,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
