import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "javascript-\u8BED\u8A00\u76F8\u5173\u6587\u7AE0",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#javascript-\u8BED\u8A00\u76F8\u5173\u6587\u7AE0",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" JavaScript \u8BED\u8A00\u76F8\u5173\u6587\u7AE0")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("JavaScript Core");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("TypeScript");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u6846\u67B6");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Vue");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Vue \u751F\u6001");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Vue \u4F7F\u7528\u6280\u5DE7");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u4E8B\u4EF6\u5FAA\u73AF");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u9519\u8BEF\u5904\u7406\u548C\u76D1\u63A7");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u52A8\u753B");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u6027\u80FD");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("GPU \u52A0\u901F");
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "javascript-core",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#javascript-core",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" JavaScript Core")
], -1);
const _hoisted_15 = {
  href: "https://tech.meituan.com/2018/08/23/deep-understanding-of-jscore.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u6DF1\u5165\u7406\u89E3JSCore");
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<ul><li>Webkit \u5305\u542B WebCore\u3001JavaScript Core \u7B49\u6A21\u5757 <ul><li>WebCore \u662F\u6E32\u67D3\u5F15\u64CE\uFF0C\u5305\u542B HTML Parser\u3001CSS Parser \u7B49</li><li>JavaScript Core \u662F JS \u5F15\u64CE\uFF0C\u8D1F\u8D23\u89E3\u91CA\u6267\u884C JS\uFF0C\u5305\u542B Lexer\uFF08\u8BCD\u6CD5\u5206\u6790\uFF09\u3001Parser\uFF08\u8BED\u6CD5\u5206\u6790\uFF09\u3001LLInt \u548C JIT\uFF08\u89E3\u91CA\u6267\u884C\uFF09</li></ul></li><li>iOS \u4E2D\u53EF\u4EE5\u4F7F\u7528 JSCore \u7684\u5730\u65B9\u6709\u591A\u5904\uFF0C\u6BD4\u5982\u5C01\u88C5\u5728 UIWebView \u4E2D\u7684 JSCore\uFF0C\u5C01\u88C5\u5728 WKWebView \u4E2D\u7684 JSCore\uFF0C\u4EE5\u53CA\u7CFB\u7EDF\u63D0\u4F9B\u7684 JSCore\u3002iOS \u5B98\u65B9\u6587\u6863\u5BF9JSCore \u7684\u4ECB\u7ECD\u5F88\u7B80\u5355\uFF0C\u5176\u5B9E\u4E3B\u8981\u5C31\u662F\u7ED9 APP \u63D0\u4F9B\u4E86\u8C03\u7528 JS \u811A\u672C\u7684\u80FD\u529B\u3002</li><li>JSVirtualMachine\u3001JSContext\u3001JSValue <ul><li>\u4E00\u4E2A JSVirtualMachine\uFF08\u4EE5\u4E0B\u7B80\u79F0 JSVM\uFF09\u5B9E\u4F8B\u4EE3\u8868\u4E86\u4E00\u4E2A\u81EA\u5305\u542B\u7684 JS \u8FD0\u884C\u73AF\u5883\uFF0C\u6216\u8005\u662F\u4E00\u7CFB\u5217 JS \u8FD0\u884C\u6240\u9700\u7684\u8D44\u6E90\u3002\u8BE5\u7C7B\u6709\u4E24\u4E2A\u4E3B\u8981\u7684\u4F7F\u7528\u7528\u9014\uFF1A\u4E00\u662F\u652F\u6301\u5E76\u53D1\u7684 JS \u8C03\u7528\uFF08\u5305\u542B\u628A JS \u6E90\u4EE3\u7801\u7F16\u8BD1\u6210\u5B57\u8282\u7801\uFF09\uFF0C\u4E8C\u662F\u7BA1\u7406 JS \u548C Native \u4E4B\u95F4\u6865\u5BF9\u8C61\u7684\u5185\u5B58\u3002 <ul><li>\u5728 APP \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD0\u884C\u591A\u4E2A JSVM \u6765\u6267\u884C\u4E0D\u540C\u7684\u4EFB\u52A1\u3002\u800C\u4E14\u6BCF\u4E00\u4E2A JSContext \u90FD\u4ECE\u5C5E\u4E8E\u4E00\u4E2A JSVM\u3002\u4F46\u662F\u9700\u8981\u6CE8\u610F\u7684\u662F\u6BCF\u4E2A JSVM \u90FD\u6709\u81EA\u5DF1\u72EC\u7ACB\u7684\u5806\u7A7A\u95F4\uFF0CGC \u4E5F\u53EA\u80FD\u5904\u7406 JSVM \u5185\u90E8\u7684\u5BF9\u8C61\u3002\u6240\u4EE5\u8BF4\uFF0C\u4E0D\u540C\u7684 JSVM \u4E4B\u95F4\u662F\u65E0\u6CD5\u4F20\u9012\u503C\u7684\u3002</li><li>\u5728\u4E00\u4E2A JSVM \u4E2D\uFF0C\u53EA\u6709\u4E00\u6761\u7EBF\u7A0B\u53EF\u4EE5\u8DD1 JS \u4EE3\u7801\uFF0C\u6240\u4EE5\u6211\u4EEC\u65E0\u6CD5\u4F7F\u7528 JSVM \u8FDB\u884C\u591A\u7EBF\u7A0B\u5904\u7406 JS \u4EFB\u52A1\u3002\u5982\u679C\u6211\u4EEC\u9700\u8981\u591A\u7EBF\u7A0B\u5904\u7406 JS \u4EFB\u52A1\u7684\u573A\u666F\uFF0C\u5C31\u9700\u8981\u540C\u65F6\u751F\u6210\u591A\u4E2A JSVM\uFF0C\u4ECE\u800C\u8FBE\u5230\u591A\u7EBF\u7A0B\u5904\u7406\u7684\u76EE\u7684\u3002</li></ul></li><li>\u4E00\u4E2A JSContext \u8868\u793A\u4E86\u4E00\u6B21 JS \u7684\u6267\u884C\u73AF\u5883\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u521B\u5EFA\u4E00\u4E2A JSContext \u53BB\u8C03\u7528 JS \u811A\u672C\uFF0C\u8BBF\u95EE\u4E00\u4E9B JS \u5B9A\u4E49\u7684\u503C\u548C\u51FD\u6570\uFF0C\u540C\u65F6\u4E5F\u63D0\u4F9B\u4E86\u8BA9 JS \u8BBF\u95EE Native \u5BF9\u8C61\uFF0C\u65B9\u6CD5\u7684\u63A5\u53E3\u3002 <ul><li>\u6BCF\u4E2A JSContext \u90FD\u4ECE\u5C5E\u4E8E\u4E00\u4E2A JSVM\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 JSContext \u7684\u53EA\u8BFB\u5C5E\u6027 virtualMachine \u83B7\u5F97\u5F53\u524D JSContext \u7ED1\u5B9A\u7684 JSVM\u3002JSContext \u548C JSVM \u662F\u591A\u5BF9\u4E00\u7684\u5173\u7CFB\uFF0C\u4E00\u4E2A JSContext \u53EA\u80FD\u7ED1\u5B9A\u4E00\u4E2AJSVM\uFF0C\u4F46\u662F\u4E00\u4E2A JSVM \u53EF\u4EE5\u540C\u65F6\u6301\u6709\u591A\u4E2A JSContext\u3002</li><li>globalObject \u662F\u5F53\u524D\u6267\u884C JSContext \u7684\u5168\u5C40\u5BF9\u8C61\uFF08\u4F8B\u5982\u5728 WebKit \u4E2D\uFF0CJSContext \u7684 globalObject \u5C31\u662F\u5F53\u524D\u7684 Window \u5BF9\u8C61\uFF09\uFF0CJSContext \u53EA\u662F globalObject \u7684\u4E00\u5C42\u58F3</li><li>\u901A\u8FC7 KVC\uFF08Key-Value Coding\uFF0C\u5373\u952E\u503C\u7F16\u7801\uFF09\u7684\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5F53\u65F6 WebView \u7684 JSContext\uFF0C\u901A\u8FC7 JSContext\uFF08\u7684 evaluateScript API\uFF09\u53EF\u4EE5\u8FD0\u884C\u4E00\u6BB5 JS \u4EE3\u7801</li><li>\u901A\u8FC7 KVC \u7684\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u7ED9 JSContext \u585E\u8FDB\u53BB\u5F88\u591A\u5168\u5C40\u53D8\u91CF\u6216\u8005\u5168\u5C40\u51FD\u6570\uFF0C\u8FD9\u4E9B\u5168\u5C40\u53D8\u91CF\u548C\u51FD\u6570\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u5168\u5C40\u5BF9\u8C61 globalObject \u7684\u5C5E\u6027\u548C\u65B9\u6CD5</li></ul></li><li>JSValue \u5B9E\u4F8B\u662F\u4E00\u4E2A\u6307\u5411 JS \u503C\u7684\u5F15\u7528\u6307\u9488\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 JSValue \u7C7B\uFF0C\u5728 OC \u548C JS \u7684\u57FA\u7840\u6570\u636E\u7C7B\u578B\u4E4B\u95F4\u76F8\u4E92\u8F6C\u6362\u3002\u540C\u65F6\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u7C7B\uFF0C\u53BB\u521B\u5EFA\u5305\u88C5\u4E86 Native \u81EA\u5B9A\u4E49\u7C7B\u7684 JS \u5BF9\u8C61\uFF0C\u6216\u8005\u662F\u90A3\u4E9B\u7531 Native \u65B9\u6CD5\u6216\u8005 Block \u63D0\u4F9B\u5B9E\u73B0 JS \u65B9\u6CD5\u7684 JS \u5BF9\u8C61\u3002 <ul><li>JSCore \u7528 JSValue \u5728\u5E95\u5C42\u81EA\u52A8\u505A\u4E86 OC \u548C JS \u7684\u7C7B\u578B\u8F6C\u6362</li></ul></li></ul></li><li>JSExport <ul><li>\u5B9E\u73B0 JSExport \u534F\u8BAE\u53EF\u4EE5\u5F00\u653E OC \u7C7B\u548C\u5B83\u4EEC\u7684\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u7C7B\u65B9\u6CD5\uFF0C\u4EE5\u53CA\u5C5E\u6027\u7ED9 JS \u8C03\u7528\u3002 <ul><li>\u5982\u679C\u60F3\u5728 JS \u73AF\u5883\u4E2D\u4F7F\u7528 OC \u4E2D\u7684\u7C7B\u548C\u5BF9\u8C61\uFF0C\u9700\u8981\u5B83\u4EEC\u5B9E\u73B0 JSExport \u534F\u8BAE\uFF0C\u6765\u786E\u5B9A\u66B4\u9732\u7ED9 JS \u73AF\u5883\u4E2D\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</li><li>\u6BCF\u4E2A\u901A\u8FC7 JSExport \u66B4\u9732\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u5728\u8F6C\u6362\u6210 JSValue \u65F6\u90FD\u4F1A\u751F\u6210 Setter \u548C Getter \u65B9\u6CD5\uFF0C\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5185\u90FD\u662F Native \u4EE3\u7801\u3002</li><li>\u56E0\u6B64\uFF0C\u5F53\u6211\u4EEC\u5728 JS \u91CC\u8BBE\u7F6E\u6216\u8C03\u7528\u8FD9\u4E9B OC \u66B4\u9732\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\u65F6\uFF0C\u5B9E\u9645\u4E0A\u662F\u95F4\u63A5\u6267\u884C\u4E86 Native \u7684\u4EE3\u7801\u3002</li></ul></li></ul></li></ul><h2 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h2>', 2);
const _hoisted_19 = {
  href: "https://segmentfault.com/a/1190000023943952",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createTextVNode("\u7EC6\u6570 TS \u4E2D\u90A3\u4E9B\u5947\u602A\u7684\u7B26\u53F7");
const _hoisted_21 = {
  href: "https://zhuanlan.zhihu.com/p/20297283",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_22 = /* @__PURE__ */ createTextVNode("TypeScript \u4E2D\u7684 Decorator & \u5143\u6570\u636E\u53CD\u5C04\uFF1A\u4ECE\u5C0F\u767D\u5230\u4E13\u5BB6\uFF08\u90E8\u5206 I\uFF09");
const _hoisted_23 = /* @__PURE__ */ createStaticVNode('<h2 id="\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#\u6846\u67B6" aria-hidden="true">#</a> \u6846\u67B6</h2><h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h3><h4 id="vue-\u751F\u6001" tabindex="-1"><a class="header-anchor" href="#vue-\u751F\u6001" aria-hidden="true">#</a> Vue \u751F\u6001</h4>', 3);
const _hoisted_26 = {
  href: "https://zhuanlan.zhihu.com/p/146097763",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_27 = /* @__PURE__ */ createTextVNode("\u6DF1\u5165\u7406\u89E3 Vue3 Reactivity API");
const _hoisted_28 = {
  href: "https://www.zhihu.com/question/394062839/answer/1496127786",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = /* @__PURE__ */ createTextVNode("\u5982\u4F55\u770B\u5F85 Web \u5F00\u53D1\u6784\u5EFA\u5DE5\u5177 Vite\uFF1F");
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u7279\u6027 "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "\u4E0D\u9700\u8981\u6253\u5305"),
      /* @__PURE__ */ createBaseVNode("li", null, "\u6309\u9700\u7F16\u8BD1")
    ])
  ])
], -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("h4", {
  id: "vue-\u4F7F\u7528\u6280\u5DE7",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#vue-\u4F7F\u7528\u6280\u5DE7",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Vue \u4F7F\u7528\u6280\u5DE7")
], -1);
const _hoisted_32 = {
  href: "https://mp.weixin.qq.com/s/iQwTr5T95wPflJMT87ZObg",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_33 = /* @__PURE__ */ createTextVNode("\u63ED\u79D8 Vue.js \u4E5D\u4E2A\u6027\u80FD\u4F18\u5316\u6280\u5DE7");
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u4E8B\u4EF6\u5FAA\u73AF",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u4E8B\u4EF6\u5FAA\u73AF",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u4E8B\u4EF6\u5FAA\u73AF")
], -1);
const _hoisted_35 = {
  href: "https://github.com/dt-fe/weekly/issues/264",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_36 = /* @__PURE__ */ createTextVNode("\u7CBE\u8BFB\u300ATasks, microtasks, queues and schedules\u300B");
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u6587\u7AE0\u91CC\u63CF\u8FF0\u4E86 Tasks/Microtasks \u4E0E\u4E8B\u4EF6\u5192\u6CE1\u7684\u5173\u7CFB\uFF0C\u4EE5\u53CA\u6D4F\u89C8\u5668\u5BF9\u6B64\u5B9E\u73B0\u7684\u4E0D\u4E00\u81F4\u6027")
], -1);
const _hoisted_38 = {
  href: "https://juejin.im/post/6844904152779210766",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_39 = /* @__PURE__ */ createTextVNode("\u6D4F\u89C8\u5668\u7684 Event Loop \u5B8F\u4EFB\u52A1\uFF0C\u5FAE\u4EFB\u52A1\uFF0C\u4E8B\u4EF6\u5192\u6CE1");
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u6587\u7AE0\u91CC\u7684\u201C\u4E94.\u5F53 Event Loop \u9047\u4E0A\u4E8B\u4EF6\u5192\u6CE1\u201D\u8BF4\u660E\u4E86\u4E8B\u4EF6\u5192\u6CE1\u4E5F\u662F\u4E2A\u5B8F\u4EFB\u52A1"),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u4E8B\u4EF6\u5192\u6CE1\u7684\u5B8F\u4EFB\u52A1\u662F\u7ACB\u5373\u52A0\u5165\u5230\u4EFB\u52A1\u961F\u5217\u7684\uFF0C\u800C"),
    /* @__PURE__ */ createBaseVNode("code", null, "setTimeout"),
    /* @__PURE__ */ createTextVNode("\u662F\u5728"),
    /* @__PURE__ */ createBaseVNode("code", null, "delay"),
    /* @__PURE__ */ createTextVNode("\u65F6\u95F4\uFF08\u6709\u6700\u5C0F\u5EF6\u8FDF\u65F6\u95F4\uFF09\u52A0\u5165\u4EFB\u52A1\u961F\u5217\u7684\uFF0C\u56E0\u6B64\u4E8B\u4EF6\u5192\u6CE1\u4F18\u5148\u4E8E"),
    /* @__PURE__ */ createBaseVNode("code", null, "setTimeout")
  ])
], -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u9519\u8BEF\u5904\u7406\u548C\u76D1\u63A7",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u9519\u8BEF\u5904\u7406\u548C\u76D1\u63A7",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u9519\u8BEF\u5904\u7406\u548C\u76D1\u63A7")
], -1);
const _hoisted_42 = {
  href: "https://cdc.tencent.com/2018/09/13/frontend-exception-monitor-research/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_43 = /* @__PURE__ */ createTextVNode("\u5B8C\u5584\u7684\u524D\u7AEF\u5F02\u5E38\u76D1\u63A7\u89E3\u51B3\u65B9\u6848");
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u52A8\u753B",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u52A8\u753B",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u52A8\u753B")
], -1);
const _hoisted_45 = {
  href: "https://juejin.cn/post/6914835547588395022",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_46 = /* @__PURE__ */ createTextVNode("\u5256\u6790 lottie-web \u52A8\u753B\u5B9E\u73B0\u539F\u7406");
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u6027\u80FD",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6027\u80FD",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6027\u80FD")
], -1);
const _hoisted_48 = {
  href: "https://mp.weixin.qq.com/s/d-v7QgmP9aGnQr2nbpfzjQ",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_49 = /* @__PURE__ */ createTextVNode("\u524D\u7AEF\u65E9\u8BFB\u8BFE - \u3010\u7B2C1920\u671F\u3011\u5982\u4F55\u76D1\u63A7\u7F51\u9875\u7684\u5361\u987F\uFF1F");
const _hoisted_50 = {
  href: "https://mp.weixin.qq.com/s/EscBLM3hAoCrYn9r9zFmng",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_51 = /* @__PURE__ */ createTextVNode("\u524D\u7AEF\u65E9\u8BFB\u8BFE - \u3010\u7B2C1915\u671F\u3011\u5982\u4F55\u76D1\u63A7\u7F51\u9875\u5D29\u6E83\uFF1F");
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "gpu-\u52A0\u901F",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#gpu-\u52A0\u901F",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" GPU \u52A0\u901F")
], -1);
const _hoisted_53 = {
  href: "http://www.chromium.org/developers/design-documents/gpu-accelerated-compositing-in-chrome?spm=taofed.bloginfo.blog.1.68c75ac8ZPJVT1",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_54 = /* @__PURE__ */ createTextVNode("\u3010\u5B98\u65B9\u3011Chrome \u786C\u4EF6\u52A0\u901F\u5408\u6210\u7684\u539F\u7406");
const _hoisted_55 = {
  href: "https://sinaad.github.io/xfe/2016/05/10/gpu-accelerated-compositing-in-chrome/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_56 = /* @__PURE__ */ createTextVNode("\u3010\u4E2D\u6587\u7FFB\u8BD1\u3011Chrome \u786C\u4EF6\u52A0\u901F\u5408\u6210\u7684\u539F\u7406");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#javascript-core" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#typescript" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6846\u67B6" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#vue" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#vue-\u751F\u6001" }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#vue-\u4F7F\u7528\u6280\u5DE7" }, {
                    default: withCtx(() => [
                      _hoisted_8
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4E8B\u4EF6\u5FAA\u73AF" }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u9519\u8BEF\u5904\u7406\u548C\u76D1\u63A7" }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u52A8\u753B" }, {
            default: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6027\u80FD" }, {
            default: withCtx(() => [
              _hoisted_12
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#gpu-\u52A0\u901F" }, {
            default: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_14,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_15, [
        _hoisted_16,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_17,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_19, [
          _hoisted_20,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_21, [
          _hoisted_22,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_23,
    createBaseVNode("ul", null, [
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
        ]),
        _hoisted_30
      ])
    ]),
    _hoisted_31,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_32, [
          _hoisted_33,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_34,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_35, [
          _hoisted_36,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_37
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_38, [
          _hoisted_39,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_40
      ])
    ]),
    _hoisted_41,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_42, [
          _hoisted_43,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_44,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_45, [
          _hoisted_46,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_47,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_48, [
          _hoisted_49,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_50, [
          _hoisted_51,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_52,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_53, [
          _hoisted_54,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_55, [
          _hoisted_56,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var javascript_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { javascript_html as default };
