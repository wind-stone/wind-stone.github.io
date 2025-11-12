import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[7] || (_cache[7] = createBaseVNode("h1", {
      id: "函数式编程",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#函数式编程"
      }, [
        createBaseVNode("span", null, "函数式编程")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#纯函数-pure-function" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("纯函数（Pure Function）")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#纯函数特性" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("纯函数特性")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#高阶函数-higher-order-function" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("高阶函数（Higher-order Function）")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#引用透明" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("引用透明")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#函数式编程的特性" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("函数式编程的特性")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#为什么函数式编程要求函数必须是纯的-不能有副作用" }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("为什么函数式编程要求函数必须是纯的，不能有副作用？")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#函数式编程基本运算" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("函数式编程基本运算")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[8] || (_cache[8] = createStaticVNode('<h2 id="纯函数-pure-function" tabindex="-1"><a class="header-anchor" href="#纯函数-pure-function"><span>纯函数（Pure Function）</span></a></h2><p>纯函数仅针对它们的输入参数进行操作，比如</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> x</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="纯函数特性" tabindex="-1"><a class="header-anchor" href="#纯函数特性"><span>纯函数特性</span></a></h3><ul><li>纯函数针对给定相同的输入，总是产生相同的输出</li><li>纯函数没有函数副作用</li></ul><h2 id="高阶函数-higher-order-function" tabindex="-1"><a class="header-anchor" href="#高阶函数-higher-order-function"><span>高阶函数（Higher-order Function）</span></a></h2><p>高阶函数可以接收函数作为参数，或者返回一个函数结果，或者两者同时具备</p><h2 id="引用透明" tabindex="-1"><a class="header-anchor" href="#引用透明"><span>引用透明</span></a></h2><p>纯函数可以被它的表达式安全地替换</p><h2 id="函数式编程的特性" tabindex="-1"><a class="header-anchor" href="#函数式编程的特性"><span>函数式编程的特性</span></a></h2><ul><li>函数式编程中没有变量</li><li>函数式编程中，通过递归实现循环</li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// simple loop construct</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> acc</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &lt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    acc</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">acc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// prints 55</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// without loop construct or variable (recursion)</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> sumRange</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">acc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">start</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> acc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    sumRange</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">start</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">acc</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sumRange</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// prints 55</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="为什么函数式编程要求函数必须是纯的-不能有副作用" tabindex="-1"><a class="header-anchor" href="#为什么函数式编程要求函数必须是纯的-不能有副作用"><span>为什么函数式编程要求函数必须是纯的，不能有副作用？</span></a></h2><p>因为它是一种数学运算，原始目的就是求值，不做其他事情，否则就无法满足函数运算法则了。</p><h2 id="函数式编程基本运算" tabindex="-1"><a class="header-anchor" href="#函数式编程基本运算"><span>函数式编程基本运算</span></a></h2><ul><li>合成</li><li>柯里化</li></ul>', 16)),
    createVNode(_component_global_config)
  ]);
}
const functionalProgramming_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "functional-programming.html.vue"]]);
const data = JSON.parse('{"path":"/js/unclassified/functional-programming.html","title":"函数式编程","lang":"en-US","frontmatter":{"description":"函数式编程 纯函数（Pure Function） 纯函数仅针对它们的输入参数进行操作，比如 纯函数特性 纯函数针对给定相同的输入，总是产生相同的输出 纯函数没有函数副作用 高阶函数（Higher-order Function） 高阶函数可以接收函数作为参数，或者返回一个函数结果，或者两者同时具备 引用透明 纯函数可以被它的表达式安全地替换 函数式编程的...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/js/unclassified/functional-programming.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"函数式编程"}],["meta",{"property":"og:description","content":"函数式编程 纯函数（Pure Function） 纯函数仅针对它们的输入参数进行操作，比如 纯函数特性 纯函数针对给定相同的输入，总是产生相同的输出 纯函数没有函数副作用 高阶函数（Higher-order Function） 高阶函数可以接收函数作为参数，或者返回一个函数结果，或者两者同时具备 引用透明 纯函数可以被它的表达式安全地替换 函数式编程的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数式编程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"纯函数（Pure Function）","slug":"纯函数-pure-function","link":"#纯函数-pure-function","children":[{"level":3,"title":"纯函数特性","slug":"纯函数特性","link":"#纯函数特性","children":[]}]},{"level":2,"title":"高阶函数（Higher-order Function）","slug":"高阶函数-higher-order-function","link":"#高阶函数-higher-order-function","children":[]},{"level":2,"title":"引用透明","slug":"引用透明","link":"#引用透明","children":[]},{"level":2,"title":"函数式编程的特性","slug":"函数式编程的特性","link":"#函数式编程的特性","children":[]},{"level":2,"title":"为什么函数式编程要求函数必须是纯的，不能有副作用？","slug":"为什么函数式编程要求函数必须是纯的-不能有副作用","link":"#为什么函数式编程要求函数必须是纯的-不能有副作用","children":[]},{"level":2,"title":"函数式编程基本运算","slug":"函数式编程基本运算","link":"#函数式编程基本运算","children":[]}],"git":{"createdTime":1488115417000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.99,"words":296},"filePathRelative":"js/unclassified/functional-programming.md","localizedDate":"February 26, 2017","autoDesc":true}');
export {
  functionalProgramming_html as comp,
  data
};
