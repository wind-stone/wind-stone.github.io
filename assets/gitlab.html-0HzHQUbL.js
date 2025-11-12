import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[6] || (_cache[6] = createBaseVNode("h1", {
      id: "gitlab",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#gitlab"
      }, [
        createBaseVNode("span", null, "Gitlab")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#git-github-gitlab" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("git/github/gitlab")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#使用-gitlab-为什么要生成公钥和私钥" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("使用 gitlab 为什么要生成公钥和私钥？")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#生成并设置ssh-key" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("生成并设置SSH Key")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#步骤1-检查是否已经存在-ssh-key" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("步骤1. 检查是否已经存在 SSH Key")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#步骤2-生成-ssh-key" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("步骤2. 生成 SSH Key")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#步骤3-将-ssh-key-的公钥添加到-gitlab-github-中" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("步骤3. 将 SSH Key 的公钥添加到 gitlab/github 中")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[7] || (_cache[7] = createStaticVNode('<h2 id="git-github-gitlab" tabindex="-1"><a class="header-anchor" href="#git-github-gitlab"><span>git/github/gitlab</span></a></h2><ul><li>git：版本控制工具</li><li>github：是一个网站，提供给用户空间创建 git 仓储，保存用户的一些数据文档或者代码等</li><li>gitlab：是基于 git 的项目管理软件</li></ul><h2 id="使用-gitlab-为什么要生成公钥和私钥" tabindex="-1"><a class="header-anchor" href="#使用-gitlab-为什么要生成公钥和私钥"><span>使用 gitlab 为什么要生成公钥和私钥？</span></a></h2><p>​首先，使用代码管理工具把本地的代码上传到服务器时需要加密处理，加密传输的算法有很多种，Git 可使用 RSA，RSA 要解决的一个核心问题是，如何使用一对密钥，使其中一个可以用来加密，而另外一个可以用来解密。这这对密钥就是 public key（公钥）和 private key（私钥）。</p><p>​其中，公钥就是那个用来加密的密钥，这也就是为什么你在本机生成了公钥之后，要上传到 github 的原因。从 github 发回来的，用那公钥加密过的数据，可以用你本地的私钥来还原。如果你的 key 丢失了，不管是公钥还是私钥，丢失一个都不能用了，解决方法也很简单，删除原有的 key，重新再生成一次，然后在 github/gitlab 里再设置一次就行。</p><h2 id="生成并设置ssh-key" tabindex="-1"><a class="header-anchor" href="#生成并设置ssh-key"><span>生成并设置SSH Key</span></a></h2><h3 id="步骤1-检查是否已经存在-ssh-key" tabindex="-1"><a class="header-anchor" href="#步骤1-检查是否已经存在-ssh-key"><span>步骤1. 检查是否已经存在 SSH Key</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ls</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -al</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.ssh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>打开电脑终端，输入并执行以上命令，会出现两种情况：</p><ul><li>终端未出现<code>id_rsa.pub</code>文件，表示该电脑还没有配置 SSH Key，进入步骤2</li><li>终端出现文件<code>id_rsa.pub</code>文件，则表示该电脑已经存在 SSH Key，进入步骤3</li></ul><h3 id="步骤2-生成-ssh-key" tabindex="-1"><a class="header-anchor" href="#步骤2-生成-ssh-key"><span>步骤2. 生成 SSH Key</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ssh-keygen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rsa</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;your_email@example.com&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输入并执行以上命令，此时终端会显示：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Generating</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> public/private</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rsa</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pair.</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Enter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> which</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> save</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (/your_home_path/.ssh/id_rsa):</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>连续回车即可，SSH Key 会保存在默认路径下（/User/wind-stone/.ssh），密码也默认为空。</p><p>最后，会在默认路径下（/User/wind-stone/.ssh）生成<code>id_rsa</code>和<code>id_rsa.pub</code>两个文件，其中<code>id_rsa</code>是私钥，<code>id_rsa.pub</code>是公钥。</p><h3 id="步骤3-将-ssh-key-的公钥添加到-gitlab-github-中" tabindex="-1"><a class="header-anchor" href="#步骤3-将-ssh-key-的公钥添加到-gitlab-github-中"><span>步骤3. 将 SSH Key 的公钥添加到 gitlab/github 中</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pbcopy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">~/.ssh/id_rsa.pub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输入并执行以上命令，则会将公钥复制到粘贴板上，打开 gitlab，</p><p>用户头像 --&gt; Settings --&gt; SSH Keys</p><p>将公钥添加即可。</p><p>需要注意：以上 SHELL 命令都是在 macOS 系统下执行的。</p>', 22)),
    createVNode(_component_global_config)
  ]);
}
const gitlab_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "gitlab.html.vue"]]);
const data = JSON.parse('{"path":"/full-stack/operating-system/git/gitlab.html","title":"Gitlab","lang":"en-US","frontmatter":{"description":"Gitlab git/github/gitlab git：版本控制工具 github：是一个网站，提供给用户空间创建 git 仓储，保存用户的一些数据文档或者代码等 gitlab：是基于 git 的项目管理软件 使用 gitlab 为什么要生成公钥和私钥？ ​首先，使用代码管理工具把本地的代码上传到服务器时需要加密处理，加密传输的算法有很多种，Git ...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/full-stack/operating-system/git/gitlab.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Gitlab"}],["meta",{"property":"og:description","content":"Gitlab git/github/gitlab git：版本控制工具 github：是一个网站，提供给用户空间创建 git 仓储，保存用户的一些数据文档或者代码等 gitlab：是基于 git 的项目管理软件 使用 gitlab 为什么要生成公钥和私钥？ ​首先，使用代码管理工具把本地的代码上传到服务器时需要加密处理，加密传输的算法有很多种，Git ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-04T08:32:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-04T08:32:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Gitlab\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T08:32:47.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"git/github/gitlab","slug":"git-github-gitlab","link":"#git-github-gitlab","children":[]},{"level":2,"title":"使用 gitlab 为什么要生成公钥和私钥？","slug":"使用-gitlab-为什么要生成公钥和私钥","link":"#使用-gitlab-为什么要生成公钥和私钥","children":[]},{"level":2,"title":"生成并设置SSH Key","slug":"生成并设置ssh-key","link":"#生成并设置ssh-key","children":[{"level":3,"title":"步骤1. 检查是否已经存在 SSH Key","slug":"步骤1-检查是否已经存在-ssh-key","link":"#步骤1-检查是否已经存在-ssh-key","children":[]},{"level":3,"title":"步骤2. 生成 SSH Key","slug":"步骤2-生成-ssh-key","link":"#步骤2-生成-ssh-key","children":[]},{"level":3,"title":"步骤3. 将 SSH Key 的公钥添加到 gitlab/github 中","slug":"步骤3-将-ssh-key-的公钥添加到-gitlab-github-中","link":"#步骤3-将-ssh-key-的公钥添加到-gitlab-github-中","children":[]}]}],"git":{"createdTime":1530757473000,"updatedTime":1714811567000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":1.92,"words":576},"filePathRelative":"full-stack/operating-system/git/gitlab.md","localizedDate":"July 5, 2018","autoDesc":true}');
export {
  gitlab_html as comp,
  data
};
