import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[13] || (_cache[13] = createBaseVNode("h1", {
      id: "注意事项",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#注意事项"
      }, [
        createBaseVNode("span", null, "注意事项")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#实现阶段" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("实现阶段")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#金额" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("金额")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#金额单位" }, {
                    default: withCtx(() => _cache[2] || (_cache[2] = [
                      createTextVNode("金额单位")
                    ])),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#控制按钮点击频率-事件回调调用频率" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("控制按钮点击频率/事件回调调用频率")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#活动类项目注意事项" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("活动类项目注意事项")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#活动阶段变更" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("活动阶段变更")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#业务监控" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("业务监控")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#纯前端实现最佳实践" }, {
            default: withCtx(() => _cache[7] || (_cache[7] = [
              createTextVNode("纯前端实现最佳实践")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#性能优化" }, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("性能优化")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#坑" }, {
            default: withCtx(() => _cache[9] || (_cache[9] = [
              createTextVNode("坑")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[14] || (_cache[14] = createBaseVNode("h2", {
      id: "实现阶段",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#实现阶段"
      }, [
        createBaseVNode("span", null, "实现阶段")
      ])
    ], -1)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouteLink, { to: "/front-end-engineering/development-skills/h5/style.html" }, {
          default: withCtx(() => _cache[10] || (_cache[10] = [
            createTextVNode("CSS 样式，注意事项、功能实现")
          ])),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouteLink, { to: "/front-end-engineering/development-skills/h5/format.html" }, {
          default: withCtx(() => _cache[11] || (_cache[11] = [
            createTextVNode("JS 格式化")
          ])),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouteLink, { to: "/js/error-handling/log.html#%E5%85%83%E7%B4%A0%E6%97%A5%E5%BF%97" }, {
          default: withCtx(() => _cache[12] || (_cache[12] = [
            createTextVNode("元素埋点")
          ])),
          _: 1
        })
      ])
    ]),
    _cache[15] || (_cache[15] = createStaticVNode('<h3 id="金额" tabindex="-1"><a class="header-anchor" href="#金额"><span>金额</span></a></h3><h4 id="金额单位" tabindex="-1"><a class="header-anchor" href="#金额单位"><span>金额单位</span></a></h4><ul><li>涉及到金额的地方，尤其是需要前端进行计算的场景，金额一定要<strong>使用分为单位</strong>，而不能使用元。</li></ul><h3 id="控制按钮点击频率-事件回调调用频率" tabindex="-1"><a class="header-anchor" href="#控制按钮点击频率-事件回调调用频率"><span>控制按钮点击频率/事件回调调用频率</span></a></h3><ul><li>防爆击，使用<code>lodash.throttle</code>进行节流处理</li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> throttle</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;lodash.throttle&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 300ms 内只触发一次回调，且第一次点击有效</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">ele</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addEventListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;click&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">throttle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // click ..</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">300</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    leading</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    trailing</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>防止频繁触发事件回调，使用<code>lodash.debounce</code>进行防抖动处理</li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> debounce</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;lodash.debounce&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 若 300ms 内连续触发多次 scroll 事件，则以最后一次触发事件的时间作为延迟 300ms 触发的开始时间</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 若 300ms 内只触发一次 scroll 事件，则在触发 scroll 事件后 300ms 后执行回调</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addEventListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;scroll&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">debounce</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // scroll ..</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">300</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="活动类项目注意事项" tabindex="-1"><a class="header-anchor" href="#活动类项目注意事项"><span>活动类项目注意事项</span></a></h2><h3 id="活动阶段变更" tabindex="-1"><a class="header-anchor" href="#活动阶段变更"><span>活动阶段变更</span></a></h3><p>若活动存在<code>未开始</code>、<code>进行中</code>、<code>已结束</code>等不同的阶段：</p><ul><li>同一个页面上展示了不同阶段的数据，需要注意，在阶段切换的时间节点上，阶段可能会发生变化，比如由<code>未开始</code>变成<code>进行中</code>。</li></ul><h2 id="业务监控" tabindex="-1"><a class="header-anchor" href="#业务监控"><span>业务监控</span></a></h2><ul><li>针对业务里的关键路径，需要埋点监控 <ul><li>监控接口的异常返回，并上报异常数据</li><li>监控 JS Bridge 方法的异常返回，并上报异常信息</li><li>监控已捕获的异常，并上报异常信息</li></ul></li><li>调用第三方服务时，需要第三方服务提供对应接口请求曲线，如有必要，在业务里针对第三方服务的结果进行埋点统计异常</li><li>若活动入口在另一个活动里且流量主要依赖该入口，需要提前要取另一个活动的实时 PV 数据</li><li>iOS UIWebView 在页面滑动时会导致计时器暂停 <ul><li>简单解决方法：计时器开始时记录一个本地时间</li></ul></li></ul><h2 id="纯前端实现最佳实践" tabindex="-1"><a class="header-anchor" href="#纯前端实现最佳实践"><span>纯前端实现最佳实践</span></a></h2><ul><li>尽量使用<code>await/async</code>，少使用 Promise</li><li>尽可能使用解构赋值</li><li>Vue <ul><li>使用 composition API，让原先以 UI 组件为单位的组件，改进为用功能为单位的组件</li></ul></li></ul><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化"><span>性能优化</span></a></h2><ul><li>使用<code>will-change</code>提前告诉渲染引擎元素将要做特效变换，比如<code>transform</code></li></ul><h2 id="坑" tabindex="-1"><a class="header-anchor" href="#坑"><span>坑</span></a></h2><ul><li>使用<code>url-polyfill</code>获取<code>url</code>上的参数时，在某些机型上（比如 iOS 10.3.3）会将<code>%2B</code>（对应<code>+</code>字符）解码成<code>20%</code>（对应空格字符）</li></ul>', 20)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/development-skills/h5/","title":"注意事项","lang":"en-US","frontmatter":{"description":"注意事项 实现阶段 金额 金额单位 涉及到金额的地方，尤其是需要前端进行计算的场景，金额一定要使用分为单位，而不能使用元。 控制按钮点击频率/事件回调调用频率 防爆击，使用lodash.throttle进行节流处理 防止频繁触发事件回调，使用lodash.debounce进行防抖动处理 活动类项目注意事项 活动阶段变更 若活动存在未开始、进行中、已结束...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/development-skills/h5/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"注意事项"}],["meta",{"property":"og:description","content":"注意事项 实现阶段 金额 金额单位 涉及到金额的地方，尤其是需要前端进行计算的场景，金额一定要使用分为单位，而不能使用元。 控制按钮点击频率/事件回调调用频率 防爆击，使用lodash.throttle进行节流处理 防止频繁触发事件回调，使用lodash.debounce进行防抖动处理 活动类项目注意事项 活动阶段变更 若活动存在未开始、进行中、已结束..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-31T12:47:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-31T12:47:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"注意事项\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-31T12:47:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"实现阶段","slug":"实现阶段","link":"#实现阶段","children":[{"level":3,"title":"金额","slug":"金额","link":"#金额","children":[]},{"level":3,"title":"控制按钮点击频率/事件回调调用频率","slug":"控制按钮点击频率-事件回调调用频率","link":"#控制按钮点击频率-事件回调调用频率","children":[]}]},{"level":2,"title":"活动类项目注意事项","slug":"活动类项目注意事项","link":"#活动类项目注意事项","children":[{"level":3,"title":"活动阶段变更","slug":"活动阶段变更","link":"#活动阶段变更","children":[]}]},{"level":2,"title":"业务监控","slug":"业务监控","link":"#业务监控","children":[]},{"level":2,"title":"纯前端实现最佳实践","slug":"纯前端实现最佳实践","link":"#纯前端实现最佳实践","children":[]},{"level":2,"title":"性能优化","slug":"性能优化","link":"#性能优化","children":[]},{"level":2,"title":"坑","slug":"坑","link":"#坑","children":[]}],"git":{"createdTime":1576291184000,"updatedTime":1730378820000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":2.16,"words":649},"filePathRelative":"front-end-engineering/development-skills/h5/index.md","localizedDate":"December 14, 2019","autoDesc":true}');
export {
  index_html as comp,
  data
};
