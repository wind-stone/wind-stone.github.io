import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode("h1", {
      id: "monorepo",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#monorepo"
      }, [
        createBaseVNode("span", null, "Monorepo")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#lerna" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("Lerna")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#yarn-workspaces" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("Yarn Workspaces")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#workspaces-的依赖安装" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("Workspaces 的依赖安装")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#workspaces-的发布问题" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("Workspaces 的发布问题")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#wsrun" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("wsrun")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[6] || (_cache[6] = createStaticVNode('<p><strong>为什么要用 Monorepo？</strong></p><ul><li><p>组件 components 和工具函数 util/lib 的积累和复用</p></li><li><p>工程脚手架的统一配置</p></li><li><p><a href="https://juejin.cn/post/6944877410827370504" target="_blank" rel="noopener noreferrer">现代前端工程为什么越来越离不开 Monorepo?</a></p></li></ul><h2 id="lerna" tabindex="-1"><a class="header-anchor" href="#lerna"><span>Lerna</span></a></h2><p>Lerna 是基于对包管理器<code>npm</code>/<code>yarn</code>的封装是来实现的，它无法有效地控制<code>node_modules</code>的内容：</p><ul><li>Lerna 会为每一个<code>package</code>都调用<code>yarn install</code>，这导致了额外的开销，因为每一个<code>package.json</code>是独立的且它们之间无法共享依赖。这也导致了在这些<code>node_modules</code>文件夹里产生了大量的重复依赖，因为这些<code>package</code>经常会使用相同的第三方包。</li><li>安装完成之后，Lerna 会手动地在相互引用的<code>package</code>之间创建链接<code>link</code>。这将在这些<code>node_module</code>内部引入连包管理器都无法感知到的不一致性，因此在一个包内部运行<code>yarn install</code>，可能会破坏 Lerna 管理的元结构（<code>meta structure</code>）。</li></ul><h2 id="yarn-workspaces" tabindex="-1"><a class="header-anchor" href="#yarn-workspaces"><span>Yarn Workspaces</span></a></h2><p>参考文档：</p><ul><li><a href="https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/" target="_blank" rel="noopener noreferrer">Yarn 官方博客 - Workspaces in Yarn</a>，博客里还说明了 Workspaces 与 Lerna 的区别和集成，强烈推荐该博客</li><li><a href="https://classic.yarnpkg.com/lang/en/docs/workspaces/" target="_blank" rel="noopener noreferrer">Yarn 官方文档 - Workspaces</a></li></ul><p>Yarn 的原生 Workspaces 功能，通过消除跨 Workspaces 的依赖包重复问题，能够让安装依赖变得更快更轻量。Yarn 可以在相互依赖的 Workspace 创建符号链接<code>symlinks</code>，确保所有目录的一致性和正确性。</p><h3 id="workspaces-的依赖安装" tabindex="-1"><a class="header-anchor" href="#workspaces-的依赖安装"><span>Workspaces 的依赖安装</span></a></h3><ul><li>每个 Workspace 里安装的依赖，都会被提升到 Monorepo 根目录下的<code>node_modules</code>目录里</li><li>若某个 Workspace 里依赖的包 PackageA 与根目录里依赖的包 PackageA 的版本不兼容，则会在根目录下和该 Workspace 下分别安装不同版本的 PackageA</li><li>根目录下的<code>node_modules</code>目录里涉及到 Workspace 的依赖，都会以符号链接<code>symlink</code>的方式链接到该 Monorepo 下对应的 Workspace 文件夹</li><li>每个 Workspace 没有它自己的<code>yarn.lock</code>文件，只有根目录存在<code>yarn.lock</code>文件，包含了整个 Monorepo 下所有的 Workspace 的依赖</li><li>当在某个 Workspace 下执行安装依赖命令时，该 Workspace 下的<code>package.json</code>会增加一条依赖记录，且 Monorepo 根目录下的<code>yarn.lock</code>会增加一条依赖记录</li></ul><h3 id="workspaces-的发布问题" tabindex="-1"><a class="header-anchor" href="#workspaces-的发布问题"><span>Workspaces 的发布问题</span></a></h3><p>通常，Monorepo 的根目录包含了胶水代码和业务特定代码，这些代码分享给其他项目也是没有用处的，因此根目录一般不作为一个<code>package</code>发布到 NPM 上，所以我们可以在根目录的<code>package.json</code>里将其标记为<code>private</code>。</p><p>而在 Monorepo 项目的根目录<code>package.json</code>里也会通过<code>workspaces</code>定义一些 Workspace，每个 Workspace 通过会作为一个<code>package</code>发布到 NPM 上。</p><h2 id="wsrun" tabindex="-1"><a class="header-anchor" href="#wsrun"><span>wsrun</span></a></h2><p><a href="https://github.com/hfour/wsrun" target="_blank" rel="noopener noreferrer">wsrun</a>，用于在 Yarn Workspaces 里运行 NPM 脚本或自定义命令。</p>', 16)),
    createVNode(_component_global_config)
  ]);
}
const monorepo_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "monorepo.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/environment/repository/monorepo.html","title":"Monorepo","lang":"en-US","frontmatter":{"description":"Monorepo 为什么要用 Monorepo？ 组件 components 和工具函数 util/lib 的积累和复用 工程脚手架的统一配置 现代前端工程为什么越来越离不开 Monorepo? Lerna Lerna 是基于对包管理器npm/yarn的封装是来实现的，它无法有效地控制node_modules的内容： Lerna 会为每一个packag...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/environment/repository/monorepo.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Monorepo"}],["meta",{"property":"og:description","content":"Monorepo 为什么要用 Monorepo？ 组件 components 和工具函数 util/lib 的积累和复用 工程脚手架的统一配置 现代前端工程为什么越来越离不开 Monorepo? Lerna Lerna 是基于对包管理器npm/yarn的封装是来实现的，它无法有效地控制node_modules的内容： Lerna 会为每一个packag..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-31T12:47:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-31T12:47:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Monorepo\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-31T12:47:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Lerna","slug":"lerna","link":"#lerna","children":[]},{"level":2,"title":"Yarn Workspaces","slug":"yarn-workspaces","link":"#yarn-workspaces","children":[{"level":3,"title":"Workspaces 的依赖安装","slug":"workspaces-的依赖安装","link":"#workspaces-的依赖安装","children":[]},{"level":3,"title":"Workspaces 的发布问题","slug":"workspaces-的发布问题","link":"#workspaces-的发布问题","children":[]}]},{"level":2,"title":"wsrun","slug":"wsrun","link":"#wsrun","children":[]}],"git":{"createdTime":1636801764000,"updatedTime":1730378820000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":2.33,"words":700},"filePathRelative":"front-end-engineering/environment/repository/monorepo.md","localizedDate":"November 13, 2021","autoDesc":true}');
export {
  monorepo_html as comp,
  data
};
