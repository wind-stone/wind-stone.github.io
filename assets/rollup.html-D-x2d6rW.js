import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, f as createTextVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[6] || (_cache[6] = createBaseVNode("h1", {
      id: "rollup",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#rollup"
      }, [
        createBaseVNode("span", null, "Rollup")
      ])
    ], -1)),
    _cache[7] || (_cache[7] = createBaseVNode("h2", {
      id: "特性",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#特性"
      }, [
        createBaseVNode("span", null, "特性")
      ])
    ], -1)),
    _cache[8] || (_cache[8] = createBaseVNode("ul", null, [
      createBaseVNode("li", null, "使用 ES6 模块"),
      createBaseVNode("li", null, [
        createTextVNode("Tree-shaking：静态分析代码中的"),
        createBaseVNode("code", null, "import"),
        createTextVNode("，并将排除任何未实际使用的代码")
      ]),
      createBaseVNode("li", null, "兼容性：Rollup 可以通过插件导入已存在的 CommonJS 模块。")
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#特性" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("特性")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#常用的插件" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("常用的插件")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#rollup-plugin-node-resolve" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("rollup-plugin-node-resolve")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#rollup-plugin-commonjs" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("rollup-plugin-commonjs")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#rollup-plugin-babel" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("rollup-plugin-babel")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#完整配置" }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("完整配置")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[9] || (_cache[9] = createStaticVNode('<h2 id="常用的插件" tabindex="-1"><a class="header-anchor" href="#常用的插件"><span>常用的插件</span></a></h2><h3 id="rollup-plugin-node-resolve" tabindex="-1"><a class="header-anchor" href="#rollup-plugin-node-resolve"><span>rollup-plugin-node-resolve</span></a></h3><p>Rollup 无法处理对<code>node_modules</code>里的包的依赖，增加此配置，可以让 Rollup 具有对<code>node_modules</code>的依赖处理的能力，并将其打包到输出文件里。</p><h3 id="rollup-plugin-commonjs" tabindex="-1"><a class="header-anchor" href="#rollup-plugin-commonjs"><span>rollup-plugin-commonjs</span></a></h3><p>一些库导出成你可以正常导入的ES6模块，但是目前 NPM 中的大多数包都是以 CommonJS 模块的形式出现的。在它们更改之前，我们需要将 CommonJS 模块转换为 ES2015 供 Rollup 处理。该插件就是用来将 CommonJS 模块转换成 ES2015 模块的。</p><h3 id="rollup-plugin-babel" tabindex="-1"><a class="header-anchor" href="#rollup-plugin-babel"><span>rollup-plugin-babel</span></a></h3><p>配置 Babel</p><p>Reference</p><ul><li><a href="http://www.rollupjs.com/tools/" target="_blank" rel="noopener noreferrer">Rollup 与其他工具集成</a></li></ul><h2 id="完整配置" tabindex="-1"><a class="header-anchor" href="#完整配置"><span>完整配置</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// src/.babelrc</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;presets&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;latest&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, {</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;es2015&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;modules&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }]</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;plugins&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;external-helpers&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> resolve</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;rollup-plugin-node-resolve&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> commonjs</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;rollup-plugin-commonjs&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  input</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;src/main.js&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  output</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    file</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;bundle.js&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    format</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;cjs&#39;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    resolve</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(),</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    commonjs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(),</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    babel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      exclude</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;node_modules/**&#39;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 只编译我们的源代码</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    })</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ]</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 12)),
    createVNode(_component_global_config)
  ]);
}
const rollup_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "rollup.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/tools/build/rollup.html","title":"Rollup","lang":"en-US","frontmatter":{"description":"Rollup 特性 使用 ES6 模块 Tree-shaking：静态分析代码中的import，并将排除任何未实际使用的代码 兼容性：Rollup 可以通过插件导入已存在的 CommonJS 模块。 常用的插件 rollup-plugin-node-resolve Rollup 无法处理对node_modules里的包的依赖，增加此配置，可以让 Rol...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/tools/build/rollup.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Rollup"}],["meta",{"property":"og:description","content":"Rollup 特性 使用 ES6 模块 Tree-shaking：静态分析代码中的import，并将排除任何未实际使用的代码 兼容性：Rollup 可以通过插件导入已存在的 CommonJS 模块。 常用的插件 rollup-plugin-node-resolve Rollup 无法处理对node_modules里的包的依赖，增加此配置，可以让 Rol..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-31T12:47:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-31T12:47:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Rollup\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-31T12:47:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"特性","slug":"特性","link":"#特性","children":[]},{"level":2,"title":"常用的插件","slug":"常用的插件","link":"#常用的插件","children":[{"level":3,"title":"rollup-plugin-node-resolve","slug":"rollup-plugin-node-resolve","link":"#rollup-plugin-node-resolve","children":[]},{"level":3,"title":"rollup-plugin-commonjs","slug":"rollup-plugin-commonjs","link":"#rollup-plugin-commonjs","children":[]},{"level":3,"title":"rollup-plugin-babel","slug":"rollup-plugin-babel","link":"#rollup-plugin-babel","children":[]}]},{"level":2,"title":"完整配置","slug":"完整配置","link":"#完整配置","children":[]}],"git":{"createdTime":1521108742000,"updatedTime":1730378820000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.88,"words":265},"filePathRelative":"front-end-engineering/tools/build/rollup.md","localizedDate":"March 15, 2018","autoDesc":true}');
export {
  rollup_html as comp,
  data
};
