import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[7] || (_cache[7] = createBaseVNode("h1", {
      id: "this",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#this"
      }, [
        createBaseVNode("span", null, "this")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#函数有哪几种调用方式可以导致-this-不同" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("函数有哪几种调用方式可以导致 this 不同？")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#作为普通函数调用" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("作为普通函数调用")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#new-fn-的过程" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("new fn() 的过程")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#apply-和-call-方法" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("apply 和 call 方法")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#apply-与-call-的区别" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("apply 与 call 的区别")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#性能对比" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("性能对比")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#常用示例" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("常用示例")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[8] || (_cache[8] = createStaticVNode('<h2 id="函数有哪几种调用方式可以导致-this-不同" tabindex="-1"><a class="header-anchor" href="#函数有哪几种调用方式可以导致-this-不同"><span>函数有哪几种调用方式可以导致 this 不同？</span></a></h2><ul><li>作为普通函数调用</li><li>作为方法调用</li><li>作为构造函数调用</li><li>通过<code>apply</code>、<code>call</code>、<code>bind</code>显示绑定<code>this</code>进行调用</li><li>箭头函数</li></ul><h2 id="作为普通函数调用" tabindex="-1"><a class="header-anchor" href="#作为普通函数调用"><span>作为普通函数调用</span></a></h2><ul><li>在严格模式下声明的函数，<code>this</code>会绑定到<code>undefined</code>上</li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;use strict&quot;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  };</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;bar&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// Uncaught TypeError: Cannot read property &#39;name&#39; of undefined at foo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在非严格模式下声明的函数，<code>this</code>会绑定到<code>window</code>（或<code>global</code>）上</li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;bar&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;use strict&quot;</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// bar</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;bar&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// bar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="new-fn-的过程" tabindex="-1"><a class="header-anchor" href="#new-fn-的过程"><span>new fn() 的过程</span></a></h2><p>使用 new 操作符调用构造函数创建新对象的过程</p><ul><li>创建一个新对象</li><li>新对象的 __proto__指向 fn.prototype</li><li>将构造函数的作用域赋给新对象（因此this 就指向了这个新对象）</li><li>执行构造函数中的代码（为这个新对象添加属性）</li><li>返回新对象（如果fn执行后不返回，则默认返回新对象；如果返回了其他对象，则返回值为其他对象）</li></ul><h2 id="apply-和-call-方法" tabindex="-1"><a class="header-anchor" href="#apply-和-call-方法"><span>apply 和 call 方法</span></a></h2><h3 id="apply-与-call-的区别" tabindex="-1"><a class="header-anchor" href="#apply-与-call-的区别"><span>apply 与 call 的区别</span></a></h3><p><code>apply</code>和<code>call</code>的第 1 个参数都是将要绑定的<code>this</code>对象，不同的是：</p><ul><li><code>apply</code>第 2 个是数组，数组里的每一项将作为函数的参数</li><li><code>call</code>第 2 ~ n 个参数，依次作为函数的第 1 ~ n-1 个参数</li></ul><h3 id="性能对比" tabindex="-1"><a class="header-anchor" href="#性能对比"><span>性能对比</span></a></h3><p><code>call</code>的性能比<code>apply</code>的性能更好，详见<a href="https://github.com/noneven/__/issues/6" target="_blank" rel="noopener noreferrer">call和apply的性能对比 #6</a></p><h3 id="常用示例" tabindex="-1"><a class="header-anchor" href="#常用示例"><span>常用示例</span></a></h3><ul><li>如何将伪数组转换成数组？ <ul><li><code>Array.prototype.slice.call(arg)</code></li></ul></li><li>如何判断一个参数是对象？ <ul><li><code>Object.prototype.toString.call(obj)</code></li></ul></li></ul>', 19)),
    createVNode(_component_global_config)
  ]);
}
const this_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "this.html.vue"]]);
const data = JSON.parse('{"path":"/js/execution-mechanism/this.html","title":"this","lang":"en-US","frontmatter":{"description":"this 函数有哪几种调用方式可以导致 this 不同？ 作为普通函数调用 作为方法调用 作为构造函数调用 通过apply、call、bind显示绑定this进行调用 箭头函数 作为普通函数调用 在严格模式下声明的函数，this会绑定到undefined上 在非严格模式下声明的函数，this会绑定到window（或global）上 new fn() 的...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/js/execution-mechanism/this.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"this"}],["meta",{"property":"og:description","content":"this 函数有哪几种调用方式可以导致 this 不同？ 作为普通函数调用 作为方法调用 作为构造函数调用 通过apply、call、bind显示绑定this进行调用 箭头函数 作为普通函数调用 在严格模式下声明的函数，this会绑定到undefined上 在非严格模式下声明的函数，this会绑定到window（或global）上 new fn() 的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"this\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"函数有哪几种调用方式可以导致 this 不同？","slug":"函数有哪几种调用方式可以导致-this-不同","link":"#函数有哪几种调用方式可以导致-this-不同","children":[]},{"level":2,"title":"作为普通函数调用","slug":"作为普通函数调用","link":"#作为普通函数调用","children":[]},{"level":2,"title":"new fn() 的过程","slug":"new-fn-的过程","link":"#new-fn-的过程","children":[]},{"level":2,"title":"apply 和 call 方法","slug":"apply-和-call-方法","link":"#apply-和-call-方法","children":[{"level":3,"title":"apply 与 call 的区别","slug":"apply-与-call-的区别","link":"#apply-与-call-的区别","children":[]},{"level":3,"title":"性能对比","slug":"性能对比","link":"#性能对比","children":[]},{"level":3,"title":"常用示例","slug":"常用示例","link":"#常用示例","children":[]}]}],"git":{"createdTime":1533973348000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":1.39,"words":416},"filePathRelative":"js/execution-mechanism/this.md","localizedDate":"August 11, 2018","autoDesc":true}');
export {
  this_html as comp,
  data
};
