import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, f as createTextVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[11] || (_cache[11] = createBaseVNode("h1", {
      id: "npm-config",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#npm-config"
      }, [
        createBaseVNode("span", null, "npm-config")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#描述" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("描述")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#命令行标记" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("命令行标记")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#环境变量" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("环境变量")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#npmrc-文件" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("npmrc 文件")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#默认配置" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("默认配置")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#简写以及一些其他的-cli-细节" }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("简写以及一些其他的 CLI 细节")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#每个包的配置设置" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("每个包的配置设置")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#各项配置" }, {
            default: withCtx(() => _cache[7] || (_cache[7] = [
              createTextVNode("各项配置")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[12] || (_cache[12] = createStaticVNode('<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p><code>npm</code>会从以下来源获取配置值，按优先级排序为：</p><h2 id="命令行标记" tabindex="-1"><a class="header-anchor" href="#命令行标记"><span>命令行标记</span></a></h2><p>命令行里的<code>--foo bar</code>会将<code>foo</code>配置参数的值设置为<code>bar</code>。<code>--</code>告诉<code>cli</code>解析器停止读取标记。使用<code>--flag</code>且不带任何指定的值将设置<code>flag</code>配置参数的值为<code>true</code>。</p><p>比如，<code>--flag1 --flag2</code>会将<code>flag1</code>和<code>flag2</code>配置参数的值都设置为<code>true</code>，而<code>--flag1 --flag2 bar</code>会将<code>flag1</code>设置为<code>true</code>，<code>flag2</code>设置为<code>bar</code>。最后，<code>--flag1 --flag2 -- bar</code>将设置<code>flag1</code>和<code>flag2</code>为<code>true</code>，且<code>bar</code>将作为命令参数。</p><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h2><p>任何以<code>npm_config_</code>开始的环境变量都将被理解为配置参数。比如，将<code>npm_config_foo=bar</code>放入你的环境里，这将设置<code>foo</code>配置参数的值为<code>bar</code>。任何没有给定一个值的环境变量都将被设置为<code>true</code>。配置的值都是不区分大小写的，因此<code>NPM_CONFIG_FOO=bar</code>将起同样的作用。但是需要注意，在<code>npm-scripts</code>里，<code>npm</code>将设置它自己的环境变量，并且比起你设置的大写版本的，Node 更喜欢这些小写版本的，详情请见<a href="https://github.com/npm/npm/issues/14528" target="_blank" rel="noopener noreferrer">这个 issue</a>。</p><p>注意，你需要使用下划线<code>_</code>而不是横线<code>-</code>，因此<code>--allow-same-version</code>将变成<code>npm_config_allow_same_version=true</code>。</p><h2 id="npmrc-文件" tabindex="-1"><a class="header-anchor" href="#npmrc-文件"><span>npmrc 文件</span></a></h2><p>有四个相关的文件：</p><ul><li>每个项目的配置文件（<code>/path/to/my/project/.npmrc</code>）</li><li>每个用户的配置文件（默认是<code>$HOME/.npmrc</code>；可通过 CLI 选项<code>--userconfig</code>或环境变量<code>$NPM_CONFIG_USERCONFIG</code>配置）</li><li>全局的配置文件（默认是<code>$PREFIX/etc/npmrc</code>；可通过 CLI 选项<code>--globalconfig</code>或环境变量<code>$NPM_CONFIG_GLOBALCONFIG</code>配置）</li><li><code>npm</code>内置的配置文件（<code>/path/to/npm/npmrc</code>）</li></ul>', 11)),
    createBaseVNode("p", null, [
      _cache[9] || (_cache[9] = createTextVNode("更多详情可见")),
      createVNode(_component_RouteLink, { to: "/front-end-engineering/environment/package-manager/npm/npmrc.html" }, {
        default: withCtx(() => _cache[8] || (_cache[8] = [
          createTextVNode("npmrc")
        ])),
        _: 1
      }),
      _cache[10] || (_cache[10] = createTextVNode("。"))
    ]),
    _cache[13] || (_cache[13] = createStaticVNode('<h2 id="默认配置" tabindex="-1"><a class="header-anchor" href="#默认配置"><span>默认配置</span></a></h2><p>运行<code>npm config ls -l</code>可看到<code>npm</code>内部的配置参数集合，这些都是默认值如果没有特殊设置的话。</p><h2 id="简写以及一些其他的-cli-细节" tabindex="-1"><a class="header-anchor" href="#简写以及一些其他的-cli-细节"><span>简写以及一些其他的 CLI 细节</span></a></h2><p>以下这些简写会在命令行解析：</p><ul><li><code>-v</code>: <code>--version</code></li><li><code>-h</code>, <code>-?</code>, <code>--help</code>, <code>-H</code>: <code>--usage</code></li><li><code>-s</code>, <code>--silent</code>: <code>--loglevel silent</code></li><li><code>-q</code>, <code>--quiet</code>: <code>--loglevel warn</code></li><li><code>-d</code>: <code>--loglevel info</code></li><li><code>-dd</code>, --verbose: --loglevel verbose</li><li><code>-ddd</code>: <code>--loglevel silly</code></li><li><code>-g</code>: <code>--global</code></li><li><code>-C</code>: <code>--prefix</code></li><li><code>-l</code>: <code>--long</code></li><li><code>-m</code>: <code>--message</code></li><li><code>-p</code>, <code>--porcelain</code>: <code>--parseable</code></li><li><code>-reg</code>: <code>--registry</code></li><li><code>-f</code>: <code>--force</code></li><li><code>-desc</code>: <code>--description</code></li><li><code>-S</code>: <code>--save</code></li><li><code>-P</code>: <code>--save-prod</code></li><li><code>-D</code>: <code>--save-dev</code></li><li><code>-O</code>: <code>--save-optional</code></li><li><code>-B</code>: <code>--save-bundle</code></li><li><code>-E</code>: <code>--save-exact</code></li><li><code>-y</code>: <code>--yes</code></li><li><code>-n</code>: <code>--yes false</code></li><li><code>ll</code> and <code>la</code> commands: <code>ls --long</code></li></ul><p>若是指定的配置参数可以明确地解析到一个已知的配置参数，则它将扩展为那个配置参数。比如：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ls</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --par</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># same as:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ls</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --parseable</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若是多个单字符简写连在一起，且连起来的结果组合明确不是其他的配置参数，则它将扩展为它的各个组成片段。比如：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ls</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -gpld</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># same as:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ls</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --parseable</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --long</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --loglevel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> info</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="每个包的配置设置" tabindex="-1"><a class="header-anchor" href="#每个包的配置设置"><span>每个包的配置设置</span></a></h2><p>当运行脚本时（详见<a href="https://www.npmjs.cn/misc/scripts/" target="_blank" rel="noopener noreferrer">npm-scripts</a>），<code>package.json</code>文件里的<code>config</code>属性将被环境里的<code>&lt;name&gt;[@&lt;version&gt;]:&lt;key&gt;</code>形式的配置参数覆盖。比如，<code>package.json</code>是这样：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> : </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;foo&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;config&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;port&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> : </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;8080&quot;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;scripts&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;start&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> : </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;node server.js&quot;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>且<code>server.js</code>是这样：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">http</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">createServer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">listen</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">process</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">env</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">npm_package_config_port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>则用户可通过以下方式改变之前设置的行为：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> foo:port</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 80</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>更多信息可见<a href="https://www.npmjs.cn/files/package.json/" target="_blank" rel="noopener noreferrer">package.json</a>。</p><h2 id="各项配置" tabindex="-1"><a class="header-anchor" href="#各项配置"><span>各项配置</span></a></h2><p>各个配置项，详情<a href="https://www.npmjs.cn/misc/config/#config-settings" target="_blank" rel="noopener noreferrer">Config Settings</a></p>', 19)),
    createVNode(_component_global_config)
  ]);
}
const npmConfig_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "npm-config.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/environment/package-manager/npm/npm-config.html","title":"npm-config","lang":"en-US","frontmatter":{"description":"npm-config 描述 npm会从以下来源获取配置值，按优先级排序为： 命令行标记 命令行里的--foo bar会将foo配置参数的值设置为bar。--告诉cli解析器停止读取标记。使用--flag且不带任何指定的值将设置flag配置参数的值为true。 比如，--flag1 --flag2会将flag1和flag2配置参数的值都设置为true，而...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/environment/package-manager/npm/npm-config.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"npm-config"}],["meta",{"property":"og:description","content":"npm-config 描述 npm会从以下来源获取配置值，按优先级排序为： 命令行标记 命令行里的--foo bar会将foo配置参数的值设置为bar。--告诉cli解析器停止读取标记。使用--flag且不带任何指定的值将设置flag配置参数的值为true。 比如，--flag1 --flag2会将flag1和flag2配置参数的值都设置为true，而..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-31T12:47:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-31T12:47:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"npm-config\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-31T12:47:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"命令行标记","slug":"命令行标记","link":"#命令行标记","children":[]},{"level":2,"title":"环境变量","slug":"环境变量","link":"#环境变量","children":[]},{"level":2,"title":"npmrc 文件","slug":"npmrc-文件","link":"#npmrc-文件","children":[]},{"level":2,"title":"默认配置","slug":"默认配置","link":"#默认配置","children":[]},{"level":2,"title":"简写以及一些其他的 CLI 细节","slug":"简写以及一些其他的-cli-细节","link":"#简写以及一些其他的-cli-细节","children":[]},{"level":2,"title":"每个包的配置设置","slug":"每个包的配置设置","link":"#每个包的配置设置","children":[]},{"level":2,"title":"各项配置","slug":"各项配置","link":"#各项配置","children":[]}],"git":{"createdTime":1570275215000,"updatedTime":1730378820000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":2.61,"words":784},"filePathRelative":"front-end-engineering/environment/package-manager/npm/npm-config.md","localizedDate":"October 5, 2019","autoDesc":true}');
export {
  npmConfig_html as comp,
  data
};
