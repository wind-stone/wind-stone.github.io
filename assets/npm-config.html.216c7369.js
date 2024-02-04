import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "npm-config",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#npm-config",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" npm-config")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u63CF\u8FF0");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u547D\u4EE4\u884C\u6807\u8BB0");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u73AF\u5883\u53D8\u91CF");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("npmrc \u6587\u4EF6");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u9ED8\u8BA4\u914D\u7F6E");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u7B80\u5199\u4EE5\u53CA\u4E00\u4E9B\u5176\u4ED6\u7684 CLI \u7EC6\u8282");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u6BCF\u4E2A\u5305\u7684\u914D\u7F6E\u8BBE\u7F6E");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u5404\u9879\u914D\u7F6E");
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><p><code>npm</code>\u4F1A\u4ECE\u4EE5\u4E0B\u6765\u6E90\u83B7\u53D6\u914D\u7F6E\u503C\uFF0C\u6309\u4F18\u5148\u7EA7\u6392\u5E8F\u4E3A\uFF1A</p><h2 id="\u547D\u4EE4\u884C\u6807\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u884C\u6807\u8BB0" aria-hidden="true">#</a> \u547D\u4EE4\u884C\u6807\u8BB0</h2><p>\u547D\u4EE4\u884C\u91CC\u7684<code>--foo bar</code>\u4F1A\u5C06<code>foo</code>\u914D\u7F6E\u53C2\u6570\u7684\u503C\u8BBE\u7F6E\u4E3A<code>bar</code>\u3002<code>--</code>\u544A\u8BC9<code>cli</code>\u89E3\u6790\u5668\u505C\u6B62\u8BFB\u53D6\u6807\u8BB0\u3002\u4F7F\u7528<code>--flag</code>\u4E14\u4E0D\u5E26\u4EFB\u4F55\u6307\u5B9A\u7684\u503C\u5C06\u8BBE\u7F6E<code>flag</code>\u914D\u7F6E\u53C2\u6570\u7684\u503C\u4E3A<code>true</code>\u3002</p><p>\u6BD4\u5982\uFF0C<code>--flag1 --flag2</code>\u4F1A\u5C06<code>flag1</code>\u548C<code>flag2</code>\u914D\u7F6E\u53C2\u6570\u7684\u503C\u90FD\u8BBE\u7F6E\u4E3A<code>true</code>\uFF0C\u800C<code>--flag1 --flag2 bar</code>\u4F1A\u5C06<code>flag1</code>\u8BBE\u7F6E\u4E3A<code>true</code>\uFF0C<code>flag2</code>\u8BBE\u7F6E\u4E3A<code>bar</code>\u3002\u6700\u540E\uFF0C<code>--flag1 --flag2 -- bar</code>\u5C06\u8BBE\u7F6E<code>flag1</code>\u548C<code>flag2</code>\u4E3A<code>true</code>\uFF0C\u4E14<code>bar</code>\u5C06\u4F5C\u4E3A\u547D\u4EE4\u53C2\u6570\u3002</p><h2 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF</h2>', 6);
const _hoisted_17 = /* @__PURE__ */ createStaticVNode("\u4EFB\u4F55\u4EE5<code>npm_config_</code>\u5F00\u59CB\u7684\u73AF\u5883\u53D8\u91CF\u90FD\u5C06\u88AB\u7406\u89E3\u4E3A\u914D\u7F6E\u53C2\u6570\u3002\u6BD4\u5982\uFF0C\u5C06<code>npm_config_foo=bar</code>\u653E\u5165\u4F60\u7684\u73AF\u5883\u91CC\uFF0C\u8FD9\u5C06\u8BBE\u7F6E<code>foo</code>\u914D\u7F6E\u53C2\u6570\u7684\u503C\u4E3A<code>bar</code>\u3002\u4EFB\u4F55\u6CA1\u6709\u7ED9\u5B9A\u4E00\u4E2A\u503C\u7684\u73AF\u5883\u53D8\u91CF\u90FD\u5C06\u88AB\u8BBE\u7F6E\u4E3A<code>true</code>\u3002\u914D\u7F6E\u7684\u503C\u90FD\u662F\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\uFF0C\u56E0\u6B64<code>NPM_CONFIG_FOO=bar</code>\u5C06\u8D77\u540C\u6837\u7684\u4F5C\u7528\u3002\u4F46\u662F\u9700\u8981\u6CE8\u610F\uFF0C\u5728<code>npm-scripts</code>\u91CC\uFF0C<code>npm</code>\u5C06\u8BBE\u7F6E\u5B83\u81EA\u5DF1\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u5E76\u4E14\u6BD4\u8D77\u4F60\u8BBE\u7F6E\u7684\u5927\u5199\u7248\u672C\u7684\uFF0CNode \u66F4\u559C\u6B22\u8FD9\u4E9B\u5C0F\u5199\u7248\u672C\u7684\uFF0C\u8BE6\u60C5\u8BF7\u89C1", 17);
const _hoisted_34 = {
  href: "https://github.com/npm/npm/issues/14528",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_35 = /* @__PURE__ */ createTextVNode("\u8FD9\u4E2A issue");
const _hoisted_36 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_37 = /* @__PURE__ */ createStaticVNode('<p>\u6CE8\u610F\uFF0C\u4F60\u9700\u8981\u4F7F\u7528\u4E0B\u5212\u7EBF<code>_</code>\u800C\u4E0D\u662F\u6A2A\u7EBF<code>-</code>\uFF0C\u56E0\u6B64<code>--allow-same-version</code>\u5C06\u53D8\u6210<code>npm_config_allow_same_version=true</code>\u3002</p><h2 id="npmrc-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#npmrc-\u6587\u4EF6" aria-hidden="true">#</a> npmrc \u6587\u4EF6</h2><p>\u6709\u56DB\u4E2A\u76F8\u5173\u7684\u6587\u4EF6\uFF1A</p><ul><li>\u6BCF\u4E2A\u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6\uFF08<code>/path/to/my/project/.npmrc</code>\uFF09</li><li>\u6BCF\u4E2A\u7528\u6237\u7684\u914D\u7F6E\u6587\u4EF6\uFF08\u9ED8\u8BA4\u662F<code>$HOME/.npmrc</code>\uFF1B\u53EF\u901A\u8FC7 CLI \u9009\u9879<code>--userconfig</code>\u6216\u73AF\u5883\u53D8\u91CF<code>$NPM_CONFIG_USERCONFIG</code>\u914D\u7F6E\uFF09</li><li>\u5168\u5C40\u7684\u914D\u7F6E\u6587\u4EF6\uFF08\u9ED8\u8BA4\u662F<code>$PREFIX/etc/npmrc</code>\uFF1B\u53EF\u901A\u8FC7 CLI \u9009\u9879<code>--globalconfig</code>\u6216\u73AF\u5883\u53D8\u91CF<code>$NPM_CONFIG_GLOBALCONFIG</code>\u914D\u7F6E\uFF09</li><li><code>npm</code>\u5185\u7F6E\u7684\u914D\u7F6E\u6587\u4EF6\uFF08<code>/path/to/npm/npmrc</code>\uFF09</li></ul>', 4);
const _hoisted_41 = /* @__PURE__ */ createTextVNode("\u66F4\u591A\u8BE6\u60C5\u53EF\u89C1");
const _hoisted_42 = /* @__PURE__ */ createTextVNode("npmrc");
const _hoisted_43 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_44 = /* @__PURE__ */ createStaticVNode('<h2 id="\u9ED8\u8BA4\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u914D\u7F6E" aria-hidden="true">#</a> \u9ED8\u8BA4\u914D\u7F6E</h2><p>\u8FD0\u884C<code>npm config ls -l</code>\u53EF\u770B\u5230<code>npm</code>\u5185\u90E8\u7684\u914D\u7F6E\u53C2\u6570\u96C6\u5408\uFF0C\u8FD9\u4E9B\u90FD\u662F\u9ED8\u8BA4\u503C\u5982\u679C\u6CA1\u6709\u7279\u6B8A\u8BBE\u7F6E\u7684\u8BDD\u3002</p><h2 id="\u7B80\u5199\u4EE5\u53CA\u4E00\u4E9B\u5176\u4ED6\u7684-cli-\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5199\u4EE5\u53CA\u4E00\u4E9B\u5176\u4ED6\u7684-cli-\u7EC6\u8282" aria-hidden="true">#</a> \u7B80\u5199\u4EE5\u53CA\u4E00\u4E9B\u5176\u4ED6\u7684 CLI \u7EC6\u8282</h2><p>\u4EE5\u4E0B\u8FD9\u4E9B\u7B80\u5199\u4F1A\u5728\u547D\u4EE4\u884C\u89E3\u6790\uFF1A</p><ul><li><code>-v</code>: <code>--version</code></li><li><code>-h</code>, <code>-?</code>, <code>--help</code>, <code>-H</code>: <code>--usage</code></li><li><code>-s</code>, <code>--silent</code>: <code>--loglevel silent</code></li><li><code>-q</code>, <code>--quiet</code>: <code>--loglevel warn</code></li><li><code>-d</code>: <code>--loglevel info</code></li><li><code>-dd</code>, --verbose: --loglevel verbose</li><li><code>-ddd</code>: <code>--loglevel silly</code></li><li><code>-g</code>: <code>--global</code></li><li><code>-C</code>: <code>--prefix</code></li><li><code>-l</code>: <code>--long</code></li><li><code>-m</code>: <code>--message</code></li><li><code>-p</code>, <code>--porcelain</code>: <code>--parseable</code></li><li><code>-reg</code>: <code>--registry</code></li><li><code>-f</code>: <code>--force</code></li><li><code>-desc</code>: <code>--description</code></li><li><code>-S</code>: <code>--save</code></li><li><code>-P</code>: <code>--save-prod</code></li><li><code>-D</code>: <code>--save-dev</code></li><li><code>-O</code>: <code>--save-optional</code></li><li><code>-B</code>: <code>--save-bundle</code></li><li><code>-E</code>: <code>--save-exact</code></li><li><code>-y</code>: <code>--yes</code></li><li><code>-n</code>: <code>--yes false</code></li><li><code>ll</code> and <code>la</code> commands: <code>ls --long</code></li></ul><p>\u82E5\u662F\u6307\u5B9A\u7684\u914D\u7F6E\u53C2\u6570\u53EF\u4EE5\u660E\u786E\u5730\u89E3\u6790\u5230\u4E00\u4E2A\u5DF2\u77E5\u7684\u914D\u7F6E\u53C2\u6570\uFF0C\u5219\u5B83\u5C06\u6269\u5C55\u4E3A\u90A3\u4E2A\u914D\u7F6E\u53C2\u6570\u3002\u6BD4\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">ls</span> --par\n<span class="token comment"># same as:</span>\n<span class="token function">npm</span> <span class="token function">ls</span> --parseable\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u82E5\u662F\u591A\u4E2A\u5355\u5B57\u7B26\u7B80\u5199\u8FDE\u5728\u4E00\u8D77\uFF0C\u4E14\u8FDE\u8D77\u6765\u7684\u7ED3\u679C\u7EC4\u5408\u660E\u786E\u4E0D\u662F\u5176\u4ED6\u7684\u914D\u7F6E\u53C2\u6570\uFF0C\u5219\u5B83\u5C06\u6269\u5C55\u4E3A\u5B83\u7684\u5404\u4E2A\u7EC4\u6210\u7247\u6BB5\u3002\u6BD4\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">ls</span> -gpld\n<span class="token comment"># same as:</span>\n<span class="token function">npm</span> <span class="token function">ls</span> --global --parseable --long --loglevel info\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u6BCF\u4E2A\u5305\u7684\u914D\u7F6E\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6BCF\u4E2A\u5305\u7684\u914D\u7F6E\u8BBE\u7F6E" aria-hidden="true">#</a> \u6BCF\u4E2A\u5305\u7684\u914D\u7F6E\u8BBE\u7F6E</h2>', 10);
const _hoisted_54 = /* @__PURE__ */ createTextVNode("\u5F53\u8FD0\u884C\u811A\u672C\u65F6\uFF08\u8BE6\u89C1");
const _hoisted_55 = {
  href: "https://www.npmjs.cn/misc/scripts/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_56 = /* @__PURE__ */ createTextVNode("npm-scripts");
const _hoisted_57 = /* @__PURE__ */ createTextVNode("\uFF09\uFF0C");
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("code", null, "package.json", -1);
const _hoisted_59 = /* @__PURE__ */ createTextVNode("\u6587\u4EF6\u91CC\u7684");
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("code", null, "config", -1);
const _hoisted_61 = /* @__PURE__ */ createTextVNode("\u5C5E\u6027\u5C06\u88AB\u73AF\u5883\u91CC\u7684");
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("code", null, "<name>[@<version>]:<key>", -1);
const _hoisted_63 = /* @__PURE__ */ createTextVNode("\u5F62\u5F0F\u7684\u914D\u7F6E\u53C2\u6570\u8986\u76D6\u3002\u6BD4\u5982\uFF0C");
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("code", null, "package.json", -1);
const _hoisted_65 = /* @__PURE__ */ createTextVNode("\u662F\u8FD9\u6837\uFF1A");
const _hoisted_66 = /* @__PURE__ */ createStaticVNode('<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;port&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;8080&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;start&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;node server.js&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4E14<code>server.js</code>\u662F\u8FD9\u6837\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>npm_package_config_port<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5219\u7528\u6237\u53EF\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6539\u53D8\u4E4B\u524D\u8BBE\u7F6E\u7684\u884C\u4E3A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> foo:port <span class="token number">80</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>', 5);
const _hoisted_71 = /* @__PURE__ */ createTextVNode("\u66F4\u591A\u4FE1\u606F\u53EF\u89C1");
const _hoisted_72 = {
  href: "https://www.npmjs.cn/files/package.json/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_73 = /* @__PURE__ */ createTextVNode("package.json");
const _hoisted_74 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u5404\u9879\u914D\u7F6E",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5404\u9879\u914D\u7F6E",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5404\u9879\u914D\u7F6E")
], -1);
const _hoisted_76 = /* @__PURE__ */ createTextVNode("\u5404\u4E2A\u914D\u7F6E\u9879\uFF0C\u8BE6\u60C5");
const _hoisted_77 = {
  href: "https://www.npmjs.cn/misc/config/#config-settings",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_78 = /* @__PURE__ */ createTextVNode("Config Settings");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u63CF\u8FF0" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u547D\u4EE4\u884C\u6807\u8BB0" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u73AF\u5883\u53D8\u91CF" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#npmrc-\u6587\u4EF6" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u9ED8\u8BA4\u914D\u7F6E" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u7B80\u5199\u4EE5\u53CA\u4E00\u4E9B\u5176\u4ED6\u7684-cli-\u7EC6\u8282" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u6BCF\u4E2A\u5305\u7684\u914D\u7F6E\u8BBE\u7F6E" }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u5404\u9879\u914D\u7F6E" }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_11,
    createBaseVNode("p", null, [
      _hoisted_17,
      createBaseVNode("a", _hoisted_34, [
        _hoisted_35,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_36
    ]),
    _hoisted_37,
    createBaseVNode("p", null, [
      _hoisted_41,
      createVNode(_component_RouterLink, { to: "/front-end-engineering/development/npm/npmrc.html" }, {
        default: withCtx(() => [
          _hoisted_42
        ]),
        _: 1
      }),
      _hoisted_43
    ]),
    _hoisted_44,
    createBaseVNode("p", null, [
      _hoisted_54,
      createBaseVNode("a", _hoisted_55, [
        _hoisted_56,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_57,
      _hoisted_58,
      _hoisted_59,
      _hoisted_60,
      _hoisted_61,
      _hoisted_62,
      _hoisted_63,
      _hoisted_64,
      _hoisted_65
    ]),
    _hoisted_66,
    createBaseVNode("p", null, [
      _hoisted_71,
      createBaseVNode("a", _hoisted_72, [
        _hoisted_73,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_74
    ]),
    _hoisted_75,
    createBaseVNode("p", null, [
      _hoisted_76,
      createBaseVNode("a", _hoisted_77, [
        _hoisted_78,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var npmConfig_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { npmConfig_html as default };
