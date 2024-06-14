import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "nginx-conf",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#nginx-conf",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" nginx.conf")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u914D\u7F6E\u793A\u4F8B");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u5168\u5C40\u5757");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("events \u5757");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("http \u5757");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("http \u5168\u5C40\u5757");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("server \u5168\u5C40\u5757");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u6A21\u5757");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Core functionality");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("ngx_http_core_module");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("location");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("upstream \u6A21\u5757");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("ngx_http_index_module");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Reference");
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<h2 id="\u914D\u7F6E\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u793A\u4F8B" aria-hidden="true">#</a> \u914D\u7F6E\u793A\u4F8B</h2><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code># \u5168\u5C40\u5757\n# ...\n\n# events \u5757\nevents {\n    # ...\n}\n\n# http \u5757\nhttp {\n  # http \u5168\u5C40\u5757\n  # ...\n\n  # \u865A\u62DF\u4E3B\u673A server \u5757\n  server {\n    # server \u5168\u5C40\u5757\n    # ...\n\n    # location\u5757\n    location [PATTERN] {\n      # ...\n    }\n    location [PATTERN] {\n      # ...\n    }\n  }\n\n  server {\n    # ...\n  }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="\u5168\u5C40\u5757" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5757" aria-hidden="true">#</a> \u5168\u5C40\u5757</h3><p>\u5168\u5C40\u5757\uFF0C\u914D\u7F6E\u5F71\u54CD<code>nginx</code>\u5168\u5C40\u7684\u6307\u4EE4\u3002</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code># \u5168\u5C40\u5757\n\n# \u914D\u7F6E\u7528\u6237\u6216\u8005\u7EC4\uFF0C\u9ED8\u8BA4\u4E3A nobody nobody\nuser administrator administrators;\n\n# \u5141\u8BB8\u751F\u6210\u7684\u8FDB\u7A0B\u6570\uFF0C\u9ED8\u8BA4\u4E3A 1\nworker_processes 2;\n\n# \u6307\u5B9A nginx \u8FDB\u7A0B\u8FD0\u884C\u6587\u4EF6\u5B58\u653E\u5730\u5740\npid /nginx/pid/nginx.pid;\n\n# \u5236\u5B9A\u65E5\u5FD7\u8DEF\u5F84\uFF0C\u7EA7\u522B\u3002\u8FD9\u4E2A\u8BBE\u7F6E\u53EF\u4EE5\u653E\u5165\u5168\u5C40\u5757\uFF0Chttp \u5757\uFF0Cserver \u5757\uFF0C\u7EA7\u522B\u4EE5\u6B64\u4E3A\uFF1Adebug|info|notice|warn|error|crit|alert|emerg\nerror_log log/error.log debug;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="events-\u5757" tabindex="-1"><a class="header-anchor" href="#events-\u5757" aria-hidden="true">#</a> events \u5757</h3><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code># events \u5757\nevents {\n  # \u8BBE\u7F6E\u7F51\u8DEF\u8FDE\u63A5\u5E8F\u5217\u5316\uFF0C\u9632\u6B62\u60CA\u7FA4\u73B0\u8C61\u53D1\u751F\uFF0C\u9ED8\u8BA4\u4E3A on\n  accept_mutex on;\n\n  # \u8BBE\u7F6E\u4E00\u4E2A\u8FDB\u7A0B\u662F\u5426\u540C\u65F6\u63A5\u53D7\u591A\u4E2A\u7F51\u7EDC\u8FDE\u63A5\uFF0C\u9ED8\u8BA4\u4E3A off\n  multi_accept on;\n\n  # \u4E8B\u4EF6\u9A71\u52A8\u6A21\u578B\uFF0Cselect|poll|kqueue|epoll|resig|/dev/poll|eventport\n  use epoll;\n\n  # \u6700\u5927\u8FDE\u63A5\u6570\uFF0C\u9ED8\u8BA4\u4E3A 512\n  worker_connections  1024;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="http-\u5757" tabindex="-1"><a class="header-anchor" href="#http-\u5757" aria-hidden="true">#</a> http \u5757</h3><h4 id="http-\u5168\u5C40\u5757" tabindex="-1"><a class="header-anchor" href="#http-\u5168\u5C40\u5757" aria-hidden="true">#</a> http \u5168\u5C40\u5757</h4><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>http {\n  # http \u5168\u5C40\u5757\n  # ...\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="server-\u5168\u5C40\u5757" tabindex="-1"><a class="header-anchor" href="#server-\u5168\u5C40\u5757" aria-hidden="true">#</a> server \u5168\u5C40\u5757</h4><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>http {\n  server {\n    # server \u5168\u5C40\u5757\n\n    # \u670D\u52A1\u57DF\u540D\n    server_name www.windstone.com windstone.com; # \u652F\u6301\u591A\u57DF\u540D\u914D\u7F6E\n    server_name *.windstone.com;                 # \u652F\u6301\u6CDB\u57DF\u540D\u89E3\u6790\n    server_name ~^\\.windstone\\.com$;             # \u652F\u6301\u5BF9\u4E8E\u57DF\u540D\u7684\u6B63\u5219\u5339\u914D\n  }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757" aria-hidden="true">#</a> \u6A21\u5757</h2><h3 id="core-functionality" tabindex="-1"><a class="header-anchor" href="#core-functionality" aria-hidden="true">#</a> Core functionality</h3><h3 id="ngx-http-core-module" tabindex="-1"><a class="header-anchor" href="#ngx-http-core-module" aria-hidden="true">#</a> ngx_http_core_module</h3><h4 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h4><p>Syntax: <code>location [ = | ~ | ~* | ^~ ] uri { ... }</code> location @name { ... } Default: \u2014 Context: <code>server</code>, <code>location</code></p><p>\u6839\u636E\u8BF7\u6C42\u7684 URI \u8BBE\u7F6E\u914D\u7F6E\u3002</p><p>\u901A\u8FC7\u4EE5\u4E0B\u5904\u7406\u540E\uFF0C\u751F\u6210\u6807\u51C6\u5316\u7684 URI\uFF0C\u5E76\u6267\u884C\u5339\u914D\u3002</p><ul><li>\u89E3\u7801<code>%xx</code>\u5F62\u5F0F\u7684\u52A0\u5BC6\u6587\u672C</li><li>\u89E3\u6790\u76F8\u5BF9\u8DEF\u5F84\u7684<code>.</code>\u548C<code>..</code>\u90E8\u5206\u7684\u5F15\u7528</li><li>\u538B\u7F29\u4E24\u4E2A\u6216\u591A\u4E2A\u6BD7\u90BB\u7684\u659C\u6760\u4E3A\u5355\u4E2A\u659C\u6760</li></ul><p><code>location</code>\u7684\u5B9A\u4E49\uFF0C\u8981\u4E48\u4E3A\u524D\u7F00\u5B57\u7B26\u4E32\uFF0C\u8981\u4E48\u4E3A\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u524D\u9762\u53EF\u4EE5\u6307\u5B9A<code>~*</code>\u4FEE\u9970\u7B26\uFF08\u5FFD\u7565\u5927\u5C0F\u5199\u7684\u5339\u914D\uFF09\u6216<code>~</code>\u4FEE\u9970\u7B26\uFF08\u533A\u5206\u5927\u5C0F\u5199\u7684\u5339\u914D\uFF09\u3002\u4E3A\u4E86\u67E5\u627E\u5230\u80FD\u5339\u914D\u7ED9\u5B9A\u8BF7\u6C42\u7684<code>location</code>\uFF0C<code>nginx</code>\u9996\u5148\u68C0\u67E5\u4EE5\u524D\u7F00\u5B57\u7B26\u4E32\u5B9A\u4E49\u7684<code>location</code>\uFF08\u5373\u524D\u7F00<code>location</code>\uFF09\u3002\u5728\u8FD9\u4E9B<code>location</code>\u4E2D\uFF0C\u5C06\u9009\u62E9\u5E76\u8BB0\u5F55\u5177\u6709\u6700\u957F\u5339\u914D\u524D\u7F00\u7684<code>location</code>\u3002\u4E4B\u540E\uFF0C\u6309\u7167\u6B63\u5219\u8868\u8FBE\u5F0F\u51FA\u73B0\u5728\u914D\u7F6E\u6587\u4EF6\u91CC\u7684\u987A\u5E8F\uFF0C\u518D\u68C0\u67E5\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u641C\u7D22\u5C06\u5728\u53D1\u73B0\u7B2C\u4E00\u4E2A\u5339\u914D\u4E4B\u540E\u7EC8\u6B62\uFF0C\u4E14\u4F1A\u4F7F\u7528\u5BF9\u5E94\u7684\u914D\u7F6E\u3002\u82E5\u662F\u4E0D\u5B58\u5728\u5339\u914D\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5219\u4F1A\u4F7F\u7528\u4E4B\u524D\u8BB0\u5F55\u7684\u524D\u7F00\u5B57\u7B26\u4E32\u5BF9\u5E94\u7684\u914D\u7F6E\u3002</p><p><code>location</code>\u5757\u53EF\u4EE5\u5D4C\u5957\uFF0C\u9664\u4E86\u4E0B\u9762\u63D0\u53CA\u7684\u4E00\u4E9B\u4F8B\u5916\u3002</p><p>\u5BF9\u4E8E\u5FFD\u7565\u5927\u5C0F\u5199\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u6BD4\u5982 macOS \u548C Cygwin\uFF0C\u5339\u914D\u524D\u7F00\u5B57\u7B26\u4E32\u65F6\u5C06\u5FFD\u7565\u5927\u5C0F\u5199\uFF080.7.7\uFF09\u3002\u4F46\u662F\uFF0C\u5BF9\u6BD4\u4EC5\u9650\u5236\u5728\u5355\u5B57\u8282\u7684\u533A\u57DF\u3002</p><p>\u6B63\u5219\u8868\u8FBE\u5F0F\u53EF\u4EE5\u5305\u542B\u6355\u83B7\uFF080.7.40\uFF09\uFF0C\u53EF\u4EE5\u4E4B\u540E\u5728\u5176\u4ED6\u6307\u4EE4\u91CC\u4F7F\u7528\u3002</p><p>\u82E5\u662F\u6700\u957F\u5339\u914D\u7684\u524D\u7F00\u5B57\u7B26\u4E32\u5E26\u6709<code>^~</code>\u4FEE\u9970\u7B26\uFF0C\u5219\u4E0D\u518D\u68C0\u67E5\u6B63\u5219\u8868\u8FBE\u5F0F\u3002</p><p>\u6B64\u5916\uFF0C\u4F7F\u7528<code>=</code>\u4FEE\u9970\u7B26\uFF0C\u4F1A\u5B9A\u4E49\u4E00\u4E2A URI \u548C<code>location</code>\u7684\u7CBE\u786E\u5339\u914D\u3002\u5982\u679C\u67E5\u627E\u5230\u4E86\u4E00\u4E2A\u7CBE\u786E\u5339\u914D\uFF0C\u641C\u7D22\u5C06\u7EC8\u6B62\u3002\u6BD4\u5982\uFF0C\u82E5\u662F\u9891\u7E41\u53D1\u751F<code>/</code>\u8BF7\u6C42\uFF0C\u5B9A\u4E49<code>location = /</code>\u5C06\u52A0\u901F\u8FD9\u4E9B\u8BF7\u6C42\u7684\u5904\u7406\uFF0C\u56E0\u4E3A\u641C\u7D22\u5728\u7B2C\u4E00\u4E2A\u6BD4\u8F83\u4E4B\u540E\u5C31\u7EC8\u6B62\u4E86\u3002\u8FD9\u6837\u7684<code>location</code>\u663E\u7136\u4E0D\u80FD\u5305\u542B\u5D4C\u5957\u7684<code>location</code>\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5728 0.7.1 \u5230 0.8.41 \u7248\u672C\uFF0C\u82E5\u8BF7\u6C42\u5339\u914D\u4E86\u7684\u524D\u7F00<code>location</code>\u6CA1\u6709<code>=</code>\u548C<code>^~</code>\u4FEE\u9970\u7B26\uFF0C\u641C\u7D22\u4E5F\u4F1A\u7EC8\u6B62\uFF0C\u4E14\u4E0D\u4F1A\u68C0\u67E5\u6B63\u5219\u8868\u8FBE\u5F0F\u3002</p></div><div class="custom-container warning"><p class="custom-container-title">\u8BD1\u8005\u6CE8</p><p>\u6CE8\u610F\uFF0C\u524D\u7F00\u5B57\u7B26\u4E32\u7684\u5339\u914D\uFF0C\u90FD\u662F\u4ECE\u8BF7\u6C42 URI \u7684\u6700\u5F00\u59CB\u90E8\u5206\u8FDB\u884C\u3002</p></div><p>\u8BA9\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u8BF4\u660E\u4E0A\u8FF0\u7684\u89C4\u5219\u3002</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>location = / {\n    [ configuration A ]\n}\n\nlocation / {\n    [ configuration B ]\n}\n\nlocation /documents/ {\n    [ configuration C ]\n}\n\n# \u82E5 ^~ \u4E4B\u540E\u7684\u5B57\u7B26\u4E32\u5339\u914D\u4E86\uFF0C\u5219\u4E0D\u4F1A\u68C0\u67E5\u6B63\u5219\u8868\u8FBE\u5F0F\nlocation ^~ /images/ {\n    [ configuration D ]\n}\n\n# \u5FFD\u7565\u5927\u5C0F\u5199\u7684\u6B63\u5219\u5339\u914D\nlocation ~* \\.(gif|jpg|jpeg)$ {\n    [ configuration E ]\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><code>/</code>\u8BF7\u6C42\u5C06\u5339\u914D<code>configuration A</code>\uFF0C<code>/index.html</code>\u8BF7\u6C42\u5C06\u5339\u914D<code>configuration B</code>\uFF0C<code>/documents/document.html</code>\u8BF7\u6C42\u5C06\u5339\u914D<code>configuration C</code>\uFF0C<code>/images/1.gif</code>\u8BF7\u6C42\u5C06\u5339\u914D<code>configuration D</code>\uFF0C<code>/documents/1.jpg</code>\u8BF7\u6C42\u5C06\u5339\u914D<code>configuration E</code>\u3002</p><p><code>@</code>\u524D\u7F00\u5B9A\u4E49\u4E86\u4E00\u4E2A\u547D\u540D\u7684<code>location</code>\u3002\u8FD9\u6837\u7684<code>location</code>\u4E0D\u662F\u7528\u4E8E\u5E38\u89C4\u7684\u8BF7\u6C42\u5904\u7406\uFF0C\u800C\u662F\u7528\u4E8E\u8BF7\u6C42\u91CD\u5B9A\u5411\u3002\u5B83\u4EEC\u4E0D\u80FD\u88AB\u5D4C\u5957\uFF0C\u4E5F\u4E0D\u80FD\u5305\u542B\u5D4C\u5957\u7684<code>location</code>\u3002</p><p>\u82E5\u662F\u524D\u7F00\u5B57\u7B26\u4E32\u5B9A\u4E49\u7684<code>location</code>\u4EE5\u659C\u6760\u5B57\u7B26\u7ED3\u5C3E\uFF0C\u4E14\u8BF7\u6C42\u88AB<code>proxy_pass</code>/<code>fastcgi_pass</code>/<code>uwsgi_pass</code>/<code>scgi_pass</code>/<code>memcached_pass</code>/<code>grpc_pass</code>\u4E4B\u4E00\u5904\u7406\uFF0C\u5219\u7279\u6B8A\u7684\u5904\u7406\u903B\u8F91\u5C06\u88AB\u6267\u884C: \u9488\u5BF9\u6709\u76F8\u540C URI \u4F46\u6CA1\u6709\u5C3E\u659C\u6760\u7684\u8BF7\u6C42\uFF0C\u5C06\u8FD4\u56DE\u4E00\u4E2A\u54CD\u5E94\u7801\u4E3A 301 \u7684\u6301\u4E45\u5316\u7684\u91CD\u5B9A\u5411\u5230\u5E26\u6709\u5C3E\u659C\u6760\u7684\u76F8\u540C URI \u7684\u54CD\u5E94\u3002\u82E5\u662F\u4E0D\u60F3\u8981\u8FD9\u6837\u7684\u6548\u679C\uFF0C\u53EF\u4EE5\u50CF\u5982\u4E0B\u8FD9\u6837\u5B9A\u4E49\u4E00\u4E2A URI \u4E0E<code>location</code>\u7684\u7CBE\u786E\u5339\u914D\u3002</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>location /user/ {\n    proxy_pass http://user.example.com;\n}\n\nlocation = /user {\n    proxy_pass http://login.example.com;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="upstream-\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#upstream-\u6A21\u5757" aria-hidden="true">#</a> upstream \u6A21\u5757</h3><p>\u8BE5\u6A21\u5757\u63D0\u4F9B\u4E00\u4E2A\u7B80\u5355\u65B9\u6CD5\u6765\u5B9E\u73B0\u5728\u8F6E\u8BE2\u548C\u5BA2\u6237\u7AEF IP \u4E4B\u95F4\u7684\u540E\u7AEF\u670D\u52A1\u5668\u8D1F\u8377\u5E73\u8861\u3002</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>upstream backend {\n  ip_hash;\n  server   backend1.example.com;\n  server   backend2.example.com;\n  server   backend3.example.com  down;\n  server   backend4.example.com;\n}\n\nhttp {\n  server {\n    location / {\n        proxy_pass  http://backend;\n    }\n  }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li><code>ip_hash</code>: \u914D\u7F6E\u8BE5\u6307\u4EE4\uFF0C\u4F1A\u5C06\u8BF7\u6C42\u6309\u5BA2\u6237\u7AEF\u7684 IP \u5730\u5740\u5206\u53D1\u5230\u5404\u4E2A\u670D\u52A1\u5668\u4E0A\u3002<code>hash</code>\u7684<code>key</code>\u662F\u5BA2\u6237\u7AEF\u7684 C \u7C7B\u7F51\u7EDC\u5730\u5740\u3002\u8FD9\u79CD\u65B9\u5F0F\u4FDD\u8BC1\u5BA2\u6237\u7AEF\u8BF7\u6C42\u603B\u662F\u8F6C\u53D1\u5230\u76F8\u540C\u7684\u670D\u52A1\u5668\u4E0A\u3002\u4F46\u662F\uFF0C\u5982\u679C\u88AB\u8F6C\u53D1\u5230\u7684\u670D\u52A1\u5668\u4E0D\u53EF\u7528\uFF0C\u5219\u8BF7\u6C42\u5C06\u8F6C\u53D1\u5230\u5176\u4ED6\u7684\u670D\u52A1\u5668\u4E0A\u3002\u8FD9\u4E3A\u5BA2\u6237\u7AEF\u603B\u662F\u8FDE\u63A5\u5230\u76F8\u540C\u7684\u670D\u52A1\u5668\u63D0\u4F9B\u4E86\u8F83\u9AD8\u7684\u53EF\u80FD\u6027\u3002\uFF08\u8BD1\u8005\u6CE8\uFF1A\u4F46\u4E0D\u80FD\u5B8C\u5168\u4FDD\u8BC1\u540C\u4E00\u5BA2\u6237\u7AEF\u603B\u662F\u8FDE\u63A5\u5230\u540C\u4E00\u670D\u52A1\u5668\u4E0A\uFF0C\u56E0\u6B64\u4E0D\u80FD\u5728\u670D\u52A1\u5668\u4E0A\u5B58\u653E<code>session</code>\u7B49\u4FE1\u606F\uFF09</li></ul><h3 id="ngx-http-index-module" tabindex="-1"><a class="header-anchor" href="#ngx-http-index-module" aria-hidden="true">#</a> ngx_http_index_module</h3><p><code>ngx_http_index_module</code>\u6A21\u5757\u5904\u7406\u4EE5\u659C\u6760\u5B57\u7B26<code>/</code>\u7ED3\u5C3E\u7684\u8BF7\u6C42\u3002\u8FD9\u4E9B\u8BF7\u6C42\u53EF\u4EE5\u88AB<code>ngx_http_autoindex_module</code>\u548C<code>ngx_http_random_index_module</code>\u6A21\u5757\u5904\u7406\u3002</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code># \u914D\u7F6E\u793A\u4F8B\nlocation / {\n    index index.$geo.html index.html;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Syntax: <code>index file ...;</code> Default: <code>index index.html;</code> Context: <code>http</code>, <code>server</code>, <code>location</code></p><p>\u8BE5\u6307\u4EE4\u7528\u6765\u6307\u5B9A\u7528\u6765\u505A\u9ED8\u8BA4\u6587\u6863\u7684\u6587\u4EF6\u540D\u3002<code>file</code>\u6587\u4EF6\u540D\u91CC\u53EF\u4EE5\u5305\u542B\u53D8\u91CF\u3002\u8FD9\u4E9B\u6587\u4EF6\u4F1A\u4EE5\u6307\u5B9A\u7684\u987A\u5E8F\u9010\u4E2A\u67E5\u627E\u3002\u6587\u4EF6\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u53EF\u4EE5\u662F\u4E00\u4E2A\u7EDD\u5BF9\u8DEF\u5F84\u7684\u6587\u4EF6\uFF0C\u6BD4\u5982:</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>index index.$geo.html index.0.html /index.html;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u9700\u8981\u6CE8\u610F\uFF0C\u4F7F\u7528<code>index</code>\u6587\u4EF6\u4F1A\u56E0\u6B64\u4E00\u4E2A\u5185\u90E8\u91CD\u5B9A\u5411\uFF0C\u4E14\u8BF7\u6C42\u53EF\u4EE5\u5728\u53E6\u4E00\u4E2A\u4E0D\u540C\u7684<code>location</code>\u91CC\u5904\u7406\uFF0C\u6BD4\u5982\u5982\u4E0B\u7684\u914D\u7F6E:</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code># \u7CBE\u786E\u5339\u914D /\nlocation = / {\n    index index.html;\n}\n\nlocation / {\n    ...\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E00\u4E2A<code>/</code>\u7684\u8BF7\u6C42\u6765\u4E86\u4E4B\u540E\uFF0C\u4F1A\u5148\u5339\u914D\u7B2C\u4E00\u4E2A<code>location</code>\uFF0C\u5F97\u5230\u7ED3\u679C<code>/index.html</code>\uFF0C\u7D27\u63A5\u7740\u4F1A\u4F5C\u4E3A<code>/index.html</code>\u7EE7\u7EED\u5728\u7B2C\u4E8C\u4E2A<code>location</code> \u91CC\u5904\u7406\u3002</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>', 48);
const _hoisted_64 = {
  href: "https://zhuanlan.zhihu.com/p/34943332",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_65 = /* @__PURE__ */ createTextVNode("8\u5206\u949F\u5E26\u4F60\u6DF1\u5165\u6D45\u51FA\u641E\u61C2Nginx");
const _hoisted_66 = {
  href: "https://juejin.im/post/5aa7704c6fb9a028bb18a993",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_67 = /* @__PURE__ */ createTextVNode("Nginx \u57FA\u672C\u914D\u7F6E\u8BE6\u89E3");
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
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5168\u5C40\u5757" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#events-\u5757" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#http-\u5757" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#http-\u5168\u5C40\u5757" }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#server-\u5168\u5C40\u5757" }, {
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
          createVNode(_component_RouterLink, { to: "#\u6A21\u5757" }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#core-functionality" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#ngx-http-core-module" }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#location" }, {
                    default: withCtx(() => [
                      _hoisted_12
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#upstream-\u6A21\u5757" }, {
                default: withCtx(() => [
                  _hoisted_13
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#ngx-http-index-module" }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#reference" }, {
            default: withCtx(() => [
              _hoisted_15
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_16,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_64, [
          _hoisted_65,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_66, [
          _hoisted_67,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var nginxConf_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { nginxConf_html as default };
