import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[15] || (_cache[15] = createBaseVNode("h1", {
      id: "google-cloud",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#google-cloud"
      }, [
        createBaseVNode("span", null, "Google Cloud")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#linux-上安装-node-js" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("Linux 上安装 Node.js")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#配置环境变量" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("配置环境变量")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#添加软链" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("添加软链")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#本地控制台连接到-vm-实例" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("本地控制台连接到 VM 实例")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#创建新的-ssh-密钥" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("创建新的 SSH 密钥")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#添加项目范围的-ssh-公钥" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("添加项目范围的 SSH 公钥")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#使用第三方工具进行连接" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("使用第三方工具进行连接")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#将文件传输到-linux-实例" }, {
            default: withCtx(() => _cache[7] || (_cache[7] = [
              createTextVNode("将文件传输到 Linux 实例")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#预先设置-project" }, {
                default: withCtx(() => _cache[8] || (_cache[8] = [
                  createTextVNode("预先设置 project")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#预先设置-zone" }, {
                default: withCtx(() => _cache[9] || (_cache[9] = [
                  createTextVNode("预先设置 zone")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#文件传输" }, {
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode("文件传输")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#服务器上安装-git" }, {
            default: withCtx(() => _cache[11] || (_cache[11] = [
              createTextVNode("服务器上安装 git")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#启动应用" }, {
            default: withCtx(() => _cache[12] || (_cache[12] = [
              createTextVNode("启动应用")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#应用启动-host" }, {
                default: withCtx(() => _cache[13] || (_cache[13] = [
                  createTextVNode("应用启动 host")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#应用启动端口" }, {
                default: withCtx(() => _cache[14] || (_cache[14] = [
                  createTextVNode("应用启动端口")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[16] || (_cache[16] = createStaticVNode('<h2 id="linux-上安装-node-js" tabindex="-1"><a class="header-anchor" href="#linux-上安装-node-js"><span>Linux 上安装 Node.js</span></a></h2><p>Node 官网已经把 Linux 下载版本更改为已编译好的版本了，我们可以直接下载解压后使用：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># wget https://nodejs.org/dist/v10.9.0/node-v11.11.0-linux-x64.tar.xz    // 下载</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># tar xf  node-v11.11.0-linux-x64.tar.xz       // 解压</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># cd node-v11.11.0-linux-x64/                  // 进入解压目录</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># ./bin/node -v                               // 执行node命令 查看版本</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">v10.9.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解压文件的<code>bin</code>目录底下包含了<code>node</code>、<code>npm</code>等命令，我们可以使用<code>ln</code>命令来设置软连接：</p><h3 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量"><span>配置环境变量</span></a></h3><p>修改<code>/etc/profile</code>文件，添加下面的配置：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> NODE_HOME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">home</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">cxl_windstone</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">node-v11</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">11</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">0-linux-x64</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">bin</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$NODE_HOME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$PATH</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>PATH</code>环境变量，会罗列出供系统搜索的目录，当在<code>shell</code>上执行用户输入的命令时，系统会搜索这些目录，以寻找这些命令程序。</p></div><h3 id="添加软链" tabindex="-1"><a class="header-anchor" href="#添加软链"><span>添加软链</span></a></h3><div class="hint-container warning"><p class="hint-container-title">警告</p><p>注意，若是配置了<code>PATH</code>环境变量，就不需要这一步了。</p></div><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/cxl_windstone/node-v11.11.0-linux-x64/bin/npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin/</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/cxl_windstone/node-v11.11.0-linux-x64/bin/npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin/</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 若是没权限，则需使用系统管理员身份执行命令</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/cxl_windstone/node-v11.11.0-linux-x64/bin/npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin/</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/cxl_windstone/node-v11.11.0-linux-x64/bin/npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>/home/cxl_windstone/node-v11.11.0-linux-x64/bin/npm</code>: 下载并解压的路径</li><li><code>/bin/</code>: 系统的<code>bin</code>文件夹路径</li></ul><p>注意：以上两种路径要根据实际做调整</p><h2 id="本地控制台连接到-vm-实例" tabindex="-1"><a class="header-anchor" href="#本地控制台连接到-vm-实例"><span>本地控制台连接到 VM 实例</span></a></h2><p>前提条件：本地安装了<code>gcloud</code>命令行工具。</p><h3 id="创建新的-ssh-密钥" tabindex="-1"><a class="header-anchor" href="#创建新的-ssh-密钥"><span>创建新的 SSH 密钥</span></a></h3><p>在本地控制台输入以下命令，来<a href="https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys#createsshkeys" target="_blank" rel="noopener noreferrer">创建新的 SSH 密钥</a></p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 格式</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ssh-keygen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rsa</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.ssh/[KEY_FILENAME]</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -C</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [USERNAME]</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 实际输入为</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ssh-keygen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rsa</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.ssh/google_compute_engine</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cxl_windstone</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经过这一步，在<code>~/.ssh</code>目录下就生成了两个文件: <code>google_compute_engine</code>和<code>google_compute_engine.pub</code>，其中为<code>google_compute_engine</code>为私钥，<code>google_compute_engine.pub</code>为公钥。</p><div class="hint-container warning"><p class="hint-container-title">警告</p><p>生成秘钥时，不要输入密码，否则后面的操作经常要输入密码。</p></div><h3 id="添加项目范围的-ssh-公钥" tabindex="-1"><a class="header-anchor" href="#添加项目范围的-ssh-公钥"><span>添加项目范围的 SSH 公钥</span></a></h3><p>在 计算引擎 --&gt; 元数据 --&gt; SSH 公钥，<a href="https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys#project-wide" target="_blank" rel="noopener noreferrer">添加项目范围的 SSH 公钥</a></p><h3 id="使用第三方工具进行连接" tabindex="-1"><a class="header-anchor" href="#使用第三方工具进行连接"><span>使用第三方工具进行连接</span></a></h3><p>在本地控制台执行如下命令，来<a href="https://cloud.google.com/compute/docs/instances/connecting-advanced#thirdpartytools" target="_blank" rel="noopener noreferrer">使用第三方工具进行连接</a></p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 格式</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [PATH_TO_PRIVATE_KEY] [USERNAME]@[EXTERNAL_IP_ADDRESS]</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 实际输入为</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.ssh/google_compute_engine</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cxl_windstone@35.220.249.163</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，即可通过本地控制台连接到 VM 实例。</p><h2 id="将文件传输到-linux-实例" tabindex="-1"><a class="header-anchor" href="#将文件传输到-linux-实例"><span>将文件传输到 Linux 实例</span></a></h2><h3 id="预先设置-project" tabindex="-1"><a class="header-anchor" href="#预先设置-project"><span>预先设置 project</span></a></h3><p>VM 实例所在的<a href="https://cloud.google.com/sdk/gcloud/reference/?hl=zh-cn#--project" target="_blank" rel="noopener noreferrer">project</a>，即项目 ID。若省略，将使用当前<code>project</code>。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 列出当前 project</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">gcloud</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --format=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;text(core.project)&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 设置 project</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">gcloud</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> project</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PROJECTID</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS: 可直接在</p><h3 id="预先设置-zone" tabindex="-1"><a class="header-anchor" href="#预先设置-zone"><span>预先设置 zone</span></a></h3><p>VM 实例所在的区域。执行<code>scp</code>命令时，若未指定<code>--zone</code>选项，并未预先设置<code>compute/zone</code>属性，将会被提示选择一个区域。</p><p>你可以如下预先设置<code>compute/zone</code>属性，以避免<code>--zone</code>选项省略时被提示。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 格式</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">gcloud</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> compute/zone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ZONE</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 实际输入为</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># gcloud config set compute/zone asia-east2-a</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件传输" tabindex="-1"><a class="header-anchor" href="#文件传输"><span>文件传输</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 格式，</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">gcloud</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> compute</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --recurse</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [INSTANCE_NAME]:[REMOTE_DIR] [LOCAL_DIR]</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">gcloud</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> compute</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --recurse</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [LOCAL_DIR] [INSTANCE_NAME]:[REMOTE_DIR]</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 实际输入为:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">gcloud</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> compute</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --recurse</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ../koa-nuxt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cxl_windstone@nodejs-server-instance:~/node-projects</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">警告</p><p><code>gcloud compute scp</code>命令还有以下属性需要注意：</p><ul><li><code>project</code>和<code>zone</code>可以不预先设置，而在<code>scp</code>命令里以参数形式指定: <code>--project=PROJECTID --zone=ZONE</code></li><li><code>--port</code>: 连接 VM 实例的哪个端口，默认是<code>22</code>，不需要设置</li><li><code>--ssh-key-file</code>: SSH 私钥文件的位置，默认是<code>~/.ssh/google_compute_engine</code>。若是在<code>创建新的 SSH 密钥</code>一节里生成的秘钥文件不是这个，则要添加该选项</li></ul></div><h2 id="服务器上安装-git" tabindex="-1"><a class="header-anchor" href="#服务器上安装-git"><span>服务器上安装 git</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git-core</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="启动应用" tabindex="-1"><a class="header-anchor" href="#启动应用"><span>启动应用</span></a></h2><h3 id="应用启动-host" tabindex="-1"><a class="header-anchor" href="#应用启动-host"><span>应用启动 host</span></a></h3><p>应用启动的时候，<code>host</code>不能设为<code>127.0.0.1</code>，否则外部无法通过 IP 地址访问，而内部也只能通过<code>127.0.0.1</code>访问，不能通过<code>localhost</code>访问。</p><p>必须设置为<code>0.0.0.0</code>，或者不做设置。</p><p>涉及到知识点：</p><ul><li><code>0.0.0.0</code>: 通过本机的任一 IP 地址，都可访问</li><li><code>127.0.0.1</code>: 只能在本地的各个应用之间能访问到</li><li><code>localhost</code>: 这是一域名，通过系统的<code>hosts</code>文件配置为指向<code>127.0.0.1</code>，也可以设置为指向其他地址</li></ul><p>详见<a href="https://gist.github.com/zxhfighter/b9f4b4ef328cd8b433b0e9dc2f4af26d" target="_blank" rel="noopener noreferrer">127.0.0.1、localhost、0.0.0.0、本机IP地址</a></p><h3 id="应用启动端口" tabindex="-1"><a class="header-anchor" href="#应用启动端口"><span>应用启动端口</span></a></h3><p>若是没有系统权限，无法在<code>1024</code>以下的端口启动，可在<code>8888</code>等端口启动，但是需要配置防火墙的过滤。路径是<code>VPC 网络 --&gt; 防火墙规则</code>，并创建一个新的规则，允许<code>tcp:8888</code>的流量进入。</p>', 49)),
    createVNode(_component_global_config)
  ]);
}
const googleCloud_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "google-cloud.html.vue"]]);
const data = JSON.parse('{"path":"/full-stack/others/google-cloud.html","title":"Google Cloud","lang":"en-US","frontmatter":{"description":"Google Cloud Linux 上安装 Node.js Node 官网已经把 Linux 下载版本更改为已编译好的版本了，我们可以直接下载解压后使用： 解压文件的bin目录底下包含了node、npm等命令，我们可以使用ln命令来设置软连接： 配置环境变量 修改/etc/profile文件，添加下面的配置： 提示 PATH环境变量，会罗列出供系统搜...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/full-stack/others/google-cloud.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Google Cloud"}],["meta",{"property":"og:description","content":"Google Cloud Linux 上安装 Node.js Node 官网已经把 Linux 下载版本更改为已编译好的版本了，我们可以直接下载解压后使用： 解压文件的bin目录底下包含了node、npm等命令，我们可以使用ln命令来设置软连接： 配置环境变量 修改/etc/profile文件，添加下面的配置： 提示 PATH环境变量，会罗列出供系统搜..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T15:28:33.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T15:28:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Google Cloud\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T15:28:33.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Linux 上安装 Node.js","slug":"linux-上安装-node-js","link":"#linux-上安装-node-js","children":[{"level":3,"title":"配置环境变量","slug":"配置环境变量","link":"#配置环境变量","children":[]},{"level":3,"title":"添加软链","slug":"添加软链","link":"#添加软链","children":[]}]},{"level":2,"title":"本地控制台连接到 VM 实例","slug":"本地控制台连接到-vm-实例","link":"#本地控制台连接到-vm-实例","children":[{"level":3,"title":"创建新的 SSH 密钥","slug":"创建新的-ssh-密钥","link":"#创建新的-ssh-密钥","children":[]},{"level":3,"title":"添加项目范围的 SSH 公钥","slug":"添加项目范围的-ssh-公钥","link":"#添加项目范围的-ssh-公钥","children":[]},{"level":3,"title":"使用第三方工具进行连接","slug":"使用第三方工具进行连接","link":"#使用第三方工具进行连接","children":[]}]},{"level":2,"title":"将文件传输到 Linux 实例","slug":"将文件传输到-linux-实例","link":"#将文件传输到-linux-实例","children":[{"level":3,"title":"预先设置 project","slug":"预先设置-project","link":"#预先设置-project","children":[]},{"level":3,"title":"预先设置 zone","slug":"预先设置-zone","link":"#预先设置-zone","children":[]},{"level":3,"title":"文件传输","slug":"文件传输","link":"#文件传输","children":[]}]},{"level":2,"title":"服务器上安装 git","slug":"服务器上安装-git","link":"#服务器上安装-git","children":[]},{"level":2,"title":"启动应用","slug":"启动应用","link":"#启动应用","children":[{"level":3,"title":"应用启动 host","slug":"应用启动-host","link":"#应用启动-host","children":[]},{"level":3,"title":"应用启动端口","slug":"应用启动端口","link":"#应用启动端口","children":[]}]}],"git":{"createdTime":1552643609000,"updatedTime":1623684513000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":3.71,"words":1114},"filePathRelative":"full-stack/others/google-cloud.md","localizedDate":"March 15, 2019","autoDesc":true}');
export {
  googleCloud_html as comp,
  data
};
