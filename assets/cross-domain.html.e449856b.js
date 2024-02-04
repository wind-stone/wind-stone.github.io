import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u8DE8\u57DF",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8DE8\u57DF",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8DE8\u57DF")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u540C\u6E90\u7B56\u7565");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u9020\u6210\u8DE8\u57DF\u7684\u4E24\u79CD\u7B56\u7565");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u4E3A\u4EC0\u4E48\u8981\u6709\u8DE8\u57DF\u9650\u5236");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u8DE8\u57DF\u65B9\u6CD5");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("CORS\uFF08\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF09");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("JSONP");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("postMessage");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u670D\u52A1\u5668\u4EE3\u7406");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u8868\u5355\u63D0\u4EA4");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("document.domain\uFF08\u4E3B\u57DF\u76F8\u540C\u7684\u8DE8\u57DF\uFF09");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("window.name");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("location.hash");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("WebSocket");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("XMLHttpRequest \u4E4B withCredentials");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("Reference");
const _hoisted_18 = /* @__PURE__ */ createStaticVNode('<h2 id="\u540C\u6E90\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u540C\u6E90\u7B56\u7565" aria-hidden="true">#</a> \u540C\u6E90\u7B56\u7565</h2><p>\u5F53\u4E24\u4E2A\u57DF\u5177\u6709\u76F8\u540C\u7684\u534F\u8BAE, \u76F8\u540C\u7684\u7AEF\u53E3\uFF0C\u76F8\u540C\u7684\u57DF\u540D\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u53EF\u4EE5\u8BA4\u4E3A\u5B83\u4EEC\u662F\u76F8\u540C\u7684\u57DF\u3002</p><p>\u53EA\u8981\u534F\u8BAE\u3001\u57DF\u540D\u3001\u7AEF\u53E3\u6709\u4EFB\u4F55\u4E00\u4E2A\u4E0D\u540C\uFF0C\u90FD\u88AB\u5F53\u4F5C\u662F\u4E0D\u540C\u7684\u57DF\uFF0C\u4E4B\u95F4\u7684\u8BF7\u6C42\u5C31\u662F\u8DE8\u57DF\u64CD\u4F5C\u3002</p><h2 id="\u9020\u6210\u8DE8\u57DF\u7684\u4E24\u79CD\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u9020\u6210\u8DE8\u57DF\u7684\u4E24\u79CD\u7B56\u7565" aria-hidden="true">#</a> \u9020\u6210\u8DE8\u57DF\u7684\u4E24\u79CD\u7B56\u7565</h2><p>\u6D4F\u89C8\u5668\u7684\u540C\u6E90\u7B56\u7565\u4F1A\u5BFC\u81F4\u8DE8\u57DF\uFF0C\u8FD9\u91CC\u540C\u6E90\u7B56\u7565\u53C8\u5206\u4E3A\u4EE5\u4E0B\u4E24\u79CD\uFF1A</p><ul><li>DOM \u5C42\u9762\u7684\u540C\u6E90\u7B56\u7565\uFF1A\u7981\u6B62\u5BF9\u4E0D\u540C\u6E90\u9875\u9762 DOM \u8FDB\u884C\u64CD\u4F5C\u3002 <ul><li>\u6BD4\u5982 iframe \u8DE8\u57DF\u7684\u60C5\u51B5\uFF0C\u4E0D\u540C\u57DF\u540D\u7684 iframe \u662F\u9650\u5236\u4E92\u76F8\u8BBF\u95EE\u7684\u3002</li><li>\u6BD4\u5982\u901A\u8FC7 A \u9875\u9762\u6253\u5F00 B \u9875\u9762\uFF0CB \u4E0D\u540C\u6E90\u7684\u8BDD\uFF0CB \u9875\u9762\u65E0\u6CD5\u64CD\u4F5C A \u9875\u9762\u7684 DOM\u3002</li></ul></li><li>\u6570\u636E\u5C42\u9762\u7684\u540C\u6E90\u7B56\u7565\uFF1A\u9650\u5236\u4E0D\u540C\u6E90\u7AD9\u70B9\u8BFB\u53D6\u5F53\u524D\u7AD9\u70B9\u7684 Cookie\u3001IndexDB\u3001LocalStorge \u7B49\u6570\u636E\u3002</li><li>\u7F51\u7EDC\u5C42\u9762\u7684\u540C\u6E90\u7B56\u7565\uFF1A\u7981\u6B62\u4F7F\u7528 XHR \u5BF9\u8C61\u5411\u4E0D\u540C\u6E90\u7684\u670D\u52A1\u5668\u5730\u5740\u53D1\u8D77 HTTP \u8BF7\u6C42\u3002\uFF08\u5B9E\u9645\u4E0A\u662F\u53EF\u4EE5\u8BF7\u6C42\uFF0C\u4F46\u662F\u8BF7\u6C42\u8FD4\u56DE\u540E\uFF0C\u6D4F\u89C8\u5668\u4F1A\u544A\u77E5\u4F60\u8FD9\u662F\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u8FD4\u56DE\u7ED3\u679C\u65E0\u6CD5\u4F7F\u7528\uFF09</li></ul><h2 id="\u4E3A\u4EC0\u4E48\u8981\u6709\u8DE8\u57DF\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u6709\u8DE8\u57DF\u9650\u5236" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u6709\u8DE8\u57DF\u9650\u5236</h2><p>\u8DE8\u57DF\u9650\u5236\u4E3B\u8981\u662F\u4E3A\u4E86\u5B89\u5168\u8003\u8651\u3002</p><p>Ajax \u540C\u6E90\u7B56\u7565\u4E3B\u8981\u7528\u6765\u9632\u6B62 CSRF \u653B\u51FB\u3002\u5982\u679C\u6CA1\u6709 Ajax \u540C\u6E90\u7B56\u7565\uFF0C\u76F8\u5F53\u5371\u9669\uFF0C\u6211\u4EEC\u53D1\u8D77\u7684\u6BCF\u4E00\u6B21 HTTP \u8BF7\u6C42\u90FD\u4F1A\u5E26\u4E0A\u8BF7\u6C42\u5730\u5740\u5BF9\u5E94\u7684 cookie\uFF0C\u90A3\u4E48\u53EF\u4EE5\u505A\u5982\u4E0B\u653B\u51FB\uFF1A</p><ol><li>\u7528\u6237\u767B\u5F55\u4E86\u81EA\u5DF1\u7684\u94F6\u884C\u9875\u9762<code>http://mybank.com</code>\uFF0C<code>http://mybank.com</code>\u5411\u7528\u6237\u7684 cookie \u4E2D\u6DFB\u52A0\u7528\u6237\u6807\u8BC6\u3002</li><li>\u7528\u6237\u6D4F\u89C8\u4E86\u6076\u610F\u9875\u9762<code>http://evil.com</code>\uFF0C\u6267\u884C\u4E86\u9875\u9762\u4E2D\u7684\u6076\u610F Ajax \u8BF7\u6C42\u4EE3\u7801\u3002</li><li><code>http://evil.com</code>\u5411<code>http://mybank.com</code>\u53D1\u8D77 Ajax \u8BF7\u6C42\uFF0C\u8BF7\u6C42\u4F1A\u9ED8\u8BA4\u628A<code>http://mybank.com</code>\u5BF9\u5E94 cookie \u4E5F\u540C\u65F6\u53D1\u9001\u8FC7\u53BB\u3002</li><li>\u94F6\u884C\u9875\u9762\u4ECE\u53D1\u9001\u7684 cookie \u4E2D\u63D0\u53D6\u7528\u6237\u6807\u8BC6\uFF0C\u9A8C\u8BC1\u7528\u6237\u65E0\u8BEF\uFF0Cresponse \u4E2D\u8FD4\u56DE\u8BF7\u6C42\u6570\u636E\u3002\u6B64\u65F6\u6570\u636E\u5C31\u6CC4\u9732\u4E86\u3002</li><li>\u800C\u4E14\u7531\u4E8E Ajax \u5728\u540E\u53F0\u6267\u884C\uFF0C\u7528\u6237\u65E0\u6CD5\u611F\u77E5\u8FD9\u4E00\u8FC7\u7A0B\u3002</li></ol><p>DOM \u540C\u6E90\u7B56\u7565\u4E5F\u4E00\u6837\uFF0C\u5982\u679C iframe \u4E4B\u95F4\u53EF\u4EE5\u8DE8\u57DF\u8BBF\u95EE\uFF0C\u53EF\u4EE5\u8FD9\u6837\u653B\u51FB\uFF1A</p><ol><li>\u505A\u4E00\u4E2A\u5047\u7F51\u7AD9\uFF0C\u91CC\u9762\u7528 iframe \u5D4C\u5957\u4E00\u4E2A\u94F6\u884C\u7F51\u7AD9 http://mybank.com</li><li>\u628A iframe \u5BBD\u9AD8\u5565\u7684\u8C03\u6574\u5230\u9875\u9762\u5168\u90E8\uFF0C\u8FD9\u6837\u7528\u6237\u8FDB\u6765\u9664\u4E86\u57DF\u540D\uFF0C\u522B\u7684\u90E8\u5206\u548C\u94F6\u884C\u7684\u7F51\u7AD9\u6CA1\u6709\u4EFB\u4F55\u5DEE\u522B</li><li>\u8FD9\u65F6\u5982\u679C\u7528\u6237\u8F93\u5165\u8D26\u53F7\u5BC6\u7801\uFF0C\u6211\u4EEC\u7684\u4E3B\u7F51\u7AD9\u53EF\u4EE5\u8DE8\u57DF\u8BBF\u95EE\u5230 http://mybank.com \u7684 dom \u8282\u70B9\uFF0C\u5C31\u53EF\u4EE5\u62FF\u5230\u7528\u6237\u7684\u8F93\u5165\u4E86\uFF0C\u90A3\u4E48\u5C31\u5B8C\u6210\u4E86\u4E00\u6B21\u653B\u51FB\u3002\u6240\u4EE5\u8BF4\u6709\u4E86\u8DE8\u57DF\u8DE8\u57DF\u9650\u5236\u4E4B\u540E\uFF0C\u6211\u4EEC\u624D\u80FD\u66F4\u5B89\u5168\u7684\u4E0A\u7F51\u4E86\u3002</li></ol><h2 id="\u8DE8\u57DF\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u57DF\u65B9\u6CD5" aria-hidden="true">#</a> \u8DE8\u57DF\u65B9\u6CD5</h2><p>\u5982\u4E0B\u5217\u4E3E\u6240\u6709\u6211\u5DF2\u77E5\u7684\u8DE8\u57DF\u65B9\u6CD5\uFF0C\u5305\u62EC</p><ul><li>CORS</li><li>JSONP</li><li>postMessage</li><li>\u670D\u52A1\u5668\u4EE3\u7406\uFF08\u4E00\u822C\u7528\u4E8E\u5F00\u53D1\u9636\u6BB5\uFF09</li><li>\u8868\u5355\u63D0\u4EA4</li><li>document.domain</li><li>window.name</li><li>location.hash</li><li>WebSocket</li></ul><p>\u5176\u4E2D\u524D\u4E94\u9879\u6700\u4E3A\u5E38\u7528\uFF0C\u6211\u4E5F\u5B9E\u9645\u5728\u9879\u76EE\u91CC\u4F7F\u7528\u8FC7\uFF0C\u73B0\u5728\u5206\u522B\u4ECB\u7ECD\u8FD9\u4E9B\u8DE8\u57DF\u65B9\u6CD5\u7684\u539F\u7406\u3002</p><h3 id="cors-\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB" tabindex="-1"><a class="header-anchor" href="#cors-\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB" aria-hidden="true">#</a> CORS\uFF08\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF09</h3>', 17);
const _hoisted_35 = /* @__PURE__ */ createTextVNode("CORS \u662F\u4E00\u4E2A W3C \u6807\u51C6\uFF0C\u5168\u79F0\u662F\u201C\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\u201D\uFF08Cross-origin resource sharing\uFF09\u3002 \u5BF9\u4E8E\u8FD9\u4E2A\u65B9\u5F0F\uFF0C\u962E\u4E00\u5CF0\u8001\u5E08\u603B\u7ED3\u7684\u6587\u7AE0\u7279\u522B\u597D\uFF0C\u5E0C\u671B\u6DF1\u5165\u4E86\u89E3\u7684\u53EF\u4EE5\u770B\u4E00\u4E0B ");
const _hoisted_36 = {
  href: "http://www.ruanyifeng.com/blog/2016/04/cors.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_37 = /* @__PURE__ */ createTextVNode("\u962E\u4E00\u5CF0-\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB CORS \u8BE6\u89E3");
const _hoisted_38 = /* @__PURE__ */ createStaticVNode('<p>\u7B80\u5355\u7684\u8BF4\u4E00\u8BF4\u5927\u4F53\u6D41\u7A0B\u3002</p><ol><li>\u5BF9\u4E8E\u5BA2\u6237\u7AEF\uFF0C\u6211\u4EEC\u8FD8\u662F\u6B63\u5E38\u4F7F\u7528 xhr \u5BF9\u8C61\u53D1\u9001 Ajax \u8BF7\u6C42\u3002\u552F\u4E00\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6211\u4EEC\u9700\u8981\u8BBE\u7F6E\u6211\u4EEC\u7684 xhr \u5C5E\u6027 <code>withCredentials</code>\u4E3A<code>true</code>\uFF0C\u5373<code>xhr.withCredentials = true</code>\uFF0C\u5426\u5219 cookie \u662F\u5E26\u4E0D\u8FC7\u53BB\u7684</li><li>\u5BF9\u4E8E\u670D\u52A1\u5668\u7AEF\uFF0C\u9700\u8981\u5728 response header \u4E2D\u8BBE\u7F6E\u5982\u4E0B\u4E24\u4E2A\u5B57\u6BB5\uFF0C\u5982\u6B64\u4FBF\u53EF\u4EE5\u8DE8\u57DF\u8BF7\u6C42\u63A5\u53E3\u4E86</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Access-Control-Allow-Origin: http://www.yourhost.com\nAccess-Control-Allow-Credentials:true\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F18\u70B9\uFF1ACORS \u652F\u6301\u6240\u6709\u7C7B\u578B\u7684 HTTP \u8BF7\u6C42\uFF0C\u662F\u8DE8\u57DF HTTP \u8BF7\u6C42\u7684\u6839\u672C\u89E3\u51B3\u65B9\u6848</p><h3 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> JSONP</h3><p>\u9884\u5148\u5728 js \u91CC\u6CE8\u518C\u597D\u51FD\u6570<code>callback</code>\uFF0C\u65B0\u5EFA<code>script</code>\u5E76\u8BBE\u7F6E<code>src</code>\u643A\u5E26\u51FD\u6570\u540D\u79F0<code>callback</code>\uFF0C\u670D\u52A1\u5668\u7AEF\u4F1A\u8FD4\u56DE js \u6587\u4EF6\uFF0C\u5176\u5185\u5BB9\u4E3A<code>callback(data)</code>\uFF0C\u5C06<code>script</code>\u63D2\u5165\u5230\u6587\u6863\u91CC\u6267\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> callbackName <span class="token operator">=</span> <span class="token string">&#39;callback&#39;</span> <span class="token operator">+</span> math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> head <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;head&#39;</span><span class="token punctuation">)</span>\n\n  window<span class="token punctuation">[</span>callbackName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// \u6E05\u7406 script \u6807\u7B7E\u548C\u56DE\u8C03\u51FD\u6570</span>\n    head<span class="token punctuation">.</span><span class="token function">removeElement</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span>\n    window<span class="token punctuation">[</span>callbackName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>\n    <span class="token function">callback</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// \u7B80\u5355\u5904\u7406 url \u53CA data</span>\n  script<span class="token punctuation">.</span>src <span class="token operator">=</span> url <span class="token operator">+</span> data <span class="token operator">+</span> <span class="token string">&#39;&amp;callback=&#39;</span> <span class="token operator">+</span> callbackName\n  head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4F18\u70B9\uFF1A\u7B80\u5355\u9002\u7528\uFF0C\u8001\u5F0F\u6D4F\u89C8\u5668\u5168\u90E8\u652F\u6301\uFF0C\u670D\u52A1\u5668\u6539\u9020\u5C0F\u3002\u4E0D\u9700\u8981XMLHttpRequest\u6216ActiveX\u7684\u652F\u6301\u3002</p><p>\u7F3A\u70B9\uFF1A\u53EA\u652F\u6301GET\u8BF7\u6C42\u3002</p><h3 id="postmessage" tabindex="-1"><a class="header-anchor" href="#postmessage" aria-hidden="true">#</a> postMessage</h3><p>\u4FE1\u606F\u4F20\u9012\u9664\u4E86\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u4E4B\u524D\u7684\u4F20\u9012\uFF0C\u8FD8\u5B58\u5728\u4EE5\u4E0B\u51E0\u4E2A\u95EE\u9898\uFF1A</p><ul><li>\u9875\u9762\u548C\u65B0\u5F00\u7684\u7A97\u53E3\u7684\u6570\u636E\u4EA4\u4E92</li><li>\u591A\u7A97\u53E3\u4E4B\u95F4\u7684\u6570\u636E\u4EA4\u4E92</li><li>\u9875\u9762\u4E0E\u6240\u5D4C\u5957\u7684 iframe \u4E4B\u95F4\u7684\u4FE1\u606F\u4F20\u9012</li></ul><p><code>window.postMessage</code>\u662F\u4E00\u4E2A HTML5 \u7684 API\uFF0C\u5141\u8BB8\u4E24\u4E2A\u7A97\u53E3\u4E4B\u95F4\u8FDB\u884C\u8DE8\u57DF\u53D1\u9001\u6D88\u606F\u3002</p><p>\u4EE5\u4E3B\u9875\u9762\u4E0E\u5176\u5185\u7684 iframe \u901A\u4FE1\u4E3A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4E3B\u9875\u9762\u76D1\u542C\u4ECE iframe \u53D1\u6765\u7684\u6D88\u606F</span>\nwindow<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>evt<span class="token punctuation">,</span> evt<span class="token punctuation">.</span>data<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n\n<span class="token comment">// \u4E3B\u9875\u9762\u53D1\u9001\u6D88\u606F\uFF08\u53EF\u4EE5\u6307\u5B9A\u7ED9\u7279\u5B9A\u57DF\u540D\u53D1\u9001\u6D88\u606F\uFF09</span>\n<span class="token keyword">const</span> iframe <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;iframe&#39;</span><span class="token punctuation">)</span>\niframe<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  width<span class="token operator">:</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u670D\u52A1\u5668\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u4EE3\u7406" aria-hidden="true">#</a> \u670D\u52A1\u5668\u4EE3\u7406</h3><p>\u6D4F\u89C8\u5668\u6709\u8DE8\u57DF\u9650\u5236\uFF0C\u4F46\u662F\u670D\u52A1\u5668\u4E0D\u5B58\u5728\u8DE8\u57DF\u95EE\u9898\uFF0C\u6240\u4EE5\u53EF\u4EE5\u7531\u670D\u52A1\u5668\u8BF7\u6C42\u6240\u8981\u57DF\u7684\u8D44\u6E90\u518D\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</p><p>\u4E00\u822C\u5728\u9879\u76EE\u5F00\u53D1\u9636\u6BB5\uFF0C\u4F1A\u4F7F\u7528\u672C\u5730\u670D\u52A1\u5668\u8F6C\u53D1\u63A5\u53E3\uFF08\u6BD4\u5982\u53EF\u4EE5\u901A\u8FC7 webpack \u7684<code>webpack-dev-server</code>\u53BB\u914D\u7F6E<code>proxy</code>\uFF09\uFF0C\u4ECE\u800C\u8FBE\u5230\u901A\u8FC7\u670D\u52A1\u5668\u4EE3\u7406\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898\u3002</p><h3 id="\u8868\u5355\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355\u63D0\u4EA4" aria-hidden="true">#</a> \u8868\u5355\u63D0\u4EA4</h3><p>\u8868\u5355\u53EF\u4EE5\u8BBE\u7F6E action \u4E3A\u4EFB\u4F55\u57DF\u540D\uFF0C\u8FDB\u800C\u5B9E\u73B0\u8DE8\u57DF\u63D0\u4EA4\uFF0C\u4F46\u662F\u8868\u5355\u63D0\u4EA4\u9ED8\u8BA4\u4F1A\u8FDB\u884C\u8DF3\u8F6C\uFF0C\u56E0\u6B64\u4E00\u822C\u4F1A\u65B0\u5EFA iframe \u5E76\u5728\u5176\u5185\u521B\u5EFA\u8868\u5355\u5E76\u63D0\u4EA4</p>', 20);
const _hoisted_58 = /* @__PURE__ */ createTextVNode("Reference: ");
const _hoisted_59 = {
  href: "http://blog.csdn.net/cxl444905143/article/details/41923497",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_60 = /* @__PURE__ */ createTextVNode("http://blog.csdn.net/cxl444905143/article/details/41923497");
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "document-domain-\u4E3B\u57DF\u76F8\u540C\u7684\u8DE8\u57DF",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#document-domain-\u4E3B\u57DF\u76F8\u540C\u7684\u8DE8\u57DF",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" document.domain\uFF08\u4E3B\u57DF\u76F8\u540C\u7684\u8DE8\u57DF\uFF09")
], -1);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("p", null, "document.domain \u7684\u573A\u666F\u53EA\u9002\u7528\u4E8E\u4E0D\u540C\u5B50\u57DF\u7684\u6846\u67B6\u95F4\u7684\u4EA4\u4E92\uFF0C\u53CA\u4E3B\u57DF\u5FC5\u987B\u76F8\u540C\u7684\u4E0D\u540C\u6E90\u3002", -1);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("p", null, "\u5404\u4E2A\u5B50\u57DF\u901A\u8FC7\u5C06\u9875\u9762\u6587\u6863\u7684 document.domain \u8BBE\u7F6E\u4E3A\u76F8\u540C\u7684\u4E3B\u57DF\uFF0C\u5B9E\u73B0\u591A\u4E2A\u9875\u9762\u5904\u4E8E\u540C\u4E00\u57DF\u540D\u4E0B\uFF0C\u8FD9\u6837\u5C31\u4E0D\u5B58\u5728\u8DE8\u57DF\u7684\u95EE\u9898\u4E86\u3002", -1);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("p", null, "Reference:", -1);
const _hoisted_65 = {
  href: "https://github.com/wengjq/Blog/issues/2",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_66 = /* @__PURE__ */ createTextVNode("\u524D\u7AEF\u8DE8\u57DF\u95EE\u9898\u53CA\u89E3\u51B3\u65B9\u6848 #2");
const _hoisted_67 = {
  href: "http://www.cnblogs.com/fsjohnhuang/articles/2279554.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_68 = /* @__PURE__ */ createTextVNode("\u8BBE\u7F6Edocument.domain\u5B9E\u73B0js\u8DE8\u57DF\u6CE8\u610F\u70B9 \u3010\u8F6C\u3011");
const _hoisted_69 = /* @__PURE__ */ createStaticVNode('<h3 id="window-name" tabindex="-1"><a class="header-anchor" href="#window-name" aria-hidden="true">#</a> window.name</h3><p><code>window</code>\u5BF9\u8C61\u6709\u4E2A<code>name</code>\u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u6709\u4E2A\u7279\u5F81\uFF1A\u5373\u5728\u4E00\u4E2A\u7A97\u53E3\uFF08<code>window</code>\uFF09\u7684\u751F\u547D\u5468\u671F\u5185,\u7A97\u53E3\u8F7D\u5165\u7684\u6240\u6709\u7684\u9875\u9762\u90FD\u662F\u5171\u4EAB\u4E00\u4E2A<code>window.name</code>\u7684\uFF0C\u6BCF\u4E2A\u9875\u9762\u5BF9<code>window.name</code>\u90FD\u6709\u8BFB\u5199\u7684\u6743\u9650\uFF0C<code>window.name</code>\u662F\u6301\u4E45\u5B58\u5728\u4E00\u4E2A\u7A97\u53E3\u8F7D\u5165\u8FC7\u7684\u6240\u6709\u9875\u9762\u4E2D\u7684\u3002<code>window.name</code>\u5C5E\u6027\u7684\u795E\u5947\u4E4B\u5904\u5728\u4E8E<code>name</code>\u503C\u5728\u4E0D\u540C\u7684\u9875\u9762\uFF08\u751A\u81F3\u4E0D\u540C\u57DF\u540D\uFF09\u52A0\u8F7D\u540E\u4F9D\u65E7\u5B58\u5728\uFF08\u5982\u679C\u6CA1\u4FEE\u6539\u5219\u503C\u4E0D\u4F1A\u53D8\u5316\uFF09\uFF0C\u5E76\u4E14\u53EF\u4EE5\u652F\u6301\u975E\u5E38\u957F\u7684<code>name</code>\u503C\uFF082MB\uFF09\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// example.com/index.html</span>\nwindow<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;example&#39;</span>\nwindow<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">&#39;target.com/index.html&#39;</span>  <span class="token comment">// \u6B64\u65F6\u9875\u9762\u4F1A\u8DF3\u8F6C\u5230 target.com/index.html</span>\n\n<span class="token comment">// target.com/index.html</span>\nwindow<span class="token punctuation">.</span>name <span class="token comment">// \u6253\u5370 window.name\uFF0C\u5176\u503C\u4ECD\u4E3A example</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u56E0\u6B64\u4F7F\u7528\u8BE5\u65B9\u6CD5\u8DE8\u57DF\u7684\u65B9\u6848\u5C31\u662F\uFF1A</p><ul><li>\u51C6\u5907\u4E09\u4E2A\u9875\u9762 <ul><li>\u4E3B\u9875\u9762<code>source/main.html</code></li><li>\u4EE3\u7406\u9875\u9762<code>source/proxy.html</code>\uFF08\u9700\u8981\u4E0E\u4E3B\u9875\u9762\u540C\u57DF\uFF09</li><li>\u8981\u8DE8\u57DF\u7684\u9875\u9762<code>target.com/target.html</code>\uFF08\u4E0E\u4E3B\u9875\u9762\u4E0D\u540C\u57DF\uFF09</li></ul></li><li>\u4E3B\u9875\u9762\u5185\u65B0\u5EFA iframe\uFF0C\u4E14<code>iframe.src = &#39;target.com/target.html&#39;</code>\uFF0C<code>target.com/target.html</code>\u9875\u9762\u6E32\u67D3 js \u6267\u884C\uFF08\u8BE5\u9875\u9762\u6267\u884C\u65F6\u4F1A\u8BBE\u7F6E<code>window.name = &#39;\u8981\u4F20\u9012\u7ED9\u4E3B\u9875\u9762\u7684\u6570\u636E&#39;</code>\uFF09</li><li>\u4E3B\u9875\u9762\u901A\u8FC7<code>iframe.onload</code>\u76D1\u63A7\u5230<code>target.com/target.html</code>\u52A0\u8F7D\u5E76\u6267\u884C\u540E\uFF0C\u8BBE\u7F6E iframe \u4E3A\u4EE3\u7406\u9875\u9762\u7684\u5730\u5740<code>iframe.src = &#39;source/proxy.html&#39;</code></li><li>\u4EE3\u7406\u9875\u9762\u52A0\u8F7D\u5E76\u6267\u884C\uFF0C\u65E2\u53EF\u53D6\u5230<code>window.name</code>\u91CC\u7684\u6570\u636E\uFF0C\u4E14\u8DDF\u4E3B\u9875\u9762\u540C\u57DF\uFF0C\u53EF\u4EE5\u76F8\u4E92\u8C03\u7528 window \u7684\u65B9\u6CD5\u6216\u8005\u5C5E\u6027\uFF0C\u6700\u7EC8\u5B8C\u6210\u8DE8\u57DF\u529F\u80FD</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// source/main.html</span>\n<span class="token keyword">let</span> ready\n<span class="token keyword">const</span> iframe <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;iframe&#39;</span><span class="token punctuation">)</span>\niframe<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>ready<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// \u4E3B\u9875\u9762\u83B7\u53D6\u5230 \u4EE3\u7406\u9875\u9762\u7684 window.name\uFF0C\u8FD9\u4E2A\u6570\u636E\u5C31\u662F\u8981\u8DE8\u57DF\u83B7\u53D6\u7684\u6570\u636E</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> iframe<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span>name\n    <span class="token comment">// \u9500\u6BC1 iframe</span>\n    <span class="token comment">// iframe.contentWindow.document.write(&#39;&#39;)</span>\n    <span class="token comment">// iframe.contentWindow.close()</span>\n    <span class="token comment">// document.body.removeChild(iframe)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    ready <span class="token operator">=</span> <span class="token boolean">true</span>\n    iframe<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">&#39;source/proxy.html&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\niframe<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;target.com/target.html&#39;</span>  <span class="token comment">// \u5148\u8BBE\u7F6E\u6210\u8981\u8DE8\u57DF\u7684\u9875\u9762</span>\ndocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>iframe<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// target.com/target.html</span>\nwindow<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;some data from server or somewhere&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="location-hash" tabindex="-1"><a class="header-anchor" href="#location-hash" aria-hidden="true">#</a> location.hash</h3><p><code>location.hash</code>\u53EF\u4EE5\u8DE8\u57DF\u7684\u539F\u7406\u662F\uFF0C\u5B50\u6846\u67B6\u5177\u6709\u4FEE\u6539\u7236\u6846\u67B6<code>src</code>\u91CC<code>hash</code>\u503C\u7684\u529F\u80FD\uFF0C\u901A\u8FC7\u4FEE\u6539<code>hash</code>\u53EF\u4EE5\u4F20\u9012\u6570\u636E\uFF0C\u4E14\u9875\u9762\u4E0D\u4F1A\u5237\u65B0\u3002\u4F46\u662F\u4F20\u9012\u7684\u6570\u636E\u957F\u5EA6\u662F\u6709\u9650\u7684\u3002</p><p>\u56E0\u6B64\u4F7F\u7528\u8BE5\u65B9\u6CD5\u8DE8\u57DF\u7684\u65B9\u6848\u5C31\u662F\uFF1A</p><ul><li>\u51C6\u5907\u4E24\u4E2A/\u4E09\u4E2A\u9875\u9762\uFF08\u5982\u679C\u662F\u5728 IE\u3001Chrome \u4E0B\uFF0C\u4E0D\u540C\u6E90\u7684\u8BDD\u4E0D\u5141\u8BB8\u4FEE\u6539<code>parent.location.hash</code>\uFF0C\u5219\u9700\u8981\u4E09\u4E2A\u9875\u9762\uFF09 <ul><li>\u4E3B\u9875\u9762<code>source/main.html</code></li><li>\u4EE3\u7406\u9875\u9762<code>source/proxy.html</code>\uFF08\u89E3\u51B3\u517C\u5BB9\u6027\u95EE\u9898\uFF09</li><li>\u8981\u8DE8\u57DF\u7684\u9875\u9762<code>target.com/target.html</code></li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// source.com/main.html</span>\nwindow<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;hashchange&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// \u83B7\u53D6 hash</span>\n  <span class="token keyword">const</span> data <span class="token operator">=</span> location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> iframe <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;iframe&#39;</span><span class="token punctuation">)</span>\niframe<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>\niframe<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;target.com/target.html&#39;</span>\ndocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>iframe<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// target.com/target.html</span>\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token string">&#39;some data from server or somewhere&#39;</span>\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n  parent<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash <span class="token operator">=</span> data\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> iframe <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;iframe&#39;</span><span class="token punctuation">)</span>\n  iframe<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>\n  iframe<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;sourece.com/proxy.html#data&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// \u8FD9\u91CC\u7684 data \u9700\u8981\u505A\u7F16\u7801\u5904\u7406</span>\n  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>iframe<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// source.com/proxy.html</span>\nparent<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash <span class="token operator">=</span> self<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F18\u70B9\uFF1A</p><ul><li>\u53EF\u4EE5\u89E3\u51B3\u57DF\u540D\u5B8C\u5168\u4E0D\u540C\u7684\u8DE8\u57DF</li><li>\u53EF\u4EE5\u5B9E\u73B0\u53CC\u5411\u901A\u8BAF\uFF08\u5F85\u5206\u6790\uFF09</li></ul><p>\u7F3A\u70B9\uFF1A</p><ul><li>\u6570\u636E\u66B4\u9732\u5728 url \u4E0A\uFF0C\u6570\u636E\u4E0D\u5B89\u5168</li><li>\u6539\u53D8 hash \u4F1A\u4EA7\u751F\u5386\u53F2\u8BB0\u5F55\uFF0C\u5F71\u54CD\u7528\u6237\u4F53\u9A8C</li><li>url \u4E0A\u7684\u6570\u636E\u5927\u5C0F\u6709\u9650\u5236</li><li>\u4E0D\u652F\u6301<code>hashchange</code>\u4E8B\u4EF6\u7684\u6D4F\u89C8\u5668\uFF0C\u9700\u8981\u8F6E\u8BE2\u6765\u83B7\u53D6 url \u91CC hash \u7684\u6539\u53D8</li></ul><h3 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h3><p>WebSocket \u662F\u4E00\u79CD\u901A\u4FE1\u534F\u8BAE\uFF0C\u4F7F\u7528ws://\uFF08\u975E\u52A0\u5BC6\uFF09\u548Cwss://\uFF08\u52A0\u5BC6\uFF09\u4F5C\u4E3A\u534F\u8BAE\u524D\u7F00\u3002\u8BE5\u534F\u8BAE\u4E0D\u5B9E\u884C\u540C\u6E90\u653F\u7B56\uFF0C\u53EA\u8981\u670D\u52A1\u5668\u652F\u6301\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u5B83\u8FDB\u884C\u8DE8\u6E90\u901A\u4FE1\u3002</p><h2 id="xmlhttprequest-\u4E4B-withcredentials" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest-\u4E4B-withcredentials" aria-hidden="true">#</a> XMLHttpRequest \u4E4B withCredentials</h2><p>\u5F53\u901A\u8FC7 XMLHttpRequest \u5B9E\u4F8B\u53D1\u9001\u8DE8\u57DF Ajax \u8BF7\u6C42\u65F6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E<code>withCredentials</code>\u5C5E\u6027\u4E3A<code>true</code>\uFF0C\u5176\u4F5C\u7528\u662F\u8BF7\u6C42\u53EF\u4EE5\u643A\u5E26\u76EE\u6807\u9875\u9762\u6240\u5728\u57DF\u7684 Cookie\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nxhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https://b.com/api&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nxhr<span class="token punctuation">.</span>withCredentials <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\nxhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5047\u8BBE\u4E0A\u8FF0\u4EE3\u7801\u6240\u5728\u7684\u9875\u9762\u4E3A<code>https://a.com/page</code>\uFF0C\u5411<code>https://b.com/api</code>\u53D1\u9001\u4E86\u8DE8\u57DF Ajax \u8BF7\u6C42\uFF0C\u82E5\u662F\u8BBE\u7F6E<code>withCredentials</code>\u4E3A<code>true</code>\uFF0C\u5219\u4F1A\u5C06<code>https://b.com</code>\u57DF\u4E0B\u7684 Cookie \u90FD\u643A\u5E26\u4E0A\u3002</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>', 25);
const _hoisted_94 = {
  href: "https://zhuanlan.zhihu.com/p/28562290",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_95 = /* @__PURE__ */ createTextVNode("\u77E5\u4E4E\u4E13\u680F-\u8DE8\u57DF\u7684\u90A3\u4E9B\u4E8B\u513F");
const _hoisted_96 = {
  href: "https://github.com/wengjq/Blog/issues/2",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_97 = /* @__PURE__ */ createTextVNode("\u524D\u7AEF\u8DE8\u57DF\u95EE\u9898\u53CA\u89E3\u51B3\u65B9\u6848 #2");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u540C\u6E90\u7B56\u7565" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u9020\u6210\u8DE8\u57DF\u7684\u4E24\u79CD\u7B56\u7565" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4E3A\u4EC0\u4E48\u8981\u6709\u8DE8\u57DF\u9650\u5236" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u8DE8\u57DF\u65B9\u6CD5" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#cors-\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#jsonp" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#postmessage" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u670D\u52A1\u5668\u4EE3\u7406" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u8868\u5355\u63D0\u4EA4" }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#document-domain-\u4E3B\u57DF\u76F8\u540C\u7684\u8DE8\u57DF" }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#window-name" }, {
                default: withCtx(() => [
                  _hoisted_13
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#location-hash" }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#websocket" }, {
                default: withCtx(() => [
                  _hoisted_15
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#xmlhttprequest-\u4E4B-withcredentials" }, {
            default: withCtx(() => [
              _hoisted_16
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#reference" }, {
            default: withCtx(() => [
              _hoisted_17
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_18,
    createBaseVNode("p", null, [
      _hoisted_35,
      createBaseVNode("a", _hoisted_36, [
        _hoisted_37,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_38,
    createBaseVNode("p", null, [
      _hoisted_58,
      createBaseVNode("a", _hoisted_59, [
        _hoisted_60,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_61,
    _hoisted_62,
    _hoisted_63,
    _hoisted_64,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_65, [
          _hoisted_66,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_67, [
          _hoisted_68,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_69,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_94, [
          _hoisted_95,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_96, [
          _hoisted_97,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var crossDomain_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { crossDomain_html as default };
