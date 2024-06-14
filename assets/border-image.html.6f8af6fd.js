import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
var _imports_0 = "data:image/png;base64,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";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "border-image",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#border-image",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" border-image")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u5B66\u4E60\u6587\u6863");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u8FB9\u6846\u6E10\u53D8");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5B9E\u73B0\u65B9\u5F0F\u4E00\uFF1Aborder-image");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5B9E\u73B0\u65B9\u5F0F\u4E8C\uFF1Abackground*2");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u6548\u679C\u6F14\u793A");
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u5B66\u4E60\u6587\u6863",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5B66\u4E60\u6587\u6863",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5B66\u4E60\u6587\u6863")
], -1);
const _hoisted_9 = {
  href: "https://www.zhangxinxu.com/wordpress/2010/01/css3-border-image/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u5F20\u946B\u65ED - CSS3 border-image\u8BE6\u89E3\u3001\u5E94\u7528\u53CAjQuery\u63D2\u4EF6");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\uFF0C\u672C\u6587\u53EF\u4EE5\u8BF4\u662F\u5BF9 CSS3 \u4E2D");
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("code", null, "border-image", -1);
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u8BB2\u89E3\u7684\u975E\u5E38\u6DF1\u5165\u7EC6\u81F4\u7684\u4E00\u7BC7\u6587\u7AE0\uFF0C\u4F18\u5148\u63A8\u8350");
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("p", null, "\u4E0A\u6587\u4E2D\u672A\u63D0\u53CA\uFF1A", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("code", null, "border-image-slice", -1);
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u91CC\u7684");
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("code", null, "fill", -1);
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\uFF0C\u8BE6\u89C1");
const _hoisted_19 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createTextVNode("MDN - border-image-slice");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("\u5982\u679C");
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("code", null, "border-image-width", -1);
const _hoisted_23 = /* @__PURE__ */ createTextVNode("\u5C5E\u6027\u503C\u5927\u4E8E\u5143\u7D20\u7684");
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("code", null, "border-width", -1);
const _hoisted_25 = /* @__PURE__ */ createTextVNode("\uFF0C\u5219\u8FB9\u754C\u56FE\u50CF\u5C06\u4F1A\u5411");
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("code", null, "padding", -1);
const _hoisted_27 = /* @__PURE__ */ createTextVNode("\u8FB9\u7F18\u5EF6\u5C55\uFF0C\u8BE6\u89C1");
const _hoisted_28 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-width",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = /* @__PURE__ */ createTextVNode("MDN - border-image-width");
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("code", null, "border-image-outset", -1);
const _hoisted_31 = /* @__PURE__ */ createTextVNode("\u5C5E\u6027\u8BBE\u7F6E\u4E86");
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("code", null, "border-image", -1);
const _hoisted_33 = /* @__PURE__ */ createTextVNode("\u53EF\u4EE5\u8D85\u51FA\u5143\u7D20\u8FB9\u6846\u76D2\u5B50\uFF08");
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("code", null, "border box", -1);
const _hoisted_35 = /* @__PURE__ */ createTextVNode("\uFF09\u7684\u8DDD\u79BB\uFF0C\u8D85\u51FA\u90E8\u5206\u4E0D\u4F1A\u89E6\u53D1\u6EDA\u52A8\u6761\uFF0C\u4E5F\u4E0D\u4F1A\u6355\u83B7\u9F20\u6807\u4E8B\u4EF6\uFF0C\u8BE6\u89C1");
const _hoisted_36 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-outset",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_37 = /* @__PURE__ */ createTextVNode("MDN - border-image-outset");
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u8FB9\u6846\u6E10\u53D8",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8FB9\u6846\u6E10\u53D8",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8FB9\u6846\u6E10\u53D8")
], -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("p", null, "\u5047\u8BBE\u8981\u5B9E\u73B0\u4E00\u4E2A\u8FB9\u6846\u4ECE\u4E0A\u5230\u4E0B\u7684\u6E10\u53D8\u6548\u679C\uFF0C\u5982\u56FE\u6240\u793A\uFF1A", -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "\u8FB9\u6846\u6E10\u53D8\u6548\u679C\u56FE"
  })
], -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("p", null, "\u5176\u4E2D\uFF0C", -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u8FB9\u6846\u7684\u6E10\u53D8\u7531\u4E0A"),
    /* @__PURE__ */ createBaseVNode("code", null, "#9a5eff"),
    /* @__PURE__ */ createTextVNode("\u5230\u4E0B"),
    /* @__PURE__ */ createBaseVNode("code", null, "#702ff3")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u5185\u5BB9\u533A\u80CC\u666F\u662F"),
    /* @__PURE__ */ createBaseVNode("code", null, "blue"),
    /* @__PURE__ */ createTextVNode("\uFF0C\u5143\u7D20\u5916\u7684\u80CC\u666F\u662F"),
    /* @__PURE__ */ createBaseVNode("code", null, "#1d0277"),
    /* @__PURE__ */ createTextVNode("\uFF08\u53EA\u662F\u4E3A\u4E86\u80FD\u8BA9\u8FB9\u6846\u6E10\u53D8\u663E\u793A\u5730\u66F4\u52A0\u6E05\u695A\uFF0C\u4E0E\u8FB9\u6846\u6E10\u53D8\u5B9E\u73B0\u65E0\u5173\uFF09\u3002")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u5706\u89D2"),
    /* @__PURE__ */ createBaseVNode("code", null, "border-radius: 16px")
  ])
], -1);
const _hoisted_43 = /* @__PURE__ */ createTextVNode("\u8865\u5145\uFF1A");
const _hoisted_44 = {
  href: "https://juejin.cn/post/6844903972281516045",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_45 = /* @__PURE__ */ createTextVNode("\u6398\u91D1 - \u5DE7\u5999\u5B9E\u73B0\u5E26\u5706\u89D2\u7684\u6E10\u53D8\u8FB9\u6846");
const _hoisted_46 = /* @__PURE__ */ createTextVNode(" \u8FD9\u7BC7\u6587\u7AE0\u8BF4\u7684\u66F4\u52A0\u8BE6\u7EC6\uFF0C\u5B9E\u73B0\u65B9\u5F0F\u66F4\u591A\u3002");
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u5B9E\u73B0\u65B9\u5F0F\u4E00-border-image",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5B9E\u73B0\u65B9\u5F0F\u4E00-border-image",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5B9E\u73B0\u65B9\u5F0F\u4E00\uFF1Aborder-image")
], -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("div", { class: "language-html ext-html line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-html" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("background"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("example first-example"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("div")
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
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("div", { class: "language-less ext-less line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-less" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token selector" }, ".background"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "padding"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" 20px"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "background"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" #1d0277"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token selector" }, ".example"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "width"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" 700px"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "height"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" 30px"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token selector" }, "&.first-example"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "border"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" 2px solid"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "border-radius"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" 16px"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "border-image"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "linear-gradient"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("180deg"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode("#6c41eb 0%"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode(" #611dcf 100%"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createTextVNode(" 2"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "background"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" blue"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n        "),
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u53EF\u4EE5\u53D1\u73B0\uFF0C\u5C3D\u7BA1\u6211\u4EEC\u80FD\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "border-image"),
  /* @__PURE__ */ createTextVNode("+"),
  /* @__PURE__ */ createBaseVNode("code", null, "linear-gradient"),
  /* @__PURE__ */ createTextVNode("\u5B9E\u73B0\u4E86\u8FB9\u6846\u6E10\u53D8\uFF0C\u4F46\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "border-radius"),
  /* @__PURE__ */ createTextVNode("\u5374\u5931\u6548\u4E86\u3002")
], -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("W3C \u7684\u89C4\u8303\u91CC\u660E\u786E\u6307\u51FA\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "border-image"),
  /* @__PURE__ */ createTextVNode("\u4E0D\u53D7"),
  /* @__PURE__ */ createBaseVNode("code", null, "border-radius"),
  /* @__PURE__ */ createTextVNode("\u5F71\u54CD\u3002")
], -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("p", null, "A box's backgrounds, but not its border-image, are clipped to the appropriate curve (as determined by \u2018background-clip\u2019).", -1);
const _hoisted_53 = {
  href: "https://www.w3.org/TR/2010/WD-css3-background-20100612/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_54 = /* @__PURE__ */ createTextVNode("CSS Backgrounds and Borders Module Level 3 - W3C Working Draft 12 June 2010 - 4.4.2. Corner Clipping");
const _hoisted_55 = /* @__PURE__ */ createTextVNode("Although border images are not affected by ");
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("code", null, "border-radius", -1);
const _hoisted_57 = /* @__PURE__ */ createTextVNode("... ");
const _hoisted_58 = {
  href: "https://www.w3.org/TR/css-backgrounds-3/#corner-clipping",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_59 = /* @__PURE__ */ createTextVNode("CSS Backgrounds and Borders Module Level 3");
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u5B9E\u73B0\u65B9\u5F0F\u4E8C-background-2",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5B9E\u73B0\u65B9\u5F0F\u4E8C-background-2",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5B9E\u73B0\u65B9\u5F0F\u4E8C\uFF1Abackground*2")
], -1);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("div", { class: "language-less ext-less line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", { class: "language-less" }, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "token selector" }, ".background"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "padding"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" 20px"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "background"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" #1d0277"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token selector" }, ".example"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "width"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" 700px"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "height"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" 30px"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token selector" }, "&.second-example"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "padding"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" 2px"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "border-radius"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" 16px"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "background"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "linear-gradient"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
      /* @__PURE__ */ createTextVNode("180deg"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode("#6c41eb 0%"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
      /* @__PURE__ */ createTextVNode(" #611dcf 100%"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token selector" }, ".inner-second"),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
      /* @__PURE__ */ createTextVNode("\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "width"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" 100%"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "height"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" 100%"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "border-radius"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" 16px"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "background"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
      /* @__PURE__ */ createTextVNode(" blue"),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
      /* @__PURE__ */ createTextVNode("\n        "),
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
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u6548\u679C\u6F14\u793A",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6548\u679C\u6F14\u793A",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6548\u679C\u6F14\u793A")
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_examples_border_image_linear_gradient = resolveComponent("examples-border-image-linear-gradient");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5B66\u4E60\u6587\u6863" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u8FB9\u6846\u6E10\u53D8" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5B9E\u73B0\u65B9\u5F0F\u4E00-border-image" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5B9E\u73B0\u65B9\u5F0F\u4E8C-background-2" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6548\u679C\u6F14\u793A" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_8,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_9, [
          _hoisted_10,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_11,
        _hoisted_12,
        _hoisted_13
      ])
    ]),
    _hoisted_14,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_15,
        _hoisted_16,
        _hoisted_17,
        _hoisted_18,
        createBaseVNode("a", _hoisted_19, [
          _hoisted_20,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        _hoisted_21,
        _hoisted_22,
        _hoisted_23,
        _hoisted_24,
        _hoisted_25,
        _hoisted_26,
        _hoisted_27,
        createBaseVNode("a", _hoisted_28, [
          _hoisted_29,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        _hoisted_30,
        _hoisted_31,
        _hoisted_32,
        _hoisted_33,
        _hoisted_34,
        _hoisted_35,
        createBaseVNode("a", _hoisted_36, [
          _hoisted_37,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_38,
    _hoisted_39,
    _hoisted_40,
    _hoisted_41,
    _hoisted_42,
    createBaseVNode("p", null, [
      _hoisted_43,
      createBaseVNode("a", _hoisted_44, [
        _hoisted_45,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_46
    ]),
    _hoisted_47,
    _hoisted_48,
    _hoisted_49,
    _hoisted_50,
    _hoisted_51,
    createBaseVNode("blockquote", null, [
      _hoisted_52,
      createBaseVNode("p", null, [
        createBaseVNode("a", _hoisted_53, [
          _hoisted_54,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("p", null, [
        _hoisted_55,
        _hoisted_56,
        _hoisted_57,
        createBaseVNode("a", _hoisted_58, [
          _hoisted_59,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_60,
    _hoisted_61,
    _hoisted_62,
    createVNode(_component_examples_border_image_linear_gradient),
    createVNode(_component_global_config)
  ], 64);
}
var borderImage_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { borderImage_html as default };
