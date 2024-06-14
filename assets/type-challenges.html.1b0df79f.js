import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "typescript-\u7C7B\u578B\u4F53\u64CD",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#typescript-\u7C7B\u578B\u4F53\u64CD",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" TypeScript \u7C7B\u578B\u4F53\u64CD")
], -1);
const _hoisted_2 = {
  href: "https://github.com/type-challenges/type-challenges",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createTextVNode("github - type-challenges");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u5177\u4F53\u7B54\u6848\u53EF\u53C2\u8003: ");
const _hoisted_5 = {
  href: "https://juejin.cn/post/6999280101556748295",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createTextVNode("TypeScript \u7C7B\u578B\u4F53\u64CD\u59FF\u52BF\u5408\u96C6<\u901A\u5173\u603B\u7ED3>--\u5237\u5B8C");
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u7B80\u5355",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7B80\u5355",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7B80\u5355")
], -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u5B9E\u73B0-pick",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5B9E\u73B0-pick",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5B9E\u73B0 Pick")
], -1);
const _hoisted_9 = {
  href: "https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.zh-CN.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = /* @__PURE__ */ createTextVNode("4\u30FB\u5B9E\u73B0 Pick");
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">MyPick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span>key <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5B9E\u73B0-readonly" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-readonly" aria-hidden="true">#</a> \u5B9E\u73B0 Readonly</h3>', 2);
const _hoisted_13 = {
  href: "https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.zh-CN.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createTextVNode("7\u30FB\u5B9E\u73B0 Readonly");
const _hoisted_15 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">MyReadonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">+</span><span class="token keyword">readonly</span> <span class="token punctuation">[</span>key <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5143\u7EC4\u8F6C\u6362\u4E3A\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5143\u7EC4\u8F6C\u6362\u4E3A\u5BF9\u8C61" aria-hidden="true">#</a> \u5143\u7EC4\u8F6C\u6362\u4E3A\u5BF9\u8C61</h3>', 2);
const _hoisted_17 = {
  href: "https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.zh-CN.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_18 = /* @__PURE__ */ createTextVNode("11\u30FB\u5143\u7EC4\u8F6C\u6362\u4E3A\u5BF9\u8C61");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("\u524D\u63D0\u77E5\u8BC6\uFF1A");
const _hoisted_20 = {
  href: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_21 = /* @__PURE__ */ createTextVNode("const assertions");
const _hoisted_22 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TupleToObject<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">readonly</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span>key <span class="token keyword">in</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">:</span> key\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u7B2C\u4E00\u4E2A\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u4E2A\u5143\u7D20" aria-hidden="true">#</a> \u7B2C\u4E00\u4E2A\u5143\u7D20</h3>', 2);
const _hoisted_24 = {
  href: "https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.zh-CN.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_25 = /* @__PURE__ */ createTextVNode("14\u30FB\u7B2C\u4E00\u4E2A\u5143\u7D20");
const _hoisted_26 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">First<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token builtin">never</span> <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n\n<span class="token comment">// \u8FD9\u79CD\u65B9\u5F0F\u4E5F\u884C\uFF0C\u4F46\u662F\u4E0A\u9762\u7684\u65B9\u6CD5\u66F4\u597D</span>\n<span class="token keyword">type</span> <span class="token class-name">First<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">T</span></span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token builtin">never</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u77E5\u8BC6\u70B9\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">EmptyArray</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token keyword">type</span> <span class="token class-name">FirstElement</span> <span class="token operator">=</span> EmptyArray<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// Tuple type &#39;[]&#39; of length &#39;0&#39; has no element at index &#39;0&#39;.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude" aria-hidden="true">#</a> Exclude</h3>', 4);
const _hoisted_30 = {
  href: "https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.zh-CN.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_31 = /* @__PURE__ */ createTextVNode("43\u30FBExclude");
const _hoisted_32 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">MyExclude<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">U</span></span> <span class="token operator">?</span> <span class="token builtin">never</span> <span class="token operator">:</span> <span class="token constant">T</span>\n\n<span class="token keyword">type</span> <span class="token class-name">Result</span> <span class="token operator">=</span> MyExclude<span class="token operator">&lt;</span><span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;b&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token operator">&gt;</span> <span class="token comment">// &#39;b&#39; | &#39;c&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>', 1);
const _hoisted_33 = /* @__PURE__ */ createTextVNode("\u77E5\u8BC6\u70B9\uFF1A");
const _hoisted_34 = {
  href: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_35 = /* @__PURE__ */ createTextVNode("Distributive Conditional Types");
const _hoisted_36 = /* @__PURE__ */ createTextVNode("\uFF0C\u5373\u5728");
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("code", null, "X extends Y", -1);
const _hoisted_38 = /* @__PURE__ */ createTextVNode("\u7684\u6761\u4EF6\u7C7B\u578B\u8BED\u53E5\u4E2D\uFF0C\u82E5");
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("code", null, "X", -1);
const _hoisted_40 = /* @__PURE__ */ createTextVNode("\u662F\u8054\u5408\u7C7B\u578B\uFF0C\u5219\u4F1A\u5C06\u8054\u5408\u7C7B\u578B\u7684\u6BCF\u4E00\u4E2A\u6210\u5458\u4EE3\u5165\u8FDB\u884C\u72EC\u7ACB\u8BA1\u7B97\uFF0C\u518D\u5C06\u7ED3\u679C\u7EC4\u5408\u6210\u8054\u5408\u7C7B\u578B\u3002");
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "awaited",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#awaited",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Awaited")
], -1);
const _hoisted_42 = {
  href: "https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.zh-CN.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_43 = /* @__PURE__ */ createTextVNode("189\u30FBAwaited");
const _hoisted_44 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MyPromiseLike<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span> <span class="token function-variable function">then</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token function-variable function">onfulfilled</span><span class="token operator">:</span> <span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span> <span class="token punctuation">}</span>\n\n<span class="token keyword">type</span> <span class="token class-name">MyAwaited<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> MyPromiseLike<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">MyPromiseLike<span class="token operator">&lt;</span><span class="token keyword">infer</span> <span class="token constant">R</span><span class="token operator">&gt;</span></span>\n  <span class="token operator">?</span> <span class="token constant">R</span> <span class="token keyword">extends</span> <span class="token class-name">MyPromiseLike<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span></span>\n    <span class="token operator">?</span> MyAwaited<span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span>\n    <span class="token operator">:</span> <span class="token constant">R</span>\n  <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>', 1);
const _hoisted_45 = /* @__PURE__ */ createTextVNode("\u77E5\u8BC6\u70B9\uFF1A");
const _hoisted_46 = {
  href: "https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_es5_d_.promiselike.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_47 = /* @__PURE__ */ createTextVNode("PromiseLike");
const _hoisted_48 = /* @__PURE__ */ createStaticVNode('<p>\u9700\u8981\u786E\u4FDD\uFF1A</p><ul><li>\u4F20\u7ED9<code>MyAwaited</code>\u7684\u7C7B\u578B\u662F<code>PromiseLike</code>\u7684\u5B50\u7C7B\u578B</li><li>\u9012\u5F52\u5904\u7406<code>MyAwaited&lt;Promise&lt;Promise&lt;string | number&gt;&gt;&gt;</code>\u7684\u60C5\u51B5</li></ul><h3 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> If</h3>', 3);
const _hoisted_51 = {
  href: "https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.zh-CN.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_52 = /* @__PURE__ */ createTextVNode("268\u30FBIf");
const _hoisted_53 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">If<span class="token operator">&lt;</span><span class="token constant">C</span> <span class="token keyword">extends</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">F</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">C</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token boolean">true</span></span> <span class="token operator">?</span> <span class="token constant">T</span> <span class="token operator">:</span> <span class="token constant">F</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="concat" tabindex="-1"><a class="header-anchor" href="#concat" aria-hidden="true">#</a> Concat</h3>', 2);
const _hoisted_55 = {
  href: "https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.zh-CN.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_56 = /* @__PURE__ */ createTextVNode("533\u30FBConcat");
const _hoisted_57 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Concat<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token constant">U</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>', 1);
const _hoisted_58 = /* @__PURE__ */ createTextVNode("\u77E5\u8BC6\u70B9\uFF1A");
const _hoisted_59 = {
  href: "https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_60 = /* @__PURE__ */ createTextVNode("Tuple");
const _hoisted_61 = /* @__PURE__ */ createTextVNode("\u7C7B\u578B\u53EF\u4EE5\u6269\u5C55\u8FD0\u7B97\u7B26\uFF08");
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("code", null, "...", -1);
const _hoisted_63 = /* @__PURE__ */ createTextVNode("\uFF09\u6765\u521B\u5EFA\u65B0\u7684\u7C7B\u578B\u3002");
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "includes",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#includes",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Includes")
], -1);
const _hoisted_65 = {
  href: "https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.zh-CN.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_66 = /* @__PURE__ */ createTextVNode("898\u30FBIncludes");
const _hoisted_67 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">IEqual<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span><span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span>\n  <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token constant">X</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token constant">X</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">extends</span>\n  <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token constant">X</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token constant">X</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">U</span></span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span><span class="token boolean">false</span>\n\n<span class="token keyword">type</span> <span class="token class-name">Includes<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">readonly</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">[</span><span class="token keyword">infer</span> <span class="token constant">V</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token keyword">infer</span> <span class="token constant">R</span><span class="token punctuation">]</span>\n  <span class="token operator">?</span> IEqual<span class="token operator">&lt;</span><span class="token constant">V</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token boolean">true</span></span>\n    <span class="token operator">?</span> <span class="token boolean">true</span>\n    <span class="token operator">:</span> Includes<span class="token operator">&lt;</span><span class="token constant">R</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span>\n  <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u77E5\u8BC6\u70B9\uFF1A</p>', 2);
const _hoisted_69 = /* @__PURE__ */ createTextVNode("\u5982\u4F55\u5224\u65AD\u4E24\u4E2A\u7C7B\u578B\u76F8\u7B49\uFF1F");
const _hoisted_70 = {
  href: "https://github.com/microsoft/TypeScript/issues/27024#issuecomment-421529650",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_71 = /* @__PURE__ */ createTextVNode("Feature request - type level equal operator");
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("li", null, "\u901A\u8FC7 infer + IEqual \u9012\u5F52\u8C03\u7528\uFF0C\u786E\u5B9A U \u4E0E T \u91CC\u7684\u67D0\u4E2A\u7C7B\u578B\u76F8\u7B49\u3002", -1);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "push-unshift",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#push-unshift",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Push/Unshift")
], -1);
const _hoisted_74 = {
  href: "https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.zh-CN.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_75 = /* @__PURE__ */ createTextVNode("3057\u30FBPush");
const _hoisted_76 = {
  href: "https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_77 = /* @__PURE__ */ createTextVNode("3060\u30FBUnshift");
const _hoisted_78 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Push<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token punctuation">]</span>\n<span class="token keyword">type</span> <span class="token class-name">Unshift<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token constant">T</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u77E5\u8BC6\u70B9\uFF1A\u540C Concat</p><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3>', 3);
const _hoisted_81 = {
  href: "https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_82 = /* @__PURE__ */ createTextVNode("3312\u30FBParameters");
const _hoisted_83 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> arg2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// \u5B9E\u73B0</span>\n<span class="token keyword">type</span> <span class="token class-name">MyParameters<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token keyword">infer</span> Args <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">any</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span>\n  <span class="token operator">?</span> Args\n  <span class="token operator">:</span> <span class="token builtin">never</span>\n\n<span class="token keyword">type</span> <span class="token class-name">FunctionParamsType</span> <span class="token operator">=</span> MyParameters<span class="token operator">&lt;</span><span class="token keyword">typeof</span> foo<span class="token operator">&gt;</span> <span class="token comment">// [arg1: string, arg2: number]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u4E2D\u7B49" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u7B49" aria-hidden="true">#</a> \u4E2D\u7B49</h2><h3 id="get-return-type" tabindex="-1"><a class="header-anchor" href="#get-return-type" aria-hidden="true">#</a> Get Return Type</h3>', 3);
const _hoisted_86 = {
  href: "https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_87 = /* @__PURE__ */ createTextVNode("2\u30FBGet Return Type");
const _hoisted_88 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>v<span class="token punctuation">)</span>\n        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">else</span>\n        <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// \u5B9E\u73B0</span>\n<span class="token keyword">type</span> <span class="token class-name">MyReturnType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">infer</span> <span class="token constant">R</span> <span class="token operator">?</span> <span class="token constant">R</span> <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">;</span>\n\n<span class="token keyword">type</span> <span class="token class-name">a</span> <span class="token operator">=</span> MyReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> fn<span class="token operator">&gt;</span> <span class="token comment">// should be &quot;1 | 2&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="omit" tabindex="-1"><a class="header-anchor" href="#omit" aria-hidden="true">#</a> Omit</h3>', 2);
const _hoisted_90 = {
  href: "https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_91 = /* @__PURE__ */ createTextVNode("3\u30FBOmit");
const _hoisted_92 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    description<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    completed<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// \u5B9E\u73B0</span>\n<span class="token keyword">type</span> <span class="token class-name">MyOmit<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>key <span class="token keyword">in</span> Exclude<span class="token operator">&lt;</span><span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">type</span> <span class="token class-name">TodoPreview</span> <span class="token operator">=</span> MyOmit<span class="token operator">&lt;</span>Todo<span class="token punctuation">,</span> <span class="token string">&#39;description&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;title&#39;</span><span class="token operator">&gt;</span>\n\n<span class="token keyword">const</span> todo<span class="token operator">:</span> TodoPreview <span class="token operator">=</span> <span class="token punctuation">{</span>\n    completed<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>', 1);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          _hoisted_3,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        _hoisted_4,
        createBaseVNode("a", _hoisted_5, [
          _hoisted_6,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_7,
    _hoisted_8,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_9, [
        _hoisted_10,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_11,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_13, [
        _hoisted_14,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_15,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_17, [
        _hoisted_18,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createBaseVNode("p", null, [
      _hoisted_19,
      createBaseVNode("a", _hoisted_20, [
        _hoisted_21,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_22,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_24, [
        _hoisted_25,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_26,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_30, [
        _hoisted_31,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_32,
    createBaseVNode("p", null, [
      _hoisted_33,
      createBaseVNode("a", _hoisted_34, [
        _hoisted_35,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_36,
      _hoisted_37,
      _hoisted_38,
      _hoisted_39,
      _hoisted_40
    ]),
    _hoisted_41,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_42, [
        _hoisted_43,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_44,
    createBaseVNode("p", null, [
      _hoisted_45,
      createBaseVNode("a", _hoisted_46, [
        _hoisted_47,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_48,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_51, [
        _hoisted_52,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_53,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_55, [
        _hoisted_56,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_57,
    createBaseVNode("p", null, [
      _hoisted_58,
      createBaseVNode("a", _hoisted_59, [
        _hoisted_60,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_61,
      _hoisted_62,
      _hoisted_63
    ]),
    _hoisted_64,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_65, [
        _hoisted_66,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_67,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_69,
        createBaseVNode("a", _hoisted_70, [
          _hoisted_71,
          createVNode(_component_OutboundLink)
        ])
      ]),
      _hoisted_72
    ]),
    _hoisted_73,
    createBaseVNode("ul", null, [
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
      ])
    ]),
    _hoisted_78,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_81, [
        _hoisted_82,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_83,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_86, [
        _hoisted_87,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_88,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_90, [
        _hoisted_91,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_92,
    createVNode(_component_global_config)
  ], 64);
}
var typeChallenges_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { typeChallenges_html as default };
