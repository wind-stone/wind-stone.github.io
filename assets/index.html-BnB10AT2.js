import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/assets/decide-left-right-Bb2b6Xag.png";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[7] || (_cache[7] = createBaseVNode("h1", {
      id: "二分搜索",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#二分搜索"
      }, [
        createBaseVNode("span", null, "二分搜索")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#关注点" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("关注点")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#搜索区间" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("搜索区间")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#明确新的-left-right" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("明确新的 left/right")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#循环判断条件" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("循环判断条件")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#返回-left-right" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("返回 left/right")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#mid-是上取整还是下取整" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("mid 是上取整还是下取整")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#参考文档" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("参考文档")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[8] || (_cache[8] = createStaticVNode('<h2 id="关注点" tabindex="-1"><a class="header-anchor" href="#关注点"><span>关注点</span></a></h2><h3 id="搜索区间" tabindex="-1"><a class="header-anchor" href="#搜索区间"><span>搜索区间</span></a></h3><p>明确搜索的区间是左闭右闭区间<code>[left, right]</code>，还是左闭右开区间<code>[left, right)</code>。</p><div class="hint-container tip"><p class="hint-container-title">强烈推荐</p><p>在分析搜索区间时，将搜索区间尽量转变成左闭右闭区间<code>[left, right]</code>，这种形式是最直观的。</p></div><h3 id="明确新的-left-right" tabindex="-1"><a class="header-anchor" href="#明确新的-left-right"><span>明确新的 left/right</span></a></h3><p>根据中间位置元素的值<code>nums[mid]</code>可以把待搜索区间分为两个部分：</p><ul><li>一定不存在 目标元素的区间：下一轮搜索的时候，不用考虑它；</li><li>可能存在 目标元素的区间：下一轮搜索的时候，需要考虑它。</li></ul><figure><img src="' + _imports_0 + '" alt="如何确定 left 和 right" tabindex="0" loading="lazy"><figcaption>如何确定 left 和 right</figcaption></figure><h3 id="循环判断条件" tabindex="-1"><a class="header-anchor" href="#循环判断条件"><span>循环判断条件</span></a></h3><p>明确循环可执行的条件是<code>while(left &lt; right)</code>还是<code>while(left &lt;= right)</code>，当上一步确定的搜索区间为空时，循环则终止。</p><table><thead><tr><th>形式</th><th>结论与建议</th></tr></thead><tbody><tr><td><code>while (left &lt;= right)</code></td><td>简单问题用，在循环体里能找到答案以后退出。</td></tr><tr><td><code>while (left &lt; right)</code></td><td>复杂问题用，把答案留到退出循环以后，再判断。是解决二分问题的利器，尤其在边界问题用，这种方式考虑细节最少，但是需要一定练习才能灵活运用。</td></tr><tr><td><code>while (left + 1 &lt; right)</code></td><td>不建议，本质上和 while (left &lt;= right) 写法一样，盲目套这个所谓的最无脑模板，反而学不会二分。</td></tr></tbody></table><p><code>while(left &lt;= right)</code>在退出循环的时候<code>left = right + 1</code>，即<code>right</code>在左，<code>left</code>在右。这种写法用在简单的二分问题中，如果题目要我们找的数的性质很简单，可以用这种写法，在循环体里找到了就退出。</p><p><code>while(left &lt; right)</code>写法的好处在于退出循环的时候<code>left === right</code>，把要找的数留到最后，在退出循环以后做判断。这种写法在思考复杂问题时，确实可以少考虑很多细节，把思考的精力用于求解问题上。但是尤其要注意死循环的情况。</p><h3 id="返回-left-right" tabindex="-1"><a class="header-anchor" href="#返回-left-right"><span>返回 left/right</span></a></h3><p>只把区间分成两个部分，当循环判断条件为<code>while(left &lt; right)</code>时，循环终止条件一定是<code>left === right</code>，此时返回<code>left</code>或<code>right</code>都行。</p><h3 id="mid-是上取整还是下取整" tabindex="-1"><a class="header-anchor" href="#mid-是上取整还是下取整"><span>mid 是上取整还是下取整</span></a></h3><ul><li>下取整: <code>mid = left + Math.floor((right - left / 2))</code></li><li>上取整: <code>mid = left + Math.ceil((right - left / 2))</code></li></ul><p>需要根据<code>left/right</code>新的取值情况来判断是使用上取整还是下取整，原则是不进入死循环。</p><p>比如，当<code>if</code>或<code>else</code>里有<code>left = mid</code>的时候，假设当区间里只剩下两个元素的时候，若<code>mid</code>下取整即<code>mid</code>还是<code>left</code>，且<code>mid</code>被划分到右边区间即会执行<code>left = mid</code>，导致<code>left</code>一直不变，进而进入死循环。针对这种情况，需要将<code>mid</code>调整为上取整。</p><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2><ul><li><a href="https://leetcode-cn.com/problems/search-insert-position/solution/te-bie-hao-yong-de-er-fen-cha-fa-fa-mo-ban-python-/" target="_blank" rel="noopener noreferrer">写对二分查找不能靠模板，需要理解加练习</a>，这篇文章非常好，完整理解后，可以完全解决所有二分问题。</li><li><a href="https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/solution/da-jia-bu-yao-kan-labuladong-de-jie-fa-fei-chang-2/" target="_blank" rel="noopener noreferrer">关于 while (left &lt;= right) 写法返回值的详细讨论</a></li></ul>', 21)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/interview/algorithm/others/binary-search/","title":"二分搜索","lang":"en-US","frontmatter":{"description":"二分搜索 关注点 搜索区间 明确搜索的区间是左闭右闭区间[left, right]，还是左闭右开区间[left, right)。 强烈推荐 在分析搜索区间时，将搜索区间尽量转变成左闭右闭区间[left, right]，这种形式是最直观的。 明确新的 left/right 根据中间位置元素的值nums[mid]可以把待搜索区间分为两个部分： 一定不存在 ...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/interview/algorithm/others/binary-search/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"二分搜索"}],["meta",{"property":"og:description","content":"二分搜索 关注点 搜索区间 明确搜索的区间是左闭右闭区间[left, right]，还是左闭右开区间[left, right)。 强烈推荐 在分析搜索区间时，将搜索区间尽量转变成左闭右闭区间[left, right]，这种形式是最直观的。 明确新的 left/right 根据中间位置元素的值nums[mid]可以把待搜索区间分为两个部分： 一定不存在 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-12-22T06:23:30.000Z"}],["meta",{"property":"article:modified_time","content":"2021-12-22T06:23:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二分搜索\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-12-22T06:23:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"关注点","slug":"关注点","link":"#关注点","children":[{"level":3,"title":"搜索区间","slug":"搜索区间","link":"#搜索区间","children":[]},{"level":3,"title":"明确新的 left/right","slug":"明确新的-left-right","link":"#明确新的-left-right","children":[]},{"level":3,"title":"循环判断条件","slug":"循环判断条件","link":"#循环判断条件","children":[]},{"level":3,"title":"返回 left/right","slug":"返回-left-right","link":"#返回-left-right","children":[]},{"level":3,"title":"mid 是上取整还是下取整","slug":"mid-是上取整还是下取整","link":"#mid-是上取整还是下取整","children":[]}]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1618814080000,"updatedTime":1640154210000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":2}]},"readingTime":{"minutes":2.66,"words":798},"filePathRelative":"interview/algorithm/others/binary-search/README.md","localizedDate":"April 19, 2021","autoDesc":true}');
export {
  index_html as comp,
  data
};
