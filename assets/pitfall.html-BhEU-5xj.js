import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="踩过的坑" tabindex="-1"><a class="header-anchor" href="#踩过的坑"><span>踩过的坑</span></a></h1><h2 id="video-js-7-6-2-里的-weakmap-未经编译" tabindex="-1"><a class="header-anchor" href="#video-js-7-6-2-里的-weakmap-未经编译"><span>video.js 7.6.2 里的 WeakMap 未经编译</span></a></h2><p><code>video.js</code>自<code>7.6.2</code>版本源码里使用<code>WeakMap</code>数据结构来处理 DOM 数据相关的功能，但是最终发布时，其使用的打包工具<code>Rollup</code>并没有对<code>WeakMap</code>进行编译处理，导致最终在项目里引入的<code>video.js</code>的代码里仍然存在<code>WeakMap</code>，最终导致 Android 4.x 的机器都无法正常使用<code>video.js</code>相关的功能。</p>', 3)),
    createVNode(_component_global_config)
  ]);
}
const pitfall_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "pitfall.html.vue"]]);
const data = JSON.parse('{"path":"/js/unclassified/pitfall.html","title":"踩过的坑","lang":"en-US","frontmatter":{"description":"踩过的坑 video.js 7.6.2 里的 WeakMap 未经编译 video.js自7.6.2版本源码里使用WeakMap数据结构来处理 DOM 数据相关的功能，但是最终发布时，其使用的打包工具Rollup并没有对WeakMap进行编译处理，导致最终在项目里引入的video.js的代码里仍然存在WeakMap，最终导致 Android 4.x 的...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/js/unclassified/pitfall.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"踩过的坑"}],["meta",{"property":"og:description","content":"踩过的坑 video.js 7.6.2 里的 WeakMap 未经编译 video.js自7.6.2版本源码里使用WeakMap数据结构来处理 DOM 数据相关的功能，但是最终发布时，其使用的打包工具Rollup并没有对WeakMap进行编译处理，导致最终在项目里引入的video.js的代码里仍然存在WeakMap，最终导致 Android 4.x 的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"踩过的坑\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"video.js 7.6.2 里的 WeakMap 未经编译","slug":"video-js-7-6-2-里的-weakmap-未经编译","link":"#video-js-7-6-2-里的-weakmap-未经编译","children":[]}],"git":{"createdTime":1570940968000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.37,"words":112},"filePathRelative":"js/unclassified/pitfall.md","localizedDate":"October 13, 2019","autoDesc":true}');
export {
  pitfall_html as comp,
  data
};
