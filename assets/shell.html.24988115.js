import { r as resolveComponent, a as createElementBlock, b as createVNode, F as Fragment, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="shell-\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#shell-\u811A\u672C" aria-hidden="true">#</a> Shell \u811A\u672C</h1><h2 id="\u5E38\u7528\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u4EE3\u7801" aria-hidden="true">#</a> \u5E38\u7528\u4EE3\u7801</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>\n\n<span class="token comment"># \u5224\u65AD\u662F\u5426\u4F20\u5165\u4E86\u7B2C\u4E00\u4E2A\u53C2\u6570</span>\n<span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u672A\u4F20\u5165\u7B2C\u4E00\u4E2A\u53C2\u6570&quot;</span>\n<span class="token keyword">else</span>\n    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u4F20\u5165\u4E86\u7B2C\u4E00\u4E2A\u53C2\u6570&quot;</span>\n<span class="token keyword">fi</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>-z</code>: \u68C0\u6D4B\u5B57\u7B26\u4E32\u957F\u5EA6\u662F\u5426\u4E3A<code>0</code>\uFF0C\u4E3A<code>0</code>\u5219\u8FD4\u56DE<code>true</code>\u3002</p>', 4);
function _sfc_render(_ctx, _cache) {
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createVNode(_component_global_config)
  ], 64);
}
var shell_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { shell_html as default };
