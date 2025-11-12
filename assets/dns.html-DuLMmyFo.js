import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode("h1", {
      id: "dns",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#dns"
      }, [
        createBaseVNode("span", null, "DNS")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#dns-记录类型" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("DNS 记录类型")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[2] || (_cache[2] = createStaticVNode('<p>最近一段时间在尝试往谷歌云上部署 NodeJS 的项目，并配置自定义域名，指向谷歌云上的 NodeJS 项目。</p><p>自已的域名<code>windstone.cc</code>是在阿里云购买的，在谷歌云控制台上配置自定义域名时，需要在域名提供商（阿里云）那里配置 DNS 记录，以证明我拥有该域名的所有权。再次过程中，学习了一些 DNS 记录相关的内容。</p><h2 id="dns-记录类型" tabindex="-1"><a class="header-anchor" href="#dns-记录类型"><span>DNS 记录类型</span></a></h2><p>常见的几种 DNS 记录类型有：</p><ul><li>A 记录：指定域名的 IPV4 地址</li><li>AAAA 记录：指定域名的 IPV6 地址</li><li>CNAME 记录：将域名指向另一个域名，类似于域名重定向</li><li>NS 记录：为子域名指定其他 DNS 解析服务器</li><li>TXT 记录：一般指某个主机名或域名的说明，也可用于其他用途</li></ul><p>Reference：</p><ul><li><a href="https://blog.csdn.net/u013920085/article/details/42552987" target="_blank" rel="noopener noreferrer">dns和常见dns记录类型介绍</a></li><li><a href="http://www.ruanyifeng.com/blog/2016/06/dns.html" target="_blank" rel="noopener noreferrer">阮一峰 - DNS 原理入门</a></li></ul>', 7)),
    createVNode(_component_global_config)
  ]);
}
const dns_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "dns.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/network/dns.html","title":"DNS","lang":"en-US","frontmatter":{"description":"DNS 最近一段时间在尝试往谷歌云上部署 NodeJS 的项目，并配置自定义域名，指向谷歌云上的 NodeJS 项目。 自已的域名windstone.cc是在阿里云购买的，在谷歌云控制台上配置自定义域名时，需要在域名提供商（阿里云）那里配置 DNS 记录，以证明我拥有该域名的所有权。再次过程中，学习了一些 DNS 记录相关的内容。 DNS 记录类型 常...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/network/dns.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"DNS"}],["meta",{"property":"og:description","content":"DNS 最近一段时间在尝试往谷歌云上部署 NodeJS 的项目，并配置自定义域名，指向谷歌云上的 NodeJS 项目。 自已的域名windstone.cc是在阿里云购买的，在谷歌云控制台上配置自定义域名时，需要在域名提供商（阿里云）那里配置 DNS 记录，以证明我拥有该域名的所有权。再次过程中，学习了一些 DNS 记录相关的内容。 DNS 记录类型 常..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DNS\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"DNS 记录类型","slug":"dns-记录类型","link":"#dns-记录类型","children":[]}],"git":{"createdTime":1550804674000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.82,"words":247},"filePathRelative":"browser-env/network/dns.md","localizedDate":"February 22, 2019","autoDesc":true}');
export {
  dns_html as comp,
  data
};
