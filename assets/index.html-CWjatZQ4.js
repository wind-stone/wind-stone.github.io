import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[11] || (_cache[11] = createBaseVNode("h1", {
      id: "布局",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#布局"
      }, [
        createBaseVNode("span", null, "布局")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#流类型" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("流类型")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#垂直居中" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("垂直居中")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#外边距折叠" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("外边距折叠")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#为什么会出现外边距折叠" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("为什么会出现外边距折叠")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#清除浮动" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("清除浮动")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#shrink-to-fit" }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("shrink-to-fit")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#box" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("box")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#块级元素-块级盒" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode("块级元素/块级盒")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#块容器盒-block-container-box" }, {
                default: withCtx(() => _cache[8] || (_cache[8] = [
                  createTextVNode("块容器盒（block container box）")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#块盒" }, {
                default: withCtx(() => _cache[9] || (_cache[9] = [
                  createTextVNode("块盒")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#行盒" }, {
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode("行盒")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[12] || (_cache[12] = createStaticVNode('<h2 id="流类型" tabindex="-1"><a class="header-anchor" href="#流类型"><span>流类型</span></a></h2><ul><li><code>normal flow</code>，常规流/标准流/普通流，包含： <ul><li><code>block formatting</code>，BFC 即为<code>block formatting context</code></li><li><code>inline formatting</code>，IFC 即为<code>inline formatting context</code></li><li><code>relative positioning</code></li></ul></li><li><code>floats</code>，浮动</li><li><code>absolute positioning</code>，绝对定位</li></ul><h2 id="垂直居中" tabindex="-1"><a class="header-anchor" href="#垂直居中"><span>垂直居中</span></a></h2><ul><li>绝对定位 + 负margin值（固定宽高度）</li><li>绝对定位 + transform: translate（不固定宽高度）</li><li>table-cell法（兼容低版本浏览器最好的方法）</li><li>inline-block + 伪元素</li><li>Flexbox法</li></ul><p>详见：<a href="http://blog.csdn.net/cxl444905143/article/details/41890353" target="_blank" rel="noopener noreferrer">元素水平垂直居中方法集锦</a></p><h2 id="外边距折叠" tabindex="-1"><a class="header-anchor" href="#外边距折叠"><span>外边距折叠</span></a></h2><h3 id="为什么会出现外边距折叠" tabindex="-1"><a class="header-anchor" href="#为什么会出现外边距折叠"><span>为什么会出现外边距折叠</span></a></h3><p>主要为了排版的需要，因为在多数情况下，折叠垂直外边距可以在视觉上显得更美观，也更贴近设计师的预期。</p><h2 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动"><span>清除浮动</span></a></h2><p>浮动元素会影响它的兄弟元素的位置和让父元素产生高度塌陷，清除浮动的方法有</p><ul><li>clear: both（应用在空 div 元素或者父元素的 after 伪类上）</li><li>br 标签的 clear 属性<code>&lt;br clear=&quot;all&quot;&gt;</code></li><li>浮动父元素（触发 BFC）</li><li>overflow: hidden（触发 BFC）</li><li>display: table 或 table-cells（触发 BFC，display:table 本身并不产生 BFC，而是由它产生匿名框，匿名框中包含 &quot;display:table-cell&quot; 的框会产 BFC）</li></ul><h2 id="shrink-to-fit" tabindex="-1"><a class="header-anchor" href="#shrink-to-fit"><span>shrink-to-fit</span></a></h2><p><code>shrink-to-fit</code>，指的是块级元素只占据内容所需要的宽度。<code>shrink-to-fit</code>，字面意思就是收缩包围。五种常见的使块元素<code>shrink-to-fit</code>的方式：</p><ul><li>通过<code>float</code>属性</li><li>通过<code>display:inline/inline-block</code></li><li>通过<code>position: absolute</code></li><li>通过<code>display: table</code></li></ul><h2 id="box" tabindex="-1"><a class="header-anchor" href="#box"><span>box</span></a></h2><p><code>box</code>是 CSS 布局的对象和基本单位，直观点说就是一个页面是由很多个<code>box</code>组成的，元素的类型和<code>display</code>属性决定了<code>box</code>的类型。</p><h3 id="块级元素-块级盒" tabindex="-1"><a class="header-anchor" href="#块级元素-块级盒"><span>块级元素/块级盒</span></a></h3><p>块级元素（<code>block-level elements</code>）: 这些元素在源文档里视觉上格式化呈现为块，比如段落元素<code>p</code>、<code>div</code>等等，这些块级元素将生成一个块级主盒（<code>block-level principal box</code>）。除了这些原生的块级元素</p><ul><li>块级盒（<code>block-level boxes</code>） <ul><li>当元素的<code>display</code>属性的值为<code>block</code>/<code>list-item</code>/<code>table</code>时，则元素是块级的<code>block-level</code></li><li>视觉上，块级元素（比如<code>p</code>）呈现为块，竖直排列</li><li>每一个块级元素至少生成一个块级盒<code>block-level box</code>来参与 BFC，称为主要块级盒（<code>principal block-level box</code>）。有一些元素，比如<code>li</code>，会生成额外的盒来放置项目符号，不过多数元素只生成一个主要块级盒</li></ul></li><li><code>inline-level boxes</code>: 行内级盒，也称为行内框 <ul><li>当元素 CSS 的<code>display</code>属性的计算值为<code>inline</code>/<code>inline-block</code>或<code>inline-table</code>时，称它为行内级<code>inline-level</code>元素</li><li>视觉上，行内级元素将其内容与其它行内级元素排列为多行。典型的如段落的内容，有文本或图片，都是行内级元素</li><li>行内级元素生成行内级盒（<code>inline-level boxes</code>)，参与行内格式化上下文 IFC</li></ul></li><li><code>flex container</code><ul><li>当元素 CSS 的<code>display</code>属性的计算值为<code>flex</code>或<code>inline-flex</code>，称它为弹性容器</li><li><code>display: flex</code>这个值会导致一个元素生成一个块级<code>block-level</code>弹性容器框</li><li><code>display: inline-flex</code>这个值会导致一个元素生成一个行内级<code>inline-level</code>弹性容器框</li></ul></li><li><code>grid container</code><ul><li>当元素 CSS 的<code>display</code>属性的计算值为<code>grid</code>或<code>inline-grid</code>，称它为栅格容器</li><li>栅格盒模型值，是一个仍处于实验中的属性</li></ul></li></ul><h3 id="块容器盒-block-container-box" tabindex="-1"><a class="header-anchor" href="#块容器盒-block-container-box"><span>块容器盒（block container box）</span></a></h3><p>符合以下的情况之一的盒子，即称为块容器盒（<code>block container box</code>），</p><ul><li>只包含其他块级盒（<code>block-level boxes</code>）</li><li>生成一个行内格式化上下文 IFC，只包含行内盒（<code>inline-level boxes</code>）</li></ul><p>若元素的主盒<code>principal box</code>是块容器盒，则该元素就是块容器元素<code>block container element</code>。</p><p>若是将非替换元素的<code>display</code>设置为<code>block</code>/<code>list-item</code>/<code>inline-block</code>，将会为该元素生成一个块容器盒。</p><p>不是所有的块容器盒都是块级盒（<code>block-level boxes</code>），</p><p>块级盒和块容器盒的区别在于：</p><ul><li>块级盒（<code>block-level box</code>）是描述元素跟它的父元素与兄弟元素之间的表现。</li><li>块容器盒（<code>block container box</code>）描述元素跟它的后代之间的影响。</li></ul><h3 id="块盒" tabindex="-1"><a class="header-anchor" href="#块盒"><span>块盒</span></a></h3><p>若块级盒，同时也是块容器盒，则称之为块盒（<code>block boxes</code>）</p><h3 id="行盒" tabindex="-1"><a class="header-anchor" href="#行盒"><span>行盒</span></a></h3><p>行盒(<code>line box</code>)，又称为行框，由行内格式化上下文 IFC 产生的盒，用于表示一行。在块盒里面，行盒从块盒一边排版到另一边。当有浮动时, 行盒从左浮动的最右边排版到右浮动的最左边。</p>', 31)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/css/layouts/","title":"布局","lang":"en-US","frontmatter":{"description":"布局 流类型 normal flow，常规流/标准流/普通流，包含： block formatting，BFC 即为block formatting context inline formatting，IFC 即为inline formatting context relative positioning floats，浮动 absolute posi...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/css/layouts/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"布局"}],["meta",{"property":"og:description","content":"布局 流类型 normal flow，常规流/标准流/普通流，包含： block formatting，BFC 即为block formatting context inline formatting，IFC 即为inline formatting context relative positioning floats，浮动 absolute posi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"布局\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"流类型","slug":"流类型","link":"#流类型","children":[]},{"level":2,"title":"垂直居中","slug":"垂直居中","link":"#垂直居中","children":[]},{"level":2,"title":"外边距折叠","slug":"外边距折叠","link":"#外边距折叠","children":[{"level":3,"title":"为什么会出现外边距折叠","slug":"为什么会出现外边距折叠","link":"#为什么会出现外边距折叠","children":[]}]},{"level":2,"title":"清除浮动","slug":"清除浮动","link":"#清除浮动","children":[]},{"level":2,"title":"shrink-to-fit","slug":"shrink-to-fit","link":"#shrink-to-fit","children":[]},{"level":2,"title":"box","slug":"box","link":"#box","children":[{"level":3,"title":"块级元素/块级盒","slug":"块级元素-块级盒","link":"#块级元素-块级盒","children":[]},{"level":3,"title":"块容器盒（block container box）","slug":"块容器盒-block-container-box","link":"#块容器盒-block-container-box","children":[]},{"level":3,"title":"块盒","slug":"块盒","link":"#块盒","children":[]},{"level":3,"title":"行盒","slug":"行盒","link":"#行盒","children":[]}]}],"git":{"createdTime":1541595237000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":3.83,"words":1150},"filePathRelative":"css/layouts/README.md","localizedDate":"November 7, 2018","autoDesc":true}');
export {
  index_html as comp,
  data
};
