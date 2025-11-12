import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="chrome-安全策略" tabindex="-1"><a class="header-anchor" href="#chrome-安全策略"><span>Chrome 安全策略</span></a></h1><h2 id="hsts" tabindex="-1"><a class="header-anchor" href="#hsts"><span>HSTS</span></a></h2><p>详见：<a href="https://zhuanlan.zhihu.com/p/25537440" target="_blank" rel="noopener noreferrer">HSTS详解</a></p><p>若是不小心启用了 HSTS 但是想移除掉，可以打开 chrome://net-internals/#hsts 在底部<strong>Delete domain security policies</strong>输入域名进行删除。</p>', 4)),
    createVNode(_component_global_config)
  ]);
}
const chromeSecurityPolicy_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "chrome-security-policy.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/security/chrome-security-policy.html","title":"Chrome 安全策略","lang":"en-US","frontmatter":{"description":"Chrome 安全策略 HSTS 详见：HSTS详解 若是不小心启用了 HSTS 但是想移除掉，可以打开 chrome://net-internals/#hsts 在底部Delete domain security policies输入域名进行删除。","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/security/chrome-security-policy.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Chrome 安全策略"}],["meta",{"property":"og:description","content":"Chrome 安全策略 HSTS 详见：HSTS详解 若是不小心启用了 HSTS 但是想移除掉，可以打开 chrome://net-internals/#hsts 在底部Delete domain security policies输入域名进行删除。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-11-04T02:32:26.000Z"}],["meta",{"property":"article:modified_time","content":"2021-11-04T02:32:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Chrome 安全策略\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-11-04T02:32:26.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"HSTS","slug":"hsts","link":"#hsts","children":[]}],"git":{"createdTime":1635993146000,"updatedTime":1635993146000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.18,"words":54},"filePathRelative":"browser-env/security/chrome-security-policy.md","localizedDate":"November 4, 2021","autoDesc":true}');
export {
  chromeSecurityPolicy_html as comp,
  data
};
