import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[8] || (_cache[8] = createBaseVNode("h1", {
      id: "web-components",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#web-components"
      }, [
        createBaseVNode("span", null, "web components")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#背景" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("背景")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#详细内容" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("详细内容")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#template" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("template")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#custom-element" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("Custom Element")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#shadow-dom" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("Shadow DOM")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#css-contain-属性" }, {
                    default: withCtx(() => _cache[5] || (_cache[5] = [
                      createTextVNode("CSS contain 属性")
                    ])),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#html-import" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("HTML Import")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#总结" }, {
            default: withCtx(() => _cache[7] || (_cache[7] = [
              createTextVNode("总结")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[9] || (_cache[9] = createStaticVNode('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>组件框架目前无序、缺乏标准以及低效复用方面的问题需要通过组件标准化来解决，而 Web Components 则是标准化的一个很好的选择。</p><p>Web Components 的标准化只规范接口，而底层的实现是完全自由的，自由到你可以使用 Web 技术来实现也可以使用 Native技术。</p><p>Reference: <a href="http://fex.baidu.com/blog/2014/05/web-components-future-oriented/" target="_blank" rel="noopener noreferrer">http://fex.baidu.com/blog/2014/05/web-components-future-oriented/</a></p><h2 id="详细内容" tabindex="-1"><a class="header-anchor" href="#详细内容"><span>详细内容</span></a></h2><h3 id="template" tabindex="-1"><a class="header-anchor" href="#template"><span>template</span></a></h3><p><a href="https://www.html5rocks.com/en/tutorials/webcomponents/template/" target="_blank" rel="noopener noreferrer">HTML&#39;s New Template Tag</a></p><h3 id="custom-element" tabindex="-1"><a class="header-anchor" href="#custom-element"><span>Custom Element</span></a></h3><ul><li>自定义属性默认：<code>display: inline</code></li></ul><p><a href="https://developers.google.cn/web/fundamentals/web-components/customelements" target="_blank" rel="noopener noreferrer">自定义元素 v1：可重用网络组件</a></p><h3 id="shadow-dom" tabindex="-1"><a class="header-anchor" href="#shadow-dom"><span>Shadow DOM</span></a></h3><p><a href="https://developers.google.cn/web/fundamentals/web-components/shadowdom?hl=zh-cn" target="_blank" rel="noopener noreferrer">Shadow DOM v1：独立的网络组件</a></p><h4 id="css-contain-属性" tabindex="-1"><a class="header-anchor" href="#css-contain-属性"><span>CSS contain 属性</span></a></h4><p><a href="http://www.webhek.com/post/css-contain-property.html" target="_blank" rel="noopener noreferrer">CSS性能优化新属性 contain 的语法、作用及使用场景</a></p><h3 id="html-import" tabindex="-1"><a class="header-anchor" href="#html-import"><span>HTML Import</span></a></h3><p><a href="https://www.html5rocks.com/en/tutorials/webcomponents/imports/" target="_blank" rel="noopener noreferrer">HTML Imports</a></p><p>Reference</p><ul><li><a href="http://javascript.ruanyifeng.com/htmlapi/webcomponents.html" target="_blank" rel="noopener noreferrer">阮一峰 Web Components</a></li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><ul><li>HTML template 规范 <ul><li>可以编写可复用的 HTML 模板，包括 CSS 和 JavaScript</li><li>但是模板里的样式和脚本是作用于整个页面。</li></ul></li><li>自定义元素 <ul><li>继承自 HTMLElement 类，有自己的方法和生命周期</li><li>可以往自定义元素内插入子节点，作为自定义元素的内容，就跟<code>div</code>元素的子节点一样，外部可以访问自定义元素内部的元素</li><li>外部的样式能影响自定义元素内部的元素，自定义元素内部的样式能影响外部元素</li><li>外部的脚本能访问到自定义元素内部的元素，自定义元素内部的脚本（包括自定义组件里的方法）能访问外部的元素</li><li>可以将 template 里内容作为自定义元素的子节点，但是 template 里的样式还是作用于整个页面</li><li>自定义元素一旦绑定了 shadow DOM <ul><li>就不能再作为 light DOM，就无法添加子元素了（或者添加了没有效果）</li><li>只能操作 shadow Root，将内容插入到 shadow Root 下</li></ul></li><li>自定义元素的方法内既能通过<code>this.shadowRoot</code>访问到 Shadow Dom，又能访问外部的<code>document</code>、<code>window</code>等对象</li><li>自定义元素标签也是 Light Dom 里常规的标签，默认<code>display: inline</code></li></ul></li><li>Shadow Dom <ul><li>不止自定义元素有 Shadow Dom，常规元素也有</li><li>Shadow DOM ”能够隔离 CSS 和 JavaScript</li><li>当元素绑定 Shadow Dom 后，元素的内容会作为 slot 传入到 Shadow Dom 内对应的位置，即有插槽功能</li><li>外部更改自定义组件内部 Shadow Dom 样式的方法 <ul><li>通过 CSS 变量的方式更改：自定义组件内部声明 CSS 变量，且可以动态修改 CSS 变量的值；自定义组件 Shadow Dom 内部使用 CSS 变量</li><li>通过<code>::part()</code>和<code>::theme()</code>伪选择器</li></ul></li></ul></li></ul><p>总结参考的文档来源于一组译文：</p><ol><li><a href="https://juejin.im/post/6844903807734775816" target="_blank" rel="noopener noreferrer">Web Components简介</a></li><li><a href="https://juejin.im/post/6844903813116067853" target="_blank" rel="noopener noreferrer">编写可以复用的 HTML 模板</a></li><li><a href="https://github.com/xitu/gold-miner/blob/master/TODO1/creating-a-custom-element-from-scratch.md" target="_blank" rel="noopener noreferrer">从 0 创建自定义元素</a></li><li><a href="https://github.com/xitu/gold-miner/blob/master/TODO1/encapsulating-style-and-structure-with-shadow-dom.md" target="_blank" rel="noopener noreferrer">使用 Shadow DOM 封装样式和结构</a></li></ol>', 22)),
    createVNode(_component_global_config)
  ]);
}
const webComponents_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "web-components.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/unclassified/web-components.html","title":"web components","lang":"en-US","frontmatter":{"description":"web components 背景 组件框架目前无序、缺乏标准以及低效复用方面的问题需要通过组件标准化来解决，而 Web Components 则是标准化的一个很好的选择。 Web Components 的标准化只规范接口，而底层的实现是完全自由的，自由到你可以使用 Web 技术来实现也可以使用 Native技术。 Reference: http://...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/unclassified/web-components.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"web components"}],["meta",{"property":"og:description","content":"web components 背景 组件框架目前无序、缺乏标准以及低效复用方面的问题需要通过组件标准化来解决，而 Web Components 则是标准化的一个很好的选择。 Web Components 的标准化只规范接口，而底层的实现是完全自由的，自由到你可以使用 Web 技术来实现也可以使用 Native技术。 Reference: http://..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"web components\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"详细内容","slug":"详细内容","link":"#详细内容","children":[{"level":3,"title":"template","slug":"template","link":"#template","children":[]},{"level":3,"title":"Custom Element","slug":"custom-element","link":"#custom-element","children":[]},{"level":3,"title":"Shadow DOM","slug":"shadow-dom","link":"#shadow-dom","children":[]},{"level":3,"title":"HTML Import","slug":"html-import","link":"#html-import","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1494856805000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":2.52,"words":757},"filePathRelative":"browser-env/unclassified/web-components.md","localizedDate":"May 15, 2017","autoDesc":true}');
export {
  webComponents_html as comp,
  data
};
