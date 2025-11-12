import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createBaseVNode("h1", {
      id: "特性",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#特性"
      }, [
        createBaseVNode("span", null, "特性")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#布尔特性-boolean-attributes" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("布尔特性（Boolean Attributes）")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#src-和-href-的区别" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("src 和 href 的区别")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#超链接-rel-noopener" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("超链接 rel = noopener")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#首字母自动大写-autocapitalize" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("首字母自动大写 autocapitalize")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[5] || (_cache[5] = createStaticVNode('<h2 id="布尔特性-boolean-attributes" tabindex="-1"><a class="header-anchor" href="#布尔特性-boolean-attributes"><span>布尔特性（Boolean Attributes）</span></a></h2><p>简言之，如下三种表示<code>disabled</code></p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!--</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  表示选中，其中只能如下三种，其他表示均无效</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  - 仅有特性名称</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  - 特性名称 + value</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    - value 是跟特性名称完全一样的字符串</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    - value 为空字符串</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;checkbox&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> checked</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;checkbox&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> checked</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;checked&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;checkbox&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> checked</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- 表示不选中，该特性不能存在 --&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;checkbox&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><a href="http://www.xiaocaoge.com/html-boolean-attributes.html" target="_blank" rel="noopener noreferrer">HTML Boolean Attributes</a></li><li><a href="https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes" target="_blank" rel="noopener noreferrer">Boolean attributes</a></li></ul><h2 id="src-和-href-的区别" tabindex="-1"><a class="header-anchor" href="#src-和-href-的区别"><span>src 和 href 的区别</span></a></h2><p><a href="https://stackoverflow.com/questions/3395359/difference-between-src-and-href" target="_blank" rel="noopener noreferrer">Difference between SRC and HREF</a></p><h2 id="超链接-rel-noopener" tabindex="-1"><a class="header-anchor" href="#超链接-rel-noopener"><span>超链接 rel = noopener</span></a></h2><p>超链接里打开外部网站时，要在超链接上添加<code>res=&quot;noopener&quot;</code>，详见<a href="https://developers.google.com/web/tools/lighthouse/audits/noopener?hl=zh-cn" target="_blank" rel="noopener noreferrer">网站使用 rel=&quot;noopener&quot; 打开外部锚</a></p><h2 id="首字母自动大写-autocapitalize" tabindex="-1"><a class="header-anchor" href="#首字母自动大写-autocapitalize"><span>首字母自动大写 autocapitalize</span></a></h2><ul><li>none等同于off。</li><li>autocapitalize=&quot;words&quot;：每个单词的开头字母会自动大写。</li><li>autocapitalize=&quot;characters&quot;：每个字母都会大写。</li><li>autocapitalize=&quot;sentences&quot;：每句开头字母会自动大写。</li></ul><p>Reference: <a href="https://github.com/yisibl/blog/issues/3" target="_blank" rel="noopener noreferrer">为移动而生的 HTML 属性 #3</a></p>', 11)),
    createVNode(_component_global_config)
  ]);
}
const attributes_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "attributes.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/html-dom/attributes-properties/attributes.html","title":"特性","lang":"en-US","frontmatter":{"description":"特性 布尔特性（Boolean Attributes） 简言之，如下三种表示disabled HTML Boolean Attributes Boolean attributes src 和 href 的区别 Difference between SRC and HREF 超链接 rel = noopener 超链接里打开外部网站时，要在超链接上添加r...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/html-dom/attributes-properties/attributes.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"特性"}],["meta",{"property":"og:description","content":"特性 布尔特性（Boolean Attributes） 简言之，如下三种表示disabled HTML Boolean Attributes Boolean attributes src 和 href 的区别 Difference between SRC and HREF 超链接 rel = noopener 超链接里打开外部网站时，要在超链接上添加r..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"特性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"布尔特性（Boolean Attributes）","slug":"布尔特性-boolean-attributes","link":"#布尔特性-boolean-attributes","children":[]},{"level":2,"title":"src 和 href 的区别","slug":"src-和-href-的区别","link":"#src-和-href-的区别","children":[]},{"level":2,"title":"超链接 rel = noopener","slug":"超链接-rel-noopener","link":"#超链接-rel-noopener","children":[]},{"level":2,"title":"首字母自动大写 autocapitalize","slug":"首字母自动大写-autocapitalize","link":"#首字母自动大写-autocapitalize","children":[]}],"git":{"createdTime":1541560048000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.81,"words":242},"filePathRelative":"browser-env/html-dom/attributes-properties/attributes.md","localizedDate":"November 7, 2018","autoDesc":true}');
export {
  attributes_html as comp,
  data
};
