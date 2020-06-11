## 使用 on 属性 (不推荐使用)

你可以通过 \`on{eventName}\` 属性设置事件处理器，其中 \`eventName\` 表示[事件类型](https://developer.mozilla.org/zh-CN/docs/Web/Events)。例如: 

~~~ javascript
ele.onclick = function() {
    ...
};

// 删除事件处理器
delete ele.onclick;
~~~

不推荐使用这种方法，因为我们只能为每个事件附加一个处理器。例如，设置 \`onclick\` 属性将覆盖 \`click\` 事件的任何现有处理器。

## 使用 addEventListener() 方法

~~~ javascript
const handler = function() {
    ...
};

// 将事件监听器分配给 \`click\`事件类型及处理函数
ele.addEventListener('click', handler);

// 移除事件监听器中的 \`click\`事件类型及处理函数
ele.removeEventListener('click', handler);
~~~

请注意，事件类型在 \`addEventListener\` 和 \`removeEventListener\` 方法中均作为第一个参数传递。它与第一种方法不同，后者需要在事件类型前加上 \`on\`。

如果您希望处理程序被调用一次, 请查看[创建一次性的事件处理](/create-one-time-event-handler)文章.