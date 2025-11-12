import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "名人名言",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#名人名言"
      }, [
        createBaseVNode("span", null, "名人名言")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, "中国文化有一个很大的问题，就是做什么事情都不会先讲，先藏着掖着，要做出来之后再讲。本质上其实就是怕失败，怕显得不稳重。-- Zoom CEO，袁征")
    ], -1)),
    createVNode(_component_global_config)
  ]);
}
const quotes_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "quotes.html.vue"]]);
const data = JSON.parse('{"path":"/wander/others/quotes.html","title":"名人名言","lang":"en-US","frontmatter":{"description":"名人名言 中国文化有一个很大的问题，就是做什么事情都不会先讲，先藏着掖着，要做出来之后再讲。本质上其实就是怕失败，怕显得不稳重。-- Zoom CEO，袁征","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/wander/others/quotes.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"名人名言"}],["meta",{"property":"og:description","content":"名人名言 中国文化有一个很大的问题，就是做什么事情都不会先讲，先藏着掖着，要做出来之后再讲。本质上其实就是怕失败，怕显得不稳重。-- Zoom CEO，袁征"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2019-05-13T02:16:42.000Z"}],["meta",{"property":"article:modified_time","content":"2019-05-13T02:16:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"名人名言\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2019-05-13T02:16:42.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1555898064000,"updatedTime":1557713802000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.21,"words":64},"filePathRelative":"wander/others/quotes.md","localizedDate":"April 22, 2019","autoDesc":true}');
export {
  quotes_html as comp,
  data
};
