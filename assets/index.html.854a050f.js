import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, d as createStaticVNode, f as createTextVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h1><h2 id="\u7B80\u5355\u8BF7\u6C42\u548C\u975E\u7B80\u5355\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u8BF7\u6C42\u548C\u975E\u7B80\u5355\u8BF7\u6C42" aria-hidden="true">#</a> \u7B80\u5355\u8BF7\u6C42\u548C\u975E\u7B80\u5355\u8BF7\u6C42</h2><p>\u6D4F\u89C8\u5668\u5C06 CORS \u8BF7\u6C42\u5206\u6210\u4E24\u7C7B\uFF1A\u7B80\u5355\u8BF7\u6C42\uFF08<code>simple request</code>\uFF09\u548C\u975E\u7B80\u5355\u8BF7\u6C42\uFF08<code>not-so-simple request</code>\uFF09\u3002</p><p>\u7B80\u5355\u8BF7\u6C42\u4E0D\u4F1A\u53D1\u8D77\u9884\u68C0\u8BF7\u6C42\uFF0C\u800C\u975E\u7B80\u5355\u8BF7\u6C42\u9700\u8981\u5728\u53D1\u8D77\u5B9E\u9645\u8BF7\u6C42\u4E4B\u524D\uFF0C\u5FC5\u987B\u9996\u5148\u4F7F\u7528 OPTIONS \u65B9\u6CD5\u53D1\u8D77\u4E00\u4E2A\u9884\u68C0\u8BF7\u6C42\u5230\u670D\u52A1\u5668\uFF0C\u4EE5\u83B7\u77E5\u670D\u52A1\u5668\u662F\u5426\u5141\u8BB8\u8BE5\u5B9E\u9645\u8BF7\u6C42\u3002&quot;\u9884\u68C0\u8BF7\u6C42\u201C\u7684\u4F7F\u7528\uFF0C\u53EF\u4EE5\u907F\u514D\u8DE8\u57DF\u8BF7\u6C42\u5BF9\u670D\u52A1\u5668\u7684\u7528\u6237\u6570\u636E\u4EA7\u751F\u672A\u9884\u671F\u7684\u5F71\u54CD\u3002</p><p>\u82E5\u8BF7\u6C42\u6EE1\u8DB3\u6240\u6709\u4E0B\u8FF0\u6761\u4EF6\uFF0C\u5219\u8BE5\u8BF7\u6C42\u53EF\u89C6\u4E3A\u201C\u7B80\u5355\u8BF7\u6C42\u201D\uFF1A</p>', 5);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("\u4F7F\u7528\u4E0B\u5217\u65B9\u6CD5\u4E4B\u4E00\uFF1A "),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, "GET"),
    /* @__PURE__ */ createBaseVNode("li", null, "HEAD"),
    /* @__PURE__ */ createBaseVNode("li", null, "POST")
  ])
], -1);
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u9664\u4E86\u88AB\u7528\u6237\u4EE3\u7406\u81EA\u52A8\u8BBE\u7F6E\u7684\u9996\u90E8\u5B57\u6BB5\uFF08\u4F8B\u5982 Connection \uFF0CUser-Agent\uFF09\u548C\u5728 Fetch \u89C4\u8303\u4E2D\u5B9A\u4E49\u4E3A");
const _hoisted_8 = {
  href: "https://fetch.spec.whatwg.org/#forbidden-header-name",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u7981\u7528\u9996\u90E8\u540D\u79F0");
const _hoisted_10 = /* @__PURE__ */ createStaticVNode("\u7684\u5176\u4ED6\u9996\u90E8\uFF0C\u5141\u8BB8\u4EBA\u4E3A\u8BBE\u7F6E\u7684\u5B57\u6BB5\u4E3A Fetch \u89C4\u8303\u5B9A\u4E49\u7684 \u5BF9 CORS \u5B89\u5168\u7684\u9996\u90E8\u5B57\u6BB5\u96C6\u5408\u3002\u8BE5\u96C6\u5408\u4E3A\uFF1A <ul><li>Accept</li><li>Accept-Language</li><li>Content-Language</li><li>Content-Type \uFF08\u9700\u8981\u6CE8\u610F\u989D\u5916\u7684\u9650\u5236\uFF09</li><li>DPR</li><li>Downlink</li><li>Save-Data</li><li>Viewport-Width</li><li>Width</li></ul>", 2);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("Content-Type \u7684\u503C\u4EC5\u9650\u4E8E\u4E0B\u5217\u4E09\u8005\u4E4B\u4E00\uFF1A "),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "text/plain")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "multipart/form-data")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "application/x-www-form-urlencoded")
    ])
  ])
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("\u8BF7\u6C42\u4E2D\u7684\u4EFB\u610F XMLHttpRequestUpload \u5BF9\u8C61\u5747\u6CA1\u6709\u6CE8\u518C\u4EFB\u4F55\u4E8B\u4EF6\u76D1\u542C\u5668\uFF1BXMLHttpRequestUpload \u5BF9\u8C61\u53EF\u4EE5\u4F7F\u7528"),
  /* @__PURE__ */ createBaseVNode("code", null, "XMLHttpRequest.upload"),
  /* @__PURE__ */ createTextVNode("\u5C5E\u6027\u8BBF\u95EE\u3002")
], -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("li", null, "\u8BF7\u6C42\u4E2D\u6CA1\u6709\u4F7F\u7528 ReadableStream \u5BF9\u8C61\u3002", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u53C2\u8003\u94FE\u63A5",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u53C2\u8003\u94FE\u63A5",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u53C2\u8003\u94FE\u63A5")
], -1);
const _hoisted_16 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_17 = /* @__PURE__ */ createTextVNode("MDN - \u8DE8\u6E90\u8D44\u6E90\u5171\u4EAB\uFF08CORS\uFF09");
const _hoisted_18 = {
  href: "http://www.ruanyifeng.com/blog/2016/04/cors.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_19 = /* @__PURE__ */ createTextVNode("\u962E\u4E00\u5CF0 - \u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB CORS \u8BE6\u89E3");
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      _hoisted_6,
      createBaseVNode("li", null, [
        _hoisted_7,
        createBaseVNode("a", _hoisted_8, [
          _hoisted_9,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_10
      ]),
      _hoisted_12,
      _hoisted_13,
      _hoisted_14
    ]),
    _hoisted_15,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_16, [
          _hoisted_17,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_18, [
          _hoisted_19,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
