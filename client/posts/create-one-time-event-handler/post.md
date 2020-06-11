## 1. 使用一次性选项

当给一个元素绑定一个事件处理程序时，你可以给 \`addEventListener\` 方法的最后一个参数传入  \`{ once: true }\` 数据：

~~~ javascript
const handler = function(e) {
    // 事件处理程序
};

ele.addEventListener('event-name', handler, { once: true });
~~~

**请注意**，IE中不支持此选项。

## 2. 自行删除绑定的事件处理程序

~~~ javascript
const handler = function(e) {
    // 事件处理程序
    // 做一些事情...

    // 删除绑定的事件处理程序
    e.target.removeEventListener(e.type, handler);
};

ele.addEventListener('event-name', handler);
~~~

## 案例

* [在鼠标单机位置显示自定义的上下文菜单](/show-a-custom-context-menu-at-clicked-position)
