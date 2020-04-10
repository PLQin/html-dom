import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
如果当前浏览器支持使用 \`<input type="date" />\` 输入日期，则以下函数返回 \`true\`。

~~~ javascript
const isDateInputSupported = function() {
    // 创建一个新的 input 元素
    const ele = document.createElement('input');

    // 设置 type 属性
    ele.setAttribute('type', 'date');

    const invalidValue = 'not-a-valid-date';

    // 设置无效显示值
    ele.setAttribute('value', invalidValue);

    // 如果浏览器支持 date 类型输入
    // 他不会对 \`value\` 属性产生影响
    // \`ele.value\` 将会是一个空字符串
    // 
    // 在另一种情况下，input 被视为正常的文本输入
    // 和 \`ele.value\` 返回原始值
    return ele.value !== invalidValue;
};
~~~

此函数也适用于其他的 HTML5 输入类型，例如: \`email\`, \`url\`。

相关链接: [HTML5 输入类型兼容性](https://caniuse.com/#search=input%3A%20type%3D)
`}
/>
<RelatedPosts
    slugs={[
        'create-an-element',
        'get-set-and-remove-attributes',
    ]}
/>
</>
    );
};
