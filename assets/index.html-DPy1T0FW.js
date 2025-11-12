import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode("h1", {
      id: "选择器",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#选择器"
      }, [
        createBaseVNode("span", null, "选择器")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#选择器优先级" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("选择器优先级")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#css-选择器-效率" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("CSS 选择器 效率")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#浏览器从右到左解析" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("浏览器从右到左解析")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#命名规范" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("命名规范")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#bem" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("BEM")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[6] || (_cache[6] = createStaticVNode('<h2 id="选择器优先级" tabindex="-1"><a class="header-anchor" href="#选择器优先级"><span>选择器优先级</span></a></h2><p>CSS 标准用一个三元组<code>(a, b, c)</code>来构成一个复杂选择器的优先级。</p><ul><li><code>id</code>选择器的数目记为<code>a</code>；</li><li>伪类选择器和<code>class</code>选择器的数目记为<code>b</code>；</li><li>伪元素选择器和标签选择器数目记为<code>c</code>；</li><li>“*” 不影响优先级。</li></ul><p>CSS 标准建议用一个足够大的进制，获取“a-b-c”来表示选择器优先级。即：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">specificity</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> base</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> base</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> base</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> c</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中，<code>base</code>是一个“足够大”的正整数。关于<code>base</code>，历史中有些趣闻，早年 IE6 采用 256 进制，于是就产生“256 个 class 优先级等于一个 id”这样的奇葩问题，后来扩大到 65536，基本避免了类似的问题。现代浏览器多采用了更大的数量，我们正常编写的 CSS 规则数量不太可能达到数万，因此我们可以认为这样的 base 就足够大了。</p><p>行内属性的优先级永远高于 CSS 规则，浏览器提供了一个“口子”，就是在选择器前加上“!important”。这个用法非常危险，因为它相当于一个新的优先级，而且此优先级会高于行内属性。</p><p>Copy from <a href="https://time.geekbang.org/column/article/84633" target="_blank" rel="noopener noreferrer">Winter - CSS选择器：伪元素是怎么回事儿？</a></p><h2 id="css-选择器-效率" tabindex="-1"><a class="header-anchor" href="#css-选择器-效率"><span>CSS 选择器 效率</span></a></h2><p>CSS 选择器效率从高到低的排序如下：</p><ul><li>ID选择器，比如 #header</li><li>类选择器，比如 .promo</li><li>元素选择器，比如 div</li><li>兄弟选择器，比如 h2 + p</li><li>子选择器，比如 li &gt; ul</li><li>后代选择器，比如 ul a</li><li>通用选择器，比如 *</li><li>属性选择器，比如 type = “text”</li><li>伪类/伪元素选择器，比如 a:hover</li></ul><p>Reference：<a href="http://blog.jobbole.com/35339/" target="_blank" rel="noopener noreferrer">编写高效的 CSS 选择器</a></p><h2 id="浏览器从右到左解析" tabindex="-1"><a class="header-anchor" href="#浏览器从右到左解析"><span>浏览器从右到左解析</span></a></h2><p>浏览器解析选择器是从右到左的方式，以 #nav a 为例，浏览器会寻找 a 的实例（可能有很多），然后沿着 DOM 树向上查找，确定实例是否在 id 为 nav 的容器里面。</p><p>Reference：</p><ul><li><a href="https://www.zhihu.com/question/20185756" target="_blank" rel="noopener noreferrer">为什么排版引擎解析 CSS 选择器时一定要从右往左解析？</a></li><li><a href="http://stackoverflow.com/questions/5797014/why-do-browsers-match-CSS-selectors-from-right-to-left" target="_blank" rel="noopener noreferrer">Why do browsers match CSS selectors from right to left?</a></li></ul><h2 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范"><span>命名规范</span></a></h2><h3 id="bem" tabindex="-1"><a class="header-anchor" href="#bem"><span>BEM</span></a></h3><p>BEM 是一种 CSS 类命名规范，通过 模块化和可维护的方式 编写样式。</p><p>BEM是 块（Block），元素（Element），修饰符（Modifier）的缩写。</p><p>Reference:</p><ul><li><a href="https://juejin.im/post/5a1c175551882535c470fe2c" target="_blank" rel="noopener noreferrer">CSS使用BEM命名规范的五大理由</a></li><li><a href="https://blog.elpassion.com/reasons-to-use-bem-a88738317753" target="_blank" rel="noopener noreferrer">5 Reasons To Use BEM (a.k.a. why is BEM G.R.E.A.T.)</a></li></ul>', 22)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/css/selectors/","title":"选择器","lang":"en-US","frontmatter":{"description":"选择器 选择器优先级 CSS 标准用一个三元组(a, b, c)来构成一个复杂选择器的优先级。 id选择器的数目记为a； 伪类选择器和class选择器的数目记为b； 伪元素选择器和标签选择器数目记为c； “*” 不影响优先级。 CSS 标准建议用一个足够大的进制，获取“a-b-c”来表示选择器优先级。即： 其中，base是一个“足够大”的正整数。关于b...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/css/selectors/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"选择器"}],["meta",{"property":"og:description","content":"选择器 选择器优先级 CSS 标准用一个三元组(a, b, c)来构成一个复杂选择器的优先级。 id选择器的数目记为a； 伪类选择器和class选择器的数目记为b； 伪元素选择器和标签选择器数目记为c； “*” 不影响优先级。 CSS 标准建议用一个足够大的进制，获取“a-b-c”来表示选择器优先级。即： 其中，base是一个“足够大”的正整数。关于b..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"选择器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"选择器优先级","slug":"选择器优先级","link":"#选择器优先级","children":[]},{"level":2,"title":"CSS 选择器 效率","slug":"css-选择器-效率","link":"#css-选择器-效率","children":[]},{"level":2,"title":"浏览器从右到左解析","slug":"浏览器从右到左解析","link":"#浏览器从右到左解析","children":[]},{"level":2,"title":"命名规范","slug":"命名规范","link":"#命名规范","children":[{"level":3,"title":"BEM","slug":"bem","link":"#bem","children":[]}]}],"git":{"createdTime":1541595237000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":2.12,"words":637},"filePathRelative":"css/selectors/README.md","localizedDate":"November 7, 2018","autoDesc":true}');
export {
  index_html as comp,
  data
};
