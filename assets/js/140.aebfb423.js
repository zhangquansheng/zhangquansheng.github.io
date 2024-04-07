(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{407:function(e,t,a){"use strict";a.r(t);var s=a(10),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("特别提醒")]),e._v(" "),t("p",[e._v("版本"),t("code",[e._v("5.7")])])]),e._v(" "),t("p",[e._v("查看数据库当前版本：")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("@version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("关键词: "),t("code",[e._v("B+树")]),e._v(" "),t("code",[e._v("Innodb")])]),e._v(" "),t("h2",{attrs:{id:"基本概览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概览"}},[e._v("#")]),e._v(" 基本概览")]),e._v(" "),t("h3",{attrs:{id:"schema"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schema"}},[e._v("#")]),e._v(" schema")]),e._v(" "),t("blockquote",[t("p",[e._v("在MySQL中，schema 和 数据库（DATABASE）是同义的。")])]),e._v(" "),t("p",[e._v("In MySQL, physically, a schema is synonymous with a database. You can\nsubstitute the keyword SCHEMA instead of DATABASE in MySQL SQL syntax,\nfor example using CREATE SCHEMA instead of CREATE DATABASE.")]),e._v(" "),t("h3",{attrs:{id:"ddl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ddl"}},[e._v("#")]),e._v(" DDL")]),e._v(" "),t("p",[e._v("DDL is "),t("code",[e._v("Data Definition Language")]),e._v(" statements. 数据定义语言，用于定义和管理"),t("code",[e._v("SQL")]),e._v("数据库中的所有对象的语言。例如：")]),e._v(" "),t("ol",[t("li",[e._v("CREATE - to create objects in the database 创建")]),e._v(" "),t("li",[e._v("ALTER - alters the structure of the database 修改")]),e._v(" "),t("li",[e._v("DROP - delete objects from the database 删除")]),e._v(" "),t("li",[e._v("TRUNCATE  - remove all records from a table, including all spaces allocated for the records are removed")])]),e._v(" "),t("h3",{attrs:{id:"dml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dml"}},[e._v("#")]),e._v(" DML")]),e._v(" "),t("p",[e._v("DML is "),t("code",[e._v("Data Manipulation Language")]),e._v(" statements. 数据操作语言，"),t("code",[e._v("SQL")]),e._v("中处理数据等操作统称为数据操作语言。例如：")]),e._v(" "),t("ol",[t("li",[e._v("SELECT - retrieve data from the a database 查询")]),e._v(" "),t("li",[e._v("INSERT - insert data into a table 添加")]),e._v(" "),t("li",[e._v("UPDATE - updates existing data within a table 更新")]),e._v(" "),t("li",[e._v("DELETE - deletes all records from a table, the space for the records remain 删除")]),e._v(" "),t("li",[e._v("CALL - call a PL/SQL or Java subprogram")]),e._v(" "),t("li",[e._v("EXPLAIN PLAN - explain access path to data")])]),e._v(" "),t("h3",{attrs:{id:"dcl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dcl"}},[e._v("#")]),e._v(" DCL")]),e._v(" "),t("p",[e._v("DCL is "),t("code",[e._v("Data Control Language")]),e._v(" statements. 数据控制语言，用来授予或回收访问数据库的某种特权，并控制数据库操纵事务发生的时间及效果，对数据库实行监视等。例如：")]),e._v(" "),t("ol",[t("li",[e._v("COMMIT - save work done 提交")]),e._v(" "),t("li",[e._v("SAVEPOINT - identify a point in a transaction to which you can later roll back 保存点")]),e._v(" "),t("li",[e._v("ROLLBACK - restore database to original since the last COMMIT 回滚")]),e._v(" "),t("li",[e._v("SET TRANSACTION - Change transaction options like what rollback segment to use 设置当前事务的特性，它对后面的事务没有影响.")])]),e._v(" "),t("h2",{attrs:{id:"mysql-connector-j-8-0-developer-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-connector-j-8-0-developer-guide"}},[e._v("#")]),e._v(" MySQL Connector/J 8.0 Developer Guide")]),e._v(" "),t("h3",{attrs:{id:"configuration-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-properties"}},[e._v("#")]),e._v(" Configuration Properties")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-configuration-properties.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[e._v("allowMultiQueries")])]),e._v(" "),t("p",[e._v("Allow the use of ';' to delimit multiple queries during one statement (true/false). Default is 'false', and it does not affect the addBatch() and executeBatch() methods, which rely on rewriteBatchStatements instead.")]),e._v(" "),t("p",[e._v("Default Value "),t("strong",[e._v("false")]),e._v(" Since Version 3.1.1")]),e._v(" "),t("p",[t("strong",[e._v("参考文档")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://dev.mysql.com/doc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);