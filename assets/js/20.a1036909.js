(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{368:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("阅读《Javascript高级程序设计》红宝书的笔记记录，参杂一些个人的思考和想法。\n")]),s._v(" "),a("h2",{attrs:{id:"javascript简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript简介"}},[s._v("#")]),s._v(" Javascript简介")]),s._v(" "),a("h3",{attrs:{id:"js和es的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js和es的关系"}},[s._v("#")]),s._v(" JS和ES的关系")]),s._v(" "),a("p",[s._v("就Javascript和ECMAscript来说，一般我们认为是同一个东西。")]),s._v(" "),a("p",[s._v("实际上，一个完整的Javascript应该由 "),a("strong",[s._v("核心（ECMAscript）、文档对象模型（Document Object Model）、浏览器对象模型（Browser Object Model）")]),s._v(" 三部分组成")]),s._v(" "),a("p",[s._v("由此看来，Javascript的范围比ECMAscript大得多")]),s._v(" "),a("blockquote",[a("p",[s._v("个人理解ECMAscript是语法部分")])]),s._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[s._v("#")]),s._v(" 基本概念")]),s._v(" "),a("h3",{attrs:{id:"typeof操作符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeof操作符"}},[s._v("#")]),s._v(" Typeof操作符")]),s._v(" "),a("p",[s._v("基于ECMAscript是松散类型的，因此需要有一种手段来检测给定变量的数据类型")]),s._v(" "),a("p",[s._v("typeof就是负责提供这方面信息的"),a("strong",[s._v("操作符")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"some string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//"string"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//"string"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("95")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//"number"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("是的，没错，它是一个操作符而不是一个函数。尽管例子中的圆括号可以使用，但是它并不是必需的。")]),s._v(" "),a("h3",{attrs:{id:"undefined类型和null类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undefined类型和null类型"}},[s._v("#")]),s._v(" Undefined类型和Null类型")]),s._v(" "),a("p",[s._v("Undefined类型只有一个值，即特殊的undefined。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("以上两段代码实际上是等价的，在声明变量时未对变量进行初始化，它就会被隐式初始化为undefined")])])}),[],!1,null,null,null);t.default=e.exports}}]);