import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode("h1", {
      id: "文件系统",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#文件系统"
      }, [
        createBaseVNode("span", null, "文件系统")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#blob" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("Blob")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#file" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("File")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#mime-类型" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("MIME 类型")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#filereader" }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("FileReader")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#formdata" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("FormData")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[6] || (_cache[6] = createStaticVNode('<h2 id="blob" tabindex="-1"><a class="header-anchor" href="#blob"><span>Blob</span></a></h2><h2 id="file" tabindex="-1"><a class="header-anchor" href="#file"><span>File</span></a></h2><h2 id="mime-类型" tabindex="-1"><a class="header-anchor" href="#mime-类型"><span>MIME 类型</span></a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types" target="_blank" rel="noopener noreferrer">MIME 类型</a></p><h2 id="filereader" tabindex="-1"><a class="header-anchor" href="#filereader"><span>FileReader</span></a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader" target="_blank" rel="noopener noreferrer">FileReader</a>对象允许 Web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用<code>File</code>或<code>Blob</code>对象指定要读取的文件或数据。</p><h2 id="formdata" tabindex="-1"><a class="header-anchor" href="#formdata"><span>FormData</span></a></h2><p>XMLHttpRequest Level 2 添加了一个新的接口<code>FormData</code>。利用<code>FormData</code>对象,我们可以通过 JavaScript 用一些键值对来模拟一系列表单控件,我们还可以使用<code>XMLHttpRequest</code>的<code>send()</code>方法来异步的提交这个“表单”.比起普通的<code>ajax</code>,使用<code>FormData</code>的最大优点就是我们可以异步上传一个二进制文件。</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/FormData" target="_blank" rel="noopener noreferrer">MDN - FormData</a><br><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects" target="_blank" rel="noopener noreferrer">FormData 对象的使用</a></p>', 9)),
    createVNode(_component_global_config)
  ]);
}
const fileSystem_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "file-system.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/unclassified/file-system.html","title":"文件系统","lang":"en-US","frontmatter":{"description":"文件系统 Blob File MIME 类型 MIME 类型 FileReader FileReader对象允许 Web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用File或Blob对象指定要读取的文件或数据。 FormData XMLHttpRequest Level 2 添加了一个新的接口FormData。利用Form...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/unclassified/file-system.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"文件系统"}],["meta",{"property":"og:description","content":"文件系统 Blob File MIME 类型 MIME 类型 FileReader FileReader对象允许 Web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用File或Blob对象指定要读取的文件或数据。 FormData XMLHttpRequest Level 2 添加了一个新的接口FormData。利用Form..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文件系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Blob","slug":"blob","link":"#blob","children":[]},{"level":2,"title":"File","slug":"file","link":"#file","children":[]},{"level":2,"title":"MIME 类型","slug":"mime-类型","link":"#mime-类型","children":[]},{"level":2,"title":"FileReader","slug":"filereader","link":"#filereader","children":[]},{"level":2,"title":"FormData","slug":"formdata","link":"#formdata","children":[]}],"git":{"createdTime":1533973348000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.63,"words":188},"filePathRelative":"browser-env/unclassified/file-system.md","localizedDate":"August 11, 2018","autoDesc":true}');
export {
  fileSystem_html as comp,
  data
};
