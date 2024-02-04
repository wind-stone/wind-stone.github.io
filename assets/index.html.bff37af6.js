import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u6570\u636E\u7C7B\u578B",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6570\u636E\u7C7B\u578B",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6570\u636E\u7C7B\u578B")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u7C7B\u578B\u5206\u7C7B");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u57FA\u672C\u7C7B\u578B");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u62BD\u8C61\u7C7B\u578B");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u8054\u5408\u7C7B\u578B");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u4EA4\u53C9\u7C7B\u578B");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("key \u76F8\u540C\u7C7B\u578B\u4E0D\u540C");
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<h2 id="\u7C7B\u578B\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u5206\u7C7B" aria-hidden="true">#</a> \u7C7B\u578B\u5206\u7C7B</h2><h3 id="\u57FA\u672C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7C7B\u578B" aria-hidden="true">#</a> \u57FA\u672C\u7C7B\u578B</h3><p>\u57FA\u672C\u7C7B\u578B\uFF08<code>primitive type</code>\uFF09: <code>A primitive type is an individual type that can not be broken down further</code>\u3002</p><p>TypeScript \u5185\u7F6E\u7684\u57FA\u672C\u6570\u636E\u7C7B\u578B\u6709:</p><ul><li><code>boolean</code></li><li><code>number</code></li><li><code>string</code></li><li><code>symbol</code></li><li><code>undefined</code></li><li><code>null</code></li><li><code>void</code>\uFF0C\u53EF\u5C06<code>undefined</code>\u8D4B\u503C\u7ED9<code>void</code>\u7C7B\u578B\u7684\u53D8\u91CF</li><li><code>never</code></li><li><code>object</code>\uFF0C\u8BE5\u7C7B\u578B\u7684\u503C\u5305\u542B\u5BF9\u8C61\u3001\u6570\u7EC4\u3001\u51FD\u6570\u7B49\u7B49</li><li><code>any</code>\uFF0C\u53EF\u4EE5\u5305\u542B\u4EFB\u4F55\u503C</li><li><code>unknown</code></li></ul><p>\u5F53\u8BBE\u7F6E<code>strictNullChecks</code>\u4E3A<code>true</code>\u65F6\uFF0C\u4F1A\u544A\u77E5 TypeScript \u7F16\u8BD1\u5668\u4E0D\u5141\u8BB8\u5C06<code>null</code>\u548C<code>undefined</code>\u8D4B\u503C\u7ED9\u53D8\u91CF\u3002</p><ul><li>\u82E5\u53D8\u91CF\u5DF2\u7ECF\u58F0\u660E\u4E3A\u7ED9\u5B9A\u7C7B\u578B\uFF08\u4E0D\u5305\u542B<code>null</code>\u6216<code>undefined</code>\uFF09\uFF0C\u5219\u4E0D\u5141\u8BB8\u5C06\u53D8\u91CF\u91CD\u65B0\u8D4B\u503C\u4E3A<code>null</code>\u6216<code>undefined</code></li><li>\u82E5\u53D8\u91CF\u672A\u8BBE\u7F6E\u521D\u59CB\u503C\uFF0C\u5219\u4E0D\u5141\u8BB8\u4F7F\u7528</li><li>\u4E0D\u80FD\u5C06<code>null</code>\u8D4B\u503C\u7ED9<code>undefined</code>\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u6216\u5C06<code>undefined</code>\u8D4B\u503C\u7ED9<code>null</code>\u7C7B\u578B\u7684\u53D8\u91CF</li></ul><h3 id="\u62BD\u8C61\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u7C7B\u578B" aria-hidden="true">#</a> \u62BD\u8C61\u7C7B\u578B</h3><p>\u62BD\u8C61\u7C7B\u578B\uFF08<code>abstract type</code>\uFF09\uFF0C<code>An abstract type is a type that is composed of primitive types</code>\u3002</p><ul><li><code>Array</code></li><li><code>Tuple</code>\uFF0C\u6BD4\u5982: <code>let student: [ string, number, boolean ] = [ &#39;Ross Geller&#39;, 27, true ]</code></li><li><code>interface</code></li></ul><h2 id="\u8054\u5408\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u8054\u5408\u7C7B\u578B" aria-hidden="true">#</a> \u8054\u5408\u7C7B\u578B</h2><h2 id="\u4EA4\u53C9\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u53C9\u7C7B\u578B" aria-hidden="true">#</a> \u4EA4\u53C9\u7C7B\u578B</h2><p>\u4EA4\u53C9\u7C7B\u578B\uFF0C<code>Intersection Types</code>\uFF0C\u5C06\u5DF2\u6709\u7684\u591A\u4E2A\u7C7B\u578B\u5408\u5E76\u6210\u4E00\u4E2A\u7C7B\u578B\uFF0C\u8BE5\u7C7B\u578B\u62E5\u6709\u8FD9\u4E9B\u7C7B\u578B\u7684\u6240\u6709\u7279\u6027\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n    firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>\n    marks<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> student<span class="token operator">:</span> Person <span class="token operator">&amp;</span> Student <span class="token operator">=</span> <span class="token punctuation">{</span>\n    firstName<span class="token operator">:</span> <span class="token string">&#39;Wind&#39;</span><span class="token punctuation">,</span>\n    lastName<span class="token operator">:</span> <span class="token string">&#39;Stone&#39;</span><span class="token punctuation">,</span>\n    marks<span class="token operator">:</span> <span class="token number">90</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="key-\u76F8\u540C\u7C7B\u578B\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#key-\u76F8\u540C\u7C7B\u578B\u4E0D\u540C" aria-hidden="true">#</a> key \u76F8\u540C\u7C7B\u578B\u4E0D\u540C</h3><p>\u4EA4\u53C9\u7C7B\u578B\u53D6\u7684\u591A\u4E2A\u7C7B\u578B\u7684\u5E76\u96C6\uFF0C\u4F46\u662F\u5982\u679C\u540C\u4E00\u4E2A<code>key</code>\u5728\u4E0D\u540C\u7C7B\u578B\u91CC\u7684\u7C7B\u578B\u4E0D\u540C\uFF0C\u5219\u8BE5<code>key</code>\u4E3A<code>never</code>\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n    firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>\n    marks<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    age<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> student<span class="token operator">:</span> Person <span class="token operator">&amp;</span> Student <span class="token operator">=</span> <span class="token punctuation">{</span>\n    firstName<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n    lastName<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n    marks<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>', 17);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7C7B\u578B\u5206\u7C7B" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u57FA\u672C\u7C7B\u578B" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u62BD\u8C61\u7C7B\u578B" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u8054\u5408\u7C7B\u578B" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4EA4\u53C9\u7C7B\u578B" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#key-\u76F8\u540C\u7C7B\u578B\u4E0D\u540C" }, {
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
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
