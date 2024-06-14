import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "linux-\u547D\u4EE4",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#linux-\u547D\u4EE4",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Linux \u547D\u4EE4")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u67E5\u770B\u7AEF\u53E3\u7684\u4F7F\u7528\u60C5\u51B5");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u67E5\u770B\u7279\u5B9A\u7AEF\u53E3\u662F\u5426\u88AB\u5360\u7528");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u67E5\u770B\u7AEF\u53E3\u4F7F\u7528\u60C5\u51B5");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("pwd \u663E\u793A\u5DE5\u4F5C\u76EE\u5F55");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("mkdir\uFF1A\u521B\u5EFA\u76EE\u5F55");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("rm\uFF1A\u5220\u9664\u6587\u4EF6\u3001\u76EE\u5F55");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("cat\uFF1A\u67E5\u770B\u6587\u4EF6");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("cp\uFF1A\u590D\u5236\u6587\u4EF6");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("mv \u79FB\u52A8\u3001\u91CD\u547D\u540D\u6587\u4EF6");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("vi");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u4EC5\u67E5\u770B\u6587\u4EF6");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u4FEE\u6539\u6587\u4EF6");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("rm \u5220\u9664\u6587\u4EF6");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u547D\u4EE4\u522B\u540D");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u8BBE\u7F6E\u547D\u4EE4\u7684\u522B\u540D");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u6E05\u9664\u522B\u540D");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("type \u547D\u4EE4");
const _hoisted_20 = /* @__PURE__ */ createTextVNode("grep \u641C\u7D22");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("netstat");
const _hoisted_22 = /* @__PURE__ */ createStaticVNode('<p>PS: \u4EE5\u4E0B\u4F1A\u5217\u51FA\u4E00\u4E9B\u5E38\u7528\u7684\u547D\u4EE4\u53CA\u5E38\u7528\u7684\u7528\u6CD5\uFF0C\u6BCF\u4E2A\u547D\u4EE4\u66F4\u52A0\u8BE6\u7EC6\u7684\u7528\u6CD5\u53EF\u4EE5\u53C2\u8003\u540E\u9762\u7684\u94FE\u63A5\u3002</p><h2 id="\u67E5\u770B\u7AEF\u53E3\u7684\u4F7F\u7528\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u7AEF\u53E3\u7684\u4F7F\u7528\u60C5\u51B5" aria-hidden="true">#</a> \u67E5\u770B\u7AEF\u53E3\u7684\u4F7F\u7528\u60C5\u51B5</h2><h3 id="\u67E5\u770B\u7279\u5B9A\u7AEF\u53E3\u662F\u5426\u88AB\u5360\u7528" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u7279\u5B9A\u7AEF\u53E3\u662F\u5426\u88AB\u5360\u7528" aria-hidden="true">#</a> \u67E5\u770B\u7279\u5B9A\u7AEF\u53E3\u662F\u5426\u88AB\u5360\u7528</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># lsof \u5217\u51FA\u5F53\u524D\u7CFB\u7EDF\u6253\u5F00\u6587\u4EF6\u7684\u5DE5\u5177</span>\n<span class="token comment"># -i \u5217\u51FA\u7B26\u5408\u6761\u4EF6\u7684\u8FDB\u7A0B\u3002\uFF084\u30016\u3001\u534F\u8BAE\u3001:\u7AEF\u53E3\u3001 @ip \uFF09</span>\n\n<span class="token comment"># \u5217\u51FA\u8C01\u5728\u4F7F\u7528\u67D0\u4E2A\u7AEF\u53E3</span>\n<span class="token function">lsof</span> -i :3000\n\n<span class="token comment"># \u5217\u51FA\u6240\u6709 TCP/UDP \u7F51\u7EDC\u8FDE\u63A5\u4FE1\u606F</span>\n<span class="token function">lsof</span> -i tcp\n<span class="token function">lsof</span> -i udp\n\n<span class="token comment"># \u5217\u51FA\u8C01\u5728\u4F7F\u7528\u67D0\u4E2A\u7279\u5B9A\u7684 TCP/UDP \u7AEF\u53E3</span>\n<span class="token function">lsof</span> -i tcp:80\n<span class="token function">lsof</span> -i udp:55\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5728 Linux \u73AF\u5883\u4E0B\uFF0C\u4EFB\u4F55\u4E8B\u7269\u90FD\u4EE5\u6587\u4EF6\u7684\u5F62\u5F0F\u5B58\u5728\uFF0C\u901A\u8FC7\u6587\u4EF6\u4E0D\u4EC5\u4EC5\u53EF\u4EE5\u8BBF\u95EE\u5E38\u89C4\u6570\u636E\uFF0C\u8FD8\u53EF\u4EE5\u8BBF\u95EE\u7F51\u7EDC\u8FDE\u63A5\u548C\u786C\u4EF6\u3002\u6240\u4EE5\u5982\u4F20\u8F93\u63A7\u5236\u534F\u8BAE (TCP) \u548C\u7528\u6237\u6570\u636E\u62A5\u534F\u8BAE (UDP) \u5957\u63A5\u5B57\u7B49\uFF0C\u7CFB\u7EDF\u5728\u540E\u53F0\u90FD\u4E3A\u8BE5\u5E94\u7528\u7A0B\u5E8F\u5206\u914D\u4E86\u4E00\u4E2A\u6587\u4EF6\u63CF\u8FF0\u7B26\uFF0C\u65E0\u8BBA\u8FD9\u4E2A\u6587\u4EF6\u7684\u672C\u8D28\u5982\u4F55\uFF0C\u8BE5\u6587\u4EF6\u63CF\u8FF0\u7B26\u4E3A\u5E94\u7528\u7A0B\u5E8F\u4E0E\u57FA\u7840\u64CD\u4F5C\u7CFB\u7EDF\u4E4B\u95F4\u7684\u4EA4\u4E92\u63D0\u4F9B\u4E86\u901A\u7528\u63A5\u53E3\u3002\u56E0\u4E3A\u5E94\u7528\u7A0B\u5E8F\u6253\u5F00\u6587\u4EF6\u7684\u63CF\u8FF0\u7B26\u5217\u8868\u63D0\u4F9B\u4E86\u5927\u91CF\u5173\u4E8E\u8FD9\u4E2A\u5E94\u7528\u7A0B\u5E8F\u672C\u8EAB\u7684\u4FE1\u606F\uFF0C\u56E0\u6B64\u901A\u8FC7lsof\u5DE5\u5177\u80FD\u591F\u67E5\u770B\u8FD9\u4E2A\u5217\u8868\u5BF9\u7CFB\u7EDF\u76D1\u6D4B\u4EE5\u53CA\u6392\u9519\u5C06\u662F\u5F88\u6709\u5E2E\u52A9\u7684\u3002</p>', 5);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("code", null, "lsof", -1);
const _hoisted_28 = /* @__PURE__ */ createTextVNode("\u66F4\u591A\u7684\u4F7F\u7528\u65B9\u5F0F\u53EF\u53C2\u8003");
const _hoisted_29 = {
  href: "https://www.cnblogs.com/peida/archive/2013/02/26/2932972.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_30 = /* @__PURE__ */ createTextVNode("\u6BCF\u5929\u4E00\u4E2Alinux\u547D\u4EE4\uFF0851\uFF09\uFF1Alsof\u547D\u4EE4");
const _hoisted_31 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_32 = /* @__PURE__ */ createStaticVNode('<h3 id="\u67E5\u770B\u7AEF\u53E3\u4F7F\u7528\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u7AEF\u53E3\u4F7F\u7528\u60C5\u51B5" aria-hidden="true">#</a> \u67E5\u770B\u7AEF\u53E3\u4F7F\u7528\u60C5\u51B5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># netstat \u67E5\u770B TCP\u3001UDP \u7684\u7AEF\u53E3\u548C\u8FDB\u7A0B\u7B49\u76F8\u5173\u60C5\u51B5</span>\n<span class="token comment"># -a (--all) \u663E\u793A\u6240\u6709\u8FDE\u63A5\u4E2D\u7684 Socket</span>\n<span class="token comment"># -t (--tcp) \u663E\u793A TCP \u7684\u8FDE\u63A5\u72B6\u51B5\u3002</span>\n<span class="token comment"># -u (--udp) \u663E\u793A UDP \u7684\u8FDE\u63A5\u72B6\u51B5\u3002</span>\n<span class="token comment"># -n \u62D2\u7EDD\u663E\u793A\u522B\u540D\uFF0C\u80FD\u663E\u793A\u6570\u5B57\u7684\u5168\u90E8\u8F6C\u5316\u4E3A\u6570\u5B57</span>\n<span class="token comment"># -l \u4EC5\u5217\u51FA\u5728Listen(\u76D1\u542C)\u7684\u670D\u52A1\u72B6\u6001</span>\n<span class="token comment"># -p \u663E\u793A\u5EFA\u7ACB\u76F8\u5173\u94FE\u63A5\u7684\u7A0B\u5E8F\u540D</span>\n\n<span class="token comment"># \u67E5\u770B\u6240\u6709\u76D1\u542C\u4E2D\u7684 TCP\u3001UDP \u7AEF\u53E3\u4F7F\u7528\u60C5\u51B5</span>\n<span class="token function">netstat</span> -tunlp\n\n<span class="token comment"># \u7ED3\u679C\u663E\u793A</span>\nActive Internet connections <span class="token punctuation">(</span>only servers<span class="token punctuation">)</span>\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name\ntcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:22              <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">41</span>/sshd\ntcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:8888            <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">1959</span>/nginx: master\ntcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:8899            <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">1959</span>/nginx: master\ntcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:80              <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">1959</span>/nginx: master\ntcp6       <span class="token number">0</span>      <span class="token number">0</span> :::22                   :::*                    LISTEN      <span class="token number">41</span>/sshd\ntcp6       <span class="token number">0</span>      <span class="token number">0</span> :::8888                 :::*                    LISTEN      <span class="token number">1959</span>/nginx: master\ntcp6       <span class="token number">0</span>      <span class="token number">0</span> :::5200                 :::*                    LISTEN      <span class="token number">486</span>/PM2 v4.4.1: God\ntcp6       <span class="token number">0</span>      <span class="token number">0</span> :::80                   :::*                    LISTEN      <span class="token number">1959</span>/nginx: master\ntcp6       <span class="token number">0</span>      <span class="token number">0</span> :::5201                 :::*                    LISTEN      <span class="token number">486</span>/PM2 v4.4.1: God\nudp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">172.29</span>.69.56:123        <span class="token number">0.0</span>.0.0:*                           <span class="token number">38</span>/ntpd\nudp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">10.192</span>.3.167:123        <span class="token number">0.0</span>.0.0:*                           <span class="token number">38</span>/ntpd\nudp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">127.0</span>.0.1:123           <span class="token number">0.0</span>.0.0:*                           <span class="token number">38</span>/ntpd\nudp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:123             <span class="token number">0.0</span>.0.0:*                           <span class="token number">38</span>/ntpd\nudp6       <span class="token number">0</span>      <span class="token number">0</span> :::123                  :::*                                <span class="token number">38</span>/ntpd\n\n\n<span class="token comment"># \u67E5\u770B 5550 \u7AEF\u53E3\u4F7F\u7528\u60C5\u51B5</span>\n<span class="token function">netstat</span> -tunlp <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">5550</span>\n\n<span class="token comment"># \u7ED3\u679C\u663E\u793A</span>\n<span class="token punctuation">(</span>Not all processes could be identified, non-owned process info will not be shown, you would have to be root to see it all.<span class="token punctuation">)</span>\ntcp6       <span class="token number">0</span>      <span class="token number">0</span> :::5550                 :::*                    LISTEN      <span class="token number">4551</span>/PM2 v2.8.0: Go\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>', 2);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("code", null, "netstat", -1);
const _hoisted_35 = /* @__PURE__ */ createTextVNode("\u66F4\u591A\u7684\u4F7F\u7528\u65B9\u5F0F\u53EF\u53C2\u8003");
const _hoisted_36 = {
  href: "https://www.cnblogs.com/peida/archive/2013/03/08/2949194.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_37 = /* @__PURE__ */ createTextVNode("\u6BCF\u5929\u4E00\u4E2Alinux\u547D\u4EE4\uFF0856\uFF09\uFF1Anetstat\u547D\u4EE4");
const _hoisted_38 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_39 = /* @__PURE__ */ createStaticVNode('<h2 id="pwd-\u663E\u793A\u5DE5\u4F5C\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#pwd-\u663E\u793A\u5DE5\u4F5C\u76EE\u5F55" aria-hidden="true">#</a> pwd \u663E\u793A\u5DE5\u4F5C\u76EE\u5F55</h2><p>Print Working Directory\uFF0C\u663E\u793A\u5DE5\u4F5C\u76EE\u5F55\u7684\u8DEF\u5F84\u540D\u79F0\u3002</p><h2 id="mkdir-\u521B\u5EFA\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#mkdir-\u521B\u5EFA\u76EE\u5F55" aria-hidden="true">#</a> mkdir\uFF1A\u521B\u5EFA\u76EE\u5F55</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> directory-name\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>', 4);
const _hoisted_43 = /* @__PURE__ */ createTextVNode("\u8BE6\u7EC6\u8BF7\u53C2\u8003\uFF1A");
const _hoisted_44 = {
  href: "http://www.cnblogs.com/peida/archive/2012/10/25/2738271.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_45 = /* @__PURE__ */ createTextVNode("\u6BCF\u5929\u4E00\u4E2Alinux\u547D\u4EE4\uFF084\uFF09\uFF1Amkdir\u547D\u4EE4");
const _hoisted_46 = /* @__PURE__ */ createStaticVNode('<h2 id="rm-\u5220\u9664\u6587\u4EF6\u3001\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#rm-\u5220\u9664\u6587\u4EF6\u3001\u76EE\u5F55" aria-hidden="true">#</a> rm\uFF1A\u5220\u9664\u6587\u4EF6\u3001\u76EE\u5F55</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> -rf director-or-file-name\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u547D\u4EE4\u53C2\u6570\uFF1A</p><ul><li><code>-f</code>/<code>--force</code>\uFF1A\u5FFD\u7565\u4E0D\u5B58\u5728\u7684\u6587\u4EF6\uFF0C\u4ECE\u4E0D\u7ED9\u51FA\u63D0\u793A\u3002</li><li><code>-i</code>/<code>--interactive</code>\uFF1A\u8FDB\u884C\u4EA4\u4E92\u5F0F\u5220\u9664</li><li><code>-r</code>/<code>-R</code>/<code>--recursive</code>\uFF1A\u6307\u793Arm\u5C06\u53C2\u6570\u4E2D\u5217\u51FA\u7684\u5168\u90E8\u76EE\u5F55\u548C\u5B50\u76EE\u5F55\u5747\u9012\u5F52\u5730\u5220\u9664\u3002</li><li><code>-v</code>/<code>--verbose</code>\uFF1A\u8BE6\u7EC6\u663E\u793A\u8FDB\u884C\u7684\u6B65\u9AA4</li><li><code>--help</code>\uFF1A\u663E\u793A\u6B64\u5E2E\u52A9\u4FE1\u606F\u5E76\u9000\u51FA</li><li><code>--version</code>\uFF1A\u8F93\u51FA\u7248\u672C\u4FE1\u606F\u5E76\u9000\u51FA</li></ul><p>\u6CE8\u610F\uFF1A</p><ul><li>\u82E5\u6CA1\u6709<code>-r</code>\u9009\u9879\uFF0C\u5219<code>rm</code>\u547D\u4EE4\u4E0D\u4F1A\u5220\u9664\u76EE\u5F55</li><li>\u82E5\u4EC5\u4F7F\u7528<code>rm</code>\u6765\u5220\u9664\u6587\u4EF6\uFF0C\u901A\u5E38\u4ECD\u53EF\u4EE5\u5C06\u8BE5\u6587\u4EF6\u6062\u590D\u539F\u72B6</li></ul>', 6);
const _hoisted_52 = /* @__PURE__ */ createTextVNode("\u8BE6\u7EC6\u8BF7\u53C2\u8003\uFF1A");
const _hoisted_53 = {
  href: "http://www.cnblogs.com/peida/archive/2012/10/26/2740521.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_54 = /* @__PURE__ */ createTextVNode("\u6BCF\u5929\u4E00\u4E2Alinux\u547D\u4EE4\uFF085\uFF09\uFF1Arm \u547D\u4EE4");
const _hoisted_55 = /* @__PURE__ */ createStaticVNode('<h2 id="cat-\u67E5\u770B\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#cat-\u67E5\u770B\u6587\u4EF6" aria-hidden="true">#</a> cat\uFF1A\u67E5\u770B\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> filename\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="cp-\u590D\u5236\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#cp-\u590D\u5236\u6587\u4EF6" aria-hidden="true">#</a> cp\uFF1A\u590D\u5236\u6587\u4EF6</h2><p>\u5C06\u6E90\u6587\u4EF6\u590D\u5236\u5230\u76EE\u6807\u6587\u4EF6\uFF0C\u6216\u5C06\u591A\u4E2A\u6E90\u6587\u4EF6\u590D\u5236\u5230\u76EE\u6807\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> origin destination\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="mv-\u79FB\u52A8\u3001\u91CD\u547D\u540D\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#mv-\u79FB\u52A8\u3001\u91CD\u547D\u540D\u6587\u4EF6" aria-hidden="true">#</a> mv \u79FB\u52A8\u3001\u91CD\u547D\u540D\u6587\u4EF6</h2><p><code>mv</code>\u662F<code>move</code>\u7684\u7F29\u5199\uFF0C\u53EF\u4EE5\u7528\u6765\u79FB\u52A8\uFF08<code>move</code>\uFF09\u6587\u4EF6\u6216\u91CD\u547D\u540D\uFF08<code>rename</code>\uFF09\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C06\u6587\u4EF6 test.log \u91CD\u547D\u540D\u4E3A test1.txt</span>\n<span class="token function">mv</span> test.log test1.txt\n\n<span class="token comment"># \u5C06 test1.txt \u6587\u4EF6\u79FB\u5230\u76EE\u5F55 test3 \u4E2D</span>\n<span class="token function">mv</span> test1.txt test3\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>', 8);
const _hoisted_63 = /* @__PURE__ */ createTextVNode("\u8BE6\u60C5\u8BF7\u89C1: ");
const _hoisted_64 = {
  href: "https://www.cnblogs.com/peida/archive/2012/10/27/2743022.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_65 = /* @__PURE__ */ createTextVNode("\u6BCF\u5929\u4E00\u4E2Alinux\u547D\u4EE4\uFF087\uFF09\uFF1Amv\u547D\u4EE4");
const _hoisted_66 = /* @__PURE__ */ createStaticVNode('<h2 id="vi" tabindex="-1"><a class="header-anchor" href="#vi" aria-hidden="true">#</a> vi</h2><h2 id="\u4EC5\u67E5\u770B\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4EC5\u67E5\u770B\u6587\u4EF6" aria-hidden="true">#</a> \u4EC5\u67E5\u770B\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span><span class="token operator">!</span>-- \u6253\u5F00\u6587\u4EF6\uFF0C\u8F93\u5165 --<span class="token operator">&gt;</span>\n<span class="token function">vi</span> filename\n\n<span class="token operator">&lt;</span><span class="token operator">!</span>-- \u5173\u95ED\u6587\u4EF6\uFF1A\u5148\u6309 esc\uFF0C\u7136\u540E\u8F93\u5165 --<span class="token operator">&gt;</span>\n:q<span class="token operator">!</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u4FEE\u6539\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span><span class="token operator">!</span>-- \u6253\u5F00\u6587\u4EF6\uFF0C\u8F93\u5165 --<span class="token operator">&gt;</span>\n<span class="token function">vi</span> filename\n\n<span class="token operator">&lt;</span><span class="token operator">!</span>-- \u8F93\u5165 i \u8FDB\u884C\u7F16\u8F91\u6A21\u5F0F\uFF0C\u4E4B\u540E\u8FDB\u884C\u5404\u79CD\u8F93\u5165\uFF0C\u4EE5\u4FEE\u6539\u6587\u4EF6\u5185\u5BB9 --<span class="token operator">&gt;</span>\ni\n\n<span class="token operator">&lt;</span><span class="token operator">!</span>-- \u4E0A\u4E00\u6B65\u8F93\u5165\u5B8C\u6BD5\u540E\uFF0C\u8F93\u5165 esc \u9000\u51FA\u7F16\u8F91\u6A21\u5F0F --<span class="token operator">&gt;</span>\nesc\n\n\n<span class="token operator">&lt;</span><span class="token operator">!</span>-- \u6309\u4F4F <span class="token builtin class-name">shift</span> + \u8F93\u5165\u4E24\u4E2AZ\uFF0C\u4FDD\u5B58\u4FEE\u6539 --<span class="token operator">&gt;</span>\n<span class="token builtin class-name">shift</span> \u952E + Z*2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="rm-\u5220\u9664\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#rm-\u5220\u9664\u6587\u4EF6" aria-hidden="true">#</a> rm \u5220\u9664\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> filename\n\n<span class="token comment"># \u5F3A\u5236\u5220\u9664\u6587\u4EF6\uFF08\u65E0\u6CD5\u627E\u56DE\uFF09</span>\n<span class="token function">rm</span> -rf filename\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>', 7);
const _hoisted_73 = /* @__PURE__ */ createTextVNode("Reference: ");
const _hoisted_74 = {
  href: "https://www.cnblogs.com/peida/archive/2012/12/05/2803591.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_75 = /* @__PURE__ */ createTextVNode("\u6BCF\u5929\u4E00\u4E2Alinux\u547D\u4EE4\u76EE\u5F55");
const _hoisted_76 = /* @__PURE__ */ createStaticVNode('<h2 id="\u547D\u4EE4\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u522B\u540D" aria-hidden="true">#</a> \u547D\u4EE4\u522B\u540D</h2><h3 id="\u8BBE\u7F6E\u547D\u4EE4\u7684\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u547D\u4EE4\u7684\u522B\u540D" aria-hidden="true">#</a> \u8BBE\u7F6E\u547D\u4EE4\u7684\u522B\u540D</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># alias [\u522B\u540D]=[\u6307\u4EE4\u540D\u79F0]</span>\n<span class="token builtin class-name">alias</span> <span class="token assign-left variable">vi</span><span class="token operator">=</span><span class="token string">&#39;vim&#39;</span>\n<span class="token builtin class-name">alias</span> post-review<span class="token operator">=</span><span class="token string">&#39;xxx&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u6E05\u9664\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u522B\u540D" aria-hidden="true">#</a> \u6E05\u9664\u522B\u540D</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># unalias [\u522B\u540D]</span>\n<span class="token builtin class-name">alias</span> <span class="token function">vi</span>\n<span class="token comment"># \u6E05\u9664\u6240\u6709\u522B\u540D</span>\n<span class="token builtin class-name">unalias</span> -a\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="type-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#type-\u547D\u4EE4" aria-hidden="true">#</a> type \u547D\u4EE4</h2><p>\u5224\u65AD\u7ED9\u5B9A\u7684\u540D\u5B57\u662F\u5426\u662F<code>alias</code>\u3001<code>keyword</code>\u3001<code>function</code>\u3001<code>builtin</code>\u3001<code>file</code>\uFF0C\u6216\u8005\u90FD\u4E0D\u662F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">type</span> <span class="token function">ls</span>        <span class="token comment"># ls is an alias for ls -G</span>\n<span class="token builtin class-name">type</span> <span class="token keyword">if</span>        <span class="token comment"># if is a reserved word</span>\n<span class="token builtin class-name">type</span> <span class="token builtin class-name">type</span>      <span class="token comment"># type is a shell builtin</span>\n<span class="token builtin class-name">type</span> ssh-add   <span class="token comment"># ssh-add is /usr/bin/ssh-add</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="grep-\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#grep-\u641C\u7D22" aria-hidden="true">#</a> grep \u641C\u7D22</h2><p>\u5E38\u7528\u53C2\u6570\uFF1A</p><ul><li><code>-n</code>: <code>--line-number</code>\uFF0C\u5728\u663E\u793A\u7B26\u5408\u6837\u5F0F\u7684\u90A3\u4E00\u884C\u4E4B\u524D\uFF0C\u6807\u793A\u51FA\u8BE5\u884C\u7684\u884C\u53F7\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4ECE test.txt \u6587\u4EF6\u91CC\u67E5\u8F93\u51FA\u542B\u6709 linux \u7684\u5185\u5BB9\u884C</span>\n<span class="token function">grep</span> -n <span class="token string">&#39;linux&#39;</span> test.txt\n<span class="token comment"># \u6216</span>\n<span class="token function">cat</span> test.txt <span class="token operator">|</span> <span class="token function">grep</span> -n <span class="token string">&#39;linux&#39;</span>\n\n<span class="token comment"># \u4ECE\u591A\u4E2A\u6587\u4EF6\u91CC\u67E5\u627E\u5173\u952E\u8BCD</span>\n<span class="token function">grep</span> <span class="token string">&#39;linux&#39;</span> test.txt test2.txt\n\n<span class="token comment"># \u8F93\u51FA\u4EE5 u \u5F00\u5934\u7684\u884C\u5185\u5BB9</span>\n<span class="token function">cat</span> test.txt <span class="token operator">|</span> <span class="token function">grep</span> ^u\n<span class="token comment"># \u8F93\u51FA\u975E u \u5F00\u5934\u7684\u884C\u5185\u5BB9</span>\n<span class="token function">cat</span> test.txt <span class="token operator">|</span> <span class="token function">grep</span> ^<span class="token punctuation">[</span>^u<span class="token punctuation">]</span>\n\n<span class="token comment"># \u8F93\u51FA\u4EE5 hat \u7ED3\u5C3E\u7684\u884C\u5185\u5BB9</span>\n<span class="token function">cat</span> test.txt <span class="token operator">|</span> <span class="token function">grep</span> hat$\n\n<span class="token comment"># \u8F93\u51FA\u5305\u542B ed \u6216\u8005 at \u5B57\u7B26\u7684\u5185\u5BB9\u884C</span>\n<span class="token function">cat</span> test.txt <span class="token operator">|</span> <span class="token function">grep</span> -E <span class="token string">&quot;ed|at&quot;</span>\n\n<span class="token comment"># \u663E\u793A\u5F53\u524D\u76EE\u5F55\u4E0B\u9762\u4EE5 .txt \u7ED3\u5C3E\u7684\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u5305\u542B\u6BCF\u4E2A\u5B57\u7B26\u4E32\u81F3\u5C11\u67097\u4E2A\u8FDE\u7EED\u5C0F\u5199\u5B57\u7B26\u7684\u5B57\u7B26\u4E32\u7684\u884C</span>\n<span class="token function">grep</span> <span class="token string">&#39;[a-z]\\{7\\}&#39;</span> *.txt\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>', 12);
const _hoisted_88 = /* @__PURE__ */ createTextVNode("\u66F4\u597D\u7528\u6CD5\u548C\u6B63\u5219\u8868\u8FBE\u5F0F\u7B49\u5185\u5BB9\uFF0C\u8BF7\u53C2\u8003");
const _hoisted_89 = {
  href: "http://www.cnblogs.com/peida/archive/2012/12/17/2821195.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_90 = /* @__PURE__ */ createTextVNode("\u6BCF\u5929\u4E00\u4E2Alinux\u547D\u4EE4\uFF0839\uFF09\uFF1Agrep \u547D\u4EE4");
const _hoisted_91 = /* @__PURE__ */ createStaticVNode('<h2 id="netstat" tabindex="-1"><a class="header-anchor" href="#netstat" aria-hidden="true">#</a> netstat</h2><p><code>netstat</code>\u7528\u4E8E\u663E\u793A\u4E0E IP\u3001TCP\u3001UDP \u548C ICMP \u534F\u8BAE\u76F8\u5173\u7684\u7EDF\u8BA1\u6570\u636E\uFF0C\u4E00\u822C\u7528\u4E8E\u68C0\u9A8C\u672C\u673A\u5404\u7AEF\u53E3\u7684\u7F51\u7EDC\u8FDE\u63A5\u60C5\u51B5\u3002</p><p><code>netstat</code>\u662F\u5728\u5185\u6838\u4E2D\u8BBF\u95EE\u7F51\u7EDC\u53CA\u76F8\u5173\u4FE1\u606F\u7684\u7A0B\u5E8F\uFF0C\u5B83\u80FD\u63D0\u4F9B TCP \u8FDE\u63A5\uFF0CTCP \u548C UDP\u76D1\u542C\uFF0C\u8FDB\u7A0B\u5185\u5B58\u7BA1\u7406\u7684\u76F8\u5173\u62A5\u544A\u3002</p><p><code>netstat</code>\u67E5\u770B\u7AEF\u53E3\u5360\u7528\u8BED\u6CD5\u683C\u5F0F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5F53\u524D\u6240\u6709\u7AEF\u53E3\u60C5\u51B5</span>\n<span class="token function">netstat</span> -tunlp\n\n<span class="token comment"># -t (tcp) \u4EC5\u663E\u793Atcp\u76F8\u5173\u9009\u9879</span>\n<span class="token comment"># -u (udp)\u4EC5\u663E\u793Audp\u76F8\u5173\u9009\u9879</span>\n<span class="token comment"># -n \u62D2\u7EDD\u663E\u793A\u522B\u540D\uFF0C\u80FD\u663E\u793A\u6570\u5B57\u7684\u5168\u90E8\u8F6C\u5316\u4E3A\u6570\u5B57</span>\n<span class="token comment"># -l \u4EC5\u5217\u51FA\u5728Listen(\u76D1\u542C)\u7684\u670D\u52A1\u72B6\u6001</span>\n<span class="token comment"># -p \u663E\u793A\u5EFA\u7ACB\u76F8\u5173\u94FE\u63A5\u7684\u7A0B\u5E8F\u540D</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u53EF\u6307\u5B9A\u7279\u5B9A\u7AEF\u53E3\u67E5\u770B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">netstat</span> -tunlp <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">8888</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>', 7);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u67E5\u770B\u7AEF\u53E3\u7684\u4F7F\u7528\u60C5\u51B5" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u67E5\u770B\u7279\u5B9A\u7AEF\u53E3\u662F\u5426\u88AB\u5360\u7528" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u67E5\u770B\u7AEF\u53E3\u4F7F\u7528\u60C5\u51B5" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#pwd-\u663E\u793A\u5DE5\u4F5C\u76EE\u5F55" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#mkdir-\u521B\u5EFA\u76EE\u5F55" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#rm-\u5220\u9664\u6587\u4EF6\u3001\u76EE\u5F55" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#cat-\u67E5\u770B\u6587\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#cp-\u590D\u5236\u6587\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#mv-\u79FB\u52A8\u3001\u91CD\u547D\u540D\u6587\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#vi" }, {
            default: withCtx(() => [
              _hoisted_12
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4EC5\u67E5\u770B\u6587\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4FEE\u6539\u6587\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_14
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#rm-\u5220\u9664\u6587\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_15
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u547D\u4EE4\u522B\u540D" }, {
            default: withCtx(() => [
              _hoisted_16
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u8BBE\u7F6E\u547D\u4EE4\u7684\u522B\u540D" }, {
                default: withCtx(() => [
                  _hoisted_17
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6E05\u9664\u522B\u540D" }, {
                default: withCtx(() => [
                  _hoisted_18
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#type-\u547D\u4EE4" }, {
            default: withCtx(() => [
              _hoisted_19
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#grep-\u641C\u7D22" }, {
            default: withCtx(() => [
              _hoisted_20
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#netstat" }, {
            default: withCtx(() => [
              _hoisted_21
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_22,
    createBaseVNode("p", null, [
      _hoisted_27,
      _hoisted_28,
      createBaseVNode("a", _hoisted_29, [
        _hoisted_30,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_31
    ]),
    _hoisted_32,
    createBaseVNode("p", null, [
      _hoisted_34,
      _hoisted_35,
      createBaseVNode("a", _hoisted_36, [
        _hoisted_37,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_38
    ]),
    _hoisted_39,
    createBaseVNode("p", null, [
      _hoisted_43,
      createBaseVNode("a", _hoisted_44, [
        _hoisted_45,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_46,
    createBaseVNode("p", null, [
      _hoisted_52,
      createBaseVNode("a", _hoisted_53, [
        _hoisted_54,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_55,
    createBaseVNode("p", null, [
      _hoisted_63,
      createBaseVNode("a", _hoisted_64, [
        _hoisted_65,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_66,
    createBaseVNode("p", null, [
      _hoisted_73,
      createBaseVNode("a", _hoisted_74, [
        _hoisted_75,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_76,
    createBaseVNode("p", null, [
      _hoisted_88,
      createBaseVNode("a", _hoisted_89, [
        _hoisted_90,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_91,
    createVNode(_component_global_config)
  ], 64);
}
var linuxCommand_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { linuxCommand_html as default };
