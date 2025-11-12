import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="组件实例化" tabindex="-1"><a class="header-anchor" href="#组件实例化"><span>组件实例化</span></a></h1><h2 id="根组件的实例化-vs-普通组件实例化" tabindex="-1"><a class="header-anchor" href="#根组件的实例化-vs-普通组件实例化"><span>根组件的实例化 VS 普通组件实例化</span></a></h2><ul><li>根组件实例：是指在<code>main.js</code>里显示调用<code>new Vue(options)</code>生成的实例</li><li>普通组件实例：是指只定义了组件选项对象，在生成 DOM Tree 的过程中隐式调用<code>new vnode.componentOptions.Ctor(options)</code>生成的组件</li></ul><p>现在我们来总结一下，根组件实例和普通组件实例在实例化过程中的区别。</p>', 4)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/vue/source-study/instance/","title":"组件实例化","lang":"en-US","frontmatter":{"description":"组件实例化 根组件的实例化 VS 普通组件实例化 根组件实例：是指在main.js里显示调用new Vue(options)生成的实例 普通组件实例：是指只定义了组件选项对象，在生成 DOM Tree 的过程中隐式调用new vnode.componentOptions.Ctor(options)生成的组件 现在我们来总结一下，根组件实例和普通组件实例...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/vue/source-study/instance/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"组件实例化"}],["meta",{"property":"og:description","content":"组件实例化 根组件的实例化 VS 普通组件实例化 根组件实例：是指在main.js里显示调用new Vue(options)生成的实例 普通组件实例：是指只定义了组件选项对象，在生成 DOM Tree 的过程中隐式调用new vnode.componentOptions.Ctor(options)生成的组件 现在我们来总结一下，根组件实例和普通组件实例..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T18:08:13.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T18:08:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"组件实例化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T18:08:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"根组件的实例化 VS 普通组件实例化","slug":"根组件的实例化-vs-普通组件实例化","link":"#根组件的实例化-vs-普通组件实例化","children":[]}],"git":{"createdTime":1540198729000,"updatedTime":1623694093000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":3}]},"readingTime":{"minutes":0.38,"words":115},"filePathRelative":"vue/source-study/instance/README.md","localizedDate":"October 22, 2018","autoDesc":true}');
export {
  index_html as comp,
  data
};
