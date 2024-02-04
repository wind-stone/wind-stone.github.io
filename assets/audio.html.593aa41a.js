import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "audio-\u517C\u5BB9\u6027",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#audio-\u517C\u5BB9\u6027",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" audio \u517C\u5BB9\u6027")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u79FB\u52A8\u7AEF audio \u5143\u7D20\u65E0\u6CD5\u81EA\u52A8\u64AD\u653E");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u80CC\u666F");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u89E3\u51B3\u65B9\u6848");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5FAE\u4FE1");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u975E\u5FAE\u4FE1\u3001\u4E0D\u53EF\u81EA\u52A8\u64AD\u653E\u7684\u6E20\u9053");
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<h2 id="\u79FB\u52A8\u7AEF-audio-\u5143\u7D20\u65E0\u6CD5\u81EA\u52A8\u64AD\u653E" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8\u7AEF-audio-\u5143\u7D20\u65E0\u6CD5\u81EA\u52A8\u64AD\u653E" aria-hidden="true">#</a> \u79FB\u52A8\u7AEF audio \u5143\u7D20\u65E0\u6CD5\u81EA\u52A8\u64AD\u653E</h2><h3 id="\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a> \u80CC\u666F</h3><p>Chrome \u6D4F\u89C8\u5668\u91CC\uFF0C<code>audio</code>\u5143\u7D20\u7684<code>autoplay</code>\u7279\u6027\u4E0D\u8D77\u4F5C\u7528\uFF0C\u4EE3\u7801\u91CC\u8C03\u7528<code>audio</code>\u5143\u7D20\u7684<code>play</code>\u65B9\u6CD5\u4E5F\u4F1A\u62A5\u5982\u4E0B\u7684\u9519\u8BEF\u3002</p><blockquote><p>Uncaught (in promise) DOMException: play() failed because the user didn&#39;t interact with the document first.</p></blockquote><p>\u6309\u9519\u8BEF\u63D0\u793A\uFF0C<code>play</code>\u65B9\u6CD5\u8C03\u7528\u5931\u8D25\uFF0C\u662F\u56E0\u4E3A\u7528\u6237\u6CA1\u6709\u4E0E\u6587\u6863\u4EA4\u4E92\u3002\u6362\u53E5\u8BDD\u8BF4\u5C31\u662F\uFF0C\u5FC5\u987B\u7528\u6237\u4E0E\u6587\u6863\u91CC\u7684\u4EFB\u4E00\u5143\u7D20\u4EA7\u751F\u4E86\u4EA4\u4E92\uFF0C\u624D\u80FD\u8C03\u7528<code>audio</code>\u5143\u7D20\u7684<code>play</code>\u65B9\u6CD5\u3002</p><p>\u4F46\u662F\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u81EA\u52A8\u64AD\u653E<code>audio</code>\u5462\uFF1F\u636E\u8BF4\u662F\b\u5728\u79FB\u52A8\u7AEF\uFF0C\u4E3A\u4E86\u8282\u7701\u6D41\u91CF\uFF0C\u4E0D\u80FD\u81EA\u52A8\u64AD\u653E\u97F3\u9891\u548C\u89C6\u9891\u3002</p><blockquote><p>In Safari on iOS (for all devices, including iPad), where the user may be on a cellular network and be charged per data unit, preload and autoplay are disabled. No data is loaded until the user initiates it. This means the JavaScript play() and load() methods are also inactive until the user initiates playback, unless the play() or load() method is triggered by user action. In other words, a user-initiated Play button works, but an onLoad=&quot;play()&quot; event does not.</p><p>This plays the movie: <code>&lt;input type=&quot;button&quot; value=&quot;Play&quot; onclick=&quot;document.myMovie.play()&quot;&gt;</code></p><p>This does nothing on iOS: <code>&lt;body onload=&quot;document.myMovie.play()&quot;&gt;</code></p><p>Note: This requirement applies to media played by <code>&lt;audio&gt;</code> tags, <code>&lt;video&gt;</code> tags, and Web Audio. For more information about the Web Audio API, read the next chapter, Playing Sounds with the Web Audio API.</p></blockquote>', 7);
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u5728");
const _hoisted_16 = {
  href: "https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#//apple_ref/doc/uid/TP40009523-CH5-SW1",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u82F9\u679C\u7684\u5F00\u53D1\u8005\u6587\u6863");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u91CC\uFF0C\u6709\u5982\u4E0A\u63CF\u8FF0\u3002");
const _hoisted_19 = /* @__PURE__ */ createStaticVNode('<h3 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6848</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>music<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx.mp4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autoplay</span> <span class="token attr-name">loop</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="\u5FAE\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u4FE1" aria-hidden="true">#</a> \u5FAE\u4FE1</h4><p>\u5F15\u5165\u5FAE\u4FE1\u7684 JSSDK\uFF0C\u5728<code>wx.ready</code>\u51FD\u6570\u5185\u8C03\u7528<code>audio.play()</code>\u5373\u53EF\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;script type=&quot;text/javascript src=&quot;http://res.wx.qq.com/open/js/jweixin-1.2.0.js&quot;&gt;<span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u914D\u7F6E\u4FE1\u606F</span>\nwx<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F,\u8C03\u7528\u7684\u6240\u6709api\u7684\u8FD4\u56DE\u503C\u4F1A\u5728\u5BA2\u6237\u7AEFalert\u51FA\u6765\uFF0C\u82E5\u8981\u67E5\u770B\u4F20\u5165\u7684\u53C2\u6570\uFF0C\u53EF\u4EE5\u5728pc\u7AEF\u6253\u5F00\uFF0C\u53C2\u6570\u4FE1\u606F\u4F1A\u901A\u8FC7log\u6253\u51FA\uFF0C\u4EC5\u5728pc\u7AEF\u65F6\u624D\u4F1A\u6253\u5370\u3002</span>\n    appId<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u586B\uFF0C\u4F01\u4E1A\u53F7\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u6B64\u5904\u586B\u5199\u4F01\u4E1A\u53F7corpid</span>\n    timestamp<span class="token operator">:</span> <span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u586B\uFF0C\u751F\u6210\u7B7E\u540D\u7684\u65F6\u95F4\u6233</span>\n    nonceStr<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u586B\uFF0C\u751F\u6210\u7B7E\u540D\u7684\u968F\u673A\u4E32</span>\n    signature<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token comment">// \u5FC5\u586B\uFF0C\u7B7E\u540D\uFF0C\u89C1\u9644\u5F551</span>\n    jsApiList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u5FC5\u586B\uFF0C\u9700\u8981\u4F7F\u7528\u7684JS\u63A5\u53E3\u5217\u8868\uFF0C\u6240\u6709JS\u63A5\u53E3\u5217\u8868\u89C1\u9644\u5F552</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nwx<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;music&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="\u975E\u5FAE\u4FE1\u3001\u4E0D\u53EF\u81EA\u52A8\u64AD\u653E\u7684\u6E20\u9053" tabindex="-1"><a class="header-anchor" href="#\u975E\u5FAE\u4FE1\u3001\u4E0D\u53EF\u81EA\u52A8\u64AD\u653E\u7684\u6E20\u9053" aria-hidden="true">#</a> \u975E\u5FAE\u4FE1\u3001\u4E0D\u53EF\u81EA\u52A8\u64AD\u653E\u7684\u6E20\u9053</h4><p>\u7528\u6237\u89E6\u6478\u5C4F\u5E55\u540E\uFF08\u5355\u6B21\u89E6\u53D1\uFF09\uFF0C\u64AD\u653E\u97F3\u9891</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">one</span><span class="token punctuation">(</span><span class="token string">&#39;touchstart&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;music&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>', 9);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u79FB\u52A8\u7AEF-audio-\u5143\u7D20\u65E0\u6CD5\u81EA\u52A8\u64AD\u653E" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u80CC\u666F" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u89E3\u51B3\u65B9\u6848" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u5FAE\u4FE1" }, {
                    default: withCtx(() => [
                      _hoisted_6
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#\u975E\u5FAE\u4FE1\u3001\u4E0D\u53EF\u81EA\u52A8\u64AD\u653E\u7684\u6E20\u9053" }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _hoisted_8,
    createBaseVNode("p", null, [
      _hoisted_15,
      createBaseVNode("a", _hoisted_16, [
        _hoisted_17,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_18
    ]),
    _hoisted_19,
    createVNode(_component_global_config)
  ], 64);
}
var audio_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { audio_html as default };
