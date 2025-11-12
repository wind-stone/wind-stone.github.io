import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "vue3-状态管理",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#vue3-状态管理"
      }, [
        createBaseVNode("span", null, "Vue3 状态管理")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, [
      createBaseVNode("a", {
        href: "https://juejin.cn/post/6984604019272450085",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Vue3+TS 优雅地使用状态管理")
    ], -1)),
    createVNode(_component_global_config)
  ]);
}
const stateManagement_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "state-management.html.vue"]]);
const data = JSON.parse('{"path":"/vue/vue3/state-management.html","title":"Vue3 状态管理","lang":"en-US","frontmatter":{"description":"Vue3 状态管理 Vue3+TS 优雅地使用状态管理","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/vue/vue3/state-management.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Vue3 状态管理"}],["meta",{"property":"og:description","content":"Vue3 状态管理 Vue3+TS 优雅地使用状态管理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-10-11T09:07:44.000Z"}],["meta",{"property":"article:modified_time","content":"2025-10-11T09:07:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue3 状态管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-10-11T09:07:44.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1637546976000,"updatedTime":1760173664000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.07,"words":21},"filePathRelative":"vue/vue3/state-management.md","localizedDate":"November 22, 2021","autoDesc":true}');
export {
  stateManagement_html as comp,
  data
};
