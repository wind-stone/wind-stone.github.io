import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "vue-router-\u539F\u7406",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#vue-router-\u539F\u7406",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" vue-router \u539F\u7406")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("history \u53D8\u5316\u673A\u5236");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u65B0\u589E\u5386\u53F2\u8BB0\u5F55");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5386\u53F2\u8BB0\u5F55\u4E0D\u53D8\u7684\u60C5\u51B5");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5386\u53F2\u8BB0\u5F55\u6808\u7684\u66F4\u6539");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u5386\u53F2\u8BB0\u5F55\u6808\u7684\u9500\u6BC1");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("SPA\uFF08Single Page Web Application\uFF09");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u4F18\u70B9");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u7F3A\u70B9");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("url \u8DEF\u5F84\u91CC\u7684 #!");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("SPA \u5B9E\u73B0\u539F\u7406");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u7236\u5B50\u8DEF\u7531\u5207\u6362\u663E\u793A");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u9700\u6C42\u8BF4\u660E");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u89E3\u51B3\u65B9\u6CD5");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u5F02\u6B65\u8DEF\u7531-\u5904\u7406\u52A0\u8F7D\u72B6\u6001/\u52A0\u8F7D\u5931\u8D25");
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<h2 id="history-\u53D8\u5316\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#history-\u53D8\u5316\u673A\u5236" aria-hidden="true">#</a> history \u53D8\u5316\u673A\u5236</h2><p>\u5BFC\u81F4\u5386\u53F2\u8BB0\u5F55\u53D8\u5316\u7684\u65B9\u5F0F\uFF0C\u4E3B\u8981\u6709\u4E24\u79CD\uFF1A</p><ul><li>\u4FEE\u6539 location.hash</li><li>history.pushState/popState \u7B49</li></ul><p>\u4EE5\u4E0B\u4EE5\u4FEE\u6539 location.hash \u5BFC\u81F4\u5386\u53F2\u8BB0\u5F55\u53D8\u5316\u4E3A\u4F8B\uFF0C\u8BE6\u7EC6\u8BF4\u660E\u5386\u53F2\u8BB0\u5F55\u6808\u7684\u53D8\u5316\u60C5\u51B5</p><h3 id="\u65B0\u589E\u5386\u53F2\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u5386\u53F2\u8BB0\u5F55" aria-hidden="true">#</a> \u65B0\u589E\u5386\u53F2\u8BB0\u5F55</h3><ul><li>\u4FEE\u6539 location.hash \u5C5E\u6027\u4F1A\u66F4\u65B0\u663E\u793A\u5728\u5730\u5740\u680F\u4E2D\u7684 URL\uFF0C\u540C\u65F6\u4F1A\u5728\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55\u6808\u4E2D\u6DFB\u52A0\u4E00\u6761\u8BB0\u5F55</li><li>\u4FEE\u6539 location.hash\uFF0C\u6D4F\u89C8\u5668\u53EA\u4F1A\u6EDA\u52A8\u5230\u9875\u9762\u76F8\u5E94\u4F4D\u7F6E\uFF0C\u4E0D\u4F1A\u91CD\u65B0\u52A0\u8F7D\u7F51\u9875</li></ul><h3 id="\u5386\u53F2\u8BB0\u5F55\u4E0D\u53D8\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u5386\u53F2\u8BB0\u5F55\u4E0D\u53D8\u7684\u60C5\u51B5" aria-hidden="true">#</a> \u5386\u53F2\u8BB0\u5F55\u4E0D\u53D8\u7684\u60C5\u51B5</h3><ul><li>\u5237\u65B0\u9875\u9762\u4E0D\u4F1A\u4EA7\u751F\u65B0\u7684\u4E00\u6761\u5386\u53F2\u8BB0\u5F55</li><li>\u5237\u65B0\u9875\u9762\u4E0D\u4F1A\u66F4\u6539\u5DF2\u6709\u7684\u5386\u53F2\u8BB0\u5F55\u6808\uFF08\u4E0D\u7BA1\u662F\u5F53\u524D\u9875\u9762\u4E4B\u524D\u8FD8\u662F\u4E4B\u540E\u7684\u5386\u53F2\u8BB0\u5F55\u70B9\uFF09\uFF0C</li><li>\u70B9\u51FB\u56DE\u9000\u548C\u524D\u8FDB\u6309\u94AE\u6216\u8005\u8C03\u7528 history \u7684 back\u3001forward\u3001go\u65B9\u6CD5\u4EA7\u751F\u7684\u540E\u9000\u3001\u524D\u8FDB\u64CD\u4F5C\uFF0C\u4E0D\u4F1A\u66F4\u6539\u5386\u53F2\u8BB0\u5F55\u6808\uFF0C\u53EA\u4F1A\u5F71\u54CD\u5F53\u9762\u9875\u9762\u5448\u73B0\u54EA\u4E00\u6761\u5386\u53F2\u8BB0\u5F55</li></ul><h3 id="\u5386\u53F2\u8BB0\u5F55\u6808\u7684\u66F4\u6539" tabindex="-1"><a class="header-anchor" href="#\u5386\u53F2\u8BB0\u5F55\u6808\u7684\u66F4\u6539" aria-hidden="true">#</a> \u5386\u53F2\u8BB0\u5F55\u6808\u7684\u66F4\u6539</h3><p>\u5982\u679C\u5F53\u524D\u9875\u9762\u5448\u73B0\u7684\u5386\u53F2\u8BB0\u5F55\u70B9\u4E0D\u662F\u5386\u53F2\u8BB0\u5F55\u6808\u91CC\u6700\u540E\u4E00\u6761\u5386\u53F2\u8BB0\u5F55\uFF0C\u5219\u5728\u65B0\u589E\u5386\u53F2\u8BB0\u5F55\u65F6\uFF0C\u4F1A\u5148\u9500\u6BC1\u8BE5\u5386\u53F2\u8BB0\u5F55\u70B9\u4E4B\u540E\u7684\u5386\u53F2\u8BB0\u5F55\uFF0C\u518D\u65B0\u589E\u4E00\u6761\u5386\u53F2\u8BB0\u5F55\u3002\u793A\u4F8B\u5982\u4E0B\uFF1A</p><ul><li>\u5047\u8BBE\u73B0\u6709\u5386\u53F2\u8BB0\u5F55\u6808\u4E3A\uFF1A #1 -&gt; #2 -&gt; #3 -&gt; #4\uFF0C\u5F53\u524D\u5728 #4\uFF0C\u6B64\u523B history.length = 4</li><li>\u56DE\u9000\u4E00\u6B21\u5230 #3 \uFF0C\u6B64\u523B history.length = 4\uFF08\u5373\u56DE\u9000\u65F6\u5386\u53F2\u8BB0\u5F55\u4E0D\u4F1A\u66F4\u6539\uFF09</li><li>\u518D\u56DE\u9000\u4E00\u6B21\u5230 #2 \uFF0C\u6B64\u523B history.length = 4\uFF08\u5373\u56DE\u9000\u65F6\u5386\u53F2\u8BB0\u5F55\u4E0D\u4F1A\u66F4\u6539\uFF09</li><li>\u518D\u56DE\u9000\u4E00\u6B21\u5230 #1 \uFF0C\u6B64\u523B history.length = 4\uFF08\u5373\u56DE\u9000\u65F6\u5386\u53F2\u8BB0\u5F55\u4E0D\u4F1A\u66F4\u6539\uFF09</li><li>\u518D\u524D\u8FDB\u4E00\u6B21\u5230 #2 \uFF0C\u6B64\u523B history.length = 4\uFF08\u5373\u524D\u8FDB\u65F6\u5386\u53F2\u8BB0\u5F55\u4E0D\u4F1A\u66F4\u6539\uFF09</li><li>\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u5730\u5740\u680F\u91CC\u7684 url\uFF0C\u4FEE\u6539 hash \u4E3A #5\uFF0C\u6B64\u523B\u5386\u53F2\u8BB0\u5F55\u5C06\u53D8\u4E3A\uFF1A#1 -&gt; #2 -&gt; #5\uFF0C\u4E14 history.length = 3\u3002\u8FD9\u8BF4\u660E\u5728 #2 \u6DFB\u52A0\u4E00\u6761\u65B0\u7684\u5386\u53F2\u8BB0\u5F55\u65F6\uFF0C\u539F\u5148\u5386\u53F2\u8BB0\u5F55\u91CC\u4F4D\u4E8E #2 \u4E4B\u540E\u7684 #3\u3001#4 \u90FD\u4F1A\u88AB\u5220\u9664\uFF0C\u5E76\u4F1A\u5728 #2 \u4E4B\u540E\u6DFB\u52A0\u65B0\u7684\u5386\u53F2\u8BB0\u5F55 #5</li></ul><h3 id="\u5386\u53F2\u8BB0\u5F55\u6808\u7684\u9500\u6BC1" tabindex="-1"><a class="header-anchor" href="#\u5386\u53F2\u8BB0\u5F55\u6808\u7684\u9500\u6BC1" aria-hidden="true">#</a> \u5386\u53F2\u8BB0\u5F55\u6808\u7684\u9500\u6BC1</h3><ul><li>\u53EA\u6709\u5173\u95ED\u9875\u9762\u624D\u4F1A\u9500\u6BC1\u6574\u4E2A\u5386\u53F2\u8BB0\u5F55\u6808</li></ul><h2 id="spa-single-page-web-application" tabindex="-1"><a class="header-anchor" href="#spa-single-page-web-application" aria-hidden="true">#</a> SPA\uFF08Single Page Web Application\uFF09</h2><p>\u5355\u9875 Web \u5E94\u7528\uFF0C\u5C31\u662F\u53EA\u6709\u4E00\u5F20 Web \u9875\u9762\u7684\u5E94\u7528\u3002SPA \u662F\u52A0\u8F7D\u5355\u4E2A HTML \u9875\u9762\u5E76\u5728\u7528\u6237\u4E0E\u5E94\u7528\u7A0B\u5E8F\u4EA4\u4E92\u65F6\u52A8\u6001\u66F4\u65B0\u8BE5\u9875\u9762\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u3002\u6D4F\u89C8\u5668\u4E00\u5F00\u59CB\u4F1A\u52A0\u8F7D\u5FC5\u9700\u7684HTML\u3001CSS \u548C JavaScript\uFF0C\u6240\u6709\u7684\u64CD\u4F5C\u90FD\u5728\u8FD9\u5F20\u9875\u9762\u4E0A\u5B8C\u6210\uFF0C\u90FD\u7531 JavaScript \u6765\u63A7\u5236\u3002\u56E0\u6B64\uFF0C\u5BF9\u5355\u9875\u5E94\u7528\u6765\u8BF4\u6A21\u5757\u5316\u7684\u5F00\u53D1\u548C\u8BBE\u8BA1\u663E\u5F97\u76F8\u5F53\u91CD\u8981\u3002</p><h3 id="\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a> \u4F18\u70B9</h3><ul><li>\u907F\u514D\u4E86\u9875\u9762\u8DF3\u8F6C\uFF08\u5207\u6362\uFF09\uFF0C\u5C31\u6CA1\u6709\u767D\u5C4F\u963B\u585E\uFF0C</li><li>\u56E0\u800C\u63D0\u4F9B\u4E86\u66F4\u52A0\u6D41\u7545\u7684\u7528\u6237\u4F53\u9A8C\uFF08\u8BA9\u7528\u6237\u5728web app\u611F\u53D7native app\u7684\u901F\u5EA6\u548C\u6D41\u7545\uFF09</li><li>\u56E0\u800C\u53EF\u4EE5\u8282\u7701\u539F\u751F\uFF08Android\u548C iOS\uFF09APP \u7684\u5F00\u53D1\u6210\u672C\uFF08\u5982\u679C\u5E94\u7528\u4E8E\u79FB\u52A8\u7AEF\u5F00\u53D1\uFF09</li><li>\u800C\u4E14\u53EF\u4EE5\u63D0\u9AD8\u53D1\u5E03\u6548\u7387\uFF0C\u65E0\u9700\u6BCF\u6B21\u5B89\u88C5\u66F4\u65B0\u5305\uFF08\u5982\u679C\u5E94\u7528\u4E8E\u79FB\u52A8\u7AEF\u5F00\u53D1\uFF09</li></ul><h3 id="\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a> \u7F3A\u70B9</h3><ul><li>\u6548\u679C\u548C\u6027\u80FD\u4E0E\u539F\u751F\u8FD8\u6709\u8F83\u5927\u5DEE\u8DDD</li><li>\u5404\u7248\u672C\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u4E0D\u4E00\u81F4</li><li>\u4E1A\u52A1\u968F\u7740\u4EE3\u7801\u91CF\u589E\u52A0\u800C\u589E\u52A0\uFF0C\u4E0D\u5229\u4E8E\u9996\u5C4F\u4F18\u5316</li><li>\u4E0D\u5229\u4E8E\u641C\u7D22\u5F15\u64CE\u6293\u53D6</li></ul><h3 id="url-\u8DEF\u5F84\u91CC\u7684" tabindex="-1"><a class="header-anchor" href="#url-\u8DEF\u5F84\u91CC\u7684" aria-hidden="true">#</a> url \u8DEF\u5F84\u91CC\u7684 <code>#!</code></h3><p>\u7531\u4E8E\u6211\u4EEC\u5728\u5904\u7406\u5355\u9875\u5E94\u7528\u7684\u65F6\u5019\u9875\u9762\u662F\u4E0D\u5237\u65B0\u7684\uFF0C\u6240\u4EE5\u4F1A\u5BFC\u81F4\u6211\u4EEC\u7684\u7F51\u9875\u8BB0\u5F55\u548C\u5185\u5BB9\u5F88\u96BE\u88AB\u641C\u7D22\u5F15\u64CE\u6293\u53D6\u5230\u3002\u641C\u7D22\u5F15\u64CE\u6293\u53D6\u9875\u9762\u9996\u5148\u8981\u9075\u5FAAhttp\u534F\u8BAE\uFF0C\u53EF\u662F#\u4E0D\u662F\u534F\u8BAE\u5185\u7684\u5185\u5BB9\u3002\u800C\u5B9E\u9645\u4E0A\u4E5F\u662F\u8FD9\u6837\uFF0C\u6211\u4EEC\u6CA1\u6709\u89C1\u8FC7\u641C\u7D22\u5F15\u64CE\u7684\u641C\u7D22\u7ED3\u679C\u4E2D\uFF0C\u54EA\u4E00\u6761\u8BB0\u5F55\u53EF\u4EE5\u5FEB\u901F\u5B9A\u4F4D\u5230\u7F51\u9875\u5185\u7684\u67D0\u4E2A\u4F4D\u7F6E\u7684\u3002\u89E3\u51B3\u7684\u65B9\u6CD5\u662F\u7528 #!\u53F7\u4EE3\u66FF#\u53F7\uFF0C\u56E0\u4E3A\u8C37\u6B4C\u4F1A\u6293\u53D6\u5E26\u6709#!\u7684URL\u3002\uFF08Google\u89C4\u5B9A\uFF0C\u5982\u679C\u4F60\u5E0C\u671BAjax\u751F\u6210\u7684\u5185\u5BB9\u88AB\u6D4F\u89C8\u5F15\u64CE\u8BFB\u53D6\uFF0C\u90A3\u4E48URL\u4E2D\u53EF\u4EE5\u4F7F\u7528\u201D#!\u201D(\u8FD9\u79CDURL\u5728\u4E00\u822C\u9875\u9762\u4E00\u822C\u4E0D\u4F1A\u4EA7\u751F\u5B9A\u4F4D\u6548\u679C)\uFF09\uFF0C\u8FD9\u6837\u6211\u4EEC\u53EF\u4EE5\u89E3\u51B3ajax\u7684\u4E0D\u88AB\u641C\u7D22\u5F15\u64CE\u6293\u53D6\u7684\u95EE\u9898\u3002\u5728vueJs\u91CC\u9762\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u4F5C\u8005\u5C31\u662F\u8FD9\u6837\u505A\u7684\u3002</p><h3 id="spa-\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#spa-\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> SPA \u5B9E\u73B0\u539F\u7406</h3><ul><li>\u76D1\u542C\u5730\u5740\u680F\u4E2D hash \u53D8\u5316\u9A71\u52A8\u754C\u9762\u53D8\u5316</li><li>\u7528 pushstate \u8BB0\u5F55\u6D4F\u89C8\u5668\u7684\u5386\u53F2\uFF0C\u9A71\u52A8\u754C\u9762\u53D8\u5316</li><li>\u76F4\u63A5\u5728\u754C\u9762\u7528\u666E\u901A\u4E8B\u4EF6\u9A71\u52A8\u754C\u9762\u53D8\u5316</li></ul><p>\u524D\u4E24\u79CD\u65B9\u5F0F\u8F83\u4E3A\u666E\u904D\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u7684\u53D8\u5316\u8BB0\u5F55\u6D4F\u89C8\u5668\u4F1A\u4FDD\u5B58\u5728history\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u56DE\u9000/\u524D\u8FDB\u6309\u94AE\u627E\u56DE\uFF0C\u6216\u8005history\u5BF9\u8C61\u4E2D\u7684\u65B9\u6CD5\u63A7\u5236\u3002\u6700\u540E\u4E00\u79CD\u65B9\u6CD5\u662F\u7528\u666E\u901A\u4E8B\u4EF6\u9A71\u52A8\u7684\uFF0C\u6CA1\u6709\u6539\u53D8\u6D4F\u89C8\u5668\u7684history\u5BF9\u8C61\uFF0C\u6240\u4EE5\u4E00\u65E6\u7528\u6237\u6309\u4E86\u8FD4\u56DE\u6309\u94AE\u5C06\u4F1A\u9000\u5230\u6D4F\u89C8\u5668\u7684\u4E3B\u754C\u9762\u3002\u6240\u4EE5\uFF0C\u4E00\u822C\u91C7\u7528\u524D\u4E24\u79CD\u65B9\u5F0F\u3002\u503C\u5F97\u4E00\u63D0\u7684\u662F\uFF0C\u5728\u4E0D\u652F\u6301hash\u76D1\u542C\u548Cpushsate\u53D8\u5316\u7684\u6D4F\u89C8\u5668\u4E2D\u53EF\u4EE5\u8003\u8651\u7528\u5EF6\u65F6\u51FD\u6570\uFF0C\u4E0D\u505C\u5F97\u53BB\u76D1\u542C\u6D4F\u89C8\u5668\u5730\u5740\u680F\u4E2Durl\u53D1\u751F\u7684\u53D8\u5316\uFF0C\u4ECE\u800C\u9A71\u52A8\u754C\u9762\u53D8\u5316\u3002</p><p>Reference</p>', 25);
const _hoisted_42 = {
  href: "http://www.ruanyifeng.com/blog/2011/03/url_hash.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_43 = /* @__PURE__ */ createTextVNode("\u962E\u4E00\u5CF0-URL \u7684\u4E95\u53F7");
const _hoisted_44 = {
  href: "http://www.admin5.com/article/20130614/509297.shtml",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_45 = /* @__PURE__ */ createTextVNode("\u641C\u7D22\u5F15\u64CE\u4F1A\u4E0D\u4F1A\u6293\u53D6\u5E26#\u53F7(\u54C8\u5E0C\u503C)\u7684URL");
const _hoisted_46 = /* @__PURE__ */ createStaticVNode('<h2 id="\u7236\u5B50\u8DEF\u7531\u5207\u6362\u663E\u793A" tabindex="-1"><a class="header-anchor" href="#\u7236\u5B50\u8DEF\u7531\u5207\u6362\u663E\u793A" aria-hidden="true">#</a> \u7236\u5B50\u8DEF\u7531\u5207\u6362\u663E\u793A</h2><h3 id="\u9700\u6C42\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42\u8BF4\u660E" aria-hidden="true">#</a> \u9700\u6C42\u8BF4\u660E</h3><ul><li>\u5728\u4E00\u4E9B\u540E\u53F0\u7BA1\u7406\u9875\u9762\uFF0C\u5E38\u5E38\u6D89\u53CA\u5230\u5217\u8868\u9875\u548C\u8BE6\u60C5\u9875\uFF0C\u5217\u8868\u9875\u548C\u8BE6\u60C5\u9875\u770B\u8D77\u6765\u662F\u72EC\u7ACB\u7684\u9875\u9762\uFF0C\u6CA1\u6709\u76F8\u540C\u7684\u5143\u7D20\u3002</li><li>\u5217\u8868\u9875\u5305\u542B\u67E5\u8BE2\u6761\u4EF6\u548C\u67E5\u8BE2\u7ED3\u679C\u3002\u67E5\u8BE2\u6761\u4EF6\u53EF\u80FD\u6709\u65F6\u95F4\u8303\u56F4\u3001\u5173\u952E\u5B57\u3001\u4E0B\u62C9\u9009\u62E9\u6846\u7B49\u7B49\u6761\u4EF6\uFF0C\u67E5\u8BE2\u7ED3\u679C\u662F\u4EE5\u8868\u683C\u5448\u73B0\u7684\u5217\u8868\u3002</li><li>\u8BE6\u60C5\u9875\u662F\u6BCF\u4E00\u6761\u67E5\u8BE2\u7ED3\u679C\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u70B9\u51FB\u5217\u8868\u9875\u6BCF\u4E00\u6761\u67E5\u8BE2\u7ED3\u679C\u7684\u201C\u8BE6\u60C5\u201D\u8FDB\u5165\u8BE6\u60C5\u9875\u3002</li></ul><p>\u9700\u6C42\u662F\uFF0C\u7ECF\u8FC7\u590D\u6742\u7684\u67E5\u8BE2\u6761\u4EF6\u67E5\u51FA\u7ED3\u679C\uFF0C\u8FDB\u5165\u8BE6\u60C5\u9875\u540E\u8FD4\u56DE\uFF0C\u53EF\u4EE5\u590D\u7528\u90A3\u4E9B\u67E5\u8BE2\u6761\u4EF6\uFF0C\u800C\u4E0D\u9700\u8981\u91CD\u65B0\u8F93\u5165\u67E5\u8BE2\u6761\u4EF6\u3002</p><h2 id="\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6CD5</h2><ol><li><p>\u60C5\u51B5\u4E00\uFF0C\u5217\u8868\u9875\u548C\u8BE6\u60C5\u9875\u662F\u540C\u7EA7\u8DEF\u7531\uFF1A\u7531\u5217\u8868\u9875\u8FDB\u5165\u8BE6\u60C5\u9875\u65F6\uFF0C\u5217\u8868\u9875\u4F1A\u88AB\u9500\u6BC1\uFF0C\u5BFC\u81F4\u4ECE\u8BE6\u60C5\u9875\u8FD4\u56DE\u5230\u5217\u8868\u9875\u65F6\u9700\u8981\u91CD\u65B0\u586B\u5199\u67E5\u8BE2\u6761\u4EF6\u91CD\u65B0\u67E5\u8BE2\uFF0C\u8D39\u65F6\u8D39\u529B\u3002\u6B64\u65F6\uFF0C\u5982\u679C\u5728\u5217\u8868\u9875\u548C\u8BE6\u60C5\u9875\u8FD9\u4E2A router-view \u4E0A\u6DFB\u52A0 keep-alive\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u5217\u8868\u9875\u548C\u8BE6\u60C5\u9875\u5728\u5207\u6362\u65F6\u4E0D\u88AB\u9500\u6BC1\uFF0C\u4F46\u662F\u95EE\u9898\u662F\u4E0D\u540C\u67E5\u8BE2\u7ED3\u679C\u8BE6\u60C5\u9875\u9762\u53EF\u80FD\u4E0D\u4E00\u6837\uFF0C\u5982\u679C keep-alive \u4E86\u9700\u8981\u5C06\u4E0D\u4E00\u6837\u7684\u5730\u65B9\u5220\u9664\uFF0C\u65E0\u6CD5\u5F88\u597D\u7684\u89E3\u51B3\u95EE\u9898\u3002</p></li><li><p>\uFF08\u63A8\u8350\u65B9\u6CD5\uFF09\u60C5\u51B5\u4E8C\uFF0C\u5C06\u8BE6\u60C5\u9875\u8BBE\u7F6E\u4E3A\u5217\u8868\u9875\u7684\u5B50\u8DEF\u7531\uFF0C\u7236\u5B50\u8DEF\u7531\u90FD\u4E0D\u6DFB\u52A0 keep-alive\u3002\u70B9\u51FB\u201C\u8BE6\u60C5\u201D\u8FDB\u5165\u8BE6\u60C5\u9875\u5B50\u8DEF\u7531\u65F6\uFF0C\u5C06\u5217\u8868\u9875\u5305\u542B\u6846\u9690\u85CF\u6389\uFF0C\u6B64\u65F6\u53EA\u663E\u793A\u8BE6\u60C5\u9875\u3002\u8FD4\u56DE\u65F6\uFF0C\u5217\u8868\u9875\u5305\u542B\u6846\u663E\u793A\uFF0C\u5B50\u8DEF\u7531\u81EA\u52A8\u9500\u6BC1\uFF0C\u5982\u6B64\u53EF\u4EE5\u4FDD\u8BC1\u67E5\u8BE2\u6761\u4EF6\u7B49\u4FDD\u6301\u4E0D\u53D8\u3002</p></li></ol><p>HMLT \u5982\u4E0B\u6240\u793A\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showChildRouter<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list-ctn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u5F02\u6B65\u8DEF\u7531-\u5904\u7406\u52A0\u8F7D\u72B6\u6001-\u52A0\u8F7D\u5931\u8D25" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u8DEF\u7531-\u5904\u7406\u52A0\u8F7D\u72B6\u6001-\u52A0\u8F7D\u5931\u8D25" aria-hidden="true">#</a> \u5F02\u6B65\u8DEF\u7531-\u5904\u7406\u52A0\u8F7D\u72B6\u6001/\u52A0\u8F7D\u5931\u8D25</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">AsyncComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// \u9700\u8981\u52A0\u8F7D\u7684\u7EC4\u4EF6 (\u5E94\u8BE5\u662F\u4E00\u4E2A `Promise` \u5BF9\u8C61)</span>\n  component<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./MyComponent.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token comment">// \u5F02\u6B65\u7EC4\u4EF6\u52A0\u8F7D\u65F6\u4F7F\u7528\u7684\u7EC4\u4EF6</span>\n  loading<span class="token operator">:</span> LoadingComponent<span class="token punctuation">,</span>\n  <span class="token comment">// \u52A0\u8F7D\u5931\u8D25\u65F6\u4F7F\u7528\u7684\u7EC4\u4EF6</span>\n  error<span class="token operator">:</span> ErrorComponent<span class="token punctuation">,</span>\n  <span class="token comment">// \u5C55\u793A\u52A0\u8F7D\u65F6\u7EC4\u4EF6\u7684\u5EF6\u65F6\u65F6\u95F4\u3002\u9ED8\u8BA4\u503C\u662F 200 (\u6BEB\u79D2)</span>\n  delay<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>\n  <span class="token comment">// \u5982\u679C\u63D0\u4F9B\u4E86\u8D85\u65F6\u65F6\u95F4\u4E14\u7EC4\u4EF6\u52A0\u8F7D\u4E5F\u8D85\u65F6\u4E86\uFF0C</span>\n  <span class="token comment">// \u5219\u4F7F\u7528\u52A0\u8F7D\u5931\u8D25\u65F6\u4F7F\u7528\u7684\u7EC4\u4EF6\u3002\u9ED8\u8BA4\u503C\u662F\uFF1A`Infinity`</span>\n  timeout<span class="token operator">:</span> <span class="token number">3000</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p>\u6CE8\u610F\u5982\u679C\u4F60\u5E0C\u671B\u5728 Vue Router \u7684\u8DEF\u7531\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u4E0A\u8FF0\u8BED\u6CD5\u7684\u8BDD\uFF0C\u4F60\u5FC5\u987B\u4F7F\u7528 Vue Router 2.4.0+ \u7248\u672C\u3002</p></blockquote><p>\u5C3D\u7BA1 Vue.js \u5B98\u7F51\u5DF2\u7ECF\u58F0\u79F0 Vue Router 2.4.0+ \u5DF2\u7ECF\u652F\u6301\u5E26\u6709\u52A0\u8F7D\u72B6\u6001\u7684\u5F02\u6B65\u8DEF\u7531\uFF0C\u4F46\u662F\u4EB2\u6D4B\u5728<code>vue-router</code> 3.0.2 \u53CA\u4EE5\u524D\u7248\u672C\uFF0C\u90FD\u6CA1\u6709\u5B9E\u73B0\u5F02\u6B65\u8DEF\u7531\u5904\u7406\u52A0\u8F7D\u72B6\u6001/\u52A0\u8F7D\u5931\u8D25\u7684\u529F\u80FD\u3002\u4F46\u662F\u901A\u8FC7 hack \u7684\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u8FD9\u4E00\u529F\u80FD\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// router.js</span>\n<span class="token keyword">function</span> <span class="token function">lazyLoadView</span><span class="token punctuation">(</span><span class="token parameter">AsyncView</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">AsyncHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n        component<span class="token operator">:</span> AsyncView<span class="token punctuation">,</span>\n        loading<span class="token operator">:</span> LoadingComponent<span class="token punctuation">,</span>\n        error<span class="token operator">:</span> ErrorComponent<span class="token punctuation">,</span>\n        delay<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>\n        timeout<span class="token operator">:</span> <span class="token number">200</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        functional<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>AsyncHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    routes<span class="token operator">:</span> <span class="token punctuation">[</span>\n         <span class="token punctuation">{</span>\n             path<span class="token operator">:</span> <span class="token string">&#39;/video&#39;</span><span class="token punctuation">,</span>\n             name<span class="token operator">:</span> <span class="token constant">ROUTER_NAME_VIDEO</span><span class="token punctuation">,</span>\n             <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">lazyLoadView</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;video&#39; */</span> <span class="token string">&#39;./modules/Video&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n         <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>', 13);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#history-\u53D8\u5316\u673A\u5236" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u65B0\u589E\u5386\u53F2\u8BB0\u5F55" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5386\u53F2\u8BB0\u5F55\u4E0D\u53D8\u7684\u60C5\u51B5" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5386\u53F2\u8BB0\u5F55\u6808\u7684\u66F4\u6539" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5386\u53F2\u8BB0\u5F55\u6808\u7684\u9500\u6BC1" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#spa-single-page-web-application" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4F18\u70B9" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u7F3A\u70B9" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#url-\u8DEF\u5F84\u91CC\u7684" }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#spa-\u5B9E\u73B0\u539F\u7406" }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7236\u5B50\u8DEF\u7531\u5207\u6362\u663E\u793A" }, {
            default: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u9700\u6C42\u8BF4\u660E" }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u89E3\u51B3\u65B9\u6CD5" }, {
            default: withCtx(() => [
              _hoisted_15
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5F02\u6B65\u8DEF\u7531-\u5904\u7406\u52A0\u8F7D\u72B6\u6001-\u52A0\u8F7D\u5931\u8D25" }, {
            default: withCtx(() => [
              _hoisted_16
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_17,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_42, [
          _hoisted_43,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_44, [
          _hoisted_45,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_46,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
