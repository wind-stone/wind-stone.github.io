import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "ios-\u517C\u5BB9\u6027\u95EE\u9898",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#ios-\u517C\u5BB9\u6027\u95EE\u9898",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" iOS \u517C\u5BB9\u6027\u95EE\u9898")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u8F93\u5165\u6846\u5149\u6807\u95EE\u9898");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(":active \u4E0D\u751F\u6548");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("iOS 10 \u4E0A flex item \u5143\u7D20\u7684\u5B50\u5143\u7D20\u7684 height: 100% \u672A\u751F\u6548");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("iOS UIWebView \u91CC\u6EDA\u52A8\u9875\u9762\u5BFC\u81F4\u8BA1\u65F6\u5668\u505C\u6B62");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("WebKit");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u5B50\u5143\u7D20\u4E0A\u5B58\u5728 transform \u65F6\u7236\u5143\u7D20\u7684 border-radius + overflow: hidden \u4E0D\u751F\u6548");
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<h2 id="\u8F93\u5165\u6846\u5149\u6807\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u8F93\u5165\u6846\u5149\u6807\u95EE\u9898" aria-hidden="true">#</a> \u8F93\u5165\u6846\u5149\u6807\u95EE\u9898</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BF7\u8F93\u5165\u624B\u673A\u53F7<span class="token punctuation">&quot;</span></span> <span class="token attr-name">maxlength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>11<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">input</span> <span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> 36px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728 iOS \u4E0B\uFF0C\u5F53<code>input</code>\u805A\u7126\u540E\uFF08\u4F46\u8FD8\u672A\u8F93\u5165\uFF09\uFF0C\u5149\u6807\u7684\u957F\u5EA6\u4E3A<code>input</code>\u7684<code>line-height</code>\u7684\u9AD8\u5EA6\uFF0C\u800C\u5F53\u8F93\u5165\u5185\u5BB9\u540E\uFF0C\u5149\u6807\u7684\u957F\u5EA6\u6539\u53D8\u4E3A\u4ECE<code>input</code>\u9876\u90E8\u5230\u6587\u5B57\u5E95\u90E8\u7684\u8DDD\u79BB\uFF0C\u5BFC\u81F4\u8F93\u5165\u524D\u540E\u5149\u6807\u957F\u5EA6\u4E0D\u7EDF\u4E00\u3002</p><p>\u89E3\u51B3\u65B9\u6848\u662F\uFF0C</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">input</span> <span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 26px<span class="token punctuation">;</span> <span class="token comment">/** \u6700\u597D\u52A0\u4E0A height **/</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 5px 0<span class="token punctuation">;</span> <span class="token comment">/** \u4E5F\u53EF\u4EE5\u7528 margin **/</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> 26px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6DFB\u52A0<code>padding</code>\u6216<code>margin</code>\uFF0C\u5373\u53EF\u89E3\u51B3\u3002</p><p>\u6B64\u5916\uFF0C\u7ECF\u6D4B\u8BD5\uFF0C\u5728 iOS \u548C\u90E8\u5206 Android \u6D4F\u89C8\u5668\u4E0A\uFF0C\u82E5\u662F\u4E0D\u6DFB\u52A0\u56FA\u5B9A\u7684<code>height</code>\uFF0C\u8F93\u5165\u5185\u5BB9\u524D\u540E<code>input</code>\u4F1A\u6709\u7EC6\u5FAE\u7684\u9AD8\u5EA6\u53D8\u5316\uFF0C\u56E0\u6B64\u6700\u597D\u52A0\u4E0A<code>height</code>\u3002</p><h2 id="active-\u4E0D\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#active-\u4E0D\u751F\u6548" aria-hidden="true">#</a> :active \u4E0D\u751F\u6548</h2><p>iOS Safari \u91CC\uFF0C\u9700\u8981\u5728\u6309\u94AE\u5143\u7D20\u6216<code>body</code>/<code>html</code>\u4E0A\u7ED1\u5B9A\u4E00\u4E2A<code>touchstart</code>\u4E8B\u4EF6\uFF0C\u624D\u80FD\u6FC0\u6D3B<code>:active</code>\u72B6\u6001\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchstart&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="ios-10-\u4E0A-flex-item-\u5143\u7D20\u7684\u5B50\u5143\u7D20\u7684-height-100-\u672A\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#ios-10-\u4E0A-flex-item-\u5143\u7D20\u7684\u5B50\u5143\u7D20\u7684-height-100-\u672A\u751F\u6548" aria-hidden="true">#</a> iOS 10 \u4E0A flex item \u5143\u7D20\u7684\u5B50\u5143\u7D20\u7684 height: 100% \u672A\u751F\u6548</h2>', 12);
const _hoisted_21 = /* @__PURE__ */ createTextVNode("\u8BE6\u60C5\u53EF\u89C1\uFF1A");
const _hoisted_22 = {
  href: "https://github.com/philipwalton/flexbugs/issues/197",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_23 = /* @__PURE__ */ createTextVNode("100% height doesn't work within a flex item in a flex-item child (Chrome / Safari) #197");
const _hoisted_24 = /* @__PURE__ */ createStaticVNode('<p>\u89E3\u51B3\u65B9\u6CD5\uFF1A\u5C06 flex item \u5143\u7D20\u4E5F\u53D8\u6210 flexbox \u5143\u7D20\u3002</p><h2 id="ios-uiwebview-\u91CC\u6EDA\u52A8\u9875\u9762\u5BFC\u81F4\u8BA1\u65F6\u5668\u505C\u6B62" tabindex="-1"><a class="header-anchor" href="#ios-uiwebview-\u91CC\u6EDA\u52A8\u9875\u9762\u5BFC\u81F4\u8BA1\u65F6\u5668\u505C\u6B62" aria-hidden="true">#</a> iOS UIWebView \u91CC\u6EDA\u52A8\u9875\u9762\u5BFC\u81F4\u8BA1\u65F6\u5668\u505C\u6B62</h2><p>\u6709\u4E00\u4E9B iOS \u5BA2\u6237\u7AEF\u5185\u4F1A\u4F7F\u7528 UIWebView\uFF0C\u5728 UIWebView \u91CC\u6EDA\u52A8\u9875\u9762\u65F6\uFF0C\u5230\u5BFC\u81F4\u8BA1\u65F6\u5668\u3001\u52A8\u753B\u7B49\u7B49\u505C\u6B62\u3002</p><p>\u6709\u4E24\u79CD\u65B9\u5F0F\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF1A</p><ul><li>\u3010\u63A8\u8350\u3011\u5F03\u7528 UIWebView\uFF0C\u6539\u7528 WKWebView\uFF08\u82E5\u662F WKWebView \u6CA1\u6709\u5751\u7684\u8BDD\uFF09</li><li>\u4F7F\u7528 better-scroll \u7B49\u6EDA\u52A8\u5DE5\u5177\u6A21\u62DF\u539F\u751F\u7684\u6EDA\u52A8</li></ul><p>\u5F53\u4F7F\u7528<code>better-scroll</code>\u7B49\u7C7B\u4F3C\u6EDA\u52A8\u5E93\u65F6\uFF0C\u901A\u5E38\u4F1A\u4F7F\u7528<code>transform</code>\u6765\u505A\u6EDA\u52A8\u52A8\u753B\u7684\u8FC7\u6E21\uFF0C\u4F46\u662F\u5728<code>transform</code>\u5143\u7D20\u4E0B\u7684<code>fixed</code>\u5B9A\u4F4D\u7684\u5B50\u5143\u7D20\u5C06\u4EE5<code>transform</code>\u5143\u7D20\u4E3A\u5305\u542B\u5757\u8FDB\u884C\u5B9A\u4F4D\uFF0C\u5E76\u5931\u53BB\u56FA\u5B9A\u6548\u679C\u3002\u56E0\u6B64\u9700\u8981\u6CE8\u610F\u4E0D\u8981\u5C06<code>fixed</code>\u5B9A\u4F4D\u7684\u5143\u7D20\u653E\u5728\u6EDA\u52A8\u5143\u7D20\u4E4B\u4E0B\u3002</p><h2 id="webkit" tabindex="-1"><a class="header-anchor" href="#webkit" aria-hidden="true">#</a> WebKit</h2><h3 id="\u5B50\u5143\u7D20\u4E0A\u5B58\u5728-transform-\u65F6\u7236\u5143\u7D20\u7684-border-radius-overflow-hidden-\u4E0D\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#\u5B50\u5143\u7D20\u4E0A\u5B58\u5728-transform-\u65F6\u7236\u5143\u7D20\u7684-border-radius-overflow-hidden-\u4E0D\u751F\u6548" aria-hidden="true">#</a> \u5B50\u5143\u7D20\u4E0A\u5B58\u5728 transform \u65F6\u7236\u5143\u7D20\u7684 border-radius + overflow: hidden \u4E0D\u751F\u6548</h3>', 8);
const _hoisted_32 = {
  href: "https://bugs.webkit.org/show_bug.cgi?id=98538",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_33 = /* @__PURE__ */ createTextVNode("WebKit Bugzilla - overflow: hidden + border radius does not work when transform is added to child");
const _hoisted_34 = {
  href: "https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_35 = /* @__PURE__ */ createTextVNode("Stack Overflow - Overflow: hidden with border radius not working on Safari");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u8F93\u5165\u6846\u5149\u6807\u95EE\u9898" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#active-\u4E0D\u751F\u6548" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#ios-10-\u4E0A-flex-item-\u5143\u7D20\u7684\u5B50\u5143\u7D20\u7684-height-100-\u672A\u751F\u6548" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#ios-uiwebview-\u91CC\u6EDA\u52A8\u9875\u9762\u5BFC\u81F4\u8BA1\u65F6\u5668\u505C\u6B62" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#webkit" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5B50\u5143\u7D20\u4E0A\u5B58\u5728-transform-\u65F6\u7236\u5143\u7D20\u7684-border-radius-overflow-hidden-\u4E0D\u751F\u6548" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_9,
    createBaseVNode("p", null, [
      _hoisted_21,
      createBaseVNode("a", _hoisted_22, [
        _hoisted_23,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_24,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_32, [
          _hoisted_33,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_34, [
          _hoisted_35,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
