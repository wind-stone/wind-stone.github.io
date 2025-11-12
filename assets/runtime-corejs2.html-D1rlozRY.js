import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, f as createTextVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[6] || (_cache[6] = createBaseVNode("h1", {
      id: "babel-runtime-corejs2",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#babel-runtime-corejs2"
      }, [
        createBaseVNode("span", null, "@babel/runtime-corejs2")
      ])
    ], -1)),
    createBaseVNode("p", null, [
      _cache[1] || (_cache[1] = createBaseVNode("a", {
        href: "https://www.babeljs.cn/docs/babel-runtime-corejs2",
        target: "_blank",
        rel: "noopener noreferrer"
      }, [
        createBaseVNode("code", null, "@babel/runtime-corejs2")
      ], -1)),
      _cache[2] || (_cache[2] = createTextVNode("类似于")),
      createVNode(_component_RouteLink, { to: "/es6/babel/@babel/runtime.html" }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createBaseVNode("code", null, "@babel/runtime", -1)
        ])),
        _: 1
      }),
      _cache[3] || (_cache[3] = createTextVNode("，但是增加了")),
      _cache[4] || (_cache[4] = createBaseVNode("code", null, "polyfill", -1)),
      _cache[5] || (_cache[5] = createTextVNode("的功能。"))
    ]),
    _cache[7] || (_cache[7] = createStaticVNode('<p>因此，该插件可以代替<code>polyfill</code>，将 Promise 或 Symbol 转换为引用<code>core-js</code>库里的函数 ，但不能对内置对象的实例方法进行转换。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Promise</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>转换为：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> _Promise</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;@babel/runtime-corejs2/core-js/promise.js&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Babel 的辅助工具函数<code>helpers</code>也是这么转换的。</p>', 5)),
    createVNode(_component_global_config)
  ]);
}
const runtimeCorejs2_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "runtime-corejs2.html.vue"]]);
const data = JSON.parse('{"path":"/es6/babel/@babel/runtime-corejs2.html","title":"@babel/runtime-corejs2","lang":"en-US","frontmatter":{"description":"@babel/runtime-corejs2 @babel/runtime-corejs2类似于，但是增加了polyfill的功能。 因此，该插件可以代替polyfill，将 Promise 或 Symbol 转换为引用core-js库里的函数 ，但不能对内置对象的实例方法进行转换。 转换为： Babel 的辅助工具函数helpers也是这么转换的。","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/es6/babel/@babel/runtime-corejs2.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"@babel/runtime-corejs2"}],["meta",{"property":"og:description","content":"@babel/runtime-corejs2 @babel/runtime-corejs2类似于，但是增加了polyfill的功能。 因此，该插件可以代替polyfill，将 Promise 或 Symbol 转换为引用core-js库里的函数 ，但不能对内置对象的实例方法进行转换。 转换为： Babel 的辅助工具函数helpers也是这么转换的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2019-11-05T08:30:57.000Z"}],["meta",{"property":"article:modified_time","content":"2019-11-05T08:30:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"@babel/runtime-corejs2\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2019-11-05T08:30:57.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1572942657000,"updatedTime":1572942657000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.32,"words":96},"filePathRelative":"es6/babel/@babel/runtime-corejs2.md","localizedDate":"November 5, 2019","autoDesc":true}');
export {
  runtimeCorejs2_html as comp,
  data
};
