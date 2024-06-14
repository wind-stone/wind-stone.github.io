import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "uni-app",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#uni-app",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" uni-app")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("uni-app \u5B66\u4E60\u8BB0\u5F55");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u4E3A\u4EC0\u4E48\u5728 uni-app \u7684\u9879\u76EE\u91CC\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 HTML \u6807\u7B7E");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E0E uni-app \u91CC\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u7684\u5BF9\u8C61\u5173\u7CFB");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("App \u7EA7");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Page\u3001Component \u7EA7");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Page");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("uni-app \u4E4B Webpack \u6253\u5305");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u8E29\u8FC7\u7684\u5751");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u7236\u5B50\u7EC4\u4EF6\u9500\u6BC1\u987A\u5E8F");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u5217\u8868\u5FAA\u73AF\u91CC\u7684 key \u4E0D\u751F\u6548");
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<h2 id="uni-app-\u5B66\u4E60\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#uni-app-\u5B66\u4E60\u8BB0\u5F55" aria-hidden="true">#</a> uni-app \u5B66\u4E60\u8BB0\u5F55</h2><p>PS: \u672C\u4EBA\u719F\u6089 h5 \u548C Vue.js \u5F00\u53D1\uFF0C\u4E0D\u719F\u6089\u5C0F\u7A0B\u5E8F\u548C uni-app \u5F00\u53D1\uFF0C\u56E0\u6B64\u5982\u4E0B\u7684\u8BB0\u5F55</p><h3 id="\u4E3A\u4EC0\u4E48\u5728-uni-app-\u7684\u9879\u76EE\u91CC\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528-html-\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u5728-uni-app-\u7684\u9879\u76EE\u91CC\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528-html-\u6807\u7B7E" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u5728 uni-app \u7684\u9879\u76EE\u91CC\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 HTML \u6807\u7B7E</h3><p>\u51FA\u4E8E\u964D\u4F4E h5 \u5E94\u7528\u5411 uni-app \u8FC1\u79FB\u6210\u672C\u7684\u8003\u8651\uFF0C\u5199\u6210<code>div</code>\u3001<code>span</code>\u4E5F\u53EF\u4EE5\u8FD0\u884C\u5728 app \u548C\u5C0F\u7A0B\u5E8F\u4E0A\uFF0C\u56E0\u4E3A uni-app \u7F16\u8BD1\u5668\u4F1A\u5728\u7F16\u8BD1\u65F6\u4F1A\u628A\u8FD9\u4E9B HTML \u6807\u7B7E\u7F16\u8BD1\u4E3A\u5C0F\u7A0B\u5E8F\u6807\u7B7E\u3002\u4F46\u4E0D\u63A8\u8350\u8FD9\u79CD\u7528\u6CD5\uFF0C\u56E0\u4E3A\u8FD9\u6837\u8C03\u8BD5 H5 \u7AEF\u65F6\u5BB9\u6613\u6DF7\u4E71\u3002\u6B64\u5916\uFF0C\u4ECD\u7136\u5EFA\u8BAE\u517B\u6210\u65B0\u4E60\u60EF\uFF0C\u4F7F\u7528 uni-app \u7684\u6807\u7B7E\u3002</p><table><thead><tr><th>HTML \u6807\u7B7E</th><th>uni-app \u6807\u7B7E</th><th>\u8F6C\u6362\u8BF4\u660E</th></tr></thead><tbody><tr><td>div/ul/li</td><td>view</td><td>-</td></tr><tr><td>span/font</td><td>text</td><td>-</td></tr><tr><td>a</td><td>navigator</td><td>-</td></tr><tr><td>img</td><td>image</td><td>-</td></tr><tr><td>select</td><td>picker</td><td>-</td></tr><tr><td>iframe</td><td>web-view</td><td>-</td></tr><tr><td>input</td><td>\u6CA1\u53D8\u5316</td><td>type \u5C5E\u6027\u6539\u6210\u4E86 confirmtype</td></tr><tr><td>audio</td><td>\u6CA1\u53D8\u5316</td><td>\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u6539\u6210 API \u65B9\u5F0F</td></tr><tr><td>form/button/checkbox/radio/label/textarea/canvas/video</td><td>\u6CA1\u53D8\u5316</td><td>-</td></tr></tbody></table>', 5);
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u53C2\u8003: ");
const _hoisted_19 = {
  href: "https://ask.dcloud.net.cn/article/id-35657",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createTextVNode("\u767D\u8BDDuni-app \u3010\u4E5F\u662Fhtml\u3001vue\u3001\u5C0F\u7A0B\u5E8F\u7684\u533A\u522B\u3011");
const _hoisted_21 = /* @__PURE__ */ createStaticVNode('<h3 id="\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E0E-uni-app-\u91CC\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u7684\u5BF9\u8C61\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E0E-uni-app-\u91CC\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u7684\u5BF9\u8C61\u5173\u7CFB" aria-hidden="true">#</a> \u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E0E uni-app \u91CC\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u7684\u5BF9\u8C61\u5173\u7CFB</h3><h4 id="app-\u7EA7" tabindex="-1"><a class="header-anchor" href="#app-\u7EA7" aria-hidden="true">#</a> App \u7EA7</h4><p>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F<code>App.onLaunch</code>\u89E6\u53D1\u4E4B\u540E\uFF0C\u5F00\u59CB\u89E6\u53D1 uni-app \u7EC4\u4EF6\u7684<code>mounted</code>\u548C<code>onLaunch</code>\u3002</p><h4 id="page\u3001component-\u7EA7" tabindex="-1"><a class="header-anchor" href="#page\u3001component-\u7EA7" aria-hidden="true">#</a> Page\u3001Component \u7EA7</h4><p>uni-app \u91CC\uFF0C\u4E0D\u7BA1\u662F\u9875\u9762\u5B9E\u4F8B\u8FD8\u662F\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u6700\u7EC8\u90FD\u662F\u4F7F\u7528\u7684\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684 Component \u6784\u9020\u5668\u6765\u521B\u5EFA\u5B9E\u4F8B\u7684\u3002</p><p>\u4F20\u7ED9\u6784\u9020\u5668\u7684<code>PageOrComponentOptions</code>\u9009\u9879\u7684\u5982\u4E0B\u751F\u547D\u5468\u671F\u88AB\u8C03\u7528\u65F6\uFF0C\u4F1A\u89E6\u53D1<code>$vm</code>\u4E0A\u5BF9\u5E94\u7684\u94A9\u5B50\u548C\u64CD\u4F5C\u3002</p><ul><li><p>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<code>PageOrComponentOptions.lifetimes.attached</code>\u91CC\u65F6\u4F1A\u521D\u59CB\u5316\u521B\u5EFA\u8BE5\u7EC4\u4EF6\u5BF9\u5E94\u7684 Vue \u5B9E\u4F8B<code>$vm</code>\uFF0C\u968F\u4E4B\u8C03\u7528<code>$vm.$mount()</code>\u65B9\u6CD5\u3002</p></li><li><p>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<code>PageOrComponentOptions.lifetimes.ready</code>\u91CC\u89E6\u53D1<code>$vm.mounted</code>\u548C<code>$vm.onReady</code>\u94A9\u5B50\u3002</p></li><li><p>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<code>PageOrComponentOptions.lifetimes.detached</code>\u91CC\u8C03\u7528<code>$vm.$destroy()</code>\u65B9\u6CD5\u3002</p></li><li><p>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<code>PageOrComponentOptions.pageLifetimes.show</code>\u91CC\u89E6\u53D1<code>$vm.onPageShow</code>\u94A9\u5B50\u3002</p></li><li><p>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<code>PageOrComponentOptions.pageLifetimes.hide</code>\u91CC\u89E6\u53D1<code>$vm.onPageHide</code>\u94A9\u5B50\u3002</p></li><li><p>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<code>PageOrComponentOptions.pageLifetimes.resize</code>\u91CC\u89E6\u53D1<code>$vm.onPageResize</code>\u94A9\u5B50\u3002</p></li></ul><h5 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> Page</h5><p>\u9488\u5BF9\u9875\u9762\u7EC4\u4EF6\uFF0C\u5728 uni-app \u91CC\u6700\u7EC8\u4E5F\u662F\u4F7F\u7528\u539F\u751F\u5C0F\u7A0B\u5E8F\u7684 Component \u6784\u9020\u5668\u6765\u521B\u5EFA\u9875\u9762\u5B9E\u4F8B\u7684\u3002</p><p>\u4E14\u9875\u9762\u5B9E\u4F8B\u7684\u751F\u547D\u5468\u671F\u89E6\u53D1\u65F6\uFF0C\u4F1A\u8C03\u7528<code>PageOptions.methods.xxx</code>\u65B9\u6CD5\uFF0C\u8FDB\u800C\u8C03\u7528\u4E86\u9875\u9762\u5B9E\u4F8B\u5BF9\u5E94\u7684 Vue \u5B9E\u4F8B\u7684<code>$vm.xxx</code>\u94A9\u5B50\u3002\u5177\u4F53\u7684\u94A9\u5B50\u5982\u4E0B\uFF1A</p><ul><li>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<code>PageOptions.methods.onShow</code>\u91CC\u89E6\u53D1<code>$vm.onShow</code></li><li>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<code>PageOptions.methods.onLoad</code>\u91CC\u89E6\u53D1<code>$vm.onLoad</code></li><li>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<code>PageOptions.methods.onHide</code>\u91CC\u89E6\u53D1<code>$vm.onHide</code></li><li>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<code>PageOptions.methods.onUnload</code>\u91CC\u89E6\u53D1<code>$vm.onUnload</code></li><li>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<code>PageOptions.methods.onPullDownRefresh</code>\u91CC\u89E6\u53D1<code>$vm.onPullDownRefresh</code></li><li>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<code>PageOptions.methods.onReachBottom</code>\u91CC\u89E6\u53D1<code>$vm.onReachBottom</code></li><li>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<code>PageOptions.methods.onShareAppMessage</code>\u91CC\u89E6\u53D1<code>$vm.onShareAppMessage</code></li><li>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<code>PageOptions.methods.onShareTimeline</code>\u91CC\u89E6\u53D1<code>$vm.onShareTimeline</code></li><li>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<code>PageOptions.methods.onPageScroll</code>\u91CC\u89E6\u53D1<code>$vm.onPageScroll</code></li><li>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<code>PageOptions.methods.onResize</code>\u91CC\u89E6\u53D1<code>$vm.onResize</code></li><li>\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684<code>PageOptions.methods.onTabItemTap</code>\u91CC\u89E6\u53D1<code>$vm.onTabItemTap</code></li></ul>', 11);
const _hoisted_32 = /* @__PURE__ */ createTextVNode("PS: \u5B9E\u9645\u4E0A\uFF0C\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u91CC\uFF0CPage \u6784\u9020\u5668\u662F Component \u6784\u9020\u5668\u7684\u7B80\u5316\u7248\u672C\u3002\uFF08\u5FAE\u4FE1\u5B98\u65B9\u6587\u6863\u6CA1\u6709\u660E\u786E\u8FD9\u4E48\u8BF4\uFF0C\u4F46\u662F\u5B98\u65B9\u6280\u672F\u4E13\u5458\u5728");
const _hoisted_33 = {
  href: "https://developers.weixin.qq.com/community/develop/doc/000e48667d80001b7ebad1c0d56c00?highLine=component%2520%25E6%259E%2584%25E5%25BB%25BA%25E9%25A1%25B5%25E9%259D%25A2",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_34 = /* @__PURE__ */ createTextVNode("\u56DE\u7B54\u95EE\u9898\u65F6\u6709\u63D0\u5230");
const _hoisted_35 = /* @__PURE__ */ createTextVNode("\uFF0C\u5728\u4E00\u7BC7");
const _hoisted_36 = {
  href: "https://developers.weixin.qq.com/community/develop/article/doc/0000a8d54acaf0c962e820a1a5e413",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_37 = /* @__PURE__ */ createTextVNode("\u5B98\u65B9\u7684\u6280\u672F\u6587\u7AE0");
const _hoisted_38 = /* @__PURE__ */ createTextVNode("\u91CC\u4E5F\u6709\u63D0\u5230\uFF09");
const _hoisted_39 = /* @__PURE__ */ createStaticVNode('<h3 id="uni-app-\u4E4B-webpack-\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#uni-app-\u4E4B-webpack-\u6253\u5305" aria-hidden="true">#</a> uni-app \u4E4B Webpack \u6253\u5305</h3><p>Webpack \u6253\u5305 uni-app \u4EE3\u7801\u65F6\uFF0C\u4F1A\u5C06\u9875\u9762\u7EC4\u4EF6\u4F5C\u4E3A\u4E00\u4E2A<code>entry chunk</code>\uFF0C\u52A0\u8F7D<code>entry chunk</code>\u4E4B\u540E\u4F1A\u7ACB\u5373\u6267\u884C\u5165\u53E3<code>module</code>\uFF1B\u9875\u9762\u7EC4\u4EF6\u91CC\u5F15\u7528\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F1A\u4F5C\u4E3A\u5F02\u6B65<code>chunk</code>\uFF1B\u4E14\u4E0D\u7BA1\u662F\u9875\u9762\u7EC4\u4EF6\u7684<code>entry chunk</code>\u8FD8\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u5F02\u6B65<code>chunk</code>\uFF0C\u90FD\u4F1A\u4E3A<code>chunk</code>\u751F\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\uFF0C\u5373\u4E0E<code>comp.wxss</code>\u3001<code>comp.json</code>\u3001<code>comp.wxml</code>\u5E73\u7EA7\u7684<code>comp.js</code>\u6587\u4EF6\u3002</p><p>\u5E38\u89C4\u60C5\u51B5\u4E0B\uFF0CWebpack \u4EA7\u751F\u7684\u5F02\u6B65<code>chunk</code>\u53EA\u662F\u5C06<code>chunk</code>\u548C<code>module</code>\u6DFB\u52A0\u5230\u5168\u5C40\uFF0C\u4F46\u662F\u4E0D\u4F1A\u7ACB\u5373\u8C03\u7528\u5176\u4E2D\u7684<code>module</code>\uFF0C\u800C\u662F\u7B49\u5F85\u5916\u90E8\u4E3B\u52A8\u8C03\u7528\u3002</p><p>\u4F46\u662F\uFF0C\u5C0F\u7A0B\u5E8F\u91CC\u52A0\u8F7D\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684<code>comp.js</code>\u6587\u4EF6\u540E\uFF0C\u662F\u9700\u8981\u7ACB\u5373\u6267\u884C<code>Component(options)</code>\u4E4B\u7C7B\u7684\u4EE3\u7801\u6765\u521D\u59CB\u5316\u7EC4\u4EF6\u7684\u3002\u56E0\u6B64\uFF0Cuni-app \u5728\u6253\u5305\u65F6\uFF0C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5BF9\u5E94\u7684\u5F02\u6B65<code>chunk</code>\u91CC\u6DFB\u52A0\u4E00\u6BB5\u81EA\u6267\u884C\u7684\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// comp.js</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../../../../common/vendor.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// \u7EC4\u4EF6\u7684\u5F02\u6B65 chunk</span>\n<span class="token punctuation">(</span>global<span class="token punctuation">.</span>webpackJsonp <span class="token operator">=</span> global<span class="token punctuation">.</span>webpackJsonp <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">&#39;pages/comp/comp/index&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n        <span class="token string">&#39;7dd2&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> n<span class="token punctuation">,</span> a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token string">&#39;9c1f&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> n<span class="token punctuation">,</span> a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>\n            a<span class="token punctuation">.</span><span class="token function">r</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">var</span> t <span class="token operator">=</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token string">&#39;41fe&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                o <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token string">&#39;a100&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token string">&#39;f0c5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                p <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">(</span>\n                    t<span class="token punctuation">.</span>a<span class="token punctuation">,</span>\n                    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        <span class="token keyword">var</span> e <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$createElement<span class="token punctuation">;</span>\n                        <span class="token keyword">this</span><span class="token punctuation">.</span>_self<span class="token punctuation">.</span>_c<span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                    <span class="token operator">!</span><span class="token number">1</span><span class="token punctuation">,</span>\n                    <span class="token keyword">null</span><span class="token punctuation">,</span>\n                    <span class="token string">&#39;74eb&#39;</span><span class="token punctuation">,</span>\n                    <span class="token keyword">null</span><span class="token punctuation">,</span>\n                    <span class="token operator">!</span><span class="token number">1</span><span class="token punctuation">,</span>\n                    <span class="token keyword">undefined</span><span class="token punctuation">,</span>\n                    <span class="token keyword">undefined</span>\n                <span class="token punctuation">)</span><span class="token punctuation">;</span>\n            n<span class="token punctuation">.</span>default <span class="token operator">=</span> p<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token function-variable function">a100</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> n<span class="token punctuation">,</span> a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>\n            <span class="token keyword">var</span> t <span class="token operator">=</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token string">&#39;7dd2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            a<span class="token punctuation">.</span><span class="token function">n</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">.</span>a<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// \u8FD9\u6BB5\u662F\u9488\u5BF9\u5C0F\u7A0B\u5E8F\u589E\u52A0\u7684\u81EA\u6267\u884C\u7684\u4EE3\u7801\uFF0C\u5B9E\u73B0\u7684\u6E90\u7801\u53EF\u53C2\u8003\uFF1Ahttps://github.com/dcloudio/uni-app/blob/f3b901ce37bcb3977efc3c3f04956cce80824f66/packages/webpack-uni-mp-loader/lib/plugin/generate-component.js#L111</span>\n<span class="token punctuation">(</span>global<span class="token punctuation">[</span><span class="token string">&#39;webpackJsonp&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> global<span class="token punctuation">[</span><span class="token string">&#39;webpackJsonp&#39;</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">&#39;145&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n        <span class="token function-variable function">a145</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> __webpack_require__</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token string">&#39;543d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;createComponent&#39;</span><span class="token punctuation">]</span><span class="token punctuation">(</span>\n                <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token string">&#39;9c1f&#39;</span><span class="token punctuation">)</span>\n            <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// \u533A\u522B\u5728\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u8BDD\uFF0C\u4F1A\u7ACB\u5373\u6267\u884C module</span>\n    <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;a145&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h2 id="\u8E29\u8FC7\u7684\u5751" tabindex="-1"><a class="header-anchor" href="#\u8E29\u8FC7\u7684\u5751" aria-hidden="true">#</a> \u8E29\u8FC7\u7684\u5751</h2><h3 id="\u7236\u5B50\u7EC4\u4EF6\u9500\u6BC1\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u7236\u5B50\u7EC4\u4EF6\u9500\u6BC1\u987A\u5E8F" aria-hidden="true">#</a> \u7236\u5B50\u7EC4\u4EF6\u9500\u6BC1\u987A\u5E8F</h3><p>\u5728 Vue \u91CC\uFF0C\u7236\u5B50\u7EC4\u4EF6\u7684\u9500\u6BC1\u987A\u5E8F\u662F\uFF1A</p><p>\u7236\u7EC4\u4EF6 beforeDestroy -&gt; \u5B50\u7EC4\u4EF6 beforeDestroy -&gt; \u5B50\u7EC4\u4EF6 destroyed -&gt; \u7236\u7EC4\u4EF6 destroyed</p><p>\u4F46\u662F\uFF0C\u7ECF\u8FC7\u6D4B\u8BD5<code>uni-app</code>\u91CC\u7EC4\u4EF6\u7684\u9500\u6BC1\u987A\u5E8F\u5982\u4E0B\uFF1A</p><p>\u5B50\u7EC4\u4EF6 beforeDestroy -&gt; \u5B50\u7EC4\u4EF6 destroyed -&gt; \u7236\u7EC4\u4EF6 beforeDestroy -&gt; \u7236\u7EC4\u4EF6 destroyed</p><p>\u731C\u6D4B\uFF1A\u5C0F\u7A0B\u5E8F\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u91CC\uFF0C\u4E0E\u7EC4\u4EF6\u9500\u6BC1\u76F8\u5173\u7684\u94A9\u5B50\u53EA\u6709<code>detached</code>\uFF0C\u53EF\u80FD\u662F\u8FD9\u4E2A\u539F\u56E0\u5BFC\u81F4\u7684\u3002</p><p>\u82E5\u662F\u5B50\u7EC4\u4EF6\u5148<code>detached</code>\u3001\u7236\u7EC4\u4EF6\u540E<code>detached</code>\uFF0C\u56E0\u6B64\u6CA1\u529E\u6CD5\u505A\u5230\u8DDF Vue \u4E00\u6837\u7684\u9500\u6BC1\u987A\u5E8F\uFF1F</p><h3 id="\u5217\u8868\u5FAA\u73AF\u91CC\u7684-key-\u4E0D\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#\u5217\u8868\u5FAA\u73AF\u91CC\u7684-key-\u4E0D\u751F\u6548" aria-hidden="true">#</a> \u5217\u8868\u5FAA\u73AF\u91CC\u7684 key \u4E0D\u751F\u6548</h3>', 14);
const _hoisted_53 = /* @__PURE__ */ createTextVNode("\u5217\u8868\u5FAA\u73AF\u91CC\u7684 key \u4E0D\u751F\u6548");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#uni-app-\u5B66\u4E60\u8BB0\u5F55" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4E3A\u4EC0\u4E48\u5728-uni-app-\u7684\u9879\u76EE\u91CC\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528-html-\u6807\u7B7E" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u539F\u751F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E0E-uni-app-\u91CC\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u7684\u5BF9\u8C61\u5173\u7CFB" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#app-\u7EA7" }, {
                    default: withCtx(() => [
                      _hoisted_6
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#page\u3001component-\u7EA7" }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  }),
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createVNode(_component_RouterLink, { to: "#page" }, {
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
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#uni-app-\u4E4B-webpack-\u6253\u5305" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u8E29\u8FC7\u7684\u5751" }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u7236\u5B50\u7EC4\u4EF6\u9500\u6BC1\u987A\u5E8F" }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5217\u8868\u5FAA\u73AF\u91CC\u7684-key-\u4E0D\u751F\u6548" }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_13,
    createBaseVNode("p", null, [
      _hoisted_18,
      createBaseVNode("a", _hoisted_19, [
        _hoisted_20,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_21,
    createBaseVNode("p", null, [
      _hoisted_32,
      createBaseVNode("a", _hoisted_33, [
        _hoisted_34,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_35,
      createBaseVNode("a", _hoisted_36, [
        _hoisted_37,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_38
    ]),
    _hoisted_39,
    createBaseVNode("p", null, [
      createVNode(_component_RouterLink, { to: "/mini-program/uni-app/v-for-key.html" }, {
        default: withCtx(() => [
          _hoisted_53
        ]),
        _: 1
      })
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
