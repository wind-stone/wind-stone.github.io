import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-BMhVoaeF.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[18] || (_cache[18] = createBaseVNode("h1", {
      id: "安全",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#安全"
      }, [
        createBaseVNode("span", null, "安全")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#cookie-安全" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("Cookie 安全")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#xss" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("XSS")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#xss-分类" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("XSS 分类")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#反射型-xss" }, {
                    default: withCtx(() => _cache[3] || (_cache[3] = [
                      createTextVNode("反射型 XSS")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#存储型-xss" }, {
                    default: withCtx(() => _cache[4] || (_cache[4] = [
                      createTextVNode("存储型 XSS")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#dom-xss" }, {
                    default: withCtx(() => _cache[5] || (_cache[5] = [
                      createTextVNode("DOM XSS")
                    ])),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#防范措施" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("防范措施")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#csrf" }, {
            default: withCtx(() => _cache[7] || (_cache[7] = [
              createTextVNode("CSRF")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#示例" }, {
                default: withCtx(() => _cache[8] || (_cache[8] = [
                  createTextVNode("示例")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#跨域发出了一个-get-请求" }, {
                    default: withCtx(() => _cache[9] || (_cache[9] = [
                      createTextVNode("跨域发出了一个 GET 请求")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#可以无-javascript-参与" }, {
                    default: withCtx(() => _cache[10] || (_cache[10] = [
                      createTextVNode("可以无 JavaScript 参与")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#请求是身份认证后的" }, {
                    default: withCtx(() => _cache[11] || (_cache[11] = [
                      createTextVNode("请求是身份认证后的")
                    ])),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#csrf-攻击类型" }, {
                default: withCtx(() => _cache[12] || (_cache[12] = [
                  createTextVNode("CSRF 攻击类型")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#html-csrf-攻击" }, {
                    default: withCtx(() => _cache[13] || (_cache[13] = [
                      createTextVNode("HTML CSRF 攻击")
                    ])),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#json-hijacking-攻击" }, {
                default: withCtx(() => _cache[14] || (_cache[14] = [
                  createTextVNode("JSON HiJacking 攻击")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#flash-csrf-攻击" }, {
                default: withCtx(() => _cache[15] || (_cache[15] = [
                  createTextVNode("Flash CSRF 攻击")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#危害" }, {
                default: withCtx(() => _cache[16] || (_cache[16] = [
                  createTextVNode("危害")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#界面操作劫持" }, {
            default: withCtx(() => _cache[17] || (_cache[17] = [
              createTextVNode("界面操作劫持")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[19] || (_cache[19] = createStaticVNode('<h2 id="cookie-安全" tabindex="-1"><a class="header-anchor" href="#cookie-安全"><span>Cookie 安全</span></a></h2><p>Cookie 是一个神奇的机制，同域内浏览器中发出的任何一个请求都会带上 Cookie，无论请求什么资源，请求时，Cookie 出现在请求头的 Cookie 字段中。（这一点可以造成 CSRF）</p><p>Ajax 跨域请求，默认情况下无法带上目标域的会话（Cookie 等），这是需要设置 xhr 实例的<code>withCredentials</code>属性为 <code>true</code>。</p><h2 id="xss" tabindex="-1"><a class="header-anchor" href="#xss"><span>XSS</span></a></h2><p>跨站脚本（Cross Site Scripting），为不和层叠样式表（Cascading Style Sheets, CSS）的缩写混淆，故将跨站脚本缩写为 XSS。</p><p>XSS，发生在目标网站中目标用户的浏览器层面上，当用户浏览器渲染整个 HTML 文档的过程中出现了不被预期的脚本指令并执行时，XSS 攻击就会发生。而这段不被预期的脚本，一般是恶意攻击者往 WEB 页面里插入的恶意 Script 代码。</p><p>通俗地可以将 XSS 总结为：想尽一切方法将恶意的基本内容在目标网站中目标用户的浏览器上解析执行。</p><h3 id="xss-分类" tabindex="-1"><a class="header-anchor" href="#xss-分类"><span>XSS 分类</span></a></h3><p>XSS 有三类：</p><ul><li>反射型 XSS（非持久型 XSS）</li><li>存储型 XSS（持久型 XSS）</li><li>DOM XSS</li></ul><h4 id="反射型-xss" tabindex="-1"><a class="header-anchor" href="#反射型-xss"><span>反射型 XSS</span></a></h4><p>发出请求时，XSS 代码出现在 URL 中，作为输入提交到服务端，服务端解析后响应，在响应内容中出现这段 XSS 代码，最后浏览器解析执行。这个过程就像是一次反射，故称为反射型 XSS。</p><p>示例一，<code>http://www.foo.com/xss/reflect1.php</code>的代码如下：</p><div class="language-php line-numbers-mode" data-highlighter="shiki" data-ext="php" data-title="php" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">php</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  echo</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $_GET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;x&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入<code>x</code>的值未经任何过滤就直接输出，我们可以提交：<code>http://www.foo.com/xss/reflect1.php?x=&lt;script&gt;alert(1)&lt;/script&gt;</code>，服务端解析时，<code>echo</code>就会完整地输出<code>&lt;script&gt;alert(1)&lt;/script&gt;</code>到响应体中，然后浏览器解析执行触发。</p><p>示例二，<code>http://www.foo.com/xss/reflect2.php</code>的代码如下：</p><div class="language-php line-numbers-mode" data-highlighter="shiki" data-ext="php" data-title="php" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">php</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  header</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Location: &#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$_GET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;x&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入<code>x</code>的值作为响应头部的 Location 字段值输出，意味着会发生跳转，触发 XSS 的其中一种方式如下：<br><code>http://www.foo.com/xss/reflect2.php?x=data:text/html;base64,PHNjcmlwdD5hbGVydChkb2N1bWVudC5kb21haW4pPC9zY3JpcHQ%2b</code>，跳转到<code>data:</code>协议上，<code>text/html</code>是 MIME 或<code>Content-Type</code>，表明文档类型，<code>base64</code>是指后面字符串的编码方式，后面这段<code>base64</code>解码后的值为：<br><code>&lt;script&gt;alert(document.domain)&lt;/script&gt;</code>，于是，当发生跳转时，就会执行这段 JS。</p><h4 id="存储型-xss" tabindex="-1"><a class="header-anchor" href="#存储型-xss"><span>存储型 XSS</span></a></h4><p>存储型 XSS 和 反射型 XSS 的区别仅在于：提交的 XSS 代码会存储在服务端（不管是数据库、内存还是文件系统等），下次请求目标页面时不用再提交 XSS 代码。</p><p>最典型的例子是留言板 XSS，用户提交一条包含 XSS 代码的留言存储到数据库，目标用户查看留言板时，那些留言的内容会从数据库查询出来并显示，浏览器发现有 XSS 代码，就当做正常的 HTML 与 JS 解析执行，于是就触发了 XSS 攻击。</p><p>存储型 XSS 的攻击是最隐蔽的。</p><h4 id="dom-xss" tabindex="-1"><a class="header-anchor" href="#dom-xss"><span>DOM XSS</span></a></h4><p>与反射型 XSS、存储型 XSS 的差别在于，DOM XSS 的 XSS 代码并不需要服务器解析响应的直接参与，触发 XSS 靠的就是浏览器端的 DOM 解析，可以认为完全是客户端的事情。</p><p>如<code>http://www.foo.com/xssme.html</code>页面里有如下代码：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  eval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">hash</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">substr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>触发 XSS 方式为：<code>http://www.foo.com/xssme.html#alert(1)</code></p><p>这个 URL#后的内容是不会发送到服务端的，仅仅是在客户端被接收并解析执行。</p><p>针对于 DOM XSS，常见的输入点有：</p><ul><li>document.URL</li><li>document.URLUnencoded</li><li>document.location（以及 location 的多个属性）</li><li>document.referrer</li><li>window.location（以及 location 的多个属性）</li><li><a href="http://window.name" target="_blank" rel="noopener noreferrer">window.name</a></li><li>xhr 请求回来的数据</li><li>document.cookie</li><li>表单项的值</li></ul><p>除了这些输入点，还有可能是用户请求的 HTML 在传输回来时被路由器或者运营商劫持并插入了一段脚本。</p><p>常见的输出点有：</p><ul><li>直接输出 HTML 内容，如 <ul><li>document.write(...)</li><li>document.writeln(...)</li><li>document.body.innerHTML = ...</li></ul></li><li>直接修改 DOM 树（包括 DHTML 事件），如 <ul><li>document.form[0].action = ...（以及其他集合，如：一些对象的 src/href 属性等）</li><li>document.attachEvent(...)</li><li>document.create(...)</li><li>document.execCommand(...)</li><li><a href="http://document.body.xxx" target="_blank" rel="noopener noreferrer">document.body.xxx</a> （直接通过 body 对象访问 DOM）</li><li>window.attachEvent(...)</li></ul></li><li>替换 document URL，如 <ul><li>document.location = ...（以及直接赋值给 location 的 href、host、hostname 属性）</li><li>document.location.hostname = ...</li><li>document.location.replace(...)</li><li>document.location.assign(...)</li><li>document.URL = ...</li><li>window.navigate(...)</li></ul></li><li>打开或修改新窗口，如 <ul><li>document.open(...)</li><li>window.open(...)</li><li>window.location.href = ...（以及直接赋值给 location 的 href、host、hostname 属性）</li></ul></li><li>直接执行脚本，如 <ul><li>eval(...)</li><li>window.execScript(...)</li><li>window.setInterval(...)</li><li>window.setTimeout(...)</li></ul></li></ul><p>这些都是 JavaScript 的基本点，从这些输入/输出点我们可以看到，DOM XSS 的处理逻辑就在客户端。</p><h3 id="防范措施" tabindex="-1"><a class="header-anchor" href="#防范措施"><span>防范措施</span></a></h3><ul><li>不要引入任何不可信的第三方 JavaScript 到页面里</li><li>不要往 HTML 页面里插入任何不可信数据，如果一定要往 HTML 页面插入数据，一定要： <ul><li>插入到 HTML 标签之间的数据，要进行 HTML Entity 编码</li><li>插入到 HTML 属性里的数据，要进行 HTML 属性编码</li><li>插入到 SCRIPT 里的数据，要进行 SCRIPT 编码</li><li>插入到 STYLE 属性里的数据，要进行 CSS 编码</li><li>插入到 HTML URL 里的数据，要进行 URL 编码</li></ul></li><li>使用富文本时，使用 XSS 规则引擎进行编码过滤</li></ul><p>Reference: <a href="http://blog.jobbole.com/47372/" target="_blank" rel="noopener noreferrer">防御 XSS 攻击的七条原则</a></p><h2 id="csrf" tabindex="-1"><a class="header-anchor" href="#csrf"><span>CSRF</span></a></h2><p>CSRF（Cross-site request forgery）跨站请求伪造，也被称为“One Click Attack”或者“Session Riding”，通常缩写为 CSRF 或者 XSRF，是一种对网站的恶意利用。尽管听起来像跨站脚本（XSS），但它与XSS非常不同，XSS 利用站点内的信任用户，而 CSRF 则通过伪装来自受信任用户的请求来利用受信任的网站。与 XSS 攻击相比，CSRF 攻击往往不大流行（因此对其进行防范的资源也相当稀少）和难以防范，所以被认为比 XSS 更具危险性。</p><p>CSRF 有两个关键点：</p><ul><li>跨站点的请求：从字面上看，跨站点请求的来源是其他站点，比如，目标网站的删除文章功能接收到来自恶意网站客户端（JavaScript、Flash、HTML等）发出的删除文章请求，这个请求就是跨站点的请求，目标网站应该区分请求来源。字面上的定义总是狭义的，这样恶意的请求也有可能来自本站。</li><li>请求是伪造的：伪造的定义很模糊，一般情况下，我们可以认为：如果请求的发出不是用户的意愿，那么这个请求就是伪造的。而对于 XSS 来说，发起的任何请求实际上都是目标网站同域内发出的，此时已经没有同源策略的限制，虽然这样，我们同样认为这些请求也是伪造的，因为它们不是用户的意愿。</li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><p>目标网站 A：<code>www.a.com</code><br> 恶意网站 B：<code>www.b.com</code></p><p>两个域不一样，目标网站 A 上有一个删除文章的功能，通常是用户单击“删除链接”时才会删除指定的文章，这个链接是<code>www.a.com/blog/del?id=1</code>，id 号代表不同的文章。</p><p>我们知道，这样删除文章实际上就是发出一个 GET 请求，那么如果目标网站 A 上存在一个 XSS 漏洞，执行的 JS 脚本无同源策略限制，就可以按下面的方式来删除文章。</p><ul><li>使用 AJAX 发出 GET 请求，请求值是 id = 1，请求目标地址是<code>www.a.com/blog/del</code></li><li>或者动态创建一个标签对象（如 img、iframe、script）等，将它们的 src 指向这个链接<code>www.a.com/blog/del?id=1</code>，发出的也是 GET 请求</li><li>然后欺骗用户访问存在 XSS 脚本的漏洞页面（在目标网站 A 上），则攻击发生</li></ul><p>上述是通过 XSS 漏洞使得 JS 脚本在没有同源策略限制的情况下执行的，即请求时会自动带上会话（Cookie等）。</p><p>如果不用这种方式，或者目标网站 A 根本不存在 XSS 漏洞，还可以如何删除文章？看看 CSRF 的思路，步骤如下：</p><ul><li>在恶意网站 B 上编写一个 CSRF 页面（<code>www.b.com.csrf.html</code>），想想有什么办法可以发出一个 GET 请求到目标网站 A 上？ <ul><li>利用 AJAX 跨域时带上目标域的会话</li><li>更简单的：用代码<code>&lt;img src=&quot;http://www.a.com/blog/del?id=1&quot;&gt;</code></li></ul></li><li>然后欺骗已经登录目标网站 A 的用户访问<code>www.b.com/csrf.html</code>页面，则攻击发生</li></ul><p>这个攻击过程有三个关键点：</p><ul><li>跨域发出了一个 GET 请求</li><li>可以无 JavaScript 参与</li><li>请求是身份认证后的</li></ul><h4 id="跨域发出了一个-get-请求" tabindex="-1"><a class="header-anchor" href="#跨域发出了一个-get-请求"><span>跨域发出了一个 GET 请求</span></a></h4><p>同源策略是用来限制客户端脚本的跨域请求行为，但实际上由客户端 HTML 标签等发出的跨域 GET 请求被认为是合法的，不在同源策略的限制中，但是这个请求发出后并没有能力得到目标页面响应的数据内容。</p><p>很多网站其实都需要这样的功能，比如，嵌入第三方资源：图片、JS 脚本，CSS 样式、框架内容，尤其是很多开放的 Web 2.0 网站有个 mashup 应用聚合概念，如 Google 的 Gadgets 或者 SNS 社区中的第三方 Web 应用于 Web 游戏，通过 iframe 嵌入第三方扩展应用，如果将这样的 GET 请求限制住，那么 Web 世界就过于封闭了。</p><p>安全风险总是出现在正常的流程中，现在我们发出的是一个删除文章的 GET 请求，对于合法的跨域请求，浏览器会放行。</p><h4 id="可以无-javascript-参与" tabindex="-1"><a class="header-anchor" href="#可以无-javascript-参与"><span>可以无 JavaScript 参与</span></a></h4><p>CSRF 这个过程与 XSS 不一样，可以不需要 JavaScript 参与，当然也可以有 JavaScript 参与，比如在<code>www.b.com/csrf.html</code>中使用 JavaScript 动态生成一个 img 对象：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">src</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;http://www.a.com/blog/del?id=1&#39;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样可以达到攻击效果。需要特别注意的是：这里并不是 JavaScript 跨域操作目标网站 A 的数据，而是间接生成了 img 对象，由 img 对象发起一个合法的跨域 GET 请求而已，这个过程和上面直接用一个 img 标签一样。</p><h4 id="请求是身份认证后的" tabindex="-1"><a class="header-anchor" href="#请求是身份认证后的"><span>请求是身份认证后的</span></a></h4><p>这一点非常关键，跨域发出的请求类似这样：</p><div class="language-request line-numbers-mode" data-highlighter="shiki" data-ext="request" data-title="request" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GET /blog/del?id=1 HTTP/1.1</span></span>\n<span class="line"><span>Host: www.a.com</span></span>\n<span class="line"><span>User-Agent: Mozilla/5.0 (Windows NT 6.1; rv:5.0) Gecko/20100101 Firefox/5.0</span></span>\n<span class="line"><span>Connection: keep-alive</span></span>\n<span class="line"><span>Referer: http://www.b.com/csrf.html</span></span>\n<span class="line"><span>Cookie:sid=0951abe6d508dab60357804519a61b999;JSESSIONID=abcTePo2Ori_k-pWt5net;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而如果是目标网站 A，用户自己单击删除链接时发出的请求类似这样：</p><div class="language-request line-numbers-mode" data-highlighter="shiki" data-ext="request" data-title="request" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GET /blog/del?id=1 HTTP/1.1</span></span>\n<span class="line"><span>Host: www.a.com</span></span>\n<span class="line"><span>User-Agent: Mozilla/5.0 (Windows NT 6.1; rv:5.0) Gecko/20100101 Firefox/5.0</span></span>\n<span class="line"><span>Connection: keep-alive</span></span>\n<span class="line"><span>Referer: http://www.a.com/blog/</span></span>\n<span class="line"><span>Cookie:sid=0951abe6d508dab60357804519a61b999;JSESSIONID=abcTePo2Ori_k-pWt5net;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到这两个请求中，除了请求来源 Referer 值不一样外，其他都一样，尤其是这里的 Cookie 值，该 Cookie 是用户登录目标网站 A 后的身份认证标志。跨域发出的请求同样会带上目标网站 A 的用户 Cookie，这样的请求就是身份认证后的，攻击才会成功。</p><p>通过这个场景，我们知道了 CSRF 的过程，不过这个过程只介绍了 GET 请求的情况，那么 POST 请求呢？比如，目标网站 A 的“写文章”功能，这是一个表单提交的操作，会发起 POST 请求。同样，这个 POST 请求可以从恶意网站 B 中发出，通过 JavaScript 自动生成一份表单，表单的 action 地址指向目标网站 A 的“写文章”表单提交地址，表单的相关字段都准备好后，即可发出请求。下面看一段代码：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> new_form</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> f</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">createElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;iframe&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">appendChild</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">method</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;post&#39;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> f</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> create_elements</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">eForm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">eName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">eValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> e</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">createElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;input&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  eForm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">appendChild</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">type</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;text&#39;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> eName</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 兼容浏览器的兼容设置，目的是让表单不可见</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">all</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">display</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;none&#39;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">display</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;block&#39;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">width</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;0px&#39;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">height</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;0px&#39;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> eValue</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> e</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> _f</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> new_form</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">create_elements</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">_f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;title&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;hi&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">create_elements</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">_f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;content&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;csrf_here&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">_f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">action</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;http://www.a.com/blog/add&#39;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">_f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">submit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造完成，当目标网站 A 的用户被欺骗访问了恶意网站 B 的该页面时，一个跨域的伪造的 POST 表单请求就发出了。同样，这个请求带上了目标网站 A 的用户 Cookie</p><h3 id="csrf-攻击类型" tabindex="-1"><a class="header-anchor" href="#csrf-攻击类型"><span>CSRF 攻击类型</span></a></h3><p>按照请求类型区分，上面介绍的这个场景中其实已经提到，GET 型与 POST 型的 CSRF 攻击。</p><p>若按照攻击方式分类，CSRF 可分为：</p><ul><li>HTML CSRF 攻击</li><li>JSON HiJacking 攻击</li><li>Flash CSRF 攻击<br> 等等</li></ul><h4 id="html-csrf-攻击" tabindex="-1"><a class="header-anchor" href="#html-csrf-攻击"><span>HTML CSRF 攻击</span></a></h4><p>发起的 CSRF 请求都属于 HTML 元素发出的，这一类是最普遍的 CSRF 攻击。如下这些 HTML 元素都可以发出 CSRF 请求。</p><p>HTML 中能够设置 src/href 等链接地址的标签都可以发起 GET 请求，如：</p><ul><li><code>&lt;link href=&quot;&quot;&gt;</code></li><li><code>&lt;img src=&quot;&quot;&gt;</code></li><li><code>&lt;img lowsrc=&quot;&quot;&gt;</code></li><li><code>&lt;img dynsrc=&quot;&quot;&gt;</code></li><li><code>&lt;meta http-equiv=&quot;refresh&quot; content=&quot;0; url=&quot;&gt;</code></li><li><code>&lt;iframe src=&quot;&quot;&gt;</code></li><li><code>&lt;frame src=&quot;&quot;&gt;</code></li><li><code>&lt;script src=&quot;&quot;&gt;</code></li><li><code>&lt;bgsound src=&quot;&quot;&gt;</code></li><li><code>&lt;embed src=&quot;&quot;&gt;</code></li><li><code>&lt;video src=&quot;&quot;&gt;</code></li><li><code>&lt;audio src=&quot;&quot;&gt;</code></li><li><code>&lt;a href=&quot;&quot;&gt;</code></li><li><code>&lt;table background=&quot;&quot;&gt;</code></li><li>...</li></ul><p>CSS 样式中的：</p><ul><li><code>@import &quot;&quot;</code></li><li><code>background: url(&quot;&quot;)</code></li><li>...</li></ul><p>还有通过 JavaScript 动态生成的标签对象或 CSS 对象发起的 GET 请求，而发出 POST 请求只能通过 form 提交方式。</p><h3 id="json-hijacking-攻击" tabindex="-1"><a class="header-anchor" href="#json-hijacking-攻击"><span>JSON HiJacking 攻击</span></a></h3><h3 id="flash-csrf-攻击" tabindex="-1"><a class="header-anchor" href="#flash-csrf-攻击"><span>Flash CSRF 攻击</span></a></h3><p>请查看《Web前端黑客技术揭秘》相关章节</p><h3 id="危害" tabindex="-1"><a class="header-anchor" href="#危害"><span>危害</span></a></h3><ul><li>篡改目标网站上的用户数据</li><li>盗取用户隐私数据</li><li>作为其他攻击向量的辅助攻击手段</li><li>传播 CSRF 蠕虫</li></ul><h2 id="界面操作劫持" tabindex="-1"><a class="header-anchor" href="#界面操作劫持"><span>界面操作劫持</span></a></h2><p>界面操作劫持攻击是一种基于视觉欺骗的 Web 会话劫持攻击，它通过在网页的可见输入控件上覆盖一个不可见的框（iframe），使得用户误以为在操作可见控件，而实际上用户的操作行为被其不可见的框所劫持，执行不可见框中的恶意劫持代码，从而完成在用户不知情的情况下窃取敏感信息、篡改数据等攻击。</p><p>具体详情，请查看《Web前端黑客技术揭秘》第 5 章。</p>', 87)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/security/","title":"安全","lang":"en-US","frontmatter":{"description":"安全 Cookie 安全 Cookie 是一个神奇的机制，同域内浏览器中发出的任何一个请求都会带上 Cookie，无论请求什么资源，请求时，Cookie 出现在请求头的 Cookie 字段中。（这一点可以造成 CSRF） Ajax 跨域请求，默认情况下无法带上目标域的会话（Cookie 等），这是需要设置 xhr 实例的withCredentials属...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/security/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"安全"}],["meta",{"property":"og:description","content":"安全 Cookie 安全 Cookie 是一个神奇的机制，同域内浏览器中发出的任何一个请求都会带上 Cookie，无论请求什么资源，请求时，Cookie 出现在请求头的 Cookie 字段中。（这一点可以造成 CSRF） Ajax 跨域请求，默认情况下无法带上目标域的会话（Cookie 等），这是需要设置 xhr 实例的withCredentials属..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安全\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Cookie 安全","slug":"cookie-安全","link":"#cookie-安全","children":[]},{"level":2,"title":"XSS","slug":"xss","link":"#xss","children":[{"level":3,"title":"XSS 分类","slug":"xss-分类","link":"#xss-分类","children":[]},{"level":3,"title":"防范措施","slug":"防范措施","link":"#防范措施","children":[]}]},{"level":2,"title":"CSRF","slug":"csrf","link":"#csrf","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"CSRF 攻击类型","slug":"csrf-攻击类型","link":"#csrf-攻击类型","children":[]},{"level":3,"title":"JSON HiJacking 攻击","slug":"json-hijacking-攻击","link":"#json-hijacking-攻击","children":[]},{"level":3,"title":"Flash CSRF 攻击","slug":"flash-csrf-攻击","link":"#flash-csrf-攻击","children":[]},{"level":3,"title":"危害","slug":"危害","link":"#危害","children":[]}]},{"level":2,"title":"界面操作劫持","slug":"界面操作劫持","link":"#界面操作劫持","children":[]}],"git":{"createdTime":1517484339000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":11.56,"words":3468},"filePathRelative":"browser-env/security/README.md","localizedDate":"February 1, 2018","autoDesc":true}');
export {
  index_html as comp,
  data
};