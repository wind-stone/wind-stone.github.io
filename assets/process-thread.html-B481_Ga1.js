import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[15] || (_cache[15] = createBaseVNode("h1", {
      id: "多进程和-js-单线程",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#多进程和-js-单线程"
      }, [
        createBaseVNode("span", null, "多进程和 JS 单线程")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#参考文档" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("参考文档")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#进程-vs-线程" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("进程 VS 线程")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#早期浏览器是单进程的" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("早期浏览器是单进程的")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#现代浏览器是多进程的" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("现代浏览器是多进程的")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#浏览器包含哪些进程" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("浏览器包含哪些进程")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#浏览器多进程的优势" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("浏览器多进程的优势")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#浏览器渲染进程-多线程" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("浏览器渲染进程，多线程")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#浏览器内核中各个线程的关系" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode("浏览器内核中各个线程的关系")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#gui-渲染线程与-js-引擎线程互斥" }, {
                    default: withCtx(() => _cache[8] || (_cache[8] = [
                      createTextVNode("GUI 渲染线程与 JS 引擎线程互斥")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#js-阻塞页面渲染" }, {
                    default: withCtx(() => _cache[9] || (_cache[9] = [
                      createTextVNode("JS 阻塞页面渲染")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#web-worker" }, {
                    default: withCtx(() => _cache[10] || (_cache[10] = [
                      createTextVNode("Web Worker")
                    ])),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#定时器线程" }, {
                default: withCtx(() => _cache[11] || (_cache[11] = [
                  createTextVNode("定时器线程")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#settimeout-模拟-setinterval" }, {
                    default: withCtx(() => _cache[12] || (_cache[12] = [
                      createTextVNode("setTimeout 模拟 setInterval")
                    ])),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#疑问" }, {
            default: withCtx(() => _cache[13] || (_cache[13] = [
              createTextVNode("疑问")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#浏览器里的-v8-引擎是个单独的线程吗" }, {
                default: withCtx(() => _cache[14] || (_cache[14] = [
                  createTextVNode("浏览器里的 V8 引擎是个单独的线程吗？")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[16] || (_cache[16] = createStaticVNode('<h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2><ul><li><a href="https://segmentfault.com/a/1190000012925872" target="_blank" rel="noopener noreferrer">从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理</a></li><li><a href="https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg" target="_blank" rel="noopener noreferrer">How Blink works</a></li><li><a href="https://docs.google.com/document/d/11N2WTV3M0IkZ-kQlKWlBcwkOkKTCuLXGVNylK5E2zvc" target="_blank" rel="noopener noreferrer">Blink Scheduler</a></li><li><a href="https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef" target="_blank" rel="noopener noreferrer">JavaScript V8 Engine Explained</a></li></ul><h2 id="进程-vs-线程" tabindex="-1"><a class="header-anchor" href="#进程-vs-线程"><span>进程 VS 线程</span></a></h2><p>线程是不能单独存在的，它是由进程来启动和管理。一个进程就是一个程序的运行实例。详细解释就是，启动一个程序的时候，操作系统会为该程序创建一块内存，用来存放代码、运行中的数据和一个执行任务的主线程，我们把这样的一个运行环境叫进程。</p><p>进程和线程的关系有如下几个特点：</p><ul><li>进程中的任意一线程执行出错，都会导致整个进程的崩溃。</li><li>线程之间共享进程中的数据。</li><li>当一个进程关闭之后，操作系统会回收进程所占用的内存。</li><li>进程之间的内容相互隔离。</li></ul><p>进程内使用多线程并行处理，可以大大提升性能。</p><div class="hint-container tip"><p class="hint-container-title">作者注</p><p>采用类比的方式，可以将进程理解为一个家庭，同一个户口本上的所有人组成了这个家庭，家庭里的每个人都是一个线程，而户口本上的户主就是主线程。</p></div><h2 id="早期浏览器是单进程的" tabindex="-1"><a class="header-anchor" href="#早期浏览器是单进程的"><span>早期浏览器是单进程的</span></a></h2><p>在 2007 年之前，市面上浏览器都是单进程的。单进程浏览器是指浏览器的所有功能模块都是运行在同一个进程里，这些模块包含了网络、插件、JavaScript 运行环境、渲染引擎和页面等。单进程浏览器存在以下问题：</p><ul><li>不稳定：插件、渲染引擎等的崩溃会引起整个浏览器的崩溃。</li><li>不流畅：渲染引擎、JavaScript 执行环境、插件运行在同一个线程中，意味着同一时刻只能有一个模块可以执行，当一个模块长时间运行时，其他模块就无法运行。</li><li>不安全</li></ul><p>详情请见：<a href="https://time.geekbang.org/column/article/113513" target="_blank" rel="noopener noreferrer">浏览器工作原理与实践 - 01 | Chrome架构：仅仅打开了1个页面，为什么有4个进程？ - 单进程浏览器时代</a></p><h2 id="现代浏览器是多进程的" tabindex="-1"><a class="header-anchor" href="#现代浏览器是多进程的"><span>现代浏览器是多进程的</span></a></h2><p>现代浏览器解决了单进程浏览器的问题，进化为多进程浏览器。</p><ul><li>浏览器是多进程的</li><li>浏览器之所以能够运行，是因为系统给它的进程分配了资源（cpu、内存）</li><li>简单点理解，每打开一个 Tab 页，就相当于创建了一个独立的浏览器进程</li></ul><h3 id="浏览器包含哪些进程" tabindex="-1"><a class="header-anchor" href="#浏览器包含哪些进程"><span>浏览器包含哪些进程</span></a></h3><p>浏览器主要包含这些进程：</p><ul><li>浏览器主进程（Browser Process）：浏览器的主进程负责协调、主控，仅有一个。作用有 <ul><li>负责各个页面的管理，创建和销毁其他进程。</li><li>负责浏览器界面显示，与用户交互。如前进，后退等。</li><li>将渲染进程得到的内存中的 Bitmap，绘制到用户界面上。</li><li>提供存储功能。</li></ul></li><li>渲染进程（Renderer Process），该进程内部是多线程的。 <ul><li>核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，包含如下子线程 <ul><li>预解析线程 <ul><li>渲染进程接收到 HTML 内容之后会开启预解析线程，分析 HTML 内容里包含的 JavaScript、CSS 等文件，并提前下载这些文件</li><li>BTW，若是想验证预解析线程的功能，可以找一个存在多个外链 JS 文件里的页面： <ul><li>打开页面后，将第一个 JS 文件通过 Charles 等工具阻塞住</li><li>查看 Network，会发现在第一个 JS 阻塞时，之后的 JS 文件已经加载完成</li></ul></li></ul></li><li>页面渲染（GUI 线程）</li><li>脚本执行（JS 引擎线程，比如 V8）</li><li>事件处理（事件触发线程）</li><li>定时计时（定时器线程）</li><li>异步请求（异步 HTTP 请求线程）</li><li>IO 线程: 负责与其他进程 IPC 进行通信，比如接收用户输入事件、网络事件、设备相关等事件</li><li>光栅化线程（池）</li><li>合成线程</li></ul></li><li>渲染引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中。</li><li>默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程，互不影响。</li><li>出于安全考虑，<strong>渲染进程都是运行在沙箱模式下</strong>。</li></ul></li><li>网络进程（Network Process） <ul><li>负责网络资源加载。</li><li>以前是作为浏览器主进程的一个模块，后来独立出来成为单独的进程。</li></ul></li><li>GPU 进程（GPU Process）：最多一个，用于 3D 绘制等。</li><li>插件进程（Plugin Process） <ul><li>负责插件的运行。每种类型的插件对应一个进程，仅当使用该插件时才创建。</li><li>因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响。</li></ul></li></ul><p>需要注意的是，这些进程中，浏览器主进程、网络进程、GPU 进程都是所有 Tab 共用的。</p><h3 id="浏览器多进程的优势" tabindex="-1"><a class="header-anchor" href="#浏览器多进程的优势"><span>浏览器多进程的优势</span></a></h3><p>相比于单进程浏览器，多进程有如下优点：</p><ul><li>避免单个页面 crash 影响整个浏览器</li><li>避免第三方插件 crash 影响整个浏览器</li><li>多进程充分利用多核优势</li><li>方便使用沙盒模型隔离插件等进程，提高浏览器稳定性</li></ul><p>但是，内存等资源消耗也会更大。</p><h3 id="浏览器渲染进程-多线程" tabindex="-1"><a class="header-anchor" href="#浏览器渲染进程-多线程"><span>浏览器渲染进程，多线程</span></a></h3><p>PS: 在本文中，浏览器渲染进程 = Renderer 进程。</p><p>浏览器渲染进程是多线程的，包括的线程主要有：</p><ul><li>GUI 渲染线程 <ul><li>负责渲染浏览器界面，解析 HTML，CSS，构建 DOM 树和 RenderObject 树，布局和绘制等。</li><li>当界面需要重绘<code>repaint</code>或由于某种操作引发回流<code>reflow</code>时，该线程就会执行</li><li>注意，GUI 渲染线程与 JS 引擎线程是互斥的，当 JS 引擎执行时 GUI 线程会被挂起（相当于被冻结了），GUI 更新会被保存在一个队列中等到 JS 引擎空闲时立即被执行。</li></ul></li><li>JS 引擎线程 <ul><li>也称为 JS 内核，负责处理 Javascript 脚本程序，例如 V8 引擎</li><li>JS 引擎线程负责解析 Javascript 脚本，运行代码。</li><li>JS 引擎一直等待着任务队列中任务的到来，然后加以处理，一个 Tab 页（渲染进程）中无论什么时候都只有一个 JS 线程在运行 JS 程序</li><li>同样注意，GUI 渲染线程与 JS 引擎线程是互斥的，所以如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。</li></ul></li><li>事件触发线程 <ul><li>归属于浏览器而不是 JS 引擎，用来控制事件循环（可以理解，JS 引擎自己都忙不过来，需要浏览器另开线程协助）</li><li>当 JS 引擎执行代码块如<code>setTimeout</code>时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX 异步请求等），会将对应任务添加到事件线程中</li><li>当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待 JS 引擎的处理</li><li>注意，由于 JS 的单线程关系，所以这些待处理队列中的事件都得排队等待 JS 引擎处理（当 JS 引擎空闲时才会去执行）</li></ul></li><li>定时触发器线程 <ul><li>传说中的<code>setInterval</code>与<code>setTimeout</code>所在线程</li><li>浏览器定时计数器并不是由 JavaScript 引擎计数的,（因为 JavaScript 引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确）</li><li>因此通过单独线程来计时并触发定时（计时完毕后，添加到事件队列中，等待 JS 引擎空闲后执行）</li><li>注意，W3C 在 HTML 标准中规定，规定要求<code>setTimeout</code>中低于<code>4ms</code>的时间间隔算为<code>4ms</code>。</li></ul></li><li>异步 http 请求线程 <ul><li>在 XMLHttpRequest 在连接后是通过浏览器新开一个线程请求</li><li>将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中。再由 JavaScript 引擎执行。</li></ul></li></ul><h3 id="浏览器内核中各个线程的关系" tabindex="-1"><a class="header-anchor" href="#浏览器内核中各个线程的关系"><span>浏览器内核中各个线程的关系</span></a></h3><p>浏览器被划分为浏览器内核和渲染内核两个核心模块，其中浏览器内核是由网络进程、浏览器主进程和 GPU 进程组成的，渲染内核就是渲染进程。</p><h4 id="gui-渲染线程与-js-引擎线程互斥" tabindex="-1"><a class="header-anchor" href="#gui-渲染线程与-js-引擎线程互斥"><span>GUI 渲染线程与 JS 引擎线程互斥</span></a></h4><p>JavaScript 是可操纵 DOM 的，如果在修改这些元素属性的同时去渲染界面（即 JS 线程和 GUI 线程同时运行），那么渲染线程前后获得的元素数据就可能不一致了。因此为了防止渲染出现不可预期的结果，浏览器设置 GUI 渲染线程与 JS 引擎线程为互斥的关系。当 JS 引擎线程执行时，GUI 线程会被挂起。GUI 更新则会被保存在一个队列中等到 JS 引擎线程空闲时立即被执行。</p><h4 id="js-阻塞页面渲染" tabindex="-1"><a class="header-anchor" href="#js-阻塞页面渲染"><span>JS 阻塞页面渲染</span></a></h4><p>从上述的互斥关系，可以推导出，JS 如果执行时间过长就会阻塞页面渲染。</p><p>譬如，假设 JS 引擎正在进行巨量的计算，此时就算 GUI 有更新，也会被保存到队列中，等待 JS 引擎空闲后执行。然后，由于巨量计算，所以 JS 引擎很可能很久很久后才能空闲，自然会感觉到巨卡无比。</p><p>所以，要尽量避免 JS 执行时间过长，这样就会造成页面的渲染不连贯，导致页面渲染阻塞的感觉。</p><h4 id="web-worker" tabindex="-1"><a class="header-anchor" href="#web-worker"><span>Web Worker</span></a></h4><p>HTML5 支持 Web Worker，创建 Web Worker 时，JS 引擎线程会想浏览器内核申请开启一个子线程，且 JS 引擎线程与 Web Worker 线程通过特定的方式通信，比如 postMessage API。</p><p>因此，若是有非常耗时的工作，需要单独开启一个 Web Worker 线程，Web Worker 线程不会影响 JS 引擎线程，等到计算出结果后，将结果通信给 JS 引擎线程。</p><h3 id="定时器线程" tabindex="-1"><a class="header-anchor" href="#定时器线程"><span>定时器线程</span></a></h3><p>当使用<code>setTimeout</code>和<code>setInterval</code>时，就需要定时器线程计时，计时完成后，就将事件推入到事件触发线程的任务队列里。</p><p>为什么不是 JS 引擎计时呢？因为 JS 引擎是单线程的，若是 JS 引擎线程处于阻塞状态，就会影响计时的准确，因此需要单独开一个定时器线程来计时。</p><h4 id="settimeout-模拟-setinterval" tabindex="-1"><a class="header-anchor" href="#settimeout-模拟-setinterval"><span>setTimeout 模拟 setInterval</span></a></h4><p><code>setTimeout</code>模拟<code>setInterval</code>的效果，与直接使用<code>setInterval</code>是有区别的。</p><p>每次<code>setTimeout</code>计时到达后就会加入任务队列等待执行，执行结束后会继续添加<code>setTimeout</code>来模拟<code>setInterval</code>，因此，相邻两次<code>setTimeout</code>的时间间隔为单次<code>setTimeout</code>回调函数的执行时间 + <code>setTimeout</code>的定时时间（忽略在任务队列的等待时间）。</p><p>而<code>setInterval</code>是每次都按精确的定时，隔一段时间向任务队列加入一个事件（回调）。若是 JS 引擎一直阻塞，在一段时间内任务队列里可能存在在多个连续的<code>setInterval</code>回调，等到 JS 引擎空闲时，会将任务队列里的这些回调全部取出并执行，但是需要注意的是，连续的<code>setInterval</code>回调只会执行一次。</p><p>若是 JS 引擎执行正常，不出现阻塞的情况，正常使用<code>setInterval</code>，两次<code>setInterval</code>回调的间隔时间也比两次<code>setTimeout</code>回调的间隔时间要短一些，而短的这个时间，就是<code>setTimeout</code>回调执行的时间。</p><h2 id="疑问" tabindex="-1"><a class="header-anchor" href="#疑问"><span>疑问</span></a></h2><h3 id="浏览器里的-v8-引擎是个单独的线程吗" tabindex="-1"><a class="header-anchor" href="#浏览器里的-v8-引擎是个单独的线程吗"><span>浏览器里的 V8 引擎是个单独的线程吗？</span></a></h3><p>浏览器里的 V8 引擎不是个单独的线程，而是在渲染进程的主线程里。（待权威文档确认）</p>', 49)),
    createVNode(_component_global_config)
  ]);
}
const processThread_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "process-thread.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/browser/process-thread.html","title":"多进程和 JS 单线程","lang":"en-US","frontmatter":{"description":"多进程和 JS 单线程 参考文档 从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理 How Blink works Blink Scheduler JavaScript V8 Engine Explained 进程 VS 线程 线程是不能单独存在的，它是由进程来启动和管理。一个进程就是一个程序的运行实例。详细解释就是，启动一个程序的时候，操作系...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/browser/process-thread.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"多进程和 JS 单线程"}],["meta",{"property":"og:description","content":"多进程和 JS 单线程 参考文档 从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理 How Blink works Blink Scheduler JavaScript V8 Engine Explained 进程 VS 线程 线程是不能单独存在的，它是由进程来启动和管理。一个进程就是一个程序的运行实例。详细解释就是，启动一个程序的时候，操作系..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2022-03-31T02:03:54.000Z"}],["meta",{"property":"article:modified_time","content":"2022-03-31T02:03:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多进程和 JS 单线程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-03-31T02:03:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]},{"level":2,"title":"进程 VS 线程","slug":"进程-vs-线程","link":"#进程-vs-线程","children":[]},{"level":2,"title":"早期浏览器是单进程的","slug":"早期浏览器是单进程的","link":"#早期浏览器是单进程的","children":[]},{"level":2,"title":"现代浏览器是多进程的","slug":"现代浏览器是多进程的","link":"#现代浏览器是多进程的","children":[{"level":3,"title":"浏览器包含哪些进程","slug":"浏览器包含哪些进程","link":"#浏览器包含哪些进程","children":[]},{"level":3,"title":"浏览器多进程的优势","slug":"浏览器多进程的优势","link":"#浏览器多进程的优势","children":[]},{"level":3,"title":"浏览器渲染进程，多线程","slug":"浏览器渲染进程-多线程","link":"#浏览器渲染进程-多线程","children":[]},{"level":3,"title":"浏览器内核中各个线程的关系","slug":"浏览器内核中各个线程的关系","link":"#浏览器内核中各个线程的关系","children":[]},{"level":3,"title":"定时器线程","slug":"定时器线程","link":"#定时器线程","children":[]}]},{"level":2,"title":"疑问","slug":"疑问","link":"#疑问","children":[{"level":3,"title":"浏览器里的 V8 引擎是个单独的线程吗？","slug":"浏览器里的-v8-引擎是个单独的线程吗","link":"#浏览器里的-v8-引擎是个单独的线程吗","children":[]}]}],"git":{"createdTime":1553151906000,"updatedTime":1648692234000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":2}]},"readingTime":{"minutes":10.12,"words":3035},"filePathRelative":"browser-env/browser/process-thread.md","localizedDate":"March 21, 2019","autoDesc":true}');
export {
  processThread_html as comp,
  data
};
