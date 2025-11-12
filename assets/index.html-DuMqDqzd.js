import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode("h1", {
      id: "git",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#git"
      }, [
        createBaseVNode("span", null, "GIT")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#git-文件夹名称-文件名称-不区分大小写" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("git 文件夹名称/文件名称 不区分大小写")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[2] || (_cache[2] = createStaticVNode('<h2 id="git-文件夹名称-文件名称-不区分大小写" tabindex="-1"><a class="header-anchor" href="#git-文件夹名称-文件名称-不区分大小写"><span>git 文件夹名称/文件名称 不区分大小写</span></a></h2><p>git 默认对文件夹名称/文件名称的大小写是不敏感的，如果仅是修改了文件夹名称/文件名称的大小写，通过<code>git status</code>无法发现代码有任何变化。</p><p>配置配置</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">core.ignorecase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改默认配置，使 git 区分大小写</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> core.ignorecase</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>', 6)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/full-stack/operating-system/git/","title":"GIT","lang":"en-US","frontmatter":{"description":"GIT git 文件夹名称/文件名称 不区分大小写 git 默认对文件夹名称/文件名称的大小写是不敏感的，如果仅是修改了文件夹名称/文件名称的大小写，通过git status无法发现代码有任何变化。 配置配置 修改默认配置，使 git 区分大小写","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/full-stack/operating-system/git/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"GIT"}],["meta",{"property":"og:description","content":"GIT git 文件夹名称/文件名称 不区分大小写 git 默认对文件夹名称/文件名称的大小写是不敏感的，如果仅是修改了文件夹名称/文件名称的大小写，通过git status无法发现代码有任何变化。 配置配置 修改默认配置，使 git 区分大小写"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-04T08:32:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-04T08:32:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GIT\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T08:32:47.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"git 文件夹名称/文件名称 不区分大小写","slug":"git-文件夹名称-文件名称-不区分大小写","link":"#git-文件夹名称-文件名称-不区分大小写","children":[]}],"git":{"createdTime":1502780413000,"updatedTime":1714811567000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.35,"words":106},"filePathRelative":"full-stack/operating-system/git/README.md","localizedDate":"August 15, 2017","autoDesc":true}');
export {
  index_html as comp,
  data
};
