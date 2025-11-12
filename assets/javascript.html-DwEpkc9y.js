import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[11] || (_cache[11] = createBaseVNode("h1", {
      id: "javascript-语言相关文章",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#javascript-语言相关文章"
      }, [
        createBaseVNode("span", null, "JavaScript 语言相关文章")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#javascript-core" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("JavaScript Core")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#typescript" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("TypeScript")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#框架" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("框架")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#vue" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("Vue")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#vue-生态" }, {
                    default: withCtx(() => _cache[4] || (_cache[4] = [
                      createTextVNode("Vue 生态")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#vue-使用技巧" }, {
                    default: withCtx(() => _cache[5] || (_cache[5] = [
                      createTextVNode("Vue 使用技巧")
                    ])),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#事件循环" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("事件循环")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#错误处理和监控" }, {
            default: withCtx(() => _cache[7] || (_cache[7] = [
              createTextVNode("错误处理和监控")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#动画" }, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("动画")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#性能" }, {
            default: withCtx(() => _cache[9] || (_cache[9] = [
              createTextVNode("性能")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#gpu-加速" }, {
            default: withCtx(() => _cache[10] || (_cache[10] = [
              createTextVNode("GPU 加速")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[12] || (_cache[12] = createStaticVNode('<h2 id="javascript-core" tabindex="-1"><a class="header-anchor" href="#javascript-core"><span>JavaScript Core</span></a></h2><p><a href="https://tech.meituan.com/2018/08/23/deep-understanding-of-jscore.html" target="_blank" rel="noopener noreferrer">深入理解JSCore</a></p><ul><li>Webkit 包含 WebCore、JavaScript Core 等模块 <ul><li>WebCore 是渲染引擎，包含 HTML Parser、CSS Parser 等</li><li>JavaScript Core 是 JS 引擎，负责解释执行 JS，包含 Lexer（词法分析）、Parser（语法分析）、LLInt 和 JIT（解释执行）</li></ul></li><li>iOS 中可以使用 JSCore 的地方有多处，比如封装在 UIWebView 中的 JSCore，封装在 WKWebView 中的 JSCore，以及系统提供的 JSCore。iOS 官方文档对JSCore 的介绍很简单，其实主要就是给 APP 提供了调用 JS 脚本的能力。</li><li>JSVirtualMachine、JSContext、JSValue <ul><li>一个 JSVirtualMachine（以下简称 JSVM）实例代表了一个自包含的 JS 运行环境，或者是一系列 JS 运行所需的资源。该类有两个主要的使用用途：一是支持并发的 JS 调用（包含把 JS 源代码编译成字节码），二是管理 JS 和 Native 之间桥对象的内存。 <ul><li>在 APP 中，我们可以运行多个 JSVM 来执行不同的任务。而且每一个 JSContext 都从属于一个 JSVM。但是需要注意的是每个 JSVM 都有自己独立的堆空间，GC 也只能处理 JSVM 内部的对象。所以说，不同的 JSVM 之间是无法传递值的。</li><li>在一个 JSVM 中，只有一条线程可以跑 JS 代码，所以我们无法使用 JSVM 进行多线程处理 JS 任务。如果我们需要多线程处理 JS 任务的场景，就需要同时生成多个 JSVM，从而达到多线程处理的目的。</li></ul></li><li>一个 JSContext 表示了一次 JS 的执行环境。我们可以通过创建一个 JSContext 去调用 JS 脚本，访问一些 JS 定义的值和函数，同时也提供了让 JS 访问 Native 对象，方法的接口。 <ul><li>每个 JSContext 都从属于一个 JSVM。我们可以通过 JSContext 的只读属性 virtualMachine 获得当前 JSContext 绑定的 JSVM。JSContext 和 JSVM 是多对一的关系，一个 JSContext 只能绑定一个JSVM，但是一个 JSVM 可以同时持有多个 JSContext。</li><li>globalObject 是当前执行 JSContext 的全局对象（例如在 WebKit 中，JSContext 的 globalObject 就是当前的 Window 对象），JSContext 只是 globalObject 的一层壳</li><li>通过 KVC（Key-Value Coding，即键值编码）的方式，可以获取当时 WebView 的 JSContext，通过 JSContext（的 evaluateScript API）可以运行一段 JS 代码</li><li>通过 KVC 的方式，可以给 JSContext 塞进去很多全局变量或者全局函数，这些全局变量和函数，实际上就是全局对象 globalObject 的属性和方法</li></ul></li><li>JSValue 实例是一个指向 JS 值的引用指针。我们可以使用 JSValue 类，在 OC 和 JS 的基础数据类型之间相互转换。同时我们也可以使用这个类，去创建包装了 Native 自定义类的 JS 对象，或者是那些由 Native 方法或者 Block 提供实现 JS 方法的 JS 对象。 <ul><li>JSCore 用 JSValue 在底层自动做了 OC 和 JS 的类型转换</li></ul></li></ul></li><li>JSExport <ul><li>实现 JSExport 协议可以开放 OC 类和它们的实例方法，类方法，以及属性给 JS 调用。 <ul><li>如果想在 JS 环境中使用 OC 中的类和对象，需要它们实现 JSExport 协议，来确定暴露给 JS 环境中的属性和方法。</li><li>每个通过 JSExport 暴露的属性和方法，在转换成 JSValue 时都会生成 Setter 和 Getter 方法，这两个方法内都是 Native 代码。</li><li>因此，当我们在 JS 里设置或调用这些 OC 暴露的属性或方法时，实际上是间接执行了 Native 的代码。</li></ul></li></ul></li></ul><h2 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript"><span>TypeScript</span></a></h2><ul><li><a href="https://segmentfault.com/a/1190000023943952" target="_blank" rel="noopener noreferrer">细数 TS 中那些奇怪的符号</a></li><li><a href="https://zhuanlan.zhihu.com/p/20297283" target="_blank" rel="noopener noreferrer">TypeScript 中的 Decorator &amp; 元数据反射：从小白到专家（部分 I）</a></li></ul><h2 id="框架" tabindex="-1"><a class="header-anchor" href="#框架"><span>框架</span></a></h2><h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue"><span>Vue</span></a></h3><h4 id="vue-生态" tabindex="-1"><a class="header-anchor" href="#vue-生态"><span>Vue 生态</span></a></h4><ul><li><a href="https://zhuanlan.zhihu.com/p/146097763" target="_blank" rel="noopener noreferrer">深入理解 Vue3 Reactivity API</a></li><li><a href="https://www.zhihu.com/question/394062839/answer/1496127786" target="_blank" rel="noopener noreferrer">如何看待 Web 开发构建工具 Vite？</a><ul><li>特性 <ul><li>不需要打包</li><li>按需编译</li></ul></li></ul></li></ul><h4 id="vue-使用技巧" tabindex="-1"><a class="header-anchor" href="#vue-使用技巧"><span>Vue 使用技巧</span></a></h4><ul><li><a href="https://mp.weixin.qq.com/s/iQwTr5T95wPflJMT87ZObg" target="_blank" rel="noopener noreferrer">揭秘 Vue.js 九个性能优化技巧</a></li></ul><h2 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环"><span>事件循环</span></a></h2><ul><li><a href="https://github.com/dt-fe/weekly/issues/264" target="_blank" rel="noopener noreferrer">精读《Tasks, microtasks, queues and schedules》</a><ul><li>文章里描述了 Tasks/Microtasks 与事件冒泡的关系，以及浏览器对此实现的不一致性</li></ul></li><li><a href="https://juejin.im/post/6844904152779210766" target="_blank" rel="noopener noreferrer">浏览器的 Event Loop 宏任务，微任务，事件冒泡</a><ul><li>文章里的“五.当 Event Loop 遇上事件冒泡”说明了事件冒泡也是个宏任务</li><li>事件冒泡的宏任务是立即加入到任务队列的，而<code>setTimeout</code>是在<code>delay</code>时间（有最小延迟时间）加入任务队列的，因此事件冒泡优先于<code>setTimeout</code></li></ul></li></ul><h2 id="错误处理和监控" tabindex="-1"><a class="header-anchor" href="#错误处理和监控"><span>错误处理和监控</span></a></h2><ul><li><a href="https://cdc.tencent.com/2018/09/13/frontend-exception-monitor-research/" target="_blank" rel="noopener noreferrer">完善的前端异常监控解决方案</a></li></ul><h2 id="动画" tabindex="-1"><a class="header-anchor" href="#动画"><span>动画</span></a></h2><ul><li><a href="https://juejin.cn/post/6914835547588395022" target="_blank" rel="noopener noreferrer">剖析 lottie-web 动画实现原理</a></li></ul><h2 id="性能" tabindex="-1"><a class="header-anchor" href="#性能"><span>性能</span></a></h2><ul><li><a href="https://mp.weixin.qq.com/s/d-v7QgmP9aGnQr2nbpfzjQ" target="_blank" rel="noopener noreferrer">前端早读课 - 【第1920期】如何监控网页的卡顿？</a></li><li><a href="https://mp.weixin.qq.com/s/EscBLM3hAoCrYn9r9zFmng" target="_blank" rel="noopener noreferrer">前端早读课 - 【第1915期】如何监控网页崩溃？</a></li></ul><h2 id="gpu-加速" tabindex="-1"><a class="header-anchor" href="#gpu-加速"><span>GPU 加速</span></a></h2><ul><li><a href="http://www.chromium.org/developers/design-documents/gpu-accelerated-compositing-in-chrome?spm=taofed.bloginfo.blog.1.68c75ac8ZPJVT1" target="_blank" rel="noopener noreferrer">【官方】Chrome 硬件加速合成的原理</a></li><li><a href="https://sinaad.github.io/xfe/2016/05/10/gpu-accelerated-compositing-in-chrome/" target="_blank" rel="noopener noreferrer">【中文翻译】Chrome 硬件加速合成的原理</a></li></ul>', 21)),
    createVNode(_component_global_config)
  ]);
}
const javascript_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "javascript.html.vue"]]);
const data = JSON.parse('{"path":"/articles/good-articles/javascript.html","title":"JavaScript 语言相关文章","lang":"en-US","frontmatter":{"description":"JavaScript 语言相关文章 JavaScript Core 深入理解JSCore Webkit 包含 WebCore、JavaScript Core 等模块 WebCore 是渲染引擎，包含 HTML Parser、CSS Parser 等 JavaScript Core 是 JS 引擎，负责解释执行 JS，包含 Lexer（词法分析）、Par...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/articles/good-articles/javascript.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"JavaScript 语言相关文章"}],["meta",{"property":"og:description","content":"JavaScript 语言相关文章 JavaScript Core 深入理解JSCore Webkit 包含 WebCore、JavaScript Core 等模块 WebCore 是渲染引擎，包含 HTML Parser、CSS Parser 等 JavaScript Core 是 JS 引擎，负责解释执行 JS，包含 Lexer（词法分析）、Par..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-14T11:14:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-14T11:14:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript 语言相关文章\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-14T11:14:57.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"JavaScript Core","slug":"javascript-core","link":"#javascript-core","children":[]},{"level":2,"title":"TypeScript","slug":"typescript","link":"#typescript","children":[]},{"level":2,"title":"框架","slug":"框架","link":"#框架","children":[{"level":3,"title":"Vue","slug":"vue","link":"#vue","children":[]}]},{"level":2,"title":"事件循环","slug":"事件循环","link":"#事件循环","children":[]},{"level":2,"title":"错误处理和监控","slug":"错误处理和监控","link":"#错误处理和监控","children":[]},{"level":2,"title":"动画","slug":"动画","link":"#动画","children":[]},{"level":2,"title":"性能","slug":"性能","link":"#性能","children":[]},{"level":2,"title":"GPU 加速","slug":"gpu-加速","link":"#gpu-加速","children":[]}],"git":{"createdTime":1717594726000,"updatedTime":1718363697000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":2}]},"readingTime":{"minutes":4.19,"words":1257},"filePathRelative":"articles/good-articles/javascript.md","localizedDate":"June 5, 2024","autoDesc":true}');
export {
  javascript_html as comp,
  data
};
