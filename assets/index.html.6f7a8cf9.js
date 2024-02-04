import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "nginx",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#nginx",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Nginx")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u57FA\u672C\u64CD\u4F5C");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("MAC \u4E0B\u5B89\u88C5 nginx");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u67E5\u627E nginx \u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u65B9\u5F0F\u4E00");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u65B9\u5F0F\u4E8C");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u67E5\u770B nginx \u76D1\u542C\u7684\u7AEF\u53E3");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("nginx \u57FA\u672C\u547D\u4EE4");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u6A21\u5757");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("core functionality");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("include");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u5065\u5EB7\u68C0\u67E5");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u88AB\u52A8\u68C0\u67E5\u6A21\u5F0F");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u4E3B\u52A8\u68C0\u67E5\u6A21\u5F0F");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Nginx \u9519\u8BEF\u7801");
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<h2 id="\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> \u57FA\u672C\u64CD\u4F5C</h2><h3 id="mac-\u4E0B\u5B89\u88C5-nginx" tabindex="-1"><a class="header-anchor" href="#mac-\u4E0B\u5B89\u88C5-nginx" aria-hidden="true">#</a> MAC \u4E0B\u5B89\u88C5 nginx</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BF7\u5148\u786E\u4FDD\u5B89\u88C5\u4E86 homebrew</span>\n\n<span class="token comment"># \u68C0\u67E5 nginx \u662F\u5426\u5DF2\u7ECF\u5B89\u88C5</span>\nbrew search nginx\n\n<span class="token comment"># \u5B89\u88C5 nginx</span>\nbrew <span class="token function">install</span> nginx\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>nginx</code>\u7684\u5B89\u88C5\u76EE\u5F55\u4E3A<code>/usr/local/etc/nginx/</code>\uFF0C<code>nginx.conf</code>\u6587\u4EF6\u5C31\u5728\u8BE5\u76EE\u5F55\u4E0B\u3002</p><p><code>nginx</code>\u4E3B\u9875\u7684\u6587\u4EF6\u5728<code>/usr/local/var/www</code>\u76EE\u5F55\u4E0B\u3002</p><h3 id="\u67E5\u627E-nginx-\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E-nginx-\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84" aria-hidden="true">#</a> \u67E5\u627E nginx \u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84</h3><p>\u82E5\u4E0D\u77E5\u9053 nginx \u7684\u5B89\u88C5\u76EE\u5F55\u548C\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u67E5\u627E\uFF08\u53EF\u76F4\u63A5\u901A\u8FC7\u65B9\u5F0F\u4E8C\u67E5\u627E\uFF09\u3002</p><h4 id="\u65B9\u5F0F\u4E00" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E00" aria-hidden="true">#</a> \u65B9\u5F0F\u4E00</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">locate</span> nginx.conf\n/usr/local/etc/nginx/nginx.conf\n/usr/local/etc/nginx/nginx.conf.default\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u82E5\u670D\u52A1\u5668\u4E2D\u5B58\u5728\u591A\u4E2A<code>nginx.conf</code>\u6587\u4EF6\uFF0C\u6211\u4EEC\u5E76\u4E0D\u77E5\u9053\u5B9E\u9645\u4E0A\u8C03\u7528\u7684\u662F\u54EA\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u56E0\u6B64\u6211\u4EEC\u5FC5\u987B\u627E\u5230\u5B9E\u9645\u8C03\u7528\u7684\u914D\u7F6E\u6587\u4EF6\u624D\u80FD\u8FDB\u884C\u4FEE\u6539\u3002</p><h4 id="\u65B9\u5F0F\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E8C" aria-hidden="true">#</a> \u65B9\u5F0F\u4E8C</h4><p>\u5148\u67E5\u770B<code>nginx</code>\u8FDB\u7A0B\u72B6\u6001\uFF0C\u83B7\u53D6<code>nginx</code>\u4E3B\u8FDB\u7A0B\u7684\u53EF\u6267\u884C\u6587\u4EF6\u4F4D\u7F6E\uFF0C\u8FD9\u91CC\u662F<code>/usr/sbin/nginx</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ps</span> aux<span class="token operator">|</span><span class="token function">grep</span> nginx\nroot          <span class="token number">62</span>  <span class="token number">0.0</span>  <span class="token number">0.1</span> <span class="token number">120896</span>  <span class="token number">2196</span> ?        Ss   Sep16   <span class="token number">0</span>:00 nginx: master process /usr/sbin/nginx\nnginx         <span class="token number">63</span>  <span class="token number">0.0</span>  <span class="token number">0.3</span> <span class="token number">121428</span>  <span class="token number">6752</span> ?        S    Sep16   <span class="token number">0</span>:00 nginx: worker process\nroot       <span class="token number">63707</span>  <span class="token number">0.0</span>  <span class="token number">0.0</span>  <span class="token number">10676</span>  <span class="token number">1668</span> pts/2    S+   <span class="token number">20</span>:09   <span class="token number">0</span>:00 <span class="token function">grep</span> --color nginx\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5176\u4E2D<code>ps</code>\u547D\u4EE4\u662F Process Status \u7684\u7F29\u5199\uFF0C<code>aux</code>\u662F\u547D\u4EE4\u53C2\u6570\uFF0C\u8868\u793A\u5217\u51FA\u6240\u6709\uFF08\u5305\u62EC\u5176\u4ED6\u7528\u6237\u7684\uFF09\u6709\u5173<code>nginx</code>\u7684\u8FDB\u7A0B\u3002</p><p>\u4E4B\u540E\uFF0C\u901A\u8FC7\u547D\u4EE4<code>/usr/sbin/nginx -t</code>\u8FDB\u884C\u914D\u7F6E\u68C0\u67E5\uFF0C\u5373\u53EF\u77E5\u9053\u5B9E\u9645\u8C03\u7528\u7684\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\u53CA\u662F\u5426\u8C03\u7528\u6709\u6548\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/usr/sbin/nginx -t\nnginx: the configuration <span class="token function">file</span> /etc/nginx/nginx.conf syntax is ok\nnginx: configuration <span class="token function">file</span> /etc/nginx/nginx.conf <span class="token builtin class-name">test</span> is successful\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7591\u95EE\uFF1A\u65B9\u5F0F\u4E8C\u662F\u4E0D\u662F\u76F4\u63A5\u6267\u884C<code>nginx -t</code>\u5C31\u53EF\u4EE5\u4E86\uFF1F\uFF01\uFF01</p><h3 id="\u67E5\u770B-nginx-\u76D1\u542C\u7684\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B-nginx-\u76D1\u542C\u7684\u7AEF\u53E3" aria-hidden="true">#</a> \u67E5\u770B nginx \u76D1\u542C\u7684\u7AEF\u53E3</h3><p>\u5148\u6267\u884C<code>ps aux|grep nginx</code>\u547D\u4EE4\u83B7\u53D6\u5230<code>nginx master</code>\u8FDB\u7A0B\u7684 PID\uFF0C\u518D\u6267\u884C<code>netstat -anp | grep PID</code>\u67E5\u770B<code>nginx</code>\u76D1\u542C\u7684\u7AEF\u53E3\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ps</span> aux<span class="token operator">|</span><span class="token function">grep</span> nginx\nroot          <span class="token number">62</span>  <span class="token number">0.0</span>  <span class="token number">0.1</span> <span class="token number">120896</span>  <span class="token number">2196</span> ?        Ss   Sep16   <span class="token number">0</span>:00 nginx: master process /usr/sbin/nginx\nnginx         <span class="token number">63</span>  <span class="token number">0.0</span>  <span class="token number">0.3</span> <span class="token number">121428</span>  <span class="token number">6752</span> ?        S    Sep16   <span class="token number">0</span>:00 nginx: worker process\nroot       <span class="token number">63707</span>  <span class="token number">0.0</span>  <span class="token number">0.0</span>  <span class="token number">10676</span>  <span class="token number">1668</span> pts/2    S+   <span class="token number">20</span>:09   <span class="token number">0</span>:00 <span class="token function">grep</span> --color nginx\n\n<span class="token function">netstat</span> -anp<span class="token operator">|</span><span class="token function">grep</span> <span class="token number">62</span>\ntcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:80              <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">62</span>/nginx: master <span class="token function">pr</span>\ntcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:8888            <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">62</span>/nginx: master <span class="token function">pr</span>\ntcp6       <span class="token number">0</span>      <span class="token number">0</span> :::80                   :::*                    LISTEN      <span class="token number">62</span>/nginx: master <span class="token function">pr</span>\ntcp6       <span class="token number">0</span>      <span class="token number">0</span> :::8888                 :::*                    LISTEN      <span class="token number">62</span>/nginx: master <span class="token function">pr</span>\nunix  <span class="token number">3</span>      <span class="token punctuation">[</span> <span class="token punctuation">]</span>         STREAM     CONNECTED     <span class="token number">538840891</span> <span class="token number">62</span>/nginx: master <span class="token function">pr</span>\nunix  <span class="token number">3</span>      <span class="token punctuation">[</span> <span class="token punctuation">]</span>         STREAM     CONNECTED     <span class="token number">538840892</span> <span class="token number">62</span>/nginx: master <span class="token function">pr</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5176\u4E2D<code>netstat</code>\u547D\u4EE4\u7528\u4E8E\u663E\u793A\u4E0E IP\u3001TCP\u3001UDP \u548C ICMP \u534F\u8BAE\u76F8\u5173\u7684\u7EDF\u8BA1\u6570\u636E\uFF0C\u4E00\u822C\u7528\u4E8E\u68C0\u9A8C\u672C\u673A\u5404\u7AEF\u53E3\u7684\u7F51\u7EDC\u8FDE\u63A5\u60C5\u51B5\u3002</p><p>\u547D\u4EE4\u53C2\u6570\u91CC\uFF0C</p><ul><li><code>-a</code>: \u663E\u793A\u6240\u6709\u8FDE\u7EBF\u4E2D\u7684 Socket\u3002</li><li><code>-n</code>: \u76F4\u63A5\u4F7F\u7528 IP \u5730\u5740\uFF0C\u800C\u4E0D\u901A\u8FC7\u57DF\u540D\u670D\u52A1\u5668\u3002</li><li><code>-p</code>: \u663E\u793A\u6B63\u5728\u4F7F\u7528 Socket \u7684\u7A0B\u5E8F\u8BC6\u522B\u7801\u548C\u7A0B\u5E8F\u540D\u79F0\u3002</li></ul><p>\u4E0A\u8FF0\u793A\u4F8B\u91CC\uFF0C<code>nginx</code>\u76D1\u542C\u5728<code>80</code>\u548C<code>8888</code>\u7AEF\u53E3\u3002</p><h3 id="nginx-\u57FA\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#nginx-\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a> nginx \u57FA\u672C\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u279C nginx -h\nnginx version: nginx/1.15.2\nUsage: nginx <span class="token punctuation">[</span>-?hvVtTq<span class="token punctuation">]</span> <span class="token punctuation">[</span>-s signal<span class="token punctuation">]</span> <span class="token punctuation">[</span>-c filename<span class="token punctuation">]</span> <span class="token punctuation">[</span>-p prefix<span class="token punctuation">]</span> <span class="token punctuation">[</span>-g directives<span class="token punctuation">]</span>\n\nOptions:\n  -?,-h         <span class="token builtin class-name">:</span> this <span class="token builtin class-name">help</span>\n  -v            <span class="token builtin class-name">:</span> show version and <span class="token builtin class-name">exit</span>\n  -V            <span class="token builtin class-name">:</span> show version and configure options <span class="token keyword">then</span> <span class="token builtin class-name">exit</span>\n  -t            <span class="token builtin class-name">:</span> <span class="token builtin class-name">test</span> configuration and <span class="token builtin class-name">exit</span>\n  -T            <span class="token builtin class-name">:</span> <span class="token builtin class-name">test</span> configuration, dump it and <span class="token builtin class-name">exit</span>\n  -q            <span class="token builtin class-name">:</span> suppress non-error messages during configuration testing\n  -s signal     <span class="token builtin class-name">:</span> send signal to a master process: stop, quit, reopen, reload\n  -p prefix     <span class="token builtin class-name">:</span> <span class="token builtin class-name">set</span> prefix path <span class="token punctuation">(</span>default: /usr/local/Cellar/nginx/1.15.2/<span class="token punctuation">)</span>\n  -c filename   <span class="token builtin class-name">:</span> <span class="token builtin class-name">set</span> configuration <span class="token function">file</span> <span class="token punctuation">(</span>default: /usr/local/etc/nginx/nginx.conf<span class="token punctuation">)</span>\n  -g directives <span class="token builtin class-name">:</span> <span class="token builtin class-name">set</span> global directives out of configuration <span class="token function">file</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5E38\u7528\u7684\u547D\u4EE4\u6709:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8 nginx</span>\nnginx\n\n<span class="token comment"># \u505C\u6B62 nginx</span>\nnginx -s stop\n\n<span class="token comment"># \u68C0\u67E5 NGINX \u914D\u7F6E\u662F\u5426\u6B63\u786E</span>\nnginx -t\n\n<span class="token comment"># \u91CD\u542F nginx</span>\nnginx -s reload\n\n<span class="token comment"># \u91CD\u65B0\u6253\u5F00 nginx</span>\nnginx -s reopen\n\n<span class="token comment"># \u8BBE\u7F6E\u914D\u7F6E\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u4E3A /usr/local/etc/nginx/nginx.conf</span>\nnginx -c filename\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757" aria-hidden="true">#</a> \u6A21\u5757</h2><h3 id="core-functionality" tabindex="-1"><a class="header-anchor" href="#core-functionality" aria-hidden="true">#</a> core functionality</h3><h4 id="include" tabindex="-1"><a class="header-anchor" href="#include" aria-hidden="true">#</a> include</h4><div class="custom-container tip"><p class="custom-container-title">include \u4F7F\u7528</p><p>Syntax: <code>include file | mask;</code></p><p>Default: \u2014</p><p>Context: any</p></div><p>\u5C06\u53E6\u4E00\u4E2A\u6587\u4EF6\u6216\u5339\u914D\u7279\u5B9A<code>mask</code>\u7684\u6587\u4EF6\u5305\u542B\u5230\u914D\u7F6E\u91CC\u3002\u88AB\u5305\u542B\u7684\u6587\u4EF6\u5E94\u8BE5\u7531\u8BED\u6CD5\u6B63\u786E\u7684\u6307\u4EE4\u548C\u5757\u7EC4\u6210\u3002\u793A\u4F8B:</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>include mime.types;\ninclude vhosts/*.conf;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5065\u5EB7\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u5065\u5EB7\u68C0\u67E5" aria-hidden="true">#</a> \u5065\u5EB7\u68C0\u67E5</h2><p>Nginx \u4E3B\u8981\u6709\u4E24\u79CD\u4E3B\u6D41\u7684\u5065\u5EB7\u68C0\u67E5\u6A21\u5F0F\uFF1A\u88AB\u52A8\u68C0\u67E5\u6A21\u5F0F\u3001\u4E3B\u52A8\u68C0\u67E5\u6A21\u5F0F\u3002</p><h3 id="\u88AB\u52A8\u68C0\u67E5\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u88AB\u52A8\u68C0\u67E5\u6A21\u5F0F" aria-hidden="true">#</a> \u88AB\u52A8\u68C0\u67E5\u6A21\u5F0F</h3>', 37);
const _hoisted_54 = /* @__PURE__ */ createTextVNode("Reference: ");
const _hoisted_55 = {
  href: "https://docs.nginx.com/nginx/admin-guide/load-balancer/http-health-check/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_56 = /* @__PURE__ */ createTextVNode("Nginx \u5B98\u7F51 - \u5065\u5EB7\u68C0\u67E5");
const _hoisted_57 = /* @__PURE__ */ createStaticVNode('<p>Nginx \u5728\u4EE3\u7406\u8BF7\u6C42\u8FC7\u7A0B\u4E2D\u4F1A\u81EA\u52A8\u5730\u76D1\u6D4B\u6BCF\u4E2A\u540E\u7AEF\u670D\u52A1\u5668\u5BF9\u8BF7\u6C42\u7684\u54CD\u5E94\u72B6\u6001\uFF0C\u82E5\u67D0\u4E2A\u540E\u7AEF\u670D\u52A1\u5668\u5728<code>fail_timeout</code>\u65F6\u95F4\u5185\u7D2F\u8BA1\u53D1\u9001\u8BF7\u6C42\u5931\u8D25\u6216\u672A\u63A5\u6536\u5230\u54CD\u5E94\u8FBE\u5230<code>max_fails</code>\u6B21\u65F6\uFF0CNginx \u5C06\u4F1A\u6807\u8BB0\u8BE5\u670D\u52A1\u5668\u4E0D\u53EF\u7528\uFF0C\u5E76\u5728\u4E4B\u540E\u7684<code>fail_timeout</code>\u65F6\u95F4\u5185\u4E0D\u5F80\u8BE5\u670D\u52A1\u5668\u4E0A\u53D1\u9001\u8BF7\u6C42\u3002<code>fail_timeout</code>\u65F6\u95F4\u4E4B\u540E\uFF0CNginx \u8FD8\u662F\u4F1A\u8F6C\u53D1\u5C11\u91CF\u7684\u8BF7\u6C42\u5230\u8BE5\u540E\u7AEF\u670D\u52A1\u5668\u6765\u63A2\u6D4B\u5B83\u7684\u8FD4\u56DE\u72B6\u6001\uFF0C\u4EE5\u4FBF\u8BC6\u522B\u8BE5\u670D\u52A1\u5668\u662F\u5426\u6062\u590D\u3002</p><p>\u88AB\u52A8\u68C0\u67E5\u6A21\u5F0F\u662F Nginx \u5185\u7F6E\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u53C2\u6570\u8BBE\u7F6E\u6765\u5F00\u542F\u3002</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>upstream backend {\n    server backend1.example.com;\n    server backend2.example.com max_fails=3 fail_timeout=30s;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><code>fail_timeout</code>: \u8BE5\u53C2\u6570\u6709\u4E24\u4E2A\u542B\u4E49\uFF0C\u9ED8\u8BA4\u4E3A<code>10s</code><ul><li>\u5728\u8BE5\u65F6\u95F4\u5185\uFF0C\u82E5 Nginx \u8BF7\u6C42\u5931\u8D25\u6216\u672A\u63A5\u6536\u5230\u8BF7\u6C42\u8FBE\u5230<code>max_fails</code>\u6B21\uFF0CNginx \u5C06\u6807\u8BB0\u8BE5\u670D\u52A1\u5668\u4E0D\u53EF\u7528</li><li>\u8868\u793A\u670D\u52A1\u5668\u88AB\u6807\u8BB0\u4E3A\u4E0D\u53EF\u7528\u7684\u6301\u7EED\u65F6\u95F4\u3002\u8BE5\u65F6\u95F4\u540E\uFF0CNginx \u5C06\u518D\u6B21\u53D1\u9001\u8BF7\u6C42\u6765\u68C0\u67E5\u670D\u52A1\u5668\u72B6\u6001</li></ul></li><li><code>max_fails</code>: \u8BBE\u7F6E Nginx \u8BF7\u6C42\u5931\u8D25\u6216\u672A\u63A5\u6536\u5230\u8BF7\u6C42\u7684\u6700\u5927\u6B21\u6570\uFF0C\u8FBE\u5230\u8BE5\u6B21\u6570\uFF0C\u670D\u52A1\u5668\u5C06\u88AB\u6807\u8BB0\u4E3A\u4E0D\u53EF\u7528\u3002\u9ED8\u8BA4\u662F 1 \u6B21</li></ul><h3 id="\u4E3B\u52A8\u68C0\u67E5\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u52A8\u68C0\u67E5\u6A21\u5F0F" aria-hidden="true">#</a> \u4E3B\u52A8\u68C0\u67E5\u6A21\u5F0F</h3><p>Nginx \u670D\u52A1\u7AEF\u4F1A\u6309\u7167\u8BBE\u5B9A\u7684\u65F6\u95F4\u95F4\u9694<code>interval</code>\u4E3B\u52A8\u5411\u540E\u7AEF\u670D\u52A1\u5668\u53D1\u51FA\u68C0\u67E5\u8BF7\u6C42\uFF0C\u6765\u9A8C\u8BC1\u540E\u7AEF\u670D\u52A1\u5668\u7684\u53EF\u7528\u72B6\u6001\u3002\u82E5\u67D0\u4E2A\u670D\u52A1\u5668\u8FD4\u56DE\u5931\u8D25\u8D85\u8FC7\u8BBE\u5B9A\u7684\u6B21\u6570\uFF0CNginx \u5C31\u4F1A\u5C06\u8BE5\u670D\u52A1\u5668\u6807\u8BB0\u4E3A\u5F02\u5E38\uFF0C\u5728\u6B64\u6B21<code>interval</code>\u671F\u95F4\u5C06\u4E0D\u518D\u5206\u53D1\u6D41\u91CF\u5230\u8BE5\u670D\u52A1\u5668\uFF0C\u800C\u662F\u5206\u53D1\u5230\u5176\u4ED6\u670D\u52A1\u5668\u4E0A\u3002\u7ECF\u8FC7<code>interval</code>\u95F4\u9694\u4E4B\u540E\uFF0CNginx \u4F1A\u518D\u6B21\u53D1\u51FA\u68C0\u67E5\u8BF7\u6C42\uFF0C\u82E5\u6B64\u65F6\u670D\u52A1\u5668\u53EF\u7528\uFF0CNginx \u5C06\u4F1A\u6807\u8BB0\u8BE5\u670D\u52A1\u5668\u4E3A\u6B63\u5E38\uFF0C\u8FDB\u800C\u7EE7\u7EED\u5411\u8BE5\u670D\u52A1\u5668\u5206\u53D1\u6D41\u91CF\u3002</p><p>\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u4E00\u822C\u9700\u8981\u540E\u7AEF\u670D\u52A1\u5668\u4E3A Nginx \u63D0\u4F9B\u4E00\u4E2A\u4F4E\u6D88\u8017\u7684\u63A5\u53E3\uFF0C\u7528\u4E8E\u68C0\u67E5\u8BE5\u670D\u52A1\u5668\u72B6\u6001\u3002</p><h2 id="nginx-\u9519\u8BEF\u7801" tabindex="-1"><a class="header-anchor" href="#nginx-\u9519\u8BEF\u7801" aria-hidden="true">#</a> Nginx \u9519\u8BEF\u7801</h2>', 8);
const _hoisted_65 = /* @__PURE__ */ createTextVNode("499\uFF0C");
const _hoisted_66 = {
  href: "https://www.webfx.com/web-development/glossary/http-status-codes/what-is-a-499-status-code/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_67 = /* @__PURE__ */ createTextVNode("What Is a 499 Status Code?");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u57FA\u672C\u64CD\u4F5C" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#mac-\u4E0B\u5B89\u88C5-nginx" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u67E5\u627E-nginx-\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u65B9\u5F0F\u4E00" }, {
                    default: withCtx(() => [
                      _hoisted_6
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u65B9\u5F0F\u4E8C" }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u67E5\u770B-nginx-\u76D1\u542C\u7684\u7AEF\u53E3" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#nginx-\u57FA\u672C\u547D\u4EE4" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6A21\u5757" }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#core-functionality" }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#include" }, {
                    default: withCtx(() => [
                      _hoisted_12
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5065\u5EB7\u68C0\u67E5" }, {
            default: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u88AB\u52A8\u68C0\u67E5\u6A21\u5F0F" }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4E3B\u52A8\u68C0\u67E5\u6A21\u5F0F" }, {
                default: withCtx(() => [
                  _hoisted_15
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#nginx-\u9519\u8BEF\u7801" }, {
            default: withCtx(() => [
              _hoisted_16
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_17,
    createBaseVNode("p", null, [
      _hoisted_54,
      createBaseVNode("a", _hoisted_55, [
        _hoisted_56,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_57,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_65,
        createBaseVNode("a", _hoisted_66, [
          _hoisted_67,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
