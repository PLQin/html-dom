## 1. 使用 download 属性

在 **a标签** 中添加 \`download\` 属性将迫使浏览器下载文件，而不是跳转至该链接。请注意，IE 11[不支持](https://caniuse.com/#feat=download) \`download\` 属性。

~~~ html
<a href="/path/to/file" download>Download</a>
~~~

## 2. 通过 click 事件触发

这个想法来自于创建一个 **a标签** ，并触发它的 click 事件

~~~ javascript
// 创建一个a标签
const link = document.createElement('a');
link.download = 'file name';
link.href = '/path/to/file';

// 添加到 document 中
document.body.appendChild(link);

// 触发 click 事件
link.click();

// 删除这个元素
document.body.removeChild(link);
~~~

## 3. 下载包含动态数据的文件

通过会下载带有动态数据的文件，例如
- JSON
- 文本
- 图片

从数据中，我们可以将其转换为一个 [Blob](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob) 类文件对象，然后像前面描述的那样处理 click 事件。下面的实例代码创建了一个 JSON，并转换为 Blob 对象进行下载。

~~~ javascript
const data = JSON.stringify({ 'message': 'Hello Word' });

const blob = new Blob([data], { type: 'application/json' });

// 创建新的 URL
const url = window.URL.createObjectURL(blob);

// 创建 a标签并触发 click 事件
...

// 释放上面创建的 URL
window.URL.revokeObjectURL(url);
~~~