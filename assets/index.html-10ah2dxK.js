import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[9] || (_cache[9] = createBaseVNode("h1", {
      id: "数据类型",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#数据类型"
      }, [
        createBaseVNode("span", null, "数据类型")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#类型划分方式" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("类型划分方式")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#基本类型" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("基本类型")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#typeof" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("typeof")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#基本包装类型" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("基本包装类型")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#null" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("Null")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#undefined" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("Undefined")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#为什么有的编程规范要求用-void-0-代替-undefined" }, {
                    default: withCtx(() => _cache[6] || (_cache[6] = [
                      createTextVNode("为什么有的编程规范要求用 void 0 代替 undefined")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#判断变量是否已定义" }, {
                    default: withCtx(() => _cache[7] || (_cache[7] = [
                      createTextVNode("判断变量是否已定义")
                    ])),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#引用类型" }, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("引用类型")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[10] || (_cache[10] = createStaticVNode('<h2 id="类型划分方式" tabindex="-1"><a class="header-anchor" href="#类型划分方式"><span>类型划分方式</span></a></h2><p>类型的划分方式是<strong>该类型是否可以表示为固定长度</strong>。</p><p>比如<code>Undefined</code>，<code>Null</code>，<code>Boolean</code>，<code>String</code>，<code>Number</code>这些可以有固定长度，因此是基本类型，并且保存到了栈（<code>Stack</code>）上。</p><p><code>Object</code>由于不可预知长度，并且可以修改，因此是引用类型，会被分配到另一块区域，我们称之为堆（<code>Heap</code>）。</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>字符串是不可变的，因此被认为有固定长度。</p></div><p>此外，我们所说的类型指的是值的类型，不是变量的类型，这是动态语言和静态语言的差异。对于静态语言来说，我们可以限定一个变量的类型。但是对于 JS 这种动态类型的语言来说，我们无法给变量限定类型，变量的类型是可变的。</p><h2 id="基本类型" tabindex="-1"><a class="header-anchor" href="#基本类型"><span>基本类型</span></a></h2><table><thead><tr><th>数据类型</th><th><code>Object.prototype.toString.call(value)</code></th><th><code>typeof value</code></th></tr></thead><tbody><tr><td><code>Number</code></td><td><code>[object Number]</code></td><td><code>number</code></td></tr><tr><td><code>Boolean</code></td><td><code>[object Boolean]</code></td><td><code>boolean</code></td></tr><tr><td><code>String</code></td><td><code>[object String]</code></td><td><code>string</code></td></tr><tr><td><code>Null</code></td><td><code>[object Null]</code></td><td><code>object</code></td></tr><tr><td><code>Undefined</code></td><td><code>[object Undefined]</code></td><td><code>undefined</code></td></tr><tr><td><code>Symbol</code></td><td><code>[object Symbol]</code></td><td><code>symbol</code></td></tr></tbody></table><p><code>Symbol</code>是 ES6 里新增的基本类型。</p><h3 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof"><span>typeof</span></a></h3><ul><li>对函数进行<code>typeof</code>运算后，得到的是<code>function</code></li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> fn</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {}</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> fn</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // function</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对<code>null</code>进行<code>typeof</code>运算后，得到的是<code>object</code></li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // object</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><code>typeof</code>不能区分“未定义”还是“定义了但是没有值”，两者都会返回<code>undefined</code></li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// undefined</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// undefined，注意这里不会触发 Reference Error</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对一个未定义的变量进行<code>typeof</code>运算，不会触发<code>Reference Error</code>，如上例所示</li></ul><h3 id="基本包装类型" tabindex="-1"><a class="header-anchor" href="#基本包装类型"><span>基本包装类型</span></a></h3><p>每一种基本类型<code>Number</code>、<code>String</code>、<code>Boolean</code>、<code>Symbol</code>都有对应的基本包装类型。当在基本类型上调用方法时，会临时先将该基本类型转换成对应的基本包装类型对象，待操作完成后，再销毁这个基本包装类型对象，转换成基本类型。</p><p>调用基本包装类型对象的<code>valueOf()</code>方法，会返回对应的基本类型的值。</p><h3 id="null" tabindex="-1"><a class="header-anchor" href="#null"><span>Null</span></a></h3><p><code>Null</code>类型也只有一个值，就是<code>null</code>，它的语义表示空值，与<code>undefined</code>不同，<code>null</code>是 JavaScript 关键字，所以在任何代码中，你都可以放心用<code>null</code>关键字来获取<code>null</code>值。</p><h3 id="undefined" tabindex="-1"><a class="header-anchor" href="#undefined"><span>Undefined</span></a></h3><h4 id="为什么有的编程规范要求用-void-0-代替-undefined" tabindex="-1"><a class="header-anchor" href="#为什么有的编程规范要求用-void-0-代替-undefined"><span>为什么有的编程规范要求用 void 0 代替 undefined</span></a></h4><p><code>Undefined</code>类型表示未定义，它的类型只有一个值，就是<code>undefined</code>。任何变量在赋值前是<code>Undefined</code>类型、值为<code>undefined</code>，一般我们可以用全局变量<code>undefined</code>（就是名为<code>undefined</code>的这个变量）来表达这个值，或者<code>void</code>运算来把任意一个表达式变成<code>undefined</code>值。</p><p>但是，JavaScript 的<code>undefined</code>是一个变量，而并非是一个关键字，这是 JavaScript 语言公认的设计失误之一。所以，我们为了避免无意中被篡改，通常建议使用<code>void 0</code>来获取<code>undefined</code>值。BTW，在代码压缩时，<code>undefined</code>也会被替换成<code>void 0</code>。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// undefined 被篡改</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> test</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> undefined</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> undefined</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// number</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，给全局的<code>undefined</code>赋值总是会失败，但是可以在函数内给声明<code>undefined</code>变量并赋值。</p><p><code>Undefined</code>跟<code>Null</code>有一定的表意差别，<code>Null</code>表示的是：“赋值了但是为空”。所以，在实际编程时，我们一般不会把变量赋值为<code>undefined</code>，这样可以保证所有值为<code>undefined</code>的变量，都是从未赋值的自然状态。</p><h4 id="判断变量是否已定义" tabindex="-1"><a class="header-anchor" href="#判断变量是否已定义"><span>判断变量是否已定义</span></a></h4><p>一般情况下，若想判断变量是否已定义会使用<code>undefined</code>来判断，但是使用姿势可能不对。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 不推荐（函数内的 undefined 可能被改写）</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> isUndefined</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">variable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> variable</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> undefined</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 推荐</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> isUndefined</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">val</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;"> typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> val</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;undefined&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型"><span>引用类型</span></a></h2><table><thead><tr><th>数据类型</th><th><code>Object.prototype.toString().call(value)</code></th><th><code>typeof value</code></th></tr></thead><tbody><tr><td><code>Object</code></td><td><code>[object Object]</code></td><td><code>object</code></td></tr><tr><td><code>Array</code></td><td><code>[object Array]</code></td><td><code>object</code></td></tr><tr><td><code>Date</code></td><td><code>[object Date]</code></td><td><code>object</code></td></tr><tr><td><code>RegExp</code></td><td><code>[object RegExp]</code></td><td><code>object</code></td></tr><tr><td><code>Function</code></td><td><code>[object Function]</code></td><td><code>function</code></td></tr><tr><td><code>Set</code></td><td><code>[object Set]</code></td><td><code>object</code></td></tr><tr><td><code>WeakSet</code></td><td><code>[object WeakSet]</code></td><td><code>object</code></td></tr><tr><td><code>Map</code></td><td><code>[object Map]</code></td><td><code>object</code></td></tr><tr><td><code>WeakMap</code></td><td><code>[object WeakMap]</code></td><td><code>object</code></td></tr></tbody></table>', 34)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/js/data-types/","title":"数据类型","lang":"en-US","frontmatter":{"description":"数据类型 类型划分方式 类型的划分方式是该类型是否可以表示为固定长度。 比如Undefined，Null，Boolean，String，Number这些可以有固定长度，因此是基本类型，并且保存到了栈（Stack）上。 Object由于不可预知长度，并且可以修改，因此是引用类型，会被分配到另一块区域，我们称之为堆（Heap）。 Tips 字符串是不可变的...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/js/data-types/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"数据类型"}],["meta",{"property":"og:description","content":"数据类型 类型划分方式 类型的划分方式是该类型是否可以表示为固定长度。 比如Undefined，Null，Boolean，String，Number这些可以有固定长度，因此是基本类型，并且保存到了栈（Stack）上。 Object由于不可预知长度，并且可以修改，因此是引用类型，会被分配到另一块区域，我们称之为堆（Heap）。 Tips 字符串是不可变的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"类型划分方式","slug":"类型划分方式","link":"#类型划分方式","children":[]},{"level":2,"title":"基本类型","slug":"基本类型","link":"#基本类型","children":[{"level":3,"title":"typeof","slug":"typeof","link":"#typeof","children":[]},{"level":3,"title":"基本包装类型","slug":"基本包装类型","link":"#基本包装类型","children":[]},{"level":3,"title":"Null","slug":"null","link":"#null","children":[]},{"level":3,"title":"Undefined","slug":"undefined","link":"#undefined","children":[]}]},{"level":2,"title":"引用类型","slug":"引用类型","link":"#引用类型","children":[]}],"git":{"createdTime":1533973348000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":3.23,"words":969},"filePathRelative":"js/data-types/README.md","localizedDate":"August 11, 2018","autoDesc":true}');
export {
  index_html as comp,
  data
};
