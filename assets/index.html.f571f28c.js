import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
var _imports_0 = "/assets/partition-replication-distribution.880bd58d.png";
var _imports_1 = "/assets/replication-sync.dfa0fe58.png";
var _imports_2 = "/assets/producer-write.b474671c.png";
var _imports_3 = "/assets/kafka-file-storage.3cfcca83.png";
var _imports_4 = "/assets/index-example.31010bf1.png";
var _imports_5 = "/assets/data-index-example.f2ace0e7.png";
var _imports_6 = "/assets/message-structure.f4038ec8.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "kafka",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#kafka",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Kafka")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u4E13\u7528\u672F\u8BED");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Partition");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5206\u533A\u89C4\u5219");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Replication");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Partition \u4E0E Replication \u653E\u7F6E\u7B56\u7565");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Replication \u540C\u6B65\u7B56\u7565");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Broker");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Broker \u53EF\u7528\u6027\u5224\u65AD");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("Consumer/Consumer Group");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("Kafka \u751F\u4EA7\u8FC7\u7A0B");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("Kafka \u6D88\u8D39\u8FC7\u7A0B");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Kafka \u6587\u4EF6\u5B58\u50A8\u673A\u5236");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("message \u7269\u7406\u7ED3\u6784");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u6570\u636E\u5220\u9664\u7B56\u7565");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("Reference");
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("p", null, "Kafka \u662F\u6700\u521D\u7531 Linkedin \u516C\u53F8\u5F00\u53D1\uFF0C\u662F\u4E00\u4E2A\u5206\u5E03\u5F0F\u3001\u5206\u533A\u7684\u3001\u591A\u526F\u672C\u7684\u3001\u591A\u8BA2\u9605\u8005\uFF0C\u57FA\u4E8E zookeeper \u534F\u8C03\u7684\u5206\u5E03\u5F0F\u65E5\u5FD7\u7CFB\u7EDF(\u4E5F\u53EF\u4EE5\u5F53\u505A MQ \u7CFB\u7EDF)\uFF0C\u5E38\u89C1\u53EF\u4EE5\u7528\u4E8E web/nginx \u65E5\u5FD7\u3001\u8BBF\u95EE\u65E5\u5FD7\uFF0C\u6D88\u606F\u670D\u52A1\u7B49\u7B49\uFF0CLinkedin \u4E8E2010\u5E74\u8D21\u732E\u7ED9\u4E86 Apache \u57FA\u91D1\u4F1A\u5E76\u6210\u4E3A\u9876\u7EA7\u5F00\u6E90\u9879\u76EE\u3002", -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Kafka \u91C7\u7528\u7684\u6D88\u606F\u4F20\u9012\u6A21\u5F0F\u662F"),
  /* @__PURE__ */ createBaseVNode("strong", null, "\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F"),
  /* @__PURE__ */ createTextVNode("\uFF0C\u6D88\u606F\u4F1A\u88AB\u6301\u4E45\u5316\u5230\u4E00\u4E2A Topic \u4E2D\uFF0C\u6D88\u606F\u6570\u636E\u4E0D\u4F1A\u56E0\u88AB Consumer \u6D88\u8D39\u540E\u800C\u7ACB\u9A6C\u5220\u9664\uFF0C\u800C\u662F\u901A\u8FC7\u914D\u7F6E\u6307\u5B9A\u6D88\u606F\u4FDD\u5B58\u65F6\u957F\u3002")
], -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u4E13\u7528\u672F\u8BED",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u4E13\u7528\u672F\u8BED",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u4E13\u7528\u672F\u8BED")
], -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "Broker: \u6D88\u606F\u4E2D\u95F4\u4EF6\u5904\u7406\u7ED3\u70B9\uFF0C\u4E00\u4E2A Kafka \u8282\u70B9\u5C31\u662F\u4E00\u4E2A Broker\uFF0C\u591A\u4E2A Broker \u53EF\u4EE5\u7EC4\u6210\u4E00\u4E2A Kafka \u96C6\u7FA4\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "Topic: \u4E00\u7C7B\u6D88\u606F\uFF0C\u4F8B\u5982 page view \u65E5\u5FD7\u3001click \u65E5\u5FD7\u7B49\u90FD\u53EF\u4EE5\u4EE5 Topic \u7684\u5F62\u5F0F\u5B58\u5728\uFF0CKafka \u96C6\u7FA4\u80FD\u591F\u540C\u65F6\u8D1F\u8D23\u591A\u4E2A Topic \u7684\u5206\u53D1\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "Partition: Topic \u7269\u7406\u4E0A\u7684\u5206\u7EC4\uFF0C\u4E00\u4E2A Topic \u53EF\u4EE5\u5206\u4E3A\u591A\u4E2A Partition\uFF0C\u6BCF\u4E2A Partition \u662F\u4E00\u4E2A\u6709\u5E8F\u7684\u961F\u5217\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "Segment: Partition \u7269\u7406\u4E0A\u7531\u591A\u4E2A Segment \u7EC4\u6210\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "offset: \u6BCF\u4E2A Partition \u90FD\u7531\u4E00\u7CFB\u5217\u6709\u5E8F\u7684\u3001\u4E0D\u53EF\u53D8\u7684\u6D88\u606F\u7EC4\u6210\uFF0C\u8FD9\u4E9B\u6D88\u606F\u88AB\u8FDE\u7EED\u7684\u8FFD\u52A0\u5230 Partition \u4E2D\u3002Partition \u4E2D\u7684\u6BCF\u4E2A\u6D88\u606F\u90FD\u6709\u4E00\u4E2A\u8FDE\u7EED\u7684\u5E8F\u5217\u53F7\u53EB\u505A offset\uFF0C\u7528\u4E8E Partition \u552F\u4E00\u6807\u8BC6\u4E00\u6761\u6D88\u606F\u3002\u4E0D\u540C\u5206\u533A\u7684 offset \u662F\u76F8\u4E92\u72EC\u7ACB\u7684\uFF0C\u4E0D\u4F1A\u76F8\u4E92\u5F71\u54CD\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "Producer: \u8D1F\u8D23\u53D1\u5E03\u6D88\u606F\u5230 Kafka Broker\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "Consumer: \u6D88\u606F\u6D88\u8D39\u8005\uFF0C\u5411 Kafka Broker \u8BFB\u53D6\u6D88\u606F\u7684\u5BA2\u6237\u7AEF\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "Consumer Group: \u6BCF\u4E2A Consumer \u5C5E\u4E8E\u4E00\u4E2A\u7279\u5B9A\u7684 Consumer Group\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "ZooKeeper: Kafka \u901A\u8FC7 Zookeeper \u7BA1\u7406\u7EA7\u8054\u914D\u7F6E\uFF0C\u9009\u4E3E Leader\u3002")
], -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "partition",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#partition",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Partition")
], -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u6BCF\u4E2A Topic \u4E0B\u7684\u6D88\u606F\uFF0C\u4F1A\u5206\u5E03\u5F0F\u5730\u5B58\u50A8\u5728\u8BE5 Topic \u4E0B\u7684\u4E0D\u540C Partition \u91CC\uFF0C\u540C\u4E00\u6761\u6D88\u606F\u53EA\u4F1A\u51FA\u73B0\u5728\u4E00\u4E2A Partition \u91CC\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6BCF\u4E2A Partition \u91CC\u7684\u6570\u636E\u4E0D\u5B58\u5728\u4EA4\u96C6\uFF0C\u6240\u6709 Partition \u91CC\u7684\u6570\u636E\u5408\u5E76\u5728\u4E00\u8D77\u6784\u6210\u4E86\u8BE5 Topic \u4E0B\u5B8C\u6574\u7684\u6D88\u606F\u6570\u636E\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u6BCF\u4E2A Topic \u7684 Partition \u6570\u91CF\u53EF\u4EE5\u5728\u521B\u5EFA\u65F6\u914D\u7F6E\uFF0C\u4E5F\u53EF\u4F7F\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u751F\u6210\u9ED8\u8BA4\u6570\u91CF\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u56E0\u4E3A\u662F\u4EE5 Partition \u4E3A\u5355\u4F4D\u8FDB\u884C\u8BFB\u5199\uFF0C\u56E0\u6B64 Partition \u6570\u91CF\u51B3\u5B9A\u4E86\u5E76\u53D1\u8BFB\u5199\u7684\u6700\u5927\u6570\u636E\u91CF\uFF0CPartition \u6570\u91CF\u8D8A\u591A\uFF0C\u5E76\u53D1\u8BFB\u5199\u7684\u6570\u636E\u91CF\u8D8A\u5927\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "Partition \u53EF\u4EE5\u6309\u9700\u6269\u5C55")
], -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u5206\u533A\u89C4\u5219",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5206\u533A\u89C4\u5219",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5206\u533A\u89C4\u5219")
], -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("ol", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u6307\u660E Partition \u7684\u60C5\u51B5\u4E0B\uFF0C\u76F4\u63A5\u5C06\u6307\u660E\u7684\u503C\u76F4\u63A5\u4F5C\u4E3A Partiton \u503C"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u6CA1\u6709\u6307\u660E Partition \u503C\u4F46\u6709 key \u7684\u60C5\u51B5\u4E0B\uFF0C\u5C06 key \u7684 hash \u503C\u4E0E Topic \u7684 Partition \u6570\u8FDB\u884C\u53D6\u4F59\u5F97\u5230 Partition \u503C"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u65E2\u6CA1\u6709 Partition \u503C\u53C8\u6CA1\u6709 key \u7684\u60C5\u51B5\u4E0B\uFF0C\u7B2C\u4E00\u6B21\u8C03\u7528\u65F6\u968F\u673A\u751F\u6210\u4E00\u4E2A\u6574\u6570(\u540E\u9762\u6BCF\u6B21\u8C03\u7528\u5728\u8FD9\u4E2A\u6574\u6570\u4E0A\u81EA\u589E)\uFF0C\u5C06\u8FD9\u4E2A\u503C\u4E0E Topic \u53EF\u7528\u7684 Partition \u603B\u6570\u53D6\u4F59\u5F97\u5230 Partition\u503C\uFF0C\u4E5F\u5C31\u662F\u5E38\u8BF4\u7684 round-robin \u7B97\u6CD5\u3002")
], -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("p", null, "\u7591\u95EE\uFF1A", -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u82E5\u662F\u65B9\u5F0F 1\uFF0C\u5206\u914D\u7ED9\u6BCF\u4E2A Partiton \u7684\u6570\u636E\u5927\u81F4\u76F8\u7B49\u5417\uFF1F"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u6D88\u8D39\u8005\u5982\u4F55\u77E5\u9053\u4EE5\u4EC0\u4E48\u6837\u7684\u7B56\u7565\u6765\u6D88\u8D39\u5404\u4E2A Partiton \u91CC\u7684\u6D88\u606F\u6570\u636E\uFF1F")
], -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "replication",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#replication",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Replication")
], -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("p", null, "Replication \uFF08\u526F\u672C\uFF09\u673A\u5236\u4E3B\u8981\u7528\u4E8E\u5BB9\u9519\u3002", -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "Replication \u4EE5 Partition \u4E3A\u5355\u4F4D\uFF0C\u6BCF\u4E2A Partition \u90FD\u6709\u81EA\u5DF1\u7684 Leader Replication\uFF08\u4E3B\u526F\u672C\uFF09\u548C\u591A\u4E2A Follower Replication\uFF08\u4ECE\u526F\u672C\uFF09\uFF0C\u5904\u4E8E\u540C\u6B65\u72B6\u6001\u7684 Follower Replication \u53EB\u505A In-Sync Replication(ISR)\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u914D\u7F6E Replication \u7684\u4E2A\u6570\uFF0C\u4E5F\u53EF\u4EE5\u5728\u521B\u5EFA\u5206\u533A\u65F6\u6307\u5B9A\u3002Replication \u7684\u4E2A\u6570\u5305\u62EC Leader \u548C Follower\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "Kafka \u96C6\u7FA4\u4E2D\uFF0C\u6BCF\u4E2A Partition \u7684 Leader \u548C Follower \u4F1A\u5206\u5E03\u5728\u4E0D\u540C\u7684 Broker \u4E0A\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "Producer \u53D1\u5E03\u6D88\u606F\u90FD\u662F\u7531 Leader \u8D1F\u8D23\u5199\u5165\uFF0C\u5E76\u540C\u6B65\u5230\u5176\u4ED6\u7684 Follower \u4E2D\u3002\u82E5 Leader \u5931\u6548\uFF0C\u5219\u67D0\u4E2A Follower \u4F1A\u81EA\u52A8\u66FF\u6362\u6210\u4E3A\u65B0\u7684 Leader\u3002\u6B64\u65F6\uFF0CFollower \u53EF\u80FD\u843D\u540E\u4E8E Leader\uFF0C\u6240\u4EE5\u4ECE\u6240\u6709 Follower \u4E2D\u9009\u62E9\u4E00\u4E2A\u201Cup-to-date\u201D\u7684\u5206\u533A\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "Consumer \u8BFB\u6D88\u606F\u4E5F\u662F\u4ECE Leader \u8BFB\u53D6\uFF0C\u4E14\u53EA\u6709\u88AB commit \u8FC7\u7684\u6D88\u606F\u624D\u4F1A\u66B4\u9732\u7ED9 Consumer\u3002\uFF08\u89C1\u540E\u6587\u7684\u201CReplication \u540C\u6B65\u7B56\u7565\u201D\uFF09"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u5173\u4E8E\u6027\u80FD\u65B9\u9762\uFF0CLeader \u7684 Server \u627F\u8F7D\u4E86\u5168\u90E8\u7684\u5BA2\u6237\u7AEF\u8FDE\u63A5\u4E0E\u6D88\u606F\u5199\u5165\uFF0C\u8FD8\u8D1F\u8D23\u5C06\u6D88\u606F\u540C\u6B65\u81F3\u4E0D\u540C\u7684 Follower \u5206\u533A\u4E0A\uFF0C\u6027\u80FD\u5F00\u9500\u8F83\u5927\u3002\u56E0\u6B64\u4ECE\u96C6\u7FA4\u7684\u6574\u4F53\u8003\u8651\uFF0CKafka \u4F1A\u5C06\u4E0D\u540C Partition \u7684 Leader \u5747\u8861\u5730\u5206\u6563\u5728\u4E0D\u540C Broker \u4E0A\uFF0C\u4EE5\u9632\u6B62\u67D0\u4E2A Broker \u538B\u529B\u8FC7\u8F7D\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "Follower \u901A\u8FC7\u62C9\u53D6\u7684\u65B9\u5F0F\u4ECE Leader \u4E2D\u540C\u6B65\u6570\u636E\u3002\u6D88\u8D39\u8005\u548C\u751F\u4EA7\u8FD9\u90FD\u662F\u4ECE Leader \u4E2D\u8BFB\u53D6\u6570\u636E\uFF0C\u4E0D\u4E0E Follower \u4EA4\u4E92\u3002")
], -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "partition-\u4E0E-replication-\u653E\u7F6E\u7B56\u7565",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#partition-\u4E0E-replication-\u653E\u7F6E\u7B56\u7565",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Partition \u4E0E Replication \u653E\u7F6E\u7B56\u7565")
], -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("p", null, "\u4E3A\u4E86\u66F4\u597D\u7684\u505A\u8D1F\u8F7D\u5747\u8861\uFF0CKafka \u5C3D\u91CF\u5C06\u6240\u6709\u7684 Partition \u5747\u5300\u5206\u914D\u5230\u6574\u4E2A\u96C6\u7FA4\u4E0A\u3002 Kafka \u5206\u914D Replication \u7684\u7B97\u6CD5\u5982\u4E0B:", -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u5C06\u6240\u6709\u5B58\u6D3B\u7684 n \u4E2A Brokers \u548C\u5F85\u5206\u914D\u7684 Partition \u6392\u5E8F"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u5C06\u7B2C i \u4E2A Partition \u5206\u914D\u5230\u7B2C (i mod n) \u4E2A Broker \u4E0A\uFF0C\u8FD9\u4E2A Partition \u7684\u7B2C\u4E00\u4E2A Replication \u5B58\u5728\u4E8E\u8FD9\u4E2A\u5206\u914D\u7684 Broker \u4E0A\uFF0C\u5E76\u4E14\u4F1A\u4F5C\u4E3A Leader Replication"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u5C06\u7B2C i \u4E2A Partition \u7684\u7B2C j \u4E2A Replication \u5206\u914D\u5230\u7B2C ((i + j) mod n) \u4E2A Broker \u4E0A")
], -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("p", null, "\u5047\u8BBE\u96C6\u7FA4\u4E00\u5171\u6709 4 \u4E2A Broker\uFF0C\u4E00\u4E2A Topic \u6709 4 \u4E2A Partition\uFF0C\u6BCF\u4E2A Partition \u6709 3 \u4E2A Replication\u3002\u4E0B\u56FE\u662F\u6BCF\u4E2A Broker \u4E0A\u7684 Replication \u5206\u914D\u60C5\u51B5\u3002", -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "Partition \u4E0E Replication \u653E\u7F6E\u7B56\u7565"
  })
], -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "replication-\u540C\u6B65\u7B56\u7565",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#replication-\u540C\u6B65\u7B56\u7565",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Replication \u540C\u6B65\u7B56\u7565")
], -1);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("p", null, "Producer \u5728\u53D1\u5E03\u6D88\u606F\u5230\u67D0\u4E2A Partition \u65F6\uFF0C\u5148\u901A\u8FC7 ZooKeeper \u627E\u5230\u8BE5 Partition \u7684 Leader\uFF0C\u7136\u540E\u65E0\u8BBA\u8BE5 Topic \u7684 Replication Factor \u4E3A\u591A\u5C11\uFF0CProducer \u53EA\u5C06\u8BE5\u6D88\u606F\u53D1\u9001\u5230\u8BE5 Partition \u7684 Leader\u3002", -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("p", null, "Leader \u4F1A\u5C06\u8BE5\u6D88\u606F\u5199\u5165\u5176\u672C\u5730 Log\u3002\u6BCF\u4E2A Follower \u90FD\u4ECE Leader pull \u6570\u636E\u3002\u8FD9\u79CD\u65B9\u5F0F\u4E0A\uFF0CFollower \u5B58\u50A8\u7684\u6570\u636E\u987A\u5E8F\u4E0E Leader \u4FDD\u6301\u4E00\u81F4\u3002Follower \u5728\u6536\u5230\u8BE5\u6D88\u606F\u5E76\u5199\u5165\u5176 Log \u540E\uFF0C\u5411 Leader \u53D1\u9001 ACK\u3002\u4E00\u65E6 Leader \u6536\u5230\u4E86 ISR \u4E2D\u7684\u6240\u6709 Replication \u7684 ACK\uFF0C\u8BE5\u6D88\u606F\u5C31\u88AB\u8BA4\u4E3A\u5DF2\u7ECF commit \u4E86\uFF0CLeader \u5C06\u589E\u52A0 HW\uFF08high watermark\uFF0C\u6700\u540Ecommit \u7684offset\uFF09\u5E76\u4E14\u5411 Producer \u53D1\u9001 ACK\u3002", -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("p", null, "\u4E3A\u4E86\u63D0\u9AD8\u6027\u80FD\uFF0C\u6BCF\u4E2A Follower \u5728\u63A5\u6536\u5230\u6570\u636E\u540E\u5C31\u7ACB\u2EE2\u5411 Leader \u53D1\u9001 ACK\uFF0C\u800C\u975E\u7B49\u5230\u6570\u636E\u5199\u5165 Log \u4E2D\u3002\u56E0\u6B64\uFF0C\u5BF9\u4E8E\u5DF2\u7ECF commit \u7684\u6D88\u606F\uFF0CKafka \u53EA\u80FD\u4FDD\u8BC1\u5B83\u88AB\u5B58\u4E8E\u591A\u4E2A Replication \u7684\u5185\u5B58\u4E2D\uFF0C\u800C\u4E0D\u80FD\u4FDD\u8BC1\u5B83\u4EEC\u88AB\u6301\u4E45\u5316\u5230\u78C1\u76D8\u4E2D\uFF0C\u4E5F\u5C31\u4E0D\u80FD\u5B8C\u5168\u4FDD\u8BC1\u5F02\u5E38\u53D1\u751F\u540E\u8BE5\u6761\u6D88\u606F\u4E00\u5B9A\u80FD\u88AB Consumer \u6D88\u8D39\u3002", -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("p", null, "Consumer \u8BFB\u6D88\u606F\u4E5F\u662F\u4ECE Leader \u8BFB\u53D6\uFF0C\u53EA\u6709\u88AB commit \u8FC7\u7684\u6D88\u606F\u624D\u4F1A\u66B4\u9732\u7ED9 Consumer\u3002", -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_1,
    alt: "Replication \u540C\u6B65\u7B56\u7565"
  })
], -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "broker",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#broker",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Broker")
], -1);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "broker-\u53EF\u7528\u6027\u5224\u65AD",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#broker-\u53EF\u7528\u6027\u5224\u65AD",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Broker \u53EF\u7528\u6027\u5224\u65AD")
], -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("p", null, "\u5BF9\u4E8E Kafka \u800C\u8A00\uFF0C\u5B9A\u4E49\u4E00\u4E2A Broker \u662F\u5426\u201C\u6D3B\u7740\u201D\u5305\u542B\u4E24\u4E2A\u6761\u4EF6\uFF1A", -1);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("p", null, "\u4E00\u662F\u5B83\u5FC5\u987B\u7EF4\u62A4\u4E0EZooKeeper\u7684session\uFF08\u8FD9\u4E2A\u901A\u8FC7ZooKeeper\u7684Heartbeat\u673A\u5236\u6765\u5B9E\u73B0\uFF09\u3002 \u4E8C\u662FFollower\u5FC5\u987B\u80FD\u591F\u53CA\u65F6\u5C06Leader\u7684\u6D88\u606F\u590D\u5236\u8FC7\u6765\uFF0C\u4E0D\u80FD\u201C\u843D\u540E\u592A\u591A\u201D\u3002", -1);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "consumer-consumer-group",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#consumer-consumer-group",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Consumer/Consumer Group")
], -1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u6BCF\u4E2A Consumer \u5C5E\u4E8E\u4E00\u4E2A\u7279\u5B9A\u7684 Consumer Group"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u540C\u4E00\u4E2A Consumer Group \u5185\u7684\u4E0D\u540C Consumer \u505A\u7684\u662F\u5B8C\u5168\u4E00\u6837\u7684\u5DE5\u4F5C\uFF0C\u53EA\u662F\u6D88\u8D39\u7684 Partition \u4E0D\u4E00\u6837"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u540C\u4E00\u4E2A Topic \u7684\u4E00\u6761\u6D88\u606F\u53EA\u80FD\u88AB\u540C\u4E00\u4E2A Consumer Group \u5185\u7684\u4E00\u4E2A Consumer \u6D88\u8D39\uFF0C\u4F46\u591A\u4E2A Consumer Group \u53EF\u540C\u65F6\u6D88\u8D39\u8FD9\u4E00\u6D88\u606F"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u540C\u4E00\u4E2A Consumer Group \u5185\u7684\u540C\u4E00\u4E2A Consumer \u53EF\u4EE5\u6D88\u8D39\u4E00\u5230\u591A\u4E2A Partition\uFF0C\u4F46\u540C\u4E00\u4E2A Partition \u4E0D\u80FD\u88AB\u540C\u4E00\u4E2A Consumer Group \u5185\u7684\u4E0D\u540C Consumer \u540C\u65F6\u6D88\u8D39")
], -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "kafka-\u751F\u4EA7\u8FC7\u7A0B",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#kafka-\u751F\u4EA7\u8FC7\u7A0B",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Kafka \u751F\u4EA7\u8FC7\u7A0B")
], -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_2,
    alt: "\u751F\u4EA7\u8FC7\u7A0B"
  })
], -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "kafka-\u6D88\u8D39\u8FC7\u7A0B",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#kafka-\u6D88\u8D39\u8FC7\u7A0B",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Kafka \u6D88\u8D39\u8FC7\u7A0B")
], -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("p", null, "Kafka \u7684\u6D88\u606F\u6D88\u8D39\u6A21\u578B\u91C7\u7528\u62C9\u53D6\u6A21\u578B\uFF08pull\uFF09\uFF0CConsumer \u53EF\u81EA\u4E3B\u63A7\u5236\u6D88\u8D39\u6D88\u606F\u7684\u901F\u7387\uFF0C\u540C\u65F6 Consumer \u53EF\u4EE5\u81EA\u5DF1\u63A7\u5236\u6D88\u8D39\u65B9\u5F0F\uFF08\u6279\u91CF\u6D88\u8D39\u6216\u9010\u6761\u6D88\u8D39\uFF09\uFF0C\u540C\u65F6\u8FD8\u80FD\u9009\u62E9\u4E0D\u540C\u7684\u63D0\u4EA4\u65B9\u5F0F\u4ECE\u800C\u5B9E\u73B0\u4E0D\u540C\u7684\u4F20\u8F93\u8BED\u4E49\u3002", -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "kafka-\u6587\u4EF6\u5B58\u50A8\u673A\u5236",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#kafka-\u6587\u4EF6\u5B58\u50A8\u673A\u5236",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Kafka \u6587\u4EF6\u5B58\u50A8\u673A\u5236")
], -1);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_3,
    alt: "Kafka \u6587\u4EF6\u5B58\u50A8\u673A\u5236"
  })
], -1);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("p", null, "\u5728 Kafka \u6587\u4EF6\u5B58\u50A8\u4E2D\uFF0C\u540C\u4E00\u4E2A Topic \u4E0B\u6709\u591A\u4E2A\u4E0D\u540C Partition\uFF0C\u6BCF\u4E2A Partition \u4E3A\u4E00\u4E2A\u76EE\u5F55\uFF0CPartiton \u547D\u540D\u89C4\u5219\u4E3A\u201CTopic \u540D\u79F0 + \u6709\u5E8F\u5E8F\u53F7\u201D\uFF0C\u7B2C\u4E00\u4E2A Partiton \u5E8F\u53F7\u4ECE 0 \u5F00\u59CB\uFF0C\u5E8F\u53F7\u6700\u5927\u503C\u4E3A\u201CPartition \u6570\u91CF - 1\u201D\u3002", -1);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u7531\u4E8E Producer \u751F\u4EA7\u7684\u6D88\u606F\u4F1A\u4E0D\u65AD\u8FFD\u52A0\u5230 log \u6587\u4EF6\u672B\u5C3E\uFF0C \u4E3A\u9632\u6B62 log \u6587\u4EF6\u8FC7\u5927\u5BFC\u81F4\u6570\u636E\u5B9A\u4F4D\u6548\u7387\u4F4E\u4E0B\uFF0CKafka \u91C7\u53D6\u4E86\u5206\u7247\u548C\u7D22\u5F15\u673A\u5236\uFF0C\u5C06\u6BCF\u4E2A Partition \u5206\u4E3A\u591A\u4E2A Segment\uFF08\u6700\u591A 1G\uFF0C\u914D\u7F6E\u6587\u4EF6\uFF09\u3002\u4F46\u6BCF\u4E2A Segment file \u6D88\u606F\u6570\u91CF\u4E0D\u4E00\u5B9A\u76F8\u7B49\uFF0C\u8FD9\u79CD\u7279\u6027\u65B9\u4FBF old segment file \u5FEB\u901F\u88AB\u5220\u9664\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u6BCF\u4E2A Partiton \u53EA\u9700\u8981\u652F\u6301\u987A\u5E8F\u8BFB\u5199\u5C31\u884C\u4E86\uFF0CSegment \u6587\u4EF6\u751F\u547D\u5468\u671F\u7531\u670D\u52A1\u7AEF\u914D\u7F6E\u53C2\u6570\u51B3\u5B9A(\u9ED8\u8BA4 7 \u5929)\u3002\u8FD9\u6837\u505A\u7684\u597D\u5904\u5C31\u662F\u80FD\u5FEB\u901F\u5220\u9664\u65E0\u7528\u6587\u4EF6\uFF0C\u6709\u6548\u63D0\u9AD8\u78C1\u76D8\u5229\u7528\u7387\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Segment file \u7EC4\u6210\uFF1A\u7531\u4E24\u5927\u90E8\u5206\u7EC4\u6210\uFF0C\u5206\u522B\u4E3A"),
    /* @__PURE__ */ createBaseVNode("code", null, ".index"),
    /* @__PURE__ */ createTextVNode("\u7D22\u5F15\u6587\u4EF6\uFF08\u7A00\u758F\u7D22\u5F15\uFF09\u548C"),
    /* @__PURE__ */ createBaseVNode("code", null, ".log"),
    /* @__PURE__ */ createTextVNode("\u6570\u636E\u6587\u4EF6\uFF0C\u8FD9\u4E24\u4E2A\u6587\u4EF6\u4E00\u4E00\u5BF9\u5E94\u3001\u6210\u5BF9\u51FA\u73B0\u3002")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, "Segment \u6587\u4EF6\u547D\u540D\u89C4\u5219\uFF1APartion \u5168\u5C40\u7684\u7B2C\u4E00\u4E2A Segment \u4ECE 0 \u5F00\u59CB\uFF0C\u540E\u7EED\u6BCF\u4E2A Segment \u6587\u4EF6\u540D\u4E3A\u4E0A\u4E00\u4E2A Segment \u6587\u4EF6\u6700\u540E\u4E00\u6761\u6D88\u606F\u7684 offset \u503C\u3002\u6570\u503C\u6700\u5927\u4E3A 64 \u4F4D long \u5927\u5C0F\uFF0C19 \u4F4D\u6570\u5B57\u5B57\u7B26\u2ED3\u5EA6\uFF0C\u6CA1\u6709\u6570\u5B57\u7528 0 \u586B\u5145\u3002")
], -1);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_4,
    alt: "\u7D22\u5F15\u6587\u4EF6\u793A\u4F8B"
  })
], -1);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("p", null, "Segment \u4E2D\uFF0C\u6570\u636E\u6587\u4EF6\u548C\u7D22\u5F15\u6587\u4EF6\u5BF9\u5E94\u7684\u7269\u7406\u7ED3\u6784\u5982\u4E0B\u56FE\u6240\u793A\u3002", -1);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_5,
    alt: "\u6570\u636E\u6587\u4EF6-\u7D22\u5F15\u6587\u4EF6\u793A\u4F8B"
  })
], -1);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("p", null, "\u4E0A\u56FE\u4E2D\u7D22\u5F15\u6587\u4EF6\u5B58\u50A8\u5927\u91CF\u5143\u6570\u636E\uFF0C\u6570\u636E\u6587\u4EF6\u5B58\u50A8\u5927\u91CF\u6D88\u606F\uFF0C\u7D22\u5F15\u6587\u4EF6\u4E2D\u5143\u6570\u636E\u6307\u5411\u5BF9\u5E94\u6570\u636E\u6587\u4EF6\u4E2D message \u7684\u7269\u7406\u504F\u79FB\u5730\u5740\u3002", -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("p", null, "\u5176\u4E2D\u4EE5\u7D22\u5F15\u6587\u4EF6\u4E2D\u5143\u6570\u636E 3,497 \u4E3A\u4F8B\uFF0C\u4F9D\u6B21\u5728\u6570\u636E\u6587\u4EF6\u4E2D\u8868\u793A\u7B2C 3 \u4E2A message(\u5728\u5168\u5C40 Partiton \u8868\u793A\u7B2C 368772 \u4E2A message)\u3001\u4EE5\u53CA\u8BE5\u6D88\u606F\u7684\u7269\u7406\u504F\u79FB\u5730\u5740\u4E3A 497\u3002", -1);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("p", null, "\u5982\u679C\u8BFB\u53D6 offset \u662F 368776 \u7684\u6D88\u606F\uFF0C\u9700\u8981\u901A\u8FC7\u4E0B\u9762\u4E24\u4E2A\u6B65\u9AA4\u67E5\u627E\uFF1A", -1);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("\u7B2C\u4E00\u6B65\uFF0C\u67E5\u627E Segment file\u3002\u5176\u4E2D"),
    /* @__PURE__ */ createBaseVNode("code", null, "00000000000000000000.index"),
    /* @__PURE__ */ createTextVNode("\u8868\u793A\u6700\u5F00\u59CB\u7684\u6587\u4EF6\uFF0C\u8D77\u59CB\u504F\u79FB\u91CF offset \u4E3A 0\uFF1B\u7B2C\u4E8C\u4E2A\u6587\u4EF6"),
    /* @__PURE__ */ createBaseVNode("code", null, "00000000000000368769.index"),
    /* @__PURE__ */ createTextVNode("\u7684\u6D88\u606F\u91CF\u8D77\u59CB\u504F\u79FB\u91CF\u4E3A 368770 = 368769 + 1\uFF1B\u540C\u6837\uFF0C\u7B2C\u4E09\u4E2A\u6587\u4EF6"),
    /* @__PURE__ */ createBaseVNode("code", null, "00000000000000737337.index"),
    /* @__PURE__ */ createTextVNode("\u7684\u8D77\u59CB\u504F\u79FB\u91CF\u4E3A 737338=737337 + 1\uFF0C\u5176\u4ED6\u540E\u7EED\u6587\u4EF6\u4F9D\u6B21\u7C7B\u63A8\uFF0C\u4EE5\u8D77\u59CB\u504F\u79FB\u91CF\u547D\u540D\u5E76\u6392\u5E8F\u8FD9\u4E9B\u6587\u4EF6\uFF0C\u53EA\u8981\u6839\u636E offset "),
    /* @__PURE__ */ createBaseVNode("strong", null, "\u4E8C\u5206\u67E5\u627E"),
    /* @__PURE__ */ createTextVNode("\u6587\u4EF6\u5217\u8868\u5C31\u53EF\u4EE5\u5FEB\u901F\u5B9A\u4F4D\u5230\u5177\u4F53\u6587\u4EF6\u3002\u5F53 offset = 368776 \u65F6\u5B9A\u4F4D\u5230"),
    /* @__PURE__ */ createBaseVNode("code", null, "00000000000000368769.index|log")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, "\u7B2C\u4E8C\u6B65\uFF0C\u7528\u76EE\u6807 offset \u51CF\u53BB\u6587\u4EF6\u540D\u4E2D\u7684 offset \u5F97\u5230\u6D88\u606F\u5728\u8FD9\u4E2A Segment \u4E2D\u7684\u5143\u6570\u636E\u504F\u79FB\u91CF\uFF0C\u4E5F\u5C31\u662F 368776 - 368769 = 7\uFF0C\u504F\u79FB\u91CF\u662F7\u3002\u8868\u793A\u76EE\u6807 offset \u6D88\u606F\u662F\u8BE5 Segment \u6587\u4EF6\u91CC\u7684\u7B2C 7 \u6761\u6D88\u606F\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u7B2C\u4E09\u6B65\uFF0C\u518D\u6B21\u7528\u4E8C\u5206\u6CD5\u5728 index \u6587\u4EF6\u4E2D\u627E\u5230\u5BF9\u5E94\u7684\u7D22\u5F15\uFF0C\u4E5F\u5C31\u662F\u7B2C\u4E09\u884C 6,1407\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u7B2C\u56DB\u6B65\uFF0C\u5230 log \u6587\u4EF6\u4E2D\uFF0C\u4ECE\u8BE5 Segment \u7684\u7269\u7406\u504F\u79FB\u5730\u5740 1407 \u7684\u4F4D\u7F6E\uFF08\u5BF9\u5E94\u6D88\u606F offset \u662F 368776\uFF09\u5F00\u59CB\uFF0C\u987A\u5E8F\u67E5\u627E\uFF0C\u76F4\u5230\u627E\u5230 offset \u4E3A 368776 \u7684\u6D88\u606F\u3002\u67E5\u627E\u671F\u95F4 Kafka \u662F\u6309\u7167 log \u7684\u5B58\u50A8\u683C\u5F0F\u6765\u5224\u65AD\u4E00\u6761\u6D88\u606F\u662F\u5426\u7ED3\u675F\u7684\u3002")
], -1);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("p", null, "\u4ECE\u4E0A\u8FF0\u56FE\u4E2D\u53EF\u77E5\u8FD9\u6837\u505A\u7684\u4F18\u70B9\uFF0CSegment index file \u91C7\u53D6\u7A00\u758F\u7D22\u5F15\u5B58\u50A8\u65B9\u5F0F\uFF0C\u5B83\u51CF\u5C11\u7D22\u5F15\u6587\u4EF6\u5927\u5C0F\uFF0C\u901A\u8FC7 map \u53EF\u4EE5\u76F4\u63A5\u5185\u5B58\u64CD\u4F5C\uFF0C\u7A00\u758F\u7D22\u5F15\u4E3A\u6570\u636E\u6587\u4EF6\u7684\u6BCF\u4E2A\u5BF9\u5E94 message \u8BBE\u7F6E\u4E00\u4E2A\u5143\u6570\u636E\u6307\u9488,\u5B83\u6BD4\u7A20\u5BC6\u7D22\u5F15\u8282\u7701\u4E86\u66F4\u591A\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u4F46\u67E5\u627E\u8D77\u6765\u9700\u8981\u6D88\u8017\u66F4\u591A\u7684\u65F6\u95F4\u3002", -1);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "message-\u7269\u7406\u7ED3\u6784",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#message-\u7269\u7406\u7ED3\u6784",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" message \u7269\u7406\u7ED3\u6784")
], -1);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_6,
    alt: "message \u7269\u7406\u7ED3\u6784"
  })
], -1);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("table", null, [
  /* @__PURE__ */ createBaseVNode("thead", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", null, "\u5173\u952E\u5B57"),
      /* @__PURE__ */ createBaseVNode("th", null, "\u89E3\u91CA\u8BF4\u660E")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("tbody", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "8 byte offset"),
      /* @__PURE__ */ createBaseVNode("td", null, "\u8868\u793A\u8BE5 message \u662F Partition \u91CC\u7684\u7B2C\u591A\u5C11\u6761 message")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "4 byte message size"),
      /* @__PURE__ */ createBaseVNode("td", null, "message \u7269\u7406\u5927\u5C0F")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "4 byte CRC32"),
      /* @__PURE__ */ createBaseVNode("td", null, "\u7528 crc32 \u6821\u9A8C message")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "1 byte \u201Cmagic\u201D"),
      /* @__PURE__ */ createBaseVNode("td", null, "\u8868\u793A\u672C\u6B21\u53D1\u5E03 Kafka \u670D\u52A1\u7A0B\u5E8F\u534F\u8BAE\u7248\u672C\u53F7")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "1 byte \u201Cattributes\u201D"),
      /* @__PURE__ */ createBaseVNode("td", null, "\u8868\u793A\u4E3A\u72EC\u7ACB\u7248\u672C\u3001\u6216\u6807\u8BC6\u538B\u7F29\u7C7B\u578B\u3001\u6216\u7F16\u7801\u7C7B\u578B\u3002")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "4 byte key length"),
      /* @__PURE__ */ createBaseVNode("td", null, "\u8868\u793A key \u7684\u957F\u5EA6,\u5F53 key \u4E3A -1 \u65F6\uFF0CK byte key\u5B57\u6BB5\u4E0D\u586B")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "K byte key"),
      /* @__PURE__ */ createBaseVNode("td", null, "\u53EF\u9009")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "value bytes payload"),
      /* @__PURE__ */ createBaseVNode("td", null, "\u8868\u793A\u5B9E\u9645\u6D88\u606F\u6570\u636E\u3002")
    ])
  ])
], -1);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u6570\u636E\u5220\u9664\u7B56\u7565",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u6570\u636E\u5220\u9664\u7B56\u7565",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u6570\u636E\u5220\u9664\u7B56\u7565")
], -1);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("p", null, "\u65E0\u8BBA\u6D88\u606F\u662F\u5426\u88AB\u6D88\u8D39\uFF0CKafka \u90FD\u4F1A\u4FDD\u7559\u6240\u6709\u6D88\u606F\u3002\u6709\u4E24\u79CD\u7B56\u7565\u53EF\u4EE5\u5220\u9664\u65E7\u6570\u636E\uFF1A", -1);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u57FA\u4E8E\u65F6\u95F4\uFF1Alog.retention.hours=168"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u57FA\u4E8E\u5927\u5C0F\uFF1Alog.retention.bytes=1073741824")
], -1);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "reference",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#reference",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Reference")
], -1);
const _hoisted_71 = {
  href: "https://tech.meituan.com/2015/01/13/kafka-fs-design-theory.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_72 = /* @__PURE__ */ createTextVNode("Kafka\u6587\u4EF6\u5B58\u50A8\u673A\u5236\u90A3\u4E9B\u4E8B");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#\u4E13\u7528\u672F\u8BED" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#partition" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u5206\u533A\u89C4\u5219" }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#replication" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#partition-\u4E0E-replication-\u653E\u7F6E\u7B56\u7565" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#replication-\u540C\u6B65\u7B56\u7565" }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#broker" }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#broker-\u53EF\u7528\u6027\u5224\u65AD" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#consumer-consumer-group" }, {
            default: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#kafka-\u751F\u4EA7\u8FC7\u7A0B" }, {
            default: withCtx(() => [
              _hoisted_12
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#kafka-\u6D88\u8D39\u8FC7\u7A0B" }, {
            default: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#kafka-\u6587\u4EF6\u5B58\u50A8\u673A\u5236" }, {
            default: withCtx(() => [
              _hoisted_14
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#message-\u7269\u7406\u7ED3\u6784" }, {
                default: withCtx(() => [
                  _hoisted_15
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u6570\u636E\u5220\u9664\u7B56\u7565" }, {
                default: withCtx(() => [
                  _hoisted_16
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#reference" }, {
            default: withCtx(() => [
              _hoisted_17
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_18,
    _hoisted_19,
    _hoisted_20,
    _hoisted_21,
    _hoisted_22,
    _hoisted_23,
    _hoisted_24,
    _hoisted_25,
    _hoisted_26,
    _hoisted_27,
    _hoisted_28,
    _hoisted_29,
    _hoisted_30,
    _hoisted_31,
    _hoisted_32,
    _hoisted_33,
    _hoisted_34,
    _hoisted_35,
    _hoisted_36,
    _hoisted_37,
    _hoisted_38,
    _hoisted_39,
    _hoisted_40,
    _hoisted_41,
    _hoisted_42,
    _hoisted_43,
    _hoisted_44,
    _hoisted_45,
    _hoisted_46,
    _hoisted_47,
    _hoisted_48,
    _hoisted_49,
    _hoisted_50,
    _hoisted_51,
    _hoisted_52,
    _hoisted_53,
    _hoisted_54,
    _hoisted_55,
    _hoisted_56,
    _hoisted_57,
    _hoisted_58,
    _hoisted_59,
    _hoisted_60,
    _hoisted_61,
    _hoisted_62,
    _hoisted_63,
    _hoisted_64,
    _hoisted_65,
    _hoisted_66,
    _hoisted_67,
    _hoisted_68,
    _hoisted_69,
    _hoisted_70,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_71, [
          _hoisted_72,
          createVNode(_component_OutboundLink)
        ])
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
