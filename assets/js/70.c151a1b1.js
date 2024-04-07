(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{335:function(s,t,a){"use strict";a.r(t);var v=a(10),e=Object(v.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"线上服务-cpu-100-的处理过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线上服务-cpu-100-的处理过程"}},[s._v("#")]),s._v(" 线上服务 CPU 100% 的处理过程 🎉")]),s._v(" "),t("p",[s._v("CPU是整个电脑的核心计算资源，对于一个应用进程来说，CPU的最小执行单元是"),t("strong",[s._v("线程")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[s._v("#")]),s._v(" 原因")]),s._v(" "),t("ul",[t("li",[s._v("一、CPU上下文切换过多：于CPU来说，同一时刻下每个CPU核心只能运行一个线程，如果有多个线程要执行，CPU只能通过上下文切换的方式来执行不同的线程。上下文切换需要做两个事情\n"),t("ol",[t("li",[s._v("保存运行线程的执行状态")]),s._v(" "),t("li",[s._v("让处于等待中的线程执行")])])]),s._v(" "),t("li",[s._v("二、CPU资源过度消耗：也就是在程序中创建了大量的线程，或者有线程一直占用CPU资源无法被释放，比如"),t("strong",[s._v("死循环")]),s._v("！")])]),s._v(" "),t("h2",{attrs:{id:"解决步骤-实操"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决步骤-实操"}},[s._v("#")]),s._v(" 解决步骤（实操）")]),s._v(" "),t("p",[s._v("top 定位进程ID -> top -Hp 定位线程ID ->  线程ID转成16进制 -> jstack获取线程的Dump日志")]),s._v(" "),t("ol",[t("li",[s._v("执行"),t("code",[s._v("top")]),s._v("命令查看，定位到占用"),t("code",[s._v("CPU")]),s._v("高的进程"),t("code",[s._v("ID")]),s._v("，按一下"),t("code",[s._v("P")]),s._v("可以按照"),t("code",[s._v("CPU")]),s._v("使用率进行排序")])]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("使用 "),t("code",[s._v("top -Hp <进程ID>")]),s._v(" 定位到占用"),t("code",[s._v("CPU")]),s._v("高的线程"),t("code",[s._v("ID")]),s._v("，继续按"),t("code",[s._v("P")]),s._v("排序")])]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Hp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("进程ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("将线程"),t("code",[s._v("ID")]),s._v("转换成为16进制，为后面查找"),t("code",[s._v("jstack")]),s._v("日志做准备")])]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x%x"')]),s._v(" 线程PID\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[t("code",[s._v("jstack")]),s._v(" 进程"),t("code",[s._v("PID")]),s._v(" | vim +/"),t("code",[s._v("十六进制线程PID")])])]),s._v(" "),t("blockquote",[t("p",[s._v("通过jstack获得线程的Dump日志")])]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[s._v("最后有可能定位的结果是程序正常，只是在CPU飙高的那一刻，用户访问量较大，导致系统资源不够。")])]),s._v(" "),t("h2",{attrs:{id:"cpu-上下文切换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu-上下文切换"}},[s._v("#")]),s._v(" CPU 上下文切换")]),s._v(" "),t("p",[t("strong",[s._v("CPU寄存器")]),s._v("和"),t("strong",[s._v("程序计数器")]),s._v("是 CPU上下文，因为它们都是 CPU 在运行任何任务前，必须的依赖环境。")]),s._v(" "),t("ul",[t("li",[s._v("CPU 寄存器： CPU 内置的容量小、但速度极快的内存。")]),s._v(" "),t("li",[s._v("程序计数器则：用来存储 CPU 正在执行的指令位置、或者即将执行的下一条指令位置。")])]),s._v(" "),t("p",[s._v("CPU 上下文切换就是先把前一个任务的 CPU 上下文（也就是 CPU 寄存器和程序计数器）保存起来，然后加载新任务的上下文到这些寄存器和程序计数器，运行新任务。")]),s._v(" "),t("p",[s._v("而这些保存下来的上下文，会存储在系统内核中，并在任务重新调度执行时再次加载进来。这样就能保证任务原来的状态不受影响，让任务看起来还是连续运行。")]),s._v(" "),t("h2",{attrs:{id:"cpu-线程调度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu-线程调度"}},[s._v("#")]),s._v(" CPU 线程调度 🔨")]),s._v(" "),t("h2",{attrs:{id:"实战一-正则表达式回溯造成-cpu-100"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实战一-正则表达式回溯造成-cpu-100"}},[s._v("#")]),s._v(" 实战一：正则表达式回溯造成 CPU 100%")])])}),[],!1,null,null,null);t.default=e.exports}}]);