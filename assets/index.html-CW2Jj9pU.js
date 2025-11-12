import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, f as createTextVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "css3-circle-diffusion",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#css3-circle-diffusion"
      }, [
        createBaseVNode("span", null, "CSS3-Circle-Diffusion")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, [
      createTextVNode("模拟声波扩散效果：内有一红色固定的小圆圈 A，自圆心有一小圆圈 B 慢慢扩散开来，扩散至 A 后再向边缘扩散，最终消散。"),
      createBaseVNode("br"),
      createTextVNode(" 这种效果是用来表示报警的提示。效果图：")
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("figure", null, [
      createBaseVNode("img", {
        src: "https://github.com/wind-stone/Prue-CSS-Practices/raw/master/1-圆圈声波扩散效果/效果图.gif",
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
const data = JSON.parse('{"path":"/code-snippet/practices/css/1-%E5%9C%86%E5%9C%88%E5%A3%B0%E6%B3%A2%E6%89%A9%E6%95%A3%E6%95%88%E6%9E%9C/","title":"CSS3-Circle-Diffusion","lang":"en-US","frontmatter":{"description":"CSS3-Circle-Diffusion 模拟声波扩散效果：内有一红色固定的小圆圈 A，自圆心有一小圆圈 B 慢慢扩散开来，扩散至 A 后再向边缘扩散，最终消散。 这种效果是用来表示报警的提示。效果图：","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/code-snippet/practices/css/1-%E5%9C%86%E5%9C%88%E5%A3%B0%E6%B3%A2%E6%89%A9%E6%95%A3%E6%95%88%E6%9E%9C/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"CSS3-Circle-Diffusion"}],["meta",{"property":"og:description","content":"CSS3-Circle-Diffusion 模拟声波扩散效果：内有一红色固定的小圆圈 A，自圆心有一小圆圈 B 慢慢扩散开来，扩散至 A 后再向边缘扩散，最终消散。 这种效果是用来表示报警的提示。效果图："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/wind-stone/Prue-CSS-Practices/raw/master/1-圆圈声波扩散效果/效果图.gif"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-10-25T16:43:10.000Z"}],["meta",{"property":"article:modified_time","content":"2021-10-25T16:43:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS3-Circle-Diffusion\\",\\"image\\":[\\"https://github.com/wind-stone/Prue-CSS-Practices/raw/master/1-圆圈声波扩散效果/效果图.gif\\"],\\"dateModified\\":\\"2021-10-25T16:43:10.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1612941360000,"updatedTime":1635180190000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.3,"words":91},"filePathRelative":"code-snippet/practices/css/1-圆圈声波扩散效果/README.md","localizedDate":"February 10, 2021","autoDesc":true}');
export {
  index_html as comp,
  data
};
