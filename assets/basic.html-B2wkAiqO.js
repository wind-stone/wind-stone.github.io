import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "面试基本信息",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#面试基本信息"
      }, [
        createBaseVNode("span", null, "面试基本信息")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("h2", {
      id: "个人信息",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#个人信息"
      }, [
        createBaseVNode("span", null, "个人信息")
      ])
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "校招/实习", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("ul", null, [
      createBaseVNode("li", null, "学习前端多久了？"),
      createBaseVNode("li", null, "学习前端的方式是？")
    ], -1)),
    createVNode(_component_global_config)
  ]);
}
const basic_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "basic.html.vue"]]);
const data = JSON.parse('{"path":"/interview/basic.html","title":"面试基本信息","lang":"en-US","frontmatter":{"description":"面试基本信息 个人信息 校招/实习 学习前端多久了？ 学习前端的方式是？","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/interview/basic.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"面试基本信息"}],["meta",{"property":"og:description","content":"面试基本信息 个人信息 校招/实习 学习前端多久了？ 学习前端的方式是？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-25T08:53:11.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-25T08:53:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"面试基本信息\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-25T08:53:11.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"个人信息","slug":"个人信息","link":"#个人信息","children":[]}],"git":{"createdTime":1714035191000,"updatedTime":1714035191000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.11,"words":33},"filePathRelative":"interview/basic.md","localizedDate":"April 25, 2024","autoDesc":true}');
export {
  basic_html as comp,
  data
};
