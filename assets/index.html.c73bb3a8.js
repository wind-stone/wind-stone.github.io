import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "node",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#node",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Node")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u4E8B\u4EF6\u5FAA\u73AF");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u89C2\u5BDF\u8005");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Node \u5B9A\u65F6\u5668");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u670D\u52A1\u7A33\u5B9A\u6027\u6307\u6807");
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<h2 id="\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a> \u4E8B\u4EF6\u5FAA\u73AF</h2><h3 id="\u89C2\u5BDF\u8005" tabindex="-1"><a class="header-anchor" href="#\u89C2\u5BDF\u8005" aria-hidden="true">#</a> \u89C2\u5BDF\u8005</h3><ul><li>I/O \u89C2\u5BDF\u8005 <ul><li>\u6587\u4EF6 I/O \u89C2\u5BDF\u8005</li><li>\u7F51\u7EDC I/O \u89C2\u5BDF\u8005</li></ul></li><li>\u5B9A\u65F6\u5668\u89C2\u5BDF\u8005 <ul><li><code>setTimeout</code></li><li><code>setInterval</code></li></ul></li><li>idle \u89C2\u5BDF\u8005 <ul><li><code>process.nextTick</code></li></ul></li><li>check \u89C2\u5BDF\u8005 <ul><li><code>setImmediate</code></li></ul></li></ul><p>\u4E8B\u4EF6\u5FAA\u73AF\u91CC\u5BF9\u89C2\u5BDF\u8005\u7684\u68C0\u67E5\u987A\u5E8F\u4E3A\uFF1A</p><p>idle \u89C2\u5BDF\u8005 &gt; I/O \u89C2\u5BDF\u8005 &gt; check \u89C2\u5BDF\u8005</p><h2 id="node-\u5B9A\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#node-\u5B9A\u65F6\u5668" aria-hidden="true">#</a> Node \u5B9A\u65F6\u5668</h2><ul><li>\u540C\u6B65\u4EFB\u52A1</li><li>\u5F02\u6B65\u4EFB\u52A1 <ul><li>\u672C\u8F6E\u5FAA\u73AF <ul><li>process.nextTick</li><li>Promise</li></ul></li><li>\u6B21\u8F6E\u5FAA\u73AF <ul><li>setTimeout\u3001setInterval</li><li>setImmediate</li></ul></li></ul></li></ul>', 7);
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Reference: ");
const _hoisted_15 = {
  href: "http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Node \u5B9A\u65F6\u5668\u8BE6\u89E3");
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<h2 id="\u670D\u52A1\u7A33\u5B9A\u6027\u6307\u6807" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7A33\u5B9A\u6027\u6307\u6807" aria-hidden="true">#</a> \u670D\u52A1\u7A33\u5B9A\u6027\u6307\u6807</h2><ul><li>\u8D44\u6E90\u7A33\u5B9A\u6027 <ul><li>CPU <ul><li>CPU Load\uFF0C\u5373 CPU \u8D1F\u8F7D\uFF0C\u8868\u793A\u5728\u4E00\u6BB5\u65F6\u95F4\u5185 CPU \u6B63\u5728\u5904\u7406\u4EE5\u53CA\u7B49\u5F85 CPU \u5904\u7406\u7684\u8FDB\u7A0B\u6570\u4E4B\u548C\u7684\u7EDF\u8BA1\u4FE1\u606F\u3002</li><li>CPU Usage\uFF0C\u5373 CPU \u5229\u7528\u7387\uFF0C\u4EE3\u8868\u4E86\u7A0B\u5E8F\u5BF9 CPU \u65F6\u95F4\u7247\u7684\u5360\u7528\u60C5\u51B5\u3002</li></ul></li><li>\u5185\u5B58 <ul><li>\u5185\u5B58 RSS\uFF0C\u5E38\u9A7B\u5185\u5B58\u96C6\uFF08Resident Set Size\uFF09\u7528\u4E8E\u8868\u793A\u7CFB\u7EDF\u6709\u591A\u5C11\u5185\u5B58\u5206\u914D\u7ED9\u5F53\u524D\u8FDB\u7A0B\uFF0C\u5B83\u80FD\u5305\u62EC\u6240\u6709\u5806\u6808\u548C\u5806\u5185\u5B58\uFF0C\u662F OOM \u4E3B\u8981\u53C2\u8003\u7684\u6307\u6807\u3002</li><li>\u5185\u5B58 V8 Heap\uFF0C\u8868\u793A JavaScript \u4EE3\u7801\u6267\u884C\u5360\u7528\u7684\u5185\u5B58\u3002</li><li>\u5185\u5B58 max-old-space-size\uFF0CV8 \u5141\u8BB8\u7684\u6700\u5927\u7684\u8001\u751F\u4EE3\u5185\u5B58\u5927\u5C0F\uFF0C\u53EF\u4EE5\u7B80\u5355\u8BA4\u4E3A\u662F\u4E00\u4E2A Node.js \u8FDB\u7A0B\u957F\u671F\u53EF\u7EF4\u6301\u7684\u6700\u5927\u5185\u5B58\u5927\u5C0F\u3002</li><li>\u5185\u5B58 External\uFF0CNode.js \u4E2D\u7684 Buffer \u662F\u57FA\u4E8E V8 Uint8Array \u7684\u5C01\u88C5\uFF0C\u56E0\u6B64\u5728 Node.js \u4E2D\u4F7F\u7528 Buffer \u65F6\uFF0C\u5176\u5185\u5B58\u5360\u7528\u91CF\u4F1A\u88AB\u8BB0\u5F55\u5230 External \u4E2D\u3002</li></ul></li><li>Libuv\uFF0C\u662F\u8DE8\u5E73\u53F0\u7684\u3001\u5C01\u88C5\u64CD\u4F5C\u7CFB\u7EDF IO \u64CD\u4F5C\u7684\u5E93\u3002Node.js \u4F7F\u7528 Libuv \u4F5C\u4E3A\u81EA\u5DF1\u7684 event loop\uFF0C\u5E76\u7531 uv \u8D1F\u8D23 IO \u64CD\u4F5C <ul><li>Libuv handles\uFF0C\u6307\u793A\u4E86 Node.js \u8FDB\u7A0B\u4E2D\u5404\u79CD IO \u5BF9\u8C61\uFF08tcp, udp, fs, timer \u7B49\u5BF9\u8C61\uFF09\u7684\u6570\u91CF\u3002</li><li>Libuv Latency\uFF0C\u901A\u8FC7 setTimeout() \u6765\u8BBE\u7F6E timer \uFF0C\u5E76\u8BB0\u5F55\u56DE\u8C03\u51FD\u6570\u88AB\u8C03\u7528\u65F6\u6240\u6D88\u8017\u7684\u65F6\u95F4\u548C\u9884\u8BA1\u6D88\u8017\u7684\u65F6\u95F4\u4E4B\u95F4\u7684\u5DEE\u503C\u4F5C\u4E3A latency</li></ul></li></ul></li><li>\u670D\u52A1\u8FD0\u884C\u7A33\u5B9A\u6027 <ul><li>\u72B6\u6001\u7801</li><li>\u9519\u8BEF\u65E5\u5FD7</li><li>pm2 \u65E5\u5FD7</li><li>\u5EF6\u65F6</li><li>QPS</li></ul></li></ul>', 2);
const _hoisted_19 = /* @__PURE__ */ createTextVNode("\u53C2\u8003\u81EA\uFF1A");
const _hoisted_20 = {
  href: "https://mp.weixin.qq.com/s/2k-52mxPbMUofvT1tjBXUA",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_21 = /* @__PURE__ */ createTextVNode("\u63D0\u5347 Node.js \u670D\u52A1\u7A33\u5B9A\u6027\uFF0C\u9700\u8981\u5173\u6CE8\u54EA\u4E9B\u6307\u6807\uFF1F");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4E8B\u4EF6\u5FAA\u73AF" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u89C2\u5BDF\u8005" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#node-\u5B9A\u65F6\u5668" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u670D\u52A1\u7A33\u5B9A\u6027\u6307\u6807" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_7,
    createBaseVNode("p", null, [
      _hoisted_14,
      createBaseVNode("a", _hoisted_15, [
        _hoisted_16,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_17,
    createBaseVNode("p", null, [
      _hoisted_19,
      createBaseVNode("a", _hoisted_20, [
        _hoisted_21,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
