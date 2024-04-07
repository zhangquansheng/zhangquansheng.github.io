(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{345:function(v,_,t){"use strict";t.r(_);var e=t(10),d=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"java-命名规范参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#java-命名规范参考"}},[v._v("#")]),v._v(" Java 命名规范参考")]),v._v(" "),_("h2",{attrs:{id:"为什么需要重视命名"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要重视命名"}},[v._v("#")]),v._v(" 为什么需要重视命名？")]),v._v(" "),_("p",[_("strong",[v._v("好的命名即是注释，别人一看到你的命名就知道你的变量、方法或者类是做什么的！ 好的命名对于其他人（包括你自己）理解你的代码有着很大的帮助！")])]),v._v(" "),_("p",[v._v("《Clean Code》这本书明确指出：")]),v._v(" "),_("p",[v._v("好的代码本身就是注释，我们要尽量规范和美化自己的代码来减少不必要的注释。\n若编程语言足够有表达力，就不需要注释，尽量通过代码来阐述。")]),v._v(" "),_("p",[v._v("举个例子：去掉下面复杂的注释，只需要创建一个与注释所言同一事物的函数即可")]),v._v(" "),_("div",{staticClass:"language-java line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-java"}},[_("code",[v._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// check to see if the employee is eligible for full benefits")]),v._v("\n "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("if")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("employee"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("flags "),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("&")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token constant"}},[v._v("HOURLY_FLAG")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("&&")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("employee"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("age "),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[v._v("65")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("p",[v._v("应替换为")]),v._v(" "),_("div",{staticClass:"language-java line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-java"}},[_("code",[v._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("if")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("employee"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("isEligibleForFullBenefits")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("h2",{attrs:{id:"常见的命名法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常见的命名法"}},[v._v("#")]),v._v(" 常见的命名法")]),v._v(" "),_("ol",[_("li",[v._v("大驼峰命名法（"),_("code",[v._v("UpperCamelCase")]),v._v("）: 类名需要使用大驼峰命名法")]),v._v(" "),_("li",[v._v("小驼峰命名法（"),_("code",[v._v("lowerCamelCase")]),v._v("）: 方法名、参数名、成员变量、局部变量需要使用小驼峰命名法")]),v._v(" "),_("li",[v._v("蛇形命名法（"),_("code",[v._v("snake_case")]),v._v("）: 测试方法名、常量、枚举名称需要使用蛇形命名法")]),v._v(" "),_("li",[v._v("串式命名法（"),_("code",[v._v("kebab-case")]),v._v("）: 建议项目文件夹名称使用串式命名法")])]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("类型")]),v._v(" "),_("th",[v._v("约束")]),v._v(" "),_("th",[v._v("例")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("项目名")]),v._v(" "),_("td",[v._v("串式命名法（"),_("code",[v._v("kebab-case")]),v._v("）：全部小写，多个单词用中划线分隔‘-’")]),v._v(" "),_("td",[v._v("spring-cloud")])]),v._v(" "),_("tr",[_("td",[v._v("包名")]),v._v(" "),_("td",[v._v("全部小写")]),v._v(" "),_("td",[v._v("com.alibaba.fastjson")])]),v._v(" "),_("tr",[_("td",[v._v("类名")]),v._v(" "),_("td",[v._v("大驼峰命名法（"),_("code",[v._v("UpperCamelCase")]),v._v("）：单词首字母大写")]),v._v(" "),_("td",[v._v("Feature, ParserConfig,DefaultFieldDeserializer")])]),v._v(" "),_("tr",[_("td",[v._v("变量名")]),v._v(" "),_("td",[v._v("小驼峰命名法（"),_("code",[v._v("lowerCamelCase")]),v._v("）：首字母小写，多个单词组成时，除首个单词，其他单词首字母都要大写")]),v._v(" "),_("td",[v._v("password, userName")])]),v._v(" "),_("tr",[_("td",[v._v("常量名")]),v._v(" "),_("td",[v._v("全部大写，多个单词，用'_'分隔")]),v._v(" "),_("td",[v._v("CACHE_EXPIRED_TIME")])]),v._v(" "),_("tr",[_("td",[v._v("方法")]),v._v(" "),_("td",[v._v("小驼峰命名法（"),_("code",[v._v("lowerCamelCase")]),v._v("）")]),v._v(" "),_("td",[v._v("read(), readObject(), getById()")])])])]),v._v(" "),_("h2",{attrs:{id:"类命名"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#类命名"}},[v._v("#")]),v._v(" 类命名")]),v._v(" "),_("p",[v._v("类名使用"),_("strong",[v._v("大驼峰命名")]),v._v("形式，类命通常时名词或名词短语，接口名除了用名词和名词短语以外，还可以使用形容词或形容词短语，如 "),_("code",[v._v("Cloneable")]),v._v("，"),_("code",[v._v("Callable")]),v._v(" 等，\n表示实现该接口的类有某种功能或能力。对于测试类则以它要测试的类开头，以"),_("code",[v._v("Test")]),v._v("结尾，如"),_("code",[v._v("HashMapTest")]),v._v("。")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("属性")]),v._v(" "),_("th",[v._v("约束")]),v._v(" "),_("th",[v._v("例")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("抽象类")]),v._v(" "),_("td",[v._v("Abstract 或者 Base 开头")]),v._v(" "),_("td",[v._v("BaseUserService")])]),v._v(" "),_("tr",[_("td",[v._v("枚举类")]),v._v(" "),_("td",[v._v("Enum 作为后缀")]),v._v(" "),_("td",[v._v("GenderEnum")])]),v._v(" "),_("tr",[_("td",[v._v("工具类")]),v._v(" "),_("td",[v._v("Utils 作为后缀")]),v._v(" "),_("td",[v._v("StringUtils")])]),v._v(" "),_("tr",[_("td",[v._v("异常类")]),v._v(" "),_("td",[v._v("Exception 结尾")]),v._v(" "),_("td",[v._v("RuntimeException")])]),v._v(" "),_("tr",[_("td",[v._v("接口实现")]),v._v(" "),_("td",[v._v("I+ 接口名")]),v._v(" "),_("td",[v._v("IUserService ❌ 《Clean Code》这本书明确指出： I 是废话。")])]),v._v(" "),_("tr",[_("td",[v._v("接口实现类")]),v._v(" "),_("td",[v._v("接口名+ Impl")]),v._v(" "),_("td",[v._v("UserServiceImpl")])]),v._v(" "),_("tr",[_("td",[v._v("领域模型相关")]),v._v(" "),_("td",[v._v("/DO/DTO/VO/DAO")]),v._v(" "),_("td",[v._v("正例：UserDTO 反例： UserDto")])]),v._v(" "),_("tr",[_("td",[v._v("设计模式相关类")]),v._v(" "),_("td",[v._v("Builder，Factory 等")]),v._v(" "),_("td",[v._v("当使用到设计模式时，需要使用对应的设计模式作为后缀，如 ThreadFactory")])]),v._v(" "),_("tr",[_("td",[v._v("处理特定功能的")]),v._v(" "),_("td",[v._v("Handler，Predicate, Validator")]),v._v(" "),_("td",[v._v("表示处理器，校验器，断言，这些类工厂还有配套的方法名如 handle，predicate，validate")])]),v._v(" "),_("tr",[_("td",[v._v("测试类")]),v._v(" "),_("td",[v._v("Test 结尾")]),v._v(" "),_("td",[v._v("UserServiceTest，表示用来测试 UserService 类的")])]),v._v(" "),_("tr",[_("td",[v._v("MVC 分层")]),v._v(" "),_("td",[v._v("Controller，Service，ServiceImpl，DAO 后缀")]),v._v(" "),_("td",[v._v("UserManageController，UserManageDAO")])])])]),v._v(" "),_("h2",{attrs:{id:"方法命名"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方法命名"}},[v._v("#")]),v._v(" 方法命名")]),v._v(" "),_("p",[v._v("方法命名采用"),_("strong",[v._v("小驼峰")]),v._v("的形式，首字小写，往后的每个单词首字母都要大写。和类名不同的是，方法命名一般为动词或动词短语，与参数或参数名共同组成动宾短语，即动词 + 名词。\n一个好的函数名一般能通过名字直接获知该函数实现什么样的功能。")]),v._v(" "),_("h3",{attrs:{id:"_1-返回真伪值的方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-返回真伪值的方法"}},[v._v("#")]),v._v(" 1. 返回真伪值的方法")]),v._v(" "),_("blockquote",[_("p",[v._v("注：Prefix-前缀，Suffix-后缀，Alone-单独使用")])]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("位置")]),v._v(" "),_("th",[v._v("单词")]),v._v(" "),_("th",[v._v("意义")]),v._v(" "),_("th",[v._v("例")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("Prefix")]),v._v(" "),_("td",[v._v("is")]),v._v(" "),_("td",[v._v("对象是否符合期待的状态")]),v._v(" "),_("td",[v._v("isValid")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix")]),v._v(" "),_("td",[v._v("can")]),v._v(" "),_("td",[v._v("对象能否执行所期待的动作")]),v._v(" "),_("td",[v._v("canRemove")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix")]),v._v(" "),_("td",[v._v("should")]),v._v(" "),_("td",[v._v("调用方执行某个命令或方法是好还是不好,应不应该，或者说推荐还是不推荐")]),v._v(" "),_("td",[v._v("shouldMigrate")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix")]),v._v(" "),_("td",[v._v("has")]),v._v(" "),_("td",[v._v("对象是否持有所期待的数据和属性")]),v._v(" "),_("td",[v._v("hasObservers")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix")]),v._v(" "),_("td",[v._v("needs")]),v._v(" "),_("td",[v._v("调用方是否需要执行某个命令或方法")]),v._v(" "),_("td",[v._v("needsMigrate")])])])]),v._v(" "),_("h3",{attrs:{id:"_2-用来检查的方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-用来检查的方法"}},[v._v("#")]),v._v(" 2. 用来检查的方法")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("单词")]),v._v(" "),_("th",[v._v("意义")]),v._v(" "),_("th",[v._v("例")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("ensure")]),v._v(" "),_("td",[v._v("检查是否为期待的状态，不是则抛出异常或返回 error code")]),v._v(" "),_("td",[v._v("ensureCapacity")])]),v._v(" "),_("tr",[_("td",[v._v("validate")]),v._v(" "),_("td",[v._v("检查是否为正确的状态，不是则抛出异常或返回 error code")]),v._v(" "),_("td",[v._v("validateInputs")])])])]),v._v(" "),_("h3",{attrs:{id:"_3-按需求才执行的方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-按需求才执行的方法"}},[v._v("#")]),v._v(" 3. 按需求才执行的方法")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("位置")]),v._v(" "),_("th",[v._v("单词")]),v._v(" "),_("th",[v._v("意义")]),v._v(" "),_("th",[v._v("例")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("Suffix")]),v._v(" "),_("td",[v._v("IfNeeded")]),v._v(" "),_("td",[v._v("需要的时候执行，不需要的时候什么都不做")]),v._v(" "),_("td",[v._v("drawIfNeeded")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix")]),v._v(" "),_("td",[v._v("might")]),v._v(" "),_("td",[v._v("需要的时候执行，不需要的时候什么都不做")]),v._v(" "),_("td",[v._v("mightCreate")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix")]),v._v(" "),_("td",[v._v("try")]),v._v(" "),_("td",[v._v("尝试执行，失败时抛出异常或是返回 error code")]),v._v(" "),_("td",[v._v("tryCreate")])]),v._v(" "),_("tr",[_("td",[v._v("Suffix")]),v._v(" "),_("td",[v._v("OrDefault")]),v._v(" "),_("td",[v._v("尝试执行，失败时返回默认值")]),v._v(" "),_("td",[v._v("getOrDefault")])]),v._v(" "),_("tr",[_("td",[v._v("Suffix")]),v._v(" "),_("td",[v._v("OrElse")]),v._v(" "),_("td",[v._v("尝试执行、失败时返回实际参数中指定的值")]),v._v(" "),_("td",[v._v("getOrElse")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix")]),v._v(" "),_("td",[v._v("force")]),v._v(" "),_("td",[v._v("强制尝试执行。error 抛出异常或是返回值")]),v._v(" "),_("td",[v._v("forceCreate, forceStop")])])])]),v._v(" "),_("h3",{attrs:{id:"_4-异步相关方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-异步相关方法"}},[v._v("#")]),v._v(" 4. 异步相关方法")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("位置")]),v._v(" "),_("th",[v._v("单词")]),v._v(" "),_("th",[v._v("意义")]),v._v(" "),_("th",[v._v("例")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("Prefix")]),v._v(" "),_("td",[v._v("blocking")]),v._v(" "),_("td",[v._v("线程阻塞方法")]),v._v(" "),_("td",[v._v("blockingGetUser")])]),v._v(" "),_("tr",[_("td",[v._v("Suffix")]),v._v(" "),_("td",[v._v("InBackground")]),v._v(" "),_("td",[v._v("执行在后台的线程")]),v._v(" "),_("td",[v._v("doInBackground")])]),v._v(" "),_("tr",[_("td",[v._v("Suffix")]),v._v(" "),_("td",[v._v("Async")]),v._v(" "),_("td",[v._v("异步方法")]),v._v(" "),_("td",[v._v("sendAsync")])]),v._v(" "),_("tr",[_("td",[v._v("Suffix")]),v._v(" "),_("td",[v._v("Sync")]),v._v(" "),_("td",[v._v("对应已有异步方法的同步方法")]),v._v(" "),_("td",[v._v("sendSync")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix or Alone")]),v._v(" "),_("td",[v._v("schedule")]),v._v(" "),_("td",[v._v("Job 和 Task 放入队列")]),v._v(" "),_("td",[v._v("schedule, scheduleJob")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix or Alone")]),v._v(" "),_("td",[v._v("post")]),v._v(" "),_("td",[v._v("放入")]),v._v(" "),_("td",[v._v("postJob")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix or Alone")]),v._v(" "),_("td",[v._v("execute")]),v._v(" "),_("td",[v._v("执行异步方法（注：我一般拿这个做同步方法名）")]),v._v(" "),_("td",[v._v("execute, executeTask")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix or Alone")]),v._v(" "),_("td",[v._v("start")]),v._v(" "),_("td",[v._v("开始")]),v._v(" "),_("td",[v._v("start, startJob")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix or Alone")]),v._v(" "),_("td",[v._v("cancel")]),v._v(" "),_("td",[v._v("取消异步方法")]),v._v(" "),_("td",[v._v("cancel, cancelJob")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix or Alone")]),v._v(" "),_("td",[v._v("stop")]),v._v(" "),_("td",[v._v("停止")]),v._v(" "),_("td",[v._v("stop, stopJob")])])])]),v._v(" "),_("h3",{attrs:{id:"_5-回调方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-回调方法"}},[v._v("#")]),v._v(" 5. 回调方法")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("位置")]),v._v(" "),_("th",[v._v("单词")]),v._v(" "),_("th",[v._v("意义")]),v._v(" "),_("th",[v._v("例")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("Prefix")]),v._v(" "),_("td",[v._v("on")]),v._v(" "),_("td",[v._v("事件发生时执行")]),v._v(" "),_("td",[v._v("onCompleted")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix")]),v._v(" "),_("td",[v._v("before")]),v._v(" "),_("td",[v._v("事件发生前执行")]),v._v(" "),_("td",[v._v("beforeUpdate")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix")]),v._v(" "),_("td",[v._v("pre")]),v._v(" "),_("td",[v._v("事件发生前执行")]),v._v(" "),_("td",[v._v("preUpdate")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix")]),v._v(" "),_("td",[v._v("will")]),v._v(" "),_("td",[v._v("事件发生前执行")]),v._v(" "),_("td",[v._v("willUpdate")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix")]),v._v(" "),_("td",[v._v("after")]),v._v(" "),_("td",[v._v("事件发生后执行")]),v._v(" "),_("td",[v._v("afterUpdate")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix")]),v._v(" "),_("td",[v._v("post")]),v._v(" "),_("td",[v._v("事件发生后执行")]),v._v(" "),_("td",[v._v("postUpdate")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix")]),v._v(" "),_("td",[v._v("did")]),v._v(" "),_("td",[v._v("事件发生后执行")]),v._v(" "),_("td",[v._v("didUpdate")])]),v._v(" "),_("tr",[_("td",[v._v("Prefix")]),v._v(" "),_("td",[v._v("should")]),v._v(" "),_("td",[v._v("确认事件是否可以发生时执行")]),v._v(" "),_("td",[v._v("shouldUpdate")])])])]),v._v(" "),_("h3",{attrs:{id:"_6-与集合操作相关的方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-与集合操作相关的方法"}},[v._v("#")]),v._v(" 6. 与集合操作相关的方法")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("单词")]),v._v(" "),_("th",[v._v("意义")]),v._v(" "),_("th",[v._v("例")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("contains")]),v._v(" "),_("td",[v._v("是否持有与指定对象相同的对象")]),v._v(" "),_("td",[v._v("contains")])]),v._v(" "),_("tr",[_("td",[v._v("add")]),v._v(" "),_("td",[v._v("添加")]),v._v(" "),_("td",[v._v("addJob")])]),v._v(" "),_("tr",[_("td",[v._v("append")]),v._v(" "),_("td",[v._v("添加")]),v._v(" "),_("td",[v._v("appendJob")])]),v._v(" "),_("tr",[_("td",[v._v("insert")]),v._v(" "),_("td",[v._v("插入到下标 n")]),v._v(" "),_("td",[v._v("insertJob")])]),v._v(" "),_("tr",[_("td",[v._v("put")]),v._v(" "),_("td",[v._v("添加与 key 对应的元素")]),v._v(" "),_("td",[v._v("putJob")])]),v._v(" "),_("tr",[_("td",[v._v("remove")]),v._v(" "),_("td",[v._v("移除元素")]),v._v(" "),_("td",[v._v("removeJob")])]),v._v(" "),_("tr",[_("td",[v._v("enqueue")]),v._v(" "),_("td",[v._v("添加到队列的最末位")]),v._v(" "),_("td",[v._v("enqueueJob")])]),v._v(" "),_("tr",[_("td",[v._v("dequeue")]),v._v(" "),_("td",[v._v("从队列中头部取出并移除")]),v._v(" "),_("td",[v._v("dequeueJob")])]),v._v(" "),_("tr",[_("td",[v._v("push")]),v._v(" "),_("td",[v._v("添加到栈头")]),v._v(" "),_("td",[v._v("pushJob")])]),v._v(" "),_("tr",[_("td",[v._v("pop")]),v._v(" "),_("td",[v._v("从栈头取出并移除")]),v._v(" "),_("td",[v._v("popJob")])]),v._v(" "),_("tr",[_("td",[v._v("peek")]),v._v(" "),_("td",[v._v("从栈头取出但不移除")]),v._v(" "),_("td",[v._v("peekJob")])]),v._v(" "),_("tr",[_("td",[v._v("find")]),v._v(" "),_("td",[v._v("寻找符合条件的某物")]),v._v(" "),_("td",[v._v("findById")])])])]),v._v(" "),_("h3",{attrs:{id:"_7-与数据相关的方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-与数据相关的方法"}},[v._v("#")]),v._v(" 7. 与数据相关的方法 💯")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("单词")]),v._v(" "),_("th",[v._v("意义")]),v._v(" "),_("th",[v._v("例")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("create")]),v._v(" "),_("td",[v._v("新创建")]),v._v(" "),_("td",[v._v("createAccount")])]),v._v(" "),_("tr",[_("td",[v._v("new")]),v._v(" "),_("td",[v._v("新创建")]),v._v(" "),_("td",[v._v("newAccount")])]),v._v(" "),_("tr",[_("td",[v._v("from")]),v._v(" "),_("td",[v._v("从既有的某物新建，或是从其他的数据新建")]),v._v(" "),_("td",[v._v("fromConfig")])]),v._v(" "),_("tr",[_("td",[v._v("to")]),v._v(" "),_("td",[v._v("转换")]),v._v(" "),_("td",[v._v("toString")])]),v._v(" "),_("tr",[_("td",[v._v("update")]),v._v(" "),_("td",[v._v("更新既有某物")]),v._v(" "),_("td",[v._v("updateAccount")])]),v._v(" "),_("tr",[_("td",[v._v("load")]),v._v(" "),_("td",[v._v("读取")]),v._v(" "),_("td",[v._v("loadAccount")])]),v._v(" "),_("tr",[_("td",[v._v("fetch")]),v._v(" "),_("td",[v._v("远程读取")]),v._v(" "),_("td",[v._v("fetchAccount")])]),v._v(" "),_("tr",[_("td",[v._v("delete")]),v._v(" "),_("td",[v._v("删除")]),v._v(" "),_("td",[v._v("deleteAccount")])]),v._v(" "),_("tr",[_("td",[v._v("remove")]),v._v(" "),_("td",[v._v("删除")]),v._v(" "),_("td",[v._v("removeAccount")])]),v._v(" "),_("tr",[_("td",[v._v("save")]),v._v(" "),_("td",[v._v("保存")]),v._v(" "),_("td",[v._v("saveAccount")])]),v._v(" "),_("tr",[_("td",[v._v("store")]),v._v(" "),_("td",[v._v("保存")]),v._v(" "),_("td",[v._v("storeAccount")])]),v._v(" "),_("tr",[_("td",[v._v("commit")]),v._v(" "),_("td",[v._v("保存")]),v._v(" "),_("td",[v._v("commitChange")])]),v._v(" "),_("tr",[_("td",[v._v("apply")]),v._v(" "),_("td",[v._v("保存或应用")]),v._v(" "),_("td",[v._v("applyChange")])]),v._v(" "),_("tr",[_("td",[v._v("clear")]),v._v(" "),_("td",[v._v("清除数据或是恢复到初始状态")]),v._v(" "),_("td",[v._v("clearAll")])]),v._v(" "),_("tr",[_("td",[v._v("reset")]),v._v(" "),_("td",[v._v("清除数据或是恢复到初始状态")]),v._v(" "),_("td",[v._v("resetAll")])])])]),v._v(" "),_("h3",{attrs:{id:"_8-成对出现的动词"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-成对出现的动词"}},[v._v("#")]),v._v(" 8. 成对出现的动词")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("单词")]),v._v(" "),_("th",[v._v("意义")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("get 获取")]),v._v(" "),_("td",[v._v("set 设置")])]),v._v(" "),_("tr",[_("td",[v._v("add 增加")]),v._v(" "),_("td",[v._v("remove 删除")])]),v._v(" "),_("tr",[_("td",[v._v("create 创建")]),v._v(" "),_("td",[v._v("destory 移除")])]),v._v(" "),_("tr",[_("td",[v._v("start 启动")]),v._v(" "),_("td",[v._v("stop 停止")])]),v._v(" "),_("tr",[_("td",[v._v("open 打开")]),v._v(" "),_("td",[v._v("close 关闭")])]),v._v(" "),_("tr",[_("td",[v._v("read 读取")]),v._v(" "),_("td",[v._v("write 写入")])]),v._v(" "),_("tr",[_("td",[v._v("load 载入")]),v._v(" "),_("td",[v._v("save 保存")])]),v._v(" "),_("tr",[_("td",[v._v("create 创建")]),v._v(" "),_("td",[v._v("destroy 销毁")])]),v._v(" "),_("tr",[_("td",[v._v("begin 开始")]),v._v(" "),_("td",[v._v("end 结束")])]),v._v(" "),_("tr",[_("td",[v._v("backup 备份")]),v._v(" "),_("td",[v._v("restore 恢复")])]),v._v(" "),_("tr",[_("td",[v._v("import 导入")]),v._v(" "),_("td",[v._v("export 导出")])]),v._v(" "),_("tr",[_("td",[v._v("split 分割")]),v._v(" "),_("td",[v._v("merge 合并")])]),v._v(" "),_("tr",[_("td",[v._v("inject 注入")]),v._v(" "),_("td",[v._v("extract 提取")])]),v._v(" "),_("tr",[_("td",[v._v("attach 附着")]),v._v(" "),_("td",[v._v("detach 脱离")])]),v._v(" "),_("tr",[_("td",[v._v("bind 绑定")]),v._v(" "),_("td",[v._v("separate 分离")])]),v._v(" "),_("tr",[_("td",[v._v("view 查看")]),v._v(" "),_("td",[v._v("browse 浏览")])]),v._v(" "),_("tr",[_("td",[v._v("edit 编辑")]),v._v(" "),_("td",[v._v("modify 修改")])]),v._v(" "),_("tr",[_("td",[v._v("select 选取")]),v._v(" "),_("td",[v._v("mark 标记")])]),v._v(" "),_("tr",[_("td",[v._v("copy 复制")]),v._v(" "),_("td",[v._v("paste 粘贴")])]),v._v(" "),_("tr",[_("td",[v._v("undo 撤销")]),v._v(" "),_("td",[v._v("redo 重做")])]),v._v(" "),_("tr",[_("td",[v._v("insert 插入")]),v._v(" "),_("td",[v._v("delete 移除")])]),v._v(" "),_("tr",[_("td",[v._v("add 加入")]),v._v(" "),_("td",[v._v("append 添加")])]),v._v(" "),_("tr",[_("td",[v._v("clean 清理")]),v._v(" "),_("td",[v._v("clear 清除")])]),v._v(" "),_("tr",[_("td",[v._v("index 索引")]),v._v(" "),_("td",[v._v("sort 排序")])]),v._v(" "),_("tr",[_("td",[v._v("find 查找")]),v._v(" "),_("td",[v._v("search 搜索")])]),v._v(" "),_("tr",[_("td",[v._v("increase 增加")]),v._v(" "),_("td",[v._v("decrease 减少")])]),v._v(" "),_("tr",[_("td",[v._v("play 播放")]),v._v(" "),_("td",[v._v("pause 暂停")])]),v._v(" "),_("tr",[_("td",[v._v("launch 启动")]),v._v(" "),_("td",[v._v("run 运行")])]),v._v(" "),_("tr",[_("td",[v._v("compile 编译")]),v._v(" "),_("td",[v._v("execute 执行")])]),v._v(" "),_("tr",[_("td",[v._v("debug 调试")]),v._v(" "),_("td",[v._v("trace 跟踪")])]),v._v(" "),_("tr",[_("td",[v._v("observe 观察")]),v._v(" "),_("td",[v._v("listen 监听")])]),v._v(" "),_("tr",[_("td",[v._v("build 构建")]),v._v(" "),_("td",[v._v("publish 发布")])]),v._v(" "),_("tr",[_("td",[v._v("input 输入")]),v._v(" "),_("td",[v._v("output 输出")])]),v._v(" "),_("tr",[_("td",[v._v("encode 编码")]),v._v(" "),_("td",[v._v("decode 解码")])]),v._v(" "),_("tr",[_("td",[v._v("encrypt 加密")]),v._v(" "),_("td",[v._v("decrypt 解密")])]),v._v(" "),_("tr",[_("td",[v._v("compress 压缩")]),v._v(" "),_("td",[v._v("decompress 解压缩")])]),v._v(" "),_("tr",[_("td",[v._v("pack 打包")]),v._v(" "),_("td",[v._v("unpack 解包")])]),v._v(" "),_("tr",[_("td",[v._v("parse 解析")]),v._v(" "),_("td",[v._v("emit 生成")])]),v._v(" "),_("tr",[_("td",[v._v("connect 连接")]),v._v(" "),_("td",[v._v("disconnect 断开")])]),v._v(" "),_("tr",[_("td",[v._v("send 发送")]),v._v(" "),_("td",[v._v("receive 接收")])]),v._v(" "),_("tr",[_("td",[v._v("download 下载")]),v._v(" "),_("td",[v._v("upload 上传")])]),v._v(" "),_("tr",[_("td",[v._v("refresh 刷新")]),v._v(" "),_("td",[v._v("synchronize 同步")])]),v._v(" "),_("tr",[_("td",[v._v("update 更新")]),v._v(" "),_("td",[v._v("revert 复原")])]),v._v(" "),_("tr",[_("td",[v._v("lock 锁定")]),v._v(" "),_("td",[v._v("unlock 解锁")])]),v._v(" "),_("tr",[_("td",[v._v("check out 签出")]),v._v(" "),_("td",[v._v("check in 签入")])]),v._v(" "),_("tr",[_("td",[v._v("submit 提交")]),v._v(" "),_("td",[v._v("commit 交付")])]),v._v(" "),_("tr",[_("td",[v._v("push 推")]),v._v(" "),_("td",[v._v("pull 拉")])]),v._v(" "),_("tr",[_("td",[v._v("expand 展开")]),v._v(" "),_("td",[v._v("collapse 折叠")])]),v._v(" "),_("tr",[_("td",[v._v("begin 起始")]),v._v(" "),_("td",[v._v("end 结束")])]),v._v(" "),_("tr",[_("td",[v._v("start 开始")]),v._v(" "),_("td",[v._v("finish 完成")])]),v._v(" "),_("tr",[_("td",[v._v("enter 进入")]),v._v(" "),_("td",[v._v("exit 退出")])]),v._v(" "),_("tr",[_("td",[v._v("abort 放弃")]),v._v(" "),_("td",[v._v("quit 离开")])]),v._v(" "),_("tr",[_("td",[v._v("obsolete 废弃")]),v._v(" "),_("td",[v._v("depreciate 废旧")])]),v._v(" "),_("tr",[_("td",[v._v("collect 收集")]),v._v(" "),_("td",[v._v("aggregate 聚集")])])])]),v._v(" "),_("h2",{attrs:{id:"总结通用命名规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结通用命名规则"}},[v._v("#")]),v._v(" 总结通用命名规则")]),v._v(" "),_("ol",[_("li",[v._v("尽量不要使用拼音；杜绝拼音和英文混用。对于一些通用的表示或者难以用英文描述的可以采用拼音，一旦采用拼音就坚决不能和英文混用。正例："),_("code",[v._v("BeiJing")]),v._v("， "),_("code",[v._v("HangZhou")]),v._v(" 反例："),_("code",[v._v("validateCanShu")])]),v._v(" "),_("li",[v._v("命名过程中尽量不要出现特殊的字符，常量除外。")]),v._v(" "),_("li",[v._v("尽量不要和 "),_("code",[v._v("jdk")]),v._v(" 或者框架中已存在的类重名，也不能使用 "),_("code",[v._v("java")]),v._v(" 中的关键字命名。")]),v._v(" "),_("li",[v._v("妙用介词，如 "),_("code",[v._v("for")]),v._v("(可以用同音的"),_("code",[v._v("4")]),v._v("代替), "),_("code",[v._v("to")]),v._v("(可用同音的"),_("code",[v._v("2")]),v._v("代替), "),_("code",[v._v("from")]),v._v(", "),_("code",[v._v("with")]),v._v("，"),_("code",[v._v("of")]),v._v(" 等。如类名采用 "),_("code",[v._v("User4RedisDO")]),v._v("，方法名 "),_("code",[v._v("getUserInfoFromRedis")]),v._v("，"),_("code",[v._v("convertJson2Map")]),v._v(" 等。")])]),v._v(" "),_("hr"),v._v(" "),_("p",[_("strong",[v._v("参考文档")])]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://google.github.io/styleguide/javaguide.htm",target:"_blank",rel:"noopener noreferrer"}},[v._v("Google Java 代码指南"),_("OutboundLink")],1)]),v._v(" "),_("li",[v._v("《Clean Code》")]),v._v(" "),_("li",[v._v("《阿里巴巴 Java 开发手册》")])])])}),[],!1,null,null,null);_.default=d.exports}}]);