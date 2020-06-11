以下代码计算鼠标相对于 \`clicked\` 元素的位置: 

~~~ javascript
ele.addEventListener('mousedown', function(e) {
    // 获取到 target 属性
    const target = e.target;

    // 从 target 中获取到元素的大小
    const rect = target.getBoundingClientRect();

    // 鼠标的相对位置
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
});
~~~