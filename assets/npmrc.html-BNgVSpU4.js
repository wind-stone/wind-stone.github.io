import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, f as createTextVNode, b as createStaticVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[10] || (_cache[10] = createBaseVNode("h1", {
      id: "npmrc",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#npmrc"
      }, [
        createBaseVNode("span", null, "npmrc")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#描述" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("描述")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#文件" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("文件")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#注释" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("注释")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#每个项目的配置文件" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("每个项目的配置文件")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#每个用户的配置文件" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("每个用户的配置文件")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#全局配置文件" }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("全局配置文件")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#内置的配置文件" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("内置的配置文件")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[11] || (_cache[11] = createBaseVNode("h2", {
      id: "描述",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#描述"
      }, [
        createBaseVNode("span", null, "描述")
      ])
    ], -1)),
    _cache[12] || (_cache[12] = createBaseVNode("p", null, [
      createBaseVNode("code", null, "npm"),
      createTextVNode("会从命令行、环境变量和"),
      createBaseVNode("code", null, ".npmrc"),
      createTextVNode("文件里获取配置信息。")
    ], -1)),
    _cache[13] || (_cache[13] = createBaseVNode("p", null, [
      createBaseVNode("code", null, "npm config"),
      createTextVNode("命令用于更新和编辑用户及全局"),
      createBaseVNode("code", null, ".npmrc"),
      createTextVNode("文件的内容。")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[8] || (_cache[8] = createTextVNode("所有可用配置的选项，可见")),
      createVNode(_component_RouteLink, { to: "/front-end-engineering/environment/package-manager/npm/npm-config.html" }, {
        default: withCtx(() => _cache[7] || (_cache[7] = [
          createTextVNode("npm-config")
        ])),
        _: 1
      }),
      _cache[9] || (_cache[9] = createTextVNode("。"))
    ]),
    _cache[14] || (_cache[14] = createStaticVNode('<p><code>.npmrc</code>文件，就是<code>npm</code>的配置文件所在位置。我们可以找到<code>.npmrc</code>文件，以修改各个配置项。</p><h2 id="文件" tabindex="-1"><a class="header-anchor" href="#文件"><span>文件</span></a></h2><p>这里有四个相关的文件（PS：按优先级从高到底排序）：</p><ul><li>每个项目的配置文件（<code>/path/to/my/project/.npmrc</code>）</li><li>每个用户的配置文件（<code>~/.npmrc</code>）</li><li>全局的配置文件（<code>$PREFIX/etc/npmrc</code>）</li><li><code>npm</code>内置的配置文件（<code>/path/to/npm/npmrc</code>）</li></ul><p>所有的配置文件都是<code>key = value</code>参数对的<code>ini</code>格式的配置列表。环境变量可以使用<code>${VARIABLE_NAME}</code>代替，比如：</p><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>prefix = ${HOME}/.npm-packages</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这四个文件都会被加载，且配置项会以优先级顺序解析。比如，用户配置文件里的设置将覆盖全局配置文件里的设置。</p><p>可以通过在配置项名称之后添加<code>[]</code>来指定数组值。比如：</p><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>key[] = &quot;first value&quot;</span></span>\n<span class="line"><span>key[] = &quot;second value&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2><p><code>.npmrc</code>文件里以<code>;</code>或字符<code>#</code>开始的行，会被理解为注释。<code>.npmrc</code>文件会被<a href="https://github.com/npm/ini" target="_blank" rel="noopener noreferrer">npm/ini</a>解析，也是它规定了这种注释语法。比如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># last modified: 01 Jan 2016</span></span>\n<span class="line"><span>; Set a new registry for a scoped package</span></span>\n<span class="line"><span>@myscope:registry=https://mycustomregistry.example.org</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="每个项目的配置文件" tabindex="-1"><a class="header-anchor" href="#每个项目的配置文件"><span>每个项目的配置文件</span></a></h2><p>当在本地项目里工作时，项目根目录下（比如与<code>node_modules</code>和<code>package.json</code>同级）的<code>.npmrc</code>文件将设置特定于这个项目的配置值。</p><p>注意这只应用于你运行<code>npm</code>时所在的项目的根目录。当你的模块已经发布了，它将不起作用。比如，你不能发布一个强制它自己安装到全局或其他位置的模块。</p><p>此外，该文件不会在全局模式被使用，比如当运行<code>npm install -g</code>时。</p><h2 id="每个用户的配置文件" tabindex="-1"><a class="header-anchor" href="#每个用户的配置文件"><span>每个用户的配置文件</span></a></h2><p><code>$HOME/.npmrc</code>（或设置在环境或命令行里的<code>userconfig</code>参数配置的位置）</p><h2 id="全局配置文件" tabindex="-1"><a class="header-anchor" href="#全局配置文件"><span>全局配置文件</span></a></h2><p><code>$PREFIX/etc/npmrc</code>（或设置在环境或命令行里的<code>globalconfig</code>参数配置的位置）：这个文件是<code>key=value</code>参数对的<code>ini</code>文件格式化的列表。可以像如上那样使用环境变量。</p><h2 id="内置的配置文件" tabindex="-1"><a class="header-anchor" href="#内置的配置文件"><span>内置的配置文件</span></a></h2><p><code>path/to/npm/itself/npmrc</code></p><p>这是一个不可更改的内置配置文件，将与<code>npm</code>的更新保持一致。将使用安装<code>npm</code>时带来的<code>./configure</code>脚本来设置配置项。这主要是为了以一种标准和一致的行为让分散的维护者去覆盖默认配置。</p>', 23)),
    createVNode(_component_global_config)
  ]);
}
const npmrc_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "npmrc.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/environment/package-manager/npm/npmrc.html","title":"npmrc","lang":"en-US","frontmatter":{"description":"npmrc 描述 npm会从命令行、环境变量和.npmrc文件里获取配置信息。 npm config命令用于更新和编辑用户及全局.npmrc文件的内容。 所有可用配置的选项，可见。 .npmrc文件，就是npm的配置文件所在位置。我们可以找到.npmrc文件，以修改各个配置项。 文件 这里有四个相关的文件（PS：按优先级从高到底排序）： 每个项目的配置...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/environment/package-manager/npm/npmrc.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"npmrc"}],["meta",{"property":"og:description","content":"npmrc 描述 npm会从命令行、环境变量和.npmrc文件里获取配置信息。 npm config命令用于更新和编辑用户及全局.npmrc文件的内容。 所有可用配置的选项，可见。 .npmrc文件，就是npm的配置文件所在位置。我们可以找到.npmrc文件，以修改各个配置项。 文件 这里有四个相关的文件（PS：按优先级从高到底排序）： 每个项目的配置..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-31T12:47:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-31T12:47:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"npmrc\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-31T12:47:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"文件","slug":"文件","link":"#文件","children":[]},{"level":2,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":2,"title":"每个项目的配置文件","slug":"每个项目的配置文件","link":"#每个项目的配置文件","children":[]},{"level":2,"title":"每个用户的配置文件","slug":"每个用户的配置文件","link":"#每个用户的配置文件","children":[]},{"level":2,"title":"全局配置文件","slug":"全局配置文件","link":"#全局配置文件","children":[]},{"level":2,"title":"内置的配置文件","slug":"内置的配置文件","link":"#内置的配置文件","children":[]}],"git":{"createdTime":1570275215000,"updatedTime":1730378820000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":2.16,"words":649},"filePathRelative":"front-end-engineering/environment/package-manager/npm/npmrc.md","localizedDate":"October 5, 2019","autoDesc":true}');
export {
  npmrc_html as comp,
  data
};
