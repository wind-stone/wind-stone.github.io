import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="排序算法对比" tabindex="-1"><a class="header-anchor" href="#排序算法对比"><span>排序算法对比</span></a></h1><table><thead><tr><th>排序算法</th><th>平均时间复杂度</th><th>最好情况</th><th>最坏情况</th><th>空间复杂度</th><th>排序方式</th><th>稳定性</th></tr></thead><tbody><tr><td>冒泡排序</td><td>O(n<sup>2</sup>)</td><td>O(n)</td><td>O(n<sup>2</sup>)</td><td>O(1)</td><td>In-place</td><td>稳定</td></tr><tr><td>选择排序</td><td>O(n<sup>2</sup>)</td><td>O(n<sup>2</sup>)</td><td>O(n<sup>2</sup>)</td><td>O(1)</td><td>In-place</td><td>不稳定</td></tr><tr><td>插入排序</td><td>O(n<sup>2</sup>)</td><td>O(n)</td><td>O(n<sup>2</sup>)</td><td>O(1)</td><td>In-place</td><td>稳定</td></tr><tr><td>归并排序</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(n)</td><td>Out-place</td><td>稳定</td></tr><tr><td>快速排序</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(n<sup>2</sup>)</td><td>O(logn)</td><td>In-place</td><td>不稳定</td></tr></tbody></table>', 2)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/interview/algorithm/sorting-algorithm/","title":"排序算法对比","lang":"en-US","frontmatter":{"description":"排序算法对比","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/interview/algorithm/sorting-algorithm/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"排序算法对比"}],["meta",{"property":"og:description","content":"排序算法对比"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-12-22T06:23:30.000Z"}],["meta",{"property":"article:modified_time","content":"2021-12-22T06:23:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"排序算法对比\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-12-22T06:23:30.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1536909183000,"updatedTime":1640154210000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":3}]},"readingTime":{"minutes":0.49,"words":146},"filePathRelative":"interview/algorithm/sorting-algorithm/README.md","localizedDate":"September 14, 2018","autoDesc":true}');
export {
  index_html as comp,
  data
};
