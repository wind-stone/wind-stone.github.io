import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, b as createStaticVNode, o as openBlock } from "./app-BMhVoaeF.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_animation_effects_gradient_shadows = resolveComponent("animation-effects-gradient-shadows");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "渐变阴影",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#渐变阴影"
      }, [
        createBaseVNode("span", null, "渐变阴影")
      ])
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("h2", {
      id: "实现效果",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#实现效果"
      }, [
        createBaseVNode("span", null, "实现效果")
      ])
    ], -1)),
    createVNode(_component_animation_effects_gradient_shadows),
    _cache[2] || (_cache[2] = createStaticVNode('<h2 id="实现说明" tabindex="-1"><a class="header-anchor" href="#实现说明"><span>实现说明</span></a></h2><p><code>box-shadow</code> 无法添加渐变的阴影。因此可以使用伪元素的渐变背景来实现渐变阴影的效果。</p><p>注意：</p><ul><li><code>.box</code> 元素的背景可能是透明的，或者有透明的像素点。</li><li>通过伪元素的 <code>clip-path</code> 属性来裁剪，确保被父元素覆盖的区域的渐变背景不可见，非覆盖区域可见。</li><li>当阴影有偏移时，伪元素的裁剪区域也要随之变化。</li></ul><h2 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码"><span>实现代码</span></a></h2><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;box&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/images/logo.png&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;less&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> scoped</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    position: </span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">relative</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> solid</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;"> #000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    box-sizing: </span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">border</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    margin: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">em</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> auto</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 通过 CSS 变量，控制阴影的偏移</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">    --shadow-x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">    --shadow-y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    &gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    &amp;</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">::after</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        content: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        position: </span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">absolute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        left: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">--shadow-x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        top: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">--shadow-y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        z-index: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        filter: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">blur</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        background: conic</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">gradient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(red, orange, yellow, green, blue, red);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 裁剪，只有 .box 内容区域不显示，其他地方都显示</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 注意，当有偏移时，裁剪也要考虑偏移，比如阴影偏移 10px 10px，则 after 伪类在裁剪时，就要向左和向上偏移 10px</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        clip-path: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">polygon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">            -100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">vmax</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">vmax</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">            100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">vmax</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">vmax</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">            100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">vmax</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">vmax</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">            -100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">vmax</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">vmax</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">            -100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">vmax</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">vmax</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            calc(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> - var(--shadow-x)) calc(0px - var(--shadow-y)),</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            calc(0px - var(--shadow-x)) calc(100% - var(--shadow-y)),</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            calc(100% - var(--shadow-x)) calc(100% - var(--shadow-y)),</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            calc(100% - var(--shadow-x)) calc(0px - var(--shadow-y)),</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            calc(0px - var(--shadow-x)) calc(0px - var(--shadow-y))</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        );</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 6)),
    createVNode(_component_global_config)
  ]);
}
const gradientShadows_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "gradient-shadows.html.vue"]]);
const data = JSON.parse('{"path":"/animation-effects/gradient-shadows.html","title":"渐变阴影","lang":"en-US","frontmatter":{"description":"渐变阴影 实现效果 实现说明 box-shadow 无法添加渐变的阴影。因此可以使用伪元素的渐变背景来实现渐变阴影的效果。 注意： .box 元素的背景可能是透明的，或者有透明的像素点。 通过伪元素的 clip-path 属性来裁剪，确保被父元素覆盖的区域的渐变背景不可见，非覆盖区域可见。 当阴影有偏移时，伪元素的裁剪区域也要随之变化。 实现代码","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/animation-effects/gradient-shadows.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"渐变阴影"}],["meta",{"property":"og:description","content":"渐变阴影 实现效果 实现说明 box-shadow 无法添加渐变的阴影。因此可以使用伪元素的渐变背景来实现渐变阴影的效果。 注意： .box 元素的背景可能是透明的，或者有透明的像素点。 通过伪元素的 clip-path 属性来裁剪，确保被父元素覆盖的区域的渐变背景不可见，非覆盖区域可见。 当阴影有偏移时，伪元素的裁剪区域也要随之变化。 实现代码"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-04T03:35:51.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T03:35:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"渐变阴影\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T03:35:51.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"实现效果","slug":"实现效果","link":"#实现效果","children":[]},{"level":2,"title":"实现说明","slug":"实现说明","link":"#实现说明","children":[]},{"level":2,"title":"实现代码","slug":"实现代码","link":"#实现代码","children":[]}],"git":{"createdTime":1730691351000,"updatedTime":1730691351000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.5,"words":151},"filePathRelative":"animation-effects/gradient-shadows.md","localizedDate":"November 4, 2024","autoDesc":true}');
export {
  gradientShadows_html as comp,
  data
};