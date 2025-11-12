import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[14] || (_cache[14] = createBaseVNode("h1", {
      id: "vue-router-原理",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#vue-router-原理"
      }, [
        createBaseVNode("span", null, "vue-router 原理")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#history-变化机制" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("history 变化机制")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#新增历史记录" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("新增历史记录")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#历史记录不变的情况" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("历史记录不变的情况")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#历史记录栈的更改" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("历史记录栈的更改")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#历史记录栈的销毁" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("历史记录栈的销毁")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#spa-single-page-web-application" }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("SPA（Single Page Web Application）")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#优点" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("优点")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#缺点" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode("缺点")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#url-路径里的" }, {
                default: withCtx(() => _cache[8] || (_cache[8] = [
                  createTextVNode("url 路径里的 #!")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#spa-实现原理" }, {
                default: withCtx(() => _cache[9] || (_cache[9] = [
                  createTextVNode("SPA 实现原理")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#父子路由切换显示" }, {
            default: withCtx(() => _cache[10] || (_cache[10] = [
              createTextVNode("父子路由切换显示")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#需求说明" }, {
                default: withCtx(() => _cache[11] || (_cache[11] = [
                  createTextVNode("需求说明")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#解决方法" }, {
            default: withCtx(() => _cache[12] || (_cache[12] = [
              createTextVNode("解决方法")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#异步路由-处理加载状态-加载失败" }, {
            default: withCtx(() => _cache[13] || (_cache[13] = [
              createTextVNode("异步路由-处理加载状态/加载失败")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[15] || (_cache[15] = createStaticVNode('<h2 id="history-变化机制" tabindex="-1"><a class="header-anchor" href="#history-变化机制"><span>history 变化机制</span></a></h2><p>导致历史记录变化的方式，主要有两种：</p><ul><li>修改 location.hash</li><li>history.pushState/popState 等</li></ul><p>以下以修改 location.hash 导致历史记录变化为例，详细说明历史记录栈的变化情况</p><h3 id="新增历史记录" tabindex="-1"><a class="header-anchor" href="#新增历史记录"><span>新增历史记录</span></a></h3><ul><li>修改 location.hash 属性会更新显示在地址栏中的 URL，同时会在浏览器的历史记录栈中添加一条记录</li><li>修改 location.hash，浏览器只会滚动到页面相应位置，不会重新加载网页</li></ul><h3 id="历史记录不变的情况" tabindex="-1"><a class="header-anchor" href="#历史记录不变的情况"><span>历史记录不变的情况</span></a></h3><ul><li>刷新页面不会产生新的一条历史记录</li><li>刷新页面不会更改已有的历史记录栈（不管是当前页面之前还是之后的历史记录点），</li><li>点击回退和前进按钮或者调用 history 的 back、forward、go方法产生的后退、前进操作，不会更改历史记录栈，只会影响当面页面呈现哪一条历史记录</li></ul><h3 id="历史记录栈的更改" tabindex="-1"><a class="header-anchor" href="#历史记录栈的更改"><span>历史记录栈的更改</span></a></h3><p>如果当前页面呈现的历史记录点不是历史记录栈里最后一条历史记录，则在新增历史记录时，会先销毁该历史记录点之后的历史记录，再新增一条历史记录。示例如下：</p><ul><li>假设现有历史记录栈为： #1 -&gt; #2 -&gt; #3 -&gt; #4，当前在 #4，此刻 history.length = 4</li><li>回退一次到 #3 ，此刻 history.length = 4（即回退时历史记录不会更改）</li><li>再回退一次到 #2 ，此刻 history.length = 4（即回退时历史记录不会更改）</li><li>再回退一次到 #1 ，此刻 history.length = 4（即回退时历史记录不会更改）</li><li>再前进一次到 #2 ，此刻 history.length = 4（即前进时历史记录不会更改）</li><li>可以直接修改地址栏里的 url，修改 hash 为 #5，此刻历史记录将变为：#1 -&gt; #2 -&gt; #5，且 history.length = 3。这说明在 #2 添加一条新的历史记录时，原先历史记录里位于 #2 之后的 #3、#4 都会被删除，并会在 #2 之后添加新的历史记录 #5</li></ul><h3 id="历史记录栈的销毁" tabindex="-1"><a class="header-anchor" href="#历史记录栈的销毁"><span>历史记录栈的销毁</span></a></h3><ul><li>只有关闭页面才会销毁整个历史记录栈</li></ul><h2 id="spa-single-page-web-application" tabindex="-1"><a class="header-anchor" href="#spa-single-page-web-application"><span>SPA（Single Page Web Application）</span></a></h2><p>单页 Web 应用，就是只有一张 Web 页面的应用。SPA 是加载单个 HTML 页面并在用户与应用程序交互时动态更新该页面的 Web 应用程序。浏览器一开始会加载必需的HTML、CSS 和 JavaScript，所有的操作都在这张页面上完成，都由 JavaScript 来控制。因此，对单页应用来说模块化的开发和设计显得相当重要。</p><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3><ul><li>避免了页面跳转（切换），就没有白屏阻塞，</li><li>因而提供了更加流畅的用户体验（让用户在web app感受native app的速度和流畅）</li><li>因而可以节省原生（Android和 iOS）APP 的开发成本（如果应用于移动端开发）</li><li>而且可以提高发布效率，无需每次安装更新包（如果应用于移动端开发）</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h3><ul><li>效果和性能与原生还有较大差距</li><li>各版本浏览器兼容性不一致</li><li>业务随着代码量增加而增加，不利于首屏优化</li><li>不利于搜索引擎抓取</li></ul><h3 id="url-路径里的" tabindex="-1"><a class="header-anchor" href="#url-路径里的"><span>url 路径里的 <code>#!</code></span></a></h3><p>由于我们在处理单页应用的时候页面是不刷新的，所以会导致我们的网页记录和内容很难被搜索引擎抓取到。搜索引擎抓取页面首先要遵循http协议，可是#不是协议内的内容。而实际上也是这样，我们没有见过搜索引擎的搜索结果中，哪一条记录可以快速定位到网页内的某个位置的。解决的方法是用 #!号代替#号，因为谷歌会抓取带有#!的URL。（Google规定，如果你希望Ajax生成的内容被浏览引擎读取，那么URL中可以使用”#!”(这种URL在一般页面一般不会产生定位效果)），这样我们可以解决ajax的不被搜索引擎抓取的问题。在vueJs里面，我们可以看到作者就是这样做的。</p><h3 id="spa-实现原理" tabindex="-1"><a class="header-anchor" href="#spa-实现原理"><span>SPA 实现原理</span></a></h3><ul><li>监听地址栏中 hash 变化驱动界面变化</li><li>用 pushstate 记录浏览器的历史，驱动界面变化</li><li>直接在界面用普通事件驱动界面变化</li></ul><p>前两种方式较为普遍，因为它们的变化记录浏览器会保存在history中，可以通过回退/前进按钮找回，或者history对象中的方法控制。最后一种方法是用普通事件驱动的，没有改变浏览器的history对象，所以一旦用户按了返回按钮将会退到浏览器的主界面。所以，一般采用前两种方式。值得一提的是，在不支持hash监听和pushsate变化的浏览器中可以考虑用延时函数，不停得去监听浏览器地址栏中url发生的变化，从而驱动界面变化。</p><p>Reference</p><ul><li><a href="http://www.ruanyifeng.com/blog/2011/03/url_hash.html" target="_blank" rel="noopener noreferrer">阮一峰-URL 的井号</a></li><li><a href="http://www.admin5.com/article/20130614/509297.shtml" target="_blank" rel="noopener noreferrer">搜索引擎会不会抓取带#号(哈希值)的URL</a></li></ul><h2 id="父子路由切换显示" tabindex="-1"><a class="header-anchor" href="#父子路由切换显示"><span>父子路由切换显示</span></a></h2><h3 id="需求说明" tabindex="-1"><a class="header-anchor" href="#需求说明"><span>需求说明</span></a></h3><ul><li>在一些后台管理页面，常常涉及到列表页和详情页，列表页和详情页看起来是独立的页面，没有相同的元素。</li><li>列表页包含查询条件和查询结果。查询条件可能有时间范围、关键字、下拉选择框等等条件，查询结果是以表格呈现的列表。</li><li>详情页是每一条查询结果的详细信息，点击列表页每一条查询结果的“详情”进入详情页。</li></ul><p>需求是，经过复杂的查询条件查出结果，进入详情页后返回，可以复用那些查询条件，而不需要重新输入查询条件。</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h2><ol><li><p>情况一，列表页和详情页是同级路由：由列表页进入详情页时，列表页会被销毁，导致从详情页返回到列表页时需要重新填写查询条件重新查询，费时费力。此时，如果在列表页和详情页这个 router-view 上添加 keep-alive，可以保证列表页和详情页在切换时不被销毁，但是问题是不同查询结果详情页面可能不一样，如果 keep-alive 了需要将不一样的地方删除，无法很好的解决问题。</p></li><li><p>（推荐方法）情况二，将详情页设置为列表页的子路由，父子路由都不添加 keep-alive。点击“详情”进入详情页子路由时，将列表页包含框隐藏掉，此时只显示详情页。返回时，列表页包含框显示，子路由自动销毁，如此可以保证查询条件等保持不变。</p></li></ol><p>HMLT 如下所示。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> v-show</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;showChildRouter&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;list-ctn&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">router-view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">router-view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步路由-处理加载状态-加载失败" tabindex="-1"><a class="header-anchor" href="#异步路由-处理加载状态-加载失败"><span>异步路由-处理加载状态/加载失败</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> AsyncComponent</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ({</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 需要加载的组件 (应该是一个 `Promise` 对象)</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  component</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#61AFEF;"> import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;./MyComponent.vue&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 异步组件加载时使用的组件</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  loading</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> LoadingComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 加载失败时使用的组件</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  error</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> ErrorComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 展示加载时组件的延时时间。默认值是 200 (毫秒)</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  delay</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 如果提供了超时时间且组件加载也超时了，</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 则使用加载失败时使用的组件。默认值是：`Infinity`</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  timeout</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3000</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意如果你希望在 Vue Router 的路由组件中使用上述语法的话，你必须使用 Vue Router 2.4.0+ 版本。</p></blockquote><p>尽管 Vue.js 官网已经声称 Vue Router 2.4.0+ 已经支持带有加载状态的异步路由，但是亲测在<code>vue-router</code> 3.0.2 及以前版本，都没有实现异步路由处理加载状态/加载失败的功能。但是通过 hack 的方式，可以实现这一功能。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// router.js</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> lazyLoadView</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">AsyncView</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> AsyncHandler</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ({</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        component</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> AsyncView</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        loading</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> LoadingComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        error</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> ErrorComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        delay</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        timeout</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 200</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    });</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Promise</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">resolve</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        functional</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        render</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">AsyncHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    });</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> router</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Router</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    routes</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">             path</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;/video&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">             name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> ROUTER_NAME_VIDEO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">             component</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> lazyLoadView</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* webpackChunkName: &#39;video&#39; */</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;./modules/Video&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ]</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> router</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 39)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/vue/vue-series/vue-router/","title":"vue-router 原理","lang":"en-US","frontmatter":{"description":"vue-router 原理 history 变化机制 导致历史记录变化的方式，主要有两种： 修改 location.hash history.pushState/popState 等 以下以修改 location.hash 导致历史记录变化为例，详细说明历史记录栈的变化情况 新增历史记录 修改 location.hash 属性会更新显示在地址栏中的 U...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/vue/vue-series/vue-router/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"vue-router 原理"}],["meta",{"property":"og:description","content":"vue-router 原理 history 变化机制 导致历史记录变化的方式，主要有两种： 修改 location.hash history.pushState/popState 等 以下以修改 location.hash 导致历史记录变化为例，详细说明历史记录栈的变化情况 新增历史记录 修改 location.hash 属性会更新显示在地址栏中的 U..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T18:08:13.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T18:08:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue-router 原理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T18:08:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"history 变化机制","slug":"history-变化机制","link":"#history-变化机制","children":[{"level":3,"title":"新增历史记录","slug":"新增历史记录","link":"#新增历史记录","children":[]},{"level":3,"title":"历史记录不变的情况","slug":"历史记录不变的情况","link":"#历史记录不变的情况","children":[]},{"level":3,"title":"历史记录栈的更改","slug":"历史记录栈的更改","link":"#历史记录栈的更改","children":[]},{"level":3,"title":"历史记录栈的销毁","slug":"历史记录栈的销毁","link":"#历史记录栈的销毁","children":[]}]},{"level":2,"title":"SPA（Single Page Web Application）","slug":"spa-single-page-web-application","link":"#spa-single-page-web-application","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]},{"level":3,"title":"url 路径里的 #!","slug":"url-路径里的","link":"#url-路径里的","children":[]},{"level":3,"title":"SPA 实现原理","slug":"spa-实现原理","link":"#spa-实现原理","children":[]}]},{"level":2,"title":"父子路由切换显示","slug":"父子路由切换显示","link":"#父子路由切换显示","children":[{"level":3,"title":"需求说明","slug":"需求说明","link":"#需求说明","children":[]}]},{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]},{"level":2,"title":"异步路由-处理加载状态/加载失败","slug":"异步路由-处理加载状态-加载失败","link":"#异步路由-处理加载状态-加载失败","children":[]}],"git":{"createdTime":1533973348000,"updatedTime":1623694093000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":6}]},"readingTime":{"minutes":6.81,"words":2044},"filePathRelative":"vue/vue-series/vue-router/README.md","localizedDate":"August 11, 2018","autoDesc":true}');
export {
  index_html as comp,
  data
};
