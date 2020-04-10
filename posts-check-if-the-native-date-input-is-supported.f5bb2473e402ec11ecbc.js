(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"44eU":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),u=t.n(a),l=t("Ov9x"),i=t("2G++");n.default=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(l.a,{content:"\n如果当前浏览器支持使用 `<input type=\"date\" />` 输入日期，则以下函数返回 `true`。\n\n~~~ javascript\nconst isDateInputSupported = function() {\n    // 创建一个新的 input 元素\n    const ele = document.createElement('input');\n\n    // 设置 type 属性\n    ele.setAttribute('type', 'date');\n\n    const invalidValue = 'not-a-valid-date';\n\n    // 设置无效显示值\n    ele.setAttribute('value', invalidValue);\n\n    // 如果浏览器支持 date 类型输入\n    // 他不会对 `value` 属性产生影响\n    // `ele.value` 将会是一个空字符串\n    // \n    // 在另一种情况下，input 被视为正常的文本输入\n    // 和 `ele.value` 返回原始值\n    return ele.value !== invalidValue;\n};\n~~~\n\n此函数也适用于其他的 HTML5 输入类型，例如: `email`, `url`。\n\n相关链接: [HTML5 输入类型兼容性](https://caniuse.com/#search=input%3A%20type%3D)\n"}),u.a.createElement(i.a,{slugs:["create-an-element","get-set-and-remove-attributes"]}))}}}]);
//# sourceMappingURL=posts-check-if-the-native-date-input-is-supported.f5bb2473e402ec11ecbc.js.map