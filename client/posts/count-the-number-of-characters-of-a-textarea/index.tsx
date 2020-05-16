import React from 'react';
import { Helmet } from 'react-helmet';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
        <>
            <Helmet>
                <meta name='keywords' content='display number of characters, maxlength attribute' />
            </Helmet>
            <Markdown
                content={`
假设我们有一个\`文本区\`和一个普通的 \`div\` 元素来显示用户输入了多少字符:

~~~ html
<textarea id="message"></textarea>
<div id="counter"></div>
~~~

## 使用 \`maxlength\` 属性

\`maxlength\` 属性设置用户可以在文本区域中输入的最大字符数

~~~ html
<textarea maxlength="200" id="message"></textarea>
~~~

## 计算字符的数量

处理元素的 value 值更改时触发的 \`input\` 事件: 

~~~ javascript
const messageEle = document.getElementById('message');
const counterEle = document.getElementById('counter');

messageEle.addEventListener('input', function(e) {
    const target = e.target;

    // 获取 \`maxlength\` 属性
    const maxLength = target.getAttribute('maxlength');

    // 计算当前的字符数
    const currentLength = target.value.length;

    counterEle.innerHTML = \`\${currentLength}/\${maxLength}\`;
});
~~~

> ## 很高兴知道
>
> 常见的错误是捕获 \`keyup\` 事件。在默写情况下将不会工作, 例如: 
> * 用户拖拽文本到文本区域中
> * 用户鼠标右击，在上下文菜单中选择 \`粘贴\`
`}
            />
            <Demo src='/demo/count-the-number-of-characters-of-a-textarea/index.html' />
            <RelatedPosts
                slugs={[
                    'attach-or-detach-an-event-handler',
                    'get-or-set-the-html-of-an-element',
                    'get-set-and-remove-attributes',
                ]}
            />
        </>
    );
};
