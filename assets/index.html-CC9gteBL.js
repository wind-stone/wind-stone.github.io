import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[9] || (_cache[9] = createBaseVNode("h1", {
      id: "cli",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#cli"
      }, [
        createBaseVNode("span", null, "CLI")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#知识点" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("知识点")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#命令行-与-的区别" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("命令行 -- 与 - 的区别")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#unix-风格参数" }, {
                    default: withCtx(() => _cache[2] || (_cache[2] = [
                      createTextVNode("Unix 风格参数")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#gnu-风格参数" }, {
                    default: withCtx(() => _cache[3] || (_cache[3] = [
                      createTextVNode("GNU 风格参数")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#单独的" }, {
                    default: withCtx(() => _cache[4] || (_cache[4] = [
                      createTextVNode("单独的 --")
                    ])),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#用户默认目录" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("用户默认目录")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#常用命令行工具" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("常用命令行工具")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#unrar" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode("unrar")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#rsync" }, {
                default: withCtx(() => _cache[8] || (_cache[8] = [
                  createTextVNode("rsync")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[10] || (_cache[10] = createStaticVNode('<p>CLI（command-line interface，命令行界面）</p><h2 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点"><span>知识点</span></a></h2><h3 id="命令行-与-的区别" tabindex="-1"><a class="header-anchor" href="#命令行-与-的区别"><span>命令行 -- 与 - 的区别</span></a></h3><p>在 Linux 的<code>shell</code>中，我们把<code>-</code>和<code>--</code>加上一个字符（字符串）叫做命令行参数，主流的有下面几种风格：</p><ul><li>Unix 风格参数，参数前加单破折线<code>-</code></li><li>GNU 风格参数，参数前加双破折线<code>--</code></li><li>BSD 风格参数，参数前不加破折线</li></ul><h4 id="unix-风格参数" tabindex="-1"><a class="header-anchor" href="#unix-风格参数"><span>Unix 风格参数</span></a></h4><p>单个<code>-</code>后面加单个字母，代表一个参数。Unix风格的参数是从贝尔实验室开发的 AT&amp;T Unix 系统上原有的命令继承下来的。比如</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ls</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -l</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -fr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -am</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;xxx&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而对于单个<code>-</code>后面加多个字母的情况，实际上是多个参数，只是合并起来而已。比如<code>git --am</code>实际上是<code>git -a -m</code>，可以分开写，也可以合并在一起写。</p><h4 id="gnu-风格参数" tabindex="-1"><a class="header-anchor" href="#gnu-风格参数"><span>GNU 风格参数</span></a></h4><p>两个<code>--</code>后面加单词或短语，代表一个参数。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lodash</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --save</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> express</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --save-dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>若<code>--</code>后面加短语，短语的每个单词之间也会使用<code>-</code>连接，比如上面的<code>--save-dev</code>代表单个参数。</p><p>通常情况，<code>-</code>的参数是<code>--</code>参数的简写，比如<code>-h</code>和<code>--help</code>、<code>ls</code>命令里的<code>-a</code>和<code>--all</code>。当然，也会有一些例外情况。</p><h4 id="单独的" tabindex="-1"><a class="header-anchor" href="#单独的"><span>单独的 --</span></a></h4><p>目前这种情况仅在 PM2 里见过。</p><p>PM2 是进程管理工具，执行 PM2 的<code>start</code>命令会间接执行<code>node</code>命令，若是想在执行命令时给<code>node</code>命令传递参数，可以如下使用<code>--</code>：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pm2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app.js</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> helle</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> world</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// app.js</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> process</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">argv</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">process</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">argv</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">])</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 输出：</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 0 &#39;/Users/wind-stone/.nvm/versions/node/v11.10.0/bin/node&#39;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 1 &#39;/Users/wind-stone/.nvm/versions/node/v11.10.0/lib/node_modules/pm2/lib/ProcessContainerFork.js&#39;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 2 &#39;hello&#39;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 3 &#39;world&#39;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 4 undefined</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即单独的<code>--</code>代表将之后的所有参数传递给<code>node</code>命令。</p><h3 id="用户默认目录" tabindex="-1"><a class="header-anchor" href="#用户默认目录"><span>用户默认目录</span></a></h3><p>Linux/Unix 系统下</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># wind-stone 代表用户，server-host 代表服务器</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 进入服务器，会默认进行 home/wind-stone 目录下</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wind-stone@server-host</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 以下目录，实际上是 home/wind-stone/files/some-directory/</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wind-stone@server-host::files/some-directory/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令行工具" tabindex="-1"><a class="header-anchor" href="#常用命令行工具"><span>常用命令行工具</span></a></h2><h3 id="unrar" tabindex="-1"><a class="header-anchor" href="#unrar"><span>unrar</span></a></h3><p>解压<code>rar</code>文件</p><ol><li>使用<code>Homebrew</code>安装<code>unrar</code>：<code>$ brew install unrar</code></li><li>切换到<code>rar</code>文件所在目录，输入命令进行解压：<code>unrar x test.rar</code></li></ol><h3 id="rsync" tabindex="-1"><a class="header-anchor" href="#rsync"><span>rsync</span></a></h3><p><code>rsync</code>命令是一个远程数据同步工具，可通过 LAN/WAN 快速同步多台主机间的文件。<code>rsync</code>使用所谓的“rsync算法”来使本地和远程两个主机之间的文件达到同步，这个算法只传送两个文件的不同部分，而不是每次都整份传送，因此速度相当快。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># rsync [OPTION]... SRC [USER@]HOST::DEST</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 从本地机器拷贝文件到远程rsync服务器中。当 DST 路径信息包含“::”分隔符时启动该模式</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rsync</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -av</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /databack</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root@192.168.78.192::www</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="http://man.linuxde.net/rsync" target="_blank" rel="noopener noreferrer">rsync 命令大全</a></p>', 31)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/full-stack/operating-system/linux/","title":"CLI","lang":"en-US","frontmatter":{"description":"CLI CLI（command-line interface，命令行界面） 知识点 命令行 -- 与 - 的区别 在 Linux 的shell中，我们把-和--加上一个字符（字符串）叫做命令行参数，主流的有下面几种风格： Unix 风格参数，参数前加单破折线- GNU 风格参数，参数前加双破折线-- BSD 风格参数，参数前不加破折线 Unix 风格参...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/full-stack/operating-system/linux/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"CLI"}],["meta",{"property":"og:description","content":"CLI CLI（command-line interface，命令行界面） 知识点 命令行 -- 与 - 的区别 在 Linux 的shell中，我们把-和--加上一个字符（字符串）叫做命令行参数，主流的有下面几种风格： Unix 风格参数，参数前加单破折线- GNU 风格参数，参数前加双破折线-- BSD 风格参数，参数前不加破折线 Unix 风格参..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-04T08:32:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-04T08:32:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CLI\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T08:32:47.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"知识点","slug":"知识点","link":"#知识点","children":[{"level":3,"title":"命令行 -- 与 - 的区别","slug":"命令行-与-的区别","link":"#命令行-与-的区别","children":[]},{"level":3,"title":"用户默认目录","slug":"用户默认目录","link":"#用户默认目录","children":[]}]},{"level":2,"title":"常用命令行工具","slug":"常用命令行工具","link":"#常用命令行工具","children":[{"level":3,"title":"unrar","slug":"unrar","link":"#unrar","children":[]},{"level":3,"title":"rsync","slug":"rsync","link":"#rsync","children":[]}]}],"git":{"createdTime":1540545851000,"updatedTime":1714811567000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":2.3,"words":691},"filePathRelative":"full-stack/operating-system/linux/README.md","localizedDate":"October 26, 2018","autoDesc":true}');
export {
  index_html as comp,
  data
};
