(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{397:function(v,t,r){"use strict";r.r(t);var _=r(10),a=Object(_.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"g1-garbage-first-垃圾优先算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#g1-garbage-first-垃圾优先算法"}},[v._v("#")]),v._v(" G1 - Garbage First(垃圾优先算法)")]),v._v(" "),t("p",[t("code",[v._v("串行收集器组合 Serial + Serial Old")]),v._v(" 、"),t("code",[v._v("并行收集器组合 Parallel Scavenge + Parallel Old")]),v._v(" 、 "),t("code",[v._v("并发标记清除收集器组合 ParNew + CMS + Serial Old")])]),v._v(" "),t("p",[v._v("以上几组垃圾收集器组合，都有几个共同点：")]),v._v(" "),t("ul",[t("li",[v._v("年轻代、老年代是独立且连续的内存块；")]),v._v(" "),t("li",[v._v("年轻代收集使用单eden、双survivor进行复制算法；")]),v._v(" "),t("li",[v._v("老年代收集必须扫描整个老年代区域；")]),v._v(" "),t("li",[v._v("都是以尽可能少而快地执行"),t("code",[v._v("GC")]),v._v("为设计原则。")])]),v._v(" "),t("h2",{attrs:{id:"设计原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计原则"}},[v._v("#")]),v._v(" 设计原则")]),v._v(" "),t("ol",[t("li",[v._v('G1的设计原则是"首先收集尽可能多的垃圾(Garbage - First)"。因此，G1并不会等内存耗尽(串行、并行)或者快耗尽(CMS)的时候开始垃圾收集')]),v._v(" "),t("li",[v._v("G1采用内存分区(Region)的思路，将内存划分为一个个相等大小的内存分区，回收时则以分区为单位进行回收，存活的对象复制到另一个空闲分区中。\n"),t("ul",[t("li",[v._v("一般Region大小等于堆大小除以2048，比如堆大小为4096M，则Region大小为2M")]),v._v(" "),t("li",[v._v("Region的区域功能可能会动态变化")])])])]),v._v(" "),t("h2",{attrs:{id:"内存划分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存划分"}},[v._v("#")]),v._v(" 内存划分")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("old区")]),v._v("：存放老对象")]),v._v(" "),t("li",[t("strong",[v._v("Survivor区")]),v._v("：存放存活对象")]),v._v(" "),t("li",[t("strong",[v._v("Eden区")]),v._v("：存放新生代对象")]),v._v(" "),t("li",[t("strong",[v._v("Humongous区")]),v._v("：存放大对象区域，"),t("strong",[v._v("大对象的判定规则就是一个大对象超过了一个Region大小的50%")])])]),v._v(" "),t("h2",{attrs:{id:"垃圾回收过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收过程"}},[v._v("#")]),v._v(" 垃圾回收过程")]),v._v(" "),t("ol",[t("li",[v._v("初始化标记（STW）：暂停所有的其他线程（STW），并"),t("strong",[v._v("标记下gc roots直接能引用的对象")]),v._v("，速度很快。（同CMS）")]),v._v(" "),t("li",[v._v("并发标记/重新标记/最终标记（STW）")]),v._v(" "),t("li",[v._v("筛选回收垃圾-复制算法\n"),t("ul",[t("li",[v._v("首先对各个Region的回收价值和成本进行排序，根据用户所期望的GC停顿时间来制定回收计划")]),v._v(" "),t("li",[v._v("回收算法主要用的是复制算法，将一个region中的存活对象复制到另一个region中")]),v._v(" "),t("li",[v._v("G1收集器在后台维护了一个优先列表，每次根据允许的收集时间，优先选择回收价值最大的Region")])])])]),v._v(" "),t("h2",{attrs:{id:"应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[v._v("#")]),v._v(" 应用场景")]),v._v(" "),t("p",[v._v("大多数情况下可以实现指定的GC暂停时间（-XX:MaxGCPauseMillis=200，意思是要求 G1，在任意 1 秒的时间内，停顿时间不得超过 200ms，G1开创的基于Region的堆内存布局是它能够实现这个目标的关键）")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("G1适合8G以上内存的机器使用【结构设计，2048个Region，内存太小的话每个Region也很小，很容易就超过Region的一半被识别为超大对象，这样Humongous区东西会很多，反而不能很好的进行GC收集】")])]),v._v(" "),t("li",[v._v("G1有一大好处就是可以设置我们每次想要回收的停顿时间【-XX:MaxGCPauseMillis】，可以有效提升用户体验")])]),v._v(" "),t("h2",{attrs:{id:"g1-与-cms-比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#g1-与-cms-比较"}},[v._v("#")]),v._v(" G1 与 CMS 比较")]),v._v(" "),t("p",[v._v("G1从整体来看是基于“标记-整理”算法实现的收集器，但从局部（两个Region之间）上看又是基于“标记-复制”算法实现")]),v._v(" "),t("p",[v._v("从经验上来说，在小内存应用上CMS的表现大概率会优于G1，而"),t("strong",[v._v("G1在大内存应用上则发挥其优势")]),v._v("，平衡点在6-8GB之间")]),v._v(" "),t("h2",{attrs:{id:"stw"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stw"}},[v._v("#")]),v._v(" STW")]),v._v(" "),t("p",[v._v("Stop The World : 一旦STW，除了GC所需的线程外，其他线程都将停止工作，中断了的线程直到GC任务结束才继续它们的任务")]),v._v(" "),t("h2",{attrs:{id:"参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[v._v("#")]),v._v(" 参考文档")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/visualizit/vpoc",target:"_blank",rel:"noopener noreferrer"}},[v._v("JVM G1 年轻代的标记复制算法 演示动画"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.cn/post/6844904200690728974",target:"_blank",rel:"noopener noreferrer"}},[v._v("JVM系列之垃圾回收器（中篇）——G1的运行原理以及调优思路"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);