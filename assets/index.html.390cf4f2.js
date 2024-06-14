import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u5E03\u5C40",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5E03\u5C40",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5E03\u5C40")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u6D41\u7C7B\u578B");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u5782\u76F4\u5C45\u4E2D");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5916\u8FB9\u8DDD\u6298\u53E0");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\u5916\u8FB9\u8DDD\u6298\u53E0");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u6E05\u9664\u6D6E\u52A8");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("shrink-to-fit");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("box");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u5757\u7EA7\u5143\u7D20/\u5757\u7EA7\u76D2");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u5757\u5BB9\u5668\u76D2\uFF08block container box\uFF09");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u5757\u76D2");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u884C\u76D2");
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<h2 id="\u6D41\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7C7B\u578B" aria-hidden="true">#</a> \u6D41\u7C7B\u578B</h2><ul><li><code>normal flow</code>\uFF0C\u5E38\u89C4\u6D41/\u6807\u51C6\u6D41/\u666E\u901A\u6D41\uFF0C\u5305\u542B\uFF1A <ul><li><code>block formatting</code>\uFF0CBFC \u5373\u4E3A<code>block formatting context</code></li><li><code>inline formatting</code>\uFF0CIFC \u5373\u4E3A<code>inline formatting context</code></li><li><code>relative positioning</code></li></ul></li><li><code>floats</code>\uFF0C\u6D6E\u52A8</li><li><code>absolute positioning</code>\uFF0C\u7EDD\u5BF9\u5B9A\u4F4D</li></ul><h2 id="\u5782\u76F4\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5782\u76F4\u5C45\u4E2D" aria-hidden="true">#</a> \u5782\u76F4\u5C45\u4E2D</h2><ul><li>\u7EDD\u5BF9\u5B9A\u4F4D + \u8D1Fmargin\u503C\uFF08\u56FA\u5B9A\u5BBD\u9AD8\u5EA6\uFF09</li><li>\u7EDD\u5BF9\u5B9A\u4F4D + transform: translate\uFF08\u4E0D\u56FA\u5B9A\u5BBD\u9AD8\u5EA6\uFF09</li><li>table-cell\u6CD5\uFF08\u517C\u5BB9\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u6700\u597D\u7684\u65B9\u6CD5\uFF09</li><li>inline-block + \u4F2A\u5143\u7D20</li><li>Flexbox\u6CD5</li></ul>', 4);
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1\uFF1A");
const _hoisted_19 = {
  href: "http://blog.csdn.net/cxl444905143/article/details/41890353",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createTextVNode("\u5143\u7D20\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\u65B9\u6CD5\u96C6\u9526");
const _hoisted_21 = /* @__PURE__ */ createStaticVNode('<h2 id="\u5916\u8FB9\u8DDD\u6298\u53E0" tabindex="-1"><a class="header-anchor" href="#\u5916\u8FB9\u8DDD\u6298\u53E0" aria-hidden="true">#</a> \u5916\u8FB9\u8DDD\u6298\u53E0</h2><h3 id="\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\u5916\u8FB9\u8DDD\u6298\u53E0" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\u5916\u8FB9\u8DDD\u6298\u53E0" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\u5916\u8FB9\u8DDD\u6298\u53E0</h3><p>\u4E3B\u8981\u4E3A\u4E86\u6392\u7248\u7684\u9700\u8981\uFF0C\u56E0\u4E3A\u5728\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u6298\u53E0\u5782\u76F4\u5916\u8FB9\u8DDD\u53EF\u4EE5\u5728\u89C6\u89C9\u4E0A\u663E\u5F97\u66F4\u7F8E\u89C2\uFF0C\u4E5F\u66F4\u8D34\u8FD1\u8BBE\u8BA1\u5E08\u7684\u9884\u671F\u3002</p><h2 id="\u6E05\u9664\u6D6E\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u6D6E\u52A8" aria-hidden="true">#</a> \u6E05\u9664\u6D6E\u52A8</h2><p>\u6D6E\u52A8\u5143\u7D20\u4F1A\u5F71\u54CD\u5B83\u7684\u5144\u5F1F\u5143\u7D20\u7684\u4F4D\u7F6E\u548C\u8BA9\u7236\u5143\u7D20\u4EA7\u751F\u9AD8\u5EA6\u584C\u9677\uFF0C\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u6CD5\u6709</p><ul><li>clear: both\uFF08\u5E94\u7528\u5728\u7A7A div \u5143\u7D20\u6216\u8005\u7236\u5143\u7D20\u7684 after \u4F2A\u7C7B\u4E0A\uFF09</li><li>br \u6807\u7B7E\u7684 clear \u5C5E\u6027<code>&lt;br clear=&quot;all&quot;&gt;</code></li><li>\u6D6E\u52A8\u7236\u5143\u7D20\uFF08\u89E6\u53D1 BFC\uFF09</li><li>overflow: hidden\uFF08\u89E6\u53D1 BFC\uFF09</li><li>display: table \u6216 table-cells\uFF08\u89E6\u53D1 BFC\uFF0Cdisplay:table \u672C\u8EAB\u5E76\u4E0D\u4EA7\u751F BFC\uFF0C\u800C\u662F\u7531\u5B83\u4EA7\u751F\u533F\u540D\u6846\uFF0C\u533F\u540D\u6846\u4E2D\u5305\u542B &quot;display:table-cell&quot; \u7684\u6846\u4F1A\u4EA7 BFC\uFF09</li></ul><h2 id="shrink-to-fit" tabindex="-1"><a class="header-anchor" href="#shrink-to-fit" aria-hidden="true">#</a> shrink-to-fit</h2><p><code>shrink-to-fit</code>\uFF0C\u6307\u7684\u662F\u5757\u7EA7\u5143\u7D20\u53EA\u5360\u636E\u5185\u5BB9\u6240\u9700\u8981\u7684\u5BBD\u5EA6\u3002<code>shrink-to-fit</code>\uFF0C\u5B57\u9762\u610F\u601D\u5C31\u662F\u6536\u7F29\u5305\u56F4\u3002\u4E94\u79CD\u5E38\u89C1\u7684\u4F7F\u5757\u5143\u7D20<code>shrink-to-fit</code>\u7684\u65B9\u5F0F\uFF1A</p><ul><li>\u901A\u8FC7<code>float</code>\u5C5E\u6027</li><li>\u901A\u8FC7<code>display:inline/inline-block</code></li><li>\u901A\u8FC7<code>position: absolute</code></li><li>\u901A\u8FC7<code>display: table</code></li></ul><h2 id="box" tabindex="-1"><a class="header-anchor" href="#box" aria-hidden="true">#</a> box</h2><p><code>box</code>\u662F CSS \u5E03\u5C40\u7684\u5BF9\u8C61\u548C\u57FA\u672C\u5355\u4F4D\uFF0C\u76F4\u89C2\u70B9\u8BF4\u5C31\u662F\u4E00\u4E2A\u9875\u9762\u662F\u7531\u5F88\u591A\u4E2A<code>box</code>\u7EC4\u6210\u7684\uFF0C\u5143\u7D20\u7684\u7C7B\u578B\u548C<code>display</code>\u5C5E\u6027\u51B3\u5B9A\u4E86<code>box</code>\u7684\u7C7B\u578B\u3002</p><h3 id="\u5757\u7EA7\u5143\u7D20-\u5757\u7EA7\u76D2" tabindex="-1"><a class="header-anchor" href="#\u5757\u7EA7\u5143\u7D20-\u5757\u7EA7\u76D2" aria-hidden="true">#</a> \u5757\u7EA7\u5143\u7D20/\u5757\u7EA7\u76D2</h3><p>\u5757\u7EA7\u5143\u7D20\uFF08<code>block-level elements</code>\uFF09: \u8FD9\u4E9B\u5143\u7D20\u5728\u6E90\u6587\u6863\u91CC\u89C6\u89C9\u4E0A\u683C\u5F0F\u5316\u5448\u73B0\u4E3A\u5757\uFF0C\u6BD4\u5982\u6BB5\u843D\u5143\u7D20<code>p</code>\u3001<code>div</code>\u7B49\u7B49\uFF0C\u8FD9\u4E9B\u5757\u7EA7\u5143\u7D20\u5C06\u751F\u6210\u4E00\u4E2A\u5757\u7EA7\u4E3B\u76D2\uFF08<code>block-level principal box</code>\uFF09\u3002\u9664\u4E86\u8FD9\u4E9B\u539F\u751F\u7684\u5757\u7EA7\u5143\u7D20</p><ul><li>\u5757\u7EA7\u76D2\uFF08<code>block-level boxes</code>\uFF09 <ul><li>\u5F53\u5143\u7D20\u7684<code>display</code>\u5C5E\u6027\u7684\u503C\u4E3A<code>block</code>/<code>list-item</code>/<code>table</code>\u65F6\uFF0C\u5219\u5143\u7D20\u662F\u5757\u7EA7\u7684<code>block-level</code></li><li>\u89C6\u89C9\u4E0A\uFF0C\u5757\u7EA7\u5143\u7D20\uFF08\u6BD4\u5982<code>p</code>\uFF09\u5448\u73B0\u4E3A\u5757\uFF0C\u7AD6\u76F4\u6392\u5217</li><li>\u6BCF\u4E00\u4E2A\u5757\u7EA7\u5143\u7D20\u81F3\u5C11\u751F\u6210\u4E00\u4E2A\u5757\u7EA7\u76D2<code>block-level box</code>\u6765\u53C2\u4E0E BFC\uFF0C\u79F0\u4E3A\u4E3B\u8981\u5757\u7EA7\u76D2\uFF08<code>principal block-level box</code>\uFF09\u3002\u6709\u4E00\u4E9B\u5143\u7D20\uFF0C\u6BD4\u5982<code>li</code>\uFF0C\u4F1A\u751F\u6210\u989D\u5916\u7684\u76D2\u6765\u653E\u7F6E\u9879\u76EE\u7B26\u53F7\uFF0C\u4E0D\u8FC7\u591A\u6570\u5143\u7D20\u53EA\u751F\u6210\u4E00\u4E2A\u4E3B\u8981\u5757\u7EA7\u76D2</li></ul></li><li><code>inline-level boxes</code>: \u884C\u5185\u7EA7\u76D2\uFF0C\u4E5F\u79F0\u4E3A\u884C\u5185\u6846 <ul><li>\u5F53\u5143\u7D20 CSS \u7684<code>display</code>\u5C5E\u6027\u7684\u8BA1\u7B97\u503C\u4E3A<code>inline</code>/<code>inline-block</code>\u6216<code>inline-table</code>\u65F6\uFF0C\u79F0\u5B83\u4E3A\u884C\u5185\u7EA7<code>inline-level</code>\u5143\u7D20</li><li>\u89C6\u89C9\u4E0A\uFF0C\u884C\u5185\u7EA7\u5143\u7D20\u5C06\u5176\u5185\u5BB9\u4E0E\u5176\u5B83\u884C\u5185\u7EA7\u5143\u7D20\u6392\u5217\u4E3A\u591A\u884C\u3002\u5178\u578B\u7684\u5982\u6BB5\u843D\u7684\u5185\u5BB9\uFF0C\u6709\u6587\u672C\u6216\u56FE\u7247\uFF0C\u90FD\u662F\u884C\u5185\u7EA7\u5143\u7D20</li><li>\u884C\u5185\u7EA7\u5143\u7D20\u751F\u6210\u884C\u5185\u7EA7\u76D2\uFF08<code>inline-level boxes</code>)\uFF0C\u53C2\u4E0E\u884C\u5185\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587 IFC</li></ul></li><li><code>flex container</code><ul><li>\u5F53\u5143\u7D20 CSS \u7684<code>display</code>\u5C5E\u6027\u7684\u8BA1\u7B97\u503C\u4E3A<code>flex</code>\u6216<code>inline-flex</code>\uFF0C\u79F0\u5B83\u4E3A\u5F39\u6027\u5BB9\u5668</li><li><code>display: flex</code>\u8FD9\u4E2A\u503C\u4F1A\u5BFC\u81F4\u4E00\u4E2A\u5143\u7D20\u751F\u6210\u4E00\u4E2A\u5757\u7EA7<code>block-level</code>\u5F39\u6027\u5BB9\u5668\u6846</li><li><code>display: inline-flex</code>\u8FD9\u4E2A\u503C\u4F1A\u5BFC\u81F4\u4E00\u4E2A\u5143\u7D20\u751F\u6210\u4E00\u4E2A\u884C\u5185\u7EA7<code>inline-level</code>\u5F39\u6027\u5BB9\u5668\u6846</li></ul></li><li><code>grid container</code><ul><li>\u5F53\u5143\u7D20 CSS \u7684<code>display</code>\u5C5E\u6027\u7684\u8BA1\u7B97\u503C\u4E3A<code>grid</code>\u6216<code>inline-grid</code>\uFF0C\u79F0\u5B83\u4E3A\u6805\u683C\u5BB9\u5668</li><li>\u6805\u683C\u76D2\u6A21\u578B\u503C\uFF0C\u662F\u4E00\u4E2A\u4ECD\u5904\u4E8E\u5B9E\u9A8C\u4E2D\u7684\u5C5E\u6027</li></ul></li></ul><h3 id="\u5757\u5BB9\u5668\u76D2-block-container-box" tabindex="-1"><a class="header-anchor" href="#\u5757\u5BB9\u5668\u76D2-block-container-box" aria-hidden="true">#</a> \u5757\u5BB9\u5668\u76D2\uFF08block container box\uFF09</h3><p>\u7B26\u5408\u4EE5\u4E0B\u7684\u60C5\u51B5\u4E4B\u4E00\u7684\u76D2\u5B50\uFF0C\u5373\u79F0\u4E3A\u5757\u5BB9\u5668\u76D2\uFF08<code>block container box</code>\uFF09\uFF0C</p><ul><li>\u53EA\u5305\u542B\u5176\u4ED6\u5757\u7EA7\u76D2\uFF08<code>block-level boxes</code>\uFF09</li><li>\u751F\u6210\u4E00\u4E2A\u884C\u5185\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587 IFC\uFF0C\u53EA\u5305\u542B\u884C\u5185\u76D2\uFF08<code>inline-level boxes</code>\uFF09</li></ul><p>\u82E5\u5143\u7D20\u7684\u4E3B\u76D2<code>principal box</code>\u662F\u5757\u5BB9\u5668\u76D2\uFF0C\u5219\u8BE5\u5143\u7D20\u5C31\u662F\u5757\u5BB9\u5668\u5143\u7D20<code>block container element</code>\u3002</p><p>\u82E5\u662F\u5C06\u975E\u66FF\u6362\u5143\u7D20\u7684<code>display</code>\u8BBE\u7F6E\u4E3A<code>block</code>/<code>list-item</code>/<code>inline-block</code>\uFF0C\u5C06\u4F1A\u4E3A\u8BE5\u5143\u7D20\u751F\u6210\u4E00\u4E2A\u5757\u5BB9\u5668\u76D2\u3002</p><p>\u4E0D\u662F\u6240\u6709\u7684\u5757\u5BB9\u5668\u76D2\u90FD\u662F\u5757\u7EA7\u76D2\uFF08<code>block-level boxes</code>\uFF09\uFF0C</p><p>\u5757\u7EA7\u76D2\u548C\u5757\u5BB9\u5668\u76D2\u7684\u533A\u522B\u5728\u4E8E\uFF1A</p><ul><li>\u5757\u7EA7\u76D2\uFF08<code>block-level box</code>\uFF09\u662F\u63CF\u8FF0\u5143\u7D20\u8DDF\u5B83\u7684\u7236\u5143\u7D20\u4E0E\u5144\u5F1F\u5143\u7D20\u4E4B\u95F4\u7684\u8868\u73B0\u3002</li><li>\u5757\u5BB9\u5668\u76D2\uFF08<code>block container box</code>\uFF09\u63CF\u8FF0\u5143\u7D20\u8DDF\u5B83\u7684\u540E\u4EE3\u4E4B\u95F4\u7684\u5F71\u54CD\u3002</li></ul><h3 id="\u5757\u76D2" tabindex="-1"><a class="header-anchor" href="#\u5757\u76D2" aria-hidden="true">#</a> \u5757\u76D2</h3><p>\u82E5\u5757\u7EA7\u76D2\uFF0C\u540C\u65F6\u4E5F\u662F\u5757\u5BB9\u5668\u76D2\uFF0C\u5219\u79F0\u4E4B\u4E3A\u5757\u76D2\uFF08<code>block boxes</code>\uFF09</p><h3 id="\u884C\u76D2" tabindex="-1"><a class="header-anchor" href="#\u884C\u76D2" aria-hidden="true">#</a> \u884C\u76D2</h3><p>\u884C\u76D2(<code>line box</code>)\uFF0C\u53C8\u79F0\u4E3A\u884C\u6846\uFF0C\u7531\u884C\u5185\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587 IFC \u4EA7\u751F\u7684\u76D2\uFF0C\u7528\u4E8E\u8868\u793A\u4E00\u884C\u3002\u5728\u5757\u76D2\u91CC\u9762\uFF0C\u884C\u76D2\u4ECE\u5757\u76D2\u4E00\u8FB9\u6392\u7248\u5230\u53E6\u4E00\u8FB9\u3002\u5F53\u6709\u6D6E\u52A8\u65F6, \u884C\u76D2\u4ECE\u5DE6\u6D6E\u52A8\u7684\u6700\u53F3\u8FB9\u6392\u7248\u5230\u53F3\u6D6E\u52A8\u7684\u6700\u5DE6\u8FB9\u3002</p>', 26);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6D41\u7C7B\u578B" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5782\u76F4\u5C45\u4E2D" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5916\u8FB9\u8DDD\u6298\u53E0" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\u5916\u8FB9\u8DDD\u6298\u53E0" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6E05\u9664\u6D6E\u52A8" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#shrink-to-fit" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#box" }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5757\u7EA7\u5143\u7D20-\u5757\u7EA7\u76D2" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5757\u5BB9\u5668\u76D2-block-container-box" }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5757\u76D2" }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u884C\u76D2" }, {
                default: withCtx(() => [
                  _hoisted_13
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_14,
    createBaseVNode("p", null, [
      _hoisted_18,
      createBaseVNode("a", _hoisted_19, [
        _hoisted_20,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_21,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
