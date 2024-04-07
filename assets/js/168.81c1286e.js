(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{456:function(e,t,s){"use strict";s.r(t);var i=s(10),o=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"redis-线程模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-线程模型"}},[e._v("#")]),e._v(" Redis 线程模型")]),e._v(" "),t("p",[t("code",[e._v("Redis")]),e._v("基于"),t("code",[e._v("Reactor")]),e._v("模式来设计开发了自己的一套高效的事件处理模型（"),t("code",[e._v("Netty")]),e._v(" 的线程模型也基于"),t("code",[e._v("Reactor")]),e._v("模式），这套事件处理模型对应的是"),t("code",[e._v("Redis")]),e._v("中的文件事件处理器（"),t("code",[e._v("file event handler")]),e._v("）。由于文件事件处理器（"),t("code",[e._v("file event handler")]),e._v("）是单线程方式运行的，所以我们一般都说"),t("code",[e._v("Redis")]),e._v("是单线程模型。")]),e._v(" "),t("h2",{attrs:{id:"为什么-redis-选择单线程模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么-redis-选择单线程模型"}},[e._v("#")]),e._v(" 为什么 Redis 选择单线程模型")]),e._v(" "),t("blockquote",[t("p",[e._v("Redis6.0 之前为什么不使用多线程？")])]),e._v(" "),t("ol",[t("li",[t("strong",[t("code",[e._v("Redis")]),e._v("服务中运行的绝大多数操作的性能瓶颈都不是"),t("code",[e._v("CPU")])]),e._v("；")]),e._v(" "),t("li",[e._v("使用单线程模型也能并发的处理客户端的请求，核心是"),t("strong",[e._v("基于非阻塞的IO多路复用机制")]),e._v("；")]),e._v(" "),t("li",[e._v("单线程同时也避免了多线程的上下文频繁切换问题,预防了多线程可能产生的竞争问题；")]),e._v(" "),t("li",[e._v("使用单线程模型能带来更好的可维护性，方便开发和调试；")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Redis is single threaded. How can I exploit multiple CPU / cores?")]),e._v(" "),t("p",[e._v("It's not very frequent that CPU becomes your bottleneck with Redis, as usually Redis is either memory or network bound. For instance, using pipelining Redis running on an average Linux system can deliver even 1 million requests per second, so if your application mainly uses O(N) or O(log(N)) commands, it is hardly going to use too much CPU.")]),e._v(" "),t("p",[e._v("However, to maximize CPU usage you can start multiple instances of Redis in the same box and treat them as different servers. At some point a single box may not be enough anyway, so if you want to use multiple CPUs you can start thinking of some way to shard earlier.")]),e._v(" "),t("p",[e._v("You can find more information about using multiple Redis instances in the "),t("a",{attrs:{href:"https://redis.io/topics/partitioning",target:"_blank",rel:"noopener noreferrer"}},[e._v("Partitioning page"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("However with Redis 4.0 we started to make Redis more threaded. For now this is limited to deleting objects in the background, and to blocking commands implemented via Redis modules. For future releases, the plan is to make Redis more and more threaded.")])]),e._v(" "),t("p",[e._v("以上的解释大致的意思是："),t("strong",[e._v("在"),t("code",[e._v("Redis")]),e._v("中单线程已经够用了，"),t("code",[e._v("CPU")]),e._v("不是"),t("code",[e._v("Redis")]),e._v("的瓶颈，"),t("code",[e._v("Redis")]),e._v("的瓶颈最有可能是机器内存或者网络带宽。")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),t("p",[e._v("因为处理请求是单线程的，所以不要在生产环境运行"),t("strong",[e._v("长命令")]),e._v("，比如"),t("code",[e._v("keys")]),e._v("、"),t("code",[e._v("flushall")]),e._v("、"),t("code",[e._v("flushdb")]),e._v("，否则会导致请求被阻塞。")])]),e._v(" "),t("h2",{attrs:{id:"非阻塞的io多路复用机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非阻塞的io多路复用机制"}},[e._v("#")]),e._v(" 非阻塞的IO多路复用机制")]),e._v(" "),t("blockquote",[t("p",[e._v("Redis 既然是单线程，那怎么监听大量的客户端连接呢？")])]),e._v(" "),t("p",[t("code",[e._v("redis")]),e._v("服务端对于命令的处理是单线程的，但是在"),t("code",[e._v("I/O")]),e._v("层面却可以同时面对多个客户端并发的提供服务，并发到内部单线程的转化通过多路复用框架实现。")]),e._v(" "),t("h2",{attrs:{id:"redis6-0-之后为何引入了多线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis6-0-之后为何引入了多线程"}},[e._v("#")]),e._v(" Redis6.0 之后为何引入了多线程？")]),e._v(" "),t("p",[t("strong",[e._v("Redis6.0 引入多线程主要是为了提高网络"),t("code",[e._v("IO")]),e._v("读写性能，")]),e._v(" 因为这个算是 Redis 中的一个性能瓶颈（Redis 的瓶颈主要受限于内存和网络）。")]),e._v(" "),t("p",[e._v("虽然，Redis6.0 引入了多线程，但是 Redis 的多线程只是在网络数据的读写这类耗时操作上使用了，执行命令仍然是单线程顺序执行。因此，你也不需要担心线程安全问题。")]),e._v(" "),t("hr"),e._v(" "),t("p",[t("strong",[e._v("参考文档")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://redis.io/topics/faq#redis-is-single-threaded-how-can-i-exploit-multiple-cpu--cores",target:"_blank",rel:"noopener noreferrer"}},[e._v("redis-is-single-threaded-how-can-i-exploit-multiple-cpu--cores"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://draveness.me/whys-the-design-redis-single-thread/",target:"_blank",rel:"noopener noreferrer"}},[e._v("为什么 Redis 选择单线程模型"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);