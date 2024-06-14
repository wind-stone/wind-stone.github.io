import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
var _imports_0 = "/assets/http-vs-https.4d9cdc38.png";
var _imports_1 = "/assets/handshake.cdb40e39.png";
var _imports_2 = "/assets/zhihu-certificate.e8b7ec98.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "https",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#https",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" HTTPS")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u76F8\u5173\u6587\u7AE0");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u672F\u8BED");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("http vs https");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("SSL/TLS");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("SSL \u534F\u8BAE\u7684\u7EC4\u6210");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("SSL \u534F\u8BAE\u7684\u57FA\u672C\u8FC7\u7A0B");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u63E1\u624B\u9636\u6BB5");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u7B2C\u4E00\u6B21\u901A\u4FE1: \u5BA2\u6237\u7AEF\u53D1\u51FA\u8BF7\u6C42\uFF08ClientHello\uFF09");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u7B2C\u4E8C\u6B21\u901A\u4FE1: \u670D\u52A1\u5668\u56DE\u5E94\uFF08ServerHello\uFF09");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u7B2C\u4E09\u6B21\u901A\u4FE1: \u5BA2\u6237\u7AEF\u56DE\u5E94");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u7B2C\u56DB\u6B21\u901A\u4FE1: \u670D\u52A1\u5668\u7684\u6700\u540E\u56DE\u5E94");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u52A0\u5BC6\u901A\u4FE1\u8FC7\u7A0B\u4E2D\u7684\u7B97\u6CD5");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u975E\u5BF9\u79F0\u52A0\u5BC6");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u5BF9\u79F0\u52A0\u5BC6");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u6D88\u606F\u6458\u8981\u7B97\u6CD5");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u6570\u5B57\u8BC1\u4E66");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("\u8BC1\u4E66\u4FE1\u4EFB\u7684\u65B9\u5F0F");
const _hoisted_20 = /* @__PURE__ */ createTextVNode("\u516C\u94A5\u8BC1\u4E66");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("\u6570\u636E\u5B8C\u6574\u6027");
const _hoisted_22 = /* @__PURE__ */ createTextVNode("\u81EA\u6211\u7406\u89E3");
const _hoisted_23 = /* @__PURE__ */ createTextVNode("https \u7684\u5B9E\u73B0");
const _hoisted_24 = /* @__PURE__ */ createTextVNode("\u6DF7\u5408\u5185\u5BB9");
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("p", null, "Reference:", -1);
const _hoisted_26 = {
  href: "http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_27 = /* @__PURE__ */ createTextVNode("\u962E\u4E00\u5CF0 - SSL/TLS\u534F\u8BAE\u8FD0\u884C\u673A\u5236\u7684\u6982\u8FF0");
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u76F8\u5173\u6587\u7AE0",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u76F8\u5173\u6587\u7AE0",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u76F8\u5173\u6587\u7AE0")
], -1);
const _hoisted_29 = {
  href: "https://github.com/youngwind/blog/issues/108",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_30 = /* @__PURE__ */ createTextVNode("\u56FE\u89E3 HTTPS\uFF1ACharles \u6355\u83B7 HTTPS \u7684\u539F\u7406 #108");
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u672F\u8BED",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u672F\u8BED",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u672F\u8BED")
], -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "CA \u673A\u6784: \u8BC1\u4E66\u6388\u6743\uFF08Certificate Authority\uFF09\u4E2D\u5FC3"),
  /* @__PURE__ */ createBaseVNode("li", null, "SSL: Secure Sockets Layer\uFF0C\u5B89\u5168\u5957\u63A5\u5C42"),
  /* @__PURE__ */ createBaseVNode("li", null, "TLS: Transport Layer Security\uFF0C\u4F20\u8F93\u5C42\u5B89\u5168\u534F\u8BAE")
], -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("p", null, "TLS 1.0 \u901A\u5E38\u88AB\u6807\u793A\u4E3A SSL 3.1\uFF0CTLS 1.1 \u4E3A SSL 3.2\uFF0CTLS 1.2 \u4E3A SSL 3.3\u3002", -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("p", null, "SSL/TLS \u662F\u4E00\u79CD\u4ECB\u4E8E\u4F20\u8F93\u5C42\u548C\u5E94\u7528\u5C42\u7684\u534F\u8BAE\u3002", -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "http vs https"
  })
], -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "http-vs-https",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#http-vs-https",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" http vs https")
], -1);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u4E0D\u4F7F\u7528 SSL/TLS \u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "http"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u6240\u6709\u4FE1\u606F\u660E\u6587\u4F20\u64AD\uFF0C\u5B58\u5728\u7684\u98CE\u9669\u6709\uFF1A")
], -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u7A83\u542C\u98CE\u9669\uFF08eavesdropping\uFF09\uFF1A\u7B2C\u4E09\u65B9\u53EF\u4EE5\u83B7\u77E5\u901A\u4FE1\u5185\u5BB9\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u7BE1\u6539\u98CE\u9669\uFF08tampering\uFF09\uFF1A\u7B2C\u4E09\u65B9\u53EF\u4EE5\u4FEE\u6539\u901A\u4FE1\u5185\u5BB9\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u5192\u5145\u98CE\u9669\uFF08pretending\uFF09\uFF1A\u7B2C\u4E09\u65B9\u53EF\u4EE5\u5192\u5145\u4ED6\u4EBA\u8EAB\u4EFD\u53C2\u4E0E\u901A\u4FE1\u3002")
], -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("p", null, "SSL/TLS\u534F\u8BAE\u662F\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E09\u5927\u98CE\u9669\u800C\u8BBE\u8BA1\u7684\uFF0C\u5E0C\u671B\u8FBE\u5230\uFF1A", -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u6240\u6709\u4FE1\u606F\u90FD\u662F\u52A0\u5BC6\u4F20\u64AD\uFF0C\u7B2C\u4E09\u65B9\u65E0\u6CD5\u7A83\u542C\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u5177\u6709\u6821\u9A8C\u673A\u5236\uFF0C\u4E00\u65E6\u88AB\u7BE1\u6539\uFF0C\u901A\u4FE1\u53CC\u65B9\u4F1A\u7ACB\u523B\u53D1\u73B0\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u914D\u5907\u8EAB\u4EFD\u8BC1\u4E66\uFF0C\u9632\u6B62\u8EAB\u4EFD\u88AB\u5192\u5145\u3002")
], -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "https"),
  /* @__PURE__ */ createTextVNode("\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "http"),
  /* @__PURE__ */ createTextVNode("\u7684\u5B89\u5168\u7248\uFF0C\u5B83\u7684\u6838\u5FC3\u662F SSL/TLS\uFF08"),
  /* @__PURE__ */ createBaseVNode("code", null, "https"),
  /* @__PURE__ */ createTextVNode('\u540E\u9762\u7684"s"\u5C31\u662F\u6307 SSL\uFF09\uFF0C\u5176\u539F\u7406\u5C31\u662F\u5728\u4F20\u8F93\u5C42\u548C\u5E94\u7528\u5C42\u4E4B\u95F4\u52A0\u4E86\u4E00\u5C42 SSL/TLS\u3002')
], -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "ssl-tls",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#ssl-tls",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" SSL/TLS")
], -1);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "ssl-\u534F\u8BAE\u7684\u7EC4\u6210",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#ssl-\u534F\u8BAE\u7684\u7EC4\u6210",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" SSL \u534F\u8BAE\u7684\u7EC4\u6210")
], -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("p", null, "SSL \u57FA\u4E8E TCP\uFF0CSSL \u4E0D\u662F\u7B80\u5355\u5730\u5355\u4E2A\u534F\u8BAE\uFF0C\u800C\u662F\u4E24\u5C42\u534F\u8BAE\uFF1BSSL \u8BB0\u5F55\u534F\u8BAE\uFF08SSL Record Protocol\uFF09\u4E3A\u591A\u79CD\u9AD8\u5C42\u534F\u8BAE\uFF08SSL \u63E1\u624B\u534F\u8BAE\uFF0CSSL \u4FEE\u6539\u5BC6\u7801\u53C2\u6570\u534F\u8BAE\uFF0CSSL \u62A5\u8B66\u534F\u8BAE\uFF09\u63D0\u4F9B\u57FA\u672C\u7684\u5B89\u5168\u670D\u52A1\u3002HTTP \u662F\u4E3A Web \u5BA2\u6237\u7AEF/\u670D\u52A1\u5668\u4EA4\u4E92\u63D0\u4F9B\u4F20\u8F93\u670D\u52A1\u7684\uFF0C\u5B83\u53EF\u4EE5\u5728 SSL \u7684\u9876\u5C42\u8FD0\u884C\uFF1BSSL \u8BB0\u5F55\u534F\u8BAE\u4E3A SSL \u94FE\u63A5\u63D0\u4F9B\u4E24\u79CD\u670D\u52A1\uFF0C\u673A\u5BC6\u6027\uFF1A\u63E1\u624B\u534F\u8BAE\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5171\u4EAB\u5BC6\u94A5\uFF0C\u7528\u4E8E SSL \u8F7D\u8377\u7684\u5BF9\u79F0\u52A0\u5BC6\uFF1B\u6D88\u606F\u5B8C\u6574\u6027\uFF1A\u63E1\u624B\u534F\u8BAE\u8FD8\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5171\u4EAB\u5BC6\u94A5\uFF0C\u5B83\u7528\u6765\u4EA7\u751F\u4E00\u4E2A\u6D88\u606F\u8BA4\u8BC1\u7801\uFF08Message Authentication Code\uFF0CMAC\uFF09\u3002", -1);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "ssl-\u534F\u8BAE\u7684\u57FA\u672C\u8FC7\u7A0B",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#ssl-\u534F\u8BAE\u7684\u57FA\u672C\u8FC7\u7A0B",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" SSL \u534F\u8BAE\u7684\u57FA\u672C\u8FC7\u7A0B")
], -1);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("p", null, "\u672C\u8282\u5185\u5BB9\u7684\u91CD\u70B9\u662F\u8BBE\u8BA1\u601D\u60F3\u548C\u8FD0\u884C\u8FC7\u7A0B\uFF0C\u4E0D\u6D89\u53CA\u5177\u4F53\u7684\u5B9E\u73B0\u7EC6\u8282\u3002", -1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("p", null, "SSL/TLS \u534F\u8BAE\u7684\u57FA\u672C\u601D\u8DEF\u662F\u91C7\u7528\u516C\u94A5\u52A0\u5BC6\u6CD5\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5BA2\u6237\u7AEF\u5148\u5411\u670D\u52A1\u5668\u7AEF\u7D22\u8981\u516C\u94A5\uFF0C\u7136\u540E\u7528\u516C\u94A5\u52A0\u5BC6\u4FE1\u606F\uFF0C\u670D\u52A1\u5668\u6536\u5230\u5BC6\u6587\u540E\uFF0C\u7528\u81EA\u5DF1\u7684\u79C1\u94A5\u89E3\u5BC6\u3002", -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u5982\u4F55\u4FDD\u8BC1\u516C\u94A5\u4E0D\u88AB\u7BE1\u6539\uFF1F")
], -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("p", null, "\u89E3\u51B3\u65B9\u6CD5\uFF1A\u5C06\u516C\u94A5\u653E\u5728\u6570\u5B57\u8BC1\u4E66\u4E2D\u3002\u53EA\u8981\u8BC1\u4E66\u662F\u53EF\u4FE1\u7684\uFF0C\u516C\u94A5\u5C31\u662F\u53EF\u4FE1\u7684\u3002", -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u516C\u94A5\u52A0\u5BC6\u8BA1\u7B97\u91CF\u592A\u5927\uFF0C\u5982\u4F55\u51CF\u5C11\u8017\u7528\u7684\u65F6\u95F4\uFF1F")
], -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("p", null, '\u89E3\u51B3\u65B9\u6CD5\uFF1A\u6BCF\u4E00\u6B21\u5BF9\u8BDD\uFF08session\uFF09\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u90FD\u751F\u6210\u4E00\u4E2A"\u5BF9\u8BDD\u5BC6\u94A5"\uFF08session key\uFF09\uFF0C\u7528\u5B83\u6765\u52A0\u5BC6\u4FE1\u606F\u3002\u7531\u4E8E"\u5BF9\u8BDD\u5BC6\u94A5"\u662F\u5BF9\u79F0\u52A0\u5BC6\uFF0C\u6240\u4EE5\u8FD0\u7B97\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u800C\u670D\u52A1\u5668\u516C\u94A5\u53EA\u7528\u4E8E\u52A0\u5BC6"\u5BF9\u8BDD\u5BC6\u94A5"\u672C\u8EAB\uFF0C\u8FD9\u6837\u5C31\u51CF\u5C11\u4E86\u52A0\u5BC6\u8FD0\u7B97\u7684\u6D88\u8017\u65F6\u95F4\u3002', -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("p", null, "SSL/TLS\u534F\u8BAE\u7684\u57FA\u672C\u8FC7\u7A0B\u662F\u8FD9\u6837\u7684\uFF1A", -1);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("ol", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u7AEF\u7D22\u8981\u5E76\u9A8C\u8BC1\u516C\u94A5\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, '\u53CC\u65B9\u534F\u5546\u751F\u6210"\u5BF9\u8BDD\u5BC6\u94A5"\u3002'),
  /* @__PURE__ */ createBaseVNode("li", null, '\u53CC\u65B9\u91C7\u7528"\u5BF9\u8BDD\u5BC6\u94A5"\u8FDB\u884C\u52A0\u5BC6\u901A\u4FE1\u3002')
], -1);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("p", null, '\u4E0A\u9762\u8FC7\u7A0B\u7684\u524D\u4E24\u6B65\uFF0C\u53C8\u79F0\u4E3A"\u63E1\u624B\u9636\u6BB5"\uFF08handshake\uFF09\uFF0C\u63A5\u4E0B\u6765\u5C06\u8BE6\u7EC6\u8BF4\u660E\u63E1\u624B\u9636\u6BB5\u3002', -1);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u63E1\u624B\u9636\u6BB5",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u63E1\u624B\u9636\u6BB5",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u63E1\u624B\u9636\u6BB5")
], -1);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_1,
    alt: "\u63E1\u624B\u9636\u6BB5"
  })
], -1);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("p", null, '"\u63E1\u624B\u9636\u6BB5"\u6D89\u53CA\u56DB\u6B21\u901A\u4FE1\u3002', -1);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container warning" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "\u6CE8\u610F"),
  /* @__PURE__ */ createBaseVNode("p", null, '\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C"\u63E1\u624B\u9636\u6BB5"\u7684\u6240\u6709\u901A\u4FE1\u90FD\u662F\u660E\u6587\u7684\u3002')
], -1);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u7B2C\u4E00\u6B21\u901A\u4FE1-\u5BA2\u6237\u7AEF\u53D1\u51FA\u8BF7\u6C42-clienthello",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7B2C\u4E00\u6B21\u901A\u4FE1-\u5BA2\u6237\u7AEF\u53D1\u51FA\u8BF7\u6C42-clienthello",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7B2C\u4E00\u6B21\u901A\u4FE1: \u5BA2\u6237\u7AEF\u53D1\u51FA\u8BF7\u6C42\uFF08ClientHello\uFF09")
], -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u9996\u5148\uFF0C\u5BA2\u6237\u7AEF\uFF08\u901A\u5E38\u662F\u6D4F\u89C8\u5668\uFF09\u5148\u5411\u670D\u52A1\u5668\u53D1\u51FA\u52A0\u5BC6\u901A\u4FE1\u7684\u8BF7\u6C42\uFF0C\u8FD9\u88AB\u53EB\u505A"),
  /* @__PURE__ */ createBaseVNode("code", null, "ClientHello"),
  /* @__PURE__ */ createTextVNode("\u8BF7\u6C42\u3002")
], -1);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("p", null, "\u5728\u8FD9\u4E00\u6B65\uFF0C\u5BA2\u6237\u7AEF\u4E3B\u8981\u5411\u670D\u52A1\u5668\u63D0\u4F9B\u4EE5\u4E0B\u4FE1\u606F\u3002", -1);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u652F\u6301\u7684\u534F\u8BAE\u7248\u672C\uFF0C\u6BD4\u5982 TLS 1.0 \u7248\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, '\u4E00\u4E2A\u5BA2\u6237\u7AEF\u751F\u6210\u7684\u968F\u673A\u6570\uFF0C\u7A0D\u540E\u7528\u4E8E\u751F\u6210"\u5BF9\u8BDD\u5BC6\u94A5"\u3002\uFF08cxl: \u8FD9\u91CC\u4EA7\u751F\u751F\u6210\u5BF9\u8BDD\u79D8\u94A5\u7684\u7B2C\u4E00\u4E2A\u968F\u673A\u6570\uFF09'),
  /* @__PURE__ */ createBaseVNode("li", null, "\u652F\u6301\u7684\u52A0\u5BC6\u65B9\u6CD5\uFF0C\u6BD4\u5982 RSA \u516C\u94A5\u52A0\u5BC6\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u652F\u6301\u7684\u538B\u7F29\u65B9\u6CD5\u3002")
], -1);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("p", null, "\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5BA2\u6237\u7AEF\u53D1\u9001\u7684\u4FE1\u606F\u4E4B\u4E2D\u4E0D\u5305\u62EC\u670D\u52A1\u5668\u7684\u57DF\u540D\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u7406\u8BBA\u4E0A\u670D\u52A1\u5668\u53EA\u80FD\u5305\u542B\u4E00\u4E2A\u7F51\u7AD9\uFF0C\u5426\u5219\u4F1A\u5206\u4E0D\u6E05\u5E94\u8BE5\u5411\u5BA2\u6237\u7AEF\u63D0\u4F9B\u54EA\u4E00\u4E2A\u7F51\u7AD9\u7684\u6570\u5B57\u8BC1\u4E66\u3002\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u901A\u5E38\u4E00\u53F0\u670D\u52A1\u5668\u53EA\u80FD\u6709\u4E00\u5F20\u6570\u5B57\u8BC1\u4E66\u7684\u539F\u56E0\u3002", -1);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5BF9\u4E8E\u865A\u62DF\u4E3B\u673A\u7684\u7528\u6237\u6765\u8BF4\uFF0C\u8FD9\u5F53\u7136\u5F88\u4E0D\u65B9\u4FBF\u30022006\u5E74\uFF0CTLS \u534F\u8BAE\u52A0\u5165\u4E86\u4E00\u4E2A"),
  /* @__PURE__ */ createBaseVNode("code", null, "Server Name Indication"),
  /* @__PURE__ */ createTextVNode("\u6269\u5C55\uFF0C\u5141\u8BB8\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u63D0\u4F9B\u5B83\u6240\u8BF7\u6C42\u7684\u57DF\u540D\u3002")
], -1);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u7B2C\u4E8C\u6B21\u901A\u4FE1-\u670D\u52A1\u5668\u56DE\u5E94-serverhello",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7B2C\u4E8C\u6B21\u901A\u4FE1-\u670D\u52A1\u5668\u56DE\u5E94-serverhello",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7B2C\u4E8C\u6B21\u901A\u4FE1: \u670D\u52A1\u5668\u56DE\u5E94\uFF08ServerHello\uFF09")
], -1);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("p", null, "\u670D\u52A1\u5668\u6536\u5230\u5BA2\u6237\u7AEF\u8BF7\u6C42\u540E\uFF0C\u5411\u5BA2\u6237\u7AEF\u53D1\u51FA\u56DE\u5E94\uFF0C\u8FD9\u53EB\u505A ServerHello\u3002\u670D\u52A1\u5668\u7684\u56DE\u5E94\u5305\u542B\u4EE5\u4E0B\u5185\u5BB9\u3002", -1);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u786E\u8BA4\u4F7F\u7528\u7684\u52A0\u5BC6\u901A\u4FE1\u534F\u8BAE\u7248\u672C\uFF0C\u6BD4\u5982 TLS 1.0 \u7248\u672C\u3002\u5982\u679C\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u652F\u6301\u7684\u7248\u672C\u4E0D\u4E00\u81F4\uFF0C\u670D\u52A1\u5668\u5173\u95ED\u52A0\u5BC6\u901A\u4FE1\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, '\u4E00\u4E2A\u670D\u52A1\u5668\u751F\u6210\u7684\u968F\u673A\u6570\uFF0C\u7A0D\u540E\u7528\u4E8E\u751F\u6210"\u5BF9\u8BDD\u5BC6\u94A5"\u3002\uFF08cxl: \u8FD9\u91CC\u4EA7\u751F\u751F\u6210\u5BF9\u8BDD\u79D8\u94A5\u7684\u7B2C\u4E8C\u4E2A\u968F\u673A\u6570\uFF09'),
  /* @__PURE__ */ createBaseVNode("li", null, "\u786E\u8BA4\u4F7F\u7528\u7684\u52A0\u5BC6\u65B9\u6CD5\uFF0C\u6BD4\u5982 RSA \u516C\u94A5\u52A0\u5BC6\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u670D\u52A1\u5668\u8BC1\u4E66\u3002")
], -1);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("p", null, '\u9664\u4E86\u4E0A\u9762\u8FD9\u4E9B\u4FE1\u606F\uFF0C\u5982\u679C\u670D\u52A1\u5668\u9700\u8981\u786E\u8BA4\u5BA2\u6237\u7AEF\u7684\u8EAB\u4EFD\uFF0C\u5C31\u4F1A\u518D\u5305\u542B\u4E00\u9879\u8BF7\u6C42\uFF0C\u8981\u6C42\u5BA2\u6237\u7AEF\u63D0\u4F9B"\u5BA2\u6237\u7AEF\u8BC1\u4E66"\u3002\u6BD4\u5982\uFF0C\u91D1\u878D\u673A\u6784\u5F80\u5F80\u53EA\u5141\u8BB8\u8BA4\u8BC1\u5BA2\u6237\u8FDE\u5165\u81EA\u5DF1\u7684\u7F51\u7EDC\uFF0C\u5C31\u4F1A\u5411\u6B63\u5F0F\u5BA2\u6237\u63D0\u4F9B USB \u5BC6\u94A5\uFF0C\u91CC\u9762\u5C31\u5305\u542B\u4E86\u4E00\u5F20\u5BA2\u6237\u7AEF\u8BC1\u4E66\u3002', -1);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u7B2C\u4E09\u6B21\u901A\u4FE1-\u5BA2\u6237\u7AEF\u56DE\u5E94",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7B2C\u4E09\u6B21\u901A\u4FE1-\u5BA2\u6237\u7AEF\u56DE\u5E94",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7B2C\u4E09\u6B21\u901A\u4FE1: \u5BA2\u6237\u7AEF\u56DE\u5E94")
], -1);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("p", null, "\u5BA2\u6237\u7AEF\u6536\u5230\u670D\u52A1\u5668\u56DE\u5E94\u4EE5\u540E\uFF0C\u9996\u5148\u9A8C\u8BC1\u670D\u52A1\u5668\u8BC1\u4E66\u3002\u5982\u679C\u8BC1\u4E66\u5B58\u5728\u4EE5\u4E0B\u4EFB\u610F\u4E00\u79CD\u60C5\u51B5\uFF0C\u5C31\u4F1A\u5411\u8BBF\u95EE\u8005\u663E\u793A\u4E00\u4E2A\u8B66\u544A\uFF0C\u7531\u5176\u9009\u62E9\u662F\u5426\u8FD8\u8981\u7EE7\u7EED\u901A\u4FE1\u3002", -1);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u8BC1\u4E66\u4E0D\u662F\u53EF\u4FE1\u673A\u6784\u9881\u5E03"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u8BC1\u4E66\u4E2D\u7684\u57DF\u540D\u4E0E\u5B9E\u9645\u57DF\u540D\u4E0D\u4E00\u81F4"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u8BC1\u4E66\u5DF2\u7ECF\u8FC7\u671F")
], -1);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("p", null, "\u5982\u679C\u8BC1\u4E66\u6CA1\u6709\u95EE\u9898\uFF0C\u5BA2\u6237\u7AEF\u5C31\u4F1A\u4ECE\u8BC1\u4E66\u4E2D\u53D6\u51FA\u670D\u52A1\u5668\u7684\u516C\u94A5\u3002\u7136\u540E\uFF0C\u5411\u670D\u52A1\u5668\u53D1\u9001\u4E0B\u9762\u4E09\u9879\u4FE1\u606F\u3002", -1);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u4E00\u4E2A\u968F\u673A\u6570\u3002\u8BE5\u968F\u673A\u6570\u7528\u670D\u52A1\u5668\u516C\u94A5\u52A0\u5BC6\uFF0C\u9632\u6B62\u88AB\u7A83\u542C\u3002\uFF08cxl: \u8FD9\u91CC\u4EA7\u751F\u751F\u6210\u5BF9\u8BDD\u79D8\u94A5\u7684\u7B2C\u4E09\u4E2A\u968F\u673A\u6570\uFF09"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u7F16\u7801\u6539\u53D8\u901A\u77E5\uFF0C\u8868\u793A\u968F\u540E\u7684\u4FE1\u606F\u90FD\u5C06\u7528\u53CC\u65B9\u5546\u5B9A\u7684\u52A0\u5BC6\u65B9\u6CD5\u548C\u5BC6\u94A5\u53D1\u9001\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u5BA2\u6237\u7AEF\u63E1\u624B\u7ED3\u675F\u901A\u77E5\uFF0C\u8868\u793A\u5BA2\u6237\u7AEF\u7684\u63E1\u624B\u9636\u6BB5\u5DF2\u7ECF\u7ED3\u675F\u3002\u8FD9\u4E00\u9879\u540C\u65F6\u4E5F\u662F\u524D\u9762\u53D1\u9001\u7684\u6240\u6709\u5185\u5BB9\u7684"),
    /* @__PURE__ */ createBaseVNode("code", null, "hash"),
    /* @__PURE__ */ createTextVNode("\u503C\uFF0C\u7528\u6765\u4F9B\u670D\u52A1\u5668\u6821\u9A8C\u3002")
  ])
], -1);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u4E0A\u9762\u7B2C\u4E00\u9879\u7684\u968F\u673A\u6570\uFF0C\u662F\u6574\u4E2A\u63E1\u624B\u9636\u6BB5\u51FA\u73B0\u7684\u7B2C\u4E09\u4E2A\u968F\u673A\u6570\uFF0C\u53C8\u79F0"),
  /* @__PURE__ */ createBaseVNode("code", null, "pre-master key"),
  /* @__PURE__ */ createTextVNode('\u3002\u6709\u4E86\u5B83\u4EE5\u540E\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u5C31\u540C\u65F6\u6709\u4E86\u4E09\u4E2A\u968F\u673A\u6570\uFF0C\u63A5\u7740\u53CC\u65B9\u5C31\u7528\u4E8B\u5148\u5546\u5B9A\u7684\u52A0\u5BC6\u65B9\u6CD5\uFF0C\u5404\u81EA\u751F\u6210\u672C\u6B21\u4F1A\u8BDD\u6240\u7528\u7684\u540C\u4E00\u628A"\u4F1A\u8BDD\u5BC6\u94A5"\u3002')
], -1);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("p", null, "TODO: \u5982\u4F55\u901A\u8FC7\u4E09\u4E2A\u968F\u673A\u6570\uFF0C\u6765\u751F\u6210\u4F1A\u8BDD\u79D8\u94A5\uFF1F", -1);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode("p", null, '\u81F3\u4E8E\u4E3A\u4EC0\u4E48\u4E00\u5B9A\u8981\u7528\u4E09\u4E2A\u968F\u673A\u6570\uFF0C\u6765\u751F\u6210"\u4F1A\u8BDD\u5BC6\u94A5"\uFF0Cdog250 \u89E3\u91CA\u5F97\u5F88\u597D\uFF1A', -1);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("blockquote", null, [
  /* @__PURE__ */ createBaseVNode("p", null, '"\u4E0D\u7BA1\u662F\u5BA2\u6237\u7AEF\u8FD8\u662F\u670D\u52A1\u5668\uFF0C\u90FD\u9700\u8981\u968F\u673A\u6570\uFF0C\u8FD9\u6837\u751F\u6210\u7684\u5BC6\u94A5\u624D\u4E0D\u4F1A\u6BCF\u6B21\u90FD\u4E00\u6837\u3002\u7531\u4E8ESSL\u534F\u8BAE\u4E2D\u8BC1\u4E66\u662F\u9759\u6001\u7684\uFF0C\u56E0\u6B64\u5341\u5206\u6709\u5FC5\u8981\u5F15\u5165\u4E00\u79CD\u968F\u673A\u56E0\u7D20\u6765\u4FDD\u8BC1\u534F\u5546\u51FA\u6765\u7684\u5BC6\u94A5\u7684\u968F\u673A\u6027\u3002'),
  /* @__PURE__ */ createBaseVNode("p", null, "\u5BF9\u4E8ERSA\u5BC6\u94A5\u4EA4\u6362\u7B97\u6CD5\u6765\u8BF4\uFF0Cpre-master-key\u672C\u8EAB\u5C31\u662F\u4E00\u4E2A\u968F\u673A\u6570\uFF0C\u518D\u52A0\u4E0Ahello\u6D88\u606F\u4E2D\u7684\u968F\u673A\uFF0C\u4E09\u4E2A\u968F\u673A\u6570\u901A\u8FC7\u4E00\u4E2A\u5BC6\u94A5\u5BFC\u51FA\u5668\u6700\u7EC8\u5BFC\u51FA\u4E00\u4E2A\u5BF9\u79F0\u5BC6\u94A5\u3002"),
  /* @__PURE__ */ createBaseVNode("p", null, 'pre master\u7684\u5B58\u5728\u5728\u4E8ESSL\u534F\u8BAE\u4E0D\u4FE1\u4EFB\u6BCF\u4E2A\u4E3B\u673A\u90FD\u80FD\u4EA7\u751F\u5B8C\u5168\u968F\u673A\u7684\u968F\u673A\u6570\uFF0C\u5982\u679C\u968F\u673A\u6570\u4E0D\u968F\u673A\uFF0C\u90A3\u4E48pre master secret\u5C31\u6709\u53EF\u80FD\u88AB\u731C\u51FA\u6765\uFF0C\u90A3\u4E48\u4EC5\u9002\u7528pre master secret\u4F5C\u4E3A\u5BC6\u94A5\u5C31\u4E0D\u5408\u9002\u4E86\uFF0C\u56E0\u6B64\u5FC5\u987B\u5F15\u5165\u65B0\u7684\u968F\u673A\u56E0\u7D20\uFF0C\u90A3\u4E48\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u52A0\u4E0Apre master secret\u4E09\u4E2A\u968F\u673A\u6570\u4E00\u540C\u751F\u6210\u7684\u5BC6\u94A5\u5C31\u4E0D\u5BB9\u6613\u88AB\u731C\u51FA\u4E86\uFF0C\u4E00\u4E2A\u4F2A\u968F\u673A\u53EF\u80FD\u5B8C\u5168\u4E0D\u968F\u673A\uFF0C\u53EF\u662F\u662F\u4E09\u4E2A\u4F2A\u968F\u673A\u5C31\u5341\u5206\u63A5\u8FD1\u968F\u673A\u4E86\uFF0C\u6BCF\u589E\u52A0\u4E00\u4E2A\u81EA\u7531\u5EA6\uFF0C\u968F\u673A\u6027\u589E\u52A0\u7684\u53EF\u4E0D\u662F\u4E00\u3002"')
], -1);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode("p", null, "\u6B64\u5916\uFF0C\u5982\u679C\u524D\u4E00\u6B65\uFF0C\u670D\u52A1\u5668\u8981\u6C42\u5BA2\u6237\u7AEF\u8BC1\u4E66\uFF0C\u5BA2\u6237\u7AEF\u4F1A\u5728\u8FD9\u4E00\u6B65\u53D1\u9001\u8BC1\u4E66\u53CA\u76F8\u5173\u4FE1\u606F\u3002", -1);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u7B2C\u56DB\u6B21\u901A\u4FE1-\u670D\u52A1\u5668\u7684\u6700\u540E\u56DE\u5E94",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7B2C\u56DB\u6B21\u901A\u4FE1-\u670D\u52A1\u5668\u7684\u6700\u540E\u56DE\u5E94",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7B2C\u56DB\u6B21\u901A\u4FE1: \u670D\u52A1\u5668\u7684\u6700\u540E\u56DE\u5E94")
], -1);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u670D\u52A1\u5668\u6536\u5230\u5BA2\u6237\u7AEF\u7684\u7B2C\u4E09\u4E2A\u968F\u673A\u6570"),
  /* @__PURE__ */ createBaseVNode("code", null, "pre-master key"),
  /* @__PURE__ */ createTextVNode('\u4E4B\u540E\uFF0C\u8BA1\u7B97\u751F\u6210\u672C\u6B21\u4F1A\u8BDD\u6240\u7528\u7684"\u4F1A\u8BDD\u5BC6\u94A5"\u3002\u7136\u540E\uFF0C\u5411\u5BA2\u6237\u7AEF\u6700\u540E\u53D1\u9001\u4E0B\u9762\u4FE1\u606F\u3002')
], -1);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u7F16\u7801\u6539\u53D8\u901A\u77E5\uFF0C\u8868\u793A\u968F\u540E\u7684\u4FE1\u606F\u90FD\u5C06\u7528\u53CC\u65B9\u5546\u5B9A\u7684\u52A0\u5BC6\u65B9\u6CD5\u548C\u5BC6\u94A5\u53D1\u9001\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u670D\u52A1\u5668\u63E1\u624B\u7ED3\u675F\u901A\u77E5\uFF0C\u8868\u793A\u670D\u52A1\u5668\u7684\u63E1\u624B\u9636\u6BB5\u5DF2\u7ECF\u7ED3\u675F\u3002\u8FD9\u4E00\u9879\u540C\u65F6\u4E5F\u662F\u524D\u9762\u53D1\u9001\u7684\u6240\u6709\u5185\u5BB9\u7684"),
    /* @__PURE__ */ createBaseVNode("code", null, "hash"),
    /* @__PURE__ */ createTextVNode("\u503C\uFF0C\u7528\u6765\u4F9B\u5BA2\u6237\u7AEF\u6821\u9A8C\u3002")
  ])
], -1);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode("p", null, '\u81F3\u6B64\uFF0C\u6574\u4E2A\u63E1\u624B\u9636\u6BB5\u5168\u90E8\u7ED3\u675F\u3002\u63A5\u4E0B\u6765\uFF0C\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u8FDB\u5165\u52A0\u5BC6\u901A\u4FE1\uFF0C\u5C31\u5B8C\u5168\u662F\u4F7F\u7528\u666E\u901A\u7684 HTTP \u534F\u8BAE\uFF0C\u53EA\u4E0D\u8FC7\u7528"\u4F1A\u8BDD\u5BC6\u94A5"\u52A0\u5BC6\u5185\u5BB9\u3002', -1);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u52A0\u5BC6\u901A\u4FE1\u8FC7\u7A0B\u4E2D\u7684\u7B97\u6CD5",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u52A0\u5BC6\u901A\u4FE1\u8FC7\u7A0B\u4E2D\u7684\u7B97\u6CD5",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u52A0\u5BC6\u901A\u4FE1\u8FC7\u7A0B\u4E2D\u7684\u7B97\u6CD5")
], -1);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u975E\u5BF9\u79F0\u52A0\u5BC6",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u975E\u5BF9\u79F0\u52A0\u5BC6",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u975E\u5BF9\u79F0\u52A0\u5BC6")
], -1);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("p", null, "\u79C1\u94A5\u548C\u516C\u94A5\u4E0D\u662F\u540C\u4E00\u4E2A\uFF0C\u516C\u94A5\u7528\u4E8E\u53D1\u9001\u7ED9\u53D1\u9001\u65B9\uFF0C\u79C1\u94A5\u7528\u4E8E\u63A5\u6536\u65B9\u81EA\u5DF1\u4FDD\u7559\u3002\u53D1\u9001\u65B9\u4F7F\u7528\u63A5\u6536\u65B9\u516C\u5E03\u7684\u516C\u94A5\u5BF9\u901A\u4FE1\u5185\u5BB9\u8FDB\u884C\u52A0\u5BC6\uFF0C\u53EA\u6709\u63A5\u6536\u65B9\u81EA\u8EAB\u4FDD\u7559\u7684\u79C1\u94A5\u624D\u80FD\u89E3\u5BC6\u3002", -1);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("p", null, "\u975E\u5BF9\u79F0\u52A0\u5BC6\u76F8\u6BD4\u5BF9\u79F0\u52A0\u5BC6\u66F4\u52A0\u5B89\u5168\uFF0C\u4F46\u4E5F\u5B58\u5728\u4E24\u4E2A\u660E\u663E\u7F3A\u70B9\uFF1A", -1);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "CPU \u8BA1\u7B97\u8D44\u6E90\u6D88\u8017\u975E\u5E38\u5927\u3002\u4E00\u6B21\u5B8C\u5168 TLS \u63E1\u624B\uFF0C\u5BC6\u94A5\u4EA4\u6362\u65F6\u7684\u975E\u5BF9\u79F0\u89E3\u5BC6\u8BA1\u7B97\u91CF\u5360\u6574\u4E2A\u63E1\u624B\u8FC7\u7A0B\u7684 90% \u4EE5\u4E0A\u3002\u800C\u5BF9\u79F0\u52A0\u5BC6\u7684\u8BA1\u7B97\u91CF\u53EA\u76F8\u5F53\u4E8E\u975E\u5BF9\u79F0\u52A0\u5BC6\u7684 0.1%\uFF0C\u5982\u679C\u5E94\u7528\u5C42\u6570\u636E\u4E5F\u4F7F\u7528\u975E\u5BF9\u79F0\u52A0\u89E3\u5BC6\uFF0C\u6027\u80FD\u5F00\u9500\u592A\u5927\uFF0C\u65E0\u6CD5\u627F\u53D7\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u975E\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\u5BF9\u52A0\u5BC6\u5185\u5BB9\u7684\u957F\u5EA6\u6709\u9650\u5236\uFF0C\u4E0D\u80FD\u8D85\u8FC7\u516C\u94A5\u957F\u5EA6\u3002\u6BD4\u5982\u73B0\u5728\u5E38\u7528\u7684\u516C\u94A5\u957F\u5EA6\u662F 2048 \u4F4D\uFF0C\u610F\u5473\u7740\u5F85\u52A0\u5BC6\u5185\u5BB9\u4E0D\u80FD\u8D85\u8FC7 256 \u4E2A\u5B57\u8282\u3002")
], -1);
const _hoisted_88 = /* @__PURE__ */ createBaseVNode("p", null, "\u56E0\u6B64\uFF0C\u975E\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\u76EE\u524D\u53EA\u80FD\u7528\u6765\u4F5C\u201C\u5BC6\u94A5\u4EA4\u6362\u201D\u6216\u8005\u201C\u5185\u5BB9\u7B7E\u540D\u201D\uFF0C\u800C\u4E0D\u9002\u5408\u7528\u6765\u505A\u5E94\u7528\u5C42\u4F20\u8F93\u5185\u5BB9\u7684\u52A0\u89E3\u5BC6\u3002\u975E\u5BF9\u79F0\u5BC6\u94A5\u4EA4\u6362\u7B97\u6CD5\u662F\u6574\u4E2A HTTPS \u5F97\u4EE5\u5B89\u5168\u7684\u57FA\u77F3\uFF0C\u5145\u5206\u7406\u89E3\u975E\u5BF9\u79F0\u5BC6\u94A5\u4EA4\u6362\u7B97\u6CD5\u662F\u7406\u89E3 HTTPS \u534F\u8BAE\u548C\u529F\u80FD\u7684\u5173\u952E\u3002", -1);
const _hoisted_89 = /* @__PURE__ */ createBaseVNode("p", null, "\u5E38\u89C1\u7684\u975E\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\u6709\uFF1A", -1);
const _hoisted_90 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("RSA "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "\u7B97\u6CD5\u5B9E\u73B0\u7B80\u5355\uFF0C\u8BDE\u751F\u4E0E1977\u5E74\uFF0C\u5386\u53F2\u60A0\u4E45\uFF0C\u7ECF\u8FC7\u4E86\u957F\u65F6\u95F4\u7684\u7834\u89E3\u6D4B\u8BD5\uFF0C\u5B89\u5168\u6027\u9AD8\u3002"),
      /* @__PURE__ */ createBaseVNode("li", null, "\u7F3A\u70B9\u5C31\u662F\u9700\u8981\u6BD4\u8F83\u5927\u7684\u7D20\u6570(\u76EE\u524D\u5E38\u7528\u7684\u662F2048\u4F4D)\u6765\u4FDD\u8BC1\u5B89\u5168\u5F3A\u5EA6\uFF0C\u5F88\u6D88\u8017CPU\u8FD0\u7B97\u8D44\u6E90\u3002"),
      /* @__PURE__ */ createBaseVNode("li", null, "RSA \u662F\u76EE\u524D'\u552F\u4E00\u4E00\u4E2A'\u65E2\u80FD\u7528\u4E8E'\u5BC6\u94A5\u4EA4\u6362'\u53C8\u80FD\u7528\u4E8E'\u8BC1\u4E66\u7B7E\u540D'\u7684\u7B97\u6CD5\u3002")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, "DH"),
  /* @__PURE__ */ createBaseVNode("li", null, "DHE"),
  /* @__PURE__ */ createBaseVNode("li", null, "ECDH"),
  /* @__PURE__ */ createBaseVNode("li", null, "ECDHE")
], -1);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode("p", null, "\u76EE\u524D\u6700\u5E38\u7528\u7684\u975E\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\u662F RSA \u7B97\u6CD5\u3002", -1);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u5BF9\u79F0\u52A0\u5BC6",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5BF9\u79F0\u52A0\u5BC6",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5BF9\u79F0\u52A0\u5BC6")
], -1);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode("p", null, "\u5BF9\u79F0\u52A0\u5BC6\u662F\u6307\u52A0\u5BC6\u548C\u89E3\u5BC6\u4F7F\u7528\u7684\u662F\u540C\u4E00\u4E2A\u79D8\u94A5\uFF0C\u5373\u660E\u6587 A \u901A\u8FC7\u79D8\u94A5 B \u52A0\u5BC6\u4E3A\u5BC6\u6587 C\uFF0C\u5219\u5C06\u5BC6\u6587 C \u7528\u79D8\u94A5 B \u89E3\u5BC6\uFF0C\u53EF\u4EE5\u5F97\u5230\u660E\u6587 A\u3002", -1);
const _hoisted_94 = /* @__PURE__ */ createBaseVNode("p", null, "\u5F02\u6216\u8FD0\u7B97\u5C31\u662F\u4E00\u79CD\u5178\u578B\u7684\u5BF9\u79F0\u5BC6\u7801\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002", -1);
const _hoisted_95 = /* @__PURE__ */ createBaseVNode("p", null, "\u52A0\u5BC6\uFF1A", -1);
const _hoisted_96 = /* @__PURE__ */ createBaseVNode("div", { class: "language-bash ext-sh line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-bash" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createTextVNode("\u660E\u6587 A: 0110 0101 "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1101"),
      /* @__PURE__ */ createTextVNode("\n\u79D8\u94A5 B: 0101 "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1001"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1010"),
      /* @__PURE__ */ createTextVNode("\n\u5F02\u6216\u8FD0\u7B97\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\u5BC6\u6587 C: 0011 "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1100"),
      /* @__PURE__ */ createTextVNode(" 0111\n")
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_97 = /* @__PURE__ */ createBaseVNode("p", null, "\u89E3\u5BC6\uFF1A", -1);
const _hoisted_98 = /* @__PURE__ */ createBaseVNode("div", { class: "language-bash ext-sh line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-bash" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createTextVNode("\u5BC6\u6587 C: 0011 "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1100"),
      /* @__PURE__ */ createTextVNode(" 0111\n\u79D8\u94A5 B: 0101 "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1001"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1010"),
      /* @__PURE__ */ createTextVNode("\n\u5F02\u6216\u8FD0\u7B97\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\u660E\u6587 A: 0110 0101 "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1101"),
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode("p", null, "\u5BF9\u79F0\u52A0\u5BC6\u7684\u4F18\u52BF\uFF1A\u52A0\u89E3\u5BC6\u901F\u5EA6\u5FEB\uFF0C\u6548\u7387\u9AD8 \u5BF9\u79F0\u52A0\u5BC6\u7684\u52A3\u52BF\uFF1A\u53CC\u65B9\u9700\u8981\u4E8B\u5148\u77E5\u9053\u540C\u4E00\u628A\u79D8\u94A5\uFF0C\u79D8\u94A5\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u88AB\u7A83\u53D6\uFF0C\u5B89\u5168\u6027\u6CA1\u6709\u975E\u5BF9\u79F0\u52A0\u5BC6\u9AD8\u3002", -1);
const _hoisted_100 = /* @__PURE__ */ createBaseVNode("p", null, "\u5BF9\u79F0\u52A0\u5BC6\u5206\u4E3A\u4E24\u79CD\u6A21\u5F0F\uFF1A", -1);
const _hoisted_101 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u6D41\u5F0F\u52A0\u5BC6 "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "\u73B0\u5728\u5E38\u7528\u7684\u5C31\u662F RC4\uFF0C\u4E0D\u8FC7 RC4 \u5DF2\u7ECF\u4E0D\u518D\u5B89\u5168\uFF0C\u5FAE\u8F6F\u4E5F\u5EFA\u8BAE\u7F51\u7AD9\u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528 RC4 \u6D41\u5F0F\u52A0\u5BC6\u3002"),
      /* @__PURE__ */ createBaseVNode("li", null, "\u4E00\u79CD\u65B0\u7684\u66FF\u4EE3 RC4 \u7684\u6D41\u5F0F\u52A0\u5BC6\u7B97\u6CD5\u53EB ChaCha20\uFF0C\u5B83\u662F google \u63A8\u51FA\u7684\u901F\u5EA6\u66F4\u5FEB\uFF0C\u66F4\u5B89\u5168\u7684\u52A0\u5BC6\u7B97\u6CD5\u3002\u76EE\u524D\u5DF2\u7ECF\u88AB android \u548C chrome \u91C7\u7528\uFF0C\u4E5F\u7F16\u8BD1\u8FDB\u4E86 google \u7684\u5F00\u6E90 openssl \u5206\u652F \u2014boring ssl\uFF0C\u5E76\u4E14 nginx 1.7.4 \u4E5F\u652F\u6301\u7F16\u8BD1 boringssl\u3002")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u5206\u7EC4\u52A0\u5BC6 "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "\u4EE5\u524D\u5E38\u7528\u7684\u6A21\u5F0F\u662F AES-CBC\uFF0C\u4F46\u662F CBC \u5DF2\u7ECF\u88AB\u8BC1\u660E\u5BB9\u6613\u906D\u53D7 BEAST \u548C LUCKY13 \u653B\u51FB\u3002"),
      /* @__PURE__ */ createBaseVNode("li", null, "\u76EE\u524D\u5EFA\u8BAE\u4F7F\u7528\u7684\u5206\u7EC4\u52A0\u5BC6\u6A21\u5F0F\u662F AES-GCM\uFF0C\u4E0D\u8FC7\u5B83\u7684\u7F3A\u70B9\u662F\u8BA1\u7B97\u91CF\u5927\uFF0C\u6027\u80FD\u548C\u7535\u91CF\u6D88\u8017\u90FD\u6BD4\u8F83\u9AD8\uFF0C\u4E0D\u9002\u7528\u4E8E\u79FB\u52A8\u7535\u8BDD\u548C\u5E73\u677F\u7535\u8111\u3002")
    ])
  ])
], -1);
const _hoisted_102 = /* @__PURE__ */ createBaseVNode("p", null, "\u5728 SSL/TLS \u63E1\u624B\u4E4B\u540E\u7684\u901A\u4FE1\uFF0C\u90FD\u662F\u91C7\u7528\u5BF9\u79F0\u52A0\u5BC6\uFF0C\u800C\u63E1\u624B\u7684\u76EE\u7684\uFF0C\u4E3B\u8981\u5C31\u662F\u4E3A\u4E86\u901A\u8FC7\u975E\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\u4EA4\u6362\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\u7684\u79D8\u94A5\u3002", -1);
const _hoisted_103 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u6D88\u606F\u6458\u8981\u7B97\u6CD5",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6D88\u606F\u6458\u8981\u7B97\u6CD5",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6D88\u606F\u6458\u8981\u7B97\u6CD5")
], -1);
const _hoisted_104 = /* @__PURE__ */ createTextVNode("Reference: ");
const _hoisted_105 = {
  href: "https://zhuanlan.zhihu.com/p/34732244",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_106 = /* @__PURE__ */ createTextVNode("\u804A\u804A\u5BF9\u79F0/\u975E\u5BF9\u79F0\u52A0\u5BC6\u5728HTTPS\u4E2D\u7684\u5E94\u7528");
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("p", null, "\u6D88\u606F\u6458\u8981\u7B97\u6CD5\u53EF\u4EE5\u9A8C\u8BC1\u4FE1\u606F\u662F\u5426\u88AB\u7BE1\u6539\u3002", -1);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode("p", null, "\u5728\u6570\u636E\u53D1\u9001\u524D\uFF0C\u9996\u5148\u4F7F\u7528\u6D88\u606F\u6458\u8981\u7B97\u6CD5\u751F\u6210\u8BE5\u6570\u636E\u7684\u7B7E\u540D\uFF0C\u7136\u540E\u7B7E\u540D\u548C\u6570\u636E\u4E00\u540C\u53D1\u9001\u7ED9\u63A5\u6536\u8005\u3002\u63A5\u6536\u8005\u6536\u5230\u6570\u636E\u540E\uFF0C\u5BF9\u6536\u5230\u7684\u6570\u636E\u91C7\u7528\u6D88\u606F\u6458\u8981\u7B97\u6CD5\u83B7\u5F97\u7B7E\u540D\uFF0C\u6700\u540E\u6BD4\u8F83\u7B7E\u540D\u662F\u5426\u4E00\u81F4\uFF0C\u4EE5\u6B64\u6765\u5224\u65AD\u6570\u636E\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u662F\u5426\u53D1\u751F\u4FEE\u6539\u3002", -1);
const _hoisted_109 = /* @__PURE__ */ createBaseVNode("p", null, "\u65E0\u8BBA\u8F93\u5165\u7684\u6D88\u606F\u6709\u591A\u957F\uFF0C\u8BA1\u7B97\u51FA\u6765\u7684\u6D88\u606F\u6458\u8981\u7684\u957F\u5EA6\u603B\u662F\u56FA\u5B9A\u7684\u3002\u4F8B\u5982\u5E94\u7528MD5\u7B97\u6CD5\u6458\u8981\u7684\u6D88\u606F\u6709128\u4E2A\u6BD4\u7279\u4F4D\uFF0C\u7528SHA-1\u7B97\u6CD5\u6458\u8981\u7684\u6D88\u606F\u6700\u7EC8\u6709160\u6BD4\u7279\u4F4D\u7684\u8F93\u51FA\uFF0CSHA-1\u7684\u53D8\u4F53\u53EF\u4EE5\u4EA7\u751F192\u6BD4\u7279\u4F4D\u548C256\u6BD4\u7279\u4F4D\u7684\u6D88\u606F\u6458\u8981\u3002\u4E00\u822C\u8BA4\u4E3A\uFF0C\u6458\u8981\u7684\u6700\u7EC8\u8F93\u51FA\u8D8A\u957F\uFF0C\u8BE5\u6458\u8981\u7B97\u6CD5\u5C31\u8D8A\u5B89\u5168\u3002\u53D8\u957F\u8F93\u5165\uFF0C\u5B9A\u957F\u8F93\u51FA\u3002", -1);
const _hoisted_110 = /* @__PURE__ */ createBaseVNode("p", null, "\u53EA\u8981\u8F93\u5165\u7684\u6D88\u606F\u4E0D\u540C\uFF0C\u5BF9\u5176\u8FDB\u884C\u6458\u8981\u4EE5\u540E\u4EA7\u751F\u7684\u6458\u8981\u6D88\u606F\u4E5F\u5FC5\u4E0D\u76F8\u540C\uFF1B\u4F46\u76F8\u540C\u7684\u8F93\u5165\u5FC5\u4F1A\u4EA7\u751F\u76F8\u540C\u7684\u8F93\u51FA\u3002\u8FD9\u6B63\u662F\u597D\u7684\u6D88\u606F\u6458\u8981\u7B97\u6CD5\u6240\u5177\u6709\u7684\u6027\u8D28\uFF1A\u8F93\u5165\u6539\u53D8\u4E86\uFF0C\u8F93\u51FA\u4E5F\u5C31\u6539\u53D8\u4E86\uFF1B\u4E24\u6761\u76F8\u4F3C\u7684\u6D88\u606F\u7684\u6458\u8981\u786E\u4E0D\u76F8\u8FD1\uFF0C\u751A\u81F3\u4F1A\u5927\u76F8\u5F84\u5EAD\u3002\u4ECE\u7406\u8BBA\u4E0A\u6765\u8BF4\uFF0C\u4E0D\u7BA1\u4F7F\u7528\u4EC0\u4E48\u6837\u7684\u6458\u8981\u7B97\u6CD5\uFF0C\u5FC5\u7136\u5B58\u57282\u4E2A\u4E0D\u540C\u7684\u6D88\u606F\uFF0C\u5BF9\u5E94\u540C\u6837\u7684\u6458\u8981\u3002\u56E0\u4E3A\u8F93\u5165\u662F\u4E00\u4E2A\u65E0\u7A77\u96C6\u5408\uFF0C\u800C\u8F93\u51FA\u662F\u4E00\u4E2A\u6709\u9650\u96C6\u5408\uFF0C\u6240\u4EE5\u4ECE\u6570\u5B66\u4E0A\u6765\u8BF4\uFF0C\u5FC5\u7136\u5B58\u5728\u591A\u5BF9\u4E00\u7684\u5173\u7CFB\u3002\u4F46\u662F\u5B9E\u9645\u4E0A\uFF0C\u5F88\u96BE\u6216\u8005\u8BF4\u6839\u672C\u4E0D\u53EF\u80FD\u4EBA\u4E3A\u7684\u9020\u51FA\u5177\u6709\u540C\u6837\u6458\u8981\u76842\u4E2A\u4E0D\u540C\u6D88\u606F\u3002\u6240\u4EE5\u6211\u4EEC\u9009\u62E9\u6458\u8981\u7B97\u6CD5\u7684\u65F6\u5019\uFF0C\u8981\u6CE8\u610F\u5176\u5B89\u5168\u6027\u3002\u6BD4\u5982\u73B0\u5728MD5\u5C31\u662F\u4E0D\u5B89\u5168\u7684\uFF0C\u5DF2\u7ECF\u88AB\u56FD\u5185\u738B\u5C0F\u4E91\u7834\u89E3\u3002", -1);
const _hoisted_111 = /* @__PURE__ */ createBaseVNode("p", null, "\u6D88\u606F\u6458\u8981\u662F\u5355\u5411\u3001\u4E0D\u53EF\u9006\u7684\u3002\u53EA\u80FD\u8FDB\u884C\u6B63\u5411\u7684\u4FE1\u606F\u6458\u8981\uFF0C\u800C\u65E0\u6CD5\u4ECE\u6458\u8981\u4E2D\u6062\u590D\u51FA\u4EFB\u4F55\u7684\u539F\u59CB\u6D88\u606F\uFF0C\u751A\u81F3\u6839\u672C\u5C31\u627E\u4E0D\u5230\u4EFB\u4F55\u4E0E\u539F\u4FE1\u606F\u76F8\u5173\u7684\u4FE1\u606F\u3002\u5F53\u7136\uFF0C\u53EF\u4EE5\u91C7\u7528\u5F3A\u529B\u653B\u51FB\u7684\u65B9\u6CD5\uFF0C\u5373\u5C1D\u8BD5\u6BCF\u4E00\u4E2A\u53EF\u80FD\u7684\u4FE1\u606F\uFF0C\u8BA1\u7B97\u5176\u6458\u8981\uFF0C\u770B\u770B\u662F\u5426\u4E0E\u5DF2\u6709\u7684\u6458\u8981\u76F8\u540C\uFF0C\u5982\u679C\u8FD9\u6837\u505A\uFF0C\u6700\u7EC8\u80AF\u5B9A\u4F1A\u6062\u590D\u51FA\u6458\u8981\u7684\u6D88\u606F\u3002\u4F46\u5B9E\u9645\u4E0A\uFF0C\u8981\u5F97\u5230\u7684\u4FE1\u606F\u53EF\u80FD\u662F\u65E0\u7A77\u4E2A\u6D88\u606F\u4E4B\u4E00\uFF0C\u6240\u4EE5\u8FD9\u79CD\u5F3A\u529B\u653B\u51FB\u51E0\u4E4E\u662F\u65E0\u6548\u7684\u3002", -1);
const _hoisted_112 = /* @__PURE__ */ createBaseVNode("p", null, "\u6D88\u606F\u6458\u8981\u7B97\u6CD5\u6765\u6E90\u4E8ECRC\u7B97\u6CD5\uFF0C\u6700\u521DCRC\u7B97\u6CD5\u662F\u7528\u6765\u9A8C\u8BC1\u6570\u636E\u5B8C\u6574\u6027\u7684\uFF0C\u5373\u6211\u4EEC\u5E38\u89C1\u7684\u5947\u5076\u6821\u9A8C\u7801\u3001\u5FAA\u73AF\u5197\u4F59\u6821\u9A8C\uFF0C\u5728CRC\u57FA\u7840\u4E0A\u53D1\u5C55\u5904\u4E86MD\u548CSHA\u91CF\u5927\u7B97\u6CD5\u5BB6\u65CF\uFF0CCRC\u6BD4\u8FD9\u4E9B\u7B97\u6CD5\u90FD\u8981\u65E9\uFF0CMD\u7B97\u6CD5\u6BD4SHA\u7B97\u6CD5\u65E9\uFF0CSHA\u7B97\u6CD5\u662F\u5BF9MD\u7B97\u6CD5\u7684\u6539\u8FDB\u3002\u518D\u540E\u6765\u5219\u53D1\u5C55\u51FA\u4E86\u53EF\u4EE5\u5E26\u6709\u5BC6\u7801\u7684\u6D88\u606F\u6458\u8981\u7B97\u6CD5-MAC\u7B97\u6CD5\u3002", -1);
const _hoisted_113 = /* @__PURE__ */ createBaseVNode("p", null, "\u6D88\u606F\u6458\u8981\u7B97\u6CD5\u5305\u62EC\u4E09\u5927\u7C7B\uFF0CMD\u3001SHA\u548CMAC\u7B97\u6CD5\uFF0CMD\u7684\u5206\u7C7B\u662F\u6309\u7167\u7248\u672C\u89C4\u5B9A\u7684\uFF0CSHA\u5219\u662F\u6309\u7167\u9002\u7528\u7684\u6D88\u606F\u957F\u5EA6\u5206\u7C7B\u7684\uFF1A", -1);
const _hoisted_114 = /* @__PURE__ */ createBaseVNode("p", null, "MD\u7B97\u6CD5\uFF1A Message Digest Algorithm \uFF0C\u76EE\u524D\u4E3B\u6D41\u7684\u662FMD5\u7B97\u6CD5\uFF0C\u4E3A\u7B2C\u4E94\u7248\u7B97\u6CD5\uFF0C\u4E4B\u524D\u6709MD2\u3001MD3\u3001MD4\u7B97\u6CD5\u3002 SHA\u7B97\u6CD5\uFF1A\u5B89\u5168\u54C8\u5E0C\u7B97\u6CD5\uFF08Secure Hash Algorithm\uFF09\u4E3B\u8981\u9002\u7528\u4E8E\u6570\u5B57\u7B7E\u540D\u6807\u51C6\uFF08Digital Signature Standard DSS\uFF09\u91CC\u9762\u5B9A\u4E49\u7684\u6570\u5B57\u7B7E\u540D\u7B97\u6CD5\uFF08Digital Signature Algorithm DSA\uFF09\u3002 MAC\u7B97\u6CD5\uFF1A\u5E26\u6709\u5BC6\u7801\u4FE1\u606F\u7684\u4FE1\u606F\u6458\u8981\u7B97\u6CD5\uFF0C\u662F\u5BF9MD\u548CSHA\u7B97\u6CD5\u7684\u6F14\u53D8\u548C\u6539\u8FDB\uFF0C\u5305\u62ECHmacMD2\u3001HmacMD4\u3001HmacMD5\u3001HmacSHA-256\u7B49\u3002", -1);
const _hoisted_115 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u6570\u5B57\u8BC1\u4E66",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6570\u5B57\u8BC1\u4E66",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6570\u5B57\u8BC1\u4E66")
], -1);
const _hoisted_116 = /* @__PURE__ */ createBaseVNode("p", null, "\u6570\u5B57\u8BC1\u4E66\u8BA4\u8BC1\u673A\u6784\uFF08Certificate Authority\uFF0C\u7B80\u79F0 CA \u673A\u6784\uFF09\u662F\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u53CC\u65B9\u90FD\u53EF\u4FE1\u8D56\u7684\u7B2C\u4E09\u65B9\u673A\u6784\u3002", -1);
const _hoisted_117 = /* @__PURE__ */ createBaseVNode("p", null, "\u670D\u52A1\u5668\u7684\u8FD0\u8425\u4EBA\u5458\u5411 CA \u673A\u6784\u63D0\u51FA\u8BC1\u4E66\u8BA4\u8BC1\u7533\u8BF7\uFF0CCA \u673A\u6784\u5728\u5224\u660E\u7533\u8BF7\u8005\u7684\u8EAB\u4EFD\u4E4B\u540E\uFF0C\u4F1A\u5BF9\u5DF2\u7533\u8BF7\u7684\u670D\u52A1\u5668\u516C\u5F00\u5BC6\u94A5\u505A\u6570\u5B57\u7B7E\u540D\uFF08\u5373\u7528 CA \u673A\u6784\u81EA\u8EAB\u7684\u79C1\u94A5\u5BF9\u670D\u52A1\u5668\u516C\u94A5\u8FDB\u884C\u52A0\u5BC6\uFF09\uFF0C\u7136\u540E\u5206\u914D\u8FD9\u4E2A\u5DF2\u7B7E\u540D\u7684\u516C\u5F00\u5BC6\u94A5\uFF0C\u5E76\u5C06\u8BE5\u516C\u5F00\u5BC6\u94A5\u548C\u6570\u5B57\u7B7E\u540D\u653E\u5165\u516C\u94A5\u8BC1\u4E66\uFF08\u4E5F\u53EB\u6570\u5B57\u8BC1\u4E66\u6216\u8BC1\u4E66\uFF09\u540E\u7ED1\u5B9A\u5728\u4E00\u8D77\u3002\u670D\u52A1\u5668\u5C06\u516C\u94A5\u8BC1\u4E66\u653E\u5728\u670D\u52A1\u5668\u4E0A\uFF0C\u5E76\u5728\u63E1\u624B\u9636\u6BB5\u7684\u7B2C\u4E8C\u6B21\u901A\u4FE1\u65F6\u5C06\u8FD9\u4EFD\u7531 CA \u673A\u6784\u9881\u53D1\u7684\u516C\u94A5\u8BC1\u4E66\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u901A\u8FC7 CA \u673A\u6784\u7684\u516C\u94A5\u5BF9\u6570\u5B57\u7B7E\u540D\u89E3\u5BC6\uFF0C\u5224\u65AD\u4E0E\u516C\u94A5\u8BC1\u4E66\u91CC\u7684\u516C\u94A5\u662F\u5426\u76F8\u540C\u4EE5\u9A8C\u8BC1\u516C\u94A5\u8BC1\u4E66\u7684\u6709\u6548\u6027\u3002\u82E5\u8BC1\u4E66\u6709\u6548\uFF0C\u5219\u516C\u94A5\u5C06\u7528\u4E8E\u7B2C\u4E09\u6B21\u901A\u4FE1\u65F6\u7684\u52A0\u5BC6\u3002", -1);
const _hoisted_118 = /* @__PURE__ */ createBaseVNode("p", null, "EV SSL\uFF08Extended Validation SSL Certificate\uFF09\u8BC1\u4E66\u662F\u57FA\u4E8E\u56FD\u9645\u6807\u51C6\u7684\u8BA4\u8BC1\u6307\u5BFC\u65B9\u9488\u529E\u6CD5\u7684\u8BC1\u4E66\uFF0C\u901A\u8FC7\u8BA4\u8BC1\u7684 Web \u7F51\u7AD9\u80FD\u83B7\u5F97\u66F4\u9AD8\u7684\u8BA4\u53EF\u5EA6\u3002\u6301\u6709 EV SSL \u8BC1\u4E66\u7684 Web \u7F51\u7AD9\u7684\u6D4F\u89C8\u5668\u5730\u5740\u680F\u7684\u80CC\u666F\u8272\u662F\u7EFF\u8272\u7684\uFF0C\u540C\u65F6\u5728\u5730\u5740\u680F\u7684\u5DE6\u4FA7\u663E\u793A\u4E86 SSL \u8BC1\u4E66\u4E2D\u8BB0\u5F55\u7684\u7EC4\u7EC7\u540D\u79F0\u53CA\u529E\u6CD5\u8BC1\u4E66\u7684\u8BA4\u8BC1\u673A\u6784\u7684\u540D\u79F0\u3002", -1);
const _hoisted_119 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u8BC1\u4E66\u4FE1\u4EFB\u7684\u65B9\u5F0F",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8BC1\u4E66\u4FE1\u4EFB\u7684\u65B9\u5F0F",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8BC1\u4E66\u4FE1\u4EFB\u7684\u65B9\u5F0F")
], -1);
const _hoisted_120 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u8BC1\u4E66\u9881\u53D1\u673A\u6784 "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "CA\uFF08 Certificate Authority\uFF0C\u8BC1\u4E66\u9881\u53D1\u673A\u6784\uFF09\u662F\u88AB\u8BC1\u4E66\u63A5\u53D7\u8005\uFF08\u62E5\u6709\u8005\uFF09\u548C\u4F9D\u8D56\u8BC1\u4E66\u7684\u4E00\u65B9\u5171\u540C\u4FE1\u4EFB\u7684\u7B2C\u4E09\u65B9\u3002")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u64CD\u4F5C\u7CFB\u7EDF\u548C\u6D4F\u89C8\u5668\u5185\u7F6E "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "\u6BCF\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u548C\u5927\u591A\u6570\u6D4F\u89C8\u5668\u90FD\u4F1A\u5185\u7F6E\u4E00\u4E2A\u77E5\u540D\u8BC1\u4E66\u9881\u53D1\u673A\u6784\u7684\u540D\u5355\u3002\u56E0\u6B64\uFF0C\u4F60\u4E5F\u4F1A\u4FE1\u4EFB\u64CD\u4F5C\u7CFB\u7EDF\u53CA\u6D4F\u89C8\u5668\u63D0\u4F9B\u5546\u63D0\u4F9B\u548C\u7EF4\u62A4\u7684\u53EF\u4FE1\u4EFB\u673A\u6784\u3002"),
      /* @__PURE__ */ createBaseVNode("li", null, "\u53D7\u4FE1\u8BA4\u8BC1\u673A\u6784\uFF08\u4E5F\u6709\u4E0D\u53D7\u4FE1\u7684\uFF0C\u6BD4\u5982\u8D5B\u95E8\u94C1\u514B\uFF0C\u6C83\u901A\uFF0C\u6216\u8005\u50CF2011\u5E74\u88AB\u5165\u4FB5\u7684DigiNotar\u7B49\uFF09\u7684\u8BC1\u4E66\u4E00\u822C\u4F1A\u88AB\u64CD\u4F5C\u7CFB\u7EDF\u6216\u8005\u6D4F\u89C8\u5668\u5728\u53D1\u884C\u6216\u8005\u53D1\u5E03\u65F6\u5185\u7F6E\u3002")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u624B\u52A8\u6307\u5B9A\u8BC1\u4E66 "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "\u6240\u6709\u6D4F\u89C8\u5668\u548C\u64CD\u4F5C\u7CFB\u7EDF\u90FD\u63D0\u4F9B\u4E86\u4E00\u79CD\u624B\u5DE5\u5BFC\u5165\u4FE1\u4EFB\u8BC1\u4E66\u7684\u673A\u5236\u3002\u81F3\u4E8E\u5982\u4F55\u83B7\u5F97\u8BC1\u4E66\u548C\u9A8C\u8BC1\u5B8C\u6574\u6027\u5219\u5B8C\u5168\u7531\u4F60\u81EA\u5DF1\u6765\u5B9A\u3002")
    ])
  ])
], -1);
const _hoisted_121 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u516C\u94A5\u8BC1\u4E66",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u516C\u94A5\u8BC1\u4E66",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u516C\u94A5\u8BC1\u4E66")
], -1);
const _hoisted_122 = /* @__PURE__ */ createBaseVNode("p", null, "\u4EE5\u4E0B\u662F\u77E5\u4E4E\u7F51\u7AD9\u7684\u516C\u94A5\u8BC1\u4E66\u3002", -1);
const _hoisted_123 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_2,
    alt: "\u77E5\u4E4E\u516C\u94A5\u8BC1\u4E66"
  })
], -1);
const _hoisted_124 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u6570\u636E\u5B8C\u6574\u6027",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6570\u636E\u5B8C\u6574\u6027",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6570\u636E\u5B8C\u6574\u6027")
], -1);
const _hoisted_125 = /* @__PURE__ */ createBaseVNode("p", null, "\u6570\u5B57\u7B7E\u540D\u662F\u53EA\u6709\u4FE1\u606F\u53D1\u9001\u8005\u624D\u80FD\u4EA7\u751F\u7684\u522B\u4EBA\u65E0\u6CD5\u4F2A\u9020\u7684\u4E00\u6BB5\u6587\u672C\uFF0C\u8FD9\u6BB5\u6587\u672C\u662F\u5BF9\u4FE1\u606F\u53D1\u9001\u8005\u53D1\u9001\u4FE1\u606F\u771F\u5B9E\u6027\u7684\u4E00\u4E2A\u6709\u6548\u8BC1\u660E\uFF0C\u5177\u6709\u4E0D\u53EF\u62B5\u8D56\u6027\u3002", -1);
const _hoisted_126 = /* @__PURE__ */ createBaseVNode("p", null, "\u62A5\u6587\u7684\u53D1\u9001\u65B9\u4ECE\u62A5\u6587\u6587\u672C\u751F\u6210\u4E00\u4E2A 128 \u4F4D\u7684\u6563\u5217\u503C\uFF08\u6216\u79F0\u4E3A\u62A5\u6587\u6458\u8981\u6D3B\u54C8\u5E0C\u503C\uFF0C\u5177\u4F53\u4F4D\u6570\u53D6\u51B3\u4E8E\u6D88\u606F\u6458\u8981\u7B97\u6CD5\uFF09\uFF0C\u53D1\u9001\u65B9\u4F7F\u7528\u81EA\u5DF1\u7684\u79C1\u94A5\u5BF9\u8FD9\u4E2A\u6458\u8981\u503C\u8FDB\u884C\u52A0\u5BC6\u6765\u5F62\u6210\u53D1\u9001\u65B9\u7684\u6570\u5B57\u7B7E\u540D\u3002\u7136\u540E\u8FD9\u4E2A\u6570\u5B57\u7B7E\u540D\u5C06\u4F5C\u4E3A\u62A5\u6587\u7684\u9644\u4EF6\u4E00\u8D77\u53D1\u9001\u7ED9\u62A5\u6587\u7684\u63A5\u6536\u65B9\u3002\u62A5\u6587\u7684\u63A5\u6536\u65B9\u9996\u5148\u4ECE\u63A5\u6536\u5230\u7684\u539F\u59CB\u62A5\u6587\u4E2D\u8BA1\u7B97\u51FA 128 \u4F4D\u7684\u6563\u5217\u503C\uFF0C\u518D\u7528\u53D1\u9001\u65B9\u7684\u516C\u94A5\u6765\u5BF9\u62A5\u6587\u9644\u52A0\u7684\u6570\u5B57\u7B7E\u540D\u8FDB\u884C\u89E3\u5BC6\u3002\u5982\u679C\u4E24\u6B21\u5F97\u5230\u7684\u7ED3\u679C\u662F\u4E00\u81F4\u7684\uFF0C\u90A3\u4E48\u63A5\u6536\u65B9\u53EF\u4EE5\u786E\u8BA4\u8BE5\u6570\u5B57\u7B7E\u540D\u662F\u53D1\u9001\u65B9\u7684\uFF0C\u540C\u65F6\u786E\u8BA4\u4FE1\u606F\u662F\u771F\u5B9E\u7684 \u3002", -1);
const _hoisted_127 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u81EA\u6211\u7406\u89E3",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u81EA\u6211\u7406\u89E3",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u81EA\u6211\u7406\u89E3")
], -1);
const _hoisted_128 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u5404\u9636\u6BB5\u7684\u901A\u4FE1\u9636\u6BB5\u662F\u5426\u52A0\u5BC6\u4E86\uFF0C\u91C7\u7528\u4EC0\u4E48\u52A0\u5BC6\u65B9\u5F0F\uFF1F "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "\u63E1\u624B\u9636\u6BB5\u7684\u7B2C\u4E00\u6B21\u548C\u7B2C\u4E8C\u6B21\u901A\u4FE1: \u6CA1\u52A0\u5BC6\uFF0C\u5185\u5BB9\u90FD\u662F\u660E\u6587\u7684\uFF0C\u56E0\u6B64\u4F1A\u88AB\u7A83\u542C"),
      /* @__PURE__ */ createBaseVNode("li", null, "\u63E1\u624B\u9636\u6BB5\u7684\u7B2C\u4E09\u6B21\u901A\u4FE1: \u5BA2\u6237\u7AEF\u4F7F\u7528\u670D\u52A1\u5668\u7AEF\u7684\u516C\u94A5\u52A0\u5BC6\uFF0C\u6700\u4E3B\u8981\u662F\u5BF9\u751F\u6210\u5BF9\u8BDD\u79D8\u94A5\u7684\u7B2C\u4E09\u4E2A\u968F\u673A\u6570\u8FDB\u884C\u52A0\u5BC6"),
      /* @__PURE__ */ createBaseVNode("li", null, "\u63E1\u624B\u9636\u6BB5\u4E4B\u540E\u7684\u901A\u4FE1: \u4F7F\u7528\u666E\u901A\u7684 HTTP \u534F\u8BAE\u901A\u4FE1\uFF0C\u4F46\u901A\u4FE1\u5185\u5BB9\u662F\u7ECF\u8FC7\u201C\u5BF9\u8BDD\u79D8\u94A5\u201D\u52A0\u5BC6\u7684")
    ])
  ])
], -1);
const _hoisted_129 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "https-\u7684\u5B9E\u73B0",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#https-\u7684\u5B9E\u73B0",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" https \u7684\u5B9E\u73B0")
], -1);
const _hoisted_130 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u6DF7\u5408\u5185\u5BB9",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6DF7\u5408\u5185\u5BB9",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6DF7\u5408\u5185\u5BB9")
], -1);
const _hoisted_131 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6DF7\u5408\u5185\u5BB9(Mixed Content)\u662F\u6307\u5728\u5B89\u5168\u94FE\u63A5\u4E2D\u6DF7\u5408\u4E86\u975E\u5B89\u5168\u8BF7\u6C42\u5185\u5BB9\uFF0C\u5373\u5728"),
  /* @__PURE__ */ createBaseVNode("code", null, "https"),
  /* @__PURE__ */ createTextVNode("\u7684\u7AD9\u70B9\u91CC\u8BF7\u6C42\u4E86"),
  /* @__PURE__ */ createBaseVNode("code", null, "http"),
  /* @__PURE__ */ createTextVNode("\u7684\u8D44\u6E90\u3002")
], -1);
const _hoisted_132 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6DF7\u5408\u5185\u5BB9\u4F1A\u964D\u4F4E"),
  /* @__PURE__ */ createBaseVNode("code", null, "https"),
  /* @__PURE__ */ createTextVNode("\u7F51\u7AD9\u7684\u5B89\u5168\u6027\u548C\u7528\u6237\u4F53\u9A8C\u3002\u4E0D\u8FC7\u8BA9\u4EBA\u7565\u611F\u653E\u5FC3\u7684\u662F\uFF0C\u6D4F\u89C8\u5668\u5BF9\u4E8E\u53EF\u80FD\u5BF9\u5B89\u5168\u6027\u9020\u6210\u8F83\u5927\u5A01\u80C1\u7684\u8D44\u6E90\u7C7B\u578B\u7684\u6DF7\u5408\u6A21\u5F0F\u8BF7\u6C42\u90FD\u4F1A\u76F4\u63A5\u62E6\u622A\u62A5\u9519\uFF0C\u4F8B\u5982\u811A\u672C\u8D44\u6E90\u3002\u4F46\u5BF9\u4E8E\u56FE\u7247\u3001\u97F3\u9891\u3001\u89C6\u9891\u7B49\u8D44\u6E90\u53EA\u4F1A\u8B66\u544A\uFF0C\u4F46\u4E0D\u4F1A\u963B\u6B62\u5176\u52A0\u8F7D\u3002")
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
          createVNode(_component_RouterLink, { to: "#\u76F8\u5173\u6587\u7AE0" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u672F\u8BED" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#http-vs-https" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#ssl-tls" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#ssl-\u534F\u8BAE\u7684\u7EC4\u6210" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#ssl-\u534F\u8BAE\u7684\u57FA\u672C\u8FC7\u7A0B" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u63E1\u624B\u9636\u6BB5" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u7B2C\u4E00\u6B21\u901A\u4FE1-\u5BA2\u6237\u7AEF\u53D1\u51FA\u8BF7\u6C42-clienthello" }, {
                    default: withCtx(() => [
                      _hoisted_10
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u7B2C\u4E8C\u6B21\u901A\u4FE1-\u670D\u52A1\u5668\u56DE\u5E94-serverhello" }, {
                    default: withCtx(() => [
                      _hoisted_11
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u7B2C\u4E09\u6B21\u901A\u4FE1-\u5BA2\u6237\u7AEF\u56DE\u5E94" }, {
                    default: withCtx(() => [
                      _hoisted_12
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u7B2C\u56DB\u6B21\u901A\u4FE1-\u670D\u52A1\u5668\u7684\u6700\u540E\u56DE\u5E94" }, {
                    default: withCtx(() => [
                      _hoisted_13
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u52A0\u5BC6\u901A\u4FE1\u8FC7\u7A0B\u4E2D\u7684\u7B97\u6CD5" }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u975E\u5BF9\u79F0\u52A0\u5BC6" }, {
                    default: withCtx(() => [
                      _hoisted_15
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u5BF9\u79F0\u52A0\u5BC6" }, {
                    default: withCtx(() => [
                      _hoisted_16
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u6D88\u606F\u6458\u8981\u7B97\u6CD5" }, {
                    default: withCtx(() => [
                      _hoisted_17
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6570\u5B57\u8BC1\u4E66" }, {
                default: withCtx(() => [
                  _hoisted_18
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u8BC1\u4E66\u4FE1\u4EFB\u7684\u65B9\u5F0F" }, {
                    default: withCtx(() => [
                      _hoisted_19
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u516C\u94A5\u8BC1\u4E66" }, {
                    default: withCtx(() => [
                      _hoisted_20
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6570\u636E\u5B8C\u6574\u6027" }, {
                default: withCtx(() => [
                  _hoisted_21
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u81EA\u6211\u7406\u89E3" }, {
                default: withCtx(() => [
                  _hoisted_22
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#https-\u7684\u5B9E\u73B0" }, {
            default: withCtx(() => [
              _hoisted_23
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6DF7\u5408\u5185\u5BB9" }, {
                default: withCtx(() => [
                  _hoisted_24
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_25,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_26, [
          _hoisted_27,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_28,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_29, [
          _hoisted_30,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
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
    createBaseVNode("p", null, [
      _hoisted_104,
      createBaseVNode("a", _hoisted_105, [
        _hoisted_106,
        createVNode(_component_OutboundLink)
      ])
    ]),
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
    _hoisted_132,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
