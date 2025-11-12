import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[6] || (_cache[6] = createBaseVNode("h1", {
      id: "node-api",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#node-api"
      }, [
        createBaseVNode("span", null, "Node API")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#http-createserver-和-http-server-的区别" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("http.createServer 和 http.Server 的区别")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#process-cwd-与-dirname-的区别" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("process.cwd 与 __dirname 的区别")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#在-test-project-目录下执行" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("在 test-project 目录下执行")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#在-src-目录下执行" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("在 src 目录下执行")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#结论" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("结论")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#path-resolve" }, {
                    default: withCtx(() => _cache[5] || (_cache[5] = [
                      createTextVNode("path.resolve")
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
    _cache[7] || (_cache[7] = createStaticVNode('<h2 id="http-createserver-和-http-server-的区别" tabindex="-1"><a class="header-anchor" href="#http-createserver-和-http-server-的区别"><span>http.createServer 和 http.Server 的区别</span></a></h2><p><code>http.createServer</code>是基于<code>http.Server</code>的封装，详见<a href="https://stackoverflow.com/questions/13857747/node-js-http-server-and-http-createserver-whats-the-difference" target="_blank" rel="noopener noreferrer">Stack Overflow - Node.js&#39; http.Server and http.createServer, what&#39;s the difference?</a></p><h2 id="process-cwd-与-dirname-的区别" tabindex="-1"><a class="header-anchor" href="#process-cwd-与-dirname-的区别"><span>process.cwd 与 __dirname 的区别</span></a></h2><p>假设项目目录如下所示：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">test</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">project</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> src</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    -</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">js</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-test-project-目录下执行" tabindex="-1"><a class="header-anchor" href="#在-test-project-目录下执行"><span>在 test-project 目录下执行</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">➜</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  test-project</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> src/path.js</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">__dirname:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  /Users/wind-stone/github/test-project/src</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">__filename:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  /Users/wind-stone/github/test-project/src/path.js</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">process.cwd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">():  /Users/wind-stone/github/test-project</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">path.resolve(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;./&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) /Users/wind-stone/github/test-project</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-src-目录下执行" tabindex="-1"><a class="header-anchor" href="#在-src-目录下执行"><span>在 src 目录下执行</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">➜</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  test-project</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> src</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">➜</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  src</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> path.js</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">__dirname:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  /Users/wind-stone/github/test-project/src</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">__filename:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  /Users/wind-stone/github/test-project/src/path.js</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">process.cwd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">():  /Users/wind-stone/github/test-project/src</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">path.resolve(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;./&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) /Users/wind-stone/github/test-project/src</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span>结论</span></a></h3><ul><li><code>__dirname</code>: 当前执行的 JS 文件所在的文件夹的绝对路径</li><li><code>__filename</code>: 当前执行的 JS 文件的绝对路径</li><li><code>process.cwd()</code>: 运行<code>node xxx.js</code>时所在的文件夹的绝对路径</li><li><code>path.resolve(&#39;./&#39;)</code>: 运行<code>node xxx.js</code>时所在的文件夹的绝对路径</li></ul><h4 id="path-resolve" tabindex="-1"><a class="header-anchor" href="#path-resolve"><span>path.resolve</span></a></h4><ul><li><code>path.resolve([...paths])</code><ul><li><code>...paths</code>: <code>&lt;string&gt;</code>，路径或路径片段的序列。</li><li>返回: <code>&lt;string&gt;</code></li></ul></li></ul><p><code>path.resolve()</code>方法将路径或路径片段的序列解析为绝对路径。</p><p>给定的路径序列从右到左进行处理，每个后续的<code>path</code>前置，直到构造出一个绝对路径。 例如，给定的路径片段序列：<code>/foo</code>、<code>/bar</code>、<code>baz</code>，调用 <code>path.resolve(&#39;/foo&#39;, &#39;/bar&#39;, &#39;baz&#39;)</code>将返回<code>/bar/baz</code>。</p><p>如果在处理完所有给定的<code>path</code>片段之后还未生成绝对路径，则再加上当前工作目录。</p><p>生成的路径已规范化，并且除非将路径解析为根目录，否则将删除尾部斜杠。</p><p>零长度的<code>path</code>片段会被忽略。</p><p>如果没有传入<code>path</code>片段，则<code>path.resolve()</code>将返回当前工作目录的绝对路径。</p>', 19)),
    createVNode(_component_global_config)
  ]);
}
const api_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "api.html.vue"]]);
const data = JSON.parse(`{"path":"/front-end-engineering/development-skills/nodejs/api.html","title":"Node API","lang":"en-US","frontmatter":{"description":"Node API http.createServer 和 http.Server 的区别 http.createServer是基于http.Server的封装，详见Stack Overflow - Node.js' http.Server and http.createServer, what's the difference? process.cwd...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/development-skills/nodejs/api.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Node API"}],["meta",{"property":"og:description","content":"Node API http.createServer 和 http.Server 的区别 http.createServer是基于http.Server的封装，详见Stack Overflow - Node.js' http.Server and http.createServer, what's the difference? process.cwd..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-31T12:47:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-31T12:47:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Node API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-31T12:47:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"http.createServer 和 http.Server 的区别","slug":"http-createserver-和-http-server-的区别","link":"#http-createserver-和-http-server-的区别","children":[]},{"level":2,"title":"process.cwd 与 __dirname 的区别","slug":"process-cwd-与-dirname-的区别","link":"#process-cwd-与-dirname-的区别","children":[{"level":3,"title":"在 test-project 目录下执行","slug":"在-test-project-目录下执行","link":"#在-test-project-目录下执行","children":[]},{"level":3,"title":"在 src 目录下执行","slug":"在-src-目录下执行","link":"#在-src-目录下执行","children":[]},{"level":3,"title":"结论","slug":"结论","link":"#结论","children":[]}]}],"git":{"createdTime":1640154210000,"updatedTime":1730378820000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":1.32,"words":395},"filePathRelative":"front-end-engineering/development-skills/nodejs/api.md","localizedDate":"December 22, 2021","autoDesc":true}`);
export {
  api_html as comp,
  data
};
