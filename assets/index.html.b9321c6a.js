import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "cli",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#cli",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" CLI")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u77E5\u8BC6\u70B9");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u547D\u4EE4\u884C -- \u4E0E - \u7684\u533A\u522B");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Unix \u98CE\u683C\u53C2\u6570");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("GNU \u98CE\u683C\u53C2\u6570");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u5355\u72EC\u7684 --");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u7528\u6237\u9ED8\u8BA4\u76EE\u5F55");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u5E38\u7528\u547D\u4EE4\u884C\u5DE5\u5177");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("unrar");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("rsync");
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<p>CLI\uFF08command-line interface\uFF0C\u547D\u4EE4\u884C\u754C\u9762\uFF09</p><h2 id="\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> \u77E5\u8BC6\u70B9</h2><h3 id="\u547D\u4EE4\u884C-\u4E0E-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u884C-\u4E0E-\u7684\u533A\u522B" aria-hidden="true">#</a> \u547D\u4EE4\u884C -- \u4E0E - \u7684\u533A\u522B</h3><p>\u5728 Linux \u7684<code>shell</code>\u4E2D\uFF0C\u6211\u4EEC\u628A<code>-</code>\u548C<code>--</code>\u52A0\u4E0A\u4E00\u4E2A\u5B57\u7B26\uFF08\u5B57\u7B26\u4E32\uFF09\u53EB\u505A\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u4E3B\u6D41\u7684\u6709\u4E0B\u9762\u51E0\u79CD\u98CE\u683C\uFF1A</p><ul><li>Unix \u98CE\u683C\u53C2\u6570\uFF0C\u53C2\u6570\u524D\u52A0\u5355\u7834\u6298\u7EBF<code>-</code></li><li>GNU \u98CE\u683C\u53C2\u6570\uFF0C\u53C2\u6570\u524D\u52A0\u53CC\u7834\u6298\u7EBF<code>--</code></li><li>BSD \u98CE\u683C\u53C2\u6570\uFF0C\u53C2\u6570\u524D\u4E0D\u52A0\u7834\u6298\u7EBF</li></ul><h4 id="unix-\u98CE\u683C\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#unix-\u98CE\u683C\u53C2\u6570" aria-hidden="true">#</a> Unix \u98CE\u683C\u53C2\u6570</h4><p>\u5355\u4E2A<code>-</code>\u540E\u9762\u52A0\u5355\u4E2A\u5B57\u6BCD\uFF0C\u4EE3\u8868\u4E00\u4E2A\u53C2\u6570\u3002Unix\u98CE\u683C\u7684\u53C2\u6570\u662F\u4ECE\u8D1D\u5C14\u5B9E\u9A8C\u5BA4\u5F00\u53D1\u7684 AT&amp;T Unix \u7CFB\u7EDF\u4E0A\u539F\u6709\u7684\u547D\u4EE4\u7EE7\u627F\u4E0B\u6765\u7684\u3002\u6BD4\u5982</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> -l\n<span class="token function">rm</span> -fr /\n<span class="token function">git</span> commit -am <span class="token string">&quot;xxx&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u800C\u5BF9\u4E8E\u5355\u4E2A<code>-</code>\u540E\u9762\u52A0\u591A\u4E2A\u5B57\u6BCD\u7684\u60C5\u51B5\uFF0C\u5B9E\u9645\u4E0A\u662F\u591A\u4E2A\u53C2\u6570\uFF0C\u53EA\u662F\u5408\u5E76\u8D77\u6765\u800C\u5DF2\u3002\u6BD4\u5982<code>git --am</code>\u5B9E\u9645\u4E0A\u662F<code>git -a -m</code>\uFF0C\u53EF\u4EE5\u5206\u5F00\u5199\uFF0C\u4E5F\u53EF\u4EE5\u5408\u5E76\u5728\u4E00\u8D77\u5199\u3002</p><h4 id="gnu-\u98CE\u683C\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#gnu-\u98CE\u683C\u53C2\u6570" aria-hidden="true">#</a> GNU \u98CE\u683C\u53C2\u6570</h4><p>\u4E24\u4E2A<code>--</code>\u540E\u9762\u52A0\u5355\u8BCD\u6216\u77ED\u8BED\uFF0C\u4EE3\u8868\u4E00\u4E2A\u53C2\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> lodash --save\n<span class="token function">npm</span> <span class="token function">install</span> express --save-dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u82E5<code>--</code>\u540E\u9762\u52A0\u77ED\u8BED\uFF0C\u77ED\u8BED\u7684\u6BCF\u4E2A\u5355\u8BCD\u4E4B\u95F4\u4E5F\u4F1A\u4F7F\u7528<code>-</code>\u8FDE\u63A5\uFF0C\u6BD4\u5982\u4E0A\u9762\u7684<code>--save-dev</code>\u4EE3\u8868\u5355\u4E2A\u53C2\u6570\u3002</p><p>\u901A\u5E38\u60C5\u51B5\uFF0C<code>-</code>\u7684\u53C2\u6570\u662F<code>--</code>\u53C2\u6570\u7684\u7B80\u5199\uFF0C\u6BD4\u5982<code>-h</code>\u548C<code>--help</code>\u3001<code>ls</code>\u547D\u4EE4\u91CC\u7684<code>-a</code>\u548C<code>--all</code>\u3002\u5F53\u7136\uFF0C\u4E5F\u4F1A\u6709\u4E00\u4E9B\u4F8B\u5916\u60C5\u51B5\u3002</p><h4 id="\u5355\u72EC\u7684" tabindex="-1"><a class="header-anchor" href="#\u5355\u72EC\u7684" aria-hidden="true">#</a> \u5355\u72EC\u7684 --</h4><p>\u76EE\u524D\u8FD9\u79CD\u60C5\u51B5\u4EC5\u5728 PM2 \u91CC\u89C1\u8FC7\u3002</p><p>PM2 \u662F\u8FDB\u7A0B\u7BA1\u7406\u5DE5\u5177\uFF0C\u6267\u884C PM2 \u7684<code>start</code>\u547D\u4EE4\u4F1A\u95F4\u63A5\u6267\u884C<code>node</code>\u547D\u4EE4\uFF0C\u82E5\u662F\u60F3\u5728\u6267\u884C\u547D\u4EE4\u65F6\u7ED9<code>node</code>\u547D\u4EE4\u4F20\u9012\u53C2\u6570\uFF0C\u53EF\u4EE5\u5982\u4E0B\u4F7F\u7528<code>--</code>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start app.js -- helle world\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// app.js</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// \u8F93\u51FA\uFF1A</span>\n\n<span class="token comment">// 0 &#39;/Users/wind-stone/.nvm/versions/node/v11.10.0/bin/node&#39;</span>\n<span class="token comment">// 1 &#39;/Users/wind-stone/.nvm/versions/node/v11.10.0/lib/node_modules/pm2/lib/ProcessContainerFork.js&#39;</span>\n<span class="token comment">// 2 &#39;hello&#39;</span>\n<span class="token comment">// 3 &#39;world&#39;</span>\n<span class="token comment">// 4 undefined</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5373\u5355\u72EC\u7684<code>--</code>\u4EE3\u8868\u5C06\u4E4B\u540E\u7684\u6240\u6709\u53C2\u6570\u4F20\u9012\u7ED9<code>node</code>\u547D\u4EE4\u3002</p><h3 id="\u7528\u6237\u9ED8\u8BA4\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u9ED8\u8BA4\u76EE\u5F55" aria-hidden="true">#</a> \u7528\u6237\u9ED8\u8BA4\u76EE\u5F55</h3><p>Linux/Unix \u7CFB\u7EDF\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># wind-stone \u4EE3\u8868\u7528\u6237\uFF0Cserver-host \u4EE3\u8868\u670D\u52A1\u5668</span>\n<span class="token comment"># \u8FDB\u5165\u670D\u52A1\u5668\uFF0C\u4F1A\u9ED8\u8BA4\u8FDB\u884C home/wind-stone \u76EE\u5F55\u4E0B</span>\nwind-stone@server-host\n\n<span class="token comment"># \u4EE5\u4E0B\u76EE\u5F55\uFF0C\u5B9E\u9645\u4E0A\u662F home/wind-stone/files/some-directory/</span>\nwind-stone@server-host::files/some-directory/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u5E38\u7528\u547D\u4EE4\u884C\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4\u884C\u5DE5\u5177" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4\u884C\u5DE5\u5177</h2><h3 id="unrar" tabindex="-1"><a class="header-anchor" href="#unrar" aria-hidden="true">#</a> unrar</h3><p>\u89E3\u538B<code>rar</code>\u6587\u4EF6</p><ol><li>\u4F7F\u7528<code>Homebrew</code>\u5B89\u88C5<code>unrar</code>\uFF1A<code>$ brew install unrar</code></li><li>\u5207\u6362\u5230<code>rar</code>\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF0C\u8F93\u5165\u547D\u4EE4\u8FDB\u884C\u89E3\u538B\uFF1A<code>unrar x test.rar</code></li></ol><h3 id="rsync" tabindex="-1"><a class="header-anchor" href="#rsync" aria-hidden="true">#</a> rsync</h3><p><code>rsync</code>\u547D\u4EE4\u662F\u4E00\u4E2A\u8FDC\u7A0B\u6570\u636E\u540C\u6B65\u5DE5\u5177\uFF0C\u53EF\u901A\u8FC7 LAN/WAN \u5FEB\u901F\u540C\u6B65\u591A\u53F0\u4E3B\u673A\u95F4\u7684\u6587\u4EF6\u3002<code>rsync</code>\u4F7F\u7528\u6240\u8C13\u7684\u201Crsync\u7B97\u6CD5\u201D\u6765\u4F7F\u672C\u5730\u548C\u8FDC\u7A0B\u4E24\u4E2A\u4E3B\u673A\u4E4B\u95F4\u7684\u6587\u4EF6\u8FBE\u5230\u540C\u6B65\uFF0C\u8FD9\u4E2A\u7B97\u6CD5\u53EA\u4F20\u9001\u4E24\u4E2A\u6587\u4EF6\u7684\u4E0D\u540C\u90E8\u5206\uFF0C\u800C\u4E0D\u662F\u6BCF\u6B21\u90FD\u6574\u4EFD\u4F20\u9001\uFF0C\u56E0\u6B64\u901F\u5EA6\u76F8\u5F53\u5FEB\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># rsync [OPTION]... SRC [USER@]HOST::DEST</span>\n<span class="token comment"># \u4ECE\u672C\u5730\u673A\u5668\u62F7\u8D1D\u6587\u4EF6\u5230\u8FDC\u7A0Brsync\u670D\u52A1\u5668\u4E2D\u3002\u5F53 DST \u8DEF\u5F84\u4FE1\u606F\u5305\u542B\u201C::\u201D\u5206\u9694\u7B26\u65F6\u542F\u52A8\u8BE5\u6A21\u5F0F</span>\n<span class="token function">rsync</span> -av /databack root@192.168.78.192::www\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>', 30);
const _hoisted_42 = {
  href: "http://man.linuxde.net/rsync",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_43 = /* @__PURE__ */ createTextVNode("rsync \u547D\u4EE4\u5927\u5168");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u77E5\u8BC6\u70B9" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u547D\u4EE4\u884C-\u4E0E-\u7684\u533A\u522B" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#unix-\u98CE\u683C\u53C2\u6570" }, {
                    default: withCtx(() => [
                      _hoisted_5
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#gnu-\u98CE\u683C\u53C2\u6570" }, {
                    default: withCtx(() => [
                      _hoisted_6
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u5355\u72EC\u7684" }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u7528\u6237\u9ED8\u8BA4\u76EE\u5F55" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5E38\u7528\u547D\u4EE4\u884C\u5DE5\u5177" }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#unrar" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#rsync" }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_12,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_42, [
        _hoisted_43,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
