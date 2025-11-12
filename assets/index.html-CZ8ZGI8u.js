import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/assets/performance-entry-fg4JD2YE.png";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[10] || (_cache[10] = createBaseVNode("h1", {
      id: "性能优化",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#性能优化"
      }, [
        createBaseVNode("span", null, "性能优化")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#衡量指标" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("衡量指标")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#加载和执行" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("加载和执行")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#优化建议" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("优化建议")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#加载" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("加载")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#执行" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("执行")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#异步加载执行脚本的方法" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("异步加载执行脚本的方法")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#defer-延迟" }, {
                    default: withCtx(() => _cache[6] || (_cache[6] = [
                      createTextVNode("defer 延迟")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#async-异步" }, {
                    default: withCtx(() => _cache[7] || (_cache[7] = [
                      createTextVNode("async 异步")
                    ])),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#性能数据获取" }, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("性能数据获取")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#performance" }, {
                default: withCtx(() => _cache[9] || (_cache[9] = [
                  createTextVNode("Performance")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[11] || (_cache[11] = createStaticVNode('<h2 id="衡量指标" tabindex="-1"><a class="header-anchor" href="#衡量指标"><span>衡量指标</span></a></h2><ul><li>FP</li><li>FCP</li><li>FMP</li><li>DCL，<code>DOMContentLoaded</code></li><li><code>load</code></li></ul><h2 id="加载和执行" tabindex="-1"><a class="header-anchor" href="#加载和执行"><span>加载和执行</span></a></h2><h3 id="优化建议" tabindex="-1"><a class="header-anchor" href="#优化建议"><span>优化建议</span></a></h3><ul><li>将所有的 script 标签放到页面底部，也就是 body 闭合标签之前，这能确保在脚本执行前页面已经完成了渲染</li><li>尽可能地合并脚本。页面中的 script 标签越少，加载也就越快，响应也越迅速。无论是外链脚本还是内嵌脚本都是如此</li><li>采用无阻塞下载 JavaScript 脚本的方法： <ul><li>使用 script 标签的 defer 属性（仅适用于 IE 和 Firefox 3.5 以上版本）</li><li>使用动态创建的 script 元素来下载并执行代码；</li><li>使用 XHR 对象下载 JavaScript 代码并注入页面中。</li></ul></li></ul><h3 id="加载" tabindex="-1"><a class="header-anchor" href="#加载"><span>加载</span></a></h3><ul><li>原始情况 <ul><li>script 脚本阻塞任何资源的下载，同一时间只能下载一个 script 脚本</li></ul></li><li>现阶段高级浏览器： <ul><li>script 并行下载：从 IE 8、Firefox 3.5、Safari 4 和 Chrome 2 开始都允许并行下载 JavaScript 文件，script 标签在下载外部资源时不会阻塞其他 script 标签。遗憾的是，JavaScript 下载过程仍然会阻塞其他资源的下载，比如样式文件和图片。尽管脚本的下载过程不会互相影响，但页面仍然必须等待所有 JavaScript 代码下载并执行完成才能继续。因此，尽管最新的浏览器通过允许并行下载提高了性能，但问题尚未完全解决，脚本阻塞仍然是一个问题。</li><li>由于脚本会阻塞页面其他资源的下载，因此推荐将所有 script 标签尽可能放到 body 标签的底部，以尽量减少对整个页面下载的影响。</li></ul></li></ul><h3 id="执行" tabindex="-1"><a class="header-anchor" href="#执行"><span>执行</span></a></h3><p>浏览器在执行脚本时会出现阻塞，其原因是：</p><p>脚本可能会改变页面或者 JavaScript 的命名空间，它们可能会对后面的页面内容造成影响，比如<code>document.write</code>。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Source Example&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;text/javascript&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">write</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Today is &quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toDateString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">());</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当浏览器遇到 script 标签时，当前 HTML 页面无从获知 JavaScript 是否会向 p 标签添加内容，或引入其他元素，或甚至移除该标签。因此，这时浏览器会停止处理页面，先执行 JavaScript 代码，然后再继续解析和渲染页面。同样的情况也发生在使用 src 属性加载 JavaScript 的过程中，浏览器必须先花时间下载外链文件中的代码，然后解析并执行它。在这个过程中，页面渲染和用户交互完全被阻塞了。</p><h3 id="异步加载执行脚本的方法" tabindex="-1"><a class="header-anchor" href="#异步加载执行脚本的方法"><span>异步加载执行脚本的方法</span></a></h3><h4 id="defer-延迟" tabindex="-1"><a class="header-anchor" href="#defer-延迟"><span>defer 延迟</span></a></h4><p>HTML 4.0 规范，其作用是，告诉浏览器，等到 DOM+CSSOM 渲染完成，再执行指定脚本。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> defer</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;xx.js&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>浏览器开始解析 HTML 网页</li><li>解析过程中，发现带有 defer 属性的 script 标签</li><li>浏览器继续往下解析 HTML 网页，解析完就渲染到页面上，同时并行下载 script 标签中的外部脚本</li><li>浏览器完成解析 HTML 网页，此时再执行下载的脚本，完成后触发 DOMContentLoaded</li></ul><p>下载的脚本文件在 DOMContentLoaded 事件触发前执行（即刚刚读取完&lt;/html&gt;标签），而且可以保证执行顺序就是它们在页面上出现的顺序。所以 添加 defer 属性后，domReady 的时间并没有提前，但它可以让页面更快显示出来。</p><p>将放在页面上方的 script 加 defer，在 PC Chrome 下其效果相当于 把这个 script 放在底部，页面会先显示。 但对 iOS Safari 和 iOS WebView 加 defer 和 script 放底部一样都是长时间白屏</p><h4 id="async-异步" tabindex="-1"><a class="header-anchor" href="#async-异步"><span>async 异步</span></a></h4><p>HTML 5 规范，其作用是，使用另一个进程下载脚本，下载时不会阻塞渲染，并且下载完成后立刻执行。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> async</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;yy.js&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>浏览器开始解析 HTML 网页</li><li>解析过程中，发现带有 async 属性的 script 标签</li><li>浏览器继续往下解析 HTML 网页，解析完先显示页面并触发 DOMContentLoaded，同时并行下载 script 标签中的外部脚本</li><li>脚本下载完成，浏览器暂停解析 HTML 网页，开始执行下载的脚本</li><li>脚本执行完毕，浏览器恢复解析 HTML 网页</li></ul><p>async 属性可以保证脚本下载的同时，浏览器继续渲染。但是 async 无法保证脚本的执行顺序。哪个脚本先下载结束，就先执行那个脚本。</p><p>Reference</p><ul><li>高性能</li><li><a href="http://taobaofed.org/blog/2016/01/20/mobile-wpo-pageshow-async/" target="_blank" rel="noopener noreferrer">无线性能优化：页面可见时间与异步加载</a></li></ul><h2 id="性能数据获取" tabindex="-1"><a class="header-anchor" href="#性能数据获取"><span>性能数据获取</span></a></h2><h3 id="performance" tabindex="-1"><a class="header-anchor" href="#performance"><span>Performance</span></a></h3><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Performance/getEntries" target="_blank" rel="noopener noreferrer">Performance.getEntries()</a>可以获取如下图里的所有数据：</p><figure><img src="' + _imports_0 + '" alt="性能入口数据" tabindex="0" loading="lazy"><figcaption>性能入口数据</figcaption></figure><p>详见：<a href="http://www.alloyteam.com/2015/09/explore-performance/" target="_blank" rel="noopener noreferrer">Alloy Team - 初探 performance – 监控网页与程序性能</a></p>', 31)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/browser/performance/","title":"性能优化","lang":"en-US","frontmatter":{"description":"性能优化 衡量指标 FP FCP FMP DCL，DOMContentLoaded load 加载和执行 优化建议 将所有的 script 标签放到页面底部，也就是 body 闭合标签之前，这能确保在脚本执行前页面已经完成了渲染 尽可能地合并脚本。页面中的 script 标签越少，加载也就越快，响应也越迅速。无论是外链脚本还是内嵌脚本都是如此 采用无阻...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/browser/performance/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"性能优化"}],["meta",{"property":"og:description","content":"性能优化 衡量指标 FP FCP FMP DCL，DOMContentLoaded load 加载和执行 优化建议 将所有的 script 标签放到页面底部，也就是 body 闭合标签之前，这能确保在脚本执行前页面已经完成了渲染 尽可能地合并脚本。页面中的 script 标签越少，加载也就越快，响应也越迅速。无论是外链脚本还是内嵌脚本都是如此 采用无阻..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2022-02-11T03:32:45.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-11T03:32:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"性能优化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-02-11T03:32:45.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"衡量指标","slug":"衡量指标","link":"#衡量指标","children":[]},{"level":2,"title":"加载和执行","slug":"加载和执行","link":"#加载和执行","children":[{"level":3,"title":"优化建议","slug":"优化建议","link":"#优化建议","children":[]},{"level":3,"title":"加载","slug":"加载","link":"#加载","children":[]},{"level":3,"title":"执行","slug":"执行","link":"#执行","children":[]},{"level":3,"title":"异步加载执行脚本的方法","slug":"异步加载执行脚本的方法","link":"#异步加载执行脚本的方法","children":[]}]},{"level":2,"title":"性能数据获取","slug":"性能数据获取","link":"#性能数据获取","children":[{"level":3,"title":"Performance","slug":"performance","link":"#performance","children":[]}]}],"git":{"createdTime":1494856789000,"updatedTime":1644550365000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":4.06,"words":1217},"filePathRelative":"browser-env/browser/performance/index.md","localizedDate":"May 15, 2017","autoDesc":true}');
export {
  index_html as comp,
  data
};
