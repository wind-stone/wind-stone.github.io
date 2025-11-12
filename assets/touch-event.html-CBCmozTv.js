import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createBaseVNode("h1", {
      id: "触摸事件",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#触摸事件"
      }, [
        createBaseVNode("span", null, "触摸事件")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#触摸点" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("触摸点")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#触摸点的目标元素" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("触摸点的目标元素")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#事件的目标元素" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("事件的目标元素")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#touches-targettouches-changedtouches" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("touches/targetTouches/changedTouches")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[5] || (_cache[5] = createStaticVNode('<h2 id="触摸点" tabindex="-1"><a class="header-anchor" href="#触摸点"><span>触摸点</span></a></h2><p>每个<code>Touch</code>对象代表一个触摸点，每个触摸点都由其位置、大小、形状、压力大小和目标元素描述。</p><h3 id="触摸点的目标元素" tabindex="-1"><a class="header-anchor" href="#触摸点的目标元素"><span>触摸点的目标元素</span></a></h3><p>触摸点的<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Touch" target="_blank" rel="noopener noreferrer">目标元素</a>（<code>target element</code>，即<code>Touch</code>对象的<code>touch.target</code>属性），是触摸点最开始被追踪时（即发生<code>touchstart</code>事件时）触摸点所位于的 DOM 元素。哪怕在触摸点移动过程中，触摸点的位置已经离开了这个元素的有效交互区域，或者这个元素已经被从文档中移除。</p><p>需要注意的是，如果这个元素在触摸过程中被移除，这个事件仍然会指向它，但是不会再冒泡这个事件到<code>window</code>或<code>document</code>对象。因此，如果有元素在触摸过程中可能被移除，最佳实践是将触摸事件的监听器绑定到这个元素本身，防止元素被移除后，无法再从它的上一级元素上侦测到从该元素冒泡的事件。</p><h3 id="事件的目标元素" tabindex="-1"><a class="header-anchor" href="#事件的目标元素"><span>事件的目标元素</span></a></h3><p>无论是发生<code>touchstart</code>/<code>touchmove</code>/<code>touchend</code>事件时，触摸事件的目标元素<code>touchEvent.target</code>的值始终是触摸点发生<code>touchstart</code>事件时所位于的 DOM 元素，事件的目标元素在触摸点离开触摸平面之前，不会改变。</p><p>经测试，以<code>touchstart</code>事件为例</p><ul><li>若两个手指同一时间点击同一个元素，则只触发一次<code>touchstart</code>事件</li><li>若两个手指同一时间点击两个不同的元素，则会触发两次<code>touchstart</code>事件</li></ul><p>TODO: 具体关于浏览器在多个手指同时触发事件后是如何确定事件目标的，待以后详细了解。</p><h3 id="touches-targettouches-changedtouches" tabindex="-1"><a class="header-anchor" href="#touches-targettouches-changedtouches"><span>touches/targetTouches/changedTouches</span></a></h3><ul><li><code>touchEvent.touches</code><ul><li><code>TouchList</code>列表，含有所有当前在与触摸平面接触的<code>Touch</code>对象，不管触摸点是否已经改变或其目标元素是否处于<code>touchstart</code>阶段</li></ul></li><li><code>touchEvent.targetTouches</code><ul><li>只读的<code>TouchList</code>列表，列出了当前接触屏幕的所有触摸点所对应的<code>Touch</code>对象，这些触摸点需要满足以下两个条件： <ul><li>触摸事件发生时，这些触摸点仍与触摸平面接触着，且这些触摸点自<code>touchstart</code>事件后，未曾离开触摸平面（但是可以移动到触摸点目标元素之外）</li><li>这些触摸点的目标元素（即这些触摸点发生<code>touchstart</code>事件时所处于的 DOM 元素）与此次触摸事件的目标元素<code>touchEvent.target</code>是同一元素</li></ul></li><li><code>targetTouches</code>元素是<code>touches</code>的严格子集</li></ul></li><li><code>touchEvent.changedTouches</code><ul><li>只读的<code>TouchList</code>列表，包含了所有从上一次触摸事件到此次事件过程中，状态发生了改变的触点的<code>Touch</code>对象。 <ul><li>对于<code>touchstart</code>事件, 列出在此次事件中新增加的触点</li><li>对于<code>touchmove</code>事件，列出和上一次事件相比较，发生了变化的触点</li><li>对于<code>touchend</code>事件，列出离开触摸平面的触点（这些触点对应已经不接触触摸平面的手指）</li></ul></li></ul></li></ul><p>假设只有一个触摸点发生<code>touchstart</code>/<code>touchmove</code>/<code>touchend</code>事件，<code>touches</code>/<code>targetTouches</code>/<code>changedTouches</code>的变化情况如下：</p><ul><li>针对<code>touchstart</code>事件，假设新增的触摸点位于<code>el</code>元素上 <ul><li><code>touchEvent.touches</code>列表里会新增这个新的触摸点</li><li><code>touchEvent.targetTouches</code>会改变，列出所有在<code>el</code>元素上发生了<code>touchstart</code>事件且未曾离开触摸平面的触摸点（包括已经移动到<code>el</code>元素之外的触摸点），包括这个新增的触摸点</li><li><code>touchEvent.changedTouches</code>会改变，列出导致触发<code>touchstart</code>事件的触摸点，此时只有这个新增的触摸点</li></ul></li><li>针对<code>touchmove</code>事件 <ul><li><code>touchEvent.touches</code>/<code>touchEvent.targetTouches</code>不会改变</li><li><code>touchEvent.changedTouches</code>会改变，列出导致触发<code>touchmove</code>事件的触摸点，此时只有这个移动的触摸点</li></ul></li><li>针对<code>touchend</code>事件 <ul><li><code>touchEvent.touches</code></li></ul></li></ul>', 14)),
    createVNode(_component_global_config)
  ]);
}
const touchEvent_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "touch-event.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/scroll/touch-event.html","title":"触摸事件","lang":"en-US","frontmatter":{"description":"触摸事件 触摸点 每个Touch对象代表一个触摸点，每个触摸点都由其位置、大小、形状、压力大小和目标元素描述。 触摸点的目标元素 触摸点的目标元素（target element，即Touch对象的touch.target属性），是触摸点最开始被追踪时（即发生touchstart事件时）触摸点所位于的 DOM 元素。哪怕在触摸点移动过程中，触摸点的位置已...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/scroll/touch-event.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"触摸事件"}],["meta",{"property":"og:description","content":"触摸事件 触摸点 每个Touch对象代表一个触摸点，每个触摸点都由其位置、大小、形状、压力大小和目标元素描述。 触摸点的目标元素 触摸点的目标元素（target element，即Touch对象的touch.target属性），是触摸点最开始被追踪时（即发生touchstart事件时）触摸点所位于的 DOM 元素。哪怕在触摸点移动过程中，触摸点的位置已..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"触摸事件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"触摸点","slug":"触摸点","link":"#触摸点","children":[{"level":3,"title":"触摸点的目标元素","slug":"触摸点的目标元素","link":"#触摸点的目标元素","children":[]},{"level":3,"title":"事件的目标元素","slug":"事件的目标元素","link":"#事件的目标元素","children":[]},{"level":3,"title":"touches/targetTouches/changedTouches","slug":"touches-targettouches-changedtouches","link":"#touches-targettouches-changedtouches","children":[]}]}],"git":{"createdTime":1551349324000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":3.22,"words":966},"filePathRelative":"browser-env/scroll/touch-event.md","localizedDate":"February 28, 2019","autoDesc":true}');
export {
  touchEvent_html as comp,
  data
};
