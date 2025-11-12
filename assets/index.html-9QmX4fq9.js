import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode("h1", {
      id: "执行机制",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#执行机制"
      }, [
        createBaseVNode("span", null, "执行机制")
      ])
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("h2", {
      id: "事件循环",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#事件循环"
      }, [
        createBaseVNode("span", null, "事件循环")
      ])
    ], -1)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouteLink, { to: "/interview/javascript/foundation/execution-mechanism/event-loop/" }, {
          default: withCtx(() => _cache[0] || (_cache[0] = [
            createTextVNode("【初级】事件循环输出题")
          ])),
          _: 1
        })
      ])
    ]),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/interview/javascript/foundation/execution-mechanism/","title":"执行机制","lang":"en-US","frontmatter":{"description":"执行机制 事件循环","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/interview/javascript/foundation/execution-mechanism/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"执行机制"}],["meta",{"property":"og:description","content":"执行机制 事件循环"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-14T00:59:41.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T00:59:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"执行机制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-14T00:59:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"事件循环","slug":"事件循环","link":"#事件循环","children":[]}],"git":{"createdTime":1713056381000,"updatedTime":1713056381000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.08,"words":23},"filePathRelative":"interview/javascript/foundation/execution-mechanism/index.md","localizedDate":"April 14, 2024","autoDesc":true}');
export {
  index_html as comp,
  data
};
