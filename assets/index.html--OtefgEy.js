import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "代码片段",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#代码片段"
      }, [
        createBaseVNode("span", null, "代码片段")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, "记录一些代码片段，方便日后复用。", -1)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/code-snippet/","title":"代码片段","lang":"en-US","frontmatter":{"description":"代码片段 记录一些代码片段，方便日后复用。","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/code-snippet/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"代码片段"}],["meta",{"property":"og:description","content":"代码片段 记录一些代码片段，方便日后复用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2019-12-05T02:16:54.000Z"}],["meta",{"property":"article:modified_time","content":"2019-12-05T02:16:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码片段\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2019-12-05T02:16:54.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1551685128000,"updatedTime":1575512214000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":2}]},"readingTime":{"minutes":0.07,"words":21},"filePathRelative":"code-snippet/README.md","localizedDate":"March 4, 2019","autoDesc":true}');
export {
  index_html as comp,
  data
};
