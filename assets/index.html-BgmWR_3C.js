import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createBaseVNode("h1", {
      id: "未分类内容",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#未分类内容"
      }, [
        createBaseVNode("span", null, "未分类内容")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#编写原生-javascript-插件" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("编写原生 JavaScript 插件")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#插件需要满足的条件" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("插件需要满足的条件")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[3] || (_cache[3] = createStaticVNode('<h2 id="编写原生-javascript-插件" tabindex="-1"><a class="header-anchor" href="#编写原生-javascript-插件"><span>编写原生 JavaScript 插件</span></a></h2><h3 id="插件需要满足的条件" tabindex="-1"><a class="header-anchor" href="#插件需要满足的条件"><span>插件需要满足的条件</span></a></h3><p>一个可复用的插件需要满足以下条件：</p><ul><li>插件自身的作用域与用户当前的作用域相互独立，也就是插件内部的私有变量不能影响使用者的环境变量；</li><li>插件需具备默认设置参数；</li><li>插件除了具备已实现的基本功能外，需提供部分API，使用者可以通过该API修改插件功能的默认参数，从而实现用户自定义插件效果；</li><li>插件需提供监听入口，及针对指定元素进行监听，使得该元素与插件响应达到插件效果；</li><li>插件支持链式调用。</li></ul><p>Reference:</p><ul><li><a href="http://geocld.github.io/2016/03/10/javascript_plugin/" target="_blank" rel="noopener noreferrer">原生JavaScript插件编写指南</a></li><li><a href="https://www.jianshu.com/p/e65c246beac1" target="_blank" rel="noopener noreferrer">如何定义一个高逼格的原生JS插件</a></li></ul>', 6)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/js/unclassified/","title":"未分类内容","lang":"en-US","frontmatter":{"description":"未分类内容 编写原生 JavaScript 插件 插件需要满足的条件 一个可复用的插件需要满足以下条件： 插件自身的作用域与用户当前的作用域相互独立，也就是插件内部的私有变量不能影响使用者的环境变量； 插件需具备默认设置参数； 插件除了具备已实现的基本功能外，需提供部分API，使用者可以通过该API修改插件功能的默认参数，从而实现用户自定义插件效果； ...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/js/unclassified/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"未分类内容"}],["meta",{"property":"og:description","content":"未分类内容 编写原生 JavaScript 插件 插件需要满足的条件 一个可复用的插件需要满足以下条件： 插件自身的作用域与用户当前的作用域相互独立，也就是插件内部的私有变量不能影响使用者的环境变量； 插件需具备默认设置参数； 插件除了具备已实现的基本功能外，需提供部分API，使用者可以通过该API修改插件功能的默认参数，从而实现用户自定义插件效果； ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"未分类内容\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"编写原生 JavaScript 插件","slug":"编写原生-javascript-插件","link":"#编写原生-javascript-插件","children":[{"level":3,"title":"插件需要满足的条件","slug":"插件需要满足的条件","link":"#插件需要满足的条件","children":[]}]}],"git":{"createdTime":1623668328000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.75,"words":224},"filePathRelative":"js/unclassified/README.md","localizedDate":"June 14, 2021","autoDesc":true}');
export {
  index_html as comp,
  data
};
