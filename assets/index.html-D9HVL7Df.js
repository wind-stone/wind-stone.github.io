import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[6] || (_cache[6] = createBaseVNode("h1", {
      id: "ios-兼容性问题",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#ios-兼容性问题"
      }, [
        createBaseVNode("span", null, "iOS 兼容性问题")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#输入框光标问题" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("输入框光标问题")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#active-不生效" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode(":active 不生效")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#ios-10-上-flex-item-元素的子元素的-height-100-未生效" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("iOS 10 上 flex item 元素的子元素的 height: 100% 未生效")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#ios-uiwebview-里滚动页面导致计时器停止" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("iOS UIWebView 里滚动页面导致计时器停止")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#webkit" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("WebKit")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#子元素上存在-transform-时父元素的-border-radius-overflow-hidden-不生效" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("子元素上存在 transform 时父元素的 border-radius + overflow: hidden 不生效")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[7] || (_cache[7] = createStaticVNode('<h2 id="输入框光标问题" tabindex="-1"><a class="header-anchor" href="#输入框光标问题"><span>输入框光标问题</span></a></h2><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;tel&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;请输入手机号&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> maxlength</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;11&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  margin: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  padding: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  font-size: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">16</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  line-height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">36</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 iOS 下，当<code>input</code>聚焦后（但还未输入），光标的长度为<code>input</code>的<code>line-height</code>的高度，而当输入内容后，光标的长度改变为从<code>input</code>顶部到文字底部的距离，导致输入前后光标长度不统一。</p><p>解决方案是，</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">26</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/** 最好加上 height **/</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  padding: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/** 也可以用 margin **/</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  font-size: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">16</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  line-height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">26</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加<code>padding</code>或<code>margin</code>，即可解决。</p><p>此外，经测试，在 iOS 和部分 Android 浏览器上，若是不添加固定的<code>height</code>，输入内容前后<code>input</code>会有细微的高度变化，因此最好加上<code>height</code>。</p><h2 id="active-不生效" tabindex="-1"><a class="header-anchor" href="#active-不生效"><span>:active 不生效</span></a></h2><p>iOS Safari 里，需要在按钮元素或<code>body</code>/<code>html</code>上绑定一个<code>touchstart</code>事件，才能激活<code>:active</code>状态。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addEventListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;touchstart&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () {});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="ios-10-上-flex-item-元素的子元素的-height-100-未生效" tabindex="-1"><a class="header-anchor" href="#ios-10-上-flex-item-元素的子元素的-height-100-未生效"><span>iOS 10 上 flex item 元素的子元素的 height: 100% 未生效</span></a></h2><p>详情可见：<a href="https://github.com/philipwalton/flexbugs/issues/197" target="_blank" rel="noopener noreferrer">100% height doesn&#39;t work within a flex item in a flex-item child (Chrome / Safari) #197</a></p><p>解决方法：将 flex item 元素也变成 flexbox 元素。</p><h2 id="ios-uiwebview-里滚动页面导致计时器停止" tabindex="-1"><a class="header-anchor" href="#ios-uiwebview-里滚动页面导致计时器停止"><span>iOS UIWebView 里滚动页面导致计时器停止</span></a></h2><p>有一些 iOS 客户端内会使用 UIWebView，在 UIWebView 里滚动页面时，到导致计时器、动画等等停止。</p><p>有两种方式解决这个问题：</p><ul><li>【推荐】弃用 UIWebView，改用 WKWebView（若是 WKWebView 没有坑的话）</li><li>使用 better-scroll 等滚动工具模拟原生的滚动</li></ul><p>当使用<code>better-scroll</code>等类似滚动库时，通常会使用<code>transform</code>来做滚动动画的过渡，但是在<code>transform</code>元素下的<code>fixed</code>定位的子元素将以<code>transform</code>元素为包含块进行定位，并失去固定效果。因此需要注意不要将<code>fixed</code>定位的元素放在滚动元素之下。</p><h2 id="webkit" tabindex="-1"><a class="header-anchor" href="#webkit"><span>WebKit</span></a></h2><h3 id="子元素上存在-transform-时父元素的-border-radius-overflow-hidden-不生效" tabindex="-1"><a class="header-anchor" href="#子元素上存在-transform-时父元素的-border-radius-overflow-hidden-不生效"><span>子元素上存在 transform 时父元素的 border-radius + overflow: hidden 不生效</span></a></h3><ul><li><a href="https://bugs.webkit.org/show_bug.cgi?id=98538" target="_blank" rel="noopener noreferrer">WebKit Bugzilla - overflow: hidden + border radius does not work when transform is added to child</a></li><li><a href="https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari" target="_blank" rel="noopener noreferrer">Stack Overflow - Overflow: hidden with border radius not working on Safari</a></li></ul>', 22)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/compatibility/ios/","title":"iOS 兼容性问题","lang":"en-US","frontmatter":{"description":"iOS 兼容性问题 输入框光标问题 在 iOS 下，当input聚焦后（但还未输入），光标的长度为input的line-height的高度，而当输入内容后，光标的长度改变为从input顶部到文字底部的距离，导致输入前后光标长度不统一。 解决方案是， 添加padding或margin，即可解决。 此外，经测试，在 iOS 和部分 Android 浏览器上...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/compatibility/ios/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"iOS 兼容性问题"}],["meta",{"property":"og:description","content":"iOS 兼容性问题 输入框光标问题 在 iOS 下，当input聚焦后（但还未输入），光标的长度为input的line-height的高度，而当输入内容后，光标的长度改变为从input顶部到文字底部的距离，导致输入前后光标长度不统一。 解决方案是， 添加padding或margin，即可解决。 此外，经测试，在 iOS 和部分 Android 浏览器上..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-07-14T08:59:52.000Z"}],["meta",{"property":"article:modified_time","content":"2021-07-14T08:59:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"iOS 兼容性问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-07-14T08:59:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"输入框光标问题","slug":"输入框光标问题","link":"#输入框光标问题","children":[]},{"level":2,"title":":active 不生效","slug":"active-不生效","link":"#active-不生效","children":[]},{"level":2,"title":"iOS 10 上 flex item 元素的子元素的 height: 100% 未生效","slug":"ios-10-上-flex-item-元素的子元素的-height-100-未生效","link":"#ios-10-上-flex-item-元素的子元素的-height-100-未生效","children":[]},{"level":2,"title":"iOS UIWebView 里滚动页面导致计时器停止","slug":"ios-uiwebview-里滚动页面导致计时器停止","link":"#ios-uiwebview-里滚动页面导致计时器停止","children":[]},{"level":2,"title":"WebKit","slug":"webkit","link":"#webkit","children":[{"level":3,"title":"子元素上存在 transform 时父元素的 border-radius + overflow: hidden 不生效","slug":"子元素上存在-transform-时父元素的-border-radius-overflow-hidden-不生效","link":"#子元素上存在-transform-时父元素的-border-radius-overflow-hidden-不生效","children":[]}]}],"git":{"createdTime":1559269694000,"updatedTime":1626253192000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":2}]},"readingTime":{"minutes":1.75,"words":525},"filePathRelative":"browser-env/compatibility/ios/README.md","localizedDate":"May 31, 2019","autoDesc":true}');
export {
  index_html as comp,
  data
};
