import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, a as createVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="samesite" tabindex="-1"><a class="header-anchor" href="#samesite"><span>SameSite</span></a></h1><p>同站 Same Site 不同于同域 Same Origin。</p><p>满足以下所有条件，才是 SameSite:</p><ul><li><p>有效顶级域名相同</p></li><li><p>协议相同</p></li><li><p><a href="https://web.dev/same-site-same-origin/" target="_blank" rel="noopener noreferrer">Understanding &quot;same-site&quot; and &quot;same-origin&quot;</a></p></li><li><p><a href="https://web.dev/samesite-cookies-explained/" target="_blank" rel="noopener noreferrer">SameSite cookies explained</a></p></li><li><p><a href="https://web.dev/samesite-cookie-recipes/" target="_blank" rel="noopener noreferrer">SameSite cookie recipes</a></p></li><li><p><a href="https://web.dev/schemeful-samesite/" target="_blank" rel="noopener noreferrer">Schemeful Same-Site</a></p></li></ul>', 4)),
    createVNode(_component_global_config)
  ]);
}
const sameSite_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "same-site.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/security/same-site.html","title":"SameSite","lang":"en-US","frontmatter":{"description":"SameSite 同站 Same Site 不同于同域 Same Origin。 满足以下所有条件，才是 SameSite: 有效顶级域名相同 协议相同 Understanding \\"same-site\\" and \\"same-origin\\" SameSite cookies explained SameSite cookie recipes Schem...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/security/same-site.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"SameSite"}],["meta",{"property":"og:description","content":"SameSite 同站 Same Site 不同于同域 Same Origin。 满足以下所有条件，才是 SameSite: 有效顶级域名相同 协议相同 Understanding \\"same-site\\" and \\"same-origin\\" SameSite cookies explained SameSite cookie recipes Schem..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-08-19T02:28:08.000Z"}],["meta",{"property":"article:modified_time","content":"2021-08-19T02:28:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SameSite\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-08-19T02:28:08.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1629340088000,"updatedTime":1629340088000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.23,"words":69},"filePathRelative":"browser-env/security/same-site.md","localizedDate":"August 19, 2021","autoDesc":true}');
export {
  sameSite_html as comp,
  data
};
