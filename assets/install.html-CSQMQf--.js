import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, o as openBlock } from "./app-BIlS0k3L.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "安装本地大模型",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#安装本地大模型"
      }, [
        createBaseVNode("span", null, "安装本地大模型")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("ul", null, [
      createBaseVNode("li", null, "大模型安装位置：/Users/WindStone/.ollama/models")
    ], -1)),
    createVNode(_component_global_config)
  ]);
}
const install_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "install.html.vue"]]);
const data = JSON.parse('{"path":"/llm/knowledge/install.html","title":"安装本地大模型","lang":"en-US","frontmatter":{"description":"安装本地大模型 大模型安装位置：/Users/WindStone/.ollama/models","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/llm/knowledge/install.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"安装本地大模型"}],["meta",{"property":"og:description","content":"安装本地大模型 大模型安装位置：/Users/WindStone/.ollama/models"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2026-05-23T08:23:49.000Z"}],["meta",{"property":"article:modified_time","content":"2026-05-23T08:23:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装本地大模型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-05-23T08:23:49.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1779524629000,"updatedTime":1779524629000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.06,"words":18},"filePathRelative":"llm/knowledge/install.md","localizedDate":"May 23, 2026","autoDesc":true}');
export {
  install_html as comp,
  data
};
