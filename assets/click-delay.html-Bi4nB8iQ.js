import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[9] || (_cache[9] = createBaseVNode("h1", {
      id: "click-延迟",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#click-延迟"
      }, [
        createBaseVNode("span", null, "click 延迟")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#延迟原因" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("延迟原因")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#去除延迟的方法" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("去除延迟的方法")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#tap-事件" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("tap 事件")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#实现原理" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("实现原理")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#zepto-的-tap-事件点击穿透问题" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("zepto 的 tap 事件点击穿透问题")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#现象" }, {
                    default: withCtx(() => _cache[5] || (_cache[5] = [
                      createTextVNode("现象")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#原理" }, {
                    default: withCtx(() => _cache[6] || (_cache[6] = [
                      createTextVNode("原理")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#解决方案" }, {
                    default: withCtx(() => _cache[7] || (_cache[7] = [
                      createTextVNode("解决方案")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#zepto-为何不使用-e-preventdefault-来解决穿透问题" }, {
                    default: withCtx(() => _cache[8] || (_cache[8] = [
                      createTextVNode("zepto 为何不使用 e.preventDefault() 来解决穿透问题？")
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
    _cache[10] || (_cache[10] = createStaticVNode('<h2 id="延迟原因" tabindex="-1"><a class="header-anchor" href="#延迟原因"><span>延迟原因</span></a></h2><p>谷歌的开发者文档《300ms tap delay, gone away》如是说：</p><blockquote><p>For many years, mobile browsers applied a 300-350ms delay between touchend and click while they waited to see if this was going to be a double-tap or not, since double-tap was a gesture to zoom into text.</p></blockquote><p>最早的 iPhone 的 Safari 浏览器中，为了实现触屏中双击放大的效果，当用户点击屏幕后会判断在 300ms 内是否有第二次点击，如果有，就理解成双击，若没有就是单击，就会触发<code>click</code>事件。</p><p>当你点击移动设备的屏幕时，可以分解成多个事件，这些事件都是按顺序依次触发的。</p><p><code>touchstart</code> --&gt; <code>touchmove</code> --&gt; <code>touchend</code> --&gt; <code>click</code></p><h2 id="去除延迟的方法" tabindex="-1"><a class="header-anchor" href="#去除延迟的方法"><span>去除延迟的方法</span></a></h2><blockquote><p>FastClick doesn&#39;t attach any listeners on desktop browsers.</p><p>Chrome 32+ on Android with width=device-width in the viewport meta tag doesn&#39;t have a 300ms delay, therefore listeners aren&#39;t attached.</p><p><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;</code><br> Same goes for Chrome on Android (all versions) with user-scalable=no in the viewport meta tag. But be aware that user-scalable=no also disables pinch zooming, which may be an accessibility concern.</p><p>For IE11+, you can use touch-action: manipulation; to disable double-tap-to-zoom on certain elements (like links and buttons). For IE10 use -ms-touch-action: manipulation.</p></blockquote><p>from: <a href="https://github.com/ftlabs/fastclick#when-it-isnt-needed" target="_blank" rel="noopener noreferrer">FastClick - When it isn&#39;t needed</a></p><h2 id="tap-事件" tabindex="-1"><a class="header-anchor" href="#tap-事件"><span>tap 事件</span></a></h2><h3 id="实现原理" tabindex="-1"><a class="header-anchor" href="#实现原理"><span>实现原理</span></a></h3><p>有些第三方库如<code>zepto</code>、<code>fastclick</code>等实现了<code>tap</code>事件，用于替代移动端的<code>click</code>事件，解决点击延迟的问题。</p><p><code>zepto</code>和<code>fastclick</code>都是在<code>touchend</code>触发之后立即触发事件，不同的是：</p><ul><li><code>zepto</code>：手动触发自定义的<code>tap</code>事件</li><li><code>fastclick</code>：<code>touchend</code>事件触发后，使用<code>document.createEvent</code>手动生成<code>click</code>事件并触发，再取消浏览器触发的<code>click</code>事件</li></ul><p>这里有一个关键的问题是，不能每次<code>touchend</code>之后都触发<code>tap</code>事件，因为有可能用户是在上下滑动而不是在点击（否则可以直接通过监听<code>touchstart</code>事件就可以了）。</p><p>因此，如何判定用户是在点击还是在上下滑动呢？</p><ul><li><code>zepto</code>：通过判断位移偏差，即记录下<code>touchstart</code>时的初始位移，用<code>touchend</code>时的位移减掉初始位移的偏差，如果这个差值在<code>30</code>以内，则认为用户是点击，否则认为是滑动。</li><li><code>fastclick</code>：通过判断时间偏差，分别记录<code>touchstart</code>和<code>touchend</code>的时间戳，如果它们的时间差大于<code>700</code>毫秒，则认为是滑动操作，否则是点击操作。</li></ul><p>如何像<code>jQuery</code>/<code>Zepto</code>一样，实现一个简单的<code>tap</code>事件？请参考：<a href="http://mp.weixin.qq.com/s/NBSPIKpRQH3Re3P6rDykFA" target="_blank" rel="noopener noreferrer">前端早读课-【第1005期】从移动端click到摇一摇</a></p><h3 id="zepto-的-tap-事件点击穿透问题" tabindex="-1"><a class="header-anchor" href="#zepto-的-tap-事件点击穿透问题"><span>zepto 的 tap 事件点击穿透问题</span></a></h3><h4 id="现象" tabindex="-1"><a class="header-anchor" href="#现象"><span>现象</span></a></h4><p>遮罩层中有一标签绑定了<code>tap</code>事件，触发时遮罩层消失，该标签正下方有以下的元素之一：</p><ul><li>绑定了<code>click</code>事件的元素、<code>click</code>时会触发事件（<code>focus</code>/<code>focusout</code>）的元素</li><li>点击时有默认行为的元素，如超链接<code>a</code></li><li><code>input</code>（会出系统键盘的<code>type</code>类型）</li></ul><p>此时点击上层的标签，同时也会触发下层元素的<code>click</code>事件，出现穿透的现象。</p><h4 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h4><p>当触发<code>tap</code>事件，上层遮罩层关闭后，此时事件只进行到<code>touchend</code>事件，而大概 300ms 后才触发<code>click</code>事件，当<code>click</code>事件触发时，上面的遮罩层已消失，就相当于点击到了下层的元素。</p><h4 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h4><ul><li>引入<code>fastclick.js</code><ul><li>存在的问题：</li></ul></li><li>用<code>touchend</code>代替<code>tap</code>事件并阻止掉<code>touchend</code>的默认行为<code>e.preventDefault()</code><ul><li>存在的问题：在很远的区域滑动到目标元素，然后松开，会触发<code>touchend</code>事件</li></ul></li><li>以<code>click</code>事件代替<code>tap</code>事件或者使用<code>tap</code>事件并且添加延迟一定时间（300ms+）来处理事件 <ul><li>存在的问题：需要延时处理事件回调</li></ul></li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;#cbFinish&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;tap&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    setTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //很多处理比如隐藏什么的</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">320</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="zepto-为何不使用-e-preventdefault-来解决穿透问题" tabindex="-1"><a class="header-anchor" href="#zepto-为何不使用-e-preventdefault-来解决穿透问题"><span>zepto 为何不使用 e.preventDefault() 来解决穿透问题？</span></a></h4><p>因为<code>zepto</code>的<code>tap</code>事件统一是在<code>document</code>的<code>touchend</code>时触发的，若在这里使用<code>e.preventDefault()</code>，那页面上所有元素在<code>touchend</code>后触发的事件都不会被执行了。</p><p>Reference:</p><ul><li><a href="http://mp.weixin.qq.com/s/NBSPIKpRQH3Re3P6rDykFA" target="_blank" rel="noopener noreferrer">前端早读课-【第1005期】从移动端click到摇一摇</a></li></ul>', 32)),
    createVNode(_component_global_config)
  ]);
}
const clickDelay_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "click-delay.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/scroll/click-delay.html","title":"click 延迟","lang":"en-US","frontmatter":{"description":"click 延迟 延迟原因 谷歌的开发者文档《300ms tap delay, gone away》如是说： For many years, mobile browsers applied a 300-350ms delay between touchend and click while they waited to see if this was ...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/scroll/click-delay.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"click 延迟"}],["meta",{"property":"og:description","content":"click 延迟 延迟原因 谷歌的开发者文档《300ms tap delay, gone away》如是说： For many years, mobile browsers applied a 300-350ms delay between touchend and click while they waited to see if this was ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"click 延迟\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"延迟原因","slug":"延迟原因","link":"#延迟原因","children":[]},{"level":2,"title":"去除延迟的方法","slug":"去除延迟的方法","link":"#去除延迟的方法","children":[]},{"level":2,"title":"tap 事件","slug":"tap-事件","link":"#tap-事件","children":[{"level":3,"title":"实现原理","slug":"实现原理","link":"#实现原理","children":[]},{"level":3,"title":"zepto 的 tap 事件点击穿透问题","slug":"zepto-的-tap-事件点击穿透问题","link":"#zepto-的-tap-事件点击穿透问题","children":[]}]}],"git":{"createdTime":1551683827000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":3.47,"words":1040},"filePathRelative":"browser-env/scroll/click-delay.md","localizedDate":"March 4, 2019","autoDesc":true}');
export {
  clickDelay_html as comp,
  data
};
