import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[9] || (_cache[9] = createBaseVNode("h1", {
      id: "git-commit-规范",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#git-commit-规范"
      }, [
        createBaseVNode("span", null, "Git commit 规范")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#格式" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("格式")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#header" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("Header")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#type" }, {
                    default: withCtx(() => _cache[2] || (_cache[2] = [
                      createTextVNode("type")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#subject" }, {
                    default: withCtx(() => _cache[3] || (_cache[3] = [
                      createTextVNode("subject")
                    ])),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#body" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("Body")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#footer" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("Footer")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#关联-issue" }, {
                    default: withCtx(() => _cache[6] || (_cache[6] = [
                      createTextVNode("关联 Issue")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#关闭-issue" }, {
                    default: withCtx(() => _cache[7] || (_cache[7] = [
                      createTextVNode("关闭 Issue")
                    ])),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#自动化验证提交信息" }, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("自动化验证提交信息")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[10] || (_cache[10] = createStaticVNode('<p>Copy from <a href="https://yanhaijing.com/git/2016/02/17/my-commit-message/" target="_blank" rel="noopener noreferrer">颜海镜 - 我的提交信息规范</a></p><h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span>格式</span></a></h2><p>提交信息包括三个部分：Header，Body 和 Footer。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Header</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Footer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，Header 是必需的，Body 和 Footer 可以省略。</p><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header"><span>Header</span></a></h3><p>Header部分只有一行，包括两个字段：<code>type</code>（必需）和<code>subject</code>（必需）。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:white;--shiki-dark:#E06C75;">type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;: &lt;</span><span style="--shiki-light:white;--shiki-dark:#E06C75;">subject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h4><p><code>type</code>用于说明<code>commit</code>的类别，可以使用如下类别：</p><ul><li><code>feat</code>：新功能（<code>feature</code>）</li><li><code>fix</code>：修补 bug</li><li><code>doc</code>：文档（<code>documentation</code>）</li><li><code>style</code>：格式（不影响代码运行的变动）</li><li><code>refactor</code>：重构（即不是新增功能，也不是修改 bug 的代码变动）</li><li><code>test</code>：增加测试</li><li><code>chore</code>：构建过程或辅助工具的变动</li></ul><h4 id="subject" tabindex="-1"><a class="header-anchor" href="#subject"><span>subject</span></a></h4><p><code>subject</code>是<code>commit</code>目的的简短描述。</p><ul><li>以动词开头，使用第一人称现在时，比如<code>change</code>，而不是<code>changed</code>或<code>changes</code></li><li>第一个字母小写</li><li>结尾不加句号（。）</li></ul><h3 id="body" tabindex="-1"><a class="header-anchor" href="#body"><span>Body</span></a></h3><p>Body 部分是对本次<code>commit</code>的详细描述，可以分成多行。下面是一个范例。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">More detailed explanatory text, if necessary.  Wrap it to</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">about 72 characters or so.</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Further paragraphs come after blank lines.</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">- Bullet points are okay, too</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">- Use a hanging indent</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：应该说明代码变动的动机，以及与以前行为的对比。</p><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer"><span>Footer</span></a></h3><p>Footer 部分只用于两种情况：</p><ul><li>关联 Issue</li><li>关闭 Issue</li></ul><h4 id="关联-issue" tabindex="-1"><a class="header-anchor" href="#关联-issue"><span>关联 Issue</span></a></h4><p>本次提交如果和摸个issue有关系则需要写上这个，格式如下：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Issue #1, #2, #3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="关闭-issue" tabindex="-1"><a class="header-anchor" href="#关闭-issue"><span>关闭 Issue</span></a></h4><p>如果当前提交信息解决了某个issue，那么可以在 Footer 部分关闭这个 issue，关闭的格式如下：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Close #1, #2, #3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Reference: <a href="https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines" target="_blank" rel="noopener noreferrer">Angular 团队提交规范</a></p><h2 id="自动化验证提交信息" tabindex="-1"><a class="header-anchor" href="#自动化验证提交信息"><span>自动化验证提交信息</span></a></h2><ul><li><code>commit-msg</code>: 通过此钩子实现在<code>git commit</code>时去校验提交信息</li><li><code>commitlint</code>: 实际校验提交信息的工具，可自定义提交信息模板</li><li><code>husky</code>: 更加方便地使用 git hooks</li></ul><p>Reference:</p><ul><li><a href="https://juejin.im/post/5afc5242f265da0b7f44bee4" target="_blank" rel="noopener noreferrer">优雅的提交你的 Git Commit Message</a></li><li><a href="https://github.com/marionebl/commitlint" target="_blank" rel="noopener noreferrer">github - commitlint</a></li><li><a href="https://github.com/typicode/husky" target="_blank" rel="noopener noreferrer">github - husky</a></li></ul>', 32)),
    createVNode(_component_global_config)
  ]);
}
const gitCommitGuidelines_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "git-commit-guidelines.html.vue"]]);
const data = JSON.parse('{"path":"/full-stack/operating-system/git/git-commit-guidelines.html","title":"Git commit 规范","lang":"en-US","frontmatter":{"description":"Git commit 规范 Copy from 颜海镜 - 我的提交信息规范 格式 提交信息包括三个部分：Header，Body 和 Footer。 其中，Header 是必需的，Body 和 Footer 可以省略。 Header Header部分只有一行，包括两个字段：type（必需）和subject（必需）。 type type用于说明commi...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/full-stack/operating-system/git/git-commit-guidelines.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Git commit 规范"}],["meta",{"property":"og:description","content":"Git commit 规范 Copy from 颜海镜 - 我的提交信息规范 格式 提交信息包括三个部分：Header，Body 和 Footer。 其中，Header 是必需的，Body 和 Footer 可以省略。 Header Header部分只有一行，包括两个字段：type（必需）和subject（必需）。 type type用于说明commi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-04T08:32:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-04T08:32:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git commit 规范\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T08:32:47.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"格式","slug":"格式","link":"#格式","children":[{"level":3,"title":"Header","slug":"header","link":"#header","children":[]},{"level":3,"title":"Body","slug":"body","link":"#body","children":[]},{"level":3,"title":"Footer","slug":"footer","link":"#footer","children":[]}]},{"level":2,"title":"自动化验证提交信息","slug":"自动化验证提交信息","link":"#自动化验证提交信息","children":[]}],"git":{"createdTime":1540779527000,"updatedTime":1714811567000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":1.6,"words":479},"filePathRelative":"full-stack/operating-system/git/git-commit-guidelines.md","localizedDate":"October 29, 2018","autoDesc":true}');
export {
  gitCommitGuidelines_html as comp,
  data
};
