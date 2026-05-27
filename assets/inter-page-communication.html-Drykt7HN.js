import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, a as createVNode, o as openBlock } from "./app-BIlS0k3L.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="浏览器页面间通信" tabindex="-1"><a class="header-anchor" href="#浏览器页面间通信"><span>浏览器页面间通信</span></a></h1><table><thead><tr><th>方法</th><th>是否需要窗口引用</th><th>是否支持跨域</th><th>适用场景</th></tr></thead><tbody><tr><td>BroadcastChannel</td><td>否</td><td>否</td><td>现代浏览器下的同源广播通信</td></tr><tr><td>localStorage</td><td>否</td><td>否</td><td>对兼容性要求高的简单通信场景</td></tr><tr><td>window.postMessage</td><td>是</td><td>是</td><td>有明确父子关系的窗口间通信，或需要跨域</td></tr><tr><td>SharedWorker</td><td>否</td><td>否</td><td>复杂通信场景，需要共享状态或计算</td></tr><tr><td>Service Worker</td><td>否</td><td>否</td><td>需要离线支持或后台同步的复杂场景</td></tr></tbody></table>', 2)),
    createVNode(_component_global_config)
  ]);
}
const interPageCommunication_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "inter-page-communication.html.vue"]]);
const data = JSON.parse('{"path":"/interview/browser/inter-page-communication.html","title":"浏览器页面间通信","lang":"en-US","frontmatter":{"description":"浏览器页面间通信","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/interview/browser/inter-page-communication.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"浏览器页面间通信"}],["meta",{"property":"og:description","content":"浏览器页面间通信"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2026-05-11T08:39:01.000Z"}],["meta",{"property":"article:modified_time","content":"2026-05-11T08:39:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"浏览器页面间通信\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-05-11T08:39:01.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1778488741000,"updatedTime":1778488741000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.41,"words":123},"filePathRelative":"interview/browser/inter-page-communication.md","localizedDate":"May 11, 2026","autoDesc":true}');
export {
  interPageCommunication_html as comp,
  data
};
