## 支持垂直方向

支持侧面垂直拆分很容易。现在，我们不更新左侧的宽度，而是更新顶部的高度：

~~~ javascript
const prevSibling = resizer.previousElementSibling;
let prevSiblingHeight = 0;

const mouseDownHandler = function(e) {
    const rect = prevSibling.getBoundingClientRect();
    prevSiblingHeight = rect.height;
};

const mouseMoveHandler = function(e) {
    const h = (prevSiblingHeight + dy) * 100 / resizer.parentNode.getBoundingClientRect().height;
    prevSibling.style.height = \`\${h}%\`;
};
~~~

当用户拖动resizer元素我们还是需要更改鼠标光标样式：

~~~ javascript
const mouseMoveHandler = function(e) {
    ...
    resizer.style.cursor = 'row-resize';
    document.body.style.cursor = 'row-resize';
};
~~~

## 支持两个方向

假设右元素要拆分为两个可调整大小的元素。

当前，我们有两个resizer元素。为了指示每个resizer元素的拆分方向，我们添加了一个自定义属性 \`data-direction\`：

~~~ html
<div style="display: flex">
    <div>Left</div>
    <div class="resizer" data-direction="horizontal"></div>

    <!-- 右侧边 -->
    <div style="display: flex; flex: 1 1 0%; flex-direction: column">
        <div>Top</div>
        <div class="resizer" data-direction="vertical"></div>
        <div style="flex: 1 1 0%">Bottom</div>
    </div>
</div>
~~~

稍后，我们可以从resizer元素中[获取到自定属性](/get-set-and-remove-data-attributes)：

~~~ javascript
const direction = resizer.getAttribute('data-direction') || 'horizontal';
~~~

设置前一个兄弟元素的宽度或高度的逻辑取决于方向：

~~~ javascript
const mouseMoveHandler = function(e) {
    switch (direction) {
        case 'vertical':
            const h = (prevSiblingHeight + dy) * 100 / resizer.parentNode.getBoundingClientRect().height;
            prevSibling.style.height = `${h}%`;
            break;
        case 'horizontal':
        default:
            const w = (prevSiblingWidth + dx) * 100 / resizer.parentNode.getBoundingClientRect().width;
            prevSibling.style.width = `${w}%`;
            break;
    }

    const cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
    resizer.style.cursor = cursor;
    document.body.style.cursor = cursor;

    ...
};
~~~

> ## 技巧
> 这篇文章介绍了使用[将事件处理程序附加到其他处理程序中](/attach-event-handlers-inside-other-handlers)的技巧

> ## 技巧
>
> 使用自定义的 \`data-\` 属性是管理与元素关联的变量的好方法。

请享受Demo！