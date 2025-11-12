import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode("h1", {
      id: "浏览器-api",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#浏览器-api"
      }, [
        createBaseVNode("span", null, "浏览器 API")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#urlsearchparams" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("URLSearchParams")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#js-base64-编码-解码" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("JS Base64 编码/解码")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#base64-编码" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("Base64 编码")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#base64-解码" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("Base64 解码")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#中文报错" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("中文报错")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[6] || (_cache[6] = createStaticVNode('<h2 id="urlsearchparams" tabindex="-1"><a class="header-anchor" href="#urlsearchparams"><span>URLSearchParams</span></a></h2><p>URLSearchParams API 用于处理 URL 之中的查询字符串，即问号之后的部分。</p><p>没有部署不支持这个 API 的浏览器，可以用<code>url-search-params</code>这个垫片库。</p><p>URLSearchParams 有以下方法，用来操作某个参数。</p><ul><li><code>has()</code>：返回一个布尔值，表示是否具有某个参数</li><li><code>get()</code>：返回指定参数的第一个值</li><li><code>getAll()</code>：返回一个数组，成员是指定参数的所有值</li><li><code>set()</code>：设置指定参数</li><li><code>delete()</code>：删除指定参数</li><li><code>append()</code>：在查询字符串之中，追加一个键值对</li><li><code>toString()</code>：返回整个查询字符串</li></ul><p>以<code>get</code>为例：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> paramsString</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;name=jawil&amp;age=24&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> searchParams</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> URLSearchParams</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">paramsString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">searchParams</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;name&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// jawil</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详情请见<a href="https://github.com/justjavac/the-front-end-knowledge-you-may-not-know/issues/31#issuecomment-422712267" target="_blank" rel="noopener noreferrer">利用 URLSearchParams 对象获取URL之中的查询字符串，即问号之后的部分 #31</a></p><h2 id="js-base64-编码-解码" tabindex="-1"><a class="header-anchor" href="#js-base64-编码-解码"><span>JS Base64 编码/解码</span></a></h2><h3 id="base64-编码" tabindex="-1"><a class="header-anchor" href="#base64-编码"><span>Base64 编码</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">btoa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;zhangxinxu&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 返回：&#39;emhhbmd4aW54dQ==&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="base64-解码" tabindex="-1"><a class="header-anchor" href="#base64-解码"><span>Base64 解码</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">atob</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;emhhbmd4aW54dQ==&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 返回：&#39;zhangxinxu&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="中文报错" tabindex="-1"><a class="header-anchor" href="#中文报错"><span>中文报错</span></a></h3><p>涉及到给中文编码时，会出现报错，解决方法是编码之前先<code>encode</code>编码。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">btoa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">encodeURIComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;嘻嘻哈哈哈哈啦啦啦啦&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">decodeURIComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">atob</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;JUU1JTk4JUJCJUU1JTk4JUJCJUU1JTkzJTg4JUU1JTkzJTg4JUU1JTkzJTg4JUU1JTkzJTg4JUU1JTk1JUE2JUU1JTk1JUE2JUU1JTk1JUE2JUU1JTk1JUE2&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Reference: <a href="https://www.zhangxinxu.com/wordpress/2018/08/js-base64-atob-btoa-encode-decode/" target="_blank" rel="noopener noreferrer">张鑫旭-原来浏览器原生支持JS Base64编码解码</a></p>', 17)),
    createVNode(_component_global_config)
  ]);
}
const browserApi_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "browser-api.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/browser/browser-api.html","title":"浏览器 API","lang":"en-US","frontmatter":{"description":"浏览器 API URLSearchParams URLSearchParams API 用于处理 URL 之中的查询字符串，即问号之后的部分。 没有部署不支持这个 API 的浏览器，可以用url-search-params这个垫片库。 URLSearchParams 有以下方法，用来操作某个参数。 has()：返回一个布尔值，表示是否具有某个参数 ge...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/browser/browser-api.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"浏览器 API"}],["meta",{"property":"og:description","content":"浏览器 API URLSearchParams URLSearchParams API 用于处理 URL 之中的查询字符串，即问号之后的部分。 没有部署不支持这个 API 的浏览器，可以用url-search-params这个垫片库。 URLSearchParams 有以下方法，用来操作某个参数。 has()：返回一个布尔值，表示是否具有某个参数 ge..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"浏览器 API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"URLSearchParams","slug":"urlsearchparams","link":"#urlsearchparams","children":[]},{"level":2,"title":"JS Base64 编码/解码","slug":"js-base64-编码-解码","link":"#js-base64-编码-解码","children":[{"level":3,"title":"Base64 编码","slug":"base64-编码","link":"#base64-编码","children":[]},{"level":3,"title":"Base64 解码","slug":"base64-解码","link":"#base64-解码","children":[]},{"level":3,"title":"中文报错","slug":"中文报错","link":"#中文报错","children":[]}]}],"git":{"createdTime":1580713116000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":1.07,"words":320},"filePathRelative":"browser-env/browser/browser-api.md","localizedDate":"February 3, 2020","autoDesc":true}');
export {
  browserApi_html as comp,
  data
};
