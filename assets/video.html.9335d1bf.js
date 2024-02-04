import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "video-\u517C\u5BB9\u6027",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#video-\u517C\u5BB9\u6027",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" video \u517C\u5BB9\u6027")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u5C5E\u6027");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u4E8B\u4EF6");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u67E5\u8BE2\u89C6\u9891\u7684\u7F13\u51B2\u65F6\u95F4");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u517C\u5BB9\u6027\u95EE\u9898\u6C47\u603B");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u53C2\u8003\u94FE\u63A5");
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u5C5E\u6027",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5C5E\u6027",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5C5E\u6027")
], -1);
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u66F4\u591A\u8BE6\u60C5\u8BF7\u89C1");
const _hoisted_10 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createTextVNode("MDN - video \u5143\u7D20");
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;video\n  src=&quot;video.mp4&quot;\n  muted\n  controls\n  autoplay\n  poster=&quot;images.jpg&quot; /*\u89C6\u9891\u5C01\u9762*/\n  preload=&quot;auto&quot;\n\n  webkit-playsinline\n  playsinline\n\n  x-webkit-airplay=&quot;allow&quot;\n\n  x5-video-player-type=&quot;h5&quot;\n  x5-video-orientation=&quot;portraint&quot;\n  x5-video-player-fullscreen=&quot;true&quot;\n\n  style=&quot;object-fit:fill&quot;&gt;\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>', 1);
const _hoisted_13 = /* @__PURE__ */ createStaticVNode("<li><code>src</code>\uFF1A\u89C6\u9891\u7684\u5730\u5740</li><li><code>muted</code>\uFF1A\u5E03\u5C14\u7279\u6027\uFF0C\u8BBE\u7F6E\u8BE5\u5C5E\u6027\uFF0C\u5219\u89C6\u9891\u7684\u97F3\u9891\u8F93\u51FA\u4F1A\u88AB\u9759\u97F3</li><li><code>controls</code>\uFF1A\u5E03\u5C14\u7279\u6027\uFF0C\u52A0\u4E0A\u8FD9\u4E2A\u5C5E\u6027\uFF0CGecko \u4F1A\u63D0\u4F9B\u7528\u6237\u63A7\u5236\uFF0C\u5141\u8BB8\u7528\u6237\u63A7\u5236\u89C6\u9891\u7684\u64AD\u653E\uFF0C\u5305\u62EC\u97F3\u91CF\uFF0C\u8DE8\u5E27\uFF0C\u6682\u505C/\u6062\u590D\u64AD\u653E</li><li><code>autoplay</code>\uFF1A\u5E03\u5C14\u7279\u6027\uFF0C\u89C6\u9891\u81EA\u52A8\u64AD\u653E</li><li><code>poster</code>\uFF1A\u5C5E\u6027\u89C4\u5B9A\u89C6\u9891\u4E0B\u8F7D\u65F6\u663E\u793A\u7684\u56FE\u50CF\uFF0C\u6216\u8005\u5728\u7528\u6237\u70B9\u51FB\u64AD\u653E\u6309\u94AE\u524D\u663E\u793A\u7684\u56FE\u50CF\u3002\u5982\u679C\u672A\u8BBE\u7F6E\u8BE5\u5C5E\u6027\uFF0C\u5219\u4F7F\u7528\u89C6\u9891\u7684\u7B2C\u4E00\u5E27\u6765\u4EE3\u66FF\u3002</li><li><code>preload</code>\uFF1A\u8BE5\u5C5E\u6027\u89C4\u5B9A\u5728\u9875\u9762\u52A0\u8F7D\u540E\u8F7D\u5165\u89C6\u9891\u3002\u5982\u679C\u8BBE\u7F6E\u4E86<code>autoplay</code>\u5C5E\u6027\uFF0C\u5219\u5FFD\u7565\u8BE5\u5C5E\u6027\u3002\u53EF\u9009\u7684\u503C\u6709\uFF1A <ul><li>auto\uFF1A\u5F53\u9875\u9762\u52A0\u8F7D\u540E\u8F7D\u5165\u6574\u4E2A\u89C6\u9891</li><li>meta\uFF1A\u5F53\u9875\u9762\u52A0\u8F7D\u540E\u53EA\u8F7D\u5165\u5143\u6570\u636E</li><li>none\uFF1A\u5F53\u9875\u9762\u52A0\u8F7D\u540E\u4E0D\u8F7D\u5165\u89C6\u9891</li></ul></li>", 6);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("code", null, "playsinline", -1);
const _hoisted_20 = /* @__PURE__ */ createTextVNode("/");
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("code", null, "webkit-playsinline", -1);
const _hoisted_22 = /* @__PURE__ */ createTextVNode("\uFF1A\u5E03\u5C14\u7279\u6027\uFF0CiOS only ");
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("\u8BBE\u7F6E\u8BE5\u5C5E\u6027\uFF0C\u53EF\u4EE5\u8BA9\u89C6\u9891\u5728"),
  /* @__PURE__ */ createBaseVNode("code", null, "video"),
  /* @__PURE__ */ createTextVNode("\u5143\u7D20\u6240\u5728\u533A\u57DF\u5185\u64AD\u653E\uFF0C\u800C\u4E0D\u662F\u5168\u5C4F\u64AD\u653E\u3002")
], -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("li", null, "\u82E5\u4E0D\u8BBE\u7F6E\u8BE5\u5C5E\u6027\uFF0CiOS \u4E0A\u4F1A\u5F39\u51FA\u5168\u5C4F\u64AD\u653E\uFF0C\u5E76\u643A\u5E26\u64AD\u653E\u63A7\u4EF6\uFF08\u53EF\u4EE5\u64AD\u653E\u3001\u6682\u505C\u3001\u5FEB\u8FDB\u3001\u5FEB\u9000\u3001\u62D6\u52A8\u64AD\u653E\u8FDB\u5EA6\u7B49\uFF0C\u6548\u679C\u56FE\u53EF\u53C2\u89C1\u5F15\u7528\u91CC\u7684\u7B2C\u4E00\u7BC7\u6587\u7AE0\uFF09", -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("\u8BE5\u5C5E\u6027\u8F83\u4E3A\u7279\u522B\uFF0C\u9700\u8981\u5D4C\u5165\u7F51\u9875\u7684APP \u6BD4\u5982 WeChat \u4E2D\u7684 UIwebview \u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "allowsInlineMediaPlayback"),
  /* @__PURE__ */ createTextVNode(" = YES\uFF0C\u624D\u80FD\u751F\u6548\uFF1B\u5982\u679C APP \u7684 UIwebview \u4E0D\u8BBE\u7F6E\uFF0C\u5373\u4F7F\u5728\u9875\u9762\u91CC\u7684"),
  /* @__PURE__ */ createBaseVNode("code", null, "video"),
  /* @__PURE__ */ createTextVNode("\u6807\u7B7E\u52A0\u4E86\u8BE5\u7279\u6027\u4E5F\u65E0\u6548\u3002")
], -1);
const _hoisted_26 = /* @__PURE__ */ createTextVNode("\u8BE5\u7279\u6027\u4EC5\u5BF9 iOS \u6709\u6548\uFF0CiOS 10 \u4E4B\u524D\u9700\u8981\u4F7F\u7528\u5E26\u524D\u7F00\u7684\u7248\u672C");
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("code", null, "webkit-playsinline", -1);
const _hoisted_28 = /* @__PURE__ */ createTextVNode("\uFF0CiOS 10 \u4E4B\u540E\u53EF\u4EE5\u53BB\u6389\u524D\u7F00\uFF0C\u76F4\u63A5\u4F7F\u7528");
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("code", null, "playsinline", -1);
const _hoisted_30 = /* @__PURE__ */ createTextVNode("\uFF0C\u4E3A\u4E86\u517C\u5BB9\u65B0\u8001\u7248\u672C\uFF0C\u4E00\u822C\u8FD9\u4E24\u4E2A\u90FD\u4F1A\u4F7F\u7528\uFF08");
const _hoisted_31 = {
  href: "https://webkit.org/blog/6784/new-video-policies-for-ios/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_32 = /* @__PURE__ */ createTextVNode("New video Policies for iOS");
const _hoisted_33 = /* @__PURE__ */ createTextVNode("\uFF09");
const _hoisted_34 = /* @__PURE__ */ createStaticVNode("<li><code>x5-video-player-type</code>\uFF1AWeChat \u5B89\u5353\u7248\u7279\u6709\u7684\u5C5E\u6027 <ul><li>\u7279\u6027\u503C\u4E3A&quot;h5&quot;\uFF0C\u610F\u4E3A\u5F00\u542F H5 \u540C\u5C42\u64AD\u653E\uFF0C\u5C31\u662F\u5728\u89C6\u9891\u5168\u5C4F\u7684\u65F6\u5019\uFF0C<code>div</code>\u7B49\u5143\u7D20\u53EF\u4EE5\u5448\u73B0\u5728\u89C6\u9891\u5C42\u4E0A\u3002\u540C\u5C42\u64AD\u653E\u522B\u540D\u4E5F\u53EB\u505A\u6C89\u6D78\u5F0F\u64AD\u653E\uFF0C\u64AD\u653E\u7684\u65F6\u5019\u770B\u4F3C\u5168\u5C4F\uFF0C\u4F46\u662F\u5DF2\u7ECF\u9664\u53BB\u4E86<code>control</code>\u548C\u5FAE\u4FE1\u7684\u5BFC\u822A\u680F\uFF0C\u53EA\u7559\u4E0B<code>X</code>\u548C<code>&lt;</code>\u4E24\u952E\u3002\u76EE\u524D\u7684\u540C\u5C42\u64AD\u653E\u5668\u53EA\u5728 Android\uFF08\u5305\u62EC\u5FAE\u4FE1\uFF09\u4E0A\u751F\u6548\uFF0C\u6682\u65F6\u4E0D\u652F\u6301 iOS\u3002</li><li>\u80CC\u666F\uFF1A\u4EE5\u524D\u64AD\u653E\u89C6\u9891\uFF0C<code>video</code>\u5143\u7D20\u662F\u9876\u5C42\u7684\uFF0C\u4EFB\u4F55\u5143\u7D20\u4E0D\u80FD\u60AC\u6D6E\u4E8E<code>video</code>\u5143\u7D20\u4E4B\u4E0A</li><li>\u7B14\u8005\u60F3\u8FC7\u4E3A\u4EC0\u4E48\u540C\u5C42\u64AD\u653E\u53EA\u5BF9\u5B89\u5353\u5F00\u653E\uFF0C\u56E0\u4E3A\u5B89\u5353\u4E0D\u80FD\u50CFISO\u4E00\u6837\u5C40\u57DF\u64AD\u653E\uFF0C\u9ED8\u8BA4\u7684\u5168\u5C4F\u4F1A\u4F7F\u5F97\u4E00\u4E9B\u754C\u9762\u64CD\u4F5C\u88AB\u963B\u62E6\uFF0C\u5982\u679C\u662F\u5168\u5C4FH5\u8FD8\u597D\uFF0C\u4F46\u662F\u505A\u76F4\u64AD\u7684\u8BDD\uFF0C\u8BF8\u5982\u5F39\u5E55\u90A3\u6837\u7684\u529F\u80FD\u5C31\u65E0\u6CD5\u5B9E\u73B0\u4E86\uFF0C\u6240\u4EE5\u8FD9\u65F6\u5019\u540C\u5C42\u64AD\u653E\u7684\u6982\u5FF5\u5C31\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898\u3002\u4E0D\u8FC7\u7B14\u8005\u5728\u6D4B\u8BD5\u7684\u8FC7\u7A0B\u4E2D\u53D1\u73B0\uFF0C\u4E0D\u540C\u7248\u672C\u7684ISO\u548C\u5B89\u5353\u6548\u679C\u7565\u6709\u4E0D\u540C\u3002</li></ul></li><li><code>x5-video-player-fullscreen</code>\uFF1A <ul><li>\u89C6\u9891\u64AD\u653E\u65F6\u5C06\u4F1A\u8FDB\u5165\u5230\u5168\u5C4F\u6A21\u5F0F\uFF0C\u5982\u679C\u4E0D\u7533\u660E\u6B64\u5C5E\u6027\uFF0C\u9875\u9762\u5F97\u5230\u89C6\u53E3\u533A\u57DF\u4E3A\u539F\u59CB\u89C6\u53E3\u5927\u5C0F(\u89C6\u9891\u672A\u64AD\u653E\u524D)\uFF0C\u6BD4\u5982\u5728\u5FAE\u4FE1\u91CC\uFF0C\u4F1A\u6709\u4E00\u4E2A\u5E38\u9A7B\u7684\u6807\u9898\u680F\uFF0C\u5982\u679C\u4E0D\u58F0\u660E\u6B64\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u6807\u9898\u680F\u9AD8\u5EA6\u4E0D\u4F1A\u7ED9\u9875\u9762\uFF0C\u64AD\u653E\u65F6\u4F1A\u5E73\u5747\u5206\u4E3A\u4E24\u5757\uFF08\u4E0A\u4E0B\u9ED1\u5757\uFF09</li><li>\u6CE8\uFF1A \u58F0\u660E\u6B64\u5C5E\u6027\uFF0C\u9700\u8981\u9875\u9762\u81EA\u5DF1\u91CD\u65B0\u9002\u914D\u65B0\u7684\u89C6\u53E3\u5927\u5C0F\u53D8\u5316\u3002\u53EF\u4EE5\u901A\u8FC7\u76D1\u542Cresize \u4E8B\u4EF6\u6765\u5B9E\u73B0</li></ul></li>", 2);
const _hoisted_36 = /* @__PURE__ */ createStaticVNode('<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test_video<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span> <span class="token attr-name">x5-video-player-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">x5-video-player-fullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  test_video<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span>\n  test_video<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><code>x5-video-orientation</code>\uFF1A <ul><li>\u58F0\u660E\u64AD\u653E\u5668\u652F\u6301\u7684\u65B9\u5411\uFF0C\u53EF\u9009\u503C<code>landscape</code>\u6A2A\u5C4F,<code>portraint</code>\u7AD6\u5C4F\u3002\u9ED8\u8BA4\u503C<code>portraint</code></li><li>\u65E0\u8BBA\u662F\u76F4\u64AD\u8FD8\u662F\u5168\u5C4FH5\u4E00\u822C\u90FD\u662F\u7AD6\u5C4F\u64AD\u653E\uFF0C\u4F46\u662F\u8FD9\u4E2A\u5C5E\u6027\u9700\u8981x5-video-player-type\u5F00\u542F H5 \u6A21\u5F0F</li></ul></li></ul><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2>', 4);
const _hoisted_40 = /* @__PURE__ */ createTextVNode("\u8BE6\u7EC6\u7684\u4E8B\u4EF6\u5217\u8868\u53EF\u53C2\u8003");
const _hoisted_41 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Media_events",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_42 = /* @__PURE__ */ createTextVNode("MDN - \u5A92\u4F53\u76F8\u5173\u4E8B\u4EF6");
const _hoisted_43 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_44 = /* @__PURE__ */ createTextVNode("\u4E3B\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6309\u7167\u53C2\u8003\u94FE\u63A5");
const _hoisted_45 = {
  href: "https://github.com/gnipbao/iblog/issues/11",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_46 = /* @__PURE__ */ createTextVNode("\u89C6\u9891H5 video\u6700\u4F73\u5B9E\u8DF5 #11");
const _hoisted_47 = /* @__PURE__ */ createTextVNode("\u91CC\u8BF4\u7684\uFF0C\u5728\u79FB\u52A8\u7AEF\u9664\u4E86");
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("code", null, "ended", -1);
const _hoisted_49 = /* @__PURE__ */ createTextVNode("\u3001");
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("code", null, "timeupdate", -1);
const _hoisted_51 = /* @__PURE__ */ createTextVNode("\u3001");
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("code", null, "event", -1);
const _hoisted_53 = /* @__PURE__ */ createTextVNode("\u4E8B\u4EF6\u4E4B\u5916\uFF0C\u4E0D\u8981\u8F7B\u6613\u4F7F\u7528\u5A92\u4F53\u5143\u7D20\u7684\u5176\u4ED6\u4E8B\u4EF6\u3002");
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u67E5\u8BE2\u89C6\u9891\u7684\u7F13\u51B2\u65F6\u95F4",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u67E5\u8BE2\u89C6\u9891\u7684\u7F13\u51B2\u65F6\u95F4",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u67E5\u8BE2\u89C6\u9891\u7684\u7F13\u51B2\u65F6\u95F4")
], -1);
const _hoisted_55 = /* @__PURE__ */ createTextVNode("\u6709\u65F6\u5019\u4F1A\u9047\u5230\u5BF9");
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("code", null, "video", -1);
const _hoisted_57 = /* @__PURE__ */ createTextVNode("\u6DFB\u52A0\u4E86");
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("code", null, "autoplay", -1);
const _hoisted_59 = /* @__PURE__ */ createTextVNode("\u4F46\u662F\u65E0\u6CD5\u81EA\u52A8\u64AD\u653E\u7684\u60C5\u51B5\uFF0C\u8FD9\u65F6\u5019\u53EF\u4EE5\u67E5\u770B\u4E0B");
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("code", null, "video", -1);
const _hoisted_61 = /* @__PURE__ */ createTextVNode("\u7684\u7F13\u51B2\u65F6\u95F4\u662F\u5426\u8DB3\u591F\u64AD\u653E\uFF0C\u53EF\u4F7F\u7528");
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("code", null, "video", -1);
const _hoisted_63 = /* @__PURE__ */ createTextVNode("\u7684");
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("code", null, "buffered", -1);
const _hoisted_65 = /* @__PURE__ */ createTextVNode("\u5C5E\u6027\u67E5\u770B\uFF0C\u8BE6\u60C5\u53EF\u53C2\u8003");
const _hoisted_66 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_67 = /* @__PURE__ */ createTextVNode("Media buffering, seeking, and time ranges");
const _hoisted_68 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_69 = /* @__PURE__ */ createStaticVNode('<h2 id="\u517C\u5BB9\u6027\u95EE\u9898\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9\u6027\u95EE\u9898\u6C47\u603B" aria-hidden="true">#</a> \u517C\u5BB9\u6027\u95EE\u9898\u6C47\u603B</h2><ul><li>\u534E\u4E3A/Vivo \u7B49\u7CFB\u7EDF\u6D4F\u89C8\u5668 <ul><li>\u5F53<code>video</code>\u5143\u7D20\u8BBE\u7F6E\u4E86<code>object-fit: cover</code>\u540E\uFF0C\u5728<code>video</code>\u6240\u5728\u533A\u57DF\u5185\u64AD\u653E\u65F6\uFF0C\u89C6\u9891\u4F1A\u4F4D\u4E8E\u6700\u9876\u5C42\uFF0C\u8986\u76D6\u5176\u4ED6\u6240\u6709\u4E1C\u897F\u3002</li><li>\u5F53<code>video</code>\u5143\u7D20\u6EDA\u52A8\u5230\u5C4F\u5E55\u4E0A\u65B9\u65F6\uFF0C<code>video</code>\u5BBD\u5EA6\u4F1A\u53D8\u6210\u5C4F\u5E55\u5BBD\u5EA6</li><li>\u64AD\u653E\u63A7\u4EF6\u65E0\u6CD5\u9690\u85CF</li></ul></li><li>Android \u5FAE\u4FE1\u91CC\u4E0D\u80FD\u76D1\u542C<code>ended</code>\u4E8B\u4EF6\u540E\u8C03\u7528<code>video.play()</code>\u8FDB\u884C\u5FAA\u73AF\u64AD\u653E\uFF0C\u9700\u8981\u7ED9<code>video</code>\u5143\u7D20\u6DFB\u52A0<code>loop</code>\u5C5E\u6027</li></ul><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>', 3);
const _hoisted_72 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_73 = /* @__PURE__ */ createTextVNode("MDN - video \u5143\u7D20");
const _hoisted_74 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Media_events",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_75 = /* @__PURE__ */ createTextVNode("MDN - \u5A92\u4F53\u76F8\u5173\u4E8B\u4EF6");
const _hoisted_76 = {
  href: "https://github.com/gnipbao/iblog/issues/11",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_77 = /* @__PURE__ */ createTextVNode("\u89C6\u9891H5 video\u6700\u4F73\u5B9E\u8DF5 #11");
const _hoisted_78 = {
  href: "https://aotu.io/notes/2017/01/11/mobile-video/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_79 = /* @__PURE__ */ createTextVNode("\u89C6\u9891H5\u306EVideo\u6807\u7B7E\u5728\u5FAE\u4FE1\u91CC\u7684\u5751\u548C\u6280\u5DE7");
const _hoisted_80 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_81 = /* @__PURE__ */ createTextVNode("Media buffering, seeking, and time ranges");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5C5E\u6027" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4E8B\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u67E5\u8BE2\u89C6\u9891\u7684\u7F13\u51B2\u65F6\u95F4" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u517C\u5BB9\u6027\u95EE\u9898\u6C47\u603B" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u53C2\u8003\u94FE\u63A5" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_8,
    createBaseVNode("p", null, [
      _hoisted_9,
      createBaseVNode("a", _hoisted_10, [
        _hoisted_11,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_12,
    createBaseVNode("ul", null, [
      _hoisted_13,
      createBaseVNode("li", null, [
        _hoisted_19,
        _hoisted_20,
        _hoisted_21,
        _hoisted_22,
        createBaseVNode("ul", null, [
          _hoisted_23,
          _hoisted_24,
          _hoisted_25,
          createBaseVNode("li", null, [
            _hoisted_26,
            _hoisted_27,
            _hoisted_28,
            _hoisted_29,
            _hoisted_30,
            createBaseVNode("a", _hoisted_31, [
              _hoisted_32,
              createVNode(_component_OutboundLink)
            ]),
            _hoisted_33
          ])
        ])
      ]),
      _hoisted_34
    ]),
    _hoisted_36,
    createBaseVNode("p", null, [
      _hoisted_40,
      createBaseVNode("a", _hoisted_41, [
        _hoisted_42,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_43
    ]),
    createBaseVNode("p", null, [
      _hoisted_44,
      createBaseVNode("a", _hoisted_45, [
        _hoisted_46,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_47,
      _hoisted_48,
      _hoisted_49,
      _hoisted_50,
      _hoisted_51,
      _hoisted_52,
      _hoisted_53
    ]),
    _hoisted_54,
    createBaseVNode("p", null, [
      _hoisted_55,
      _hoisted_56,
      _hoisted_57,
      _hoisted_58,
      _hoisted_59,
      _hoisted_60,
      _hoisted_61,
      _hoisted_62,
      _hoisted_63,
      _hoisted_64,
      _hoisted_65,
      createBaseVNode("a", _hoisted_66, [
        _hoisted_67,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_68
    ]),
    _hoisted_69,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_72, [
          _hoisted_73,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_74, [
          _hoisted_75,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_76, [
          _hoisted_77,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_78, [
          _hoisted_79,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_80, [
          _hoisted_81,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var video_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { video_html as default };
