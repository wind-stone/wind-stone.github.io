import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[9] || (_cache[9] = createBaseVNode("h1", {
      id: "commonjs-规范及实现",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#commonjs-规范及实现"
      }, [
        createBaseVNode("span", null, "CommonJS 规范及实现")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#包规范的实现-npm" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("包规范的实现 - NPM")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#commonjs-包规范的目录" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("CommonJS 包规范的目录")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#安装依赖包" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("安装依赖包")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#全局安装" }, {
                    default: withCtx(() => _cache[3] || (_cache[3] = [
                      createTextVNode("全局安装")
                    ])),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#模块规范的实现" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("模块规范的实现")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#自定义模块的路径分析及文件定位" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("自定义模块的路径分析及文件定位")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#第一步-路径分析" }, {
                    default: withCtx(() => _cache[6] || (_cache[6] = [
                      createTextVNode("第一步：路径分析")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#第二步-文件定位" }, {
                    default: withCtx(() => _cache[7] || (_cache[7] = [
                      createTextVNode("第二步：文件定位")
                    ])),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#require-resolve" }, {
                default: withCtx(() => _cache[8] || (_cache[8] = [
                  createTextVNode("require.resolve")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[10] || (_cache[10] = createStaticVNode('<h2 id="包规范的实现-npm" tabindex="-1"><a class="header-anchor" href="#包规范的实现-npm"><span>包规范的实现 - NPM</span></a></h2><p>NPM 是 CommonJS 包规范的一种实现。</p><h3 id="commonjs-包规范的目录" tabindex="-1"><a class="header-anchor" href="#commonjs-包规范的目录"><span>CommonJS 包规范的目录</span></a></h3><ul><li><code>package.json</code>：包描述文件</li><li><code>bin</code>：用于存放可执行二进制文件的目录</li><li><code>lib</code>：用于存放 JavaScript 代码的目录</li><li><code>doc</code>：用于存放文档的目录</li><li><code>test</code>：用于存放单元测试用例的代码</li></ul><h3 id="安装依赖包" tabindex="-1"><a class="header-anchor" href="#安装依赖包"><span>安装依赖包</span></a></h3><h4 id="全局安装" tabindex="-1"><a class="header-anchor" href="#全局安装"><span>全局安装</span></a></h4><p><code>npm install express -g</code>命令是对<code>express</code>进行全局安装，<code>-g</code>是将一个包安装为全局可用的可执行命令。它根据包描述文件中<code>bin</code>字段配置，将实际脚本链接到与 Node 可执行文件相同的路径下：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;bin&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;express&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;./bin/express&quot;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块规范的实现" tabindex="-1"><a class="header-anchor" href="#模块规范的实现"><span>模块规范的实现</span></a></h2><p>Node 作为 CommonJS 规范的实现，并没有完全按照规范实现，而是对模块规范进行了一定的取舍，同时也添加了少许自身需要的特性。</p><p>Node 中引入模块，需要经历如下3个步骤：</p><ol><li>路径分析</li><li>文件定位</li><li>编译执行</li></ol><h3 id="自定义模块的路径分析及文件定位" tabindex="-1"><a class="header-anchor" href="#自定义模块的路径分析及文件定位"><span>自定义模块的路径分析及文件定位</span></a></h3><p>现在针对自定义模块，简单说明其路径分析和文件定位是如何进行的。</p><h4 id="第一步-路径分析" tabindex="-1"><a class="header-anchor" href="#第一步-路径分析"><span>第一步：路径分析</span></a></h4><p>在<code>/home/wind-stone/project/</code>目录下，创建<code>app.js</code>文件，其内容为<code>console.log(module.paths)</code>，在当前目录下执行<code>node app.js</code>，Linux 下，得到的输出为一数组，数组内的每一项称为模块路径，该数组的结构为：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;/home/wind-stone/project/node_modulse&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 当前文件目录下的 node_modules 目录</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;/home/wind-stone/node_modulse&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,          </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 父目录下的 node_modules 目录</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;/home/node_modulse&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,                     </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 父目录的父目录下的 node_modules 目录</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;/node_modulse&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,                          </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 沿路径向上逐级递归，直到根目录下的 node_modules 目录</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上即为查找自定义模块时的各级模块路径，Node 会先在当面目录的<code>node_modules</code>查找模块即定位文件，若是没找到，会沿路径向上逐级递归，直到根目录下的<code>node_modules</code>目录定位文件。</p><h4 id="第二步-文件定位" tabindex="-1"><a class="header-anchor" href="#第二步-文件定位"><span>第二步：文件定位</span></a></h4><p>上述每查找到一<code>node_modules</code>目录时，就要进行文件定位。其过程为：</p><ol><li>文件扩展名分析：若<code>require()</code>所引用的模块标识符不包含扩展名，则 Node 会按<code>.js</code>、<code>.json</code>、<code>.node</code>的次序补足扩展名，依次尝试。</li><li>目录分析和包：若是上一步没找到文件，但是得到同名的目录，此时 Node 会将目录当成一个包来处理 <ul><li>首先，Node 会在当前目录下查找<code>package.json</code>文件，通过<code>JSON.parse()</code>解析出包描述对象里的<code>main</code>属性指定的文件名进行定位，若是文件名缺少扩展名，将会进入扩展名分析的步骤</li><li>若是<code>package.json</code>文件不存在，或者<code>main</code>属性制定的文件名错误，Node 会将<code>index</code>当做默认文件名，然后做扩展名分析，即依次查找<code>index.js</code>、<code>index.json</code>、<code>index.node</code>。</li></ul></li></ol><p>若是在文件定位的过程中没有成功定位到任何文件，则自定义模块进入下一模块路径进行查找。</p><p>若是模块路径数组都被遍历完毕，依然没有查找到目标文件，则会抛出查找失败的异常。</p><p>Reference: [深入浅出 NodeJS]</p><h3 id="require-resolve" tabindex="-1"><a class="header-anchor" href="#require-resolve"><span>require.resolve</span></a></h3><p>获取模块的绝对路径</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">resolve</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;a.js&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 结果</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// /home/ruanyf/tmp/a.js</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Reference: <a href="http://www.ruanyifeng.com/blog/2015/05/require.html" target="_blank" rel="noopener noreferrer">require() 源码解读</a></p>', 28)),
    createVNode(_component_global_config)
  ]);
}
const commonjs_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "commonjs.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/development-skills/nodejs/commonjs.html","title":"CommonJS 规范及实现","lang":"en-US","frontmatter":{"description":"CommonJS 规范及实现 包规范的实现 - NPM NPM 是 CommonJS 包规范的一种实现。 CommonJS 包规范的目录 package.json：包描述文件 bin：用于存放可执行二进制文件的目录 lib：用于存放 JavaScript 代码的目录 doc：用于存放文档的目录 test：用于存放单元测试用例的代码 安装依赖包 全局安装...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/development-skills/nodejs/commonjs.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"CommonJS 规范及实现"}],["meta",{"property":"og:description","content":"CommonJS 规范及实现 包规范的实现 - NPM NPM 是 CommonJS 包规范的一种实现。 CommonJS 包规范的目录 package.json：包描述文件 bin：用于存放可执行二进制文件的目录 lib：用于存放 JavaScript 代码的目录 doc：用于存放文档的目录 test：用于存放单元测试用例的代码 安装依赖包 全局安装..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-31T12:47:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-31T12:47:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CommonJS 规范及实现\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-31T12:47:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"包规范的实现 - NPM","slug":"包规范的实现-npm","link":"#包规范的实现-npm","children":[{"level":3,"title":"CommonJS 包规范的目录","slug":"commonjs-包规范的目录","link":"#commonjs-包规范的目录","children":[]},{"level":3,"title":"安装依赖包","slug":"安装依赖包","link":"#安装依赖包","children":[]}]},{"level":2,"title":"模块规范的实现","slug":"模块规范的实现","link":"#模块规范的实现","children":[{"level":3,"title":"自定义模块的路径分析及文件定位","slug":"自定义模块的路径分析及文件定位","link":"#自定义模块的路径分析及文件定位","children":[]},{"level":3,"title":"require.resolve","slug":"require-resolve","link":"#require-resolve","children":[]}]}],"git":{"createdTime":1534950405000,"updatedTime":1730378820000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":2.78,"words":833},"filePathRelative":"front-end-engineering/development-skills/nodejs/commonjs.md","localizedDate":"August 22, 2018","autoDesc":true}');
export {
  commonjs_html as comp,
  data
};
