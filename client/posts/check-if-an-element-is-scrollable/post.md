如果 \`ele\` 可滚动，则以下函数返回 \`true\`。

~~~ javascript
const isScrollable = function(ele) {
    // 比较 ele 元素高度，查看元素是否具有可滚动元素
    const hasScrollableContent = ele.scrollHeight > ele.clientHeight;

    // 这还不够的，因为可以将 ele 元素的 “overflow-y” 样式设置为
    // * \`hidden\`
    // * \`hidden !important\`
    // 在这种情况下，不会显示滚动条
    const overflowYStyle = window.getComputedStyle(ele).overflowY;
    const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;

    return hasScrollableContent && !isOverflowHidden;
};
~~~