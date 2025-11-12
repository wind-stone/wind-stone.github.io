import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
const _hoisted_2 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[40] || (_cache[40] = createBaseVNode("h1", {
      id: "css-兼容性",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#css-兼容性"
      }, [
        createBaseVNode("span", null, "CSS 兼容性")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#background-size-100-auto-导致-background-repeat-属性失效" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("background-size: 100% auto; 导致 background-repeat 属性失效")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#flex-兼容性问题" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("flex 兼容性问题")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#flex-basis" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("flex-basis")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#rem-在-android-app-的-webview-计算不准确的问题" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("rem 在 Android APP 的 webview 计算不准确的问题")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#小于-12px-字体使用-line-height-属性垂直居中偏上的问题" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("小于 12px 字体使用 line-height 属性垂直居中偏上的问题")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#方案一-scale" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("方案一：scale")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#方案二-table-cell" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("方案二：table-cell")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#方案三-伪元素-vertical-align-middle" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode("方案三：伪元素 + vertical-align: middle")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#ie" }, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("IE")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie6-8-css-hack" }, {
                default: withCtx(() => _cache[9] || (_cache[9] = [
                  createTextVNode("IE6~8 CSS hack")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie6-float-换行" }, {
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode("IE6 float 换行")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie6-a-hover-问题" }, {
                default: withCtx(() => _cache[11] || (_cache[11] = [
                  createTextVNode("IE6 a:hover 问题")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie6-8-a-超链接被击穿问题" }, {
                default: withCtx(() => _cache[12] || (_cache[12] = [
                  createTextVNode("IE6~8 a 超链接被击穿问题")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie6-多类选择器-bug-避免使用" }, {
                default: withCtx(() => _cache[13] || (_cache[13] = [
                  createTextVNode("IE6 多类选择器 bug（避免使用）")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie6-相对父容器绝对定位的bug" }, {
                default: withCtx(() => _cache[14] || (_cache[14] = [
                  createTextVNode("IE6 相对父容器绝对定位的bug")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie6-固定定位" }, {
                default: withCtx(() => _cache[15] || (_cache[15] = [
                  createTextVNode("IE6 固定定位")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie-6-8-9及以上没有测-输入框内容高度兼容性问题" }, {
                default: withCtx(() => _cache[16] || (_cache[16] = [
                  createTextVNode("IE 6~8（9及以上没有测） 输入框内容高度兼容性问题")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie-6、7下将-块级元素设置为-display-inline-block-失效" }, {
                default: withCtx(() => _cache[17] || (_cache[17] = [
                  createTextVNode("IE 6、7下将 块级元素设置为 display: inline-block; 失效")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie-6-overflow-hidden-失效" }, {
                default: withCtx(() => _cache[18] || (_cache[18] = [
                  createTextVNode("IE 6 overflow: hidden; 失效")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#其他" }, {
                default: withCtx(() => _cache[19] || (_cache[19] = [
                  createTextVNode("其他")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[41] || (_cache[41] = createStaticVNode('<h2 id="background-size-100-auto-导致-background-repeat-属性失效" tabindex="-1"><a class="header-anchor" href="#background-size-100-auto-导致-background-repeat-属性失效"><span>background-size: 100% auto; 导致 background-repeat 属性失效</span></a></h2><p>部分华为浏览器，以下的代码将不起作用。其直接表现为设置<code>background-size: 100% auto;</code>会导致<code>background-repeat</code>属性失效。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    background: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">FFE6AE</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;...&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">top</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> repeat-y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /* 或 */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    background: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">FFE6AE</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;...&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">top</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> left</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> repeat-y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    background-size: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> auto</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决办法：<code>background-size</code>的第二个参数不能使用<code>auto</code>，可使用<code>1px</code>代替，即<code>background-size: 100% 1px</code>。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    background: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">FFE6AE</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;...&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">top</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> repeat-y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flex-兼容性问题" tabindex="-1"><a class="header-anchor" href="#flex-兼容性问题"><span>flex 兼容性问题</span></a></h2><h3 id="flex-basis" tabindex="-1"><a class="header-anchor" href="#flex-basis"><span>flex-basis</span></a></h3><p><code>flex-basis</code>的默认值是<code>auto</code>。</p><p>但是在 iOS 10.2 及以下版本，<code>flex-basis</code>的默认值为<code>0</code>。</p><p>Reference: <a href="https://jsonz1993.github.io/2017/08/flex-1%E5%9C%A8iOS10-2%E5%AF%BC%E8%87%B4flex-wrap%E4%B8%8D%E8%B5%B7%E4%BD%9C%E7%94%A8bug/" target="_blank" rel="noopener noreferrer">flex:1在iOS10.2导致flex-wrap 不起作用</a></p><h2 id="rem-在-android-app-的-webview-计算不准确的问题" tabindex="-1"><a class="header-anchor" href="#rem-在-android-app-的-webview-计算不准确的问题"><span>rem 在 Android APP 的 webview 计算不准确的问题</span></a></h2><p>Reference: <a href="https://blog.csdn.net/u013778905/article/details/77972841" target="_blank" rel="noopener noreferrer">rem布局在webview中页面错乱</a></p><p>\b前置信息:</p><ul><li>内嵌在 APP 里面的 H5 页面</li><li>使用<code>rem</code>作为单位</li><li><code>html</code>元素的<code>font-size</code>设置正常</li><li>系统浏览器和绝大部分手机上，正常显示</li><li>在某些手机上，页面元素变大了（或变小了），调试后发现是<code>rem</code>计算成<code>px</code>时不准确导致</li></ul><p>结论:</p><ul><li>手机系统设置了字体大小，导致 \bAPP 里 webview 里的默认字体大小偏大或偏小。将系统字体设置为“正常”即可解决问题。</li><li>若想要在用户设置了系统字体大小之后仍能正常显示，可参考 Reference 里的解决方法。</li></ul><h2 id="小于-12px-字体使用-line-height-属性垂直居中偏上的问题" tabindex="-1"><a class="header-anchor" href="#小于-12px-字体使用-line-height-属性垂直居中偏上的问题"><span>小于 12px 字体使用 line-height 属性垂直居中偏上的问题</span></a></h2>', 17)),
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#background-size-100-auto-导致-background-repeat-属性失效" }, {
            default: withCtx(() => _cache[20] || (_cache[20] = [
              createTextVNode("background-size: 100% auto; 导致 background-repeat 属性失效")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#flex-兼容性问题" }, {
            default: withCtx(() => _cache[21] || (_cache[21] = [
              createTextVNode("flex 兼容性问题")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#flex-basis" }, {
                default: withCtx(() => _cache[22] || (_cache[22] = [
                  createTextVNode("flex-basis")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#rem-在-android-app-的-webview-计算不准确的问题" }, {
            default: withCtx(() => _cache[23] || (_cache[23] = [
              createTextVNode("rem 在 Android APP 的 webview 计算不准确的问题")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#小于-12px-字体使用-line-height-属性垂直居中偏上的问题" }, {
            default: withCtx(() => _cache[24] || (_cache[24] = [
              createTextVNode("小于 12px 字体使用 line-height 属性垂直居中偏上的问题")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#方案一-scale" }, {
                default: withCtx(() => _cache[25] || (_cache[25] = [
                  createTextVNode("方案一：scale")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#方案二-table-cell" }, {
                default: withCtx(() => _cache[26] || (_cache[26] = [
                  createTextVNode("方案二：table-cell")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#方案三-伪元素-vertical-align-middle" }, {
                default: withCtx(() => _cache[27] || (_cache[27] = [
                  createTextVNode("方案三：伪元素 + vertical-align: middle")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#ie" }, {
            default: withCtx(() => _cache[28] || (_cache[28] = [
              createTextVNode("IE")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie6-8-css-hack" }, {
                default: withCtx(() => _cache[29] || (_cache[29] = [
                  createTextVNode("IE6~8 CSS hack")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie6-float-换行" }, {
                default: withCtx(() => _cache[30] || (_cache[30] = [
                  createTextVNode("IE6 float 换行")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie6-a-hover-问题" }, {
                default: withCtx(() => _cache[31] || (_cache[31] = [
                  createTextVNode("IE6 a:hover 问题")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie6-8-a-超链接被击穿问题" }, {
                default: withCtx(() => _cache[32] || (_cache[32] = [
                  createTextVNode("IE6~8 a 超链接被击穿问题")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie6-多类选择器-bug-避免使用" }, {
                default: withCtx(() => _cache[33] || (_cache[33] = [
                  createTextVNode("IE6 多类选择器 bug（避免使用）")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie6-相对父容器绝对定位的bug" }, {
                default: withCtx(() => _cache[34] || (_cache[34] = [
                  createTextVNode("IE6 相对父容器绝对定位的bug")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie6-固定定位" }, {
                default: withCtx(() => _cache[35] || (_cache[35] = [
                  createTextVNode("IE6 固定定位")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie-6-8-9及以上没有测-输入框内容高度兼容性问题" }, {
                default: withCtx(() => _cache[36] || (_cache[36] = [
                  createTextVNode("IE 6~8（9及以上没有测） 输入框内容高度兼容性问题")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie-6、7下将-块级元素设置为-display-inline-block-失效" }, {
                default: withCtx(() => _cache[37] || (_cache[37] = [
                  createTextVNode("IE 6、7下将 块级元素设置为 display: inline-block; 失效")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#ie-6-overflow-hidden-失效" }, {
                default: withCtx(() => _cache[38] || (_cache[38] = [
                  createTextVNode("IE 6 overflow: hidden; 失效")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#其他" }, {
                default: withCtx(() => _cache[39] || (_cache[39] = [
                  createTextVNode("其他")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[42] || (_cache[42] = createStaticVNode('<p>问题描述：<a href="http://imweb.io/topic/5848d0fc9be501ba17b10a94" target="_blank" rel="noopener noreferrer">Android 浏览器文本垂直居中问题</a></p><h3 id="方案一-scale" tabindex="-1"><a class="header-anchor" href="#方案一-scale"><span>方案一：scale</span></a></h3><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;content&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;测试文本&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.content</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">inline-block</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">40</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">gray</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  line-height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">40</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  font-size: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  transform: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">scale</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0.5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  transform-origin: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法存在的问题是：元素原先占据的空间不会因为<code>scale(.5)</code>而改变。</p><h3 id="方案二-table-cell" tabindex="-1"><a class="header-anchor" href="#方案二-table-cell"><span>方案二：table-cell</span></a></h3><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;container&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;content&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;testtesttesttesttest&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.container</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">table</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.content</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">gray</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  font-size: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">table-cell</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  vertical-align: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">middle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法的缺点是：内容标签外部增加了一层标签</p><h3 id="方案三-伪元素-vertical-align-middle" tabindex="-1"><a class="header-anchor" href="#方案三-伪元素-vertical-align-middle"><span>方案三：伪元素 + vertical-align: middle</span></a></h3><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;content&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;测试文本&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.content</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">::before</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  content: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">inline-block</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  vertical-align: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">middle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  margin-top: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原理：伪元素设置了<code>vertical-align: middle;</code>之后，伪元素（行内元素框）会与父元素基线上方0.5ex处的一个点对齐。</p><p>PS：大多数用户代理都把<code>1ex</code>处理成<code>0.5em</code>。</p><h2 id="ie" tabindex="-1"><a class="header-anchor" href="#ie"><span>IE</span></a></h2><h3 id="ie6-8-css-hack" tabindex="-1"><a class="header-anchor" href="#ie6-8-css-hack"><span>IE6~8 CSS hack</span></a></h3><table><thead><tr><th>版本\\hack</th><th>_</th><th>*</th><th>\\0</th><th>\\9</th></tr></thead><tbody><tr><td>IE 6</td><td>√</td><td>√</td><td>×</td><td>√</td></tr><tr><td>IE 7</td><td>×</td><td>√</td><td>×</td><td>√</td></tr><tr><td>IE 8</td><td>×</td><td>×</td><td>√</td><td>√</td></tr></tbody></table><p>各类写法如下：</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    _color:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">FF0000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;         </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/*仅 IE6支持 */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    *color:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">FFFF00</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;          </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 仅 IE6、7支持 */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    color:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">0000FF</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;       </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 仅 IE8支持 */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    color:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">0000FF</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\9</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;       </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 所有IE浏览器(IE6+)支持 */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更详细的信息见：<a href="http://blog.csdn.net/freshlover/article/details/12132801" target="_blank" rel="noopener noreferrer">http://blog.csdn.net/freshlover/article/details/12132801</a></p><h3 id="ie6-float-换行" tabindex="-1"><a class="header-anchor" href="#ie6-float-换行"><span>IE6 float 换行</span></a></h3><p>在浮动元素上添加如下代码</p><ul><li>display: inline-block;</li><li>overflow: hidden;</li></ul><h3 id="ie6-a-hover-问题" tabindex="-1"><a class="header-anchor" href="#ie6-a-hover-问题"><span>IE6 a:hover 问题</span></a></h3><p>原因：是ie6对a:hover子标签的解读是建立在父标签的hover设置上的，换句话说如果不设置任何父标签a:hover{}则ie6就会停止对a的子标签hover解读</p><p>比如</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;#&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;鼠标经过时改变我的&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">em</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;颜色&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">em</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:hover</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> em</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  color:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">F00</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码不会生效。需改成 （只要存在 a:hover {} 即可，不管里面是什么规则）</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:hover</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {zoom: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;}</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:hover</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> em</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{color:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">F00</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>参考文档：<a href="http://www.jb51.net/css/149472.html" target="_blank" rel="noopener noreferrer">http://www.jb51.net/css/149472.html</a></p><h3 id="ie6-8-a-超链接被击穿问题" tabindex="-1"><a class="header-anchor" href="#ie6-8-a-超链接被击穿问题"><span>IE6~8 a 超链接被击穿问题</span></a></h3><p>描述：当用超链接 a 绝对定位在某个元素 ele（内含图片或者文字）上时，超链接 a 会被击穿，鼠标放在 ele 上的图片或者文字上时，超链接无效，并且无法跳转。</p><p>解决方案：设置超链接的背景（不能为transparent），然后通过 filter 设置透明度。</p><h3 id="ie6-多类选择器-bug-避免使用" tabindex="-1"><a class="header-anchor" href="#ie6-多类选择器-bug-避免使用"><span>IE6 多类选择器 bug（避免使用）</span></a></h3><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.first.second</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {}</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.third.second</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>上述两句都只会应用的 .second 上，并且第二句会覆盖第一句</p><h3 id="ie6-相对父容器绝对定位的bug" tabindex="-1"><a class="header-anchor" href="#ie6-相对父容器绝对定位的bug"><span>IE6 相对父容器绝对定位的bug</span></a></h3><p>两种方法</p><ul><li>给父层设置zoom:1触发layout</li><li>给父层设置宽度（width(定位left)/height(定位bottom)）</li></ul><p>详见： <a href="http://blog.csdn.net/zhouyong0/article/details/6318485" target="_blank" rel="noopener noreferrer">http://blog.csdn.net/zhouyong0/article/details/6318485</a></p><h3 id="ie6-固定定位" tabindex="-1"><a class="header-anchor" href="#ie6-固定定位"><span>IE6 固定定位</span></a></h3><p>IE6不支持固定定位，但是可以依靠绝对定位和 JS 来模拟。具体代码为：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    var</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> pos6</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> scrollHeight</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> $</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scrollTop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> bodyHeight</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">   =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> $</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;body&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        floatwrap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">css</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;top&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">scrollHeight</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 532</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;px&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        floatwrap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">css</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;right&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;-48px&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    };</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    var</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ie6float</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">$</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">isIE6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">){</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        floatwrap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">css</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;display&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;block&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">css</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;position&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;absolute&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        pos6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> ie6timer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        var</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> _goPos</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">            floatwrap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">css</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;display&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;none&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            clearTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">ie6timer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            ie6timer</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> setTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">                floatwrap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">css</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;display&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;block&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            },</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            pos6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        };</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        $</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;scroll&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            _goPos</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        });</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        $</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;resize&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            _goPos</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        });</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    };</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    ie6float</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ie-6-8-9及以上没有测-输入框内容高度兼容性问题" tabindex="-1"><a class="header-anchor" href="#ie-6-8-9及以上没有测-输入框内容高度兼容性问题"><span>IE 6~8（9及以上没有测） 输入框内容高度兼容性问题</span></a></h3><p>对于下面一段代码：phone-text是输入框，输入框 height + 上下pading + 上下border = 48</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.phone-text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">180</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">40</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    font-size: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">24</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">fd5c47</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    padding: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    vertical-align: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">middle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>chrome下，会自动将输入的文字垂直居中</p><p>IE 6~8下：，不会将输入的问题垂直居中</p><p>将代码改成</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.phone-text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">180</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">24</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    font-size: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">24</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">fd5c47</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    padding: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    vertical-align: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">middle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ie-6、7下将-块级元素设置为-display-inline-block-失效" tabindex="-1"><a class="header-anchor" href="#ie-6、7下将-块级元素设置为-display-inline-block-失效"><span>IE 6、7下将 块级元素设置为 display: inline-block; 失效</span></a></h3><p>解决方法：</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">inline-block</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   /*在 display: inline-block 下面添加以下两个规则*/</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    *zoom: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    *display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">inline</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ie-6-overflow-hidden-失效" tabindex="-1"><a class="header-anchor" href="#ie-6-overflow-hidden-失效"><span>IE 6 overflow: hidden; 失效</span></a></h3><p>IE6 对 overflow 属性的理解有误，说白了是 IE6 的一个 bug，IE7 开始已经修复这个问题，也就是说IE7/IE8下 overflow: hidden; 可以清除浮动造成的影响-- <a href="http://www.zhangxinxu.com/wordpress/2010/01/%E5%AF%B9overflow%E4%B8%8Ezoom%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8%E7%9A%84%E4%B8%80%E4%BA%9B%E8%AE%A4%E8%AF%86/" target="_blank" rel="noopener noreferrer">张鑫旭-对overflow与zoom”清除浮动”的一些认识</a></p><p>通用的清楚浮动的方法，在浮动元素的父元素上添加类：clearfix</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.clearfix</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:after</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    content:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;020&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    display:</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">block</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    height:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    clear:</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">both</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    visibility:</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">hidden</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.clearfix</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    zoom:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h3><ul><li>IE6 CSS高度height:100% 无效</li><li><a href="http://blog.csdn.net/ximenxiafeng/article/details/8871158" target="_blank" rel="noopener noreferrer">IE6 和 IE7 下 margin-bottom 失效</a></li><li>IE6 不支持 png24 的透明图片，要用 png8</li></ul>', 60)),
    createVNode(_component_global_config)
  ]);
}
const compatibility_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "compatibility.html.vue"]]);
const data = JSON.parse('{"path":"/css/unclassified/compatibility.html","title":"CSS 兼容性","lang":"en-US","frontmatter":{"description":"CSS 兼容性 background-size: 100% auto; 导致 background-repeat 属性失效 部分华为浏览器，以下的代码将不起作用。其直接表现为设置background-size: 100% auto;会导致background-repeat属性失效。 解决办法：background-size的第二个参数不能使用auto，...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/css/unclassified/compatibility.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"CSS 兼容性"}],["meta",{"property":"og:description","content":"CSS 兼容性 background-size: 100% auto; 导致 background-repeat 属性失效 部分华为浏览器，以下的代码将不起作用。其直接表现为设置background-size: 100% auto;会导致background-repeat属性失效。 解决办法：background-size的第二个参数不能使用auto，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS 兼容性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"background-size: 100% auto; 导致 background-repeat 属性失效","slug":"background-size-100-auto-导致-background-repeat-属性失效","link":"#background-size-100-auto-导致-background-repeat-属性失效","children":[]},{"level":2,"title":"flex 兼容性问题","slug":"flex-兼容性问题","link":"#flex-兼容性问题","children":[{"level":3,"title":"flex-basis","slug":"flex-basis","link":"#flex-basis","children":[]}]},{"level":2,"title":"rem 在 Android APP 的 webview 计算不准确的问题","slug":"rem-在-android-app-的-webview-计算不准确的问题","link":"#rem-在-android-app-的-webview-计算不准确的问题","children":[]},{"level":2,"title":"小于 12px 字体使用 line-height 属性垂直居中偏上的问题","slug":"小于-12px-字体使用-line-height-属性垂直居中偏上的问题","link":"#小于-12px-字体使用-line-height-属性垂直居中偏上的问题","children":[{"level":3,"title":"方案一：scale","slug":"方案一-scale","link":"#方案一-scale","children":[]},{"level":3,"title":"方案二：table-cell","slug":"方案二-table-cell","link":"#方案二-table-cell","children":[]},{"level":3,"title":"方案三：伪元素 + vertical-align: middle","slug":"方案三-伪元素-vertical-align-middle","link":"#方案三-伪元素-vertical-align-middle","children":[]}]},{"level":2,"title":"IE","slug":"ie","link":"#ie","children":[{"level":3,"title":"IE6~8 CSS hack","slug":"ie6-8-css-hack","link":"#ie6-8-css-hack","children":[]},{"level":3,"title":"IE6 float 换行","slug":"ie6-float-换行","link":"#ie6-float-换行","children":[]},{"level":3,"title":"IE6 a:hover 问题","slug":"ie6-a-hover-问题","link":"#ie6-a-hover-问题","children":[]},{"level":3,"title":"IE6~8 a 超链接被击穿问题","slug":"ie6-8-a-超链接被击穿问题","link":"#ie6-8-a-超链接被击穿问题","children":[]},{"level":3,"title":"IE6 多类选择器 bug（避免使用）","slug":"ie6-多类选择器-bug-避免使用","link":"#ie6-多类选择器-bug-避免使用","children":[]},{"level":3,"title":"IE6 相对父容器绝对定位的bug","slug":"ie6-相对父容器绝对定位的bug","link":"#ie6-相对父容器绝对定位的bug","children":[]},{"level":3,"title":"IE6 固定定位","slug":"ie6-固定定位","link":"#ie6-固定定位","children":[]},{"level":3,"title":"IE 6~8（9及以上没有测） 输入框内容高度兼容性问题","slug":"ie-6-8-9及以上没有测-输入框内容高度兼容性问题","link":"#ie-6-8-9及以上没有测-输入框内容高度兼容性问题","children":[]},{"level":3,"title":"IE 6、7下将 块级元素设置为 display: inline-block; 失效","slug":"ie-6、7下将-块级元素设置为-display-inline-block-失效","link":"#ie-6、7下将-块级元素设置为-display-inline-block-失效","children":[]},{"level":3,"title":"IE 6 overflow: hidden; 失效","slug":"ie-6-overflow-hidden-失效","link":"#ie-6-overflow-hidden-失效","children":[]},{"level":3,"title":"其他","slug":"其他","link":"#其他","children":[]}]}],"git":{"createdTime":1533973348000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":4.95,"words":1486},"filePathRelative":"css/unclassified/compatibility.md","localizedDate":"August 11, 2018","autoDesc":true}');
export {
  compatibility_html as comp,
  data
};
