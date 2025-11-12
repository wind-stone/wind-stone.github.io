import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createBaseVNode("h1", {
      id: "运算符",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#运算符"
      }, [
        createBaseVNode("span", null, "运算符")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#幂运算符" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("幂运算符 **")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#按位运算符" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("按位运算符")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#判断数值奇偶性" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("判断数值奇偶性")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#数值取整" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("数值取整")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[5] || (_cache[5] = createStaticVNode('<h2 id="幂运算符" tabindex="-1"><a class="header-anchor" href="#幂运算符"><span>幂运算符 **</span></a></h2><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation" target="_blank" rel="noopener noreferrer">Exponentiation (**) - MDN</a></p><h2 id="按位运算符" tabindex="-1"><a class="header-anchor" href="#按位运算符"><span>按位运算符</span></a></h2><p>按位操作符（<code>Bitwise operators</code>） 将其操作数（<code>operands</code>）当作 32 位的比特序列（由<code>0</code>和<code>1</code>组成），而不是十进制、十六进制或八进制数值。例如，十进制数<code>9</code>，用二进制表示则为<code>1001</code>。按位操作符操作数字的二进制形式，但是返回值依然是标准的 JavaScript 数值。</p><table><thead><tr><th>运算符</th><th>用法</th><th>描述</th></tr></thead><tbody><tr><td>按位与（ AND）</td><td><code>a &amp; b</code></td><td>对于每一个比特位，只有两个操作数相应的比特位都是1时，结果才为1，否则为0。</td></tr><tr><td>按位或（OR）</td><td>`a</td><td>b`</td></tr><tr><td>按位异或（XOR）</td><td><code>a ^ b</code></td><td>对于每一个比特位，当两个操作数相应的比特位有且只有一个1时，结果为1，否则为0。</td></tr><tr><td>按位非（NOT）</td><td><code>~ a</code></td><td>反转操作数的比特位，即0变成1，1变成0。</td></tr><tr><td>左移（Left shift）</td><td><code>a &lt;&lt; b</code></td><td>将 a 的二进制形式向左移 b (&lt; 32) 比特位，右边用0填充。</td></tr><tr><td>有符号右移</td><td><code>a &gt;&gt; b</code></td><td>将 a 的二进制表示向右移 b (&lt; 32) 位，丢弃被移出的位。</td></tr><tr><td>无符号右移</td><td><code>a &gt;&gt;&gt; b</code></td><td>将 a 的二进制表示向右移 b (&lt; 32) 位，丢弃被移出的位，并使用 0 在左侧填充。</td></tr></tbody></table><h3 id="判断数值奇偶性" tabindex="-1"><a class="header-anchor" href="#判断数值奇偶性"><span>判断数值奇偶性</span></a></h3><p><code>n &amp; 1</code>相当于<code>n % 2</code>，当<code>n</code>为奇数时，<code>n &amp; 1</code>的值为<code>1</code>；当<code>n</code>为偶数时，<code>n &amp; 1</code>的值为<code>0</code>。</p><table><thead><tr><th>原始表达式</th><th>对应的二进制表达式</th><th>结果</th></tr></thead><tbody><tr><td><code>1 &amp; 1</code></td><td><code>0001 &amp; 0001</code></td><td><code>1</code></td></tr><tr><td><code>2 &amp; 1</code></td><td><code>0010 &amp; 0001</code></td><td><code>0</code></td></tr><tr><td><code>3 &amp; 1</code></td><td><code>0011 &amp; 0001</code></td><td><code>1</code></td></tr><tr><td><code>4 &amp; 1</code></td><td><code>0100 &amp; 0001</code></td><td><code>0</code></td></tr><tr><td><code>5 &amp; 1</code></td><td><code>0101 &amp; 0001</code></td><td><code>1</code></td></tr><tr><td><code>6 &amp; 1</code></td><td><code>0110 &amp; 0001</code></td><td><code>0</code></td></tr><tr><td><code>7 &amp; 1</code></td><td><code>0111 &amp; 0001</code></td><td><code>1</code></td></tr><tr><td><code>8 &amp; 1</code></td><td><code>1000 &amp; 0001</code></td><td><code>0</code></td></tr></tbody></table><h3 id="数值取整" tabindex="-1"><a class="header-anchor" href="#数值取整"><span>数值取整</span></a></h3><p>如下几种按位运算表达式都相当于<code>parseInt(a)</code>:</p><ul><li><code>a | 0</code></li><li><code>a ^ 0</code></li><li><code>a &lt;&lt; 0</code></li><li><code>a &gt;&gt; 0</code></li><li><code>~~a</code></li></ul>', 11)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/js/operators/","title":"运算符","lang":"en-US","frontmatter":{"description":"运算符 幂运算符 ** Exponentiation (**) - MDN 按位运算符 按位操作符（Bitwise operators） 将其操作数（operands）当作 32 位的比特序列（由0和1组成），而不是十进制、十六进制或八进制数值。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的 Java...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/js/operators/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"运算符"}],["meta",{"property":"og:description","content":"运算符 幂运算符 ** Exponentiation (**) - MDN 按位运算符 按位操作符（Bitwise operators） 将其操作数（operands）当作 32 位的比特序列（由0和1组成），而不是十进制、十六进制或八进制数值。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的 Java..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"运算符\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"幂运算符 **","slug":"幂运算符","link":"#幂运算符","children":[]},{"level":2,"title":"按位运算符","slug":"按位运算符","link":"#按位运算符","children":[{"level":3,"title":"判断数值奇偶性","slug":"判断数值奇偶性","link":"#判断数值奇偶性","children":[]},{"level":3,"title":"数值取整","slug":"数值取整","link":"#数值取整","children":[]}]}],"git":{"createdTime":1582107417000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":1.6,"words":481},"filePathRelative":"js/operators/README.md","localizedDate":"February 19, 2020","autoDesc":true}');
export {
  index_html as comp,
  data
};
