import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[12] || (_cache[12] = createBaseVNode("h1", {
      id: "第三方工具",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#第三方工具"
      }, [
        createBaseVNode("span", null, "第三方工具")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#监控文件变化" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("监控文件变化")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#chokidar-监控文件变化" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("chokidar 监控文件变化")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#nodemon-监控文件变化重启应用" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("nodemon 监控文件变化重启应用")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#网络请求" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("网络请求")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#axios-curlirize-将请求显示为-curl" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("axios-curlirize 将请求显示为 CURL")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#library-里常用的工具库" }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("library 里常用的工具库")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#inquirer-js" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("Inquirer.js")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#commander-js" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode("Commander.js")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#其他" }, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("其他")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#require-all" }, {
                default: withCtx(() => _cache[9] || (_cache[9] = [
                  createTextVNode("require-all")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#etag" }, {
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode("etag")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#depcheck" }, {
            default: withCtx(() => _cache[11] || (_cache[11] = [
              createTextVNode("depcheck")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[13] || (_cache[13] = createStaticVNode('<h2 id="监控文件变化" tabindex="-1"><a class="header-anchor" href="#监控文件变化"><span>监控文件变化</span></a></h2><h3 id="chokidar-监控文件变化" tabindex="-1"><a class="header-anchor" href="#chokidar-监控文件变化"><span>chokidar 监控文件变化</span></a></h3><p><a href="https://github.com/paulmillr/chokidar" target="_blank" rel="noopener noreferrer">chokidar</a>，基于 Nodej.js 的<code>fs.watch</code>/<code>fs.watchFile</code>/<code>fsevents</code>封装的<code>watch</code>工具。</p><h3 id="nodemon-监控文件变化重启应用" tabindex="-1"><a class="header-anchor" href="#nodemon-监控文件变化重启应用"><span>nodemon 监控文件变化重启应用</span></a></h3><p><a href="https://github.com/remy/nodemon" target="_blank" rel="noopener noreferrer"><code>nodemon</code></a>可以在开发<code>node.js</code>应用时，监控目录下的文件改变，并自动重启<code>node.js</code>应用。</p><p><code>nodemon</code>不需要任何关于开发方法或代码上的修改，它是<code>node</code>的封装，并代替了<code>node</code>。使用<code>nodemon</code>时，当执行脚本时，在命令行将原来的<code>node</code>替换成<code>nodemon</code>即可。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 全局/局部安装</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nodemon</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --save-dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nodemon</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 启动应用，并默认监控当前工作目录下的文件改变（递归地）</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nodemon</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./server.js</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 启动应用，并监控 server 文件夹下的文件改变</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nodemon</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> server/index.js</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --watch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 方式二：该方式官网里直接说明结果的结构，因此如下阐述</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> libs</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;require-all&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">__dirname</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;/lib&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>假设<code>lib</code>目录下的文件夹结构为：</p><ul><li>lib <ul><li>folder1 <ul><li>file1-1.js</li><li>file1-2.js</li></ul></li><li>folder2 <ul><li>file2-1.js</li></ul></li></ul></li></ul><p>则通过方式二得到的<code>libs</code>为：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  folder1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    file1</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    file1</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  folder2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    file2</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>各个文件的结构为<code>module.exports = function() {}</code>，以<code>[Function: exports]</code>表示。</p><h2 id="网络请求" tabindex="-1"><a class="header-anchor" href="#网络请求"><span>网络请求</span></a></h2><h3 id="axios-curlirize-将请求显示为-curl" tabindex="-1"><a class="header-anchor" href="#axios-curlirize-将请求显示为-curl"><span>axios-curlirize 将请求显示为 CURL</span></a></h3><p><a href="https://github.com/delirius325/axios-curlirize" target="_blank" rel="noopener noreferrer">axios-curlirize</a>，将 Node.js 里的<code>axios</code>请求以 CURL 的形式打印出来。</p><h2 id="library-里常用的工具库" tabindex="-1"><a class="header-anchor" href="#library-里常用的工具库"><span>library 里常用的工具库</span></a></h2><h3 id="inquirer-js" tabindex="-1"><a class="header-anchor" href="#inquirer-js"><span>Inquirer.js</span></a></h3><p><a href="https://github.com/SBoudrias/Inquirer.js" target="_blank" rel="noopener noreferrer">Inquirer.js</a>，常用的交互式命令行 UI 集合，主要用于在命令行里让用户以交互式的方式选择/输入所需的数据。</p><h3 id="commander-js" tabindex="-1"><a class="header-anchor" href="#commander-js"><span>Commander.js</span></a></h3><p><a href="https://github.com/tj/commander.js" target="_blank" rel="noopener noreferrer">Commander.js</a>，完整的 Node.js 命令行解决方案，定义命令、选项，根据用户输入的命令执行操作。使用该库，可以定义一套命令及对应的功能。</p><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2><h3 id="require-all" tabindex="-1"><a class="header-anchor" href="#require-all"><span>require-all</span></a></h3><p><a href="https://github.com/felixge/node-require-all" target="_blank" rel="noopener noreferrer"><code>require-all</code></a>，<code>require</code>整个目录里的所有文件。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 方式一：该方式可直接看官网示例，有详细说明</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> controllers</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;require-all&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)({</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  dirname     </span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  __dirname</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;/controllers&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  filter      </span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">  /(</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">.</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">+</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">Controller)</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\.</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">js</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">$</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  excludeDirs </span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">  /</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">^</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\.</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">(git</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">svn)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">$</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  recursive   </span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="etag" tabindex="-1"><a class="header-anchor" href="#etag"><span>etag</span></a></h3><p><a href="https://github.com/jshttp/etag" target="_blank" rel="noopener noreferrer">etag</a>，创建简单的 ETags。</p><h2 id="depcheck" tabindex="-1"><a class="header-anchor" href="#depcheck"><span>depcheck</span></a></h2><p><a href="https://github.com/depcheck/depcheck" target="_blank" rel="noopener noreferrer">depcheck</a><br> ，分析项目里的依赖，查看每个依赖是否使用到，缺少哪些依赖。</p>', 29)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/environment/package-manager/third-party-packages/","title":"第三方工具","lang":"en-US","frontmatter":{"description":"第三方工具 监控文件变化 chokidar 监控文件变化 chokidar，基于 Nodej.js 的fs.watch/fs.watchFile/fsevents封装的watch工具。 nodemon 监控文件变化重启应用 nodemon可以在开发node.js应用时，监控目录下的文件改变，并自动重启node.js应用。 nodemon不需要任何关于开...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/environment/package-manager/third-party-packages/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"第三方工具"}],["meta",{"property":"og:description","content":"第三方工具 监控文件变化 chokidar 监控文件变化 chokidar，基于 Nodej.js 的fs.watch/fs.watchFile/fsevents封装的watch工具。 nodemon 监控文件变化重启应用 nodemon可以在开发node.js应用时，监控目录下的文件改变，并自动重启node.js应用。 nodemon不需要任何关于开..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-31T12:47:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-31T12:47:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第三方工具\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-31T12:47:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"监控文件变化","slug":"监控文件变化","link":"#监控文件变化","children":[{"level":3,"title":"chokidar 监控文件变化","slug":"chokidar-监控文件变化","link":"#chokidar-监控文件变化","children":[]},{"level":3,"title":"nodemon 监控文件变化重启应用","slug":"nodemon-监控文件变化重启应用","link":"#nodemon-监控文件变化重启应用","children":[]}]},{"level":2,"title":"网络请求","slug":"网络请求","link":"#网络请求","children":[{"level":3,"title":"axios-curlirize 将请求显示为 CURL","slug":"axios-curlirize-将请求显示为-curl","link":"#axios-curlirize-将请求显示为-curl","children":[]}]},{"level":2,"title":"library 里常用的工具库","slug":"library-里常用的工具库","link":"#library-里常用的工具库","children":[{"level":3,"title":"Inquirer.js","slug":"inquirer-js","link":"#inquirer-js","children":[]},{"level":3,"title":"Commander.js","slug":"commander-js","link":"#commander-js","children":[]}]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[{"level":3,"title":"require-all","slug":"require-all","link":"#require-all","children":[]},{"level":3,"title":"etag","slug":"etag","link":"#etag","children":[]}]},{"level":2,"title":"depcheck","slug":"depcheck","link":"#depcheck","children":[]}],"git":{"createdTime":1730378820000,"updatedTime":1730378820000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":1.79,"words":538},"filePathRelative":"front-end-engineering/environment/package-manager/third-party-packages/index.md","localizedDate":"October 31, 2024","autoDesc":true}');
export {
  index_html as comp,
  data
};
