import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
var _imports_0 = "/assets/mobile_visualviewport.980c2793.jpg";
var _imports_1 = "/assets/mobile_viewportzoomedout.339d068c.jpg";
var _imports_2 = "/assets/mobile_layoutviewport.e3e0252d.jpg";
var _imports_3 = "/assets/mobile_viewportzoomedout_la.07846cd7.jpg";
var _imports_4 = "/assets/mobile_layoutviewport_la.82eb9618.jpg";
var _imports_5 = "/assets/mobile_client.e9bb38e5.jpg";
var _imports_6 = "/assets/mobile_client_la.299970c5.jpg";
var _imports_7 = "/assets/mobile_inner.461e9a3d.jpg";
var _imports_8 = "/assets/mobile_screen.23b174c4.jpg";
var _imports_9 = "/assets/mobile_page.0766eb65.jpg";
var _imports_10 = "/assets/mobile_offset.a9fb8f7a.jpg";
var _imports_11 = "/assets/mobile_mediaqueries.a8f4d5d2.jpg";
var _imports_12 = "/assets/mobile_pageXY.775c329a.jpg";
var _imports_13 = "/assets/mobile_clientXY.34e2e8b9.jpg";
var _imports_14 = "/assets/mq_none.920203c4.jpg";
var _imports_15 = "/assets/mq_none_zoomed.11cea0cf.jpg";
var _imports_16 = "/assets/mq_html300.c791e121.jpg";
var _imports_17 = "/assets/mq_yes.12bd2a86.jpg";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "a-tale-of-two-viewports-\u2014-part-two",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#a-tale-of-two-viewports-\u2014-part-two",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" A tale of two viewports \u2014 part two")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u7684\u95EE\u9898");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u4E24\u79CD\u89C6\u53E3");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u7F29\u653E");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u7406\u89E3\u5E03\u5C40\u89C6\u53E3");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u6D4B\u91CF\u5E03\u5C40\u89C6\u53E3");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u6D4B\u91CF\u89C6\u89C9\u89C6\u53E3");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u5C4F\u5E55");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u7F29\u653E\u5C42\u7EA7");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u6EDA\u52A8\u504F\u79FB");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("html \u5143\u7D20");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u5A92\u4F53\u67E5\u8BE2");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u4E8B\u4EF6\u5750\u6807");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Meta viewport");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u76F8\u5173\u7814\u7A76");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u7FFB\u8BD1\u81EA: ");
const _hoisted_18 = {
  href: "https://www.quirksmode.org/mobile/viewports2.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_19 = /* @__PURE__ */ createTextVNode("PPK - A tale of two viewports \u2014 part two");
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5728\u8FD9\u4E2A\u8FF7\u4F60\u7CFB\u5217\u6587\u7AE0\u91CC\uFF0C\u6211\u5C06\u89E3\u91CA\u89C6\u53E3\u4EE5\u53CA\u5404\u79CD\u91CD\u8981\u5143\u7D20\u7684\u5BBD\u5EA6\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF0C\u6BD4\u5982"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u3001"),
  /* @__PURE__ */ createBaseVNode("code", null, "window"),
  /* @__PURE__ */ createTextVNode("\u548C"),
  /* @__PURE__ */ createBaseVNode("code", null, "screen"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("p", null, "\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u5C06\u7EE7\u7EED\u8BA8\u8BBA\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u3002\u82E5\u662F\u4F60\u5B8C\u5168\u4E0D\u4E86\u89E3\u79FB\u52A8\u7AEF\uFF0C\u6211\u5EFA\u8BAE\u4F60\u5148\u9605\u8BFB\u7B2C\u4E00\u90E8\u5206\u5173\u4E8E\u684C\u9762\u6D4F\u89C8\u5668\u7684\u5185\u5BB9\uFF0C\u4EE5\u4FBF\u4E3A\u672C\u7AE0\u5185\u5BB9\u505A\u597D\u94FA\u57AB\u3002", -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u7684\u95EE\u9898",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u7684\u95EE\u9898",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u7684\u95EE\u9898")
], -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("p", null, "\u5F53\u6211\u4EEC\u5BF9\u6BD4\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u548C\u684C\u9762\u6D4F\u89C8\u5668\uFF0C\u6700\u5927\u7684\u533A\u522B\u5C31\u662F\u5C4F\u5E55\u5C3A\u5BF8\u3002\u9488\u5BF9\u4E13\u4E3A\u684C\u9762\u6D4F\u89C8\u5668\u4F18\u5316\u7684\u7F51\u7AD9\uFF0C\u5728\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u4E0A\u5C55\u793A\u7684\u5185\u5BB9\u4F1A\u660E\u663E\u5730\u6BD4\u684C\u9762\u6D4F\u89C8\u5668\u4E0A\u8981\u5C11\uFF0C\u8981\u4E0D\u7F29\u5C0F\u9875\u9762\u76F4\u5230\u6587\u5B57\u5C0F\u5230\u65E0\u6CD5\u9605\u8BFB\uFF0C\u8981\u4E0D\u4EC5\u5728\u5C4F\u5E55\u8303\u56F4\u5185\u5C55\u793A\u7F51\u7AD9\u7684\u4E00\u5C0F\u90E8\u5206\u3002", -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u79FB\u52A8\u7AEF\u5C4F\u5E55\u8FDC\u6BD4\u684C\u9762\u7AEF\u5C4F\u5E55\u8981\u5C0F\uFF0C\u6BD4\u5982\u6700\u5927"),
  /* @__PURE__ */ createBaseVNode("code", null, "400px"),
  /* @__PURE__ */ createTextVNode("\u5BBD\uFF0C\u6709\u65F6\u4F1A\u66F4\u5C0F\u3002\uFF08\u4E00\u4E9B\u624B\u673A\u5448\u62A5\u8F83\u5927\u7684\u5BBD\u5EA6\uFF0C\u4F46\u662F\u4ED6\u4EEC\u5728\u8BF4\u8C0E\uFF0C\u6216\u81F3\u5C11\u7ED9\u4E86\u6211\u4EEC\u4E00\u4E9B\u65E0\u7528\u7684\u4FE1\u606F\uFF09")
], -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("p", null, "\u5904\u4E8E\u4E2D\u7B49\u5927\u5C0F\u7684\u5E73\u677F\u8BBE\u5907\u6BD4\u5982 iPad\uFF0C\u5C06\u6D88\u9664\u684C\u9762\u7AEF\u548C\u79FB\u52A8\u7AEF\u4E4B\u95F4\u7684\u5DEE\u8DDD\uFF0C\u4F46\u8FD9\u5E76\u6CA1\u6709\u6539\u53D8\u6839\u672C\u95EE\u9898\u3002\u7F51\u7AD9\u4E5F\u5FC5\u987B\u5DE5\u4F5C\u5728\u79FB\u52A8\u8BBE\u5907\u4E0A\uFF0C\u56E0\u6B64\u6211\u4EEC\u5FC5\u987B\u8BA9\u4ED6\u4EEC\u5728\u5C0F\u5C4F\u5E55\u4E0A\u5C55\u793A\u5730\u66F4\u597D\u3002", -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("p", null, "\u6700\u91CD\u8981\u7684\u95EE\u9898\u96C6\u4E2D\u5728 CSS \u4E0A\uFF0C\u5C24\u5176\u662F\u89C6\u53E3\u7684\u5C3A\u5BF8\u3002\u82E5\u662F\u6211\u4EEC\u4E00\u4E00\u7167\u642C\u684C\u9762\u7AEF\u7684\u6A21\u578B\uFF0C\u6211\u4EEC\u7684 CSS \u5C06\u5931\u6548\u3002", -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u8BA9\u6211\u4EEC\u518D\u6B21\u63D0\u53CA"),
  /* @__PURE__ */ createBaseVNode("code", null, "width: 10%"),
  /* @__PURE__ */ createTextVNode("\u7684\u4FA7\u8FB9\u680F\u3002\u82E5\u662F\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u50CF\u684C\u9762\u7AEF\u6D4F\u89C8\u5668\u90A3\u4E48\u505A\uFF0C\u5219\u4FA7\u8FB9\u680F\u7684\u5BBD\u5EA6\u6700\u591A\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "40px"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u8FD9\u592A\u7A84\u4E86\u3002\u4F60\u7684\u6D41\u5F0F\u5E03\u5C40\u5C06\u53D8\u5F97\u96BE\u4EE5\u60F3\u8C61\u5730\u53D8\u5F62\u3002")
], -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("p", null, "\u89E3\u51B3\u95EE\u9898\u7684\u65B9\u6CD5\u4E4B\u4E00\uFF0C\u5C31\u662F\u4E3A\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u521B\u5EFA\u4E00\u4E2A\u7279\u6B8A\u7684\u7F51\u7AD9\u3002\u5373\u4F7F\u629B\u5F00\u4F60\u662F\u5426\u5E94\u8BE5\u8FD9\u6837\u505A\u4E0D\u8BF4\uFF0C\u5B9E\u9645\u95EE\u9898\u662F\uFF0C\u53EA\u6709\u6781\u5C11\u7684\u7F51\u7AD9\u62E5\u6709\u8005\u80FD\u591F\u5145\u5206\u4E13\u95E8\u8FCE\u5408\u79FB\u52A8\u8BBE\u5907\u3002", -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("p", null, "\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u5382\u5546\u60F3\u8981\u7ED9\u4ED6\u4EEC\u7684\u5BA2\u6237\u63D0\u4F9B\u6700\u597D\u7684\u4F53\u9A8C\uFF0C\u5C31\u73B0\u5728\u800C\u8A00\uFF0C\u8FD9\u610F\u5473\u7740\u201C\u5C3D\u53EF\u80FD\u4E0E\u684C\u9762\u7AEF\u6D4F\u89C8\u5668\u4E00\u81F4\u201D\uFF0C\u56E0\u6B64\u5C31\u9700\u8981\u4E00\u4E9B\u7075\u5DE7\u7684\u65B9\u6CD5\u4E86\u3002", -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u4E24\u79CD\u89C6\u53E3",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u4E24\u79CD\u89C6\u53E3",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u4E24\u79CD\u89C6\u53E3")
], -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u7684\u89C6\u53E3\u592A\u7A84\uFF0C\u5BFC\u81F4\u4E0D\u80FD\u6EE1\u8DB3 CSS \u5E03\u5C40\u3002\u6700\u663E\u800C\u6613\u89C1\u7684\u89E3\u51B3\u65B9\u6848\u5C31\u662F\uFF0C\u8BA9\u89C6\u53E3\u66F4\u5BBD\u4E00\u4E9B\uFF0C\u56E0\u6B64\uFF0C\u8FD9\u5C31\u8981\u6C42\u5C06\u89C6\u53E3\u4E00\u5206\u4E3A\u4E8C: \u89C6\u89C9\u89C6\u53E3\uFF08"),
  /* @__PURE__ */ createBaseVNode("code", null, "visual viewport"),
  /* @__PURE__ */ createTextVNode("\uFF09\u548C\u5E03\u5C40\u89C6\u53E3\uFF08"),
  /* @__PURE__ */ createBaseVNode("code", null, "layout viewport"),
  /* @__PURE__ */ createTextVNode("\uFF09\u3002")
], -1);
const _hoisted_32 = /* @__PURE__ */ createTextVNode("George Cummins \u5728");
const _hoisted_33 = {
  href: "https://stackoverflow.com/questions/6333927/difference-between-visual-viewport-and-layout-viewport",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_34 = /* @__PURE__ */ createTextVNode("Stack Overflow");
const _hoisted_35 = /* @__PURE__ */ createTextVNode("\u91CC\u6700\u597D\u5730\u89E3\u91CA\u4E86\u8FD9\u4E2A\u57FA\u672C\u6982\u5FF5:");
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("blockquote", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "\u5C06\u5E03\u5C40\u89C6\u53E3\u60F3\u8C61\u6210\u4E00\u4E2A\u5927\u7684\u56FE\u7247\uFF0C\u4E14\u4E0D\u80FD\u6539\u53D8\u5927\u5C0F\u548C\u5F62\u72B6\u3002\u518D\u60F3\u8C61\u4F60\u6709\u4E00\u4E2A\u5C0F\u4E00\u4E9B\u7684\u6846\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u8BE5\u6846\u770B\u5230\u90A3\u5F20\u5927\u56FE\u7247\u3002\u8FD9\u4E2A\u5C0F\u6846\u5468\u56F4\u90FD\u662F\u4E0D\u900F\u660E\u7684\u6750\u6599\uFF0C\u5BFC\u81F4\u4F60\u53EA\u80FD\u900F\u8FC7\u5C0F\u6846\u770B\u5230\u5927\u56FE\u7247\u7684\u4E00\u90E8\u5206\uFF0C\u800C\u5C0F\u6846\u4E4B\u5916\u7684\u89C6\u91CE\u90FD\u662F\u6A21\u7CCA\u7684\uFF08\u770B\u4E0D\u5230\u4EFB\u4F55\u4E1C\u897F\uFF09\u3002\u4F60\u900F\u8FC7\u5C0F\u6846\u770B\u5230\u7684\u56FE\u7247\u7684\u90A3\u90E8\u5206\u5C31\u662F\u89C6\u89C9\u89C6\u53E3\u3002\u4F60\u53EF\u4EE5\u5C06\u5C0F\u6846\u62FF\u5F97\u8DDD\u79BB\u56FE\u7247\u8FDC\u4E00\u4E9B\uFF08\u5373\u5BF9\u5E94\u7740\u9875\u9762\u7684\u7F29\u5C0F\u64CD\u4F5C\uFF09\u8FDB\u800C\u53EF\u4EE5\u4E00\u6B21\u770B\u5230\u6574\u4E2A\u56FE\u7247\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5C06\u5C0F\u6846\u62FF\u5F97\u8DDD\u79BB\u56FE\u7247\u8FD1\u4E00\u4E9B\uFF08\u5373\u5BF9\u5E94\u7740\u9875\u9762\u7684\u653E\u5927\u64CD\u4F5C\uFF09\u8FDB\u800C\u53EA\u80FD\u770B\u5230\u56FE\u7247\u7684\u4E00\u5C0F\u90E8\u5206\u3002\u4F60\u8FD8\u53EF\u4EE5\u6539\u53D8\u5C0F\u6846\u7684\u65B9\u5411\uFF0C\u4F46\u662F\u5927\u56FE\u7247\uFF08\u5373\u5E03\u5C40\u89C6\u53E3\uFF09\u7684\u5927\u5C0F\u548C\u5F62\u72B6\u6C38\u4E0D\u6539\u53D8\u3002")
], -1);
const _hoisted_37 = /* @__PURE__ */ createTextVNode("\u4F60\u8FD8\u53EF\u4EE5\u53C2\u8003 Chris \u7684");
const _hoisted_38 = {
  href: "https://stackoverflow.com/questions/7344886/visual-viewport-vs-layout-viewport-on-mobile-devices",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_39 = /* @__PURE__ */ createTextVNode("\u8FD9\u4E2A\u89E3\u91CA");
const _hoisted_40 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("p", null, "\u89C6\u89C9\u89C6\u53E3\u662F\u9875\u9762\u5F53\u524D\u663E\u793A\u5728\u5C4F\u5E55\u4E0A\u7684\u4E00\u90E8\u5206\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u6EDA\u52A8\u6765\u6539\u53D8\u4ED6\u6240\u770B\u5230\u7684\u9875\u9762\u90E8\u5206\uFF0C\u6216\u901A\u8FC7\u7F29\u653E\u6765\u6539\u53D8\u89C6\u89C9\u89C6\u53E3\u7684\u5927\u5C0F\u3002", -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "default"
  })
], -1);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("p", null, "\u4F46\u662F\uFF0CCSS \u5E03\u5C40\uFF0C\u5C24\u5176\u662F\u767E\u5206\u6BD4\u7684\u5BBD\u5EA6\uFF0C\u662F\u76F8\u5BF9\u4E8E\u5E03\u5C40\u89C6\u53E3\u8BA1\u7B97\u7684\uFF0C\u5176\u7ED3\u679C\u53EF\u80FD\u8981\u6BD4\u89C6\u89C9\u89C6\u53E3\u8FD8\u8981\u5BBD\u4E00\u4E9B\u3002", -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u56E0\u6B64\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u521D\u59CB\u65F6\u7684\u5BBD\u5EA6\u662F\u5E03\u5C40\u89C6\u53E3\u7684\u5BBD\u5EA6\uFF0C\u4E14 CSS \u662F\u6309\u7167\u5728\u660E\u663E\u6BD4\u624B\u673A\u5C4F\u5E55\u8981\u5BBD\u7684\u5C4F\u5E55\u4E0A\u7684\u8BBE\u5B9A\u6765\u8BE0\u91CA\u7684\u3002\u8FD9\u4E5F\u786E\u4FDD\u4E86\u4F60\u7684\u7F51\u7AD9\u5E03\u5C40\u5C31\u50CF\u5728\u684C\u9762\u7AEF\u6D4F\u89C8\u5668\u4E0A\u8868\u73B0\u7684\u4E00\u6837\u3002")
], -1);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5E03\u5C40\u89C6\u53E3\u6709\u591A\u5BBD\uFF1F\u6BCF\u4E2A\u6D4F\u89C8\u5668\u90FD\u4E0D\u4E00\u6837\u3002iPhone \u4E0A\u7684 Safari \u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "980px"),
  /* @__PURE__ */ createTextVNode("\uFF1BOpera \u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "850px"),
  /* @__PURE__ */ createTextVNode("\uFF0CAndroid WebKit \u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "800px"),
  /* @__PURE__ */ createTextVNode("\uFF0CIE \u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "974px"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("p", null, "\u4E00\u4E9B\u6D4F\u89C8\u5668\u8FD8\u6709\u4E00\u4E9B\u7279\u6B8A\u7684\u884C\u4E3A:", -1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Symbian WebKit \u8BD5\u56FE\u8BA9\u5E03\u5C40\u89C6\u53E3\u548C\u89C6\u89C9\u89C6\u53E3\u4E00\u6837\u5927\uFF0C\u662F\u7684\uFF0C\u8FD9\u5C31\u8868\u793A\u6709\u7740\u767E\u5206\u6BD4\u5BBD\u5EA6\u7684\u5143\u7D20\u5C06\u8868\u73B0\u5730\u5F88\u53E4\u602A\u3002\u4F46\u662F\uFF0C\u82E5\u662F\u9875\u9762\u56E0\u4E3A\u7EDD\u5BF9\u5BBD\u5EA6\u4E0D\u80FD\u6574\u4E2A\u653E\u5165\u89C6\u89C9\u89C6\u53E3\u91CC\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5C06\u89C6\u89C9\u89C6\u53E3\u62C9\u4F38\u5230\u6700\u5927"),
    /* @__PURE__ */ createBaseVNode("code", null, "850px"),
    /* @__PURE__ */ createTextVNode("\u3002")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, "Samsung WebKit (on bada) \u5C06\u5E03\u5C40\u89C6\u53E3\u8BBE\u7F6E\u4E3A\u4E0E\u6700\u5BBD\u7684\u5143\u7D20\u4E00\u6837\u5BBD\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("BlackBerry \u4E0A\uFF0C\u5728"),
    /* @__PURE__ */ createBaseVNode("code", null, "100%"),
    /* @__PURE__ */ createTextVNode("\u7F29\u653E\u65F6\uFF0C\u5E03\u5C40\u89C6\u53E3\u4E0E\u89C6\u89C9\u89C6\u53E3\u76F8\u7B49\u3002")
  ])
], -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u7F29\u653E",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7F29\u653E",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7F29\u653E")
], -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u663E\u7136\uFF0C\u8FD9\u4E24\u4E2A\u89C6\u53E3\u90FD\u662F\u4EE5 CSS \u50CF\u7D20\u5EA6\u91CF\u7684\u3002\u4F46\u662F\u89C6\u89C9\u89C6\u53E3\u7684\u5C3A\u5BF8\u4F1A\u968F\u7740\u7F29\u653E\u800C\u6539\u53D8\uFF08\u82E5\u662F\u653E\u5927\uFF0C\u5C4F\u5E55\u5185\u80FD\u663E\u793A\u7684 CSS \u50CF\u7D20\u66F4\u5C11\uFF09\uFF0C\u800C\u5E03\u5C40\u89C6\u53E3\u7684\u5C3A\u5BF8\u4F1A\u4FDD\u6301\u4E0D\u53D8\u3002\uFF08\u5047\u8BBE\u5E03\u5C40\u89C6\u53E3\u7684\u5C3A\u5BF8\u4E5F\u6539\u53D8\u7684\u8BDD\uFF0C\u5F53\u767E\u5206\u6BD4\u7684\u5BBD\u5EA6\u91CD\u65B0\u8BA1\u7B97\u65F6\uFF0C\u9875\u9762\u5C06\u4E0D\u65AD\u56DE\u6D41"),
  /* @__PURE__ */ createBaseVNode("code", null, "reflow"),
  /* @__PURE__ */ createTextVNode("\uFF09")
], -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u7406\u89E3\u5E03\u5C40\u89C6\u53E3",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7406\u89E3\u5E03\u5C40\u89C6\u53E3",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7406\u89E3\u5E03\u5C40\u89C6\u53E3")
], -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("p", null, "\u4E3A\u4E86\u7406\u89E3\u5E03\u5C40\u89C6\u53E3\u7684\u5927\u5C0F\uFF0C\u6211\u4EEC\u5FC5\u987B\u5148\u770B\u4E00\u4E0B\u5F53\u9875\u9762\u5B8C\u5168\u7F29\u5C0F\u65F6\u4F1A\u53D1\u751F\u4EC0\u4E48\u3002\u8BB8\u591A\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u521D\u59CB\u65F6\u90FD\u662F\u4EE5\u5B8C\u5168\u7F29\u5C0F\u7684\u6A21\u5F0F\u663E\u793A\u4EFB\u4F55\u9875\u9762\u3002", -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("p", null, "\u8981\u70B9\u662F\uFF0C\u6D4F\u89C8\u5668\u5DF2\u7ECF\u9009\u62E9\u4E86\u5E03\u5C40\u89C6\u53E3\u7684\u5C3A\u5BF8\uFF0C\u4EE5\u4FBF\u4E8E\u5B83\u80FD\u5728\u5B8C\u5168\u7F29\u5C0F\u7684\u6A21\u5F0F\u4E0B\uFF0C\u5B8C\u5168\u8986\u76D6\u5C4F\u5E55\uFF08\u5373\u5E03\u5C40\u89C6\u53E3\u7B49\u4E8E\u89C6\u89C9\u89C6\u53E3\uFF09\u3002", -1);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_1,
    alt: "default"
  })
], -1);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("p", null, "\u56E0\u6B64\uFF0C\u5E03\u5C40\u89C6\u53E3\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u7B49\u540C\u4E8E\u5728\u5B8C\u5168\u7F29\u5C0F\u6A21\u5F0F\u4E0B\u5C4F\u5E55\u80FD\u5C55\u793A\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002\u5F53\u7528\u6237\u653E\u5927\u65F6\uFF0C\u8FD9\u4E9B\u5C3A\u5BF8\u4E5F\u4FDD\u6301\u4E0D\u53D8\u3002", -1);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_2,
    alt: "default"
  })
], -1);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("p", null, "\u5E03\u5C40\u89C6\u53E3\u7684\u5BBD\u5EA6\u4E5F\u603B\u662F\u4E00\u6837\u3002\u82E5\u662F\u4F60\u65CB\u8F6C\u4F60\u7684\u624B\u673A\uFF0C\u89C6\u89C9\u89C6\u53E3\u4F1A\u6539\u53D8\uFF0C\u4F46\u662F\u6D4F\u89C8\u5668\u901A\u8FC7\u8F7B\u5FAE\u653E\u5927\u6765\u9002\u5E94\u65B0\u7684\u65B9\u5411\uFF0C\u4EE5\u4FBF\u5E03\u5C40\u89C6\u53E3\u518D\u6B21\u4E0E\u89C6\u89C9\u89C6\u53E3\u4E00\u6837\u5BBD\u3002", -1);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_3,
    alt: "default"
  })
], -1);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("p", null, "\u4F46\u8FD9\u4F1A\u5BF9\u5E03\u5C40\u89C6\u53E3\u7684\u9AD8\u5EA6\u4EA7\u751F\u5F71\u54CD\uFF0C\u9AD8\u5EA6\u6BD4\u7AD6\u5C4F\u6A21\u5F0F\u65F6\u7684\u9AD8\u5EA6\u8981\u5927\u5927\u51CF\u5C0F\u3002\u4F46\u662F Web \u5F00\u53D1\u8005\u4E0D\u5173\u5FC3\u9AD8\u5EA6\uFF0C\u53EA\u5173\u5FC3\u5BBD\u5EA6\u3002", -1);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_4,
    alt: "default"
  })
], -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u6D4B\u91CF\u5E03\u5C40\u89C6\u53E3",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6D4B\u91CF\u5E03\u5C40\u89C6\u53E3",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6D4B\u91CF\u5E03\u5C40\u89C6\u53E3")
], -1);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("p", null, "\u73B0\u5728\u6211\u4EEC\u60F3\u8981\u6D4B\u91CF\u8FD9\u4E24\u4E2A\u89C6\u53E3\u3002\u5E78\u8FD0\u7684\u662F\uFF0C\u6D4F\u89C8\u5668\u5927\u6218\uFF0C\u7ED9\u6211\u4EEC\u7559\u4E0B\u4E86\u4E24\u4E2A\u5C5E\u6027\u5BF9\u3002", -1);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "document.documentElement.clientWidth/Height"),
  /* @__PURE__ */ createTextVNode("\u8868\u793A\u5E03\u5C40\u89C6\u53E3\u7684\u5C3A\u5BF8\u3002")
], -1);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_5,
    alt: "default"
  })
], -1);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5C4F\u5E55\u65B9\u5411\u4F1A\u5BF9"),
  /* @__PURE__ */ createBaseVNode("code", null, "height"),
  /* @__PURE__ */ createTextVNode("\u751F\u6210\u5F71\u54CD\uFF0C\u4F46\u4E0D\u4F1A\u5F71\u54CD"),
  /* @__PURE__ */ createBaseVNode("code", null, "width"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_6,
    alt: "default"
  })
], -1);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container tip" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "document. documentElement. clientWidth/Height"),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, "\u8868\u793A\u5E03\u5C40\u89C6\u53E3\u5C3A\u5BF8\u3002"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u4EE5 CSS \u50CF\u7D20\u5EA6\u91CF\u3002"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u5B8C\u5168\u652F\u6301: Opera\u3001iPhone\u3001Android\u3001Symbian\u3001Bolt\u3001MicroB\u3001Skyfire\u3001Obigo\u3002"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("\u95EE\u9898: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "\u5728 Iris \u91CC\uFF0C\u8868\u793A\u89C6\u89C9\u89C6\u53E3\u7684\u5C3A\u5BF8\u3002"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Samsung WebKit: \u5F53"),
          /* @__PURE__ */ createBaseVNode("code", null, "<meta viewport>"),
          /* @__PURE__ */ createTextVNode("\u5E94\u7528\u5230\u9875\u9762\u65F6\uFF0C\u5176\u8FD4\u56DE\u6B63\u786E\u7684\u503C\uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE"),
          /* @__PURE__ */ createBaseVNode("code", null, "html"),
          /* @__PURE__ */ createTextVNode("\u5143\u7D20\u7684\u503C\u3002")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, "Firefox \u91CC\u5C4F\u5E55\u5C3A\u5BF8\u662F\u4EE5\u8BBE\u5907\u50CF\u7D20\u5EA6\u91CF\u7684\u3002"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("IE \u8FD4\u56DE"),
          /* @__PURE__ */ createBaseVNode("code", null, "1024x768"),
          /* @__PURE__ */ createTextVNode("\u3002\u4F46\u662F\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u662F\u50A8\u5B58\u5728"),
          /* @__PURE__ */ createBaseVNode("code", null, "document.body.clientWidth/Height"),
          /* @__PURE__ */ createTextVNode("\u91CC\u7684\u3002\u8FD9\u4E0E IE6 \u684C\u9762\u6D4F\u89C8\u5668\u4FDD\u6301\u4E86\u4E00\u81F4\u3002")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("NetFront \u7684\u503C\u4EC5\u5728"),
          /* @__PURE__ */ createBaseVNode("code", null, "100%"),
          /* @__PURE__ */ createTextVNode("\u7F29\u653E\u65F6\u662F\u6B63\u786E\u7684\u3002")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, "Symbian WebKit 1 (\u8001\u7684 S60v3 \u8BBE\u7F6E)\u4E0D\u652F\u6301\u8FD9\u4E9B\u5C5E\u6027\u3002"),
        /* @__PURE__ */ createBaseVNode("li", null, "BlackBerry \u4E0D\u652F\u6301\u3002")
      ])
    ])
  ])
], -1);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u6D4B\u91CF\u89C6\u89C9\u89C6\u53E3",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6D4B\u91CF\u89C6\u89C9\u89C6\u53E3",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6D4B\u91CF\u89C6\u89C9\u89C6\u53E3")
], -1);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6211\u4EEC\u901A\u8FC7"),
  /* @__PURE__ */ createBaseVNode("code", null, "window.innerWidth/Height"),
  /* @__PURE__ */ createTextVNode("\u6765\u6D4B\u91CF\u89C6\u89C9\u89C6\u53E3\u3002\u663E\u7136\uFF0C\u968F\u7740\u7528\u6237\u7F29\u653E\uFF0C\u6D4B\u91CF\u503C\u4F1A\u968F\u4E4B\u6539\u53D8\uFF0C\u56E0\u4E3A\u5C4F\u5E55\u91CC\u7684 CSS \u50CF\u7D20\u4F1A\u53D8\u5F97\u66F4\u591A\u6216\u66F4\u5C11\u3002")
], -1);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_7,
    alt: "default"
  })
], -1);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u4E0D\u5E78\u7684\u662F\uFF0C\u8FD9\u4E2A\u4F1A\u6709\u517C\u5BB9\u6027\u95EE\u9898\u3002\u8BB8\u591A\u6D4F\u89C8\u5668\u4ECD\u7136\u5FC5\u987B\u6DFB\u52A0\u5BF9\u89C6\u89C9\u89C6\u53E3\u7684\u6D4B\u91CF\u7684\u652F\u6301\u3002\u6B64\u5916\uFF0C\u6CA1\u6709\u6D4F\u89C8\u5668\u5C06\u8FD9\u4E2A\u6D4B\u91CF\u50A8\u5B58\u5728\u4EFB\u4F55\u5176\u4ED6\u5C5E\u6027\u5BF9\u91CC\uFF0C\u56E0\u6B64\u6211\u731C\u6D4B"),
  /* @__PURE__ */ createBaseVNode("code", null, "window.innerWidth/Height"),
  /* @__PURE__ */ createTextVNode("\u662F\u4E2A\u6807\u51C6\uFF0C\u5C3D\u7BA1\u652F\u6301\u5730\u4E0D\u592A\u597D\u3002")
], -1);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container tip" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "window.innerWidth/Height"),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, "\u8868\u793A\u89C6\u89C9\u89C6\u53E3\u7684\u5C3A\u5BF8\u3002"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u4EE5 CSS \u50CF\u7D20\u5EA6\u91CF\u3002"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u5B8C\u5168\u652F\u6301: iPhone\u3001Symbian\u3001BlackBerry\u3002"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("\u95EE\u9898: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "Opera \u548C Firefox \u4EE5\u8BBE\u5907\u50CF\u7D20\u8FD4\u56DE\u5C4F\u5E55\u5BBD\u5EA6\u3002"),
        /* @__PURE__ */ createBaseVNode("li", null, "Android\u3001Bolt\u3001MicroB \u548C NetFront \u4EE5 CSS \u50CF\u7D20\u8FD4\u56DE\u5E03\u5C40\u89C6\u53E3\u7684\u5C3A\u5BF8\u3002")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("\u4E0D\u5B8C\u5168\u652F\u6301: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("IE\uFF0C\u4F46\u662F\u5B83\u901A\u8FC7"),
          /* @__PURE__ */ createBaseVNode("code", null, "document.documentElement.offsetWidth/Height"),
          /* @__PURE__ */ createTextVNode("\u7ED9\u51FA\u4E86\u89C6\u89C9\u89C6\u53E3\u7684\u5C3A\u5BF8\u3002")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Samsung WebKit: \u5F53"),
          /* @__PURE__ */ createBaseVNode("code", null, "<meta viewport>"),
          /* @__PURE__ */ createTextVNode("\u5E94\u7528\u5230\u9875\u9762\u65F6\uFF0C\u8FD4\u56DE\u5E03\u5C40\u89C6\u53E3\u7684\u5C3A\u5BF8\uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE"),
          /* @__PURE__ */ createBaseVNode("code", null, "html"),
          /* @__PURE__ */ createTextVNode("\u7684\u5C3A\u5BF8\u3002")
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, "\u5B8C\u5168\u4E0D\u77E5\u6240\u8C13: Iris\u3001Skyfire\u3001Obigo\u3002")
  ])
], -1);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u5C4F\u5E55",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5C4F\u5E55",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5C4F\u5E55")
], -1);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5728\u684C\u9762\u6D4F\u89C8\u5668\u91CC\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "screen.width/height"),
  /* @__PURE__ */ createTextVNode("\u4EE5\u8BBE\u5907\u50CF\u7D20\u7684\u5F62\u5F0F\uFF0C\u7ED9\u51FA\u4E86\u5C4F\u5E55\u5927\u5C0F\uFF0C\u4E14\u4F5C\u4E3A Web \u5F00\u53D1\u8005\uFF0C\u4F60\u51E0\u4E4E\u7528\u4E0D\u5230\u8FD9\u4E2A\u4FE1\u606F\u3002\u4F60\u5BF9\u5C4F\u5E55\u7684\u7269\u7406\u5C3A\u5BF8\u6CA1\u5174\u8DA3\uFF0C\u800C\u662F\u5BF9\u5B83\u5F53\u524D\u80FD\u663E\u793A\u591A\u5C11 CSS \u50CF\u7D20\u611F\u5174\u8DA3\u3002")
], -1);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_8,
    alt: "default"
  })
], -1);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container tip" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "screen.width/height"),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, "\u8868\u793A\u5C4F\u5E55\u5C3A\u5BF8\u3002"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u4EE5\u8BBE\u5907\u50CF\u7D20\u5EA6\u91CF\u3002"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u5B8C\u5168\u652F\u6301: Opera Mini\u3001Android\u3001Symbian\u3001Iris\u3001Firefox\u3001MicroB\u3001IE\u3001BlackBerry\u3002"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("\u95EE\u9898: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Windows Mobile \u4E0A\u7684 Opera Mobile \u53EA\u7ED9\u51FA\u4E86"),
          /* @__PURE__ */ createBaseVNode("code", null, "landscape"),
          /* @__PURE__ */ createTextVNode("\u5C3A\u5BF8\u3002S60 \u4E0A\u7684 Opera Mobile \u6B63\u5E38\u3002")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Samsung WebKit: \u5F53"),
          /* @__PURE__ */ createBaseVNode("code", null, "<meta viewport>"),
          /* @__PURE__ */ createTextVNode("\u5E94\u7528\u5230\u9875\u9762\u65F6\uFF0C\u8FD4\u56DE\u5E03\u5C40\u89C6\u53E3\u7684\u5C3A\u5BF8\uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE"),
          /* @__PURE__ */ createBaseVNode("code", null, "html"),
          /* @__PURE__ */ createTextVNode("\u7684\u5C3A\u5BF8\u3002")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, "iPhone \u548C Obigo \u53EA\u7ED9\u51FA\u4E86\u7AD6\u5411\u7684\u5C3A\u5BF8\u3002"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("NetFront \u53EA\u7ED9\u51FA\u4E86"),
          /* @__PURE__ */ createBaseVNode("code", null, "landscape"),
          /* @__PURE__ */ createTextVNode("\u5C3A\u5BF8\u3002")
        ])
      ])
    ])
  ])
], -1);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u7F29\u653E\u5C42\u7EA7",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7F29\u653E\u5C42\u7EA7",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7F29\u653E\u5C42\u7EA7")
], -1);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u76F4\u63A5\u83B7\u5F97\u7F29\u653E\u5C42\u7EA7\u662F\u4E0D\u53EF\u80FD\u7684\uFF0C\u4F46\u662F\u4F60\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "screen.width"),
  /* @__PURE__ */ createTextVNode("\u9664\u4EE5"),
  /* @__PURE__ */ createBaseVNode("code", null, "window.innerWidth"),
  /* @__PURE__ */ createTextVNode("\u7684\u65B9\u5F0F\u83B7\u5F97\uFF0C\u5F53\u7136\u8FD9\u4EC5\u5728\u8FD9\u4E24\u4E2A\u5C5E\u6027\u90FD\u5B8C\u7F8E\u652F\u6301\u7684\u60C5\u51B5\u624D\u53EF\u4EE5\u505A\u5230\u3002")
], -1);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5E78\u8FD0\u7684\u662F\uFF0C\u7F29\u653E\u5C42\u7EA7\u5E76\u4E0D\u91CD\u8981\u3002\u4F60\u6240\u8981\u77E5\u9053\u7684\u662F\uFF0C\u5C4F\u5E55\u4E0A\u5F53\u524D\u80FD\u663E\u793A\u591A\u5C11 CSS \u50CF\u7D20\uFF0C\u800C\u4F60\u80FD\u4ECE"),
  /* @__PURE__ */ createBaseVNode("code", null, "window.innerWidth"),
  /* @__PURE__ */ createTextVNode("\u91CC\u7684\u5F97\u77E5\u8FD9\u4E2A\u4FE1\u606F\uFF08\u82E5\u662F\u8FD9\u4E2A\u5C5E\u6027\u80FD\u6B63\u786E\u5730\u652F\u6301\u7684\u8BDD\uFF09\u3002")
], -1);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u6EDA\u52A8\u504F\u79FB",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6EDA\u52A8\u504F\u79FB",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6EDA\u52A8\u504F\u79FB")
], -1);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u4F60\u8FD8\u9700\u8981\u77E5\u9053\uFF0C\u76F8\u5BF9\u4E8E\u5E03\u5C40\u89C6\u53E3\uFF0C\u89C6\u89C9\u89C6\u53E3\u5F53\u524D\u7684\u4F4D\u7F6E\uFF0C\u4E5F\u5C31\u662F\u6EDA\u52A8\u504F\u79FB\uFF0C\u5C31\u8DDF\u684C\u9762\u7AEF\u6D4F\u89C8\u5668\u4E00\u6837\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u50A8\u5B58\u5728"),
  /* @__PURE__ */ createBaseVNode("code", null, "window.pageX/YOffset"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_9,
    alt: "default"
  })
], -1);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container tip" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "window.pageX/YOffset"),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, "\u8868\u793A\u6EDA\u52A8\u504F\u79FB\uFF0C\u4E0E\u89C6\u89C9\u89C6\u53E3\u76F8\u5BF9\u4E8E\u5E03\u5C40\u89C6\u53E3\u7684\u504F\u79FB\u4E00\u81F4\u3002"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u4EE5 CSS \u50CF\u7D20\u6765\u5EA6\u91CF\u3002"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u5B8C\u5168\u652F\u6301: iPhone\u3001Android\u3001Symbian\u3001Iris\u3001MicroB\u3001Skyfire\u3001Obigo\u3002"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("\u95EE\u9898: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Opera\u3001Bolt\u3001Firefox\u3001\u548C NetFront \u603B\u662F\u8FD4\u56DE"),
          /* @__PURE__ */ createBaseVNode("code", null, "0"),
          /* @__PURE__ */ createTextVNode("\u3002")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Samsung WebKit \u4EC5\u5F53"),
          /* @__PURE__ */ createBaseVNode("code", null, "<meta viewport>"),
          /* @__PURE__ */ createTextVNode("\u5E94\u7528\u5230\u9875\u9762\u65F6\uFF0C\u8FD4\u56DE\u6B63\u786E\u7684\u503C\u3002")
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("\u4E0D\u652F\u6301: IE \u548C BlackBerry\u3002IE \u5728"),
      /* @__PURE__ */ createBaseVNode("code", null, "document.documentElement.scrollLeft/Top"),
      /* @__PURE__ */ createTextVNode("\u50A8\u5B58\u4E86\u8FD9\u4E9B\u4FE1\u606F\u3002")
    ])
  ])
], -1);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "html-\u5143\u7D20",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#html-\u5143\u7D20",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" html \u5143\u7D20")
], -1);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u4E0E\u684C\u9762\u7AEF\u6D4F\u89C8\u5668\u4E00\u6837\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "document.documentElement.offsetWidth/Height"),
  /* @__PURE__ */ createTextVNode("\u8868\u793A"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u7684\u5C3A\u5BF8\uFF0C\u4EE5 CSS \u50CF\u7D20\u5EA6\u91CF\u3002")
], -1);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_10,
    alt: "default"
  })
], -1);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container tip" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "document.documentElement.offsetWidth/Height"),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("\u8868\u793A"),
      /* @__PURE__ */ createBaseVNode("code", null, "html"),
      /* @__PURE__ */ createTextVNode("\u5143\u7D20\u7684\u603B\u5C3A\u5BF8")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, "\u4EE5 CSS \u50CF\u7D20\u5EA6\u91CF"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u5B8C\u5168\u652F\u6301: Opera\u3001iPhone\u3001Android\u3001Symbian\u3001Samsung\u3001Iris\u3001Bolt\u3001Firefox\u3001MicroB\u3001Skyfire\u3001BlackBerry\u3001Obigo\u3002"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("\u95EE\u9898: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("NetFront \u7684\u503C\u4EC5\u5728"),
          /* @__PURE__ */ createBaseVNode("code", null, "100%"),
          /* @__PURE__ */ createTextVNode("\u7F29\u653E\u7684\u65F6\u5019\u662F\u6B63\u786E\u7684\u3002")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("IE \u4F7F\u7528\u8BE5\u5C5E\u6027\u5BF9\u53BB\u5B58\u50A8\u89C6\u89C9\u89C6\u53E3\u7684\u5C3A\u5BF8\u3002\u5728 IE \u91CC\uFF0C\u901A\u8FC7"),
          /* @__PURE__ */ createBaseVNode("code", null, "document.body.clientWidth/Height"),
          /* @__PURE__ */ createTextVNode("\u83B7\u53D6\u6B63\u786E\u7684\u503C\u3002")
        ])
      ])
    ])
  ])
], -1);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u5A92\u4F53\u67E5\u8BE2",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5A92\u4F53\u67E5\u8BE2",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5A92\u4F53\u67E5\u8BE2")
], -1);
const _hoisted_88 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5A92\u4F53\u67E5\u8BE2\u4E0E\u684C\u9762\u7AEF\u4E00\u6837\u3002"),
  /* @__PURE__ */ createBaseVNode("code", null, "width/height"),
  /* @__PURE__ */ createTextVNode("\u662F\u4F7F\u7528\u5E03\u5C40\u89C6\u53E3\u7684\u5BBD\u9AD8\uFF0C\u4E14\u4EE5 CSS \u50CF\u7D20\u5EA6\u91CF\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "device-width/height"),
  /* @__PURE__ */ createTextVNode("\u662F\u4F7F\u7528\u8BBE\u5907\u5C4F\u5E55\u7684\u5BBD\u9AD8\uFF0C\u4E14\u4EE5\u8BBE\u5907\u50CF\u7D20\u5EA6\u91CF\u3002")
], -1);
const _hoisted_89 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6362\u53E5\u8BDD\u8BF4\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "width/height"),
  /* @__PURE__ */ createTextVNode("\u7684\u503C\u5C31\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "document.documentElement.clientWidth/Height"),
  /* @__PURE__ */ createTextVNode("\u7684\u503C\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "device-width/height"),
  /* @__PURE__ */ createTextVNode("\u7684\u503C\u5C31\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "screen.width/height"),
  /* @__PURE__ */ createTextVNode("\u7684\u503C\uFF08\u5B83\u4EEC\u5728\u6240\u6709\u6D4F\u89C8\u5668\u91CC\u90FD\u4FDD\u6301\u4E00\u81F4\uFF0C\u5373\u4F7F\u503C\u662F\u9519\u8BEF\u7684\uFF09\u3002")
], -1);
const _hoisted_90 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_11,
    alt: "default"
  })
], -1);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode("p", null, "\u73B0\u5728\u54EA\u79CD\u89C6\u53E3\u5BF9\u6211\u4EEC Web \u5F00\u53D1\u8005\u662F\u6709\u7528\u7684\u5462\uFF1F\u6211\u4E0D\u77E5\u9053..", -1);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6211\u4E00\u5F00\u59CB\u8BA4\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "device-width"),
  /* @__PURE__ */ createTextVNode("\u662F\u6700\u91CD\u8981\u7684\uFF0C\u56E0\u4E3A\u5B83\u7ED9\u4E86\u6211\u4EEC\u4E00\u4E9B\u5173\u4E8E\u6211\u4EEC\u5C06\u4F1A\u4F7F\u7528\u7684\u8BBE\u5907\u7684\u4FE1\u606F\u3002\u6BD4\u5982\uFF0C\u4F60\u53EF\u4EE5\u66F4\u6539\u4F60\u5E03\u5C40\u7684\u5BBD\u5EA6\u6765\u9002\u5E94\u8BBE\u5907\u7684\u5BBD\u5EA6\u3002\u4F46\u662F\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "<meta view-port>"),
  /* @__PURE__ */ createTextVNode("\u6765\u505A\u5230\uFF0C\u4E0D\u4E00\u5B9A\u8981\u4F7F\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "device-width"),
  /* @__PURE__ */ createTextVNode("\u8FD9\u4E2A\u5A92\u4F53\u67E5\u8BE2\u3002")
], -1);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u90A3\u4E48\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "width"),
  /* @__PURE__ */ createTextVNode("\u662F\u66F4\u91CD\u8981\u7684\u5A92\u4F53\u67E5\u8BE2\u5417\uFF1F\u6709\u53EF\u80FD\uFF0C\u5B83\u7ED9\u51FA\u4E86\u6D4F\u89C8\u5668\u5382\u5546\u5728\u8FD9\u4E2A\u8BBE\u5907\u4E0A\u8BA4\u4E3A\u597D\u7684\u5BBD\u5EA6\u3002\u4F46\u8FD9\u4E0D\u592A\u660E\u786E\uFF0C\u800C\u4E14"),
  /* @__PURE__ */ createBaseVNode("code", null, "width"),
  /* @__PURE__ */ createTextVNode("\u5A92\u4F53\u67E5\u8BE2\u4E0D\u80FD\u7ED9\u51FA\u4EFB\u4F55\u5176\u4ED6\u4FE1\u606F\u3002")
], -1);
const _hoisted_94 = /* @__PURE__ */ createBaseVNode("p", null, "\u56E0\u6B64\uFF0C\u6211\u65E0\u6CD5\u51B3\u5B9A\u3002\u76EE\u524D\u6765\u8BF4\uFF0C\u6211\u8BA4\u4E3A\u5A92\u4F53\u67E5\u8BE2\u5BF9\u4E8E\u5F04\u6E05\u695A\u4F60\u662F\u5728\u4F7F\u7528\u684C\u9762\u7AEF\u3001\u5E73\u677F\u7535\u8111\u6216\u662F\u79FB\u52A8\u7AEF\u8BBE\u5907\u662F\u5F88\u91CD\u8981\u7684\uFF0C\u4F46\u662F\u5BF9\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u5E73\u677F\u7535\u8111\u6216\u79FB\u52A8\u7AEF\u8BBE\u5907\u6765\u8BF4\uFF0C\u5C31\u6CA1\u90A3\u4E48\u6709\u7528\u4E86\u3002", -1);
const _hoisted_95 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container tip" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "\u5A92\u4F53\u67E5\u8BE2"),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("\u8868\u793A\u6D4B\u91CF"),
      /* @__PURE__ */ createBaseVNode("code", null, "html"),
      /* @__PURE__ */ createTextVNode("\u5143\u7D20\u5BBD\u5EA6\uFF08CSS \u50CF\u7D20\uFF09\u6216\u8BBE\u5907\u5BBD\u5EA6\uFF08\u8BBE\u5907\u50CF\u7D20\uFF09")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, "\u5B8C\u5168\u652F\u6301: Opera\u3001iPhone\u3001Android\u3001Symbian\u3001Samsung\u3001Iris\u3001Bolt\u3001Firefox\u3001MicroB\u3002"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u4E0D\u652F\u6301: Skyfire\u3001IE\u3001BlackBerry\u3001NetFront\u3001Obigo\u3002"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u6CE8\u610F: \u6211\u6D4B\u8BD5\u7684\u662F\u6D4F\u89C8\u5668\u662F\u5426\u4ECE\u8FD9\u4E9B\u5C5E\u6027\u91CC\u62FF\u5230\u6570\u636E\uFF0C\u6570\u636E\u662F\u5426\u6B63\u786E\uFF0C\u5C31\u4E0D\u662F\u8FD9\u6B21\u6D4B\u8BD5\u7684\u90E8\u5206\u4E86\u3002")
  ])
], -1);
const _hoisted_96 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u4E8B\u4EF6\u5750\u6807",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u4E8B\u4EF6\u5750\u6807",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u4E8B\u4EF6\u5750\u6807")
], -1);
const _hoisted_97 = /* @__PURE__ */ createBaseVNode("p", null, "\u4E8B\u4EF6\u5750\u6807\u8DDF\u684C\u9762\u7AEF\u5DEE\u4E0D\u591A\u3002\u4E0D\u5E78\u7684\u662F\uFF0C\u5728 12 \u4E2A\u6D4B\u8BD5\u7684\u6D4F\u89C8\u5668\u91CC\uFF0C\u53EA\u6709 Symbian WebKit \u548C Iris \u8FD9 2 \u4E2A\uFF0C\u83B7\u5F97\u7684\u4E09\u4E2A\u5C5E\u6027\u5BF9\u662F\u5B8C\u5168\u6B63\u786E\u7684\u3002\u5176\u4ED6\u7684\u6D4F\u89C8\u5668\u90FD\u6216\u591A\u6216\u5C11\u6709\u4E00\u4E9B\u4E25\u91CD\u7684\u95EE\u9898\u3002", -1);
const _hoisted_98 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "pageX/Y"),
  /* @__PURE__ */ createTextVNode("\u4ECD\u7136\u662F\u76F8\u5BF9\u4E8E\u9875\u9762\u7684\u5750\u6807\uFF0C\u4EE5 CSS \u50CF\u7D20\u5EA6\u91CF\u3002\u8DDF\u5728\u684C\u9762\u7AEF\u6D4F\u89C8\u5668\u91CC\u4E00\u6837\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u5BF9\u662F\u76EE\u524D\u4E3A\u6B62\u4E09\u4E2A\u5C5E\u6027\u5BF9\u91CC\u6700\u6709\u7528\u7684\u3002")
], -1);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_12,
    alt: "default"
  })
], -1);
const _hoisted_100 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "clientX/Y"),
  /* @__PURE__ */ createTextVNode("\u662F\u76F8\u5BF9\u4E8E\u89C6\u89C9\u89C6\u53E3\u7684\u5750\u6807\uFF0C\u4EE5 CSS \u50CF\u7D20\u5EA6\u91CF\u3002\u8FD9\u4E5F\u6709\u9053\u7406\uFF0C\u5C3D\u7BA1\u6211\u4EEC\u4E0D\u80FD\u5B8C\u5168\u786E\u5B9A\u8FD9\u6709\u4EC0\u4E48\u76CA\u5904\u3002")
], -1);
const _hoisted_101 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "screenX/Y"),
  /* @__PURE__ */ createTextVNode("\u662F\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u7684\u5750\u6807\uFF0C\u4EE5\u8BBE\u5907\u50CF\u7D20\u5EA6\u91CF\u3002\u5F53\u7136\uFF0C\u5B83\u4E0E"),
  /* @__PURE__ */ createBaseVNode("code", null, "clientX/Y"),
  /* @__PURE__ */ createTextVNode("\u5F15\u7528\u7684\u662F\u540C\u4E00\u4E2A\u503C\uFF0C\u800C\u4E14\u8BBE\u5907\u50CF\u7D20\u662F\u65E0\u7528\u7684\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u65E0\u9700\u5173\u5FC3"),
  /* @__PURE__ */ createBaseVNode("code", null, "screenX/Y"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u5B83\u8DDF\u5728\u684C\u9762\u7AEF\u4E0A\u4E00\u6837\u6CA1\u6709\u7528\u3002")
], -1);
const _hoisted_102 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_13,
    alt: "default"
  })
], -1);
const _hoisted_103 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container tip" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "\u4E8B\u4EF6\u5750\u6807"),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("\u95EE\u9898: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Opera Mobile \u5728\u8FD9\u4E2A\u4E09\u4E2A\u5C5E\u6027\u5BF9\u90FD\u7ED9\u4E86"),
          /* @__PURE__ */ createBaseVNode("code", null, "pageX/Y"),
          /* @__PURE__ */ createTextVNode("\u4E00\u6837\u7684\u503C\uFF0C\u4F46\u662F\u5F53\u4F60\u6EDA\u52A8\u5F88\u591A\u7684\u65F6\u5019\uFF0C\u4F1A\u51FA\u73B0\u95EE\u9898\u3002")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("\u5728 iPhone \u4E0A\uFF0CFirefox \u548C BlackBerry \u4E0A\u7684"),
          /* @__PURE__ */ createBaseVNode("code", null, "clientX/Y"),
          /* @__PURE__ */ createTextVNode("\u7B49\u540C\u4E8E"),
          /* @__PURE__ */ createBaseVNode("code", null, "pageX/Y"),
          /* @__PURE__ */ createTextVNode("\u3002")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("\u5728 Android \u548C MicroB \u4E0A\uFF0C"),
          /* @__PURE__ */ createBaseVNode("code", null, "screenX/Y"),
          /* @__PURE__ */ createTextVNode("\u7B49\u540C\u4E8E"),
          /* @__PURE__ */ createBaseVNode("code", null, "clientX/Y"),
          /* @__PURE__ */ createTextVNode("\uFF08\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4EE5 CSS \u50CF\u7D20\u5EA6\u91CF\uFF09")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("\u5728 Firefox \u4E0A\uFF0C"),
          /* @__PURE__ */ createBaseVNode("code", null, "screenX/Y"),
          /* @__PURE__ */ createTextVNode("\u662F\u9519\u8BEF\u7684\u3002")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("IE\u3001BlackBerry \u548C Obigo \u4E0D\u652F\u6301"),
          /* @__PURE__ */ createBaseVNode("code", null, "pageX/Y"),
          /* @__PURE__ */ createTextVNode("\u3002")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("\u5728 NetFront \u4E0A\uFF0C\u8FD9\u662F\u4E09\u4E2A\u5C5E\u6027\u5BF9\u90FD\u662F"),
          /* @__PURE__ */ createBaseVNode("code", null, "screenX/Y"),
          /* @__PURE__ */ createTextVNode("\u3002")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("\u5728 Obigo \u4E0A\uFF0C"),
          /* @__PURE__ */ createBaseVNode("code", null, "clientX/Y"),
          /* @__PURE__ */ createTextVNode("\u5C31\u662F"),
          /* @__PURE__ */ createBaseVNode("code", null, "screenX/Y"),
          /* @__PURE__ */ createTextVNode("\u3002")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Samsung WebKit \u603B\u662F\u8FD4\u56DE"),
          /* @__PURE__ */ createBaseVNode("code", null, "pageX/Y"),
          /* @__PURE__ */ createTextVNode("\u3002")
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, "\u6CA1\u6D4B\u8BD5\u7684: Opera Mini\u3001Bolt\u3001Skyfire")
  ])
], -1);
const _hoisted_104 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "meta-viewport",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#meta-viewport",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Meta viewport")
], -1);
const _hoisted_105 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6700\u540E\uFF0C\u6211\u4EEC\u6765\u8BA8\u8BBA\u4E0B"),
  /* @__PURE__ */ createBaseVNode("code", null, '<meta name="viewport" content="width=320">'),
  /* @__PURE__ */ createTextVNode("\uFF0C\u8FD9\u539F\u5148\u662F Apple \u7684\u6269\u5C55\uFF0C\u540C\u65F6\u88AB\u8BB8\u591A\u5176\u4ED6\u7684\u6D4F\u89C8\u5668\u590D\u5236\u4E86\u3002\u8FD9\u662F\u4E3A\u4E86\u8C03\u6574\u5E03\u5C40\u89C6\u53E3\u3002\u4E3A\u4E86\u660E\u767D\u8FD9\u4E3A\u4EC0\u4E48\u662F\u6709\u5FC5\u8981\u7684\uFF0C\u8BA9\u6211\u4EEC\u5F80\u56DE\u770B\u4E00\u6B65\u3002")
], -1);
const _hoisted_106 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5047\u8BBE\u4F60\u5F00\u53D1\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u9875\u9762\uFF0C\u4E14\u4E0D\u8BBE\u7F6E\u5143\u7D20\u7684\u5BBD\u5EA6\u3002\u73B0\u5728\u8FD9\u4E9B\u5143\u7D20\u62C9\u4F38\u4EE5\u5360\u636E\u5E03\u5C40\u89C6\u53E3"),
  /* @__PURE__ */ createBaseVNode("code", null, "100%"),
  /* @__PURE__ */ createTextVNode("\u7684\u5BBD\u5EA6\u3002\u7EDD\u5927\u591A\u6570\u6D4F\u89C8\u5668\u4F1A\u7F29\u5C0F\u4EE5\u5728\u5C4F\u5E55\u4E0A\u5B8C\u6574\u5C55\u793A\u6574\u4E2A\u5E03\u5C40\u89C6\u53E3\uFF0C\u6548\u679C\u50CF\u662F\u8FD9\u6837:")
], -1);
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_14,
    alt: "default"
  })
], -1);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode("p", null, "\u7528\u6237\u4F1A\u7ACB\u5373\u653E\u5927\uFF0C\u8FD9\u4F1A\u8D77\u4F5C\u7528\uFF0C\u4F46\u662F\u7EDD\u5927\u591A\u6570\u6D4F\u89C8\u5668\u4F1A\u4FDD\u6301\u5143\u7D20\u7684\u5BBD\u5EA6\u4E0D\u53D8\uFF0C\u8FD9\u5C06\u5BFC\u81F4\u6587\u5B57\u96BE\u4EE5\u9605\u8BFB\u3002", -1);
const _hoisted_109 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_15,
    alt: "default"
  })
], -1);
const _hoisted_110 = /* @__PURE__ */ createBaseVNode("p", null, "\uFF08\u5728\u8FD9\u91CC\uFF0CAndroid WebKit \u662F\u4E2A\u660E\u663E\u7684\u4F8B\u5916\uFF0C\u5B83\u5B9E\u9645\u4E0A\u51CF\u5C11\u4E86\u5305\u542B\u4E86\u6587\u5B57\u7684\u5143\u7D20\u7684\u5927\u5C0F\uFF0C\u4EE5\u4FBF\u53EF\u4EE5\u9002\u5E94\u5C4F\u5E55\u3002\u8FD9\u7EDD\u5BF9\u662F\u5F88\u5DE7\u5999\u7684\uFF0C\u5E76\u4E14\u6211\u8BA4\u4E3A\u5176\u4ED6\u6D4F\u89C8\u5668\u5E94\u8BE5\u590D\u5236\u8FD9\u79CD\u884C\u4E3A\u3002\u4E4B\u540E\u6211\u5C06\u5B8C\u6574\u5730\u5C06\u5176\u5199\u6210\u6587\u6863\u3002\uFF09", -1);
const _hoisted_111 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u73B0\u5728\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u8BBE\u7F6E"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "{width: 320px}"),
  /* @__PURE__ */ createTextVNode("\u3002\u73B0\u5728"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u6536\u7F29\u4E86\uFF0C\u6240\u6709\u5176\u4ED6\u7684\u5143\u7D20\uFF0C\u90FD\u5360\u636E\u4E86"),
  /* @__PURE__ */ createBaseVNode("code", null, "320px"),
  /* @__PURE__ */ createTextVNode("\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "100%"),
  /* @__PURE__ */ createTextVNode("\u3002\u8FD9\u5728\u7528\u6237\u653E\u5927\u65F6\u4F1A\u8D77\u4F5C\u7528\uFF0C\u4F46\u662F\u4E4B\u540E\uFF0C\u5F53\u7528\u6237\u7F29\u5C0F\u9875\u9762\u65F6\uFF0C\u9875\u9762\u7684\u5927\u90E8\u5206\u90FD\u5C06\u662F\u7A7A\u767D\u3002")
], -1);
const _hoisted_112 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_16,
    alt: "default"
  })
], -1);
const _hoisted_113 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CApple \u53D1\u660E\u4E86"),
  /* @__PURE__ */ createBaseVNode("code", null, "meta"),
  /* @__PURE__ */ createTextVNode("\u89C6\u53E3\u6807\u7B7E\u3002\u5F53\u4F60\u8BBE\u7F6E"),
  /* @__PURE__ */ createBaseVNode("code", null, '<meta name="viewport" content="width=320">'),
  /* @__PURE__ */ createTextVNode("\u65F6\uFF0C\u4F60\u5C31\u5C06\u5E03\u5C40\u89C6\u53E3\u8BBE\u7F6E\u4E3A\u4E86"),
  /* @__PURE__ */ createBaseVNode("code", null, "320px"),
  /* @__PURE__ */ createTextVNode("\u3002\u73B0\u5728\uFF0C\u9875\u9762\u7684\u521D\u59CB\u72B6\u6001\u4E5F\u662F\u6B63\u786E\u7684\u4E86\u3002")
], -1);
const _hoisted_114 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_17,
    alt: "default"
  })
], -1);
const _hoisted_115 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u4F60\u53EF\u4EE5\u5C06\u5E03\u5C40\u89C6\u53E3\u8BBE\u7F6E\u4E3A\u4EFB\u4F55\u4F60\u60F3\u8981\u7684\u5C3A\u5BF8\uFF0C\u5305\u62EC"),
  /* @__PURE__ */ createBaseVNode("code", null, "device-width"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u8FD9\u5C06\u4F7F\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "screen.width"),
  /* @__PURE__ */ createTextVNode("\uFF08\u4EE5\u8BBE\u5907\u50CF\u7D20\uFF09\u7684\u5927\u5C0F\u6765\u76F8\u5E94\u5730\u8C03\u6574\u5E03\u5C40\u89C6\u53E3\u3002")
], -1);
const _hoisted_116 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6709\u65F6\u6B63\u89C4\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "screen.width"),
  /* @__PURE__ */ createTextVNode("\u4E5F\u6CA1\u4EC0\u4E48\u9053\u7406\uFF0C\u56E0\u4E3A\u50CF\u7D20\u6570\u91CF\u592A\u9AD8\u4E86\u3002\u6BD4\u5982\uFF0CNexus One \u7684\u6B63\u89C4\u5BBD\u5EA6\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "480px"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u4F46\u662F\u8C37\u6B4C\u5DE5\u7A0B\u5E08\u8BA4\u4E3A\u5F53\u4F7F\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "device-width"),
  /* @__PURE__ */ createTextVNode("\u5C06\u5E03\u5C40\u89C6\u53E3\u7684\u5BBD\u5EA6\u8BBE\u7F6E\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "480px"),
  /* @__PURE__ */ createTextVNode("\u65F6\uFF0C\u8FD9\u4E2A\u8BBE\u7F6E\u7684\u503C\u592A\u9AD8\u4E86\u3002\u4ED6\u4EEC\u5C06\u5176\u6536\u7F29\u5230"),
  /* @__PURE__ */ createBaseVNode("code", null, "2/3"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u56E0\u6B64"),
  /* @__PURE__ */ createBaseVNode("code", null, "device-width"),
  /* @__PURE__ */ createTextVNode("\u7ED9\u4E86"),
  /* @__PURE__ */ createBaseVNode("code", null, "320px"),
  /* @__PURE__ */ createTextVNode("\u7684\u5BBD\u5EA6\uFF0C\u4E0E\u5728 iPhone \u4E0A\u4E00\u6837\u3002")
], -1);
const _hoisted_117 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u636E\u8BF4\uFF0C\u65B0\u7684 iPhone \u5C06\u6709\u4E00\u4E2A\u66F4\u5927\u7684\u50CF\u7D20\u6570\u91CF\uFF08\u4F46\u6CA1\u5FC5\u8981\u7B49\u540C\u4E8E\u4E00\u4E2A\u66F4\u5927\u7684\u5C4F\u5E55\uFF09\uFF0C\u82E5\u662F iPhone \u590D\u5236\u4E86\u8FD9\u4E2A\u884C\u4E3A\uFF0C\u6211\u4E5F\u4E0D\u4F1A\u5403\u60CA\u3002\u4E5F\u8BB8\u6700\u540E\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "device-width"),
  /* @__PURE__ */ createTextVNode("\u5C06\u8FD1\u610F\u5473\u7740"),
  /* @__PURE__ */ createBaseVNode("code", null, "320px"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_118 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u76F8\u5173\u7814\u7A76",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u76F8\u5173\u7814\u7A76",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u76F8\u5173\u7814\u7A76")
], -1);
const _hoisted_119 = /* @__PURE__ */ createBaseVNode("p", null, "\u4E4B\u540E\uFF0C\u6709\u51E0\u9879\u76F8\u5173\u7684\u4E3B\u9898\u9700\u8981\u7814\u7A76:", -1);
const _hoisted_120 = /* @__PURE__ */ createBaseVNode("code", null, "position: fixed", -1);
const _hoisted_121 = /* @__PURE__ */ createTextVNode("\u3002\u4E00\u4E2A\u56FA\u5B9A\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C\u662F\u76F8\u5BF9\u4E8E\u89C6\u53E3\u5B9A\u4F4D\u7684\uFF0C\u4F46\u662F\u76F8\u5BF9\u4E8E\u54EA\u4E2A\u89C6\u53E3\u5462\uFF1F\u6211\u540C\u65F6\u4E5F\u505A\u4E86");
const _hoisted_122 = {
  href: "https://www.quirksmode.org/blog/archives/2010/12/the_fifth_posit.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_123 = /* @__PURE__ */ createTextVNode("\u8FD9\u4E2A\u7814\u7A76");
const _hoisted_124 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_125 = /* @__PURE__ */ createStaticVNode("<li>\u5176\u4ED6\u7684\u5A92\u4F53\u67E5\u8BE2: <code>dpi</code>\u3001<code>orientation</code>\u3001<code>aspect-ratio</code>\u3002\u5C24\u5176\u662F<code>dpi</code>\uFF0C\u95EE\u9898\u6700\u591A\uFF0C\u4E0D\u4EC5\u662F\u56E0\u4E3A\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u5448\u62A5<code>96dpi</code>\uFF08\u5C3D\u7BA1\u901A\u5E38\u4E0D\u662F\uFF09\uFF0C\u4E5F\u662F\u56E0\u4E3A\u6211\u4E0D\u80FD\u5B8C\u5168\u786E\u8BA4\u5BF9 Web \u5F00\u53D1\u8005\u6765\u8BF4\u54EA\u4E2A\u503C\u66F4\u6709\u7528\u3002</li><li>\u5F53\u4E00\u4E2A\u5143\u7D20\u6BD4\u5E03\u5C40\u89C6\u53E3\u6216<code>html</code>\u5143\u7D20\u8FD8\u8981\u5BBD\uFF0C\u5C06\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F\u6BD4\u5982\u6211\u5F80\u6D4B\u8BD5\u9875\u9762\u91CC\u63D2\u5165\u4E00\u4E2A<code>width: 1500px</code>\u7684\u5143\u7D20\uFF1F\u8FD9\u4E2A\u5143\u7D20\u5C06\u6EA2\u51FA<code>html</code>\u5143\u7D20\uFF08<code>overflow: visible</code>\uFF09\uFF0C\u4F46\u662F\u8FD9\u4E5F\u610F\u5473\u7740\u5B9E\u9645\u7684\u89C6\u53E3\u53EF\u4EE5\u6BD4\u5E03\u5C40\u89C6\u53E3\u8FD8\u8981\u5BBD\u3002\u6B64\u5916\uFF0C\u5F53\u8FD9\u53D1\u751F\u65F6\uFF0C\u4E00\u4E2A\u8001\u7684 Android\uFF08Nexus One\uFF09\u5C06\u6269\u5927<code>html</code>\u5143\u7D20\u3002\u8FD9\u771F\u7684\u662F\u4E2A\u597D\u6CE8\u610F\u5417\uFF1F</li>", 2);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u7684\u95EE\u9898" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4E24\u79CD\u89C6\u53E3" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u7F29\u653E" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u7406\u89E3\u5E03\u5C40\u89C6\u53E3" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6D4B\u91CF\u5E03\u5C40\u89C6\u53E3" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6D4B\u91CF\u89C6\u89C9\u89C6\u53E3" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5C4F\u5E55" }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u7F29\u653E\u5C42\u7EA7" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6EDA\u52A8\u504F\u79FB" }, {
            default: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#html-\u5143\u7D20" }, {
            default: withCtx(() => [
              _hoisted_12
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5A92\u4F53\u67E5\u8BE2" }, {
            default: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4E8B\u4EF6\u5750\u6807" }, {
            default: withCtx(() => [
              _hoisted_14
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#meta-viewport" }, {
            default: withCtx(() => [
              _hoisted_15
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u76F8\u5173\u7814\u7A76" }, {
            default: withCtx(() => [
              _hoisted_16
            ]),
            _: 1
          })
        ])
      ])
    ]),
    createBaseVNode("p", null, [
      _hoisted_17,
      createBaseVNode("a", _hoisted_18, [
        _hoisted_19,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_20,
    _hoisted_21,
    _hoisted_22,
    _hoisted_23,
    _hoisted_24,
    _hoisted_25,
    _hoisted_26,
    _hoisted_27,
    _hoisted_28,
    _hoisted_29,
    _hoisted_30,
    _hoisted_31,
    createBaseVNode("p", null, [
      _hoisted_32,
      createBaseVNode("a", _hoisted_33, [
        _hoisted_34,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_35
    ]),
    _hoisted_36,
    createBaseVNode("p", null, [
      _hoisted_37,
      createBaseVNode("a", _hoisted_38, [
        _hoisted_39,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_40
    ]),
    _hoisted_41,
    _hoisted_42,
    _hoisted_43,
    _hoisted_44,
    _hoisted_45,
    _hoisted_46,
    _hoisted_47,
    _hoisted_48,
    _hoisted_49,
    _hoisted_50,
    _hoisted_51,
    _hoisted_52,
    _hoisted_53,
    _hoisted_54,
    _hoisted_55,
    _hoisted_56,
    _hoisted_57,
    _hoisted_58,
    _hoisted_59,
    _hoisted_60,
    _hoisted_61,
    _hoisted_62,
    _hoisted_63,
    _hoisted_64,
    _hoisted_65,
    _hoisted_66,
    _hoisted_67,
    _hoisted_68,
    _hoisted_69,
    _hoisted_70,
    _hoisted_71,
    _hoisted_72,
    _hoisted_73,
    _hoisted_74,
    _hoisted_75,
    _hoisted_76,
    _hoisted_77,
    _hoisted_78,
    _hoisted_79,
    _hoisted_80,
    _hoisted_81,
    _hoisted_82,
    _hoisted_83,
    _hoisted_84,
    _hoisted_85,
    _hoisted_86,
    _hoisted_87,
    _hoisted_88,
    _hoisted_89,
    _hoisted_90,
    _hoisted_91,
    _hoisted_92,
    _hoisted_93,
    _hoisted_94,
    _hoisted_95,
    _hoisted_96,
    _hoisted_97,
    _hoisted_98,
    _hoisted_99,
    _hoisted_100,
    _hoisted_101,
    _hoisted_102,
    _hoisted_103,
    _hoisted_104,
    _hoisted_105,
    _hoisted_106,
    _hoisted_107,
    _hoisted_108,
    _hoisted_109,
    _hoisted_110,
    _hoisted_111,
    _hoisted_112,
    _hoisted_113,
    _hoisted_114,
    _hoisted_115,
    _hoisted_116,
    _hoisted_117,
    _hoisted_118,
    _hoisted_119,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_120,
        _hoisted_121,
        createBaseVNode("a", _hoisted_122, [
          _hoisted_123,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_124
      ]),
      _hoisted_125
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var aTaleOfViewportsTwo_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { aTaleOfViewportsTwo_html as default };
