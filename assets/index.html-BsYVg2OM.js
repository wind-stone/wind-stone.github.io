import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, f as createTextVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "simple-radius-menu",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#simple-radius-menu"
      }, [
        createBaseVNode("span", null, "simple-radius-menu")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, [
      createTextVNode("简单的“径向动画菜单”，模范自奇舞团："),
      createBaseVNode("a", {
        href: "http://www.75team.com/archives/851",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "http://www.75team.com/archives/851"),
      createBaseVNode("br"),
      createTextVNode(" 效果图：")
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("figure", null, [
      createBaseVNode("img", {
        src: "https://github.com/wind-stone/simple-radius-menu/raw/master/radius-menu.gif",
        alt: "",
        tabindex: "0",
        loading: "lazy"
      }),
      createBaseVNode("figcaption")
    ], -1)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/code-snippet/practices/css/6-%E5%BE%84%E5%90%91%E5%8A%A8%E7%94%BB%E8%8F%9C%E5%8D%95/","title":"simple-radius-menu","lang":"en-US","frontmatter":{"description":"simple-radius-menu 简单的“径向动画菜单”，模范自奇舞团：http://www.75team.com/archives/851 效果图：","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/code-snippet/practices/css/6-%E5%BE%84%E5%90%91%E5%8A%A8%E7%94%BB%E8%8F%9C%E5%8D%95/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"simple-radius-menu"}],["meta",{"property":"og:description","content":"simple-radius-menu 简单的“径向动画菜单”，模范自奇舞团：http://www.75team.com/archives/851 效果图："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/wind-stone/simple-radius-menu/raw/master/radius-menu.gif"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-10-25T16:43:10.000Z"}],["meta",{"property":"article:modified_time","content":"2021-10-25T16:43:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"simple-radius-menu\\",\\"image\\":[\\"https://github.com/wind-stone/simple-radius-menu/raw/master/radius-menu.gif\\"],\\"dateModified\\":\\"2021-10-25T16:43:10.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1612941360000,"updatedTime":1635180190000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.11,"words":34},"filePathRelative":"code-snippet/practices/css/6-径向动画菜单/README.md","localizedDate":"February 10, 2021","autoDesc":true}');
export {
  index_html as comp,
  data
};
