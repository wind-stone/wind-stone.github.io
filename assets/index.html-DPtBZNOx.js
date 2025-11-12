import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[17] || (_cache[17] = createBaseVNode("h1", {
      id: "调试",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#调试"
      }, [
        createBaseVNode("span", null, "调试")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#app-内" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("APP 内")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#微信" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("微信")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#chrome-调试" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("Chrome 调试")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#远程调试" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("远程调试")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#charles" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("Charles")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ios-安装证书" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("iOS 安装证书")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#浏览器控制台" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("浏览器控制台")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#符号" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode("$ 符号")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#事件相关" }, {
                default: withCtx(() => _cache[8] || (_cache[8] = [
                  createTextVNode("事件相关")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#debugger" }, {
                default: withCtx(() => _cache[9] || (_cache[9] = [
                  createTextVNode("debugger")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#断点调试" }, {
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode("断点调试")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#js-断点调试" }, {
                    default: withCtx(() => _cache[11] || (_cache[11] = [
                      createTextVNode("JS 断点调试")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#sources-断点" }, {
                    default: withCtx(() => _cache[12] || (_cache[12] = [
                      createTextVNode("Sources 断点")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#dom-断点调试" }, {
                    default: withCtx(() => _cache[13] || (_cache[13] = [
                      createTextVNode("DOM 断点调试")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#xhr-断点调试" }, {
                    default: withCtx(() => _cache[14] || (_cache[14] = [
                      createTextVNode("XHR 断点调试")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#事件监听-断点调试" }, {
                    default: withCtx(() => _cache[15] || (_cache[15] = [
                      createTextVNode("事件监听 断点调试")
                    ])),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#reference" }, {
            default: withCtx(() => _cache[16] || (_cache[16] = [
              createTextVNode("Reference")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[18] || (_cache[18] = createStaticVNode('<h2 id="app-内" tabindex="-1"><a class="header-anchor" href="#app-内"><span>APP 内</span></a></h2><h3 id="微信" tabindex="-1"><a class="header-anchor" href="#微信"><span>微信</span></a></h3><p><a href="https://segmentfault.com/a/1190000018407990" target="_blank" rel="noopener noreferrer">微信下调试H5页面</a></p><h2 id="chrome-调试" tabindex="-1"><a class="header-anchor" href="#chrome-调试"><span>Chrome 调试</span></a></h2><h3 id="远程调试" tabindex="-1"><a class="header-anchor" href="#远程调试"><span>远程调试</span></a></h3><p>参考文档：<a href="http://wiki.jikexueyuan.com/project/chrome-devtools/remote-debugging-on-android.html" target="_blank" rel="noopener noreferrer">在安卓设备上使用 Chrome 远程调试功能</a></p><p>可能遇到的问题及解决方法：</p><ul><li>手机设置里，打开“USB 调试”开关后，Chrome 上未显示设备，可尝试以下解决方法： <ul><li>使用正规的数据线（最好是原装的）</li><li>重置“开发者选项”</li></ul></li></ul><h2 id="charles" tabindex="-1"><a class="header-anchor" href="#charles"><span>Charles</span></a></h2><h3 id="ios-安装证书" tabindex="-1"><a class="header-anchor" href="#ios-安装证书"><span>iOS 安装证书</span></a></h3><ol><li>在 Safari 中访问<code>http://chls.pro/ssl</code>，安装证书</li><li>（需要抓包 https 时，针对 iOS 11 及以上）打开【设置】&gt;【通用】&gt;【关于本机】&gt;【证书信任设置】，将上一步安装的证书设置为信任</li></ol><h2 id="浏览器控制台" tabindex="-1"><a class="header-anchor" href="#浏览器控制台"><span>浏览器控制台</span></a></h2><h3 id="符号" tabindex="-1"><a class="header-anchor" href="#符号"><span>$ 符号</span></a></h3><ul><li><code>$0</code> ~ <code>$4</code>：在 elements 面板中标记一个 DOM 元素，然后在 console 中使用它。Chrome Inspector 会保存最后 5 个元素在其历史记录中，所以最后标记的元素可以用 $0 来显示，倒数第二个被标记的元素为 $1 ，以此类推。</li><li><code>$(selector)</code>：<code>$(&#39;.class&#39;)</code>会返回 CSS 选择器所匹配的第一个元素</li><li><code>$$(selector)</code>：<code>$$(&#39;.class&#39;)</code>会返回所有的元素</li><li><code>$_</code>：返回最近执行表达式的值</li></ul><h3 id="事件相关" tabindex="-1"><a class="header-anchor" href="#事件相关"><span>事件相关</span></a></h3><ul><li><code>getEventListeners(document)</code>：返回指定 DOM 元素上注册的事件监听器。</li><li><code>monitorEvents(window, [&#39;resize&#39;, &#39;scroll&#39;])</code>/<code>unmonitorEvents(DOMElement)</code>：在指定 DOM 元素上触发任何事件时，都可以在控制台中看到相关信息。直到取消对相应元素的监视。</li></ul><h3 id="debugger" tabindex="-1"><a class="header-anchor" href="#debugger"><span>debugger</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">thisThing</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  debugger</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="断点调试" tabindex="-1"><a class="header-anchor" href="#断点调试"><span>断点调试</span></a></h3><h4 id="js-断点调试" tabindex="-1"><a class="header-anchor" href="#js-断点调试"><span>JS 断点调试</span></a></h4><h4 id="sources-断点" tabindex="-1"><a class="header-anchor" href="#sources-断点"><span>Sources 断点</span></a></h4><h4 id="dom-断点调试" tabindex="-1"><a class="header-anchor" href="#dom-断点调试"><span>DOM 断点调试</span></a></h4><h4 id="xhr-断点调试" tabindex="-1"><a class="header-anchor" href="#xhr-断点调试"><span>XHR 断点调试</span></a></h4><h4 id="事件监听-断点调试" tabindex="-1"><a class="header-anchor" href="#事件监听-断点调试"><span>事件监听 断点调试</span></a></h4><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference"><span>Reference</span></a></h2><ul><li><a href="https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&amp;mid=2651220284&amp;idx=1&amp;sn=26eab0ec27163e7cb020fd95ac0dfaee&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">前端早读课【第556期】一探前端开发中的JS调试技巧</a></li><li><a href="https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&amp;mid=2651227260&amp;idx=1&amp;sn=7471c6326c41ab56d9653948ab5803a8&amp;chksm=bd495df88a3ed4eeec595e226eaa075890ff0b33d08ee72f5639868c63b3b8dd65d255f2cf22&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">前端早读课【第1104期】14 个你可能不知道的 JavaScript 调试技巧</a></li><li><a href="https://mp.weixin.qq.com/s/0g8X8As0X5FdBdjnWWBQkQ" target="_blank" rel="noopener noreferrer">前端早读课【第1112期】前端 Console 调试小技巧</a></li></ul>', 26)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/js/error-handling/debug/","title":"调试","lang":"en-US","frontmatter":{"description":"调试 APP 内 微信 微信下调试H5页面 Chrome 调试 远程调试 参考文档：在安卓设备上使用 Chrome 远程调试功能 可能遇到的问题及解决方法： 手机设置里，打开“USB 调试”开关后，Chrome 上未显示设备，可尝试以下解决方法： 使用正规的数据线（最好是原装的） 重置“开发者选项” Charles iOS 安装证书 在 Safari ...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/js/error-handling/debug/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"调试"}],["meta",{"property":"og:description","content":"调试 APP 内 微信 微信下调试H5页面 Chrome 调试 远程调试 参考文档：在安卓设备上使用 Chrome 远程调试功能 可能遇到的问题及解决方法： 手机设置里，打开“USB 调试”开关后，Chrome 上未显示设备，可尝试以下解决方法： 使用正规的数据线（最好是原装的） 重置“开发者选项” Charles iOS 安装证书 在 Safari ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2022-01-27T06:24:28.000Z"}],["meta",{"property":"article:modified_time","content":"2022-01-27T06:24:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"调试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-01-27T06:24:28.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"APP 内","slug":"app-内","link":"#app-内","children":[{"level":3,"title":"微信","slug":"微信","link":"#微信","children":[]}]},{"level":2,"title":"Chrome 调试","slug":"chrome-调试","link":"#chrome-调试","children":[{"level":3,"title":"远程调试","slug":"远程调试","link":"#远程调试","children":[]}]},{"level":2,"title":"Charles","slug":"charles","link":"#charles","children":[{"level":3,"title":"iOS 安装证书","slug":"ios-安装证书","link":"#ios-安装证书","children":[]}]},{"level":2,"title":"浏览器控制台","slug":"浏览器控制台","link":"#浏览器控制台","children":[{"level":3,"title":"$ 符号","slug":"符号","link":"#符号","children":[]},{"level":3,"title":"事件相关","slug":"事件相关","link":"#事件相关","children":[]},{"level":3,"title":"debugger","slug":"debugger","link":"#debugger","children":[]},{"level":3,"title":"断点调试","slug":"断点调试","link":"#断点调试","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1547198065000,"updatedTime":1643264668000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":3}]},"readingTime":{"minutes":1.64,"words":491},"filePathRelative":"js/error-handling/debug/README.md","localizedDate":"January 11, 2019","autoDesc":true}');
export {
  index_html as comp,
  data
};
