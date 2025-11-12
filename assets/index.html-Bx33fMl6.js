import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[16] || (_cache[16] = createBaseVNode("h1", {
      id: "属性",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#属性"
      }, [
        createBaseVNode("span", null, "属性")
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
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#rgba-与-opacity" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("rgba() 与 opacity")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#display" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("display")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#display-none-与-visibility-hidden-与-opacity-0" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("display: none 与 visibility: hidden 与 opacity: 0")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#display-inline-block-的-baseline-的确定" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("display: inline-block 的 baseline 的确定")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#z-index" }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("z-index")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#层叠上下文" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("层叠上下文")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#层叠顺序" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode("层叠顺序")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#vertical-align" }, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("vertical-align")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#perspective" }, {
            default: withCtx(() => _cache[9] || (_cache[9] = [
              createTextVNode("perspective")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#设置-perspective-之后子元素的大小" }, {
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode("设置 perspective 之后子元素的大小")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#width" }, {
            default: withCtx(() => _cache[11] || (_cache[11] = [
              createTextVNode("width")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#css-3-里-width-属性的新取值-max-min-content、fit-content、fill-available" }, {
                default: withCtx(() => _cache[12] || (_cache[12] = [
                  createTextVNode("CSS 3 里 width 属性的新取值：max/min-content、fit-content、fill-available")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#flex-相关" }, {
            default: withCtx(() => _cache[13] || (_cache[13] = [
              createTextVNode("flex 相关")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#flex-basis" }, {
                default: withCtx(() => _cache[14] || (_cache[14] = [
                  createTextVNode("flex-basis")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#属性值的百分比" }, {
            default: withCtx(() => _cache[15] || (_cache[15] = [
              createTextVNode("属性值的百分比")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[17] || (_cache[17] = createStaticVNode('<h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><ul><li>不要用<code>0px</code>，而是<code>0</code></li><li>颜色值 <ul><li>尽量使用<code>#XXX</code>，而不是<code>#XXXXXX</code></li><li>不要使用单词</li></ul></li><li>小数值：不要用<code>0.X</code>，而是<code>.X</code></li></ul><h2 id="rgba-与-opacity" tabindex="-1"><a class="header-anchor" href="#rgba-与-opacity"><span>rgba() 与 opacity</span></a></h2><ul><li><code>rgba()</code>和<code>opacity</code>都能实现透明效果</li><li><code>opacity</code>作用于元素，以及元素内的所有内容的透明度</li><li><code>rgba()</code>只作用于元素的颜色或其背景色，子元素不会继承透明效果</li></ul><h2 id="display" tabindex="-1"><a class="header-anchor" href="#display"><span>display</span></a></h2><h3 id="display-none-与-visibility-hidden-与-opacity-0" tabindex="-1"><a class="header-anchor" href="#display-none-与-visibility-hidden-与-opacity-0"><span>display: none 与 visibility: hidden 与 opacity: 0</span></a></h3><ul><li><code>display: none</code><ul><li>DOM 结构 <ul><li>不会生成<code>box</code>，即不会出现在<code>formatting structure</code>里（可以理解为不会出现在<code>DOM Tree</code>里）</li><li>不会占据空间，即不会影响布局</li></ul></li><li>事件监听 <ul><li>无法进行 DOM 事件监听</li></ul></li><li>继承 <ul><li>不会被子元素继承，且后代元素上设置<code>display</code>不为<code>none</code>，无法覆盖\b这种行为</li></ul></li><li>性能 <ul><li>切换该属性值，会导致<code>reflow</code></li></ul></li></ul></li><li><code>visibility: hidden</code><ul><li>DOM 结构 <ul><li>元素会生成<code>box</code>，会出现在<code>formatting structure</code>里，但是不可见（全透明，不会绘制任何东西）</li><li>会占据空间，会影响布局</li></ul></li><li>事件监听 <ul><li>无法进行 DOM 事件监听</li></ul></li><li>继承 <ul><li>会被子元素继承，且后代元素可通过\b设置<code>visibility: visible</code>使得后代元素可见</li></ul></li><li>性能 <ul><li>切换该属性值，会导致<code>repaint</code></li></ul></li></ul></li><li><code>opacity: 0</code><ul><li>DOM 结构 <ul><li>元素会生成<code>box</code>，会出现在<code>formatting structure</code>里</li><li>会占据空间，会影响布局</li></ul></li><li>事件监听 <ul><li>可以进行 DOM 事件监听</li></ul></li><li>继承 <ul><li>不会被子元素继承，且后代元素设置<code>opacity</code>大于<code>0</code>，无法覆盖这种行为</li></ul></li><li>性能 <ul><li>切换该属性值，会导致<code>repaint</code></li></ul></li></ul></li></ul><h3 id="display-inline-block-的-baseline-的确定" tabindex="-1"><a class="header-anchor" href="#display-inline-block-的-baseline-的确定"><span>display: inline-block 的 baseline 的确定</span></a></h3><blockquote><p>The baseline of an &#39;inline-block&#39; is the baseline of its last line box in the normal flow, unless it has either no in-flow line boxes or if its &#39;overflow&#39; property has a computed value other than &#39;visible&#39;, in which case the baseline is the bottom margin edge. -- <a href="https://www.w3.org/TR/CSS21/visudet.html#line-height" target="_blank" rel="noopener noreferrer">https://www.w3.org/TR/CSS21/visudet.html#line-height</a></p></blockquote><p>翻译成中文：</p><blockquote><p><code>inline-block</code>的基线是正常流中最后一个 line box 的基线, 除非，这个 line box 里面既没有 line boxes 或者本身<code>overflow</code>属性的计算值而不是<code>visible</code>, 这种情况下基线是<code>margin</code>底边缘。</p></blockquote><p>简单说就是：一个<code>inline-block</code>元素，如果里面没有<code>inline</code>内联元素，或者<code>overflow</code>不是<code>visible</code>，则该元素的基线就是其<code>margin</code>底边缘，否则，其基线就是元素里面最后一行内联元素的基线。</p><h2 id="z-index" tabindex="-1"><a class="header-anchor" href="#z-index"><span>z-index</span></a></h2><p>参考：<a href="https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/" target="_blank" rel="noopener noreferrer">深入理解CSS中的层叠上下文和层叠顺序</a></p><h3 id="层叠上下文" tabindex="-1"><a class="header-anchor" href="#层叠上下文"><span>层叠上下文</span></a></h3><p>层叠上下文，<code>Stacking Context</code>。</p><p>哪些元素会创建层叠上下文：</p><ul><li>第一类：页面根元素即<code>html</code>元素，天然具有层叠上下文</li><li>第二类：<code>z-index</code>不为<code>auto</code>的定位元素（<code>position</code>为<code>relative</code>/<code>absolute</code>/<code>fixed</code>）</li><li>第三类：存在如下列出的其中一条 CSS3 属性 <ul><li><code>z-index</code>值不为<code>auto</code>的<code>flex</code>项(父元素<code>display:flex | inline-flex</code>)</li><li>元素的<code>opacity</code>值不是<code>1</code></li><li>元素的<code>transform</code>值不是<code>none</code></li><li>元素<code>mix-blend-mode</code>值不是<code>normal</code></li><li>元素的<code>filter</code>值不是<code>none</code></li><li>元素的<code>isolation</code>值是<code>isolate</code></li><li><code>will-change</code>指定的属性值为上面任意一个</li><li>元素的<code>-webkit-overflow-scrolling</code>设为<code>touch</code></li></ul></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在 CSS 2.1 时代，<code>z-index</code>必须与定位元素一起才能创建层叠上下文，但在 CSS3 里，可以与<code>flex</code>元素（即具有<code>display: flex | inline-flex</code>元素的子元素）一起创建层叠上下文。</p></div><h3 id="层叠顺序" tabindex="-1"><a class="header-anchor" href="#层叠顺序"><span>层叠顺序</span></a></h3><p>层叠顺序，<code>Stacking Order</code>。</p><h2 id="vertical-align" tabindex="-1"><a class="header-anchor" href="#vertical-align"><span>vertical-align</span></a></h2><p>CSS 的属性<code>vertical-align</code>用来指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式。</p><p>也就意味着，<code>vertical-align</code>属性对块级元素是无效的。</p><h2 id="perspective" tabindex="-1"><a class="header-anchor" href="#perspective"><span>perspective</span></a></h2><h3 id="设置-perspective-之后子元素的大小" tabindex="-1"><a class="header-anchor" href="#设置-perspective-之后子元素的大小"><span>设置 perspective 之后子元素的大小</span></a></h3><p>如果父元素设置了 perspective 属性，且子元素设置了 translateZ，则子元素的大小公式为：</p><p>透视距离 / （透视距离-移动距离）</p><p>perspective / (perspective - distance)</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;container”&gt;</span></span>\n<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">  &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">div class=&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">parallax-child”</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.container</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  overflow-x: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">hidden</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  overflow-y: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">scroll</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  perspective: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  perspective-origin: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.parallax-child</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  transform-origin: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  transform: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">translateZ</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上面为例，</p><p>父元素 perspective = 1</p><p>子元素 distance = -2</p><p>则最终 子元素看来变成了原来的 1/3，此时将子元素 scale(3) 将获得跟原来一样的视图</p><h2 id="width" tabindex="-1"><a class="header-anchor" href="#width"><span>width</span></a></h2><h3 id="css-3-里-width-属性的新取值-max-min-content、fit-content、fill-available" tabindex="-1"><a class="header-anchor" href="#css-3-里-width-属性的新取值-max-min-content、fit-content、fill-available"><span>CSS 3 里 width 属性的新取值：max/min-content、fit-content、fill-available</span></a></h3><p>CSS 3 里，<code>width</code>属性又多了几个关键字取值：</p><table><thead><tr><th>“关键字”值</th><th>说明</th></tr></thead><tbody><tr><td><code>fill-available</code></td><td>元素自动充满剩余的空间（类似<code>div</code>元素默认宽度为父元素的<code>100%</code>），但是其<code>display</code>属性可以取其他任意值，比如<code>display: inline-block</code></td></tr><tr><td><code>max-content</code></td><td>先假设容器元素有足够的宽度，其内部元素将按容器元素有足够的空间来布局，<code>max-content</code>的值就是宽度最大的那个内部元素的宽度</td></tr><tr><td><code>min-content</code></td><td>采用内部元素最小宽度值最大的那个元素的宽度作为最终容器的宽度</td></tr><tr><td><code>fit-content</code></td><td>类似于<code>shrink-to-fit</code>，可以实现元素收缩效果，同时能保持原本的<code>display</code>属性特性</td></tr></tbody></table><p>Reference: <a href="https://www.zhangxinxu.com/wordpress/2016/05/css3-width-max-contnet-min-content-fit-content/" target="_blank" rel="noopener noreferrer">张鑫旭 - 理解CSS3 max/min-content及fit-content等width值<br></a></p><h2 id="flex-相关" tabindex="-1"><a class="header-anchor" href="#flex-相关"><span>flex 相关</span></a></h2><h3 id="flex-basis" tabindex="-1"><a class="header-anchor" href="#flex-basis"><span>flex-basis</span></a></h3><ul><li><code>flex-basis</code>默认作用在 Content Box 上</li><li>只有<code>flex-basis</code>为<code>auto</code>时，<code>width</code>才有可能生效</li></ul><p>更多内容，参考<a href="https://www.zhangxinxu.com/wordpress/2019/12/css-flex-basis/" target="_blank" rel="noopener noreferrer">张鑫旭 - Oh My God，CSS flex-basis原来有这么多细节</a></p><h2 id="属性值的百分比" tabindex="-1"><a class="header-anchor" href="#属性值的百分比"><span>属性值的百分比</span></a></h2><p>CSS 有些属性的属性值可以使用百分比值，那么这些百分比值都是相对哪些元素的哪些属性来说的呢？</p><table><thead><tr><th>属性</th><th>相对元素和属性</th><th>说明</th></tr></thead><tbody><tr><td><code>width</code></td><td>包含块宽度<code>width</code></td><td>详见<a href="https://www.w3.org/TR/CSS22/visudet.html#the-width-property" target="_blank" rel="noopener noreferrer">https://www.w3.org/TR/CSS22/visudet.html#the-width-property</a></td></tr><tr><td><code>padding</code></td><td>包含块的宽度<code>width</code></td><td>详见<a href="https://www.w3.org/TR/CSS22/box.html#padding-properties" target="_blank" rel="noopener noreferrer">https://www.w3.org/TR/CSS22/box.html#padding-properties</a></td></tr><tr><td><code>margin</code></td><td>包含块的宽度<code>width</code></td><td>详见<a href="https://www.w3.org/TR/CSS22/box.html#margin-properties" target="_blank" rel="noopener noreferrer">https://www.w3.org/TR/CSS22/box.html#margin-properties</a></td></tr><tr><td><code>left</code>/<code>right</code></td><td>包含块的宽度<code>width</code></td><td>详见<a href="https://www.w3.org/TR/CSS22/visuren.html#position-props" target="_blank" rel="noopener noreferrer">https://www.w3.org/TR/CSS22/visuren.html#position-props</a></td></tr><tr><td><code>height</code></td><td>包含块高度<code>height</code></td><td>详见<a href="https://www.w3.org/TR/CSS22/visudet.html#the-height-property" target="_blank" rel="noopener noreferrer">https://www.w3.org/TR/CSS22/visudet.html#the-height-property</a></td></tr><tr><td><code>top</code>/<code>bottom</code></td><td>包含块的高度<code>height</code></td><td>详见<a href="https://www.w3.org/TR/CSS22/visuren.html#position-props" target="_blank" rel="noopener noreferrer">https://www.w3.org/TR/CSS22/visuren.html#position-props</a></td></tr><tr><td><code>vertical-align</code></td><td>该元素的<code>line-height</code></td><td>详见<a href="https://www.w3.org/TR/CSS22/visudet.html#propdef-vertical-align" target="_blank" rel="noopener noreferrer">https://www.w3.org/TR/CSS22/visudet.html#propdef-vertical-align</a></td></tr><tr><td><code>font-size</code></td><td>父元素<code>font-size</code></td><td>详见<a href="https://www.w3.org/TR/CSS22/fonts.html#propdef-font-size" target="_blank" rel="noopener noreferrer">https://www.w3.org/TR/CSS22/fonts.html#propdef-font-size</a></td></tr></tbody></table>', 47)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/css/properties/","title":"属性","lang":"en-US","frontmatter":{"description":"属性 最佳实践 不要用0px，而是0 颜色值 尽量使用#XXX，而不是#XXXXXX 不要使用单词 小数值：不要用0.X，而是.X rgba() 与 opacity rgba()和opacity都能实现透明效果 opacity作用于元素，以及元素内的所有内容的透明度 rgba()只作用于元素的颜色或其背景色，子元素不会继承透明效果 display di...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/css/properties/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"属性"}],["meta",{"property":"og:description","content":"属性 最佳实践 不要用0px，而是0 颜色值 尽量使用#XXX，而不是#XXXXXX 不要使用单词 小数值：不要用0.X，而是.X rgba() 与 opacity rgba()和opacity都能实现透明效果 opacity作用于元素，以及元素内的所有内容的透明度 rgba()只作用于元素的颜色或其背景色，子元素不会继承透明效果 display di..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-29T03:13:57.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-29T03:13:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"属性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-29T03:13:57.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":2,"title":"rgba() 与 opacity","slug":"rgba-与-opacity","link":"#rgba-与-opacity","children":[]},{"level":2,"title":"display","slug":"display","link":"#display","children":[{"level":3,"title":"display: none 与 visibility: hidden 与 opacity: 0","slug":"display-none-与-visibility-hidden-与-opacity-0","link":"#display-none-与-visibility-hidden-与-opacity-0","children":[]},{"level":3,"title":"display: inline-block 的 baseline 的确定","slug":"display-inline-block-的-baseline-的确定","link":"#display-inline-block-的-baseline-的确定","children":[]}]},{"level":2,"title":"z-index","slug":"z-index","link":"#z-index","children":[{"level":3,"title":"层叠上下文","slug":"层叠上下文","link":"#层叠上下文","children":[]},{"level":3,"title":"层叠顺序","slug":"层叠顺序","link":"#层叠顺序","children":[]}]},{"level":2,"title":"vertical-align","slug":"vertical-align","link":"#vertical-align","children":[]},{"level":2,"title":"perspective","slug":"perspective","link":"#perspective","children":[{"level":3,"title":"设置 perspective 之后子元素的大小","slug":"设置-perspective-之后子元素的大小","link":"#设置-perspective-之后子元素的大小","children":[]}]},{"level":2,"title":"width","slug":"width","link":"#width","children":[{"level":3,"title":"CSS 3 里 width 属性的新取值：max/min-content、fit-content、fill-available","slug":"css-3-里-width-属性的新取值-max-min-content、fit-content、fill-available","link":"#css-3-里-width-属性的新取值-max-min-content、fit-content、fill-available","children":[]}]},{"level":2,"title":"flex 相关","slug":"flex-相关","link":"#flex-相关","children":[{"level":3,"title":"flex-basis","slug":"flex-basis","link":"#flex-basis","children":[]}]},{"level":2,"title":"属性值的百分比","slug":"属性值的百分比","link":"#属性值的百分比","children":[]}],"git":{"createdTime":1541595237000,"updatedTime":1624936437000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":2}]},"readingTime":{"minutes":5.14,"words":1541},"filePathRelative":"css/properties/README.md","localizedDate":"November 7, 2018","autoDesc":true}');
export {
  index_html as comp,
  data
};
