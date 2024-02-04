import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u8FD0\u7B97\u7B26",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8FD0\u7B97\u7B26",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8FD0\u7B97\u7B26")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u5E42\u8FD0\u7B97\u7B26 **");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u6309\u4F4D\u8FD0\u7B97\u7B26");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5224\u65AD\u6570\u503C\u5947\u5076\u6027");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u6570\u503C\u53D6\u6574");
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u5E42\u8FD0\u7B97\u7B26",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5E42\u8FD0\u7B97\u7B26",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5E42\u8FD0\u7B97\u7B26 **")
], -1);
const _hoisted_8 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Exponentiation (**) - MDN");
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<h2 id="\u6309\u4F4D\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6309\u4F4D\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6309\u4F4D\u8FD0\u7B97\u7B26</h2><p>\u6309\u4F4D\u64CD\u4F5C\u7B26\uFF08<code>Bitwise operators</code>\uFF09 \u5C06\u5176\u64CD\u4F5C\u6570\uFF08<code>operands</code>\uFF09\u5F53\u4F5C 32 \u4F4D\u7684\u6BD4\u7279\u5E8F\u5217\uFF08\u7531<code>0</code>\u548C<code>1</code>\u7EC4\u6210\uFF09\uFF0C\u800C\u4E0D\u662F\u5341\u8FDB\u5236\u3001\u5341\u516D\u8FDB\u5236\u6216\u516B\u8FDB\u5236\u6570\u503C\u3002\u4F8B\u5982\uFF0C\u5341\u8FDB\u5236\u6570<code>9</code>\uFF0C\u7528\u4E8C\u8FDB\u5236\u8868\u793A\u5219\u4E3A<code>1001</code>\u3002\u6309\u4F4D\u64CD\u4F5C\u7B26\u64CD\u4F5C\u6570\u5B57\u7684\u4E8C\u8FDB\u5236\u5F62\u5F0F\uFF0C\u4F46\u662F\u8FD4\u56DE\u503C\u4F9D\u7136\u662F\u6807\u51C6\u7684 JavaScript \u6570\u503C\u3002</p><table><thead><tr><th>\u8FD0\u7B97\u7B26</th><th>\u7528\u6CD5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>\u6309\u4F4D\u4E0E\uFF08 AND\uFF09</td><td><code>a &amp; b</code></td><td>\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u6BD4\u7279\u4F4D\uFF0C\u53EA\u6709\u4E24\u4E2A\u64CD\u4F5C\u6570\u76F8\u5E94\u7684\u6BD4\u7279\u4F4D\u90FD\u662F1\u65F6\uFF0C\u7ED3\u679C\u624D\u4E3A1\uFF0C\u5426\u5219\u4E3A0\u3002</td></tr><tr><td>\u6309\u4F4D\u6216\uFF08OR\uFF09</td><td>`a</td><td>b`</td></tr><tr><td>\u6309\u4F4D\u5F02\u6216\uFF08XOR\uFF09</td><td><code>a ^ b</code></td><td>\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u6BD4\u7279\u4F4D\uFF0C\u5F53\u4E24\u4E2A\u64CD\u4F5C\u6570\u76F8\u5E94\u7684\u6BD4\u7279\u4F4D\u6709\u4E14\u53EA\u6709\u4E00\u4E2A1\u65F6\uFF0C\u7ED3\u679C\u4E3A1\uFF0C\u5426\u5219\u4E3A0\u3002</td></tr><tr><td>\u6309\u4F4D\u975E\uFF08NOT\uFF09</td><td><code>~ a</code></td><td>\u53CD\u8F6C\u64CD\u4F5C\u6570\u7684\u6BD4\u7279\u4F4D\uFF0C\u53730\u53D8\u62101\uFF0C1\u53D8\u62100\u3002</td></tr><tr><td>\u5DE6\u79FB\uFF08Left shift\uFF09</td><td><code>a &lt;&lt; b</code></td><td>\u5C06 a \u7684\u4E8C\u8FDB\u5236\u5F62\u5F0F\u5411\u5DE6\u79FB b (&lt; 32) \u6BD4\u7279\u4F4D\uFF0C\u53F3\u8FB9\u75280\u586B\u5145\u3002</td></tr><tr><td>\u6709\u7B26\u53F7\u53F3\u79FB</td><td><code>a &gt;&gt; b</code></td><td>\u5C06 a \u7684\u4E8C\u8FDB\u5236\u8868\u793A\u5411\u53F3\u79FB b (&lt; 32) \u4F4D\uFF0C\u4E22\u5F03\u88AB\u79FB\u51FA\u7684\u4F4D\u3002</td></tr><tr><td>\u65E0\u7B26\u53F7\u53F3\u79FB</td><td><code>a &gt;&gt;&gt; b</code></td><td>\u5C06 a \u7684\u4E8C\u8FDB\u5236\u8868\u793A\u5411\u53F3\u79FB b (&lt; 32) \u4F4D\uFF0C\u4E22\u5F03\u88AB\u79FB\u51FA\u7684\u4F4D\uFF0C\u5E76\u4F7F\u7528 0 \u5728\u5DE6\u4FA7\u586B\u5145\u3002</td></tr></tbody></table><h3 id="\u5224\u65AD\u6570\u503C\u5947\u5076\u6027" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u6570\u503C\u5947\u5076\u6027" aria-hidden="true">#</a> \u5224\u65AD\u6570\u503C\u5947\u5076\u6027</h3><p><code>n &amp; 1</code>\u76F8\u5F53\u4E8E<code>n % 2</code>\uFF0C\u5F53<code>n</code>\u4E3A\u5947\u6570\u65F6\uFF0C<code>n &amp; 1</code>\u7684\u503C\u4E3A<code>1</code>\uFF1B\u5F53<code>n</code>\u4E3A\u5076\u6570\u65F6\uFF0C<code>n &amp; 1</code>\u7684\u503C\u4E3A<code>0</code>\u3002</p><table><thead><tr><th>\u539F\u59CB\u8868\u8FBE\u5F0F</th><th>\u5BF9\u5E94\u7684\u4E8C\u8FDB\u5236\u8868\u8FBE\u5F0F</th><th>\u7ED3\u679C</th></tr></thead><tbody><tr><td><code>1 &amp; 1</code></td><td><code>0001 &amp; 0001</code></td><td><code>1</code></td></tr><tr><td><code>2 &amp; 1</code></td><td><code>0010 &amp; 0001</code></td><td><code>0</code></td></tr><tr><td><code>3 &amp; 1</code></td><td><code>0011 &amp; 0001</code></td><td><code>1</code></td></tr><tr><td><code>4 &amp; 1</code></td><td><code>0100 &amp; 0001</code></td><td><code>0</code></td></tr><tr><td><code>5 &amp; 1</code></td><td><code>0101 &amp; 0001</code></td><td><code>1</code></td></tr><tr><td><code>6 &amp; 1</code></td><td><code>0110 &amp; 0001</code></td><td><code>0</code></td></tr><tr><td><code>7 &amp; 1</code></td><td><code>0111 &amp; 0001</code></td><td><code>1</code></td></tr><tr><td><code>8 &amp; 1</code></td><td><code>1000 &amp; 0001</code></td><td><code>0</code></td></tr></tbody></table><h3 id="\u6570\u503C\u53D6\u6574" tabindex="-1"><a class="header-anchor" href="#\u6570\u503C\u53D6\u6574" aria-hidden="true">#</a> \u6570\u503C\u53D6\u6574</h3><p>\u5982\u4E0B\u51E0\u79CD\u6309\u4F4D\u8FD0\u7B97\u8868\u8FBE\u5F0F\u90FD\u76F8\u5F53\u4E8E<code>parseInt(a)</code>:</p><ul><li><code>a | 0</code></li><li><code>a ^ 0</code></li><li><code>a &lt;&lt; 0</code></li><li><code>a &gt;&gt; 0</code></li><li><code>~~a</code></li></ul>', 9);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5E42\u8FD0\u7B97\u7B26" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6309\u4F4D\u8FD0\u7B97\u7B26" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5224\u65AD\u6570\u503C\u5947\u5076\u6027" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6570\u503C\u53D6\u6574" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_7,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_8, [
        _hoisted_9,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_10,
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
