import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[15] || (_cache[15] = createBaseVNode("h1", {
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
          createVNode(_component_router_link, { to: "#名词中英文" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("名词中英文")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#任务队列" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("任务队列")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#任务队列里可能有哪些宏任务" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("任务队列里可能有哪些宏任务")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#定时器的实现" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("定时器的实现")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#settimeout-的实现" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("setTimeout 的实现")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#cleartimeout-的实现" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("clearTimeout 的实现")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#使用-settimeout-的一些注意事项" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode("使用 setTimeout 的一些注意事项")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#异步-xmlhttprequest-请求回调" }, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("异步 XMLHttpRequest 请求回调")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#宏任务和微任务" }, {
            default: withCtx(() => _cache[9] || (_cache[9] = [
              createTextVNode("宏任务和微任务")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#微任务" }, {
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode("微任务")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#产生微任务的方法" }, {
                    default: withCtx(() => _cache[11] || (_cache[11] = [
                      createTextVNode("产生微任务的方法")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#微任务队列的执行时机" }, {
                    default: withCtx(() => _cache[12] || (_cache[12] = [
                      createTextVNode("微任务队列的执行时机")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#为什么需要微任务" }, {
                    default: withCtx(() => _cache[13] || (_cache[13] = [
                      createTextVNode("为什么需要微任务")
                    ])),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#参考文档-1" }, {
            default: withCtx(() => _cache[14] || (_cache[14] = [
              createTextVNode("参考文档")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[16] || (_cache[16] = createStaticVNode('<h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2><ul><li><a href="https://html.spec.whatwg.org/multipage/webappapis.html#event-loops" target="_blank" rel="noopener noreferrer">WHATWG - 8.1.6 Event loops</a></li></ul><h2 id="名词中英文" tabindex="-1"><a class="header-anchor" href="#名词中英文"><span>名词中英文</span></a></h2><ul><li><code>任务</code>: <code>task</code></li><li><code>任务队列</code>: <code>task queue</code></li></ul><h2 id="任务队列" tabindex="-1"><a class="header-anchor" href="#任务队列"><span>任务队列</span></a></h2><p><code>任务队列</code>，是一批任务的集合。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>任务队列</code>是集合<a href="https://infra.spec.whatwg.org/#sets" target="_blank" rel="noopener noreferrer">set</a>，而不是队列<a href="https://infra.spec.whatwg.org/#queues" target="_blank" rel="noopener noreferrer">queue</a>，因为在<a href="https://html.spec.whatwg.org/multipage/webappapis.html#step1" target="_blank" rel="noopener noreferrer">事件循环处理模型的第一步</a>抓取的是选定的任务队列里的第一个可运行的任务，而不是以出队列方式获取的第一个任务。</p></div><p>在 WHATWG 规范里，定义了在主线程的事件循环中，可以有多个任务队列，比如鼠标事件队列，IO 完成任务队列，渲染任务队列，并且可以给这些任务队列排优先级。但浏览器只实现了常规任务队列和延迟任务队列，这两个队列里存放的都是宏任务。</p><p>因此关于任务队列，规范和实现不太一致。</p><p>延迟任务队列主要是放一些定时执行的任务，如 JavaScript 设置定时器的回调，还有浏览器内部的一些定时回调任务，这类任务需要等到指定时间间隔之后执行。</p><p>而常规的任务队列（简称为任务队列）中的任务只会按照顺序执行，执行完上个任务接着执行下个任务，不需要关心时间间隔。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这里的延迟任务队列并不是真正的数据结构上的队列，其本质是个 HashMap，等到主线程检查延迟任务队列时，会计算 HashMap 里的每个任务是否到期，若是到期则取出执行，执行完所有到期的任务后，才会进入到下一轮循环。</p></div><h3 id="任务队列里可能有哪些宏任务" tabindex="-1"><a class="header-anchor" href="#任务队列里可能有哪些宏任务"><span>任务队列里可能有哪些宏任务</span></a></h3><ul><li>页面渲染事件（如解析 DOM、计算布局、绘制）</li><li>用户交互事件（如鼠标点击、滚动页面、放大缩小等）</li><li>各种 IO 完成事件 <ul><li>网络请求完成事件 <ul><li>异步 XMLHttpRequest 请求回调事件</li></ul></li><li>文件读写完成事件</li></ul></li><li>JavaScript 脚本执行事件</li><li>垃圾回收事件</li><li>等等</li></ul><p>以上列举的只是一小部分事件，这些事件被添加到任务队列之后，事件循环系统就会按照任务队列中的顺序来执行事件。</p><h2 id="定时器的实现" tabindex="-1"><a class="header-anchor" href="#定时器的实现"><span>定时器的实现</span></a></h2><p>如下以<code>setTimeout</code>举例，<code>setInterval</code>同理。</p><h3 id="settimeout-的实现" tabindex="-1"><a class="header-anchor" href="#settimeout-的实现"><span>setTimeout 的实现</span></a></h3><p>当调用定时器如<code>setTimeout(fn, delay)</code>设置回调函数时，回调函数需要在指定的<code>delay</code>时间后执行。但是，任务队列中的任务是按序执行的，因而无法保证回调函数能在指定时间后执行，因此渲染进程不能将回调任务添加到任务队列里。</p><p>Chrome 里除了常规使用的任务队列之外，还有另外一个任务队列，这个队列中维护了需要延迟执行的任务列表，包括了定时器和 Chromium 内部一些需要延迟执行的任务，我们姑且先称其为延迟任务队列。因此当通过 JavaScript 创建一个定时器时，渲染进程会将该定时器的回调任务添加到延迟任务队列中。</p><p>当通过 JavaScript 调用<code>setTimeout(fn, delay)</code>设置回调函数的时候，渲染进程将会创建一个回调任务，包含了回调函数<code>fn</code>、当前发起时间、延迟执行时间，其模拟代码如下所示：</p><div class="language-c++ line-numbers-mode" data-highlighter="shiki" data-ext="c++" data-title="c++" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">struct</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> DelayTask</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  int64 id；</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  CallBackFunction cbf;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> start_time;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> delay_time;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">DelayTask timerTask;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">timerTask</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">cbf</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> fn;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">timerTask</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">start_time</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getCurrentTime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 获取当前时间</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">timerTask</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">delay_time</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> delay;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 设置延迟执行时间</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建好回调任务之后，再将该任务添加到延迟任务队列里。那么，事件循环系统是如何执行延迟任务队列里的任务的呢？</p><div class="language-c++ line-numbers-mode" data-highlighter="shiki" data-ext="c++" data-title="c++" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ProcessTimerTask</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 从 延迟任务队列 中取出已经到期的定时器任务</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 依次执行这些任务</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">TaskQueue task_queue；</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ProcessTask</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">bool</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> keep_running </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> MainTherad</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(;;){</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 执行任务队列中的任务</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Task task </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> task_queue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">takeTask</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    ProcessTask</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(task);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 执行延迟任务队列中的任务</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    ProcessDelayTask</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 如果设置了退出标志，那么直接退出线程循环</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">keep_running)</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        break</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上段代码中，处理完任务队列中的单个任务之后，就开始执行 ProcessDelayTask 函数。ProcessDelayTask 函数会根据发起时间和延迟时间计算出到期的回调任务（可能有多个），然后依次执行这些到期的任务。等到期的回调任务执行完成之后，再继续下一个循环过程。通过这样的方式，一个完整的定时器就实现了。</p><p>需要注意的是，每一次事件循环，都会先从任务队列里取出一个宏任务执行，该宏任务执行完成后，主线程会去检查延迟任务队列里的所有宏任务，将已经到期的宏任务全部取出后一一执行，等到这些宏任务执行完毕后，再进入到下一次事件循环。此外，不管是任务队列里的宏任务还是延迟任务队列里的宏任务，其执行时都会创建其专属的微任务队列，等到该宏任务执行完毕后，再将其所属的微任务队列里的微任务一一执行。</p><h3 id="cleartimeout-的实现" tabindex="-1"><a class="header-anchor" href="#cleartimeout-的实现"><span>clearTimeout 的实现</span></a></h3><p>调用定时器如<code>clearTimeout</code>之后，JavaScript 引擎会返回一个定时器的 ID。通常情况下，当一个定时器的回调任务还没有被执行时，可以调用<code>clearTimeout</code>函数并传入需要定时器的 ID 来取消回调任务的执行。其实浏览器内部实现取消定时器的操作也是非常简单的，就是直接从延迟任务队列中，通过 ID 查找到对应的回调任务，然后再将其从队列中删除就可以了。</p><h3 id="使用-settimeout-的一些注意事项" tabindex="-1"><a class="header-anchor" href="#使用-settimeout-的一些注意事项"><span>使用 setTimeout 的一些注意事项</span></a></h3><ul><li>如果当前任务执行时间过久，会影响定时器任务的执行</li></ul><p>若是从<code>task_queue</code>取出的<code>task</code>执行时间过久，尽管定时器设置的延时时间在<code>task</code>执行完成之前就已经达到，但是必须等到<code>task</code>执行完成之后，主线程才会去检查延迟任务队列。因此，不管是<code>setTimeout</code>还是<code>setInterval</code>，其最终延迟执行的时间，都会大于等于设置的<code>delay</code>。</p><ul><li>如果<code>setTimeout</code>存在嵌套调用，那么系统会设置最短时间间隔为 4 毫秒</li></ul><p><code>setTimeout</code>嵌套调用超过五次以上，后面每次的调用最小时间间隔是 4 毫秒。这是因为在 Chrome 中，定时器被嵌套调用 5 次以上，系统会判断该函数方法被阻塞了，如果定时器的调用时间间隔小于 4 毫秒，那么浏览器会将每次调用的时间间隔设置为 4 毫秒。</p><ul><li>未激活的页面<code>setTimeout</code>执行最小间隔是 1000 毫秒</li></ul><p>如果标签页不是当前的激活标签页，或者页面被切换到后台，那么页面里的定时器最小的时间间隔是 1000 毫秒，目的是为了优化后台页面的加载损耗以及降低耗电量。</p><ul><li>延时执行时间<code>delay</code>有最大值，超过最大值后会被设置为 0</li></ul><p>Chrome、Safari、Firefox 都是以 32 位来存储延时值的，32 位最大只能存放的数字是 2147483647 毫秒（2<sup>31</sup>-1，因为有一位是符号位）。也就是说，如果<code>setTimeout</code>设置的延迟值大于 2147483647 毫秒（大约 24.8 天）时就会溢出，那么相当于延时值被设置为 0 了，这导致定时器会被立即执行。</p><ul><li><code>setTimeout</code>设置的回调函数中的<code>this</code>指向全局<code>window</code>（严格模式下为<code>undefined</code>）</li></ul><h2 id="异步-xmlhttprequest-请求回调" tabindex="-1"><a class="header-anchor" href="#异步-xmlhttprequest-请求回调"><span>异步 XMLHttpRequest 请求回调</span></a></h2><ul><li>创建 XMLHttpRequest 对象<code>xhr</code>，注册回调、配置请求信息后，调用<code>xhr.send</code>发起网络请求。</li><li>渲染进程将请求发送给网络进程，由网络进程负责资源的下载；网络进程接收到数据之后，会通过 IPC（进程间通信）通知渲染进程。</li><li>渲染进程接收到信息之后，会将<code>xhr</code>的回调函数封装成任务并添加到任务队列中。</li><li>主线程进行事件循环执行到该任务时，会根据相关的状态来调用对应的回调函数。 <ul><li>网络请求出错，执行<code>xhr.onerror</code></li><li>网络请求超时，执行<code>xhr.ontimeout</code></li><li>网络请求正常，执行<code>xhr.onreadystatechange</code></li></ul></li></ul><h2 id="宏任务和微任务" tabindex="-1"><a class="header-anchor" href="#宏任务和微任务"><span>宏任务和微任务</span></a></h2><h3 id="微任务" tabindex="-1"><a class="header-anchor" href="#微任务"><span>微任务</span></a></h3><p>微任务就是一个需要异步执行的函数，执行时机是在主函数执行结束之后、当前宏任务结束之前。</p><p>每个宏任务在执行时，会创建自己的微任务队列。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>微任务是有可能会移到宏任务队列里的。</p><blockquote><p>It is possible for a <code>microtask</code> to be moved to a regular <code>task queue</code>, if, during its initial execution, it <code>spins the event loop</code>. This is the only case in which the <code>source</code>, <code>document</code>, and <code>script evaluation environment settings object set</code> of the <code>microtask</code> are consulted; they are ignored by the <code>perform a microtask checkpoint</code> algorithm.</p></blockquote></div><h4 id="产生微任务的方法" tabindex="-1"><a class="header-anchor" href="#产生微任务的方法"><span>产生微任务的方法</span></a></h4><ul><li>MutationObserver</li><li>Promise</li></ul><p>如果在执行微任务的过程中，产生了新的微任务，同样会将该微任务添加到当前宏任务的微任务队列中，V8 引擎一直循环执行微任务队列中的任务，直到队列为空才算执行结束。也就是说，在执行微任务过程中产生的新的微任务并不会推迟到下个宏任务中执行，而是在当前的宏任务中继续执行。</p><h4 id="微任务队列的执行时机" tabindex="-1"><a class="header-anchor" href="#微任务队列的执行时机"><span>微任务队列的执行时机</span></a></h4><p>通常情况下，在当前宏任务中的 JavaScript 快执行完成时，也就在 JavaScript 引擎准备退出全局执行上下文并清空调用栈的时候，JavaScript 引擎会检查全局执行上下文中的微任务队列，然后按照顺序执行队列中的微任务。WHATWG 把执行微任务的时间点称为检查点。当然除了在退出全局执行上下文式这个检查点之外，还有其他的检查点，不过不是太重要。</p><p>因此，微任务的执行时长会影响到当前宏任务的时长。比如一个宏任务在执行过程中，产生了 100 个微任务，执行每个微任务的时间是 10 毫秒，那么执行这 100 个微任务的时间就是 1000 毫秒，也可以说这 100 个微任务让宏任务的执行时间延长了 1000 毫秒。</p><p>TODO: 每次执行一个宏任务，都会重新创建一遍全局执行上下文？宏任务执行完成（包括微任务队列里的任务全部执行完成）后会退出全局执行上下文？</p><h4 id="为什么需要微任务" tabindex="-1"><a class="header-anchor" href="#为什么需要微任务"><span>为什么需要微任务</span></a></h4><p>微任务设计的目的，就是为了能够在下一个宏任务执行之前，临时插入一些任务，比如插入一些 UI 修改的任务，这样可以实现批量 UI 渲染（下一个宏任务）。</p><p>页面的渲染事件、用户交互的事件、各种 IO 的完成事件、执行 JavaScript 脚本的事件等都随时有可能被添加到任务队列中，而且添加事件是由系统来操作的，JavaScript 代码不能准确掌控任务要添加到队列中的位置，控制不了任务在任务队列中的位置，所以很难控制开始执行任务的时间。</p><p>宏任务的时间粒度比较大，执行的时间间隔是不能精确控制的，无法满足一些高实时性的需求，比如监听 DOM 变化并及时做出响应。</p><h2 id="参考文档-1" tabindex="-1"><a class="header-anchor" href="#参考文档-1"><span>参考文档</span></a></h2><ul><li><a href="https://html.spec.whatwg.org/multipage/webappapis.html#event-loops" target="_blank" rel="noopener noreferrer">WHATWG - HTML Living Standard - Event Loops</a></li></ul>', 58)),
    createVNode(_component_global_config)
  ]);
}
const eventLoop_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "event-loop.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/browser/event-loop.html","title":"事件循环","lang":"en-US","frontmatter":{"description":"事件循环 参考文档 WHATWG - 8.1.6 Event loops 名词中英文 任务: task 任务队列: task queue 任务队列 任务队列，是一批任务的集合。 提示 任务队列是集合set，而不是队列queue，因为在事件循环处理模型的第一步抓取的是选定的任务队列里的第一个可运行的任务，而不是以出队列方式获取的第一个任务。 在 WHAT...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/browser/event-loop.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"事件循环"}],["meta",{"property":"og:description","content":"事件循环 参考文档 WHATWG - 8.1.6 Event loops 名词中英文 任务: task 任务队列: task queue 任务队列 任务队列，是一批任务的集合。 提示 任务队列是集合set，而不是队列queue，因为在事件循环处理模型的第一步抓取的是选定的任务队列里的第一个可运行的任务，而不是以出队列方式获取的第一个任务。 在 WHAT..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-01-12T12:23:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-12T12:23:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事件循环\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-12T12:23:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]},{"level":2,"title":"名词中英文","slug":"名词中英文","link":"#名词中英文","children":[]},{"level":2,"title":"任务队列","slug":"任务队列","link":"#任务队列","children":[{"level":3,"title":"任务队列里可能有哪些宏任务","slug":"任务队列里可能有哪些宏任务","link":"#任务队列里可能有哪些宏任务","children":[]}]},{"level":2,"title":"定时器的实现","slug":"定时器的实现","link":"#定时器的实现","children":[{"level":3,"title":"setTimeout 的实现","slug":"settimeout-的实现","link":"#settimeout-的实现","children":[]},{"level":3,"title":"clearTimeout 的实现","slug":"cleartimeout-的实现","link":"#cleartimeout-的实现","children":[]},{"level":3,"title":"使用 setTimeout 的一些注意事项","slug":"使用-settimeout-的一些注意事项","link":"#使用-settimeout-的一些注意事项","children":[]}]},{"level":2,"title":"异步 XMLHttpRequest 请求回调","slug":"异步-xmlhttprequest-请求回调","link":"#异步-xmlhttprequest-请求回调","children":[]},{"level":2,"title":"宏任务和微任务","slug":"宏任务和微任务","link":"#宏任务和微任务","children":[{"level":3,"title":"微任务","slug":"微任务","link":"#微任务","children":[]}]},{"level":2,"title":"参考文档","slug":"参考文档-1","link":"#参考文档-1","children":[]}],"git":{"createdTime":1588176687000,"updatedTime":1673526216000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":4}]},"readingTime":{"minutes":9.95,"words":2984},"filePathRelative":"browser-env/browser/event-loop.md","localizedDate":"April 30, 2020","autoDesc":true}');
export {
  eventLoop_html as comp,
  data
};
