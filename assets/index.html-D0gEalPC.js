import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "栈和队列",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#栈和队列"
      }, [
        createBaseVNode("span", null, "栈和队列")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", { href: "/interview/data-structure/stack-queue/implement-queue-with-two-stacks" }, "【初级】用两个栈，实现一个队列")
      ])
    ], -1)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/interview/data-structure/stack-queue/","title":"栈和队列","lang":"en-US","frontmatter":{"description":"栈和队列 【初级】用两个栈，实现一个队列","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/interview/data-structure/stack-queue/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"栈和队列"}],["meta",{"property":"og:description","content":"栈和队列 【初级】用两个栈，实现一个队列"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-05-06T07:23:32.000Z"}],["meta",{"property":"article:modified_time","content":"2025-05-06T07:23:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"栈和队列\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-05-06T07:23:32.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1746516212000,"updatedTime":1746516212000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.09,"words":26},"filePathRelative":"interview/data-structure/stack-queue/index.md","localizedDate":"May 6, 2025","autoDesc":true}');
export {
  index_html as comp,
  data
};
