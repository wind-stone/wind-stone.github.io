import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-BMhVoaeF.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode("h1", {
      id: "特性和属性的区别",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#特性和属性的区别"
      }, [
        createBaseVNode("span", null, "特性和属性的区别")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#结论" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("结论")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[2] || (_cache[2] = createStaticVNode('<p>当写 HTML 源代码时，你可以在 HTML 元素上定义特性<code>attribute</code>。一旦浏览器解析了你的代码，将产生一个对应的 DOM 节点。这个节点是个对象，因而它具有属性<code>property</code>。</p><p>例如，如下 HTML 元素：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;text&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Name:&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>有两个特性<code>atrribute</code>。</p><p>一旦浏览器解析这段代码，将产生一个<code>HTMLInputElement</code>对象，并且这个对象将包含几十个属性<code>property</code>，比如：<code>accept</code>、<code>accessKey</code>、<code>align</code>、<code>alt</code>、<code>attributes</code>、<code>autofocus</code>、<code>baseURI</code>、<code>checked</code>、<code>childElementCount</code>、<code>childNodes</code>、<code>children</code>、<code>classList</code>、<code>className</code>、<code>clientHeight</code>等等。</p><p>对于 DOM 节点对象来说，属性<code>property</code>是节点对象的属性<code>property</code>，特性<code>attribute</code>是节点对象的<code>attributes</code>属性的元素。<br> （For a given DOM node object, properties are the properties of that object, and attributes are the elements of the attributes property of that object.）</p><p>对于给定的 HTML 元素，其 DOM 节点创建时，它的许多属性<code>property</code>以相同或者相似的名字与特性<code>attribute</code>相关联，但不是一一对应的关系。例如，对于以下的 HTML 元素：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;the-input&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;text&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>与之对应的 DOM 节点会有<code>id</code>、<code>type</code>和<code>value</code>属性：</p><ul><li><code>id</code>属性映射到<code>id</code>特性：获取属性<code>property</code>时将读取特性<code>attribute</code>的值，设置属性<code>property</code>时将重写特性<code>attribute</code>的值。<code>id</code>是纯映射属性，它不会修改或者限制值。</li><li><code>type</code>属性映射到<code>type</code>特性：获取属性<code>property</code>时将读取特性<code>attribute</code>的值，设置属性<code>property</code>时将重写特性<code>attribute</code>的值。<code>type</code>不是纯映射属性，因为它的取值限制于已知的值（即<code>input</code>元素<code>type</code>的有效值）。如果有<code>&lt;input type=&quot;foo&quot;&gt;</code>，则<code>theInput.getAttribute(&quot;type&quot;)</code>会得到<code>foo</code>，但是<code>theInput.type</code>会得到<code>text</code>。</li><li>相反的，<code>value</code>属性不会映射到<code>value</code>特性。取而代之的是<code>value</code>属性将获得<code>input</code>的当前值。当用户手动的改变<code>input</code>输入框的<code>value</code>值，<code>value</code>属性将反映出这个改变。因此如果用户输入 &#39;John&#39;，则：</li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">theInput</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // returns &quot;John&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>而</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">theInput</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getAttribute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// returns &quot;Name&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>value</code>属性反映出<code>input</code>输入框的当前<code>text-content</code>，而<code>value</code>特性包含了<code>input</code>输入框<code>value</code>特性的初始<code>text-content</code>。</p><p>因此如果你想要知道文本输入框的当前值，读取属性<code>property</code>。如果你想要知道文本输入框的初始值，读取特性<code>attribute</code>。或者你可以使用<code>defaultValue</code>属性，这是一个<code>value</code>特性的映射属性。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">theInput</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                 // returns &quot;John&quot;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">theInput</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getAttribute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// returns &quot;Name&quot;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">theInput</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defaultValue</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          // returns &quot;Name&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有好几个属性是直接映射到它们对应的特性<code>attribute</code>上的，比如<code>rel</code>和<code>id</code>。一些属性也是直接映射的，但是名字稍有不同，比如<code>htmlFor</code>属性映射到<code>for</code>特性，<code>className</code>映射到<code>class</code>特性。还有许多属性映射到它们对应的特性，但是有限制和修改，比如<code>src</code>、<code>href</code>、<code>disabled</code>、<code>multiple</code>等等。<a href="https://www.w3.org/TR/html5/infrastructure.html#reflect" target="_blank" rel="noopener noreferrer">这份文档</a>包含了各种各样的映射。</p><p>翻译自：<a href="http://stackoverflow.com/questions/6003819/properties-and-attributes-in-html#answer-6004028" target="_blank" rel="noopener noreferrer">http://stackoverflow.com/questions/6003819/properties-and-attributes-in-html#answer-6004028</a></p><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span>结论</span></a></h2><table><thead><tr><th>HTML attribute</th><th>DOM property</th></tr></thead><tbody><tr><td>值永远是字符串或<code>null</code></td><td>值可以是任意合法<code>js</code>类型</td></tr><tr><td>大小写不敏感</td><td>大小写敏感</td></tr><tr><td>不存在时返回<code>null</code></td><td>不存在时返回<code>undefined</code></td></tr><tr><td>对于<code>href</code>，返回<code>html</code>设置的值</td><td>对于<code>href</code>返回解析后的完整<code>url</code></td></tr><tr><td>更新<code>value</code>，属性也更新</td><td>更新<code>value</code>，特性不更新</td></tr></tbody></table><p>详情请见: <a href="https://github.com/justjavac/the-front-end-knowledge-you-may-not-know/blob/master/archives/015-dom-attributes-and-properties.md" target="_blank" rel="noopener noreferrer">HTML attribute 和 DOM property</a></p>', 21)),
    createVNode(_component_global_config)
  ]);
}
const differencesBetweenPropertiesAndAttributes_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "differences-between-properties-and-attributes.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/html-dom/attributes-properties/differences-between-properties-and-attributes.html","title":"特性和属性的区别","lang":"en-US","frontmatter":{"description":"特性和属性的区别 当写 HTML 源代码时，你可以在 HTML 元素上定义特性attribute。一旦浏览器解析了你的代码，将产生一个对应的 DOM 节点。这个节点是个对象，因而它具有属性property。 例如，如下 HTML 元素： 有两个特性atrribute。 一旦浏览器解析这段代码，将产生一个HTMLInputElement对象，并且这个对象...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/html-dom/attributes-properties/differences-between-properties-and-attributes.html"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"特性和属性的区别"}],["meta",{"property":"og:description","content":"特性和属性的区别 当写 HTML 源代码时，你可以在 HTML 元素上定义特性attribute。一旦浏览器解析了你的代码，将产生一个对应的 DOM 节点。这个节点是个对象，因而它具有属性property。 例如，如下 HTML 元素： 有两个特性atrribute。 一旦浏览器解析这段代码，将产生一个HTMLInputElement对象，并且这个对象..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"特性和属性的区别\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"结论","slug":"结论","link":"#结论","children":[]}],"git":{"createdTime":1561982264000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":2.88,"words":864},"filePathRelative":"browser-env/html-dom/attributes-properties/differences-between-properties-and-attributes.md","localizedDate":"July 1, 2019","autoDesc":true}');
export {
  differencesBetweenPropertiesAndAttributes_html as comp,
  data
};