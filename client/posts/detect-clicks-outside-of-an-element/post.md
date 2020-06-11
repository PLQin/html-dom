Check if a click was outside of the \`ele\` element:
检测 \`click\` 事件是否在 \`ele\` 元素外部触发

~~~ javascript
document.addEventListener('click', function(evt) {
    const isClickedOutside = !ele.contains(evt.target);

    // 如果 click 事件在 ele 元素外部触发，isClickedOutside 会为 true
});
~~~