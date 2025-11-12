import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/assets/show-all-descendant-elements-DQ3dh_nS.gif";
const _imports_1 = "/assets/network-running-D2YtNxXN.gif";
const _imports_2 = "/assets/command-menu-Bje_C2Vo.png";
const _imports_3 = "/assets/screenshot-select-node-CFBynNc6.png";
const _imports_4 = "/assets/screenshot-capture-node-QZTyaJj2.png";
const _imports_5 = "/assets/screenshot-capture-node-result-Ch1XpS6P.png";
const _imports_6 = "/assets/screenshot-capture-full-size-result-2nivw9f3.png";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[9] || (_cache[9] = createBaseVNode("h1", {
      id: "devtools",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#devtools"
      }, [
        createBaseVNode("span", null, "DevTools")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#eelements" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("Eelements")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#展开所有的子节点" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("展开所有的子节点")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#network" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("Network")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#查询进行中的请求" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("查询进行中的请求")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#功能" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("功能")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#命令菜单" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("命令菜单")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#截图" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("截图")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#待补充" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode("待补充")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#参考文档" }, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("参考文档")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[10] || (_cache[10] = createStaticVNode('<h2 id="eelements" tabindex="-1"><a class="header-anchor" href="#eelements"><span>Eelements</span></a></h2><h3 id="展开所有的子节点" tabindex="-1"><a class="header-anchor" href="#展开所有的子节点"><span>展开所有的子节点</span></a></h3><p>在进行 DOM 节点元素调试的时候，我们需要对每个节点进行展开查看，如果只是逐个点击目标元素下面的子元素展开，耗费时间。可以尝试下面的快捷操作。</p><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>控制面板 =&gt; Elements =&gt; 按 option + 点击要展开的元素图标</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="' + _imports_0 + '" alt="展开所有的子节点" tabindex="0" loading="lazy"><figcaption>展开所有的子节点</figcaption></figure><h2 id="network" tabindex="-1"><a class="header-anchor" href="#network"><span>Network</span></a></h2><h3 id="查询进行中的请求" tabindex="-1"><a class="header-anchor" href="#查询进行中的请求"><span>查询进行中的请求</span></a></h3><p>网页请求服务器，有时候发起的请求太多，我们想知道哪些请求返回阻塞了。我们可以对请求的网络进行过滤，来定位问题。</p><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>控制面板 =&gt; Network =&gt; filter图标 =&gt; is:running =&gt; 刷新监控的页面</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="' + _imports_1 + '" alt="查询进行中的请求" tabindex="0" loading="lazy"><figcaption>查询进行中的请求</figcaption></figure><h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能"><span>功能</span></a></h2><h3 id="命令菜单" tabindex="-1"><a class="header-anchor" href="#命令菜单"><span>命令菜单</span></a></h3><p>按<code>Cmd + Shift + P</code>（如果使用 Windows，则按<code>Ctrl + Shift + P</code>）打开<strong>命令</strong>菜单。通过命令菜单，可以快捷完成各种操作。</p><figure><img src="' + _imports_2 + '" alt="命令菜单" tabindex="0" loading="lazy"><figcaption>命令菜单</figcaption></figure><h3 id="截图" tabindex="-1"><a class="header-anchor" href="#截图"><span>截图</span></a></h3><p>若你只是想对一个单独的 DOM 进行截图时，使用别的工具可能比较费时费力，而且多次截图的尺寸和位置也没办法保持完全一致。</p><p>现在，你可以先选中那个 DOM 节点，打开命令菜单并使用<code>Capture node screenshot</code>即可针对单个 DOM 节点进行截图。</p><p>选中 DOM 元素：</p><figure><img src="' + _imports_3 + '" alt="截图 - 选中 node 元素" tabindex="0" loading="lazy"><figcaption>截图 - 选中 node 元素</figcaption></figure><p>打开命令菜单并使用<code>Capture node screenshot</code>进行截图：</p><figure><img src="' + _imports_4 + '" alt="截图 - 对 node 进行截图" tabindex="0" loading="lazy"><figcaption>截图 - 对 node 进行截图</figcaption></figure><p>截图结果：</p><figure><img src="' + _imports_5 + '" alt="截图 - node 截图结果" tabindex="0" loading="lazy"><figcaption>截图 - node 截图结果</figcaption></figure><p>除此之外，使用<code>Capture screenshot</code>可以对页面可视区域截图。使用<code>Capture full size screenshot</code>还可以全屏截图，不止是页面可视区域，还包含滚动条在内的所有页面内容。</p><figure><img src="' + _imports_6 + '" alt="截图 - node 截图结果" tabindex="0" loading="lazy"><figcaption>截图 - node 截图结果</figcaption></figure><h3 id="待补充" tabindex="-1"><a class="header-anchor" href="#待补充"><span>待补充</span></a></h3><p><a href="https://mp.weixin.qq.com/s/5VPjY-IN8RyERMyCwqSGlQ" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/5VPjY-IN8RyERMyCwqSGlQ</a></p><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2><ul><li><a href="https://juejin.cn/post/6881439870380834830" target="_blank" rel="noopener noreferrer">开发调试的九个技巧【谷歌浏览器】</a></li><li><a href="https://mp.weixin.qq.com/s/5VPjY-IN8RyERMyCwqSGlQ" target="_blank" rel="noopener noreferrer">Chrome DevTools中的这些骚操作，你都知道吗？</a></li></ul>', 29)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/browser/dev-tools/","title":"DevTools","lang":"en-US","frontmatter":{"description":"DevTools Eelements 展开所有的子节点 在进行 DOM 节点元素调试的时候，我们需要对每个节点进行展开查看，如果只是逐个点击目标元素下面的子元素展开，耗费时间。可以尝试下面的快捷操作。 展开所有的子节点展开所有的子节点 Network 查询进行中的请求 网页请求服务器，有时候发起的请求太多，我们想知道哪些请求返回阻塞了。我们可以对请求的...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/browser/dev-tools/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"DevTools"}],["meta",{"property":"og:description","content":"DevTools Eelements 展开所有的子节点 在进行 DOM 节点元素调试的时候，我们需要对每个节点进行展开查看，如果只是逐个点击目标元素下面的子元素展开，耗费时间。可以尝试下面的快捷操作。 展开所有的子节点展开所有的子节点 Network 查询进行中的请求 网页请求服务器，有时候发起的请求太多，我们想知道哪些请求返回阻塞了。我们可以对请求的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DevTools\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Eelements","slug":"eelements","link":"#eelements","children":[{"level":3,"title":"展开所有的子节点","slug":"展开所有的子节点","link":"#展开所有的子节点","children":[]}]},{"level":2,"title":"Network","slug":"network","link":"#network","children":[{"level":3,"title":"查询进行中的请求","slug":"查询进行中的请求","link":"#查询进行中的请求","children":[]}]},{"level":2,"title":"功能","slug":"功能","link":"#功能","children":[{"level":3,"title":"命令菜单","slug":"命令菜单","link":"#命令菜单","children":[]},{"level":3,"title":"截图","slug":"截图","link":"#截图","children":[]},{"level":3,"title":"待补充","slug":"待补充","link":"#待补充","children":[]}]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1596805002000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":1.68,"words":503},"filePathRelative":"browser-env/browser/dev-tools/README.md","localizedDate":"August 7, 2020","autoDesc":true}');
export {
  index_html as comp,
  data
};
