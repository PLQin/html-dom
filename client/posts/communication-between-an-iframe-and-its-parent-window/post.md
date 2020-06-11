## 将数据从 iframe 发送到父级 window中

~~~ javascript
// 在 iframe 中调用
window.parent.postMessage(message, '*');
~~~

\`message\` 是一个字符串，如果你需要发送多个数据，可以在 JSON 中进行编码: 

~~~ javascript
// 在 iframe 中调用
const message = JSON.stringify({
    message: 'Hello from iframe',
    date: Date.now(),
});
window.parent.postMessage(message, '*');
~~~

## 将数据从页面发送到它的子级 iframe 中

~~~ javascript
// 在页面中调用
frameEle.contentWindow.postMessage(message, '*');
~~~

其中 \`frameEle\` 表示的是 iframe 元素。

## 接收发送的数据

在 iframe 或主页面中，你可以监听 \`message\` 事件，接收发送的数据: 

~~~ javascript
window.addEventListener('message', function(e) {
    // 获取发送的数据
    const data = e.data;
    
    // 如果你在发送数据之前使用 JSON 进行编码，
    // 在这里进行解码
    // const decoded = JSON.parse(data);
});
~~~

> ## 提示
>
> 如果您从不同的 iframe 发送或接收消息，可以包含一个参数来指示消息的来源。
>
> ~~~ javascript
> // 来自子级 iframe
> const message = JSON.stringify({
>   channel: 'FROM_FRAME_A',
>   ...
});
> window.parent.postMessage(message, '*');
> ~~~
>
> 然后，在主页中，可以通过查看参数来区分消息
>
> ~~~ javascript
> window.addEventListener('message', function(e) {
>   const data = JSON.parse(e.data);
>   // 查看消息从哪里来
>   const channel = data.channel;
> });
> ~~~

以下示例演示了如何在[页面](https://github.com/PLQin/html-dom/blob/master/demo/communication-between-an-iframe-and-its-parent-window/index.html)和[子级 iframe](https://github.com/PLQin/html-dom/blob/master/demo/communication-between-an-iframe-and-its-parent-window/iframe.html)之间发送简单消息：
