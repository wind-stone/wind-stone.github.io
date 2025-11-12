import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/assets/baseline-jpg-BqOTQsIP.gif";
const _imports_1 = "/assets/continuous-jpg-DuLrigvv.gif";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[8] || (_cache[8] = createBaseVNode("h1", {
      id: "图片",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#图片"
      }, [
        createBaseVNode("span", null, "图片")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#图片格式对比" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("图片格式对比")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#jpg" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("JPG")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#连续的-jpg" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("连续的 JPG")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#png" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("PNG")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#gif" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("GIF")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#颜色表" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("颜色表")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#图片的性能优化" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("图片的性能优化")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#reference" }, {
            default: withCtx(() => _cache[7] || (_cache[7] = [
              createTextVNode("Reference")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[9] || (_cache[9] = createStaticVNode('<h2 id="图片格式对比" tabindex="-1"><a class="header-anchor" href="#图片格式对比"><span>图片格式对比</span></a></h2><table><thead><tr><th>图片格式/特性</th><th>颜色表支持</th><th>真彩色支持</th><th>压缩方式</th><th>动画</th><th>支持透明度</th><th>支持半透明度</th><th>浏览器兼容性</th></tr></thead><tbody><tr><td>JPG</td><td>❌</td><td>✅</td><td>有损压缩</td><td>❌</td><td>❌</td><td>❌</td><td>所有</td></tr><tr><td>GIF</td><td>✅</td><td>❌</td><td>有损/无损压缩</td><td>✅</td><td>✅</td><td>❌</td><td>所有</td></tr><tr><td>PNG-8</td><td>✅</td><td>❌</td><td>无损压缩</td><td>❌</td><td>✅</td><td>✅</td><td>所有（IE8以下可兼容处理）</td></tr><tr><td>PNG-24</td><td>❌</td><td>✅</td><td>无损压缩</td><td>❌</td><td>❌</td><td>❌</td><td>所有（IE8以下可兼容处理）</td></tr><tr><td>PNG-32</td><td>❌</td><td>✅</td><td>无损压缩</td><td>❌</td><td>✅</td><td>✅</td><td>所有（IE8以下可兼容处理）</td></tr><tr><td>SVG</td><td>待确认</td><td>待确认</td><td>无损压缩</td><td>✅</td><td>✅</td><td>✅</td><td>所有（IE9及以下课通过降级兼容）</td></tr><tr><td>WebP</td><td>待确认</td><td>待确认</td><td>有损压缩</td><td>✅</td><td>✅</td><td>待确认</td><td>支持 chromium 内核浏览器和 Android 4.0+， 其他版本和 iOS 可插件兼容</td></tr></tbody></table><table><thead><tr><th>图片格式</th><th>适用场景</th></tr></thead><tbody><tr><td>JPG</td><td>适用于层次丰富、色彩较多的照片、摄影等图像</td></tr><tr><td>GIF</td><td>适用于图像动画，兼容性好；体积小，适合网络传输；</td></tr><tr><td>PNG</td><td>适用于色彩简单、对比强烈的图像，像 icon 图标等；高保真效果，高压缩比，支持透明；支持渐进传输，整体从模糊到清晰</td></tr><tr><td>SVG</td><td>矢量图形，可缩放；无需多端、多分辨率适配；支持多种编辑，具有较强的交互特性；</td></tr><tr><td>WebP</td><td>高压缩比，适合网络快速传输</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">说明</p><ul><li><p>颜色表支持是指，每张图片都自带一张具有有限数量颜色的颜色表，图片里的颜色只能是颜色表里的颜色。因此，相同尺寸的图片，颜色表的颜色数越少，文件体积越小。</p></li><li><p>真彩色支持是指，可以支持大约 1670 万种颜色。需要 3 个字节记录 1 个像素，红、绿、蓝三原色各占 1 个字节，即支持2<sup>24</sup>种颜色，约 1670 万种。</p></li><li><p>SVG: <a href="https://caniuse.com/#feat=svg-css" target="_blank" rel="noopener noreferrer">CSS 背景图片支持度</a>、<a href="https://caniuse.com/#feat=svg-img" target="_blank" rel="noopener noreferrer">HTML 图片元素支持度</a></p></li><li><p>非特殊情况，尽量不要用 PNG-24 和 PNG-32。</p></li></ul></div><p>首先，Logo、图标等小图片，整张图片一般不多于256色，因此当然选择带颜色表的图片格式。而事实证明，对于同一张图，PNG-8 的体积是小于 GIF 的。因此，若不是动画，小图片请用 PNG-8。</p><p>然后，照片、横幅等大图，就像在线听歌一样。如果在线听无损音乐，那得很大的带宽才行。我们在线试听歌曲，目的就是听听这首歌，不会非常注重音质（而且我的木耳是听不出MP3和无损的区别的）。同样道理，放在网页中的大图，用户肯定不会太看重画质，能看清楚内容就行。因此，照片大图用有损压缩的JPG。</p><p>根据经验，JPG的画质一般选择 60% - 70%。当然如果你要求较高，可以在PS里一边看预览一边慢慢调整直到自己满意。</p><h2 id="jpg" tabindex="-1"><a class="header-anchor" href="#jpg"><span>JPG</span></a></h2><ul><li>不支持颜色表</li><li>也不支持透明</li><li>只有真彩色</li><li>有损压缩</li></ul><h3 id="连续的-jpg" tabindex="-1"><a class="header-anchor" href="#连续的-jpg"><span>连续的 JPG</span></a></h3><p>Photoshop 里保存 JPG 格式时有个“连续”选项，路径为：PS CC2017：文件 → 存储为... → “JPG”格式 → 保存</p><figure><img src="' + _imports_0 + '" alt="“基线”格式的JPG加载过程：从上往下" tabindex="0" loading="lazy"><figcaption>“基线”格式的JPG加载过程：从上往下</figcaption></figure><p>“基线”格式的JPG加载过程：从上往下</p><figure><img src="' + _imports_1 + '" alt="“连续”格式的JPG加载过程：从模糊到清晰" tabindex="0" loading="lazy"><figcaption>“连续”格式的JPG加载过程：从模糊到清晰</figcaption></figure><p>“连续”格式的JPG加载过程：从模糊到清晰</p><h3 id="png" tabindex="-1"><a class="header-anchor" href="#png"><span>PNG</span></a></h3><ul><li>PNG-8 <ul><li>1 个字节记录一个像素：能有 256 种颜色</li><li>PNG-8 带颜色表，而且不像 BMP 只有固定的16色、256色，PNG-8 的颜色数可以从 2 种到 256 种之间任意种，像123种、10种颜色之类的颜色数，PNG-8 都是支持的。而且通过强大的压缩算法，PNG-8 可以真正做到颜色数越少，文件体积越小。</li></ul></li><li>PNG-24 <ul><li>3 个字节记录一个像素：红、绿、蓝三原色各占一个字节，总共大约 1670 万色，即真彩色</li></ul></li><li>PNG-32 <ul><li>4 个字节记录一个像素：在 PNG-24 的基础上，增加透明通道，占 1 字节，从 0~255 表示从 全透明 -&gt; 半透明 -&gt; 不透明</li></ul></li></ul><h3 id="gif" tabindex="-1"><a class="header-anchor" href="#gif"><span>GIF</span></a></h3><ul><li>带颜色表，最多支持 256 色，也支持 256 以内任意数量的颜色表</li><li>不支持真彩色</li><li>帧动画</li></ul><h3 id="颜色表" tabindex="-1"><a class="header-anchor" href="#颜色表"><span>颜色表</span></a></h3><p>16色（1 个字节记录 2 个像素）、256色（1 个字节记录 1 个像素，比如 PNG-8）图片文件除了存储每个像素之外，还会存储一份颜色表（Palette，亦译作调色板、色盘），从真彩色的 1670 万种色彩里任意挑选 16、256 种颜色，构成一个索引。颜色表大概长这个样子：</p><blockquote><p>0号色：#000000</p><p>1号色：#3385FF</p><p>...</p><p>255号色：#FAFEF2</p></blockquote><p>以 PNG-8 为例，其能支持的颜色数量不是固定的 256 种，而是可以从 1670 万种颜色里选取 256 种。</p><h2 id="图片的性能优化" tabindex="-1"><a class="header-anchor" href="#图片的性能优化"><span>图片的性能优化</span></a></h2><ul><li>图片懒加载：在页面上的未可视区域可以添加一个滚动事件，判断图片位置与浏览器顶端的距离与页面的距离，如果前者小于后者，优先加载</li><li>图片预加载：幻灯片、相册等可以使用技术，将当前展示图片的前一张和后一张优先下载</li><li>CSS Sprite，SVG Sprite，Iconfont，Base64</li><li>如果图片过大，可以使用特殊编码的图片，加载时会先加载一张压缩的特别厉害的缩略图，以提高用户体验</li><li>如果图片展示区域小于图片的真实大小，则因在服务器端根据业务需要先行进行图片压缩，图片压缩后大小与展示一致</li></ul><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference"><span>Reference</span></a></h2><p>更多详情请见：<a href="https://www.jianshu.com/p/ab96bf20f90e" target="_blank" rel="noopener noreferrer">JPG？GIF？PNG？前端如何选择图片格式？</a></p>', 27)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/html-dom/image/","title":"图片","lang":"en-US","frontmatter":{"description":"图片 图片格式对比 说明 颜色表支持是指，每张图片都自带一张具有有限数量颜色的颜色表，图片里的颜色只能是颜色表里的颜色。因此，相同尺寸的图片，颜色表的颜色数越少，文件体积越小。 真彩色支持是指，可以支持大约 1670 万种颜色。需要 3 个字节记录 1 个像素，红、绿、蓝三原色各占 1 个字节，即支持224种颜色，约 1670 万种。 SVG: CSS...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/html-dom/image/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"图片"}],["meta",{"property":"og:description","content":"图片 图片格式对比 说明 颜色表支持是指，每张图片都自带一张具有有限数量颜色的颜色表，图片里的颜色只能是颜色表里的颜色。因此，相同尺寸的图片，颜色表的颜色数越少，文件体积越小。 真彩色支持是指，可以支持大约 1670 万种颜色。需要 3 个字节记录 1 个像素，红、绿、蓝三原色各占 1 个字节，即支持224种颜色，约 1670 万种。 SVG: CSS..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图片\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"图片格式对比","slug":"图片格式对比","link":"#图片格式对比","children":[]},{"level":2,"title":"JPG","slug":"jpg","link":"#jpg","children":[{"level":3,"title":"连续的 JPG","slug":"连续的-jpg","link":"#连续的-jpg","children":[]},{"level":3,"title":"PNG","slug":"png","link":"#png","children":[]},{"level":3,"title":"GIF","slug":"gif","link":"#gif","children":[]},{"level":3,"title":"颜色表","slug":"颜色表","link":"#颜色表","children":[]}]},{"level":2,"title":"图片的性能优化","slug":"图片的性能优化","link":"#图片的性能优化","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1543565329000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":4.79,"words":1437},"filePathRelative":"browser-env/html-dom/image/README.md","localizedDate":"November 30, 2018","autoDesc":true}');
export {
  index_html as comp,
  data
};
