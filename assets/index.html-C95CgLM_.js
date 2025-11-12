import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[8] || (_cache[8] = createBaseVNode("h1", {
      id: "tapable",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#tapable"
      }, [
        createBaseVNode("span", null, "Tapable")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#系列文章" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("系列文章")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#tapable-官网-readme-翻译" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("tapable 官网 README 翻译")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#tapable-实现" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("tapable 实现")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#详细使用" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("详细使用")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#注册插件及触发钩子" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("注册插件及触发钩子")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#触发钩子" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("触发钩子")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#触发钩子时的返回值及后续操作" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("触发钩子时的返回值及后续操作")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[9] || (_cache[9] = createStaticVNode('<p><code>tapable</code>库提供了各式各样的钩子类（<code>hook classes</code>），实例化这些钩子类将创建钩子。</p><p>每一个钩子上，都可以注册多个插件（<code>plugin</code>）函数。当钩子触发时，这些插件函数就会执行，而插件的执行顺序、入参、返回值是否传入下一个插件函数等，都取决于钩子的类型。</p><p>针对要开发工具库的开发者来说，他们依赖并使用<code>tapable</code>库创建一批钩子，并将这些钩子分别安放在该工具库流水线作业上的各个关键路径上，并将这些钩子和启用流水线作业的方法一起暴露给使用该工具库的用户。</p><p>而对使用工具库的用户来说，他们可以在工具库暴露出来的各个钩子上安装插件，最后启动工具库的流水线作业。当执行到工具库流水线上的关键路径上时，会触发该路径上的钩子，进而执行用户在该钩子上注册的插件函数。</p><h2 id="系列文章" tabindex="-1"><a class="header-anchor" href="#系列文章"><span>系列文章</span></a></h2><h3 id="tapable-官网-readme-翻译" tabindex="-1"><a class="header-anchor" href="#tapable-官网-readme-翻译"><span>tapable 官网 README 翻译</span></a></h3>', 6)),
    createBaseVNode("p", null, [
      createVNode(_component_RouteLink, { to: "/front-end-engineering/tools/build/webpack/tapable/tapable-readme.html" }, {
        default: withCtx(() => _cache[7] || (_cache[7] = [
          createTextVNode("tapable 官网 README 翻译")
        ])),
        _: 1
      })
    ]),
    _cache[10] || (_cache[10] = createStaticVNode('<h3 id="tapable-实现" tabindex="-1"><a class="header-anchor" href="#tapable-实现"><span>tapable 实现</span></a></h3><h2 id="详细使用" tabindex="-1"><a class="header-anchor" href="#详细使用"><span>详细使用</span></a></h2><h3 id="注册插件及触发钩子" tabindex="-1"><a class="header-anchor" href="#注册插件及触发钩子"><span>注册插件及触发钩子</span></a></h3><ul><li><code>hook.tap(pluginName, pluginFn)</code>: 注册同步插件</li><li><code>hook.tapAsync(pluginName, (arg1, arg2, ..., callback) =&gt; { /* ... */ })</code>: 注册基于回调的异步插件</li><li><code>hook.tapPromise(pluginName, () =&gt; { return promise } )</code>: 注册基于回调的异步插件</li></ul><h3 id="触发钩子" tabindex="-1"><a class="header-anchor" href="#触发钩子"><span>触发钩子</span></a></h3><ul><li><code>hook.call()</code>: 执行钩子上通过<code>hook.tap</code>注册的插件</li><li><code>hook.callAsync()</code>: 执行钩子上通过<code>hook.tapAsync</code>注册的插件</li><li><code>hook.promise()</code>: 执行钩子上通过<code>hook.promise</code>注册的插件</li></ul><h3 id="触发钩子时的返回值及后续操作" tabindex="-1"><a class="header-anchor" href="#触发钩子时的返回值及后续操作"><span>触发钩子时的返回值及后续操作</span></a></h3><ul><li><code>SyncHook</code>/<code>SyncBailHook</code>/<code>SyncLoopHook</code>: 调用<code>hook.call()</code>触发钩子，无返回值</li><li><code>SyncWaterfallHook</code>: 调用<code>hook.call()</code>触发钩子，其返回值是最后一个插件的返回值</li><li><code>AsyncSeriesHook</code><ul><li>调用<code>hook.callAsync(arg1, arg2, ..., callback)</code>触发钩子 <ul><li>无返回值</li><li>在所有插件执行完成后会调用<code>callback</code></li></ul></li><li>调用<code>hook.promise(arg1, arg2, ...).then(res =&gt; { ... })</code>触发钩子 <ul><li>返回<code>promise</code>实例</li><li>在所有插件执行完成后会将该<code>promise</code>实例置为<code>resolved</code></li><li><code>res</code>为有数组，数组的项是各个插件<code>resolve</code>的值</li></ul></li></ul></li><li><code>AsyncParallelHook</code><ul><li>调用<code>hook.callAsync(arg1, arg2, ..., callback)</code>触发钩子 <ul><li>无返回值</li><li>在所有插件执行完成后会调用<code>callback</code></li></ul></li><li>调用<code>hook.promise(arg1, arg2, ...).then(res =&gt; { ... })</code>触发钩子 <ul><li>返回<code>promise</code>实例</li><li>在所有插件执行完成后会将该<code>promise</code>实例置为<code>resolved</code></li><li><code>res</code>为<code>undefined</code></li></ul></li></ul></li></ul>', 8)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/tools/build/webpack/tapable/","title":"Tapable","lang":"en-US","frontmatter":{"description":"Tapable tapable库提供了各式各样的钩子类（hook classes），实例化这些钩子类将创建钩子。 每一个钩子上，都可以注册多个插件（plugin）函数。当钩子触发时，这些插件函数就会执行，而插件的执行顺序、入参、返回值是否传入下一个插件函数等，都取决于钩子的类型。 针对要开发工具库的开发者来说，他们依赖并使用tapable库创建一批钩子...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/tools/build/webpack/tapable/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Tapable"}],["meta",{"property":"og:description","content":"Tapable tapable库提供了各式各样的钩子类（hook classes），实例化这些钩子类将创建钩子。 每一个钩子上，都可以注册多个插件（plugin）函数。当钩子触发时，这些插件函数就会执行，而插件的执行顺序、入参、返回值是否传入下一个插件函数等，都取决于钩子的类型。 针对要开发工具库的开发者来说，他们依赖并使用tapable库创建一批钩子..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-31T12:47:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-31T12:47:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tapable\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-31T12:47:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系列文章","slug":"系列文章","link":"#系列文章","children":[{"level":3,"title":"tapable 官网 README 翻译","slug":"tapable-官网-readme-翻译","link":"#tapable-官网-readme-翻译","children":[]},{"level":3,"title":"tapable 实现","slug":"tapable-实现","link":"#tapable-实现","children":[]}]},{"level":2,"title":"详细使用","slug":"详细使用","link":"#详细使用","children":[{"level":3,"title":"注册插件及触发钩子","slug":"注册插件及触发钩子","link":"#注册插件及触发钩子","children":[]},{"level":3,"title":"触发钩子","slug":"触发钩子","link":"#触发钩子","children":[]},{"level":3,"title":"触发钩子时的返回值及后续操作","slug":"触发钩子时的返回值及后续操作","link":"#触发钩子时的返回值及后续操作","children":[]}]}],"git":{"createdTime":1556433860000,"updatedTime":1730378820000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":2.05,"words":614},"filePathRelative":"front-end-engineering/tools/build/webpack/tapable/index.md","localizedDate":"April 28, 2019","autoDesc":true}');
export {
  index_html as comp,
  data
};
