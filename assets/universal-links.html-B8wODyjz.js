import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[6] || (_cache[6] = createBaseVNode("h1", {
      id: "universal-links",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#universal-links"
      }, [
        createBaseVNode("span", null, "Universal Links")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#为什么要使用-universal-links" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("为什么要使用 Universal Links")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#优点" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("优点")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#缺点" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("缺点")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#如何让-app-支持-universal-links" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("如何让 APP 支持 Universal Links")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#apple-app-site-association-格式" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("apple-app-site-association 格式")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#universal-links-配置中的坑" }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("Universal Links 配置中的坑")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[7] || (_cache[7] = createStaticVNode('<p>参考链接:</p><ul><li><a href="https://www.jianshu.com/p/0ead88409212" target="_blank" rel="noopener noreferrer">iOS H5打开App(通用链接)</a>，这篇文章特别详细</li><li><a href="https://developer.apple.com/documentation/uikit/core_app/allowing_apps_and_websites_to_link_to_your_content" target="_blank" rel="noopener noreferrer">Allowing Apps and Websites to Link to Your Content</a></li></ul><p>在 2015 年的 WWDC 大会上，Apple 推出了 iOS 9 的一个功能：Universal Links（通用链接）。</p><p>如果你的 APP 支持 Universal Links，那就可以访问 HTTP/HTTPS 链接直接唤起 APP 进入特定页面，不需要其他额外判断；如果未安装 APP，访问此通用链接时会直接访问这个 HTTP/HTTPS 链接，而这个链接是你可以自定义的页面。</p><h2 id="为什么要使用-universal-links" tabindex="-1"><a class="header-anchor" href="#为什么要使用-universal-links"><span>为什么要使用 Universal Links</span></a></h2><p>传统的 URL Scheme 有如下痛点：</p><ul><li>在 iOS 上会有确认弹窗提示用户是否唤起 APP，对于用户唤起 APP 来说，多出了一步操作。若用户未安装 APP，也会有个提示弹窗，告知我们“Safari浏览器打不开该网页，因为网址无效。”</li><li>传统的 Scheme 跳转无法得知唤起 APP 是否成功，Universal Links 唤起 APP 失败后，可以直接打开此链接对应的页面。</li><li>URL Scheme 在微信、微博、QQ浏览器、手百中都已经被禁止使用，使用 Universal Link 可以避开它们的屏蔽（但截止到2018年8月21日，微信和QQ浏览器已经禁止了 Universal Links，其他主流 APP 未发现有禁止）。</li></ul><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3><ul><li>唯一性: 不像自定义的<code>scheme</code>，因为它使用标准的 HTTP/HTTPS 链接到你的 WEB 站点，所以它不会被其它的 APP 所声明（即不会出现两个 APP 共用一个<code>scheme</code>的情况）。另外，Custom URL scheme 因为是自定义的协议，所以在没有安装 APP 的情况下是无法直接打开的，而 Universal Links 本身是一个 HTTP/HTTPS 链接，所以有更好的兼容性。</li><li>安全: 当用户的手机上安装了你的 APP，那么 iOS 将去你的网站上去下载你上传上去的说明文件<code>apple-app-site-association</code>(这个说明文件声明了 APP 可以打开哪些类型的 HTTP/HTTPS 链接)。因为只有你自己才能上传文件到你网站的根目录,所以你的网站和你的 APP 之间的关联是安全的。</li><li>可变: 当用户手机上没有安装你的 APP 的时候，Universal Links 也能够工作。如果你愿意，在没有安装 APP 的时候，用户点击链接，会在 Safari 中展示你网站的内容。</li><li>简单: 一个 URL 链接，可以同时作用于网站和 APP，可以定义统一的 web-native 协议。</li><li>私有: 其它 APP 可以在不需要知道是否安装了的情况下和你的 APP 相互通信。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h3><ul><li>只支持 iOS9 及以上系统。</li><li>当使用 Universal Links 打开 APP 之后，状态栏右上角会出现链接地址，点击它会取消 Universal Links，需引导用户重新使用 Safari 再次打开该链接，弹出 Safari 内置 APP 广告条，再点击打开重新开启 Universal Link。</li></ul><h2 id="如何让-app-支持-universal-links" tabindex="-1"><a class="header-anchor" href="#如何让-app-支持-universal-links"><span>如何让 APP 支持 Universal Links</span></a></h2><ol><li>准备好一个<strong>HTTPS</strong>域名。</li><li>在 开发者中心 的 Identifiers 下 AppIDs 找到自己的 AppID，编辑打开 Associated Domains 服务。</li><li>打开工程配置中的 Associated Domains ，在其中的 Domains 中填入你想支持的域名，必须以 applinks: 为前缀。</li><li>配置<code>apple-app-site-association</code>文件，文件名必须为<code>apple-app-site-association</code>，<strong>不带任何后缀</strong>。</li><li>上传该文件到你的 HTTPS 服务器的<strong>根目录</strong>或者<code>.well-known</code>目录下。</li></ol><h3 id="apple-app-site-association-格式" tabindex="-1"><a class="header-anchor" href="#apple-app-site-association-格式"><span>apple-app-site-association 格式</span></a></h3><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;applinks&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;apps&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [],</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;details&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                &quot;appID&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Y5963EFXW8.com.kwai.intl&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                &quot;paths&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/app/*&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            },</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // ....</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        ]</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;webcredentials&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">       &quot;apps&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;MW76NQM8LG.com.jiangjia.gif&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;MW76NQM8LG.com.kwai.gifshow.beta1&quot;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        ]</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="universal-links-配置中的坑" tabindex="-1"><a class="header-anchor" href="#universal-links-配置中的坑"><span>Universal Links 配置中的坑</span></a></h2><p>在实际的配置过程中，要严格按照上面的步骤进行，但仍然会遇到一些坑。</p><ul><li>跨域问题。</li></ul><p>iOS 9.2 以后，必须要触发跨域才能支持 Universal Links 唤起 APP。<br> iOS 系统里有这样一个判断，如果你要打开的 Universal Links 和 当前页面是同一域名，iOS 将尊重用户最可能的意图，直接打开链接所对应的页面。如果不在同一域名下，才会执行具体的唤起操作。</p><ul><li>Universal Links 是空页面</li></ul><p>Universal Links 本质上是个空页面，如果未安装 APP，Universal Links 会被当做普通的页面链接，自然会跳到 404 页面，所以我们需要将它绑定到我们的中转页或者下载页。</p>', 21)),
    createVNode(_component_global_config)
  ]);
}
const universalLinks_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "universal-links.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/hybrid/universal-links.html","title":"Universal Links","lang":"en-US","frontmatter":{"description":"Universal Links 参考链接: iOS H5打开App(通用链接)，这篇文章特别详细 Allowing Apps and Websites to Link to Your Content 在 2015 年的 WWDC 大会上，Apple 推出了 iOS 9 的一个功能：Universal Links（通用链接）。 如果你的 APP 支持 U...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/hybrid/universal-links.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Universal Links"}],["meta",{"property":"og:description","content":"Universal Links 参考链接: iOS H5打开App(通用链接)，这篇文章特别详细 Allowing Apps and Websites to Link to Your Content 在 2015 年的 WWDC 大会上，Apple 推出了 iOS 9 的一个功能：Universal Links（通用链接）。 如果你的 APP 支持 U..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Universal Links\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"为什么要使用 Universal Links","slug":"为什么要使用-universal-links","link":"#为什么要使用-universal-links","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}]},{"level":2,"title":"如何让 APP 支持 Universal Links","slug":"如何让-app-支持-universal-links","link":"#如何让-app-支持-universal-links","children":[{"level":3,"title":"apple-app-site-association 格式","slug":"apple-app-site-association-格式","link":"#apple-app-site-association-格式","children":[]}]},{"level":2,"title":"Universal Links 配置中的坑","slug":"universal-links-配置中的坑","link":"#universal-links-配置中的坑","children":[]}],"git":{"createdTime":1566356690000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":3.64,"words":1093},"filePathRelative":"browser-env/hybrid/universal-links.md","localizedDate":"August 21, 2019","autoDesc":true}');
export {
  universalLinks_html as comp,
  data
};
