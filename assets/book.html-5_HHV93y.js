import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, o as openBlock } from "./app-BIlS0k3L.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "电子书",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#电子书"
      }, [
        createBaseVNode("span", null, "电子书")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, [
      createBaseVNode("a", { href: "/pdf/webgl-programming-guide.pdf" }, "WebGL 编程指南-PDF 电子书")
    ], -1)),
    createVNode(_component_global_config)
  ]);
}
const book_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "book.html.vue"]]);
const data = JSON.parse('{"path":"/webgl-programming-guide/examples/book.html","title":"电子书","lang":"en-US","frontmatter":{"description":"电子书 WebGL 编程指南-PDF 电子书","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/webgl-programming-guide/examples/book.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"电子书"}],["meta",{"property":"og:description","content":"电子书 WebGL 编程指南-PDF 电子书"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-12-10T08:57:39.000Z"}],["meta",{"property":"article:modified_time","content":"2025-12-10T08:57:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"电子书\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-12-10T08:57:39.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1765357059000,"updatedTime":1765357059000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.06,"words":18},"filePathRelative":"webgl-programming-guide/examples/book.md","localizedDate":"December 10, 2025","autoDesc":true}');
export {
  book_html as comp,
  data
};
