import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="【高级】深拷贝" tabindex="-1"><a class="header-anchor" href="#【高级】深拷贝"><span>【高级】深拷贝</span></a></h1><h2 id="手写深拷贝方法-要考虑到非基本类型情况-比如正则、方法等" tabindex="-1"><a class="header-anchor" href="#手写深拷贝方法-要考虑到非基本类型情况-比如正则、方法等"><span>手写深拷贝方法，要考虑到非基本类型情况，比如正则、方法等？</span></a></h2><p>B-能写出基本类型深拷贝 + 对象递归</p><p>A-能解决对象（循环）引用问题</p><p>S-解决对象引用问题并考虑各种类型的拷贝方法，比如正则拷贝方法，可以追问细节比</p><p>参考答案：<a href="https://github.com/lukeed/klona/blob/master/src/index.js" target="_blank" rel="noopener noreferrer">https://github.com/lukeed/klona/blob/master/src/index.js</a></p><p>可以不用考虑方法的深拷贝</p>', 7)),
    createVNode(_component_global_config)
  ]);
}
const deepClone_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "deep-clone.html.vue"]]);
const data = JSON.parse('{"path":"/interview/javascript/coding/program-design/deep-clone.html","title":"【高级】深拷贝","lang":"en-US","frontmatter":{"description":"【高级】深拷贝 手写深拷贝方法，要考虑到非基本类型情况，比如正则、方法等？ B-能写出基本类型深拷贝 + 对象递归 A-能解决对象（循环）引用问题 S-解决对象引用问题并考虑各种类型的拷贝方法，比如正则拷贝方法，可以追问细节比 参考答案：https://github.com/lukeed/klona/blob/master/src/index.js 可...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/interview/javascript/coding/program-design/deep-clone.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"【高级】深拷贝"}],["meta",{"property":"og:description","content":"【高级】深拷贝 手写深拷贝方法，要考虑到非基本类型情况，比如正则、方法等？ B-能写出基本类型深拷贝 + 对象递归 A-能解决对象（循环）引用问题 S-解决对象引用问题并考虑各种类型的拷贝方法，比如正则拷贝方法，可以追问细节比 参考答案：https://github.com/lukeed/klona/blob/master/src/index.js 可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-14T00:59:41.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T00:59:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"【高级】深拷贝\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-14T00:59:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"手写深拷贝方法，要考虑到非基本类型情况，比如正则、方法等？","slug":"手写深拷贝方法-要考虑到非基本类型情况-比如正则、方法等","link":"#手写深拷贝方法-要考虑到非基本类型情况-比如正则、方法等","children":[]}],"git":{"createdTime":1713056381000,"updatedTime":1713056381000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.39,"words":116},"filePathRelative":"interview/javascript/coding/program-design/deep-clone.md","localizedDate":"April 14, 2024","autoDesc":true}');
export {
  deepClone_html as comp,
  data
};
