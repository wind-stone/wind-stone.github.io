import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, a as createVNode, o as openBlock } from "./app-BMhVoaeF.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="自动化测试" tabindex="-1"><a class="header-anchor" href="#自动化测试"><span>自动化测试</span></a></h1><h2 id="ui-自动化测试" tabindex="-1"><a class="header-anchor" href="#ui-自动化测试"><span>UI 自动化测试</span></a></h2><p>针对核心页面及 UI，QA 同学往往会有定期的线上回测。而对于功能相对稳定的 UI，可以通过 UI 自动化测试提升效率，减轻 QA 同学的工作。</p><h3 id="业务痛点" tabindex="-1"><a class="header-anchor" href="#业务痛点"><span>业务痛点</span></a></h3><ul><li>QA 有定期回测机制，占用大量 QA 人力，且回测无法覆盖所有场景</li><li>线上 C 端用户反馈渠道少，研发的监控无法完全覆盖所有业务场景问题</li><li>业务发展历程长，线上常有 UI 方面的历史问题产生</li></ul><h3 id="技术方案" tabindex="-1"><a class="header-anchor" href="#技术方案"><span>技术方案</span></a></h3><p>基于公司内部的移动端自动化测试框架/平台，</p><ol><li>确定业务核心场景测试用例</li><li>UI 用例代码编写</li><li>定时执行代码用例，并通知结果</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> TestMyTab</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> test_my_tab</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        logger.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">info</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;等待启动完成，闪屏加载完成&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        time.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">sleep</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 点击【我】进入 Profile 页面</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        MainPage.tab_me.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        time.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">sleep</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 滑动到 A 模块</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">swipe_by_screen_percent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0.35</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0.66</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0.37</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0.25</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">        ...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口自动化测试" tabindex="-1"><a class="header-anchor" href="#接口自动化测试"><span>接口自动化测试</span></a></h2><p>简单说就是，预先获取一份线上 API 的返回值，后续定时获取并进行对比，当接口发生变化时告警通知。</p>', 11)),
    createVNode(_component_global_config)
  ]);
}
const automatedTesting_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "automated-testing.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/frontend-stability-construction/engineering-construction/automated-testing.html","title":"自动化测试","lang":"en-US","frontmatter":{"description":"自动化测试 UI 自动化测试 针对核心页面及 UI，QA 同学往往会有定期的线上回测。而对于功能相对稳定的 UI，可以通过 UI 自动化测试提升效率，减轻 QA 同学的工作。 业务痛点 QA 有定期回测机制，占用大量 QA 人力，且回测无法覆盖所有场景 线上 C 端用户反馈渠道少，研发的监控无法完全覆盖所有业务场景问题 业务发展历程长，线上常有 UI ...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/frontend-stability-construction/engineering-construction/automated-testing.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"自动化测试"}],["meta",{"property":"og:description","content":"自动化测试 UI 自动化测试 针对核心页面及 UI，QA 同学往往会有定期的线上回测。而对于功能相对稳定的 UI，可以通过 UI 自动化测试提升效率，减轻 QA 同学的工作。 业务痛点 QA 有定期回测机制，占用大量 QA 人力，且回测无法覆盖所有场景 线上 C 端用户反馈渠道少，研发的监控无法完全覆盖所有业务场景问题 业务发展历程长，线上常有 UI ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-15T02:11:07.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-15T02:11:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自动化测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-15T02:11:07.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"UI 自动化测试","slug":"ui-自动化测试","link":"#ui-自动化测试","children":[{"level":3,"title":"业务痛点","slug":"业务痛点","link":"#业务痛点","children":[]},{"level":3,"title":"技术方案","slug":"技术方案","link":"#技术方案","children":[]}]},{"level":2,"title":"接口自动化测试","slug":"接口自动化测试","link":"#接口自动化测试","children":[]}],"git":{"createdTime":1728958267000,"updatedTime":1728958267000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":1,"words":301},"filePathRelative":"front-end-engineering/frontend-stability-construction/engineering-construction/automated-testing.md","localizedDate":"October 15, 2024","autoDesc":true}');
export {
  automatedTesting_html as comp,
  data
};