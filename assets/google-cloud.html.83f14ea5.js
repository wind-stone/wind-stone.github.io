import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "google-cloud",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#google-cloud",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Google Cloud")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Linux \u4E0A\u5B89\u88C5 Node.js");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u914D\u7F6E\u73AF\u5883\u53D8\u91CF");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u6DFB\u52A0\u8F6F\u94FE");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u672C\u5730\u63A7\u5236\u53F0\u8FDE\u63A5\u5230 VM \u5B9E\u4F8B");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u521B\u5EFA\u65B0\u7684 SSH \u5BC6\u94A5");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u6DFB\u52A0\u9879\u76EE\u8303\u56F4\u7684 SSH \u516C\u94A5");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u4F7F\u7528\u7B2C\u4E09\u65B9\u5DE5\u5177\u8FDB\u884C\u8FDE\u63A5");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u5C06\u6587\u4EF6\u4F20\u8F93\u5230 Linux \u5B9E\u4F8B");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u9884\u5148\u8BBE\u7F6E project");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u9884\u5148\u8BBE\u7F6E zone");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u6587\u4EF6\u4F20\u8F93");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u670D\u52A1\u5668\u4E0A\u5B89\u88C5 git");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u542F\u52A8\u5E94\u7528");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u5E94\u7528\u542F\u52A8 host");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u5E94\u7528\u542F\u52A8\u7AEF\u53E3");
const _hoisted_18 = /* @__PURE__ */ createStaticVNode('<h2 id="linux-\u4E0A\u5B89\u88C5-node-js" tabindex="-1"><a class="header-anchor" href="#linux-\u4E0A\u5B89\u88C5-node-js" aria-hidden="true">#</a> Linux \u4E0A\u5B89\u88C5 Node.js</h2><p>Node \u5B98\u7F51\u5DF2\u7ECF\u628A Linux \u4E0B\u8F7D\u7248\u672C\u66F4\u6539\u4E3A\u5DF2\u7F16\u8BD1\u597D\u7684\u7248\u672C\u4E86\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4E0B\u8F7D\u89E3\u538B\u540E\u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># wget https://nodejs.org/dist/v10.9.0/node-v11.11.0-linux-x64.tar.xz    // \u4E0B\u8F7D</span>\n<span class="token comment"># tar xf  node-v11.11.0-linux-x64.tar.xz       // \u89E3\u538B</span>\n<span class="token comment"># cd node-v11.11.0-linux-x64/                  // \u8FDB\u5165\u89E3\u538B\u76EE\u5F55</span>\n<span class="token comment"># ./bin/node -v                               // \u6267\u884Cnode\u547D\u4EE4 \u67E5\u770B\u7248\u672C</span>\nv10.9.0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u89E3\u538B\u6587\u4EF6\u7684<code>bin</code>\u76EE\u5F55\u5E95\u4E0B\u5305\u542B\u4E86<code>node</code>\u3001<code>npm</code>\u7B49\u547D\u4EE4\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>ln</code>\u547D\u4EE4\u6765\u8BBE\u7F6E\u8F6F\u8FDE\u63A5\uFF1A</p><h3 id="\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u914D\u7F6E\u73AF\u5883\u53D8\u91CF</h3><p>\u4FEE\u6539<code>/etc/profile</code>\u6587\u4EF6\uFF0C\u6DFB\u52A0\u4E0B\u9762\u7684\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_HOME</span><span class="token operator">=</span>/home/cxl_windstone/node-v11.11.0-linux-x64/bin\n<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$NODE_HOME</span><span class="token builtin class-name">:</span><span class="token environment constant">$PATH</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><code>PATH</code>\u73AF\u5883\u53D8\u91CF\uFF0C\u4F1A\u7F57\u5217\u51FA\u4F9B\u7CFB\u7EDF\u641C\u7D22\u7684\u76EE\u5F55\uFF0C\u5F53\u5728<code>shell</code>\u4E0A\u6267\u884C\u7528\u6237\u8F93\u5165\u7684\u547D\u4EE4\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u641C\u7D22\u8FD9\u4E9B\u76EE\u5F55\uFF0C\u4EE5\u5BFB\u627E\u8FD9\u4E9B\u547D\u4EE4\u7A0B\u5E8F\u3002</p></div><h3 id="\u6DFB\u52A0\u8F6F\u94FE" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u8F6F\u94FE" aria-hidden="true">#</a> \u6DFB\u52A0\u8F6F\u94FE</h3><div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A</p><p>\u6CE8\u610F\uFF0C\u82E5\u662F\u914D\u7F6E\u4E86<code>PATH</code>\u73AF\u5883\u53D8\u91CF\uFF0C\u5C31\u4E0D\u9700\u8981\u8FD9\u4E00\u6B65\u4E86\u3002</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ln</span> -s /home/cxl_windstone/node-v11.11.0-linux-x64/bin/npm /bin/\n<span class="token function">ln</span> -s /home/cxl_windstone/node-v11.11.0-linux-x64/bin/npm /bin/\n\n<span class="token comment"># \u82E5\u662F\u6CA1\u6743\u9650\uFF0C\u5219\u9700\u4F7F\u7528\u7CFB\u7EDF\u7BA1\u7406\u5458\u8EAB\u4EFD\u6267\u884C\u547D\u4EE4</span>\n<span class="token function">sudo</span> <span class="token function">ln</span> -s /home/cxl_windstone/node-v11.11.0-linux-x64/bin/npm /bin/\n<span class="token function">sudo</span> <span class="token function">ln</span> -s /home/cxl_windstone/node-v11.11.0-linux-x64/bin/npm /bin/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><code>/home/cxl_windstone/node-v11.11.0-linux-x64/bin/npm</code>: \u4E0B\u8F7D\u5E76\u89E3\u538B\u7684\u8DEF\u5F84</li><li><code>/bin/</code>: \u7CFB\u7EDF\u7684<code>bin</code>\u6587\u4EF6\u5939\u8DEF\u5F84</li></ul><p>\u6CE8\u610F\uFF1A\u4EE5\u4E0A\u4E24\u79CD\u8DEF\u5F84\u8981\u6839\u636E\u5B9E\u9645\u505A\u8C03\u6574</p><h2 id="\u672C\u5730\u63A7\u5236\u53F0\u8FDE\u63A5\u5230-vm-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u63A7\u5236\u53F0\u8FDE\u63A5\u5230-vm-\u5B9E\u4F8B" aria-hidden="true">#</a> \u672C\u5730\u63A7\u5236\u53F0\u8FDE\u63A5\u5230 VM \u5B9E\u4F8B</h2><p>\u524D\u63D0\u6761\u4EF6\uFF1A\u672C\u5730\u5B89\u88C5\u4E86<code>gcloud</code>\u547D\u4EE4\u884C\u5DE5\u5177\u3002</p><h3 id="\u521B\u5EFA\u65B0\u7684-ssh-\u5BC6\u94A5" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u65B0\u7684-ssh-\u5BC6\u94A5" aria-hidden="true">#</a> \u521B\u5EFA\u65B0\u7684 SSH \u5BC6\u94A5</h3>', 16);
const _hoisted_34 = /* @__PURE__ */ createTextVNode("\u5728\u672C\u5730\u63A7\u5236\u53F0\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u6765");
const _hoisted_35 = {
  href: "https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys#createsshkeys",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_36 = /* @__PURE__ */ createTextVNode("\u521B\u5EFA\u65B0\u7684 SSH \u5BC6\u94A5");
const _hoisted_37 = /* @__PURE__ */ createStaticVNode('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u683C\u5F0F</span>\nssh-keygen -t rsa -f ~/.ssh/<span class="token punctuation">[</span>KEY_FILENAME<span class="token punctuation">]</span> -C <span class="token punctuation">[</span>USERNAME<span class="token punctuation">]</span>\n\n<span class="token comment"># \u5B9E\u9645\u8F93\u5165\u4E3A</span>\nssh-keygen -t rsa -f ~/.ssh/google_compute_engine -C cxl_windstone\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7ECF\u8FC7\u8FD9\u4E00\u6B65\uFF0C\u5728<code>~/.ssh</code>\u76EE\u5F55\u4E0B\u5C31\u751F\u6210\u4E86\u4E24\u4E2A\u6587\u4EF6: <code>google_compute_engine</code>\u548C<code>google_compute_engine.pub</code>\uFF0C\u5176\u4E2D\u4E3A<code>google_compute_engine</code>\u4E3A\u79C1\u94A5\uFF0C<code>google_compute_engine.pub</code>\u4E3A\u516C\u94A5\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A</p><p>\u751F\u6210\u79D8\u94A5\u65F6\uFF0C\u4E0D\u8981\u8F93\u5165\u5BC6\u7801\uFF0C\u5426\u5219\u540E\u9762\u7684\u64CD\u4F5C\u7ECF\u5E38\u8981\u8F93\u5165\u5BC6\u7801\u3002</p></div><h3 id="\u6DFB\u52A0\u9879\u76EE\u8303\u56F4\u7684-ssh-\u516C\u94A5" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u9879\u76EE\u8303\u56F4\u7684-ssh-\u516C\u94A5" aria-hidden="true">#</a> \u6DFB\u52A0\u9879\u76EE\u8303\u56F4\u7684 SSH \u516C\u94A5</h3>', 4);
const _hoisted_41 = /* @__PURE__ */ createTextVNode("\u5728 \u8BA1\u7B97\u5F15\u64CE --> \u5143\u6570\u636E --> SSH \u516C\u94A5\uFF0C");
const _hoisted_42 = {
  href: "https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys#project-wide",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_43 = /* @__PURE__ */ createTextVNode("\u6DFB\u52A0\u9879\u76EE\u8303\u56F4\u7684 SSH \u516C\u94A5");
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u4F7F\u7528\u7B2C\u4E09\u65B9\u5DE5\u5177\u8FDB\u884C\u8FDE\u63A5",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u4F7F\u7528\u7B2C\u4E09\u65B9\u5DE5\u5177\u8FDB\u884C\u8FDE\u63A5",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u4F7F\u7528\u7B2C\u4E09\u65B9\u5DE5\u5177\u8FDB\u884C\u8FDE\u63A5")
], -1);
const _hoisted_45 = /* @__PURE__ */ createTextVNode("\u5728\u672C\u5730\u63A7\u5236\u53F0\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF0C\u6765");
const _hoisted_46 = {
  href: "https://cloud.google.com/compute/docs/instances/connecting-advanced#thirdpartytools",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_47 = /* @__PURE__ */ createTextVNode("\u4F7F\u7528\u7B2C\u4E09\u65B9\u5DE5\u5177\u8FDB\u884C\u8FDE\u63A5");
const _hoisted_48 = /* @__PURE__ */ createStaticVNode('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u683C\u5F0F</span>\n<span class="token function">ssh</span> -i <span class="token punctuation">[</span>PATH_TO_PRIVATE_KEY<span class="token punctuation">]</span> <span class="token punctuation">[</span>USERNAME<span class="token punctuation">]</span>@<span class="token punctuation">[</span>EXTERNAL_IP_ADDRESS<span class="token punctuation">]</span>\n\n<span class="token comment"># \u5B9E\u9645\u8F93\u5165\u4E3A</span>\n<span class="token function">ssh</span> -i ~/.ssh/google_compute_engine cxl_windstone@35.220.249.163\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u81F3\u6B64\uFF0C\u5373\u53EF\u901A\u8FC7\u672C\u5730\u63A7\u5236\u53F0\u8FDE\u63A5\u5230 VM \u5B9E\u4F8B\u3002</p><h2 id="\u5C06\u6587\u4EF6\u4F20\u8F93\u5230-linux-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5C06\u6587\u4EF6\u4F20\u8F93\u5230-linux-\u5B9E\u4F8B" aria-hidden="true">#</a> \u5C06\u6587\u4EF6\u4F20\u8F93\u5230 Linux \u5B9E\u4F8B</h2><h3 id="\u9884\u5148\u8BBE\u7F6E-project" tabindex="-1"><a class="header-anchor" href="#\u9884\u5148\u8BBE\u7F6E-project" aria-hidden="true">#</a> \u9884\u5148\u8BBE\u7F6E project</h3>', 4);
const _hoisted_52 = /* @__PURE__ */ createTextVNode("VM \u5B9E\u4F8B\u6240\u5728\u7684");
const _hoisted_53 = {
  href: "https://cloud.google.com/sdk/gcloud/reference/?hl=zh-cn#--project",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_54 = /* @__PURE__ */ createTextVNode("project");
const _hoisted_55 = /* @__PURE__ */ createTextVNode("\uFF0C\u5373\u9879\u76EE ID\u3002\u82E5\u7701\u7565\uFF0C\u5C06\u4F7F\u7528\u5F53\u524D");
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("code", null, "project", -1);
const _hoisted_57 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_58 = /* @__PURE__ */ createStaticVNode('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u5F53\u524D project</span>\ngcloud config list --format<span class="token operator">=</span><span class="token string">&#39;text(core.project)&#39;</span>\n\n<span class="token comment"># \u8BBE\u7F6E project</span>\ngcloud config <span class="token builtin class-name">set</span> project PROJECTID\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>PS: \u53EF\u76F4\u63A5\u5728</p><h3 id="\u9884\u5148\u8BBE\u7F6E-zone" tabindex="-1"><a class="header-anchor" href="#\u9884\u5148\u8BBE\u7F6E-zone" aria-hidden="true">#</a> \u9884\u5148\u8BBE\u7F6E zone</h3><p>VM \u5B9E\u4F8B\u6240\u5728\u7684\u533A\u57DF\u3002\u6267\u884C<code>scp</code>\u547D\u4EE4\u65F6\uFF0C\u82E5\u672A\u6307\u5B9A<code>--zone</code>\u9009\u9879\uFF0C\u5E76\u672A\u9884\u5148\u8BBE\u7F6E<code>compute/zone</code>\u5C5E\u6027\uFF0C\u5C06\u4F1A\u88AB\u63D0\u793A\u9009\u62E9\u4E00\u4E2A\u533A\u57DF\u3002</p><p>\u4F60\u53EF\u4EE5\u5982\u4E0B\u9884\u5148\u8BBE\u7F6E<code>compute/zone</code>\u5C5E\u6027\uFF0C\u4EE5\u907F\u514D<code>--zone</code>\u9009\u9879\u7701\u7565\u65F6\u88AB\u63D0\u793A\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u683C\u5F0F</span>\ngcloud config <span class="token builtin class-name">set</span> compute/zone ZONE\n\n<span class="token comment"># \u5B9E\u9645\u8F93\u5165\u4E3A</span>\n<span class="token comment"># gcloud config set compute/zone asia-east2-a</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u6587\u4EF6\u4F20\u8F93" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4F20\u8F93" aria-hidden="true">#</a> \u6587\u4EF6\u4F20\u8F93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u683C\u5F0F\uFF0C</span>\ngcloud compute <span class="token function">scp</span> --recurse <span class="token punctuation">[</span>INSTANCE_NAME<span class="token punctuation">]</span>:<span class="token punctuation">[</span>REMOTE_DIR<span class="token punctuation">]</span> <span class="token punctuation">[</span>LOCAL_DIR<span class="token punctuation">]</span>\ngcloud compute <span class="token function">scp</span> --recurse <span class="token punctuation">[</span>LOCAL_DIR<span class="token punctuation">]</span> <span class="token punctuation">[</span>INSTANCE_NAME<span class="token punctuation">]</span>:<span class="token punctuation">[</span>REMOTE_DIR<span class="token punctuation">]</span>\n\n<span class="token comment"># \u5B9E\u9645\u8F93\u5165\u4E3A:</span>\ngcloud compute <span class="token function">scp</span> --recurse <span class="token punctuation">..</span>/koa-nuxt cxl_windstone@nodejs-server-instance:~/node-projects\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A</p><p><code>gcloud compute scp</code>\u547D\u4EE4\u8FD8\u6709\u4EE5\u4E0B\u5C5E\u6027\u9700\u8981\u6CE8\u610F\uFF1A</p><ul><li><code>project</code>\u548C<code>zone</code>\u53EF\u4EE5\u4E0D\u9884\u5148\u8BBE\u7F6E\uFF0C\u800C\u5728<code>scp</code>\u547D\u4EE4\u91CC\u4EE5\u53C2\u6570\u5F62\u5F0F\u6307\u5B9A: <code>--project=PROJECTID --zone=ZONE</code></li><li><code>--port</code>: \u8FDE\u63A5 VM \u5B9E\u4F8B\u7684\u54EA\u4E2A\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u662F<code>22</code>\uFF0C\u4E0D\u9700\u8981\u8BBE\u7F6E</li><li><code>--ssh-key-file</code>: SSH \u79C1\u94A5\u6587\u4EF6\u7684\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u662F<code>~/.ssh/google_compute_engine</code>\u3002\u82E5\u662F\u5728<code>\u521B\u5EFA\u65B0\u7684 SSH \u5BC6\u94A5</code>\u4E00\u8282\u91CC\u751F\u6210\u7684\u79D8\u94A5\u6587\u4EF6\u4E0D\u662F\u8FD9\u4E2A\uFF0C\u5219\u8981\u6DFB\u52A0\u8BE5\u9009\u9879</li></ul></div><h2 id="\u670D\u52A1\u5668\u4E0A\u5B89\u88C5-git" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u4E0A\u5B89\u88C5-git" aria-hidden="true">#</a> \u670D\u52A1\u5668\u4E0A\u5B89\u88C5 git</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> git-core\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u542F\u52A8\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u5E94\u7528" aria-hidden="true">#</a> \u542F\u52A8\u5E94\u7528</h2><h3 id="\u5E94\u7528\u542F\u52A8-host" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u542F\u52A8-host" aria-hidden="true">#</a> \u5E94\u7528\u542F\u52A8 host</h3><p>\u5E94\u7528\u542F\u52A8\u7684\u65F6\u5019\uFF0C<code>host</code>\u4E0D\u80FD\u8BBE\u4E3A<code>127.0.0.1</code>\uFF0C\u5426\u5219\u5916\u90E8\u65E0\u6CD5\u901A\u8FC7 IP \u5730\u5740\u8BBF\u95EE\uFF0C\u800C\u5185\u90E8\u4E5F\u53EA\u80FD\u901A\u8FC7<code>127.0.0.1</code>\u8BBF\u95EE\uFF0C\u4E0D\u80FD\u901A\u8FC7<code>localhost</code>\u8BBF\u95EE\u3002</p><p>\u5FC5\u987B\u8BBE\u7F6E\u4E3A<code>0.0.0.0</code>\uFF0C\u6216\u8005\u4E0D\u505A\u8BBE\u7F6E\u3002</p><p>\u6D89\u53CA\u5230\u77E5\u8BC6\u70B9\uFF1A</p><ul><li><code>0.0.0.0</code>: \u901A\u8FC7\u672C\u673A\u7684\u4EFB\u4E00 IP \u5730\u5740\uFF0C\u90FD\u53EF\u8BBF\u95EE</li><li><code>127.0.0.1</code>: \u53EA\u80FD\u5728\u672C\u5730\u7684\u5404\u4E2A\u5E94\u7528\u4E4B\u95F4\u80FD\u8BBF\u95EE\u5230</li><li><code>localhost</code>: \u8FD9\u662F\u4E00\u57DF\u540D\uFF0C\u901A\u8FC7\u7CFB\u7EDF\u7684<code>hosts</code>\u6587\u4EF6\u914D\u7F6E\u4E3A\u6307\u5411<code>127.0.0.1</code>\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u6307\u5411\u5176\u4ED6\u5730\u5740</li></ul>', 17);
const _hoisted_75 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1");
const _hoisted_76 = {
  href: "https://gist.github.com/zxhfighter/b9f4b4ef328cd8b433b0e9dc2f4af26d",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_77 = /* @__PURE__ */ createTextVNode("127.0.0.1\u3001localhost\u30010.0.0.0\u3001\u672C\u673AIP\u5730\u5740");
const _hoisted_78 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u5E94\u7528\u542F\u52A8\u7AEF\u53E3",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5E94\u7528\u542F\u52A8\u7AEF\u53E3",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5E94\u7528\u542F\u52A8\u7AEF\u53E3")
], -1);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u82E5\u662F\u6CA1\u6709\u7CFB\u7EDF\u6743\u9650\uFF0C\u65E0\u6CD5\u5728"),
  /* @__PURE__ */ createBaseVNode("code", null, "1024"),
  /* @__PURE__ */ createTextVNode("\u4EE5\u4E0B\u7684\u7AEF\u53E3\u542F\u52A8\uFF0C\u53EF\u5728"),
  /* @__PURE__ */ createBaseVNode("code", null, "8888"),
  /* @__PURE__ */ createTextVNode("\u7B49\u7AEF\u53E3\u542F\u52A8\uFF0C\u4F46\u662F\u9700\u8981\u914D\u7F6E\u9632\u706B\u5899\u7684\u8FC7\u6EE4\u3002\u8DEF\u5F84\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "VPC \u7F51\u7EDC --> \u9632\u706B\u5899\u89C4\u5219"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u5E76\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u89C4\u5219\uFF0C\u5141\u8BB8"),
  /* @__PURE__ */ createBaseVNode("code", null, "tcp:8888"),
  /* @__PURE__ */ createTextVNode("\u7684\u6D41\u91CF\u8FDB\u5165\u3002")
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#linux-\u4E0A\u5B89\u88C5-node-js" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6DFB\u52A0\u8F6F\u94FE" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u672C\u5730\u63A7\u5236\u53F0\u8FDE\u63A5\u5230-vm-\u5B9E\u4F8B" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u521B\u5EFA\u65B0\u7684-ssh-\u5BC6\u94A5" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6DFB\u52A0\u9879\u76EE\u8303\u56F4\u7684-ssh-\u516C\u94A5" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4F7F\u7528\u7B2C\u4E09\u65B9\u5DE5\u5177\u8FDB\u884C\u8FDE\u63A5" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5C06\u6587\u4EF6\u4F20\u8F93\u5230-linux-\u5B9E\u4F8B" }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u9884\u5148\u8BBE\u7F6E-project" }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u9884\u5148\u8BBE\u7F6E-zone" }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6587\u4EF6\u4F20\u8F93" }, {
                default: withCtx(() => [
                  _hoisted_13
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u670D\u52A1\u5668\u4E0A\u5B89\u88C5-git" }, {
            default: withCtx(() => [
              _hoisted_14
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u542F\u52A8\u5E94\u7528" }, {
            default: withCtx(() => [
              _hoisted_15
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5E94\u7528\u542F\u52A8-host" }, {
                default: withCtx(() => [
                  _hoisted_16
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5E94\u7528\u542F\u52A8\u7AEF\u53E3" }, {
                default: withCtx(() => [
                  _hoisted_17
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_18,
    createBaseVNode("p", null, [
      _hoisted_34,
      createBaseVNode("a", _hoisted_35, [
        _hoisted_36,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_37,
    createBaseVNode("p", null, [
      _hoisted_41,
      createBaseVNode("a", _hoisted_42, [
        _hoisted_43,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_44,
    createBaseVNode("p", null, [
      _hoisted_45,
      createBaseVNode("a", _hoisted_46, [
        _hoisted_47,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_48,
    createBaseVNode("p", null, [
      _hoisted_52,
      createBaseVNode("a", _hoisted_53, [
        _hoisted_54,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_55,
      _hoisted_56,
      _hoisted_57
    ]),
    _hoisted_58,
    createBaseVNode("p", null, [
      _hoisted_75,
      createBaseVNode("a", _hoisted_76, [
        _hoisted_77,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_78,
    _hoisted_79,
    createVNode(_component_global_config)
  ], 64);
}
var googleCloud_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { googleCloud_html as default };
