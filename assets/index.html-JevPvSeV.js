import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[10] || (_cache[10] = createBaseVNode("h1", {
      id: "eslint",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#eslint"
      }, [
        createBaseVNode("span", null, "ESLint")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#规则" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("规则")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#规则配置" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("规则配置")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#行内方式关闭规则" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("行内方式关闭规则")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#eslint-插件和配置" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("ESLint 插件和配置")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#vue-相关" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("Vue 相关")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#与-prettier-的集成" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("与 Prettier 的集成")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#集成" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("集成")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#源码控制" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode("源码控制")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#husky-lint-staged-推荐" }, {
                    default: withCtx(() => _cache[8] || (_cache[8] = [
                      createTextVNode("husky + lint-staged（推荐）")
                    ])),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _cache[11] || (_cache[11] = createStaticVNode('<p>参考 &amp; 引用文档</p><ul><li><a href="https://cn.eslint.org/" target="_blank" rel="noopener noreferrer">ESLint 中文官方文档</a></li></ul><h2 id="规则" tabindex="-1"><a class="header-anchor" href="#规则"><span>规则</span></a></h2><h3 id="规则配置" tabindex="-1"><a class="header-anchor" href="#规则配置"><span>规则配置</span></a></h3><ul><li><code>off</code>或<code>0</code> - 关闭规则</li><li><code>warn</code>或<code>1</code> - 开启规则，使用警告级别的错误：<code>warn</code>(不会导致程序退出)</li><li><code>error</code>或<code>2</code> - 开启规则，使用错误级别的错误：<code>error</code>(当被触发的时候，程序会退出)</li></ul><p>Reference: <a href="http://eslint.cn/docs/user-guide/configuring#configuring-rules" target="_blank" rel="noopener noreferrer">Configuring Rules</a></p><h3 id="行内方式关闭规则" tabindex="-1"><a class="header-anchor" href="#行内方式关闭规则"><span>行内方式关闭规则</span></a></h3><p><a href="https://eslint.org/docs/2.13.1/user-guide/configuring#disabling-rules-with-inline-comments" target="_blank" rel="noopener noreferrer">ESlint - Disabling Rules with Inline Comments</a></p><h2 id="eslint-插件和配置" tabindex="-1"><a class="header-anchor" href="#eslint-插件和配置"><span>ESLint 插件和配置</span></a></h2><h3 id="vue-相关" tabindex="-1"><a class="header-anchor" href="#vue-相关"><span>Vue 相关</span></a></h3><ul><li>Babel 相关 <ul><li><a href="https://github.com/babel/babel-eslint" target="_blank" rel="noopener noreferrer">babel-eslint</a>，<code>ESLint</code>的第三方解析器，用于解析那些将交于 Babel 转义的实验性、非标准的语法的源码。</li></ul></li><li><code>Vue.js</code>相关 <ul><li><code>eslint-plugin-vue</code></li><li><code>vue-eslint-parser</code></li></ul></li></ul><h3 id="与-prettier-的集成" tabindex="-1"><a class="header-anchor" href="#与-prettier-的集成"><span>与 Prettier 的集成</span></a></h3>', 12)),
    createBaseVNode("p", null, [
      createVNode(_component_RouteLink, { to: "/front-end-engineering/tools/style-guide/code-formatter/eslint/prettier-eslint.html" }, {
        default: withCtx(() => _cache[9] || (_cache[9] = [
          createTextVNode("Prettier 与 ESLint 的集成")
        ])),
        _: 1
      })
    ]),
    _cache[12] || (_cache[12] = createStaticVNode('<h2 id="集成" tabindex="-1"><a class="header-anchor" href="#集成"><span>集成</span></a></h2><h3 id="源码控制" tabindex="-1"><a class="header-anchor" href="#源码控制"><span>源码控制</span></a></h3><p>若是想在项目里配置<code>pre-commit</code>钩子来进行提交前的<code>eslint</code>校验，可在项目里添加如下代码.</p><h4 id="husky-lint-staged-推荐" tabindex="-1"><a class="header-anchor" href="#husky-lint-staged-推荐"><span>husky + lint-staged（推荐）</span></a></h4><p><a href="https://github.com/okonet/lint-staged" target="_blank" rel="noopener noreferrer"><code>lint-staged</code></a>，只会让 ESLint 校验暂存区的文件，而不是整个工作目录里的所有文件。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 快速安装 husky 和 lint-staged</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mrm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lint-staged</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>package.json</code>添加如下内容：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // ...</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;husky&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;hooks&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;pre-commit&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;lint-staged&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;commit-msg&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;commitlint -E HUSKY_GIT_PARAMS&quot;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;lint-staged&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 将每一个暂存区的 .js、.vue 文件作为参数，依次传给 eslint --fix 和 git add 执行</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;*.{js,vue}&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;eslint --fix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;git add&quot;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        ]</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // ...</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 8)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/tools/style-guide/code-formatter/eslint/","title":"ESLint","lang":"en-US","frontmatter":{"description":"ESLint 参考 & 引用文档 ESLint 中文官方文档 规则 规则配置 off或0 - 关闭规则 warn或1 - 开启规则，使用警告级别的错误：warn(不会导致程序退出) error或2 - 开启规则，使用错误级别的错误：error(当被触发的时候，程序会退出) Reference: Configuring Rules 行内方式关闭规则 ES...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/tools/style-guide/code-formatter/eslint/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"ESLint"}],["meta",{"property":"og:description","content":"ESLint 参考 & 引用文档 ESLint 中文官方文档 规则 规则配置 off或0 - 关闭规则 warn或1 - 开启规则，使用警告级别的错误：warn(不会导致程序退出) error或2 - 开启规则，使用错误级别的错误：error(当被触发的时候，程序会退出) Reference: Configuring Rules 行内方式关闭规则 ES..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-31T12:47:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-31T12:47:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ESLint\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-31T12:47:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"规则","slug":"规则","link":"#规则","children":[{"level":3,"title":"规则配置","slug":"规则配置","link":"#规则配置","children":[]},{"level":3,"title":"行内方式关闭规则","slug":"行内方式关闭规则","link":"#行内方式关闭规则","children":[]}]},{"level":2,"title":"ESLint 插件和配置","slug":"eslint-插件和配置","link":"#eslint-插件和配置","children":[{"level":3,"title":"Vue 相关","slug":"vue-相关","link":"#vue-相关","children":[]},{"level":3,"title":"与 Prettier 的集成","slug":"与-prettier-的集成","link":"#与-prettier-的集成","children":[]}]},{"level":2,"title":"集成","slug":"集成","link":"#集成","children":[{"level":3,"title":"源码控制","slug":"源码控制","link":"#源码控制","children":[]}]}],"git":{"createdTime":1570275089000,"updatedTime":1730378820000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":1.13,"words":340},"filePathRelative":"front-end-engineering/tools/style-guide/code-formatter/eslint/index.md","localizedDate":"October 5, 2019","autoDesc":true}');
export {
  index_html as comp,
  data
};
