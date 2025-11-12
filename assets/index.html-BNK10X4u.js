import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, f as createTextVNode, b as createStaticVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[13] || (_cache[13] = createBaseVNode("h1", {
      id: "number",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#number"
      }, [
        createBaseVNode("span", null, "Number")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#精度问题" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("精度问题")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#parseint-0-0000008-8" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("parseInt(0.0000008) === 8")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#_0-1-0-2-0-3" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("0.1 + 0.2 = 0.3")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#tofixed-的结果不精确" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("toFixed 的结果不精确")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#关于-3-tostring" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("关于 3.toString()")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    createBaseVNode("p", null, [
      _cache[6] || (_cache[6] = createTextVNode("JavaScript 至今没有真正的整数，我们用的")),
      _cache[7] || (_cache[7] = createBaseVNode("code", null, "Number", -1)),
      _cache[8] || (_cache[8] = createTextVNode("事实上是双精度浮点数，详见")),
      createVNode(_component_RouteLink, { to: "/js/data-types/js-number-implementation.html" }, {
        default: withCtx(() => _cache[5] || (_cache[5] = [
          createTextVNode("JavaScript 关于 IEEE 754 双精度浮点数的实现")
        ])),
        _: 1
      }),
      _cache[9] || (_cache[9] = createTextVNode("。"))
    ]),
    _cache[14] || (_cache[14] = createBaseVNode("h2", {
      id: "精度问题",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#精度问题"
      }, [
        createBaseVNode("span", null, "精度问题")
      ])
    ], -1)),
    createBaseVNode("p", null, [
      _cache[11] || (_cache[11] = createTextVNode("精度问题，可以先看")),
      createVNode(_component_RouteLink, { to: "/js/data-types/number/floating.html" }, {
        default: withCtx(() => _cache[10] || (_cache[10] = [
          createTextVNode("JavaScript 关于 IEEE 754 双精度浮点数的实现")
        ])),
        _: 1
      }),
      _cache[12] || (_cache[12] = createTextVNode("了解浮点数的实现。"))
    ]),
    _cache[15] || (_cache[15] = createStaticVNode('<h3 id="parseint-0-0000008-8" tabindex="-1"><a class="header-anchor" href="#parseint-0-0000008-8"><span>parseInt(0.0000008) === 8</span></a></h3><p><code>parseInt</code> 的第一个类型是字符串，所以会将传入的参数转换成字符串，但是小于<code>0.0000001（1e-7）</code>的数字转换成 String 时，会变成科学记号法，也就是<code>String(0.0000008)</code>的结果为<code>8e-7</code>。<code>parseInt</code>并没有将<code>e</code>视为一个数字，所以在转换到 8 后就停止了，最终 <code>parseInt(0.0000008) === 8</code></p><p>Referrence: <a href="http://justjavac.com/javascript/2015/01/08/why-parseint-0-00000008-euqal-8-in-js.html" target="_blank" rel="noopener noreferrer">http://justjavac.com/javascript/2015/01/08/why-parseint-0-00000008-euqal-8-in-js.html</a></p><h3 id="_0-1-0-2-0-3" tabindex="-1"><a class="header-anchor" href="#_0-1-0-2-0-3"><span>0.1 + 0.2 = 0.3</span></a></h3><p>因为浮点数运算的精度问题导致<code>0.1 + 0.2 = 0.3</code>这个等式不成立。正确的比较方法是使用 JavaScript 提供的最小精度值：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Math</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">abs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0.1</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.2</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> Number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.EPSILON);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查等式左右两边差的绝对值是否小于最小精度，才是正确的比较浮点数的方法。</p><h3 id="tofixed-的结果不精确" tabindex="-1"><a class="header-anchor" href="#tofixed-的结果不精确"><span>toFixed 的结果不精确</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2.55</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toFixed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 2.5</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1.45</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toFixed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 1.4</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1.55</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toFixed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 1.6</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其原因是，这些数字在存储后再取出得出的数值与原先有偏差，这种偏差导致在<code>toFixed</code>时结果不精确。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2.55</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toPrecision</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">32</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 2.5499999999999998223643160599750</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1.45</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toPrecision</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">32</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 1.4499999999999999555910790149937</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1.55</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toPrecision</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">32</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 1.5500000000000000444089209850063</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于-3-tostring" tabindex="-1"><a class="header-anchor" href="#关于-3-tostring"><span>关于 3.toString()</span></a></h2><p>JavaScript 规范中规定的数字直接量可以支持四种写法：十进制数、二进制整数、八进制整数和十六进制整数。</p><p>十进制的 Number 可以带小数，小数点前后部分都可以省略，但是不能同时省略。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.01</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">12.</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">12.01</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上三种表示都是合法的数字字面量。因此，<code>3.toString()</code>里的<code>3.</code>会当作省略了小数点后面部分的数字，而单独看成一个整体。</p><p>所以<code>3.toString()</code>等同于<code>(3.)toString()</code>，这显然是语法有问题。</p><p>而<code>3..toString()</code>会被计算成<code>(3.).toString()</code>，OK！</p><p><code>3...toString()</code>等同于<code>(3.)..toString()</code>，语法问题。</p><p>我们要想让点单独成为一个（词法分析里的）<code>token</code>，就要加入空格。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 等效于 (3).toString()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>', 21)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/js/data-types/number/","title":"Number","lang":"en-US","frontmatter":{"description":"Number JavaScript 至今没有真正的整数，我们用的Number事实上是双精度浮点数，详见。 精度问题 精度问题，可以先看了解浮点数的实现。 parseInt(0.0000008) === 8 parseInt 的第一个类型是字符串，所以会将传入的参数转换成字符串，但是小于0.0000001（1e-7）的数字转换成 String 时，会变成...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/js/data-types/number/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Number"}],["meta",{"property":"og:description","content":"Number JavaScript 至今没有真正的整数，我们用的Number事实上是双精度浮点数，详见。 精度问题 精度问题，可以先看了解浮点数的实现。 parseInt(0.0000008) === 8 parseInt 的第一个类型是字符串，所以会将传入的参数转换成字符串，但是小于0.0000001（1e-7）的数字转换成 String 时，会变成..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-04T12:36:51.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-04T12:36:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Number\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-04T12:36:51.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"精度问题","slug":"精度问题","link":"#精度问题","children":[{"level":3,"title":"parseInt(0.0000008) === 8","slug":"parseint-0-0000008-8","link":"#parseint-0-0000008-8","children":[]},{"level":3,"title":"0.1 + 0.2 = 0.3","slug":"_0-1-0-2-0-3","link":"#_0-1-0-2-0-3","children":[]},{"level":3,"title":"toFixed 的结果不精确","slug":"tofixed-的结果不精确","link":"#tofixed-的结果不精确","children":[]}]},{"level":2,"title":"关于 3.toString()","slug":"关于-3-tostring","link":"#关于-3-tostring","children":[]}],"git":{"createdTime":1539744302000,"updatedTime":1728045411000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":2}]},"readingTime":{"minutes":1.84,"words":552},"filePathRelative":"js/data-types/number/README.md","localizedDate":"October 17, 2018","autoDesc":true}');
export {
  index_html as comp,
  data
};
