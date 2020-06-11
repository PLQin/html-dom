\`mousedown\` 和 \`mouseup\` 事件处理程序能够让我们知道单击了哪个鼠标按钮：

~~~ javascript
ele.addEventListener('mousedown', function(e) {
    // e.button === 0: 左键
    // e.button === 1: 中间键（滚轮键）
    // e.button === 2: 右键
    // e.button === 3: 后退键
    // e.button === 4: 前进键
});
~~~