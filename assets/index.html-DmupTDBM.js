import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, f as createTextVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "image-clipping",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#image-clipping"
      }, [
        createBaseVNode("span", null, "image-clipping")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, "基于 Jcrop 制作简单的图片裁剪功能，左边显示原图，右边显示裁剪后的效果图。", -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, [
      createTextVNode("效果图："),
      createBaseVNode("br"),
      createBaseVNode("img", {
        src: "https://github.com/wind-stone/image-clipping/raw/master/image-clipping.gif",
        alt: "",
        loading: "lazy"
      })
    ], -1)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/code-snippet/practices/js/%E5%9B%BE%E7%89%87%E8%A3%81%E5%89%AA/","title":"image-clipping","lang":"en-US","frontmatter":{"description":"image-clipping 基于 Jcrop 制作简单的图片裁剪功能，左边显示原图，右边显示裁剪后的效果图。 效果图：","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/code-snippet/practices/js/%E5%9B%BE%E7%89%87%E8%A3%81%E5%89%AA/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"image-clipping"}],["meta",{"property":"og:description","content":"image-clipping 基于 Jcrop 制作简单的图片裁剪功能，左边显示原图，右边显示裁剪后的效果图。 效果图："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/wind-stone/image-clipping/raw/master/image-clipping.gif"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-10-25T16:43:10.000Z"}],["meta",{"property":"article:modified_time","content":"2021-10-25T16:43:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"image-clipping\\",\\"image\\":[\\"https://github.com/wind-stone/image-clipping/raw/master/image-clipping.gif\\"],\\"dateModified\\":\\"2021-10-25T16:43:10.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1612941360000,"updatedTime":1635180190000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.15,"words":44},"filePathRelative":"code-snippet/practices/js/图片裁剪/README.md","localizedDate":"February 10, 2021","autoDesc":true}');
export {
  index_html as comp,
  data
};
