import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "gitlab",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#gitlab",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Gitlab")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("git/github/gitlab");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u4F7F\u7528 gitlab \u4E3A\u4EC0\u4E48\u8981\u751F\u6210\u516C\u94A5\u548C\u79C1\u94A5\uFF1F");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u751F\u6210\u5E76\u8BBE\u7F6ESSH Key");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u6B65\u9AA41. \u68C0\u67E5\u662F\u5426\u5DF2\u7ECF\u5B58\u5728 SSH Key");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u6B65\u9AA42. \u751F\u6210 SSH Key");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u6B65\u9AA43. \u5C06 SSH Key \u7684\u516C\u94A5\u6DFB\u52A0\u5230 gitlab/github \u4E2D");
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<h2 id="git-github-gitlab" tabindex="-1"><a class="header-anchor" href="#git-github-gitlab" aria-hidden="true">#</a> git/github/gitlab</h2><ul><li>git\uFF1A\u7248\u672C\u63A7\u5236\u5DE5\u5177</li><li>github\uFF1A\u662F\u4E00\u4E2A\u7F51\u7AD9\uFF0C\u63D0\u4F9B\u7ED9\u7528\u6237\u7A7A\u95F4\u521B\u5EFA git \u4ED3\u50A8\uFF0C\u4FDD\u5B58\u7528\u6237\u7684\u4E00\u4E9B\u6570\u636E\u6587\u6863\u6216\u8005\u4EE3\u7801\u7B49</li><li>gitlab\uFF1A\u662F\u57FA\u4E8E git \u7684\u9879\u76EE\u7BA1\u7406\u8F6F\u4EF6</li></ul><h2 id="\u4F7F\u7528-gitlab-\u4E3A\u4EC0\u4E48\u8981\u751F\u6210\u516C\u94A5\u548C\u79C1\u94A5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-gitlab-\u4E3A\u4EC0\u4E48\u8981\u751F\u6210\u516C\u94A5\u548C\u79C1\u94A5" aria-hidden="true">#</a> \u4F7F\u7528 gitlab \u4E3A\u4EC0\u4E48\u8981\u751F\u6210\u516C\u94A5\u548C\u79C1\u94A5\uFF1F</h2><p>\u200B\u9996\u5148\uFF0C\u4F7F\u7528\u4EE3\u7801\u7BA1\u7406\u5DE5\u5177\u628A\u672C\u5730\u7684\u4EE3\u7801\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u65F6\u9700\u8981\u52A0\u5BC6\u5904\u7406\uFF0C\u52A0\u5BC6\u4F20\u8F93\u7684\u7B97\u6CD5\u6709\u5F88\u591A\u79CD\uFF0CGit \u53EF\u4F7F\u7528 RSA\uFF0CRSA \u8981\u89E3\u51B3\u7684\u4E00\u4E2A\u6838\u5FC3\u95EE\u9898\u662F\uFF0C\u5982\u4F55\u4F7F\u7528\u4E00\u5BF9\u5BC6\u94A5\uFF0C\u4F7F\u5176\u4E2D\u4E00\u4E2A\u53EF\u4EE5\u7528\u6765\u52A0\u5BC6\uFF0C\u800C\u53E6\u5916\u4E00\u4E2A\u53EF\u4EE5\u7528\u6765\u89E3\u5BC6\u3002\u8FD9\u8FD9\u5BF9\u5BC6\u94A5\u5C31\u662F public key\uFF08\u516C\u94A5\uFF09\u548C private key\uFF08\u79C1\u94A5\uFF09\u3002</p><p>\u200B\u5176\u4E2D\uFF0C\u516C\u94A5\u5C31\u662F\u90A3\u4E2A\u7528\u6765\u52A0\u5BC6\u7684\u5BC6\u94A5\uFF0C\u8FD9\u4E5F\u5C31\u662F\u4E3A\u4EC0\u4E48\u4F60\u5728\u672C\u673A\u751F\u6210\u4E86\u516C\u94A5\u4E4B\u540E\uFF0C\u8981\u4E0A\u4F20\u5230 github \u7684\u539F\u56E0\u3002\u4ECE github \u53D1\u56DE\u6765\u7684\uFF0C\u7528\u90A3\u516C\u94A5\u52A0\u5BC6\u8FC7\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u7528\u4F60\u672C\u5730\u7684\u79C1\u94A5\u6765\u8FD8\u539F\u3002\u5982\u679C\u4F60\u7684 key \u4E22\u5931\u4E86\uFF0C\u4E0D\u7BA1\u662F\u516C\u94A5\u8FD8\u662F\u79C1\u94A5\uFF0C\u4E22\u5931\u4E00\u4E2A\u90FD\u4E0D\u80FD\u7528\u4E86\uFF0C\u89E3\u51B3\u65B9\u6CD5\u4E5F\u5F88\u7B80\u5355\uFF0C\u5220\u9664\u539F\u6709\u7684 key\uFF0C\u91CD\u65B0\u518D\u751F\u6210\u4E00\u6B21\uFF0C\u7136\u540E\u5728 github/gitlab \u91CC\u518D\u8BBE\u7F6E\u4E00\u6B21\u5C31\u884C\u3002</p><h2 id="\u751F\u6210\u5E76\u8BBE\u7F6Essh-key" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u5E76\u8BBE\u7F6Essh-key" aria-hidden="true">#</a> \u751F\u6210\u5E76\u8BBE\u7F6ESSH Key</h2><h3 id="\u6B65\u9AA41-\u68C0\u67E5\u662F\u5426\u5DF2\u7ECF\u5B58\u5728-ssh-key" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA41-\u68C0\u67E5\u662F\u5426\u5DF2\u7ECF\u5B58\u5728-ssh-key" aria-hidden="true">#</a> \u6B65\u9AA41. \u68C0\u67E5\u662F\u5426\u5DF2\u7ECF\u5B58\u5728 SSH Key</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> -al ~/.ssh\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6253\u5F00\u7535\u8111\u7EC8\u7AEF\uFF0C\u8F93\u5165\u5E76\u6267\u884C\u4EE5\u4E0A\u547D\u4EE4\uFF0C\u4F1A\u51FA\u73B0\u4E24\u79CD\u60C5\u51B5\uFF1A</p><ul><li>\u7EC8\u7AEF\u672A\u51FA\u73B0<code>id_rsa.pub</code>\u6587\u4EF6\uFF0C\u8868\u793A\u8BE5\u7535\u8111\u8FD8\u6CA1\u6709\u914D\u7F6E SSH Key\uFF0C\u8FDB\u5165\u6B65\u9AA42</li><li>\u7EC8\u7AEF\u51FA\u73B0\u6587\u4EF6<code>id_rsa.pub</code>\u6587\u4EF6\uFF0C\u5219\u8868\u793A\u8BE5\u7535\u8111\u5DF2\u7ECF\u5B58\u5728 SSH Key\uFF0C\u8FDB\u5165\u6B65\u9AA43</li></ul><h3 id="\u6B65\u9AA42-\u751F\u6210-ssh-key" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA42-\u751F\u6210-ssh-key" aria-hidden="true">#</a> \u6B65\u9AA42. \u751F\u6210 SSH Key</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen -t rsa -C <span class="token string">&quot;your_email@example.com&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8F93\u5165\u5E76\u6267\u884C\u4EE5\u4E0A\u547D\u4EE4\uFF0C\u6B64\u65F6\u7EC8\u7AEF\u4F1A\u663E\u793A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Generating public/private rsa key pair.\n\nEnter <span class="token function">file</span> <span class="token keyword">in</span> <span class="token function">which</span> to save the key <span class="token punctuation">(</span>/your_home_path/.ssh/id_rsa<span class="token punctuation">)</span>:\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FDE\u7EED\u56DE\u8F66\u5373\u53EF\uFF0CSSH Key \u4F1A\u4FDD\u5B58\u5728\u9ED8\u8BA4\u8DEF\u5F84\u4E0B\uFF08/User/wind-stone/.ssh\uFF09\uFF0C\u5BC6\u7801\u4E5F\u9ED8\u8BA4\u4E3A\u7A7A\u3002</p><p>\u6700\u540E\uFF0C\u4F1A\u5728\u9ED8\u8BA4\u8DEF\u5F84\u4E0B\uFF08/User/wind-stone/.ssh\uFF09\u751F\u6210<code>id_rsa</code>\u548C<code>id_rsa.pub</code>\u4E24\u4E2A\u6587\u4EF6\uFF0C\u5176\u4E2D<code>id_rsa</code>\u662F\u79C1\u94A5\uFF0C<code>id_rsa.pub</code>\u662F\u516C\u94A5\u3002</p><h3 id="\u6B65\u9AA43-\u5C06-ssh-key-\u7684\u516C\u94A5\u6DFB\u52A0\u5230-gitlab-github-\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA43-\u5C06-ssh-key-\u7684\u516C\u94A5\u6DFB\u52A0\u5230-gitlab-github-\u4E2D" aria-hidden="true">#</a> \u6B65\u9AA43. \u5C06 SSH Key \u7684\u516C\u94A5\u6DFB\u52A0\u5230 gitlab/github \u4E2D</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pbcopy <span class="token operator">&lt;</span> ~/.ssh/id_rsa.pub\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8F93\u5165\u5E76\u6267\u884C\u4EE5\u4E0A\u547D\u4EE4\uFF0C\u5219\u4F1A\u5C06\u516C\u94A5\u590D\u5236\u5230\u7C98\u8D34\u677F\u4E0A\uFF0C\u6253\u5F00 gitlab\uFF0C</p><p>\u7528\u6237\u5934\u50CF --&gt; Settings --&gt; SSH Keys</p><p>\u5C06\u516C\u94A5\u6DFB\u52A0\u5373\u53EF\u3002</p><p>\u9700\u8981\u6CE8\u610F\uFF1A\u4EE5\u4E0A SHELL \u547D\u4EE4\u90FD\u662F\u5728 macOS \u7CFB\u7EDF\u4E0B\u6267\u884C\u7684\u3002</p>', 22);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#git-github-gitlab" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4F7F\u7528-gitlab-\u4E3A\u4EC0\u4E48\u8981\u751F\u6210\u516C\u94A5\u548C\u79C1\u94A5" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u751F\u6210\u5E76\u8BBE\u7F6Essh-key" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6B65\u9AA41-\u68C0\u67E5\u662F\u5426\u5DF2\u7ECF\u5B58\u5728-ssh-key" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6B65\u9AA42-\u751F\u6210-ssh-key" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6B65\u9AA43-\u5C06-ssh-key-\u7684\u516C\u94A5\u6DFB\u52A0\u5230-gitlab-github-\u4E2D" }, {
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
    createVNode(_component_global_config)
  ], 64);
}
var gitlab_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { gitlab_html as default };
