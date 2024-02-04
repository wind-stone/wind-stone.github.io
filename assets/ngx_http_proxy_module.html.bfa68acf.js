import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "ngx-http-proxy-module-\u6A21\u5757",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#ngx-http-proxy-module-\u6A21\u5757",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" ngx_http_proxy_module \u6A21\u5757")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u6307\u4EE4");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("proxy_pass");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("proxy_set_header");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5185\u5D4C\u53D8\u91CF");
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<h2 id="\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a> \u6307\u4EE4</h2><h3 id="proxy-pass" tabindex="-1"><a class="header-anchor" href="#proxy-pass" aria-hidden="true">#</a> proxy_pass</h3><div class="custom-container tip"><p class="custom-container-title">proxy_pass</p><p>Syntax: <code>proxy_pass URL;</code></p><p>Default: \u2014</p><p>Context: <code>location</code>, if in location, limit_except</p></div><p>\u8BBE\u7F6E\u88AB\u4EE3\u7406\u7684\u670D\u52A1\u5668\u7684\u534F\u8BAE\u548C\u5730\u5740\uFF0C\u4EE5\u53CA\u4E00\u4E2A\u53EF\u9009\u7684\u4EE5\u8BA9<code>location</code>\u6620\u5C04\u5230\u7684 URI\u3002\u534F\u8BAE\u53EF\u4EE5\u6307\u5B9A\u4E3A<code>http</code>\u6216<code>https</code>\u3002\u5730\u5740\u53EF\u4EE5\u6307\u5B9A\u4E3A\u57DF\u540D\u6216 IP \u5730\u5740\uFF0C\u4EE5\u53CA\u4E00\u4E2A\u53EF\u9009\u7684\u7AEF\u53E3:</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>proxy_pass http://localhost:8000/uri/;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6216\u4E00\u4E2A UNIX \u57DF\u7684\u5957\u63A5\u5B57\u8DEF\u5F84\uFF0C\u901A\u8FC7\u5728<code>unix:</code>\u4E4B\u540E\u6307\u5B9A:</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>proxy_pass http://unix:/tmp/backend.socket:/uri/;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>', 7);
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u82E5\u662F\u57DF\u540D\u89E3\u6790\u5230\u591A\u4E2A\u5730\u5740\uFF0C\u8FD9\u4E9B\u5730\u5740\u5C06\u5FAA\u73AF\u4F7F\u7528\u3002\u6B64\u5916\uFF0C\u5730\u5740\u8FD8\u53EF\u901A\u8FC7");
const _hoisted_15 = {
  href: "http://nginx.org/en/docs/http/ngx_http_upstream_module.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u670D\u52A1\u5668\u7EC4\uFF08server group\uFF09");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u6307\u5B9A\u3002");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u53C2\u6570\u503C\u53EF\u4EE5\u5305\u542B\u53D8\u91CF\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u82E5\u662F\u6307\u5B9A\u5730\u5740\u4E3A\u57DF\u540D\uFF0C\u5219\u4F1A\u5728\u4E0A\u8FF0\u63D0\u53CA\u7684\u670D\u52A1\u5668\u7EC4\u91CC\u641C\u7D22\uFF0C\u82E5\u662F\u627E\u4E0D\u5230\uFF0C\u5219\u4F7F\u7528");
const _hoisted_19 = {
  href: "http://nginx.org/en/docs/http/ngx_http_core_module.html#resolver",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createTextVNode("resolver");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("\u786E\u5B9A\u3002");
const _hoisted_22 = /* @__PURE__ */ createStaticVNode('<p>\u8BF7\u6C42 URI \u5C06\u6309\u5982\u4E0B\u6240\u8FF0\u4F20\u9012\u7ED9\u670D\u52A1\u5668:</p><ul><li>\u82E5\u662F<code>proxy_pass</code>\u6307\u5B9A\u4E86 URI\uFF0C\u5219\u5F53\u8BF7\u6C42\u4F20\u9012\u7ED9\u670D\u52A1\u5668\u65F6\uFF0C\u5339\u914D\u4E86<code>location</code>\u7684\u6807\u51C6\u5316\u8BF7\u6C42\u7684 URI \u90E8\u5206\u5C06\u88AB\u6307\u4EE4\u91CC\u6307\u5B9A\u7684 URI \u66FF\u4EE3:</li></ul><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>location /example/ {\n  proxy_pass http://127.0.0.1/remote/;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u8BD1\u8005\u6CE8</p><p>\u6BD4\u5982\uFF0C\u8BF7\u6C42<code>/example/main.html</code>\u5C06\u5206\u53D1\u5230<code>http://127.0.0.1/remote/main.html</code></p></div><ul><li>\u82E5\u662F<code>proxy_pass</code>\u6CA1\u6709\u6307\u5B9A URI\uFF0C\u5219\u5F53\u539F\u59CB\u8BF7\u6C42\u88AB\u5904\u7406\u65F6\uFF0C\u8BF7\u6C42\u7684 URI \u5C06\u4EE5\u4E0E\u5BA2\u6237\u7AEF\u53D1\u9001\u7684\u4E00\u6837\u7684\u5F62\u5F0F\u4F20\u9012\u7ED9\u670D\u52A1\u5668\uFF0C\u6216\u5F53\u5904\u7406\u6539\u53D8\u540E\u7684 URI \u65F6\uFF0C\u6574\u4E2A\u6807\u51C6\u5316\u7684\u8BF7\u6C42 URI \u5C06\u4F20\u9012\u7ED9\u670D\u52A1\u5668:</li></ul><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>location /example/ {\n    proxy_pass http://127.0.0.1;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u8BD1\u8005\u6CE8</p><p>\u6BD4\u5982\uFF0C\u8BF7\u6C42<code>/example/main.html</code>\u5C06\u5206\u53D1\u5230<code>http://127.0.0.1/example/main.html</code></p></div><div class="custom-container warning"><p class="custom-container-title">\u8BD1\u8005\u6CE8</p><p>\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C<code>http://127.0.0.1</code>\u4E0D\u80FD\u6DFB\u52A0\u5C3E\u659C\u6760\uFF0C\u52A0\u4E86\u5C3E\u659C\u6760\u7684\u8BDD\uFF0C\u5C31\u4EE3\u8868\u4E86\u5B58\u5728<code>/</code>\u7684 URI\u3002</p></div><div class="custom-container warning"><p class="custom-container-title">\u63D0\u793A</p><p>\u5728 1.1.12 \u7248\u672C\u4E4B\u524D\uFF0C\u82E5\u662F<code>proxy_pass</code>\u6CA1\u6307\u5B9A URI\uFF0C\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u539F\u59CB\u8BF7\u6C42 URI \u5C06\u4EE3\u66FF\u6539\u53D8\u540E\u7684 URI \u4F20\u9012\u7ED9\u670D\u52A1\u5668\u3002</p></div><p>\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u80FD\u786E\u5B9A\u88AB\u4EE3\u66FF\u7684\u8BF7\u6C42 URI \u90E8\u5206\u3002</p><ul><li>\u5F53\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u6307\u5B9A<code>location</code>\uFF0C\u4E14\u5728\u547D\u540D\u7684<code>location</code>\u4E4B\u5185\u3002\u5728\u8FD9\u4E9B\u60C5\u51B5\u4E0B\uFF0C<code>proxy_pass</code>\u4E0D\u80FD\u5E26\u6709 URI\u3002</li><li>\u5F53 URI \u5728\u88AB\u4EE3\u7406\u7684<code>location</code>\u4E4B\u5185\u4F7F\u7528<code>rewrite</code>\u6307\u4EE4\u6539\u53D8\u4E86\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u914D\u7F6E\u8FD8\u88AB\u7528\u4E8E\u5904\u7406\u8BF7\u6C42\uFF08<code>break</code>\uFF09\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6307\u4EE4\u91CC\u6307\u5B9A\u7684 URI \u5C06\u88AB\u5FFD\u7565\uFF0C\u4E14\u6574\u4E2A\u6539\u53D8\u4E86\u7684\u8BF7\u6C42 URI \u5C06\u88AB\u4F20\u9012\u7ED9\u670D\u52A1\u5668\u3002</li></ul><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>location /name/ {\n    rewrite    /name/([^/]+) /users?name=$1 break;\n    proxy_pass http://127.0.0.1;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u5F53<code>proxy_pass</code>\u91CC\u4F7F\u7528\u4E86\u53D8\u91CF\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u6307\u4EE4\u91CC\u6307\u5B9A\u4E86 URI\uFF0C\u5219\u8BE5 URI \u5C06\u4EE3\u66FF\u539F\u59CB\u7684\u8BF7\u6C42 URI \u4F20\u9012\u7ED9\u670D\u52A1\u5668\u3002</li></ul><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>location /name/ {\n    proxy_pass http://127.0.0.1$request_uri;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>WebSocket</code>\u4EE3\u7406\u9700\u8981\u7279\u6B8A\u7684\u914D\u7F6E\uFF0C\u4E14\u53EA\u5728 1.3.13 \u7248\u672C\u4E4B\u540E\u652F\u6301\u3002</p><h3 id="proxy-set-header" tabindex="-1"><a class="header-anchor" href="#proxy-set-header" aria-hidden="true">#</a> proxy_set_header</h3><div class="custom-container tip"><p class="custom-container-title">proxy_set_header</p><p>Syntax: <code>proxy_set_header field value;</code></p><p>Default:</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>proxy_set_header Host $proxy_host;\nproxy_set_header Connection close;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Context: http, server, location</p></div><p>\u5141\u8BB8\u91CD\u5B9A\u4E49\u6216\u8FFD\u52A0\u8BF7\u6C42\u5934\u90E8\u91CC\u7684\u9879\uFF0C\u5E76\u4F20\u9012\u7ED9\u670D\u52A1\u5668\u3002\u8BF7\u6C42\u5934\u90E8\u91CC\u9879\u7684\u503C\u53EF\u4EE5\u662F\u6587\u672C\u3001\u53D8\u91CF\uFF0C\u6216\u5B83\u4EEC\u7684\u7EC4\u5408\u3002\u5F53\u4E14\u4EC5\u5F53\u5F53\u524D\u5C42\u7EA7\u91CC\u6CA1\u6709\u5B9A\u4E49<code>proxy_set_header</code>\u6307\u4EE4\u65F6\uFF0C\u8FD9\u4E9B\u6307\u4EE4\u5C06\u4ECE\u5148\u524D\u7684\u5C42\u7EA7\u91CC\u7EE7\u627F\u3002\u9ED8\u8BA4\u5730\uFF0C\u53EA\u6709\u4E24\u9879\u4F1A\u91CD\u65B0\u5B9A\u4E49:</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>proxy_set_header Host       $proxy_host;\nproxy_set_header Connection close;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u82E5\u662F\u542F\u7528\u4E86\u7F13\u5B58\uFF0C\u539F\u59CB\u8BF7\u6C42\u5934\u90E8\u91CC\u7684<code>If-Modified-Since</code>\u3001<code>If-Unmodified-Since</code>\u3001<code>If-None-Match</code>\u3001<code>If-Match</code>\u3001<code>Range</code>\u3001<code>If-Range</code>\uFF0C\u5C06\u4E0D\u4F1A\u4F20\u9012\u7ED9\u88AB\u4EE3\u7406\u7684\u670D\u52A1\u5668\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\uFF0C\u4F20\u9012\u4E00\u4E2A\u4E0D\u6539\u53D8\u7684<code>Host</code>\u8BF7\u6C42\u5934\u90E8:</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>proxy_set_header Host       $http_host;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F46\u82E5\u662F\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u90E8\u91CC\u6CA1\u6709<code>Host</code>\u9879\uFF0C\u8BE5\u9879\u5C31\u4E0D\u4F1A\u4F20\u9012\u7ED9\u670D\u52A1\u5668\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6700\u597D\u4F7F\u7528<code>$host</code>\u53D8\u91CF: \u5F53\u8BF7\u6C42\u5934\u90E8\u91CC\u6709<code>Host</code>\u65F6\uFF0C\u5219\u4F20\u9012\u7ED9\u670D\u52A1\u5668\u7684\u5C31\u662F\u8BE5<code>Host</code>\u7684\u503C\uFF1B\u5F53\u8BF7\u6C42\u5934\u90E8\u91CC\u6CA1\u6709<code>Host</code>\u65F6\uFF0C\u5219\u4F20\u9012\u7684\u5C31\u662F\u670D\u52A1\u5668\u7684\u4E3B\u57DF\u540D\u3002</p><p>\u6B64\u5916\uFF0C\u670D\u52A1\u5668\u4E3B\u57DF\u540D\u53EF\u4EE5\u4E0E\u670D\u52A1\u5668\u7684\u7AEF\u53E3\u4E00\u8D77\u4F20\u9012:</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>proxy_set_header Host       $host:$proxy_port;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u82E5\u662F\u8BF7\u6C42\u5934\u90E8\u7684\u67D0\u4E00\u9879\u662F\u7A7A\u5B57\u7B26\u4E32\uFF0C\u5219\u8FD9\u4E00\u9879\u5C31\u4E0D\u4F1A\u4F20\u9012\u7ED9\u88AB\u4EE3\u7406\u7684\u670D\u52A1\u5668:</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>proxy_set_header Accept-Encoding &quot;&quot;;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u8BD1\u8005\u6CE8</p><p><code>$http_host</code>\u5C06\u53D6\u5BA2\u6237\u7AEF\u8BF7\u6C42\u65F6\u7684<code>Host</code>\uFF0C\u4E00\u822C\u662F\u57DF\u540D\uFF1B<code>$proxy_host</code>\u662F\u88AB\u8F6C\u53D1\u7684\u670D\u52A1\u5668\u7684 IP \u5730\u5740\u3002</p></div><h2 id="\u5185\u5D4C\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5185\u5D4C\u53D8\u91CF" aria-hidden="true">#</a> \u5185\u5D4C\u53D8\u91CF</h2><p><code>ngx_http_proxy_module</code>\u6A21\u5757\u652F\u6301\u4E00\u4E9B\u5185\u5D4C\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5728<code>proxy_set_header</code>\u6307\u4EE4\u91CC\u7EC4\u6210<code>headers</code>\u3002</p><ul><li><code>$proxy_host</code><ul><li><code>proxy_pass</code>\u6307\u4EE4\u91CC\u6307\u5B9A\u7684\u88AB\u4EE3\u7406\u7684\u670D\u52A1\u5668\u7684\u540D\u79F0\u548C\u7AEF\u53E3</li></ul></li><li><code>$proxy_port</code><ul><li><code>proxy_pass</code>\u6307\u4EE4\u91CC\u6307\u5B9A\u7684\u88AB\u4EE3\u7406\u7684\u670D\u52A1\u5668\u7684\u7AEF\u53E3\uFF0C\u6216\u534F\u8BAE\u7684\u9ED8\u8BA4\u7AEF\u53E3</li></ul></li><li><code>$proxy_add_x_forwarded_for</code><ul><li>\u5176\u503C\u4E3A: \u5C06<code>$remote_addr</code>\u53D8\u91CF\u4F1A\u8FFD\u52A0\u5728\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u91CC\u7684<code>X-Forwarded-For</code>\u9879\u4E4B\u540E\uFF0C\u5E76\u7528\u9017\u53F7\u5206\u79BB\u3002</li><li>\u82E5\u662F\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u91CC\u6CA1\u6709<code>X-Forwarded-For</code>\u9879\uFF0C\u5219<code>$proxy_add_x_forwarded_for</code>\u53D8\u91CF\u7684\u503C\u7B49\u540C\u4E8E<code>$remote_addr</code>\u53D8\u91CF\u3002</li></ul></li></ul>', 31);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6307\u4EE4" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#proxy-pass" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#proxy-set-header" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5185\u5D4C\u53D8\u91CF" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_7,
    createBaseVNode("p", null, [
      _hoisted_14,
      createBaseVNode("a", _hoisted_15, [
        _hoisted_16,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_17
    ]),
    createBaseVNode("p", null, [
      _hoisted_18,
      createBaseVNode("a", _hoisted_19, [
        _hoisted_20,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_21
    ]),
    _hoisted_22,
    createVNode(_component_global_config)
  ], 64);
}
var ngx_http_proxy_module_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ngx_http_proxy_module_html as default };
