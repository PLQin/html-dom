如果 \`ele\` 元素在可滚动元素中可见，那么下面的函数(isVisibe)就会返回 \`true\`:

~~~ javascript
const isVisible = function(ele, container) {
    const eleTop = ele.offsetTop;
    const eleBottom = eleTop + ele.clientHeight;

    const containerTop = container.scrollTop;
    const containerBottom = containerTop + container.clientHeight;

    // 元素在可容器中完全可见
    return (eleTop >= containerTop && eleBottom <= containerBottom) ||
        // 元素的某些部分在容器中可见
        (eleTop < containerTop && containerTop < eleBottom) ||
        (eleTop < containerBottom && containerBottom < eleBottom);
};
~~~

我们还可基于元素或是容器的边界来进行检查

~~~ javascript
const isVisible = function(ele, container) {
    const { bottom, height, top } = ele.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    return top <= containerRect.top
        ? (containerRect.top - top <= height)
        : (bottom - containerRect.bottom <= height);
};
~~~