import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[3] || (_cache[3] = createBaseVNode("h1", {
      id: "glob-匹配模式",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#glob-匹配模式"
      }, [
        createBaseVNode("span", null, "glob 匹配模式")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#语法" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("语法")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#unix" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("Unix")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#文件-文件夹匹配" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("文件/文件夹匹配")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[4] || (_cache[4] = createStaticVNode('<p>在计算机编程领域，<code>glob</code>模式使用字符通配符制定了文件名的集合。比如，Unix Bash shell 命令<code>mv *.txt textfiles/</code>会将当前目录下所有以<code>.txt</code>结尾的文件移动到<code>textfiles</code>目录下。在这里，<code>*</code>就是通配符，代表“任何字符组成的字符串”，而<code>*.txt</code>就是<code>glob</code>模式。其他常用的通配符有问号<code>?</code>，代表单个字符。</p><p><code>glob</code>命令，是<code>global</code>的缩写，起源于贝尔实验室的 Unix 最早期的版本。后来，这项功能以库函数<code>glob()</code>的形式提供，被用于<code>shell</code>等程序。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><p>最常用的通配符是<code>*</code>、<code>?</code>、<code>[...]</code>。</p><table><thead><tr><th>通配符</th><th>描述</th><th>示例</th><th>匹配</th><th>不匹配</th></tr></thead><tbody><tr><td><code>*</code></td><td>匹配任意数量的字符，包括空字符串</td><td><code>Law*</code><br><code>*Law*</code></td><td><code>Law</code>，<code>Laws</code>，或<code>Lawyer</code><br><code>Law</code>，<code>GrokLaw</code>，或<code>Lawyer</code></td><td><code>GrokLaw</code>，<code>La</code>，<code>aw</code><br><code>La</code>，或<code>aw</code></td></tr><tr><td><code>?</code></td><td>匹配任何单个字符</td><td><code>?at</code></td><td><code>Cat</code>，<code>cat</code>，<code>Bat</code>或<code>bat</code></td><td><code>at</code></td></tr><tr><td><code>[abc]</code></td><td>匹配中括号里的\b任意单个字符</td><td><code>[CB]at</code></td><td><code>Cat</code>或<code>Bat</code></td><td><code>cat</code>或<code>bat</code></td></tr><tr><td><code>[a-z]</code></td><td>匹配中括号里的字符范围里的单个字符</td><td><code>Letter[0-9]</code></td><td><code>Letter0</code>，<code>Letter1</code>，<code>Letter2</code>，...，<code>Letter9</code></td><td><code>Letters</code>，<code>Letter</code>或<code>Letter10</code></td></tr></tbody></table><p>上述所有情况里，路径分隔符（Unix 里是<code>/</code>，Windows 里是<code>/</code>）被不会被匹配。</p><h2 id="unix" tabindex="-1"><a class="header-anchor" href="#unix"><span>Unix</span></a></h2><p>在 Linux 和 POSIX 系统里，<code>*</code>、<code>?</code>与上述定义一样，但<code>[...]</code>有两个额外的含义：</p><table><thead><tr><th>通配符</th><th>描述</th><th>示例</th><th>匹配</th><th>不匹配</th></tr></thead><tbody><tr><td><code>[!abc]</code></td><td>匹配不在中括号里的\b任意单个字符</td><td><code>[!C]at</code></td><td><code>bat</code>、<code>Bat</code>或<code>cat</code></td><td><code>Cat</code></td></tr><tr><td><code>[!a-z]</code></td><td>匹配不在中括号字符范围里的单个字符</td><td><code>Letter[!3-5]</code></td><td><code>Letter1</code>，<code>Letter2</code>，<code>Letter6</code>，...，<code>Letter9</code>，<code>Letterx</code>等</td><td><code>Letter3</code>，<code>Letter4</code>或<code>Letterxx</code></td></tr></tbody></table><p>一些<code>shell</code>比如<code>C shell</code>和<code>Bash</code>支持额外的语法，比如<a href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)#Brace_expansion" target="_blank" rel="noopener noreferrer">Brace expansion</a>。</p><p><code>Bash shell</code>还支持<code>Extended Globbing</code>，允许其他模式匹配操作符被用于匹配多个被圆括号（<code>(</code>和<code>)</code>）包裹的模式，这可以通过设置<code>extglob</code>的选项来启用。</p><h2 id="文件-文件夹匹配" tabindex="-1"><a class="header-anchor" href="#文件-文件夹匹配"><span>文件/文件夹匹配</span></a></h2><p>在命令行里经常会使用<code>**</code>和<code>*</code>来匹配文件和文件夹，一些常用的方式为:</p><ul><li><code>*</code>: 在单个路径部分里，匹配 0 或多个字符</li><li><code>**</code>: 若是<code>**</code>独自存在在路径的某个部分，则它将匹配 0 或多个目录以及子目录。</li></ul><p>示例:</p><ul><li><code>a/*.js</code>: 匹配<code>a/b.js</code>、<code>a/bc.js</code>、<code>a/bcd.js</code>等等</li><li><code>**/*.js</code>: 配置根目录下所有文件夹及其子文件里的<code>.js</code>文件</li><li><code>*.js</code>: 在设置了<code>matchBase:true</code>时，等同于<code>**/*.js</code></li></ul><p>详见: <a href="https://github.com/isaacs/node-glob" target="_blank" rel="noopener noreferrer">github - node-glob</a></p>', 17)),
    createVNode(_component_global_config)
  ]);
}
const glob_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "glob.html.vue"]]);
const data = JSON.parse('{"path":"/full-stack/operating-system/linux/glob.html","title":"glob 匹配模式","lang":"en-US","frontmatter":{"description":"glob 匹配模式 在计算机编程领域，glob模式使用字符通配符制定了文件名的集合。比如，Unix Bash shell 命令mv *.txt textfiles/会将当前目录下所有以.txt结尾的文件移动到textfiles目录下。在这里，*就是通配符，代表“任何字符组成的字符串”，而*.txt就是glob模式。其他常用的通配符有问号?，代表单个字符...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/full-stack/operating-system/linux/glob.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"glob 匹配模式"}],["meta",{"property":"og:description","content":"glob 匹配模式 在计算机编程领域，glob模式使用字符通配符制定了文件名的集合。比如，Unix Bash shell 命令mv *.txt textfiles/会将当前目录下所有以.txt结尾的文件移动到textfiles目录下。在这里，*就是通配符，代表“任何字符组成的字符串”，而*.txt就是glob模式。其他常用的通配符有问号?，代表单个字符..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-04T08:32:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-04T08:32:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"glob 匹配模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-04T08:32:47.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"Unix","slug":"unix","link":"#unix","children":[]},{"level":2,"title":"文件/文件夹匹配","slug":"文件-文件夹匹配","link":"#文件-文件夹匹配","children":[]}],"git":{"createdTime":1552383100000,"updatedTime":1714811567000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":2.05,"words":614},"filePathRelative":"full-stack/operating-system/linux/glob.md","localizedDate":"March 12, 2019","autoDesc":true}');
export {
  glob_html as comp,
  data
};
