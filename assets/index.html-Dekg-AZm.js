import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, b as createStaticVNode, o as openBlock, f as createTextVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/assets/partition-replication-distribution-BsMpp6rt.png";
const _imports_1 = "/assets/replication-sync-C3GXQpOy.png";
const _imports_2 = "/assets/producer-write-DSagcDry.png";
const _imports_3 = "/assets/kafka-file-storage-BINaIbOA.png";
const _imports_4 = "/assets/index-example-DKnMcuJm.png";
const _imports_5 = "/assets/data-index-example-2wY3fWVr.png";
const _imports_6 = "/assets/message-structure-BZVKTMyw.png";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[15] || (_cache[15] = createBaseVNode("h1", {
      id: "kafka",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#kafka"
      }, [
        createBaseVNode("span", null, "Kafka")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#专用术语" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("专用术语")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#partition" }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("Partition")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#分区规则" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("分区规则")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#replication" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("Replication")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#partition-与-replication-放置策略" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("Partition 与 Replication 放置策略")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#replication-同步策略" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("Replication 同步策略")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#broker" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("Broker")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#broker-可用性判断" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode("Broker 可用性判断")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#consumer-consumer-group" }, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("Consumer/Consumer Group")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#kafka-生产过程" }, {
            default: withCtx(() => _cache[9] || (_cache[9] = [
              createTextVNode("Kafka 生产过程")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#kafka-消费过程" }, {
            default: withCtx(() => _cache[10] || (_cache[10] = [
              createTextVNode("Kafka 消费过程")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#kafka-文件存储机制" }, {
            default: withCtx(() => _cache[11] || (_cache[11] = [
              createTextVNode("Kafka 文件存储机制")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#message-物理结构" }, {
                default: withCtx(() => _cache[12] || (_cache[12] = [
                  createTextVNode("message 物理结构")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#数据删除策略" }, {
                default: withCtx(() => _cache[13] || (_cache[13] = [
                  createTextVNode("数据删除策略")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#reference" }, {
            default: withCtx(() => _cache[14] || (_cache[14] = [
              createTextVNode("Reference")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[16] || (_cache[16] = createStaticVNode('<p>Kafka 是最初由 Linkedin 公司开发，是一个分布式、分区的、多副本的、多订阅者，基于 zookeeper 协调的分布式日志系统(也可以当做 MQ 系统)，常见可以用于 web/nginx 日志、访问日志，消息服务等等，Linkedin 于2010年贡献给了 Apache 基金会并成为顶级开源项目。</p><p>Kafka 采用的消息传递模式是<strong>发布-订阅模式</strong>，消息会被持久化到一个 Topic 中，消息数据不会因被 Consumer 消费后而立马删除，而是通过配置指定消息保存时长。</p><h2 id="专用术语" tabindex="-1"><a class="header-anchor" href="#专用术语"><span>专用术语</span></a></h2><ul><li>Broker: 消息中间件处理结点，一个 Kafka 节点就是一个 Broker，多个 Broker 可以组成一个 Kafka 集群。</li><li>Topic: 一类消息，例如 page view 日志、click 日志等都可以以 Topic 的形式存在，Kafka 集群能够同时负责多个 Topic 的分发。</li><li>Partition: Topic 物理上的分组，一个 Topic 可以分为多个 Partition，每个 Partition 是一个有序的队列。</li><li>Segment: Partition 物理上由多个 Segment 组成。</li><li>offset: 每个 Partition 都由一系列有序的、不可变的消息组成，这些消息被连续的追加到 Partition 中。Partition 中的每个消息都有一个连续的序列号叫做 offset，用于 Partition 唯一标识一条消息。不同分区的 offset 是相互独立的，不会相互影响。</li><li>Producer: 负责发布消息到 Kafka Broker。</li><li>Consumer: 消息消费者，向 Kafka Broker 读取消息的客户端。</li><li>Consumer Group: 每个 Consumer 属于一个特定的 Consumer Group。</li><li>ZooKeeper: Kafka 通过 Zookeeper 管理级联配置，选举 Leader。</li></ul><h2 id="partition" tabindex="-1"><a class="header-anchor" href="#partition"><span>Partition</span></a></h2><ul><li>每个 Topic 下的消息，会分布式地存储在该 Topic 下的不同 Partition 里，同一条消息只会出现在一个 Partition 里。也就是说，每个 Partition 里的数据不存在交集，所有 Partition 里的数据合并在一起构成了该 Topic 下完整的消息数据。</li><li>每个 Topic 的 Partition 数量可以在创建时配置，也可使通过配置文件生成默认数量。</li><li>因为是以 Partition 为单位进行读写，因此 Partition 数量决定了并发读写的最大数据量，Partition 数量越多，并发读写的数据量越大。</li><li>Partition 可以按需扩展</li></ul><h3 id="分区规则" tabindex="-1"><a class="header-anchor" href="#分区规则"><span>分区规则</span></a></h3><ol><li>指明 Partition 的情况下，直接将指明的值直接作为 Partiton 值</li><li>没有指明 Partition 值但有 key 的情况下，将 key 的 hash 值与 Topic 的 Partition 数进行取余得到 Partition 值</li><li>既没有 Partition 值又没有 key 的情况下，第一次调用时随机生成一个整数(后面每次调用在这个整数上自增)，将这个值与 Topic 可用的 Partition 总数取余得到 Partition值，也就是常说的 round-robin 算法。</li></ol><p>疑问：</p><ul><li>若是方式 1，分配给每个 Partiton 的数据大致相等吗？</li><li>消费者如何知道以什么样的策略来消费各个 Partiton 里的消息数据？</li></ul><h3 id="replication" tabindex="-1"><a class="header-anchor" href="#replication"><span>Replication</span></a></h3><p>Replication （副本）机制主要用于容错。</p><ul><li>Replication 以 Partition 为单位，每个 Partition 都有自己的 Leader Replication（主副本）和多个 Follower Replication（从副本），处于同步状态的 Follower Replication 叫做 In-Sync Replication(ISR)。</li><li>可以通过配置文件配置 Replication 的个数，也可以在创建分区时指定。Replication 的个数包括 Leader 和 Follower。</li><li>Kafka 集群中，每个 Partition 的 Leader 和 Follower 会分布在不同的 Broker 上。</li><li>Producer 发布消息都是由 Leader 负责写入，并同步到其他的 Follower 中。若 Leader 失效，则某个 Follower 会自动替换成为新的 Leader。此时，Follower 可能落后于 Leader，所以从所有 Follower 中选择一个“up-to-date”的分区。</li><li>Consumer 读消息也是从 Leader 读取，且只有被 commit 过的消息才会暴露给 Consumer。（见后文的“Replication 同步策略”）</li><li>关于性能方面，Leader 的 Server 承载了全部的客户端连接与消息写入，还负责将消息同步至不同的 Follower 分区上，性能开销较大。因此从集群的整体考虑，Kafka 会将不同 Partition 的 Leader 均衡地分散在不同 Broker 上，以防止某个 Broker 压力过载。</li><li>Follower 通过拉取的方式从 Leader 中同步数据。消费者和生产这都是从 Leader 中读取数据，不与 Follower 交互。</li></ul><h3 id="partition-与-replication-放置策略" tabindex="-1"><a class="header-anchor" href="#partition-与-replication-放置策略"><span>Partition 与 Replication 放置策略</span></a></h3><p>为了更好的做负载均衡，Kafka 尽量将所有的 Partition 均匀分配到整个集群上。 Kafka 分配 Replication 的算法如下:</p><ul><li>将所有存活的 n 个 Brokers 和待分配的 Partition 排序</li><li>将第 i 个 Partition 分配到第 (i mod n) 个 Broker 上，这个 Partition 的第一个 Replication 存在于这个分配的 Broker 上，并且会作为 Leader Replication</li><li>将第 i 个 Partition 的第 j 个 Replication 分配到第 ((i + j) mod n) 个 Broker 上</li></ul><p>假设集群一共有 4 个 Broker，一个 Topic 有 4 个 Partition，每个 Partition 有 3 个 Replication。下图是每个 Broker 上的 Replication 分配情况。</p><figure><img src="' + _imports_0 + '" alt="Partition 与 Replication 放置策略" tabindex="0" loading="lazy"><figcaption>Partition 与 Replication 放置策略</figcaption></figure><h3 id="replication-同步策略" tabindex="-1"><a class="header-anchor" href="#replication-同步策略"><span>Replication 同步策略</span></a></h3><p>Producer 在发布消息到某个 Partition 时，先通过 ZooKeeper 找到该 Partition 的 Leader，然后无论该 Topic 的 Replication Factor 为多少，Producer 只将该消息发送到该 Partition 的 Leader。</p><p>Leader 会将该消息写入其本地 Log。每个 Follower 都从 Leader pull 数据。这种方式上，Follower 存储的数据顺序与 Leader 保持一致。Follower 在收到该消息并写入其 Log 后，向 Leader 发送 ACK。一旦 Leader 收到了 ISR 中的所有 Replication 的 ACK，该消息就被认为已经 commit 了，Leader 将增加 HW（high watermark，最后commit 的offset）并且向 Producer 发送 ACK。</p><p>为了提高性能，每个 Follower 在接收到数据后就立⻢向 Leader 发送 ACK，而非等到数据写入 Log 中。因此，对于已经 commit 的消息，Kafka 只能保证它被存于多个 Replication 的内存中，而不能保证它们被持久化到磁盘中，也就不能完全保证异常发生后该条消息一定能被 Consumer 消费。</p><p>Consumer 读消息也是从 Leader 读取，只有被 commit 过的消息才会暴露给 Consumer。</p><figure><img src="' + _imports_1 + '" alt="Replication 同步策略" tabindex="0" loading="lazy"><figcaption>Replication 同步策略</figcaption></figure><h2 id="broker" tabindex="-1"><a class="header-anchor" href="#broker"><span>Broker</span></a></h2><h3 id="broker-可用性判断" tabindex="-1"><a class="header-anchor" href="#broker-可用性判断"><span>Broker 可用性判断</span></a></h3><p>对于 Kafka 而言，定义一个 Broker 是否“活着”包含两个条件：</p><p>一是它必须维护与ZooKeeper的session（这个通过ZooKeeper的Heartbeat机制来实现）。<br> 二是Follower必须能够及时将Leader的消息复制过来，不能“落后太多”。</p><h2 id="consumer-consumer-group" tabindex="-1"><a class="header-anchor" href="#consumer-consumer-group"><span>Consumer/Consumer Group</span></a></h2><ul><li>每个 Consumer 属于一个特定的 Consumer Group</li><li>同一个 Consumer Group 内的不同 Consumer 做的是完全一样的工作，只是消费的 Partition 不一样</li><li>同一个 Topic 的一条消息只能被同一个 Consumer Group 内的一个 Consumer 消费，但多个 Consumer Group 可同时消费这一消息</li><li>同一个 Consumer Group 内的同一个 Consumer 可以消费一到多个 Partition，但同一个 Partition 不能被同一个 Consumer Group 内的不同 Consumer 同时消费</li></ul><h2 id="kafka-生产过程" tabindex="-1"><a class="header-anchor" href="#kafka-生产过程"><span>Kafka 生产过程</span></a></h2><figure><img src="' + _imports_2 + '" alt="生产过程" tabindex="0" loading="lazy"><figcaption>生产过程</figcaption></figure><h2 id="kafka-消费过程" tabindex="-1"><a class="header-anchor" href="#kafka-消费过程"><span>Kafka 消费过程</span></a></h2><p>Kafka 的消息消费模型采用拉取模型（pull），Consumer 可自主控制消费消息的速率，同时 Consumer 可以自己控制消费方式（批量消费或逐条消费），同时还能选择不同的提交方式从而实现不同的传输语义。</p><h2 id="kafka-文件存储机制" tabindex="-1"><a class="header-anchor" href="#kafka-文件存储机制"><span>Kafka 文件存储机制</span></a></h2><figure><img src="' + _imports_3 + '" alt="Kafka 文件存储机制" tabindex="0" loading="lazy"><figcaption>Kafka 文件存储机制</figcaption></figure><p>在 Kafka 文件存储中，同一个 Topic 下有多个不同 Partition，每个 Partition 为一个目录，Partiton 命名规则为“Topic 名称 + 有序序号”，第一个 Partiton 序号从 0 开始，序号最大值为“Partition 数量 - 1”。</p><ul><li>由于 Producer 生产的消息会不断追加到 log 文件末尾， 为防止 log 文件过大导致数据定位效率低下，Kafka 采取了分片和索引机制，将每个 Partition 分为多个 Segment（最多 1G，配置文件）。但每个 Segment file 消息数量不一定相等，这种特性方便 old segment file 快速被删除。</li><li>每个 Partiton 只需要支持顺序读写就行了，Segment 文件生命周期由服务端配置参数决定(默认 7 天)。这样做的好处就是能快速删除无用文件，有效提高磁盘利用率。</li><li>Segment file 组成：由两大部分组成，分别为<code>.index</code>索引文件（稀疏索引）和<code>.log</code>数据文件，这两个文件一一对应、成对出现。</li><li>Segment 文件命名规则：Partion 全局的第一个 Segment 从 0 开始，后续每个 Segment 文件名为上一个 Segment 文件最后一条消息的 offset 值。数值最大为 64 位 long 大小，19 位数字字符⻓度，没有数字用 0 填充。</li></ul><figure><img src="' + _imports_4 + '" alt="索引文件示例" tabindex="0" loading="lazy"><figcaption>索引文件示例</figcaption></figure><p>Segment 中，数据文件和索引文件对应的物理结构如下图所示。</p><figure><img src="' + _imports_5 + '" alt="数据文件-索引文件示例" tabindex="0" loading="lazy"><figcaption>数据文件-索引文件示例</figcaption></figure><p>上图中索引文件存储大量元数据，数据文件存储大量消息，索引文件中元数据指向对应数据文件中 message 的物理偏移地址。</p><p>其中以索引文件中元数据 3,497 为例，依次在数据文件中表示第 3 个 message(在全局 Partiton 表示第 368772 个 message)、以及该消息的物理偏移地址为 497。</p><p>如果读取 offset 是 368776 的消息，需要通过下面两个步骤查找：</p><ul><li>第一步，查找 Segment file。其中<code>00000000000000000000.index</code>表示最开始的文件，起始偏移量 offset 为 0；第二个文件<code>00000000000000368769.index</code>的消息量起始偏移量为 368770 = 368769 + 1；同样，第三个文件<code>00000000000000737337.index</code>的起始偏移量为 737338=737337 + 1，其他后续文件依次类推，以起始偏移量命名并排序这些文件，只要根据 offset <strong>二分查找</strong>文件列表就可以快速定位到具体文件。当 offset = 368776 时定位到<code>00000000000000368769.index|log</code></li><li>第二步，用目标 offset 减去文件名中的 offset 得到消息在这个 Segment 中的元数据偏移量，也就是 368776 - 368769 = 7，偏移量是7。表示目标 offset 消息是该 Segment 文件里的第 7 条消息。</li><li>第三步，再次用二分法在 index 文件中找到对应的索引，也就是第三行 6,1407。</li><li>第四步，到 log 文件中，从该 Segment 的物理偏移地址 1407 的位置（对应消息 offset 是 368776）开始，顺序查找，直到找到 offset 为 368776 的消息。查找期间 Kafka 是按照 log 的存储格式来判断一条消息是否结束的。</li></ul><p>从上述图中可知这样做的优点，Segment index file 采取稀疏索引存储方式，它减少索引文件大小，通过 map 可以直接内存操作，稀疏索引为数据文件的每个对应 message 设置一个元数据指针,它比稠密索引节省了更多的存储空间，但查找起来需要消耗更多的时间。</p><h3 id="message-物理结构" tabindex="-1"><a class="header-anchor" href="#message-物理结构"><span>message 物理结构</span></a></h3><figure><img src="' + _imports_6 + '" alt="message 物理结构" tabindex="0" loading="lazy"><figcaption>message 物理结构</figcaption></figure><table><thead><tr><th>关键字</th><th>解释说明</th></tr></thead><tbody><tr><td>8 byte offset</td><td>表示该 message 是 Partition 里的第多少条 message</td></tr><tr><td>4 byte message size</td><td>message 物理大小</td></tr><tr><td>4 byte CRC32</td><td>用 crc32 校验 message</td></tr><tr><td>1 byte “magic”</td><td>表示本次发布 Kafka 服务程序协议版本号</td></tr><tr><td>1 byte “attributes”</td><td>表示为独立版本、或标识压缩类型、或编码类型。</td></tr><tr><td>4 byte key length</td><td>表示 key 的长度,当 key 为 -1 时，K byte key字段不填</td></tr><tr><td>K byte key</td><td>可选</td></tr><tr><td>value bytes payload</td><td>表示实际消息数据。</td></tr></tbody></table><h3 id="数据删除策略" tabindex="-1"><a class="header-anchor" href="#数据删除策略"><span>数据删除策略</span></a></h3><p>无论消息是否被消费，Kafka 都会保留所有消息。有两种策略可以删除旧数据：</p><ul><li>基于时间：log.retention.hours=168</li><li>基于大小：log.retention.bytes=1073741824</li></ul><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference"><span>Reference</span></a></h2><ul><li><a href="https://tech.meituan.com/2015/01/13/kafka-fs-design-theory.html" target="_blank" rel="noopener noreferrer">Kafka文件存储机制那些事</a></li></ul>', 54)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/full-stack/data-management/kafka/","title":"Kafka","lang":"en-US","frontmatter":{"description":"Kafka Kafka 是最初由 Linkedin 公司开发，是一个分布式、分区的、多副本的、多订阅者，基于 zookeeper 协调的分布式日志系统(也可以当做 MQ 系统)，常见可以用于 web/nginx 日志、访问日志，消息服务等等，Linkedin 于2010年贡献给了 Apache 基金会并成为顶级开源项目。 Kafka 采用的消息传递模式...","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/full-stack/data-management/kafka/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"Kafka"}],["meta",{"property":"og:description","content":"Kafka Kafka 是最初由 Linkedin 公司开发，是一个分布式、分区的、多副本的、多订阅者，基于 zookeeper 协调的分布式日志系统(也可以当做 MQ 系统)，常见可以用于 web/nginx 日志、访问日志，消息服务等等，Linkedin 于2010年贡献给了 Apache 基金会并成为顶级开源项目。 Kafka 采用的消息传递模式..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T15:28:33.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T15:28:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kafka\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T15:28:33.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"专用术语","slug":"专用术语","link":"#专用术语","children":[]},{"level":2,"title":"Partition","slug":"partition","link":"#partition","children":[{"level":3,"title":"分区规则","slug":"分区规则","link":"#分区规则","children":[]},{"level":3,"title":"Replication","slug":"replication","link":"#replication","children":[]},{"level":3,"title":"Partition 与 Replication 放置策略","slug":"partition-与-replication-放置策略","link":"#partition-与-replication-放置策略","children":[]},{"level":3,"title":"Replication 同步策略","slug":"replication-同步策略","link":"#replication-同步策略","children":[]}]},{"level":2,"title":"Broker","slug":"broker","link":"#broker","children":[{"level":3,"title":"Broker 可用性判断","slug":"broker-可用性判断","link":"#broker-可用性判断","children":[]}]},{"level":2,"title":"Consumer/Consumer Group","slug":"consumer-consumer-group","link":"#consumer-consumer-group","children":[]},{"level":2,"title":"Kafka 生产过程","slug":"kafka-生产过程","link":"#kafka-生产过程","children":[]},{"level":2,"title":"Kafka 消费过程","slug":"kafka-消费过程","link":"#kafka-消费过程","children":[]},{"level":2,"title":"Kafka 文件存储机制","slug":"kafka-文件存储机制","link":"#kafka-文件存储机制","children":[{"level":3,"title":"message 物理结构","slug":"message-物理结构","link":"#message-物理结构","children":[]},{"level":3,"title":"数据删除策略","slug":"数据删除策略","link":"#数据删除策略","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1610188640000,"updatedTime":1623684513000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":9.65,"words":2894},"filePathRelative":"full-stack/data-management/kafka/README.md","localizedDate":"January 9, 2021","autoDesc":true}');
export {
  index_html as comp,
  data
};
