(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{331:function(t,e,v){"use strict";v.r(e);var _=v(10),r=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"模板模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模板模式"}},[t._v("#")]),t._v(" 模板模式")]),t._v(" "),e("p",[t._v("在模板模式（"),e("code",[t._v("Template Pattern")]),t._v("）中，一个抽象类公开定义了执行它的方法的方式/模板。\n它的子类可以按需要重写方法实现，但调用将以抽象类中定义的方式进行。这种类型的设计模式属于"),e("strong",[t._v("行为型模式")]),t._v("。")]),t._v(" "),e("p",[t._v("它的主要意图是定义一个操作中的"),e("strong",[t._v("算法的骨架")]),t._v("，而将一些步骤延迟到子类中。模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。")]),t._v(" "),e("p",[t._v("注意事项：一般的为防止恶意操作，一般模板方法都加上"),e("code",[t._v("final")]),t._v("关键词。但在"),e("code",[t._v("Spring")]),t._v("项目中，对象为实现接口的，会使用"),e("code",[t._v("Cglib")]),t._v("，因为"),e("code",[t._v("final")]),t._v("的方法不能被继承，所以不要使用"),e("code",[t._v("final")]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("CGLIB")]),t._v("动态代理是通过生成一个被代理类的子类来拦截被代理类的方法调用，因此不能代理声明为 final 类型的类和方法。")])]),t._v(" "),e("h2",{attrs:{id:"抽象类中使用-autowired"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#抽象类中使用-autowired"}},[t._v("#")]),t._v(" 抽象类中使用 @Autowired")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("因为抽象类就是要被继承的，所以抽象类不能增加"),e("code",[t._v("final")]),t._v("修饰")]),t._v("。")]),t._v(" "),e("li",[t._v("抽象类不会进行组件扫描，因为没有具体的子类就无法实例化。")]),t._v(" "),e("li",[e("code",[t._v("Spring")]),t._v("在抽象类中不支持构造函数注入。")]),t._v(" "),e("li",[t._v("私有字段就像其他任何非静态字段一样被"),e("a",{attrs:{href:"https://www.runoob.com/java/java-inheritance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("继承"),e("OutboundLink")],1),t._v("，它们只是在子类代码中不可见，"),e("code",[t._v("Spring")]),t._v("将自动装配这些字段。")])]),t._v(" "),e("h2",{attrs:{id:"spring-框架应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-框架应用"}},[t._v("#")]),t._v(" Spring 框架应用")]),t._v(" "),e("p",[e("code",[t._v("Spring")]),t._v(" 中 "),e("code",[t._v("jdbcTemplate")]),t._v("、"),e("code",[t._v("hibernateTemplate")]),t._v(" 等以"),e("code",[t._v("Template")]),t._v("结尾的对数据库操作的类，它们就使用到了模板模式。")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("参考文档")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.runoob.com/design-pattern/template-pattern.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("模板模式|菜鸟教程"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);