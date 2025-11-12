import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createBaseVNode("h1", {
      id: "node",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#node"
      }, [
        createBaseVNode("span", null, "Node")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#事件循环" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("事件循环")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#观察者" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("观察者")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#node-定时器" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("Node 定时器")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#服务稳定性指标" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("服务稳定性指标")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[5] || (_cache[5] = createStaticVNode('<h2 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环"><span>事件循环</span></a></h2><h3 id="观察者" tabindex="-1"><a class="header-anchor" href="#观察者"><span>观察者</span></a></h3><ul><li>I/O 观察者 <ul><li>文件 I/O 观察者</li><li>网络 I/O 观察者</li></ul></li><li>定时器观察者 <ul><li><code>setTimeout</code></li><li><code>setInterval</code></li></ul></li><li>idle 观察者 <ul><li><code>process.nextTick</code></li></ul></li><li>check 观察者 <ul><li><code>setImmediate</code></li></ul></li></ul><p>事件循环里对观察者的检查顺序为：</p><p>idle 观察者 &gt; I/O 观察者 &gt; check 观察者</p><h2 id="node-定时器" tabindex="-1"><a class="header-anchor" href="#node-定时器"><span>Node 定时器</span></a></h2><ul><li>同步任务</li><li>异步任务 <ul><li>本轮循环 <ul><li>process.nextTick</li><li>Promise</li></ul></li><li>次轮循环 <ul><li>setTimeout、setInterval</li><li>setImmediate</li></ul></li></ul></li></ul><p>Reference: <a href="http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html" target="_blank" rel="noopener noreferrer">Node 定时器详解</a></p><h2 id="服务稳定性指标" tabindex="-1"><a class="header-anchor" href="#服务稳定性指标"><span>服务稳定性指标</span></a></h2><ul><li>资源稳定性 <ul><li>CPU <ul><li>CPU Load，即 CPU 负载，表示在一段时间内 CPU 正在处理以及等待 CPU 处理的进程数之和的统计信息。</li><li>CPU Usage，即 CPU 利用率，代表了程序对 CPU 时间片的占用情况。</li></ul></li><li>内存 <ul><li>内存 RSS，常驻内存集（Resident Set Size）用于表示系统有多少内存分配给当前进程，它能包括所有堆栈和堆内存，是 OOM 主要参考的指标。</li><li>内存 V8 Heap，表示 JavaScript 代码执行占用的内存。</li><li>内存 max-old-space-size，V8 允许的最大的老生代内存大小，可以简单认为是一个 Node.js 进程长期可维持的最大内存大小。</li><li>内存 External，Node.js 中的 Buffer 是基于 V8 Uint8Array 的封装，因此在 Node.js 中使用 Buffer 时，其内存占用量会被记录到 External 中。</li></ul></li><li>Libuv，是跨平台的、封装操作系统 IO 操作的库。Node.js 使用 Libuv 作为自己的 event loop，并由 uv 负责 IO 操作 <ul><li>Libuv handles，指示了 Node.js 进程中各种 IO 对象（tcp, udp, fs, timer 等对象）的数量。</li><li>Libuv Latency，通过 setTimeout() 来设置 timer ，并记录回调函数被调用时所消耗的时间和预计消耗的时间之间的差值作为 latency</li></ul></li></ul></li><li>服务运行稳定性 <ul><li>状态码</li><li>错误日志</li><li>pm2 日志</li><li>延时</li><li>QPS</li></ul></li></ul><p>参考自：<a href="https://mp.weixin.qq.com/s/2k-52mxPbMUofvT1tjBXUA" target="_blank" rel="noopener noreferrer">提升 Node.js 服务稳定性，需要关注哪些指标？</a></p>', 11)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/development-skills/nodejs/","title":"Node","lang":"en-US","frontmatter":{"description":"Node 事件循环 观察者 I/O 观察者 文件 I/O 观察者 网络 I/O 观察者 定时器观察者 setTimeout setInterval idle 观察者 process.nextTick check 观察者 setImmediate 事件循环里对观察者的检查顺序为： idle 观察者 > I/O 观察者 > check 观察者 Node 定...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/development-skills/nodejs/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Node"}],["meta",{"property":"og:description","content":"Node 事件循环 观察者 I/O 观察者 文件 I/O 观察者 网络 I/O 观察者 定时器观察者 setTimeout setInterval idle 观察者 process.nextTick check 观察者 setImmediate 事件循环里对观察者的检查顺序为： idle 观察者 > I/O 观察者 > check 观察者 Node 定..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-31T12:47:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-31T12:47:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Node\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-31T12:47:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"事件循环","slug":"事件循环","link":"#事件循环","children":[{"level":3,"title":"观察者","slug":"观察者","link":"#观察者","children":[]}]},{"level":2,"title":"Node 定时器","slug":"node-定时器","link":"#node-定时器","children":[]},{"level":2,"title":"服务稳定性指标","slug":"服务稳定性指标","link":"#服务稳定性指标","children":[]}],"git":{"createdTime":1552379033000,"updatedTime":1730378820000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":1.58,"words":474},"filePathRelative":"front-end-engineering/development-skills/nodejs/index.md","localizedDate":"March 12, 2019","autoDesc":true}');
export {
  index_html as comp,
  data
};
