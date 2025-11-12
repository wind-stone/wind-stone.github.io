import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[10] || (_cache[10] = createBaseVNode("h1", {
      id: "_1-可观测体系-稳定性的前提",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#_1-可观测体系-稳定性的前提"
      }, [
        createBaseVNode("span", null, "1. 可观测体系：稳定性的前提")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#监控指标体系" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("监控指标体系")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#用户体验相关" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("用户体验相关")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#页面健康相关" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("页面健康相关")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#业务转化相关" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("业务转化相关")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#其他正常指标" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("其他正常指标")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#指标维度说明" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("指标维度说明")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#指标另一种分类" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("指标另一种分类")
                ])),
                _: 1
              })
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
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#监控阶段" }, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("监控阶段")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#监控策略" }, {
            default: withCtx(() => _cache[9] || (_cache[9] = [
              createTextVNode("监控策略")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[11] || (_cache[11] = createStaticVNode('<p>可观测性指一个系统在其外部输出的辅助下，推断其内部运行状态的能力。</p><p>可观测体系是前端稳定性建设的前提。它通过对前端应用的各个环节进行<strong>全方位的数据采集和分析，让系统的运行状态变得「可见」、「可度量」、「可诊断」</strong>。</p><p>只有建立完善的监控、日志、告警等可观测手段，才能及时发现和定位问题，为稳定性保驾护航。</p><p>主要包括四大支柱：</p><ol><li><strong>监控</strong>：全方位采集前端业务和系统的关键指标，实时呈现系统的运行状态。</li><li><strong>告警</strong>：基于预设阈值规则，对异常指标进行告警，通知相关责任方及时处理。</li><li><strong>日志</strong>：记录各种事件的详细上下文信息，用于问题的事后复盘和审计。</li><li><strong>追踪</strong>：通过分布式链路追踪，梳理请求的完整调用链路，快速定位性能瓶颈。</li></ol><p>其中监控作为可观测体系的核心，又可细分为 4 个层次：</p><ul><li><strong>基础监控</strong>：核心指标监控，如 JS 异常、接口请求异常、资源加载异常等。</li><li><strong>业务监控</strong>：结合业务语义，定制化采集业务指标，如登录成功率、通知弹窗转化率、留资 CTR 等。</li><li><strong>行为监控</strong>：面向用户行为和业务流程，采集用户的行为轨迹和业务漏斗等数据。</li><li><strong>体验监控</strong>：关注用户的主观感受，采集性能指标、页面稳定性等，评估用户体验。</li></ul><h2 id="监控指标体系" tabindex="-1"><a class="header-anchor" href="#监控指标体系"><span>监控指标体系</span></a></h2><p>监控的核心是建立一套全面、有效的指标体系。指标体系要有清晰的分层架构，我们从「用户体验、页面健康、业务转化」三个维度，设计了以下关键指标：</p><h3 id="用户体验相关" tabindex="-1"><a class="header-anchor" href="#用户体验相关"><span>用户体验相关</span></a></h3><p>重点关注性能指标，度量页面在用户设备上的真实体验。</p><table><thead><tr><th>指标</th><th>说明</th><th>相关子指标</th></tr></thead><tbody><tr><td>触达率</td><td>（FMP 数量 / 页面打开的数量）* 100%，FMP 是指从页面打开初始加载到首屏内容实际显示的耗时，不同的宿主环境，页面打开的定义不一样：<br><br>- 比如在浏览器里，能最先取到并上报日志的时机是在 HTML 里最顶端 JS 执行时；<br>- 在 APP 里，可以是 Webview 容器初始化的时候，此时还没开始请求 HTML</td><td>-</td></tr><tr><td>首屏时间</td><td>以用户为中心的性能指标，可以测试用户感知到的页面加载速度。反映页面的可见速度。常见的细化指标包括 LCP、FCP、FMP、TTFB 等<br><br><strong>秒开率</strong>是衡量首屏时间的一个重要指标</td><td>- 秒开率<br>- FMP（P50/P90）</td></tr><tr><td>白屏时间</td><td>从页面请求开始，到页面开始有东西（不一定是首屏内容，也可能是骨架屏）呈现为止。反映页面的响应速度。</td><td>-</td></tr><tr><td>可交互时间</td><td>从页面请求开始，到页面可以响应用户交互。反映页面的可用速度。常见的细化指标包括 TBT 等</td><td>-</td></tr><tr><td>加载时间</td><td>从页面请求开始，到页面全部资源加载完成。反映页面的完整速度。常见的细化指标包括 DOM 树解析耗时，onload 耗时等</td><td>-</td></tr><tr><td>体积大小</td><td>页面加载的资源文件大小。影响页面加载速度和首屏时间等。常见的细化指标包括 页面 CSS 总文件大小、页面 JS 总文件大小、页面 HTML 体积（主要是 SSR 模式下）</td><td>-</td></tr><tr><td>卡顿率</td><td>页面交互过程中出现卡顿的概率。反映页面交互中的用户的使用流畅度。</td><td>-</td></tr></tbody></table><h3 id="页面健康相关" tabindex="-1"><a class="header-anchor" href="#页面健康相关"><span>页面健康相关</span></a></h3><p>重点关注异常指标，度量页面的异常情况及其影响面。</p><table><thead><tr><th>指标</th><th>说明</th><th>相关子指标</th></tr></thead><tbody><tr><td>白屏率</td><td>单位时间内，页面白屏不可用的 UV 与总 UV 的比值。反映页面的整体可用性</td><td>-</td></tr><tr><td>JS 异常率（异常影响率）</td><td>单位时间内，JS 异常的发生次数与 PV 的比值（或 UV 与总 UV 的比值）。反映页面的整体稳定性（JS 异常对用户的影响面）</td><td>- JS 异常次数<br>- JS 异常率<br>- JS 异常影响用户率</td></tr><tr><td>接口异常率</td><td>单位时间内，接口异常的次数与总请求次数的比值。反映接口的整体健康度</td><td>- 接口网络异常<br>- 接口业务异常</td></tr><tr><td>资源加载异常率</td><td>单位时间内，资源加载异常的次数与总资源请求次数的比值。反映资源的可用性。</td><td>-</td></tr><tr><td>CDN 请求成功率</td><td>CDN资源请求的成功率。反映第三方 CDN 等的资源加载的可用性</td><td>-</td></tr></tbody></table><h3 id="业务转化相关" tabindex="-1"><a class="header-anchor" href="#业务转化相关"><span>业务转化相关</span></a></h3><p>重点关注业务指标，度量页面的核心业务表现。（这一项与业务是强相关的，不同的业务，需要梳理自己的业务转换指标）</p><table><thead><tr><th>指标</th><th>说明</th></tr></thead><tbody><tr><td>跳出率</td><td>只浏览一个页面就离开的 Session 占比。反映页面的受欢迎程度</td></tr><tr><td>退出率</td><td>某个页面作为 Session 最后一个访问页面的占比。反映页面的挽留能力</td></tr><tr><td>转化率</td><td>完成预期动作(如注册、下单)的用户数与总用户数的比值。反映页面的转化效率</td></tr></tbody></table><h3 id="其他正常指标" tabindex="-1"><a class="header-anchor" href="#其他正常指标"><span>其他正常指标</span></a></h3><p>以上三点都是从异常的角度总结出的的指标，但实际上，稳定性建设的指标不应该只关注异常指标，还应该关注正常的指标。通过关注正常的指标，可以发现更多的问题，或者协助排查线上问题。</p><table><thead><tr><th>指标</th><th>说明</th></tr></thead><tbody><tr><td>PV/UV</td><td>-</td></tr><tr><td>接入层访问日志，包括 Nginx、Docker 容器等</td><td>-</td></tr><tr><td>-</td><td>-</td></tr></tbody></table><h3 id="指标维度说明" tabindex="-1"><a class="header-anchor" href="#指标维度说明"><span>指标维度说明</span></a></h3><p>维度即按某个字段进行分组聚合，以 JS 异常为例，若是以“页面路径”作为维度，A 页面的 X 异常和 B 页面的同一个 X 异常，是两个不同的异常，绘制在图表里，会呈现出两条不同的曲线。经常使用的维度有：</p><p>BTW，提前是以 项目 ID 为维度。</p><table><thead><tr><th>指标</th><th>可拆分的维度</th></tr></thead><tbody><tr><td>页面访问（UV/PV）</td><td>页面路径</td></tr><tr><td>JS 异常</td><td>页面路径、异常内容等</td></tr><tr><td>接口异常</td><td>接口路径、网络状态码、业务状态码、接口域名、省份</td></tr><tr><td>静态资源（CDN）</td><td>资源 URL、资源类型（JS/CSS/IMAGE/MP4）、省份、运营商</td></tr><tr><td>接入层访问日志</td><td>网络状态码、域名、请求路径</td></tr></tbody></table><h3 id="指标另一种分类" tabindex="-1"><a class="header-anchor" href="#指标另一种分类"><span>指标另一种分类</span></a></h3><p>如上介绍的指标是用从「用户体验、页面健康、业务转化」三个维度来设计的，还用另一个可以参考的分类：</p><ul><li>网络请求全链路访问日志，关注网络请求的访问正常/异常情况 <ul><li>运行容器里请求的发起</li><li>接入层转发（比如 Nginx）</li><li>静态服务容器或接口服务器</li></ul></li><li>前端代码执行生命周期，挖掘代码执行生命周期里可能存在的问题，用于确定前端项目的基础监控指标，所有前端项目通用 <ul><li>页面加载</li><li>静态资源请求</li><li>JS 执行</li><li>接口请求</li><li>页面渲染</li></ul></li><li>用户行为路径，确定用户操作行为中可能存在的卡点 <ul><li>数据获取，如接口请求、Bridge 调用、剪切板、本地存储、url 入参等</li><li>数据校验，函数入参校验、url 参数校验、url 格式校验、接口数据类型及判空校验等</li><li>视图渲染，核心页面/组件渲染结果、动画执行结果、页面崩溃等</li><li>用户交互，按钮重复点击、表单提交、滚动加载、下拉刷新等</li></ul></li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>指标体系制定过程中，指标需要符合 「SMART」 原则。</p><p>指标体系只是起点，要让它真正发挥作用，还需要监控平台、告警机制、故障诊断等配套能力，形成一套闭环的稳定性保障机制。</p><h2 id="监控阶段" tabindex="-1"><a class="header-anchor" href="#监控阶段"><span>监控阶段</span></a></h2><p>除了常规的线上阶段进行监控，还可以监控白名单 + 灰度上线阶段（白名单也是灰度的一种）。</p><p>针对白名单 + 灰度上线阶段的数据，可以挑选一些重要的异常指标进行监控，比如在 30min 内，</p><ul><li>灰度阶段 JS 异常占比</li><li>灰度阶段接口异常占比</li><li>等等。</li></ul><h2 id="监控策略" tabindex="-1"><a class="header-anchor" href="#监控策略"><span>监控策略</span></a></h2><table><thead><tr><th>指标分类</th><th>分类说明</th><th>指标举例</th><th>告警策略</th></tr></thead><tbody><tr><td>直接异常类指标</td><td>只要有数据上报，即表示存在问题</td><td>JS 异常、接口异常</td><td>- 新出现的异常<br>- 异常次数/影响用户数<br>- 异常率/影响用户率<br></td></tr><tr><td>间接异常类指标</td><td>当数据波动达到一定程度，即表示存在问题</td><td>PV/UV、触达率、秒开率、转换率</td><td>- 动态阈值<br>- 掉 0 策略<br>- 同环比策略<br></td></tr></tbody></table><ul><li>新出现的异常：比如新出现的 JS 异常。新出现的定义可以是：按异常内容进行聚合，获取最近 2 周内所有异常第一次出现的时间，如果第一次出现在 30min 内，则认为是新出现的异常。</li><li>动态阈值：适合数据量较大的指标，比如大流量的 PV/UV 等，结合日环比、周同比感知流量的异常变化</li><li>掉 0 策略：适合数据量较少的指标，小流量页面的 PV/UV、分来源的 PV</li></ul><p>同一个监控指标，因日志数据量的不同，可能需要使用不同的告警策略，比如 PV。</p><p>告警策略及阈值，需要持续迭代。比如巡检发现问题，或线上问题未召回，就得修改告警策略或阈值，并使用未召回的案例去验证新策略/阈值是否有效。</p>', 40)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/frontend-stability-construction/observable-system/","title":"1. 可观测体系：稳定性的前提","lang":"en-US","frontmatter":{"description":"1. 可观测体系：稳定性的前提 可观测性指一个系统在其外部输出的辅助下，推断其内部运行状态的能力。 可观测体系是前端稳定性建设的前提。它通过对前端应用的各个环节进行全方位的数据采集和分析，让系统的运行状态变得「可见」、「可度量」、「可诊断」。 只有建立完善的监控、日志、告警等可观测手段，才能及时发现和定位问题，为稳定性保驾护航。 主要包括四大支柱： 监...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/frontend-stability-construction/observable-system/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"1. 可观测体系：稳定性的前提"}],["meta",{"property":"og:description","content":"1. 可观测体系：稳定性的前提 可观测性指一个系统在其外部输出的辅助下，推断其内部运行状态的能力。 可观测体系是前端稳定性建设的前提。它通过对前端应用的各个环节进行全方位的数据采集和分析，让系统的运行状态变得「可见」、「可度量」、「可诊断」。 只有建立完善的监控、日志、告警等可观测手段，才能及时发现和定位问题，为稳定性保驾护航。 主要包括四大支柱： 监..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-13T04:57:19.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-13T04:57:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1. 可观测体系：稳定性的前提\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-13T04:57:19.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"监控指标体系","slug":"监控指标体系","link":"#监控指标体系","children":[{"level":3,"title":"用户体验相关","slug":"用户体验相关","link":"#用户体验相关","children":[]},{"level":3,"title":"页面健康相关","slug":"页面健康相关","link":"#页面健康相关","children":[]},{"level":3,"title":"业务转化相关","slug":"业务转化相关","link":"#业务转化相关","children":[]},{"level":3,"title":"其他正常指标","slug":"其他正常指标","link":"#其他正常指标","children":[]},{"level":3,"title":"指标维度说明","slug":"指标维度说明","link":"#指标维度说明","children":[]},{"level":3,"title":"指标另一种分类","slug":"指标另一种分类","link":"#指标另一种分类","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"监控阶段","slug":"监控阶段","link":"#监控阶段","children":[]},{"level":2,"title":"监控策略","slug":"监控策略","link":"#监控策略","children":[]}],"git":{"createdTime":1728795439000,"updatedTime":1728795439000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":8.32,"words":2497},"filePathRelative":"front-end-engineering/frontend-stability-construction/observable-system/index.md","localizedDate":"October 13, 2024","autoDesc":true}');
export {
  index_html as comp,
  data
};
