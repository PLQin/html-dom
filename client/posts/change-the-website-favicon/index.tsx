import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
下面的功能将要更改 favicon 图标的 \`url\` 地址:

~~~ javascript
const setFavicon = function(url) {
    // 首先找到当前的 favicon 元素
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
        // 更新成新的 \`url\` 地址
        favicon.href = url;
    } else {
        // 创建新的 \`link\` 标签
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = url;

        // 添加到 \`head\` 中
        document.head.appendChild(link);
    }
};
~~~

当你想要动态更新 favicon 图标时。例如，将图标跟换成社交网站中的用户图标: 

~~~ javascript
setFavicon('/path/to/user/profile/icon.ico');
~~~

## 使用 emoji 符号作为 favicon 图标

**注意**，上面的 \`setFavicon()\` 函数接收一个 favicon 图标的 URL。通过自定义传入的 URL，我们可以得到一些非常酷炫的东西。

在下面的代码中，我们创建一个 \`canvas\` 元素，使用一个 emoji 符号来填充，并得到一个自定义的 URL:

~~~ javascript
const emojiFavicon = function(emoji) {
    // 创建一个 canvas 元素
    const canvas = document.createElement('canvas');
    canvas.height = 64;
    canvas.width = 64;

    // 获取 canvas context
    const context = canvas.getContext('2d');
    context.font = '64px serif';
    context.fillText(emoji, 0, 64);

    // 获取自定 URL
    const url = canvas.toDataURL();

    // 更新 favicon URL 地址
    setFavicon(url);
};

// 调用 emojiFavicon() 函数
emojiFavicon('🎉');
~~~
`}
/>
<RelatedPosts
    slugs={[
        'load-a-css-file-dynamically',
        'load-a-javascript-file-dynamically',
    ]}
/>
</>
    );
};
