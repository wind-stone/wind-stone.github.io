import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[3] || (_cache[3] = createBaseVNode("h1", {
      id: "faq",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#faq"
      }, [
        createBaseVNode("span", null, "FAQ")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#为什么-chrome-浏览器的-ua-里会包含-applewebkit" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("为什么 Chrome 浏览器的 UA 里会包含 AppleWebkit？")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#现代浏览器里打开多个-tab-每个-tab-的端口是一样的吗" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("现代浏览器里打开多个 Tab，每个 Tab 的端口是一样的吗？")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#为什么有时访问-http-的-url-会变成访问-https-的-url" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("为什么有时访问 HTTP 的 URL 会变成访问 HTTPS 的 URL？")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[4] || (_cache[4] = createStaticVNode('<h2 id="为什么-chrome-浏览器的-ua-里会包含-applewebkit" tabindex="-1"><a class="header-anchor" href="#为什么-chrome-浏览器的-ua-里会包含-applewebkit"><span>为什么 Chrome 浏览器的 UA 里会包含 AppleWebkit？</span></a></h2><p>UA 是浏览器的身份证。通常，在发送 HTTP 请求时，UA 会附带在 HTTP 的请求头中<code>user-agent</code>字段中，这样服务器就会知道浏览器的基础信息，然后服务器会根据不同的 UA 返回不同的页面内容，比如手机上返回手机的样式，PC 就返回 PC 的样式。</p><p>你也可以在浏览器的控制台中输入<code>navigator.userAgent</code>来查看当前浏览器的UA信息。</p><p>FireFox 中的打印的信息是：<code>&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:68.0) Gecko/20100101 Firefox/68.0&quot;</code></p><p>Chrome 中打印的信息是：<code>&quot;Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Mobile Safari/537.36&quot;</code></p><p>安卓系统中的 Chrome 浏览器：<code>&quot;Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Mobile Safari/537.36&quot;</code></p><p>我们知道了服务器会根据不同的 UA 来针对性地设计不同页面，所以当出了一款新浏览器时，他如果使用自己独一无二的 UA，那么之前的很多服务器还需要针对他来做页面适配，这显然是不可能的，比如Chrome 发布时他会在他的 UA 中使用<code>Mozilla</code>，<code>AppleWebKit</code>等关键字段，用来表示他同时支持 Mozilla 和 AppleWebKit，然后再在最后加上他自己的标示，如<code>Chrome/xxx</code>。</p><p>这就解释了为什么你查看的信息中含有 WebKit 字样。</p><h2 id="现代浏览器里打开多个-tab-每个-tab-的端口是一样的吗" tabindex="-1"><a class="header-anchor" href="#现代浏览器里打开多个-tab-每个-tab-的端口是一样的吗"><span>现代浏览器里打开多个 Tab，每个 Tab 的端口是一样的吗？</span></a></h2><p>现代浏览器里可以同时打开多个 Tab，这些 Tab 的端口是一样的，网络进程会标记哪个 TCP 链接属于哪个 Tab，当接收到数据之后，会将数据分发给对应 Tab 的渲染进程。</p><h2 id="为什么有时访问-http-的-url-会变成访问-https-的-url" tabindex="-1"><a class="header-anchor" href="#为什么有时访问-http-的-url-会变成访问-https-的-url"><span>为什么有时访问 HTTP 的 URL 会变成访问 HTTPS 的 URL？</span></a></h2><p>有些网站，当我们使用 HTTP 的 URL 去访问时，会立即变成访问其 HTTPS 的 URL，比如在浏览器地址栏输入<code>http://blog.windstone.cc</code>并回车，页面展示时地址栏的 URL 变成了<code>https://blog.windstone.cc</code>，这是为什么呢？</p><p>实际上，这是因为某些网站强制让用户使用 HTTPS 访问其网站。其实现方式是，以访问<code>http://blog.windstone.cc</code>为例，服务器会返回 301 Moved Permanently 并通过响应头里的 Location 重定向到<code>https://blog.windstone.cc</code>。</p><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>General</span></span>\n<span class="line"><span>    Request URL: http://blog.windstone.cc/</span></span>\n<span class="line"><span>    Request Method: GET</span></span>\n<span class="line"><span>    Status Code: 301 Moved Permanently</span></span>\n<span class="line"><span>    Remote Address: 127.0.0.1:8888</span></span>\n<span class="line"><span>    Referrer Policy: no-referrer-when-downgrade</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>Response Headers</span></span>\n<span class="line"><span>    Accept-Ranges: bytes</span></span>\n<span class="line"><span>    Age: 3339</span></span>\n<span class="line"><span>    Content-Length: 162</span></span>\n<span class="line"><span>    Content-Type: text/html</span></span>\n<span class="line"><span>    Date: Thu, 02 Jan 2020 04:24:26 GMT</span></span>\n<span class="line"><span>    Location: https://blog.windstone.cc/</span></span>\n<span class="line"><span>    Proxy-Connection: keep-alive</span></span>\n<span class="line"><span>    Server: GitHub.com</span></span>\n<span class="line"><span>    Vary: Accept-Encoding</span></span>\n<span class="line"><span>    Via: 1.1 varnish</span></span>\n<span class="line"><span>    X-Cache: HIT</span></span>\n<span class="line"><span>    X-Cache-Hits: 1</span></span>\n<span class="line"><span>    X-Fastly-Request-ID: 7df7dc01fd71ce991d34501ace927eb9f9b8a05d</span></span>\n<span class="line"><span>    X-GitHub-Request-Id: F038:497C:479560:5F190D:5E0D636F</span></span>\n<span class="line"><span>    X-Served-By: cache-hkg17928-HKG</span></span>\n<span class="line"><span>    X-Timer: S1577939066.332016,VS0,VE0</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>Request Headers</span></span>\n<span class="line"><span>    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3</span></span>\n<span class="line"><span>    Accept-Encoding: gzip, deflate</span></span>\n<span class="line"><span>    Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,ru;q=0.7,zh-TW;q=0.6</span></span>\n<span class="line"><span>    Cache-Control: no-cache</span></span>\n<span class="line"><span>    Host: blog.windstone.cc</span></span>\n<span class="line"><span>    Pragma: no-cache</span></span>\n<span class="line"><span>    Proxy-Connection: keep-alive</span></span>\n<span class="line"><span>    Upgrade-Insecure-Requests: 1</span></span>\n<span class="line"><span>    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 14)),
    createVNode(_component_global_config)
  ]);
}
const faq_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "faq.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/browser/faq.html","title":"FAQ","lang":"en-US","frontmatter":{"description":"FAQ 为什么 Chrome 浏览器的 UA 里会包含 AppleWebkit？ UA 是浏览器的身份证。通常，在发送 HTTP 请求时，UA 会附带在 HTTP 的请求头中user-agent字段中，这样服务器就会知道浏览器的基础信息，然后服务器会根据不同的 UA 返回不同的页面内容，比如手机上返回手机的样式，PC 就返回 PC 的样式。 你也可以在...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/browser/faq.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"FAQ"}],["meta",{"property":"og:description","content":"FAQ 为什么 Chrome 浏览器的 UA 里会包含 AppleWebkit？ UA 是浏览器的身份证。通常，在发送 HTTP 请求时，UA 会附带在 HTTP 的请求头中user-agent字段中，这样服务器就会知道浏览器的基础信息，然后服务器会根据不同的 UA 返回不同的页面内容，比如手机上返回手机的样式，PC 就返回 PC 的样式。 你也可以在..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FAQ\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"为什么 Chrome 浏览器的 UA 里会包含 AppleWebkit？","slug":"为什么-chrome-浏览器的-ua-里会包含-applewebkit","link":"#为什么-chrome-浏览器的-ua-里会包含-applewebkit","children":[]},{"level":2,"title":"现代浏览器里打开多个 Tab，每个 Tab 的端口是一样的吗？","slug":"现代浏览器里打开多个-tab-每个-tab-的端口是一样的吗","link":"#现代浏览器里打开多个-tab-每个-tab-的端口是一样的吗","children":[]},{"level":2,"title":"为什么有时访问 HTTP 的 URL 会变成访问 HTTPS 的 URL？","slug":"为什么有时访问-http-的-url-会变成访问-https-的-url","link":"#为什么有时访问-http-的-url-会变成访问-https-的-url","children":[]}],"git":{"createdTime":1578302821000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":2.5,"words":750},"filePathRelative":"browser-env/browser/faq.md","localizedDate":"January 6, 2020","autoDesc":true}');
export {
  faq_html as comp,
  data
};
