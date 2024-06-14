import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
var _imports_0 = "data:image/gif;base64,R0lGODlhzADMAJEAAICnzAAAAP///wAAACH5BAAAAAAALAAAAADMAMwAAAL/jI+py+0Po5y02ouz3rz7D4biSJbmiabqygbAC8fyTNf2jec6vOz+DwzuGsKi8ZjrIZdMI7EJjSYV0qo19rxqocqtF5n9ioPdsXnIOKt15bVbFn7LAe25O25f1/NnPN+89yfmJ/gVWLhFiKh1uGil6FjVGBkFSclFdellqbk02QmWBnr1OVrEaSpUmgqEyvqz+ooWKzuVUNvkiotDu1uj6/ubGXwqSqw6fNxqrAyb3Dz7DG2LMO3cC43dDDytrcydLW1tA74tPk5T/n2ODsfcLnwLf6N+7G3/Pu8ur5+e3//iHrF6A9npIxhMYMJ/ABX6QvjQ4DyIuxxWZNjPIi6K/xslwuNYS2NIjAc9tgMpS2RKkhNNokP5SmVMlh9djoPJSmZOmidtWsOZSmdQni99diN602g4oaaYjgLaVKk5p6CodoL6VOo6q5q4XsJaVSs+r5TIRgJ7VWxBs47YLkLbVe1Ct4joFoL7VW5Eu4L4/sFbVu9Fv3wI5wF8VnBHw3YYz0HcVvFIx3Iov4H8VvJKy3c0z+Ssx/NO0GpI90H6U/RQ04BUR2U9BvYg1Ef5AcRCe2m12/tcZ7XNm07uqbuDBxy+tbhxzHV9h5VtyHla6Jukx6WeyHpe7Iy0B+ZOynti8I/ERyYvyXxm9FLYV0I+Vnlw5nfVN3ePCThv+n3t1/9vAWCAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiKGAxvHgX3/45dLhX/CtJd9+I85V4m38iaifiifulWJDLw4WY0YzLlZjSR8ysaMnN06WY0s9htKijEMecaQTP24WZE1JFlOkjU8iE6WOIRZ25WFLftZkT1OSkWVjW47WZVFfLlOlkGE+tmZlY65WZlJnXhNnanP6cGc0aTpZZ21tXvZnZ3myEWhog1JzwIbHHcpLoaW9+Vqfuu3ppaTEUWqmpclhKqem8XFqp6ckgupnooquiCWpk4qKoqkboqqlqpeyCqOry0H6G600yrqpAYoKxyg9jp4WLDnDtlZsPLr/4sjrp76eiutzywLZ7KjPvhrtdNMyWW2r196arD/d1rotl7bOl+115ZI57q7fohvuDPH21i6z75o4L271UrsunOfie2xsAc+WL4f7cttvpP+6WPCiCed6sLn3MjxwdBGz+7C0CxtZcXUX+5uxthtL2XF2HyscsrojW3kyxBNz3LLGL5Mcs8gzs5zydjl/V3J3Nau883hBn9dzeD/rfDTPK6uZtNBL89k00U9XGvV6Q1td9X1Xa531f1t73bWHX4sdNotjm112qmernXasa7vdtphxs9kwsG/LXXR5c7tZd9/pIn0z03fTPTjfeae3N6B+Jy7o4e05/l6Gkk9OeeWWDl+Oeeaab+6BAJx/TmABADs=";
var _imports_1 = "data:image/gif;base64,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";
var _imports_2 = "data:image/gif;base64,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";
var _imports_3 = "/assets/desktop_screen.23f58aff.jpg";
var _imports_4 = "/assets/desktop_inner.65753533.jpg";
var _imports_5 = "/assets/desktop_inner_zoomed.d0fb2d3e.jpg";
var _imports_6 = "/assets/desktop_page.c8f61af3.jpg";
var _imports_7 = "/assets/desktop_page_zoomed.11a67e0f.jpg";
var _imports_8 = "/assets/desktop_htmlbehaviour.9d8be787.jpg";
var _imports_9 = "/assets/desktop_100percent.4d9117ef.jpg";
var _imports_10 = "/assets/desktop_documentwidth.03f7e049.jpg";
var _imports_11 = "/assets/desktop_client.c8964a2b.jpg";
var _imports_12 = "/assets/desktop_client_smallpage.4edcbd0c.jpg";
var _imports_13 = "/assets/desktop_offset.37af98fb.jpg";
var _imports_14 = "/assets/desktop_offset_smallpage.54a3acdc.jpg";
var _imports_15 = "/assets/desktop_pageXY.aae5af44.jpg";
var _imports_16 = "/assets/desktop_clientXY.487b7d29.jpg";
var _imports_17 = "/assets/desktop_screenXY.86b67fd5.jpg";
var _imports_18 = "/assets/desktop_mediaqueries.482c0d18.jpg";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "a-tale-of-two-viewports-\u2014-part-one",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#a-tale-of-two-viewports-\u2014-part-one",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" A tale of two viewports \u2014 part one")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u8BBE\u5907\u50CF\u7D20\u548C CSS \u50CF\u7D20");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("100% \u7F29\u653E");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5C4F\u5E55\u5C3A\u5BF8\uFF08Screen size\uFF09");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u7A97\u53E3\u5C3A\u5BF8\uFF08Window size\uFF09");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u6EDA\u52A8\u504F\u79FB\uFF08Scrolling offset\uFF09");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u89C6\u53E3");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u540E\u679C");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u6587\u6863\u5BBD\u5EA6");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u6D4B\u91CF\u89C6\u53E3");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u4E24\u4E2A\u5C5E\u6027\u5BF9");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u6D4B\u91CF html \u5143\u7D20");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u4E8B\u4EF6\u5750\u6807");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("pageX/Y\u3001clientX/Y\u3001screenX/Y \u793A\u610F");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("pageX/Y");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("clientX/Y");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("screenX/Y");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("\u603B\u7ED3");
const _hoisted_20 = /* @__PURE__ */ createTextVNode("\u5A92\u4F53\u67E5\u8BE2");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("\u603B\u7ED3");
const _hoisted_22 = /* @__PURE__ */ createTextVNode("\u7FFB\u8BD1\u81EA: ");
const _hoisted_23 = {
  href: "https://www.quirksmode.org/mobile/viewports.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_24 = /* @__PURE__ */ createTextVNode("PPK - A tale of two viewports \u2014 part one");
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5728\u8FD9\u4E2A\u8FF7\u4F60\u7CFB\u5217\u6587\u7AE0\u91CC\uFF0C\u6211\u5C06\u89E3\u91CA\u89C6\u53E3\u4EE5\u53CA\u5404\u79CD\u91CD\u8981\u5143\u7D20\u7684\u5BBD\u5EA6\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF0C\u6BD4\u5982"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u3001"),
  /* @__PURE__ */ createBaseVNode("code", null, "window"),
  /* @__PURE__ */ createTextVNode("\u548C"),
  /* @__PURE__ */ createBaseVNode("code", null, "screen"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("p", null, "\u8FD9\u4E00\u7BC7\u662F\u5173\u4E8E\u684C\u9762\u7AEF\u6D4F\u89C8\u5668\u7684\uFF0C\u4E14\u5176\u552F\u4E00\u7684\u76EE\u7684\u5C31\u662F\u4E3A\u4E4B\u540E\u5173\u4E8E\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u7684\u7C7B\u4F3C\u8BA8\u8BBA\u505A\u51FA\u94FA\u57AB\u3002\u7EDD\u5927\u591A\u6570\u5F00\u53D1\u8005\u5DF2\u7ECF\u76F4\u89C9\u4E0A\u7406\u89E3\u7EDD\u5927\u591A\u6570\u7684\u684C\u9762\u6982\u5FF5\u3002\u5728\u79FB\u52A8\u7AEF\u6211\u4EEC\u4F1A\u6709\u76F8\u540C\u7684\u6982\u5FF5\uFF0C\u4F46\u662F\u66F4\u52A0\u590D\u6742\uFF0C\u56E0\u6B64\u5148\u8BA8\u8BBA\u8FD9\u4E9B\u6BCF\u4E2A\u4EBA\u90FD\u5DF2\u7ECF\u77E5\u9053\u7684\u672F\u8BED\uFF0C\u5C06\u6781\u5927\u5730\u5E2E\u52A9\u4F60\u7406\u89E3\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u3002", -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u8BBE\u5907\u50CF\u7D20\u548C-css-\u50CF\u7D20",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8BBE\u5907\u50CF\u7D20\u548C-css-\u50CF\u7D20",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8BBE\u5907\u50CF\u7D20\u548C CSS \u50CF\u7D20")
], -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u4F60\u9700\u8981\u7406\u89E3\u7684\u7B2C\u4E00\u4E2A\u6982\u5FF5\u662F CSS \u50CF\u7D20\uFF08"),
  /* @__PURE__ */ createBaseVNode("code", null, "CSS pixels"),
  /* @__PURE__ */ createTextVNode("\uFF09\uFF0C\u4EE5\u53CA\u5B83\u4E0E\u8BBE\u5907\u50CF\u7D20\uFF08"),
  /* @__PURE__ */ createBaseVNode("code", null, "device pixels"),
  /* @__PURE__ */ createTextVNode("\uFF09\u7684\u533A\u522B\u3002")
], -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u8BBE\u5907\u50CF\u7D20\u662F\u6211\u4EEC\u76F4\u89C9\u4E0A\u8BA4\u4E3A\u662F\u201C\u6B63\u786E\u201D\u7684\u4E00\u7C7B\u50CF\u7D20\u3002\u8BBE\u5907\u50CF\u7D20\u7ED9\u51FA\u4E86\u4F60\u4F7F\u7528\u7684\u4EFB\u4E00\u6B3E\u8BBE\u5907\u7684\u6B63\u89C4\u5206\u8FA8\u7387\uFF0C\u4E14\uFF08\u901A\u5E38\uFF09\u53EF\u4EE5\u901A\u8FC7"),
  /* @__PURE__ */ createBaseVNode("code", null, "screen.width/height"),
  /* @__PURE__ */ createTextVNode("\u8BFB\u53D6\u5230\u3002")
], -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u82E5\u662F\u4F60\u7ED9\u5B9A\u67D0\u5143\u7D20\u7684\u5BBD\u5EA6\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "width: 128px"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u4E14\u4F60\u7684\u663E\u793A\u5668\u7684\u5BBD\u5EA6\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "1024px"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u82E5\u662F\u4F60\u6700\u5927\u9650\u5EA6\u5730\u5229\u7528\u4F60\u7684\u6D4F\u89C8\u5668\u5C4F\u5E55\uFF0C\u8FD9\u4E2A\u5143\u7D20\u53EF\u4EE5\u5728\u663E\u793A\u5668\u4E0A\u5E73\u94FA\u516B\u6B21\uFF08\u8BA9\u6211\u4EEC\u5148\u7C97\u7565\u5730\u5FFD\u7565\u90A3\u4E9B\u68D8\u624B\u7684\u90E8\u5206\uFF09\u3002")
], -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u82E5\u662F\u7528\u6237\u8FDB\u884C\u7F29\u653E\uFF0C\u8FD9\u4E2A\u8BA1\u7B97\u5C06\u53D1\u751F\u6539\u53D8\u3002\u82E5\u662F\u7528\u6237\u653E\u5927\u5230"),
  /* @__PURE__ */ createBaseVNode("code", null, "200%"),
  /* @__PURE__ */ createTextVNode("\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "width: 128px"),
  /* @__PURE__ */ createTextVNode("\u7684\u5143\u7D20\u5C06\u53EA\u80FD\u5728"),
  /* @__PURE__ */ createBaseVNode("code", null, "1024px"),
  /* @__PURE__ */ createTextVNode("\u5BBD\u7684\u663E\u793A\u5668\u4E0A\u5E73\u94FA\u56DB\u6B21\u3002")
], -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E0A\u5B9E\u73B0\u7684\u7F29\u653E\uFF0C\u4EC5\u4EC5\u662F\u62C9\u4F38\u50CF\u7D20\u3002\u8FD9\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5143\u7D20\u7684\u5BBD\u5EA6\u5E76\u6CA1\u6709\u4ECE"),
  /* @__PURE__ */ createBaseVNode("code", null, "128px"),
  /* @__PURE__ */ createTextVNode("\u6539\u53D8\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "256px"),
  /* @__PURE__ */ createTextVNode("\uFF1B\u53D6\u800C\u4EE3\u4E4B\u7684\u662F\uFF0C\u5B9E\u9645\u50CF\u7D20\u5728\u5C3A\u5BF8\u4E0A\u589E\u52A0\u4E86\u4E00\u500D\u3002\u6B63\u89C4\u5730\u8BF4\uFF0C\u5143\u7D20\u7684\u5BBD\u5EA6\u4ECD\u7136\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "128"),
  /* @__PURE__ */ createTextVNode("CSS \u50CF\u7D20\uFF0C\u5373\u4F7F\u5B83\u5360\u636E\u4E86"),
  /* @__PURE__ */ createBaseVNode("code", null, "256"),
  /* @__PURE__ */ createTextVNode("\u4E2A\u8BBE\u5907\u50CF\u7D20\u7684\u7A7A\u95F4\u3002")
], -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6362\u53E5\u8BDD\u8BF4\uFF0C\u653E\u5927\u5230"),
  /* @__PURE__ */ createBaseVNode("code", null, "200%"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u8BA9\u4E00\u4E2A CSS \u50CF\u7D20\u589E\u957F\u5230\u4E00\u4E2A\u8BBE\u5907\u50CF\u7D20\u7684\u56DB\u500D\u5927\u5C0F\u3002\uFF08\u5BBD\u5EA6\u589E\u957F\u5230\u4E8C\u500D\uFF0C\u9AD8\u5EA6\u589E\u957F\u5230\u4E8C\u500D\uFF0C\u56E0\u6B64\u603B\u7684\u589E\u957F\u5230\u56DB\u500D\uFF09")
], -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u4EE5\u4E0B\u7684\u8FD9\u4E9B\u56FE\u7247\u53EF\u4EE5\u66F4\u597D\u5730\u8BF4\u660E\u8FD9\u4E2A\u6982\u5FF5\u3002\u5728\u7F29\u653E\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "100%"),
  /* @__PURE__ */ createTextVNode("\u65F6\uFF0C\u6709\u56DB\u4E2A\u50CF\u7D20\u3002\u8FD9\u91CC\u6CA1\u4EC0\u4E48\u53EF\u8BF4\u7684\uFF0CCSS \u50CF\u7D20\u5B8C\u5168\u4E0E\u8BBE\u5907\u50CF\u7D20\u91CD\u53E0\u3002")
], -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "default"
  })
], -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("p", null, "\u73B0\u5728\uFF0C\u6211\u4EEC\u6765\u7F29\u5C0F\u3002CSS \u50CF\u7D20\u5F00\u59CB\u6536\u7F29\uFF0C\u8FD9\u610F\u5473\u7740\u4E00\u4E2A\u8BBE\u5907\u50CF\u7D20\u73B0\u5728\u4E0E\u591A\u4E2A CSS \u50CF\u7D20\u91CD\u53E0\u3002", -1);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_1,
    alt: "default"
  })
], -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("p", null, "\u82E5\u662F\u4F60\u653E\u5927\uFF0C\u5219\u6B63\u597D\u76F8\u53CD\u3002CSS \u50CF\u7D20\u5F00\u59CB\u589E\u957F\uFF0C\u73B0\u5728\u4E00\u4E2A CSS \u50CF\u7D20\u4E0E\u591A\u4E2A\u8BBE\u5907\u50CF\u7D20\u91CD\u53E0\u3002", -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_2,
    alt: "default"
  })
], -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("p", null, "\u8FD9\u91CC\u7684\b\u8981\u70B9\u662F\uFF0C\b\u4F60\u53EA\u5173\u6CE8 CSS \u50CF\u7D20\uFF0C\u56E0\u4E3A\u5B83\u51B3\u5B9A\u4F60\u7684\u6837\u5F0F\u8868\u5982\u4F55\u6E32\u67D3\u3002", -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("p", null, "\u8BBE\u5907\u50CF\u7D20\u51E0\u4E4E\u5BF9\u4F60\b\u5B8C\u5168\u65E0\u7528\u3002\u4F46\u5BF9\u7528\u6237\u6765\u8BF4\uFF0C\u7528\u6237\u53EF\u4EE5\u7F29\u653E\u7F51\u9875\uFF0C\u76F4\u5230\u4ED6\u8BA4\u4E3A\u9605\u8BFB\u5730\u66F4\u52A0\u8212\u670D\u3002\u800C\u4E14\uFF0C\u7F29\u653E\u7684\u7A0B\u5EA6\u4E5F\u4E0E\u4F60\u65E0\u5173\u3002\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u5730\u786E\u4FDD\u4F60\u7684 CSS \u5E03\u5C40\u662F\u62C9\u4F38\u8FD8\u662F\u6324\u538B\u3002", -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "_100-\u7F29\u653E",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#_100-\u7F29\u653E",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" 100% \u7F29\u653E")
], -1);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6211\u5F00\u59CB\u793A\u4F8B\u65F6\uFF0C\u662F\u5047\u8BBE\u7F29\u653E\u7A0B\u5EA6\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "100%"),
  /* @__PURE__ */ createTextVNode("\u3002\u73B0\u5728\u5B9A\u4E49\u7684\u7565\u5FAE\u4E25\u683C\u4E00\u4E9B:")
], -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("blockquote", null, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode("\u5728\u7F29\u653E\u7A0B\u5EA6\u4E3A"),
    /* @__PURE__ */ createBaseVNode("code", null, "100%"),
    /* @__PURE__ */ createTextVNode("\u65F6\uFF0C\u4E00\u4E2A CSS \u50CF\u7D20\u5B8C\u5168\u7B49\u4E8E\u4E00\u4E2A\u8BBE\u5907\u50CF\u7D20\u3002")
  ])
], -1);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "100%"),
  /* @__PURE__ */ createTextVNode("\u7F29\u653E\u7684\u6982\u5FF5\u5728\u4E4B\u540E\u7684\u8BF4\u660E\u91CC\b\u7279\u522B\u91CD\u8981\uFF0C\u4F46\u662F\u4F60\u4E0D\u5FC5\u5728\u65E5\u5E38\u5DE5\u4F5C\u91CC\u8FC7\u5206\b\u62C5\u5FC3\u3002\u5728\u684C\u9762\u7AEF\u6D4F\u89C8\u5668\u91CC\uFF0C\u4F60\u53EF\u4EE5\u5E7F\u6CDB\u5730\u5728"),
  /* @__PURE__ */ createBaseVNode("code", null, "100%"),
  /* @__PURE__ */ createTextVNode("\u7F29\u653E\u65F6\u6D4B\u8BD5\u4F60\u7684\u7F51\u9875\uFF0C\u4F46\u5373\u4F7F\u7528\u6237\u8FDB\u884C\u7F29\u653E\uFF0C\bCSS \u50CF\u7D20\u7684\u9B54\u6CD5\u5C06\u786E\u4FDD\u4F60\u7684\u5E03\u5C40\u4ECD\u7136\u4FDD\u6301\u4E86\u76F8\u540C\u7684\u6BD4\u4F8B\u3002")
], -1);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u5C4F\u5E55\u5C3A\u5BF8-screen-size",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5C4F\u5E55\u5C3A\u5BF8-screen-size",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5C4F\u5E55\u5C3A\u5BF8\uFF08Screen size\uFF09")
], -1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u8BA9\u6211\u4EEC\u770B\u4E00\u4E9B\u5B9E\u9645\u7684\u6D4B\u91CF\u3002\u6211\u4EEC\u5C06\u4ECE"),
  /* @__PURE__ */ createBaseVNode("code", null, "screen.width"),
  /* @__PURE__ */ createTextVNode("\u548C"),
  /* @__PURE__ */ createBaseVNode("code", null, "screen.height"),
  /* @__PURE__ */ createTextVNode("\u5F00\u59CB\u3002\u5B83\u4EEC\u5305\u542B\u4E86\u7528\u6237\u5C4F\u5E55\u7684\u603B\u5BBD\u5EA6\u548C\u603B\u9AD8\u5EA6\u3002\u8FD9\u4E9B\u5C3A\u5BF8\u90FD\u662F\u4EE5\u8BBE\u5907\u50CF\u7D20\u6765\u5EA6\u91CF\u7684\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u4ECE\u4E0D\u4F1A\u6539\u53D8\uFF0C\u5B83\u4EEC\u662F\u663E\u793A\u5668\u7684\u7279\u6027\uFF0C\u800C\u4E0D\u662F\u6D4F\u89C8\u5668\u7684\u3002")
], -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_3,
    alt: "default"
  })
], -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("p", null, "\u6709\u8DA3\uFF01\u4F46\u662F\u6211\u4EEC\u53EF\u4EE5\u505A\u4E9B\u4EC0\u4E48\u5462\uFF1F", -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("p", null, "\u57FA\u672C\u4E0A\uFF0C\u6CA1\u6709\u3002\u7528\u6237\u663E\u793A\u5668\u7684\u5C3A\u5BF8\u5BF9\u6211\u4EEC\u4E0D\u91CD\u8981\uFF0C\u9664\u4E86\u4F60\u60F3\u8981\u5B83\u4EE5\u7528\u4E8E\u7EDF\u8BA1\u8D44\u6599\u6570\u636E\u5E93\u3002", -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container tip" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "screen.width/hieght"),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, "\u8868\u793A\u7528\u6237\u5C4F\u5E55\u7684\u603B\u5C3A\u5BF8"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u4EE5\u8BBE\u5907\u50CF\u7D20\u6765\u5EA6\u91CF"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u6D4F\u89C8\u5668\u9519\u8BEF: IE8 \u5728 IE7 \u548C IE 8 \u6A21\u5F0F\u4E0B\uFF0C\u4F1A\u7528 CSS \u50CF\u7D20\u6765\u5EA6\u91CF")
  ])
], -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u7A97\u53E3\u5C3A\u5BF8-window-size",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7A97\u53E3\u5C3A\u5BF8-window-size",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7A97\u53E3\u5C3A\u5BF8\uFF08Window size\uFF09")
], -1);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5B9E\u9645\u4E0A\uFF0C\u4F60\u60F3\u77E5\u9053\u7684\u662F\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5185\u90E8\u5C3A\u5BF8\u3002\u8FD9\u5C06\u51C6\u786E\u5730\u544A\u8BC9\u4F60\uFF0C\u7528\u6237\u5F53\u524D\u8FD8\u6709\u591A\u5C11\u53EF\u7528\u7684\u7A7A\u95F4\u7528\u4E8E CSS \u5E03\u5C40\u3002\u4F60\u53EF\u4EE5\u5728"),
  /* @__PURE__ */ createBaseVNode("code", null, "window.innerWidth"),
  /* @__PURE__ */ createTextVNode("\u548C"),
  /* @__PURE__ */ createBaseVNode("code", null, "window.innerHeight"),
  /* @__PURE__ */ createTextVNode("\u5C5E\u6027\u91CC\u627E\u5230\u8FD9\u4E9B\u5C3A\u5BF8\u3002")
], -1);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_4,
    alt: "default"
  })
], -1);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u663E\u7136\uFF0C\u7A97\u53E3\u7684\u5185\u90E8\u5BBD\u5EA6\u662F\u7528 CSS \u50CF\u7D20\u5EA6\u91CF\u7684\u3002\u4F60\u9700\u8981\u77E5\u9053\uFF0C\u4F60\u53EF\u4EE5\u5C06\u4F60\u5E03\u5C40\u7684\u54EA\u4E9B\u90E8\u5206\u6324\u538B\u8FDB\u6D4F\u89C8\u5668\u7A97\u53E3\u91CC\uFF0C\u800C\u4E14\u90A3\u90E8\u5206\u4F1A\u968F\u7740\u7528\u6237\u653E\u5927\u800C\u53D8\u5F97\u66F4\u5C11\u3002\u56E0\u6B64\uFF0C\u82E5\u662F\u7528\u6237\u653E\u5927\uFF0C\u7A97\u53E3\u91CC\u7684\u53EF\u7528\u7A7A\u95F4\u5C06\u53D8\u5F97\u66F4\u5C11\uFF0C\u4E14"),
  /* @__PURE__ */ createBaseVNode("code", null, "window.innerWidth/innerHeight"),
  /* @__PURE__ */ createTextVNode("\u5C06\u53CD\u6620\u51FA\u8FD9\u4E2A\u51CF\u5C11\u3002")
], -1);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\uFF08Opera \u662F\u4E2A\u4F8B\u5916\uFF0C\u5B83\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "window.innerWidth/innerHeight"),
  /* @__PURE__ */ createTextVNode("\u4E0D\u4F1A\u968F\u7740\u7528\u6237\u7684\u653E\u5927\u800C\u51CF\u5C0F\uFF0C\u5B83\u4EEC\u662F\u4EE5\u8BBE\u5907\u50CF\u7D20\u6765\u5EA6\u91CF\u7684\u3002\u8FD9\u5728\u684C\u9762\u7AEF\u6D4F\u89C8\u5668\u4E0A\u662F\u5F88\u70E6\u4EBA\u7684\uFF0C\u4F46\u662F\u5728\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u4E0A\u662F\u81F4\u547D\u7684\uFF0C\u6211\u4EEC\u5C06\u5728\u4E4B\u540E\u770B\u5230\u3002\uFF09")
], -1);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_5,
    alt: "default"
  })
], -1);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("p", null, "\u6CE8\u610F\uFF0C\u6D4B\u91CF\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u90FD\u5305\u542B\u6EDA\u52A8\u6761\uFF0C\u5B83\u4EEC\u4E5F\u88AB\u8BA4\u4E3A\u662F\u5185\u90E8\u7A97\u53E3\u7684\u4E00\u90E8\u5206\u3002\uFF08\u8FD9\u4E3B\u8981\u662F\u5386\u53F2\u9057\u7559\u539F\u56E0\uFF09", -1);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container tip" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "window.innerWidth/Height"),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, "\u8868\u793A\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u603B\u5C3A\u5BF8\uFF0C\u5305\u62EC\u6EDA\u52A8\u6761"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u4EE5 CSS \u50CF\u7D20\u6765\u5EA6\u91CF"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("\u6D4F\u89C8\u5668\u9519\u8BEF: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "IE \u4E0D\u652F\u6301"),
        /* @__PURE__ */ createBaseVNode("li", null, "Opera \u4F7F\u7528\u8BBE\u5907\u50CF\u7D20\u6765\u5EA6\u91CF")
      ])
    ])
  ])
], -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u6EDA\u52A8\u504F\u79FB-scrolling-offset",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6EDA\u52A8\u504F\u79FB-scrolling-offset",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6EDA\u52A8\u504F\u79FB\uFF08Scrolling offset\uFF09")
], -1);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "window.pageXOffset"),
  /* @__PURE__ */ createTextVNode("\u548C"),
  /* @__PURE__ */ createBaseVNode("code", null, "window.pageYOffset"),
  /* @__PURE__ */ createTextVNode("\u662F\u6587\u6863\u6C34\u5E73\u548C\u5782\u76F4\u65B9\u5411\u4E0A\u7684\u6EDA\u52A8\u504F\u79FB\u3002\u7531\u6B64\u4F60\u53EF\u4EE5\u77E5\u9053\u7528\u6237\u5DF2\u7ECF\u6EDA\u52A8\u4E86\u591A\u957F\u8DDD\u79BB\u3002")
], -1);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_6,
    alt: "default"
  })
], -1);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("p", null, "\u8FD9\u4E24\u4E2A\u5C5E\u6027\u4E5F\u662F\u4EE5 CSS \u50CF\u7D20\u6765\u5EA6\u91CF\u7684\u3002\u4F60\u60F3\u8981\u77E5\u9053\u6587\u6863\u5DF2\u7ECF\u5411\u4E0A\u6EDA\u52A8\u4E86\u591A\u5C11\uFF0C\u65E0\u8BBA\u73B0\u5728\u5904\u4E8E\u54EA\u79CD\u7F29\u653E\u7A0B\u5EA6\u3002", -1);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u7406\u8BBA\u4E0A\uFF0C\u82E5\u662F\u7528\u6237\u5411\u4E0A\u6EDA\u52A8\uFF0C\u4E4B\u540E\u653E\u5927\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "window.pageX/YOffset"),
  /* @__PURE__ */ createTextVNode("\u5C06\u6539\u53D8\u3002\u4F46\u662F\uFF0C\u6D4F\u89C8\u5668\u8BD5\u56FE\u4FDD\u6301 Web \u7F51\u9875\u662F\u59CB\u7EC8\u5982\u4E00\u7684\uFF0C\u901A\u8FC7\u5728\u7528\u6237\u7F29\u653E\u65F6\u7EF4\u6301\u540C\u4E00\u5143\u7D20\u5728\u53EF\u89C1\u9875\u9762\u7684\u9876\u90E8\u3002\u8FD9\u4E0D\u80FD\u5B8C\u7F8E\u5730\u751F\u6548\uFF0C\u4F46\u8FD9\u610F\u5473\u7740\uFF0C\u5B9E\u9645\u4E0A\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "window.pageX/YOffset"),
  /* @__PURE__ */ createTextVNode("\u5E76\u6CA1\u6709\u771F\u7684\u6539\u53D8: \u6EDA\u51FA\u5230\u7A97\u53E3\u4E4B\u5916\u7684 CSS \u50CF\u7D20\u7684\u6570\u91CF\u4ECD\u7136\u662F\uFF08\u7C97\u7565\u5730\uFF09\u76F8\u540C\u7684\u3002")
], -1);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_7,
    alt: "default"
  })
], -1);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container tip" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "window.pageX/YOffset"),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, "\u8868\u793A\u9875\u9762\u7684\u6EDA\u52A8\u504F\u79FB"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u4EE5 CSS \u50CF\u7D20\u5EA6\u91CF"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u65E0\u6D4F\u89C8\u5668\u9519\u8BEF")
  ])
], -1);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u89C6\u53E3",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u89C6\u53E3",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u89C6\u53E3")
], -1);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("p", null, "\u5728\u6211\u4EEC\u7EE7\u7EED\u4E86\u89E3\u66F4\u591A\u7684 JavaScript \u5C5E\u6027\u4E4B\u524D\uFF0C\u6211\u4EEC\u5FC5\u987B\u5148\u4ECB\u7ECD\u53E6\u4E00\u4E2A\u6982\u5FF5: \u89C6\u53E3\u3002", -1);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u89C6\u53E3\u7684\u4F5C\u7528\u662F\u9650\u5236"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\uFF0C\u800C"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u662F\u4F60\u7F51\u7AD9\u6700\u4E0A\u5C42\u7684\u5305\u542B\u5757\u3002")
], -1);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u8FD9\u542C\u8D77\u6765\u53EF\u80FD\u6709\u4E9B\u542B\u7CCA\uFF0C\u56E0\u6B64\u6211\u4EEC\u7ED9\u4E2A\u5B9E\u9645\u7684\u4F8B\u5B50\u3002\u5047\u5B9A\u4F60\u6709\u4E2A\u6D41\u5F0F\u5E03\u5C40\uFF0C\u4E14\u4F60\u7684\u4FA7\u8FB9\u680F\u7684\u5BBD\u5EA6\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "width: 10%"),
  /* @__PURE__ */ createTextVNode("\u3002\u73B0\u5728\u4F60\u8C03\u6574\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5927\u5C0F\uFF0C\u4FA7\u8FB9\u680F\u4F1A\u968F\u4E4B\u589E\u957F\u6216\u6536\u7F29\u3002\u4F46\u662F\u8FD9\u5230\u5E95\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\u5462\uFF1F")
], -1);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6280\u672F\u4E0A\u6765\u8BF4\uFF0C\u4FA7\u8FB9\u680F\u83B7\u5F97\u4E86\u5176\u7236\u5143\u7D20"),
  /* @__PURE__ */ createBaseVNode("code", null, "body"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20"),
  /* @__PURE__ */ createBaseVNode("code", null, "10%"),
  /* @__PURE__ */ createTextVNode("\u7684\u5BBD\u5EA6\uFF0C\u4F46\u4F60\u5E76\u6CA1\u6709\u7ED9"),
  /* @__PURE__ */ createBaseVNode("code", null, "body"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u8BBE\u7F6E\u5BBD\u5EA6\u3002\u56E0\u6B64\u95EE\u9898\u5C31\u53D8\u6210\u4E86\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "body"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u7684\u5BBD\u5EA6\u662F\u591A\u5C11\uFF1F")
], -1);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5E38\u89C4\u6765\u8BF4\uFF0C\u6240\u6709\u7684\u5757\u7EA7\u5143\u7D20\u4F1A\u5360\u636E\u5B83\u4EEC\u7236\u5143\u7D20\u5BBD\u5EA6\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "100%"),
  /* @__PURE__ */ createTextVNode("(\u5F53\u7136\u4E5F\u6709\u4F8B\u5916\uFF0C\u6211\u4EEC\u73B0\u5728\u5148\u5FFD\u7565)\u3002\u56E0\u6B64"),
  /* @__PURE__ */ createBaseVNode("code", null, "body"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\uFF0C\u4E0E\u5B83\u7684\u7236\u5143\u7D20"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u4E00\u6837\u5BBD\u3002")
], -1);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u90A3\u4E48\u73B0\u5728"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u6709\u591A\u5BBD\u5462\uFF1F\u5B83\u4E0E\u6D4F\u89C8\u5668\u7A97\u53E3\u4E00\u6837\u5BBD\u3002\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u4F60\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "width: 10%"),
  /* @__PURE__ */ createTextVNode("\u7684\u4FA7\u8FB9\u680F\u6A2A\u8DE8\u4E86\u6574\u4E2A\u6D4F\u89C8\u5668\u7A97\u53E3\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "10%"),
  /* @__PURE__ */ createTextVNode("\u3002\u6240\u6709\u7684 Web \u5F00\u53D1\u8005\u90FD\u76F4\u89C9\u4E0A\u6E05\u695A\u5E76\u4F7F\u7528\u4E86\u8FD9\u4E2A\u4E8B\u5B9E\u3002")
], -1);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u4F46\u4F60\u53EF\u80FD\u4E0D\u77E5\u9053\uFF0C\u8FD9\u5728\u7406\u8BBA\u4E0A\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\u3002\u7406\u8BBA\u4E0A\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u7684\u5BBD\u5EA6\u53D7\u9650\u4E8E\u89C6\u53E3\u7684\u5BBD\u5EA6\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u5360\u636E\u4E86\u89C6\u53E3\u5BBD\u5EA6\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "100%"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("p", null, "\u800C\u89C6\u53E3\uFF08\u7684\u5BBD\u5EA6\uFF09\uFF0C\u662F\u5B8C\u5168\u4E0E\u6D4F\u89C8\u5668\u7A97\u53E3\u76F8\u7B49\u7684\uFF0C\u8FD9\u5C31\u662F\u8FD9\u4E48\u5B9A\u4E49\u7684\u3002\u89C6\u53E3\u4E0D\u662F\u6784\u6210 HTML \u7684\u4E00\u90E8\u5206\uFF0C\u56E0\u6B64\u4F60\u65E0\u6CD5\u901A\u8FC7 CSS \u6765\u5F71\u54CD\u89C6\u53E3\u3002\u89C6\u53E3\u7684\u5BBD\u9AD8\uFF0C\u5C31\u662F\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5BBD\u9AD8\uFF0C\u81F3\u5C11\u5728\u684C\u9762\u7AEF\u6D4F\u89C8\u5668\u4E0A\u662F\u5982\u6B64\uFF0C\u5728\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u4E0A\uFF0C\u8FD9\u5C06\u53D8\u5F97\u66F4\u52A0\u590D\u6742\u3002", -1);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u540E\u679C",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u540E\u679C",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u540E\u679C")
], -1);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u76EE\u524D\u72B6\u6001\u4E0B\uFF0C\u8FD9\u4F1A\u6709\u4E00\u4E9B\u5947\u7279\u7684\u540E\u679C\u3002\u4F60\u53EF\u4EE5\u5728\u8FD9\u4E2A\u7F51\u7AD9\u4E2D\u89C1\u5230\u5176\u4E2D\u4E00\u79CD\u3002\uFF08\u8BD1\u8005\u6CE8: \u4EE5\u4E0B\u6B65\u9AA4\u8BF7\u6253\u5F00\u539F\u7F51\u7AD9\u540E\u64CD\u4F5C\u5E76\u67E5\u770B\u7ED3\u679C\uFF09\u5C06\u7F51\u9875\u6EDA\u52A8\u5230\u6700\u9876\u90E8\uFF0C\u4E4B\u540E\u653E\u5927\u4E24\u5230\u4E09\u6B21\u4EE5\u4FBF\u4E8E\u8FD9\u4E2A\u7F51\u7AD9\u7684\u5185\u5BB9\u90E8\u5206\u6EA2\u51FA\u5230\u4E86\u6D4F\u89C8\u5668\u7A97\u53E3\u4E4B\u5916\u3002\u73B0\u5728\u6EDA\u52A8\u5230\u53F3\u8FB9\uFF0C\u4F60\u5C06\u770B\u5230\u8FD9\u4E2A\u7F51\u7AD9\u9876\u90E8\u7684\u84DD\u8272"),
  /* @__PURE__ */ createBaseVNode("code", null, "bar"),
  /* @__PURE__ */ createTextVNode("\u518D\u4E5F\u4E0D\u4F1A\u6B63\u786E\u5730\u5BF9\u9F50\u4E86\u3002")
], -1);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_8,
    alt: "default"
  })
], -1);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u8FD9\u4E2A\u884C\u4E3A\u5C31\u662F\u6240\u5B9A\u4E49\u7684\u89C6\u53E3\u7684\u540E\u679C\u3002\u6211\u4EEC\u7ED9\u5B9A\u4E86\u9876\u90E8\u84DD\u8272"),
  /* @__PURE__ */ createBaseVNode("code", null, "bar"),
  /* @__PURE__ */ createTextVNode("\u7684\u5BBD\u5EA6\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "width: 100%"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u8C01\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "100%"),
  /* @__PURE__ */ createTextVNode("\u5462\uFF1F"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "100%"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u800C"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u4E0E\u89C6\u53E3\u4E00\u6837\u5BBD\uFF0C\u800C\u89C6\u53E3\u7684\u5BBD\u5EA6\u5C31\u662F\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5BBD\u5EA6\u3002")
], -1);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u8981\u70B9\u662F: \u5F53\u7F29\u653E\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "100%"),
  /* @__PURE__ */ createTextVNode("\u65F6\uFF0C\u8FD9\u6CA1\u4EC0\u4E48\u95EE\u9898\uFF0C\u73B0\u5728\u6211\u4EEC\u653E\u5927\uFF0C\u89C6\u53E3\u7684\u5BBD\u5EA6\u53D8\u5F97\u6BD4\u7F51\u7AD9\u7684\u603B\u5BBD\u5EA6\u8981\u5C0F\u4E00\u4E9B\u3002\u5C31\u5176\u672C\u8EAB\u800C\u8A00\uFF0C\u8FD9\u6CA1\u4EC0\u4E48\u95EE\u9898\uFF0C\u5185\u5BB9\u6EA2\u51FA\u4E86"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\uFF0C\u4F46\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u6709"),
  /* @__PURE__ */ createBaseVNode("code", null, "overflow: visible"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u8FD9\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6EA2\u51FA\u7684\u5185\u5BB9\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\u90FD\u53EF\u4EE5\u770B\u5230\u3002")
], -1);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u4F46\u662F\u84DD\u8272\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "bar"),
  /* @__PURE__ */ createTextVNode("\u4E0D\u4F1A\u6EA2\u51FA\u3002\u6211\u4EEC\u7ED9\u4E86\u5B83"),
  /* @__PURE__ */ createBaseVNode("code", null, "width: 100%"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u7EC8\u7A76\u6D4F\u89C8\u5668\u9075\u4ECE\u4E86\u8FD9\u4E2A\u89C4\u5219\uFF0C\u7ED9\u5B83\u8BBE\u7F6E\u4E86\u89C6\u53E3\u7684\u5BBD\u5EA6\u3002\u6D4F\u89C8\u5668\u4E5F\u4E0D\u4F1A\u5173\u5FC3\uFF0C\uFF08\u9488\u5BF9\u653E\u5927\u7684\u9875\u9762\u6765\u8BF4\uFF0C\u84DD\u8272"),
  /* @__PURE__ */ createBaseVNode("code", null, "bar"),
  /* @__PURE__ */ createTextVNode("\u7684\uFF09\u73B0\u5728\u8FD9\u4E2A\u5BBD\u5EA6\u7565\u5FAE\u6709\u4E9B\u7A84\u3002")
], -1);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_9,
    alt: "default"
  })
], -1);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u6587\u6863\u5BBD\u5EA6",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6587\u6863\u5BBD\u5EA6",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6587\u6863\u5BBD\u5EA6")
], -1);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode("p", null, "\u6211\u771F\u6B63\u9700\u8981\u77E5\u9053\u7684\u662F\uFF0C\u9875\u9762\u603B\u7684\u5185\u5BB9\u6709\u591A\u5BBD\uFF0C\u5305\u62EC\u6EA2\u51FA\u7684\u90A3\u90E8\u5206\u3002\u636E\u6211\u6240\u77E5\uFF0C\u6CA1\u529E\u6CD5\u53BB\u627E\u5230\u8FD9\u4E2A\u503C\u3002\uFF08\u9664\u975E\u4F60\u8BA1\u7B97\u7F51\u9875\u91CC\u6BCF\u4E2A\u5143\u7D20\u7684\u5BBD\u5EA6\u548C\u5916\u8FB9\u8DDD\uFF0C\u4E0D\u8FC7\u8FD9\u4E2A\u6BD4\u8F83\u5BB9\u6613\u51FA\u9519\uFF09", -1);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_10,
    alt: "default"
  })
], -1);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6211\u4EEC\u771F\u7684\u611F\u5230\u5F88\u5947\u7279\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u5C06\u8FD9\u4E2A\u503C\u66B4\u9732\u7ED9 CSS \u5462\uFF1F\u6211\u66F4\u60F3\u8981\u84DD\u8272"),
  /* @__PURE__ */ createBaseVNode("code", null, "bar"),
  /* @__PURE__ */ createTextVNode("\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "width: 100%"),
  /* @__PURE__ */ createTextVNode("\u662F\u57FA\u4E8E\u6587\u6863\u5BBD\u5EA6\uFF0C\u800C\u4E0D\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u7684\u5BBD\u5EA6\u3002\uFF08\u4F46\u662F\u8FD9\u6CE8\u5B9A\u5F88\u96BE\u529E\uFF0C\u5373\u4F7F\u8BF4\u65E0\u6CD5\u5B9E\u73B0\uFF0C\u6211\u4E5F\u4E0D\u4F1A\u60CA\u8BB6\u3002\uFF09")
], -1);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode("p", null, "\u6D4F\u89C8\u5668\u5382\u5546\u4EEC\uFF0C\u4F60\u4EEC\u8BA4\u4E3A\u5462\uFF1F", -1);
const _hoisted_88 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u6D4B\u91CF\u89C6\u53E3",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6D4B\u91CF\u89C6\u53E3",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6D4B\u91CF\u89C6\u53E3")
], -1);
const _hoisted_89 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u4F60\u53EF\u80FD\u60F3\u8981\u77E5\u9053\u89C6\u53E3\u7684\u5C3A\u5BF8\uFF0C\u8FD9\u4E9B\u53EF\u4EE5\u901A\u8FC7"),
  /* @__PURE__ */ createBaseVNode("code", null, "document.documentElement.clientWidth/Height"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_90 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_11,
    alt: "default"
  })
], -1);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u82E5\u662F\u4F60\u4E86\u89E3 DOM\uFF0C\u4F60\u5E94\u8BE5\u77E5\u9053"),
  /* @__PURE__ */ createBaseVNode("code", null, "document.documentElement"),
  /* @__PURE__ */ createTextVNode("\u5B9E\u9645\u4E0A\u5C31\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\uFF0C\u5373 HTML \u6587\u6863\u7684\u6839\u5143\u7D20\u3002\u7136\u800C\uFF0C\u53EF\u4EE5\u8FD9\u4E48\u8BF4\uFF0C\u89C6\u53E3\u662F\u66F4\u9AD8\u7684\u5C42\u7EA7\uFF0C\u5B83\u662F\u5305\u542B\u4E86"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u7684\u5143\u7D20\u3002\u82E5\u662F\u4F60\u7ED9"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u8BBE\u7F6E"),
  /* @__PURE__ */ createBaseVNode("code", null, "width"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u4F60\u4F1A\u53D1\u73B0\u8FD9\u4F1A\u6709\u4E00\u4E9B\u5F71\u54CD\u3002\uFF08\u6211\u4E0D\u63A8\u8350\u8FD9\u4E48\u505A\uFF0C\u4F46\u662F\u786E\u5B9E\u662F\u53EF\u4EE5\u505A\u7684\u3002\uFF09\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "document.documentElement.clientWidth/Height"),
  /* @__PURE__ */ createTextVNode("\u8868\u793A\u7684\u662F\u89C6\u53E3\u7684\u5C3A\u5BF8\uFF0C\u800C\u4E0D\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u7684\u5C3A\u5BF8\u3002\uFF08\u8FD9\u662F\u4E2A\u7279\u6B8A\u7684\u89C4\u5219\uFF0C\u4EC5\u662F\u9488\u5BF9\u8FD9\u5BF9\u5C5E\u6027\u4E14\u4EC5\u9488\u5BF9"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\uFF1B\u5728\u5176\u4ED6\u4EFB\u4F55\u60C5\u51B5\u4E0B\uFF0C\u90FD\u8868\u793A\u5143\u7D20\u5B9E\u9645\u7684\u5BBD\u5EA6\u3002\uFF09")
], -1);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_12,
    alt: "default"
  })
], -1);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u56E0\u6B64\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "document.documentElement.clientWidth/Height"),
  /* @__PURE__ */ createTextVNode("\u603B\u662F\u8868\u793A\u89C6\u53E3\u7684\u5C3A\u5BF8\uFF0C\u800C\u4E0D\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u7684\u5C3A\u5BF8\u3002")
], -1);
const _hoisted_94 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container tip" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "document. documentElement.clientWidth/Height"),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, "\u4EE3\u8868\u89C6\u53E3\u7684\u5C3A\u5BF8"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u4EE5 CSS \u50CF\u7D20\u5EA6\u91CF"),
    /* @__PURE__ */ createBaseVNode("li", null, "\u65E0\u6D4F\u89C8\u5668\u9519\u8BEF")
  ])
], -1);
const _hoisted_95 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u4E24\u4E2A\u5C5E\u6027\u5BF9",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u4E24\u4E2A\u5C5E\u6027\u5BF9",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u4E24\u4E2A\u5C5E\u6027\u5BF9")
], -1);
const _hoisted_96 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u4F46\u662F\uFF0C\u89C6\u53E3\u7684\u5C3A\u5BF8\u4E0D\u662F\u901A\u8FC7"),
  /* @__PURE__ */ createBaseVNode("code", null, "window.innerWidth/Height"),
  /* @__PURE__ */ createTextVNode("\u7ED9\u51FA\u4E86\u5417\uFF1F\u55EF\uFF0C\u662F\uFF0C\u4E5F\u4E0D\u662F\u3002")
], -1);
const _hoisted_97 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u8FD9\u4E24\u4E2A\u5C5E\u6027\u5BF9\uFF0C\u7565\u5FAE\u6709\u4E9B\u533A\u522B\uFF1A"),
  /* @__PURE__ */ createBaseVNode("code", null, "document.documentElement.clientWidth/Height"),
  /* @__PURE__ */ createTextVNode("\u4E0D\u5305\u62EC\u6EDA\u52A8\u6761\uFF0C\u800C"),
  /* @__PURE__ */ createBaseVNode("code", null, "window.innerWidth/Height"),
  /* @__PURE__ */ createTextVNode("\u5305\u62EC\uFF0C\u5C3D\u7BA1\u8FD9\u6709\u4E9B\u5439\u6BDB\u6C42\u75B5\u3002")
], -1);
const _hoisted_98 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u4E8B\u5B9E\u4E0A\uFF0C\u8FD9\u4E24\u4E2A\u5C5E\u6027\u5BF9\u662F\u5728\u6D4F\u89C8\u5668\u5927\u6218\u4E2D\u9057\u7559\u4E0B\u6765\u7684\u3002\u90A3\u65F6\u5019\uFF0CNetscape \u4EC5\u652F\u6301"),
  /* @__PURE__ */ createBaseVNode("code", null, "window.innerWidth/Height"),
  /* @__PURE__ */ createTextVNode("\uFF0CIE \u4EC5\u652F\u6301"),
  /* @__PURE__ */ createBaseVNode("code", null, "document.documentElement.clientWidth/Height"),
  /* @__PURE__ */ createTextVNode("\u3002\u4E4B\u540E\uFF0C\u6240\u6709\u7684\u6D4F\u89C8\u5668\u90FD\u5F00\u59CB\u652F\u6301"),
  /* @__PURE__ */ createBaseVNode("code", null, "document.documentElement.clientWidth/Height"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u4F46 IE \u5374\u6CA1\u652F\u6301"),
  /* @__PURE__ */ createBaseVNode("code", null, "window.innerWidth/Height"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode("p", null, "\u6709\u4E24\u4E2A\u53EF\u7528\u7684\u5C5E\u6027\u5BF9\uFF0C\u5728\u684C\u9762\u7AEF\u6D4F\u89C8\u5668\u4E0A\u662F\u4E2A\u8F83\u5C0F\u7684\u9EBB\u70E6\uFF0C\u4F46\u662F\u5728\u79FB\u52A8\u7AEF\u5374\u662F\u4E2A\u597D\u4E8B\uFF0C\u6211\u4EEC\u4E4B\u540E\u5C06\u4ECB\u7ECD\u3002", -1);
const _hoisted_100 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u6D4B\u91CF-html-\u5143\u7D20",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6D4B\u91CF-html-\u5143\u7D20",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6D4B\u91CF html \u5143\u7D20")
], -1);
const _hoisted_101 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u56E0\u6B64\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "document.documentElement.clientWidth/Height"),
  /* @__PURE__ */ createTextVNode("\u5728\u6240\u6709\u7684\u60C5\u51B5\u4E0B\u90FD\u8868\u793A\u89C6\u53E3\u7684\u5C3A\u5BF8\u3002\u4F46\u662F\uFF0C\u6211\u4EEC\u5982\u4F55\u77E5\u9053"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u81EA\u8EAB\u7684\u5C3A\u5BF8\u5462\uFF1F\u5B83\u4EEC\u5B58\u50A8\u5728"),
  /* @__PURE__ */ createBaseVNode("code", null, "document.documentElement.offsetWidth/Height"),
  /* @__PURE__ */ createTextVNode("\u91CC\u3002")
], -1);
const _hoisted_102 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_13,
    alt: "default"
  })
], -1);
const _hoisted_103 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u8FD9\u4E9B\u5C5E\u6027\u53EF\u4EE5\u8BA9\u4F60\u8BBF\u95EE\u4F5C\u4E3A\u5757\u7EA7\u5143\u7D20\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\uFF1B\u82E5\u662F\u4F60\u7ED9"),
  /* @__PURE__ */ createBaseVNode("code", null, "html"),
  /* @__PURE__ */ createTextVNode("\u8BBE\u7F6E\u4E86"),
  /* @__PURE__ */ createBaseVNode("code", null, "width"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7"),
  /* @__PURE__ */ createBaseVNode("code", null, "offsetWidth"),
  /* @__PURE__ */ createTextVNode("\u53CD\u6620\u51FA\u6765\u3002")
], -1);
const _hoisted_104 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_14,
    alt: "default"
  })
], -1);
const _hoisted_105 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container tip" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "document. documentElement.offsetWidth/Height"),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("\u8868\u793A"),
      /* @__PURE__ */ createBaseVNode("code", null, "html"),
      /* @__PURE__ */ createTextVNode("\u5143\u7D20\u7684\u5C3A\u5BF8\uFF08\u4E5F\u5C31\u662F\u7F51\u9875\u7684\u5C3A\u5BF8\uFF09")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, "\u4EE5 CSS \u50CF\u7D20\u6765\u5EA6\u91CF"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("\u6D4F\u89C8\u5668\u9519\u8BEF: IE \u7528\u6B64\u6765\u6D4B\u91CF\u89C6\u53E3\u7684\u5C3A\u5BF8\uFF0C\u800C\u4E0D\u662F"),
      /* @__PURE__ */ createBaseVNode("code", null, "html"),
      /* @__PURE__ */ createTextVNode("\u5143\u7D20\u7684")
    ])
  ])
], -1);
const _hoisted_106 = /* @__PURE__ */ createBaseVNode("h2", {
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
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("p", null, "\u6211\u4EEC\u73B0\u5728\u6765\u4E86\u89E3\u4E0B\u4E8B\u4EF6\u5750\u6807\u7684\u5185\u5BB9\u3002\u5F53\u53D1\u751F\u9F20\u6807\u4E8B\u4EF6\u65F6\uFF0C\u81F3\u5C11\u6709\u4E94\u7EC4\u5C5E\u6027\u53EF\u4EE5\u544A\u77E5\u4F60\u4E8B\u4EF6\u53D1\u751F\u7684\u7CBE\u786E\u7684\u4F4D\u7F6E\u4FE1\u606F\u3002\u5728\u6211\u4EEC\u7684\u8BA8\u8BBA\u4E2D\uFF0C\u5176\u4E2D\u6709\u4E09\u7EC4\u5C5E\u6027\u5BF9\u8F83\u4E3A\u91CD\u8981:", -1);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode("ol", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "pageX/Y"),
    /* @__PURE__ */ createTextVNode("\u4EE5 CSS \u50CF\u7D20\u7684\u5F62\u5F0F\uFF0C\u7ED9\u51FA\u76F8\u5BF9\u4E8E"),
    /* @__PURE__ */ createBaseVNode("code", null, "html"),
    /* @__PURE__ */ createTextVNode("\u5143\u7D20\u7684\u5750\u6807")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "clientX/Y"),
    /* @__PURE__ */ createTextVNode("\u4EE5 CSS \u50CF\u7D20\u7684\u5F62\u5F0F\uFF0C\u7ED9\u51FA\u76F8\u5BF9\u4E8E\u89C6\u53E3\u7684\u5750\u6807")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "screenX/Y"),
    /* @__PURE__ */ createTextVNode("\u4EE5\u8BBE\u5907\u50CF\u7D20\u7684\u5F62\u5F0F\uFF0C\u7ED9\u51FA\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u7684\u5750\u6807")
  ])
], -1);
const _hoisted_109 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container tip" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "pageX/Y, clientX/Y, screenX/Y"),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("\u6D4F\u89C8\u5668\u9519\u8BEF "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("IE \u4E0D\u652F\u6301"),
          /* @__PURE__ */ createBaseVNode("code", null, "pageX/Y")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("IE \u548C Opera \u4EE5 CSS \u50CF\u7D20\u8BA1\u7B97"),
          /* @__PURE__ */ createBaseVNode("code", null, "screenX/Y")
        ])
      ])
    ])
  ])
], -1);
const _hoisted_110 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "pagex-y\u3001clientx-y\u3001screenx-y-\u793A\u610F",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#pagex-y\u3001clientx-y\u3001screenx-y-\u793A\u610F",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" pageX/Y\u3001clientX/Y\u3001screenX/Y \u793A\u610F")
], -1);
const _hoisted_111 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "pagex-y",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#pagex-y",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" pageX/Y")
], -1);
const _hoisted_112 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_15,
    alt: "default"
  })
], -1);
const _hoisted_113 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "clientx-y",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#clientx-y",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" clientX/Y")
], -1);
const _hoisted_114 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_16,
    alt: "default"
  })
], -1);
const _hoisted_115 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "screenx-y",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#screenx-y",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" screenX/Y")
], -1);
const _hoisted_116 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_17,
    alt: "default"
  })
], -1);
const _hoisted_117 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u603B\u7ED3",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u603B\u7ED3",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u603B\u7ED3")
], -1);
const _hoisted_118 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5728"),
  /* @__PURE__ */ createBaseVNode("code", null, "90%"),
  /* @__PURE__ */ createTextVNode("\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F60\u5C06\u4F7F\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "pageX/Y"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u56E0\u4E3A\u901A\u5E38\u4F60\u60F3\u77E5\u9053\u4E8B\u4EF6\u76F8\u5BF9\u4E8E\u6587\u6863\u7684\u4F4D\u7F6E\u3002\u5269\u4E0B\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "10%"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u4F60\u5C06\u4F7F\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "clientX/Y"),
  /* @__PURE__ */ createTextVNode("\u3002\u4F60\u51E0\u4E4E\u4ECE\u4E0D\u9700\u8981\u77E5\u9053\u4E8B\u4EF6\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u7684\u5750\u6807\u3002")
], -1);
const _hoisted_119 = /* @__PURE__ */ createBaseVNode("h2", {
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
const _hoisted_120 = /* @__PURE__ */ createBaseVNode("p", null, "\u6700\u540E\uFF0C\u662F\u5173\u4E8E\u5A92\u4F53\u67E5\u8BE2\u7684\u3002\u4F60\u53EF\u4EE5\u5B9A\u4E49\u7279\u6B8A\u7684 CSS \u89C4\u5219\uFF0C\u4EC5\u5728\u9875\u9762\u5BBD\u5EA6\u5927\u4E8E\u3001\u7B49\u4E8E\u6216\u5C0F\u4E8E\u67D0\u4E2A\u7279\u5B9A\u7684\u5927\u5C0F\u65F6\u624D\u6267\u884C\u3002\u6BD4\u5982:", -1);
const _hoisted_121 = /* @__PURE__ */ createBaseVNode("div", { class: "language-css ext-css line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-css" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token selector" }, "div.sidebar"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "width"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" 300px"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createTextVNode("\n\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token atrule" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token rule" }, "@media"),
        /* @__PURE__ */ createTextVNode(" all "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "and"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "max-width"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
        /* @__PURE__ */ createTextVNode(" 400px"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")")
      ]),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n  // styles assigned when width is smaller than 400px"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token selector" }, "div.sidebar"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "width"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" 100px"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createTextVNode("\n")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "line-numbers" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "1"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "2"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "3"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "4"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "5"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "6"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "7"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "8"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "9"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "10"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_122 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u73B0\u5728\u4FA7\u8FB9\u680F\u5BBD\u5EA6\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "300px"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u9664\u4E86\u5728\u5BBD\u5EA6\u5C0F\u4E8E"),
  /* @__PURE__ */ createBaseVNode("code", null, "400px"),
  /* @__PURE__ */ createTextVNode("\u7684\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u65F6\u4FA7\u8FB9\u680F\u7684\u5BBD\u5EA6\u5C06\u53D8\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "100px"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_123 = /* @__PURE__ */ createBaseVNode("p", null, "\u95EE\u9898\u5728\u4E8E\uFF0C\u6211\u4EEC\u6D4B\u91CF\u7684\u662F\u54EA\u4E2A\u5BBD\u5EA6\uFF1F", -1);
const _hoisted_124 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u8FD9\u91CC\u6709\u50CF\u4E2A\u76F8\u5173\u7684\u5A92\u4F53\u67E5\u8BE2: "),
  /* @__PURE__ */ createBaseVNode("code", null, "width/height"),
  /* @__PURE__ */ createTextVNode("\u548C"),
  /* @__PURE__ */ createBaseVNode("code", null, "device-width/device-height"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_125 = /* @__PURE__ */ createBaseVNode("ol", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "width/height"),
    /* @__PURE__ */ createTextVNode("\u4F7F\u7528\u4E0E"),
    /* @__PURE__ */ createBaseVNode("code", null, "document.documentElement.clientWidth/Height"),
    /* @__PURE__ */ createTextVNode("\uFF08\u4E5F\u5C31\u662F\u89C6\u53E3\uFF09\u4E00\u6837\u7684\u503C\uFF0C\u4EE5 CSS \u50CF\u7D20\u5EA6\u91CF")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "device-width/device-height"),
    /* @__PURE__ */ createTextVNode("\u4F7F\u7528\u4E0E"),
    /* @__PURE__ */ createBaseVNode("code", null, "screen.width/height"),
    /* @__PURE__ */ createTextVNode("\uFF08\u4E5F\u5C31\u662F\u5C4F\u5E55\uFF09\u4E00\u6837\u7684\u503C\uFF0C\u4EE5\u8BBE\u5907\u50CF\u7D20\u5EA6\u91CF")
  ])
], -1);
const _hoisted_126 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_18,
    alt: "default"
  })
], -1);
const _hoisted_127 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u4F60\u5E94\u8BE5\u4F7F\u7528\u54EA\u4E2A\uFF1F\u6BEB\u65E0\u7591\u95EE\uFF0C\u5F53\u7136\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "width"),
  /* @__PURE__ */ createTextVNode("\u3002Web \u5F00\u53D1\u8005\u4E0D\u5173\u5FC3\u8BBE\u5907\u50CF\u7D20\uFF0C\u4ED6\u4EEC\u5173\u5FC3\u7684\u662F\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5BBD\u5EA6\u3002")
], -1);
const _hoisted_128 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u56E0\u6B64\uFF0C\u5728\u684C\u9762\u7AEF\u6D4F\u89C8\u5668\u4E0A\uFF0C\u4F7F\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "width"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u5FD8\u8BB0"),
  /* @__PURE__ */ createBaseVNode("code", null, "devie-width"),
  /* @__PURE__ */ createTextVNode("\u3002\u6211\u4EEC\u4E4B\u540E\u4F1A\u53D1\u73B0\uFF0C\u8FD9\u4E2A\u72B6\u51B5\u5728\u79FB\u52A8\u7AEF\u4F1A\u66F4\u52A0\u6DF7\u4E71\u3002")
], -1);
const _hoisted_129 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container tip" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Media queries"),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("\u6D4F\u89C8\u5668\u9519\u8BEF "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "IE \u4E0D\u652F\u6301"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("\u5BF9\u4E8E"),
          /* @__PURE__ */ createBaseVNode("code", null, "device-width/device-height"),
          /* @__PURE__ */ createTextVNode("\uFF0C\u82E5\u662F\u4EE5 CSS \u50CF\u7D20\u5EA6\u91CF\u7684\u8BDD\uFF0CFirefox \u4F1A\u4F7F\u7528"),
          /* @__PURE__ */ createBaseVNode("code", null, "screen.width/height"),
          /* @__PURE__ */ createTextVNode("\u5DF2\u6709\u7684\u503C")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("\u5BF9\u4E8E"),
          /* @__PURE__ */ createBaseVNode("code", null, "width/height"),
          /* @__PURE__ */ createTextVNode("\uFF0C\u82E5\u662F\u4EE5\u8BBE\u5907\u50CF\u7D20\u5EA6\u91CF\u7684\u8BDD\uFF0CSafari \u548C Chrome \u4F1A\u4F7F\u7528"),
          /* @__PURE__ */ createBaseVNode("code", null, "documentElement .clientWidth/Height"),
          /* @__PURE__ */ createTextVNode("\u5DF2\u6709\u7684\u503C\u3002")
        ])
      ])
    ])
  ])
], -1);
const _hoisted_130 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u603B\u7ED3-1",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u603B\u7ED3-1",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u603B\u7ED3")
], -1);
const _hoisted_131 = /* @__PURE__ */ createBaseVNode("p", null, "\u8FD9\u7BC7\u6587\u7AE0\u5C1D\u8BD5\u8BF4\u660E\u4E86\u684C\u9762\u7AEF\u6D4F\u89C8\u5668\u7684\u884C\u4E3A\uFF0C\u8BE5\u7CFB\u5217\u7684\u7B2C\u4E8C\u90E8\u5206\u4F1A\u5C06\u8FD9\u4E9B\u6982\u5FF5\u5E94\u7528\u5230\u79FB\u52A8\u7AEF\u4E0A\uFF0C\u5E76\u5F3A\u8C03\u4E0E\u684C\u9762\u7684\u4E00\u4E9B\u91CD\u8981\u533A\u522B\u3002", -1);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u8BBE\u5907\u50CF\u7D20\u548C-css-\u50CF\u7D20" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#_100-\u7F29\u653E" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5C4F\u5E55\u5C3A\u5BF8-screen-size" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7A97\u53E3\u5C3A\u5BF8-window-size" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6EDA\u52A8\u504F\u79FB-scrolling-offset" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u89C6\u53E3" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u540E\u679C" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6587\u6863\u5BBD\u5EA6" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6D4B\u91CF\u89C6\u53E3" }, {
            default: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4E24\u4E2A\u5C5E\u6027\u5BF9" }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6D4B\u91CF-html-\u5143\u7D20" }, {
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
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#pagex-y\u3001clientx-y\u3001screenx-y-\u793A\u610F" }, {
                default: withCtx(() => [
                  _hoisted_15
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#pagex-y" }, {
                    default: withCtx(() => [
                      _hoisted_16
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#clientx-y" }, {
                    default: withCtx(() => [
                      _hoisted_17
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#screenx-y" }, {
                    default: withCtx(() => [
                      _hoisted_18
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u603B\u7ED3" }, {
                    default: withCtx(() => [
                      _hoisted_19
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5A92\u4F53\u67E5\u8BE2" }, {
            default: withCtx(() => [
              _hoisted_20
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u603B\u7ED3-1" }, {
            default: withCtx(() => [
              _hoisted_21
            ]),
            _: 1
          })
        ])
      ])
    ]),
    createBaseVNode("p", null, [
      _hoisted_22,
      createBaseVNode("a", _hoisted_23, [
        _hoisted_24,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_25,
    _hoisted_26,
    _hoisted_27,
    _hoisted_28,
    _hoisted_29,
    _hoisted_30,
    _hoisted_31,
    _hoisted_32,
    _hoisted_33,
    _hoisted_34,
    _hoisted_35,
    _hoisted_36,
    _hoisted_37,
    _hoisted_38,
    _hoisted_39,
    _hoisted_40,
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
    _hoisted_120,
    _hoisted_121,
    _hoisted_122,
    _hoisted_123,
    _hoisted_124,
    _hoisted_125,
    _hoisted_126,
    _hoisted_127,
    _hoisted_128,
    _hoisted_129,
    _hoisted_130,
    _hoisted_131,
    createVNode(_component_global_config)
  ], 64);
}
var aTaleOfViewportsOne_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { aTaleOfViewportsOne_html as default };
