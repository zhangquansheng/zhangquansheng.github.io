(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{415:function(e,t,r){"use strict";r.r(t);var s=r(10),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"mysql排序分页查询数据顺序错乱"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql排序分页查询数据顺序错乱"}},[e._v("#")]),e._v(" MySQL排序分页查询数据顺序错乱")]),e._v(" "),t("h2",{attrs:{id:"问题现象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题现象"}},[e._v("#")]),e._v(" 问题现象")]),e._v(" "),t("p",[e._v("MySql 对"),t("strong",[e._v("无索引字段")]),e._v("进行 "),t("code",[e._v("ORDER BY")]),e._v(" 后 "),t("code",[e._v("Limit")]),e._v("，当被排序字段有相同值时并且在"),t("code",[e._v("Limit")]),e._v("范围内，取的值并不是正常排序后的值，\n有可能第一页查询的记录，重复出现在第二页的查询记录中，而且第二页的查询结果乱序，导致分页结果查询错乱问题。")]),e._v(" "),t("h2",{attrs:{id:"问题原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题原因"}},[e._v("#")]),e._v(" 问题原因")]),e._v(" "),t("p",[e._v("官方文档说明：\n"),t("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/limit-optimization.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("limit-optimization"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("If multiple rows have identical values in the ORDER BY columns, the server is free to return those rows in any order, and may do so differently depending on the overall execution plan. In other words, the sort order of those rows is nondeterministic with respect to the nonordered columns.\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("如果ORDER BY列中有多行具有相同的值，则服务器可以自由地按任何顺序返回这些行，并且根据总体执行计划的不同，返回方式可能会有所不同。换句话说，"),t("strong",[e._v("这些行的排序顺序相对于未排序的列是不确定的")]),e._v("。")]),e._v(" "),t("p",[e._v(".....")]),e._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("If it is important to ensure the same row order with and without LIMIT, include additional columns in the ORDER BY clause to make the order deterministic. For example, if id values are unique, you can make rows for a given category value appear in id order by sorting like this:\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("在 ORDER BY 子句中包含额外的列，以使顺序具有确定性。")])]),e._v(" "),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[e._v("#")]),e._v(" 解决方案")]),e._v(" "),t("ol",[t("li",[e._v("ORDER BY 的列包含一个索引列")]),e._v(" "),t("li",[e._v("（推荐）ORDER BY 子句中包含额外的列，例如"),t("code",[e._v("ID")]),e._v(",以使顺序具有确定性。")])])])}),[],!1,null,null,null);t.default=a.exports}}]);