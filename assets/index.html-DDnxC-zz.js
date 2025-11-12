import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/assets/streams-messages-frames-aDgH4Lj6.svg";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[11] || (_cache[11] = createBaseVNode("h1", {
      id: "http2",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#http2"
      }, [
        createBaseVNode("span", null, "HTTP2")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#为什么是-http2-而不是-http-1-2" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("为什么是 HTTP2 而不是 HTTP/1.2")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#http-0-9-1-x-的缺点" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("HTTP/0.9-1.x 的缺点")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#http2-1" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("HTTP2")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#二进制分帧层" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("二进制分帧层")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#数据流、消息、帧" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("数据流、消息、帧")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#请求与响应复用" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("请求与响应复用")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#数据流优先级" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("数据流优先级")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#每个来源一个连接" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode("每个来源一个连接")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#流控制" }, {
                default: withCtx(() => _cache[8] || (_cache[8] = [
                  createTextVNode("流控制")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#服务器推送" }, {
                default: withCtx(() => _cache[9] || (_cache[9] = [
                  createTextVNode("服务器推送")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#标头压缩" }, {
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode("标头压缩")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[12] || (_cache[12] = createStaticVNode('<h2 id="为什么是-http2-而不是-http-1-2" tabindex="-1"><a class="header-anchor" href="#为什么是-http2-而不是-http-1-2"><span>为什么是 HTTP2 而不是 HTTP/1.2</span></a></h2><p>为了实现 HTTP 工作组设定的性能目标，HTTP/2 引入了一个新的二进制分帧层，该层无法与之前的 HTTP/1.x 服务器和客户端向后兼容，因此协议的主版本提升到 HTTP/2。</p><h2 id="http-0-9-1-x-的缺点" tabindex="-1"><a class="header-anchor" href="#http-0-9-1-x-的缺点"><span>HTTP/0.9-1.x 的缺点</span></a></h2><p>早期版本的 HTTP 协议的设计初衷主要是实现要简单。然而，实现简单是以牺牲应用性能为代价的:</p><ul><li>HTTP/1.x 客户端需要使用多个连接才能实现并发和缩短延迟（比如一般浏览器针对同一域名只能同时允许建立 6 个 TCP 连接，超过 6 个需要等待之前的连接完成，再复用已有的连接进行新的请求）</li><li>HTTP/1.x 不会压缩请求和响应标头，从而导致不必要的网络流量</li><li>HTTP/1.x 不支持有效的资源优先级，致使底层 TCP 连接的利用率低下</li></ul><h2 id="http2-1" tabindex="-1"><a class="header-anchor" href="#http2-1"><span>HTTP2</span></a></h2><p>HTTP/2 仍是对之前 HTTP 标准的扩展，而非替代。HTTP 的应用语义不变，提供的功能不变，HTTP 方法、状态代码、URI 和标头字段等这些核心概念也不变。 这些方面的变化都不在 HTTP/2 考虑之列。</p><p>虽然高级 API 保持不变，仍有必要了解低级变更如何解决了之前协议的性能限制。</p><h3 id="二进制分帧层" tabindex="-1"><a class="header-anchor" href="#二进制分帧层"><span>二进制分帧层</span></a></h3><p><a href="https://developers.google.com/web/fundamentals/performance/http2?hl=zh-cn#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%88%86%E5%B8%A7%E5%B1%82" target="_blank" rel="noopener noreferrer">HTTP/2 简介 - 二进制分帧层</a></p><h3 id="数据流、消息、帧" tabindex="-1"><a class="header-anchor" href="#数据流、消息、帧"><span>数据流、消息、帧</span></a></h3><p>新的二进制分帧机制改变了客户端与服务器之间交换数据的方式。为了说明这个过程，我们需要了解 HTTP/2 的三个概念:</p><ul><li>数据流: 已建立的连接内的双向字节流，可以承载一条或多条消息。（wind-stone: 每个资源即一个数据流，比如一个 HTML 文档是个数据流，一个 JS 文件也是一个数据流）</li><li>消息: 与逻辑请求或响应消息对应的完整的一系列帧。（wind-stone: 每个数据流可能包含 1 到多个消息，比如请求消息，响应消息）</li><li>帧: HTTP/2 通信的最小单位，每个帧都包含帧头，至少也会标识出当前帧所属的数据流。（wind-stone: 每个消息可以包含 1 到多个帧，比如 header 帧，数据帧）</li></ul><p>这些概念的关系总结如下:</p><ul><li>所有通信都在一个 TCP 连接上完成，此连接可以承载任意数量的双向数据流。</li><li>每个数据流都有一个唯一的标识符和可选的优先级信息，用于承载双向消息。</li><li>每条消息都是一条逻辑 HTTP 消息（例如请求或响应），包含一个或多个帧。</li><li>帧是最小的通信单位，承载着特定类型的数据，例如 HTTP 标头、消息负载等等。 来自不同数据流的帧可以交错发送，然后再根据每个帧头的数据流标识符重新组装。</li></ul><figure><img src="' + _imports_0 + '" alt="数据流、消息、帧" tabindex="0" loading="lazy"><figcaption>数据流、消息、帧</figcaption></figure><p>简言之，HTTP/2 将 HTTP 协议通信分解为二进制编码帧的交换，这些帧对应着特定数据流中的消息。所有这些都在一个 TCP 连接内复用。 这是 HTTP/2 协议所有其他功能和性能优化的基础。</p><h3 id="请求与响应复用" tabindex="-1"><a class="header-anchor" href="#请求与响应复用"><span>请求与响应复用</span></a></h3><p><a href="https://developers.google.com/web/fundamentals/performance/http2?hl=zh-cn#%E8%AF%B7%E6%B1%82%E4%B8%8E%E5%93%8D%E5%BA%94%E5%A4%8D%E7%94%A8" target="_blank" rel="noopener noreferrer">HTTP/2 简介 - 请求与响应复用</a></p><h3 id="数据流优先级" tabindex="-1"><a class="header-anchor" href="#数据流优先级"><span>数据流优先级</span></a></h3><p><a href="https://developers.google.com/web/fundamentals/performance/http2?hl=zh-cn#%E6%95%B0%E6%8D%AE%E6%B5%81%E4%BC%98%E5%85%88%E7%BA%A7" target="_blank" rel="noopener noreferrer">HTTP/2 简介 - 数据流优先级</a></p><h3 id="每个来源一个连接" tabindex="-1"><a class="header-anchor" href="#每个来源一个连接"><span>每个来源一个连接</span></a></h3><p><a href="https://developers.google.com/web/fundamentals/performance/http2#%E6%AF%8F%E4%B8%AA%E6%9D%A5%E6%BA%90%E4%B8%80%E4%B8%AA%E8%BF%9E%E6%8E%A5" target="_blank" rel="noopener noreferrer">HTTP/2 简介 - 每个来源一个连接</a></p><h3 id="流控制" tabindex="-1"><a class="header-anchor" href="#流控制"><span>流控制</span></a></h3><p><a href="https://developers.google.com/web/fundamentals/performance/http2#%E6%B5%81%E6%8E%A7%E5%88%B6" target="_blank" rel="noopener noreferrer">HTTP/2 简介 - 流控制</a></p><h3 id="服务器推送" tabindex="-1"><a class="header-anchor" href="#服务器推送"><span>服务器推送</span></a></h3><p><a href="https://developers.google.com/web/fundamentals/performance/http2#%E6%AF%8F%E4%B8%AA%E6%9D%A5%E6%BA%90%E4%B8%80%E4%B8%AA%E8%BF%9E%E6%8E%A5" target="_blank" rel="noopener noreferrer">HTTP/2 简介 - 服务器推送</a></p><p>为什么在浏览器中需要一种服务器推送机制呢？</p><p>一个典型的网络应用包含多种资源，客户端需要检查服务器提供的文档才能逐个找到它们。那为什么不让服务器提前推送这些资源，从而减少额外的延迟时间呢？服务器已经知道客户端下一步要请求什么资源，这时候服务器推送即可派上用场。</p><p>wind-stone: 举个例子，当使用 HTTP/1.x 请求一个 HTML 文档时，客户端需要获取到 HTML 文档后才能知道需要哪些外链 CSS 文件和 JS 文件并再次请求这些文件；但是当 HTTP2 时，在客户端请求 HTML 文档时，服务器端在发送 HTML 响应的同时，也可以将外链 CSS 文件和 JS 文件推送到客户端，省去了大约一个 HTTP 请求来回的时间。</p><p>推送的资源可以进行以下处理:</p><ul><li>由客户端缓存</li><li>在不同页面之间重用</li><li>与其他资源一起复用</li><li>由服务器设定优先级</li><li>被客户端拒绝</li></ul><h3 id="标头压缩" tabindex="-1"><a class="header-anchor" href="#标头压缩"><span>标头压缩</span></a></h3><p><a href="https://developers.google.com/web/fundamentals/performance/http2#%E6%A0%87%E5%A4%B4%E5%8E%8B%E7%BC%A9" target="_blank" rel="noopener noreferrer">HTTP/2 简介 - 标头压缩</a></p>', 34)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/network/http2/","title":"HTTP2","lang":"en-US","frontmatter":{"description":"HTTP2 为什么是 HTTP2 而不是 HTTP/1.2 为了实现 HTTP 工作组设定的性能目标，HTTP/2 引入了一个新的二进制分帧层，该层无法与之前的 HTTP/1.x 服务器和客户端向后兼容，因此协议的主版本提升到 HTTP/2。 HTTP/0.9-1.x 的缺点 早期版本的 HTTP 协议的设计初衷主要是实现要简单。然而，实现简单是以牺牲...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/network/http2/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"HTTP2"}],["meta",{"property":"og:description","content":"HTTP2 为什么是 HTTP2 而不是 HTTP/1.2 为了实现 HTTP 工作组设定的性能目标，HTTP/2 引入了一个新的二进制分帧层，该层无法与之前的 HTTP/1.x 服务器和客户端向后兼容，因此协议的主版本提升到 HTTP/2。 HTTP/0.9-1.x 的缺点 早期版本的 HTTP 协议的设计初衷主要是实现要简单。然而，实现简单是以牺牲..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTP2\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"为什么是 HTTP2 而不是 HTTP/1.2","slug":"为什么是-http2-而不是-http-1-2","link":"#为什么是-http2-而不是-http-1-2","children":[]},{"level":2,"title":"HTTP/0.9-1.x 的缺点","slug":"http-0-9-1-x-的缺点","link":"#http-0-9-1-x-的缺点","children":[]},{"level":2,"title":"HTTP2","slug":"http2-1","link":"#http2-1","children":[{"level":3,"title":"二进制分帧层","slug":"二进制分帧层","link":"#二进制分帧层","children":[]},{"level":3,"title":"数据流、消息、帧","slug":"数据流、消息、帧","link":"#数据流、消息、帧","children":[]},{"level":3,"title":"请求与响应复用","slug":"请求与响应复用","link":"#请求与响应复用","children":[]},{"level":3,"title":"数据流优先级","slug":"数据流优先级","link":"#数据流优先级","children":[]},{"level":3,"title":"每个来源一个连接","slug":"每个来源一个连接","link":"#每个来源一个连接","children":[]},{"level":3,"title":"流控制","slug":"流控制","link":"#流控制","children":[]},{"level":3,"title":"服务器推送","slug":"服务器推送","link":"#服务器推送","children":[]},{"level":3,"title":"标头压缩","slug":"标头压缩","link":"#标头压缩","children":[]}]}],"git":{"createdTime":1623237336000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":4.52,"words":1355},"filePathRelative":"browser-env/network/http2/README.md","localizedDate":"June 9, 2021","autoDesc":true}');
export {
  index_html as comp,
  data
};
