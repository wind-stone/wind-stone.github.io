import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createBaseVNode("h1", {
      id: "安全",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#安全"
      }, [
        createBaseVNode("span", null, "安全")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#cookie-安全" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("Cookie 安全")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#界面操作劫持" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("界面操作劫持")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[3] || (_cache[3] = createStaticVNode('<h2 id="cookie-安全" tabindex="-1"><a class="header-anchor" href="#cookie-安全"><span>Cookie 安全</span></a></h2><p>Cookie 是一个神奇的机制，同域内浏览器中发出的任何一个请求都会带上 Cookie，无论请求什么资源，请求时，Cookie 出现在请求头的 Cookie 字段中。（这一点可以造成 CSRF）</p><p>Ajax 跨域请求，默认情况下无法带上目标域的会话（Cookie 等），这是需要设置 xhr 实例的<code>withCredentials</code>属性为 <code>true</code>。</p><h2 id="界面操作劫持" tabindex="-1"><a class="header-anchor" href="#界面操作劫持"><span>界面操作劫持</span></a></h2><p>界面操作劫持攻击是一种基于视觉欺骗的 Web 会话劫持攻击，它通过在网页的可见输入控件上覆盖一个不可见的框（iframe），使得用户误以为在操作可见控件，而实际上用户的操作行为被其不可见的框所劫持，执行不可见框中的恶意劫持代码，从而完成在用户不知情的情况下窃取敏感信息、篡改数据等攻击。</p><p>具体详情，请查看《Web前端黑客技术揭秘》第 5 章。</p>', 6)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/security/","title":"安全","lang":"en-US","frontmatter":{"description":"安全 Cookie 安全 Cookie 是一个神奇的机制，同域内浏览器中发出的任何一个请求都会带上 Cookie，无论请求什么资源，请求时，Cookie 出现在请求头的 Cookie 字段中。（这一点可以造成 CSRF） Ajax 跨域请求，默认情况下无法带上目标域的会话（Cookie 等），这是需要设置 xhr 实例的withCredentials属...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/security/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"安全"}],["meta",{"property":"og:description","content":"安全 Cookie 安全 Cookie 是一个神奇的机制，同域内浏览器中发出的任何一个请求都会带上 Cookie，无论请求什么资源，请求时，Cookie 出现在请求头的 Cookie 字段中。（这一点可以造成 CSRF） Ajax 跨域请求，默认情况下无法带上目标域的会话（Cookie 等），这是需要设置 xhr 实例的withCredentials属..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-10-14T09:14:10.000Z"}],["meta",{"property":"article:modified_time","content":"2025-10-14T09:14:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安全\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-10-14T09:14:10.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Cookie 安全","slug":"cookie-安全","link":"#cookie-安全","children":[]},{"level":2,"title":"界面操作劫持","slug":"界面操作劫持","link":"#界面操作劫持","children":[]}],"git":{"createdTime":1517484339000,"updatedTime":1760433250000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":2}]},"readingTime":{"minutes":0.86,"words":257},"filePathRelative":"browser-env/security/README.md","localizedDate":"February 1, 2018","autoDesc":true}');
export {
  index_html as comp,
  data
};
