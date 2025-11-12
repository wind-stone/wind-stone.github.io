import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode("h1", {
      id: "less",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#less"
      }, [
        createBaseVNode("span", null, "less")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#最佳实践" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("最佳实践")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#mixins" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("Mixins")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#创建" }, {
                    default: withCtx(() => _cache[2] || (_cache[2] = [
                      createTextVNode("创建")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#使用" }, {
                    default: withCtx(() => _cache[3] || (_cache[3] = [
                      createTextVNode("使用")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#mixins-less-文件" }, {
                    default: withCtx(() => _cache[4] || (_cache[4] = [
                      createTextVNode("mixins.less 文件")
                    ])),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _cache[6] || (_cache[6] = createStaticVNode('<h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><h3 id="mixins" tabindex="-1"><a class="header-anchor" href="#mixins"><span>Mixins</span></a></h3><h4 id="创建" tabindex="-1"><a class="header-anchor" href="#创建"><span>创建</span></a></h4><p>创建 Mixins 必须加上<code>()</code>。如此，若不使用该 Mixins，则不会产生任何无用的代码，可以尽量减少最终的产出文件大小。</p><div class="language-less line-numbers-mode" data-highlighter="shiki" data-ext="less" data-title="less" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 不建议</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-mixin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">black</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 推荐</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-other-mixin</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">() </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  background: </span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">white</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  .my-mixin</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  .my-other-mixin</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>产出：</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-mixin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">black</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">black</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  background: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">white</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h4><p>尽管在使用 Mixins 时<code>()</code>是可选的，但强烈建议必须携带<code>()</code>。按照官方的提示，</p><div class="language-less line-numbers-mode" data-highlighter="shiki" data-ext="less" data-title="less" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.a</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;    </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// currently works, but deprecated; don&#39;t use</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.a</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> ()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// white-space before parentheses is also deprecated</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mixins-less-文件" tabindex="-1"><a class="header-anchor" href="#mixins-less-文件"><span>mixins.less 文件</span></a></h4><p>项目里建议创建一个全局的<code>mixins.less</code>文件，该文件里所有的 Mixins 声明时必须携带<code>()</code>。这样的话，引入<code>mixins.less</code>的文件仅在使用到 Mixins 时才会生成 Mixins 相关的代码，不使用的话就不会产生 Mixins 相关的代码，有效地减少了最终产出的 CSS 文件大小。</p><div class="language-less line-numbers-mode" data-highlighter="shiki" data-ext="less" data-title="less" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// mixins.less</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-mixin</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">() </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">black</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-other-mixin</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">() </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  background: </span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">white</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若是想将 Mixinx 作为常规规则使用，可在 Mixinx 上再封装一层。</p><div class="language-less line-numbers-mode" data-highlighter="shiki" data-ext="less" data-title="less" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;~@/style/mixins.less&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-rule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    .my-mixin</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 15)),
    createVNode(_component_global_config)
  ]);
}
const less_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "less.html.vue"]]);
const data = JSON.parse('{"path":"/css/preprocessor/less.html","title":"less","lang":"en-US","frontmatter":{"description":"less 最佳实践 Mixins 创建 创建 Mixins 必须加上()。如此，若不使用该 Mixins，则不会产生任何无用的代码，可以尽量减少最终的产出文件大小。 产出： 使用 尽管在使用 Mixins 时()是可选的，但强烈建议必须携带()。按照官方的提示， mixins.less 文件 项目里建议创建一个全局的mixins.less文件，该文件里...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/css/preprocessor/less.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"less"}],["meta",{"property":"og:description","content":"less 最佳实践 Mixins 创建 创建 Mixins 必须加上()。如此，若不使用该 Mixins，则不会产生任何无用的代码，可以尽量减少最终的产出文件大小。 产出： 使用 尽管在使用 Mixins 时()是可选的，但强烈建议必须携带()。按照官方的提示， mixins.less 文件 项目里建议创建一个全局的mixins.less文件，该文件里..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"less\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[{"level":3,"title":"Mixins","slug":"mixins","link":"#mixins","children":[]}]}],"git":{"createdTime":1599708989000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.9,"words":271},"filePathRelative":"css/preprocessor/less.md","localizedDate":"September 10, 2020","autoDesc":true}');
export {
  less_html as comp,
  data
};
