(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{c3LK:function(n,e,t){"use strict";t.r(e);var i=t("q1tI"),a=t.n(i),o=t("TJpk"),s=t("mcK/"),l=t("Ov9x"),d=t("2G++");e.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.Helmet,null,a.a.createElement("meta",{name:"keywords",content:"\n            addEventListener, getBoundingClientRect, mousedown event, mousemove event, mouseup event, \n            previous sibling, previousElementSibling, next sibling, nextElementSibling, range input,\n            range slider, set css style, set element width\n        "})),a.a.createElement(l.a,{content:"\n这篇文章介绍了两种创建范围滑块的流行方法。\n\n## 1. 使用 `range` 类型的 input\n\nHTML提供了内置的 `range` input类型: \n\n~~~ html\n<input type=\"range\" />\n~~~\n\n在现代浏览器，IE 10和更高版本中受支持。但是有一些限制，例如：\n* 你不能定制按钮\n* 在撰写本文时，并非所有现代浏览器都[支持](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#Browser_compatibility)垂直滑块\n\n如果需要可自定义的滑块，请跳至下一部分。\n\n> ## 提示\n> \n> 使用[本文](/check-if-the-native-date-input-is-supported)中提到的类似技术，我们可以检查范围输入是否受支持:\n>\n> ~~~ javascript\n> const isRangeInputSupported = function() {\n>     const ele = document.createElement('input');\n>     ele.setAttribute('type', 'range');\n>     // 如果浏览器不支持 `range` input 类型\n>     // `type` 属性将恢复为 `text`\n>     return ele.type !== 'text';\n> };\n> ~~~\n\n## 2. 创建一个可自定义的范围滑块\n\n滑块是三个部分的组合：一个旋钮，以及位于旋钮左右两侧的两个侧面。\n\n~~~ html\n<div class=\"container\">\n    <div class=\"left\"></div>\n    <div class=\"knob\" id=\"knob\"></div>\n    <div class=\"right\"></div>\n</div>\n~~~\n\n这些部分放在同一行中。右元素获取可用宽度。因此，我们可以使用以下样式来构建布局:\n\n~~~ css\n.container {\n    /* 内容是水平居中的 */\n    align-items: center;\n    display: flex;\n\n    /* 大小 */\n    height: 1.5rem;\n}\n.right {\n    /* 获取剩余宽度 */\n    flex: 1;\n    height: 2px;\n}\n~~~\n\n你可以查看演示以查看元素的完整样式。\n\n> ## 资源\n>\n> 这个[页面](https://csslayout.io/patterns/slider)演示了范围滑块的最简单布局\n\n### 触发事件\n\n让旋钮可[拖动](/make-a-draggable-element)的想法很简单:\n\n* 处理旋钮的 `mousedown` 事件。处理事件能够存储鼠标位置：\n\n~~~ javascript\n// 查询元素\nconst knob = document.getElementById('knob');\nconst leftSide = knob.previousElementSibling;\n\n// 鼠标的当前位置\nlet x = 0;\nlet y = 0;\nlet leftWidth = 0;\n\n// 处理 mousedown 事件\n// 当用户拖动按钮时就会触发\nconst mouseDownHandler = function(e) {\n    // 获取当前鼠标位置\n    x = e.clientX;\n    y = e.clientY;\n    leftWidth = leftSide.getBoundingClientRect().width;\n\n    //将监听器附加到 `document` 上\n    document.addEventListener('mousemove', mouseMoveHandler);\n    document.addEventListener('mouseup', mouseUpHandler);\n};\n~~~\n\n* 当旋钮移动时，根据当前和原始鼠标位置，我们知道鼠标移动了多远。然后为左侧设置宽度: \n\n~~~ javascript\nconst mouseMoveHandler = function(e) {\n    // 鼠标移动了多远\n    const dx = e.clientX - x;\n    const dy = e.clientY - y;\n\n    const containerWidth = knob.parentNode.getBoundingClientRect().width;\n    let newLeftWidth = (leftWidth + dx) * 100 / containerWidth;\n    newLeftWidth = Math.max(newLeftWidth, 0);\n    newLeftWidth = Math.min(newLeftWidth, 100);\n\n    leftSide.style.width = `${newLeftWidth}%`;\n};\n~~~\n\n这篇文章中没有列出更多的小细节，但你可以在演示的源代码中看到它们。我总是建议在不使用事件监听时清理所有绑定的事件监听：\n\n~~~ javascript\n// 当用户放下旋钮时触发\nconst mouseUpHandler = function() {\n    ...\n\n    // 移除事件 `mousemove` 和 `mouseup`\n    document.removeEventListener('mousemove', mouseMoveHandler);\n    document.removeEventListener('mouseup', mouseUpHandler);\n};\n~~~\n\n享受演示!\n"}),a.a.createElement(s.a,{src:"/demo/create-a-range-slider/index.html"}),a.a.createElement(d.a,{slugs:["attach-or-detach-an-event-handler","create-an-image-comparison-slider","create-resizable-split-views","get-siblings-of-an-element","make-a-draggable-element","set-css-style-for-an-element"]}))}}}]);
//# sourceMappingURL=posts-create-a-range-slider.01ab5cfff9d425e08e39.js.map