import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "git-commit-\u89C4\u8303",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#git-commit-\u89C4\u8303",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Git commit \u89C4\u8303")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u683C\u5F0F");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Header");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("type");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("subject");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Body");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Footer");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u5173\u8054 Issue");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u5173\u95ED Issue");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u81EA\u52A8\u5316\u9A8C\u8BC1\u63D0\u4EA4\u4FE1\u606F");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("Copy from ");
const _hoisted_13 = {
  href: "https://yanhaijing.com/git/2016/02/17/my-commit-message/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u989C\u6D77\u955C - \u6211\u7684\u63D0\u4EA4\u4FE1\u606F\u89C4\u8303");
const _hoisted_15 = /* @__PURE__ */ createStaticVNode('<h2 id="\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F" aria-hidden="true">#</a> \u683C\u5F0F</h2><p>\u63D0\u4EA4\u4FE1\u606F\u5305\u62EC\u4E09\u4E2A\u90E8\u5206\uFF1AHeader\uFF0CBody \u548C Footer\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Body</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5176\u4E2D\uFF0CHeader \u662F\u5FC5\u9700\u7684\uFF0CBody \u548C Footer \u53EF\u4EE5\u7701\u7565\u3002</p><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3><p>Header\u90E8\u5206\u53EA\u6709\u4E00\u884C\uFF0C\u5305\u62EC\u4E24\u4E2A\u5B57\u6BB5\uFF1A<code>type</code>\uFF08\u5FC5\u9700\uFF09\u548C<code>subject</code>\uFF08\u5FC5\u9700\uFF09\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span>: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>subject</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h4><p><code>type</code>\u7528\u4E8E\u8BF4\u660E<code>commit</code>\u7684\u7C7B\u522B\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u7C7B\u522B\uFF1A</p><ul><li><code>feat</code>\uFF1A\u65B0\u529F\u80FD\uFF08<code>feature</code>\uFF09</li><li><code>fix</code>\uFF1A\u4FEE\u8865 bug</li><li><code>doc</code>\uFF1A\u6587\u6863\uFF08<code>documentation</code>\uFF09</li><li><code>style</code>\uFF1A\u683C\u5F0F\uFF08\u4E0D\u5F71\u54CD\u4EE3\u7801\u8FD0\u884C\u7684\u53D8\u52A8\uFF09</li><li><code>refactor</code>\uFF1A\u91CD\u6784\uFF08\u5373\u4E0D\u662F\u65B0\u589E\u529F\u80FD\uFF0C\u4E5F\u4E0D\u662F\u4FEE\u6539 bug \u7684\u4EE3\u7801\u53D8\u52A8\uFF09</li><li><code>test</code>\uFF1A\u589E\u52A0\u6D4B\u8BD5</li><li><code>chore</code>\uFF1A\u6784\u5EFA\u8FC7\u7A0B\u6216\u8F85\u52A9\u5DE5\u5177\u7684\u53D8\u52A8</li></ul><h4 id="subject" tabindex="-1"><a class="header-anchor" href="#subject" aria-hidden="true">#</a> subject</h4><p><code>subject</code>\u662F<code>commit</code>\u76EE\u7684\u7684\u7B80\u77ED\u63CF\u8FF0\u3002</p><ul><li>\u4EE5\u52A8\u8BCD\u5F00\u5934\uFF0C\u4F7F\u7528\u7B2C\u4E00\u4EBA\u79F0\u73B0\u5728\u65F6\uFF0C\u6BD4\u5982<code>change</code>\uFF0C\u800C\u4E0D\u662F<code>changed</code>\u6216<code>changes</code></li><li>\u7B2C\u4E00\u4E2A\u5B57\u6BCD\u5C0F\u5199</li><li>\u7ED3\u5C3E\u4E0D\u52A0\u53E5\u53F7\uFF08\u3002\uFF09</li></ul><h3 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> Body</h3><p>Body \u90E8\u5206\u662F\u5BF9\u672C\u6B21<code>commit</code>\u7684\u8BE6\u7EC6\u63CF\u8FF0\uFF0C\u53EF\u4EE5\u5206\u6210\u591A\u884C\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u8303\u4F8B\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>More detailed explanatory text, if necessary.  Wrap it to\nabout 72 characters or so.\n\nFurther paragraphs come after blank lines.\n\n- Bullet points are okay, too\n- Use a hanging indent\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6CE8\u610F\uFF1A\u5E94\u8BE5\u8BF4\u660E\u4EE3\u7801\u53D8\u52A8\u7684\u52A8\u673A\uFF0C\u4EE5\u53CA\u4E0E\u4EE5\u524D\u884C\u4E3A\u7684\u5BF9\u6BD4\u3002</p><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> Footer</h3><p>Footer \u90E8\u5206\u53EA\u7528\u4E8E\u4E24\u79CD\u60C5\u51B5\uFF1A</p><ul><li>\u5173\u8054 Issue</li><li>\u5173\u95ED Issue</li></ul><h4 id="\u5173\u8054-issue" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054-issue" aria-hidden="true">#</a> \u5173\u8054 Issue</h4><p>\u672C\u6B21\u63D0\u4EA4\u5982\u679C\u548C\u6478\u4E2Aissue\u6709\u5173\u7CFB\u5219\u9700\u8981\u5199\u4E0A\u8FD9\u4E2A\uFF0C\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>Issue #1, #2, #3\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="\u5173\u95ED-issue" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED-issue" aria-hidden="true">#</a> \u5173\u95ED Issue</h4><p>\u5982\u679C\u5F53\u524D\u63D0\u4EA4\u4FE1\u606F\u89E3\u51B3\u4E86\u67D0\u4E2Aissue\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5728 Footer \u90E8\u5206\u5173\u95ED\u8FD9\u4E2A issue\uFF0C\u5173\u95ED\u7684\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>Close #1, #2, #3\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>', 26);
const _hoisted_41 = /* @__PURE__ */ createTextVNode("Reference: ");
const _hoisted_42 = {
  href: "https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_43 = /* @__PURE__ */ createTextVNode("Angular \u56E2\u961F\u63D0\u4EA4\u89C4\u8303");
const _hoisted_44 = /* @__PURE__ */ createStaticVNode('<h2 id="\u81EA\u52A8\u5316\u9A8C\u8BC1\u63D0\u4EA4\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5316\u9A8C\u8BC1\u63D0\u4EA4\u4FE1\u606F" aria-hidden="true">#</a> \u81EA\u52A8\u5316\u9A8C\u8BC1\u63D0\u4EA4\u4FE1\u606F</h2><ul><li><code>commit-msg</code>: \u901A\u8FC7\u6B64\u94A9\u5B50\u5B9E\u73B0\u5728<code>git commit</code>\u65F6\u53BB\u6821\u9A8C\u63D0\u4EA4\u4FE1\u606F</li><li><code>commitlint</code>: \u5B9E\u9645\u6821\u9A8C\u63D0\u4EA4\u4FE1\u606F\u7684\u5DE5\u5177\uFF0C\u53EF\u81EA\u5B9A\u4E49\u63D0\u4EA4\u4FE1\u606F\u6A21\u677F</li><li><code>husky</code>: \u66F4\u52A0\u65B9\u4FBF\u5730\u4F7F\u7528 git hooks</li></ul><p>Reference:</p>', 3);
const _hoisted_47 = {
  href: "https://juejin.im/post/5afc5242f265da0b7f44bee4",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_48 = /* @__PURE__ */ createTextVNode("\u4F18\u96C5\u7684\u63D0\u4EA4\u4F60\u7684 Git Commit Message");
const _hoisted_49 = {
  href: "https://github.com/marionebl/commitlint",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_50 = /* @__PURE__ */ createTextVNode("github - commitlint");
const _hoisted_51 = {
  href: "https://github.com/typicode/husky",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_52 = /* @__PURE__ */ createTextVNode("github - husky");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u683C\u5F0F" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#header" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#type" }, {
                    default: withCtx(() => [
                      _hoisted_5
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#subject" }, {
                    default: withCtx(() => [
                      _hoisted_6
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#body" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#footer" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u5173\u8054-issue" }, {
                    default: withCtx(() => [
                      _hoisted_9
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u5173\u95ED-issue" }, {
                    default: withCtx(() => [
                      _hoisted_10
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u81EA\u52A8\u5316\u9A8C\u8BC1\u63D0\u4EA4\u4FE1\u606F" }, {
            default: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          })
        ])
      ])
    ]),
    createBaseVNode("p", null, [
      _hoisted_12,
      createBaseVNode("a", _hoisted_13, [
        _hoisted_14,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_15,
    createBaseVNode("p", null, [
      _hoisted_41,
      createBaseVNode("a", _hoisted_42, [
        _hoisted_43,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_44,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_47, [
          _hoisted_48,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_49, [
          _hoisted_50,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_51, [
          _hoisted_52,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var gitCommitGuidelines_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { gitCommitGuidelines_html as default };
