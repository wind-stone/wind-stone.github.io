import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, f as createTextVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[21] || (_cache[21] = createBaseVNode("h1", {
      id: "样式",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#样式"
      }, [
        createBaseVNode("span", null, "样式")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#注意事项" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("注意事项")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#功能实现" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("功能实现")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#尺寸适配" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("尺寸适配")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[22] || (_cache[22] = createStaticVNode('<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><ul><li>按钮要有点击态（可使用 mixin 实现）</li><li>针对经常使用的样式，可抽取为<code>mixin</code>公共样式</li><li>切图的图片周围要有空白，防止使用<code>rem</code>导致图片被裁剪</li><li>涉及到用户名（可能包含 emoji）的地方，<code>font-size</code>和<code>line-height</code>不能设置成一样，否则会出现 emoji 上下被截断的问题</li><li>在字体比较小的地方，不用使用边框包裹字体，Android 有些机型上会出现文字偏上的问题。 <ul><li>如果真要这么做，可以在实现时，将字体大小、尺寸等扩大 2 位，再<code>scale(.5)</code></li></ul></li></ul><h2 id="功能实现" tabindex="-1"><a class="header-anchor" href="#功能实现"><span>功能实现</span></a></h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[6] || (_cache[6] = createBaseVNode("p", null, "文字", -1)),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouteLink, { to: "/css/tools/text-ellipsis.html" }, {
              default: withCtx(() => _cache[3] || (_cache[3] = [
                createTextVNode("文字省略")
              ])),
              _: 1
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouteLink, { to: "/css/tools/safe-area.html" }, {
              default: withCtx(() => _cache[4] || (_cache[4] = [
                createTextVNode("安全距离")
              ])),
              _: 1
            })
          ]),
          _cache[5] || (_cache[5] = createBaseVNode("li", null, [
            createTextVNode("文字渐变，"),
            createBaseVNode("a", {
              href: "https://www.zhangxinxu.com/wordpress/2011/04/%E5%B0%8Ftipcss3%E4%B8%8B%E7%9A%84%E6%B8%90%E5%8F%98%E6%96%87%E5%AD%97%E6%95%88%E6%9E%9C%E5%AE%9E%E7%8E%B0/",
              target: "_blank",
              rel: "noopener noreferrer"
            }, "小tip:CSS3下的渐变文字效果实现")
          ], -1))
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[10] || (_cache[10] = createBaseVNode("p", null, "滚动", -1)),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouteLink, { to: "/browser-env/scroll/#css-%E7%9B%B8%E5%85%B3" }, {
              default: withCtx(() => _cache[7] || (_cache[7] = [
                createTextVNode("滚动回弹效果")
              ])),
              _: 1
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouteLink, { to: "/browser-env/scroll/#%E6%BB%9A%E5%8A%A8%E6%9D%A1%E9%9A%90%E8%97%8F%E4%BD%86%E5%8F%AF%E6%BB%9A%E5%8A%A8" }, {
              default: withCtx(() => _cache[8] || (_cache[8] = [
                createTextVNode("隐藏滚动条")
              ])),
              _: 1
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouteLink, { to: "/browser-env/scroll/#%E9%94%9A%E7%82%B9%E5%88%87%E6%8D%A2%E6%97%B6-%E6%B5%81%E7%95%85%E7%9A%84%E6%BB%9A%E5%8A%A8" }, {
              default: withCtx(() => _cache[9] || (_cache[9] = [
                createTextVNode("锚点定位滚动动画")
              ])),
              _: 1
            })
          ])
        ])
      ])
    ]),
    _cache[23] || (_cache[23] = createStaticVNode('<h2 id="尺寸适配" tabindex="-1"><a class="header-anchor" href="#尺寸适配"><span>尺寸适配</span></a></h2><p>使用 postcss 的插件<a href="https://github.com/pigcan/postcss-plugin-px2rem" target="_blank" rel="noopener noreferrer">postcss-plugin-px2rem</a>，可以将代码里的<code>px</code>处理成<code>rem</code>。比如：</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  padding: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 经过 postcss-plugin-px2rem 处理后 */</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  padding: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">rem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 3)),
    createBaseVNode("p", null, [
      _cache[12] || (_cache[12] = createTextVNode("默认是")),
      _cache[13] || (_cache[13] = createBaseVNode("code", null, "1rem = 100px", -1)),
      _cache[14] || (_cache[14] = createTextVNode("，所以需要设置")),
      _cache[15] || (_cache[15] = createBaseVNode("code", null, "document.documentElement.style.fontSize", -1)),
      _cache[16] || (_cache[16] = createTextVNode("为")),
      _cache[17] || (_cache[17] = createBaseVNode("code", null, "100 * 实际屏幕宽度 / 设计稿宽度", -1)),
      _cache[18] || (_cache[18] = createTextVNode("，设置方式可参考：")),
      _cache[19] || (_cache[19] = createBaseVNode("br", null, null, -1)),
      createVNode(_component_RouteLink, { to: "/code-snippet/browser-env/rem/" }, {
        default: withCtx(() => _cache[11] || (_cache[11] = [
          createTextVNode("rem 组件")
        ])),
        _: 1
      }),
      _cache[20] || (_cache[20] = createTextVNode("。"))
    ]),
    createVNode(_component_global_config)
  ]);
}
const cssStyle_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "css-style.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/development-skills/h5/css-style.html","title":"样式","lang":"en-US","frontmatter":{"description":"样式 注意事项 按钮要有点击态（可使用 mixin 实现） 针对经常使用的样式，可抽取为mixin公共样式 切图的图片周围要有空白，防止使用rem导致图片被裁剪 涉及到用户名（可能包含 emoji）的地方，font-size和line-height不能设置成一样，否则会出现 emoji 上下被截断的问题 在字体比较小的地方，不用使用边框包裹字体，And...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/development-skills/h5/css-style.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"样式"}],["meta",{"property":"og:description","content":"样式 注意事项 按钮要有点击态（可使用 mixin 实现） 针对经常使用的样式，可抽取为mixin公共样式 切图的图片周围要有空白，防止使用rem导致图片被裁剪 涉及到用户名（可能包含 emoji）的地方，font-size和line-height不能设置成一样，否则会出现 emoji 上下被截断的问题 在字体比较小的地方，不用使用边框包裹字体，And..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-31T12:47:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-31T12:47:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"样式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-31T12:47:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"功能实现","slug":"功能实现","link":"#功能实现","children":[]},{"level":2,"title":"尺寸适配","slug":"尺寸适配","link":"#尺寸适配","children":[]}],"git":{"createdTime":1639019230000,"updatedTime":1730378820000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":1.25,"words":375},"filePathRelative":"front-end-engineering/development-skills/h5/css-style.md","localizedDate":"December 9, 2021","autoDesc":true}');
export {
  cssStyle_html as comp,
  data
};
