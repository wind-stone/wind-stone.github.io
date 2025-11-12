import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[9] || (_cache[9] = createBaseVNode("h1", {
      id: "语义化版本",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#语义化版本"
      }, [
        createBaseVNode("span", null, "语义化版本")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#基本原则" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("基本原则")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#语义化版本-1" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("语义化版本")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#包的初始化版本" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("包的初始化版本")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#pre-release-版本" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("pre release 版本")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#已发布包如何增加版本号" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("已发布包如何增加版本号")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#package-json-里如何指定版本更新类型" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("package.json 里如何指定版本更新类型")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#参考" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("参考")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#发版规范" }, {
            default: withCtx(() => _cache[7] || (_cache[7] = [
              createTextVNode("发版规范")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#npm-version-命令" }, {
                default: withCtx(() => _cache[8] || (_cache[8] = [
                  createTextVNode("npm version 命令")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[10] || (_cache[10] = createStaticVNode('<h2 id="基本原则" tabindex="-1"><a class="header-anchor" href="#基本原则"><span>基本原则</span></a></h2><ul><li>第一个稳定版本号为<code>1.0.0</code></li><li><code>beta</code>版本号从<code>0</code>开始，比如：<code>1.0.0-beta.0</code></li><li>使用<code>npm version</code>命令进行版本升级</li><li><code>latest</code> tag 永远指向最新的稳定版本</li><li><code>beta</code>发版， 必须加<code>--tag beta</code></li><li>git 仓库和 tag 保持一致</li></ul><h2 id="语义化版本-1" tabindex="-1"><a class="header-anchor" href="#语义化版本-1"><span>语义化版本</span></a></h2><h3 id="包的初始化版本" tabindex="-1"><a class="header-anchor" href="#包的初始化版本"><span>包的初始化版本</span></a></h3><p>主版本号为零（<code>0.y.z</code>）的软件处于开发初始阶段，一切都可能随时被改变。这样的公共 API 不应该被视为稳定版。</p><p><code>1.0.0</code>的版本号用于界定公共 API 的形成。这一版本之后所有的版本号更新都基于公共 API 及其修改内容。</p><p>因此，前期内部还未共享的包，版本可以是<code>0.y.z</code>；但正式对外共享的包，版本需要从<code>1.0.0</code>开始。</p><h3 id="pre-release-版本" tabindex="-1"><a class="header-anchor" href="#pre-release-版本"><span>pre release 版本</span></a></h3><ul><li><code>alpha</code><br> 代表内测版本，会有很多 bug，是比<code>beta</code>更早的版本，一般不建议对外发布</li><li><code>beta</code><br> 代表公测版本，相对<code>alpha</code>版本已有了很大的改进，但还是存在一些缺陷，需要经过多次测试来进一步消除</li><li><code>rc</code><br> Release Candidate，顾名思义就是正式发布的候选版本。和<code>beta</code>版最大的差别在于<code>beta</code>阶段会一直加入新的功能，但是到了<code>rc</code>版本，几乎就不会加入新的功能了，而主要着重于除错! <code>rc</code>版本是最终发放给用户的最接近正式版的版本，发行后改正 bug 就是正式版了，就是正式版之前的最后一个测试版</li></ul><p>因此，我们提供给外部还未正式发布的版本时，至少应该是<code>beta</code>版本，不应该是<code>alpha</code>版本。</p><p>此外，当提供给业务方<code>beta</code>版本后，请在业务上线一周后升级为正式版。</p><h3 id="已发布包如何增加版本号" tabindex="-1"><a class="header-anchor" href="#已发布包如何增加版本号"><span>已发布包如何增加版本号</span></a></h3><table><thead><tr><th>Code status</th><th>Stage</th><th>Rule</th><th>Example version</th></tr></thead><tbody><tr><td>First release</td><td>New product</td><td>Start with 1.0.0</td><td>1.0.0</td></tr><tr><td>Backward compatible bug fixes</td><td>Patch release</td><td>Increment the third digit</td><td>1.0.1</td></tr><tr><td>Backward compatible new features</td><td>Minor release</td><td>Increment the middle digit and reset last digit to zero</td><td>1.1.0</td></tr><tr><td>Changes that break backward compatibility</td><td>Major release</td><td>Increment the first digit and reset middle and last digits to zero</td><td>2.0.0</td></tr></tbody></table><p>注意，当版本为<code>alpha</code>（或<code>beta</code>）版本时，版本的格式为:<code>x.y.z-alpha.w</code>，其中<code>w</code>是从<code>0</code>开始的整数。</p><h3 id="package-json-里如何指定版本更新类型" tabindex="-1"><a class="header-anchor" href="#package-json-里如何指定版本更新类型"><span>package.json 里如何指定版本更新类型</span></a></h3><p><code>package.json</code>里可以指定依赖的更新类型。比如：</p><ul><li>Patch releases: <code>1.0</code>or<code>1.0.x</code>or<code>~1.0.4</code>，只更新小版本</li><li>Minor releases: <code>1</code>or<code>1.x</code>or<code>^1.0.4</code>，更新中版本和小版本</li><li>Major releases: <code>*</code>or<code>x</code>，更新大、中、小版本</li></ul><p>注意，当大版本号为<code>0</code>时，<code>^</code>与<code>~</code>的效果一样。</p><h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h3><ul><li><a href="https://docs.npmjs.com/about-semantic-versioning" target="_blank" rel="noopener noreferrer">NPM - About semantic versioning</a></li><li><a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noopener noreferrer">语义化版本 2.0.0</a></li><li><a href="https://semver.npmjs.com/" target="_blank" rel="noopener noreferrer">NPM 语音化版本计算</a></li></ul><h2 id="发版规范" tabindex="-1"><a class="header-anchor" href="#发版规范"><span>发版规范</span></a></h2><h3 id="npm-version-命令" tabindex="-1"><a class="header-anchor" href="#npm-version-命令"><span>npm version 命令</span></a></h3><p>假设我的<code>package.json</code>的当前<code>version</code>为<code>6.0.0</code>，依次输入下面的命令，<code>package.json</code>里的<code>version</code>会变更为提升后的版本号：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> preminor</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># v6.1.0-0</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> minor</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># v6.1.0</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prepatch</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># v6.1.1-0</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> patch</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># v6.1.1</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prerelease</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># v6.1.2-0</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> premajor</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># v7.0.0-0</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> major</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># v7.0.0</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prerelease</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --preid=alpha</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># v7.0.1-alpha.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的项目中包含 git，它还会自动给你提交更新到 git，等同于执行<code>git commit -m &quot;X.Y.Z&quot;</code>。<br> 所以还可以在<code>npm version NEWVERSION</code>后面加上<code>-m</code>参数来指定自定义的 commit message。比如：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># message 中的 s% 将会被替换为版本号</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> patch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Upgrade to %s for reasons&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>', 26)),
    createVNode(_component_global_config)
  ]);
}
const semanticVersion_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "semantic-version.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/environment/package-manager/semantic-version.html","title":"语义化版本","lang":"en-US","frontmatter":{"description":"语义化版本 基本原则 第一个稳定版本号为1.0.0 beta版本号从0开始，比如：1.0.0-beta.0 使用npm version命令进行版本升级 latest tag 永远指向最新的稳定版本 beta发版， 必须加--tag beta git 仓库和 tag 保持一致 语义化版本 包的初始化版本 主版本号为零（0.y.z）的软件处于开发初始阶段，...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/environment/package-manager/semantic-version.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"语义化版本"}],["meta",{"property":"og:description","content":"语义化版本 基本原则 第一个稳定版本号为1.0.0 beta版本号从0开始，比如：1.0.0-beta.0 使用npm version命令进行版本升级 latest tag 永远指向最新的稳定版本 beta发版， 必须加--tag beta git 仓库和 tag 保持一致 语义化版本 包的初始化版本 主版本号为零（0.y.z）的软件处于开发初始阶段，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-31T12:47:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-31T12:47:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"语义化版本\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-31T12:47:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"基本原则","slug":"基本原则","link":"#基本原则","children":[]},{"level":2,"title":"语义化版本","slug":"语义化版本-1","link":"#语义化版本-1","children":[{"level":3,"title":"包的初始化版本","slug":"包的初始化版本","link":"#包的初始化版本","children":[]},{"level":3,"title":"pre release 版本","slug":"pre-release-版本","link":"#pre-release-版本","children":[]},{"level":3,"title":"已发布包如何增加版本号","slug":"已发布包如何增加版本号","link":"#已发布包如何增加版本号","children":[]},{"level":3,"title":"package.json 里如何指定版本更新类型","slug":"package-json-里如何指定版本更新类型","link":"#package-json-里如何指定版本更新类型","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}]},{"level":2,"title":"发版规范","slug":"发版规范","link":"#发版规范","children":[{"level":3,"title":"npm version 命令","slug":"npm-version-命令","link":"#npm-version-命令","children":[]}]}],"git":{"createdTime":1648622463000,"updatedTime":1730378820000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":2.81,"words":842},"filePathRelative":"front-end-engineering/environment/package-manager/semantic-version.md","localizedDate":"March 30, 2022","autoDesc":true}');
export {
  semanticVersion_html as comp,
  data
};
