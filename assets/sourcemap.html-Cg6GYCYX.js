import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, f as createTextVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "source-map",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#source-map"
      }, [
        createBaseVNode("span", null, "Source Map")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("h2", {
      id: "sourcescontent",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#sourcescontent"
      }, [
        createBaseVNode("span", null, "sourcesContent")
      ])
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, [
      createTextVNode("Source Map 文件里的"),
      createBaseVNode("code", null, "sourcesContent"),
      createTextVNode("属性，用于在出错的时候还原源代码，否则只能知道出错位置在源代码里的文件名、行、列信息，无法在控制台直观地看到。")
    ], -1)),
    createVNode(_component_global_config)
  ]);
}
const sourcemap_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "sourcemap.html.vue"]]);
const data = JSON.parse('{"path":"/articles/wechat-mini-program-sourcemap/sourcemap.html","title":"Source Map","lang":"en-US","frontmatter":{"description":"Source Map sourcesContent Source Map 文件里的sourcesContent属性，用于在出错的时候还原源代码，否则只能知道出错位置在源代码里的文件名、行、列信息，无法在控制台直观地看到。","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/articles/wechat-mini-program-sourcemap/sourcemap.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Source Map"}],["meta",{"property":"og:description","content":"Source Map sourcesContent Source Map 文件里的sourcesContent属性，用于在出错的时候还原源代码，否则只能知道出错位置在源代码里的文件名、行、列信息，无法在控制台直观地看到。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2022-01-25T11:48:29.000Z"}],["meta",{"property":"article:modified_time","content":"2022-01-25T11:48:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Source Map\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-01-25T11:48:29.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"sourcesContent","slug":"sourcescontent","link":"#sourcescontent","children":[]}],"git":{"createdTime":1618406057000,"updatedTime":1643111309000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":3}]},"readingTime":{"minutes":0.21,"words":62},"filePathRelative":"articles/wechat-mini-program-sourcemap/sourcemap.md","localizedDate":"April 14, 2021","autoDesc":true}');
export {
  sourcemap_html as comp,
  data
};
