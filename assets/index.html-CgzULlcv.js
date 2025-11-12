import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode("h1", {
      id: "对象",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#对象"
      }, [
        createBaseVNode("span", null, "对象")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#属性的可枚举性" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("属性的可枚举性")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#属性的遍历" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("属性的遍历")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#遍历方法" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("遍历方法")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#遍历顺序" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("遍历顺序")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#对象的方法是特殊的属性" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("对象的方法是特殊的属性")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[6] || (_cache[6] = createStaticVNode('<h2 id="属性的可枚举性" tabindex="-1"><a class="header-anchor" href="#属性的可枚举性"><span>属性的可枚举性</span></a></h2><p>四个操作会忽略<code>enumerable</code>为<code>false</code>的属性。</p><ul><li><code>for...in</code>循环：只遍历对象自身的和继承的可枚举的属性。</li><li><code>Object.keys()</code>：返回对象自身的所有可枚举的属性的键名。</li><li><code>JSON.stringify()</code>：只串行化对象自身的可枚举的属性。</li><li><code>Object.assign()</code>： 忽略<code>enumerable</code>为<code>false</code>的属性，只拷贝对象自身的可枚举的属性。</li></ul><h2 id="属性的遍历" tabindex="-1"><a class="header-anchor" href="#属性的遍历"><span>属性的遍历</span></a></h2><h3 id="遍历方法" tabindex="-1"><a class="header-anchor" href="#遍历方法"><span>遍历方法</span></a></h3><p>ES6 一共有 5 种方法可以遍历对象的属性。</p><table><thead><tr><th>方式</th><th>不可枚举属性</th><th>继承属性</th><th>Symbol 属性</th></tr></thead><tbody><tr><td><code>for...in</code></td><td>×</td><td>√</td><td>×</td></tr><tr><td><code>Object.keys()</code></td><td>×</td><td>×</td><td>×</td></tr><tr><td><code>Object.getOwnPropertyNames()</code></td><td>√</td><td>×</td><td>×</td></tr><tr><td><code>Object.getOwnPropertySymbols()</code></td><td>√</td><td>×</td><td>√</td></tr><tr><td><code>Reflect.ownKeys()</code></td><td>√</td><td>×</td><td>√</td></tr></tbody></table><h3 id="遍历顺序" tabindex="-1"><a class="header-anchor" href="#遍历顺序"><span>遍历顺序</span></a></h3><p>以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。</p><ul><li>首先遍历所有数值键，按照数值升序排列。</li><li>其次遍历所有字符串键，按照加入时间升序排列。</li><li>最后遍历所有 Symbol 键，按照加入时间升序排列。</li></ul><h2 id="对象的方法是特殊的属性" tabindex="-1"><a class="header-anchor" href="#对象的方法是特殊的属性"><span>对象的方法是特殊的属性</span></a></h2><p>对象只有数据属性和访问器属性，而对象的方法其实是对象的数据属性。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> obj</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    fn</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {}</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Object</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getOwnPropertyDescriptor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">obj</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;fn&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// {</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//     configurable: true</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//     enumerable: true</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//     value: () =&gt; {}</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//     writable: true</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//     __proto__: Object</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 13)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/js/data-types/object/","title":"对象","lang":"en-US","frontmatter":{"description":"对象 属性的可枚举性 四个操作会忽略enumerable为false的属性。 for...in循环：只遍历对象自身的和继承的可枚举的属性。 Object.keys()：返回对象自身的所有可枚举的属性的键名。 JSON.stringify()：只串行化对象自身的可枚举的属性。 Object.assign()： 忽略enumerable为false的属性，...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/js/data-types/object/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"对象"}],["meta",{"property":"og:description","content":"对象 属性的可枚举性 四个操作会忽略enumerable为false的属性。 for...in循环：只遍历对象自身的和继承的可枚举的属性。 Object.keys()：返回对象自身的所有可枚举的属性的键名。 JSON.stringify()：只串行化对象自身的可枚举的属性。 Object.assign()： 忽略enumerable为false的属性，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"对象\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"属性的可枚举性","slug":"属性的可枚举性","link":"#属性的可枚举性","children":[]},{"level":2,"title":"属性的遍历","slug":"属性的遍历","link":"#属性的遍历","children":[{"level":3,"title":"遍历方法","slug":"遍历方法","link":"#遍历方法","children":[]},{"level":3,"title":"遍历顺序","slug":"遍历顺序","link":"#遍历顺序","children":[]}]},{"level":2,"title":"对象的方法是特殊的属性","slug":"对象的方法是特殊的属性","link":"#对象的方法是特殊的属性","children":[]}],"git":{"createdTime":1525874041000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":1.04,"words":312},"filePathRelative":"js/data-types/object/README.md","localizedDate":"May 9, 2018","autoDesc":true}');
export {
  index_html as comp,
  data
};
