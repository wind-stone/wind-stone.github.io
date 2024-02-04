import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u7C7B\u578B\u7CFB\u7EDF",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7C7B\u578B\u7CFB\u7EDF",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7C7B\u578B\u7CFB\u7EDF")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u7D22\u5F15\u8BBF\u95EE");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u7D22\u5F15\u4E0D\u5B58\u5728\u7684\u5C5E\u6027");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u83B7\u53D6\u6570\u7EC4\u5143\u7D20\u7684\u7C7B\u578B");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("T[K]");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u7C7B\u578B\u63A8\u5BFC");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u7C7B\u578B\u65AD\u8A00");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u7C7B\u578B\u5B88\u536B");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u7C7B\u578B\u6536\u7A84");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u7ED3\u6784\u5316\u7C7B\u578B");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u53C2\u8003\u6587\u6863");
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u7D22\u5F15\u8BBF\u95EE",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7D22\u5F15\u8BBF\u95EE",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7D22\u5F15\u8BBF\u95EE")
], -1);
const _hoisted_14 = {
  href: "https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Indexed Access Types");
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u7D22\u5F15\u8BBF\u95EE\u7C7B\u578B\u53BB\u67E5\u8BE2\u53E6\u4E00\u4E2A\u7C7B\u578B\u6307\u5B9A\u5C5E\u6027\u7684\u7C7B\u578B\u3002</p><h3 id="\u7D22\u5F15\u4E0D\u5B58\u5728\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15\u4E0D\u5B58\u5728\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u7D22\u5F15\u4E0D\u5B58\u5728\u7684\u5C5E\u6027</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> alive<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// Property &#39;alve&#39; does not exist on type &#39;Person&#39;.</span>\n<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I1</span></span> <span class="token operator">=</span> Person<span class="token punctuation">[</span><span class="token string">&quot;alve&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u82E5\u662F\u7D22\u5F15\u4E0D\u5B58\u5728\u7684\u5C5E\u6027\uFF0C\u5C06\u5F97\u5230\u62A5\u9519\u3002</p><h3 id="\u83B7\u53D6\u6570\u7EC4\u5143\u7D20\u7684\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6570\u7EC4\u5143\u7D20\u7684\u7C7B\u578B" aria-hidden="true">#</a> \u83B7\u53D6\u6570\u7EC4\u5143\u7D20\u7684\u7C7B\u578B</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> MyArray <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">15</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">23</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;Eve&quot;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">38</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// type Person = {</span>\n<span class="token comment">//     name: string;</span>\n<span class="token comment">//     age: number;</span>\n<span class="token comment">// }</span>\n<span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> MyArray<span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// type Age = number</span>\n<span class="token keyword">type</span> <span class="token class-name">Age</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> MyArray<span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u6CE8\u610F\uFF0C<code>typeof MyArray[number]</code>\u5B9E\u9645\u4E0A\u662F<code>(typeof MyArray)[number]</code>\uFF0C<code>typeof MyArray</code>\u83B7\u53D6<code>MyArray</code>\u7684\u7C7B\u578B\uFF0C\u5F97\u5230\u6570\u7EC4\u7C7B\u578B<code>{name: string; age: number;}[]</code>\uFF0C\u6700\u540E\u83B7\u53D6\u6570\u7EC4\u9879\u7684\u7C7B\u578B\u3002</p><h3 id="t-k" tabindex="-1"><a class="header-anchor" href="#t-k" aria-hidden="true">#</a> T[K]</h3><ul><li><code>T[K]</code>\uFF0C\u83B7\u53D6 T \u4E2D<code>key</code>\u4E3A K \u7684\u7C7B\u578B\u7EC4\u6210\u7684\u8054\u5408\u7C7B\u578B\uFF0C\u5176\u4E2D K \u662F\u5B57\u9762\u91CF\u7C7B\u578B\u6216\u5176\u8054\u5408\u7C7B\u578B\u3002</li><li><code>T[keyof T]</code>\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5230 T \u4E2D\u6240\u6709<code>key</code>\u7684\u7C7B\u578B\u7EC4\u6210\u7684\u8054\u5408\u7C7B\u578B\u3002</li><li><code>T[keyof K]</code>\uFF0C\u83B7\u53D6\u5230\u7684\u662F T \u4E2D\u540C\u65F6\u5B58\u5728\u4E8E T \u548C K \u7684<code>key</code>\u7684\u7C7B\u578B\u7EC4\u6210\u7684\u8054\u5408\u7C7B\u578B\u3002</li></ul><p>\u6CE8\u610F\uFF1A\u5982\u679C<code>[]</code>\u4E2D\u7684<code>key</code>\u6709\u4E0D\u5B58\u5728 T \u4E2D\u7684\uFF0C\u5219\u8BE5<code>key</code>\u7684\u7C7B\u578B\u662F<code>any</code>\uFF1B\u56E0\u4E3A TypeScript \u4E5F\u4E0D\u77E5\u9053\u8BE5<code>key</code>\u6700\u7EC8\u662F\u4EC0\u4E48\u7C7B\u578B\uFF0C\u6240\u4EE5\u662F<code>any</code>\uFF0C\u4E14\u4E5F\u4F1A\u62A5\u9519\u3002</p><h2 id="\u7C7B\u578B\u63A8\u5BFC" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u63A8\u5BFC" aria-hidden="true">#</a> \u7C7B\u578B\u63A8\u5BFC</h2><h2 id="\u7C7B\u578B\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00" aria-hidden="true">#</a> \u7C7B\u578B\u65AD\u8A00</h2><p>\u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF1A</p><ul><li><code>value as Type</code></li><li><code>&lt;Type&gt;value</code></li></ul><h2 id="\u7C7B\u578B\u5B88\u536B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u5B88\u536B" aria-hidden="true">#</a> \u7C7B\u578B\u5B88\u536B</h2><p>\u7C7B\u578B\u5B88\u536B\uFF08<code>Type Guard</code>\uFF09\u3002</p><p>\u53EF\u7528\u4E8E\u7C7B\u578B\u5B88\u536B\u7684\u8FD0\u7B97\u7B26\uFF1A</p>', 17);
const _hoisted_33 = /* @__PURE__ */ createStaticVNode("<li><code>switch/case</code>\uFF0C\u5F53\u8054\u5408\u7C7B\u578B\u91CC\u7684\u5404\u4E2A\u7C7B\u578B\u90FD\u5B58\u5728\u4E00\u4E2A\u76F8\u540C\u540D\u79F0\u7684\u5B57\u9762\u91CF\u7C7B\u578B\u7684\u5C5E\u6027\uFF0C\u4E14\u5B57\u9762\u91CF\u7C7B\u578B\u5404\u4E0D\u76F8\u540C</li><li><code>if/else</code> + <code>in</code>\uFF0C\u5F53\u8054\u5408\u7C7B\u578B\u91CC\u7684\u67D0\u4E2A\u7C7B\u578B\u5B58\u5728\u4E00\u4E2A\u72EC\u6709\u7684\u5C5E\u6027</li><li><code>if/else</code> + <code>typeof</code></li><li><code>instanceof</code>\uFF0C\u68C0\u67E5\u662F\u5426\u662F\u8054\u5408\u7C7B\u578B\u91CC\u67D0\u4E2A\u7C7B\u7C7B\u578B\u7684\u5B9E\u4F8B</li><li><code>==</code>\u3001<code>!=</code>\u3001<code>===</code>\u3001<code>!==</code>\uFF0C\u7528\u8FD9\u4E9B\u64CD\u4F5C\u7B26\u4E0E\u5B57\u9762\u91CF\u7684\u503C\u6BD4\u8F83\u65F6</li>", 5);
const _hoisted_38 = {
  href: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_39 = /* @__PURE__ */ createTextVNode("\u81EA\u5B9A\u4E49\u5B88\u536B");
const _hoisted_40 = /* @__PURE__ */ createStaticVNode('<h3 id="\u7C7B\u578B\u6536\u7A84" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u6536\u7A84" aria-hidden="true">#</a> \u7C7B\u578B\u6536\u7A84</h3><p>\u7C7B\u578B\u6536\u7A84\uFF0C<code>Type Narrowing</code></p><h2 id="\u7ED3\u6784\u5316\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u5316\u7C7B\u578B" aria-hidden="true">#</a> \u7ED3\u6784\u5316\u7C7B\u578B</h2><p>TypeScript \u7684\u7C7B\u578B\u68C0\u67E5\uFF0C\u662F\u901A\u8FC7\u68C0\u67E5\u503C\u7684\u5F62\u72B6\u6765\u5224\u65AD\u7684\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span>\n        <span class="token keyword">public</span> firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n        <span class="token keyword">public</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span>\n    <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span>\n        <span class="token keyword">public</span> firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n        <span class="token keyword">public</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n        <span class="token keyword">public</span> marks<span class="token operator">:</span> <span class="token builtin">number</span>\n    <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// print fullname of a `Person` object</span>\n<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span> p<span class="token operator">:</span> Person <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> p<span class="token punctuation">.</span>firstName <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> p<span class="token punctuation">.</span>lastName <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> ross <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span> <span class="token string">&#39;Ross&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Geller&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> monica <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span> <span class="token string">&#39;Monica&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Geller&#39;</span><span class="token punctuation">,</span> <span class="token number">84</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&#39;Ross =&gt;&#39;</span><span class="token punctuation">,</span> <span class="token function">getFullName</span><span class="token punctuation">(</span> ross <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&#39;Monica =&gt;&#39;</span><span class="token punctuation">,</span> <span class="token function">getFullName</span><span class="token punctuation">(</span> monica <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u4E0A\u8FF0\u793A\u4F8B\u4E2D\uFF0C\u5C3D\u7BA1\u6211\u4EEC\u6CA1\u6709\u663E\u5F0F\u5730\u63D0\u53CA<code>Student</code>\u7C7B\u7EE7\u627F\u4E86<code>Person</code>\u7C7B\uFF0C\u4F46\u662F TypeScript \u5141\u8BB8<code>Student</code>\u7C7B\u7684\u5B9E\u4F8B\u4F5C\u4E3A<code>p</code>\u53C2\u6570\u7684\u503C\u3002\u8FD9\u662F\u56E0\u4E3A<code>Student</code>\u7C7B\u7684\u5B9E\u4F8B<code>monica</code>\u5177\u6709<code>string</code>\u7C7B\u578B\u7684<code>firstName</code>\u548C<code>lastName</code>\u5C5E\u6027\uFF0CTypeScript \u5728\u6821\u9A8C\u53C2\u6570<code>p</code>\u65F6\u53EA\u662F\u6821\u9A8C\u4F20\u5165\u7684\u503C\u662F\u5426\u5177\u6709\u4E0E<code>Person</code>\u7C7B\u76F8\u540C\u7684\u7ED3\u6784\uFF0C\u800C\u4E0D\u662F\u6821\u9A8C\u662F\u5426\u662F<code>Person</code>\u7684\u5B9E\u4F8B\u3002</p><p>\u8FD9\u4E5F\u8BC1\u660E TypeScript \u662F\u7ED3\u6784\u5316\u7C7B\u578B\u8BED\u8A00\uFF0C\u4E5F\u79F0\u4E3A<code>\u9E2D\u5F0F\u7C7B\u578B</code>\uFF0C\u5373\u201C\u5982\u679C\u5B83\u8D70\u8D77\u6765\u50CF\u9E2D\u5B50\uFF0C\u53EB\u8D77\u6765\u50CF\u9E2D\u5B50\uFF0C\u6E38\u8D77\u6765\u50CF\u9E2D\u5B50\uFF0C\u90A3\u4E48\u5B83\u5C31\u662F\u4E2A\u9E2D\u5B50\u201D\u3002\u7531\u4E8E<code>Student</code>\u7C7B\u578B\u62E5\u6709<code>Person</code>\u7C7B\u578B\u7684\u884C\u4E3A\uFF0C\u56E0\u6B64 TypeScript \u8BA4\u4E3A\u5B83\u4E5F\u662F\u4E2A<code>Person</code>\u3002</p><p>\u4F60\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u6CD5\u5219\u5E94\u7528\u4E8E\u7C7B\u3002\u7531\u4E8E TypeScript \u91CC\u7684\u7C7B\u7C7B\u578B\u9690\u5F0F\u5730\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5305\u62EC\u4E86\u7C7B\u516C\u5171\u6210\u5458\u7684\u63A5\u53E3\uFF0C\u56E0\u6B64\u4F60\u53EF\u4EE5\u5C06\u76F8\u540C\u7684\u6CD5\u5219\u5E94\u7528\u5230\u63A5\u53E3\u4E0A\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n    firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>\n    firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    marks<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// print fullname of a `Person` object</span>\n<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span> p<span class="token operator">:</span> Person <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> p<span class="token punctuation">.</span>firstName <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> p<span class="token punctuation">.</span>lastName <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> ross<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>\n    firstName<span class="token operator">:</span> <span class="token string">&#39;Ross&#39;</span><span class="token punctuation">,</span>\n    lastName<span class="token operator">:</span> <span class="token string">&#39;Geller&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> monica<span class="token operator">:</span> Student <span class="token operator">=</span> <span class="token punctuation">{</span>\n    firstName<span class="token operator">:</span> <span class="token string">&#39;Monica&#39;</span><span class="token punctuation">,</span>\n    lastName<span class="token operator">:</span> <span class="token string">&#39;Geller&#39;</span><span class="token punctuation">,</span>\n    marks<span class="token operator">:</span> <span class="token number">84</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&#39;Ross =&gt;&#39;</span><span class="token punctuation">,</span> <span class="token function">getFullName</span><span class="token punctuation">(</span> ross <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&#39;Monica =&gt;&#39;</span><span class="token punctuation">,</span> <span class="token function">getFullName</span><span class="token punctuation">(</span> monica <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u5F53\u7C7B\u578B A \u5177\u6709\u7C7B\u578B B \u7684\u6240\u6709\u5C5E\u6027\uFF0C\u5219 A \u6210\u4E3A B \u7684\u5B50\u7C7B\u578B\u3002</p><p>\u4E0A\u8FF0\u793A\u4F8B\u91CC\uFF0C<code>Student</code>\u63A5\u53E3\u5373\u4E3A<code>Person</code>\u63A5\u53E3\u7684\u5B50\u7C7B\u578B\u3002\u7C7B\u578B\u4E3A<code>Student</code>\u7684\u5BF9\u8C61<code>monica</code>\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u7C7B\u578B\u4E3A<code>Person</code>\u7684\u53C2\u6570<code>p</code>\u7684\u503C\uFF0C\u8FD9\u79CD\u884C\u4E3A\u79F0\u4E3A<strong>\u7ED3\u6784\u5316\u5B50\u7C7B\u578B</strong>\u3002</p><p>\u4F46\u7ED3\u6784\u5316\u5B50\u7C7B\u578B\u5E76\u4E0D\u662F\u5728\u4EFB\u4F55\u573A\u666F\u4E0B\u90FD\u662F\u5408\u6CD5\u7684\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n    firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// accept an argument of type `Person</span>\n<span class="token keyword">let</span> printPerson <span class="token operator">=</span> <span class="token punctuation">(</span> person<span class="token operator">:</span> Person <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> person<span class="token punctuation">.</span>firstName <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> person<span class="token punctuation">.</span>lastName <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// legal</span>\n<span class="token keyword">let</span> ross <span class="token operator">=</span> <span class="token punctuation">{</span> firstName<span class="token operator">:</span> <span class="token string">&#39;Ross&#39;</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token string">&#39;Geller&#39;</span><span class="token punctuation">,</span> gender<span class="token operator">:</span> <span class="token string">&#39;Male&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token function">printPerson</span><span class="token punctuation">(</span> ross <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// illegal</span>\n<span class="token comment">// Object literal may only specify known properties, and &#39;gender&#39; does not exist in type &#39;Person&#39;.</span>\n<span class="token function">printPerson</span><span class="token punctuation">(</span> <span class="token punctuation">{</span> firstName<span class="token operator">:</span> <span class="token string">&#39;Ross&#39;</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token string">&#39;Geller&#39;</span><span class="token punctuation">,</span> gender<span class="token operator">:</span> <span class="token string">&#39;Male&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// legal</span>\n<span class="token keyword">let</span> monica<span class="token operator">:</span> Person<span class="token punctuation">;</span>\n<span class="token keyword">let</span> monana <span class="token operator">=</span> <span class="token punctuation">{</span> firstName<span class="token operator">:</span> <span class="token string">&#39;Monica&#39;</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token string">&#39;Geller&#39;</span><span class="token punctuation">,</span> gender<span class="token operator">:</span> <span class="token string">&#39;Male&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\nmonica <span class="token operator">=</span> monana<span class="token punctuation">;</span>\n\n<span class="token comment">// illegal</span>\n<span class="token comment">// Error: Object literal may only specify known properties, and &#39;gender&#39; does not exist in type &#39;Person&#39;.</span>\n<span class="token keyword">let</span> p<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span> firstName<span class="token operator">:</span> <span class="token string">&#39;Ross&#39;</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token string">&#39;Geller&#39;</span><span class="token punctuation">,</span> gender<span class="token operator">:</span> <span class="token string">&#39;Male&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>TypeScript \u5141\u8BB8\u4F7F\u7528\u4E00\u4E2A\u53D8\u91CF\u5F15\u7528\u4EE3\u66FF\u5B50\u7C7B\u578B\uFF08TypeScript \u80FD\u4ECE\u5B57\u9762\u91CF\u503C\u63A8\u5BFC\u51FA\u53D8\u91CF\u7684\u7C7B\u578B\uFF0C\u56E0\u800C\u9690\u5F0F\u5730\u4EA7\u751F\u5B50\u7C7B\u578B\uFF09\uFF0C\u4F46\u662F\u4E0D\u5141\u8BB8\u76F4\u63A5\u4F7F\u7528\u5B57\u9762\u91CF\u503C\uFF08\u5426\u5219\u5BB9\u6613\u8BEF\u5BFC\uFF09\u3002</p><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h2>', 15);
const _hoisted_55 = {
  href: "https://medium.com/jspoint/typescript-type-system-81fdb84bba75",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_56 = /* @__PURE__ */ createTextVNode("Understanding the TypeScript\u2019s type system and some must-know concepts");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7D22\u5F15\u8BBF\u95EE" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u7D22\u5F15\u4E0D\u5B58\u5728\u7684\u5C5E\u6027" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u83B7\u53D6\u6570\u7EC4\u5143\u7D20\u7684\u7C7B\u578B" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#t-k" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7C7B\u578B\u63A8\u5BFC" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7C7B\u578B\u65AD\u8A00" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7C7B\u578B\u5B88\u536B" }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u7C7B\u578B\u6536\u7A84" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7ED3\u6784\u5316\u7C7B\u578B" }, {
            default: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u53C2\u8003\u6587\u6863" }, {
            default: withCtx(() => [
              _hoisted_12
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_13,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_14, [
        _hoisted_15,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_16,
    createBaseVNode("ul", null, [
      _hoisted_33,
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_38, [
          _hoisted_39,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_40,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_55, [
          _hoisted_56,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
