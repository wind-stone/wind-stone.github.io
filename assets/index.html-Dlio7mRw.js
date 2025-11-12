import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[7] || (_cache[7] = createBaseVNode("h1", {
      id: "let-和-const",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#let-和-const"
      }, [
        createBaseVNode("span", null, "let 和 const")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#let-命令" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("let 命令")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#块级作用域" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("块级作用域")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#哪些语句会产生块级作用域" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("哪些语句会产生块级作用域")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#const-命令" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("const 命令")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#es6-声明变量的六种方法" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("ES6 声明变量的六种方法")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#顶层对象的属性" }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("顶层对象的属性")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#global-对象" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("global 对象")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[8] || (_cache[8] = createStaticVNode('<h2 id="let-命令" tabindex="-1"><a class="header-anchor" href="#let-命令"><span>let 命令</span></a></h2><ul><li>不存在变量提升，只能先声明后使用</li><li>暂时性死区</li><li>不允许重复声明</li><li><code>for</code>的父子作用域</li></ul><p><code>for</code>循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;abc&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// abc</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// abc</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// abc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码正确运行，输出了 3 次<code>abc</code>。这表明函数内部的变量<code>i</code>与循环变量<code>i</code>不在同一个作用域，有各自单独的作用域。</p><h2 id="块级作用域" tabindex="-1"><a class="header-anchor" href="#块级作用域"><span>块级作用域</span></a></h2><ul><li>块级作用域之中，函数声明语句的行为类似于<code>let</code>，在块级作用域之外不可引用 <ul><li>但是为了兼容浏览器的老代码，浏览器的实现可以不遵守上面的规定，有自己的行为方式 <ul><li>允许在块级作用域内声明函数</li><li>函数声明类似于var，即会提升到全局作用域或函数作用域的头部</li><li>同时，函数声明还会提升到所在的块级作用域的头部</li></ul></li></ul></li><li>ES6 的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错</li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 不报错</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;use strict&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {}</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 报错</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;use strict&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="哪些语句会产生块级作用域" tabindex="-1"><a class="header-anchor" href="#哪些语句会产生块级作用域"><span>哪些语句会产生块级作用域</span></a></h3><p>以下语句会产生块级作用域（不完整，待补充）：</p><ul><li><code>for</code></li><li><code>if</code></li><li><code>switch</code></li><li><code>try</code>/<code>catch</code>/<code>finally</code>。</li></ul><h2 id="const-命令" tabindex="-1"><a class="header-anchor" href="#const-命令"><span>const 命令</span></a></h2><ul><li>不存在变量提升，只能先声明后使用</li><li>暂时性死区</li><li>不允许重复声明</li></ul><p><code>const</code>实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指针，<code>const</code>只能保证这个指针是固定的，至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> foo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {};</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 为 foo 添加一个属性，可以成功</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">prop</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 123</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">prop</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 123</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 将 foo 指向另一个对象，就会报错</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">foo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {}; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// TypeError: &quot;foo&quot; is read-only</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es6-声明变量的六种方法" tabindex="-1"><a class="header-anchor" href="#es6-声明变量的六种方法"><span>ES6 声明变量的六种方法</span></a></h2><ul><li><code>var</code></li><li><code>function</code></li><li><code>let</code></li><li><code>const</code></li><li><code>import</code></li><li><code>class</code></li></ul><h2 id="顶层对象的属性" tabindex="-1"><a class="header-anchor" href="#顶层对象的属性"><span>顶层对象的属性</span></a></h2><p>顶层对象，在浏览器环境指的是<code>window</code>对象，在 Node 指的是<code>global</code>对象。ES5 之中，顶层对象的属性与全局变量是等价的。</p><p>ES6 为了改变这一点，一方面规定，为了保持兼容性，<code>var</code>命令和<code>function</code>命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，<code>let</code>命令、<code>const</code>命令、<code>class</code>命令声明的全局变量，不属于顶层对象的属性。也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。</p><h2 id="global-对象" tabindex="-1"><a class="header-anchor" href="#global-对象"><span>global 对象</span></a></h2><p>ES5 的顶层对象，本身也是一个问题，因为它在各种实现里面是不统一的。</p><ul><li>浏览器里面，顶层对象是<code>window</code>，但 Node 和 Web Worker 没有<code>window</code></li><li>浏览器和 Web Worker 里面，<code>self</code>也指向顶层对象，但是 Node 没有<code>self</code></li><li>Node 里面，顶层对象是<code>global</code>，但其他环境都不支持。</li></ul><p>同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用<code>this</code>变量，但是有局限性。</p><ul><li>全局环境中，<code>this</code>会返回顶层对象。但是，Node 模块和 ES6 模块中，<code>this</code>返回的是当前模块</li><li>函数里面的<code>this</code>，如果函数不是作为对象的方法运行，而是单纯作为函数运行，<code>this</code>会指向顶层对象。但是，严格模式下，这时<code>this</code>会返回<code>undefined</code></li><li>不管是严格模式，还是普通模式，<code>new Function(&#39;return this&#39;)()</code>，总是会返回全局对象。但是，如果浏览器用了 CSP（Content Security Policy，内容安全政策），那么<code>eval</code>、<code>new Function</code>这些方法都可能无法使用。</li></ul>', 25)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/es6/let-const/","title":"let 和 const","lang":"en-US","frontmatter":{"description":"let 和 const let 命令 不存在变量提升，只能先声明后使用 暂时性死区 不允许重复声明 for的父子作用域 for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。 上面代码正确运行，输出了 3 次abc。这表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。 块级作用域 块级...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/es6/let-const/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"let 和 const"}],["meta",{"property":"og:description","content":"let 和 const let 命令 不存在变量提升，只能先声明后使用 暂时性死区 不允许重复声明 for的父子作用域 for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。 上面代码正确运行，输出了 3 次abc。这表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。 块级作用域 块级..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T18:08:13.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T18:08:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"let 和 const\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T18:08:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"let 命令","slug":"let-命令","link":"#let-命令","children":[]},{"level":2,"title":"块级作用域","slug":"块级作用域","link":"#块级作用域","children":[{"level":3,"title":"哪些语句会产生块级作用域","slug":"哪些语句会产生块级作用域","link":"#哪些语句会产生块级作用域","children":[]}]},{"level":2,"title":"const 命令","slug":"const-命令","link":"#const-命令","children":[]},{"level":2,"title":"ES6 声明变量的六种方法","slug":"es6-声明变量的六种方法","link":"#es6-声明变量的六种方法","children":[]},{"level":2,"title":"顶层对象的属性","slug":"顶层对象的属性","link":"#顶层对象的属性","children":[]},{"level":2,"title":"global 对象","slug":"global-对象","link":"#global-对象","children":[]}],"git":{"createdTime":1521035369000,"updatedTime":1623694093000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":3}]},"readingTime":{"minutes":3.58,"words":1073},"filePathRelative":"es6/let-const/README.md","localizedDate":"March 14, 2018","autoDesc":true}');
export {
  index_html as comp,
  data
};
