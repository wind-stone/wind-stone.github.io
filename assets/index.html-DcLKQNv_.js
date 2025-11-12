import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, f as createTextVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "simple-drag",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#simple-drag"
      }, [
        createBaseVNode("span", null, "simple-drag")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, [
      createTextVNode("学习 javascript 入门时编写的简单拖拽功能，模仿自："),
      createBaseVNode("a", {
        href: "http://js.fgm.cc/learn/lesson6/01.html",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "http://js.fgm.cc/learn/lesson6/01.html")
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, [
      createTextVNode("效果图："),
      createBaseVNode("br"),
      createBaseVNode("img", {
        src: "https://github.com/wind-stone/simple-drag/raw/master/simple-drag.gif",
        alt: "",
        loading: "lazy"
      })
    ], -1)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/code-snippet/practices/js/%E7%AE%80%E5%8D%95%E6%8B%96%E6%8B%BD%E5%8A%9F%E8%83%BD/","title":"simple-drag","lang":"en-US","frontmatter":{"description":"simple-drag 学习 javascript 入门时编写的简单拖拽功能，模仿自：http://js.fgm.cc/learn/lesson6/01.html 效果图：","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/code-snippet/practices/js/%E7%AE%80%E5%8D%95%E6%8B%96%E6%8B%BD%E5%8A%9F%E8%83%BD/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"simple-drag"}],["meta",{"property":"og:description","content":"simple-drag 学习 javascript 入门时编写的简单拖拽功能，模仿自：http://js.fgm.cc/learn/lesson6/01.html 效果图："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/wind-stone/simple-drag/raw/master/simple-drag.gif"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-10-25T16:43:10.000Z"}],["meta",{"property":"article:modified_time","content":"2021-10-25T16:43:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"simple-drag\\",\\"image\\":[\\"https://github.com/wind-stone/simple-drag/raw/master/simple-drag.gif\\"],\\"dateModified\\":\\"2021-10-25T16:43:10.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1612941360000,"updatedTime":1635180190000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.12,"words":35},"filePathRelative":"code-snippet/practices/js/简单拖拽功能/README.md","localizedDate":"February 10, 2021","autoDesc":true}');
export {
  index_html as comp,
  data
};
