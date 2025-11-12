import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "data:image/gif;base64,R0lGODlhzADMAJEAAICnzAAAAP///wAAACH5BAAAAAAALAAAAADMAMwAAAL/jI+py+0Po5y02ouz3rz7D4biSJbmiabqygbAC8fyTNf2jec6vOz+DwzuGsKi8ZjrIZdMI7EJjSYV0qo19rxqocqtF5n9ioPdsXnIOKt15bVbFn7LAe25O25f1/NnPN+89yfmJ/gVWLhFiKh1uGil6FjVGBkFSclFdellqbk02QmWBnr1OVrEaSpUmgqEyvqz+ooWKzuVUNvkiotDu1uj6/ubGXwqSqw6fNxqrAyb3Dz7DG2LMO3cC43dDDytrcydLW1tA74tPk5T/n2ODsfcLnwLf6N+7G3/Pu8ur5+e3//iHrF6A9npIxhMYMJ/ABX6QvjQ4DyIuxxWZNjPIi6K/xslwuNYS2NIjAc9tgMpS2RKkhNNokP5SmVMlh9djoPJSmZOmidtWsOZSmdQni99diN602g4oaaYjgLaVKk5p6CodoL6VOo6q5q4XsJaVSs+r5TIRgJ7VWxBs47YLkLbVe1Ct4joFoL7VW5Eu4L4/sFbVu9Fv3wI5wF8VnBHw3YYz0HcVvFIx3Iov4H8VvJKy3c0z+Ssx/NO0GpI90H6U/RQ04BUR2U9BvYg1Ef5AcRCe2m12/tcZ7XNm07uqbuDBxy+tbhxzHV9h5VtyHla6Jukx6WeyHpe7Iy0B+ZOynti8I/ERyYvyXxm9FLYV0I+Vnlw5nfVN3ePCThv+n3t1/9vAWCAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiKGAxvHgX3/45dLhX/CtJd9+I85V4m38iaifiifulWJDLw4WY0YzLlZjSR8ysaMnN06WY0s9htKijEMecaQTP24WZE1JFlOkjU8iE6WOIRZ25WFLftZkT1OSkWVjW47WZVFfLlOlkGE+tmZlY65WZlJnXhNnanP6cGc0aTpZZ21tXvZnZ3myEWhog1JzwIbHHcpLoaW9+Vqfuu3ppaTEUWqmpclhKqem8XFqp6ckgupnooquiCWpk4qKoqkboqqlqpeyCqOry0H6G600yrqpAYoKxyg9jp4WLDnDtlZsPLr/4sjrp76eiutzywLZ7KjPvhrtdNMyWW2r196arD/d1rotl7bOl+115ZI57q7fohvuDPH21i6z75o4L271UrsunOfie2xsAc+WL4f7cttvpP+6WPCiCed6sLn3MjxwdBGz+7C0CxtZcXUX+5uxthtL2XF2HyscsrojW3kyxBNz3LLGL5Mcs8gzs5zydjl/V3J3Nau883hBn9dzeD/rfDTPK6uZtNBL89k00U9XGvV6Q1td9X1Xa531f1t73bWHX4sdNotjm112qmernXasa7vdtphxs9kwsG/LXXR5c7tZd9/pIn0z03fTPTjfeae3N6B+Jy7o4e05/l6Gkk9OeeWWDl+Oeeaab+6BAJx/TmABADs=";
const _imports_1 = "data:image/gif;base64,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";
const _imports_2 = "data:image/gif;base64,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";
const _imports_3 = "/assets/desktop_screen-BY0Y7l3z.jpg";
const _imports_4 = "/assets/desktop_inner-4tLAQpId.jpg";
const _imports_5 = "/assets/desktop_inner_zoomed-B7eyKFwX.jpg";
const _imports_6 = "/assets/desktop_page-DpEcDkiV.jpg";
const _imports_7 = "/assets/desktop_page_zoomed-Bc4B-Bb8.jpg";
const _imports_8 = "/assets/desktop_htmlbehaviour-BvQnTUm1.jpg";
const _imports_9 = "/assets/desktop_100percent-CLB31U5d.jpg";
const _imports_10 = "/assets/desktop_documentwidth-C2ZPqcf-.jpg";
const _imports_11 = "/assets/desktop_client-DHcu5RUE.jpg";
const _imports_12 = "/assets/desktop_client_smallpage-CCaz3aYj.jpg";
const _imports_13 = "/assets/desktop_offset-DS-llNd_.jpg";
const _imports_14 = "/assets/desktop_offset_smallpage-gdEH_fgq.jpg";
const _imports_15 = "/assets/desktop_pageXY-CBWQpt8J.jpg";
const _imports_16 = "/assets/desktop_clientXY-Coi_SqAm.jpg";
const _imports_17 = "/assets/desktop_screenXY-CWbG3o6F.jpg";
const _imports_18 = "/assets/desktop_mediaqueries-DSEZP7UW.jpg";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[19] || (_cache[19] = createBaseVNode("h1", {
      id: "a-tale-of-two-viewports-—-part-one",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#a-tale-of-two-viewports-—-part-one"
      }, [
        createBaseVNode("span", null, "A tale of two viewports — part one")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#设备像素和-css-像素" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("设备像素和 CSS 像素")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#_100-缩放" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("100% 缩放")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#屏幕尺寸-screen-size" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("屏幕尺寸（Screen size）")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#窗口尺寸-window-size" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("窗口尺寸（Window size）")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#滚动偏移-scrolling-offset" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("滚动偏移（Scrolling offset）")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#视口" }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("视口")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#后果" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("后果")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#文档宽度" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode("文档宽度")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#测量视口" }, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("测量视口")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#两个属性对" }, {
                default: withCtx(() => _cache[9] || (_cache[9] = [
                  createTextVNode("两个属性对")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#测量-html-元素" }, {
            default: withCtx(() => _cache[10] || (_cache[10] = [
              createTextVNode("测量 html 元素")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#事件坐标" }, {
            default: withCtx(() => _cache[11] || (_cache[11] = [
              createTextVNode("事件坐标")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#pagex-y、clientx-y、screenx-y-示意" }, {
                default: withCtx(() => _cache[12] || (_cache[12] = [
                  createTextVNode("pageX/Y、clientX/Y、screenX/Y 示意")
                ])),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#pagex-y" }, {
                    default: withCtx(() => _cache[13] || (_cache[13] = [
                      createTextVNode("pageX/Y")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#clientx-y" }, {
                    default: withCtx(() => _cache[14] || (_cache[14] = [
                      createTextVNode("clientX/Y")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#screenx-y" }, {
                    default: withCtx(() => _cache[15] || (_cache[15] = [
                      createTextVNode("screenX/Y")
                    ])),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_router_link, { to: "#总结" }, {
                    default: withCtx(() => _cache[16] || (_cache[16] = [
                      createTextVNode("总结")
                    ])),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#媒体查询" }, {
            default: withCtx(() => _cache[17] || (_cache[17] = [
              createTextVNode("媒体查询")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#总结-1" }, {
            default: withCtx(() => _cache[18] || (_cache[18] = [
              createTextVNode("总结")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[20] || (_cache[20] = createStaticVNode('<p>翻译自: <a href="https://www.quirksmode.org/mobile/viewports.html" target="_blank" rel="noopener noreferrer">PPK - A tale of two viewports — part one</a></p><p>在这个迷你系列文章里，我将解释视口以及各种重要元素的宽度是如何工作的，比如<code>html</code>元素、<code>window</code>和<code>screen</code>。</p><p>这一篇是关于桌面端浏览器的，且其唯一的目的就是为之后关于移动端浏览器的类似讨论做出铺垫。绝大多数开发者已经直觉上理解绝大多数的桌面概念。在移动端我们会有相同的概念，但是更加复杂，因此先讨论这些每个人都已经知道的术语，将极大地帮助你理解移动端浏览器。</p><h2 id="设备像素和-css-像素" tabindex="-1"><a class="header-anchor" href="#设备像素和-css-像素"><span>设备像素和 CSS 像素</span></a></h2><p>你需要理解的第一个概念是 CSS 像素（<code>CSS pixels</code>），以及它与设备像素（<code>device pixels</code>）的区别。</p><p>设备像素是我们直觉上认为是“正确”的一类像素。设备像素给出了你使用的任一款设备的正规分辨率，且（通常）可以通过<code>screen.width/height</code>读取到。</p><p>若是你给定某元素的宽度为<code>width: 128px</code>，且你的显示器的宽度是<code>1024px</code>，若是你最大限度地利用你的浏览器屏幕，这个元素可以在显示器上平铺八次（让我们先粗略地忽略那些棘手的部分）。</p><p>若是用户进行缩放，这个计算将发生改变。若是用户放大到<code>200%</code>，<code>width: 128px</code>的元素将只能在<code>1024px</code>宽的显示器上平铺四次。</p><p>现代浏览器上实现的缩放，仅仅是拉伸像素。这也就是说，元素的宽度并没有从<code>128px</code>改变为<code>256px</code>；取而代之的是，实际像素在尺寸上增加了一倍。正规地说，元素的宽度仍然是<code>128</code>CSS 像素，即使它占据了<code>256</code>个设备像素的空间。</p><p>换句话说，放大到<code>200%</code>，让一个 CSS 像素增长到一个设备像素的四倍大小。（宽度增长到二倍，高度增长到二倍，因此总的增长到四倍）</p><p>以下的这些图片可以更好地说明这个概念。在缩放为<code>100%</code>时，有四个像素。这里没什么可说的，CSS 像素完全与设备像素重叠。</p><figure><img src="' + _imports_0 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><p>现在，我们来缩小。CSS 像素开始收缩，这意味着一个设备像素现在与多个 CSS 像素重叠。</p><figure><img src="' + _imports_1 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><p>若是你放大，则正好相反。CSS 像素开始增长，现在一个 CSS 像素与多个设备像素重叠。</p><figure><img src="' + _imports_2 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><p>这里的\b要点是，\b你只关注 CSS 像素，因为它决定你的样式表如何渲染。</p><p>设备像素几乎对你\b完全无用。但对用户来说，用户可以缩放网页，直到他认为阅读地更加舒服。而且，缩放的程度也与你无关。浏览器会自动地确保你的 CSS 布局是拉伸还是挤压。</p><h3 id="_100-缩放" tabindex="-1"><a class="header-anchor" href="#_100-缩放"><span>100% 缩放</span></a></h3><p>我开始示例时，是假设缩放程度为<code>100%</code>。现在定义的略微严格一些:</p><blockquote><p>在缩放程度为<code>100%</code>时，一个 CSS 像素完全等于一个设备像素。</p></blockquote><p><code>100%</code>缩放的概念在之后的说明里\b特别重要，但是你不必在日常工作里过分\b担心。在桌面端浏览器里，你可以广泛地在<code>100%</code>缩放时测试你的网页，但即使用户进行缩放，\bCSS 像素的魔法将确保你的布局仍然保持了相同的比例。</p><h2 id="屏幕尺寸-screen-size" tabindex="-1"><a class="header-anchor" href="#屏幕尺寸-screen-size"><span>屏幕尺寸（Screen size）</span></a></h2><p>让我们看一些实际的测量。我们将从<code>screen.width</code>和<code>screen.height</code>开始。它们包含了用户屏幕的总宽度和总高度。这些尺寸都是以设备像素来度量的，因为它们从不会改变，它们是显示器的特性，而不是浏览器的。</p><figure><img src="' + _imports_3 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><p>有趣！但是我们可以做些什么呢？</p><p>基本上，没有。用户显示器的尺寸对我们不重要，除了你想要它以用于统计资料数据库。</p><div class="hint-container tip"><p class="hint-container-title">screen.width/hieght</p><ul><li>表示用户屏幕的总尺寸</li><li>以设备像素来度量</li><li>浏览器错误: IE8 在 IE7 和 IE 8 模式下，会用 CSS 像素来度量</li></ul></div><h2 id="窗口尺寸-window-size" tabindex="-1"><a class="header-anchor" href="#窗口尺寸-window-size"><span>窗口尺寸（Window size）</span></a></h2><p>实际上，你想知道的是浏览器窗口的内部尺寸。这将准确地告诉你，用户当前还有多少可用的空间用于 CSS 布局。你可以在<code>window.innerWidth</code>和<code>window.innerHeight</code>属性里找到这些尺寸。</p><figure><img src="' + _imports_4 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><p>显然，窗口的内部宽度是用 CSS 像素度量的。你需要知道，你可以将你布局的哪些部分挤压进浏览器窗口里，而且那部分会随着用户放大而变得更少。因此，若是用户放大，窗口里的可用空间将变得更少，且<code>window.innerWidth/innerHeight</code>将反映出这个减少。</p><p>（Opera 是个例外，它的<code>window.innerWidth/innerHeight</code>不会随着用户的放大而减小，它们是以设备像素来度量的。这在桌面端浏览器上是很烦人的，但是在移动端浏览器上是致命的，我们将在之后看到。）</p><figure><img src="' + _imports_5 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><p>注意，测量的宽度和高度都包含滚动条，它们也被认为是内部窗口的一部分。（这主要是历史遗留原因）</p><div class="hint-container tip"><p class="hint-container-title">window.innerWidth/Height</p><ul><li>表示浏览器窗口的总尺寸，包括滚动条</li><li>以 CSS 像素来度量</li><li>浏览器错误: <ul><li>IE 不支持</li><li>Opera 使用设备像素来度量</li></ul></li></ul></div><h2 id="滚动偏移-scrolling-offset" tabindex="-1"><a class="header-anchor" href="#滚动偏移-scrolling-offset"><span>滚动偏移（Scrolling offset）</span></a></h2><p><code>window.pageXOffset</code>和<code>window.pageYOffset</code>是文档水平和垂直方向上的滚动偏移。由此你可以知道用户已经滚动了多长距离。</p><figure><img src="' + _imports_6 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><p>这两个属性也是以 CSS 像素来度量的。你想要知道文档已经向上滚动了多少，无论现在处于哪种缩放程度。</p><p>理论上，若是用户向上滚动，之后放大，<code>window.pageX/YOffset</code>将改变。但是，浏览器试图保持 Web 网页是始终如一的，通过在用户缩放时维持同一元素在可见页面的顶部。这不能完美地生效，但这意味着，实际上，<code>window.pageX/YOffset</code>并没有真的改变: 滚出到窗口之外的 CSS 像素的数量仍然是（粗略地）相同的。</p><figure><img src="' + _imports_7 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">window.pageX/YOffset</p><ul><li>表示页面的滚动偏移</li><li>以 CSS 像素度量</li><li>无浏览器错误</li></ul></div><h2 id="视口" tabindex="-1"><a class="header-anchor" href="#视口"><span>视口</span></a></h2><p>在我们继续了解更多的 JavaScript 属性之前，我们必须先介绍另一个概念: 视口。</p><p>视口的作用是限制<code>html</code>元素，而<code>html</code>元素是你网站最上层的包含块。</p><p>这听起来可能有些含糊，因此我们给个实际的例子。假定你有个流式布局，且你的侧边栏的宽度是<code>width: 10%</code>。现在你调整浏览器窗口的大小，侧边栏会随之增长或收缩。但是这到底是如何工作的呢？</p><p>技术上来说，侧边栏获得了其父元素<code>body</code>元素<code>10%</code>的宽度，但你并没有给<code>body</code>元素设置宽度。因此问题就变成了，<code>body</code>元素的宽度是多少？</p><p>常规来说，所有的块级元素会占据它们父元素宽度的<code>100%</code>(当然也有例外，我们现在先忽略)。因此<code>body</code>元素，与它的父元素<code>html</code>元素一样宽。</p><p>那么现在<code>html</code>元素有多宽呢？它与浏览器窗口一样宽。这就是为什么你的<code>width: 10%</code>的侧边栏横跨了整个浏览器窗口的<code>10%</code>。所有的 Web 开发者都直觉上清楚并使用了这个事实。</p><p>但你可能不知道，这在理论上是如何工作的。理论上，<code>html</code>元素的宽度受限于视口的宽度，<code>html</code>元素占据了视口宽度的<code>100%</code>。</p><p>而视口（的宽度），是完全与浏览器窗口相等的，这就是这么定义的。视口不是构成 HTML 的一部分，因此你无法通过 CSS 来影响视口。视口的宽高，就是浏览器窗口的宽高，至少在桌面端浏览器上是如此，在移动端浏览器上，这将变得更加复杂。</p><h3 id="后果" tabindex="-1"><a class="header-anchor" href="#后果"><span>后果</span></a></h3><p>目前状态下，这会有一些奇特的后果。你可以在这个网站中见到其中一种。（译者注: 以下步骤请打开原网站后操作并查看结果）将网页滚动到最顶部，之后放大两到三次以便于这个网站的内容部分溢出到了浏览器窗口之外。现在滚动到右边，你将看到这个网站顶部的蓝色<code>bar</code>再也不会正确地对齐了。</p><figure><img src="' + _imports_8 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><p>这个行为就是所定义的视口的后果。我们给定了顶部蓝色<code>bar</code>的宽度为<code>width: 100%</code>，谁的<code>100%</code>呢？<code>html</code>元素的<code>100%</code>，而<code>html</code>元素与视口一样宽，而视口的宽度就是浏览器窗口的宽度。</p><p>要点是: 当缩放为<code>100%</code>时，这没什么问题，现在我们放大，视口的宽度变得比网站的总宽度要小一些。就其本身而言，这没什么问题，内容溢出了<code>html</code>元素，但是<code>html</code>元素有<code>overflow: visible</code>，这也就是说，溢出的内容在任何情况下都可以看到。</p><p>但是蓝色的<code>bar</code>不会溢出。我们给了它<code>width: 100%</code>，终究浏览器遵从了这个规则，给它设置了视口的宽度。浏览器也不会关心，（针对放大的页面来说，蓝色<code>bar</code>的）现在这个宽度略微有些窄。</p><figure><img src="' + _imports_9 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><h3 id="文档宽度" tabindex="-1"><a class="header-anchor" href="#文档宽度"><span>文档宽度</span></a></h3><p>我真正需要知道的是，页面总的内容有多宽，包括溢出的那部分。据我所知，没办法去找到这个值。（除非你计算网页里每个元素的宽度和外边距，不过这个比较容易出错）</p><figure><img src="' + _imports_10 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><p>我们真的感到很奇特，为什么不将这个值暴露给 CSS 呢？我更想要蓝色<code>bar</code>的<code>width: 100%</code>是基于文档宽度，而不是<code>html</code>元素的宽度。（但是这注定很难办，即使说无法实现，我也不会惊讶。）</p><p>浏览器厂商们，你们认为呢？</p><h2 id="测量视口" tabindex="-1"><a class="header-anchor" href="#测量视口"><span>测量视口</span></a></h2><p>你可能想要知道视口的尺寸，这些可以通过<code>document.documentElement.clientWidth/Height</code>。</p><figure><img src="' + _imports_11 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><p>若是你了解 DOM，你应该知道<code>document.documentElement</code>实际上就是<code>html</code>元素，即 HTML 文档的根元素。然而，可以这么说，视口是更高的层级，它是包含了<code>html</code>元素的元素。若是你给<code>html</code>元素设置<code>width</code>，你会发现这会有一些影响。（我不推荐这么做，但是确实是可以做的。）在这种情况下，<code>document.documentElement.clientWidth/Height</code>表示的是视口的尺寸，而不是<code>html</code>元素的尺寸。（这是个特殊的规则，仅是针对这对属性且仅针对<code>html</code>元素；在其他任何情况下，都表示元素实际的宽度。）</p><figure><img src="' + _imports_12 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><p>因此，<code>document.documentElement.clientWidth/Height</code>总是表示视口的尺寸，而不是<code>html</code>元素的尺寸。</p><div class="hint-container tip"><p class="hint-container-title">document. documentElement.clientWidth/Height</p><ul><li>代表视口的尺寸</li><li>以 CSS 像素度量</li><li>无浏览器错误</li></ul></div><h3 id="两个属性对" tabindex="-1"><a class="header-anchor" href="#两个属性对"><span>两个属性对</span></a></h3><p>但是，视口的尺寸不是通过<code>window.innerWidth/Height</code>给出了吗？嗯，是，也不是。</p><p>这两个属性对，略微有些区别：<code>document.documentElement.clientWidth/Height</code>不包括滚动条，而<code>window.innerWidth/Height</code>包括，尽管这有些吹毛求疵。</p><p>事实上，这两个属性对是在浏览器大战中遗留下来的。那时候，Netscape 仅支持<code>window.innerWidth/Height</code>，IE 仅支持<code>document.documentElement.clientWidth/Height</code>。之后，所有的浏览器都开始支持<code>document.documentElement.clientWidth/Height</code>，但 IE 却没支持<code>window.innerWidth/Height</code>。</p><p>有两个可用的属性对，在桌面端浏览器上是个较小的麻烦，但是在移动端却是个好事，我们之后将介绍。</p><h2 id="测量-html-元素" tabindex="-1"><a class="header-anchor" href="#测量-html-元素"><span>测量 html 元素</span></a></h2><p>因此，<code>document.documentElement.clientWidth/Height</code>在所有的情况下都表示视口的尺寸。但是，我们如何知道<code>html</code>元素自身的尺寸呢？它们存储在<code>document.documentElement.offsetWidth/Height</code>里。</p><figure><img src="' + _imports_13 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><p>这些属性可以让你访问作为块级元素的<code>html</code>元素；若是你给<code>html</code>设置了<code>width</code>，则可以通过<code>offsetWidth</code>反映出来。</p><figure><img src="' + _imports_14 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">document. documentElement.offsetWidth/Height</p><ul><li>表示<code>html</code>元素的尺寸（也就是网页的尺寸）</li><li>以 CSS 像素来度量</li><li>浏览器错误: IE 用此来测量视口的尺寸，而不是<code>html</code>元素的</li></ul></div><h2 id="事件坐标" tabindex="-1"><a class="header-anchor" href="#事件坐标"><span>事件坐标</span></a></h2><p>我们现在来了解下事件坐标的内容。当发生鼠标事件时，至少有五组属性可以告知你事件发生的精确的位置信息。在我们的讨论中，其中有三组属性对较为重要:</p><ol><li><code>pageX/Y</code>以 CSS 像素的形式，给出相对于<code>html</code>元素的坐标</li><li><code>clientX/Y</code>以 CSS 像素的形式，给出相对于视口的坐标</li><li><code>screenX/Y</code>以设备像素的形式，给出相对于屏幕的坐标</li></ol><div class="hint-container tip"><p class="hint-container-title">pageX/Y, clientX/Y, screenX/Y</p><ul><li>浏览器错误 <ul><li>IE 不支持<code>pageX/Y</code></li><li>IE 和 Opera 以 CSS 像素计算<code>screenX/Y</code></li></ul></li></ul></div><h3 id="pagex-y、clientx-y、screenx-y-示意" tabindex="-1"><a class="header-anchor" href="#pagex-y、clientx-y、screenx-y-示意"><span>pageX/Y、clientX/Y、screenX/Y 示意</span></a></h3><h4 id="pagex-y" tabindex="-1"><a class="header-anchor" href="#pagex-y"><span>pageX/Y</span></a></h4><figure><img src="' + _imports_15 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><h4 id="clientx-y" tabindex="-1"><a class="header-anchor" href="#clientx-y"><span>clientX/Y</span></a></h4><figure><img src="' + _imports_16 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><h4 id="screenx-y" tabindex="-1"><a class="header-anchor" href="#screenx-y"><span>screenX/Y</span></a></h4><figure><img src="' + _imports_17 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h4><p>在<code>90%</code>的情况下，你将使用<code>pageX/Y</code>，因为通常你想知道事件相对于文档的位置。剩下的<code>10%</code>，你将使用<code>clientX/Y</code>。你几乎从不需要知道事件相对于屏幕的坐标。</p><h2 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询"><span>媒体查询</span></a></h2><p>最后，是关于媒体查询的。你可以定义特殊的 CSS 规则，仅在页面宽度大于、等于或小于某个特定的大小时才执行。比如:</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.sidebar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">300</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@media</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> all</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> and</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (max-width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">400</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  // </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">styles assigned when width is smaller than 400px;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.sidebar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在侧边栏宽度为<code>300px</code>，除了在宽度小于<code>400px</code>的情况下，这时侧边栏的宽度将变为<code>100px</code>。</p><p>问题在于，我们测量的是哪个宽度？</p><p>这里有像个相关的媒体查询: <code>width/height</code>和<code>device-width/device-height</code>。</p><ol><li><code>width/height</code>使用与<code>document.documentElement.clientWidth/Height</code>（也就是视口）一样的值，以 CSS 像素度量</li><li><code>device-width/device-height</code>使用与<code>screen.width/height</code>（也就是屏幕）一样的值，以设备像素度量</li></ol><figure><img src="' + _imports_18 + '" alt="default" tabindex="0" loading="lazy"><figcaption>default</figcaption></figure><p>你应该使用哪个？毫无疑问，当然是<code>width</code>。Web 开发者不关心设备像素，他们关心的是浏览器窗口的宽度。</p><p>因此，在桌面端浏览器上，使用<code>width</code>，忘记<code>devie-width</code>。我们之后会发现，这个状况在移动端会更加混乱。</p><div class="hint-container tip"><p class="hint-container-title">Media queries</p><ul><li>浏览器错误 <ul><li>IE 不支持</li><li>对于<code>device-width/device-height</code>，若是以 CSS 像素度量的话，Firefox 会使用<code>screen.width/height</code>已有的值</li><li>对于<code>width/height</code>，若是以设备像素度量的话，Safari 和 Chrome 会使用<code>documentElement .clientWidth/Height</code>已有的值。</li></ul></li></ul></div><h2 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1"><span>总结</span></a></h2><p>这篇文章尝试说明了桌面端浏览器的行为，该系列的第二部分会将这些概念应用到移动端上，并强调与桌面的一些重要区别。</p>', 108)),
    createVNode(_component_global_config)
  ]);
}
const aTaleOfViewportsOne_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "a-tale-of-viewports-one.html.vue"]]);
const data = JSON.parse('{"path":"/css/viewport/a-tale-of-viewports-one.html","title":"A tale of two viewports — part one","lang":"en-US","frontmatter":{"description":"A tale of two viewports — part one 翻译自: PPK - A tale of two viewports — part one 在这个迷你系列文章里，我将解释视口以及各种重要元素的宽度是如何工作的，比如html元素、window和screen。 这一篇是关于桌面端浏览器的，且其唯一的目的就是为之后关于移动端浏览器的类似...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/css/viewport/a-tale-of-viewports-one.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"A tale of two viewports — part one"}],["meta",{"property":"og:description","content":"A tale of two viewports — part one 翻译自: PPK - A tale of two viewports — part one 在这个迷你系列文章里，我将解释视口以及各种重要元素的宽度是如何工作的，比如html元素、window和screen。 这一篇是关于桌面端浏览器的，且其唯一的目的就是为之后关于移动端浏览器的类似..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"A tale of two viewports — part one\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"设备像素和 CSS 像素","slug":"设备像素和-css-像素","link":"#设备像素和-css-像素","children":[{"level":3,"title":"100% 缩放","slug":"_100-缩放","link":"#_100-缩放","children":[]}]},{"level":2,"title":"屏幕尺寸（Screen size）","slug":"屏幕尺寸-screen-size","link":"#屏幕尺寸-screen-size","children":[]},{"level":2,"title":"窗口尺寸（Window size）","slug":"窗口尺寸-window-size","link":"#窗口尺寸-window-size","children":[]},{"level":2,"title":"滚动偏移（Scrolling offset）","slug":"滚动偏移-scrolling-offset","link":"#滚动偏移-scrolling-offset","children":[]},{"level":2,"title":"视口","slug":"视口","link":"#视口","children":[{"level":3,"title":"后果","slug":"后果","link":"#后果","children":[]},{"level":3,"title":"文档宽度","slug":"文档宽度","link":"#文档宽度","children":[]}]},{"level":2,"title":"测量视口","slug":"测量视口","link":"#测量视口","children":[{"level":3,"title":"两个属性对","slug":"两个属性对","link":"#两个属性对","children":[]}]},{"level":2,"title":"测量 html 元素","slug":"测量-html-元素","link":"#测量-html-元素","children":[]},{"level":2,"title":"事件坐标","slug":"事件坐标","link":"#事件坐标","children":[{"level":3,"title":"pageX/Y、clientX/Y、screenX/Y 示意","slug":"pagex-y、clientx-y、screenx-y-示意","link":"#pagex-y、clientx-y、screenx-y-示意","children":[]}]},{"level":2,"title":"媒体查询","slug":"媒体查询","link":"#媒体查询","children":[]},{"level":2,"title":"总结","slug":"总结-1","link":"#总结-1","children":[]}],"git":{"createdTime":1560357461000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":12.27,"words":3680},"filePathRelative":"css/viewport/a-tale-of-viewports-one.md","localizedDate":"June 13, 2019","autoDesc":true}');
export {
  aTaleOfViewportsOne_html as comp,
  data
};
