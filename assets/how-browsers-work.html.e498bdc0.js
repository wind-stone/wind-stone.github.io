import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
var _imports_0 = "/assets/create-dom-tree.ab7c89b8.png";
var _imports_1 = "/assets/how-create-dom-tree.b94c23c5.png";
var _imports_2 = "/assets/css-property-normalization.5dd178d6.png";
var _imports_3 = "/assets/layout-tree.7f56b4df.png";
var _imports_4 = "/assets/layer-tree.2792b077.png";
var _imports_5 = "/assets/tiles.1551789f.png";
var _imports_6 = "/assets/raster.0a1773e7.png";
var _imports_7 = "/assets/gpu-raster.c40432c5.png";
var _imports_8 = "/assets/whole-render-pipeline.b70f11f8.png";
var _imports_9 = "/assets/reflow.ffff4529.png";
var _imports_10 = "/assets/repaint.1c27e40b.png";
var _imports_11 = "/assets/composite.16f3f3f6.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u9875\u9762\u6E32\u67D3-\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406-\u6253\u5F00\u9875\u9762\u5168\u6D41\u7A0B",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u9875\u9762\u6E32\u67D3-\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406-\u6253\u5F00\u9875\u9762\u5168\u6D41\u7A0B",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u9875\u9762\u6E32\u67D3\uFF1A\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406\uFF08\u6253\u5F00\u9875\u9762\u5168\u6D41\u7A0B\uFF09")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("1. \u5904\u7406\u7528\u6237\u8F93\u5165");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("2. URL \u8BF7\u6C42\u8FC7\u7A0B");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("3. \u51C6\u5907\u6E32\u67D3\u8FDB\u7A0B");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("4. \u63D0\u4EA4\u6587\u6863");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("5. \u6E32\u67D3\u9636\u6BB5");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u6784\u5EFA DOM \u6811");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u6837\u5F0F\u8BA1\u7B97\uFF08\u6784\u5EFA CSSOM \u6811\uFF09");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u628A CSS \u8F6C\u6362\u4E3A\u6D4F\u89C8\u5668\u80FD\u591F\u7406\u89E3\u7684\u7ED3\u6784");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u8F6C\u6362\u6837\u5F0F\u8868\u4E2D\u7684\u5C5E\u6027\u503C\uFF0C\u4F7F\u5176\u6807\u51C6\u5316");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u8BA1\u7B97\u51FA DOM \u6811\u4E2D\u6BCF\u4E2A\u8282\u70B9\u7684\u5177\u4F53\u6837\u5F0F");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u5E03\u5C40");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u521B\u5EFA\u5E03\u5C40\u6811");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u5E03\u5C40\u8BA1\u7B97");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u5206\u5C42");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u56FE\u5C42\u7ED8\u5236");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u5408\u6210");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("\u5212\u5206\u56FE\u5757");
const _hoisted_20 = /* @__PURE__ */ createTextVNode("\u6805\u683C\u5316");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("\u663E\u793A");
const _hoisted_22 = /* @__PURE__ */ createTextVNode("\u603B\u7ED3");
const _hoisted_23 = /* @__PURE__ */ createTextVNode("\u76F8\u5173\u6982\u5FF5\uFF1A\u91CD\u6392\u3001\u91CD\u7ED8\u3001\u5408\u6210");
const _hoisted_24 = /* @__PURE__ */ createTextVNode("\u66F4\u65B0\u4E86\u5143\u7D20\u7684\u51E0\u4F55\u5C5E\u6027\uFF08\u91CD\u6392\uFF09");
const _hoisted_25 = /* @__PURE__ */ createTextVNode("\u66F4\u65B0\u5143\u7D20\u7684\u7ED8\u5236\u5C5E\u6027\uFF08\u91CD\u7ED8\uFF09");
const _hoisted_26 = /* @__PURE__ */ createTextVNode("\u76F4\u63A5\u5408\u6210");
const _hoisted_27 = /* @__PURE__ */ createTextVNode("will-change");
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("p", null, "\u7EDD\u5927\u90E8\u5206\u5185\u5BB9\u590D\u5236\u4E8E\uFF1A", -1);
const _hoisted_29 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_30 = /* @__PURE__ */ createTextVNode("MDN - \u6E32\u67D3\u9875\u9762\uFF1A\u6D4F\u89C8\u5668\u7684\u5DE5\u4F5C\u539F\u7406");
const _hoisted_31 = /* @__PURE__ */ createTextVNode("\uFF0C");
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("strong", null, "\u8FD9\u7BC7\u6587\u7AE0\u975E\u5E38\u597D\uFF0C\u503C\u5F97\u53CD\u590D\u9605\u8BFB", -1);
const _hoisted_33 = {
  href: "https://time.geekbang.org/column/article/117637",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_34 = /* @__PURE__ */ createTextVNode("\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406\u4E0E\u5B9E\u8DF5 - 04 | \u5BFC\u822A\u6D41\u7A0B\uFF1A\u4ECE\u8F93\u5165URL\u5230\u9875\u9762\u5C55\u793A\uFF0C\u8FD9\u4E2D\u95F4\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F");
const _hoisted_35 = {
  href: "https://time.geekbang.org/column/article/118205",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_36 = /* @__PURE__ */ createTextVNode("\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406\u4E0E\u5B9E\u8DF5 - 05 | \u6E32\u67D3\u6D41\u7A0B\uFF08\u4E0A\uFF09\uFF1AHTML\u3001CSS\u548CJavaScript\uFF0C\u662F\u5982\u4F55\u53D8\u6210\u9875\u9762\u7684\uFF1F");
const _hoisted_37 = {
  href: "https://time.geekbang.org/column/article/118826",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_38 = /* @__PURE__ */ createTextVNode("\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406\u4E0E\u5B9E\u8DF5 - 06 | \u6E32\u67D3\u6D41\u7A0B\uFF08\u4E0B\uFF09\uFF1AHTML\u3001CSS\u548CJavaScript\uFF0C\u662F\u5982\u4F55\u53D8\u6210\u9875\u9762\u7684\uFF1F");
const _hoisted_39 = {
  href: "https://time.geekbang.org/column/article/140140",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_40 = /* @__PURE__ */ createTextVNode("\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406\u4E0E\u5B9E\u8DF5 - 22 | DOM\u6811\uFF1AJavaScript\u662F\u5982\u4F55\u5F71\u54CDDOM\u6811\u6784\u5EFA\u7684\uFF1F");
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "_1-\u5904\u7406\u7528\u6237\u8F93\u5165",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#_1-\u5904\u7406\u7528\u6237\u8F93\u5165",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" 1. \u5904\u7406\u7528\u6237\u8F93\u5165")
], -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5F53\u7528\u6237\u5728\u5730\u5740\u680F\u4E2D\u8F93\u5165\u4E00\u4E2A\u67E5\u8BE2\u5173\u952E\u5B57\u65F6\uFF0C\u5730\u5740\u680F\u4F1A\u5224\u65AD\u8F93\u5165\u7684\u5173\u952E\u5B57\u662F"),
  /* @__PURE__ */ createBaseVNode("strong", null, "\u641C\u7D22\u5185\u5BB9"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u8FD8\u662F"),
  /* @__PURE__ */ createBaseVNode("strong", null, "\u8BF7\u6C42\u7684 URL"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("p", null, "\u82E5\u662F\u641C\u7D22\u5185\u5BB9\uFF0C\u5730\u5740\u680F\u4F1A\u4F7F\u7528\u6D4F\u89C8\u5668\u9ED8\u8BA4\u7684\u641C\u7D22\u5F15\u64CE\uFF0C\u6765\u5408\u6210\u65B0\u7684\u5E26\u641C\u7D22\u5173\u952E\u5B57\u7684 URL\u3002", -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u82E5\u662F\u5224\u65AD\u8F93\u5165\u5185\u5BB9\u7B26\u5408 URL \u89C4\u5219\uFF0C\u6BD4\u5982\u8F93\u5165\u7684\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "blog.windstone.cc"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u90A3\u4E48\u5730\u5740\u680F\u4F1A\u6839\u636E\u89C4\u5219\u628A\u8FD9\u6BB5\u5185\u5BB9\u52A0\u4E0A\u534F\u8BAE\uFF0C\u5408\u6210\u4E3A\u5B8C\u6574\u7684 URL\uFF0C\u5982"),
  /* @__PURE__ */ createBaseVNode("code", null, "https://blog.windstone.cc"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5F53\u7528\u6237\u8F93\u5165\u5173\u952E\u5B57\u5E76\u952E\u5165\u56DE\u8F66\u4E4B\u540E\uFF0C\u8FD9\u610F\u5473\u7740\u5F53\u524D\u9875\u9762\u5373\u5C06\u8981\u88AB\u66FF\u6362\u6210\u65B0\u7684\u9875\u9762\u3002\u4E0D\u8FC7\u5728\u8FD9\u4E2A\u6D41\u7A0B\u7EE7\u7EED\u4E4B\u524D\uFF0C\u6D4F\u89C8\u5668\u8FD8\u7ED9\u4E86\u5F53\u524D\u9875\u9762\u4E00\u6B21\u6267\u884C"),
  /* @__PURE__ */ createBaseVNode("code", null, "beforeunload"),
  /* @__PURE__ */ createTextVNode("\u4E8B\u4EF6\u7684\u673A\u4F1A\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "beforeunload"),
  /* @__PURE__ */ createTextVNode("\u4E8B\u4EF6\u5141\u8BB8\u9875\u9762\u5728\u9000\u51FA\u4E4B\u524D\u6267\u884C\u4E00\u4E9B\u6570\u636E\u6E05\u7406\u64CD\u4F5C\uFF0C\u8FD8\u53EF\u4EE5\u8BE2\u95EE\u7528\u6237\u662F\u5426\u8981\u79BB\u5F00\u5F53\u524D\u9875\u9762\uFF0C\u6BD4\u5982\u5F53\u524D\u9875\u9762\u53EF\u80FD\u6709\u672A\u63D0\u4EA4\u5B8C\u6210\u7684\u8868\u5355\u7B49\u60C5\u51B5\uFF0C\u56E0\u6B64\u7528\u6237\u53EF\u4EE5\u901A\u8FC7"),
  /* @__PURE__ */ createBaseVNode("code", null, "beforeunload"),
  /* @__PURE__ */ createTextVNode("\u4E8B\u4EF6\u6765\u53D6\u6D88\u5BFC\u822A\uFF0C\u8BA9\u6D4F\u89C8\u5668\u4E0D\u518D\u6267\u884C\u4EFB\u4F55\u540E\u7EED\u5DE5\u4F5C\u3002")
], -1);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u82E5\u662F\u5F53\u524D\u9875\u9762\u6CA1\u6709\u76D1\u542C"),
  /* @__PURE__ */ createBaseVNode("code", null, "beforeunload"),
  /* @__PURE__ */ createTextVNode("\u4E8B\u4EF6\u6216\u8005\u540C\u610F\u4E86\u7EE7\u7EED\u540E\u7EED\u6D41\u7A0B\uFF0C\u90A3\u4E48\u6D4F\u89C8\u5668\u6807\u7B7E\u9875\u4E0A\u7684\u56FE\u6807\u4FBF\u8FDB\u5165\u52A0\u8F7D\u72B6\u6001\uFF0C"),
  /* @__PURE__ */ createBaseVNode("strong", null, "\u6B64\u65F6\u9875\u9762\u663E\u793A\u7684\u4F9D\u7136\u662F\u4E4B\u524D\u6253\u5F00\u7684\u9875\u9762\u5185\u5BB9\uFF0C\u5E76\u6CA1\u6709\u7ACB\u5373\u66FF\u6362\u4E3A\u65B0\u7684 URL \u7684\u9875\u9762\u3002\u53EA\u6709\u5F53\u65B0\u7684 URL \u8BF7\u6C42\u8FD4\u56DE\u4E4B\u540E\uFF0C\u9875\u9762\u5185\u5BB9\u624D\u4F1A\u88AB\u66FF\u6362"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("p", null, "\u6CE8\u610F\uFF1A\u63A5\u6536\u7528\u6237\u8F93\u5165\u7684\u662F\u6D4F\u89C8\u5668\u8FDB\u7A0B\uFF0C\u786E\u5B9A\u6700\u7EC8\u7684 URL \u540E\uFF0C\u6D4F\u89C8\u5668\u8FDB\u7A0B\u4F1A\u5C06 URL \u8F6C\u53D1\u7ED9\u7F51\u7EDC\u8FDB\u7A0B\u3002", -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "_2-url-\u8BF7\u6C42\u8FC7\u7A0B",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#_2-url-\u8BF7\u6C42\u8FC7\u7A0B",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" 2. URL \u8BF7\u6C42\u8FC7\u7A0B")
], -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("p", null, "\u6D4F\u89C8\u5668\u8FDB\u7A0B\u4F1A\u901A\u8FC7\u8FDB\u7A0B\u95F4\u901A\u4FE1\uFF08IPC\uFF09\u628A URL \u8BF7\u6C42\u53D1\u9001\u81F3\u7F51\u7EDC\u8FDB\u7A0B\uFF0C\u7F51\u7EDC\u8FDB\u7A0B\u63A5\u6536\u5230 URL \u8BF7\u6C42\u540E\uFF0C\u4F1A\u5728\u8FD9\u91CC\u53D1\u8D77\u771F\u6B63\u7684 URL \u8BF7\u6C42\u6D41\u7A0B\u3002", -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("ol", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u67E5\u770B\u6D4F\u89C8\u5668\u672C\u5730\u7F13\u5B58\uFF1A\u9996\u5148\uFF0C\u7F51\u7EDC\u8FDB\u7A0B\u4F1A\u67E5\u627E\u672C\u5730\u7F13\u5B58\u662F\u5426\u7F13\u5B58\u4E86\u8BE5\u8D44\u6E90\u3002\u82E5\u6709\u7F13\u5B58\u8D44\u6E90\u4E14\u5728\u6709\u6548\u671F\u5185\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\u8D44\u6E90\u7ED9\u6D4F\u89C8\u5668\u8FDB\u7A0B\uFF1B\u5426\u5219\uFF0C\u76F4\u63A5\u8FDB\u5165\u7F51\u7EDC\u8BF7\u6C42\u6D41\u7A0B\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "DNS \u89E3\u6790\uFF1A\u8BF7\u6C42\u524D\uFF0C\u8981\u5148\u8FDB\u884C DNS \u89E3\u6790\uFF0C\u4EE5\u83B7\u53D6\u8BF7\u6C42\u57DF\u540D\u7684\u670D\u52A1\u5668 IP \u5730\u5740\u3002\u5982\u679C\u8BF7\u6C42\u534F\u8BAE\u662F HTTPS\uFF0C\u90A3\u4E48\u8FD8\u9700\u8981\u5EFA\u7ACB TLS \u8FDE\u63A5\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u5EFA\u7ACB TCP \u8FDE\u63A5\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u53D1\u9001\u8BF7\u6C42\uFF1A\u6784\u5EFA\u8BF7\u6C42\u884C\u3001\u8BF7\u6C42\u5934\u7B49\u4FE1\u606F\uFF0C\u5E76\u628A\u548C\u8BE5\u57DF\u540D\u76F8\u5173\u7684 Cookie \u7B49\u6570\u636E\u9644\u52A0\u5230\u8BF7\u6C42\u5934\u4E2D\uFF0C\u7136\u540E\u5411\u670D\u52A1\u5668\u53D1\u9001\u6784\u5EFA\u7684\u8BF7\u6C42\u4FE1\u606F\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u670D\u52A1\u5668\u8FD4\u56DE\u54CD\u5E94\u6570\u636E"),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u6839\u636E\u54CD\u5E94\u7801\u548C\u54CD\u5E94\u5934\u91CC\u7684"),
    /* @__PURE__ */ createBaseVNode("code", null, "Content-Type"),
    /* @__PURE__ */ createTextVNode("\u5224\u65AD\u5982\u4F55\u5904\u7406\u54CD\u5E94\u6570\u636E "),
    /* @__PURE__ */ createBaseVNode("ol", null, [
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createTextVNode("\u54CD\u5E94\u7801\u4E3A 301\u3001302 \u7B49\uFF0C\u91CD\u5B9A\u5411\u5230\u65B0\u7684 URL\uFF0C\u91CD\u65B0\u8FDB\u884C"),
        /* @__PURE__ */ createBaseVNode("strong", null, "2. URL \u8BF7\u6C42\u8FC7\u7A0B"),
        /* @__PURE__ */ createTextVNode("\u8FC7\u7A0B\u3002")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createTextVNode("\u54CD\u5E94\u7801\u4E3A 200\uFF0C\u4E14"),
        /* @__PURE__ */ createBaseVNode("code", null, "Content-Type"),
        /* @__PURE__ */ createTextVNode("\u4E3A"),
        /* @__PURE__ */ createBaseVNode("code", null, "text/html"),
        /* @__PURE__ */ createTextVNode("\uFF0C\u8FDB\u5165\u4E0B\u4E00\u6B65\u51C6\u5907\u6E32\u67D3\u8FDB\u7A0B\u3002")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("code", null, "Content-Type"),
        /* @__PURE__ */ createTextVNode("\u4E3A\u4E0B\u8F7D\u7C7B\u578B\uFF0C\u63D0\u4EA4\u7ED9\u6D4F\u89C8\u5668\u7684\u4E0B\u8F7D\u7BA1\u7406\u5668")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, "\u5176\u4ED6\u5404\u79CD\u60C5\u51B5")
    ])
  ])
], -1);
const _hoisted_51 = { class: "custom-container warning" };
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "\u6CE8\u610F", -1);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5F53\u7F51\u7EDC\u8FDB\u7A0B\u63A5\u6536\u5230\u54CD\u5E94\u5934\u5E76\u5224\u65AD"),
  /* @__PURE__ */ createBaseVNode("code", null, "Content-Type"),
  /* @__PURE__ */ createTextVNode("\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "text/html"),
  /* @__PURE__ */ createTextVNode("\u4E4B\u540E\uFF0C\u6D4F\u89C8\u5668\u8FDB\u7A0B\u4F1A\u8BA9\u5F53\u524D\u9875\u9762\u6267\u884C\u9000\u51FA\u524D\u7684\u6E05\u7406\u64CD\u4F5C\uFF0C\u6BD4\u5982\u6267\u884C JavaScript \u4E2D\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "visibilitychange"),
  /* @__PURE__ */ createTextVNode("\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "beforunload"),
  /* @__PURE__ */ createTextVNode("\u4E8B\u4EF6\uFF0C\u6E05\u7406\u64CD\u4F5C\u6267\u884C\u7ED3\u675F\u4E4B\u540E\uFF0C\u5C31\u8FDB\u5165\u4E0B\u4E00\u6B65\uFF1A\u51C6\u5907\u6E32\u67D3\u8FDB\u7A0B\u3002")
], -1);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("p", null, "\u5173\u4E8E\u6D4F\u89C8\u5668\u5173\u95ED\u9875\u9762\u65F6\u8981\u6267\u884C\u7684\u4E8B\u4EF6\uFF0C\u53EF\u53C2\u8003:", -1);
const _hoisted_55 = {
  href: "http://www.ruanyifeng.com/blog/2018/10/page_visibility_api.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_56 = /* @__PURE__ */ createTextVNode("\u962E\u4E00\u5CF0 - Page Visibility API \u6559\u7A0B");
const _hoisted_57 = {
  href: "http://www.ruanyifeng.com/blog/2018/11/page_lifecycle_api.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_58 = /* @__PURE__ */ createTextVNode("\u962E\u4E00\u5CF0 - Page Lifecycle API \u6559\u7A0B");
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5C24\u5176\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5173\u95ED\u9875\u9762\u65F6\uFF0C\u53EF\u80FD\u4F1A\u89E6\u53D1"),
  /* @__PURE__ */ createBaseVNode("code", null, "visibilitychange"),
  /* @__PURE__ */ createTextVNode("\u4E8B\u4EF6\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "document.visibilityState"),
  /* @__PURE__ */ createTextVNode("\u4F1A\u53D8\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "hidden"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "_3-\u51C6\u5907\u6E32\u67D3\u8FDB\u7A0B",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#_3-\u51C6\u5907\u6E32\u67D3\u8FDB\u7A0B",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" 3. \u51C6\u5907\u6E32\u67D3\u8FDB\u7A0B")
], -1);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("p", null, "\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CChrome \u4F1A\u4E3A\u6BCF\u4E2A\u9875\u9762\u5206\u914D\u4E00\u4E2A\u6E32\u67D3\u8FDB\u7A0B\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6BCF\u6253\u5F00\u4E00\u4E2A\u65B0\u9875\u9762\u5C31\u4F1A\u914D\u5957\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6E32\u67D3\u8FDB\u7A0B\u3002\u4F46\u662F\uFF0C\u4E5F\u6709\u4E00\u4E9B\u4F8B\u5916\uFF0C\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6D4F\u89C8\u5668\u4F1A\u8BA9\u591A\u4E2A\u9875\u9762\u76F4\u63A5\u8FD0\u884C\u5728\u540C\u4E00\u4E2A\u6E32\u67D3\u8FDB\u7A0B\u4E2D\u3002", -1);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("p", null, "\u90A3\u4EC0\u4E48\u60C5\u51B5\u4E0B\u591A\u4E2A\u9875\u9762\u4F1A\u540C\u65F6\u8FD0\u884C\u5728\u4E00\u4E2A\u6E32\u67D3\u8FDB\u7A0B\u4E2D\u5462\uFF1F", -1);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u8981\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u5148\u4E86\u89E3\u4E0B\u4EC0\u4E48\u662F\u540C\u4E00\u7AD9\u70B9\uFF08same-site\uFF09\u3002\u5177\u4F53\u5730\u8BB2\uFF0C\u6211\u4EEC\u5C06\u201C\u540C\u4E00\u7AD9\u70B9\u201D\u5B9A\u4E49\u4E3A\u6839\u57DF\u540D\uFF08\u4F8B\u5982\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "windstone.cc"),
  /* @__PURE__ */ createTextVNode("\uFF09\u52A0\u4E0A\u534F\u8BAE\uFF08\u4F8B\u5982\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "https://"),
  /* @__PURE__ */ createTextVNode("\u6216\u8005"),
  /* @__PURE__ */ createBaseVNode("code", null, "http://"),
  /* @__PURE__ */ createTextVNode("\uFF09\uFF0C\u8FD8\u5305\u542B\u4E86\u8BE5\u6839\u57DF\u540D\u4E0B\u7684\u6240\u6709\u5B50\u57DF\u540D\u548C\u4E0D\u540C\u7684\u7AEF\u53E3\uFF0C\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E09\u4E2A\uFF1A")
], -1);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("div", { class: "language-txt ext-txt line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-txt" }, [
    /* @__PURE__ */ createBaseVNode("code", null, "https://blog.windstone.cc\nhttps://cxl.windstone.cc\nhttps://blog.windstone.cc:8080\n")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "line-numbers" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "1"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "2"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "3"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5B83\u4EEC\u90FD\u662F\u5C5E\u4E8E\u540C\u4E00\u7AD9\u70B9\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u7684\u534F\u8BAE\u90FD\u662F HTTPS\uFF0C\u800C\u4E14\u6839\u57DF\u540D\u4E5F\u90FD\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "windstone.cc"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Chrome \u7684\u9ED8\u8BA4\u7B56\u7565\u662F\uFF0C\u6BCF\u4E2A\u6807\u7B7E\u5BF9\u5E94\u4E00\u4E2A\u6E32\u67D3\u8FDB\u7A0B\u3002\u4F46\u5982\u679C\u4ECE\u4E00\u4E2A\u9875\u9762\u6253\u5F00\u4E86\u53E6\u4E00\u4E2A\u65B0\u9875\u9762\uFF0C\u800C\u65B0\u9875\u9762\u548C\u5F53\u524D\u9875\u9762\u5C5E\u4E8E\u540C\u4E00\u7AD9\u70B9\u7684\u8BDD\uFF0C\u90A3\u4E48\u65B0\u9875\u9762\u4F1A\u590D\u7528\u7236\u9875\u9762\u7684\u6E32\u67D3\u8FDB\u7A0B\u3002\u5B98\u65B9\u628A\u8FD9\u4E2A\u9ED8\u8BA4\u7B56\u7565\u53EB"),
  /* @__PURE__ */ createBaseVNode("code", null, "process-per-site-instance"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("p", null, "\u82E5\u65B0\u9875\u9762\u548C\u5F53\u524D\u9875\u9762\u4E0D\u5C5E\u4E8E\u540C\u4E00\u7AD9\u70B9\uFF0C\u5219\u4F1A\u4E3A\u65B0\u9875\u9762\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6E32\u67D3\u8FDB\u7A0B\u3002", -1);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("p", null, "\u603B\u7ED3\u6765\u8BF4\uFF0C\u6253\u5F00\u4E00\u4E2A\u65B0\u9875\u9762\u91C7\u7528\u7684\u6E32\u67D3\u8FDB\u7A0B\u7B56\u7565\u5C31\u662F\uFF1A", -1);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6253\u5F00\u65B0\u7684\u9875\u9762\u90FD\u4F1A\u4F7F\u7528\u5355\u72EC\u7684\u6E32\u67D3\u8FDB\u7A0B\uFF1B"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u5982\u679C\u4ECE A \u9875\u9762\u6253\u5F00 B \u9875\u9762\uFF0C\u4E14 A \u548C B \u90FD\u5C5E\u4E8E\u540C\u4E00\u7AD9\u70B9\u7684\u8BDD\uFF0C\u90A3\u4E48 B \u9875\u9762\u590D\u7528 A \u9875\u9762\u7684\u6E32\u67D3\u8FDB\u7A0B\uFF1B\u5982\u679C\u662F\u5176\u4ED6\u60C5\u51B5\uFF0C\u6D4F\u89C8\u5668\u8FDB\u7A0B\u5219\u4F1A\u4E3A B \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6E32\u67D3\u8FDB\u7A0B\u3002")
], -1);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("p", null, "\u6E32\u67D3\u8FDB\u7A0B\u51C6\u5907\u597D\u4E4B\u540E\uFF0C\u8FD8\u4E0D\u80FD\u7ACB\u5373\u8FDB\u5165\u6587\u6863\u89E3\u6790\u72B6\u6001\uFF0C\u56E0\u4E3A\u6B64\u65F6\u7684\u6587\u6863\u6570\u636E\u8FD8\u5728\u7F51\u7EDC\u8FDB\u7A0B\u4E2D\uFF0C\u5E76\u6CA1\u6709\u63D0\u4EA4\u7ED9\u6E32\u67D3\u8FDB\u7A0B\uFF0C\u6240\u4EE5\u4E0B\u4E00\u6B65\u5C31\u8FDB\u5165\u4E86\u63D0\u4EA4\u6587\u6863\u9636\u6BB5\u3002", -1);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container warning" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "\u6CE8\u610F"),
  /* @__PURE__ */ createBaseVNode("p", null, "\u591A\u4E2A\u9875\u9762\u5171\u7528\u4E00\u4E2A\u6E32\u67D3\u8FDB\u7A0B\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u591A\u4E2A\u9875\u9762\u5171\u7528\u540C\u4E00\u4E2A\u4E3B\u7EBF\u7A0B\uFF0C\u6240\u6709\u9875\u9762\u7684\u4EFB\u52A1\u90FD\u662F\u5728\u540C\u4E00\u4E2A\u4E3B\u7EBF\u7A0B\u4E0A\u6267\u884C\uFF0C\u8FD9\u4E9B\u4EFB\u52A1\u5305\u62EC\u6E32\u67D3\u6D41\u7A0B\uFF0CJavaScript \u6267\u884C\uFF0C\u7528\u6237\u4EA4\u4E92\u7684\u4E8B\u4EF6\u7684\u54CD\u5E94\u7B49\u7B49\u3002\u4F46\u662F\uFF0C\u5982\u679C\u4E00\u4E2A\u6807\u7B7E\u9875\u91CC\u9762\u6267\u884C\u4E00\u4E2A\u6B7B\u5FAA\u73AF\uFF0C\u90A3\u4E48\u610F\u5473\u7740\u8BE5 JavaScript \u4EE3\u7801\u4F1A\u4E00\u76F4\u9738\u5360\u4E3B\u7EBF\u7A0B\uFF0C\u8FD9\u6837\u5C31\u5BFC\u81F4\u4E86\u5176\u5B83\u7684\u9875\u9762\u65E0\u6CD5\u4F7F\u7528\u8BE5\u4E3B\u7EBF\u7A0B\uFF0C\u4ECE\u800C\u8BA9\u6240\u6709\u9875\u9762\u90FD\u5931\u53BB\u54CD\u5E94\uFF01")
], -1);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "_4-\u63D0\u4EA4\u6587\u6863",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#_4-\u63D0\u4EA4\u6587\u6863",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" 4. \u63D0\u4EA4\u6587\u6863")
], -1);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("p", null, "\u6240\u8C13\u63D0\u4EA4\u6587\u6863\uFF0C\u5C31\u662F\u6307\u6D4F\u89C8\u5668\u8FDB\u7A0B\u5C06\u7F51\u7EDC\u8FDB\u7A0B\u63A5\u6536\u5230\u7684 HTML \u6570\u636E\u63D0\u4EA4\u7ED9\u6E32\u67D3\u8FDB\u7A0B\uFF0C\u5177\u4F53\u6D41\u7A0B\u5982\u4E0B\uFF1A", -1);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u9996\u5148\u5F53\u6D4F\u89C8\u5668\u8FDB\u7A0B\u63A5\u6536\u5230\u7F51\u7EDC\u8FDB\u7A0B\u7684\u54CD\u5E94\u5934\u6570\u636E\u4E4B\u540E\uFF0C\u4FBF\u5411\u6E32\u67D3\u8FDB\u7A0B\u53D1\u8D77\u201C\u63D0\u4EA4\u6587\u6863\u201D\u7684\u6D88\u606F\uFF1B"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u6E32\u67D3\u8FDB\u7A0B\u63A5\u6536\u5230\u201C\u63D0\u4EA4\u6587\u6863\u201D\u7684\u6D88\u606F\u540E\uFF0C\u4F1A\u548C\u7F51\u7EDC\u8FDB\u7A0B\u5EFA\u7ACB\u4F20\u8F93\u6570\u636E\u7684\u201C\u7BA1\u9053\u201D\uFF0C\u5F00\u59CB\u6301\u7EED\u4F20\u8F93\u6570\u636E\uFF0C\u540C\u65F6\u6E32\u67D3\u8FDB\u7A0B\u91CC\u7684 HTML \u89E3\u6790\u5668\u4F1A\u4E00\u8FB9\u63A5\u53D7\u6570\u636E\u4E00\u8FB9\u89E3\u6790 HTML \u5185\u5BB9\u5E76\u6784\u5EFA DOM \u6811\uFF1B"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u7B49\u6587\u6863\u6570\u636E\u4F20\u8F93\u5B8C\u6210\u4E4B\u540E\uFF0C\u6E32\u67D3\u8FDB\u7A0B\u4F1A\u8FD4\u56DE\u201C\u786E\u8BA4\u63D0\u4EA4\u201D\u7684\u6D88\u606F\u7ED9\u6D4F\u89C8\u5668\u8FDB\u7A0B\uFF1B"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u6D4F\u89C8\u5668\u8FDB\u7A0B\u5728\u6536\u5230\u201C\u786E\u8BA4\u63D0\u4EA4\u201D\u7684\u6D88\u606F\u540E\uFF0C\u4F1A\u66F4\u65B0\u6D4F\u89C8\u5668\u754C\u9762\u72B6\u6001\uFF0C\u5305\u62EC\u4E86\u5B89\u5168\u72B6\u6001\u3001\u5730\u5740\u680F\u7684 URL\u3001\u524D\u8FDB\u540E\u9000\u7684\u5386\u53F2\u72B6\u6001\uFF0C\u5E76\u66F4\u65B0 Web \u9875\u9762\u3002")
], -1);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("p", null, "\u8FD9\u4E5F\u5C31\u89E3\u91CA\u4E86\u4E3A\u4EC0\u4E48\u5728\u6D4F\u89C8\u5668\u7684\u5730\u5740\u680F\u91CC\u9762\u8F93\u5165\u4E86\u4E00\u4E2A\u5730\u5740\u540E\uFF0C\u4E4B\u524D\u7684\u9875\u9762\u6CA1\u6709\u7ACB\u9A6C\u6D88\u5931\uFF0C\u800C\u662F\u8981\u52A0\u8F7D\u4E00\u4F1A\u513F\u624D\u4F1A\u66F4\u65B0\u9875\u9762\u3002\u5230\u8FD9\u91CC\uFF0C\u4E00\u4E2A\u5B8C\u6574\u7684\u5BFC\u822A\u6D41\u7A0B\u5C31\u201C\u8D70\u201D\u5B8C\u4E86\uFF0C\u8FD9\u4E4B\u540E\u5C31\u8981\u8FDB\u5165\u6E32\u67D3\u9636\u6BB5\u4E86\u3002", -1);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "_5-\u6E32\u67D3\u9636\u6BB5",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#_5-\u6E32\u67D3\u9636\u6BB5",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" 5. \u6E32\u67D3\u9636\u6BB5")
], -1);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("p", null, "\u4E00\u65E6\u6587\u6863\u88AB\u63D0\u4EA4\uFF0C\u6E32\u67D3\u8FDB\u7A0B\u4FBF\u5F00\u59CB\u9875\u9762\u89E3\u6790\u548C\u5B50\u8D44\u6E90\u52A0\u8F7D\u4E86\u3002\u4E00\u65E6\u9875\u9762\u751F\u6210\u5B8C\u6210\uFF0C\u6E32\u67D3\u8FDB\u7A0B\u4F1A\u53D1\u9001\u4E00\u4E2A\u6D88\u606F\u7ED9\u6D4F\u89C8\u5668\u8FDB\u7A0B\uFF0C\u6D4F\u89C8\u5668\u63A5\u6536\u5230\u6D88\u606F\u540E\uFF0C\u4F1A\u505C\u6B62\u6807\u7B7E\u56FE\u6807\u4E0A\u7684\u52A0\u8F7D\u52A8\u753B\u3002", -1);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u6784\u5EFA-dom-\u6811",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6784\u5EFA-dom-\u6811",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6784\u5EFA DOM \u6811")
], -1);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "DOM \u6811\u6784\u5EFA\u8FC7\u7A0B"
  })
], -1);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode("p", null, "\u56E0\u4E3A\u6E32\u67D3\u5F15\u64CE\u65E0\u6CD5\u76F4\u63A5\u7406\u89E3\u548C\u4F7F\u7528 HTML \u5185\u5BB9\uFF08\u4EE5\u5B57\u8282\u6D41\u7684\u5F62\u5F0F\uFF09\uFF0C\u6240\u4EE5\u9700\u8981\u5C06 HTML \u5B57\u8282\u6D41\u8F6C\u6362\u4E3A\u6D4F\u89C8\u5668\u80FD\u591F\u7406\u89E3\u7684\u7ED3\u679C\u2014\u2014DOM\u3002DOM \u63D0\u4F9B\u4E86\u5BF9 HTML \u6587\u6863\u7ED3\u6784\u5316\u7684\u8868\u8FF0\u3002", -1);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("p", null, "\u5728\u6E32\u67D3\u5F15\u64CE\u4E2D\uFF0CDOM \u6709\u4E09\u4E2A\u5C42\u9762\u7684\u4F5C\u7528:", -1);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u4ECE\u9875\u9762\u7684\u89C6\u89D2\u6765\u770B\uFF0CDOM \u662F\u751F\u6210\u9875\u9762\u7684\u57FA\u7840\u6570\u636E\u7ED3\u6784\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u4ECE JavaScript \u811A\u672C\u89C6\u89D2\u6765\u770B\uFF0CDOM \u63D0\u4F9B\u7ED9 JavaScript \u811A\u672C\u64CD\u4F5C\u7684\u63A5\u53E3\uFF0C\u901A\u8FC7\u8FD9\u5957\u63A5\u53E3\uFF0CJavaScript \u53EF\u4EE5\u5BF9 DOM \u7ED3\u6784\u8FDB\u884C\u8BBF\u95EE\uFF0C\u4ECE\u800C\u6539\u53D8\u6587\u6863\u7684\u7ED3\u6784\u3001\u6837\u5F0F\u548C\u5185\u5BB9\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u4ECE\u5B89\u5168\u89C6\u89D2\u6765\u770B\uFF0CDOM \u662F\u4E00\u9053\u5B89\u5168\u9632\u62A4\u7EBF\uFF0C\u4E00\u4E9B\u4E0D\u5B89\u5168\u7684\u5185\u5BB9\u5728 DOM \u89E3\u6790\u9636\u6BB5\u5C31\u88AB\u62D2\u4E4B\u95E8\u5916\u4E86\u3002")
], -1);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("p", null, "\u7B80\u8A00\u4E4B\uFF0CDOM \u662F\u8868\u8FF0 HTML \u7684\u5185\u90E8\u6570\u636E\u7ED3\u6784\uFF0C\u5B83\u4F1A\u5C06 Web \u9875\u9762\u548C JavaScript \u811A\u672C\u8FDE\u63A5\u8D77\u6765\uFF0C\u5E76\u8FC7\u6EE4\u4E00\u4E9B\u4E0D\u5B89\u5168\u7684\u5185\u5BB9\u3002", -1);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6E32\u67D3\u5F15\u64CE\u5185\u90E8\u7684"),
  /* @__PURE__ */ createBaseVNode("strong", null, "HTML\u89E3\u6790\u5668"),
  /* @__PURE__ */ createTextVNode("\uFF08HTMLParser\uFF09\u6A21\u5757\uFF0C\u8D1F\u8D23\u5C06 HTML \u5B57\u8282\u6D41\u8F6C\u6362\u4E3A DOM \u7ED3\u6784\u3002\u800C\u4E14\uFF0CHTML \u89E3\u6790\u5668\u5E76\u4E0D\u662F\u7B49\u6574\u4E2A\u6587\u6863\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\u518D\u89E3\u6790\u7684\uFF0C\u800C\u662F"),
  /* @__PURE__ */ createBaseVNode("strong", null, "\u7F51\u7EDC\u8FDB\u7A0B\u52A0\u8F7D\u4E86\u591A\u5C11\u6570\u636E\uFF0CHTML \u89E3\u6790\u5668\u4FBF\u89E3\u6790\u591A\u5C11\u6570\u636E"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_1,
    alt: "HTML \u5B57\u8282\u6D41\u8F6C\u6362\u4E3A DOM"
  })
], -1);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("p", null, "HTML \u5B57\u8282\u6D41\u8F6C\u6362\u4E3A DOM \u7684\u6D41\u7A0B\u4E3A\uFF1A", -1);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode("ol", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u901A\u8FC7\u5206\u8BCD\u5668\u5C06\u5B57\u8282\u6D41\u8F6C\u6362\u4E3A Token"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u5C06 Token \u89E3\u6790\u4E3A DOM \u8282\u70B9"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u5C06 DOM \u8282\u70B9\u6DFB\u52A0\u5230 DOM \u6811\u4E2D")
], -1);
const _hoisted_88 = /* @__PURE__ */ createTextVNode("\u66F4\u52A0\u8BE6\u7EC6\u7684\u6D41\u7A0B\uFF0C\u53EF\u4EE5\u53C2\u8003: ");
const _hoisted_89 = {
  href: "https://time.geekbang.org/column/article/140140",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_90 = /* @__PURE__ */ createTextVNode("\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406\u4E0E\u5B9E\u8DF5 - 22 | DOM\u6811\uFF1AJavaScript\u662F\u5982\u4F55\u5F71\u54CDDOM\u6811\u6784\u5EFA\u7684\uFF1F");
const _hoisted_91 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container tip" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "\u63D0\u793A"),
  /* @__PURE__ */ createBaseVNode("p", null, "DOM \u6811\u7684\u6784\u5EFA\u8FC7\u7A0B\u662F\u4E00\u4E2A\u6DF1\u5EA6\u904D\u5386\u8FC7\u7A0B\uFF1A\u5F53\u524D\u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9\u90FD\u6784\u5EFA\u597D\u540E\u624D\u4F1A\u53BB\u6784\u5EFA\u5F53\u524D\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9\u3002")
], -1);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u6837\u5F0F\u8BA1\u7B97-\u6784\u5EFA-cssom-\u6811",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6837\u5F0F\u8BA1\u7B97-\u6784\u5EFA-cssom-\u6811",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6837\u5F0F\u8BA1\u7B97\uFF08\u6784\u5EFA CSSOM \u6811\uFF09")
], -1);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode("p", null, "\u548C HTML \u4E00\u6837\uFF0C\u6E32\u67D3\u5F15\u64CE\u4E5F\u65E0\u6CD5\u76F4\u63A5\u7406\u89E3 CSS \u6587\u4EF6\u5185\u5BB9\uFF0C\u6240\u4EE5\u9700\u8981\u5C06\u5176\u89E3\u6790\u6210\u6E32\u67D3\u5F15\u64CE\u80FD\u591F\u7406\u89E3\u7684\u7ED3\u6784\uFF0C\u8FD9\u4E2A\u7ED3\u6784\u5C31\u662F CSSOM\u3002", -1);
const _hoisted_94 = /* @__PURE__ */ createBaseVNode("p", null, "\u5728\u6E32\u67D3\u5F15\u64CE\u4E2D\uFF0CCSSOM \u6709\u5177\u6709\u4E24\u4E2A\u4F5C\u7528:", -1);
const _hoisted_95 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u63D0\u4F9B\u7ED9 JavaScript \u64CD\u4F5C\u6837\u5F0F\u8868\u7684\u80FD\u529B"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u4E3A\u5E03\u5C40\u6811\u7684\u5408\u6210\u63D0\u4F9B\u57FA\u7840\u7684\u6837\u5F0F\u4FE1\u606F")
], -1);
const _hoisted_96 = /* @__PURE__ */ createTextVNode("\u8FD9\u4E2A CSSOM \u4F53\u73B0\u5728 DOM \u4E2D\u5C31\u662F");
const _hoisted_97 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/API/Document/styleSheets",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_98 = /* @__PURE__ */ createBaseVNode("code", null, "document.styleSheets", -1);
const _hoisted_99 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_100 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u628A-css-\u8F6C\u6362\u4E3A\u6D4F\u89C8\u5668\u80FD\u591F\u7406\u89E3\u7684\u7ED3\u6784",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u628A-css-\u8F6C\u6362\u4E3A\u6D4F\u89C8\u5668\u80FD\u591F\u7406\u89E3\u7684\u7ED3\u6784",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u628A CSS \u8F6C\u6362\u4E3A\u6D4F\u89C8\u5668\u80FD\u591F\u7406\u89E3\u7684\u7ED3\u6784")
], -1);
const _hoisted_101 = /* @__PURE__ */ createBaseVNode("p", null, "CSS \u6837\u5F0F\u6765\u6E90\u4E3B\u8981\u6709\u4E09\u79CD\uFF1A", -1);
const _hoisted_102 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u901A\u8FC7"),
    /* @__PURE__ */ createBaseVNode("code", null, "link"),
    /* @__PURE__ */ createTextVNode("\u6807\u7B7E\u5F15\u7528\u7684\u5916\u90E8 CSS \u6587\u4EF6")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "style"),
    /* @__PURE__ */ createTextVNode("\u6807\u7B7E\u5185\u7684 CSS")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u5143\u7D20\u7684"),
    /* @__PURE__ */ createBaseVNode("code", null, "style"),
    /* @__PURE__ */ createTextVNode("\u5C5E\u6027\u5185\u5D4C\u7684 CSS")
  ])
], -1);
const _hoisted_103 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5F53\u6E32\u67D3\u5F15\u64CE\u63A5\u6536\u5230 CSS \u6587\u672C\u65F6\uFF0C\u4F1A\u6267\u884C\u4E00\u4E2A\u8F6C\u6362\u64CD\u4F5C\uFF0C\u5C06 CSS \u6587\u672C\u8F6C\u6362\u4E3A\u6D4F\u89C8\u5668\u53EF\u4EE5\u7406\u89E3\u7684\u7ED3\u6784\u2014\u2014styleSheets\u3002\u4F60\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u91CC\u8F93\u5165"),
  /* @__PURE__ */ createBaseVNode("code", null, "document.styleSheets"),
  /* @__PURE__ */ createTextVNode("\u5C31\u53EF\u4EE5\u770B\u5230\u8FD9\u4E9B\u6837\u5F0F\u3002")
], -1);
const _hoisted_104 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container warning" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "\u6CE8\u610F"),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode("\u7ECF\u8FC7\u5B9E\u6D4B\uFF0C\u5728\u6D4F\u89C8\u5668\u91CC\u8F93\u5165"),
    /* @__PURE__ */ createBaseVNode("code", null, "document.styleSheets"),
    /* @__PURE__ */ createTextVNode("\uFF0C\u5F97\u5230\u7684\u53EA\u662F"),
    /* @__PURE__ */ createBaseVNode("code", null, "link"),
    /* @__PURE__ */ createTextVNode("\u6807\u7B7E\u5F15\u7528\u7684\u5916\u90E8 CSS \u548C"),
    /* @__PURE__ */ createBaseVNode("code", null, "style"),
    /* @__PURE__ */ createTextVNode("\u6807\u7B7E\u5185\u7684 CSS\uFF0C\u4E0D\u5305\u542B\u5143\u7D20"),
    /* @__PURE__ */ createBaseVNode("code", null, "style"),
    /* @__PURE__ */ createTextVNode("\u5C5E\u6027\u5185\u5D4C\u7684 CSS\u3002")
  ])
], -1);
const _hoisted_105 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u8F6C\u6362\u6837\u5F0F\u8868\u4E2D\u7684\u5C5E\u6027\u503C-\u4F7F\u5176\u6807\u51C6\u5316",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8F6C\u6362\u6837\u5F0F\u8868\u4E2D\u7684\u5C5E\u6027\u503C-\u4F7F\u5176\u6807\u51C6\u5316",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8F6C\u6362\u6837\u5F0F\u8868\u4E2D\u7684\u5C5E\u6027\u503C\uFF0C\u4F7F\u5176\u6807\u51C6\u5316")
], -1);
const _hoisted_106 = /* @__PURE__ */ createBaseVNode("p", null, "\u7ECF\u8FC7\u4E0A\u4E00\u6B65\u64CD\u4F5C\uFF0C\u5DF2\u7ECF\u5C06 CSS \u6587\u672C\u8F6C\u6362\u4E3A\u6D4F\u89C8\u5668\u53EF\u4EE5\u7406\u89E3\u7684\u7ED3\u6784\u4E86\uFF0C\u63A5\u4E0B\u6765\u5C31\u8981\u5BF9\u5176\u8FDB\u884C\u5C5E\u6027\u503C\u7684\u6807\u51C6\u5316\u64CD\u4F5C\u3002", -1);
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_2,
    alt: "\u5C5E\u6027\u503C\u6807\u51C6\u5316\u8FC7\u7A0B"
  })
], -1);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("CSS \u6587\u672C\u4E2D\u7684\u5F88\u591A\u5C5E\u6027\u503C\uFF0C\u5982"),
  /* @__PURE__ */ createBaseVNode("code", null, "2em"),
  /* @__PURE__ */ createTextVNode("\u3001"),
  /* @__PURE__ */ createBaseVNode("code", null, "blue"),
  /* @__PURE__ */ createTextVNode("\u3001"),
  /* @__PURE__ */ createBaseVNode("code", null, "bold"),
  /* @__PURE__ */ createTextVNode("\u4E0D\u5BB9\u6613\u6E32\u67D3\u5F15\u64CE\u7406\u89E3\uFF0C\u56E0\u6B64\u9700\u8981\u5C06\u6240\u6709\u503C\u8F6C\u6362\u4E3A\u6E32\u67D3\u5F15\u64CE\u5BB9\u6613\u7406\u89E3\u7684\u3001\u6807\u51C6\u5316\u7684\u8BA1\u7B97\u503C\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u662F\u5C5E\u6027\u503C\u6807\u51C6\u5316\u3002")
], -1);
const _hoisted_109 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6211\u4EEC\u770B\u5230\uFF0C\u7ECF\u8FC7\u5C5E\u6027\u503C\u6807\u51C6\u5316\u540E\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "2em"),
  /* @__PURE__ */ createTextVNode("\u88AB\u89E3\u6790\u6210"),
  /* @__PURE__ */ createBaseVNode("code", null, "32px"),
  /* @__PURE__ */ createTextVNode("\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "blue"),
  /* @__PURE__ */ createTextVNode("\u88AB\u89E3\u6790\u6210"),
  /* @__PURE__ */ createBaseVNode("code", null, "rgb(0, 0, 255)"),
  /* @__PURE__ */ createTextVNode("\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "bold"),
  /* @__PURE__ */ createTextVNode("\u88AB\u89E3\u6790\u6210"),
  /* @__PURE__ */ createBaseVNode("code", null, "700"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_110 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u8BA1\u7B97\u51FA-dom-\u6811\u4E2D\u6BCF\u4E2A\u8282\u70B9\u7684\u5177\u4F53\u6837\u5F0F",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8BA1\u7B97\u51FA-dom-\u6811\u4E2D\u6BCF\u4E2A\u8282\u70B9\u7684\u5177\u4F53\u6837\u5F0F",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8BA1\u7B97\u51FA DOM \u6811\u4E2D\u6BCF\u4E2A\u8282\u70B9\u7684\u5177\u4F53\u6837\u5F0F")
], -1);
const _hoisted_111 = /* @__PURE__ */ createBaseVNode("p", null, "\u6837\u5F0F\u8BA1\u7B97\u9636\u6BB5\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u8BA1\u7B97\u51FA DOM \u8282\u70B9\u4E2D\u6BCF\u4E2A\u5143\u7D20\u7684\u5177\u4F53\u6837\u5F0F\uFF0C\u5728\u8BA1\u7B97\u8FC7\u7A0B\u4E2D\u9700\u8981\u9075\u5B88 CSS \u7684\u7EE7\u627F\u548C\u5C42\u53E0\u4E24\u4E2A\u89C4\u5219\u3002\u8FD9\u4E2A\u9636\u6BB5\u6700\u7EC8\u8F93\u51FA\u7684\u5185\u5BB9\u662F\u6BCF\u4E2A DOM \u8282\u70B9\u7684\u6837\u5F0F\uFF0C\u5E76\u88AB\u4FDD\u5B58\u5728 ComputedStyle \u7684\u7ED3\u6784\u5185\u3002\u53EF\u5728 Chrome \u7684\u5F00\u53D1\u8005\u5DE5\u5177 --> Elements \u91CC\u9009\u62E9\u67D0\u4E2A DOM \u5143\u7D20\uFF0C\u5E76\u5728 Computed \u5B50\u6807\u7B7E\u91CC\u67E5\u770B\u8BE5 DOM \u5143\u7D20\u7684\u8BA1\u7B97\u6837\u5F0F\u3002", -1);
const _hoisted_112 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u5E03\u5C40",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5E03\u5C40",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5E03\u5C40")
], -1);
const _hoisted_113 = /* @__PURE__ */ createBaseVNode("p", null, "\u7ECF\u8FC7\u4E0A\u4E24\u6B65\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u6709\u4E86 DOM \u6811\u548C DOM \u6811\u4E2D\u6BCF\u4E2A\u5143\u7D20\u7684\u6837\u5F0F\u3002\u4E0B\u4E00\u6B65\uFF0C\u6211\u4EEC\u9700\u8981\u8BA1\u7B97\u51FA DOM \u6811\u4E2D\u53EF\u89C1\u5143\u7D20\u7684\u51E0\u4F55\u4F4D\u7F6E\uFF0C\u6211\u4EEC\u628A\u8FD9\u4E2A\u8BA1\u7B97\u8FC7\u7A0B\u53EB\u505A\u5E03\u5C40\u3002", -1);
const _hoisted_114 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u521B\u5EFA\u5E03\u5C40\u6811",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u521B\u5EFA\u5E03\u5C40\u6811",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u521B\u5EFA\u5E03\u5C40\u6811")
], -1);
const _hoisted_115 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("DOM \u6811\u4E2D\u4ECD\u7136\u5305\u542B\u4E86\u4E00\u4E9B\u4E0D\u53EF\u89C1\u7684\u5143\u7D20\uFF0C\u6BD4\u5982"),
  /* @__PURE__ */ createBaseVNode("code", null, "head"),
  /* @__PURE__ */ createTextVNode("\u6807\u7B7E\u3001"),
  /* @__PURE__ */ createBaseVNode("code", null, "meta"),
  /* @__PURE__ */ createTextVNode("\u6807\u7B7E\uFF0C\u4EE5\u53CA\u90A3\u4E9B"),
  /* @__PURE__ */ createBaseVNode("code", null, "display: none"),
  /* @__PURE__ */ createTextVNode("\u7684\u5143\u7D20\u3002\u56E0\u6B64\uFF0C\u5728\u663E\u793A\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u989D\u5916\u6784\u5EFA\u4E00\u68F5\u53EA\u5305\u542B\u53EF\u89C1\u5143\u7D20\u7684\u5E03\u5C40\u6811\uFF08Render Tree\uFF09\u3002")
], -1);
const _hoisted_116 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_3,
    alt: "\u5E03\u5C40\u6811\u751F\u6210\u8FC7\u7A0B"
  })
], -1);
const _hoisted_117 = /* @__PURE__ */ createBaseVNode("p", null, "\u4E3A\u4E86\u6784\u5EFA\u5E03\u5C40\u6811\uFF0C\u6D4F\u89C8\u5668\u5927\u4F53\u4E0A\u5B8C\u6210\u4E86\u4E0B\u9762\u8FD9\u4E9B\u5DE5\u4F5C\uFF1A", -1);
const _hoisted_118 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u904D\u5386 DOM \u6811\u4E2D\u7684\u6240\u6709\u53EF\u89C1\u8282\u70B9\uFF0C\u5E76\u628A\u8FD9\u4E9B\u8282\u70B9\u52A0\u5230\u5E03\u5C40\u4E2D\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u4E0D\u53EF\u89C1\u7684\u8282\u70B9\u4F1A\u88AB\u5E03\u5C40\u6811\u5FFD\u7565\u6389\uFF0C\u5982"),
    /* @__PURE__ */ createBaseVNode("code", null, "head"),
    /* @__PURE__ */ createTextVNode("\u6807\u7B7E\u4E0B\u9762\u7684\u5168\u90E8\u5185\u5BB9\uFF0C\u518D\u6BD4\u5982"),
    /* @__PURE__ */ createBaseVNode("code", null, "body.p.span"),
    /* @__PURE__ */ createTextVNode("\u8FD9\u4E2A\u5143\u7D20\uFF0C\u56E0\u4E3A\u5B83\u7684\u5C5E\u6027\u5305\u542B"),
    /* @__PURE__ */ createBaseVNode("code", null, "dispaly:none"),
    /* @__PURE__ */ createTextVNode("\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u5143\u7D20\u4E5F\u6CA1\u6709\u88AB\u5305\u8FDB\u5E03\u5C40\u6811\u3002")
  ])
], -1);
const _hoisted_119 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u5E03\u5C40\u8BA1\u7B97",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5E03\u5C40\u8BA1\u7B97",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5E03\u5C40\u8BA1\u7B97")
], -1);
const _hoisted_120 = /* @__PURE__ */ createBaseVNode("p", null, "\u6709\u4E86\u5B8C\u6574\u7684\u5E03\u5C40\u6811\u4E4B\u540E\uFF0C\u5C31\u8981\u8BA1\u7B97\u5E03\u5C40\u6811\u8282\u70B9\u7684\u5750\u6807\u4F4D\u7F6E\u4E86\u3002", -1);
const _hoisted_121 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u5206\u5C42",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5206\u5C42",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5206\u5C42")
], -1);
const _hoisted_122 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6709\u4E86\u5E03\u5C40\u6811\uFF0C\u4E14\u5E03\u5C40\u6811\u4E0A\u6BCF\u4E2A\u8282\u70B9\u7684\u5177\u4F53\u4F4D\u7F6E\u4FE1\u606F\u90FD\u8BA1\u7B97\u51FA\u6765\u4E86\uFF0C\u4F46\u4ECD\u7136\u4E0D\u80FD\u5F00\u59CB\u7ED8\u5236\u9875\u9762\uFF0C\u56E0\u4E3A\u9875\u9762\u4E2D\u6709\u5F88\u591A\u590D\u6742\u7684\u6548\u679C\uFF0C\u5982\u4E00\u4E9B\u590D\u6742\u7684 3D \u53D8\u6362\u3001\u9875\u9762\u6EDA\u52A8\uFF0C\u6216\u8005\u4F7F\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "z-index"),
  /* @__PURE__ */ createTextVNode("\u505A Z \u8F74\u6392\u5E8F\u7B49\uFF0C\u4E3A\u4E86\u66F4\u52A0\u65B9\u4FBF\u5730\u5B9E\u73B0\u8FD9\u4E9B\u6548\u679C\uFF0C\u6E32\u67D3\u5F15\u64CE\u8FD8\u9700\u8981\u4E3A\u7279\u5B9A\u7684\u8282\u70B9\u751F\u6210\u4E13\u7528\u7684\u56FE\u5C42\uFF0C\u5E76\u751F\u6210\u4E00\u68F5\u5BF9\u5E94\u7684\u56FE\u5C42\u6811\uFF08LayerTree\uFF09\u3002")
], -1);
const _hoisted_123 = /* @__PURE__ */ createBaseVNode("p", null, "\u6D4F\u89C8\u5668\u7684\u9875\u9762\u5B9E\u9645\u4E0A\u88AB\u5206\u6210\u4E86\u5F88\u591A\u56FE\u5C42\uFF0C\u8FD9\u4E9B\u56FE\u5C42\u53E0\u52A0\u540E\u5408\u6210\u4E86\u6700\u7EC8\u7684\u9875\u9762\u3002", -1);
const _hoisted_124 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_4,
    alt: "\u5E03\u5C40\u6811\u548C\u56FE\u5C42\u6811\u5173\u7CFB\u793A\u610F\u56FE"
  })
], -1);
const _hoisted_125 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5E76\u4E0D\u662F\u5E03\u5C40\u6811\u7684\u6BCF\u4E2A\u8282\u70B9\u90FD\u5305\u542B\u4E00\u4E2A\u56FE\u5C42\uFF0C\u5982\u679C\u4E00\u4E2A\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u7684\u5C42\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u8282\u70B9\u5C31\u4ECE\u5C5E\u4E8E\u7236\u8282\u70B9\u7684\u56FE\u5C42\u3002\u5982\u4E0A\u56FE\u4E2D\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "span"),
  /* @__PURE__ */ createTextVNode("\u6807\u7B7E\u6CA1\u6709\u4E13\u5C5E\u56FE\u5C42\uFF0C\u90A3\u4E48\u5B83\u4EEC\u5C31\u4ECE\u5C5E\u4E8E\u5B83\u4EEC\u7684\u7236\u8282\u70B9\u56FE\u5C42\u3002\u4F46\u4E0D\u7BA1\u600E\u6837\uFF0C\u6700\u7EC8\u6BCF\u4E00\u4E2A\u8282\u70B9\u90FD\u4F1A\u76F4\u63A5\u6216\u8005\u95F4\u63A5\u5730\u4ECE\u5C5E\u4E8E\u4E00\u4E2A\u5C42\u3002")
], -1);
const _hoisted_126 = /* @__PURE__ */ createBaseVNode("p", null, "\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6EE1\u8DB3\u4E0B\u9762\u4E24\u70B9\u4E2D\u4EFB\u610F\u4E00\u70B9\u7684\u5143\u7D20\u5C31\u53EF\u4EE5\u88AB\u63D0\u5347\u4E3A\u5355\u72EC\u7684\u4E00\u4E2A\u56FE\u5C42\uFF0C\u6E32\u67D3\u5F15\u64CE\u4F1A\u4E3A\u5176\u521B\u5EFA\u65B0\u7684\u5C42\u3002", -1);
const _hoisted_127 = /* @__PURE__ */ createTextVNode("\u62E5\u6709\u5C42\u53E0\u4E0A\u4E0B\u6587\u5C5E\u6027\u7684\u5143\u7D20\u4F1A\u88AB\u63D0\u5347\u4E3A\u5355\u72EC\u7684\u4E00\u5C42\u3002\u5177\u4F53\u5143\u7D20\u5177\u6709\u54EA\u4E9B\u5C42\u53E0\u4E0A\u4E0B\u6587\u5C5E\u6027\uFF0C\u53EF\u53C2\u89C1");
const _hoisted_128 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_129 = /* @__PURE__ */ createTextVNode("MDN - \u5C42\u53E0\u4E0A\u4E0B\u6587");
const _hoisted_130 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_131 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("\u9700\u8981\u526A\u88C1\uFF08clip\uFF09\u7684\u5730\u65B9\u4E5F\u4F1A\u88AB\u521B\u5EFA\u4E3A\u56FE\u5C42\uFF0C\u6BD4\u5982\u5143\u7D20\u5B58\u5728"),
  /* @__PURE__ */ createBaseVNode("code", null, "overflow: auto"),
  /* @__PURE__ */ createTextVNode("\u4E14\u5176\u5B50\u5143\u7D20\u4F1A\u8D85\u8FC7\u81EA\u8EAB\u5BFC\u81F4\u7684\u526A\u88C1\u3002")
], -1);
const _hoisted_132 = /* @__PURE__ */ createBaseVNode("p", null, "\u5C42\u786E\u5B9E\u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD\uFF0C\u4F46\u662F\u5B83\u4EE5\u5185\u5B58\u7BA1\u7406\u4E3A\u4EE3\u4EF7\uFF0C\u56E0\u6B64\u4E0D\u5E94\u4F5C\u4E3A WEB \u6027\u80FD\u4F18\u5316\u7B56\u7565\u7684\u4E00\u90E8\u5206\u8FC7\u5EA6\u4F7F\u7528\u3002", -1);
const _hoisted_133 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u56FE\u5C42\u7ED8\u5236",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u56FE\u5C42\u7ED8\u5236",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u56FE\u5C42\u7ED8\u5236")
], -1);
const _hoisted_134 = /* @__PURE__ */ createBaseVNode("p", null, "\u56FE\u5C42\u6811\u6784\u5EFA\u597D\u4E4B\u540E\uFF0C\u6E32\u67D3\u5F15\u64CE\u4F1A\u5BF9\u56FE\u5C42\u6811\u4E2D\u7684\u6BCF\u4E2A\u56FE\u5C42\u8FDB\u884C\u7ED8\u5236\u3002\u6E32\u67D3\u5F15\u64CE\u4F1A\u628A\u4E00\u4E2A\u56FE\u5C42\u7684\u7ED8\u5236\u62C6\u5206\u6210\u5F88\u591A\u5C0F\u7684\u7ED8\u5236\u6307\u4EE4\uFF0C\u7136\u540E\u518D\u628A\u8FD9\u4E9B\u6307\u4EE4\u6309\u7167\u987A\u5E8F\u7EC4\u6210\u4E00\u4E2A\u5F85\u7ED8\u5236\u5217\u8868\u3002", -1);
const _hoisted_135 = /* @__PURE__ */ createBaseVNode("p", null, "\u7ED8\u5236\u4E00\u4E2A\u5143\u7D20\u901A\u5E38\u9700\u8981\u597D\u51E0\u6761\u7ED8\u5236\u6307\u4EE4\uFF0C\u56E0\u4E3A\u6BCF\u4E2A\u5143\u7D20\u7684\u80CC\u666F\u3001\u524D\u666F\u3001\u8FB9\u6846\u90FD\u9700\u8981\u5355\u72EC\u7684\u6307\u4EE4\u53BB\u7ED8\u5236\u3002\u6240\u4EE5\u5728\u56FE\u5C42\u7ED8\u5236\u9636\u6BB5\uFF0C\u8F93\u51FA\u7684\u5185\u5BB9\u5C31\u662F\u8FD9\u4E9B\u5F85\u7ED8\u5236\u5217\u8868\u3002", -1);
const _hoisted_136 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u5408\u6210",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5408\u6210",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5408\u6210")
], -1);
const _hoisted_137 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u5212\u5206\u56FE\u5757",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5212\u5206\u56FE\u5757",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5212\u5206\u56FE\u5757")
], -1);
const _hoisted_138 = /* @__PURE__ */ createBaseVNode("p", null, "\u5F53\u56FE\u5C42\u7684\u7ED8\u5236\u5217\u8868\u51C6\u5907\u597D\u4E4B\u540E\uFF0C\u4E3B\u7EBF\u7A0B\u4F1A\u628A\u8BE5\u7ED8\u5236\u5217\u8868\u63D0\u4EA4\u7ED9\u5408\u6210\u7EBF\u7A0B\uFF0C\u7531\u5408\u6210\u7EBF\u7A0B\u6765\u8FDB\u884C\u7ED8\u5236\u64CD\u4F5C\u3002", -1);
const _hoisted_139 = /* @__PURE__ */ createBaseVNode("p", null, "\u5728\u6709\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6709\u7684\u56FE\u5C42\u53EF\u4EE5\u5F88\u5927\uFF0C\u6BD4\u5982\u6709\u7684\u9875\u9762\u4F60\u4F7F\u7528\u6EDA\u52A8\u6761\u8981\u6EDA\u52A8\u597D\u4E45\u624D\u80FD\u6EDA\u52A8\u5230\u5E95\u90E8\uFF0C\u4F46\u662F\u901A\u8FC7\u89C6\u53E3\uFF0C\u7528\u6237\u53EA\u80FD\u770B\u5230\u9875\u9762\u7684\u5F88\u5C0F\u4E00\u90E8\u5206\uFF0C\u6240\u4EE5\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u8981\u7ED8\u5236\u51FA\u6240\u6709\u56FE\u5C42\u5185\u5BB9\u7684\u8BDD\uFF0C\u5C31\u4F1A\u4EA7\u751F\u592A\u5927\u7684\u5F00\u9500\uFF0C\u800C\u4E14\u4E5F\u6CA1\u6709\u5FC5\u8981\u3002", -1);
const _hoisted_140 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u57FA\u4E8E\u8FD9\u4E2A\u539F\u56E0\uFF0C\u5408\u6210\u7EBF\u7A0B\u4F1A\u5C06\u56FE\u5C42\u5212\u5206\u4E3A\u56FE\u5757\uFF08"),
  /* @__PURE__ */ createBaseVNode("code", null, "tile"),
  /* @__PURE__ */ createTextVNode("\uFF09\uFF0C\u8FD9\u4E9B\u56FE\u5757\u7684\u5927\u5C0F\u901A\u5E38\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "256x256"),
  /* @__PURE__ */ createTextVNode("\u6216\u8005"),
  /* @__PURE__ */ createBaseVNode("code", null, "512x512"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A")
], -1);
const _hoisted_141 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_5,
    alt: "\u5212\u5206\u56FE\u5757"
  })
], -1);
const _hoisted_142 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u6805\u683C\u5316",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6805\u683C\u5316",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6805\u683C\u5316")
], -1);
const _hoisted_143 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5408\u6210\u7EBF\u7A0B\u4F1A\u6309\u7167\u89C6\u53E3\u9644\u8FD1\u7684\u56FE\u5757\u6765\u4F18\u5148\u751F\u6210\u4F4D\u56FE\uFF0C\u5B9E\u9645\u751F\u6210\u4F4D\u56FE\u7684\u64CD\u4F5C\u662F\u7531\u6805\u683C\u5316\u7EBF\u7A0B\u6765\u6267\u884C\u7684\u3002\u6240\u8C13\u6805\u683C\u5316\uFF08"),
  /* @__PURE__ */ createBaseVNode("code", null, "raster"),
  /* @__PURE__ */ createTextVNode("\uFF09\uFF0C\u662F\u6307\u5C06\u56FE\u5757\u8F6C\u6362\u4E3A\u4F4D\u56FE\u3002\u800C\u56FE\u5757\u662F\u6805\u683C\u5316\u6267\u884C\u7684\u6700\u5C0F\u5355\u4F4D\u3002\u6E32\u67D3\u8FDB\u7A0B\u7EF4\u62A4\u4E86\u4E00\u4E2A\u6805\u683C\u5316\u7EBF\u7A0B\u6C60\uFF0C\u6240\u6709\u7684\u56FE\u5757\u6805\u683C\u5316\u90FD\u662F\u5728\u7EBF\u7A0B\u6C60\u5185\u6267\u884C\u7684\u3002")
], -1);
const _hoisted_144 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_6,
    alt: "\u5408\u6210\u7EBF\u7A0B\u63D0\u4EA4\u56FE\u5757\u7ED9\u6805\u683C\u5316\u7EBF\u7A0B\u6C60"
  })
], -1);
const _hoisted_145 = /* @__PURE__ */ createBaseVNode("p", null, "\u901A\u5E38\uFF0C\u6805\u683C\u5316\u8FC7\u7A0B\u90FD\u4F1A\u4F7F\u7528 GPU \u6765\u52A0\u901F\u751F\u6210\uFF0C\u4F7F\u7528 GPU \u751F\u6210\u4F4D\u56FE\u7684\u8FC7\u7A0B\u53EB\u5FEB\u901F\u6805\u683C\u5316\uFF0C\u6216\u8005 GPU \u6805\u683C\u5316\uFF0C\u751F\u6210\u7684\u4F4D\u56FE\u88AB\u4FDD\u5B58\u5728 GPU \u5185\u5B58\u4E2D\u3002GPU \u64CD\u4F5C\u662F\u8FD0\u884C\u5728 GPU \u8FDB\u7A0B\u4E2D\uFF0C\u5982\u679C\u6805\u683C\u5316\u64CD\u4F5C\u4F7F\u7528\u4E86 GPU\uFF0C\u90A3\u4E48\u6700\u7EC8\u751F\u6210\u4F4D\u56FE\u7684\u64CD\u4F5C\u662F\u5728 GPU \u4E2D\u5B8C\u6210\u7684\uFF0C\u8FD9\u5C31\u6D89\u53CA\u5230\u4E86\u8DE8\u8FDB\u7A0B\u64CD\u4F5C\u3002", -1);
const _hoisted_146 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_7,
    alt: "GPU \u6805\u683C\u5316"
  })
], -1);
const _hoisted_147 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u663E\u793A",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u663E\u793A",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u663E\u793A")
], -1);
const _hoisted_148 = /* @__PURE__ */ createBaseVNode("p", null, "\u4E00\u65E6\u6240\u6709\u56FE\u5757\u90FD\u88AB\u5149\u6805\u5316\uFF0C\u5408\u6210\u7EBF\u7A0B\u5C31\u4F1A\u751F\u6210\u4E00\u4E2A\u7ED8\u5236\u56FE\u5757\u7684\u547D\u4EE4\u2014\u2014\u201CDrawQuad\u201D\uFF0C\u7136\u540E\u5C06\u8BE5\u547D\u4EE4\u63D0\u4EA4\u7ED9\u6D4F\u89C8\u5668\u8FDB\u7A0B\u3002\u6D4F\u89C8\u5668\u8FDB\u7A0B\u91CC\u9762\u6709\u4E00\u4E2A\u53EB viz \u7684\u7EC4\u4EF6\uFF0C\u7528\u6765\u63A5\u6536\u5408\u6210\u7EBF\u7A0B\u53D1\u8FC7\u6765\u7684 DrawQuad \u547D\u4EE4\uFF0C\u7136\u540E\u6839\u636E DrawQuad \u547D\u4EE4\uFF0C\u5C06\u5176\u9875\u9762\u5185\u5BB9\u7ED8\u5236\u5230\u5185\u5B58\u4E2D\uFF0C\u6700\u540E\u518D\u5C06\u5185\u5B58\u663E\u793A\u5728\u5C4F\u5E55\u4E0A\u3002\u5230\u8FD9\u91CC\uFF0C\u7ECF\u8FC7\u8FD9\u4E00\u7CFB\u5217\u7684\u9636\u6BB5\uFF0C\u7F16\u5199\u597D\u7684 HTML\u3001CSS\u3001JavaScript \u7B49\u6587\u4EF6\uFF0C\u7ECF\u8FC7\u6D4F\u89C8\u5668\u5C31\u4F1A\u663E\u793A\u51FA\u6F02\u4EAE\u7684\u9875\u9762\u4E86\u3002", -1);
const _hoisted_149 = /* @__PURE__ */ createBaseVNode("h3", {
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
const _hoisted_150 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_8,
    alt: "\u5B8C\u6574\u7684\u6E32\u67D3\u6D41\u6C34\u7EBF"
  })
], -1);
const _hoisted_151 = /* @__PURE__ */ createBaseVNode("p", null, "\u5B8C\u6574\u7684\u6E32\u67D3\u6D41\u7A0B\u5927\u81F4\u53EF\u603B\u7ED3\u4E3A\u5982\u4E0B\u3002", -1);
const _hoisted_152 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u3010DOM\u3011\u6E32\u67D3\u8FDB\u7A0B\u5C06 HTML \u5185\u5BB9\u8F6C\u6362\u4E3A\u80FD\u591F\u8BFB\u61C2\u7684 DOM \u6811\u7ED3\u6784\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u3010Style\u3011\u6E32\u67D3\u5F15\u64CE\u5C06 CSS \u6837\u5F0F\u8868\u8F6C\u5316\u4E3A\u6D4F\u89C8\u5668\u53EF\u4EE5\u7406\u89E3\u7684 styleSheets\uFF0C\u8BA1\u7B97\u51FA DOM \u8282\u70B9\u7684\u6837\u5F0F\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u3010layout\u3011\u521B\u5EFA\u5E03\u5C40\u6811\uFF0C\u5E76\u8BA1\u7B97\u5143\u7D20\u7684\u5E03\u5C40\u4FE1\u606F\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u3010layer\u3011\u5BF9\u5E03\u5C40\u6811\u8FDB\u884C\u5206\u5C42\uFF0C\u5E76\u751F\u6210\u5206\u5C42\u6811\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u3010Paint\u3011\u4E3A\u6BCF\u4E2A\u56FE\u5C42\u751F\u6210\u7ED8\u5236\u5217\u8868\uFF0C\u5E76\u5C06\u5176\u63D0\u4EA4\u5230\u5408\u6210\u7EBF\u7A0B\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u3010tiles\u3001raster\u3011\u5408\u6210\u7EBF\u7A0B\u5C06\u56FE\u5C42\u5206\u6210\u56FE\u5757\uFF0C\u5E76\u5728\u5149\u6805\u5316\u7EBF\u7A0B\u6C60\u4E2D\u5C06\u56FE\u5757\u8F6C\u6362\u6210\u4F4D\u56FE\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u3010draw quad\u3011\u5408\u6210\u7EBF\u7A0B\u53D1\u9001\u7ED8\u5236\u56FE\u5757\u547D\u4EE4 DrawQuad \u7ED9\u6D4F\u89C8\u5668\u8FDB\u7A0B\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u3010display\u3011\u6D4F\u89C8\u5668\u8FDB\u7A0B\u6839\u636E DrawQuad \u6D88\u606F\u751F\u6210\u9875\u9762\uFF0C\u5E76\u663E\u793A\u5230\u663E\u793A\u5668\u4E0A\u3002")
], -1);
const _hoisted_153 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("BTW\uFF0C\u63D0\u4EA4\u6570\u636E\u4E4B\u540E\uFF0C\u6E32\u67D3\u8FDB\u7A0B\u4F1A\u521B\u5EFA\u4E00\u4E2A\u7A7A\u767D\u9875\u9762\uFF0C\u800C\u521B\u5EFA\u7A7A\u767D\u9875\u9762\u5230\u9875\u9762\u9996\u6B21\u6E32\u67D3\u4E4B\u95F4\u7684\u65F6\u95F4\uFF0C\u6211\u4EEC\u901A\u5E38\u79F0\u4E4B\u4E3A"),
  /* @__PURE__ */ createBaseVNode("strong", null, "\u89E3\u6790\u767D\u5C4F"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_154 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container tip" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "TIP"),
  /* @__PURE__ */ createBaseVNode("p", null, "\u5408\u6210\u64CD\u4F5C\u662F\u5728\u5408\u6210\u7EBF\u7A0B\u4E0A\u5B8C\u6210\u7684\uFF0C\u8FD9\u4E5F\u5C31\u610F\u5473\u7740\u5728\u6267\u884C\u5408\u6210\u64CD\u4F5C\u65F6\uFF0C\u662F\u4E0D\u4F1A\u5F71\u54CD\u5230\u4E3B\u7EBF\u7A0B\u6267\u884C\u7684\u3002\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u7ECF\u5E38\u4E3B\u7EBF\u7A0B\u5361\u4F4F\u4E86\uFF0C\u4F46\u662F CSS \u52A8\u753B\u4F9D\u7136\u80FD\u6267\u884C\u7684\u539F\u56E0\u3002")
], -1);
const _hoisted_155 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u76F8\u5173\u6982\u5FF5-\u91CD\u6392\u3001\u91CD\u7ED8\u3001\u5408\u6210",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u76F8\u5173\u6982\u5FF5-\u91CD\u6392\u3001\u91CD\u7ED8\u3001\u5408\u6210",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u76F8\u5173\u6982\u5FF5\uFF1A\u91CD\u6392\u3001\u91CD\u7ED8\u3001\u5408\u6210")
], -1);
const _hoisted_156 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u66F4\u65B0\u4E86\u5143\u7D20\u7684\u51E0\u4F55\u5C5E\u6027-\u91CD\u6392",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u66F4\u65B0\u4E86\u5143\u7D20\u7684\u51E0\u4F55\u5C5E\u6027-\u91CD\u6392",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u66F4\u65B0\u4E86\u5143\u7D20\u7684\u51E0\u4F55\u5C5E\u6027\uFF08\u91CD\u6392\uFF09")
], -1);
const _hoisted_157 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_9,
    alt: "\u66F4\u65B0\u5143\u7D20\u7684\u51E0\u4F55\u5C5E\u6027"
  })
], -1);
const _hoisted_158 = /* @__PURE__ */ createBaseVNode("p", null, "\u5982\u679C\u4F60\u901A\u8FC7 JavaScript \u6216\u8005 CSS \u4FEE\u6539\u5143\u7D20\u7684\u51E0\u4F55\u4F4D\u7F6E\u5C5E\u6027\uFF0C\u4F8B\u5982\u6539\u53D8\u5143\u7D20\u7684\u5BBD\u5EA6\u3001\u9AD8\u5EA6\u7B49\uFF0C\u90A3\u4E48\u6D4F\u89C8\u5668\u4F1A\u89E6\u53D1\u91CD\u65B0\u5E03\u5C40\uFF0C\u89E3\u6790\u4E4B\u540E\u7684\u4E00\u7CFB\u5217\u5B50\u9636\u6BB5\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u53EB\u91CD\u6392\u3002\u65E0\u7591\uFF0C\u91CD\u6392\u9700\u8981\u66F4\u65B0\u5B8C\u6574\u7684\u6E32\u67D3\u6D41\u6C34\u7EBF\uFF0C\u6240\u4EE5\u5F00\u9500\u4E5F\u662F\u6700\u5927\u7684\u3002", -1);
const _hoisted_159 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u66F4\u65B0\u5143\u7D20\u7684\u7ED8\u5236\u5C5E\u6027-\u91CD\u7ED8",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u66F4\u65B0\u5143\u7D20\u7684\u7ED8\u5236\u5C5E\u6027-\u91CD\u7ED8",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u66F4\u65B0\u5143\u7D20\u7684\u7ED8\u5236\u5C5E\u6027\uFF08\u91CD\u7ED8\uFF09")
], -1);
const _hoisted_160 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_10,
    alt: "\u66F4\u65B0\u5143\u7D20\u80CC\u666F"
  })
], -1);
const _hoisted_161 = /* @__PURE__ */ createBaseVNode("p", null, "\u5982\u679C\u4FEE\u6539\u4E86\u5143\u7D20\u7684\u80CC\u666F\u989C\u8272\uFF0C\u90A3\u4E48\u5E03\u5C40\u9636\u6BB5\u5C06\u4E0D\u4F1A\u88AB\u6267\u884C\uFF0C\u56E0\u4E3A\u5E76\u6CA1\u6709\u5F15\u8D77\u51E0\u4F55\u4F4D\u7F6E\u7684\u53D8\u6362\uFF0C\u6240\u4EE5\u5C31\u76F4\u63A5\u8FDB\u5165\u4E86\u7ED8\u5236\u9636\u6BB5\uFF0C\u7136\u540E\u6267\u884C\u4E4B\u540E\u7684\u4E00\u7CFB\u5217\u5B50\u9636\u6BB5\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u53EB\u91CD\u7ED8\u3002\u76F8\u8F83\u4E8E\u91CD\u6392\u64CD\u4F5C\uFF0C\u91CD\u7ED8\u7701\u53BB\u4E86\u5E03\u5C40\u548C\u5206\u5C42\u9636\u6BB5\uFF0C\u6240\u4EE5\u6267\u884C\u6548\u7387\u4F1A\u6BD4\u91CD\u6392\u64CD\u4F5C\u8981\u9AD8\u4E00\u4E9B\u3002", -1);
const _hoisted_162 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u76F4\u63A5\u5408\u6210",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u76F4\u63A5\u5408\u6210",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u76F4\u63A5\u5408\u6210")
], -1);
const _hoisted_163 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_11,
    alt: "\u907F\u5F00\u91CD\u6392\u548C\u91CD\u7ED8"
  })
], -1);
const _hoisted_164 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5982\u679C\u66F4\u6539\u4E00\u4E2A\u65E2\u4E0D\u8981\u5E03\u5C40\u4E5F\u4E0D\u8981\u7ED8\u5236\u7684\u5C5E\u6027\uFF0C\u6E32\u67D3\u5F15\u64CE\u5C06\u8DF3\u8FC7\u5E03\u5C40\u548C\u7ED8\u5236\uFF0C\u53EA\u6267\u884C\u540E\u7EED\u7684\u5408\u6210\u64CD\u4F5C\uFF0C\u6211\u4EEC\u628A\u8FD9\u4E2A\u8FC7\u7A0B\u53EB\u505A\u5408\u6210\u3002\u6BD4\u5982\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86 CSS \u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "transform"),
  /* @__PURE__ */ createTextVNode("\u6765\u5B9E\u73B0\u52A8\u753B\u6548\u679C\uFF0C\u8FD9\u53EF\u4EE5\u907F\u5F00\u91CD\u6392\u548C\u91CD\u7ED8\u9636\u6BB5\uFF0C\u76F4\u63A5\u5728\u5408\u6210\u7EBF\u7A0B\u4E0A\u6267\u884C\u5408\u6210\u52A8\u753B\u64CD\u4F5C\u3002\u8FD9\u6837\u7684\u6548\u7387\u662F\u6700\u9AD8\u7684\uFF0C\u56E0\u4E3A\u662F\u5728\u975E\u4E3B\u7EBF\u7A0B\u4E0A\u5408\u6210\uFF0C\u5E76\u6CA1\u6709\u5360\u7528\u4E3B\u7EBF\u7A0B\u7684\u8D44\u6E90\uFF0C\u53E6\u5916\u4E5F\u907F\u5F00\u4E86\u5E03\u5C40\u548C\u7ED8\u5236\u4E24\u4E2A\u5B50\u9636\u6BB5\uFF0C\u6240\u4EE5\u76F8\u5BF9\u4E8E\u91CD\u7ED8\u548C\u91CD\u6392\uFF0C\u5408\u6210\u80FD\u5927\u5927\u63D0\u5347\u7ED8\u5236\u6548\u7387\u3002")
], -1);
const _hoisted_165 = /* @__PURE__ */ createBaseVNode("p", null, "\u5408\u6210\u64CD\u4F5C\u672C\u8EAB\u7684\u901F\u5EA6\u5C31\u975E\u5E38\u5FEB\uFF0C\u6240\u4EE5\u6267\u884C\u5408\u6210\u662F\u6548\u7387\u6700\u9AD8\u7684\u65B9\u5F0F\u3002", -1);
const _hoisted_166 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "will-change",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#will-change",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" will-change")
], -1);
const _hoisted_167 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5F53\u4F7F\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "will-change"),
  /* @__PURE__ */ createTextVNode("\u63D0\u524D\u544A\u8BC9\u6E32\u67D3\u5F15\u64CE\u5143\u7D20\u5C06\u8981\u505A\u7279\u6548\u53D8\u6362\uFF08\u6BD4\u5982\u53D8\u5F62\u3001\u6E10\u53D8\u3001\u52A8\u753B\u7B49\uFF09\u65F6\uFF0C\u6E32\u67D3\u5F15\u64CE\u4F1A\u5C06\u8BE5\u5143\u7D20\u5355\u72EC\u5B9E\u73B0\u4E3A\u4E00\u5C42\uFF0C\u7B49\u8FD9\u4E9B\u53D8\u6362\u53D1\u751F\u65F6\uFF0C\u6E32\u67D3\u5F15\u64CE\u4F1A\u901A\u8FC7\u5408\u6210\u7EBF\u7A0B\u76F4\u63A5\u53BB\u5904\u7406\u53D8\u6362\uFF0C\u8FD9\u4E9B\u53D8\u6362\u5E76\u6CA1\u6709\u6D89\u53CA\u5230\u4E3B\u7EBF\u7A0B\uFF0C\u8FD9\u6837\u5C31\u5927\u5927\u63D0\u5347\u4E86\u6E32\u67D3\u7684\u6548\u7387\u3002\u8FD9\u4E5F\u662F CSS \u52A8\u753B\u6BD4 JavaScript \u52A8\u753B\u9AD8\u6548\u7684\u539F\u56E0\u3002")
], -1);
const _hoisted_168 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u4F46\u662F\u51E1\u4E8B\u90FD\u6709\u4E24\u9762\u6027\uFF0C\u6BCF\u5F53\u6E32\u67D3\u5F15\u64CE\u4E3A\u4E00\u4E2A\u5143\u7D20\u51C6\u5907\u4E00\u4E2A\u72EC\u7ACB\u5C42\u7684\u65F6\u5019\uFF0C\u5B83\u5360\u7528\u7684\u5185\u5B58\u4E5F\u4F1A\u5927\u5927\u589E\u52A0\uFF0C\u56E0\u4E3A\u4ECE\u5C42\u6811\u5F00\u59CB\uFF0C\u540E\u7EED\u6BCF\u4E2A\u9636\u6BB5\u90FD\u4F1A\u591A\u4E00\u4E2A\u5C42\u7ED3\u6784\uFF0C\u8FD9\u4E9B\u90FD\u9700\u8981\u989D\u5916\u7684\u5185\u5B58\uFF0C\u6240\u4EE5\u4F60\u9700\u8981\u6070\u5F53\u5730\u4F7F\u7528 "),
  /* @__PURE__ */ createBaseVNode("code", null, "will-change"),
  /* @__PURE__ */ createTextVNode("\u3002")
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
          createVNode(_component_RouterLink, { to: "#_1-\u5904\u7406\u7528\u6237\u8F93\u5165" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#_2-url-\u8BF7\u6C42\u8FC7\u7A0B" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#_3-\u51C6\u5907\u6E32\u67D3\u8FDB\u7A0B" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#_4-\u63D0\u4EA4\u6587\u6863" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#_5-\u6E32\u67D3\u9636\u6BB5" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6784\u5EFA-dom-\u6811" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6837\u5F0F\u8BA1\u7B97-\u6784\u5EFA-cssom-\u6811" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u628A-css-\u8F6C\u6362\u4E3A\u6D4F\u89C8\u5668\u80FD\u591F\u7406\u89E3\u7684\u7ED3\u6784" }, {
                    default: withCtx(() => [
                      _hoisted_10
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u8F6C\u6362\u6837\u5F0F\u8868\u4E2D\u7684\u5C5E\u6027\u503C-\u4F7F\u5176\u6807\u51C6\u5316" }, {
                    default: withCtx(() => [
                      _hoisted_11
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u8BA1\u7B97\u51FA-dom-\u6811\u4E2D\u6BCF\u4E2A\u8282\u70B9\u7684\u5177\u4F53\u6837\u5F0F" }, {
                    default: withCtx(() => [
                      _hoisted_12
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5E03\u5C40" }, {
                default: withCtx(() => [
                  _hoisted_13
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u521B\u5EFA\u5E03\u5C40\u6811" }, {
                    default: withCtx(() => [
                      _hoisted_14
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u5E03\u5C40\u8BA1\u7B97" }, {
                    default: withCtx(() => [
                      _hoisted_15
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5206\u5C42" }, {
                default: withCtx(() => [
                  _hoisted_16
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u56FE\u5C42\u7ED8\u5236" }, {
                default: withCtx(() => [
                  _hoisted_17
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5408\u6210" }, {
                default: withCtx(() => [
                  _hoisted_18
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u5212\u5206\u56FE\u5757" }, {
                    default: withCtx(() => [
                      _hoisted_19
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u6805\u683C\u5316" }, {
                    default: withCtx(() => [
                      _hoisted_20
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u663E\u793A" }, {
                default: withCtx(() => [
                  _hoisted_21
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u603B\u7ED3" }, {
                default: withCtx(() => [
                  _hoisted_22
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u76F8\u5173\u6982\u5FF5-\u91CD\u6392\u3001\u91CD\u7ED8\u3001\u5408\u6210" }, {
                default: withCtx(() => [
                  _hoisted_23
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u66F4\u65B0\u4E86\u5143\u7D20\u7684\u51E0\u4F55\u5C5E\u6027-\u91CD\u6392" }, {
                    default: withCtx(() => [
                      _hoisted_24
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u66F4\u65B0\u5143\u7D20\u7684\u7ED8\u5236\u5C5E\u6027-\u91CD\u7ED8" }, {
                    default: withCtx(() => [
                      _hoisted_25
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u76F4\u63A5\u5408\u6210" }, {
                    default: withCtx(() => [
                      _hoisted_26
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#will-change" }, {
                    default: withCtx(() => [
                      _hoisted_27
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _hoisted_28,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_29, [
          _hoisted_30,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_31,
        _hoisted_32
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_33, [
          _hoisted_34,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_35, [
          _hoisted_36,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_37, [
          _hoisted_38,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_39, [
          _hoisted_40,
          createVNode(_component_OutboundLink)
        ])
      ])
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
    createBaseVNode("div", _hoisted_51, [
      _hoisted_52,
      _hoisted_53,
      _hoisted_54,
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createBaseVNode("a", _hoisted_55, [
            _hoisted_56,
            createVNode(_component_OutboundLink)
          ])
        ]),
        createBaseVNode("li", null, [
          createBaseVNode("a", _hoisted_57, [
            _hoisted_58,
            createVNode(_component_OutboundLink)
          ])
        ])
      ]),
      _hoisted_59
    ]),
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
    createBaseVNode("p", null, [
      _hoisted_88,
      createBaseVNode("a", _hoisted_89, [
        _hoisted_90,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_91,
    _hoisted_92,
    _hoisted_93,
    _hoisted_94,
    _hoisted_95,
    createBaseVNode("p", null, [
      _hoisted_96,
      createBaseVNode("a", _hoisted_97, [
        _hoisted_98,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_99
    ]),
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
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_127,
        createBaseVNode("a", _hoisted_128, [
          _hoisted_129,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_130
      ]),
      _hoisted_131
    ]),
    _hoisted_132,
    _hoisted_133,
    _hoisted_134,
    _hoisted_135,
    _hoisted_136,
    _hoisted_137,
    _hoisted_138,
    _hoisted_139,
    _hoisted_140,
    _hoisted_141,
    _hoisted_142,
    _hoisted_143,
    _hoisted_144,
    _hoisted_145,
    _hoisted_146,
    _hoisted_147,
    _hoisted_148,
    _hoisted_149,
    _hoisted_150,
    _hoisted_151,
    _hoisted_152,
    _hoisted_153,
    _hoisted_154,
    _hoisted_155,
    _hoisted_156,
    _hoisted_157,
    _hoisted_158,
    _hoisted_159,
    _hoisted_160,
    _hoisted_161,
    _hoisted_162,
    _hoisted_163,
    _hoisted_164,
    _hoisted_165,
    _hoisted_166,
    _hoisted_167,
    _hoisted_168,
    createVNode(_component_global_config)
  ], 64);
}
var howBrowsersWork_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { howBrowsersWork_html as default };
