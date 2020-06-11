~~~ javascript
// 如果 \`ele\` 元素中存在与传入的 \`selector\` 相匹配的 CSS 选择器，则返回 true
const matches = function(ele, selector) {
    return (
        ele.matches || 
        ele.matchesSelector || 
        ele.msMatchesSelector || 
        ele.mozMatchesSelector || 
        ele.webkitMatchesSelector || 
        ele.oMatchesSelector
    ).call(ele, selector);
};
~~~

相关链接: [Element.matches()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/matches)
