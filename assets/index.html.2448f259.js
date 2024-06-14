import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
var _imports_0 = "/assets/language-type.c968c07d.png";
var _imports_1 = "/assets/reference-cycle.d93d0d8b.png";
var _imports_2 = "/assets/v8-ignition-turboFan.6767aca4.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "javascript-\u6267\u884C\u673A\u5236",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#javascript-\u6267\u884C\u673A\u5236",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" JavaScript \u6267\u884C\u673A\u5236")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u52A8\u6001\u8BED\u8A00 & \u5F31\u7C7B\u578B\u8BED\u8A00");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u53D8\u91CF\u63D0\u5347");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u4E3A\u4EC0\u4E48\u8981\u8BBE\u8BA1\u53D8\u91CF\u63D0\u5347");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("this");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u5783\u573E\u56DE\u6536");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u5F15\u7528\u8BA1\u6570\uFF08\u65E7\u7248 IE 4-6\uFF09");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u6807\u8BB0\u6E05\u9664\uFF08Mark-and-Sweep\uFF09\uFF08\u4E3B\u6D41\uFF09");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\u7684\u539F\u56E0");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("V8 \u6267\u884C JavaScript \u4EE3\u7801\u7684\u8FC7\u7A0B");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u7591\u95EE");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u5757\u7EA7\u4F5C\u7528\u57DF\u91CC\u58F0\u660E\u51FD\u6570");
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("p", null, "PS:", -1);
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u8BE5\u6587\u7AE0\u51E0\u4E4E\u6240\u6709\u7684\u5185\u5BB9\u6765\u81EA\u4E8E");
const _hoisted_16 = {
  href: "https://time.geekbang.org/column/intro/216",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u6781\u5BA2\u65F6\u95F4-\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406\u4E0E\u5B9E\u8DF5");
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("li", null, "\u8BE5\u6587\u7AE0\u91CC\u8BF4\u7684 JavaScript \u6267\u884C\u673A\u5236\u6307\u7684\u662F\u6D4F\u89C8\u5668\u91CC\u7684 JavaScript \u6267\u884C\u673A\u5236\u3002", -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("p", null, "JavaScript \u4F1A\u5148\u7F16\u8BD1\u518D\u6267\u884C\uFF0C\u7ECF\u8FC7\u7F16\u8BD1\u540E\uFF0C\u4F1A\u751F\u6210\u4E24\u90E8\u5206\u5185\u5BB9\uFF1A\u6267\u884C\u4E0A\u4E0B\u6587\uFF08Execution context\uFF09\u548C\u53EF\u6267\u884C\u4EE3\u7801\u3002", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u51FD\u6570\u53EA\u6709\u5728\u88AB\u8C03\u7528\u7684\u65F6\u5019\uFF0C\u624D\u4F1A\u88AB\u7F16\u8BD1\u3002")
], -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u52A8\u6001\u8BED\u8A00-\u5F31\u7C7B\u578B\u8BED\u8A00",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u52A8\u6001\u8BED\u8A00-\u5F31\u7C7B\u578B\u8BED\u8A00",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u52A8\u6001\u8BED\u8A00 & \u5F31\u7C7B\u578B\u8BED\u8A00")
], -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("p", null, "\u58F0\u660E\u53D8\u91CF\u65F6\u5B9A\u4E49\u5176\u6570\u636E\u7C7B\u578B\u7684\u8BED\u8A00\u79F0\u4E3A\u9759\u6001\u8BED\u8A00\uFF1B\u4E0E\u4E4B\u76F8\u53CD\uFF0C\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u9700\u8981\u68C0\u67E5\u6570\u636E\u7C7B\u578B\u7684\u8BED\u8A00\u79F0\u4E3A\u52A8\u6001\u8BED\u8A00\u3002", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("p", null, "\u652F\u6301\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u7684\u8BED\u8A00\u79F0\u4E3A\u5F31\u7C7B\u578B\u8BED\u8A00\uFF1B\u4E0D\u652F\u6301\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u7684\u8BED\u8A00\u79F0\u4E3A\u5F3A\u7C7B\u578B\u8BED\u8A00\u3002", -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("p", null, "JavaScript \u662F\u4E00\u79CD\u5F31\u7C7B\u578B\u7684\u3001\u52A8\u6001\u7684\u8BED\u8A00\u3002", -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u5F31\u7C7B\u578B\uFF0C\u610F\u5473\u7740\u4F60\u4E0D\u9700\u8981\u544A\u8BC9 JavaScript \u5F15\u64CE\u8FD9\u4E2A\u6216\u90A3\u4E2A\u53D8\u91CF\u662F\u4EC0\u4E48\u6570\u636E\u7C7B\u578B\uFF0CJavaScript \u5F15\u64CE\u5728\u8FD0\u884C\u4EE3\u7801\u7684\u65F6\u5019\u81EA\u5DF1\u4F1A\u8BA1\u7B97\u51FA\u6765\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u52A8\u6001\uFF0C\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u4F7F\u7528\u540C\u4E00\u4E2A\u53D8\u91CF\u4FDD\u5B58\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u3002")
], -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "\u8BED\u8A00\u7C7B\u578B\u56FE"
  })
], -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u53D8\u91CF\u63D0\u5347",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u53D8\u91CF\u63D0\u5347",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u53D8\u91CF\u63D0\u5347")
], -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u53D8\u91CF\u63D0\u5347\uFF08"),
  /* @__PURE__ */ createBaseVNode("code", null, "hoisting"),
  /* @__PURE__ */ createTextVNode("\uFF09\uFF0C\u662F\u6307\u5728 JavaScript \u4EE3\u7801\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0CJavaScript \u5F15\u64CE\u628A\u53D8\u91CF\u7684\u58F0\u660E\u90E8\u5206\u548C\u51FD\u6570\u7684\u58F0\u660E\u90E8\u5206\u63D0\u5347\u5230\u4EE3\u7801\u5F00\u5934\u7684\u201C\u884C\u4E3A\u201D\u3002\u53D8\u91CF\u88AB\u63D0\u5347\u540E\uFF0C\u4F1A\u7ED9\u53D8\u91CF\u8BBE\u7F6E\u9ED8\u8BA4\u503C"),
  /* @__PURE__ */ createBaseVNode("code", null, "undefined"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("p", null, "\u5728\u53D8\u91CF\u63D0\u5347\u8FC7\u7A0B\u4E2D\uFF0C", -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u82E5\u58F0\u660E\u4E86\u4E24\u4E2A\u540C\u540D\u7684\u51FD\u6570\uFF0C\u5219\u6700\u7EC8\u751F\u6548\u7684\u662F\u6700\u540E\u58F0\u660E\u7684\u51FD\u6570\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u82E5\u58F0\u660E\u7684\u53D8\u91CF\u548C\u51FD\u6570\u540C\u540D\uFF0C\u90A3\u4E48\u5728\u7F16\u8BD1\u9636\u6BB5\uFF0C\u53D8\u91CF\u7684\u58F0\u660E\u4F1A\u88AB\u5FFD\u7565\u3002")
], -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u4E3A\u4EC0\u4E48\u8981\u8BBE\u8BA1\u53D8\u91CF\u63D0\u5347",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u4E3A\u4EC0\u4E48\u8981\u8BBE\u8BA1\u53D8\u91CF\u63D0\u5347",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u4E3A\u4EC0\u4E48\u8981\u8BBE\u8BA1\u53D8\u91CF\u63D0\u5347")
], -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("p", null, "ES6 \u4E4B\u524D\u662F\u4E0D\u652F\u6301\u5757\u7EA7\u4F5C\u7528\u57DF\u7684\uFF0C\u56E0\u4E3A\u5F53\u521D\u8BBE\u8BA1\u8FD9\u95E8\u8BED\u8A00\u7684\u65F6\u5019\uFF0C\u5E76\u6CA1\u6709\u60F3\u5230 JavaScript \u4F1A\u706B\u8D77\u6765\uFF0C\u6240\u4EE5\u53EA\u662F\u6309\u7167\u6700\u7B80\u5355\u7684\u65B9\u5F0F\u6765\u8BBE\u8BA1\u3002\u6CA1\u6709\u4E86\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u518D\u628A\u4F5C\u7528\u57DF\u5185\u90E8\u7684\u53D8\u91CF\u7EDF\u4E00\u63D0\u5347\u65E0\u7591\u662F\u6700\u5FEB\u901F\u3001\u6700\u7B80\u5355\u7684\u8BBE\u8BA1\uFF0C\u4E0D\u8FC7\u8FD9\u4E5F\u76F4\u63A5\u5BFC\u81F4\u4E86\u51FD\u6570\u4E2D\u7684\u53D8\u91CF\u65E0\u8BBA\u662F\u5728\u54EA\u91CC\u58F0\u660E\u7684\uFF0C\u5728\u7F16\u8BD1\u9636\u6BB5\u90FD\u4F1A\u88AB\u63D0\u53D6\u5230\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u53D8\u91CF\u73AF\u5883\u4E2D\uFF0C\u6240\u4EE5\u8FD9\u4E9B\u53D8\u91CF\u5728\u6574\u4E2A\u51FD\u6570\u4F53\u5185\u90E8\u7684\u4EFB\u4F55\u5730\u65B9\u90FD\u662F\u80FD\u88AB\u8BBF\u95EE\u7684\uFF0C\u8FD9\u4E5F\u5C31\u662F JavaScript \u4E2D\u7684\u53D8\u91CF\u63D0\u5347\u3002\u53D8\u91CF\u63D0\u5347\u6240\u5E26\u6765\u7684\u95EE\u9898", -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "this",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#this",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" this")
], -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "this"),
  /* @__PURE__ */ createTextVNode("\u662F\u548C\u6267\u884C\u4E0A\u4E0B\u6587\u7ED1\u5B9A\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6BCF\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u90FD\u6709\u4E00\u4E2A"),
  /* @__PURE__ */ createBaseVNode("code", null, "this"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u7684"),
    /* @__PURE__ */ createBaseVNode("code", null, "this"),
    /* @__PURE__ */ createTextVNode("\u6307\u5411"),
    /* @__PURE__ */ createBaseVNode("code", null, "window"),
    /* @__PURE__ */ createTextVNode("\uFF08\u6D4F\u89C8\u5668\u91CC\uFF09")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u7684"),
    /* @__PURE__ */ createBaseVNode("code", null, "this"),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createTextVNode("\uFF08\u6D4F\u89C8\u5668\u91CC\uFF09\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u51FD\u6570\u5185\u7684"),
        /* @__PURE__ */ createBaseVNode("code", null, "this"),
        /* @__PURE__ */ createTextVNode("\u6307\u5411\u5168\u5C40\u53D8\u91CF"),
        /* @__PURE__ */ createBaseVNode("code", null, "window"),
        /* @__PURE__ */ createTextVNode("\uFF1B\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C"),
        /* @__PURE__ */ createBaseVNode("code", null, "this"),
        /* @__PURE__ */ createTextVNode("\u4E3A"),
        /* @__PURE__ */ createBaseVNode("code", null, "undefined")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createTextVNode("\u8C03\u7528\u51FD\u6570\u7684"),
        /* @__PURE__ */ createBaseVNode("code", null, "call"),
        /* @__PURE__ */ createTextVNode("/"),
        /* @__PURE__ */ createBaseVNode("code", null, "apply"),
        /* @__PURE__ */ createTextVNode("/"),
        /* @__PURE__ */ createBaseVNode("code", null, "bind"),
        /* @__PURE__ */ createTextVNode("\u65B9\u6CD5\u53EF\u6539\u53D8\u8BE5\u51FD\u6570\u7684"),
        /* @__PURE__ */ createBaseVNode("code", null, "this"),
        /* @__PURE__ */ createTextVNode("\u6307\u5411\uFF0C\u5176\u5C06\u6307\u5411\u8C03\u7528\u51FD\u6570"),
        /* @__PURE__ */ createBaseVNode("code", null, "call"),
        /* @__PURE__ */ createTextVNode("/"),
        /* @__PURE__ */ createBaseVNode("code", null, "apply"),
        /* @__PURE__ */ createTextVNode("/"),
        /* @__PURE__ */ createBaseVNode("code", null, "bind"),
        /* @__PURE__ */ createTextVNode("\u65B9\u6CD5\u65F6\u4F20\u5165\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createTextVNode("\u4F7F\u7528\u5BF9\u8C61\u6765\u8C03\u7528\u5BF9\u8C61\u4E0A\u7684\u65B9\u6CD5\u65F6\uFF0C\u8BE5\u65B9\u6CD5\u7684"),
        /* @__PURE__ */ createBaseVNode("code", null, "this"),
        /* @__PURE__ */ createTextVNode("\u6307\u5411\u8BE5\u5BF9\u8C61")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createTextVNode("\u901A\u8FC7"),
        /* @__PURE__ */ createBaseVNode("code", null, "new"),
        /* @__PURE__ */ createTextVNode("\u64CD\u4F5C\u7B26\u8C03\u7528\u6784\u9020\u51FD\u6570\u65F6\uFF0C\u6784\u9020\u51FD\u6570\u5185\u7684"),
        /* @__PURE__ */ createBaseVNode("code", null, "this"),
        /* @__PURE__ */ createTextVNode("\u6307\u5411\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61")
      ])
    ])
  ])
], -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "foo"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "var"),
      /* @__PURE__ */ createTextVNode(" myName "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"\u6781\u5BA2\u65F6\u95F4"'),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "let"),
      /* @__PURE__ */ createTextVNode(" test1 "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
      /* @__PURE__ */ createTextVNode(" test2 "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "2"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "var"),
      /* @__PURE__ */ createTextVNode(" innerBar "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function-variable function" }, "getName"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n            console"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "log"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("test1"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
      /* @__PURE__ */ createTextVNode(" myName\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function-variable function" }, "setName"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, "newName"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n            myName "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(" newName\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
      /* @__PURE__ */ createTextVNode(" innerBar\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "var"),
      /* @__PURE__ */ createTextVNode(" bar "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "foo"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode("\nbar"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setName"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"\u6781\u5BA2\u90A6"'),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode("\nbar"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getName"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode("\nconsole"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "log"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("bar"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getName"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
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
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "11"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "12"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "13"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "14"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "15"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "16"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "17"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "18"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "19"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5728 JavaScript \u4E2D\uFF0C\u6839\u636E\u8BCD\u6CD5\u4F5C\u7528\u57DF\u7684\u89C4\u5219\uFF0C\u5185\u90E8\u51FD\u6570\u603B\u662F\u53EF\u4EE5\u8BBF\u95EE\u5176\u5916\u90E8\u51FD\u6570\u4E2D\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u5F53\u901A\u8FC7\u8C03\u7528\u4E00\u4E2A\u5916\u90E8\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5185\u90E8\u51FD\u6570\u540E\uFF0C\u5373\u4F7F\u8BE5\u5916\u90E8\u51FD\u6570\u5DF2\u7ECF\u6267\u884C\u7ED3\u675F\u4E86\uFF08\u4E14\u5176\u6267\u884C\u4E0A\u4E0B\u6587\u4E5F\u5DF2\u51FA\u6808\u4E86\uFF09\uFF0C\u4F46\u662F\u5185\u90E8\u51FD\u6570\u5F15\u7528\u5916\u90E8\u51FD\u6570\u7684\u53D8\u91CF\u4F9D\u7136\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u6211\u4EEC\u5C31\u628A\u8FD9\u4E9B\u53D8\u91CF\u7684\u96C6\u5408\u79F0\u4E3A\u95ED\u5305\u3002\u6BD4\u5982\u5916\u90E8\u51FD\u6570\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "foo"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u90A3\u4E48\u8FD9\u4E9B\u53D8\u91CF\u7684\u96C6\u5408\uFF08\u8FD9\u91CC\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "test1"),
  /* @__PURE__ */ createTextVNode("\u548C"),
  /* @__PURE__ */ createBaseVNode("code", null, "myName"),
  /* @__PURE__ */ createTextVNode("\uFF09\u5C31\u79F0\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "foo"),
  /* @__PURE__ */ createTextVNode("\u51FD\u6570\u7684\u95ED\u5305\u3002")
], -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u5783\u573E\u56DE\u6536",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5783\u573E\u56DE\u6536",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5783\u573E\u56DE\u6536")
], -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u6807\u8BB0\u6E05\u9664\uFF08\u4E3B\u6D41\uFF09"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u5F15\u7528\u8BA1\u6570")
], -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("p", null, "JavaScript \u7684\u5783\u573E\u56DE\u6536\uFF0C\u6307\u7684\u662F\u56DE\u6536\u5806\u7A7A\u95F4\u91CC\u7684\u5F15\u7528\u7C7B\u578B\uFF0C\u800C\u5B58\u50A8\u5728\u6808\u91CC\uFF08\u8C03\u7528\u6808\u7684\u6267\u884C\u4E0A\u4E0B\u6587\uFF09\u7684\u539F\u59CB\u7C7B\u578B\uFF0C\u4F1A\u5728\u6267\u884C\u4E0A\u4E0B\u6587\u9500\u6BC1\u65F6\u76F4\u63A5\u56DE\u6536\u7684\u3002", -1);
const _hoisted_41 = {
  href: "https://felixgerschau.com/javascript-memory-management/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_42 = /* @__PURE__ */ createTextVNode("JavaScript's Memory Management Explained");
const _hoisted_43 = /* @__PURE__ */ createTextVNode("\uFF0C\u8FD9\u7BC7\u6587\u7AE0\u5F88\u6E05\u695A\u5730\u8BF4\u660E\u4E86\u5F15\u7528\u8BA1\u6570\u548C\u6807\u8BB0\u6E05\u9664\u3002");
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u5F15\u7528\u8BA1\u6570-\u65E7\u7248-ie-4-6",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5F15\u7528\u8BA1\u6570-\u65E7\u7248-ie-4-6",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5F15\u7528\u8BA1\u6570\uFF08\u65E7\u7248 IE 4-6\uFF09")
], -1);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("p", null, "\u5F15\u7528\u8BA1\u6570\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5185\u5B58\u6CC4\u9732\uFF0C\u6BD4\u5982\u51E0\u4E2A\u5BF9\u8C61\u95F4\u7684\u5FAA\u73AF\u5F15\u7528\uFF0C\u5373\u4F7F\u6700\u540E\u5C06\u8FD9\u51E0\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\uFF08\u4F4D\u4E8E\u6808\u5185\u5B58\uFF09\u90FD\u4ECE\u6267\u884C\u4E0A\u4E0B\u6587\u91CC\u7684\u79FB\u9664\uFF0C\u4F46\u662F\u8FD9\u4E9B\u5904\u4E8E\u5806\u5185\u5B58\u91CC\u7684\u5BF9\u8C61\u4ECD\u7136\u76F8\u4E92\u5F15\u7528\u3002\u7406\u8BBA\u4E0A\u8FD9\u65F6\u5019\u8FD9\u51E0\u4E2A\u5FAA\u73AF\u5F15\u7528\u7684\u5BF9\u8C61\u90FD\u662F\u53EF\u4EE5\u56DE\u6536\u7684\uFF0C\u56E0\u4E3A\u5916\u90E8\u5DF2\u7ECF\u65E0\u6CD5\u8BBF\u95EE\u5230\u4ED6\u4EEC\u3002\u4F46\u662F\u7528\u5F15\u7528\u8BA1\u6570\u6765\u505A\u5783\u573E\u56DE\u6536\u65F6\uFF0C\u8FD9\u51E0\u4E2A\u5BF9\u8C61\u8FD8\u88AB\u5F15\u7528\u7740\u5BFC\u81F4\u4E0D\u80FD\u6536\u56DE\u3002\u6240\u4EE5\uFF0C\u5F15\u7528\u8BA1\u6570\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5185\u5B58\u6CC4\u9732\u3002", -1);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "let"),
      /* @__PURE__ */ createTextVNode(" son "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n  name"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'John'"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "let"),
      /* @__PURE__ */ createTextVNode(" dad "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n  name"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'Johnson'"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createTextVNode("\n\nson"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createTextVNode("dad "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(" dad"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\ndad"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createTextVNode("son "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(" son"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n\nson "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "null"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\ndad "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "null"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
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
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "11"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "12"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "13"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_1,
    alt: "\u5FAA\u73AF\u5F15\u7528"
  })
], -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u6807\u8BB0\u6E05\u9664-mark-and-sweep-\u4E3B\u6D41",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6807\u8BB0\u6E05\u9664-mark-and-sweep-\u4E3B\u6D41",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6807\u8BB0\u6E05\u9664\uFF08Mark-and-Sweep\uFF09\uFF08\u4E3B\u6D41\uFF09")
], -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("blockquote", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "The most popular form of garbage collection for JavaScript is called mark-and-sweep. When a variable comes into context, such as when a variable is declared inside a function, it is flagged as being in context. Variables that are in context, logically, should never have their memory freed, because they may be used as long as execution continues in that context. When a variable goes out of context, it is also flagged as being out of context. Variables can be flagged in any number of ways. There may be a specific bit that is flipped when a variable is in context, or there may be an \u201Cin-context\u201D variable list and an \u201Cout-of-context\u201D variable list between which variables are moved. The implementation of the flagging is unimportant; it's really the theory that is key."),
  /* @__PURE__ */ createBaseVNode("p", null, "When the garbage collector runs, it marks all variables stored in memory (once again, in any number of ways). It then clears its mark off of variables that are in context and variables that are referenced by in-context variables. The variables that are marked after that are considered ready for deletion, because they can\u2019t be reached by any in-context variables. The garbage collector then does a memory sweep, destroying each of the marked values and reclaiming the memory associated with them. As of 2008, Internet Explorer, Firefox, Opera, Chrome, and Safari all use mark-and-sweep garbage collection (or variations thereof) in their JavaScript implementations, though the timing of garbage collection differs."),
  /* @__PURE__ */ createBaseVNode("p", null, "-- JavaScript \u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1 \u7B2C\u4E09\u7248 P78 \u5783\u573E\u6536\u96C6")
], -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6807\u8BB0\u6E05\u9664\u53EF\u4EE5\u89E3\u51B3\u5FAA\u73AF\u5F15\u7528\u7684\u95EE\u9898\uFF0C\u5B83\u5C06\u68C0\u6D4B\u5BF9\u8C61\u662F\u5426\u53EF\u4EE5\u4ECE\u6839\u5BF9\u8C61\uFF08\u6D4F\u89C8\u5668\u91CC\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "window"),
  /* @__PURE__ */ createTextVNode("\u5BF9\u8C61\uFF0CNode.js \u91CC\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "global"),
  /* @__PURE__ */ createTextVNode("\u5BF9\u8C61\uFF09\u89E6\u8FBE\u5230\uFF0C\u4EE5\u53D6\u4EE3\u5F15\u7528\u8BA1\u6570\u90A3\u79CD\u4EC5\u4EC5\u8BA1\u7B97\u5BF9\u5BF9\u8C61\u7684\u5F15\u7528\u6B21\u6570\u3002")
], -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("p", null, "\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u5C06\u4E0D\u53EF\u89E6\u53D1\u7684\u5BF9\u8C61\u6807\u8BB0\u4E3A\u5783\u573E\uFF0C\u5E76\u5728\u4E4B\u540E\u56DE\u6536\u5B83\u4EEC\u3002\u6839\u5BF9\u8C61\u5C06\u6C38\u4E0D\u56DE\u6536\u3002\u8FD9\u79CD\u65B9\u5F0F\u5C06\u89E3\u51B3\u5FAA\u73AF\u5F15\u7528\u95EE\u9898\u3002", -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\u7684\u539F\u56E0",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\u7684\u539F\u56E0",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u9020\u6210\u5185\u5B58\u6CC4\u6F0F\u7684\u539F\u56E0")
], -1);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u5168\u5C40\u4F5C\u7528\u57DF\u91CC\u5B9A\u4E49\u7684\u5168\u5C40\u53D8\u91CF")
], -1);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createTextVNode("user "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getUser"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "var"),
      /* @__PURE__ */ createTextVNode(" secondUser "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getUser"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getUser"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'user'"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "user"),
  /* @__PURE__ */ createTextVNode("\u3001"),
  /* @__PURE__ */ createBaseVNode("code", null, "secondUser"),
  /* @__PURE__ */ createTextVNode("\u548C"),
  /* @__PURE__ */ createBaseVNode("code", null, "getUser"),
  /* @__PURE__ */ createTextVNode("\u90FD\u662F\u7ED1\u5B9A\u5230\u5168\u5C40"),
  /* @__PURE__ */ createBaseVNode("code", null, "window"),
  /* @__PURE__ */ createTextVNode("\u5BF9\u8C61\u4E0A\u7684\u5168\u5C40\u53D8\u91CF\u3002\u901A\u8FC7\u6DFB\u52A0\u4E25\u683C\u6A21\u5F0F\uFF0C\u4F60\u53EF\u4EE5\u907F\u514D\u9690\u5F0F\u58F0\u660E"),
  /* @__PURE__ */ createBaseVNode("code", null, "user"),
  /* @__PURE__ */ createTextVNode("\u8FD9\u6837\u7684\u5168\u5C40\u53D8\u91CF\u3002")
], -1);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u9057\u5FD8\u7684\u5B9A\u65F6\u5668\u548C\u4E8B\u4EF6\u5904\u7406\u51FD\u6570")
], -1);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
      /* @__PURE__ */ createTextVNode(" object "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
      /* @__PURE__ */ createTextVNode(" intervalId "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setInterval"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// everything used in here can't be collected"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// until the interval is cleared"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "doSomething"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("object"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "2000"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// \u5F53\u4F60\u4E0D\u518D\u9700\u8981\u5B9A\u65F6\u5668\u65F6\uFF0C\u8BB0\u5F97\u8981\u6E05\u7406\u6389"),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// clearInterval(intervalId);"),
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("p", null, "\u8FD9\u79CD\u60C5\u51B5\u7ECF\u5E38\u53D1\u751F\u7684 SPA\uFF0C\u5C3D\u7BA1\u4F60\u5DF2\u7ECF\u5BFC\u822A\u5230 SPA \u91CC\u7684\u53E6\u4E00\u4E2A\u8DEF\u7531\uFF0C\u5B9A\u65F6\u5668\u4ECD\u7136\u4F1A\u5728\u540E\u53F0\u8FD0\u884C\u3002", -1);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
      /* @__PURE__ */ createTextVNode(" element "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(" document"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getElementById"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'button'"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function-variable function" }, "onClick"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "=>"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "alert"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'hi'"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n\nelement"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "addEventListener"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'click'"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode(" onClick"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// \u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0C\u4E5F\u662F\u5982\u6B64\uFF0C\u5982\u679C\u5728\u79BB\u5F00\u9875\u9762\u65F6\u4E0D\u79FB\u9664\u6389\uFF0C\u4E0B\u6B21\u8FDB\u5165\u8BE5\u9875\u9762\u4F1A\u65B0\u589E\u4E00\u4E2A\u4E8B\u4EF6\u5904\u7406\u51FD\u6570"),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// element.removeEventListener('click', onClick);"),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// element.parentNode.removeChild(element);"),
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u9057\u5FD8\u4E86 JavaScript \u5BF9 DOM \u7684\u5F15\u7528")
], -1);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
      /* @__PURE__ */ createTextVNode(" elements "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
      /* @__PURE__ */ createTextVNode(" element "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(" document"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getElementById"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'button'"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\nelements"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "push"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("element"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "removeAllElements"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n  elements"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "forEach"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
        /* @__PURE__ */ createTextVNode("item"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" index")
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "=>"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n    document"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createTextVNode("body"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "removeChild"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("document"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getElementById"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("item"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createTextVNode("id"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// \u5C06 DOM \u5BF9\u8C61\u4ECE JavaScript \u6570\u7EC4\u91CC\u79FB\u9664"),
      /* @__PURE__ */ createTextVNode("\n    elements"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "splice"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("index"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// \u6216\u8005\u8FD9\u6837\u79FB\u9664"),
      /* @__PURE__ */ createTextVNode("\n  elements"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createTextVNode("length "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "0"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
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
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "11"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "12"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "13"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("p", null, "\u82E5\u662F\u5C06 DOM \u5BF9\u8C61\u5B58\u50A8\u5728 JavaScript \u5BF9\u8C61\u91CC\uFF0C\u5F53\u5C06 DOM \u8282\u70B9\u79FB\u9664\u65F6\uFF0C\u4E5F\u8981\u5C06 DOM \u5BF9\u8C61\u4ECE JavaScript \u5BF9\u8C61\u91CC\u79FB\u9664\u3002", -1);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("p", null, "\u4EE5\u4E0B\u7684\u8FD9\u4E9B\u70B9\u90FD\u662F\u5F88\u4E45\u4EE5\u524D\u7684\u5185\u5BB9\uFF0C\u53EF\u80FD\u5DF2\u7ECF\u4E0D\u592A\u5B9E\u7528\u3002", -1);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u5FAA\u73AF\u5F15\u7528\uFF08 IE9 \u4E4B\u524D\u7684\u6D4F\u89C8\u5668\u91CC BOM \u548C DOM \u4E2D\u7684\u5BF9\u8C61\u662F\u4EE5 COM \u5BF9\u8C61\u7684\u5F62\u5F0F\u51FA\u73B0\u7684\uFF0C\u800C COM \u5BF9\u8C61\u7684\u5783\u573E\u6536\u96C6\u673A\u5236\u91C7\u7528\u7684\u5C31\u662F\u5F15\u7528\u8BA1\u6570\u7B56\u7565\uFF0C\u76F8\u5173\u77E5\u8BC6\u53C2\u89C1 JavaScript \u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1 \u7B2C\u4E09\u7248 P78 \u5783\u573E\u6536\u96C6\uFF09"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u5185\u90E8\u51FD\u6570\u5F15\u7528\uFF08\u95ED\u5305\uFF09"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u9875\u9762\u4EA4\u53C9\u6CC4\u6F0F"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u8C8C\u4F3C\u6CC4\u6F0F")
], -1);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "v8-\u6267\u884C-javascript-\u4EE3\u7801\u7684\u8FC7\u7A0B",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#v8-\u6267\u884C-javascript-\u4EE3\u7801\u7684\u8FC7\u7A0B",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" V8 \u6267\u884C JavaScript \u4EE3\u7801\u7684\u8FC7\u7A0B")
], -1);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("p", null, "V8 \u6267\u884C JavaScript \u4EE3\u7801\u7684\u8FC7\u7A0B:", -1);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u5C06 JavaScript \u6E90\u7801\u8F6C\u6362\u4E3A AST\uFF08\u62BD\u8C61\u8BED\u6CD5\u6811\uFF09\u548C\u6267\u884C\u4E0A\u4E0B\u6587 "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createTextVNode("\u5148\u751F\u6210 AST "),
        /* @__PURE__ */ createBaseVNode("ul", null, [
          /* @__PURE__ */ createBaseVNode("li", null, "\u8BCD\u6CD5\u5206\u6790"),
          /* @__PURE__ */ createBaseVNode("li", null, "\u8BED\u6CD5\u5206\u6790")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, "\u57FA\u4E8E AST\uFF0C\u751F\u6210\u6267\u884C\u4E0A\u4E0B\u6587")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, "\u89E3\u91CA\u5668\uFF08Ignition\uFF09\u57FA\u4E8E AST \u751F\u6210\u5B57\u8282\u7801"),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u89E3\u91CA\u5668\u89E3\u91CA\u6267\u884C\u5B57\u8282\u7801 & \u7F16\u8BD1\u5668\uFF08TurboFan\uFF09\u7F16\u8BD1\u70ED\u70B9\u4EE3\u7801 "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "\u9488\u5BF9\u5E38\u89C4\u7684\u5B57\u8282\u7801\uFF0C\u89E3\u91CA\u5668\u9010\u6761\u89E3\u91CA\u6267\u884C\uFF08\u5176\u5B9E\u6700\u7EC8\u4E5F\u8981\u7F16\u8BD1\u6210\u673A\u5668\u7801\u6267\u884C\uFF09"),
      /* @__PURE__ */ createBaseVNode("li", null, "\u9488\u5BF9\u6D3B\u8DC3\u7684\u5B57\u8282\u7801\uFF08\u5373\u91CD\u590D\u6267\u884C\u591A\u6B21\u7684\u70ED\u70B9\u4EE3\u7801\uFF09\uFF0C\u7F16\u8BD1\u5668\u4F1A\u5C06\u8BE5\u6BB5\u5B57\u8282\u7801\u7F16\u8BD1\u4E3A\u66F4\u52A0\u9AD8\u6548\u7684\u673A\u5668\u7801\uFF0C\u4E0B\u6B21\u5C31\u4E0D\u9700\u8981\u518D\u5C06\u8BE5\u6BB5\u5B57\u8282\u7801\u7F16\u8BD1\u4E3A\u673A\u5668\u7801\u4E86")
    ])
  ])
], -1);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("p", null, "\u5B57\u8282\u7801\u5360\u7528\u5185\u5B58\u5C0F\uFF0C\u4F46\u6267\u884C\u901F\u5EA6\u6162\uFF08\u56E0\u4E3A\u5B57\u8282\u7801\u6700\u7EC8\u8FD8\u662F\u8981\u7F16\u8BD1\u6210\u673A\u5668\u7801\u624D\u80FD\u6267\u884C\uFF09\uFF1B\u673A\u5668\u7801\u5360\u7528\u5185\u5B58\u5927\uFF0C\u4F46\u6267\u884C\u901F\u5EA6\u5FEB\u3002", -1);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("p", null, "\u82E5\u662F\u5C06 AST \u76F4\u63A5\u5168\u90E8\u8F6C\u6362\u6210\u673A\u5668\u7801\uFF0C\u5219\u5185\u5B58\u5360\u7528\u5C06\u8FC7\u5927\u3002\u56E0\u6B64\u5148\u5C06 AST \u8F6C\u6362\u4E3A\u5360\u7528\u5185\u5B58\u66F4\u5C0F\u7684\u5B57\u8282\u7801\uFF0C\u89E3\u91CA\u6267\u884C\u5B57\u8282\u7801\u65F6\uFF0C\u518D\u5C06\u5B57\u8282\u7801\u9010\u6761\u7F16\u8BD1\u6210\u673A\u5668\u7801\u6267\u884C\u3002\u4E14\u9488\u5BF9\u6D3B\u8DC3\u7684\u5B57\u8282\u7801\uFF0C\u7F16\u8BD1\u5668\u4F1A\u5C06\u5176\u7F16\u8BD1\u6210\u673A\u5668\u7801\uFF0C\u52A0\u5FEB\u6267\u884C\u6548\u7387\uFF08\u5F53\u7136\u4E5F\u4F1A\u5360\u7528\u66F4\u591A\u5185\u5B58\uFF09\u3002", -1);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_2,
    alt: "v8 \u7684\u89E3\u91CA\u5668\u548C\u7F16\u8BD1\u5668"
  })
], -1);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("p", null, "\u56E0\u6B64 V8 \u662F\u7EFC\u5408\u4F7F\u7528\u4E86\u7F16\u8BD1\u5668\u548C\u89E3\u91CA\u5668\u6765\u6743\u8861\u5185\u5B58\u5360\u7528\u548C\u6267\u884C\u6548\u7387\u3002", -1);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u4E3A\u4EC0\u4E48\u4E0D\u5728\u6253\u5305\u65F6\u5C31\u5C06 JavaScript \u6E90\u7801\u8F6C\u6362\u6210\u5B57\u8282\u7801\uFF0C\u6D4F\u89C8\u5668\u4E0B\u8F7D\u5B57\u8282\u7801\u6587\u4EF6\u540E\u89E3\u91CA\u6267\u884C\u5B57\u8282\u7801\u5462\uFF1F")
], -1);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("p", null, "\u8F6C\u6362\u540E\u7684\u5B57\u8282\u7801\u6BD4\u6E90\u7801\u4F53\u79EF\u5927\u5F88\u591A\uFF0C\u4E0B\u8F7D\u5B57\u8282\u7801\u6587\u4EF6\u4F1A\u589E\u52A0\u52A0\u8F7D\u65F6\u95F4\uFF0C\u5F97\u4E0D\u507F\u5931\u3002", -1);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u65E2\u7136\u5B57\u8282\u7801\u6700\u7EC8\u90FD\u4F1A\u7F16\u8BD1\u6210\u673A\u5668\u7801\uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u8981\u5148\u8F6C\u6362\u6210\u5B57\u8282\u7801\u5462\uFF1F")
], -1);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("p", null, "\u4E2A\u4EBA\u7406\u89E3\uFF1A\u5728\u9010\u6761\u89E3\u91CA\u6267\u884C\u5B57\u8282\u7801\u65F6\uFF0C\u4EC5\u662F\u9488\u5BF9\u5355\u6761\u5B57\u8282\u7801\u7F16\u8BD1\u6210\u673A\u5668\u7801\uFF0C\u6267\u884C\u540E\u4E4B\u540E\u5C31\u91CA\u653E\u5185\u5B58\uFF0C\u518D\u5C06\u4E0B\u4E00\u6761\u5B57\u8282\u7801\u7F16\u8BD1\u6210\u673A\u5668\u7801\u6267\u884C\uFF0C\u56E0\u6B64\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\u540C\u4E00\u5757\u5185\u5B58\u7A7A\u95F4\u3002", -1);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u7591\u95EE",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7591\u95EE",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7591\u95EE")
], -1);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u5757\u7EA7\u4F5C\u7528\u57DF\u91CC\u58F0\u660E\u51FD\u6570",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5757\u7EA7\u4F5C\u7528\u57DF\u91CC\u58F0\u660E\u51FD\u6570",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5757\u7EA7\u4F5C\u7528\u57DF\u91CC\u58F0\u660E\u51FD\u6570")
], -1);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "debugger"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n    console"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "log"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'g:'"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode(" g"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token boolean" }, "true"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n        console"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "log"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'hello world'"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "g"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token boolean" }, "true"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6267\u884C\u4EE5\u4E0A\u4EE3\u7801\u4F1A\u53D1\u73B0\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "g"),
  /* @__PURE__ */ createTextVNode("\u6253\u5370\u51FA\u6765\u7684\u503C\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "undefined"),
  /* @__PURE__ */ createTextVNode("\u3002\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F")
], -1);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode("p", null, "ECMAScript \u91CC\u89C4\u5B9A\u51FD\u6570\u4E0D\u80FD\u5728\u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\u58F0\u660E\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u6267\u884C\u4F1A\u62A5\u9519\uFF0C\u4F46\u662F\u5404\u5927\u6D4F\u89C8\u5668\u90FD\u6CA1\u6709\u9075\u5B88\u8FD9\u4E2A\u6807\u51C6\u3002", -1);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "foo"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token boolean" }, "true"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n        console"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "log"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'hello world'"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "g"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token boolean" }, "true"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createTextVNode("\n    "),
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u63A5\u4E0B\u6765\u5230\u4E86 ES6 \u4E86\uFF0CES6 \u660E\u786E\u652F\u6301\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0CES6 \u89C4\u5B9A\u5757\u7EA7\u4F5C\u7528\u57DF\u5185\u90E8\u58F0\u660E\u7684\u51FD\u6570\uFF0C\u548C\u901A\u8FC7"),
  /* @__PURE__ */ createBaseVNode("code", null, "let"),
  /* @__PURE__ */ createTextVNode("\u58F0\u660E\u53D8\u91CF\u7684\u884C\u4E3A\u7C7B\u4F3C\u3002")
], -1);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u89C4\u5B9A\u7684\u662F\u7406\u60F3\u7684\uFF0C\u4F46\u662F\u8FD8\u8981\u7167\u987E\u5B9E\u73B0\uFF0C\u8981\u662F\u5B8C\u5168\u6309\u7167"),
  /* @__PURE__ */ createBaseVNode("code", null, "let"),
  /* @__PURE__ */ createTextVNode("\u7684\u65B9\u5F0F\u6765\u4FEE\u8BA2\uFF0C\u4F1A\u5F71\u54CD\u5230\u4EE5\u524D\u8001\u7684\u4EE3\u7801\uFF0C\u6240\u4EE5\u4E3A\u4E86\u5411\u4E0B\u517C\u5BB9\uFF0C\u5404\u5927\u6D4F\u89C8\u5668\u57FA\u672C\u662F\u6309\u7167\u4E0B\u9762\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u7684\uFF1A")
], -1);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "foo"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token boolean" }, "true"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n        console"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "log"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'hello world'"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "var"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function-variable function" }, "g"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token boolean" }, "true"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createTextVNode("\n    "),
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u8FD9\u5C31\u89E3\u91CA\u4E86"),
  /* @__PURE__ */ createBaseVNode("code", null, "g"),
  /* @__PURE__ */ createTextVNode("\u6253\u5370\u51FA\u6765\u7684\u503C\u4E3A\u4EC0\u4E48\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "undefined"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u4E0D\u8FC7\u8FD8\u662F\u4E0D\u5EFA\u8BAE\u5728\u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\u5B9A\u4E49\u51FD\u6570\uFF0C\u5F88\u591A\u65F6\u5019\uFF0C\u7B80\u5355\u7684\u624D\u662F\u6700\u597D\u7684\u3002")
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u52A8\u6001\u8BED\u8A00-\u5F31\u7C7B\u578B\u8BED\u8A00" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u53D8\u91CF\u63D0\u5347" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4E3A\u4EC0\u4E48\u8981\u8BBE\u8BA1\u53D8\u91CF\u63D0\u5347" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#this" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5783\u573E\u56DE\u6536" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5F15\u7528\u8BA1\u6570-\u65E7\u7248-ie-4-6" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6807\u8BB0\u6E05\u9664-mark-and-sweep-\u4E3B\u6D41" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\u7684\u539F\u56E0" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#v8-\u6267\u884C-javascript-\u4EE3\u7801\u7684\u8FC7\u7A0B" }, {
            default: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7591\u95EE" }, {
            default: withCtx(() => [
              _hoisted_12
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5757\u7EA7\u4F5C\u7528\u57DF\u91CC\u58F0\u660E\u51FD\u6570" }, {
                default: withCtx(() => [
                  _hoisted_13
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_14,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_15,
        createBaseVNode("a", _hoisted_16, [
          _hoisted_17,
          createVNode(_component_OutboundLink)
        ])
      ]),
      _hoisted_18
    ]),
    _hoisted_19,
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
    _hoisted_32,
    _hoisted_33,
    _hoisted_34,
    _hoisted_35,
    _hoisted_36,
    _hoisted_37,
    _hoisted_38,
    _hoisted_39,
    _hoisted_40,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_41, [
          _hoisted_42,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_43
      ])
    ]),
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
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
