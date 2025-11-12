import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/assets/ShadowsocksX-NG-1-Bh3Y4M0D.jpeg";
const _imports_1 = "/assets/ShadowsocksX-NG-2-DJnWbXML.png";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[7] || (_cache[7] = createBaseVNode("h1", {
      id: "科学上网",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#科学上网"
      }, [
        createBaseVNode("span", null, "科学上网")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#谷歌云-ssr" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("谷歌云 SSR")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#第一步-注册谷歌云账号" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("第一步，注册谷歌云账号")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#第二步-配置谷歌云代理服务器" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("第二步，配置谷歌云代理服务器")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#第三步-配置电脑-手机" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("第三步，配置电脑/手机")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#电脑" }, {
                    default: withCtx(() => _cache[4] || (_cache[4] = [
                      createTextVNode("电脑")
                    ])),
                    _: 1
                  }),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createVNode(_component_router_link, { to: "#iphone" }, {
                        default: withCtx(() => _cache[5] || (_cache[5] = [
                          createTextVNode("iPhone")
                        ])),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#美国区域的-apple-id" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("美国区域的 Apple ID")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[8] || (_cache[8] = createStaticVNode('<h2 id="谷歌云-ssr" tabindex="-1"><a class="header-anchor" href="#谷歌云-ssr"><span>谷歌云 SSR</span></a></h2><p>前提：</p><ul><li>需要有短暂翻墙的网络环境，观看 Youtube 视频</li><li>需要有一张 VISA 或 万事达的信用卡</li></ul><h3 id="第一步-注册谷歌云账号" tabindex="-1"><a class="header-anchor" href="#第一步-注册谷歌云账号"><span>第一步，注册谷歌云账号</span></a></h3><p><a href="https://www.youtube.com/watch?v=xrbviAfagrU" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=xrbviAfagrU</a></p><p>从头开始观看该视频，大概看到 5&#39;33’‘就可以结束了，需要并跟着后面操作，注册谷歌云账号。</p><p>注意点：</p><ul><li>关于“选择地区” <ul><li>可以选择美国，此时对信用卡的预付款会用美元结算，信用卡要支持美元付款</li><li>也可以选择香港，但是信用卡要支持港币付款</li><li>大概会对信用卡进行 1 美元左右的预付款，之后交易会撤销，实际上不会花一分钱</li></ul></li><li>关于“选择操作系统” <ul><li>在选择操作系统磁盘时，选择“Debian GNU/Linux 9 (stretch)”</li></ul></li></ul><p>谷歌云仅在首年赠送 300 美元，以后的每年想要再次赠送，可以参考：<a href="https://www.youtube.com/watch?v=7zz1tuohVtI" target="_blank" rel="noopener noreferrer">重置300美金教程</a></p><h3 id="第二步-配置谷歌云代理服务器" tabindex="-1"><a class="header-anchor" href="#第二步-配置谷歌云代理服务器"><span>第二步，配置谷歌云代理服务器</span></a></h3><p><a href="https://www.youtube.com/watch?v=_cO9USrLFY0" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=_cO9USrLFY0</a></p><p>跟随着视频里面一步一步做：</p><ol><li>配置好谷歌云上虚拟机实例</li><li>在虚拟机上安装 shadowsocksR</li><li>记录下 shadowsocksR 的相关结果（视频 6’50‘’ 显示的红色部分），这些信息在电脑上或手机上配置时需要使用到。</li><li>配置端口号的防火墙规则</li></ol><p>谷歌云搭建 SSR 命令：</p><ol><li>取得root权限，输入：sudo -i</li><li>下载和设置SSR服务器端，输入：wget --no-check-certificate <a href="https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocksR.sh" target="_blank" rel="noopener noreferrer">https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocksR.sh</a> &amp;&amp; chmod +x <a href="http://shadowsocksR.sh" target="_blank" rel="noopener noreferrer">shadowsocksR.sh</a> &amp;&amp; ./shadowsocksR.sh</li></ol><h3 id="第三步-配置电脑-手机" tabindex="-1"><a class="header-anchor" href="#第三步-配置电脑-手机"><span>第三步，配置电脑/手机</span></a></h3><h4 id="电脑" tabindex="-1"><a class="header-anchor" href="#电脑"><span>电脑</span></a></h4><p>mac 上下载 ShadowsocksX-NG 软件，配置服务器信息</p><figure><img src="' + _imports_0 + '" alt="ShadowsocksX-NG 配置 - 1" tabindex="0" loading="lazy"><figcaption>ShadowsocksX-NG 配置 - 1</figcaption></figure><figure><img src="' + _imports_1 + '" alt="ShadowsocksX-NG 配置 - 2" tabindex="0" loading="lazy"><figcaption>ShadowsocksX-NG 配置 - 2</figcaption></figure><p>配置好在第二步的第 3 点保存的服务器信息，就可以科学上网啦！</p><h5 id="iphone" tabindex="-1"><a class="header-anchor" href="#iphone"><span>iPhone</span></a></h5><p>iPhone 上也要下载相关的 SSR 客户端，配置服务器信息。</p><p>但是，APP store 上的 SSR 客户端，能下载的需要收费；免费的客户端，大陆区域都被下架了，但是大陆之外的区域，可以下载。</p><p>可申请一个美国区域的 Apple ID，下载 FastSocks，再配置服务器信息，就可以科学上网啦~</p><h2 id="美国区域的-apple-id" tabindex="-1"><a class="header-anchor" href="#美国区域的-apple-id"><span>美国区域的 Apple ID</span></a></h2><p>大陆区域的 Apple ID，只能下载大陆区域的 APP，有时候想要下载一些美国区域的 APP，就没办法了。因此，我特地按教程<a href="https://zhuanlan.zhihu.com/p/36574047" target="_blank" rel="noopener noreferrer">5分钟注册美国区Apple ID（18年亲测有效）</a>，申请了一个美国区域的 Apple ID。</p>', 27)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse(`{"path":"/wander/others/ssr/","title":"科学上网","lang":"en-US","frontmatter":{"description":"科学上网 谷歌云 SSR 前提： 需要有短暂翻墙的网络环境，观看 Youtube 视频 需要有一张 VISA 或 万事达的信用卡 第一步，注册谷歌云账号 https://www.youtube.com/watch?v=xrbviAfagrU 从头开始观看该视频，大概看到 5'33’‘就可以结束了，需要并跟着后面操作，注册谷歌云账号。 注意点： 关于“选...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/wander/others/ssr/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"科学上网"}],["meta",{"property":"og:description","content":"科学上网 谷歌云 SSR 前提： 需要有短暂翻墙的网络环境，观看 Youtube 视频 需要有一张 VISA 或 万事达的信用卡 第一步，注册谷歌云账号 https://www.youtube.com/watch?v=xrbviAfagrU 从头开始观看该视频，大概看到 5'33’‘就可以结束了，需要并跟着后面操作，注册谷歌云账号。 注意点： 关于“选..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T18:08:13.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T18:08:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"科学上网\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T18:08:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"谷歌云 SSR","slug":"谷歌云-ssr","link":"#谷歌云-ssr","children":[{"level":3,"title":"第一步，注册谷歌云账号","slug":"第一步-注册谷歌云账号","link":"#第一步-注册谷歌云账号","children":[]},{"level":3,"title":"第二步，配置谷歌云代理服务器","slug":"第二步-配置谷歌云代理服务器","link":"#第二步-配置谷歌云代理服务器","children":[]},{"level":3,"title":"第三步，配置电脑/手机","slug":"第三步-配置电脑-手机","link":"#第三步-配置电脑-手机","children":[]}]},{"level":2,"title":"美国区域的 Apple ID","slug":"美国区域的-apple-id","link":"#美国区域的-apple-id","children":[]}],"git":{"createdTime":1546775463000,"updatedTime":1623694093000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":2}]},"readingTime":{"minutes":2.16,"words":647},"filePathRelative":"wander/others/ssr/README.md","localizedDate":"January 6, 2019","autoDesc":true}`);
export {
  index_html as comp,
  data
};
