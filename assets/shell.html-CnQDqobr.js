import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, a as createVNode, o as openBlock } from "./app-BMhVoaeF.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="shell-脚本" tabindex="-1"><a class="header-anchor" href="#shell-脚本"><span>Shell 脚本</span></a></h1><h2 id="常用代码" tabindex="-1"><a class="header-anchor" href="#常用代码"><span>常用代码</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 判断是否传入了第一个参数</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-z</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">$1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;未传入第一个参数&quot;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;传入了第一个参数&quot;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-z</code>: 检测字符串长度是否为<code>0</code>，为<code>0</code>则返回<code>true</code>。</p>', 4)),
    createVNode(_component_global_config)
  ]);
}
const shell_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "shell.html.vue"]]);
const data = JSON.parse('{"path":"/full-stack/operating-system/linux/shell.html","title":"Shell 脚本","lang":"en-US","frontmatter":{"description":"Shell 脚本 常用代码 -z: 检测字符串长度是否为0，为0则返回true。","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/full-stack/operating-system/linux/shell.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Shell 脚本"}],["meta",{"property":"og:description","content":"Shell 脚本 常用代码 -z: 检测字符串长度是否为0，为0则返回true。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-04T08:32:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-04T08:32:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Shell 脚本\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T08:32:47.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"常用代码","slug":"常用代码","link":"#常用代码","children":[]}],"git":{"createdTime":1626255420000,"updatedTime":1714811567000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.22,"words":66},"filePathRelative":"full-stack/operating-system/linux/shell.md","localizedDate":"July 14, 2021","autoDesc":true}');
export {
  shell_html as comp,
  data
};