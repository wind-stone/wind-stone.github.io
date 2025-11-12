import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "【初级】js-中有几种类型的作用域-如何形成",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#【初级】js-中有几种类型的作用域-如何形成"
      }, [
        createBaseVNode("span", null, "【初级】JS 中有几种类型的作用域？如何形成？")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("ul", null, [
      createBaseVNode("li", null, "B-块级、函数、全局"),
      createBaseVNode("li", null, "A-如何形成不同的作用域"),
      createBaseVNode("li", null, "S-提及作用域原理、作用域链、执行环境、执行上下文")
    ], -1)),
    createVNode(_component_global_config)
  ]);
}
const concept_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "concept.html.vue"]]);
const data = JSON.parse('{"path":"/interview/javascript/foundation/execution-context/scope/concept.html","title":"【初级】JS 中有几种类型的作用域？如何形成？","lang":"en-US","frontmatter":{"description":"【初级】JS 中有几种类型的作用域？如何形成？ B-块级、函数、全局 A-如何形成不同的作用域 S-提及作用域原理、作用域链、执行环境、执行上下文","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/interview/javascript/foundation/execution-context/scope/concept.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"【初级】JS 中有几种类型的作用域？如何形成？"}],["meta",{"property":"og:description","content":"【初级】JS 中有几种类型的作用域？如何形成？ B-块级、函数、全局 A-如何形成不同的作用域 S-提及作用域原理、作用域链、执行环境、执行上下文"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-14T00:59:41.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T00:59:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"【初级】JS 中有几种类型的作用域？如何形成？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-14T00:59:41.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1713056381000,"updatedTime":1713056381000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.2,"words":59},"filePathRelative":"interview/javascript/foundation/execution-context/scope/concept.md","localizedDate":"April 14, 2024","autoDesc":true}');
export {
  concept_html as comp,
  data
};
