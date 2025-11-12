import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "数据类型",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#数据类型"
      }, [
        createBaseVNode("span", null, "数据类型")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", { href: "/interview/javascript/foundation/data-type/typeof" }, "【初级】typeof")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", { href: "/interview/javascript/foundation/data-type/the-value-of-the-params-passed-to-function" }, "【初级】函数参数值传递问题")
      ])
    ], -1)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/interview/javascript/foundation/data-type/","title":"数据类型","lang":"en-US","frontmatter":{"description":"数据类型 【初级】typeof 【初级】函数参数值传递问题","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/interview/javascript/foundation/data-type/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"数据类型"}],["meta",{"property":"og:description","content":"数据类型 【初级】typeof 【初级】函数参数值传递问题"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-14T00:59:41.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T00:59:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-14T00:59:41.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1713056381000,"updatedTime":1713056381000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.11,"words":32},"filePathRelative":"interview/javascript/foundation/data-type/index.md","localizedDate":"April 14, 2024","autoDesc":true}');
export {
  index_html as comp,
  data
};
