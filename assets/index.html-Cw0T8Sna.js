import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/assets/tcp-E5oL8xV1.png";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[16] || (_cache[16] = createBaseVNode("h1", {
      id: "http",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#http"
      }, [
        createBaseVNode("span", null, "HTTP")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#浏览器-http-请求的生命周期" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("浏览器 http 请求的生命周期")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#_1-构建-http-请求" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("1. 构建 http 请求")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#_2-查找缓存" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("2. 查找缓存")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#_3-确定服务器-ip-地址和端口" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("3. 确定服务器 IP 地址和端口")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#_4-等待-tcp-队列" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("4. 等待 TCP 队列")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#_5-建立-tcp-连接" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("5. 建立 TCP 连接")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#三次握手" }, {
                    default: withCtx(() => _cache[6] || (_cache[6] = [
                      createTextVNode("三次握手")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#四次挥手" }, {
                    default: withCtx(() => _cache[7] || (_cache[7] = [
                      createTextVNode("四次挥手")
                    ])),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#_6-发送-http-请求" }, {
                default: withCtx(() => _cache[8] || (_cache[8] = [
                  createTextVNode("6. 发送 HTTP 请求")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#_7-服务器处理请求并返回" }, {
                default: withCtx(() => _cache[9] || (_cache[9] = [
                  createTextVNode("7. 服务器处理请求并返回")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#_8-断开-http-请求" }, {
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode("8. 断开 HTTP 请求")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#请求-响应头" }, {
            default: withCtx(() => _cache[11] || (_cache[11] = [
              createTextVNode("请求/响应头")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#常用的通用头" }, {
                default: withCtx(() => _cache[12] || (_cache[12] = [
                  createTextVNode("常用的通用头")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#connection-keep-alive" }, {
                    default: withCtx(() => _cache[13] || (_cache[13] = [
                      createTextVNode("Connection:Keep-Alive")
                    ])),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#常用的请求头" }, {
                default: withCtx(() => _cache[14] || (_cache[14] = [
                  createTextVNode("常用的请求头")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#常用的响应头" }, {
                default: withCtx(() => _cache[15] || (_cache[15] = [
                  createTextVNode("常用的响应头")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[17] || (_cache[17] = createStaticVNode('<h2 id="浏览器-http-请求的生命周期" tabindex="-1"><a class="header-anchor" href="#浏览器-http-请求的生命周期"><span>浏览器 http 请求的生命周期</span></a></h2><h3 id="_1-构建-http-请求" tabindex="-1"><a class="header-anchor" href="#_1-构建-http-请求"><span>1. 构建 http 请求</span></a></h3><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GET /index.html HTTP1.1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-查找缓存" tabindex="-1"><a class="header-anchor" href="#_2-查找缓存"><span>2. 查找缓存</span></a></h3><p>查找浏览器本地缓存，查看是否有所请求的副本及是否过期。若未查找到或已过期，进入下一步。</p><h3 id="_3-确定服务器-ip-地址和端口" tabindex="-1"><a class="header-anchor" href="#_3-确定服务器-ip-地址和端口"><span>3. 确定服务器 IP 地址和端口</span></a></h3><p>将域名解析为 IP 地址：优先使用浏览器的 DNS 数据缓存服务，若之前解析过会缓存起来；否则，请求 DNS 服务解析域名。</p><p>端口：若 URL 里没有显式指明端口，则 HTTP 协议默认是 80 端口。</p><h3 id="_4-等待-tcp-队列" tabindex="-1"><a class="header-anchor" href="#_4-等待-tcp-队列"><span>4. 等待 TCP 队列</span></a></h3><p>针对 Chrome 浏览器，同一个域名同时最多只能建立 6 个 TCP 连接（仅当使用 http/1.1 时），若该域名已经存在 6 个及以上请求，请求将进入排队等待状态，等到之前的 TCP 连接关闭之后才能建立新的 TCP 连接。浏览器会为每个域名维护 6 个 TCP 连接，但每个 TCP 连接是可以复用的，在处理完一个 HTTP 请求之后，可以不断开这个 TCP 连接，继续处理下一个 HTTP 请求。</p><h3 id="_5-建立-tcp-连接" tabindex="-1"><a class="header-anchor" href="#_5-建立-tcp-连接"><span>5. 建立 TCP 连接</span></a></h3><p>经过上一步的等待之后，经过三次握手，建立 TCP 连接。</p><h4 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手"><span>三次握手</span></a></h4><p>参考链接：<a href="https://www.zhihu.com/question/24853633/answer/115173386" target="_blank" rel="noopener noreferrer">TCP 为什么是三次握手，而不是两次或四次？ - 车小胖的回答 - 知乎</a></p><p>总结：既保证了可靠传输（两次不可靠，因此要三次），且效率最高（成本最低）。</p><p>名词释义</p><ul><li>Seq: 序列号，Sequence Numbers</li><li>SYN: 同步序列号，Synchronize Sequence Numbers</li><li>ISN: 初始序列号，Initial Sequence Number</li><li>ACK: 确认字符，Acknowledge Character</li><li>FIN: 结束连接，Finish</li></ul><figure><img src="' + _imports_0 + '" alt="TCP" tabindex="0" loading="lazy"><figcaption>TCP</figcaption></figure><p>TCP 建立连接的三次握手，就是为了相互告知对方自己的 ISN。</p><p>客户端 &lt;-------&gt; 服务端</p><ol><li>第一次握手: 客户端发送同步信号 SYN + 客户端 ISN = x</li><li>第二次握手: <ul><li>服务端收到客户端的同步信号，记录客户端 ISN 到本地，并向客户端发送确认信号 ACK = 客户端 ISN + 1 = x + 1</li><li>服务端再发送自己的同步信号 SYN + 服务端 ISN = y</li></ul></li><li>第三次握手: 客户端收到服务端的确认信号 ACK 和同步信号，记录服务端 ISN 到本地，并向服务端发送确认信号 ACK = 服务端 ISN + 1 = y + 1</li></ol><p>注意，原本建立连接需要四次握手，但是服务端发送确认信号 ACK 和服务端发送同步信号 SYN 可以合并，因此最终是三次握手。</p><h4 id="四次挥手" tabindex="-1"><a class="header-anchor" href="#四次挥手"><span>四次挥手</span></a></h4><p>四次挥手，断开连接。</p><p>客户端 &lt;-------&gt; 服务端</p><ol><li>第一次挥手: 客户端发送结束信号 FIN + Seq = x + 2，用于关闭客户端到服务端的数据发送，即客户端不会再给服务端发送数据。（但此时客户端仍可接收数据）</li><li>第二次挥手: 服务端接收到客户端的结束信号 FIN，并向客户端发送确认信号 ACK = Seq + 1 = x + 3</li><li>第三次挥手: 服务端也发送结束信号 FIN + Seq = y + 1，用于关闭服务端到客户端的数据发送，即服务端不会再给客户端发送数据</li><li>第四次挥手: 客户端接收到服务端的结束信号 FIN，并向服务端发送确认信号 ACK = Seq + 1 = y + 2</li></ol><p>第二次无法与第三次挥手合并，因为在接收到客户端的结束信号 FIN 后，服务端只是不再接收客户端发送的数据，但是服务端可能还有数据需要发送到客户端。</p><h3 id="_6-发送-http-请求" tabindex="-1"><a class="header-anchor" href="#_6-发送-http-请求"><span>6. 发送 HTTP 请求</span></a></h3><p>发送 HTTP 请求</p><h3 id="_7-服务器处理请求并返回" tabindex="-1"><a class="header-anchor" href="#_7-服务器处理请求并返回"><span>7. 服务器处理请求并返回</span></a></h3><h3 id="_8-断开-http-请求" tabindex="-1"><a class="header-anchor" href="#_8-断开-http-请求"><span>8. 断开 HTTP 请求</span></a></h3><p>通常情况下，一旦服务器向客户端返回了请求数据，它就要关闭 TCP 连接。不过如果浏览器或者服务器在其头信息中加入了：<code>Connection:Keep-Alive</code>，那么 TCP 连接在发送后将仍然保持打开状态，这样浏览器就可以继续通过同一个 TCP 连接发送请求。保持 TCP 连接可以省去下次请求时需要建立连接的时间，提升资源加载速度。比如，一个 Web 页面中内嵌的图片就都来自同一个 Web 站点，如果初始化了一个持久连接，你就可以复用该连接，以请求其他资源，而不需要重新再建立新的 TCP 连接。</p><h2 id="请求-响应头" tabindex="-1"><a class="header-anchor" href="#请求-响应头"><span>请求/响应头</span></a></h2><h3 id="常用的通用头" tabindex="-1"><a class="header-anchor" href="#常用的通用头"><span>常用的通用头</span></a></h3><h4 id="connection-keep-alive" tabindex="-1"><a class="header-anchor" href="#connection-keep-alive"><span>Connection:Keep-Alive</span></a></h4><p>当客户端或服务器端在头部里添加<code>Connection:Keep-Alive</code>时，那么 TCP 连接在发送后将仍然保持打开状态，这样浏览器就可以继续通过同一个 TCP 连接发送请求。保持 TCP 连接可以省去下次请求时需要建立连接的时间，提升资源加载速度。比如，一个 Web 页面中内嵌的图片就都来自同一个 Web 站点，如果初始化了一个持久连接，你就可以复用该连接，以请求其他资源，而不需要重新再建立新的 TCP 连接。</p><h3 id="常用的请求头" tabindex="-1"><a class="header-anchor" href="#常用的请求头"><span>常用的请求头</span></a></h3><h3 id="常用的响应头" tabindex="-1"><a class="header-anchor" href="#常用的响应头"><span>常用的响应头</span></a></h3>', 38)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/network/http/","title":"HTTP","lang":"en-US","frontmatter":{"description":"HTTP 浏览器 http 请求的生命周期 1. 构建 http 请求 2. 查找缓存 查找浏览器本地缓存，查看是否有所请求的副本及是否过期。若未查找到或已过期，进入下一步。 3. 确定服务器 IP 地址和端口 将域名解析为 IP 地址：优先使用浏览器的 DNS 数据缓存服务，若之前解析过会缓存起来；否则，请求 DNS 服务解析域名。 端口：若 URL...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/network/http/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"HTTP"}],["meta",{"property":"og:description","content":"HTTP 浏览器 http 请求的生命周期 1. 构建 http 请求 2. 查找缓存 查找浏览器本地缓存，查看是否有所请求的副本及是否过期。若未查找到或已过期，进入下一步。 3. 确定服务器 IP 地址和端口 将域名解析为 IP 地址：优先使用浏览器的 DNS 数据缓存服务，若之前解析过会缓存起来；否则，请求 DNS 服务解析域名。 端口：若 URL..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTP\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"浏览器 http 请求的生命周期","slug":"浏览器-http-请求的生命周期","link":"#浏览器-http-请求的生命周期","children":[{"level":3,"title":"1. 构建 http 请求","slug":"_1-构建-http-请求","link":"#_1-构建-http-请求","children":[]},{"level":3,"title":"2. 查找缓存","slug":"_2-查找缓存","link":"#_2-查找缓存","children":[]},{"level":3,"title":"3. 确定服务器 IP 地址和端口","slug":"_3-确定服务器-ip-地址和端口","link":"#_3-确定服务器-ip-地址和端口","children":[]},{"level":3,"title":"4. 等待 TCP 队列","slug":"_4-等待-tcp-队列","link":"#_4-等待-tcp-队列","children":[]},{"level":3,"title":"5. 建立 TCP 连接","slug":"_5-建立-tcp-连接","link":"#_5-建立-tcp-连接","children":[]},{"level":3,"title":"6. 发送 HTTP 请求","slug":"_6-发送-http-请求","link":"#_6-发送-http-请求","children":[]},{"level":3,"title":"7. 服务器处理请求并返回","slug":"_7-服务器处理请求并返回","link":"#_7-服务器处理请求并返回","children":[]},{"level":3,"title":"8. 断开 HTTP 请求","slug":"_8-断开-http-请求","link":"#_8-断开-http-请求","children":[]}]},{"level":2,"title":"请求/响应头","slug":"请求-响应头","link":"#请求-响应头","children":[{"level":3,"title":"常用的通用头","slug":"常用的通用头","link":"#常用的通用头","children":[]},{"level":3,"title":"常用的请求头","slug":"常用的请求头","link":"#常用的请求头","children":[]},{"level":3,"title":"常用的响应头","slug":"常用的响应头","link":"#常用的响应头","children":[]}]}],"git":{"createdTime":1578302821000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":4.39,"words":1316},"filePathRelative":"browser-env/network/http/README.md","localizedDate":"January 6, 2020","autoDesc":true}');
export {
  index_html as comp,
  data
};
