import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "javascript-框架-库",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#javascript-框架-库"
      }, [
        createBaseVNode("span", null, "JavaScript 框架/库")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", { href: "/interview/javascript/javascript-libs/vue" }, "Vue")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", { href: "/interview/javascript/javascript-libs/react" }, "React")
      ])
    ], -1)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/interview/javascript/javascript-libs/","title":"JavaScript 框架/库","lang":"en-US","frontmatter":{"description":"JavaScript 框架/库 Vue React","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/interview/javascript/javascript-libs/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"JavaScript 框架/库"}],["meta",{"property":"og:description","content":"JavaScript 框架/库 Vue React"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-14T00:59:41.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T00:59:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript 框架/库\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-14T00:59:41.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1713056381000,"updatedTime":1713056381000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.05,"words":14},"filePathRelative":"interview/javascript/javascript-libs/index.md","localizedDate":"April 14, 2024","autoDesc":true}');
export {
  index_html as comp,
  data
};
