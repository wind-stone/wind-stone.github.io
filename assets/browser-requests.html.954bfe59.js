import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
var _imports_0 = "/assets/chrome-resource-priorities.b98af6ac.png";
var _imports_1 = "/assets/blink-priority-to-net-priority.875bae96.jpg";
var _imports_2 = "/assets/request-priority-result.4875b6c4.jpg";
var _imports_3 = "/assets/should-start-request-log.2809aeac.jpg";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u6D4F\u89C8\u5668\u91CC\u7684\u8D44\u6E90\u8BF7\u6C42",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6D4F\u89C8\u5668\u91CC\u7684\u8D44\u6E90\u8BF7\u6C42",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6D4F\u89C8\u5668\u91CC\u7684\u8D44\u6E90\u8BF7\u6C42")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u8D44\u6E90\u5206\u7C7B");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u8D44\u6E90\u8BF7\u6C42");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u9884\u5904\u7406\u8BF7\u6C42");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u8D44\u6E90\u6392\u961F\u7684\u539F\u56E0");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u8D44\u6E90\u8BF7\u6C42\u4F18\u5148\u7EA7");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u6700\u7EC8\u7684\u4F18\u5148\u7EA7");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("script \u4F18\u5148\u7EA7");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("image \u4F18\u5148\u7EA7");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("preload & as");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u8BA1\u7B97\u8D44\u6E90\u52A0\u8F7D\u4F18\u5148\u7EA7");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u8D44\u6E90\u7684\u9ED8\u8BA4\u4F18\u5148\u7EA7");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u4F18\u5148\u7EA7\u8C03\u6574");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u8F6C\u6362\u6210 Net \u7684\u4F18\u5148\u7EA7");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u8D44\u6E90\u52A0\u8F7D");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u793A\u4F8B");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("preload\u3001prefetch");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("preload");
const _hoisted_20 = /* @__PURE__ */ createTextVNode("prefetch");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("\u5BF9\u6BD4");
const _hoisted_22 = /* @__PURE__ */ createTextVNode("\u5E94\u7528");
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("p", null, "\u4EE5\u4E0B\u5185\u5BB9\u5982\u65E0\u7279\u6B8A\u8BF4\u660E\uFF0C\u90FD\u662F\u57FA\u4E8E Chrome \u6D4F\u89C8\u5668\u3002", -1);
const _hoisted_24 = {
  href: "https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_25 = /* @__PURE__ */ createTextVNode("Preload, Prefetch And Priorities in Chrome");
const _hoisted_26 = {
  href: "https://docs.google.com/document/d/1bCDuq9H1ih9iNjgzyAL0gpwNFiEP4TZS-YLRp_RuMlc/edit",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_27 = /* @__PURE__ */ createTextVNode("Resource Fetch Prioritization and Scheduling in Chromium");
const _hoisted_28 = {
  href: "https://juejin.im/post/5a4ed917f265da3e317df515",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = /* @__PURE__ */ createTextVNode("\u6398\u91D1 - \u6D4F\u89C8\u5668\u9875\u9762\u8D44\u6E90\u52A0\u8F7D\u8FC7\u7A0B\u4E0E\u4F18\u5316");
const _hoisted_30 = {
  href: "https://zhuanlan.zhihu.com/p/30558018",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_31 = /* @__PURE__ */ createTextVNode("\u77E5\u4E4E - \u4ECEChrome\u6E90\u7801\u770B\u6D4F\u89C8\u5668\u5982\u4F55\u52A0\u8F7D\u8D44\u6E90");
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u8D44\u6E90\u5206\u7C7B",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8D44\u6E90\u5206\u7C7B",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8D44\u6E90\u5206\u7C7B")
], -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("p", null, "Chrome \u6D4F\u89C8\u5668\u91CC\u4F1A\u5C06\u8D44\u6E90\u5206\u4E3A 14 \u7C7B\uFF0C\u5982\u4E0B\u8868\u6240\u793A\u3002", -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("table", null, [
  /* @__PURE__ */ createBaseVNode("thead", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", null, "\u7C7B\u578B"),
      /* @__PURE__ */ createBaseVNode("th", null, "\u8BF4\u660E")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("tbody", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "kMainResource"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createTextVNode("\u4E3B\u8D44\u6E90\uFF0C\u6BD4\u5982\u5BFC\u822A\u680F\u8F93\u5165\u5730\u5740\u3001"),
        /* @__PURE__ */ createBaseVNode("code", null, "frame"),
        /* @__PURE__ */ createTextVNode("/"),
        /* @__PURE__ */ createBaseVNode("code", null, "iframe"),
        /* @__PURE__ */ createTextVNode("\u91CC\u8BF7\u6C42\u3001\u8D85\u94FE\u63A5\u70B9\u51FB\u3001\u8868\u8FBE\u63D0\u4EA4\u7B49\u5F97\u5230\u7684 HTML \u9875\u9762\u6587\u4EF6\u8D44\u6E90")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "kImage"),
      /* @__PURE__ */ createBaseVNode("td", null, "\u56FE\u7247\u8D44\u6E90")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "kCSSStyleSheet"),
      /* @__PURE__ */ createBaseVNode("td", null, "CSS \u5C42\u53E0\u6837\u5F0F\u8868\u8D44\u6E90")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "kScript"),
      /* @__PURE__ */ createBaseVNode("td", null, "\u811A\u672C\u8D44\u6E90\uFF0C\u4F8B\u5982 JavaScript \u8D44\u6E90")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "kFont"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createTextVNode("\u5B57\u4F53\u8D44\u6E90\uFF0C\u4F8B\u5982\u7F51\u9875\u4E2D\u5E38\u7528\u7684\u5B57\u4F53\u96C6"),
        /* @__PURE__ */ createBaseVNode("code", null, ".woff"),
        /* @__PURE__ */ createTextVNode("\u8D44\u6E90")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "kRaw"),
      /* @__PURE__ */ createBaseVNode("td", null, "\u6DF7\u5408\u7C7B\u578B\u8D44\u6E90\uFF0C\u6BD4\u5982 Ajax \u8BF7\u6C42\uFF08\u56E0\u4E3A Ajax \u53EF\u4EE5\u8BF7\u6C42\u591A\u79CD\u8D44\u6E90\uFF09")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "kSVGDocument"),
      /* @__PURE__ */ createBaseVNode("td", null, "SVG \u53EF\u7F29\u653E\u77E2\u91CF\u56FE\u5F62\u6587\u4EF6\u8D44\u6E90")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "kXSLStyleSheet"),
      /* @__PURE__ */ createBaseVNode("td", null, "\u6269\u5C55\u6837\u5F0F\u8868\u8BED\u8A00 XSLT\uFF0C\u662F\u4E00\u79CD\u8F6C\u6362\u8BED\u8A00\uFF0C\u5173\u4E8E\u8BE5\u7C7B\u578B\u53EF\u4EE5\u67E5\u9605 W3C XSL\u6765\u4E86\u89E3")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "kLinkPrefetch"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createTextVNode("HTML5 \u9875\u9762\u7684\u9884\u8BFB\u53D6\u8D44\u6E90(Link prefetch)\uFF0C\u4F8B\u5982"),
        /* @__PURE__ */ createBaseVNode("code", null, "dns-prefetch"),
        /* @__PURE__ */ createTextVNode("\u3002")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "kTextTrack"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("code", null, "<video>"),
        /* @__PURE__ */ createTextVNode("\u7684\u5B57\u5E55\u8D44\u6E90\uFF0C"),
        /* @__PURE__ */ createBaseVNode("code", null, ".vtt"),
        /* @__PURE__ */ createTextVNode("\u683C\u5F0F\uFF0C\u5728"),
        /* @__PURE__ */ createBaseVNode("code", null, "<track>"),
        /* @__PURE__ */ createTextVNode("\u6807\u7B7E\u91CC\u4F7F\u7528")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "kImportResource"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createTextVNode("HTML Imports\uFF0C\u5C06\u4E00\u4E2A HTML \u6587\u4EF6\u5BFC\u5165\u5230\u5176\u4ED6 HTML \u6587\u6863\u4E2D\uFF0C\u4F8B\u5982"),
        /* @__PURE__ */ createBaseVNode("code", null, '<link href="import/post.html" rel="import" />'),
        /* @__PURE__ */ createTextVNode("\u3002\u8BE6\u7EC6\u4E86\u89E3\u8BF7\u67E5\u9605\u76F8\u5173\u6587\u6863\u3002")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "kMedia"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createTextVNode("\u591A\u5A92\u4F53\u8D44\u6E90\uFF0C\u6BD4\u5982"),
        /* @__PURE__ */ createBaseVNode("code", null, "video"),
        /* @__PURE__ */ createTextVNode("\u548C"),
        /* @__PURE__ */ createBaseVNode("code", null, "audio"),
        /* @__PURE__ */ createTextVNode("\u90FD\u5C5E\u4E8E\u8BE5\u7C7B\u8D44\u6E90")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "kManifest"),
      /* @__PURE__ */ createBaseVNode("td", null, "HTML5 \u5E94\u7528\u7A0B\u5E8F\u7F13\u5B58\u8D44\u6E90")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "kMock"),
      /* @__PURE__ */ createBaseVNode("td", null, "\u9884\u7559\u7684\u6D4B\u8BD5\u7C7B\u578B")
    ])
  ])
], -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u8D44\u6E90\u8BF7\u6C42",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8D44\u6E90\u8BF7\u6C42",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8D44\u6E90\u8BF7\u6C42")
], -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u9884\u5904\u7406\u8BF7\u6C42",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u9884\u5904\u7406\u8BF7\u6C42",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u9884\u5904\u7406\u8BF7\u6C42")
], -1);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("p", null, "\u6D4F\u89C8\u5668\u5728\u5BF9\u8D44\u6E90\u5F00\u59CB\u8BF7\u6C42\u4E4B\u524D\uFF0C\u9700\u8981\u5148\u5BF9\u8BF7\u6C42\u505A\u9884\u5904\u7406\u3002\u9884\u5904\u7406\u4E3B\u8981\u505A\u4E24\u4EF6\u4E8B\u60C5: \u68C0\u67E5\u8BF7\u6C42\u662F\u5426\u5408\u6CD5\u548C\u66F4\u6539\u8BF7\u6C42\u3002", -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "CSP\u68C0\u67E5")
  ])
], -1);
const _hoisted_39 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_40 = /* @__PURE__ */ createTextVNode("CSP\uFF08Content Security Policy\uFF09");
const _hoisted_41 = /* @__PURE__ */ createTextVNode("\u901A\u8FC7\u6307\u5B9A\u6709\u6548\u57DF\uFF08\u5373\u6D4F\u89C8\u5668\u8BA4\u53EF\u7684\u8D44\u6E90\u7684\u6709\u6548\u6765\u6E90\uFF09\uFF0C\u6765\u51CF\u5C11\u548C\u62A5\u544A XSS \u653B\u51FB\u3002\u6D4F\u89C8\u5668\u4F1A\u68C0\u67E5");
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("code", null, "<meta>", -1);
const _hoisted_43 = /* @__PURE__ */ createTextVNode("\u6807\u7B7E\u91CC\u6216 HTTP \u54CD\u5E94\u5934\u91CC\u7684");
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("code", null, "Content-Security-Policy", -1);
const _hoisted_45 = /* @__PURE__ */ createTextVNode("\u8BBE\u7F6E\u7684\u7B56\u7565\uFF0C\u5F53\u8BE5\u7C7B\u8D44\u6E90\u4E0D\u7B26\u5408 CSP \u7684\u8BBE\u7F6E\u65F6\uFF0C\u6D4F\u89C8\u5668\u5C06\u62A5\u9519\uFF0C\u5E76\u963B\u6B62\u8D44\u6E90\u8BF7\u6C42\u3002");
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("div", { class: "language-html ext-html line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-html" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("meta")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "http-equiv"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Content-Security-Policy"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "content"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("img-src "),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "'"),
          /* @__PURE__ */ createTextVNode("self"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "'"),
          /* @__PURE__ */ createTextVNode(";..."),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "line-numbers" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "1"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "upgrade-insecure-requests")
  ])
], -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("p", null, "\u82E5\u8BBE\u7F6E\u4E86\u5982\u4E0B\u7684 CSP \u7B56\u7565:", -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("div", { class: "language-html ext-html line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-html" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("meta")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "http-equiv"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Content-Security-Policy"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "content"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("upgrade-insecure-requests"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "line-numbers" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "1"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5219\u6D4F\u89C8\u5668\u4F1A\u5C06\u9875\u9762\u91CC\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "http"),
  /* @__PURE__ */ createTextVNode("\u8BF7\u6C42\u5F3A\u5236\u5347\u7EA7\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "https"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u5305\u62EC\u6539\u53D8"),
  /* @__PURE__ */ createBaseVNode("code", null, "url"),
  /* @__PURE__ */ createTextVNode("\u7684\u534F\u8BAE\u548C\u7AEF\u53E3\u53F7\u3002")
], -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "Mixed Content \u68C0\u67E5")
  ])
], -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Mixed Content \u662F\u6307\u5728"),
  /* @__PURE__ */ createBaseVNode("code", null, "https"),
  /* @__PURE__ */ createTextVNode("\u7684\u9875\u9762\u91CC\u8BF7\u6C42"),
  /* @__PURE__ */ createBaseVNode("code", null, "http"),
  /* @__PURE__ */ createTextVNode("\u7684\u5185\u5BB9\uFF0C\u901A\u5E38\u8FD9\u79CD"),
  /* @__PURE__ */ createBaseVNode("code", null, "http"),
  /* @__PURE__ */ createTextVNode("\u7684 JavaScript \u6587\u4EF6\u8BF7\u6C42\u4F1A\u88AB\u6D4F\u89C8\u5668\u963B\u6B62\uFF0C\u4EE5\u9632\u6B62\u53D7\u5230\u4E2D\u95F4\u4EBA\u7684\u653B\u51FB\u5BFC\u81F4\u6574\u4E2A\u9875\u9762\u88AB\u63A7\u5236\u3002\u4F46\u662F\u56FE\u7247\u4E4B\u7C7B\u7684\u8D44\u6E90\u5373\u4F7F\u5185\u5BB9\u88AB\u4FEE\u6539\u53EF\u80FD\u53EA\u662F\u5C55\u793A\u51FA\u95EE\u9898\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u6574\u4E2A\u9875\u9762\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u88AB\u6D4F\u89C8\u5668\u963B\u6B62\u3002")
], -1);
const _hoisted_53 = /* @__PURE__ */ createTextVNode("\u88AB\u52A8\u6DF7\u5408\u5185\u5BB9: \u90A3\u4E9B\u4E0D\u4F1A\u6253\u7834\u9875\u9762\u91CD\u8981\u90E8\u5206\uFF0C\u98CE\u9669\u6BD4\u8F83\u4F4E\u7684\uFF0C\u4F46\u662F\u4F7F\u7528\u9891\u7387\u53C8\u6BD4\u8F83\u9AD8\u7684 Mixed Content \u5185\u5BB9\u3002--");
const _hoisted_54 = {
  href: "https://w3c.github.io/webappsec-mixed-content/#category-optionally-blockable",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_55 = /* @__PURE__ */ createTextVNode("W3C - Optionally-blockable Content");
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("p", null, "\u7FFB\u770B Chromium 64 \u7684\u6E90\u7801\u53EF\u4EE5\u53D1\u73B0\uFF0C\u6709\u5982\u4E0B\u56DB\u7C7B\u8D44\u6E90\u5C5E\u4E8E\u88AB\u52A8\u6DF7\u5408\u5185\u5BB9\u3002", -1);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "audio"),
  /* @__PURE__ */ createBaseVNode("li", null, "favicon"),
  /* @__PURE__ */ createBaseVNode("li", null, "image"),
  /* @__PURE__ */ createBaseVNode("li", null, "video")
], -1);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5176\u4ED6\u7684\u51E0\u4E4E\u8D44\u6E90\u90FD\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "blockable"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u5373\u6D4F\u89C8\u5668\u4F1A\u963B\u6B62\u8BF7\u6C42\u7684\u8D44\u6E90\u3002")
], -1);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "Origin Block \u68C0\u67E5")
  ])
], -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "svg"),
  /* @__PURE__ */ createTextVNode("\u4F7F\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "use"),
  /* @__PURE__ */ createTextVNode("\u83B7\u53D6 SVG \u8D44\u6E90\u65F6\u5FC5\u987B\u4E0D\u80FD\u8DE8\u57DF\uFF0C\u5426\u5219\u5C06\u4F1A\u88AB\u6D4F\u89C8\u5668\u963B\u6B62\u5E76\u62A5\u9519\u3002")
], -1);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("div", { class: "language-html ext-html line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-html" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("svg")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("use")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "href"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("http://windstone.cc/images/logo.svg#abc"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("use")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("svg")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n")
    ])
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
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("p", null, "\u6E90\u7801\u91CC\u4F1A\u68C0\u67E5\u8FD9\u79CD\u8BF7\u6C42\u662F\u5426\u540C\u6E90\uFF0C\u5305\u62EC\u534F\u8BAE\u3001\u57DF\u540D\u3001\u7AEF\u53E3\u53F7\u3002\u6CE8\u610F\u8FD9\u91CC\u7684\u540C\u6E90\u4E0E\u540C\u6E90\u7B56\u7565\u4E0D\u540C\uFF0C\u82E5\u4E0D\u662F\u540C\u6E90\u7684\u8BDD\uFF0C\u5C31\u4F1A\u8FDE\u8BF7\u6C42\u90FD\u53D1\u4E0D\u51FA\u53BB\uFF0C\u800C\u540C\u6E90\u7B56\u7565\u53EF\u4EE5\u53D1\u51FA\u8BF7\u6C42\u4F46\u662F\u963B\u6B62\u8BF7\u6C42\u7684\u8FD4\u56DE\u7ED3\u679C\u3002", -1);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u8D44\u6E90\u6392\u961F\u7684\u539F\u56E0",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8D44\u6E90\u6392\u961F\u7684\u539F\u56E0",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8D44\u6E90\u6392\u961F\u7684\u539F\u56E0")
], -1);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("p", null, "\u9875\u9762\u91CC\u53D1\u51FA\u8D44\u6E90\u8BF7\u6C42\u540E\uFF0C\u53EF\u80FD\u4E0D\u4F1A\u7ACB\u9A6C\u8FDB\u884C\u52A0\u8F7D\u8D44\u6E90\uFF0C\u800C\u662F\u4F1A\u8FDB\u5165\u8BF7\u6C42\u961F\u5217\uFF0C\u5176\u539F\u56E0\u53EF\u80FD\u6709", -1);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u6839\u636E\u8D44\u6E90\u8BF7\u6C42\u7684\u4F18\u5148\u7EA7\uFF0C\u5224\u65AD\u51FA\u8BE5\u8BF7\u6C42\u5177\u6709\u8F83\u4F4E\u7684\u4F18\u5148\u7EA7"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u8BE5\u57DF\u540D\u4E0B\u5DF2\u7ECF\u6253\u5F00\u4E86 6 \u4E2A TCP \u94FE\u63A5\u3002\uFF08\u4EC5\u9002\u7528\u4E8E HTTP/1.0 \u548C 1.1\uFF09"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u6D4F\u89C8\u5668\u5206\u914D\u78C1\u76D8\u7A7A\u95F4")
], -1);
const _hoisted_66 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1");
const _hoisted_67 = {
  href: "https://developers.google.com/web/tools/chrome-devtools/network/reference#timing-explanation",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_68 = /* @__PURE__ */ createTextVNode("https://developers.google.com/web/tools/chrome-devtools/network/reference#timing-explanation");
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u8D44\u6E90\u8BF7\u6C42\u4F18\u5148\u7EA7",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8D44\u6E90\u8BF7\u6C42\u4F18\u5148\u7EA7",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8D44\u6E90\u8BF7\u6C42\u4F18\u5148\u7EA7")
], -1);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u6700\u7EC8\u7684\u4F18\u5148\u7EA7",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6700\u7EC8\u7684\u4F18\u5148\u7EA7",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6700\u7EC8\u7684\u4F18\u5148\u7EA7")
], -1);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "Chrome \u8D44\u6E90\u8BF7\u6C42\u4F18\u5148\u7EA7"
  })
], -1);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("p", null, "\u6CE8\u91CA:", -1);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "*"),
    /* @__PURE__ */ createTextVNode(" Preload using \u201Cas\u201D or fetch using \u201Ctype\u201D use the priority of the type they are requesting. (e.g. preload as=stylesheet will use Highest priority). With no \u201Cas\u201D they will behave like an XHR.")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "**"),
    /* @__PURE__ */ createTextVNode(" \u201CEarly\u201D is defined as being requested before any non-preloaded images have been requested (\u201Clate\u201D is after).")
  ])
], -1);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("p", null, "\u81EA 2016 \u5E74 6 \u6708\u8D77\uFF0C\u4EE5\u4E0A\u8868\u683C\u8868\u793A\u4E86 Chrome \u91CC\uFF08in Blink as of Chrome 46 and beyond\uFF09\u5904\u7406\u6240\u6709\u8D44\u6E90\u7684\u4F18\u5148\u7EA7\u3002", -1);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("p", null, "\u8D44\u6E90\u7684\u4F18\u5148\u7EA7\u5212\u5206\u4E3A 5 \u7EA7\u3002\u4E0D\u540C\u573A\u666F\u4E0B\uFF0C\u8FD9 5 \u7EA7\u7684\u547D\u540D\u548C\u63CF\u8FF0\u4E0A\u53EF\u80FD\u6709\u6240\u4E0D\u540C\uFF0C\u4F46\u672C\u8D28\u4E0A\u662F\u4E00\u4E00\u5BF9\u5E94\u7684\u3002\u6BD4\u5982:", -1);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u7F51\u7EDC\u4F18\u5148\u7EA7: Highest\u3001Medium\u3001Low\u3001Lowest\u3001Idle"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u6D4F\u89C8\u5668\u5185\u6838: VeryHigh\u3001High\u3001Medium\u3001Low\u3001VeryLow"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u7528\u6237\u7AEF\u63A7\u5236\u53F0\u663E\u793A: Highest\u3001High\u3001Medium\u3001Low\u3001Lowest")
], -1);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("p", null, "\u662F\u4E0D\u662F\u8DDF\u661F\u5DF4\u514B\u5496\u5561\u7684\u4E2D\u676F\u3001\u5927\u676F\u3001\u8D85\u5927\u676F\u7C7B\u4F3C\uFF1F", -1);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode("h5", {
  id: "script-\u4F18\u5148\u7EA7",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#script-\u4F18\u5148\u7EA7",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" script \u4F18\u5148\u7EA7")
], -1);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "script"),
  /* @__PURE__ */ createTextVNode("\u811A\u672C\u7684\u4F18\u5148\u7EA7\u53D6\u51B3\u4E8E\u5B83\u4EEC\u5728\u6587\u6863\u91CC\u7684\u4F4D\u7F6E\u4EE5\u53CA\u5B83\u4EEC\u662F\u5426\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "async"),
  /* @__PURE__ */ createTextVNode("\u5F02\u6B65\u7684\u3001"),
  /* @__PURE__ */ createBaseVNode("code", null, "defer"),
  /* @__PURE__ */ createTextVNode("\u5EF6\u8FDF\u7684\u6216"),
  /* @__PURE__ */ createBaseVNode("code", null, "blocking"),
  /* @__PURE__ */ createTextVNode("\u963B\u585E\u7684\u3002")
], -1);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u4F4D\u4E8E\u7B2C\u4E00\u4E2A\u56FE\u7247\u4E4B\u524D\u88AB\u8BF7\u6C42\u7684"),
    /* @__PURE__ */ createBaseVNode("code", null, "blocking"),
    /* @__PURE__ */ createTextVNode("\u811A\u672C\u7684\u4F18\u5148\u7EA7\u662F: Net:Medium")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u4F4D\u4E8E\u7B2C\u4E00\u4E2A\u56FE\u7247\u4E4B\u540E\u88AB\u8BF7\u6C42\u7684"),
    /* @__PURE__ */ createBaseVNode("code", null, "blocking"),
    /* @__PURE__ */ createTextVNode("\u811A\u672C\u7684\u4F18\u5148\u7EA7\u662F: Net:Low")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "async"),
    /* @__PURE__ */ createTextVNode("/"),
    /* @__PURE__ */ createBaseVNode("code", null, "defer"),
    /* @__PURE__ */ createTextVNode("/"),
    /* @__PURE__ */ createBaseVNode("code", null, "injected"),
    /* @__PURE__ */ createTextVNode("\u811A\u672C\u7684\u4F18\u5148\u7EA7\u662F: Net:Lowest")
  ])
], -1);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u8FD9\u91CC\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "\u7B2C\u4E00\u4E2A\u56FE\u7247"),
  /* @__PURE__ */ createTextVNode("\u7684\u5B9A\u4E49\u662F\uFF0C\u5728\u4EFB\u4F55\u975E"),
  /* @__PURE__ */ createBaseVNode("code", null, "proload"),
  /* @__PURE__ */ createTextVNode("\u7684\u56FE\u7247\u88AB\u8BF7\u6C42\u4E4B\u524D\u7684\u7B2C\u4E00\u4E2A\u88AB\u8BF7\u6C42\u7684\u56FE\u7247\u3002")
], -1);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode("h5", {
  id: "image-\u4F18\u5148\u7EA7",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#image-\u4F18\u5148\u7EA7",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" image \u4F18\u5148\u7EA7")
], -1);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u53EF\u89C1\u4E14\u4F4D\u4E8E\u89C6\u53E3\u5185\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "image"),
  /* @__PURE__ */ createTextVNode("\u56FE\u7247\uFF08Net:Medium\uFF09\u6BD4\u90A3\u4E9B\u4E0D\u5728\u89C6\u53E3\u5185\u7684\u56FE\u7247\uFF08Net:Lowest\uFF09\u5177\u6709\u66F4\u9AD8\u7684\u4F18\u5148\u7EA7\uFF0C\u56E0\u6B64\u5728\u67D0\u4E9B\u7A0B\u5EA6\u4E0A Chrome \u4F1A\u5C3D\u91CF\u4E3A\u4F60\uFF08\u4F2A\uFF09\u61D2\u52A0\u8F7D\u8FD9\u4E9B\u56FE\u7247\u3002\u4E00\u5F00\u59CB\u5177\u6709\u4F4E\u4F18\u5148\u7EA7\u7684\u56FE\u7247\uFF08Net:Lowest\uFF09\u5728\u5E03\u5C40\u5B8C\u6210\u4E4B\u540E\u88AB\u53D1\u73B0\u4F4D\u4E8E\u89C6\u53E3\u5185\u65F6\uFF0C\u5C06\u83B7\u5F97\u4F18\u5148\u7EA7\u63D0\u5347\uFF08Net:Medium\uFF09\u3002\u4F46\u662F\u5F53\u5E03\u5C40\u5B8C\u6210\u65F6\u5DF2\u7ECF\u5728\u8BF7\u6C42\u4E2D\u7684\u56FE\u7247\u4E0D\u4F1A\u91CD\u65B0\u66F4\u6539\u4F18\u5148\u7EA7\u3002")
], -1);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode("h5", {
  id: "preload-as",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#preload-as",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" preload & as")
], -1);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "preload"),
  /* @__PURE__ */ createTextVNode("\u4E14\u4F7F\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "as"),
  /* @__PURE__ */ createTextVNode("\u5C5E\u6027\u7684\u8D44\u6E90\uFF0C\u5C06\u83B7\u5F97\u4E0E\u8BE5\u8D44\u6E90\u7C7B\u578B\u76F8\u540C\u7684\u8D44\u6E90\u4F18\u5148\u7EA7\u3002\u6BD4\u5982\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, '<link rel="preload" as="style">'),
  /* @__PURE__ */ createTextVNode("\u5C06\u548C\u6837\u5F0F\u8868\u4E00\u6837\u83B7\u5F97 Net:Highest \u7684\u4F18\u5148\u7EA7\uFF1B"),
  /* @__PURE__ */ createBaseVNode("code", null, '<link rel="preload" as="script">'),
  /* @__PURE__ */ createTextVNode("\u5C06\u83B7\u5F97 Net:Medium/Low \u7684\u4F18\u5148\u7EA7\u3002\u8FD9\u4E9B\u8D44\u6E90\u4ECD\u7136\u9075\u4ECE\u7740\u76F8\u540C\u7684 CSP \u653F\u7B56\u3002")
], -1);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "preload"),
  /* @__PURE__ */ createTextVNode("\u4E14\u6CA1\u6709\u4F7F\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "as"),
  /* @__PURE__ */ createTextVNode("\u5C5E\u6027\u7684\u8D44\u6E90\u7684\u8BF7\u6C42\u4F18\u5148\u7EA7\u4E0E\u5F02\u6B65 XHR \u7684\u4F18\u5148\u7EA7\u4E00\u81F4\u3002")
], -1);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u8BA1\u7B97\u8D44\u6E90\u52A0\u8F7D\u4F18\u5148\u7EA7",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8BA1\u7B97\u8D44\u6E90\u52A0\u8F7D\u4F18\u5148\u7EA7",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8BA1\u7B97\u8D44\u6E90\u52A0\u8F7D\u4F18\u5148\u7EA7")
], -1);
const _hoisted_88 = /* @__PURE__ */ createBaseVNode("p", null, "\u4E0A\u4E00\u8282\u5C3D\u7BA1\u5DF2\u7ECF\u7ED9\u51FA\u4E86\u6700\u7EC8\u7684\u8D44\u6E90\u52A0\u8F7D\u4F18\u5148\u7EA7\uFF0C\u4F46\u662F\u8FD9\u4E9B\u4F18\u5148\u7EA7\u662F\u5982\u4F55\u4E00\u6B65\u6B65\u8BA1\u7B97\u5F97\u5230\u7684\u5462\uFF1F", -1);
const _hoisted_89 = /* @__PURE__ */ createBaseVNode("h5", {
  id: "\u8D44\u6E90\u7684\u9ED8\u8BA4\u4F18\u5148\u7EA7",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8D44\u6E90\u7684\u9ED8\u8BA4\u4F18\u5148\u7EA7",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8D44\u6E90\u7684\u9ED8\u8BA4\u4F18\u5148\u7EA7")
], -1);
const _hoisted_90 = /* @__PURE__ */ createBaseVNode("p", null, "\u9996\u5148\uFF0C\u6BCF\u4E00\u7C7B\u8D44\u6E90\u90FD\u6709\u4E2A\u9ED8\u8BA4\u7684\u4F18\u5148\u7EA7\uFF0C\u8FD9\u4E2A\u9ED8\u8BA4\u7684\u4F18\u5148\u7EA7\u5C06\u4F5C\u4E3A\u521D\u59CB\u5316\u7684\u4F18\u5148\u7EA7\u3002", -1);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode("p", null, "\u6E90\u7801\u91CC\uFF0C\u4E0D\u540C\u7C7B\u578B\u7684\u8D44\u6E90\u4F18\u5148\u7EA7\u662F\u8FD9\u4E48\u5B9A\u4E49\u7684:", -1);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode("div", { class: "language-c ext-c line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-c" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createTextVNode("ResourceLoadPriority "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "TypeToPriority"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("Resource"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("Type type"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "switch"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("type"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "case"),
      /* @__PURE__ */ createTextVNode(" Resource"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("kMainResource"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "case"),
      /* @__PURE__ */ createTextVNode(" Resource"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("kCSSStyleSheet"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "case"),
      /* @__PURE__ */ createTextVNode(" Resource"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("kFont"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Also parser-blocking scripts (set explicitly in loadPriority)"),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
      /* @__PURE__ */ createTextVNode(" kResourceLoadPriorityVeryHigh"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "case"),
      /* @__PURE__ */ createTextVNode(" Resource"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("kXSLStyleSheet"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "DCHECK"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("RuntimeEnabledFeatures"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "XSLTEnabled"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "case"),
      /* @__PURE__ */ createTextVNode(" Resource"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("kRaw"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "case"),
      /* @__PURE__ */ createTextVNode(" Resource"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("kImportResource"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "case"),
      /* @__PURE__ */ createTextVNode(" Resource"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("kScript"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Also visible resources/images (set explicitly in loadPriority)"),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
      /* @__PURE__ */ createTextVNode(" kResourceLoadPriorityHigh"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "case"),
      /* @__PURE__ */ createTextVNode(" Resource"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("kManifest"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "case"),
      /* @__PURE__ */ createTextVNode(" Resource"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("kMock"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Also late-body scripts discovered by the preload scanner (set"),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// explicitly in loadPriority)"),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
      /* @__PURE__ */ createTextVNode(" kResourceLoadPriorityMedium"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "case"),
      /* @__PURE__ */ createTextVNode(" Resource"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("kImage"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "case"),
      /* @__PURE__ */ createTextVNode(" Resource"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("kTextTrack"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "case"),
      /* @__PURE__ */ createTextVNode(" Resource"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("kMedia"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "case"),
      /* @__PURE__ */ createTextVNode(" Resource"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("kSVGDocument"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Also async scripts (set explicitly in loadPriority)"),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
      /* @__PURE__ */ createTextVNode(" kResourceLoadPriorityLow"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "case"),
      /* @__PURE__ */ createTextVNode(" Resource"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("kLinkPrefetch"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
      /* @__PURE__ */ createTextVNode(" kResourceLoadPriorityVeryLow"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createTextVNode("\n\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
      /* @__PURE__ */ createTextVNode(" kResourceLoadPriorityUnresolved"),
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
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "20"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "21"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "22"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "23"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "24"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "25"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "26"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "27"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "28"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "29"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "30"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "31"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u53EF\u4EE5\u770B\u5230\uFF0C\u4ECE\u6D4F\u89C8\u5668\u5185\u6838 Blink \u5C42\u9762\u6765\u770B\uFF0C\u4F18\u5148\u7EA7\u603B\u5171\u5206\u4E3A\u4E94\u7EA7: VeryHigh\u3001High\u3001Medium\u3001Low\u3001VeryLow\u3002\u5176\u4E2D\uFF0CMainRescource\u3001CSS\u3001\u5B57\u4F53\u7684\u4F18\u5148\u7EA7\u662F\u6700\u9AD8\u7684 VeryHigh\uFF1B\u5176\u6B21\uFF0CAjax\u3001Script \u8FD9\u7C7B\u7684\u4F18\u5148\u7EA7\u662F High\uFF1B\u56FE\u7247\u3001\u97F3\u89C6\u9891\u7684\u4F18\u5148\u7EA7\u662F Low\uFF1B\u6700\u540E"),
  /* @__PURE__ */ createBaseVNode("code", null, "prefetch"),
  /* @__PURE__ */ createTextVNode("\u9884\u52A0\u8F7D\u7684\u8D44\u6E90\u7684\u4F18\u5148\u7EA7\u662F\u6700\u4F4E\u7684 VeryLow\u3002")
], -1);
const _hoisted_94 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6CE8\u610F\u4E0A\u9762\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "switch-case"),
  /* @__PURE__ */ createTextVNode("\u8BBE\u5B9A\u8D44\u6E90\u4F18\u5148\u7EA7\u6709\u4E00\u4E2A\u987A\u5E8F\uFF0C\u82E5\u8D44\u6E90\u65E2\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "script"),
  /* @__PURE__ */ createTextVNode("\u53C8\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "prefetch"),
  /* @__PURE__ */ createTextVNode("\u7684\u8BDD\u5F97\u5230\u7684\u4F18\u5316\u7EA7\u662F High\uFF0C\u800C\u4E0D\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "prefetch"),
  /* @__PURE__ */ createTextVNode("\u7684 VeryLow\uFF0C\u56E0\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "prefetch"),
  /* @__PURE__ */ createTextVNode("\u662F\u6700\u540E\u4E00\u4E2A\u5224\u65AD\u3002\u6240\u4EE5\u5728\u8BBE\u5B9A\u4E86\u8D44\u6E90\u9ED8\u8BA4\u7684\u4F18\u5148\u7EA7\u4E4B\u540E\uFF0C\u4F1A\u518D\u5BF9\u4E00\u4E9B\u60C5\u51B5\u505A\u4E00\u4E9B\u8C03\u6574\uFF0C\u4E3B\u8981\u662F\u5BF9"),
  /* @__PURE__ */ createBaseVNode("code", null, "prefetch"),
  /* @__PURE__ */ createTextVNode("/"),
  /* @__PURE__ */ createBaseVNode("code", null, "preload"),
  /* @__PURE__ */ createTextVNode("\u7684\u8D44\u6E90\u3002")
], -1);
const _hoisted_95 = /* @__PURE__ */ createBaseVNode("h5", {
  id: "\u4F18\u5148\u7EA7\u8C03\u6574",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u4F18\u5148\u7EA7\u8C03\u6574",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u4F18\u5148\u7EA7\u8C03\u6574")
], -1);
const _hoisted_96 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, [
      /* @__PURE__ */ createTextVNode("\u964D\u4F4E"),
      /* @__PURE__ */ createBaseVNode("code", null, "preload"),
      /* @__PURE__ */ createTextVNode("\u7684\u5B57\u4F53\u7684\u4F18\u5148\u7EA7")
    ])
  ])
], -1);
const _hoisted_97 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u82E5\u5B57\u4F53\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "preload"),
  /* @__PURE__ */ createTextVNode("\u7684\uFF0C\u5219\u6D4F\u89C8\u5668\u4F1A\u5C06"),
  /* @__PURE__ */ createBaseVNode("code", null, "preload"),
  /* @__PURE__ */ createTextVNode("\u7684\u5B57\u4F53\u7684\u4F18\u5148\u7EA7\u4ECE\u9ED8\u8BA4\u7684 VeryHigh \u8C03\u6574\u4E3A High\u3002")
], -1);
const _hoisted_98 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, [
      /* @__PURE__ */ createTextVNode("\u964D\u4F4E"),
      /* @__PURE__ */ createBaseVNode("code", null, "defer"),
      /* @__PURE__ */ createTextVNode("/"),
      /* @__PURE__ */ createBaseVNode("code", null, "async"),
      /* @__PURE__ */ createTextVNode("\u7684"),
      /* @__PURE__ */ createBaseVNode("code", null, "script"),
      /* @__PURE__ */ createTextVNode("\u7684\u4F18\u5148\u7EA7")
    ])
  ])
], -1);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u82E5"),
  /* @__PURE__ */ createBaseVNode("code", null, "script"),
  /* @__PURE__ */ createTextVNode("\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "defer"),
  /* @__PURE__ */ createTextVNode("\u6216"),
  /* @__PURE__ */ createBaseVNode("code", null, "async"),
  /* @__PURE__ */ createTextVNode("\u7684\uFF0C\u5219\u5C06\u8BE5"),
  /* @__PURE__ */ createBaseVNode("code", null, "script"),
  /* @__PURE__ */ createTextVNode("\u7684\u4F18\u5148\u7EA7\u4ECE\u9ED8\u8BA4\u7684 High \u8C03\u6574\u4E3A Low\u3002")
], -1);
const _hoisted_100 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, [
      /* @__PURE__ */ createTextVNode("\u9875\u9762\u5E95\u90E8"),
      /* @__PURE__ */ createBaseVNode("code", null, "preload"),
      /* @__PURE__ */ createTextVNode("\u7684"),
      /* @__PURE__ */ createBaseVNode("code", null, "script"),
      /* @__PURE__ */ createTextVNode("\u4F18\u5148\u7EA7\u53D8\u6210 Medium")
    ])
  ])
], -1);
const _hoisted_101 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u7D27\u63A5\u7740\u4E0A\u4E00\u6761\uFF0C\u82E5"),
  /* @__PURE__ */ createBaseVNode("code", null, "script"),
  /* @__PURE__ */ createTextVNode("\u4E0D\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "defer"),
  /* @__PURE__ */ createTextVNode("\u6216"),
  /* @__PURE__ */ createBaseVNode("code", null, "async"),
  /* @__PURE__ */ createTextVNode("\u7684\uFF0C\u4E14\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "preload"),
  /* @__PURE__ */ createTextVNode("\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "script"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u5E76\u4E14\u5982\u679C\u9875\u9762\u4E4B\u524D\u5DF2\u7ECF\u52A0\u8F7D\u4E86\u4E00\u5F20\u56FE\u7247\u5C31\u8BA4\u4E3A\u8FD9\u4E2A"),
  /* @__PURE__ */ createBaseVNode("code", null, "script"),
  /* @__PURE__ */ createTextVNode("\u662F\u5728\u9875\u9762\u504F\u5E95\u90E8\u7684\u4F4D\u7F6E\uFF0C\u5C31\u628A\u5B83\u7684\u4F18\u5148\u7EA7\u8C03\u6210 Medium\u3002\u8D44\u6E90\u5728\u7B2C\u4E00\u5F20\u975E"),
  /* @__PURE__ */ createBaseVNode("code", null, "preload"),
  /* @__PURE__ */ createTextVNode("\u7684\u56FE\u7247\u524D\u8BA4\u4E3A\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "early"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u800C\u5728\u5176\u540E\u5219\u8BA4\u4E3A\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "late"),
  /* @__PURE__ */ createTextVNode("\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "late"),
  /* @__PURE__ */ createTextVNode("\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "script"),
  /* @__PURE__ */ createTextVNode("\u7684\u4F18\u5148\u7EA7\u4F1A\u504F\u4F4E\u3002")
], -1);
const _hoisted_102 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "preload"),
  /* @__PURE__ */ createTextVNode("\u4E0D\u540C\u4E8E"),
  /* @__PURE__ */ createBaseVNode("code", null, "prefetch"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u5728\u65E9\u671F\u6D4F\u89C8\u5668\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "script"),
  /* @__PURE__ */ createTextVNode("\u8D44\u6E90\u662F\u963B\u585E\u52A0\u8F7D\u7684\uFF0C\u5F53\u9875\u9762\u9047\u5230\u4E00\u4E2A"),
  /* @__PURE__ */ createBaseVNode("code", null, "script"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u90A3\u4E48\u8981\u7B49\u8FD9\u4E2A"),
  /* @__PURE__ */ createBaseVNode("code", null, "script"),
  /* @__PURE__ */ createTextVNode("\u4E0B\u8F7D\u548C\u6267\u884C\u5B8C\u4E86\uFF0C\u624D\u4F1A\u7EE7\u7EED\u89E3\u6790\u5269\u4E0B\u7684 DOM \u7ED3\u6784\uFF0C\u4E5F\u5C31\u662F\u8BF4"),
  /* @__PURE__ */ createBaseVNode("code", null, "script"),
  /* @__PURE__ */ createTextVNode("\u662F\u4E32\u884C\u52A0\u8F7D\u7684\uFF0C\u5E76\u4E14\u4F1A\u5835\u585E\u9875\u9762\u5176\u5B83\u8D44\u6E90\u7684\u52A0\u8F7D\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4\u9875\u9762\u6574\u4F53\u7684\u52A0\u8F7D\u901F\u5EA6\u5F88\u6162\uFF0C\u6240\u4EE5\u65E9\u5728 2008 \u5E74\u7684\u65F6\u5019\u6D4F\u89C8\u5668\u51FA\u4E86\u4E00\u4E2A\u63A8\u6D4B\u52A0\u8F7D(speculative preload)\u7B56\u7565\uFF0C\u5373\u9047\u5230"),
  /* @__PURE__ */ createBaseVNode("code", null, "script"),
  /* @__PURE__ */ createTextVNode("\u7684\u65F6\u5019\uFF0CDOM \u4F1A\u505C\u6B62\u6784\u5EFA\uFF0C\u4F46\u662F\u4F1A\u7EE7\u7EED\u53BB\u641C\u7D22\u9875\u9762\u9700\u8981\u52A0\u8F7D\u7684\u8D44\u6E90\uFF0C\u5982\u770B\u4E0B\u540E\u7EED\u7684 HTML \u6709\u6CA1\u6709"),
  /* @__PURE__ */ createBaseVNode("code", null, "img"),
  /* @__PURE__ */ createTextVNode("/"),
  /* @__PURE__ */ createBaseVNode("code", null, "script"),
  /* @__PURE__ */ createTextVNode("\u6807\u7B7E\uFF0C\u5148\u8FDB\u884C\u9884\u52A0\u8F7D\uFF0C\u800C\u4E0D\u7528\u7B49\u5230\u6784\u5EFA DOM \u7684\u65F6\u5019\u624D\u53BB\u52A0\u8F7D\u3002\u8FD9\u6837\u5927\u5927\u63D0\u9AD8\u4E86\u9875\u9762\u6574\u4F53\u7684\u52A0\u8F7D\u901F\u5EA6\u3002")
], -1);
const _hoisted_103 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("TODO: \u8FD9\u91CC\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "preload"),
  /* @__PURE__ */ createTextVNode("\u662F\u6307\u63A8\u6D4B\u52A0\u8F7D\uFF0C\u8DDF"),
  /* @__PURE__ */ createBaseVNode("code", null, '<link rel="preload">'),
  /* @__PURE__ */ createTextVNode("\u8C8C\u4F3C\u4E0D\u4E00\u6837\uFF1F")
], -1);
const _hoisted_104 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "\u628A\u540C\u6B65\u5373\u963B\u585E\u52A0\u8F7D\u7684\u8D44\u6E90\u7684\u4F18\u5148\u7EA7\u8C03\u6210\u6700\u9AD8")
  ])
], -1);
const _hoisted_105 = /* @__PURE__ */ createBaseVNode("p", null, "\u82E5\u662F\u540C\u6B65\u52A0\u8F7D\u7684\u8D44\u6E90\uFF0C\u90A3\u4E48\u5B83\u7684 ResourceRequest \u5BF9\u8C61\u91CC\u9762\u7684\u4F18\u5148\u6700\u7EA7\u662F\u6700\u9AD8\u7684\uFF0C\u6240\u4EE5\u672C\u6765\u662F High \u7684 Ajax \u540C\u6B65\u8BF7\u6C42\u5728\u6700\u540E\u8C03\u6574\u4E3A\u4E86 VeryHigh\u3002", -1);
const _hoisted_106 = /* @__PURE__ */ createBaseVNode("p", null, "\u7ECF\u8FC7\u8FD9\u4E00\u6B65\u7684\u5904\u7406\uFF0C\u8D44\u6E90\u6700\u7EC8\u7684\u4F18\u5148\u7EA7\u662F\u53D6\u4E86\u4E24\u4E2A\u503C\u7684\u6700\u5927\u503C\uFF0C\u7B2C\u4E00\u4E2A\u503C\u662F\u4E0A\u9762\u8FDB\u884C\u5404\u79CD\u5224\u65AD\u5F97\u5230\u7684\u4F18\u5148\u7EA7\uFF0C\u7B2C\u4E8C\u4E2A\u5728\u521D\u59CB\u8FD9\u4E2A ResourceRequest \u5BF9\u8C61\u672C\u8EAB\u5C31\u6709\u7684\u4E00\u4E2A\u4F18\u5148\u7EA7\u5C5E\u6027\uFF0C\u8FD4\u56DE\u6700\u5927\u503C\u540E\u518D\u91CD\u65B0\u8BBE\u7F6E\u8D44\u6E90\u7684\u4F18\u5148\u7EA7\u3002", -1);
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("p", null, "\u5728\u6784\u5EFA ResourceRequest \u5BF9\u8C61\u65F6\u6240\u6709\u8D44\u6E90\u7684\u4F18\u5148\u7EA7\u90FD\u662F\u6700\u4F4E\u7684 VeryLow\uFF0C\u4F46\u662F\u540C\u6B65\u8BF7\u6C42\u5728\u521D\u59CB\u5316\u65F6\u4F18\u5148\u7EA7\u4F1A\u8BBE\u7F6E\u4E3A\u6700\u9AD8\u7684 VeryHigh\u3002", -1);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u8F6C\u6362\u6210-net-\u7684\u4F18\u5148\u7EA7",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8F6C\u6362\u6210-net-\u7684\u4F18\u5148\u7EA7",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8F6C\u6362\u6210 Net \u7684\u4F18\u5148\u7EA7")
], -1);
const _hoisted_109 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u4E0A\u4E00\u8282"),
  /* @__PURE__ */ createBaseVNode("code", null, "\u8BA1\u7B97\u8D44\u6E90\u52A0\u8F7D\u4F18\u5148\u7EA7"),
  /* @__PURE__ */ createTextVNode("\u91CC\u63D0\u5230\u7684\u4F18\u5148\u7EA7\u90FD\u662F\u6D4F\u89C8\u5668\u5185\u6838 Blink \u5C42\u9762\u7684\u4F18\u5148\u7EA7\uFF0C\u800C\u8FD9\u4E9B\u8D44\u6E90\u7684\u4F18\u5148\u7EA7\u5728\u53D1\u9001\u8BF7\u6C42\u4E4B\u524D\u4F1A\u88AB\u8F6C\u6362\u4E3A\u7F51\u7EDC\u5C42\u9762\u7684 Net \u4F18\u5148\u7EA7\u3002\u4E8C\u8005\u7684\u5BF9\u5E94\u5173\u7CFB\u5982\u4E0B:")
], -1);
const _hoisted_110 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_1,
    alt: "\u4F18\u5148\u7EA7\u8F6C\u6362"
  })
], -1);
const _hoisted_111 = /* @__PURE__ */ createBaseVNode("p", null, "Net Priority \u662F\u8BF7\u6C42\u8D44\u6E90\u7684\u65F6\u5019\u4F7F\u7528\u7684\uFF0C\u8FD9\u4E2A\u662F\u5728 Chrome \u7684\u7F51\u7EDC\u8FDB\u7A0B\u91CC\u9762\u8FDB\u884C\u7684\u3002", -1);
const _hoisted_112 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u8D44\u6E90\u52A0\u8F7D",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8D44\u6E90\u52A0\u8F7D",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8D44\u6E90\u52A0\u8F7D")
], -1);
const _hoisted_113 = /* @__PURE__ */ createBaseVNode("p", null, "\u8D44\u6E90\u52A0\u8F7D\u7684\u4F18\u5148\u7EA7\u5DF2\u7ECF\u786E\u5B9A\uFF0C\u90A3\u4E48\u7F51\u7EDC\u8FDB\u7A0B\u662F\u5982\u4F55\u6839\u636E\u4F18\u5148\u7EA7\u89E6\u53D1\u52A0\u8F7D\u8D44\u6E90\u5462\uFF1F", -1);
const _hoisted_114 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u7F51\u7EDC\u8FDB\u7A0B\u91CC\u6709\u4E2A\u51FD\u6570"),
  /* @__PURE__ */ createBaseVNode("code", null, "ShouldStartRequest"),
  /* @__PURE__ */ createTextVNode("\u4F1A\u5224\u65AD\u5F53\u524D\u8D44\u6E90\u662F\u5426\u53EF\u4EE5\u52A0\u8F7D\uFF0C\u82E5\u80FD\u5219\u51C6\u5907\u52A0\u8F7D\uFF0C\u5426\u5219\u5C31\u7EE7\u7EED\u628A\u5B83\u653E\u5230"),
  /* @__PURE__ */ createBaseVNode("code", null, "pending_requests"),
  /* @__PURE__ */ createTextVNode("\u961F\u5217\u91CC\u9762\u3002")
], -1);
const _hoisted_115 = /* @__PURE__ */ createBaseVNode("div", { class: "language-c ext-c line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-c" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "void"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "ScheduleRequest"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
      /* @__PURE__ */ createTextVNode(" net"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("URLRequest"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "&"),
      /* @__PURE__ */ createTextVNode(" url_request"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode("\n                       ScheduledResourceRequest"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "*"),
      /* @__PURE__ */ createTextVNode(" request"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "SetRequestAttributes"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("request"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "DetermineRequestAttributes"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("request"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n  ShouldStartReqResult should_start "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "ShouldStartRequest"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("request"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("should_start "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "=="),
      /* @__PURE__ */ createTextVNode(" START_REQUEST"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// New requests can be started synchronously without issue."),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "StartRequest"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("request"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode(" START_SYNC"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode(" RequestStartTrigger"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("NONE"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "else"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n    pending_requests_"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Insert"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("request"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
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
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "11"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_116 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u7F51\u7EDC\u8FDB\u7A0B\u4E00\u4F46\u6536\u5230\u9875\u9762\u6E32\u67D3\u8FDB\u7A0B\u7684\u52A0\u8F7D\u8D44\u6E90\u6D88\u606F\uFF0C\u8C03\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "ScheduleRequest"),
  /* @__PURE__ */ createTextVNode("\u51FD\u6570\uFF0C\u8FDB\u800C\u8C03\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "ShouldStartRequest"),
  /* @__PURE__ */ createTextVNode("\u5224\u65AD\u8D44\u6E90\u662F\u52A0\u8F7D\u8FD8\u662F\u653E\u5230"),
  /* @__PURE__ */ createBaseVNode("code", null, "pending_requests"),
  /* @__PURE__ */ createTextVNode("\u961F\u5217\u3002")
], -1);
const _hoisted_117 = /* @__PURE__ */ createBaseVNode("div", { class: "language-c ext-c line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-c" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "void"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "LoadAnyStartablePendingRequests"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("RequestStartTrigger trigger"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// We iterate through all the pending requests, starting with the highest"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// priority one."),
      /* @__PURE__ */ createTextVNode("\n  RequestQueue"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("NetQueue"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("iterator request_iter "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode("\n      pending_requests_"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "GetNextHighestIterator"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "while"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("request_iter "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "!="),
      /* @__PURE__ */ createTextVNode(" pending_requests_"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "End"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n    ScheduledResourceRequest"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "*"),
      /* @__PURE__ */ createTextVNode(" request "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "*"),
      /* @__PURE__ */ createTextVNode("request_iter"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n    ShouldStartReqResult query_result "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "ShouldStartRequest"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("request"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("query_result "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "=="),
      /* @__PURE__ */ createTextVNode(" START_REQUEST"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n      pending_requests_"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Erase"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("request"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "StartRequest"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("request"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode(" START_ASYNC"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode(" trigger"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_118 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u9664\u4E86\u6536\u5230\u6E32\u67D3\u8FDB\u7A0B\u7684\u6D88\u606F\u4E4B\u5916\uFF0C\u8FD8\u4F1A\u5728"),
  /* @__PURE__ */ createBaseVNode("code", null, "LoadAnyStartablePendingRequests"),
  /* @__PURE__ */ createTextVNode("\u51FD\u6570\u91CC\u8C03\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "ShouldStartRequest"),
  /* @__PURE__ */ createTextVNode("\u51FD\u6570\u3002"),
  /* @__PURE__ */ createBaseVNode("code", null, "LoadAnyStartablePendingRequests"),
  /* @__PURE__ */ createTextVNode("\u51FD\u6570\u91CC\u4F1A\u904D\u5386"),
  /* @__PURE__ */ createBaseVNode("code", null, "pending_requests"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u83B7\u53D6\u5230\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u8BF7\u6C42\u5BF9\u8C61\uFF0C\u8C03\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "ShouldStartRequest"),
  /* @__PURE__ */ createTextVNode("\u5224\u65AD\u8BE5\u8BF7\u6C42\u662F\u5426\u53EF\u4EE5\u52A0\u8F7D\u3002\u82E5\u80FD\u7684\u8BDD\uFF0C\u5C06\u8BE5\u8BF7\u6C42\u4ECE"),
  /* @__PURE__ */ createBaseVNode("code", null, "pending_requests"),
  /* @__PURE__ */ createTextVNode("\u961F\u5217\u91CC\u5220\u9664\uFF0C\u5E76\u5F00\u59CB\u52A0\u8F7D\u8D44\u6E90\u3002\u800C"),
  /* @__PURE__ */ createBaseVNode("code", null, "LoadAnyStartablePendingRequests"),
  /* @__PURE__ */ createTextVNode("\u51FD\u6570\u4F1A\u5728\u4E09\u4E2A\u5730\u65B9\u88AB\u8C03\u7528\uFF0C\u4E00\u4E2A\u662F IO \u8FDB\u7A0B\u7684\u5FAA\u73AF\u5224\u65AD\uFF0C\u53EA\u8981\u8FD8\u6709\u672A\u5B8C\u6210\u7684\u4EFB\u52A1\uFF0C\u5C31\u4F1A\u89E6\u53D1\u52A0\u8F7D\uFF1B\u7B2C\u4E8C\u4E2A\u662F\u5F53\u6709\u8BF7\u6C42\u5B8C\u6210\u65F6\u4F1A\u8C03\uFF1B\u7B2C\u4E09\u4E2A\u662F\u8981\u63D2\u5165"),
  /* @__PURE__ */ createBaseVNode("code", null, "body"),
  /* @__PURE__ */ createTextVNode("\u6807\u7B7E\u7684\u65F6\u5019\u3002")
], -1);
const _hoisted_119 = /* @__PURE__ */ createBaseVNode("p", null, "\u6240\u4EE5\u4E3B\u8981\u603B\u5171\u6709\u4E09\u4E2A\u5730\u65B9\u4F1A\u89E6\u53D1\u52A0\u8F7D:", -1);
const _hoisted_120 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u6536\u5230\u6765\u81EA\u6E32\u67D3\u8FDB\u7A0B IPC \u7684\u8BF7\u6C42\u52A0\u8F7D\u8D44\u6E90\u7684\u6D88\u606F"),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u6BCF\u4E2A\u8BF7\u6C42\u5B8C\u6210\u4E4B\u540E\uFF0C\u89E6\u53D1\u52A0\u8F7D"),
    /* @__PURE__ */ createBaseVNode("code", null, "pending_requests"),
    /* @__PURE__ */ createTextVNode("\u91CC\u7684\u8BF7\u6C42")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, "\u7F51\u7EDC\u8FDB\u7A0B\u5B9A\u65F6\u5FAA\u73AF\u672A\u5B8C\u6210\u7684\u4EFB\u52A1\uFF0C\u89E6\u53D1\u52A0\u8F7D")
], -1);
const _hoisted_121 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u793A\u4F8B",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u793A\u4F8B",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u793A\u4F8B")
], -1);
const _hoisted_122 = /* @__PURE__ */ createBaseVNode("div", { class: "language-html ext-html line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-html" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token doctype" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<!"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token doctype-tag" }, "DOCType"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token name" }, "html"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("html")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("head")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("meta")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "charset"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("utf-8"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("link")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "rel"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("icon"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "href"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("4.png"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("img")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "src"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("0.png"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("img")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "src"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("1.png"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("link")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "rel"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("stylesheet"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "href"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("1.css"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("link")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "rel"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("stylesheet"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "href"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("2.css"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("link")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "rel"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("stylesheet"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "href"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("3.css"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("link")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "rel"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("stylesheet"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "href"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("4.css"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("link")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "rel"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("stylesheet"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "href"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("5.css"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("link")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "rel"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("stylesheet"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "href"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("6.css"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("link")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "rel"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("stylesheet"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "href"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("7.css"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("head")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("body")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("p")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("hello"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("p")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("img")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "src"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("2.png"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("img")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "src"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("3.png"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("img")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "src"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("4.png"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("img")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "src"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("5.png"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("img")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "src"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("6.png"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("img")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "src"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("7.png"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("img")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "src"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("8.png"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("img")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "src"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("9.png"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "src"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("1.js"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "token script" }),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "src"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("2.js"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "token script" }),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "src"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("3.js"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "token script" }),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("img")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "src"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("3.png"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "token script" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token language-javascript" }, [
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "!"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "let"),
          /* @__PURE__ */ createTextVNode(" xhr "),
          /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "new"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token class-name" }, "XMLHttpRequest"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
          /* @__PURE__ */ createTextVNode("\n    xhr"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "open"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"GET"'),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"https://baidu.com"'),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
          /* @__PURE__ */ createTextVNode("\n    xhr"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "send"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
          /* @__PURE__ */ createTextVNode("\n    document"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "write"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"hi"'),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
          /* @__PURE__ */ createTextVNode("\n")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("link")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "rel"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("stylesheet"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "href"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("9.css"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("body")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("html")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
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
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "20"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "21"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "22"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "23"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "24"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "25"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "26"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "27"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "28"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "29"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "30"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "31"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "32"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "33"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "34"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "35"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "36"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "37"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "38"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "39"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "40"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "41"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "42"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_123 = /* @__PURE__ */ createBaseVNode("p", null, "\u4EE5\u4E0A\u9762\u7684 HTML \u4E3A\u4F8B\u7814\u7A76\u4F18\u5148\u52A0\u8F7D\u7684\u8FC7\u7A0B\u3002\u628A Chrome \u7684\u7F51\u7EDC\u901F\u5EA6\u8C03\u4E3A Fast 3G\uFF0C\u8BA9\u52A0\u8F7D\u901F\u5EA6\u964D\u4F4E\uFF0C\u4EE5\u4FBF\u66F4\u597D\u5730\u89C2\u5BDF\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u7ED3\u679C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A", -1);
const _hoisted_124 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_2,
    alt: "Demo \u52A0\u8F7D\u7ED3\u679C"
  })
], -1);
const _hoisted_125 = /* @__PURE__ */ createBaseVNode("p", null, "\u4ECE\u4E0A\u56FE\u53EF\u4EE5\u53D1\u73B0\u4EE5\u4E0B\u7279\u70B9\uFF1A", -1);
const _hoisted_126 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u6BCF\u4E2A\u57DF\u6BCF\u6B21\u6700\u591A\u540C\u65F6\u52A0\u8F7D 6 \u4E2A\u8D44\u6E90\uFF08\u4EC5\u5728 http/1.1 \u65F6\uFF09"),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("CSS \u5177\u6709\u6700\u9AD8\u7684\u4F18\u5148\u7EA7\uFF0C\u6700\u5148\u52A0\u8F7D\uFF0C\u5373\u4F7F\u662F\u653E\u5728\u6700\u540E\u9762"),
    /* @__PURE__ */ createBaseVNode("code", null, "9.css"),
    /* @__PURE__ */ createTextVNode("\u4E5F\u662F\u6BD4\u524D\u9762\u8D44\u6E90\u5148\u5F00\u59CB\u52A0\u8F7D")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, "JS \u6BD4\u56FE\u7247\u4F18\u5148\u52A0\u8F7D\uFF0C\u5373\u4F7F\u51FA\u73B0\u5F97\u6BD4\u56FE\u7247\u665A"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u53EA\u6709\u7B49 CSS \u90FD\u52A0\u8F7D\u5B8C\u4E86\uFF0C\u624D\u80FD\u52A0\u8F7D\u5176\u5B83\u7684\u8D44\u6E90\uFF0C\u5373\u4F7F\u8FD9\u4E2A\u65F6\u5019\u6CA1\u6709\u8FBE\u5230 6 \u4E2A\u7684\u9650\u5236"),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "head"),
    /* @__PURE__ */ createTextVNode("\u91CC\u9762\u7684\u975E\u9AD8\u4F18\u5316\u7EA7\u7684\u8D44\u6E90\u6700\u591A\u80FD\u5148\u52A0\u8F7D\u4E00\u5F20\uFF08"),
    /* @__PURE__ */ createBaseVNode("code", null, "0.png"),
    /* @__PURE__ */ createTextVNode("\uFF09")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("XHR \u7684\u8D44\u6E90\u867D\u7136\u5177\u6709\u9AD8\u4F18\u5148\u7EA7\uFF0C\u4F46\u662F\u7531\u4E8E\u5B83\u662F\u6392\u5728"),
    /* @__PURE__ */ createBaseVNode("code", null, "3.js"),
    /* @__PURE__ */ createTextVNode("\u540E\u9762\u7684\uFF0CJS \u7684\u6267\u884C\u662F\u540C\u6B65\u7684\uFF0C\u6240\u4EE5\u5B83\u6392\u5F97\u6BD4\u8F83\u9760\u540E\uFF0C\u5982\u679C\u628A\u5B83\u6392\u5728"),
    /* @__PURE__ */ createBaseVNode("code", null, "1.js"),
    /* @__PURE__ */ createTextVNode("\u524D\u9762\uFF0C\u90A3\u4E48\u5B83\u4E5F\u4F1A\u6BD4\u56FE\u7247\u5148\u52A0\u8F7D\u3002")
  ])
], -1);
const _hoisted_127 = /* @__PURE__ */ createBaseVNode("p", null, "\u4E3A\u4EC0\u4E48\u662F\u8FD9\u6837\u5462\uFF1F\u6211\u4EEC\u4ECE\u6E90\u7801\u5BFB\u627E\u7B54\u6848\u3002", -1);
const _hoisted_128 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u9996\u5148\u8BA4\u6E05\u51E0\u4E2A\u6982\u5FF5\uFF0C\u8BF7\u6C42\u53EF\u5206\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "delayable"),
  /* @__PURE__ */ createTextVNode("\u548C"),
  /* @__PURE__ */ createBaseVNode("code", null, "none-delayable"),
  /* @__PURE__ */ createTextVNode("\u4E24\u79CD:")
], -1);
const _hoisted_129 = /* @__PURE__ */ createBaseVNode("div", { class: "language-c ext-c line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-c" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// The priority level below which resources are considered to be delayable."),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "static"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
      /* @__PURE__ */ createTextVNode(" net"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("RequestPriority\n    kDelayablePriorityThreshold "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(" net"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("MEDIUM"),
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_130 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5728\u4F18\u5148\u7EA7\u5728 Net:Medium \u4EE5\u4E0B\u7684\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "delayable"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u5373\u53EF\u63A8\u8FDF\u7684\uFF0C\u800C\u5927\u4E8E\u7B49\u4E8E Medium \u7684\u4E3A"),
  /* @__PURE__ */ createBaseVNode("code", null, "non-delayable"),
  /* @__PURE__ */ createTextVNode("\u7684\u3002\u56E0\u6B64\u7ED3\u5408 Net Priority\uFF0C\u6211\u4EEC\u77E5\u9053 CSS/JavaScript \u662F\u4E0D\u53EF\u63A8\u8FDF\u7684\uFF0C\u800C\u56FE\u7247\u3001`\u53EF\u63A8\u8FDF\u52A0\u8F7D\u7684\u3002")
], -1);
const _hoisted_131 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u8FD8\u6709\u4E00\u79CD\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "layout-blocking"),
  /* @__PURE__ */ createTextVNode("\u7684\u8BF7\u6C42\uFF1A")
], -1);
const _hoisted_132 = /* @__PURE__ */ createBaseVNode("div", { class: "language-c ext-c line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-c" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// The priority level above which resources are considered layout-blocking if"),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// the html_body has not started."),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "static"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
      /* @__PURE__ */ createTextVNode(" net"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("RequestPriority\n    kLayoutBlockingPriorityThreshold "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
      /* @__PURE__ */ createTextVNode(" net"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
      /* @__PURE__ */ createTextVNode("MEDIUM"),
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_133 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "layout-blocking"),
  /* @__PURE__ */ createTextVNode("\u7684\u8BF7\u6C42\u662F\u6307\u8FD8\u6CA1\u6709\u89E3\u6790\u5230"),
  /* @__PURE__ */ createBaseVNode("code", null, "body"),
  /* @__PURE__ */ createTextVNode("\u6807\u7B7E\u4E14\u4F18\u5148\u7EA7\u5728 Medium \u4E4B\u4E0A\u7684\u8BF7\u6C42\uFF0C\u6BD4\u5982"),
  /* @__PURE__ */ createBaseVNode("code", null, "body"),
  /* @__PURE__ */ createTextVNode("\u4E4B\u524D\u7684 CSS \u8BF7\u6C42\u3002")
], -1);
const _hoisted_134 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u7136\u540E\uFF0C\u4E0A\u9762\u63D0\u5230\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "ShouldStartRequest"),
  /* @__PURE__ */ createTextVNode("\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u662F\u89C4\u5212\u8D44\u6E90\u52A0\u8F7D\u987A\u5E8F\u6700\u4E3B\u8981\u7684\u51FD\u6570\uFF0C\u4ECE\u6E90\u7801\u6CE8\u91CA\u53EF\u4EE5\u77E5\u9053\u5B83\u5927\u6982\u7684\u8FC7\u7A0B\uFF1A")
], -1);
const _hoisted_135 = /* @__PURE__ */ createBaseVNode("div", { class: "language-c ext-c line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-c" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// ShouldStartRequest is the main scheduling algorithm."),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Requests are evaluated on five attributes:"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// 1. Non-delayable requests:"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//   * Synchronous requests."),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//   * Non-HTTP[S] requests."),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// 2. Requests to request-priority-capable origin servers."),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// 3. High-priority requests:"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//   * Higher priority requests (> net::LOW)."),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// 4. Layout-blocking requests:"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//   * High-priority requests (> net::MEDIUM) initiated before the renderer has"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//     a <body>."),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// 5. Low priority requests"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//  The following rules are followed:"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//  All types of requests:"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//   * Non-delayable, High-priority and request-priority capable requests are"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//     issued immediately."),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//   * Low priority requests are delayable."),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//   * While kInFlightNonDelayableRequestCountPerClientThreshold(=1)"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//     layout-blocking requests are loading or the body tag has not yet been"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//     parsed, limit the number of delayable requests that may be in flight"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//     to kMaxNumDelayableWhileLayoutBlockingPerClient(=1)."),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//   * If no high priority or layout-blocking requests are in flight, start"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//     loading delayable requests."),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//   * Never exceed 10 delayable requests in flight per client."),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//   * Never exceed 6 delayable requests for a given host."),
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
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "20"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "21"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "22"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "23"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "24"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "25"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "26"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "27"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "28"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "29"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "30"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "31"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "32"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "33"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_136 = /* @__PURE__ */ createBaseVNode("p", null, "\u4ECE\u4E0A\u9762\u7684\u6CE8\u91CA\u53EF\u4EE5\u5F97\u5230\u4EE5\u4E0B\u4FE1\u606F\uFF1A", -1);
const _hoisted_137 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "Non-delayable"),
    /* @__PURE__ */ createTextVNode("\u7684\u3001"),
    /* @__PURE__ */ createBaseVNode("code", null, "High-priority"),
    /* @__PURE__ */ createTextVNode("\u7684\u8BF7\u6C42(>= Medium)\u3001\u540C\u6B65\u8BF7\u6C42\u548C\u975E http(s) \u7684\u8BF7\u6C42\u80FD\u591F\u7ACB\u523B\u52A0\u8F7D")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u53EA\u8981\u6709\u4E00\u4E2A"),
    /* @__PURE__ */ createBaseVNode("code", null, "layout-blocking"),
    /* @__PURE__ */ createTextVNode("\u7684\u8D44\u6E90\u5728\u52A0\u8F7D\uFF0C\u6700\u591A\u53EA\u80FD\u52A0\u8F7D\u4E00\u4E2A"),
    /* @__PURE__ */ createBaseVNode("code", null, "delayable"),
    /* @__PURE__ */ createTextVNode("\u7684\u8D44\u6E90\uFF0C\u8FD9\u4E2A\u5C31\u89E3\u91CA\u4E86\u4E3A\u4EC0\u4E48"),
    /* @__PURE__ */ createBaseVNode("code", null, "0.png"),
    /* @__PURE__ */ createTextVNode("\u80FD\u591F\u5148\u52A0\u8F7D")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u53EA\u6709\u5F53"),
    /* @__PURE__ */ createBaseVNode("code", null, "layout-blocking"),
    /* @__PURE__ */ createTextVNode("\u548C"),
    /* @__PURE__ */ createBaseVNode("code", null, "High-priority"),
    /* @__PURE__ */ createTextVNode("\u7684\u8D44\u6E90\u52A0\u8F7D\u5B8C\u6210\u4E86\uFF0C\u624D\u80FD\u5F00\u59CB\u52A0\u8F7D"),
    /* @__PURE__ */ createBaseVNode("code", null, "delayable"),
    /* @__PURE__ */ createTextVNode("\u7684\u8D44\u6E90\uFF0C\u8FD9\u4E2A\u5C31\u89E3\u91CA\u4E86\u4E3A\u4EC0\u4E48\u8981\u7B49 CSS \u52A0\u8F7D\u5B8C\u4E86\u624D\u80FD\u52A0\u8F7D\u5176\u5B83\u7684 js \u548C\u56FE\u7247")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u540C\u65F6\u52A0\u8F7D\u7684"),
    /* @__PURE__ */ createBaseVNode("code", null, "delayable"),
    /* @__PURE__ */ createTextVNode("\u8D44\u6E90\u540C\u4E00\u4E2A\u57DF\u53EA\u80FD\u6709 6 \u4E2A\uFF0C\u540C\u4E00\u4E2A"),
    /* @__PURE__ */ createBaseVNode("code", null, "client"),
    /* @__PURE__ */ createTextVNode("\u5373\u540C\u4E00\u4E2A\u9875\u9762\u6700\u591A\u53EA\u80FD\u6709 10 \u4E2A\uFF0C\u5426\u5219\u8981\u8FDB\u884C\u6392\u961F")
  ])
], -1);
const _hoisted_138 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u6CE8\u610F\u8FD9\u91CC\u8BF4\u7684\u5F00\u59CB\u52A0\u8F7D\uFF0C\u5E76\u4E0D\u662F\u8BF4\u80FD\u591F\u5F00\u59CB\u8BF7\u6C42\u5EFA\u7ACB\u8FDE\u63A5\u4E86\u3002\u6E90\u7801\u91CC\u9762\u53EB"),
  /* @__PURE__ */ createBaseVNode("code", null, "in flight"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u5728\u98DE\u884C\u4E2D\uFF0C\u800C\u4E0D\u662F\u53EB"),
  /* @__PURE__ */ createBaseVNode("code", null, "in request"),
  /* @__PURE__ */ createTextVNode("\u4E4B\u7C7B\u7684\uFF0C\u80FD\u591F\u8FDB\u884C"),
  /* @__PURE__ */ createBaseVNode("code", null, "in flight"),
  /* @__PURE__ */ createTextVNode("\u7684\u8BF7\u6C42\u662F\u6307\u90A3\u4E9B\u4E0D\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "queue"),
  /* @__PURE__ */ createTextVNode("\u7684\u8BF7\u6C42\uFF0C\u5982\u4E0B\u56FE\uFF1A")
], -1);
const _hoisted_139 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_2,
    alt: "Demo \u52A0\u8F7D\u7ED3\u679C"
  })
], -1);
const _hoisted_140 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u767D\u8272\u6761\u662F\u6307"),
  /* @__PURE__ */ createBaseVNode("code", null, "queue"),
  /* @__PURE__ */ createTextVNode("\u7684\u65F6\u95F4\u6BB5\uFF0C\u800C\u7070\u8272\u7684\u662F\u5DF2\u7ECF"),
  /* @__PURE__ */ createBaseVNode("code", null, "in flight"),
  /* @__PURE__ */ createTextVNode("\u4E86\u4F46\u53D7\u5230\u540C\u57DF\u53EA\u80FD\u6700\u591A\u53EA\u80FD\u5EFA\u7ACB 6 \u4E2ATCP\u8FDE\u63A5\u7B49\u7684\u5F71\u54CD\u800C\u8FDB\u5165\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "stalled"),
  /* @__PURE__ */ createTextVNode("\u72B6\u6001\uFF0C\u7EFF\u8272\u662F TTFB\uFF08Time to First Byte\uFF09\u4ECE\u5F00\u59CB\u5EFA\u7ACB TCP \u8FDE\u63A5\u5230\u6536\u5230\u7B2C\u4E00\u4E2A\u5B57\u8282\u7684\u65F6\u95F4\uFF0C\u84DD\u8272\u662F\u4E0B\u8F7D\u7684\u65F6\u95F4\u3002")
], -1);
const _hoisted_141 = /* @__PURE__ */ createBaseVNode("p", null, "\u6211\u4EEC\u5DF2\u7ECF\u89E3\u91CA\u4E86\u5927\u90E8\u5206\u52A0\u8F7D\u7684\u7279\u70B9\u7684\u539F\u56E0\uFF0C\u5BF9\u7740\u4E0A\u9762\u90A3\u5F20\u56FE\u53EF\u4EE5\u518D\u91CD\u8FF0\u4E00\u6B21\uFF1A", -1);
const _hoisted_142 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u7531\u4E8E"),
    /* @__PURE__ */ createBaseVNode("code", null, "1.css"),
    /* @__PURE__ */ createTextVNode("\u5230"),
    /* @__PURE__ */ createBaseVNode("code", null, "9.css"),
    /* @__PURE__ */ createTextVNode("\u8FD9\u51E0\u4E2A CSS \u6587\u4EF6\u662F High-priority \u6216\u8005\u662F Non-delayable \u7684\u8BF7\u6C42\uFF0C\u6240\u4EE5\u9A6C\u4E0A"),
    /* @__PURE__ */ createBaseVNode("code", null, "in flight"),
    /* @__PURE__ */ createTextVNode("\uFF0C\u4F46\u662F\u8FD8\u53D7\u5230\u4E86\u540C\u4E00\u4E2A\u57DF\u6700\u591A\u53EA\u80FD\u6709 6 \u4E2A\u7684\u9650\u5236\uFF0C\u6240\u4EE5"),
    /* @__PURE__ */ createBaseVNode("code", null, "6/7/9.css"),
    /* @__PURE__ */ createTextVNode("\u8FD9\u4E09\u4E2A\u8FDB\u5165"),
    /* @__PURE__ */ createBaseVNode("code", null, "stalled"),
    /* @__PURE__ */ createTextVNode("\u7684\u72B6\u6001")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "1.css"),
    /* @__PURE__ */ createTextVNode("\u5230"),
    /* @__PURE__ */ createBaseVNode("code", null, "5.css"),
    /* @__PURE__ */ createTextVNode("\u662F"),
    /* @__PURE__ */ createBaseVNode("code", null, "layout-blocking"),
    /* @__PURE__ */ createTextVNode("\u7684\uFF0C\u6240\u4EE5\u6700\u591A\u53EA\u80FD\u518D\u52A0\u8F7D\u4E00\u4E2A"),
    /* @__PURE__ */ createBaseVNode("code", null, "delayable"),
    /* @__PURE__ */ createTextVNode("\u7684"),
    /* @__PURE__ */ createBaseVNode("code", null, "0.png"),
    /* @__PURE__ */ createTextVNode("\uFF0C\u5728\u5B83\u76F8\u90BB\u7684"),
    /* @__PURE__ */ createBaseVNode("code", null, "1.png"),
    /* @__PURE__ */ createTextVNode("\u5C31\u5F97\u6392\u961F\u4E86")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u7B49\u5230 High-priority \u548C"),
    /* @__PURE__ */ createBaseVNode("code", null, "layout-blocking"),
    /* @__PURE__ */ createTextVNode("\u7684\u8D44\u6E90"),
    /* @__PURE__ */ createBaseVNode("code", null, "7.css"),
    /* @__PURE__ */ createTextVNode("/"),
    /* @__PURE__ */ createBaseVNode("code", null, "9.css"),
    /* @__PURE__ */ createTextVNode("/"),
    /* @__PURE__ */ createBaseVNode("code", null, "1.js"),
    /* @__PURE__ */ createTextVNode("\u52A0\u8F7D\u5B8C\u4E86\uFF0C\u5C31\u5F00\u59CB\u52A0\u8F7D"),
    /* @__PURE__ */ createBaseVNode("code", null, "delayable"),
    /* @__PURE__ */ createTextVNode("\u7684\u8D44\u6E90\uFF0C\u4E3B\u8981\u662F\u56FE\u7247\u3002")
  ])
], -1);
const _hoisted_143 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u8FD9\u91CC\u6709\u4E2A\u95EE\u9898\uFF0C\u4E3A\u4EC0\u4E48"),
  /* @__PURE__ */ createBaseVNode("code", null, "1.js"),
  /* @__PURE__ */ createTextVNode("\u662F High-priority \u7684\uFF0C\u800C"),
  /* @__PURE__ */ createBaseVNode("code", null, "2.js"),
  /* @__PURE__ */ createTextVNode("\u548C"),
  /* @__PURE__ */ createBaseVNode("code", null, "3.js"),
  /* @__PURE__ */ createTextVNode("\u5374\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "delayable"),
  /* @__PURE__ */ createTextVNode("\u7684\uFF1F\u4E3A\u6B64\u5728\u6E90\u7801\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "ShouldStartRequest"),
  /* @__PURE__ */ createTextVNode("\u51FD\u6570\u91CC\u9762\u6DFB\u52A0\u4E00\u4E9B\u4EE3\u7801\uFF0C\u628A\u6BCF\u6B21\u5224\u65AD\u8BF7\u6C42\u7684\u4E00\u4E9B\u5173\u952E\u4FE1\u606F\u6253\u5370\u51FA\u6765\uFF1A")
], -1);
const _hoisted_144 = /* @__PURE__ */ createBaseVNode("div", { class: "language-c ext-c line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-c" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createTextVNode("   "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "LOG"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("INFO"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<<"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"url: "'),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<<"),
      /* @__PURE__ */ createTextVNode(" url_request"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "url"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "spec"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<<"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '" priority: "'),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<<"),
      /* @__PURE__ */ createTextVNode(" url_request"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "priority"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<<"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '" has_html_body_: "'),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<<"),
      /* @__PURE__ */ createTextVNode(" has_html_body_ "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<<"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '" delayable: "'),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<<"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "RequestAttributesAreSet"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("request"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "->"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "attributes"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode(" kAttributeDelayable"),
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_145 = /* @__PURE__ */ createBaseVNode("p", null, "\u628A\u6253\u5370\u51FA\u6765\u7684\u4FE1\u606F\u6309\u987A\u5E8F\u753B\u6210\u4EE5\u4E0B\u8868\u683C\uFF1A", -1);
const _hoisted_146 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_3,
    alt: "ShouldStartRequest\u65E5\u5FD7"
  })
], -1);
const _hoisted_147 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "1.js"),
  /* @__PURE__ */ createTextVNode("\u7684\u4F18\u5148\u7EA7\u4E00\u5F00\u59CB\u662F Low \u7684\uFF0C\u5373\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "delayable"),
  /* @__PURE__ */ createTextVNode("\u7684\uFF0C\u4F46\u662F\u540E\u9762\u53C8\u53D8\u6210\u4E86 Medium \u5C31\u4E0D\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "delayable"),
  /* @__PURE__ */ createTextVNode("\u4E86\uFF0C\u662F High-priority\u3002\u4E3A\u4EC0\u4E48\u5B83\u7684\u4F18\u5148\u7EA7\u80FD\u591F\u63D0\u9AD8\u5462\uFF1F\u4E00\u5F00\u59CB\u662F Low \u662F\u56E0\u4E3A\u5B83\u662F\u63A8\u6D4B\u52A0\u8F7D\u7684\uFF0C\u6240\u4EE5\u662F\u4F18\u5148\u7EA7\u6BD4\u8F83\u4F4E\uFF0C\u4F46\u662F\u5F53 DOM \u6784\u5EFA\u5230\u90A3\u91CC\u7684\u65F6\u5019\u5B83\u5C31\u4E0D\u662F\u63A8\u6D4B\u52A0\u8F7D\u4E86\uFF0C\u800C\u662F\u53D8\u6210\u6B63\u5E38\u7684 JS \u52A0\u8F7D\u4E86\uFF0C\u6240\u4EE5\u5B83\u7684\u4F18\u5148\u7EA7\u53D8\u6210\u4E86 Medium\uFF0C\u8FD9\u4E2A\u53EF\u4EE5\u4ECE"),
  /* @__PURE__ */ createBaseVNode("code", null, "has_html_body"),
  /* @__PURE__ */ createTextVNode("\u6807\u7B7E\u8FDB\u884C\u63A8\u6D4B\uFF0C\u800C"),
  /* @__PURE__ */ createBaseVNode("code", null, "2.js"),
  /* @__PURE__ */ createTextVNode("\u8981\u7B49\u5230"),
  /* @__PURE__ */ createBaseVNode("code", null, "1.js"),
  /* @__PURE__ */ createTextVNode("\u4E0B\u8F7D\u548C\u89E3\u6790\u5B8C\uFF0C\u5B83\u624D\u662F\u6B63\u5E38\u52A0\u8F7D\uFF0C\u5426\u5219\u8FD8\u662F\u63A8\u6D4B\u52A0\u8F7D\uFF0C\u56E0\u6B64\u5B83\u7684\u4F18\u5148\u7EA7\u6CA1\u6709\u5F97\u5230\u63D0\u9AD8\u3002")
], -1);
const _hoisted_148 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u53EF\u4EE5\u770B\u5230\uFF0C\u5F53"),
  /* @__PURE__ */ createBaseVNode("code", null, "1.js"),
  /* @__PURE__ */ createTextVNode("\u52A0\u8F7D\u5B8C\u6210\u540E\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "2.js"),
  /* @__PURE__ */ createTextVNode("\u6CA1\u6709\u7ACB\u5373\u52A0\u8F7D\u3002\u56E0\u4E3A\u6B64\u65F6"),
  /* @__PURE__ */ createBaseVNode("code", null, "2.js"),
  /* @__PURE__ */ createTextVNode("\u8FD8\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "delayable"),
  /* @__PURE__ */ createTextVNode("\u7684\uFF0C\u800C"),
  /* @__PURE__ */ createBaseVNode("code", null, "layout-blocking"),
  /* @__PURE__ */ createTextVNode("\u548C"),
  /* @__PURE__ */ createBaseVNode("code", null, "High-priority"),
  /* @__PURE__ */ createTextVNode("\u7684\u8D44\u6E90\uFF08"),
  /* @__PURE__ */ createBaseVNode("code", null, "7.css"),
  /* @__PURE__ */ createTextVNode("\u548C"),
  /* @__PURE__ */ createBaseVNode("code", null, "9.css"),
  /* @__PURE__ */ createTextVNode("\uFF09\u52A0\u8F7D\u8FD8\u672A\u5B8C\u6210\uFF0C\u56E0\u6B64\u8FD8\u4E0D\u80FD\u52A0\u8F7D"),
  /* @__PURE__ */ createBaseVNode("code", null, "delayable"),
  /* @__PURE__ */ createTextVNode("\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "2.js"),
  /* @__PURE__ */ createTextVNode("\u3002\u9700\u8981\u7B49\u5230"),
  /* @__PURE__ */ createBaseVNode("code", null, "1.js"),
  /* @__PURE__ */ createTextVNode("\u6267\u884C\u5B8C\u6210\u540E\u89E3\u6790\u5230"),
  /* @__PURE__ */ createBaseVNode("code", null, "2.js"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u8FD9\u65F6"),
  /* @__PURE__ */ createBaseVNode("code", null, "2.js"),
  /* @__PURE__ */ createTextVNode("\u7684\u4F18\u5148\u7EA7\u53D8\u6210\u4E86 Medium\uFF0C\u5373\u4E0D\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "delayable"),
  /* @__PURE__ */ createTextVNode("\u7684\uFF0C\u56E0\u6B64\u5F00\u59CB\u52A0\u8F7D"),
  /* @__PURE__ */ createBaseVNode("code", null, "2.js"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_149 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u5728"),
  /* @__PURE__ */ createBaseVNode("code", null, "2.js"),
  /* @__PURE__ */ createTextVNode("\u521A\u5F00\u59CB\u52A0\u8F7D\u65F6\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "9.css"),
  /* @__PURE__ */ createTextVNode("\u8FD8\u672A\u52A0\u8F7D\u5B8C\u6210\uFF0C\u4E14"),
  /* @__PURE__ */ createBaseVNode("code", null, "3.js"),
  /* @__PURE__ */ createTextVNode("\u4ECD\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "delayable"),
  /* @__PURE__ */ createTextVNode("\u7684\uFF0C\u56E0\u6B64"),
  /* @__PURE__ */ createBaseVNode("code", null, "3.js"),
  /* @__PURE__ */ createTextVNode("\u8FD8\u662F\u4E0D\u80FD\u52A0\u8F7D\uFF0C\u9700\u8981\u7B49\u5F85"),
  /* @__PURE__ */ createBaseVNode("code", null, "9.css"),
  /* @__PURE__ */ createTextVNode("\u52A0\u8F7D\u5B8C\u6210\uFF0C\u4E4B\u540E"),
  /* @__PURE__ */ createBaseVNode("code", null, "3.js"),
  /* @__PURE__ */ createTextVNode("\u548C\u56FE\u7247\u7B49"),
  /* @__PURE__ */ createBaseVNode("code", null, "delayable"),
  /* @__PURE__ */ createTextVNode("\u7684\u8D44\u6E90\u624D\u80FD\u5F00\u59CB\u52A0\u8F7D\u3002")
], -1);
const _hoisted_150 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "preload\u3001prefetch",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#preload\u3001prefetch",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" preload\u3001prefetch")
], -1);
const _hoisted_151 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "preload",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#preload",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" preload")
], -1);
const _hoisted_152 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "<link>"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "rel"),
  /* @__PURE__ */ createTextVNode("\u5C5E\u6027\u7684\u5C5E\u6027\u503C"),
  /* @__PURE__ */ createBaseVNode("code", null, "preload"),
  /* @__PURE__ */ createTextVNode("\u80FD\u591F\u8BA9\u4F60\u5728\u4F60\u7684 HTML \u9875\u9762"),
  /* @__PURE__ */ createBaseVNode("code", null, "<head>"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u5185\u90E8\u4E66\u5199\u4E00\u4E9B\u58F0\u660E\u5F0F\u7684\u8D44\u6E90\u83B7\u53D6\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u6307\u660E\u54EA\u4E9B\u8D44\u6E90\u662F\u5728\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u540E\u5373\u523B\u9700\u8981\u7684\u3002\u5BF9\u4E8E\u8FD9\u79CD\u5373\u523B\u9700\u8981\u7684\u8D44\u6E90\uFF0C\u4F60\u53EF\u80FD\u5E0C\u671B\u5728\u9875\u9762\u52A0\u8F7D\u7684\u751F\u547D\u5468\u671F\u7684\u65E9\u671F\u9636\u6BB5\u5C31\u5F00\u59CB\u83B7\u53D6\uFF0C\u5728\u6D4F\u89C8\u5668\u7684\u4E3B\u6E32\u67D3\u673A\u5236\u4ECB\u5165\u524D\u5C31\u8FDB\u884C\u9884\u52A0\u8F7D\u3002\u8FD9\u4E00\u673A\u5236\u4F7F\u5F97\u8D44\u6E90\u53EF\u4EE5\u66F4\u65E9\u7684\u5F97\u5230\u52A0\u8F7D\u5E76\u53EF\u7528\uFF0C\u4E14\u66F4\u4E0D\u6613\u963B\u585E\u9875\u9762\u7684\u521D\u6B65\u6E32\u67D3\uFF0C\u8FDB\u800C\u63D0\u5347\u6027\u80FD\u3002")
], -1);
const _hoisted_153 = /* @__PURE__ */ createBaseVNode("div", { class: "language-html ext-html line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-html" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("head")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("meta")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "charset"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("utf-8"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("title")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("JS and CSS preload example"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("title")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("link")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "rel"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("preload"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "href"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("style.css"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "as"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("style"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("link")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "rel"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("preload"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "href"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("hello-world.png"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "as"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("script"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("link")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "rel"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("stylesheet"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "href"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("style.css"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("head")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("body")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "<!-- ... -->"),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("body")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
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
const _hoisted_154 = /* @__PURE__ */ createBaseVNode("p", null, "\u901A\u4FD7\u7684\u89E3\u91CA\uFF1A", -1);
const _hoisted_155 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u5047\u8BBE\u5728\u5982\u4E0B\u7684 HTML \u6587\u4EF6\u91CC\uFF0C"),
    /* @__PURE__ */ createBaseVNode("code", null, "style.css"),
    /* @__PURE__ */ createTextVNode("\u6709\u5F20\u80CC\u666F\u56FE\u7247"),
    /* @__PURE__ */ createBaseVNode("code", null, "hello-world.png")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u65E0"),
    /* @__PURE__ */ createBaseVNode("code", null, "preload"),
    /* @__PURE__ */ createTextVNode("\u65F6\uFF0C\u6570\u636E\u8BF7\u6C42\u7684\u987A\u5E8F\u4E3A\uFF1AHTML -> "),
    /* @__PURE__ */ createBaseVNode("code", null, "style.css"),
    /* @__PURE__ */ createTextVNode(" -> "),
    /* @__PURE__ */ createBaseVNode("code", null, "hello-world.png")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u6709\u9488\u5BF9"),
    /* @__PURE__ */ createBaseVNode("code", null, "hello-world.png"),
    /* @__PURE__ */ createTextVNode("\u7684"),
    /* @__PURE__ */ createBaseVNode("code", null, "preload"),
    /* @__PURE__ */ createTextVNode("\u65F6\uFF0C\u6570\u636E\u8BF7\u6C42\u7684\u987A\u5E8F\u4E3A\uFF1AHTML -> "),
    /* @__PURE__ */ createBaseVNode("code", null, "style.css"),
    /* @__PURE__ */ createTextVNode("\u3001"),
    /* @__PURE__ */ createBaseVNode("code", null, "hello-world.png")
  ])
], -1);
const _hoisted_156 = /* @__PURE__ */ createTextVNode("Reference: ");
const _hoisted_157 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Preloading_content",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_158 = /* @__PURE__ */ createTextVNode('MDN - \u901A\u8FC7rel="preload"\u8FDB\u884C\u5185\u5BB9\u9884\u52A0\u8F7D');
const _hoisted_159 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "prefetch",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#prefetch",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" prefetch")
], -1);
const _hoisted_160 = /* @__PURE__ */ createBaseVNode("p", null, "\u94FE\u63A5\u9884\u53D6\u662F\u4E00\u79CD\u6D4F\u89C8\u5668\u673A\u5236\uFF0C\u5176\u5229\u7528\u6D4F\u89C8\u5668\u7A7A\u95F2\u65F6\u95F4\u6765\u4E0B\u8F7D\u6216\u9884\u53D6\u7528\u6237\u5728\u4E0D\u4E45\u7684\u5C06\u6765\u53EF\u80FD\u8BBF\u95EE\u7684\u6587\u6863\u3002\u7F51\u9875\u5411\u6D4F\u89C8\u5668\u63D0\u4F9B\u4E00\u7EC4\u9884\u53D6\u63D0\u793A\uFF0C\u5E76\u5728\u6D4F\u89C8\u5668\u5B8C\u6210\u5F53\u524D\u9875\u9762\u7684\u52A0\u8F7D\u540E\u5F00\u59CB\u9759\u9ED8\u5730\u62C9\u53D6\u6307\u5B9A\u7684\u6587\u6863\u5E76\u5C06\u5176\u5B58\u50A8\u5728\u7F13\u5B58\u4E2D\u3002\u5F53\u7528\u6237\u8BBF\u95EE\u5176\u4E2D\u4E00\u4E2A\u9884\u53D6\u6587\u6863\u65F6\uFF0C\u4FBF\u53EF\u4EE5\u5FEB\u901F\u7684\u4ECE\u6D4F\u89C8\u5668\u7F13\u5B58\u4E2D\u5F97\u5230\u3002", -1);
const _hoisted_161 = /* @__PURE__ */ createTextVNode("Reference: ");
const _hoisted_162 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Link_prefetching_FAQ",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_163 = /* @__PURE__ */ createTextVNode("MDN - Link prefetching FAQ");
const _hoisted_164 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u5BF9\u6BD4",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5BF9\u6BD4",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5BF9\u6BD4")
], -1);
const _hoisted_165 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "preload"),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "\u9AD8\u4F18\u5148\u7EA7"),
      /* @__PURE__ */ createBaseVNode("li", null, "\u6D4F\u89C8\u5668\u9884\u5148\u8BF7\u6C42\u5F53\u524D\u9875\u5FC5\u987B\u9700\u8981\u7684\u8D44\u6E90\uFF0C\u4EE5\u907F\u514D\u5728\u7528\u5230\u7684\u65F6\u5019\u5B9E\u65F6\u53BB\u8BF7\u6C42"),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createTextVNode("\u5E94\u7528\u573A\u666F\uFF1A\u5047\u8BBE\u4E3B JS \u6587\u4EF6\u91CC\u4F1A\u52A8\u6001\u521B\u5EFA"),
        /* @__PURE__ */ createBaseVNode("code", null, "image"),
        /* @__PURE__ */ createTextVNode("\u6807\u7B7E\uFF0C\u5E76\u63D2\u5165\u5230 DOM \u91CC "),
        /* @__PURE__ */ createBaseVNode("ul", null, [
          /* @__PURE__ */ createBaseVNode("li", null, [
            /* @__PURE__ */ createTextVNode("\u4E0D\u91C7\u7528"),
            /* @__PURE__ */ createBaseVNode("code", null, "preload"),
            /* @__PURE__ */ createTextVNode("\uFF0C\u5219\u65F6\u95F4\u7EBF\u662F\u8FD9\u6837\u7684\uFF1A\u8BF7\u6C42\u4E3B JS \u6587\u4EF6 --> \u6267\u884C\u4E3B JS \u6587\u4EF6 --> \u521B\u5EFA"),
            /* @__PURE__ */ createBaseVNode("code", null, "image"),
            /* @__PURE__ */ createTextVNode("\u6807\u7B7E\u5E76\u63D2\u5165 DOM --> \u8BF7\u6C42"),
            /* @__PURE__ */ createBaseVNode("code", null, "image"),
            /* @__PURE__ */ createTextVNode("\u6587\u4EF6 --> \u6E32\u67D3\u5230\u9875\u9762")
          ]),
          /* @__PURE__ */ createBaseVNode("li", null, [
            /* @__PURE__ */ createTextVNode("\u91C7\u7528"),
            /* @__PURE__ */ createBaseVNode("code", null, "preload"),
            /* @__PURE__ */ createTextVNode("\u9884\u52A0\u8F7D"),
            /* @__PURE__ */ createBaseVNode("code", null, "image"),
            /* @__PURE__ */ createTextVNode("\uFF0C\u5219\u65F6\u95F4\u7EBF\u662F\u8FD9\u6837\u7684\uFF1A\u8BF7\u6C42\u4E3B JS \u6587\u4EF6\u3001"),
            /* @__PURE__ */ createBaseVNode("code", null, "image"),
            /* @__PURE__ */ createTextVNode("\u6587\u4EF6 --> \u521B\u5EFA"),
            /* @__PURE__ */ createBaseVNode("code", null, "image"),
            /* @__PURE__ */ createTextVNode("\u6807\u7B7E\u5E76\u63D2\u5165 DOM\uFF08\u6B64\u65F6"),
            /* @__PURE__ */ createBaseVNode("code", null, "image"),
            /* @__PURE__ */ createTextVNode("\u6587\u4EF6\u5DF2\u7ECF\u52A0\u8F7D\u597D\uFF09 --> \u6E32\u67D3\u5230\u9875\u9762")
          ])
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createTextVNode("\u4E0D\u4F1A\u963B\u585E\u6E32\u67D3\uFF0C\u4E0D\u4F1A\u963B\u585E"),
        /* @__PURE__ */ createBaseVNode("code", null, "window"),
        /* @__PURE__ */ createTextVNode("\u7684"),
        /* @__PURE__ */ createBaseVNode("code", null, "onload"),
        /* @__PURE__ */ createTextVNode("\u4E8B\u4EF6")
      ])
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "prefetch"),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "\u4F4E\u4F18\u5148\u7EA7"),
      /* @__PURE__ */ createBaseVNode("li", null, "\u6D4F\u89C8\u5668\u5728\u540E\u53F0\uFF08\u7A7A\u95F2\u65F6\uFF09\u83B7\u53D6\u5C06\u6765\u53EF\u80FD\u7528\u5F97\u5230\u7684\u8D44\u6E90\uFF0C\u5E76\u4E14\u5C06\u4ED6\u4EEC\u5B58\u50A8\u5728\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\u4E2D")
    ])
  ])
], -1);
const _hoisted_166 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "\u5E94\u7528",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5E94\u7528",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5E94\u7528")
], -1);
const _hoisted_167 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u4F7F\u7528"),
    /* @__PURE__ */ createBaseVNode("code", null, "preload"),
    /* @__PURE__ */ createTextVNode("\u52A0\u8F7D\u5B57\u4F53\uFF0C\u89E3\u51B3\u6587\u5B57\u95EA\u52A8\u7684\u95EE\u9898")
  ])
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
          createVNode(_component_RouterLink, { to: "#\u8D44\u6E90\u5206\u7C7B" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u8D44\u6E90\u8BF7\u6C42" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u9884\u5904\u7406\u8BF7\u6C42" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u8D44\u6E90\u6392\u961F\u7684\u539F\u56E0" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u8D44\u6E90\u8BF7\u6C42\u4F18\u5148\u7EA7" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u6700\u7EC8\u7684\u4F18\u5148\u7EA7" }, {
                    default: withCtx(() => [
                      _hoisted_8
                    ]),
                    _: 1
                  }),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createVNode(_component_RouterLink, { to: "#script-\u4F18\u5148\u7EA7" }, {
                        default: withCtx(() => [
                          _hoisted_9
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("li", null, [
                      createVNode(_component_RouterLink, { to: "#image-\u4F18\u5148\u7EA7" }, {
                        default: withCtx(() => [
                          _hoisted_10
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("li", null, [
                      createVNode(_component_RouterLink, { to: "#preload-as" }, {
                        default: withCtx(() => [
                          _hoisted_11
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u8BA1\u7B97\u8D44\u6E90\u52A0\u8F7D\u4F18\u5148\u7EA7" }, {
                    default: withCtx(() => [
                      _hoisted_12
                    ]),
                    _: 1
                  }),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createVNode(_component_RouterLink, { to: "#\u8D44\u6E90\u7684\u9ED8\u8BA4\u4F18\u5148\u7EA7" }, {
                        default: withCtx(() => [
                          _hoisted_13
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("li", null, [
                      createVNode(_component_RouterLink, { to: "#\u4F18\u5148\u7EA7\u8C03\u6574" }, {
                        default: withCtx(() => [
                          _hoisted_14
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u8F6C\u6362\u6210-net-\u7684\u4F18\u5148\u7EA7" }, {
                    default: withCtx(() => [
                      _hoisted_15
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u8D44\u6E90\u52A0\u8F7D" }, {
                    default: withCtx(() => [
                      _hoisted_16
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u793A\u4F8B" }, {
                    default: withCtx(() => [
                      _hoisted_17
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#preload\u3001prefetch" }, {
                default: withCtx(() => [
                  _hoisted_18
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#preload" }, {
                    default: withCtx(() => [
                      _hoisted_19
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#prefetch" }, {
                    default: withCtx(() => [
                      _hoisted_20
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u5BF9\u6BD4" }, {
                    default: withCtx(() => [
                      _hoisted_21
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u5E94\u7528" }, {
                    default: withCtx(() => [
                      _hoisted_22
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
    _hoisted_23,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_24, [
          _hoisted_25,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_26, [
          _hoisted_27,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_28, [
          _hoisted_29,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_30, [
          _hoisted_31,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_32,
    _hoisted_33,
    _hoisted_34,
    _hoisted_35,
    _hoisted_36,
    _hoisted_37,
    _hoisted_38,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_39, [
        _hoisted_40,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_41,
      _hoisted_42,
      _hoisted_43,
      _hoisted_44,
      _hoisted_45
    ]),
    _hoisted_46,
    _hoisted_47,
    _hoisted_48,
    _hoisted_49,
    _hoisted_50,
    _hoisted_51,
    _hoisted_52,
    createBaseVNode("p", null, [
      _hoisted_53,
      createBaseVNode("a", _hoisted_54, [
        _hoisted_55,
        createVNode(_component_OutboundLink)
      ])
    ]),
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
    createBaseVNode("p", null, [
      _hoisted_66,
      createBaseVNode("a", _hoisted_67, [
        _hoisted_68,
        createVNode(_component_OutboundLink)
      ])
    ]),
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
    createBaseVNode("p", null, [
      _hoisted_156,
      createBaseVNode("a", _hoisted_157, [
        _hoisted_158,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_159,
    _hoisted_160,
    createBaseVNode("p", null, [
      _hoisted_161,
      createBaseVNode("a", _hoisted_162, [
        _hoisted_163,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_164,
    _hoisted_165,
    _hoisted_166,
    _hoisted_167,
    createVNode(_component_global_config)
  ], 64);
}
var browserRequests_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { browserRequests_html as default };
