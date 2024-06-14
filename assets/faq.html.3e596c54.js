import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "faq",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#faq",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" FAQ")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u4E3A\u4EC0\u4E48 Chrome \u6D4F\u89C8\u5668\u7684 UA \u91CC\u4F1A\u5305\u542B AppleWebkit\uFF1F");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u73B0\u4EE3\u6D4F\u89C8\u5668\u91CC\u6253\u5F00\u591A\u4E2A Tab\uFF0C\u6BCF\u4E2A Tab \u7684\u7AEF\u53E3\u662F\u4E00\u6837\u7684\u5417\uFF1F");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u4E3A\u4EC0\u4E48\u6709\u65F6\u8BBF\u95EE HTTP \u7684 URL \u4F1A\u53D8\u6210\u8BBF\u95EE HTTPS \u7684 URL\uFF1F");
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<h2 id="\u4E3A\u4EC0\u4E48-chrome-\u6D4F\u89C8\u5668\u7684-ua-\u91CC\u4F1A\u5305\u542B-applewebkit" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48-chrome-\u6D4F\u89C8\u5668\u7684-ua-\u91CC\u4F1A\u5305\u542B-applewebkit" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48 Chrome \u6D4F\u89C8\u5668\u7684 UA \u91CC\u4F1A\u5305\u542B AppleWebkit\uFF1F</h2><p>UA \u662F\u6D4F\u89C8\u5668\u7684\u8EAB\u4EFD\u8BC1\u3002\u901A\u5E38\uFF0C\u5728\u53D1\u9001 HTTP \u8BF7\u6C42\u65F6\uFF0CUA \u4F1A\u9644\u5E26\u5728 HTTP \u7684\u8BF7\u6C42\u5934\u4E2D<code>user-agent</code>\u5B57\u6BB5\u4E2D\uFF0C\u8FD9\u6837\u670D\u52A1\u5668\u5C31\u4F1A\u77E5\u9053\u6D4F\u89C8\u5668\u7684\u57FA\u7840\u4FE1\u606F\uFF0C\u7136\u540E\u670D\u52A1\u5668\u4F1A\u6839\u636E\u4E0D\u540C\u7684 UA \u8FD4\u56DE\u4E0D\u540C\u7684\u9875\u9762\u5185\u5BB9\uFF0C\u6BD4\u5982\u624B\u673A\u4E0A\u8FD4\u56DE\u624B\u673A\u7684\u6837\u5F0F\uFF0CPC \u5C31\u8FD4\u56DE PC \u7684\u6837\u5F0F\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u7684\u63A7\u5236\u53F0\u4E2D\u8F93\u5165<code>navigator.userAgent</code>\u6765\u67E5\u770B\u5F53\u524D\u6D4F\u89C8\u5668\u7684UA\u4FE1\u606F\u3002</p><p>FireFox \u4E2D\u7684\u6253\u5370\u7684\u4FE1\u606F\u662F\uFF1A<code>&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:68.0) Gecko/20100101 Firefox/68.0&quot;</code></p><p>Chrome \u4E2D\u6253\u5370\u7684\u4FE1\u606F\u662F\uFF1A<code>&quot;Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Mobile Safari/537.36&quot;</code></p><p>\u5B89\u5353\u7CFB\u7EDF\u4E2D\u7684 Chrome \u6D4F\u89C8\u5668\uFF1A<code>&quot;Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Mobile Safari/537.36&quot;</code></p><p>\u6211\u4EEC\u77E5\u9053\u4E86\u670D\u52A1\u5668\u4F1A\u6839\u636E\u4E0D\u540C\u7684 UA \u6765\u9488\u5BF9\u6027\u5730\u8BBE\u8BA1\u4E0D\u540C\u9875\u9762\uFF0C\u6240\u4EE5\u5F53\u51FA\u4E86\u4E00\u6B3E\u65B0\u6D4F\u89C8\u5668\u65F6\uFF0C\u4ED6\u5982\u679C\u4F7F\u7528\u81EA\u5DF1\u72EC\u4E00\u65E0\u4E8C\u7684 UA\uFF0C\u90A3\u4E48\u4E4B\u524D\u7684\u5F88\u591A\u670D\u52A1\u5668\u8FD8\u9700\u8981\u9488\u5BF9\u4ED6\u6765\u505A\u9875\u9762\u9002\u914D\uFF0C\u8FD9\u663E\u7136\u662F\u4E0D\u53EF\u80FD\u7684\uFF0C\u6BD4\u5982Chrome \u53D1\u5E03\u65F6\u4ED6\u4F1A\u5728\u4ED6\u7684 UA \u4E2D\u4F7F\u7528<code>Mozilla</code>\uFF0C<code>AppleWebKit</code>\u7B49\u5173\u952E\u5B57\u6BB5\uFF0C\u7528\u6765\u8868\u793A\u4ED6\u540C\u65F6\u652F\u6301 Mozilla \u548C AppleWebKit\uFF0C\u7136\u540E\u518D\u5728\u6700\u540E\u52A0\u4E0A\u4ED6\u81EA\u5DF1\u7684\u6807\u793A\uFF0C\u5982<code>Chrome/xxx</code>\u3002</p><p>\u8FD9\u5C31\u89E3\u91CA\u4E86\u4E3A\u4EC0\u4E48\u4F60\u67E5\u770B\u7684\u4FE1\u606F\u4E2D\u542B\u6709 WebKit \u5B57\u6837\u3002</p><h2 id="\u73B0\u4EE3\u6D4F\u89C8\u5668\u91CC\u6253\u5F00\u591A\u4E2A-tab-\u6BCF\u4E2A-tab-\u7684\u7AEF\u53E3\u662F\u4E00\u6837\u7684\u5417" tabindex="-1"><a class="header-anchor" href="#\u73B0\u4EE3\u6D4F\u89C8\u5668\u91CC\u6253\u5F00\u591A\u4E2A-tab-\u6BCF\u4E2A-tab-\u7684\u7AEF\u53E3\u662F\u4E00\u6837\u7684\u5417" aria-hidden="true">#</a> \u73B0\u4EE3\u6D4F\u89C8\u5668\u91CC\u6253\u5F00\u591A\u4E2A Tab\uFF0C\u6BCF\u4E2A Tab \u7684\u7AEF\u53E3\u662F\u4E00\u6837\u7684\u5417\uFF1F</h2><p>\u73B0\u4EE3\u6D4F\u89C8\u5668\u91CC\u53EF\u4EE5\u540C\u65F6\u6253\u5F00\u591A\u4E2A Tab\uFF0C\u8FD9\u4E9B Tab \u7684\u7AEF\u53E3\u662F\u4E00\u6837\u7684\uFF0C\u7F51\u7EDC\u8FDB\u7A0B\u4F1A\u6807\u8BB0\u54EA\u4E2A TCP \u94FE\u63A5\u5C5E\u4E8E\u54EA\u4E2A Tab\uFF0C\u5F53\u63A5\u6536\u5230\u6570\u636E\u4E4B\u540E\uFF0C\u4F1A\u5C06\u6570\u636E\u5206\u53D1\u7ED9\u5BF9\u5E94 Tab \u7684\u6E32\u67D3\u8FDB\u7A0B\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u6709\u65F6\u8BBF\u95EE-http-\u7684-url-\u4F1A\u53D8\u6210\u8BBF\u95EE-https-\u7684-url" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u6709\u65F6\u8BBF\u95EE-http-\u7684-url-\u4F1A\u53D8\u6210\u8BBF\u95EE-https-\u7684-url" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u6709\u65F6\u8BBF\u95EE HTTP \u7684 URL \u4F1A\u53D8\u6210\u8BBF\u95EE HTTPS \u7684 URL\uFF1F</h2><p>\u6709\u4E9B\u7F51\u7AD9\uFF0C\u5F53\u6211\u4EEC\u4F7F\u7528 HTTP \u7684 URL \u53BB\u8BBF\u95EE\u65F6\uFF0C\u4F1A\u7ACB\u5373\u53D8\u6210\u8BBF\u95EE\u5176 HTTPS \u7684 URL\uFF0C\u6BD4\u5982\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u8F93\u5165<code>http://blog.windstone.cc</code>\u5E76\u56DE\u8F66\uFF0C\u9875\u9762\u5C55\u793A\u65F6\u5730\u5740\u680F\u7684 URL \u53D8\u6210\u4E86<code>https://blog.windstone.cc</code>\uFF0C\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F</p><p>\u5B9E\u9645\u4E0A\uFF0C\u8FD9\u662F\u56E0\u4E3A\u67D0\u4E9B\u7F51\u7AD9\u5F3A\u5236\u8BA9\u7528\u6237\u4F7F\u7528 HTTPS \u8BBF\u95EE\u5176\u7F51\u7AD9\u3002\u5176\u5B9E\u73B0\u65B9\u5F0F\u662F\uFF0C\u4EE5\u8BBF\u95EE<code>http://blog.windstone.cc</code>\u4E3A\u4F8B\uFF0C\u670D\u52A1\u5668\u4F1A\u8FD4\u56DE 301 Moved Permanently \u5E76\u901A\u8FC7\u54CD\u5E94\u5934\u91CC\u7684 Location \u91CD\u5B9A\u5411\u5230<code>https://blog.windstone.cc</code>\u3002</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>General\n    Request URL: http://blog.windstone.cc/\n    Request Method: GET\n    Status Code: 301 Moved Permanently\n    Remote Address: 127.0.0.1:8888\n    Referrer Policy: no-referrer-when-downgrade\n\nResponse Headers\n    Accept-Ranges: bytes\n    Age: 3339\n    Content-Length: 162\n    Content-Type: text/html\n    Date: Thu, 02 Jan 2020 04:24:26 GMT\n    Location: https://blog.windstone.cc/\n    Proxy-Connection: keep-alive\n    Server: GitHub.com\n    Vary: Accept-Encoding\n    Via: 1.1 varnish\n    X-Cache: HIT\n    X-Cache-Hits: 1\n    X-Fastly-Request-ID: 7df7dc01fd71ce991d34501ace927eb9f9b8a05d\n    X-GitHub-Request-Id: F038:497C:479560:5F190D:5E0D636F\n    X-Served-By: cache-hkg17928-HKG\n    X-Timer: S1577939066.332016,VS0,VE0\n\nRequest Headers\n    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3\n    Accept-Encoding: gzip, deflate\n    Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,ru;q=0.7,zh-TW;q=0.6\n    Cache-Control: no-cache\n    Host: blog.windstone.cc\n    Pragma: no-cache\n    Proxy-Connection: keep-alive\n    Upgrade-Insecure-Requests: 1\n    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div>', 14);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4E3A\u4EC0\u4E48-chrome-\u6D4F\u89C8\u5668\u7684-ua-\u91CC\u4F1A\u5305\u542B-applewebkit" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u73B0\u4EE3\u6D4F\u89C8\u5668\u91CC\u6253\u5F00\u591A\u4E2A-tab-\u6BCF\u4E2A-tab-\u7684\u7AEF\u53E3\u662F\u4E00\u6837\u7684\u5417" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4E3A\u4EC0\u4E48\u6709\u65F6\u8BBF\u95EE-http-\u7684-url-\u4F1A\u53D8\u6210\u8BBF\u95EE-https-\u7684-url" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_6,
    createVNode(_component_global_config)
  ], 64);
}
var faq_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { faq_html as default };
