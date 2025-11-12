import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[6] || (_cache[6] = createBaseVNode("h1", {
      id: "virtual-dom",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#virtual-dom"
      }, [
        createBaseVNode("span", null, "Virtual DOM")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#什么是-virtual-dom" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("什么是 Virtual DOM")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#为什么要使用-virtual-dom" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("为什么要使用 Virtual DOM")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#virtual-dom-的作用" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("Virtual DOM 的作用")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#virtual-dom-的缺点" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("Virtual DOM 的缺点")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#错误观念纠正" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("错误观念纠正")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#参考" }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("参考")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[7] || (_cache[7] = createStaticVNode('<h2 id="什么是-virtual-dom" tabindex="-1"><a class="header-anchor" href="#什么是-virtual-dom"><span>什么是 Virtual DOM</span></a></h2><p>本质上，Virtual DOM 就是 JavaScript 对象，这个对象就是对 DOM 更加轻量级的描述。</p><h2 id="为什么要使用-virtual-dom" tabindex="-1"><a class="header-anchor" href="#为什么要使用-virtual-dom"><span>为什么要使用 Virtual DOM</span></a></h2><p>DOM 是复杂的，对它的操作（尤其是查询和创建）是非常慢、非常耗费资源的。仅创建一个空白的<code>div</code>，其实例属性就达到 246 个。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// Chrome v78</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> div</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">createElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;div&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> m</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> k</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> in</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  m</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 246</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 DOM 这么多属性，其实大部分属性对于做 Diff 是没有任何用处的，所以如果用更轻量级的 JS 对象来代替复杂的 DOM 节点，然后用 JS 对象的 diff 代替 DOM 的 diff，就可以避免大量对 DOM 的查询操作。这个更轻量级的 JS 对象就称为 Virtual DOM。</p><p>引入 Virtual DOM 后，对 DOM 的 Diff 操作就变成了这样：</p><ul><li>维护一个使用 JS 对象表示的 Virtual DOM，与真实 DOM 一一对应</li><li>对前后两个 Virtual DOM 做 diff，生成变更（Mutation）</li><li>把变更应用于真实 DOM，生成最新的真实 DOM</li></ul><p>可以看出，因为要把变更应用到真实 DOM 上，所以还是避免不了要直接操作 DOM ，但是 React 的 diff 算法会把 DOM 改动次数降到最低。</p><p>虚拟 DOM 和 Diff 算法的出现是为了解决由命令式编程转变为声明式编程、数据驱动后所带来的性能问题的。换句话说，直接操作 DOM 的性能并不会低于虚拟 DOM 和 Diff 算法，甚至还会优于。这么说的原因是因为 Diff 算法的比较过程，比较是为了找出不同从而有的放矢的更新页面。但是比较也是要消耗性能的。而直接操作 DOM 就是有的放矢，我们知道该更新什么不该更新什么，所以不需要有比较的过程。所以直接操作 DOM 效率可能更高。React 厉害的地方并不是说它比 DOM 快，而是说不管你数据怎么变化，我都可以以最小的代价来进行更新 DOM。方法就是我在内存里面用新的数据刷新一个虚拟 DOM 树，然后新旧 DOM 进行比较，找出差异，再更新到 DOM 树上。框架的意义在于为你掩盖底层的 DOM 操作，让你用更声明式的方式来描述你的目的，从而让你的代码更容易维护。没有任何框架可以比纯手动的优化 DOM 操作更快，因为框架的 DOM 操作层需要应对任何上层 API 可能产生的操作，它的实现必须是普适的。</p><h2 id="virtual-dom-的作用" tabindex="-1"><a class="header-anchor" href="#virtual-dom-的作用"><span>Virtual DOM 的作用</span></a></h2><p>很多人会把 Diff、数据更新、提升性能等概念绑定起来，但是你想想这个问题：React 由于只触发更新，而不能知道精确变化的数据，所以需要 diff 来找出差异然后 patch 差异队列。Vue 采用数据劫持的手段可以精准拿到变化的数据，为什么还要用 Virtual DOM？</p><p>Virtual DOM 的作用如下：</p><ul><li>Virtual DOM 在牺牲(牺牲很关键)部分性能的前提下，增加了可维护性，这也是很多框架的通性。</li><li>实现了对 DOM 的集中化操作，在数据改变时先对虚拟 DOM 进行修改，再反映到真实的 DOM 中，用最小的代价来更新 DOM，提高效率。</li><li>可以渲染到 DOM 以外的端，使得框架跨平台，比如 ReactNative，React VR 等。</li><li>可以更好的实现 SSR，同构渲染等。</li><li>组件的高度抽象化。</li></ul><p>Vue 2.0 引入 vdom 的主要原因是 vdom 把渲染过程抽象化了，从而使得组件的抽象能力也得到提升，并且可以适配 DOM 以外的渲染目标。</p><h2 id="virtual-dom-的缺点" tabindex="-1"><a class="header-anchor" href="#virtual-dom-的缺点"><span>Virtual DOM 的缺点</span></a></h2><ul><li>首次渲染大量 DOM 时，由于多了一层 Virtual DOM 的计算，会比 innerHTML 插入慢。（时间上）</li><li>Virtual DOM 需要在内存中的维护一份 DOM 的副本。（空间上）</li><li>如果 Virtual DOM 大量更改，这是合适的。但是单一的、频繁的更新的话，Virtual DOM 将会花费更多的时间处理计算的工作。所以，如果你有一个 DOM 节点相对较少页面，用 Virtual DOM，它实际上有可能会更慢。但对于大多数单页面应用，这应该都会更快。</li></ul><h2 id="错误观念纠正" tabindex="-1"><a class="header-anchor" href="#错误观念纠正"><span>错误观念纠正</span></a></h2><p>很多人认为 Virtual DOM 最大的优势是 diff 算法，减少 JavaScript 操作真实 DOM 带来的性能消耗。</p><p>虽然这是 Virtual DOM 带来的一个优势，但并不是全部。Virtual DOM 最大的优势在于抽象了原本的渲染过程，实现了跨平台的能力，而不仅仅局限于浏览器的 DOM，可以是安卓和 IOS 的原生组件，可以是近期很火热的小程序，也可以是各种 GUI。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li><a href="https://cloud.tencent.com/developer/article/1560877" target="_blank" rel="noopener noreferrer">从 React 历史的长河里聊虚拟DOM及其价值</a>，本文绝大多数内容 copy 于此。</li><li><a href="https://segmentfault.com/a/1190000013365426" target="_blank" rel="noopener noreferrer">React 是怎样炼成的</a></li></ul>', 22)),
    createVNode(_component_global_config)
  ]);
}
const virtualDom_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "virtual-dom.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/html-dom/virtual-dom.html","title":"Virtual DOM","lang":"en-US","frontmatter":{"description":"Virtual DOM 什么是 Virtual DOM 本质上，Virtual DOM 就是 JavaScript 对象，这个对象就是对 DOM 更加轻量级的描述。 为什么要使用 Virtual DOM DOM 是复杂的，对它的操作（尤其是查询和创建）是非常慢、非常耗费资源的。仅创建一个空白的div，其实例属性就达到 246 个。 对于 DOM 这么多...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/html-dom/virtual-dom.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Virtual DOM"}],["meta",{"property":"og:description","content":"Virtual DOM 什么是 Virtual DOM 本质上，Virtual DOM 就是 JavaScript 对象，这个对象就是对 DOM 更加轻量级的描述。 为什么要使用 Virtual DOM DOM 是复杂的，对它的操作（尤其是查询和创建）是非常慢、非常耗费资源的。仅创建一个空白的div，其实例属性就达到 246 个。 对于 DOM 这么多..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-12-22T06:23:30.000Z"}],["meta",{"property":"article:modified_time","content":"2021-12-22T06:23:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Virtual DOM\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-12-22T06:23:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"什么是 Virtual DOM","slug":"什么是-virtual-dom","link":"#什么是-virtual-dom","children":[]},{"level":2,"title":"为什么要使用 Virtual DOM","slug":"为什么要使用-virtual-dom","link":"#为什么要使用-virtual-dom","children":[]},{"level":2,"title":"Virtual DOM 的作用","slug":"virtual-dom-的作用","link":"#virtual-dom-的作用","children":[]},{"level":2,"title":"Virtual DOM 的缺点","slug":"virtual-dom-的缺点","link":"#virtual-dom-的缺点","children":[]},{"level":2,"title":"错误观念纠正","slug":"错误观念纠正","link":"#错误观念纠正","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1577702348000,"updatedTime":1640154210000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":4.27,"words":1281},"filePathRelative":"browser-env/html-dom/virtual-dom.md","localizedDate":"December 30, 2019","autoDesc":true}');
export {
  virtualDom_html as comp,
  data
};
