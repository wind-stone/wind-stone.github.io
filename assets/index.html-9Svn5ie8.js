import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h1><h2 id="mouseover-mouseout-与-mouseenter-mouseleave-的区别" tabindex="-1"><a class="header-anchor" href="#mouseover-mouseout-与-mouseenter-mouseleave-的区别"><span>mouseover/mouseout 与 mouseenter/mouseleave 的区别</span></a></h2><ul><li><code>mouseover</code>/<code>mouseout</code><ul><li>指针移动到/离开元素或离开元素的后代（即使指针仍在元素内）会触发。</li><li>当指针从它的子元素上移动到它上时会触发。</li><li>事件被发送到 DOM 树的最深层元素，然后它将层次结构向上冒泡，直到它被处理程序取消或到达根目录。</li></ul></li><li><code>mouseenter</code>/<code>mouseleave</code><ul><li>指针移动到/离开元素及其所有后代时触发。</li><li>不会冒泡，即当指针从它的子元素上移动到它上时不会触发。</li><li>会向层次结构的每个元素发送一个<code>mouseenter</code>/<code>mouseleave</code>事件，无论各层级元素的事件处理程序是否取消。</li></ul></li></ul>', 3)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/events/","title":"事件","lang":"en-US","frontmatter":{"description":"事件 mouseover/mouseout 与 mouseenter/mouseleave 的区别 mouseover/mouseout 指针移动到/离开元素或离开元素的后代（即使指针仍在元素内）会触发。 当指针从它的子元素上移动到它上时会触发。 事件被发送到 DOM 树的最深层元素，然后它将层次结构向上冒泡，直到它被处理程序取消或到达根目录。 mou...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/events/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"事件"}],["meta",{"property":"og:description","content":"事件 mouseover/mouseout 与 mouseenter/mouseleave 的区别 mouseover/mouseout 指针移动到/离开元素或离开元素的后代（即使指针仍在元素内）会触发。 当指针从它的子元素上移动到它上时会触发。 事件被发送到 DOM 树的最深层元素，然后它将层次结构向上冒泡，直到它被处理程序取消或到达根目录。 mou..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2022-06-13T07:51:13.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-13T07:51:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-06-13T07:51:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"mouseover/mouseout 与 mouseenter/mouseleave 的区别","slug":"mouseover-mouseout-与-mouseenter-mouseleave-的区别","link":"#mouseover-mouseout-与-mouseenter-mouseleave-的区别","children":[]}],"git":{"createdTime":1562032695000,"updatedTime":1655106673000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.63,"words":190},"filePathRelative":"browser-env/events/README.md","localizedDate":"July 2, 2019","autoDesc":true}');
export {
  index_html as comp,
  data
};
