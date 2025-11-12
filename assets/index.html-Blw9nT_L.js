import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, d as createBaseVNode, a as createVNode, e as withCtx, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[7] || (_cache[7] = createStaticVNode('<h1 id="前端稳定性建设" tabindex="-1"><a class="header-anchor" href="#前端稳定性建设"><span>前端稳定性建设</span></a></h1><p>如下内容及相关子文章的内容主要复制于 <a href="https://www.phppan.com/2024/07/systematic-thinking-on-front-end-stability-construction/" target="_blank" rel="noopener noreferrer">关于前端稳定性建设的系统性思考</a>，并添加一些我在日常工作中执行的细节。</p><h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言"><span>引言</span></a></h2><p>随着前端技术的不断发展和前端应用工程的日益复杂化，前端系统的稳定性已经成为一个不容忽视的话题。</p><p>从技术站位来看，前端是连接用户与后端的重要桥梁。<strong>前端的稳定性直接关系到用户体验和产品形象。</strong></p><p>如此，我们可以定义前端稳定性是指<strong>从用户的角度出发，检测到的整个系统的稳定性</strong>，系统任何一个环节的缺失都会对体验造成影响。</p><p>在实际业务中，我们经常看到有内部或外部的用户反馈，图片没有显示、页面点不了，卡住了，白屏了等等。这都是从用户的角度出发发现的问题，但是常常我们没有一个体系来观测这些问题以及去跟踪解决这些问题。</p><p>这些问题直接关系到用户的使用体验和企业的业务发展。如果前端应用经常出现崩溃、卡顿、响应慢等问题，不仅会降低用户的满意度和忠诚度，还可能导致用户流失和业务损失。因此，前端稳定性建设是保障用户体验和业务发展的基础性工作。</p><p>前端稳定性建设面临的挑战主要来自于以下几个方面：</p><h3 id="浏览器兼容性问题" tabindex="-1"><a class="header-anchor" href="#浏览器兼容性问题"><span>浏览器兼容性问题</span></a></h3><p>和后端不同，后端的运行环境是在后端开发同学可控范围内的，而前端应用需要在各种不同的浏览器上运行，而不同浏览器厂商对前端技术的支持程度和实现方式存在差异。这就要求前端工程师在开发时要考虑各种兼容性问题，并进行大量的跨浏览器测试和调试工作。否则，可能导致某些浏览器上出现页面显示异常、功能不可用等稳定性问题。</p><h3 id="网络环境复杂多变" tabindex="-1"><a class="header-anchor" href="#网络环境复杂多变"><span>网络环境复杂多变</span></a></h3><p>前端应用的运行依赖于网络环境，除了自身资源的加载，还有后端请求等。然而，用户的网络条件千差万别，如弱网、断网、高延迟等问题时有发生。这些网络问题如果处理不当，会严重影响页面的加载速度和交互体验。同时，前端还需要考虑不同网络环境下的离线化方案，确保核心功能的可用性。</p><h3 id="第三方服务不可用" tabindex="-1"><a class="header-anchor" href="#第三方服务不可用"><span>第三方服务不可用</span></a></h3><p>CDN、云存储、广告等第三方服务故障或变更也会影响前端的稳定性。</p><h3 id="代码质量参差不齐" tabindex="-1"><a class="header-anchor" href="#代码质量参差不齐"><span>代码质量参差不齐</span></a></h3><p>前端代码通常由多人协作完成，开发人员的技术水平和编码习惯差异较大。这导致项目中经常存在大量的遗留代码和技术债，代码质量难以保证。低质量的代码不仅难以维护，还可能引入各种 bug 和性能问题，成为影响稳定性的重要因素。</p><h3 id="业务需求快速变化" tabindex="-1"><a class="header-anchor" href="#业务需求快速变化"><span>业务需求快速变化</span></a></h3><p>在快速的业务发展中，前端需求也在不断变化。频繁的需求更新和版本迭代，给前端开发和测试带来了很大压力。一方面，需要在有限的时间内快速响应需求；另一方面，又要尽可能保证每个版本的质量和稳定性。两者之间如何平衡，是一个不小的挑战。</p><h3 id="缺乏完善的监控和报警" tabindex="-1"><a class="header-anchor" href="#缺乏完善的监控和报警"><span>缺乏完善的监控和报警</span></a></h3><p>相对于后端，前端在监控和告警方面相对薄弱一些，并且前端错误和异常的表现形式多种多样，如白屏、卡顿、闪退等，而且难以通过后端日志发现和定位。如果没有完善的前端监控和报警机制，这些问题很可能被延迟发现甚至遗漏，从而酿成严重的线上事故。因此，构建全面的前端监控体系，是稳定性建设的重要一环。</p><h3 id="缺少专门的稳定性团队和机制" tabindex="-1"><a class="header-anchor" href="#缺少专门的稳定性团队和机制"><span>缺少专门的稳定性团队和机制</span></a></h3><p>很多团队缺少专门的稳定性工程师来推动前端稳定性建设，也没有将稳定性纳入考核机制。这导致稳定性工作容易陷入「重功能，轻质量」的误区。没有专人推动和持续投入，前端稳定性很难真正做起来、做下去、做出效果。</p><h3 id="技术更新迭代加快" tabindex="-1"><a class="header-anchor" href="#技术更新迭代加快"><span>技术更新迭代加快</span></a></h3><p>前端领域的新技术和新框架层出不穷，更新迭代速度非常快。但新技术在给开发带来便利的同时，也可能引入新的稳定性风险。团队需要在引入新技术时，充分评估其稳定性，并制定风险应对预案。同时，对遗留项目的老旧技术栈，也需要有计划地进行升级和重构，化解潜在的不稳定因素。</p><h2 id="详细建设方案" tabindex="-1"><a class="header-anchor" href="#详细建设方案"><span>详细建设方案</span></a></h2><p>以上这些都会导致前端稳定性建设的风险发生，基于过往实践的一些经验，尝试系统性思考和梳理前端稳定性建设，总共有 7 点：</p>', 27)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouteLink, { to: "/front-end-engineering/frontend-stability-construction/observable-system/" }, {
          default: withCtx(() => _cache[0] || (_cache[0] = [
            createTextVNode("可观测体系")
          ])),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouteLink, { to: "/front-end-engineering/frontend-stability-construction/full-link-monitoring/" }, {
          default: withCtx(() => _cache[1] || (_cache[1] = [
            createTextVNode("全链路监控")
          ])),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouteLink, { to: "/front-end-engineering/frontend-stability-construction/high-availability-architecture/" }, {
          default: withCtx(() => _cache[2] || (_cache[2] = [
            createTextVNode("高可用架构")
          ])),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouteLink, { to: "/front-end-engineering/frontend-stability-construction/performance/" }, {
          default: withCtx(() => _cache[3] || (_cache[3] = [
            createTextVNode("性能管理")
          ])),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouteLink, { to: "/front-end-engineering/frontend-stability-construction/risk-management/" }, {
          default: withCtx(() => _cache[4] || (_cache[4] = [
            createTextVNode("风险治理")
          ])),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouteLink, { to: "/front-end-engineering/frontend-stability-construction/processs-mechanism/" }, {
          default: withCtx(() => _cache[5] || (_cache[5] = [
            createTextVNode("流程机制")
          ])),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouteLink, { to: "/front-end-engineering/frontend-stability-construction/engineering-construction/" }, {
          default: withCtx(() => _cache[6] || (_cache[6] = [
            createTextVNode("工程建设")
          ])),
          _: 1
        })
      ])
    ]),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/frontend-stability-construction/","title":"前端稳定性建设","lang":"en-US","frontmatter":{"description":"前端稳定性建设 如下内容及相关子文章的内容主要复制于 关于前端稳定性建设的系统性思考，并添加一些我在日常工作中执行的细节。 引言 随着前端技术的不断发展和前端应用工程的日益复杂化，前端系统的稳定性已经成为一个不容忽视的话题。 从技术站位来看，前端是连接用户与后端的重要桥梁。前端的稳定性直接关系到用户体验和产品形象。 如此，我们可以定义前端稳定性是指从用...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/frontend-stability-construction/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"前端稳定性建设"}],["meta",{"property":"og:description","content":"前端稳定性建设 如下内容及相关子文章的内容主要复制于 关于前端稳定性建设的系统性思考，并添加一些我在日常工作中执行的细节。 引言 随着前端技术的不断发展和前端应用工程的日益复杂化，前端系统的稳定性已经成为一个不容忽视的话题。 从技术站位来看，前端是连接用户与后端的重要桥梁。前端的稳定性直接关系到用户体验和产品形象。 如此，我们可以定义前端稳定性是指从用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-13T04:57:19.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-13T04:57:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端稳定性建设\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-13T04:57:19.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"引言","slug":"引言","link":"#引言","children":[{"level":3,"title":"浏览器兼容性问题","slug":"浏览器兼容性问题","link":"#浏览器兼容性问题","children":[]},{"level":3,"title":"网络环境复杂多变","slug":"网络环境复杂多变","link":"#网络环境复杂多变","children":[]},{"level":3,"title":"第三方服务不可用","slug":"第三方服务不可用","link":"#第三方服务不可用","children":[]},{"level":3,"title":"代码质量参差不齐","slug":"代码质量参差不齐","link":"#代码质量参差不齐","children":[]},{"level":3,"title":"业务需求快速变化","slug":"业务需求快速变化","link":"#业务需求快速变化","children":[]},{"level":3,"title":"缺乏完善的监控和报警","slug":"缺乏完善的监控和报警","link":"#缺乏完善的监控和报警","children":[]},{"level":3,"title":"缺少专门的稳定性团队和机制","slug":"缺少专门的稳定性团队和机制","link":"#缺少专门的稳定性团队和机制","children":[]},{"level":3,"title":"技术更新迭代加快","slug":"技术更新迭代加快","link":"#技术更新迭代加快","children":[]}]},{"level":2,"title":"详细建设方案","slug":"详细建设方案","link":"#详细建设方案","children":[]}],"git":{"createdTime":1728795439000,"updatedTime":1728795439000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":4.74,"words":1422},"filePathRelative":"front-end-engineering/frontend-stability-construction/index.md","localizedDate":"October 13, 2024","autoDesc":true}');
export {
  index_html as comp,
  data
};
