import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/assets/response-header-COtsWvLc.png";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[3] || (_cache[3] = createBaseVNode("h1", {
      id: "微信-android-微信里自动调起系统浏览器访问页面",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#微信-android-微信里自动调起系统浏览器访问页面"
      }, [
        createBaseVNode("span", null, "微信 - Android 微信里自动调起系统浏览器访问页面")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#进一步优化" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("进一步优化")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#核心-response-header-的解释" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("核心 response header 的解释")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#参考" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("参考")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[4] || (_cache[4] = createStaticVNode('<p>正常情况下，在微信里是无法自动调起系统浏览器访问页面的，但是通过如下所描述的 hack 方式，可以在 Android 微信里自动打开浏览器访问页面。</p><p>具体步骤为：</p><ol><li>在微信里访问页面地址，比如<code>http://windstone.cc/weixin/auto-launch-browser</code>。</li><li>后端或 Nginx 层判断是否是在 Android 微信里访问的，若是则返回如下的核心<code>response header</code>；否则正常返回页面内容。</li><li>Android 微信接收到上面的<code>response header</code>，会自动调起系统浏览器，并在系统浏览器里再次访问页面地址<code>http://windstone.cc/weixin/auto-launch-browser</code>，此时后端或 Nginx 层判断出不是在 Android 微信里，则正常返回内容。</li></ol><figure><img src="' + _imports_0 + '" alt="response header" tabindex="0" loading="lazy"><figcaption>response header</figcaption></figure><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>HTTP/1.1 206 Partial Content</span></span>\n<span class="line"><span>X-Powered-By: Express</span></span>\n<span class="line"><span>Content-Type: text/plain; charset=utf-8</span></span>\n<span class="line"><span>Accept-Ranges: bytes</span></span>\n<span class="line"><span>Content-Range: bytes 0-1/1</span></span>\n<span class="line"><span>Content-Disposition: attachment;filename=1579.apk</span></span>\n<span class="line"><span>Content-Length: 0</span></span>\n<span class="line"><span>ETag: W/&quot;0-2jmj7l5rSw0yVb/vlWAYkK/YBwk&quot;</span></span>\n<span class="line"><span>Date: Tue, 17 Sep 2019 07:32:12 GMT</span></span>\n<span class="line"><span>Proxy-Connection: keep-alive</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>核心<code>response header</code>代码片段</p><p>这个实现需要后端配合，或者在 Nginx 层里进行处理，要是想简单测试，可以通过 Charles 里的 Breakpoints 设置断点，在页面响应里将<code>response header</code>修改为上述<code>response header</code>，即可验证。</p><h2 id="进一步优化" tabindex="-1"><a class="header-anchor" href="#进一步优化"><span>进一步优化</span></a></h2><p>在上述的实现里，微信在拉起系统浏览器后，会显示一个白屏的页面，用户需要手动关闭这个页面，体验不好。</p><p>可以如下优化：</p><ol><li>在微信里访问页面地址，比如<code>http://windstone.cc/weixin/auto-launch-browser</code>。</li><li>后端或 Nginx 层正常返回页面内容，页面返回后正常执行、渲染。</li><li>页面渲染完成后，判断页面所在环境，若是在 Android 微信里，则通过<code>window.location.href = &#39;http://windstone.cc/weixin/auto-launch-browser-api&#39;</code>请求后端接口，接口判断是在 Android 微信里后，返回上述的核心<code>response header</code>；此时，微信里打开的页面正常显示。</li><li>Android 微信接收到上面的<code>response header</code>，会自动调起系统浏览器，并在系统浏览器里再次访问页面地址<code>http://windstone.cc/weixin/auto-launch-browser-api</code>，此时后端或 Nginx 层判断出不是在 Android 微信里，则通过 302 重定向到<code>http://windstone.cc/weixin/auto-launch-browser</code>。</li></ol><p>此方案还可以通过后端接口控制是否要调起浏览器，防止微信修复了该漏洞后出问题。</p><h2 id="核心-response-header-的解释" tabindex="-1"><a class="header-anchor" href="#核心-response-header-的解释"><span>核心 response header 的解释</span></a></h2><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>HTTP/1.1 206 Partial Content</span></span>\n<span class="line"><span>X-Powered-By: Express</span></span>\n<span class="line"><span>Content-Type: text/plain; charset=utf-8</span></span>\n<span class="line"><span>Accept-Ranges: bytes</span></span>\n<span class="line"><span>Content-Range: bytes 0-1/1</span></span>\n<span class="line"><span>Content-Disposition: attachment;filename=1579.apk</span></span>\n<span class="line"><span>Content-Length: 0</span></span>\n<span class="line"><span>ETag: W/&quot;0-2jmj7l5rSw0yVb/vlWAYkK/YBwk&quot;</span></span>\n<span class="line"><span>Date: Tue, 17 Sep 2019 07:32:12 GMT</span></span>\n<span class="line"><span>Proxy-Connection: keep-alive</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>206 Partial Content</code>: 该成功状态响应代码表示请求已成功，并且主体包含所请求的数据区间，该数据区间是在请求的 Range 首部指定的。详见<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/206" target="_blank" rel="noopener noreferrer">MDN - 206 Partial Content</a></li><li><code>X-Powered-By: Express</code>: <code>X-Powered-By</code>是通用的非标准 HTTP 响应<code>header</code>（一般以<code>X-</code>作为前缀的<code>header</code>都是非标准的）。通常以特殊脚本技术默认包含在响应结构里。需要注意的是，这个头部可以被服务器禁用或修改。有些服务器选择不包含这个头部，甚至提供误导的信息以摆脱黑客，引导其转向一个特殊的技术/版本。因此，这个头部的信息时不足以为信的。更多详细信息，请参考<a href="https://stackoverflow.com/questions/33580671/what-does-x-powered-by-mean" target="_blank" rel="noopener noreferrer">Stack Overflow - What does “x-powered by” mean?</a>。</li><li><code>Accept-Ranges: bytes</code>: 表示服务器支持<code>Range</code>请求，且支持的单位是<code>bytes</code>，也就意味着支持断点续传，可以并行多<code>range</code>进行下载。若是响应的是<code>Accept-Ranges: none</code>则表示不支持<code>Range</code>请求。</li><li><code>Content-Range: bytes 0-1/1</code>: 表示响应的<code>Range</code>单位、第一个比特的位置、最后一个比特的位置和资源的总长度。此例里，<code>Range</code>单位是<code>bytes</code>，第一个比特的位置是<code>0</code>，最后一个比特的位置是<code>1</code>，资源的总长度是<code>1</code>。</li><li><code>Content-Disposition: attachment;filename=1579.apk</code>: 在常规的 HTTP 应答中，<code>Content-Disposition</code>消息头指示回复的内容该以何种形式展示，是以内联的形式（即网页或者页面的一部分），还是以附件的形式下载并保存到本地。在 HTTP 场景中，第一个参数或者是<code>inline</code>（默认值，表示回复中的消息体会以页面的一部分或者整个页面的形式展示），或者是<code>attachment</code>（意味着消息体应该被下载到本地；大多数浏览器会呈现一个“保存为”的对话框，将<code>filename</code>的值预填为下载后的文件名，假如它存在的话）。更多详细信息，请参考<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Disposition" target="_blank" rel="noopener noreferrer">MDN - Content-Disposition</a></li><li><code>ETag: W/&quot;0-2jmj7l5rSw0yVb/vlWAYkK/YBwk&quot;</code>: 参考了其他几个第三方跳转服务的<code>response header</code>，其<code>ETag</code>的值也是<code>W/&quot;0-2jmj7l5rSw0yVb/vlWAYkK/YBwk&quot;</code>这个固定值。</li></ul><p>因此，以上<code>response header</code>里，最核心的代码应该是<code>Content-Disposition: attachment;filename=1579.apk</code>。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li><a href="https://blog.csdn.net/qq_35445306/article/details/92461209" target="_blank" rel="noopener noreferrer">微信跳转外部浏览器打开指定链接源码</a></li><li><a href="http://www.augpush.cn/" target="_blank" rel="noopener noreferrer">第三方跳转服务 - Augpush</a></li><li><a href="http://www.aizhuanlove.cn/" target="_blank" rel="noopener noreferrer">第三方跳转服务 - 月牙跳转</a></li><li><a href="http://www.aerae.cn/" target="_blank" rel="noopener noreferrer">第三方跳转服务 - 忆天网络</a></li></ul>', 18)),
    createVNode(_component_global_config)
  ]);
}
const androidWeixinAutoOpenBrowser_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "android-weixin-auto-open-browser.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/vendor-app/wechat/android-weixin-auto-open-browser.html","title":"微信 - Android 微信里自动调起系统浏览器访问页面","lang":"en-US","frontmatter":{"description":"微信 - Android 微信里自动调起系统浏览器访问页面 正常情况下，在微信里是无法自动调起系统浏览器访问页面的，但是通过如下所描述的 hack 方式，可以在 Android 微信里自动打开浏览器访问页面。 具体步骤为： 在微信里访问页面地址，比如http://windstone.cc/weixin/auto-launch-browser。 后端或 ...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/vendor-app/wechat/android-weixin-auto-open-browser.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"微信 - Android 微信里自动调起系统浏览器访问页面"}],["meta",{"property":"og:description","content":"微信 - Android 微信里自动调起系统浏览器访问页面 正常情况下，在微信里是无法自动调起系统浏览器访问页面的，但是通过如下所描述的 hack 方式，可以在 Android 微信里自动打开浏览器访问页面。 具体步骤为： 在微信里访问页面地址，比如http://windstone.cc/weixin/auto-launch-browser。 后端或 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"微信 - Android 微信里自动调起系统浏览器访问页面\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"进一步优化","slug":"进一步优化","link":"#进一步优化","children":[]},{"level":2,"title":"核心 response header 的解释","slug":"核心-response-header-的解释","link":"#核心-response-header-的解释","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1568717612000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":4.36,"words":1307},"filePathRelative":"browser-env/vendor-app/wechat/android-weixin-auto-open-browser.md","localizedDate":"September 17, 2019","autoDesc":true}');
export {
  androidWeixinAutoOpenBrowser_html as comp,
  data
};
