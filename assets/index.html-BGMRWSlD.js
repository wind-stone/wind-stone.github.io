import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/assets/how-to-get-line-separator-Daia5nA7.png";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode("h1", {
      id: "字符串",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#字符串"
      }, [
        createBaseVNode("span", null, "字符串")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#如何打出行分隔符" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("如何打出行分隔符")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[2] || (_cache[2] = createStaticVNode('<h2 id="如何打出行分隔符" tabindex="-1"><a class="header-anchor" href="#如何打出行分隔符"><span>如何打出行分隔符</span></a></h2><p>我们知道行分隔符是不可见字符，但是有没有办法输出这个\b字符呢？</p><figure><img src="' + _imports_0 + '" alt="打出行分隔符" tabindex="0" loading="lazy"><figcaption>打出行分隔符</figcaption></figure><ol><li>在控制台里输入<code>&#39;\\u2028&#39;</code>。注意，输入完毕后，一定一定一定不要按回车键！</li><li>此时，你能在下一行预览到结果<code>&quot;&quot;</code>。其实这是两个双引号<code>&quot;</code>包裹着一个行分隔符，一共三个字符，只是行分隔符我们看不见而已。</li><li>最后，将光标移到预览结果<code>&quot;&quot;</code>上，全部选中并复制。此时你的剪切板里就有行分隔符了，不过其左右两边各有一个<code>&quot;</code>，共三个字符。</li><li>可将剪切板内容粘贴出来，就能“看到”行分隔符了。</li></ol><p>为了验证粘贴出来的小圆点真的代表的是行分隔符，我们可将小点单独复制出来，获取其 Unicode 码位并转成 16 进制输出，可得到结果<code>2028</code>。</p>', 5)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse(`{"path":"/js/data-types/string/","title":"字符串","lang":"en-US","frontmatter":{"description":"字符串 如何打出行分隔符 我们知道行分隔符是不可见字符，但是有没有办法输出这个\\b字符呢？ 打出行分隔符打出行分隔符 在控制台里输入'\\\\u2028'。注意，输入完毕后，一定一定一定不要按回车键！ 此时，你能在下一行预览到结果\\"\\"。其实这是两个双引号\\"包裹着一个行分隔符，一共三个字符，只是行分隔符我们看不见而已。 最后，将光标移到预览结果\\"\\"上，全部选中并...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/js/data-types/string/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"字符串"}],["meta",{"property":"og:description","content":"字符串 如何打出行分隔符 我们知道行分隔符是不可见字符，但是有没有办法输出这个\\b字符呢？ 打出行分隔符打出行分隔符 在控制台里输入'\\\\u2028'。注意，输入完毕后，一定一定一定不要按回车键！ 此时，你能在下一行预览到结果\\"\\"。其实这是两个双引号\\"包裹着一个行分隔符，一共三个字符，只是行分隔符我们看不见而已。 最后，将光标移到预览结果\\"\\"上，全部选中并..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字符串\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"如何打出行分隔符","slug":"如何打出行分隔符","link":"#如何打出行分隔符","children":[]}],"git":{"createdTime":1596867493000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.86,"words":259},"filePathRelative":"js/data-types/string/README.md","localizedDate":"August 8, 2020","autoDesc":true}`);
export {
  index_html as comp,
  data
};
