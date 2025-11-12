import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[8] || (_cache[8] = createBaseVNode("h1", {
      id: "stylus-重点",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#stylus-重点"
      }, [
        createBaseVNode("span", null, "stylus 重点")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#选择器" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("选择器")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#变量" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("变量")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#插值" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("插值")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#运算符" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("运算符")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#常规支持的运算符" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("常规支持的运算符")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("%")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#mixin" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("mixin")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#函数" }, {
            default: withCtx(() => _cache[7] || (_cache[7] = [
              createTextVNode("函数")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[9] || (_cache[9] = createStaticVNode('<h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器"><span>选择器</span></a></h2><ul><li>不仅可以引用父选择器，还可以通过<code>^[N]</code>引用整个选择器链上的任意选择器。</li><li><code>~/</code>相当于<code>^[0]</code></li><li>相对引用<code>../</code></li><li>根应用<code>/</code></li><li>内置函数<code>selector()</code>获取当前编译的选择器</li><li>内置函数<code>selectors()</code>获取在当前层级的嵌套选择器列表，以逗号分隔</li></ul><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2><ul><li>变量的值里可以包含其他变量</li><li>通常在标志符前加个<code>$</code>字符，来表示变量</li></ul><h2 id="插值" tabindex="-1"><a class="header-anchor" href="#插值"><span>插值</span></a></h2><p>插值可用于属性名、选择器等。</p><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符"><span>运算符</span></a></h2><h3 id="常规支持的运算符" tabindex="-1"><a class="header-anchor" href="#常规支持的运算符"><span>常规支持的运算符</span></a></h3><div class="language-styl line-numbers-mode" data-highlighter="shiki" data-ext="styl" data-title="styl" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> .</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> []</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ! ~ + -</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> is defined</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> **</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / %</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> + -</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ... ..</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;= &gt;= &lt; &gt;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> in</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> == is != is not isnt</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> is a</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> &amp;&amp; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">and || or</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ?:</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = := ?= += -= </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">= /= %=</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> not</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> if unless</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span>%</span></a></h3><div class="language-styl line-numbers-mode" data-highlighter="shiki" data-ext="styl" data-title="styl" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  padding-bottom </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;calc(%s + env(safe-area-inset-bottom))&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> % </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">15</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>运算符<code>%</code>内部是将参数传递给<code>s()</code>内置函数的，也就是说，其内部使用<code>s()</code>实现的。</p><h2 id="mixin" tabindex="-1"><a class="header-anchor" href="#mixin"><span>mixin</span></a></h2><ul><li><code>mixin</code>和函数以相同的方式定义，但是应用的地方不一样。</li><li><code>mixin</code>可以像属性一样调用。</li></ul><div class="language-styl line-numbers-mode" data-highlighter="shiki" data-ext="styl" data-title="styl" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">stripe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(even = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">fff</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, odd = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">eee</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  tr</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    background-color odd</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  tr</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.even</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  tr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nth-child</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(even)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    background-color even</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;!-- 调用 --&gt;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">table</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  stripe</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">fff</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">000</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;!-- 或者 --&gt;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">table</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  stripe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">303030</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">494848</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>mixin</code>里可以包含<code>mixin</code></li></ul><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><p>函数和<code>mixin</code>定义相同，但是函数会返回一个值。</p>', 18)),
    createVNode(_component_global_config)
  ]);
}
const stylus_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "stylus.html.vue"]]);
const data = JSON.parse('{"path":"/css/preprocessor/stylus.html","title":"stylus 重点","lang":"en-US","frontmatter":{"description":"stylus 重点 选择器 不仅可以引用父选择器，还可以通过^[N]引用整个选择器链上的任意选择器。 ~/相当于^[0] 相对引用../ 根应用/ 内置函数selector()获取当前编译的选择器 内置函数selectors()获取在当前层级的嵌套选择器列表，以逗号分隔 变量 变量的值里可以包含其他变量 通常在标志符前加个$字符，来表示变量 插值 插值...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/css/preprocessor/stylus.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"stylus 重点"}],["meta",{"property":"og:description","content":"stylus 重点 选择器 不仅可以引用父选择器，还可以通过^[N]引用整个选择器链上的任意选择器。 ~/相当于^[0] 相对引用../ 根应用/ 内置函数selector()获取当前编译的选择器 内置函数selectors()获取在当前层级的嵌套选择器列表，以逗号分隔 变量 变量的值里可以包含其他变量 通常在标志符前加个$字符，来表示变量 插值 插值..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"stylus 重点\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"选择器","slug":"选择器","link":"#选择器","children":[]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":2,"title":"插值","slug":"插值","link":"#插值","children":[]},{"level":2,"title":"运算符","slug":"运算符","link":"#运算符","children":[{"level":3,"title":"常规支持的运算符","slug":"常规支持的运算符","link":"#常规支持的运算符","children":[]},{"level":3,"title":"%","slug":"","link":"#","children":[]}]},{"level":2,"title":"mixin","slug":"mixin","link":"#mixin","children":[]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[]}],"git":{"createdTime":1596805121000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":1.01,"words":304},"filePathRelative":"css/preprocessor/stylus.md","localizedDate":"August 7, 2020","autoDesc":true}');
export {
  stylus_html as comp,
  data
};
