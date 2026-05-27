import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, a as createVNode, o as openBlock } from "./app-BIlS0k3L.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm"><span>pnpm</span></a></h1><ul><li>幽灵依赖</li><li>包安装在全局的存储目录中，其他包也需要这个包时，通过硬链接引用全局存储目录中的包</li><li>更快的安装速度</li></ul><table><thead><tr><th>特性维度</th><th>npm</th><th>Yarn</th><th>pnpm</th></tr></thead><tbody><tr><td>磁盘效率</td><td>较低，依赖在每个项目中重复存储</td><td>中等，有缓存但仍存在重复文件</td><td>极高，通过硬链接全局共享依赖</td></tr><tr><td>安装速度</td><td>较慢，文件复制操作多</td><td>快，有并行安装和缓存</td><td>极快，链接操作开销小</td></tr><tr><td>依赖管理</td><td>扁平化结构，存在“幽灵依赖”</td><td>扁平化结构，同样存在“幽灵依赖”</td><td>严格隔离，彻底杜绝“幽灵依赖”</td></tr><tr><td>Monorepo支持</td><td>基础支持</td><td>成熟的工作区支持</td><td>原生强大支持，性能优势明显</td></tr></tbody></table>', 3)),
    createVNode(_component_global_config)
  ]);
}
const pnpm_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "pnpm.html.vue"]]);
const data = JSON.parse('{"path":"/interview/front-end-engineering/package-management/pnpm.html","title":"pnpm","lang":"en-US","frontmatter":{"description":"pnpm 幽灵依赖 包安装在全局的存储目录中，其他包也需要这个包时，通过硬链接引用全局存储目录中的包 更快的安装速度","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/interview/front-end-engineering/package-management/pnpm.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"pnpm"}],["meta",{"property":"og:description","content":"pnpm 幽灵依赖 包安装在全局的存储目录中，其他包也需要这个包时，通过硬链接引用全局存储目录中的包 更快的安装速度"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2026-05-11T08:39:01.000Z"}],["meta",{"property":"article:modified_time","content":"2026-05-11T08:39:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pnpm\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-05-11T08:39:01.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1778488741000,"updatedTime":1778488741000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.67,"words":202},"filePathRelative":"interview/front-end-engineering/package-management/pnpm.md","localizedDate":"May 11, 2026","autoDesc":true}');
export {
  pnpm_html as comp,
  data
};
