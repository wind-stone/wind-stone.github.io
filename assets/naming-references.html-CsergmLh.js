import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode("h1", {
      id: "命名参考",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#命名参考"
      }, [
        createBaseVNode("span", null, "命名参考")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#业务逻辑" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("业务逻辑")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#奖励" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("奖励")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#符号" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("符号")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#命名方式" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("命名方式")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#其他" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("其他")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[6] || (_cache[6] = createStaticVNode('<h2 id="业务逻辑" tabindex="-1"><a class="header-anchor" href="#业务逻辑"><span>业务逻辑</span></a></h2><h3 id="奖励" tabindex="-1"><a class="header-anchor" href="#奖励"><span>奖励</span></a></h3><p>参加活动赢取的奖励，通常用<code>reward</code></p><h2 id="符号" tabindex="-1"><a class="header-anchor" href="#符号"><span>符号</span></a></h2><ul><li><p><code>curly brackets</code>: 大括号<code>{</code>和<code>}</code></p><ul><li><code>left curly bracket</code>: 左大括号</li><li><code>right curly bracket</code>: 右大括号</li></ul></li><li><p><code>square brackets</code>: 中括号<code>[</code>和<code>]</code></p><ul><li><code>left square bracket</code>: 左中括号</li><li><code>right square bracket</code>: 右中括号</li></ul></li><li><p><code>parentheses</code>: 小括号<code>(</code>和<code>)</code></p></li><li><p><code>underscore</code>: 下划线<code>_</code></p></li><li><p><code>colon</code>: 冒号<code>:</code></p></li><li><p><code>commas</code>: 逗号<code>,</code></p></li><li><p><code>escape sequence</code>: 转义字符串</p></li></ul><h2 id="命名方式" tabindex="-1"><a class="header-anchor" href="#命名方式"><span>命名方式</span></a></h2><table><thead><tr><th>命名方式</th><th>英文</th><th>示例</th><th>说明</th></tr></thead><tbody><tr><td>kebab case</td><td>kebab case</td><td>kebab-case</td><td>字母全小写，短横线隔开</td></tr><tr><td>小驼峰式命名法</td><td>lower camel case</td><td>lowerCamelCase</td><td>第一个单词的首字母小写，其余单词的首字母大写</td></tr><tr><td>大驼峰式命名法</td><td>upper camel case</td><td>UpperCamelCase</td><td>每个单词的首字母大写</td></tr></tbody></table><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2><ul><li><code>pitfall</code>: 坑，陷阱。项目中或第三方工具里遇到意料之外的情况。</li></ul>', 9)),
    createVNode(_component_global_config)
  ]);
}
const namingReferences_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "naming-references.html.vue"]]);
const data = JSON.parse('{"path":"/front-end-engineering/tools/style-guide/naming-conventions/naming-references.html","title":"命名参考","lang":"en-US","frontmatter":{"description":"命名参考 业务逻辑 奖励 参加活动赢取的奖励，通常用reward 符号 curly brackets: 大括号{和} left curly bracket: 左大括号 right curly bracket: 右大括号 square brackets: 中括号[和] left square bracket: 左中括号 right square brac...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/front-end-engineering/tools/style-guide/naming-conventions/naming-references.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"命名参考"}],["meta",{"property":"og:description","content":"命名参考 业务逻辑 奖励 参加活动赢取的奖励，通常用reward 符号 curly brackets: 大括号{和} left curly bracket: 左大括号 right curly bracket: 右大括号 square brackets: 中括号[和] left square bracket: 左中括号 right square brac..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-31T12:47:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-31T12:47:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"命名参考\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-31T12:47:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"业务逻辑","slug":"业务逻辑","link":"#业务逻辑","children":[{"level":3,"title":"奖励","slug":"奖励","link":"#奖励","children":[]}]},{"level":2,"title":"符号","slug":"符号","link":"#符号","children":[]},{"level":2,"title":"命名方式","slug":"命名方式","link":"#命名方式","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"git":{"createdTime":1576291159000,"updatedTime":1730378820000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.67,"words":200},"filePathRelative":"front-end-engineering/tools/style-guide/naming-conventions/naming-references.md","localizedDate":"December 14, 2019","autoDesc":true}');
export {
  namingReferences_html as comp,
  data
};
