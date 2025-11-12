import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createBaseVNode("h1", {
      id: "缓存机制",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#缓存机制"
      }, [
        createBaseVNode("span", null, "缓存机制")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#参考文档" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("参考文档")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#浏览器默认过期时间-启发式新鲜度检查" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("浏览器默认过期时间（启发式新鲜度检查）")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[3] || (_cache[3] = createStaticVNode('<h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" target="_blank" rel="noopener noreferrer">MDN - HTTP caching</a></li><li><a href="https://datatracker.ietf.org/doc/html/rfc7234#section-4.2.2" target="_blank" rel="noopener noreferrer">RFC 7234: Hypertext Transfer Protocol (HTTP/1.1): 4.2.2. Calculating Heuristic Freshness</a></li></ul><h2 id="浏览器默认过期时间-启发式新鲜度检查" tabindex="-1"><a class="header-anchor" href="#浏览器默认过期时间-启发式新鲜度检查"><span>浏览器默认过期时间（启发式新鲜度检查）</span></a></h2><p>A 页面 HTML 的响应头：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Response headers</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Connection:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> keep-alive</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Content-Encoding:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gzip</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Content-Type:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> text/html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">charset</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">utf-8</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Date:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Wed,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 29</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Dec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2021</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 10:41:07</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> GMT</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Transfer-Encoding:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> chunked</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>B 页面 HTML 的响应头：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Response headers</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Connection:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> keep-alive</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Date:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Wed,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 29</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Dec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2021</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 10:39:40</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> GMT</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ETag:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;61cadb92-1cf6&quot;</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Last-Modified:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Tue,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 28</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Dec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2021</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 09:40:34</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> GMT</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问：浏览器会缓存页面 A、B 的 HTML 吗？</p><p>答：浏览器会缓存页面 B 的 HTML，但不会缓存页面 A 的 HTML。</p><p>以上两个 HTML 的响应头里都没有<code>Cache-Control</code>和<code>Expires</code>，且响应头里也不包含其他缓存相关的限制，因此浏览器默认会采用一个启发式的算法, 通常会取响应头的<code>Date</code>值 - <code>Last-Modified</code>值的<code>10%</code>作为缓存时间。</p><p>MDN 原文如下：</p><blockquote><p>Heuristic freshness checking</p><p>If an origin server does not explicitly specify freshness (for example, using Cache-Control or Expires header) then a heuristic approach may be used.</p><p>If this is the case, look for a Last-Modified header. If the header is present, then the cache&#39;s freshness lifetime is equal to the value of the Date header minus the value of the Last-modified header divided by 10. The expiration time is computed as follows:</p><blockquote><p>expirationTime = responseTime + freshnessLifetime - currentAge</p></blockquote><p>where responseTime is the time at which the response was received according to the browser. For more information see <a href="https://datatracker.ietf.org/doc/html/rfc7234#section-4.2.2" target="_blank" rel="noopener noreferrer">RFC 7234: Hypertext Transfer Protocol (HTTP/1.1): 4.2.2. Calculating Heuristic Freshness</a></p></blockquote>', 12)),
    createVNode(_component_global_config)
  ]);
}
const cache_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "cache.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/browser/cache.html","title":"缓存机制","lang":"en-US","frontmatter":{"description":"缓存机制 参考文档 MDN - HTTP caching RFC 7234: Hypertext Transfer Protocol (HTTP/1.1): 4.2.2. Calculating Heuristic Freshness 浏览器默认过期时间（启发式新鲜度检查） A 页面 HTML 的响应头： B 页面 HTML 的响应头： 问：浏览器会缓...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/browser/cache.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"缓存机制"}],["meta",{"property":"og:description","content":"缓存机制 参考文档 MDN - HTTP caching RFC 7234: Hypertext Transfer Protocol (HTTP/1.1): 4.2.2. Calculating Heuristic Freshness 浏览器默认过期时间（启发式新鲜度检查） A 页面 HTML 的响应头： B 页面 HTML 的响应头： 问：浏览器会缓..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-12-30T03:45:34.000Z"}],["meta",{"property":"article:modified_time","content":"2021-12-30T03:45:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"缓存机制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-12-30T03:45:34.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]},{"level":2,"title":"浏览器默认过期时间（启发式新鲜度检查）","slug":"浏览器默认过期时间-启发式新鲜度检查","link":"#浏览器默认过期时间-启发式新鲜度检查","children":[]}],"git":{"createdTime":1640776195000,"updatedTime":1640835934000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":2}]},"readingTime":{"minutes":1.16,"words":348},"filePathRelative":"browser-env/browser/cache.md","localizedDate":"December 29, 2021","autoDesc":true}');
export {
  cache_html as comp,
  data
};
