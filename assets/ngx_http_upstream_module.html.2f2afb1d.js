import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "ngx-http-upstream-module-\u6A21\u5757",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#ngx-http-upstream-module-\u6A21\u5757",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" ngx_http_upstream_module \u6A21\u5757")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u914D\u7F6E\u793A\u4F8B");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u6307\u4EE4");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("upstream");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("server");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("hash");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("ip_hash");
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<p><code>ngx_http_upstream_module</code>\u6A21\u5757\u7528\u4E8E\u5B9A\u4E49\u4E00\u7EC4\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u88AB<code>proxy_pass</code>\u3001<code>fastcgi_pass</code>\u3001<code>uwsgi_pass</code>\u3001<code>scgi_pass</code>\u3001<code>memcached_pas</code>\u3001<code>grpc_pass</code>\u6307\u5B9A\u5F15\u7528\u3002</p><h2 id="\u914D\u7F6E\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u793A\u4F8B" aria-hidden="true">#</a> \u914D\u7F6E\u793A\u4F8B</h2><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>upstream backend {\n    server backend1.example.com       weight=5;\n    server backend2.example.com:8080;\n    server unix:/tmp/backend3;\n\n    server backup1.example.com:8080   backup;\n    server backup2.example.com:8080   backup;\n}\n\nserver {\n    location / {\n        proxy_pass http://backend;\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u4F5C\u4E3A\u5546\u4E1A\u4ED8\u8D39\u529F\u80FD\u7684\u4E00\u90E8\u5206\uFF0C\u5E26\u6709\u5468\u671F\u6027\u5065\u5EB7\u68C0\u67E5\u7684\u52A8\u6001\u914D\u7F6E\u7EC4\u4E5F\u662F\u53EF\u7528\u7684:</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>resolver 10.0.0.1;\n\nupstream dynamic {\n    zone upstream_dynamic 64k;\n\n    server backend1.example.com      weight=5;\n    server backend2.example.com:8080 fail_timeout=5s slow_start=30s;\n    server 192.0.2.1                 max_fails=3;\n    server backend3.example.com      resolve;\n    server backend4.example.com      service=http resolve;\n\n    server backup1.example.com:8080  backup;\n    server backup2.example.com:8080  backup;\n}\n\nserver {\n    location / {\n        proxy_pass http://dynamic;\n        health_check;\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a> \u6307\u4EE4</h2><h3 id="upstream" tabindex="-1"><a class="header-anchor" href="#upstream" aria-hidden="true">#</a> upstream</h3><div class="custom-container tip"><p class="custom-container-title">\u4F7F\u7528\u8BF4\u660E</p><p>Syntax: <code>upstream name { ... }</code></p><p>Default: \u2014</p><p>Context: <code>http</code></p></div><p>\u5B9A\u4E49\u4E00\u7EC4\u670D\u52A1\u5668\u3002\u8FD9\u4E9B\u670D\u52A1\u5668\u53EF\u4EE5\u76D1\u542C\u4E0D\u540C\u7684\u7AEF\u53E3\u3002\u6B64\u5916\uFF0C\u8FD8\u53EF\u4EE5\u6DF7\u5408\u5B9A\u4E49\u76D1\u542C TCP \u548C UNIX \u57DF\u5957\u63A5\u5B57\u7684\u670D\u52A1\u5668\u3002</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>upstream backend {\n    server backend1.example.com weight=5;\n    server 127.0.0.1:8080       max_fails=3 fail_timeout=30s;\n    server unix:/tmp/backend3;\n\n    server backup1.example.com backup;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u9ED8\u8BA4\u5730\uFF0C\u8BF7\u6C42\u901A\u8FC7\u4F7F\u7528\u5E26\u6743\u91CD\u7684\u5FAA\u73AF\u5E73\u8861\u65B9\u6CD5\u5206\u53D1\u5230\u8FD9\u4E9B\u670D\u52A1\u5668\u4E0A\u3002\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u91CC\uFF0C\u6BCF 7 \u4E2A\u8BF7\u6C42\u4F1A\u5982\u4E0B\u5206\u53D1: 5 \u4E2A\u8BF7\u6C42\u5206\u53D1\u5230<code>backend1.example.com</code>\uFF0C1 \u4E2A\u8BF7\u6C42\u5206\u53D1\u5230<code>127.0.0.1:8080</code>\uFF0C1 \u4E2A\u8BF7\u6C42\u5206\u53D1\u5230<code>backup1.example.com</code>\u3002\u82E5\u662F\u4E0E\u4E00\u4E2A\u670D\u52A1\u5668\u901A\u4FE1\u7684\u8FC7\u7A0B\u4E2D\u53D1\u751F\u9519\u8BEF\uFF0C\u8BF7\u6C42\u5C06\u4F20\u9012\u5230\u4E0B\u4E00\u4E2A\u670D\u52A1\u5668\u4E0A\uFF0C\u76F4\u5230\u6240\u6709\u53EF\u7528\u7684\u670D\u52A1\u5668\u90FD\u5C1D\u8BD5\u8FC7\u3002\u82E5\u662F\u6CA1\u6CD5\u4ECE\u4EFB\u610F\u4E00\u4E2A\u670D\u52A1\u5668\u4E0A\u83B7\u5F97\u4E00\u4E2A\u6210\u529F\u7684\u76F8\u5E94\uFF0C\u5BA2\u6237\u7AEF\u5C06\u6536\u5230\u4E0E\u6700\u540E\u4E00\u4E2A\u670D\u52A1\u5668\u901A\u4FE1\u7684\u7ED3\u679C\u3002</p><h3 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> server</h3><div class="custom-container tip"><p class="custom-container-title">\u4F7F\u7528\u8BF4\u660E</p><p>Syntax: <code>server address [parameters];</code></p><p>Default: \u2014</p><p>Context: <code>upstream</code></p></div><p>\u5B9A\u4E49\u4E00\u4E2A\u670D\u52A1\u5668\u7684\u5730\u5740\u548C\u5176\u4ED6\u7684\u53C2\u6570\u3002\u5730\u5740\u53EF\u6307\u5B9A\u4E3A\u57DF\u540D\u6216 IP \u5730\u5740\uFF0C\u5E76\u643A\u5E26\u4E00\u4E2A\u53EF\u9009\u7684\u7AEF\u53E3\uFF1B\u6216\u6307\u5B9A\u4E3A\u4E00\u4E2A UNIX \u57DF\u5957\u63A5\u5B57\u8DEF\u5F84\uFF0C\u8DEF\u5F84\u524D\u6709<code>unix:</code>\u524D\u7F00\u3002\u82E5\u662F\u7AEF\u53E3\u6CA1\u6307\u5B9A\uFF0C\u9ED8\u8BA4\u4F7F\u7528<code>80</code>\u7AEF\u53E3\u3002\u89E3\u6790\u5230\u591A\u4E2A IP \u5730\u5740\u7684\u57DF\u540D\uFF0C\u4E00\u6B21\u5B9A\u4E49\u4E86\u591A\u4E2A\u670D\u52A1\u5668\u3002</p><p>\u53EF\u4EE5\u5B9A\u4E49\u7684\u53C2\u6570\u5982\u4E0B:</p><ul><li><code>weight=number</code><ul><li>\u8BBE\u7F6E\u670D\u52A1\u5668\u7684\u6743\u91CD\uFF0C\u9ED8\u8BA4\u662F<code>1</code>\u3002</li></ul></li><li><code>max_conns=number</code><ul><li>\u9650\u5236\u540C\u65F6\u8FDE\u63A5\u5230\u88AB\u4EE3\u7406\u670D\u52A1\u5668\u7684\u6700\u5927\u6D3B\u8DC3\u8FDE\u63A5\u6570\uFF081.11.5\uFF09\u3002\u9ED8\u8BA4\u503C\u662F<code>0</code>\uFF0C\u610F\u5473\u7740\u6CA1\u6709\u9650\u5236\u3002\u82E5\u662F\u670D\u52A1\u5668\u7EC4\u6CA1\u6709\u9A7B\u7559\u5728\u5171\u4EAB\u5185\u5B58\u91CC\uFF0C\u5219\u8FD9\u4E2A\u9650\u5236\u5BF9\u6BCF\u4E00\u4E2A\u5DE5\u4F5C\u8FDB\u7A0B\u6709\u6548\u3002</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u82E5\u662F<code>idle keepalive</code>\u8FDE\u63A5\uFF0C\u591A\u4E2A<code>workers</code>\uFF0C\u4E14\u5171\u4EAB\u5185\u5B58\u542F\u7528\u4E86\uFF0C\u5219\u5230\u88AB\u4EE3\u7406\u670D\u52A1\u5668\u7684\u6D3B\u8DC3\u53CA\u95F2\u7F6E\u7684\u94FE\u63A5\u6570\u53EF\u80FD\u8D85\u8FC7<code>max_conns</code>\u3002</p><p>\u5728 1.5.9 \u7248\u672C\u5230 1.11.5 \u7248\u672C\uFF0C\u8FD9\u4E2A\u53C2\u6570\u662F\u5546\u4E1A\u4ED8\u8D39\u529F\u80FD\u7684\u4E00\u90E8\u5206\u3002</p></div><ul><li><code>max_fails=number</code><ul><li>\u8BBE\u7F6E\u5728<code>fail_timeout</code>\u671F\u95F4\u5185\u4E0E\u670D\u52A1\u5668\u901A\u4FE1\u5931\u8D25\u7684\u6B21\u6570\uFF0C\u8FBE\u5230\u8FD9\u4E2A\u6B21\u6570\u540E\uFF0C\u5C31\u8BA4\u4E3A\u670D\u52A1\u5668\u5728\u4E4B\u540E\u7684<code>fail_timeout</code>\u671F\u95F4\u5185\u4E0D\u53EF\u7528\u3002\u9ED8\u8BA4\u7684\u5931\u8D25\u6B21\u6570\u4E3A<code>1</code>\u3002\u82E5\u8BBE\u7F6E\u4E3A<code>0</code>\uFF0C\u5219\u7981\u7528\u8BA1\u6570\u3002\u5931\u8D25\u7684\u542B\u4E49\uFF0C\u7531<code>proxy_next_upstream</code>\u3001<code>fastcgi_next_upstream</code>\u3001<code>uwsgi_next_upstrea</code>\u3001<code>scgi_next_upstream</code>\u3001<code>memcached_next_upstream</code>\u3001<code>grpc_next_upstream</code>\u7B49\u6307\u4EE4\u5B9A\u4E49\u3002</li></ul></li><li><code>fail_timeout=time</code><ul><li>\u8FD9\u4E2A\u53C2\u6570\u8BBE\u7F6E\u4E86: <ul><li>\u5728\u8BE5\u65F6\u95F4\u8303\u56F4\u5185\uFF0C\u4E0E\u670D\u52A1\u5668\u901A\u4FE1\u5931\u8D25\u6307\u5B9A\u6B21\u6570\u540E\uFF0C\u5219\u8BA4\u4E3A\u670D\u52A1\u5668\u4E0D\u53EF\u7528\u3002</li><li>\u670D\u52A1\u5668\u88AB\u8BBE\u7F6E\u4E3A\u4E0D\u53EF\u7528\u540E\u6301\u7EED\u7684\u65F6\u95F4</li></ul></li><li>\u9ED8\u8BA4\u662F<code>10s</code></li></ul></li><li><code>backup</code><ul><li>\u6807\u8BB0\u670D\u52A1\u5668\u4F5C\u4E3A\u5907\u7528\u670D\u52A1\u5668\u3002\u5F53\u4E3B\u670D\u52A1\u5668\u4E0D\u53EF\u7528\u65F6\uFF0C\u8BF7\u6C42\u5C06\u4F20\u9012\u5230\u8BE5\u670D\u52A1\u5668\u4E0A\u3002</li></ul></li><li><code>down</code><ul><li>\u6807\u8BB0\u670D\u52A1\u5668\u6C38\u4E45\u4E0D\u53EF\u7528\u3002</li></ul></li></ul><p>\u6B64\u5916\uFF0C\u4EE5\u4E0B\u53C2\u6570\u5C06\u4F5C\u4E3A\u5546\u4E1A\u4ED8\u8D39\u529F\u80FD\u7684\u4E00\u90E8\u5206:</p><ul><li><code>resolve</code></li><li><code>route=string</code></li><li><code>service=name</code></li><li><code>slow_start=time</code></li><li><code>drain</code></li></ul><h3 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> hash</h3><div class="custom-container tip"><p class="custom-container-title">\u4F7F\u7528\u8BF4\u660E</p><p>Syntax: <code>hash key [consistent];</code></p><p>Default: \u2014</p><p>Context: <code>upstream</code></p><p>\u8BE5\u6307\u4EE4\u51FA\u73B0\u5728 1.7.2 \u7248\u672C</p></div>', 22);
const _hoisted_31 = /* @__PURE__ */ createTextVNode("\u4E3A\u670D\u52A1\u5668\u7EC4\u6307\u5B9A\u4E00\u4E2A\u8D1F\u8F7D\u5747\u8861\u7684\u65B9\u6CD5\uFF0C\u5BA2\u6237\u7AEF-\u670D\u52A1\u5668\u7684\u8F6C\u53D1\u6620\u5C04\u5C06\u57FA\u4E8E\u6563\u5217\u7684");
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("code", null, "key", -1);
const _hoisted_33 = /* @__PURE__ */ createTextVNode("\u503C\u3002");
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("code", null, "key", -1);
const _hoisted_35 = /* @__PURE__ */ createTextVNode("\u53EF\u4EE5\u5305\u542B\u6587\u672C\u3001\u53D8\u91CF\u548C\u5B83\u4EEC\u7684\u7EC4\u5408\u3002\u6CE8\u610F\uFF0C\u4ECE\u670D\u52A1\u5668\u7EC4\u91CC\u6DFB\u52A0\u6216\u79FB\u9664\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u53EF\u80FD\u4F1A\u5F15\u8D77\u7EDD\u5927\u591A\u6570\u7684\u8BF7\u6C42\u6620\u5C04\u5230\u4E0D\u540C\u7684\u670D\u52A1\u5668\u4E0A\u3002\u8FD9\u4E2A\u65B9\u6CD5\u517C\u5BB9");
const _hoisted_36 = {
  href: "https://metacpan.org/pod/Cache::Memcached",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_37 = /* @__PURE__ */ createTextVNode("Cache::Memcached");
const _hoisted_38 = /* @__PURE__ */ createTextVNode(" Perl \u5E93\u3002");
const _hoisted_39 = /* @__PURE__ */ createTextVNode("\u82E5\u662F\u6307\u5B9A\u4E86");
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("code", null, "consistent", -1);
const _hoisted_41 = /* @__PURE__ */ createTextVNode("\u53C2\u6570\uFF0C\u5C06\u4F7F\u7528");
const _hoisted_42 = {
  href: "https://www.metabrew.com/article/libketama-consistent-hashing-algo-memcached-clients",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_43 = /* @__PURE__ */ createTextVNode("ketama");
const _hoisted_44 = /* @__PURE__ */ createTextVNode("\u4E00\u81F4\u6027\u6563\u5217\u65B9\u6CD5\u4EE3\u66FF\u3002\u8FD9\u4E2A\u65B9\u6CD5\u786E\u4FDD\u5F53\u4ECE\u670D\u52A1\u5668\u7EC4\u91CC\u6DFB\u52A0\u6216\u79FB\u9664\u670D\u52A1\u5668\u65F6\uFF0C\u4EC5\u6709\u5C11\u91CF\u7684\u8BF7\u6C42\u4F1A\u88AB\u91CD\u65B0\u6620\u5C04\u5230\u4E0D\u540C\u7684\u670D\u52A1\u5668\u4E0A\u3002\u8FD9\u5C06\u5E2E\u52A9\u63D0\u9AD8\u7F13\u5B58\u670D\u52A1\u5668\u7684\u7F13\u5B58\u547D\u4E2D\u7387\u3002\u5C06\u8BE5");
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("code", null, "ketama_points", -1);
const _hoisted_46 = /* @__PURE__ */ createTextVNode("\u53C2\u6570\u8BBE\u7F6E\u5230");
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("code", null, "160", -1);
const _hoisted_48 = /* @__PURE__ */ createTextVNode("\u65F6\uFF0C\u8BE5\u65B9\u6CD5\u517C\u5BB9");
const _hoisted_49 = {
  href: "https://metacpan.org/pod/Cache::Memcached",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_50 = /* @__PURE__ */ createTextVNode("Cache::Memcached");
const _hoisted_51 = /* @__PURE__ */ createTextVNode(" Perl \u5E93\u3002");
const _hoisted_52 = /* @__PURE__ */ createStaticVNode('<h3 id="ip-hash" tabindex="-1"><a class="header-anchor" href="#ip-hash" aria-hidden="true">#</a> ip_hash</h3><div class="custom-container tip"><p class="custom-container-title">\u4F7F\u7528\u8BF4\u660E</p><p>Syntax: <code>ip_hash;</code></p><p>Default: \u2014</p><p>Context: <code>upstream</code></p></div><p>\u6307\u5B9A\u8FD9\u7EC4\u670D\u52A1\u5668\u5E94\u8BE5\u57FA\u4E8E\u5BA2\u6237\u7AEF IP \u5730\u5740\u6765\u5C06\u8BF7\u6C42\u5206\u53D1\u5230\u5404\u4E2A\u670D\u52A1\u5668\u4E0A\u4EE5\u8D77\u5230\u8D1F\u8F7D\u5747\u8861\u7684\u6548\u679C\u3002IPv4 \u5730\u5740\u7684\u524D\u4E09\u4E2A\u5B57\u8282\uFF0C\u6216\u6574\u4E2A IPv6 \u5730\u5740\uFF0C\u5C06\u4F5C\u4E3A\u6563\u5217\u952E\uFF08<code>hashing key</code>\uFF09\u3002\u8FD9\u4E2A\u65B9\u6CD5\u4FDD\u8BC1\u4E86\u6765\u81EA\u540C\u4E00\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u603B\u662F\u5206\u53D1\u5230\u540C\u4E00\u53F0\u670D\u52A1\u5668\u4E0A\uFF0C\u9664\u975E\u670D\u52A1\u5668\u4E0D\u53EF\u7528\u3002\u5728\u670D\u52A1\u5668\u4E0D\u53EF\u7528\u65F6\uFF0C\u8BF7\u6C42\u5C06\u5206\u53D1\u5230\u53E6\u4E00\u53F0\u670D\u52A1\u5668\u4E0A\u3002\u7EDD\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u90FD\u662F\u5206\u53D1\u5230\u540C\u4E00\u53F0\u670D\u52A1\u5668\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>IPv6 \u5730\u5740\u4ECE 1.3.2 \u548C 1.2.2 \u7248\u672C\u5F00\u59CB\u652F\u6301\u3002</p></div><p>\u82E5\u662F\u67D0\u4E00\u53F0\u670D\u52A1\u5668\u9700\u8981\u88AB\u6682\u65F6\u79FB\u9664\uFF0C\u5219\u5B83\u5E94\u8BE5\u4F7F\u7528<code>down</code>\u53C2\u6570\u6807\u8BB0\uFF0C\u4EE5\u4FDD\u7559\u5F53\u524D\u5BA2\u6237\u7AEF IP \u5730\u5740\u7684\u6563\u5217\u3002</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>upstream backend {\n    ip_hash;\n\n    server backend1.example.com;\n    server backend2.example.com;\n    server backend3.example.com down;\n    server backend4.example.com;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>1.3.1 \u548C 1.2.2 \u7248\u672C\u4E4B\u524D\uFF0C\u4F7F\u7528<code>ip_hash</code>\u8D1F\u8F7D\u5747\u8861\u65B9\u6CD5\u65F6\uFF0C\u8FD8\u4E0D\u80FD\u4E3A\u670D\u52A1\u5668\u6307\u5B9A\u6743\u91CD\u3002</p></div>', 7);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u914D\u7F6E\u793A\u4F8B" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6307\u4EE4" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#upstream" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#server" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#hash" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#ip-hash" }, {
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
    _hoisted_9,
    createBaseVNode("p", null, [
      _hoisted_31,
      _hoisted_32,
      _hoisted_33,
      _hoisted_34,
      _hoisted_35,
      createBaseVNode("a", _hoisted_36, [
        _hoisted_37,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_38
    ]),
    createBaseVNode("p", null, [
      _hoisted_39,
      _hoisted_40,
      _hoisted_41,
      createBaseVNode("a", _hoisted_42, [
        _hoisted_43,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_44,
      _hoisted_45,
      _hoisted_46,
      _hoisted_47,
      _hoisted_48,
      createBaseVNode("a", _hoisted_49, [
        _hoisted_50,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_51
    ]),
    _hoisted_52,
    createVNode(_component_global_config)
  ], 64);
}
var ngx_http_upstream_module_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ngx_http_upstream_module_html as default };
