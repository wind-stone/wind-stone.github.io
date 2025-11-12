import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createBaseVNode("h1", {
      id: "npm",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#npm"
      }, [
        createBaseVNode("span", null, "npm")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#tag" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("tag")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#npm-包管理原理" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("npm 包管理原理")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#问题汇总" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("问题汇总")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#修改-registry-后-package-lock-json-里的-resolved-没更新" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("修改 registry 后 package-lock.json 里的 resolved 没更新")
                ])),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _cache[5] || (_cache[5] = createStaticVNode('<h2 id="tag" tabindex="-1"><a class="header-anchor" href="#tag"><span>tag</span></a></h2><p><a href="https://dev.to/andywer/how-to-use-npm-tags-4lla" target="_blank" rel="noopener noreferrer">How to use: npm tags</a></p><ul><li>NPM 包的<code>tag</code>与<code>git</code>的<code>tag</code>不一样。</li><li>NPM 的命令里，若是没提供<code>tag</code>，则默认使用<code>latest</code>，比如<code>npm install</code>和<code>npm publish</code></li><li>NPM 包的<code>tag</code>可以是任意的字符串，不过一般会有约定俗成的<code>tag</code>，比如<code>alpha</code>、<code>beta</code>、<code>next</code>等</li></ul><h2 id="npm-包管理原理" tabindex="-1"><a class="header-anchor" href="#npm-包管理原理"><span>npm 包管理原理</span></a></h2><ul><li><a href="https://jishuin.proginn.com/p/763bfbd655cc" target="_blank" rel="noopener noreferrer">一文弄懂 npm &amp; yarn 包管理机制</a></li></ul><h2 id="问题汇总" tabindex="-1"><a class="header-anchor" href="#问题汇总"><span>问题汇总</span></a></h2><h3 id="修改-registry-后-package-lock-json-里的-resolved-没更新" tabindex="-1"><a class="header-anchor" href="#修改-registry-后-package-lock-json-里的-resolved-没更新"><span>修改 registry 后 package-lock.json 里的 resolved 没更新</span></a></h3><p>若是在项目里修改<code>registry</code>，在<code>npm i</code>之后，<code>package-lock.json</code>文件里的<code>resolved</code>仍为原来的<code>registry</code>，可通过如下步骤修复这个问题:</p><ol><li>Delete .npmrc</li><li>Delete node_modules</li><li>Delete package-lock.json</li><li>Run npm cache clean -f</li><li>Run npm i</li></ol><p>更多详情可以参见<a href="https://github.com/npm/npm/issues/19578#issuecomment-386428859" target="_blank" rel="noopener noreferrer">package-lock.json not updating &quot;resolved&quot; field after moving registry #19578</a>。</p>', 10)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/environment/package-manager/npm/","title":"npm","lang":"en-US","frontmatter":{"description":"npm tag How to use: npm tags NPM 包的tag与git的tag不一样。 NPM 的命令里，若是没提供tag，则默认使用latest，比如npm install和npm publish NPM 包的tag可以是任意的字符串，不过一般会有约定俗成的tag，比如alpha、beta、next等 npm 包管理原理 一文弄懂 np...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/environment/package-manager/npm/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"npm"}],["meta",{"property":"og:description","content":"npm tag How to use: npm tags NPM 包的tag与git的tag不一样。 NPM 的命令里，若是没提供tag，则默认使用latest，比如npm install和npm publish NPM 包的tag可以是任意的字符串，不过一般会有约定俗成的tag，比如alpha、beta、next等 npm 包管理原理 一文弄懂 np..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-31T12:47:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-31T12:47:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"npm\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-31T12:47:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"tag","slug":"tag","link":"#tag","children":[]},{"level":2,"title":"npm 包管理原理","slug":"npm-包管理原理","link":"#npm-包管理原理","children":[]},{"level":2,"title":"问题汇总","slug":"问题汇总","link":"#问题汇总","children":[{"level":3,"title":"修改 registry 后 package-lock.json 里的 resolved 没更新","slug":"修改-registry-后-package-lock-json-里的-resolved-没更新","link":"#修改-registry-后-package-lock-json-里的-resolved-没更新","children":[]}]}],"git":{"createdTime":1569837758000,"updatedTime":1730378820000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.67,"words":201},"filePathRelative":"front-end-engineering/environment/package-manager/npm/index.md","localizedDate":"September 30, 2019","autoDesc":true}');
export {
  index_html as comp,
  data
};
