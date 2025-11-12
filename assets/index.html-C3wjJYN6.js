import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/assets/http-vs-https-CuXWnWpe.png";
const _imports_1 = "/assets/handshake-DxsAeRzs.png";
const _imports_2 = "/assets/zhihu-certificate-ZTJqwVs_.png";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[22] || (_cache[22] = createBaseVNode("h1", {
      id: "https",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#https"
      }, [
        createBaseVNode("span", null, "HTTPS")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#相关文章" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("相关文章")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#术语" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("术语")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#http-vs-https" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("http vs https")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#ssl-tls" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("SSL/TLS")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ssl-协议的组成" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("SSL 协议的组成")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ssl-协议的基本过程" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("SSL 协议的基本过程")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#握手阶段" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("握手阶段")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#第一次通信-客户端发出请求-clienthello" }, {
                    default: withCtx(() => _cache[7] || (_cache[7] = [
                      createTextVNode("第一次通信: 客户端发出请求（ClientHello）")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#第二次通信-服务器回应-serverhello" }, {
                    default: withCtx(() => _cache[8] || (_cache[8] = [
                      createTextVNode("第二次通信: 服务器回应（ServerHello）")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#第三次通信-客户端回应" }, {
                    default: withCtx(() => _cache[9] || (_cache[9] = [
                      createTextVNode("第三次通信: 客户端回应")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#第四次通信-服务器的最后回应" }, {
                    default: withCtx(() => _cache[10] || (_cache[10] = [
                      createTextVNode("第四次通信: 服务器的最后回应")
                    ])),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#加密通信过程中的算法" }, {
                default: withCtx(() => _cache[11] || (_cache[11] = [
                  createTextVNode("加密通信过程中的算法")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#非对称加密" }, {
                    default: withCtx(() => _cache[12] || (_cache[12] = [
                      createTextVNode("非对称加密")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#对称加密" }, {
                    default: withCtx(() => _cache[13] || (_cache[13] = [
                      createTextVNode("对称加密")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#消息摘要算法" }, {
                    default: withCtx(() => _cache[14] || (_cache[14] = [
                      createTextVNode("消息摘要算法")
                    ])),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#数字证书" }, {
                default: withCtx(() => _cache[15] || (_cache[15] = [
                  createTextVNode("数字证书")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#证书信任的方式" }, {
                    default: withCtx(() => _cache[16] || (_cache[16] = [
                      createTextVNode("证书信任的方式")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#公钥证书" }, {
                    default: withCtx(() => _cache[17] || (_cache[17] = [
                      createTextVNode("公钥证书")
                    ])),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#数据完整性" }, {
                default: withCtx(() => _cache[18] || (_cache[18] = [
                  createTextVNode("数据完整性")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#自我理解" }, {
                default: withCtx(() => _cache[19] || (_cache[19] = [
                  createTextVNode("自我理解")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#https-的实现" }, {
            default: withCtx(() => _cache[20] || (_cache[20] = [
              createTextVNode("https 的实现")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#混合内容" }, {
                default: withCtx(() => _cache[21] || (_cache[21] = [
                  createTextVNode("混合内容")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[23] || (_cache[23] = createStaticVNode('<p>Reference:</p><ul><li><a href="http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html" target="_blank" rel="noopener noreferrer">阮一峰 - SSL/TLS协议运行机制的概述</a></li></ul><h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span>相关文章</span></a></h2><ul><li><a href="https://github.com/youngwind/blog/issues/108" target="_blank" rel="noopener noreferrer">图解 HTTPS：Charles 捕获 HTTPS 的原理 #108</a></li></ul><h2 id="术语" tabindex="-1"><a class="header-anchor" href="#术语"><span>术语</span></a></h2><ul><li>CA 机构: 证书授权（Certificate Authority）中心</li><li>SSL: Secure Sockets Layer，安全套接层</li><li>TLS: Transport Layer Security，传输层安全协议</li></ul><p>TLS 1.0 通常被标示为 SSL 3.1，TLS 1.1 为 SSL 3.2，TLS 1.2 为 SSL 3.3。</p><p>SSL/TLS 是一种介于传输层和应用层的协议。</p><figure><img src="' + _imports_0 + '" alt="http vs https" tabindex="0" loading="lazy"><figcaption>http vs https</figcaption></figure><h2 id="http-vs-https" tabindex="-1"><a class="header-anchor" href="#http-vs-https"><span>http vs https</span></a></h2><p>不使用 SSL/TLS 的<code>http</code>，所有信息明文传播，存在的风险有：</p><ul><li>窃听风险（eavesdropping）：第三方可以获知通信内容。</li><li>篡改风险（tampering）：第三方可以修改通信内容。</li><li>冒充风险（pretending）：第三方可以冒充他人身份参与通信。</li></ul><p>SSL/TLS协议是为了解决这三大风险而设计的，希望达到：</p><ul><li>所有信息都是加密传播，第三方无法窃听。</li><li>具有校验机制，一旦被篡改，通信双方会立刻发现。</li><li>配备身份证书，防止身份被冒充。</li></ul><p><code>https</code>是<code>http</code>的安全版，它的核心是 SSL/TLS（<code>https</code>后面的&quot;s&quot;就是指 SSL），其原理就是在传输层和应用层之间加了一层 SSL/TLS。</p><h2 id="ssl-tls" tabindex="-1"><a class="header-anchor" href="#ssl-tls"><span>SSL/TLS</span></a></h2><h3 id="ssl-协议的组成" tabindex="-1"><a class="header-anchor" href="#ssl-协议的组成"><span>SSL 协议的组成</span></a></h3><p>SSL 基于 TCP，SSL 不是简单地单个协议，而是两层协议；SSL 记录协议（SSL Record Protocol）为多种高层协议（SSL 握手协议，SSL 修改密码参数协议，SSL 报警协议）提供基本的安全服务。HTTP 是为 Web 客户端/服务器交互提供传输服务的，它可以在 SSL 的顶层运行；SSL 记录协议为 SSL 链接提供两种服务，机密性：握手协议定义了一个共享密钥，用于 SSL 载荷的对称加密；消息完整性：握手协议还定义了一个共享密钥，它用来产生一个消息认证码（Message Authentication Code，MAC）。</p><h3 id="ssl-协议的基本过程" tabindex="-1"><a class="header-anchor" href="#ssl-协议的基本过程"><span>SSL 协议的基本过程</span></a></h3><p>本节内容的重点是设计思想和运行过程，不涉及具体的实现细节。</p><p>SSL/TLS 协议的基本思路是采用公钥加密法，也就是说，客户端先向服务器端索要公钥，然后用公钥加密信息，服务器收到密文后，用自己的私钥解密。</p><ul><li>如何保证公钥不被篡改？</li></ul><p>解决方法：将公钥放在数字证书中。只要证书是可信的，公钥就是可信的。</p><ul><li>公钥加密计算量太大，如何减少耗用的时间？</li></ul><p>解决方法：每一次对话（session），客户端和服务器端都生成一个&quot;对话密钥&quot;（session key），用它来加密信息。由于&quot;对话密钥&quot;是对称加密，所以运算速度非常快，而服务器公钥只用于加密&quot;对话密钥&quot;本身，这样就减少了加密运算的消耗时间。</p><p>SSL/TLS协议的基本过程是这样的：</p><ol><li>客户端向服务器端索要并验证公钥。</li><li>双方协商生成&quot;对话密钥&quot;。</li><li>双方采用&quot;对话密钥&quot;进行加密通信。</li></ol><p>上面过程的前两步，又称为&quot;握手阶段&quot;（handshake），接下来将详细说明握手阶段。</p><h3 id="握手阶段" tabindex="-1"><a class="header-anchor" href="#握手阶段"><span>握手阶段</span></a></h3><figure><img src="' + _imports_1 + '" alt="握手阶段" tabindex="0" loading="lazy"><figcaption>握手阶段</figcaption></figure><p>&quot;握手阶段&quot;涉及四次通信。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>需要注意的是，&quot;握手阶段&quot;的所有通信都是明文的。</p></div><h4 id="第一次通信-客户端发出请求-clienthello" tabindex="-1"><a class="header-anchor" href="#第一次通信-客户端发出请求-clienthello"><span>第一次通信: 客户端发出请求（ClientHello）</span></a></h4><p>首先，客户端（通常是浏览器）先向服务器发出加密通信的请求，这被叫做<code>ClientHello</code>请求。</p><p>在这一步，客户端主要向服务器提供以下信息。</p><ul><li>支持的协议版本，比如 TLS 1.0 版。</li><li>一个客户端生成的随机数，稍后用于生成&quot;对话密钥&quot;。（cxl: 这里产生生成对话秘钥的第一个随机数）</li><li>支持的加密方法，比如 RSA 公钥加密。</li><li>支持的压缩方法。</li></ul><p>这里需要注意的是，客户端发送的信息之中不包括服务器的域名。也就是说，理论上服务器只能包含一个网站，否则会分不清应该向客户端提供哪一个网站的数字证书。这就是为什么通常一台服务器只能有一张数字证书的原因。</p><p>对于虚拟主机的用户来说，这当然很不方便。2006年，TLS 协议加入了一个<code>Server Name Indication</code>扩展，允许客户端向服务器提供它所请求的域名。</p><h4 id="第二次通信-服务器回应-serverhello" tabindex="-1"><a class="header-anchor" href="#第二次通信-服务器回应-serverhello"><span>第二次通信: 服务器回应（ServerHello）</span></a></h4><p>服务器收到客户端请求后，向客户端发出回应，这叫做 ServerHello。服务器的回应包含以下内容。</p><ul><li>确认使用的加密通信协议版本，比如 TLS 1.0 版本。如果浏览器与服务器支持的版本不一致，服务器关闭加密通信。</li><li>一个服务器生成的随机数，稍后用于生成&quot;对话密钥&quot;。（cxl: 这里产生生成对话秘钥的第二个随机数）</li><li>确认使用的加密方法，比如 RSA 公钥加密。</li><li>服务器证书。</li></ul><p>除了上面这些信息，如果服务器需要确认客户端的身份，就会再包含一项请求，要求客户端提供&quot;客户端证书&quot;。比如，金融机构往往只允许认证客户连入自己的网络，就会向正式客户提供 USB 密钥，里面就包含了一张客户端证书。</p><h4 id="第三次通信-客户端回应" tabindex="-1"><a class="header-anchor" href="#第三次通信-客户端回应"><span>第三次通信: 客户端回应</span></a></h4><p>客户端收到服务器回应以后，首先验证服务器证书。如果证书存在以下任意一种情况，就会向访问者显示一个警告，由其选择是否还要继续通信。</p><ul><li>证书不是可信机构颁布</li><li>证书中的域名与实际域名不一致</li><li>证书已经过期</li></ul><p>如果证书没有问题，客户端就会从证书中取出服务器的公钥。然后，向服务器发送下面三项信息。</p><ul><li>一个随机数。该随机数用服务器公钥加密，防止被窃听。（cxl: 这里产生生成对话秘钥的第三个随机数）</li><li>编码改变通知，表示随后的信息都将用双方商定的加密方法和密钥发送。</li><li>客户端握手结束通知，表示客户端的握手阶段已经结束。这一项同时也是前面发送的所有内容的<code>hash</code>值，用来供服务器校验。</li></ul><p>上面第一项的随机数，是整个握手阶段出现的第三个随机数，又称<code>pre-master key</code>。有了它以后，客户端和服务器就同时有了三个随机数，接着双方就用事先商定的加密方法，各自生成本次会话所用的同一把&quot;会话密钥&quot;。</p><p>TODO: 如何通过三个随机数，来生成会话秘钥？</p><p>至于为什么一定要用三个随机数，来生成&quot;会话密钥&quot;，dog250 解释得很好：</p><blockquote><p>&quot;不管是客户端还是服务器，都需要随机数，这样生成的密钥才不会每次都一样。由于SSL协议中证书是静态的，因此十分有必要引入一种随机因素来保证协商出来的密钥的随机性。</p><p>对于RSA密钥交换算法来说，pre-master-key本身就是一个随机数，再加上hello消息中的随机，三个随机数通过一个密钥导出器最终导出一个对称密钥。</p><p>pre master的存在在于SSL协议不信任每个主机都能产生完全随机的随机数，如果随机数不随机，那么pre master secret就有可能被猜出来，那么仅适用pre master secret作为密钥就不合适了，因此必须引入新的随机因素，那么客户端和服务器加上pre master secret三个随机数一同生成的密钥就不容易被猜出了，一个伪随机可能完全不随机，可是是三个伪随机就十分接近随机了，每增加一个自由度，随机性增加的可不是一。&quot;</p></blockquote><p>此外，如果前一步，服务器要求客户端证书，客户端会在这一步发送证书及相关信息。</p><h4 id="第四次通信-服务器的最后回应" tabindex="-1"><a class="header-anchor" href="#第四次通信-服务器的最后回应"><span>第四次通信: 服务器的最后回应</span></a></h4><p>服务器收到客户端的第三个随机数<code>pre-master key</code>之后，计算生成本次会话所用的&quot;会话密钥&quot;。然后，向客户端最后发送下面信息。</p><ul><li>编码改变通知，表示随后的信息都将用双方商定的加密方法和密钥发送。</li><li>服务器握手结束通知，表示服务器的握手阶段已经结束。这一项同时也是前面发送的所有内容的<code>hash</code>值，用来供客户端校验。</li></ul><p>至此，整个握手阶段全部结束。接下来，客户端与服务器进入加密通信，就完全是使用普通的 HTTP 协议，只不过用&quot;会话密钥&quot;加密内容。</p><h3 id="加密通信过程中的算法" tabindex="-1"><a class="header-anchor" href="#加密通信过程中的算法"><span>加密通信过程中的算法</span></a></h3><h4 id="非对称加密" tabindex="-1"><a class="header-anchor" href="#非对称加密"><span>非对称加密</span></a></h4><p>私钥和公钥不是同一个，公钥用于发送给发送方，私钥用于接收方自己保留。发送方使用接收方公布的公钥对通信内容进行加密，只有接收方自身保留的私钥才能解密。</p><p>非对称加密相比对称加密更加安全，但也存在两个明显缺点：</p><ul><li>CPU 计算资源消耗非常大。一次完全 TLS 握手，密钥交换时的非对称解密计算量占整个握手过程的 90% 以上。而对称加密的计算量只相当于非对称加密的 0.1%，如果应用层数据也使用非对称加解密，性能开销太大，无法承受。</li><li>非对称加密算法对加密内容的长度有限制，不能超过公钥长度。比如现在常用的公钥长度是 2048 位，意味着待加密内容不能超过 256 个字节。</li></ul><p>因此，非对称加密算法目前只能用来作“密钥交换”或者“内容签名”，而不适合用来做应用层传输内容的加解密。非对称密钥交换算法是整个 HTTPS 得以安全的基石，充分理解非对称密钥交换算法是理解 HTTPS 协议和功能的关键。</p><p>常见的非对称加密算法有：</p><ul><li>RSA <ul><li>算法实现简单，诞生与1977年，历史悠久，经过了长时间的破解测试，安全性高。</li><li>缺点就是需要比较大的素数(目前常用的是2048位)来保证安全强度，很消耗CPU运算资源。</li><li>RSA 是目前&#39;唯一一个&#39;既能用于&#39;密钥交换&#39;又能用于&#39;证书签名&#39;的算法。</li></ul></li><li>DH</li><li>DHE</li><li>ECDH</li><li>ECDHE</li></ul><p>目前最常用的非对称加密算法是 RSA 算法。</p><h4 id="对称加密" tabindex="-1"><a class="header-anchor" href="#对称加密"><span>对称加密</span></a></h4><p>对称加密是指加密和解密使用的是同一个秘钥，即明文 A 通过秘钥 B 加密为密文 C，则将密文 C 用秘钥 B 解密，可以得到明文 A。</p><p>异或运算就是一种典型的对称密码，示例如下。</p><p>加密：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">明文</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> A:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0110</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0101</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1101</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">秘钥</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> B:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0101</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1001</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1010</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">异或运算———————————————</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">密文</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> C:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0011</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1100</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0111</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解密：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">密文</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> C:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0011</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1100</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0111</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">秘钥</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> B:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0101</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1001</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1010</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">异或运算———————————————</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">明文</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> A:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0110</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0101</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1101</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对称加密的优势：加解密速度快，效率高<br> 对称加密的劣势：双方需要事先知道同一把秘钥，秘钥在传输过程中可能会被窃取，安全性没有非对称加密高。</p><p>对称加密分为两种模式：</p><ul><li>流式加密 <ul><li>现在常用的就是 RC4，不过 RC4 已经不再安全，微软也建议网站尽量不要使用 RC4 流式加密。</li><li>一种新的替代 RC4 的流式加密算法叫 ChaCha20，它是 google 推出的速度更快，更安全的加密算法。目前已经被 android 和 chrome 采用，也编译进了 google 的开源 openssl 分支 —boring ssl，并且 nginx 1.7.4 也支持编译 boringssl。</li></ul></li><li>分组加密 <ul><li>以前常用的模式是 AES-CBC，但是 CBC 已经被证明容易遭受 BEAST 和 LUCKY13 攻击。</li><li>目前建议使用的分组加密模式是 AES-GCM，不过它的缺点是计算量大，性能和电量消耗都比较高，不适用于移动电话和平板电脑。</li></ul></li></ul><p>在 SSL/TLS 握手之后的通信，都是采用对称加密，而握手的目的，主要就是为了通过非对称加密算法交换对称加密算法的秘钥。</p><h4 id="消息摘要算法" tabindex="-1"><a class="header-anchor" href="#消息摘要算法"><span>消息摘要算法</span></a></h4><p>Reference: <a href="https://zhuanlan.zhihu.com/p/34732244" target="_blank" rel="noopener noreferrer">聊聊对称/非对称加密在HTTPS中的应用</a></p><p>消息摘要算法可以验证信息是否被篡改。</p><p>在数据发送前，首先使用消息摘要算法生成该数据的签名，然后签名和数据一同发送给接收者。接收者收到数据后，对收到的数据采用消息摘要算法获得签名，最后比较签名是否一致，以此来判断数据在传输过程中是否发生修改。</p><p>无论输入的消息有多长，计算出来的消息摘要的长度总是固定的。例如应用MD5算法摘要的消息有128个比特位，用SHA-1算法摘要的消息最终有160比特位的输出，SHA-1的变体可以产生192比特位和256比特位的消息摘要。一般认为，摘要的最终输出越长，该摘要算法就越安全。变长输入，定长输出。</p><p>只要输入的消息不同，对其进行摘要以后产生的摘要消息也必不相同；但相同的输入必会产生相同的输出。这正是好的消息摘要算法所具有的性质：输入改变了，输出也就改变了；两条相似的消息的摘要确不相近，甚至会大相径庭。从理论上来说，不管使用什么样的摘要算法，必然存在2个不同的消息，对应同样的摘要。因为输入是一个无穷集合，而输出是一个有限集合，所以从数学上来说，必然存在多对一的关系。但是实际上，很难或者说根本不可能人为的造出具有同样摘要的2个不同消息。所以我们选择摘要算法的时候，要注意其安全性。比如现在MD5就是不安全的，已经被国内王小云破解。</p><p>消息摘要是单向、不可逆的。只能进行正向的信息摘要，而无法从摘要中恢复出任何的原始消息，甚至根本就找不到任何与原信息相关的信息。当然，可以采用强力攻击的方法，即尝试每一个可能的信息，计算其摘要，看看是否与已有的摘要相同，如果这样做，最终肯定会恢复出摘要的消息。但实际上，要得到的信息可能是无穷个消息之一，所以这种强力攻击几乎是无效的。</p><p>消息摘要算法来源于CRC算法，最初CRC算法是用来验证数据完整性的，即我们常见的奇偶校验码、循环冗余校验，在CRC基础上发展处了MD和SHA量大算法家族，CRC比这些算法都要早，MD算法比SHA算法早，SHA算法是对MD算法的改进。再后来则发展出了可以带有密码的消息摘要算法-MAC算法。</p><p>消息摘要算法包括三大类，MD、SHA和MAC算法，MD的分类是按照版本规定的，SHA则是按照适用的消息长度分类的：</p><p>MD算法： Message Digest Algorithm ，目前主流的是MD5算法，为第五版算法，之前有MD2、MD3、MD4算法。<br> SHA算法：安全哈希算法（Secure Hash Algorithm）主要适用于数字签名标准（Digital Signature Standard DSS）里面定义的数字签名算法（Digital Signature Algorithm DSA）。<br> MAC算法：带有密码信息的信息摘要算法，是对MD和SHA算法的演变和改进，包括HmacMD2、HmacMD4、HmacMD5、HmacSHA-256等。</p><h3 id="数字证书" tabindex="-1"><a class="header-anchor" href="#数字证书"><span>数字证书</span></a></h3><p>数字证书认证机构（Certificate Authority，简称 CA 机构）是客户端和服务器双方都可信赖的第三方机构。</p><p>服务器的运营人员向 CA 机构提出证书认证申请，CA 机构在判明申请者的身份之后，会对已申请的服务器公开密钥做数字签名（即用 CA 机构自身的私钥对服务器公钥进行加密），然后分配这个已签名的公开密钥，并将该公开密钥和数字签名放入公钥证书（也叫数字证书或证书）后绑定在一起。服务器将公钥证书放在服务器上，并在握手阶段的第二次通信时将这份由 CA 机构颁发的公钥证书发送给客户端，客户端通过 CA 机构的公钥对数字签名解密，判断与公钥证书里的公钥是否相同以验证公钥证书的有效性。若证书有效，则公钥将用于第三次通信时的加密。</p><p>EV SSL（Extended Validation SSL Certificate）证书是基于国际标准的认证指导方针办法的证书，通过认证的 Web 网站能获得更高的认可度。持有 EV SSL 证书的 Web 网站的浏览器地址栏的背景色是绿色的，同时在地址栏的左侧显示了 SSL 证书中记录的组织名称及办法证书的认证机构的名称。</p><h4 id="证书信任的方式" tabindex="-1"><a class="header-anchor" href="#证书信任的方式"><span>证书信任的方式</span></a></h4><ul><li>证书颁发机构 <ul><li>CA（ Certificate Authority，证书颁发机构）是被证书接受者（拥有者）和依赖证书的一方共同信任的第三方。</li></ul></li><li>操作系统和浏览器内置 <ul><li>每个操作系统和大多数浏览器都会内置一个知名证书颁发机构的名单。因此，你也会信任操作系统及浏览器提供商提供和维护的可信任机构。</li><li>受信认证机构（也有不受信的，比如赛门铁克，沃通，或者像2011年被入侵的DigiNotar等）的证书一般会被操作系统或者浏览器在发行或者发布时内置。</li></ul></li><li>手动指定证书 <ul><li>所有浏览器和操作系统都提供了一种手工导入信任证书的机制。至于如何获得证书和验证完整性则完全由你自己来定。</li></ul></li></ul><h4 id="公钥证书" tabindex="-1"><a class="header-anchor" href="#公钥证书"><span>公钥证书</span></a></h4><p>以下是知乎网站的公钥证书。</p><figure><img src="' + _imports_2 + '" alt="知乎公钥证书" tabindex="0" loading="lazy"><figcaption>知乎公钥证书</figcaption></figure><h3 id="数据完整性" tabindex="-1"><a class="header-anchor" href="#数据完整性"><span>数据完整性</span></a></h3><p>数字签名是只有信息发送者才能产生的别人无法伪造的一段文本，这段文本是对信息发送者发送信息真实性的一个有效证明，具有不可抵赖性。</p><p>报文的发送方从报文文本生成一个 128 位的散列值（或称为报文摘要活哈希值，具体位数取决于消息摘要算法），发送方使用自己的私钥对这个摘要值进行加密来形成发送方的数字签名。然后这个数字签名将作为报文的附件一起发送给报文的接收方。报文的接收方首先从接收到的原始报文中计算出 128 位的散列值，再用发送方的公钥来对报文附加的数字签名进行解密。如果两次得到的结果是一致的，那么接收方可以确认该数字签名是发送方的，同时确认信息是真实的 。</p><h3 id="自我理解" tabindex="-1"><a class="header-anchor" href="#自我理解"><span>自我理解</span></a></h3><ul><li>各阶段的通信阶段是否加密了，采用什么加密方式？ <ul><li>握手阶段的第一次和第二次通信: 没加密，内容都是明文的，因此会被窃听</li><li>握手阶段的第三次通信: 客户端使用服务器端的公钥加密，最主要是对生成对话秘钥的第三个随机数进行加密</li><li>握手阶段之后的通信: 使用普通的 HTTP 协议通信，但通信内容是经过“对话秘钥”加密的</li></ul></li></ul><h2 id="https-的实现" tabindex="-1"><a class="header-anchor" href="#https-的实现"><span>https 的实现</span></a></h2><h3 id="混合内容" tabindex="-1"><a class="header-anchor" href="#混合内容"><span>混合内容</span></a></h3><p>混合内容(Mixed Content)是指在安全链接中混合了非安全请求内容，即在<code>https</code>的站点里请求了<code>http</code>的资源。</p><p>混合内容会降低<code>https</code>网站的安全性和用户体验。不过让人略感放心的是，浏览器对于可能对安全性造成较大威胁的资源类型的混合模式请求都会直接拦截报错，例如脚本资源。但对于图片、音频、视频等资源只会警告，但不会阻止其加载。</p>', 104)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/network/https/","title":"HTTPS","lang":"en-US","frontmatter":{"description":"HTTPS Reference: 阮一峰 - SSL/TLS协议运行机制的概述 相关文章 图解 HTTPS：Charles 捕获 HTTPS 的原理 #108 术语 CA 机构: 证书授权（Certificate Authority）中心 SSL: Secure Sockets Layer，安全套接层 TLS: Transport Layer Secu...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/network/https/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"HTTPS"}],["meta",{"property":"og:description","content":"HTTPS Reference: 阮一峰 - SSL/TLS协议运行机制的概述 相关文章 图解 HTTPS：Charles 捕获 HTTPS 的原理 #108 术语 CA 机构: 证书授权（Certificate Authority）中心 SSL: Secure Sockets Layer，安全套接层 TLS: Transport Layer Secu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTPS\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"相关文章","slug":"相关文章","link":"#相关文章","children":[]},{"level":2,"title":"术语","slug":"术语","link":"#术语","children":[]},{"level":2,"title":"http vs https","slug":"http-vs-https","link":"#http-vs-https","children":[]},{"level":2,"title":"SSL/TLS","slug":"ssl-tls","link":"#ssl-tls","children":[{"level":3,"title":"SSL 协议的组成","slug":"ssl-协议的组成","link":"#ssl-协议的组成","children":[]},{"level":3,"title":"SSL 协议的基本过程","slug":"ssl-协议的基本过程","link":"#ssl-协议的基本过程","children":[]},{"level":3,"title":"握手阶段","slug":"握手阶段","link":"#握手阶段","children":[]},{"level":3,"title":"加密通信过程中的算法","slug":"加密通信过程中的算法","link":"#加密通信过程中的算法","children":[]},{"level":3,"title":"数字证书","slug":"数字证书","link":"#数字证书","children":[]},{"level":3,"title":"数据完整性","slug":"数据完整性","link":"#数据完整性","children":[]},{"level":3,"title":"自我理解","slug":"自我理解","link":"#自我理解","children":[]}]},{"level":2,"title":"https 的实现","slug":"https-的实现","link":"#https-的实现","children":[{"level":3,"title":"混合内容","slug":"混合内容","link":"#混合内容","children":[]}]}],"git":{"createdTime":1554257696000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":17.49,"words":5248},"filePathRelative":"browser-env/network/https/README.md","localizedDate":"April 3, 2019","autoDesc":true}');
export {
  index_html as comp,
  data
};
