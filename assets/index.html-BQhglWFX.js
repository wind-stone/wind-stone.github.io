import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createBaseVNode("h1", {
      id: "问答篇",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#问答篇"
      }, [
        createBaseVNode("span", null, "问答篇")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#css-中可以通过哪些属性定义-使得一个dom元素不显示在浏览器可视范围内" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("CSS 中可以通过哪些属性定义，使得一个DOM元素不显示在浏览器可视范围内？")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#如何实现自适应的正方形" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("如何实现自适应的正方形？")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#解决思路一-padding-top-bottom百分比取值" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("解决思路一：padding-top/bottom百分比取值")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#解决思路二-css3-vw-单位" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("解决思路二：CSS3 vw 单位")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[5] || (_cache[5] = createStaticVNode('<h2 id="css-中可以通过哪些属性定义-使得一个dom元素不显示在浏览器可视范围内" tabindex="-1"><a class="header-anchor" href="#css-中可以通过哪些属性定义-使得一个dom元素不显示在浏览器可视范围内"><span>CSS 中可以通过哪些属性定义，使得一个DOM元素不显示在浏览器可视范围内？</span></a></h2><ul><li>设置<code>display: none</code></li><li>设置<code>visibility: hidden</code></li><li>设置<code>width: 0; height: 0;</code></li><li>设置<code>opacity: 0</code></li><li>设置<code>z-index: -1000</code> (小于<code>0</code>)</li><li>其父元素<code>overflow:hidden</code>，该元素<code>margin-left: -9999px</code></li><li>若是文本元素，设置<code>text-indent: -9999px</code></li><li>...</li></ul><h2 id="如何实现自适应的正方形" tabindex="-1"><a class="header-anchor" href="#如何实现自适应的正方形"><span>如何实现自适应的正方形？</span></a></h2><h3 id="解决思路一-padding-top-bottom百分比取值" tabindex="-1"><a class="header-anchor" href="#解决思路一-padding-top-bottom百分比取值"><span>解决思路一：<code>padding-top/bottom</code>百分比取值</span></a></h3><p><code>padding-top/bottom</code>取值为百分比时，是相对父元素的宽度进行计算的，因此可以这样：</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 方式一：设置 `padding-top/bottom`撑开容器 */</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 不设置此项时，增加内容会增加 height；设置为 0，可保证元素为正方形 */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    padding-bottom: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是以上也有弊端：无法设置元素的<code>max-height</code>（因为元素的<code>height</code>都为<code>0</code>，更不谈<code>max-height</code>了..）</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 方式二：利用伪元素的 margin/padding-top/bottom 撑开容器 */</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    max-height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 此时可以愉快的设置 max-height */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    overflow: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">hidden</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 使用 margin-top/bottom 时需要触发 BFC，消除 margin 重叠 */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.placeholder</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:after</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    content: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">block</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    margin-top: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，在<code>.placeholder</code>元素里添加内容，依然会增加<code>height</code>，可以将内容单独放在其他标签内，并绝对定位</p><h3 id="解决思路二-css3-vw-单位" tabindex="-1"><a class="header-anchor" href="#解决思路二-css3-vw-单位"><span>解决思路二：CSS3 vw 单位</span></a></h3><p>CSS3 中新增了一组相对于可视区域百分比的长度单位<code>vw</code>, <code>vh</code>, <code>vmin</code>, <code>vmax</code>。其中<code>vw</code>是相对于视口宽度百分比的单位，1<code>vw</code> = 1% viewport width，<code>vh</code>是相对于视口高度百分比的单位，1<code>vh</code> = 1% viewport height；<code>vmin</code>是相对当前视口宽高中<code>较小</code>的一个的百分比单位，同理<code>vmax</code>是相对当前视口宽高中<code>较大</code>的一个的百分比单位。</p><p>利用<code>vw</code>单位，我们可以很方便做出自适应的正方形：</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 假设 100% 是指屏幕宽度 */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">vw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 13)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/css/practices/","title":"问答篇","lang":"en-US","frontmatter":{"description":"问答篇 CSS 中可以通过哪些属性定义，使得一个DOM元素不显示在浏览器可视范围内？ 设置display: none 设置visibility: hidden 设置width: 0; height: 0; 设置opacity: 0 设置z-index: -1000 (小于0) 其父元素overflow:hidden，该元素margin-left: -9...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/css/practices/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"问答篇"}],["meta",{"property":"og:description","content":"问答篇 CSS 中可以通过哪些属性定义，使得一个DOM元素不显示在浏览器可视范围内？ 设置display: none 设置visibility: hidden 设置width: 0; height: 0; 设置opacity: 0 设置z-index: -1000 (小于0) 其父元素overflow:hidden，该元素margin-left: -9..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"问答篇\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"CSS 中可以通过哪些属性定义，使得一个DOM元素不显示在浏览器可视范围内？","slug":"css-中可以通过哪些属性定义-使得一个dom元素不显示在浏览器可视范围内","link":"#css-中可以通过哪些属性定义-使得一个dom元素不显示在浏览器可视范围内","children":[]},{"level":2,"title":"如何实现自适应的正方形？","slug":"如何实现自适应的正方形","link":"#如何实现自适应的正方形","children":[{"level":3,"title":"解决思路一：padding-top/bottom百分比取值","slug":"解决思路一-padding-top-bottom百分比取值","link":"#解决思路一-padding-top-bottom百分比取值","children":[]},{"level":3,"title":"解决思路二：CSS3 vw 单位","slug":"解决思路二-css3-vw-单位","link":"#解决思路二-css3-vw-单位","children":[]}]}],"git":{"createdTime":1533973348000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":1.62,"words":485},"filePathRelative":"css/practices/README.md","localizedDate":"August 11, 2018","autoDesc":true}');
export {
  index_html as comp,
  data
};
