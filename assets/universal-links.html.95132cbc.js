import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "universal-links",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#universal-links",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Universal Links")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528 Universal Links");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u4F18\u70B9");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u7F3A\u70B9");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5982\u4F55\u8BA9 APP \u652F\u6301 Universal Links");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("apple-app-site-association \u683C\u5F0F");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Universal Links \u914D\u7F6E\u4E2D\u7684\u5751");
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("p", null, "\u53C2\u8003\u94FE\u63A5:", -1);
const _hoisted_10 = {
  href: "https://www.jianshu.com/p/0ead88409212",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createTextVNode("iOS H5\u6253\u5F00App(\u901A\u7528\u94FE\u63A5)");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\uFF0C\u8FD9\u7BC7\u6587\u7AE0\u7279\u522B\u8BE6\u7EC6");
const _hoisted_13 = {
  href: "https://developer.apple.com/documentation/uikit/core_app/allowing_apps_and_websites_to_link_to_your_content",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Allowing Apps and Websites to Link to Your Content");
const _hoisted_15 = /* @__PURE__ */ createStaticVNode('<p>\u5728 2015 \u5E74\u7684 WWDC \u5927\u4F1A\u4E0A\uFF0CApple \u63A8\u51FA\u4E86 iOS 9 \u7684\u4E00\u4E2A\u529F\u80FD\uFF1AUniversal Links\uFF08\u901A\u7528\u94FE\u63A5\uFF09\u3002</p><p>\u5982\u679C\u4F60\u7684 APP \u652F\u6301 Universal Links\uFF0C\u90A3\u5C31\u53EF\u4EE5\u8BBF\u95EE HTTP/HTTPS \u94FE\u63A5\u76F4\u63A5\u5524\u8D77 APP \u8FDB\u5165\u7279\u5B9A\u9875\u9762\uFF0C\u4E0D\u9700\u8981\u5176\u4ED6\u989D\u5916\u5224\u65AD\uFF1B\u5982\u679C\u672A\u5B89\u88C5 APP\uFF0C\u8BBF\u95EE\u6B64\u901A\u7528\u94FE\u63A5\u65F6\u4F1A\u76F4\u63A5\u8BBF\u95EE\u8FD9\u4E2A HTTP/HTTPS \u94FE\u63A5\uFF0C\u800C\u8FD9\u4E2A\u94FE\u63A5\u662F\u4F60\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7684\u9875\u9762\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528-universal-links" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528-universal-links" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528 Universal Links</h2><p>\u4F20\u7EDF\u7684 URL Scheme \u6709\u5982\u4E0B\u75DB\u70B9\uFF1A</p><ul><li>\u5728 iOS \u4E0A\u4F1A\u6709\u786E\u8BA4\u5F39\u7A97\u63D0\u793A\u7528\u6237\u662F\u5426\u5524\u8D77 APP\uFF0C\u5BF9\u4E8E\u7528\u6237\u5524\u8D77 APP \u6765\u8BF4\uFF0C\u591A\u51FA\u4E86\u4E00\u6B65\u64CD\u4F5C\u3002\u82E5\u7528\u6237\u672A\u5B89\u88C5 APP\uFF0C\u4E5F\u4F1A\u6709\u4E2A\u63D0\u793A\u5F39\u7A97\uFF0C\u544A\u77E5\u6211\u4EEC\u201CSafari\u6D4F\u89C8\u5668\u6253\u4E0D\u5F00\u8BE5\u7F51\u9875\uFF0C\u56E0\u4E3A\u7F51\u5740\u65E0\u6548\u3002\u201D</li><li>\u4F20\u7EDF\u7684 Scheme \u8DF3\u8F6C\u65E0\u6CD5\u5F97\u77E5\u5524\u8D77 APP \u662F\u5426\u6210\u529F\uFF0CUniversal Links \u5524\u8D77 APP \u5931\u8D25\u540E\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6253\u5F00\u6B64\u94FE\u63A5\u5BF9\u5E94\u7684\u9875\u9762\u3002</li><li>URL Scheme \u5728\u5FAE\u4FE1\u3001\u5FAE\u535A\u3001QQ\u6D4F\u89C8\u5668\u3001\u624B\u767E\u4E2D\u90FD\u5DF2\u7ECF\u88AB\u7981\u6B62\u4F7F\u7528\uFF0C\u4F7F\u7528 Universal Link \u53EF\u4EE5\u907F\u5F00\u5B83\u4EEC\u7684\u5C4F\u853D\uFF08\u4F46\u622A\u6B62\u52302018\u5E748\u670821\u65E5\uFF0C\u5FAE\u4FE1\u548CQQ\u6D4F\u89C8\u5668\u5DF2\u7ECF\u7981\u6B62\u4E86 Universal Links\uFF0C\u5176\u4ED6\u4E3B\u6D41 APP \u672A\u53D1\u73B0\u6709\u7981\u6B62\uFF09\u3002</li></ul><h3 id="\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a> \u4F18\u70B9</h3><ul><li>\u552F\u4E00\u6027: \u4E0D\u50CF\u81EA\u5B9A\u4E49\u7684<code>scheme</code>\uFF0C\u56E0\u4E3A\u5B83\u4F7F\u7528\u6807\u51C6\u7684 HTTP/HTTPS \u94FE\u63A5\u5230\u4F60\u7684 WEB \u7AD9\u70B9\uFF0C\u6240\u4EE5\u5B83\u4E0D\u4F1A\u88AB\u5176\u5B83\u7684 APP \u6240\u58F0\u660E\uFF08\u5373\u4E0D\u4F1A\u51FA\u73B0\u4E24\u4E2A APP \u5171\u7528\u4E00\u4E2A<code>scheme</code>\u7684\u60C5\u51B5\uFF09\u3002\u53E6\u5916\uFF0CCustom URL scheme \u56E0\u4E3A\u662F\u81EA\u5B9A\u4E49\u7684\u534F\u8BAE\uFF0C\u6240\u4EE5\u5728\u6CA1\u6709\u5B89\u88C5 APP \u7684\u60C5\u51B5\u4E0B\u662F\u65E0\u6CD5\u76F4\u63A5\u6253\u5F00\u7684\uFF0C\u800C Universal Links \u672C\u8EAB\u662F\u4E00\u4E2A HTTP/HTTPS \u94FE\u63A5\uFF0C\u6240\u4EE5\u6709\u66F4\u597D\u7684\u517C\u5BB9\u6027\u3002</li><li>\u5B89\u5168: \u5F53\u7528\u6237\u7684\u624B\u673A\u4E0A\u5B89\u88C5\u4E86\u4F60\u7684 APP\uFF0C\u90A3\u4E48 iOS \u5C06\u53BB\u4F60\u7684\u7F51\u7AD9\u4E0A\u53BB\u4E0B\u8F7D\u4F60\u4E0A\u4F20\u4E0A\u53BB\u7684\u8BF4\u660E\u6587\u4EF6<code>apple-app-site-association</code>(\u8FD9\u4E2A\u8BF4\u660E\u6587\u4EF6\u58F0\u660E\u4E86 APP \u53EF\u4EE5\u6253\u5F00\u54EA\u4E9B\u7C7B\u578B\u7684 HTTP/HTTPS \u94FE\u63A5)\u3002\u56E0\u4E3A\u53EA\u6709\u4F60\u81EA\u5DF1\u624D\u80FD\u4E0A\u4F20\u6587\u4EF6\u5230\u4F60\u7F51\u7AD9\u7684\u6839\u76EE\u5F55,\u6240\u4EE5\u4F60\u7684\u7F51\u7AD9\u548C\u4F60\u7684 APP \u4E4B\u95F4\u7684\u5173\u8054\u662F\u5B89\u5168\u7684\u3002</li><li>\u53EF\u53D8: \u5F53\u7528\u6237\u624B\u673A\u4E0A\u6CA1\u6709\u5B89\u88C5\u4F60\u7684 APP \u7684\u65F6\u5019\uFF0CUniversal Links \u4E5F\u80FD\u591F\u5DE5\u4F5C\u3002\u5982\u679C\u4F60\u613F\u610F\uFF0C\u5728\u6CA1\u6709\u5B89\u88C5 APP \u7684\u65F6\u5019\uFF0C\u7528\u6237\u70B9\u51FB\u94FE\u63A5\uFF0C\u4F1A\u5728 Safari \u4E2D\u5C55\u793A\u4F60\u7F51\u7AD9\u7684\u5185\u5BB9\u3002</li><li>\u7B80\u5355: \u4E00\u4E2A URL \u94FE\u63A5\uFF0C\u53EF\u4EE5\u540C\u65F6\u4F5C\u7528\u4E8E\u7F51\u7AD9\u548C APP\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u7EDF\u4E00\u7684 web-native \u534F\u8BAE\u3002</li><li>\u79C1\u6709: \u5176\u5B83 APP \u53EF\u4EE5\u5728\u4E0D\u9700\u8981\u77E5\u9053\u662F\u5426\u5B89\u88C5\u4E86\u7684\u60C5\u51B5\u4E0B\u548C\u4F60\u7684 APP \u76F8\u4E92\u901A\u4FE1\u3002</li></ul><h3 id="\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a> \u7F3A\u70B9</h3><ul><li>\u53EA\u652F\u6301 iOS9 \u53CA\u4EE5\u4E0A\u7CFB\u7EDF\u3002</li><li>\u5F53\u4F7F\u7528 Universal Links \u6253\u5F00 APP \u4E4B\u540E\uFF0C\u72B6\u6001\u680F\u53F3\u4E0A\u89D2\u4F1A\u51FA\u73B0\u94FE\u63A5\u5730\u5740\uFF0C\u70B9\u51FB\u5B83\u4F1A\u53D6\u6D88 Universal Links\uFF0C\u9700\u5F15\u5BFC\u7528\u6237\u91CD\u65B0\u4F7F\u7528 Safari \u518D\u6B21\u6253\u5F00\u8BE5\u94FE\u63A5\uFF0C\u5F39\u51FA Safari \u5185\u7F6E APP \u5E7F\u544A\u6761\uFF0C\u518D\u70B9\u51FB\u6253\u5F00\u91CD\u65B0\u5F00\u542F Universal Link\u3002</li></ul><h2 id="\u5982\u4F55\u8BA9-app-\u652F\u6301-universal-links" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u8BA9-app-\u652F\u6301-universal-links" aria-hidden="true">#</a> \u5982\u4F55\u8BA9 APP \u652F\u6301 Universal Links</h2><ol><li>\u51C6\u5907\u597D\u4E00\u4E2A<strong>HTTPS</strong>\u57DF\u540D\u3002</li><li>\u5728 \u5F00\u53D1\u8005\u4E2D\u5FC3 \u7684 Identifiers \u4E0B AppIDs \u627E\u5230\u81EA\u5DF1\u7684 AppID\uFF0C\u7F16\u8F91\u6253\u5F00 Associated Domains \u670D\u52A1\u3002</li><li>\u6253\u5F00\u5DE5\u7A0B\u914D\u7F6E\u4E2D\u7684 Associated Domains \uFF0C\u5728\u5176\u4E2D\u7684 Domains \u4E2D\u586B\u5165\u4F60\u60F3\u652F\u6301\u7684\u57DF\u540D\uFF0C\u5FC5\u987B\u4EE5 applinks: \u4E3A\u524D\u7F00\u3002</li><li>\u914D\u7F6E<code>apple-app-site-association</code>\u6587\u4EF6\uFF0C\u6587\u4EF6\u540D\u5FC5\u987B\u4E3A<code>apple-app-site-association</code>\uFF0C<strong>\u4E0D\u5E26\u4EFB\u4F55\u540E\u7F00</strong>\u3002</li><li>\u4E0A\u4F20\u8BE5\u6587\u4EF6\u5230\u4F60\u7684 HTTPS \u670D\u52A1\u5668\u7684<strong>\u6839\u76EE\u5F55</strong>\u6216\u8005<code>.well-known</code>\u76EE\u5F55\u4E0B\u3002</li></ol><h3 id="apple-app-site-association-\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#apple-app-site-association-\u683C\u5F0F" aria-hidden="true">#</a> apple-app-site-association \u683C\u5F0F</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;applinks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;apps&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;details&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;appID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Y5963EFXW8.com.kwai.intl&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/app/*&quot;</span> <span class="token punctuation">]</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token comment">// ....</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;webcredentials&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n       <span class="token property">&quot;apps&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token string">&quot;MW76NQM8LG.com.jiangjia.gif&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;MW76NQM8LG.com.kwai.gifshow.beta1&quot;</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="universal-links-\u914D\u7F6E\u4E2D\u7684\u5751" tabindex="-1"><a class="header-anchor" href="#universal-links-\u914D\u7F6E\u4E2D\u7684\u5751" aria-hidden="true">#</a> Universal Links \u914D\u7F6E\u4E2D\u7684\u5751</h2><p>\u5728\u5B9E\u9645\u7684\u914D\u7F6E\u8FC7\u7A0B\u4E2D\uFF0C\u8981\u4E25\u683C\u6309\u7167\u4E0A\u9762\u7684\u6B65\u9AA4\u8FDB\u884C\uFF0C\u4F46\u4ECD\u7136\u4F1A\u9047\u5230\u4E00\u4E9B\u5751\u3002</p><ul><li>\u8DE8\u57DF\u95EE\u9898\u3002</li></ul><p>iOS 9.2 \u4EE5\u540E\uFF0C\u5FC5\u987B\u8981\u89E6\u53D1\u8DE8\u57DF\u624D\u80FD\u652F\u6301 Universal Links \u5524\u8D77 APP\u3002 iOS \u7CFB\u7EDF\u91CC\u6709\u8FD9\u6837\u4E00\u4E2A\u5224\u65AD\uFF0C\u5982\u679C\u4F60\u8981\u6253\u5F00\u7684 Universal Links \u548C \u5F53\u524D\u9875\u9762\u662F\u540C\u4E00\u57DF\u540D\uFF0CiOS \u5C06\u5C0A\u91CD\u7528\u6237\u6700\u53EF\u80FD\u7684\u610F\u56FE\uFF0C\u76F4\u63A5\u6253\u5F00\u94FE\u63A5\u6240\u5BF9\u5E94\u7684\u9875\u9762\u3002\u5982\u679C\u4E0D\u5728\u540C\u4E00\u57DF\u540D\u4E0B\uFF0C\u624D\u4F1A\u6267\u884C\u5177\u4F53\u7684\u5524\u8D77\u64CD\u4F5C\u3002</p><ul><li>Universal Links \u662F\u7A7A\u9875\u9762</li></ul><p>Universal Links \u672C\u8D28\u4E0A\u662F\u4E2A\u7A7A\u9875\u9762\uFF0C\u5982\u679C\u672A\u5B89\u88C5 APP\uFF0CUniversal Links \u4F1A\u88AB\u5F53\u505A\u666E\u901A\u7684\u9875\u9762\u94FE\u63A5\uFF0C\u81EA\u7136\u4F1A\u8DF3\u5230 404 \u9875\u9762\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5C06\u5B83\u7ED1\u5B9A\u5230\u6211\u4EEC\u7684\u4E2D\u8F6C\u9875\u6216\u8005\u4E0B\u8F7D\u9875\u3002</p>', 19);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528-universal-links" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4F18\u70B9" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u7F3A\u70B9" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5982\u4F55\u8BA9-app-\u652F\u6301-universal-links" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#apple-app-site-association-\u683C\u5F0F" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#universal-links-\u914D\u7F6E\u4E2D\u7684\u5751" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_9,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_10, [
          _hoisted_11,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_12
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_13, [
          _hoisted_14,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_15,
    createVNode(_component_global_config)
  ], 64);
}
var universalLinks_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { universalLinks_html as default };
