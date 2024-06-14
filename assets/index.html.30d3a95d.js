import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, d as createStaticVNode, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h1><h2 id="\u63CF\u8FF0-ui" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0-ui" aria-hidden="true">#</a> \u63CF\u8FF0 UI</h2><h3 id="\u4FDD\u6301\u7EC4\u4EF6\u7EAF\u7CB9" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u6301\u7EC4\u4EF6\u7EAF\u7CB9" aria-hidden="true">#</a> \u4FDD\u6301\u7EC4\u4EF6\u7EAF\u7CB9</h3>', 3);
const _hoisted_4 = {
  href: "https://react.dev/learn/keeping-components-pure",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("React - Keeping Components Pure");
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<ul><li>\u7EC4\u4EF6\u5FC5\u987B\u7EAF\u7CB9\uFF0C\u8FD9\u4E5F\u5C31\u662F\u8BF4\uFF1A <ul><li>\u7EC4\u4EF6\u53EA\u8D1F\u8D23\u81EA\u5DF1\u7684\u903B\u8F91\uFF0C\u4E0D\u80FD\u4FEE\u6539\u8BE5\u7EC4\u4EF6\u6E32\u67D3\u4E4B\u524D\u5DF2\u7ECF\u5B58\u5728\u7684\u5BF9\u8C61\u6216\u53D8\u91CF</li><li>\u76F8\u540C\u7684\u8F93\u5165\uFF0C\u8981\u6709\u76F8\u540C\u7684\u8F93\u51FA\u3002\u7ED9\u4E86\u76F8\u540C\u7684\u8F93\u5165\uFF0C\u7EC4\u4EF6\u5E94\u8BE5\u8FD4\u56DE\u76F8\u540C\u7684 JSX</li></ul></li><li>\u6E32\u67D3\u4F1A\u5728\u4EFB\u4F55\u65F6\u5019\u53D1\u751F\uFF0C\u56E0\u6B64\u7EC4\u4EF6\u4E0D\u5E94\u8BE5\u4F9D\u8D56\u4E8E\u5176\u4ED6\u7EC4\u4EF6\u7684\u6E32\u67D3\u987A\u5E8F</li><li>\u7528\u4E8E\u7EC4\u4EF6\u6E32\u67D3\u7684\u8F93\u5165\uFF0C\u6BD4\u5982<code>props</code>\u3001<code>state</code>\u548C<code>context</code>\uFF0C\u4E0D\u80FD\u5BF9\u8FD9\u4E9B\u8F93\u5165\u505A\u4FEE\u6539\u3002\u5982\u679C\u60F3\u66F4\u65B0\u89C6\u89C9\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>setState</code>\uFF0C\u800C\u4E0D\u662F\u4FEE\u6539\u5DF2\u5B58\u5728\u7684\u5BF9\u8C61</li><li>\u52AA\u529B\u4E89\u53D6\u901A\u8FC7\u8FD4\u56DE\u7684 JSX \u6765\u8868\u8FBE\u51FA\u4F60\u7EC4\u4EF6\u7684\u903B\u8F91\uFF0C\u6570\u636E\u53D8\u66F4\u53EA\u80FD\u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u91CC\u505A\uFF0C\u4E07\u4E0D\u5F97\u5DF2\u65F6\u4E5F\u53EF\u4EE5\u5728<code>useEffect</code>\u91CC\u505A</li><li>\u5199\u7EAF\u51FD\u6570\u9700\u8981\u5927\u91CF\u7684\u7EC3\u4E60\uFF0C\u4F46\u662F\u8FD9\u4E5F React \u8303\u5F0F\u7684\u5F3A\u5927\u6240\u5728\u3002</li></ul><p>\u6CE8\u610F\uFF1AReact \u63D0\u4F9B\u4E86\u201C\u4E25\u683C\u6A21\u5F0F\u201D\uFF0C\u5F00\u542F\u201C\u4E25\u683C\u6A21\u5F0F\u201D\u540E\uFF0C\u5728\u5F00\u53D1\u73AF\u5883\u65F6\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6E32\u67D3\u51FD\u6570\u4F1A\u6267\u884C\u4E24\u6B21\uFF0C\u6765\u5E2E\u52A9\u7EC4\u4EF6\u53D1\u73B0\u6709\u54EA\u4E9B\u6253\u7834\u201C\u7EAF\u7CB9\u201D\u89C4\u5219\u7684\u5730\u65B9\u3002\u8BE6\u89C1\u5B98\u65B9\u6587\u6863\u91CC\u7684<strong>Detecting impure calculations with StrictMode</strong>\u3002</p><h2 id="react-hooks" tabindex="-1"><a class="header-anchor" href="#react-hooks" aria-hidden="true">#</a> React Hooks</h2><p>Hook \u8FD9\u4E2A\u5355\u8BCD\u7684\u610F\u601D\u662F&quot;\u94A9\u5B50&quot;\u3002</p><p>React Hooks \u7684\u610F\u601D\u662F\uFF0C\u7EC4\u4EF6\u5C3D\u91CF\u5199\u6210\u7EAF\u51FD\u6570\uFF0C\u5982\u679C\u9700\u8981\u5916\u90E8\u529F\u80FD\u548C\u526F\u4F5C\u7528\uFF0C\u5C31\u7528\u94A9\u5B50\u628A\u5916\u90E8\u4EE3\u7801&quot;\u94A9&quot;\u8FDB\u6765\u3002 React Hooks \u5C31\u662F\u90A3\u4E9B\u94A9\u5B50\u3002</p>', 5);
const _hoisted_11 = {
  href: "https://www.ruanyifeng.com/blog/2020/09/react-hooks-useeffect-tutorial.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u962E\u4E00\u5CF0 - \u8F7B\u677E\u5B66\u4F1A React \u94A9\u5B50\uFF1A\u4EE5 useEffect() \u4E3A\u4F8B");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\uFF0C\u4E86\u89E3 Hooks \u7684\u8BBE\u8BA1\u601D\u60F3");
const _hoisted_14 = {
  href: "https://www.ruanyifeng.com/blog/2019/09/react-hooks.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u962E\u4E00\u5CF0 - React Hooks \u5165\u95E8\u6559\u7A0B");
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "useref",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#useref",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" useRef")
], -1);
const _hoisted_17 = {
  href: "https://react.dev/reference/react/useRef",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_18 = /* @__PURE__ */ createTextVNode("React - useRef");
const _hoisted_19 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> myRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E3B\u8981\u4F5C\u7528\uFF1A</p><ul><li>\u5F15\u7528\u4E00\u4E2A\u4E0D\u53C2\u4E0E\u6E32\u67D3\u7684\u503C <ul><li>\u53EF\u4EE5\u5728\u591A\u6B21\u6E32\u67D3\u4E4B\u95F4\u5F15\u7528\u4E00\u4E2A\u4E0D\u53D8\u7684\u5BF9\u8C61<code>myRef</code>\uFF0C\u5BF9\u8C61\u7684<code>current</code>\u5C5E\u6027\u5373<code>myRef.current</code>\u7528\u4E8E\u5B58\u653E\u6570\u636E</li><li>\u4E0D\u80FD\u5728\u6E32\u67D3\u91CC\u8BFB\u53D6\u6216\u4FEE\u6539<code>myRef.current</code>\uFF0C\u53EF\u4EE5\u5728<code>useEffect</code>\u6216\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u91CC\u8BFB\u53D6\u6216\u4FEE\u6539<code>myRef.current</code></li><li>\u4FEE\u6539<code>myRef.current</code>\uFF0C\u4E0D\u4F1A\u5BFC\u81F4\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3</li></ul></li><li>\u64CD\u4F5C DOM \u8282\u70B9\uFF08\u7C7B\u4F3C\u4E8E Vue \u91CC\u7684<code>ref</code>\uFF09\uFF0C\u8FD8\u53EF\u4EE5\u914D\u5408\u4F7F\u7528<code>forwardRef</code>\u5C06\u5B50\u7EC4\u4EF6\u7684 DOM \u8282\u70B9\u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6</li></ul><h3 id="usecallback" tabindex="-1"><a class="header-anchor" href="#usecallback" aria-hidden="true">#</a> useCallback</h3>', 4);
const _hoisted_23 = {
  href: "https://react.dev/reference/react/useCallback",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_24 = /* @__PURE__ */ createTextVNode("React - useCallback");
const _hoisted_25 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> cachedFn <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> dependencies<span class="token punctuation">)</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>useCallback</code>\u53EF\u4EE5\u5728\u591A\u6B21\u6E32\u67D3\u4E4B\u95F4\u7F13\u5B58\u540C\u4E00\u4E2A\u51FD\u6570\u3002</p>', 2);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("\u7EC4\u4EF6\u9996\u6B21\u6E32\u67D3\u65F6\uFF0CuseCallback \u7684\u8FD4\u56DE\u503C\u5373"),
  /* @__PURE__ */ createBaseVNode("code", null, "cachedFn"),
  /* @__PURE__ */ createTextVNode("\u5C31\u662F"),
  /* @__PURE__ */ createBaseVNode("code", null, "fn"),
  /* @__PURE__ */ createTextVNode("\u81EA\u8EAB\u3002\u5728\u4E4B\u540E\u7684\u6E32\u67D3\u4E2D\uFF0C\u5982\u679C"),
  /* @__PURE__ */ createBaseVNode("code", null, "dependencies"),
  /* @__PURE__ */ createTextVNode("\u65E0\u53D8\u5316\uFF0C\u5219\u4F1A\u8FD4\u56DE\u8DDF\u4E0A\u6B21\u4E00\u6837\u7684\u51FD\u6570\uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE\u5F53\u524D\u6E32\u67D3\u4E2D\u4F20\u5165\u7684\u65B0"),
  /* @__PURE__ */ createBaseVNode("code", null, "fn"),
  /* @__PURE__ */ createTextVNode("\u3002")
], -1);
const _hoisted_28 = /* @__PURE__ */ createTextVNode("\u5E94\u7528\u573A\u666F\uFF1A ");
const _hoisted_29 = /* @__PURE__ */ createStaticVNode("<li>\u573A\u666F\u4E00\uFF1A\u5B50\u7EC4\u4EF6\u4F7F\u7528<code>memo</code>\u6765\u505A\u6027\u80FD\u4F18\u5316\uFF0C\u7236\u7EC4\u4EF6\u9700\u8981\u7ED9\u5B50\u7EC4\u4EF6\u4F20\u9012\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570<code>fn</code>\uFF08\u6216\u8005\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF09\uFF0C\u6B64\u65F6\u9700\u8981\u5C06<code>fn</code>\u7528<code>useCallback</code>\u7F13\u5B58\u4E00\u4E0B\uFF0C\u9632\u6B62\u7236\u7EC4\u4EF6\u6BCF\u6B21\u91CD\u65B0\u6E32\u67D3\u90FD\u5BFC\u81F4\u5B50\u7EC4\u4EF6\u4E5F\u6E32\u67D3\u3002\u53EA\u6709\u5F53<code>fn</code>\u4F9D\u8D56\u7684\u6570\u636E\u6709\u53D8\u5316\u65F6\uFF0C\u624D\u9700\u8981\u83B7\u53D6\u4E00\u4E2A\u65B0\u7684<code>fn</code>\u4F20\u5165\u5230\u5B50\u7EC4\u4EF6\u4EE5\u4FBF\u8BA9\u5B50\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u3002</li>", 1);
const _hoisted_30 = /* @__PURE__ */ createTextVNode("\u573A\u666F\u4E8C\uFF1A\u51FD\u6570");
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("code", null, "fn", -1);
const _hoisted_32 = /* @__PURE__ */ createTextVNode("\u7528\u4E8E\u67D0\u4E9B Hook \u7684\u4F9D\u8D56\u3002\u6BD4\u5982\uFF0C\u53E6\u4E00\u4E2A\u4F7F\u7528");
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("code", null, "useCallback", -1);
const _hoisted_34 = /* @__PURE__ */ createTextVNode("\u5305\u88C5\u7684\u51FD\u6570\u4F9D\u8D56\u4E8E");
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("code", null, "fn", -1);
const _hoisted_36 = /* @__PURE__ */ createTextVNode("\uFF0C\u6216\u8005\u5728");
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("code", null, "useEffect", -1);
const _hoisted_38 = /* @__PURE__ */ createTextVNode("\u94A9\u5B50\u4F9D\u8D56");
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("code", null, "fn", -1);
const _hoisted_40 = /* @__PURE__ */ createTextVNode("\u5199\u81EA\u5B9A\u4E49 Hook \u65F6\u8FD4\u56DE\u7684\u51FD\u6570\uFF0C\u5EFA\u8BAE\u7528");
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("code", null, "useCallback", -1);
const _hoisted_42 = /* @__PURE__ */ createTextVNode("\u5305\u88C5\uFF0C");
const _hoisted_43 = {
  href: "https://react.dev/reference/react/useCallback#optimizing-a-custom-hook",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_44 = /* @__PURE__ */ createTextVNode("Optimizing a custom Hook");
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("code", null, "useCallback", -1);
const _hoisted_46 = /* @__PURE__ */ createTextVNode("\u548C");
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("code", null, "useMemo", -1);
const _hoisted_48 = /* @__PURE__ */ createTextVNode("\u7684\u533A\u522B\uFF0C\u8BE6\u89C1\uFF1A");
const _hoisted_49 = {
  href: "https://react.dev/reference/react/useCallback#how-is-usecallback-related-to-usememo",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_50 = /* @__PURE__ */ createTextVNode("React - How is useCallback related to useMemo?");
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "useCallback"),
    /* @__PURE__ */ createTextVNode("\u7F13\u5B58\u51FD\u6570\u672C\u8EAB")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "useMemo"),
    /* @__PURE__ */ createTextVNode("\u7F13\u5B58\u51FD\u6570\u6267\u884C\u7684\u7ED3\u679C")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_4, [
        _hoisted_5,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_6,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_11, [
          _hoisted_12,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_13
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_14, [
          _hoisted_15,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_16,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_17, [
        _hoisted_18,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_19,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_23, [
        _hoisted_24,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_25,
    createBaseVNode("ul", null, [
      _hoisted_27,
      createBaseVNode("li", null, [
        _hoisted_28,
        createBaseVNode("ul", null, [
          _hoisted_29,
          createBaseVNode("li", null, [
            _hoisted_30,
            _hoisted_31,
            _hoisted_32,
            _hoisted_33,
            _hoisted_34,
            _hoisted_35,
            _hoisted_36,
            _hoisted_37,
            _hoisted_38,
            _hoisted_39,
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                _hoisted_40,
                _hoisted_41,
                _hoisted_42,
                createBaseVNode("a", _hoisted_43, [
                  _hoisted_44,
                  createVNode(_component_OutboundLink)
                ])
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _hoisted_45,
        _hoisted_46,
        _hoisted_47,
        _hoisted_48,
        createBaseVNode("a", _hoisted_49, [
          _hoisted_50,
          createVNode(_component_OutboundLink)
        ]),
        _hoisted_51
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
