import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="学习计划" tabindex="-1"><a class="header-anchor" href="#学习计划"><span>学习计划</span></a></h1><h2 id="vue" tabindex="-1"><a class="header-anchor" href="#vue"><span>Vue</span></a></h2><ul><li>函数式组件与常规组件的区别</li><li>模板编译 <ul><li>slot 的实现</li><li><code>sync</code>修饰符的实现</li></ul></li><li>SSR</li><li>codegen 整理 &amp;&amp; staticRoot 优化</li></ul><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2><ul><li>学习 Nginx 转发相关内容</li><li>谷歌云、搭建 nodejs 服务</li><li>webpack 原理、源码</li></ul>', 5)),
    createVNode(_component_global_config)
  ]);
}
const studyPlan_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "study-plan.html.vue"]]);
const data = JSON.parse('{"path":"/study-plan.html","title":"学习计划","lang":"en-US","frontmatter":{"description":"学习计划 Vue 函数式组件与常规组件的区别 模板编译 slot 的实现 sync修饰符的实现 SSR codegen 整理 && staticRoot 优化 其他 学习 Nginx 转发相关内容 谷歌云、搭建 nodejs 服务 webpack 原理、源码","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/study-plan.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"学习计划"}],["meta",{"property":"og:description","content":"学习计划 Vue 函数式组件与常规组件的区别 模板编译 slot 的实现 sync修饰符的实现 SSR codegen 整理 && staticRoot 优化 其他 学习 Nginx 转发相关内容 谷歌云、搭建 nodejs 服务 webpack 原理、源码"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-10T17:19:00.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-10T17:19:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"学习计划\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-10T17:19:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Vue","slug":"vue","link":"#vue","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"git":{"createdTime":1550648165000,"updatedTime":1623345540000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":4}]},"readingTime":{"minutes":0.22,"words":67},"filePathRelative":"study-plan.md","localizedDate":"February 20, 2019","autoDesc":true}');
export {
  studyPlan_html as comp,
  data
};
