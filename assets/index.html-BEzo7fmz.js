import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createBaseVNode("h1", {
      id: "模块及模块解析",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#模块及模块解析"
      }, [
        createBaseVNode("span", null, "模块及模块解析")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#模块" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("模块")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#export-和-import-require" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("export = 和 import = require()")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#可选的模块加载" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("可选的模块加载")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#模块解析" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("模块解析")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[5] || (_cache[5] = createStaticVNode('<h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块"><span>模块</span></a></h2><ul><li><a href="https://www.typescriptlang.org/docs/handbook/modules.html" target="_blank" rel="noopener noreferrer">Modules</a></li></ul><h3 id="export-和-import-require" tabindex="-1"><a class="header-anchor" href="#export-和-import-require"><span>export = 和 import = require()</span></a></h3><p><code>export =</code>和<code>import = require()</code>的写法，主要是为了兼容 CommonJS 和 AMD 里导出单个<code>exports</code>对象的语法。</p><p>注意，针对<code>export =</code>导出的模块，一定要用<code>import = require()</code>来导入。</p><h3 id="可选的模块加载" tabindex="-1"><a class="header-anchor" href="#可选的模块加载"><span>可选的模块加载</span></a></h3><blockquote><p>The compiler detects whether each module is used in the emitted JavaScript. If a module identifier is only ever used as part of a type annotations and never as an expression, then no require call is emitted for that module. This elision of unused references is a good performance optimization, and also allows for optional loading of those modules.</p></blockquote><p>编译器会检测文件里的每一个模块是否被使用到，如果一个模块标识符只是作为类型注解的一部分被使用，而不是作为表达式被使用，则在生成文件时不会包含<code>require</code>该模块的代码。省略未引用模块对性能优化是极好的，并同时允许对这些模块的选择性加载。</p><h2 id="模块解析" tabindex="-1"><a class="header-anchor" href="#模块解析"><span>模块解析</span></a></h2><ul><li><a href="https://www.typescriptlang.org/docs/handbook/module-resolution.html" target="_blank" rel="noopener noreferrer">Module Resolution</a></li></ul><p><code>typescript</code>的模块解析支持在编译时将<code>import</code>的模块的路径替换成另一个路径，这些功能包括</p><ul><li>Path Mapping</li><li>Virtual Directories with rootDirs</li></ul><p>此外，通过在编译时<code>--traceResolution</code>选项，可以详细看到每一个模块是如何解析路径的。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tsc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --traceResolution</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>', 14)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/typescript/module-system/","title":"模块及模块解析","lang":"en-US","frontmatter":{"description":"模块及模块解析 模块 Modules export = 和 import = require() export =和import = require()的写法，主要是为了兼容 CommonJS 和 AMD 里导出单个exports对象的语法。 注意，针对export =导出的模块，一定要用import = require()来导入。 可选的模块加载 T...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/typescript/module-system/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"模块及模块解析"}],["meta",{"property":"og:description","content":"模块及模块解析 模块 Modules export = 和 import = require() export =和import = require()的写法，主要是为了兼容 CommonJS 和 AMD 里导出单个exports对象的语法。 注意，针对export =导出的模块，一定要用import = require()来导入。 可选的模块加载 T..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-10-24T03:16:16.000Z"}],["meta",{"property":"article:modified_time","content":"2021-10-24T03:16:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"模块及模块解析\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-10-24T03:16:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"模块","slug":"模块","link":"#模块","children":[{"level":3,"title":"export = 和 import = require()","slug":"export-和-import-require","link":"#export-和-import-require","children":[]},{"level":3,"title":"可选的模块加载","slug":"可选的模块加载","link":"#可选的模块加载","children":[]}]},{"level":2,"title":"模块解析","slug":"模块解析","link":"#模块解析","children":[]}],"git":{"createdTime":1619363540000,"updatedTime":1635045376000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":1.07,"words":321},"filePathRelative":"typescript/module-system/README.md","localizedDate":"April 25, 2021","autoDesc":true}');
export {
  index_html as comp,
  data
};
