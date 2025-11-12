import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode("h1", {
      id: "vue-ssr",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#vue-ssr"
      }, [
        createBaseVNode("span", null, "Vue SSR")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#ssr-的优势和劣势" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("SSR 的优势和劣势")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#学习记录" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("学习记录")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#createbundlerenderer" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("createBundleRenderer")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#服务器端的入口文件" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("服务器端的入口文件")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#vuex-router-sync" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("vuex-router-sync")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[6] || (_cache[6] = createStaticVNode('<h2 id="ssr-的优势和劣势" tabindex="-1"><a class="header-anchor" href="#ssr-的优势和劣势"><span>SSR 的优势和劣势</span></a></h2><p>优势：</p><ul><li>更好的 SEO</li><li>更快的内容到达时间 (<code>time-to-content</code>)</li></ul><p>劣势：</p><ul><li>只调用<code>created</code>及之前的生命周期钩子函数，一些外部扩展库(<code>external library</code>)可能需要特殊处理，才能在服务器渲染应用程序中运行。</li><li>涉及构建设置和部署的更多要求，需要处于 Node.js server 运行环境。</li><li>更多的服务器端负载，比如 CPU</li></ul><h2 id="学习记录" tabindex="-1"><a class="header-anchor" href="#学习记录"><span>学习记录</span></a></h2><h3 id="createbundlerenderer" tabindex="-1"><a class="header-anchor" href="#createbundlerenderer"><span>createBundleRenderer</span></a></h3><p><code>createBundleRenderer</code>方法，主要是解决开发阶段编辑服务端代码后不能热更新的问题。</p><h3 id="服务器端的入口文件" tabindex="-1"><a class="header-anchor" href="#服务器端的入口文件"><span>服务器端的入口文件</span></a></h3><p>服务器端的入口文件，应该导出一个函数，该函数接受一个<code>context</code>对象作为参数，调用后 Promise 实例，实例需<code>resolve</code>一个<code>app</code>实例。</p><h3 id="vuex-router-sync" tabindex="-1"><a class="header-anchor" href="#vuex-router-sync"><span>vuex-router-sync</span></a></h3><p><a href="https://github.com/vuejs/vuex-router-sync" target="_blank" rel="noopener noreferrer">vuex-router-sync</a>，用于将当前路由的状态注入到<code>store</code>里，当路由变化时，<code>store.state.route</code>也会跟着变化。</p>', 12)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/vue/source-study/ssr/","title":"Vue SSR","lang":"en-US","frontmatter":{"description":"Vue SSR SSR 的优势和劣势 优势： 更好的 SEO 更快的内容到达时间 (time-to-content) 劣势： 只调用created及之前的生命周期钩子函数，一些外部扩展库(external library)可能需要特殊处理，才能在服务器渲染应用程序中运行。 涉及构建设置和部署的更多要求，需要处于 Node.js server 运行环境。...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/vue/source-study/ssr/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Vue SSR"}],["meta",{"property":"og:description","content":"Vue SSR SSR 的优势和劣势 优势： 更好的 SEO 更快的内容到达时间 (time-to-content) 劣势： 只调用created及之前的生命周期钩子函数，一些外部扩展库(external library)可能需要特殊处理，才能在服务器渲染应用程序中运行。 涉及构建设置和部署的更多要求，需要处于 Node.js server 运行环境。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-11T04:10:37.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-11T04:10:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue SSR\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-11T04:10:37.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"SSR 的优势和劣势","slug":"ssr-的优势和劣势","link":"#ssr-的优势和劣势","children":[]},{"level":2,"title":"学习记录","slug":"学习记录","link":"#学习记录","children":[{"level":3,"title":"createBundleRenderer","slug":"createbundlerenderer","link":"#createbundlerenderer","children":[]},{"level":3,"title":"服务器端的入口文件","slug":"服务器端的入口文件","link":"#服务器端的入口文件","children":[]},{"level":3,"title":"vuex-router-sync","slug":"vuex-router-sync","link":"#vuex-router-sync","children":[]}]}],"git":{"createdTime":1619697592000,"updatedTime":1623384637000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":2}]},"readingTime":{"minutes":0.81,"words":243},"filePathRelative":"vue/source-study/ssr/README.md","localizedDate":"April 29, 2021","autoDesc":true}');
export {
  index_html as comp,
  data
};
