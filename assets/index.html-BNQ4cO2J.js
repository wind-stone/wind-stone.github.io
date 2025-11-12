import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, f as createTextVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "simple-calculator",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#simple-calculator"
      }, [
        createBaseVNode("span", null, "simple-calculator")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, [
      createTextVNode("学习 javascript 入门时编写的简单网页计算器，模仿自："),
      createBaseVNode("a", {
        href: "http://js.fgm.cc/learn/lesson3/07.html",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "http://js.fgm.cc/learn/lesson3/07.html"),
      createTextVNode(" ，并更改了原 demo 里的一个小 bug。（时间太久，忘了具体是什么 bug）")
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, [
      createTextVNode("效果图："),
      createBaseVNode("br"),
      createBaseVNode("img", {
        src: "https://github.com/wind-stone/simple-calculator/raw/master/calculator.png",
        alt: "",
        loading: "lazy"
      })
    ], -1)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/code-snippet/practices/js/%E7%AE%80%E5%8D%95%E8%AE%A1%E7%AE%97%E5%99%A8/","title":"simple-calculator","lang":"en-US","frontmatter":{"description":"simple-calculator 学习 javascript 入门时编写的简单网页计算器，模仿自：http://js.fgm.cc/learn/lesson3/07.html ，并更改了原 demo 里的一个小 bug。（时间太久，忘了具体是什么 bug） 效果图：","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/code-snippet/practices/js/%E7%AE%80%E5%8D%95%E8%AE%A1%E7%AE%97%E5%99%A8/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"simple-calculator"}],["meta",{"property":"og:description","content":"simple-calculator 学习 javascript 入门时编写的简单网页计算器，模仿自：http://js.fgm.cc/learn/lesson3/07.html ，并更改了原 demo 里的一个小 bug。（时间太久，忘了具体是什么 bug） 效果图："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/wind-stone/simple-calculator/raw/master/calculator.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-10-25T16:43:10.000Z"}],["meta",{"property":"article:modified_time","content":"2021-10-25T16:43:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"simple-calculator\\",\\"image\\":[\\"https://github.com/wind-stone/simple-calculator/raw/master/calculator.png\\"],\\"dateModified\\":\\"2021-10-25T16:43:10.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1612941360000,"updatedTime":1635180190000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.2,"words":59},"filePathRelative":"code-snippet/practices/js/简单计算器/README.md","localizedDate":"February 10, 2021","autoDesc":true}');
export {
  index_html as comp,
  data
};
