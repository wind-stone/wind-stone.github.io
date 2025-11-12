import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, f as createTextVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "【初级】隐藏页面元素的方式有哪些",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#【初级】隐藏页面元素的方式有哪些"
      }, [
        createBaseVNode("span", null, "【初级】隐藏页面元素的方式有哪些？")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, [
      createTextVNode("B-display:none; visibillity:hidden;"),
      createBaseVNode("br"),
      createTextVNode(" A-opacity:0;"),
      createBaseVNode("br"),
      createTextVNode(" S-定位到视区外，负margin，负z-index")
    ], -1)),
    createVNode(_component_global_config)
  ]);
}
const hideElementsMethods_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "hide-elements-methods.html.vue"]]);
const data = JSON.parse('{"path":"/interview/css/hide-elements-methods.html","title":"【初级】隐藏页面元素的方式有哪些？","lang":"en-US","frontmatter":{"description":"【初级】隐藏页面元素的方式有哪些？ B-display:none; visibillity:hidden; A-opacity:0; S-定位到视区外，负margin，负z-index","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/interview/css/hide-elements-methods.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"【初级】隐藏页面元素的方式有哪些？"}],["meta",{"property":"og:description","content":"【初级】隐藏页面元素的方式有哪些？ B-display:none; visibillity:hidden; A-opacity:0; S-定位到视区外，负margin，负z-index"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-14T00:59:41.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T00:59:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"【初级】隐藏页面元素的方式有哪些？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-14T00:59:41.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1713056381000,"updatedTime":1713056381000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.12,"words":37},"filePathRelative":"interview/css/hide-elements-methods.md","localizedDate":"April 14, 2024","autoDesc":true}');
export {
  hideElementsMethods_html as comp,
  data
};
