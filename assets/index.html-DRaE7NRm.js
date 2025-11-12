import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode("h1", {
      id: "微信",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#微信"
      }, [
        createBaseVNode("span", null, "微信")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#openid-和-unionid" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("openid 和 unionid")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[2] || (_cache[2] = createStaticVNode('<h2 id="openid-和-unionid" tabindex="-1"><a class="header-anchor" href="#openid-和-unionid"><span>openid 和 unionid</span></a></h2><p><code>openid</code>: 用户访问公众号的网页，会产生一个用户与公众号唯一的<code>openid</code><br><code>unionid</code>: 用户与开放平台账号的<code>unionid</code>，用于在开放平台所有的应用、公众号、小程序下识别出是同一个用户</p><p>详情请参考: <a href="https://juejin.im/post/5c7c6cec51882577f37076d6" target="_blank" rel="noopener noreferrer">微信开发中 openID 与 unionID 的区别</a></p>', 3)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/vendor-app/wechat/","title":"微信","lang":"en-US","frontmatter":{"description":"微信 openid 和 unionid openid: 用户访问公众号的网页，会产生一个用户与公众号唯一的openid unionid: 用户与开放平台账号的unionid，用于在开放平台所有的应用、公众号、小程序下识别出是同一个用户 详情请参考: 微信开发中 openID 与 unionID 的区别","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/vendor-app/wechat/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"微信"}],["meta",{"property":"og:description","content":"微信 openid 和 unionid openid: 用户访问公众号的网页，会产生一个用户与公众号唯一的openid unionid: 用户与开放平台账号的unionid，用于在开放平台所有的应用、公众号、小程序下识别出是同一个用户 详情请参考: 微信开发中 openID 与 unionID 的区别"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"微信\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"openid 和 unionid","slug":"openid-和-unionid","link":"#openid-和-unionid","children":[]}],"git":{"createdTime":1562912039000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.31,"words":93},"filePathRelative":"browser-env/vendor-app/wechat/README.md","localizedDate":"July 12, 2019","autoDesc":true}');
export {
  index_html as comp,
  data
};
