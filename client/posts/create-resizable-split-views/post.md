在本文中，我们将添加一个元素以调整给定元素的子元素的大小。

原始元素的结构可以如下：

~~~ html
<div style="display: flex">
    <!-- 左边元素 -->
    <div>Left</div>

    <!-- 可调整元素 -->
    <div class="resizer" id="dragMe"></div>

    <!-- 右边元素 -->
    <div>Right</div>
</div>
~~~

为了将左元素，可调整元素和有元素放置在同一行，我们需要将它们的父元素设置  \`display: flex\` 样式。

## 拖动 resizer 元素时更新左侧宽度

建议您看看这篇[文章](/make-a-draggable-element)，了解如何让一个元素变为可拖动。

在我们的示例中，resizer元素可以水平拖动。首先，当用户开始点击resizer元素时，我们必须存储鼠标的位置和左侧的宽度:

~~~ javascript
// 查询元素
const resizer = document.getElementById('dragMe');
const leftSide = resizer.previousElementSibling;
const rightSide = resizer.nextElementSibling;

// 鼠标当前的位置
let x = 0;
let y = 0;

// 左元素的宽度
let leftWidth = 0;

// mousedown事件处理程序
// 当用户拖动resizer元素时触发
const mouseDownHandler = function(e) {
    // 获取到当前鼠标的位置
    x = e.clientX;
    y = e.clientY;
    leftWidth = leftSide.getBoundingClientRect().width;

    // 在 document 上绑定事件
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

// 绑定事件
resizer.addEventListener('mousedown', mouseDownHandler);
~~~

看看我们的代码结构，左元素和右元素分别是resizer元素的前后兄弟元素。就像你看到它们可以被[检索到](/get-siblings-of-an-element)到:

~~~ javascript
const leftSide = resizer.previousElementSibling;
const rightSide = resizer.nextElementSibling;
~~~

下一步，当用户移动元素是，我们需要确定鼠标移动了多元，然后更新左元素的宽度：

~~~ javascript
const mouseMoveHandler = function(e) {
    // 鼠标移动了多远
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    const newLeftWidth = (leftWidth + dx) * 100 / resizer.parentNode.getBoundingClientRect().width;
    leftSide.style.width = \`\${newLeftWidth}%\`;
};
~~~

我想要在这里指出两件重要的事情：

* 左侧的宽度是根据父母的宽度百分比设置的。它保持左右宽度的比例，并在用户调整浏览器大小时使两侧看起来不错。
* 如果我们总是强迫右边的宽度取剩余的宽度，就不需要更新右边的宽度:

~~~ html
<div style="display: flex">
    <!-- 左边元素 -->
    ...

    <!-- 可调整元素 -->
    ...

    <!-- 右边元素 -->
    <div style="flex: 1 1 0%;">Right</div>
</div>
~~~

## 解决页面闪烁的问题

当用户拖动resizer元素时，我们需要更新光标样式：

~~~ javascript
const mouseMoveHandler = function(e) {
    ...
    resizer.style.cursor = 'col-resize';
};
~~~

这会引发另外一个问题，当用户移动鼠标时，就会看到默认的鼠标光标样式，因为鼠标不在resizer元素的顶部。因为鼠标光标样式在不断的变化，所以用户会看到屏幕闪烁：

为了解决这个问题，我们为整个页面设置光标样式：

~~~ javascript
const mouseMoveHandler = function(e) {
    ...
    document.body.style.cursor = 'col-resize';
};
~~~

我们通过给元素[设置](/set-css-style-for-an-element) \`user-select\` 和 \`pointer-events\` 样式值来阻止鼠标事件和文本选择：

~~~ javascript
const mouseMoveHandler = function(e) {
    ...
    leftSide.style.userSelect = 'none';
    leftSide.style.pointerEvents = 'none';

    rightSide.style.userSelect = 'none';
    rightSide.style.pointerEvents = 'none';
};
~~~

在用户鼠标移动停止后立即删除这些样式：

~~~ javascript
const mouseUpHandler = function() {
    resizer.style.removeProperty('cursor');
    document.body.style.removeProperty('cursor');

    leftSide.style.removeProperty('user-select');
    leftSide.style.removeProperty('pointer-events');

    rightSide.style.removeProperty('user-select');
    rightSide.style.removeProperty('pointer-events');

    // 删除 mousemove 和 mouseup 事件处理程序
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};
~~~

以下是可以进行操作的案例：