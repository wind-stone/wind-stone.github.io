import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, d as createStaticVNode, f as createTextVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><h2 id="\u4E3B\u8981\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u8981\u5185\u5BB9" aria-hidden="true">#</a> \u4E3B\u8981\u5185\u5BB9</h2><ul><li>\u521D\u59CB\u5316\u9636\u6BB5</li><li>\u5F00\u53D1\u9636\u6BB5</li><li>\u6784\u5EFA\u9636\u6BB5</li><li>\u6027\u80FD\u4E0E\u7A33\u5B9A\u6027</li></ul><h2 id="\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#\u76D1\u63A7" aria-hidden="true">#</a> \u76D1\u63A7</h2><h3 id="sentry" tabindex="-1"><a class="header-anchor" href="#sentry" aria-hidden="true">#</a> Sentry</h3>', 5);
const _hoisted_6 = {
  href: "https://cloud.tencent.com/developer/article/1601166",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u5B66\u4E60 sentry \u6E90\u7801\u6574\u4F53\u67B6\u6784\uFF0C\u6253\u9020\u5C5E\u4E8E\u81EA\u5DF1\u7684\u524D\u7AEF\u5F02\u5E38\u76D1\u63A7SDK");
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u6DD8\u5B9D-def-\u76F8\u5173\u8D44\u6599",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6DD8\u5B9D-def-\u76F8\u5173\u8D44\u6599",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6DD8\u5B9D DEF \u76F8\u5173\u8D44\u6599")
], -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("a", { href: "./pdf/qcon-def.pdf" }, "QCon - DEF")
], -1);
const _hoisted_10 = {
  href: "https://www.zhihu.com/question/279540558/answer/407902516",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u4E00\u4E2A\u4E13\u4E1A\u7684\u300E\u524D\u7AEF\u5DE5\u7A0B\u5316\u4F53\u7CFB\u300F\u662F\u5982\u4F55\u5EFA\u7ACB\u7684\uFF1F");
const _hoisted_12 = {
  href: "https://www.zhihu.com/question/278441684/answer/1618228127",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u5404 IT \u516C\u53F8\u7684\uFF08\u5927\uFF09\u524D\u7AEF\u56E2\u961F\u4F53\u7CFB\u90FD\u662F\u600E\u6837\u7684\uFF1F - \u963F\u91CC\u5DF4\u5DF4\u5927\u6DD8\u5B9D\u6280\u672F\u7684\u56DE\u7B54");
const _hoisted_14 = {
  href: "https://fed.taobao.org/blog/taofed/do71ct/fe-engineering-width-cloud-build/?spm=taofed.blogs.blog-list.5.7c855ac8x7yTVI",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u6DD8\u7CFB\u524D\u7AEF\u56E2\u961F - \u524D\u7AEF\u5DE5\u7A0B\u5316\uFF1A\u4E91\u6784\u5EFA");
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_6, [
          _hoisted_7,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_8,
    createBaseVNode("ul", null, [
      _hoisted_9,
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_10, [
          _hoisted_11,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_12, [
          _hoisted_13,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_14, [
          _hoisted_15,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
