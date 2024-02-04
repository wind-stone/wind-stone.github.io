import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u7B2C\u4E09\u65B9\u5DE5\u5177\u5E93",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7B2C\u4E09\u65B9\u5DE5\u5177\u5E93",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7B2C\u4E09\u65B9\u5DE5\u5177\u5E93")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Node.js/NPM \u7BA1\u7406");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("nvm \u7BA1\u7406 Node.js \u7248\u672C");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("nrm \u7BA1\u7406 NPM registry");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("npx \u8C03\u7528\u5C40\u90E8\u5B89\u88C5\u7684\u6A21\u5757");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("cross-env \u8DE8\u5E73\u53F0\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u76D1\u63A7\u6587\u4EF6\u53D8\u5316");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("chokidar \u76D1\u63A7\u6587\u4EF6\u53D8\u5316");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("nodemon \u76D1\u63A7\u6587\u4EF6\u53D8\u5316\u91CD\u542F\u5E94\u7528");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u7F51\u7EDC\u8BF7\u6C42");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("axios-curlirize \u5C06\u8BF7\u6C42\u663E\u793A\u4E3A CURL");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("koa \u76F8\u5173");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("koa2-connect");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("koa-send\u3001koa-static");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("koa-socket-2");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("koa-json");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("koa-onerror");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("koa-bodyparser");
const _hoisted_20 = /* @__PURE__ */ createTextVNode("koa-router");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("koa-views");
const _hoisted_22 = /* @__PURE__ */ createTextVNode("koa-proxy");
const _hoisted_23 = /* @__PURE__ */ createTextVNode("koa-logger");
const _hoisted_24 = /* @__PURE__ */ createTextVNode("library \u91CC\u5E38\u7528\u7684\u5DE5\u5177\u5E93");
const _hoisted_25 = /* @__PURE__ */ createTextVNode("Inquirer.js");
const _hoisted_26 = /* @__PURE__ */ createTextVNode("Commander.js");
const _hoisted_27 = /* @__PURE__ */ createTextVNode("\u5176\u4ED6");
const _hoisted_28 = /* @__PURE__ */ createTextVNode("require-all");
const _hoisted_29 = /* @__PURE__ */ createTextVNode("etag");
const _hoisted_30 = /* @__PURE__ */ createTextVNode("depcheck");
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "node-js-npm-\u7BA1\u7406",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#node-js-npm-\u7BA1\u7406",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Node.js/NPM \u7BA1\u7406")
], -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "nvm-\u7BA1\u7406-node-js-\u7248\u672C",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#nvm-\u7BA1\u7406-node-js-\u7248\u672C",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" nvm \u7BA1\u7406 Node.js \u7248\u672C")
], -1);
const _hoisted_33 = {
  href: "https://github.com/creationix/nvm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_34 = /* @__PURE__ */ createTextVNode("nvm");
const _hoisted_35 = /* @__PURE__ */ createTextVNode("\uFF0C\u5373 Node Version Manager\uFF0C\u53EF\u4EE5\u7BA1\u7406\u591A\u4E2A Node.js \u7248\u672C\u3002");
const _hoisted_36 = /* @__PURE__ */ createStaticVNode('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D\u3001\u7F16\u8BD1\u3001\u5B89\u88C5\u6700\u65B0\u7684 Node \u7684 release \u7248\u672C\uFF0C\u5176\u4E2D node \u662F\u6700\u65B0\u7248\u672C\u7684\u522B\u540D</span>\nnvm <span class="token function">install</span> node\n\n<span class="token comment"># \u5B89\u88C5\u6307\u5B9A\u7248\u672C\u7684 \bNode</span>\nnvm <span class="token function">install</span> <span class="token number">6.14</span>.4\n\n<span class="token comment"># \u5217\u51FA\uFF08\u8FDC\u7A0B\uFF09\u6240\u6709\u53EF\u7528\u7684\u7248\u672C</span>\nnvm ls-remote\n\n<span class="token comment"># \u5217\u51FA\u672C\u5730\u5B89\u88C5\u7684\u6240\u6709\u7248\u672C</span>\nnvm <span class="token function">ls</span>\n\n<span class="token comment"># \u4F7F\u7528\u7279\u5B9A\u7248\u672C</span>\nnvm use xxx\n\n<span class="token comment"># \u8BBE\u7F6E\u9ED8\u8BA4\u7684 Node \u7248\u672C</span>\nnvm <span class="token builtin class-name">alias</span> default vxx.yy.zz\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="nrm-\u7BA1\u7406-npm-registry" tabindex="-1"><a class="header-anchor" href="#nrm-\u7BA1\u7406-npm-registry" aria-hidden="true">#</a> nrm \u7BA1\u7406 NPM registry</h3>', 2);
const _hoisted_38 = {
  href: "https://github.com/Pana/nrm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_39 = /* @__PURE__ */ createTextVNode("nrm");
const _hoisted_40 = /* @__PURE__ */ createTextVNode("\uFF0C\u5373 NPM registry manager\uFF0C\u53EF\u4EE5\u5728\u5404\u4E2A register \u4E4B\u95F4\u5FEB\u901F\u5207\u6362\uFF0C\u6BD4\u5982");
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("code", null, "npm", -1);
const _hoisted_42 = /* @__PURE__ */ createTextVNode("\uFF0C");
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("code", null, "cnpm", -1);
const _hoisted_44 = /* @__PURE__ */ createTextVNode("\uFF0C");
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("code", null, "taobao", -1);
const _hoisted_46 = /* @__PURE__ */ createTextVNode("\u7B49");
const _hoisted_47 = /* @__PURE__ */ createStaticVNode('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u279C  ~ nrm <span class="token function">ls</span>\n\n  <span class="token function">npm</span> ---- https://registry.npmjs.org/\n  cnpm --- http://r.cnpmjs.org/\n  taobao - https://registry.npm.taobao.org/\n  nj ----- https://registry.nodejitsu.com/\n  rednpm - http://registry.mirror.cqupt.edu.cn/\n  npmMirror  https://skimdb.npmjs.com/registry/\n  edunpm - http://registry.enpmjs.org/\n* ks ----- https://npm.corp.kuaishou.com/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="npx-\u8C03\u7528\u5C40\u90E8\u5B89\u88C5\u7684\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#npx-\u8C03\u7528\u5C40\u90E8\u5B89\u88C5\u7684\u6A21\u5757" aria-hidden="true">#</a> npx \u8C03\u7528\u5C40\u90E8\u5B89\u88C5\u7684\u6A21\u5757</h3><p><code>npx</code>\uFF0C\u4E3B\u8981\u89E3\u51B3\u8C03\u7528\u9879\u76EE\u5C40\u90E8\u5B89\u88C5\u7684\u6A21\u5757\u7684\u95EE\u9898\u3002\u6B63\u5E38\u9879\u76EE\u5C40\u90E8\u5B89\u88C5\u7684\u6A21\u5757\u6BD4\u5982<code>vuepress</code>\uFF0C\u53EA\u80FD\u5728\u9879\u76EE\u811A\u672C\u548C<code>package.json</code>\u7684<code>scripts</code>\u5B57\u6BB5\u91CC\u9762\u624D\u80FD\u8C03\u7528\u547D\u4EE4<code>vuepress dev</code>\uFF0C\u82E5\u662F\u60F3\u5728\u547D\u4EE4\u884C\u4E0B\u8C03\u7528\uFF0C\u5C31\u5FC5\u987B\u50CF\u8FD9\u6837\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u6267\u884C</span>\n$ node-modules/.bin/vuepress dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u800C<code>npx</code>\u5C31\u662F\u65B9\u4FBF\u76F4\u63A5\u8C03\u7528\u9879\u76EE\u5185\u90E8\u5B89\u88C5\u7684\u6A21\u5757\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx vuepress dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>npx</code>\u7684\u539F\u7406\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u8FD0\u884C\u7684\u65F6\u5019\uFF0C\u4F1A\u5230<code>node_modules/.bin</code>\u8DEF\u5F84\u548C\u73AF\u5883\u53D8\u91CF<code>$PATH</code>\u91CC\u9762\uFF0C\u68C0\u67E5\u547D\u4EE4\u662F\u5426\u5B58\u5728\u3002</p><p>\u7531\u4E8E<code>npx</code>\u4F1A\u68C0\u67E5\u73AF\u5883\u53D8\u91CF<code>$PATH</code>\uFF0C\u6240\u4EE5\u7CFB\u7EDF\u547D\u4EE4\u4E5F\u53EF\u4EE5\u8C03\u7528\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7B49\u540C\u4E8E ls</span>\n$ npx <span class="token function">ls</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Reference:</p>', 10);
const _hoisted_57 = {
  href: "http://www.ruanyifeng.com/blog/2019/02/npx.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_58 = /* @__PURE__ */ createTextVNode("\u962E\u4E00\u5CF0 - npx \u4F7F\u7528\u6559\u7A0B");
const _hoisted_59 = {
  href: "https://github.com/zkat/npx",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_60 = /* @__PURE__ */ createTextVNode("github - npx");
const _hoisted_61 = /* @__PURE__ */ createStaticVNode('<h3 id="cross-env-\u8DE8\u5E73\u53F0\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#cross-env-\u8DE8\u5E73\u53F0\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> cross-env \u8DE8\u5E73\u53F0\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</h3><p><code>windows</code>\u548C<code>POSIX</code>\u547D\u4EE4\u884C\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u7684\u65B9\u5F0F\u662F\u6709\u5DEE\u5F02\u7684\uFF0C\u5BF9\u4E8E<code>POSIX</code>\uFF0C\u662F\u4F7F\u7528<code>$ENV_VAR</code>\uFF1B\u5BF9\u4E8E<code>windows</code>\uFF0C\u5219\u4F7F\u7528<code>%ENV_VAR%</code>\u3002</p><p><code>cross-env</code>\u89E3\u51B3\u4E86\u8DE8\u5E73\u53F0\u8BBE\u7F6E\u548C\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u7684\u95EE\u9898\uFF0C\u4F60\u53EA\u9700\u8981\u50CF\u5728\u4F7F\u7528<code>POSIX</code>\u7CFB\u7EDF\u65F6\u90A3\u6837\u8BBE\u7F6E\u5C31\u884C\uFF0C<code>cross-env</code>\u5C06\u5E2E\u4F60\u89E3\u51B3\u8DE8\u5E73\u53F0\u7684\u95EE\u9898\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5</span>\n<span class="token function">npm</span> <span class="token function">install</span> --save-dev cross-env\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// package.json</span>\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=production webpack --config build/webpack.config.js&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u76D1\u63A7\u6587\u4EF6\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#\u76D1\u63A7\u6587\u4EF6\u53D8\u5316" aria-hidden="true">#</a> \u76D1\u63A7\u6587\u4EF6\u53D8\u5316</h2><h3 id="chokidar-\u76D1\u63A7\u6587\u4EF6\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#chokidar-\u76D1\u63A7\u6587\u4EF6\u53D8\u5316" aria-hidden="true">#</a> chokidar \u76D1\u63A7\u6587\u4EF6\u53D8\u5316</h3>', 7);
const _hoisted_68 = {
  href: "https://github.com/paulmillr/chokidar",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_69 = /* @__PURE__ */ createTextVNode("chokidar");
const _hoisted_70 = /* @__PURE__ */ createTextVNode("\uFF0C\u57FA\u4E8E Nodej.js \u7684");
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("code", null, "fs.watch", -1);
const _hoisted_72 = /* @__PURE__ */ createTextVNode("/");
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("code", null, "fs.watchFile", -1);
const _hoisted_74 = /* @__PURE__ */ createTextVNode("/");
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("code", null, "fsevents", -1);
const _hoisted_76 = /* @__PURE__ */ createTextVNode("\u5C01\u88C5\u7684");
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("code", null, "watch", -1);
const _hoisted_78 = /* @__PURE__ */ createTextVNode("\u5DE5\u5177\u3002");
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "nodemon-\u76D1\u63A7\u6587\u4EF6\u53D8\u5316\u91CD\u542F\u5E94\u7528",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#nodemon-\u76D1\u63A7\u6587\u4EF6\u53D8\u5316\u91CD\u542F\u5E94\u7528",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" nodemon \u76D1\u63A7\u6587\u4EF6\u53D8\u5316\u91CD\u542F\u5E94\u7528")
], -1);
const _hoisted_80 = {
  href: "https://github.com/remy/nodemon",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("code", null, "nodemon", -1);
const _hoisted_82 = /* @__PURE__ */ createTextVNode("\u53EF\u4EE5\u5728\u5F00\u53D1");
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("code", null, "node.js", -1);
const _hoisted_84 = /* @__PURE__ */ createTextVNode("\u5E94\u7528\u65F6\uFF0C\u76D1\u63A7\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u6539\u53D8\uFF0C\u5E76\u81EA\u52A8\u91CD\u542F");
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("code", null, "node.js", -1);
const _hoisted_86 = /* @__PURE__ */ createTextVNode("\u5E94\u7528\u3002");
const _hoisted_87 = /* @__PURE__ */ createStaticVNode('<p><code>nodemon</code>\u4E0D\u9700\u8981\u4EFB\u4F55\u5173\u4E8E\u5F00\u53D1\u65B9\u6CD5\u6216\u4EE3\u7801\u4E0A\u7684\u4FEE\u6539\uFF0C\u5B83\u662F<code>node</code>\u7684\u5C01\u88C5\uFF0C\u5E76\u4EE3\u66FF\u4E86<code>node</code>\u3002\u4F7F\u7528<code>nodemon</code>\u65F6\uFF0C\u5F53\u6267\u884C\u811A\u672C\u65F6\uFF0C\u5728\u547D\u4EE4\u884C\u5C06\u539F\u6765\u7684<code>node</code>\u66FF\u6362\u6210<code>nodemon</code>\u5373\u53EF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5168\u5C40/\u5C40\u90E8\u5B89\u88C5</span>\n<span class="token function">npm</span> <span class="token function">install</span> -g nodemon\n<span class="token function">npm</span> <span class="token function">install</span> --save-dev nodemon\n\n<span class="token comment"># \u542F\u52A8\u5E94\u7528\uFF0C\u5E76\u9ED8\u8BA4\u76D1\u63A7\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u6539\u53D8\uFF08\u9012\u5F52\u5730\uFF09</span>\nnodemon ./server.js\n\n<span class="token comment"># \u542F\u52A8\u5E94\u7528\uFF0C\u5E76\u76D1\u63A7 server \u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6\u6539\u53D8</span>\nnodemon server/index.js --watch server\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u65B9\u5F0F\u4E8C\uFF1A\u8BE5\u65B9\u5F0F\u5B98\u7F51\u91CC\u76F4\u63A5\u8BF4\u660E\u7ED3\u679C\u7684\u7ED3\u6784\uFF0C\u56E0\u6B64\u5982\u4E0B\u9610\u8FF0</span>\n<span class="token keyword">var</span> libs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;require-all&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/lib&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5047\u8BBE<code>lib</code>\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u5939\u7ED3\u6784\u4E3A\uFF1A</p><ul><li>lib <ul><li>folder1 <ul><li>file1-1.js</li><li>file1-2.js</li></ul></li><li>folder2 <ul><li>file2-1.js</li></ul></li></ul></li></ul><p>\u5219\u901A\u8FC7\u65B9\u5F0F\u4E8C\u5F97\u5230\u7684<code>libs</code>\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  folder1<span class="token operator">:</span> <span class="token punctuation">{</span>\n    file1<span class="token operator">-</span><span class="token number">1</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> exports<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    file1<span class="token operator">-</span><span class="token number">2</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> exports<span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  folder2<span class="token operator">:</span> <span class="token punctuation">{</span>\n    file2<span class="token operator">-</span><span class="token number">1</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> exports<span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5404\u4E2A\u6587\u4EF6\u7684\u7ED3\u6784\u4E3A<code>module.exports = function() {}</code>\uFF0C\u4EE5<code>[Function: exports]</code>\u8868\u793A\u3002</p><h2 id="\u7F51\u7EDC\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u8BF7\u6C42" aria-hidden="true">#</a> \u7F51\u7EDC\u8BF7\u6C42</h2><h3 id="axios-curlirize-\u5C06\u8BF7\u6C42\u663E\u793A\u4E3A-curl" tabindex="-1"><a class="header-anchor" href="#axios-curlirize-\u5C06\u8BF7\u6C42\u663E\u793A\u4E3A-curl" aria-hidden="true">#</a> axios-curlirize \u5C06\u8BF7\u6C42\u663E\u793A\u4E3A CURL</h3>', 10);
const _hoisted_97 = {
  href: "https://github.com/delirius325/axios-curlirize",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_98 = /* @__PURE__ */ createTextVNode("axios-curlirize");
const _hoisted_99 = /* @__PURE__ */ createTextVNode("\uFF0C\u5C06 Node.js \u91CC\u7684");
const _hoisted_100 = /* @__PURE__ */ createBaseVNode("code", null, "axios", -1);
const _hoisted_101 = /* @__PURE__ */ createTextVNode("\u8BF7\u6C42\u4EE5 CURL \u7684\u5F62\u5F0F\u6253\u5370\u51FA\u6765\u3002");
const _hoisted_102 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "koa-\u76F8\u5173",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#koa-\u76F8\u5173",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" koa \u76F8\u5173")
], -1);
const _hoisted_103 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "koa2-connect",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#koa2-connect",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" koa2-connect")
], -1);
const _hoisted_104 = {
  href: "https://github.com/cyrilluce/koa2-connect",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_105 = /* @__PURE__ */ createTextVNode("koa2-connect");
const _hoisted_106 = /* @__PURE__ */ createTextVNode("\uFF0C\u5728 Koa v2 \u91CC\u4F7F\u7528 Express/Connect \u7684\u4E2D\u95F4\u4EF6\u3002");
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "koa-send\u3001koa-static",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#koa-send\u3001koa-static",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" koa-send\u3001koa-static")
], -1);
const _hoisted_108 = {
  href: "https://github.com/koajs/send",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_109 = /* @__PURE__ */ createTextVNode("koa-send");
const _hoisted_110 = /* @__PURE__ */ createTextVNode("\uFF0C\u9759\u6001\u6587\u4EF6\u670D\u52A1\u4E2D\u95F4\u4EF6\u3002\u5176\u6838\u5FC3\u5B9E\u73B0\u65B9\u5F0F\u662F\u4EE5");
const _hoisted_111 = /* @__PURE__ */ createBaseVNode("code", null, "fs.createReadStream", -1);
const _hoisted_112 = /* @__PURE__ */ createTextVNode("\u8BFB\u53D6\u670D\u52A1\u5668\u672C\u5730\u6587\u4EF6\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002");
const _hoisted_113 = {
  href: "https://github.com/koajs/static",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_114 = /* @__PURE__ */ createTextVNode("koa-static");
const _hoisted_115 = /* @__PURE__ */ createTextVNode("\uFF0CKoa \u7684\u9759\u6001\u6587\u4EF6\u670D\u52A1\u4E2D\u95F4\uFF0C\u57FA\u4E8E");
const _hoisted_116 = /* @__PURE__ */ createBaseVNode("code", null, "koa-send", -1);
const _hoisted_117 = /* @__PURE__ */ createTextVNode("\u5C01\u88C5\u3002");
const _hoisted_118 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "koa-socket-2",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#koa-socket-2",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" koa-socket-2")
], -1);
const _hoisted_119 = {
  href: "https://github.com/ambelovsky/koa-socket-2",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_120 = /* @__PURE__ */ createTextVNode("koa-socket-2");
const _hoisted_121 = /* @__PURE__ */ createTextVNode("\uFF0CKoa \u91CC\u4F7F\u7528");
const _hoisted_122 = /* @__PURE__ */ createBaseVNode("code", null, "socket.io", -1);
const _hoisted_123 = /* @__PURE__ */ createTextVNode("\u7684\u8BED\u6CD5\u7CD6\u3002");
const _hoisted_124 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "koa-json",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#koa-json",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" koa-json")
], -1);
const _hoisted_125 = {
  href: "https://github.com/koajs/json",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_126 = /* @__PURE__ */ createTextVNode("koa-json");
const _hoisted_127 = /* @__PURE__ */ createTextVNode("\uFF0C\u5C06\u8BF7\u6C42\u7684\u54CD\u5E94\u7ED3\u679C\uFF08");
const _hoisted_128 = /* @__PURE__ */ createBaseVNode("code", null, "ctx.body", -1);
const _hoisted_129 = /* @__PURE__ */ createTextVNode("\uFF09\u6309 JSON \u683C\u5F0F\u7F8E\u5316\u7684\u4E2D\u95F4\u4EF6\uFF0C\u8FD8\u652F\u6301\u5C06 Node \u6D41\u5BF9\u8C61\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u3002");
const _hoisted_130 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "koa-onerror",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#koa-onerror",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" koa-onerror")
], -1);
const _hoisted_131 = {
  href: "https://github.com/koajs/onerror",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_132 = /* @__PURE__ */ createTextVNode("koa-onerror");
const _hoisted_133 = /* @__PURE__ */ createStaticVNode("\uFF0CKoa \u7684\u9519\u8BEF\u5904\u7406\uFF0C\u975E\u4E2D\u95F4\u4EF6\uFF0C\u53EF\u4EE5\u5728\u53D1\u751F\u9519\u8BEF\u65F6\u6839\u636E\u8BF7\u6C42\u7684\u7C7B\u578B\uFF08\u6BD4\u5982<code>html</code>/<code>json</code>/<code>text</code>\uFF09\u8FD4\u56DE\u8BE5\u7C7B\u578B\u7684\u54CD\u5E94\u3002\u8BE5\u63D2\u4EF6\u901A\u8FC7\u4FEE\u6539<code>ctx</code>\u7684\u539F\u578B<code>app.context</code>\u4E0A\u7684<code>onerror</code>\u65B9\u6CD5\u7ED9\u6240\u6709\u7684<code>ctx</code>\u5B9E\u4F8B\u91CD\u65B0\u8BBE\u7F6E<code>onerror</code>\u65B9\u6CD5\u3002", 17);
const _hoisted_150 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6CE8\u610F\uFF0CKoa \u7684<code>app.context</code>\u4E0A\u9ED8\u8BA4\u5B58\u5728<code>onerror</code>\u65B9\u6CD5\uFF0C\u8BE5\u63D2\u4EF6\u8986\u76D6\u4E86\u9ED8\u8BA4\u7684<code>onerror</code>\u65B9\u6CD5\u3002</p><h3 id="koa-bodyparser" tabindex="-1"><a class="header-anchor" href="#koa-bodyparser" aria-hidden="true">#</a> koa-bodyparser</h3>', 3);
const _hoisted_153 = {
  href: "https://github.com/koajs/bodyparser",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_154 = /* @__PURE__ */ createTextVNode("koa-bodyparser");
const _hoisted_155 = /* @__PURE__ */ createTextVNode("\uFF0CKoa \u7684 body \u89E3\u6790\u4E2D\u95F4\u4EF6\uFF0C\u89E3\u6790\u540E\u7684\u6570\u636E\u5B58\u50A8\u5728");
const _hoisted_156 = /* @__PURE__ */ createBaseVNode("code", null, "ctx.request.body", -1);
const _hoisted_157 = /* @__PURE__ */ createTextVNode("\u91CC\u3002");
const _hoisted_158 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "koa-router",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#koa-router",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" koa-router")
], -1);
const _hoisted_159 = {
  href: "https://github.com/ZijianHe/koa-router",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_160 = /* @__PURE__ */ createTextVNode("koa-router");
const _hoisted_161 = /* @__PURE__ */ createTextVNode("\uFF0C");
const _hoisted_162 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "koa-views",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#koa-views",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" koa-views")
], -1);
const _hoisted_163 = {
  href: "https://github.com/queckezz/koa-views",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_164 = /* @__PURE__ */ createTextVNode("koa-views");
const _hoisted_165 = /* @__PURE__ */ createTextVNode("\uFF0C\u6A21\u677F\u6E32\u67D3\u4E2D\u95F4\u4EF6\uFF0C\u7ED9\u5B9A\u8981\u8BF7\u6C42\u7684\u89C6\u56FE\u540D\u79F0\uFF0C\u4F20\u5165\u6570\u636E\uFF0C\u5373\u53EF\u6E32\u67D3\u51FA\u6700\u7EC8\u7684\u6A21\u677F\u5B57\u7B26\u4E32\u3002");
const _hoisted_166 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> views <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-views&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// \u5FC5\u987B\u5728\u4EFB\u4F55\u8DEF\u7531\u4E2D\u95F4\u4EF6\u4E4B\u524D\u4F7F\u7528</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">views</span><span class="token punctuation">(</span>\n  <span class="token comment">// \u6A21\u677F\u76EE\u5F55\uFF0C\u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u6240\u6709\u7684\u89C6\u56FE\u90FD\u662F\u57FA\u4E8E\u6B64\u8DEF\u5F84</span>\n  path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;/views&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token comment">// \u89C6\u56FE\u7684\u9ED8\u8BA4\u6269\u5C55\u540D</span>\n    extension<span class="token operator">:</span> <span class="token string">&#39;ejs&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token punctuation">{</span>\n    first<span class="token operator">:</span> <span class="token string">&#39;Tobi&#39;</span><span class="token punctuation">,</span>\n    last<span class="token operator">:</span> <span class="token string">&#39;Holowaychuk&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  species<span class="token operator">:</span> <span class="token string">&#39;ferret&#39;</span><span class="token punctuation">,</span>\n  age<span class="token operator">:</span> <span class="token number">3</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// \u6E32\u67D3 user \u89C6\u56FE\uFF0C\u9ED8\u8BA4\u6269\u5C55\u540D\u662F ejs\uFF0C\u53C2\u6570\u662F { user }</span>\n  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>module<span class="token punctuation">.</span>parent<span class="token punctuation">)</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- user.ejs --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>&lt;%= user.name.first %&gt; is a &lt;%= user.age %&gt; year old &lt;%= user.species %&gt;.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="koa-proxy" tabindex="-1"><a class="header-anchor" href="#koa-proxy" aria-hidden="true">#</a> koa-proxy</h3>', 3);
const _hoisted_169 = {
  href: "https://github.com/popomore/koa-proxy",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_170 = /* @__PURE__ */ createTextVNode("koa-proxy");
const _hoisted_171 = /* @__PURE__ */ createTextVNode("\uFF0C\u662F");
const _hoisted_172 = /* @__PURE__ */ createBaseVNode("code", null, "koa", -1);
const _hoisted_173 = /* @__PURE__ */ createTextVNode("\u7684\u4EE3\u7406\u4E2D\u95F4\u4EF6\uFF0C\u4E3B\u8981\u662F\u5C06\u8BF7\u6C42\u4EE3\u7406\u5230\u5176\u4ED6\u670D\u52A1\u5668\u4E0A\u3002");
const _hoisted_174 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "koa-logger",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#koa-logger",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" koa-logger")
], -1);
const _hoisted_175 = {
  href: "https://github.com/koajs/logger",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_176 = /* @__PURE__ */ createTextVNode("koa-logger");
const _hoisted_177 = /* @__PURE__ */ createTextVNode("\uFF0C");
const _hoisted_178 = /* @__PURE__ */ createBaseVNode("code", null, "koa", -1);
const _hoisted_179 = /* @__PURE__ */ createTextVNode("\u5F00\u53D1\u98CE\u683C\u7684\u65E5\u5FD7\u4E2D\u95F4\u4EF6\u3002\u8FD9\u4E2A\u4E2D\u95F4\u4EF6\u5E94\u8BE5\u5C3D\u53EF\u80FD\u9760\u524D\u653E\u7F6E\uFF0C\u4EE5\u4FBF\u53EF\u4EE5\u8BB0\u5F55\u4E0B\u6240\u6709\u7684\u8BF7\u6C42\u548C\u54CD\u5E94\u3002");
const _hoisted_180 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "library-\u91CC\u5E38\u7528\u7684\u5DE5\u5177\u5E93",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#library-\u91CC\u5E38\u7528\u7684\u5DE5\u5177\u5E93",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" library \u91CC\u5E38\u7528\u7684\u5DE5\u5177\u5E93")
], -1);
const _hoisted_181 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "inquirer-js",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#inquirer-js",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Inquirer.js")
], -1);
const _hoisted_182 = {
  href: "https://github.com/SBoudrias/Inquirer.js",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_183 = /* @__PURE__ */ createTextVNode("Inquirer.js");
const _hoisted_184 = /* @__PURE__ */ createTextVNode("\uFF0C\u5E38\u7528\u7684\u4EA4\u4E92\u5F0F\u547D\u4EE4\u884C UI \u96C6\u5408\uFF0C\u4E3B\u8981\u7528\u4E8E\u5728\u547D\u4EE4\u884C\u91CC\u8BA9\u7528\u6237\u4EE5\u4EA4\u4E92\u5F0F\u7684\u65B9\u5F0F\u9009\u62E9/\u8F93\u5165\u6240\u9700\u7684\u6570\u636E\u3002");
const _hoisted_185 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "commander-js",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#commander-js",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Commander.js")
], -1);
const _hoisted_186 = {
  href: "https://github.com/tj/commander.js",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_187 = /* @__PURE__ */ createTextVNode("Commander.js");
const _hoisted_188 = /* @__PURE__ */ createTextVNode("\uFF0C\u5B8C\u6574\u7684 Node.js \u547D\u4EE4\u884C\u89E3\u51B3\u65B9\u6848\uFF0C\u5B9A\u4E49\u547D\u4EE4\u3001\u9009\u9879\uFF0C\u6839\u636E\u7528\u6237\u8F93\u5165\u7684\u547D\u4EE4\u6267\u884C\u64CD\u4F5C\u3002\u4F7F\u7528\u8BE5\u5E93\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u4E00\u5957\u547D\u4EE4\u53CA\u5BF9\u5E94\u7684\u529F\u80FD\u3002");
const _hoisted_189 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u5176\u4ED6",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5176\u4ED6",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5176\u4ED6")
], -1);
const _hoisted_190 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "require-all",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#require-all",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" require-all")
], -1);
const _hoisted_191 = {
  href: "https://github.com/felixge/node-require-all",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_192 = /* @__PURE__ */ createBaseVNode("code", null, "require-all", -1);
const _hoisted_193 = /* @__PURE__ */ createTextVNode("\uFF0C");
const _hoisted_194 = /* @__PURE__ */ createBaseVNode("code", null, "require", -1);
const _hoisted_195 = /* @__PURE__ */ createTextVNode("\u6574\u4E2A\u76EE\u5F55\u91CC\u7684\u6240\u6709\u6587\u4EF6\u3002");
const _hoisted_196 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u65B9\u5F0F\u4E00\uFF1A\u8BE5\u65B9\u5F0F\u53EF\u76F4\u63A5\u770B\u5B98\u7F51\u793A\u4F8B\uFF0C\u6709\u8BE6\u7EC6\u8BF4\u660E</span>\n<span class="token keyword">var</span> controllers <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;require-all&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  dirname     <span class="token operator">:</span>  __dirname <span class="token operator">+</span> <span class="token string">&#39;/controllers&#39;</span><span class="token punctuation">,</span>\n  filter      <span class="token operator">:</span>  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(.+Controller)\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n  excludeDirs <span class="token operator">:</span>  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\.(git|svn)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n  recursive   <span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="etag" tabindex="-1"><a class="header-anchor" href="#etag" aria-hidden="true">#</a> etag</h3>', 2);
const _hoisted_198 = {
  href: "https://github.com/jshttp/etag",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_199 = /* @__PURE__ */ createTextVNode("etag");
const _hoisted_200 = /* @__PURE__ */ createTextVNode("\uFF0C\u521B\u5EFA\u7B80\u5355\u7684 ETags\u3002");
const _hoisted_201 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "depcheck",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#depcheck",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" depcheck")
], -1);
const _hoisted_202 = {
  href: "https://github.com/depcheck/depcheck",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_203 = /* @__PURE__ */ createTextVNode("depcheck");
const _hoisted_204 = /* @__PURE__ */ createTextVNode(" \uFF0C\u5206\u6790\u9879\u76EE\u91CC\u7684\u4F9D\u8D56\uFF0C\u67E5\u770B\u6BCF\u4E2A\u4F9D\u8D56\u662F\u5426\u4F7F\u7528\u5230\uFF0C\u7F3A\u5C11\u54EA\u4E9B\u4F9D\u8D56\u3002");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#node-js-npm-\u7BA1\u7406" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#nvm-\u7BA1\u7406-node-js-\u7248\u672C" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#nrm-\u7BA1\u7406-npm-registry" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#npx-\u8C03\u7528\u5C40\u90E8\u5B89\u88C5\u7684\u6A21\u5757" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#cross-env-\u8DE8\u5E73\u53F0\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u76D1\u63A7\u6587\u4EF6\u53D8\u5316" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#chokidar-\u76D1\u63A7\u6587\u4EF6\u53D8\u5316" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#nodemon-\u76D1\u63A7\u6587\u4EF6\u53D8\u5316\u91CD\u542F\u5E94\u7528" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7F51\u7EDC\u8BF7\u6C42" }, {
            default: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#axios-curlirize-\u5C06\u8BF7\u6C42\u663E\u793A\u4E3A-curl" }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#koa-\u76F8\u5173" }, {
            default: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#koa2-connect" }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#koa-send\u3001koa-static" }, {
                default: withCtx(() => [
                  _hoisted_15
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#koa-socket-2" }, {
                default: withCtx(() => [
                  _hoisted_16
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#koa-json" }, {
                default: withCtx(() => [
                  _hoisted_17
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#koa-onerror" }, {
                default: withCtx(() => [
                  _hoisted_18
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#koa-bodyparser" }, {
                default: withCtx(() => [
                  _hoisted_19
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#koa-router" }, {
                default: withCtx(() => [
                  _hoisted_20
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#koa-views" }, {
                default: withCtx(() => [
                  _hoisted_21
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#koa-proxy" }, {
                default: withCtx(() => [
                  _hoisted_22
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#koa-logger" }, {
                default: withCtx(() => [
                  _hoisted_23
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#library-\u91CC\u5E38\u7528\u7684\u5DE5\u5177\u5E93" }, {
            default: withCtx(() => [
              _hoisted_24
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#inquirer-js" }, {
                default: withCtx(() => [
                  _hoisted_25
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#commander-js" }, {
                default: withCtx(() => [
                  _hoisted_26
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5176\u4ED6" }, {
            default: withCtx(() => [
              _hoisted_27
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#require-all" }, {
                default: withCtx(() => [
                  _hoisted_28
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#etag" }, {
                default: withCtx(() => [
                  _hoisted_29
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#depcheck" }, {
            default: withCtx(() => [
              _hoisted_30
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_31,
    _hoisted_32,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_33, [
        _hoisted_34,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_35
    ]),
    _hoisted_36,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_38, [
        _hoisted_39,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_40,
      _hoisted_41,
      _hoisted_42,
      _hoisted_43,
      _hoisted_44,
      _hoisted_45,
      _hoisted_46
    ]),
    _hoisted_47,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_57, [
          _hoisted_58,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_59, [
          _hoisted_60,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_61,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_68, [
        _hoisted_69,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_70,
      _hoisted_71,
      _hoisted_72,
      _hoisted_73,
      _hoisted_74,
      _hoisted_75,
      _hoisted_76,
      _hoisted_77,
      _hoisted_78
    ]),
    _hoisted_79,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_80, [
        _hoisted_81,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_82,
      _hoisted_83,
      _hoisted_84,
      _hoisted_85,
      _hoisted_86
    ]),
    _hoisted_87,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_97, [
        _hoisted_98,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_99,
      _hoisted_100,
      _hoisted_101
    ]),
    _hoisted_102,
    _hoisted_103,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_104, [
        _hoisted_105,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_106
    ]),
    _hoisted_107,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_108, [
        _hoisted_109,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_110,
      _hoisted_111,
      _hoisted_112
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_113, [
        _hoisted_114,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_115,
      _hoisted_116,
      _hoisted_117
    ]),
    _hoisted_118,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_119, [
        _hoisted_120,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_121,
      _hoisted_122,
      _hoisted_123
    ]),
    _hoisted_124,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_125, [
        _hoisted_126,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_127,
      _hoisted_128,
      _hoisted_129
    ]),
    _hoisted_130,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_131, [
        _hoisted_132,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_133
    ]),
    _hoisted_150,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_153, [
        _hoisted_154,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_155,
      _hoisted_156,
      _hoisted_157
    ]),
    _hoisted_158,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_159, [
        _hoisted_160,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_161
    ]),
    _hoisted_162,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_163, [
        _hoisted_164,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_165
    ]),
    _hoisted_166,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_169, [
        _hoisted_170,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_171,
      _hoisted_172,
      _hoisted_173
    ]),
    _hoisted_174,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_175, [
        _hoisted_176,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_177,
      _hoisted_178,
      _hoisted_179
    ]),
    _hoisted_180,
    _hoisted_181,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_182, [
        _hoisted_183,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_184
    ]),
    _hoisted_185,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_186, [
        _hoisted_187,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_188
    ]),
    _hoisted_189,
    _hoisted_190,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_191, [
        _hoisted_192,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_193,
      _hoisted_194,
      _hoisted_195
    ]),
    _hoisted_196,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_198, [
        _hoisted_199,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_200
    ]),
    _hoisted_201,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_202, [
        _hoisted_203,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_204
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var thirdPartyPackage_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { thirdPartyPackage_html as default };
