import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, a as createVNode, o as openBlock } from "./app-BMhVoaeF.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="vue-3-x" tabindex="-1"><a class="header-anchor" href="#vue-3-x"><span>Vue 3.x</span></a></h1><h2 id="源码学习进度" tabindex="-1"><a class="header-anchor" href="#源码学习进度"><span>源码学习进度</span></a></h2><h3 id="响应式原理-reactivity" tabindex="-1"><a class="header-anchor" href="#响应式原理-reactivity"><span>响应式原理 reactivity</span></a></h3><ul><li><code>reactive</code>: 为对象、数组、<code>Set</code>/<code>WeakSet</code>、<code>Map</code>/<code>WeakMap</code>等做响应式转换，而不会对 Date、RegExp、Function 等做响应式处理 <ul><li>源码位置: <code>packages/reactivity/src/reactive.ts</code></li><li>其他方法 <ul><li><code>isReactive()</code></li><li><code>isReadonly()</code></li><li><code>isProxy()</code></li><li><code>toRaw()</code>：递归地获取代理对象<code>observed</code>的原始对象</li><li><code>markRaw(value)</code>：标记<code>value</code>为跳转响应式转换，以后即使调用<code>reactive(value)</code>等操作返回的还是<code>value</code>本身</li><li>baseHandlers.ts: 对象/数组做代理时使用的处理器对象</li></ul></li></ul></li><li><code>ref(val)</code>: 将<code>val</code>转换为 Ref 对象，<code>val</code>可以是对象或代理对象 <ul><li>源码位置: <code>packages/reactivity/src/ref.ts</code></li><li><code>shallowRef()</code></li><li><code>isRef()</code></li><li><code>unref()</code>: 获取 Ref 对象的原始值</li><li><code>toRef(obj, key)</code>: 将对象的单个<code>key</code>转为 ObjectRef 对象（类似于 Ref 对象），解决因提前触发值的<code>get</code>方法（比如解构赋值、扩展运算符）导致的响应式丢失问题</li><li><code>toRefs()</code>: 遍历对象的每一个<code>key</code>调用<code>toRef</code></li><li><code>triggerRef()</code>: 手动触发依赖<code>ref</code>的<code>effect</code>重新运行</li><li><code>customRef</code>: 自定义<code>ref</code>的<code>get</code>/<code>set</code>函数</li><li>【TODO】<code>proxyRefs</code></li></ul></li><li>【done】effect.ts <ul><li><code>effect()</code></li><li><code>track()</code></li><li><code>trigger()</code></li></ul></li><li><code>computed</code>方法 <ul><li>源码位置: <code>packages/reactivity/src/computed.ts</code></li><li><code>computed</code>具有双重角色，自身既作为<code>ReactiveEffect</code>依赖外部的依赖项，也作为<code>ComputedRef</code>（类似于<code>ref</code>，专用于计算属性）成为外部<code>ReactiveEffect</code>的依赖项</li><li><code>computed</code>的计算是惰性的，即: <ul><li>首次声明<code>computed()</code>时不会对传入的<code>getter</code>进行计算</li><li>若只声明了<code>computed</code>但没有获取<code>computed</code>的值，当<code>computed</code>的依赖项改变时，<code>computed</code>不会进行计算新值，只会标记当前的计算值为<code>dirty</code></li></ul></li></ul></li></ul><p>以上这些内容位于<code>vue-next/packages/reactivity</code>目录下，会单独发包为<code>@vue/reactivity</code>，可独立于 Vue 3 使用。</p><h4 id="响应式的计算和侦听" tabindex="-1"><a class="header-anchor" href="#响应式的计算和侦听"><span>响应式的计算和侦听</span></a></h4><ul><li><code>watchEffect</code>/<code>watch</code>方法 <ul><li>源码位置: <code>packages/runtime-core/src/apiWatch.ts</code></li><li><code>watchEffect</code>方法 <ul><li>第一个参数只能是函数</li><li>立即执行传入的函数<code>fn</code>，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数<code>fn</code></li></ul></li><li><code>watch</code><ul><li>第一个参数可以是： <ul><li><code>getter</code>函数</li><li><code>ref</code>对象</li><li>响应式对象</li><li>以上这些组成的数组</li></ul></li><li>与<code>watchEffect</code>比较，<code>watch</code>允许我们： <ul><li>懒执行副作用；</li><li>更具体地说明什么状态应该触发侦听器重新运行；</li><li>访问侦听状态变化前后的值。</li></ul></li></ul></li></ul></li></ul><p>以上这些内容是 Vue 3 基于<code>@vue/reactivity</code>的封装，只在 Vue 3 内部使用。</p><h3 id="runtime-core" tabindex="-1"><a class="header-anchor" href="#runtime-core"><span>runtime-core</span></a></h3><h4 id="watcheffect-watch" tabindex="-1"><a class="header-anchor" href="#watcheffect-watch"><span>watchEffect/watch</span></a></h4><ul><li><code>watchEffect</code>/<code>watch</code><ul><li>首次都会运行一次</li><li>调用<code>watchEffect()</code>的返回值<code>stop</code>，可以停止副作用，且将该<code>watcher</code>从当前 Vue 实例<code>instance.effects</code>数组里移除</li></ul></li><li><code>watchEffect(effect, options?)</code></li><li><code>watch(source, callback, options?)</code><ul><li>当<code>source</code>的依赖项改变导致<code>source</code>重新计算后，则满足以下条件之一，回调函数<code>callback</code>会运行 <ul><li>第一个参数是<code>ref</code>，或是<code>reactive</code>的对象，或是指定了<code>deep: true</code></li><li>通过第一个参数获取的值改变了</li></ul></li></ul></li></ul><h4 id="为什么解构赋值、扩展运算符等会造成响应式丢失" tabindex="-1"><a class="header-anchor" href="#为什么解构赋值、扩展运算符等会造成响应式丢失"><span>为什么解构赋值、扩展运算符等会造成响应式丢失</span></a></h4><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> obj</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> reactive</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">foo</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> }) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// obj 是响应式数据</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> obj2</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">foo</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> obj</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> }</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">effect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">obj2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 这里读取 obj2.foo</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">obj</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">foo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 设置 obj.foo 显然无效</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第<code>2</code>行获取<code>obj.foo</code>时会触发<code>obj.foo</code>的<code>get</code>函数进行依赖收集，但是此时<code>activeEffect</code>为空，这导致<code>obj.foo</code>没有被任何的<code>effect</code>所依赖，且赋值结束后，<code>obj2</code>的值为<code>{ foo: 1 }</code>，<code>obj.foo</code>的值是原始值，而不是响应式的，因此在<code>effect()</code>函数执行时不会将<code>obj.foo</code>收集为依赖项，因此最后一行给<code>obj.foo</code>赋值时不会触发<code>effect()</code>的重新计算。</p><p>解构赋值、扩展运算符也是同理，都是先将值获取到再赋值给变量，而这个过程中<code>activeEffect</code>都为空，不会进行依赖收集，而赋值后的变量不是响应式的。</p><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2><ul><li><a href="https://juejin.cn/post/6844904122479542285" target="_blank" rel="noopener noreferrer">Vue3 的响应式和以前有什么区别，Proxy 无敌？</a></li><li><a href="https://zhuanlan.zhihu.com/p/146097763" target="_blank" rel="noopener noreferrer">深入理解 Vue3 Reactivity API</a></li></ul>', 17)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/vue3/","title":"Vue 3.x","lang":"en-US","frontmatter":{"description":"Vue 3.x 源码学习进度 响应式原理 reactivity reactive: 为对象、数组、Set/WeakSet、Map/WeakMap等做响应式转换，而不会对 Date、RegExp、Function 等做响应式处理 源码位置: packages/reactivity/src/reactive.ts 其他方法 isReactive() isR...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/vue3/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Vue 3.x"}],["meta",{"property":"og:description","content":"Vue 3.x 源码学习进度 响应式原理 reactivity reactive: 为对象、数组、Set/WeakSet、Map/WeakMap等做响应式转换，而不会对 Date、RegExp、Function 等做响应式处理 源码位置: packages/reactivity/src/reactive.ts 其他方法 isReactive() isR..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-07-29T02:39:59.000Z"}],["meta",{"property":"article:modified_time","content":"2021-07-29T02:39:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue 3.x\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-07-29T02:39:59.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"源码学习进度","slug":"源码学习进度","link":"#源码学习进度","children":[{"level":3,"title":"响应式原理 reactivity","slug":"响应式原理-reactivity","link":"#响应式原理-reactivity","children":[]},{"level":3,"title":"runtime-core","slug":"runtime-core","link":"#runtime-core","children":[]}]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1601382088000,"updatedTime":1627526399000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":2}]},"readingTime":{"minutes":3.2,"words":959},"filePathRelative":"vue3/README.md","localizedDate":"September 29, 2020","autoDesc":true}');
export {
  index_html as comp,
  data
};