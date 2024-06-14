import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, F as Fragment, d as createStaticVNode, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h1><p>\u76EE\u524D MongoDB \u6570\u636E\u5E93\u5B89\u88C5\u5728<code>/usr/local/mongodb</code>\u76EE\u5F55</p><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><ul><li><code>mongod</code>\u662F MongoDB \u7CFB\u7EDF\u7684\u5B88\u62A4\u8FDB\u7A0B\u3002</li><li><code>mongo</code>\uFF1Amongo is an interactive JavaScript shell interface to MongoDB, which provides a powerful interface for system administrators as well as a way for developers to test queries and operations directly with the database. mongo also provides a fully functional JavaScript environment for use with a MongoDB.</li><li><code>mongos</code>: For a sharded cluster, the mongos instances provide the interface between the client applications and the sharded cluster. The mongos instances route queries and write operations to the shards. From the perspective of the application, a mongos instance behaves identically to any other MongoDB instance.</li></ul>', 4);
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1\uFF1A");
const _hoisted_6 = {
  href: "https://www.mongodb.com/docs/v4.4/reference/program/mongod/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode("https://www.mongodb.com/docs/v4.4/reference/program/mongod/");
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<h3 id="\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a> \u542F\u52A8</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/mongodb/bin\n\n<span class="token comment"># \u4EE5\u914D\u7F6E\u6587\u4EF6\u542F\u52A8 MongoDB</span>\n./mongod --config mongod.conf\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>systemLog:\n    destination: file\n    path: &quot;/usr/local/mongodb/mongod.log&quot;\n    logAppend: true\nstorage:\n    dbPath: &quot;/Users/wind-stone/data/db&quot;\n    journal:\n        enabled: true\nprocessManagement:\n    fork: true\nnet:\n    bindIp: 127.0.0.1\n    port: 28019\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>', 3);
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u914D\u7F6E\u6587\u4EF6\u8BE6\u60C5\u8BF7\u89C1\uFF1A");
const _hoisted_12 = {
  href: "https://www.mongodb.com/docs/v4.4/reference/configuration-options/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_13 = /* @__PURE__ */ createTextVNode("https://www.mongodb.com/docs/v4.4/reference/configuration-options/");
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<h2 id="mongo-shell" tabindex="-1"><a class="header-anchor" href="#mongo-shell" aria-hidden="true">#</a> mongo shell</h2><h3 id="\u8FDE\u63A5\u672C\u5730\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u672C\u5730\u6570\u636E\u5E93" aria-hidden="true">#</a> \u8FDE\u63A5\u672C\u5730\u6570\u636E\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBF\u95EE\u6307\u5B9A\u7AEF\u53E3\u7684\u6570\u636E\u5E93\u5B9E\u4F8B</span>\nmongo --port <span class="token number">28019</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u8FDE\u63A5\u8FDC\u7A0B\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u8FDC\u7A0B\u6570\u636E\u5E93" aria-hidden="true">#</a> \u8FDE\u63A5\u8FDC\u7A0B\u6570\u636E\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/mongodb/bin\n./mongos --host <span class="token string">&quot;mongodb://172.29.79.26:40105&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u6570\u636E\u5E93\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u64CD\u4F5C" aria-hidden="true">#</a> \u6570\u636E\u5E93\u64CD\u4F5C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5F53\u524D\u6B63\u5728\u4F7F\u7528\u7684\u6570\u636E\u5E93\uFF0C\u9ED8\u8BA4\u8FD4\u56DE\u6570\u636E\u5E93 test</span>\ndb\n\n<span class="token comment"># \u5217\u51FA\u6240\u6709\u53EF\u7528\u7684\u6570\u636E\u5E93</span>\nshow dbs\n\n<span class="token comment"># \u5207\u6362\u6570\u636E\u5E93</span>\nuse <span class="token operator">&lt;</span>database<span class="token operator">&gt;</span>\n\n<span class="token comment"># \u663E\u793A\u7ED3\u5408\u5217\u8868</span>\nshow collections\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u6570\u636E\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u64CD\u4F5C" aria-hidden="true">#</a> \u6570\u636E\u64CD\u4F5C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5220\u9664\u96C6\u5408\u91CC\u7684\u6240\u6709\u6570\u636E\uFF0C\u53EF\u589E\u52A0\u7B5B\u9009\u6761\u4EF6</span>\ndb.collectionName.deleteMany<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u6570\u636E\u64CD\u4F5C\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u64CD\u4F5C\u793A\u4F8B" aria-hidden="true">#</a> \u6570\u636E\u64CD\u4F5C\u793A\u4F8B</h3><h4 id="\u901A\u8FC7-id-\u67E5\u8BE2\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7-id-\u67E5\u8BE2\u8BB0\u5F55" aria-hidden="true">#</a> \u901A\u8FC7 _id \u67E5\u8BE2\u8BB0\u5F55</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>db.operationlogs.find<span class="token punctuation">(</span><span class="token punctuation">{</span>\n    _id: ObjectId<span class="token punctuation">(</span><span class="token string">&#39;6155934750c863001ad44c9f&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u7EDF\u8BA1\u67E5\u8BE2\u7ED3\u679C\u6570\u91CF" tabindex="-1"><a class="header-anchor" href="#\u7EDF\u8BA1\u67E5\u8BE2\u7ED3\u679C\u6570\u91CF" aria-hidden="true">#</a> \u7EDF\u8BA1\u67E5\u8BE2\u7ED3\u679C\u6570\u91CF</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>db.collectionName.find<span class="token punctuation">(</span><span class="token punctuation">{</span>\n    groupKey: <span class="token string">&#39;mpSearchKeyword&#39;</span>,\n    createTime: <span class="token punctuation">{</span>\n        <span class="token variable">$gte</span><span class="token builtin class-name">:</span> new Date<span class="token punctuation">(</span><span class="token string">&#39;2021-10-09&#39;</span><span class="token punctuation">)</span>,\n        <span class="token variable">$lte</span><span class="token builtin class-name">:</span> new Date<span class="token punctuation">(</span><span class="token string">&#39;2021-10-12&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>.count<span class="token punctuation">(</span><span class="token punctuation">)</span> // \u7EDF\u8BA1\u67E5\u8BE2\u7ED3\u679C\u6570\u91CF\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="writeconcern-readconcern" tabindex="-1"><a class="header-anchor" href="#writeconcern-readconcern" aria-hidden="true">#</a> WriteConcern/ReadConcern</h2><h2 id="replica-set-\u526F\u672C\u96C6" tabindex="-1"><a class="header-anchor" href="#replica-set-\u526F\u672C\u96C6" aria-hidden="true">#</a> Replica Set \u526F\u672C\u96C6</h2><h2 id="\u5206\u7247\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u5206\u7247\u96C6\u7FA4" aria-hidden="true">#</a> \u5206\u7247\u96C6\u7FA4</h2>', 17);
const _hoisted_31 = {
  href: "https://dba.stackexchange.com/questions/52632/difference-between-sharding-and-replication-on-mongodb",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_32 = /* @__PURE__ */ createTextVNode("Difference between Sharding And Replication on MongoDB");
const _hoisted_33 = /* @__PURE__ */ createStaticVNode('<p>\u5206\u7247\u96C6\u7FA4\u662F\u5C06\u6570\u636E\u5206\u6210\u591A\u4EFD\uFF08\u6BCF\u4EFD\u6570\u636E\u76F8\u4E92\u4E0D\u91CD\u590D\uFF09\u5B58\u50A8\u5728\u4E0D\u540C\u7684\u96C6\u7FA4\u4E0A\uFF0C\u7C7B\u4F3C\u4E8E Kafka \u7684\u5206\u533A\u3002</p><p>\u526F\u672C\u96C6\u662F\u4E3A\u8981\u50A8\u5B58\u7684\u6570\u636E\u505A\u5907\u4EFD\uFF0C\u7C7B\u4F3C\u4E8E Kafka \u7684\u526F\u672C\u3002</p><p>\u9488\u5BF9\u5927\u578B\u5E94\u7528\u6765\u8BF4\uFF0C\u9996\u5148\u4F1A\u5C06\u6570\u636E\u5206\u6210\u76F8\u4E92\u72EC\u7ACB\u7684 n \u4EFD\uFF0C\u5206\u5E03\u5F0F\u50A8\u5B58\u5728\u5206\u7247\u96C6\u7FA4\u7684 n \u4E2A\u5206\u7247\u4E0A\uFF0C\u6BCF\u4E2A\u5206\u7247\u4E0A\u7684\u6570\u636E\u91CF\u7EA6\u4E3A\u603B\u6570\u636E\u91CF\u7684 1/n\u3002 \u5176\u6B21\uFF0C\u6BCF\u4E2A\u5206\u7247\u90FD\u662F\u4E2A\u526F\u672C\u96C6\uFF0C\u4F1A\u4E3A\u8BE5\u5206\u7247\u4E0A\u7684\u6570\u636E\u505A m \u4E2A\u5907\u4EFD\u3002</p><h2 id="\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1" aria-hidden="true">#</a> \u4E8B\u52A1</h2><ul><li>\u4E8B\u52A1\u91CC\uFF0C\u82E5\u662F\u5148\u63D2\u5165\u4E00\u6761\u6570\u636E\uFF0C\u518D\u67E5\u8BE2\u8FD9\u6761\u6570\u636E\uFF0C\u80FD\u67E5\u5230\u5417\uFF1F</li></ul><p>\u80FD\uFF0C\u4F46\u662F\u8981\u8BBE\u7F6E writeConcern \u548C readConcern\uFF0C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5199\u5165\u65F6\u4FDD\u8BC1\u5927\u591A\u6570\u8282\u70B9\u5199\u5165\u6210\u529F</span>\ndb<span class="token punctuation">.</span>order<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456789&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>writeConern<span class="token operator">:</span> <span class="token punctuation">{</span>w<span class="token operator">:</span> <span class="token string">&quot;majority&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// \u8BFB\u53D6\u65F6\u4FDD\u8BC1\u8FD9\u6761\u6570\u636E\u5DF2\u5728\u5927\u591A\u6570\u8282\u70B9\u5B58\u5728</span>\ndb<span class="token punctuation">.</span>order<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456789&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readPref</span><span class="token punctuation">(</span><span class="token string">&quot;secondaryPreferred&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readConcern</span><span class="token punctuation">(</span><span class="token string">&quot;majority&quot;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h2>', 8);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("li", null, "\u516C\u53F8\u5185\u7684\u201C\u521D\u8BC6MongoDB\u201D", -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("li", null, "\u516C\u53F8\u5185\u7684\u201CMongoDB\u4E2D\u7684\u53EF\u8C03\u4E00\u81F4\u6027\u201D", -1);
const _hoisted_43 = {
  href: "https://juejin.cn/post/6844904066049392654",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_44 = /* @__PURE__ */ createTextVNode("MongoDB \u4E8B\u52A1 \u2014\u2014 \u57FA\u7840\u5165\u95E8\u7BC7");
const _hoisted_45 = {
  href: "https://juejin.cn/post/6844904073573957646",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_46 = /* @__PURE__ */ createTextVNode("MongoDB \u4E8B\u52A1 \u2014\u2014 \u591A\u6587\u6863\u4E8B\u52A1\u5B9E\u8DF5\u7BC7");
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      _hoisted_5,
      createBaseVNode("a", _hoisted_6, [
        _hoisted_7,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_8,
    createBaseVNode("p", null, [
      _hoisted_11,
      createBaseVNode("a", _hoisted_12, [
        _hoisted_13,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_14,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_31, [
          _hoisted_32,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    _hoisted_33,
    createBaseVNode("ul", null, [
      _hoisted_41,
      _hoisted_42,
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_43, [
          _hoisted_44,
          createVNode(_component_OutboundLink)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_45, [
          _hoisted_46,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var mongodb_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { mongodb_html as default };
