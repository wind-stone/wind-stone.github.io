import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, a as createVNode, o as openBlock } from "./app-BMhVoaeF.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="发布" tabindex="-1"><a class="header-anchor" href="#发布"><span>发布</span></a></h1><p>发布声明文件到 NPM 主要有两种方式:</p><ul><li>与 NPM 包捆绑在一起发布</li><li>发布到 NPM 上的<a href="https://www.npmjs.com/~types" target="_blank" rel="noopener noreferrer">@types organization</a></li></ul><p>若你能控制要使用你发布的声明文件的那个 NPM 包的话，推荐第一种方式。</p><p>无论是上述哪一类发布方式，最终的使用方式都是相同的，使用<code>import</code>从 NPM 包上引入即可。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">VNode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;vue&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> Component</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">extend</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // `createElement` 是可推导的，但是 `render` 需要返回值类型</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  render</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">createElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> VNode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> createElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;div&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">greeting</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 6)),
    createVNode(_component_global_config)
  ]);
}
const publish_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "publish.html.vue"]]);
const data = JSON.parse('{"path":"/typescript/usage/publish.html","title":"发布","lang":"en-US","frontmatter":{"description":"发布 发布声明文件到 NPM 主要有两种方式: 与 NPM 包捆绑在一起发布 发布到 NPM 上的@types organization 若你能控制要使用你发布的声明文件的那个 NPM 包的话，推荐第一种方式。 无论是上述哪一类发布方式，最终的使用方式都是相同的，使用import从 NPM 包上引入即可。","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/typescript/usage/publish.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"发布"}],["meta",{"property":"og:description","content":"发布 发布声明文件到 NPM 主要有两种方式: 与 NPM 包捆绑在一起发布 发布到 NPM 上的@types organization 若你能控制要使用你发布的声明文件的那个 NPM 包的话，推荐第一种方式。 无论是上述哪一类发布方式，最终的使用方式都是相同的，使用import从 NPM 包上引入即可。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-10-24T03:16:16.000Z"}],["meta",{"property":"article:modified_time","content":"2021-10-24T03:16:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"发布\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-10-24T03:16:16.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1635045376000,"updatedTime":1635045376000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.46,"words":139},"filePathRelative":"typescript/usage/publish.md","localizedDate":"October 24, 2021","autoDesc":true}');
export {
  publish_html as comp,
  data
};