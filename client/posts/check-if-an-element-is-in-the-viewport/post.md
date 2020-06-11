如果 \`ele\` 元素 在 viewport(可视区域) 中可见，以下函数则返回 \`true\` 

~~~ javascript
const isInViewport = function(ele) {
    const rect = ele.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
~~~