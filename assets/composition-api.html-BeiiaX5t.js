import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api"><span>composition-api</span></a></h1><ul><li><code>setup</code>的调用时机？</li><li><code>setup</code>内调用<code>onMounted</code>等生命周期钩子后，这些钩子是如何关联到组件实例<code>vm</code>上的？</li><li><code>setup</code>返回值是如何挂在<code>vm</code>上的？</li></ul><h2 id="状态管理" tabindex="-1"><a class="header-anchor" href="#状态管理"><span>状态管理</span></a></h2><ul><li><a href="https://vuejsdevelopers.com/2020/10/05/composition-api-vuex/" target="_blank" rel="noopener noreferrer">Should You Use Composition API as a Replacement for Vuex?</a></li><li><a href="https://zhuanlan.zhihu.com/p/320445941" target="_blank" rel="noopener noreferrer">中文版 - 你是否应该使用Composition API替代Vuex？</a></li></ul><p>使用体验上来说，不借助 Vuex 来做状态管理的话，代码写着很难受。</p><ul><li>状态管理的代码组织方式千奇百怪</li></ul>', 6)),
    createVNode(_component_global_config)
  ]);
}
const compositionApi_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "composition-api.html.vue"]]);
const data = JSON.parse('{"path":"/vue/vue3/composition-api.html","title":"composition-api","lang":"en-US","frontmatter":{"description":"composition-api setup的调用时机？ setup内调用onMounted等生命周期钩子后，这些钩子是如何关联到组件实例vm上的？ setup返回值是如何挂在vm上的？ 状态管理 Should You Use Composition API as a Replacement for Vuex? 中文版 - 你是否应该使用Composit...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/vue/vue3/composition-api.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"composition-api"}],["meta",{"property":"og:description","content":"composition-api setup的调用时机？ setup内调用onMounted等生命周期钩子后，这些钩子是如何关联到组件实例vm上的？ setup返回值是如何挂在vm上的？ 状态管理 Should You Use Composition API as a Replacement for Vuex? 中文版 - 你是否应该使用Composit..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-10-11T09:07:44.000Z"}],["meta",{"property":"article:modified_time","content":"2025-10-11T09:07:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"composition-api\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-10-11T09:07:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"状态管理","slug":"状态管理","link":"#状态管理","children":[]}],"git":{"createdTime":1634520786000,"updatedTime":1760173664000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.43,"words":129},"filePathRelative":"vue/vue3/composition-api.md","localizedDate":"October 18, 2021","autoDesc":true}');
export {
  compositionApi_html as comp,
  data
};
