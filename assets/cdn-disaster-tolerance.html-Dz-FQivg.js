import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="cdn-容灾" tabindex="-1"><a class="header-anchor" href="#cdn-容灾"><span>CDN 容灾</span></a></h1><p>CDN 域名容灾，详见：<a href="https://tech.meituan.com/2022/01/13/phoenix-cdn.html" target="_blank" rel="noopener noreferrer">从0到1：美团端侧CDN容灾解决方案</a></p><h2 id="目标" tabindex="-1"><a class="header-anchor" href="#目标"><span>目标</span></a></h2><ul><li>CDN 容灾 <ul><li>某个 CDN 域名异常（比如 DNS 劫持、解析异常）时，可快速切换到新的域名</li></ul></li><li>实现 CDN 负载均衡、全局最优调度 <ul><li>防止 QPS 过高导致将 CDN 厂商打挂引起雪崩</li></ul></li></ul>', 4)),
    createVNode(_component_global_config)
  ]);
}
const cdnDisasterTolerance_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "cdn-disaster-tolerance.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/frontend-stability-construction/high-availability-architecture/cdn-disaster-tolerance.html","title":"CDN 容灾","lang":"en-US","frontmatter":{"description":"CDN 容灾 CDN 域名容灾，详见：从0到1：美团端侧CDN容灾解决方案 目标 CDN 容灾 某个 CDN 域名异常（比如 DNS 劫持、解析异常）时，可快速切换到新的域名 实现 CDN 负载均衡、全局最优调度 防止 QPS 过高导致将 CDN 厂商打挂引起雪崩","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/frontend-stability-construction/high-availability-architecture/cdn-disaster-tolerance.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"CDN 容灾"}],["meta",{"property":"og:description","content":"CDN 容灾 CDN 域名容灾，详见：从0到1：美团端侧CDN容灾解决方案 目标 CDN 容灾 某个 CDN 域名异常（比如 DNS 劫持、解析异常）时，可快速切换到新的域名 实现 CDN 负载均衡、全局最优调度 防止 QPS 过高导致将 CDN 厂商打挂引起雪崩"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-13T04:57:19.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-13T04:57:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CDN 容灾\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-13T04:57:19.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"目标","slug":"目标","link":"#目标","children":[]}],"git":{"createdTime":1651065879000,"updatedTime":1728795439000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.31,"words":93},"filePathRelative":"front-end-engineering/frontend-stability-construction/high-availability-architecture/cdn-disaster-tolerance.md","localizedDate":"April 27, 2022","autoDesc":true}');
export {
  cdnDisasterTolerance_html as comp,
  data
};
