假设我们需要让用户在输入数据时（例如密码字段）知道是否按下了大写锁定键：

~~~ html
<input type="text" id="textbox" />

<div id="message" />
~~~

带有 \`id\` 为 \`message\` 的元素将用来显示提示信息。

## 1. 使用 getModifierState() 方法

[getModifierState()](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState) 方法将会返回给定修饰键的状态（布尔值）。
通过使用事件处理程序的 event 对象调用 \`getModifierState('CapsLock')\` 方法，让我们知道是否按下了 \`CapsLock\` 键。

~~~ javascript
const textboxEle = document.getElementById('textbox');
const messageEle = document.getElementById('message');

textboxEle.addEventListener('keydown', function(e) {
    const capsLockOn = e.getModifierState('CapsLock');

    // 更新 message 元素的文本内容
    messageEle.innerHTML = capsLockOn ? 'Caps lock is ON' : '';

    // 根据 CapsLock 状态来决定是否显示 message 元素的文本内容
    messageEle.style.display = capsLockOn ? 'block' : 'none';
});
~~~

这种方式不是适用于用户按下 _Shift_ 键的情况。

## 2. 支持 Shift 键

如果用户按下，则将大写锁定视为打开
* 不带 Shift 的大写字母
* 或是带有 Shift 的小写字母

~~~ javascript
const textboxEle = document.getElementById('textbox');
const messageEle = document.getElementById('message');

textboxEle.addEventListener('keypress', function(e) {
    const isMac = /Mac/.test(navigator.platform);

    const keyCode = e.keyCode || e.which;

    // 是否按下了 Shift 键
    const shiftKey = e.shiftKey || keyCode === 16;

    // 获取按下的的字符
    const s = String.fromCharCode(keyCode);
    const capsLockOn = 
        (s.toUpperCase() === s && s.toLowerCase() !== s && !(shiftKey && isMac)) ||
        (s.toUpperCase() !== s && s.toLowerCase() === s && shiftKey);

    messageEle.innerHTML = capsLockOn ? 'Caps lock is ON' : '';
    messageEle.style.display = capsLockOn ? 'block' : 'none';
});
~~~