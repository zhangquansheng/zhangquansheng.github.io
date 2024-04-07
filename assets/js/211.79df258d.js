(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{474:function(e,v,_){"use strict";_.r(v);var o=_(10),t=Object(o.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"https://zookeeper.apache.org/doc/current/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),v("OutboundLink")],1)])]),e._v(" "),v("p",[e._v("ZooKeeper is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services.")]),e._v(" "),v("p",[e._v("它是一个针对大型分布式系统的可靠协调系统，提供的功能包括：配置维护、名字服务、分布式同步、组服务等")]),e._v(" "),v("p",[e._v("我个人觉得在使用"),v("code",[e._v("ZooKeeper")]),e._v("的时候，最好是使用 集群版的"),v("code",[e._v("ZooKeeper")]),e._v("而不是单机版的。官网给出的架构图就描述的是一个集群版的"),v("code",[e._v("ZooKeeper")]),e._v("。通常 3 台服务器就可以构成一个"),v("code",[e._v("ZooKeeper")]),e._v("集群了。")]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("为什么最好使用奇数台服务器构成 ZooKeeper 集群？")]),e._v(" "),v("p",[e._v("所谓的zookeeper容错是指，当宕掉几个"),v("code",[e._v("ZooKeeper")]),e._v("服务器之后，剩下的个数必须大于宕掉的个数的话整个"),v("code",[e._v("ZooKeeper")]),e._v("才依然可用。假如我们的集群中有n台"),v("code",[e._v("ZooKeeper")]),e._v("服务器，那么也就是剩下的服务数必须大于n/2。先说一下结论，2n和2n-1的容忍度是一样的，都是n-1，大家可以先自己仔细想一想，这应该是一个很简单的数学问题了。\n比如假如我们有3台，那么最大允许宕掉1台"),v("code",[e._v("ZooKeeper")]),e._v("服务器，如果我们有4台的的时候也同样只允许宕掉1台。 假如我们有5台，那么最大允许宕掉2台"),v("code",[e._v("ZooKeeper")]),e._v("服务器，如果我们有6台的的时候也同样只允许宕掉2台。")])]),e._v(" "),v("h2",{attrs:{id:"语义保证"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#语义保证"}},[e._v("#")]),e._v(" 语义保证")]),e._v(" "),v("p",[e._v("Zookeeper 简单高效，同时提供如下语义保证，从而使得我们可以利用这些特性提供复杂的服务。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("顺序性")]),e._v("　客户端发起的更新会按发送顺序被应用到 Zookeeper 上")]),e._v(" "),v("li",[v("strong",[e._v("原子性")]),e._v(" 更新操作要么成功要么失败，不会出现中间状态")]),e._v(" "),v("li",[v("strong",[e._v("单一系统镜像")]),e._v("　一个客户端无论连接到哪一个服务器都能看到完全一样的系统镜像（即完全一样的树形结构）。注：根据上文《Zookeeper架构及FastLeaderElection机制》介绍的"),v("code",[e._v("ZAB")]),e._v("协议，写操作并不保证更新被所有的"),v("code",[e._v("Follower")]),e._v("立即确认，因此通过部分"),v("code",[e._v("Follower")]),e._v("读取数据并不能保证读到最新的数据，而部分 Follwer 及 Leader 可读到最新数据。如果一定要保证单一系统镜像，可在读操作前使用"),v("code",[e._v("sync")]),e._v("方法。")]),e._v(" "),v("li",[v("strong",[e._v("可靠性")]),e._v("　一个更新操作一旦被接受即不会意外丢失，除非被其它更新操作覆盖")]),e._v(" "),v("li",[v("strong",[e._v("最终一致性")]),e._v("　写操作最终（而非立即）会对客户端可见")])]),e._v(" "),v("h2",{attrs:{id:"watch机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#watch机制"}},[e._v("#")]),e._v(" Watch机制")]),e._v(" "),v("p",[v("code",[e._v("Watch")]),e._v("（事件监听器），是"),v("code",[e._v("Zookeeper")]),e._v("中的一个很重要的特性。"),v("code",[e._v("Zookeeper")]),e._v("允许用户在指定节点上注册一些"),v("code",[e._v("Watch")]),e._v("，并且在一些特定事件触发的时候，"),v("code",[e._v("ZooKeeper")]),e._v("服务端会将事件通知到感兴趣的客户端上去，"),v("strong",[e._v("该机制是Zookeeper实现分布式协调服务的重要特性")]),e._v("。")]),e._v(" "),v("p",[e._v("Watch 有如下特点")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("主动推送")]),e._v(" "),v("code",[e._v("Watch")]),e._v("被触发时，由"),v("code",[e._v("Zookeeper")]),e._v("服务器主动将更新推送给客户端，而不需要客户端轮询。")]),e._v(" "),v("li",[v("strong",[e._v("一次性")]),e._v("　数据变化时，Watch 只会被触发一次。如果客户端想得到后续更新的通知，必须要在"),v("code",[e._v("Watch")]),e._v("被触发后重新注册一个"),v("code",[e._v("Watch")]),e._v("。")]),e._v(" "),v("li",[v("strong",[e._v("可见性")]),e._v("　如果一个客户端在读请求中附带"),v("code",[e._v("Watch")]),e._v("，"),v("code",[e._v("Watch")]),e._v("被触发的同时再次读取数据，客户端在得到"),v("code",[e._v("Watch")]),e._v("消息之前肯定不可能看到更新后的数据。换句话说，更新通知先于更新结果。")]),e._v(" "),v("li",[v("strong",[e._v("顺序性")]),e._v("　如果多个更新触发了多个"),v("code",[e._v("Watch")]),e._v("，那"),v("code",[e._v("Watch")]),e._v("被触发的顺序与更新顺序一致。")])]),e._v(" "),v("h2",{attrs:{id:"acl"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#acl"}},[e._v("#")]),e._v(" ACL")]),e._v(" "),v("p",[e._v("在"),v("code",[e._v("Zookeeper")]),e._v("中，"),v("code",[e._v("node")]),e._v("的"),v("code",[e._v("ACL")]),e._v("是没有继承关系的，是独立控制的。")]),e._v(" "),v("p",[v("code",[e._v("Zookeeper")]),e._v("定义了如下5种"),v("code",[e._v("permission")]),e._v(":")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("CREATE(c)")]),e._v(": 创建权限，可以在在当前"),v("code",[e._v("node")]),e._v("下创建"),v("code",[e._v("child node")])]),e._v(" "),v("li",[v("strong",[e._v("DELETE(d)")]),e._v(": 删除权限，可以删除当前的"),v("code",[e._v("node")])]),e._v(" "),v("li",[v("strong",[e._v("READ(r)")]),e._v(": 读权限，可以获取当前"),v("code",[e._v("node")]),e._v("的数据，可以"),v("code",[e._v("list")]),e._v("当前"),v("code",[e._v("node")]),e._v("所有的"),v("code",[e._v("child nodes")])]),e._v(" "),v("li",[v("strong",[e._v("WRITE(w)")]),e._v(": 写权限，可以向当前"),v("code",[e._v("node")]),e._v("写数据")]),e._v(" "),v("li",[v("strong",[e._v("ADMIN(a)")]),e._v(": 管理权限，可以设置当前"),v("code",[e._v("node")]),e._v("的"),v("code",[e._v("permission")])])]),e._v(" "),v("h2",{attrs:{id:"领导选举算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#领导选举算法"}},[e._v("#")]),e._v(" 领导选举算法")]),e._v(" "),v("p",[v("code",[e._v("FastLeaderElection")]),e._v("选举算法是标准的"),v("code",[e._v("Fast Paxos")]),e._v("算法实现，可解决"),v("code",[e._v("LeaderElection")]),e._v("选举算法收敛速度慢的问题。")]),e._v(" "),v("h2",{attrs:{id:"小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("ZooKeeper")]),e._v(" 本身就是一个分布式程序（只要半数以上节点存活，ZooKeeper 就能正常服务）。")]),e._v(" "),v("li",[v("code",[e._v("ZooKeeper")]),e._v(" 将数据保存在内存中，这也就保证了 "),v("strong",[e._v("高吞吐量和低延迟")]),e._v("（但是内存限制了能够存储的容量不太大，此限制也是保持znode中存储的数据量较小的进一步原因）。")]),e._v(" "),v("li",[v("code",[e._v("ZooKeeper")]),e._v(" 是高性能的。 在“读”多于“写”的应用程序中尤其地高性能，因为“写”会导致所有的服务器间同步状态。（“读”多于“写”是协调服务的典型场景。）")]),e._v(" "),v("li",[v("code",[e._v("ZooKeeper")]),e._v(" 底层其实只提供了两个功能：①管理（存储、读取）用户程序提交的数据；②为用户程序提供数据节点监听服务。")])])])}),[],!1,null,null,null);v.default=t.exports}}]);