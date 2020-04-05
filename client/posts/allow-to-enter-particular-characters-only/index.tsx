import React from 'react';
import { Helmet } from 'react-helmet';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='addEventListener, 事件绑定, input event, 表单事件, keypress event, preventDefault, selectionEnd, selectionStart, setSelectionRange' />
</Helmet>
<Markdown
    content={`
在这个例子里, 我们将强制用户只输入给定集合中的字符。具体地说, 这个演示中支持的字符在包括数字和空格。当然，您也可以将这个想法用在其他属性。

这是我们的 input 元素 :

~~~ html
<input type="text" id="input" />
~~~

## 1. 绑定事件

通过绑定 \`keypress\` 事件，我们可以防止用户输入数字和空格以外的字符

~~~ javascript
const ele = document.getElementById('input');

ele.addEventListener('keypress', function(e) {
    // 得到 keyCode
    const key = e.which || e.keyCode;

    // 0, 1, ..., 9, ..., 48, 49, ..., 57, 都对应着不同的按键
    // 空格的keyCode是 32
    if (key != 32 && (key < 48 || key > 57)) {
        // 阻止默认操作
        e.preventDefault();
    }
});
~~~

上面的代码看起来不错，但还不够，因为用户仍然可以将不支持的字符粘贴或拖动到 \`input\` 中。这些情况可以通过 \`input\` 事件来处理:

~~~ javascript
// 保存当前值
let currentValue = ele.value || '';

ele.addEventListener('input', function(e) {
    const target = e.target;

    // 如果用户输入支持的字符(数字或空格)
    /^[0-9\\s]*$/.test(target.value)
        // 备份当前值
        ? currentValue = target.value
        // 否则，还原值
        // 注意在这种情况下, \`e.preventDefault()\` 不起作用
        : target.value = currentValue;
});
~~~

在上面的代码中，我们检查值是否与正则表达式 \` /^[0-9\\s]*$/ \`匹配。

它修复了用户从键盘粘贴 (\`Ctrl + V\`)、右键粘贴或将文本拖拽放入的情况。

但还有一个问题。调用 \`target.value = currentValue\` 将把光标放在输入的末尾。
我们必须保持光标的位置。

~~~ javascript
// 跟踪光标当前的位置
const selection = {};

ele.addEventListener('keydown', function(e) {
    const target = e.target;
    selection = {
        selectionStart: target.selectionStart,
        selectionEnd: target.selectionEnd,
    };
});
~~~

当用户更改 \`input\` 值时，如果不支持该值，我们将同时重置该值和光标位置:

~~~ javascript
ele.addEventListener('input', function(e) {
    const target = e.target;

    if (/^[0-9\s]*$/.test(target.value)) {
        currentValue = target.value;
    } else {
        // 用户输入不支持的字符
        // 重置该值和光标位置
        target.value = currentValue;
        target.setSelectionRange(
            selection.selectionStart,
            selection.selectionEnd
        );
    }
});
~~~

我们可以将跟踪的属性( \`value\`, \`selectionStart\` 和 \`selectionEnd\` )合并到一个变量中
请参阅最后的演示。

## 2. 使用特殊输入

我们可以使用特殊的HTML 5输入服务于特定的用例:

| \`input\`                     | 描述                       |
|-------------------------------|-----------------------------------|
| \`<input type="color" />\`    | 让用户指定一个颜色          |
| \`<input type="date" />\`     | 让用户选择一个日期             |
| \`<input type="email" />\`    | 让用户输入邮箱地址   |
| \`<input type="number" />\`   | 让用户输入数值       |
| \`<input type="tel" />\`      | 让用户输入号码 |
| \`<input type="time" />\`     | 让用户输入时间             |
| \`<input type="url" />\`      | 让用户输入 URL 地址              |

您可以探索更多的内置类型 [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#%3Cinput%3E_types).

在我们的具体例子中, \`<input type="number" />\` 没有作业，因为它不允许输入一个空格。
`}
/>
<Demo src='/demo/allow-to-enter-particular-characters-only' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'prevent-the-default-action-of-an-event',
    ]}
/>
</>
    );
};
