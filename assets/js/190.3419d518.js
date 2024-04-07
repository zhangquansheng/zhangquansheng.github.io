(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{454:function(n,s,a){"use strict";a.r(s);var t=a(10),r=Object(t.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"springboot-事务提交之后的操作保证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot-事务提交之后的操作保证"}},[n._v("#")]),n._v(" SpringBoot 事务提交之后的操作保证")]),n._v(" "),s("h2",{attrs:{id:"业务场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#业务场景"}},[n._v("#")]),n._v(" 业务场景")]),n._v(" "),s("p",[n._v("在一个事务操作中，当数据入库之后，继续做其他异步或同步操作，如消息通知、远程接口调用等。")]),n._v(" "),s("p",[n._v("这样会存在几个问题：")]),n._v(" "),s("ol",[s("li",[n._v("事务原子性不能保证：如果出现事务回滚，则数据入库失败，然而异步操作却不能回滚，继续执行，这就会出现与业务预期不一致的结果（如数据入库失败，但是消息通知则照常触发）；")]),n._v(" "),s("li",[n._v("数据正确性无法保证：如果异步操作需要"),s("strong",[n._v("反查数据库上一步入库的结果")]),n._v("，而上一步的事务由于数据库压力或"),s("code",[n._v("IO")]),n._v("等原因导致事务提交延迟，这时异步操作去数据库里查询数据就会失败；")])]),n._v(" "),s("p",[n._v("这就要求我们保证事务的原子性，数据库入库失败，那异步操作也不能执行；另外还要保证在异步操作执行前事务一定要是已提交状态。")]),n._v(" "),s("h2",{attrs:{id:"transactionsynchronizationmanager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transactionsynchronizationmanager"}},[n._v("#")]),n._v(" TransactionSynchronizationManager")]),n._v(" "),s("p",[n._v("使用"),s("code",[n._v("TransactionSynchronizationManager")]),n._v("保证异步操作只在事务正确"),s("code",[n._v("commit")]),n._v("之后才执行。这也是个人较为推荐的一种做法,示例代码如下：")]),n._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Transactional")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Override")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("void")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("handle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 业务代码")]),n._v("\n        \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("//判断是否在事务当中,如果在事务中则,则在事务提交以后调用，否则直接调用")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("if")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("TransactionSynchronizationManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("isSynchronizationActive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("//如果在事务中，则在事务结束后调用")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("TransactionSynchronizationManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("registerSynchronization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("new")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("TransactionSynchronizationAdapter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n            "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Override")]),n._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("void")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("afterCommit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 事务提交以后的调用的方法，例如MQ，第三方接口调用")]),n._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("else")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 事务提交以后的调用的方法，例如MQ，第三方接口调用")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("    \n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);