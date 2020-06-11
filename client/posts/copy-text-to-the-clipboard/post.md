假设我们要将给定的\`文本\`, 复制到剪贴板上。

为了做到这一点，我们[创建](/create-an-element)了一个具有\`文本\`值的虚拟 \`textarea\` 元素。接下来，我们选择内容并执行 "copy" 命令。

~~~ javascript
// 创建一个虚拟 textarea 元素
const textAreaEle = document.createElement('textarea');

// 初始化样式
textAreaEle.style.border = '0';
textAreaEle.style.padding = '0';
textAreaEle.style.margin = '0';

// 设置为绝对定位
// 用户不会看到这个元素
textAreaEle.style.position = 'absolute';
textAreaEle.style.left = '-9999px';
textAreaEle.style.top = \`${document.documentElement.scrollTop}px\`;

// 设置值
textAreaEle.value = text;

// 将 textarea 元素添加到 body 元素中
document.body.appendChild(textAreaEle);

// 聚焦并选择文本
textAreaEle.focus();
textAreaEle.select();

// 执行 "copy" 命令
try {
    document.execCommand('copy');
} catch (err) {
    // 无法复制
} finally {
    // 移除 textarea 元素
    document.body.removeChild(textAreaEle);
}
~~~