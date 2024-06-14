import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, d as createStaticVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "nginx-\u5B9E\u8DF5",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#nginx-\u5B9E\u8DF5",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Nginx \u5B9E\u8DF5")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Vue MPA \u9879\u76EE\u914D\u7F6E Nginx");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("try_files");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("index");
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<h2 id="vue-mpa-\u9879\u76EE\u914D\u7F6E-nginx" tabindex="-1"><a class="header-anchor" href="#vue-mpa-\u9879\u76EE\u914D\u7F6E-nginx" aria-hidden="true">#</a> Vue MPA \u9879\u76EE\u914D\u7F6E Nginx</h2><p>\u9488\u5BF9\u4E8E Vue MPA \u5DE5\u7A0B\uFF0C\u5DE5\u7A0B\u91CC\u4F1A\u5B58\u5728\u591A\u4E2A\u4E1A\u52A1\uFF0C\u6BCF\u4E2A\u4E1A\u52A1\u90FD\u662F\u4E00\u4E2A SPA\u3002\u5047\u8BBE\u4E0A\u7EBF\u540E\uFF0C\u524D\u7AEF\u6A21\u677F\u4EE3\u7801\u90FD\u4F4D\u4E8E<code>/data/project/wind-stone-blog/latest/</code>\u76EE\u5F55\u4E0B\uFF0C\u8BE5\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>\u251C\u2500\u2500 front-end\n|   \u2514\u2500\u2500 index.html\n\u251C\u2500\u2500 back-end\n|   \u251C\u2500\u2500 index.html\n|   \u2514\u2500\u2500 main.html\n\u251C\u2500\u2500 es6\n|   \u2514\u2500\u2500 index.html\n\u251C\u2500\u2500 vue\n|   \u2514\u2500\u2500 index.html\n\u251C\u2500\u2500 test\n|   \u2514\u2500\u2500 index-test.html\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5176\u4E2D\uFF0C<code>front-end</code>\u3001<code>back-end</code>\u3001<code>es6</code>\u3001<code>vue</code>\u5206\u522B\u4EE3\u8868\u4E0D\u540C\u7684\u4E1A\u52A1\uFF0C\u6BCF\u4E2A\u4E1A\u52A1\u90FD\u662F SPA\u3002</p><p>Nginx \u7684<code>blog.windstone.cc.conf</code>\u914D\u7F6E\u6587\u4EF6\u5982\u4E0B\uFF1A</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>server {\n    listen      8080;\n\n    # \u53EF\u4EE5\u4F20\u9012\u591A\u4E2A\u57DF\u540D\uFF0C\u8FD8\u6709\u901A\u8FC7\u901A\u914D\u7B26 * \u914D\u7F6E\u6240\u6709\u5B50\u57DF\u540D\uFF0C\u6BD4\u5982\n    # server_name blog.windstone.cc m.windstone.cc *.m.windstone.cc;\n    server_name blog.windstone.cc;\n\n    # \u8BBF\u95EE\u65E5\u5FD7\n    access_log  /data/logs/nginx/blog.windstone.cc.access.log  main;\n    error_log  /data/logs/nginx/blog.windstone.cc.error.log;\n\n    keepalive_requests 30;\n\n    # \u6839\u76EE\u5F55\uFF0C\u5728\u5982\u4E0B\u63CF\u8FF0\u4E2D\u7528 $root \u5360\u4F4D\n    root /data/project/wind-stone-blog/latest/;\n\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   html;\n    }\n\n    error_page   403  /403.html;\n    location = /403.html {\n        root   html;\n    }\n\n    error_page  404  /404.html;\n    location = /404.html {\n        root   html;\n    }\n\n    location /front-end/ {\n        try_files $uri $uri/ /front-end/index.html;\n        index index.html;\n    }\n\n    location /back-end/ {\n        try_files $uri $uri/ /back-end/index.html;\n        index index.html;\n    }\n\n    location /es6/ {\n        try_files $uri $uri/ /es6/index.html;\n        index index.html;\n    }\n\n    location /test/hello {\n        try_files $uri $uri/ /es6/index.html;\n        # index \u53EF\u4EE5\u6709\u591A\u4E2A\u9ED8\u8BA4\u7684\u6587\u4EF6\n        # index world.html world2.html\n        index world.html;\n    }\n\n    # ...\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h3 id="try-files" tabindex="-1"><a class="header-anchor" href="#try-files" aria-hidden="true">#</a> try_files</h3><p>\u5F53\u8BBF\u95EE<code>http://blog.windstone.cc/es6/array</code>\u65F6\uFF0C\u4F1A\u7ECF\u8FC7 Nginx \u7684\u5982\u4E0B\u89C4\u5219\u5904\u7406\u3002</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>    location /es6/ {\n        try_files $uri $uri/ /es6/index.html;\n        index /es6/index.html;\n    }\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6839\u636E<code>try_files</code>\u7684\u5199\u6CD5\uFF0C</p><ol><li>\u9996\u5148\uFF0C\u67E5\u627E<code>$uri</code>\u5373<code>/es6/array</code>\uFF0C\u4E5F\u5C31\u662F<code>$root/es6</code>\u6587\u4EF6\u5939\u4E0B\u7684<code>array</code>\u6587\u4EF6\uFF0C\u627E\u5230\u5219\u8FD4\u56DE\u6587\u4EF6\uFF0C\u5426\u5219\u8FDB\u5165\u4E0B\u4E00\u6B65\uFF1B</li><li>\u5176\u6B21\uFF0C\u67E5\u627E<code>$uri/</code>\u5373<code>/es6/array/</code>\uFF0C\u4E5F\u5C31\u662F<code>$root/es6/array</code>\u6587\u4EF6\u5939\uFF0C\u67E5\u770B\u8BE5\u6587\u4EF6\u5939\u4E0B\u662F\u5426\u6709<code>index.html</code>\u6587\u4EF6\uFF0C\u6709\u5219\u8FD4\u56DE\u6587\u4EF6\uFF0C\u5426\u5219\u8FDB\u5165\u4E0B\u4E00\u6B65\uFF1B</li><li>\u6700\u540E\uFF0C\u67E5\u627E<code>/es6/index.html</code>\uFF0C\u5373<code>$root/es6/index.html</code>\u6587\u4EF6\uFF0C\u6709\u5219\u8FD4\u56DE\u3002</li></ol><h3 id="index" tabindex="-1"><a class="header-anchor" href="#index" aria-hidden="true">#</a> index</h3><p>\u5F53\u8BBF\u95EE<code>http://localhost:9527/test/hello</code>\u65F6\uFF0C\u4F1A\u7ECF\u8FC7 Nginx \u7684\u5982\u4E0B\u89C4\u5219\u5904\u7406\u3002</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>    location /test/hello {\n        try_files $uri $uri/ /es6/index.html;\n        index world.html;\n    }\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5148\u6309\u7167<code>try_files</code>\u8FDB\u884C\u5904\u7406\uFF0C\u5F53\u5904\u7406\u7B2C\u4E8C\u6B65\u7684<code>$uri/</code>\u65F6\uFF0C\u4F1A\u7ED3\u5408<code>index world.html</code>\uFF0C\u6B64\u65F6\u4F1A\u67E5\u627E<code>/test/hello/world.html</code>\u662F\u5426\u5B58\u5728\uFF0C\u4E0D\u5B58\u5728\u5219\u8FDB\u5165\u4E0B\u4E00\u6B65\u3002</p><p>\u56E0\u6B64<code>location</code>\u91CC\u7684<code>index</code>\u7684\u4F5C\u7528\u65F6\uFF0C\u5728\u67E5\u627E\u6587\u4EF6\u5939\u65F6\uFF0C\u6307\u5B9A\u8BE5\u6587\u4EF6\u5939\u4E0B\u9ED8\u8BA4\u5339\u914D\u7684\u6587\u4EF6\u3002\u56E0\u6B64\u5F53\u8BBF\u95EE<code>http://localhost:9527/test/hello</code>\u65F6\uFF0C\u4F1A\u8FD4\u56DE``</p>', 16);
const _hoisted_22 = /* @__PURE__ */ createTextVNode("\u8BE6\u60C5\u8BF7\u89C1");
const _hoisted_23 = {
  href: "https://stackoverflow.com/questions/36175676/nginx-when-the-index-and-try-files-in-the-same-block-why-the-try-files-w",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_24 = /* @__PURE__ */ createTextVNode("Nginx: When the ");
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("code", null, "index", -1);
const _hoisted_26 = /* @__PURE__ */ createTextVNode(" and ");
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("code", null, "try_files", -1);
const _hoisted_28 = /* @__PURE__ */ createTextVNode(" in the same block, why the ");
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("code", null, "try_files", -1);
const _hoisted_30 = /* @__PURE__ */ createTextVNode(" will be processed, not the ");
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("code", null, "index", -1);
const _hoisted_32 = /* @__PURE__ */ createTextVNode(" directive?");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#vue-mpa-\u9879\u76EE\u914D\u7F6E-nginx" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#try-files" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#index" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_6,
    createBaseVNode("p", null, [
      _hoisted_22,
      createBaseVNode("a", _hoisted_23, [
        _hoisted_24,
        _hoisted_25,
        _hoisted_26,
        _hoisted_27,
        _hoisted_28,
        _hoisted_29,
        _hoisted_30,
        _hoisted_31,
        _hoisted_32,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var practices_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { practices_html as default };
