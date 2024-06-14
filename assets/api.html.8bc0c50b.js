import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "node-api",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#node-api",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Node API")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("http.createServer \u548C http.Server \u7684\u533A\u522B");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("process.cwd \u4E0E __dirname \u7684\u533A\u522B");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5728 test-project \u76EE\u5F55\u4E0B\u6267\u884C");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5728 src \u76EE\u5F55\u4E0B\u6267\u884C");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u7ED3\u8BBA");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("path.resolve");
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "http-createserver-\u548C-http-server-\u7684\u533A\u522B",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#http-createserver-\u548C-http-server-\u7684\u533A\u522B",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" http.createServer \u548C http.Server \u7684\u533A\u522B")
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("code", null, "http.createServer", -1);
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u662F\u57FA\u4E8E");
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("code", null, "http.Server", -1);
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u7684\u5C01\u88C5\uFF0C\u8BE6\u89C1");
const _hoisted_14 = {
  href: "https://stackoverflow.com/questions/13857747/node-js-http-server-and-http-createserver-whats-the-difference",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Stack Overflow - Node.js' http.Server and http.createServer, what's the difference?");
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<h2 id="process-cwd-\u4E0E-dirname-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#process-cwd-\u4E0E-dirname-\u7684\u533A\u522B" aria-hidden="true">#</a> process.cwd \u4E0E __dirname \u7684\u533A\u522B</h2><p>\u5047\u8BBE\u9879\u76EE\u76EE\u5F55\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>test<span class="token operator">-</span>project\n  <span class="token operator">-</span> src\n    <span class="token operator">-</span> path<span class="token punctuation">.</span>js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5728-test-project-\u76EE\u5F55\u4E0B\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u5728-test-project-\u76EE\u5F55\u4E0B\u6267\u884C" aria-hidden="true">#</a> \u5728 test-project \u76EE\u5F55\u4E0B\u6267\u884C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u279C  test-project node src/path.js\n__dirname:  /Users/wind-stone/github/test-project/src\n__filename:  /Users/wind-stone/github/test-project/src/path.js\nprocess.cwd<span class="token punctuation">(</span><span class="token punctuation">)</span>:  /Users/wind-stone/github/test-project\npath.resolve<span class="token punctuation">(</span><span class="token string">&quot;./&quot;</span><span class="token punctuation">)</span> /Users/wind-stone/github/test-project\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u5728-src-\u76EE\u5F55\u4E0B\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u5728-src-\u76EE\u5F55\u4E0B\u6267\u884C" aria-hidden="true">#</a> \u5728 src \u76EE\u5F55\u4E0B\u6267\u884C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u279C  test-project <span class="token builtin class-name">cd</span> src\n\u279C  src node path.js\n__dirname:  /Users/wind-stone/github/test-project/src\n__filename:  /Users/wind-stone/github/test-project/src/path.js\nprocess.cwd<span class="token punctuation">(</span><span class="token punctuation">)</span>:  /Users/wind-stone/github/test-project/src\npath.resolve<span class="token punctuation">(</span><span class="token string">&quot;./&quot;</span><span class="token punctuation">)</span> /Users/wind-stone/github/test-project/src\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u7ED3\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u8BBA" aria-hidden="true">#</a> \u7ED3\u8BBA</h3><ul><li><code>__dirname</code>: \u5F53\u524D\u6267\u884C\u7684 JS \u6587\u4EF6\u6240\u5728\u7684\u6587\u4EF6\u5939\u7684\u7EDD\u5BF9\u8DEF\u5F84</li><li><code>__filename</code>: \u5F53\u524D\u6267\u884C\u7684 JS \u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84</li><li><code>process.cwd()</code>: \u8FD0\u884C<code>node xxx.js</code>\u65F6\u6240\u5728\u7684\u6587\u4EF6\u5939\u7684\u7EDD\u5BF9\u8DEF\u5F84</li><li><code>path.resolve(&#39;./&#39;)</code>: \u8FD0\u884C<code>node xxx.js</code>\u65F6\u6240\u5728\u7684\u6587\u4EF6\u5939\u7684\u7EDD\u5BF9\u8DEF\u5F84</li></ul><h4 id="path-resolve" tabindex="-1"><a class="header-anchor" href="#path-resolve" aria-hidden="true">#</a> path.resolve</h4><ul><li><code>path.resolve([...paths])</code><ul><li><code>...paths</code>: <code>&lt;string&gt;</code>\uFF0C\u8DEF\u5F84\u6216\u8DEF\u5F84\u7247\u6BB5\u7684\u5E8F\u5217\u3002</li><li>\u8FD4\u56DE: <code>&lt;string&gt;</code></li></ul></li></ul><p><code>path.resolve()</code>\u65B9\u6CD5\u5C06\u8DEF\u5F84\u6216\u8DEF\u5F84\u7247\u6BB5\u7684\u5E8F\u5217\u89E3\u6790\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\u3002</p><p>\u7ED9\u5B9A\u7684\u8DEF\u5F84\u5E8F\u5217\u4ECE\u53F3\u5230\u5DE6\u8FDB\u884C\u5904\u7406\uFF0C\u6BCF\u4E2A\u540E\u7EED\u7684<code>path</code>\u524D\u7F6E\uFF0C\u76F4\u5230\u6784\u9020\u51FA\u4E00\u4E2A\u7EDD\u5BF9\u8DEF\u5F84\u3002 \u4F8B\u5982\uFF0C\u7ED9\u5B9A\u7684\u8DEF\u5F84\u7247\u6BB5\u5E8F\u5217\uFF1A<code>/foo</code>\u3001<code>/bar</code>\u3001<code>baz</code>\uFF0C\u8C03\u7528 <code>path.resolve(&#39;/foo&#39;, &#39;/bar&#39;, &#39;baz&#39;)</code>\u5C06\u8FD4\u56DE<code>/bar/baz</code>\u3002</p><p>\u5982\u679C\u5728\u5904\u7406\u5B8C\u6240\u6709\u7ED9\u5B9A\u7684<code>path</code>\u7247\u6BB5\u4E4B\u540E\u8FD8\u672A\u751F\u6210\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5219\u518D\u52A0\u4E0A\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u3002</p><p>\u751F\u6210\u7684\u8DEF\u5F84\u5DF2\u89C4\u8303\u5316\uFF0C\u5E76\u4E14\u9664\u975E\u5C06\u8DEF\u5F84\u89E3\u6790\u4E3A\u6839\u76EE\u5F55\uFF0C\u5426\u5219\u5C06\u5220\u9664\u5C3E\u90E8\u659C\u6760\u3002</p><p>\u96F6\u957F\u5EA6\u7684<code>path</code>\u7247\u6BB5\u4F1A\u88AB\u5FFD\u7565\u3002</p><p>\u5982\u679C\u6CA1\u6709\u4F20\u5165<code>path</code>\u7247\u6BB5\uFF0C\u5219<code>path.resolve()</code>\u5C06\u8FD4\u56DE\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002</p>', 17);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#http-createserver-\u548C-http-server-\u7684\u533A\u522B" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#process-cwd-\u4E0E-dirname-\u7684\u533A\u522B" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5728-test-project-\u76EE\u5F55\u4E0B\u6267\u884C" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5728-src-\u76EE\u5F55\u4E0B\u6267\u884C" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u7ED3\u8BBA" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              }),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, { to: "#path-resolve" }, {
                    default: withCtx(() => [
                      _hoisted_8
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
    _hoisted_9,
    createBaseVNode("p", null, [
      _hoisted_10,
      _hoisted_11,
      _hoisted_12,
      _hoisted_13,
      createBaseVNode("a", _hoisted_14, [
        _hoisted_15,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_16,
    createVNode(_component_global_config)
  ], 64);
}
var api_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { api_html as default };
