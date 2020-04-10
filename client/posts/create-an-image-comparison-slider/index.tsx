import React from 'react';
import { Helmet } from 'react-helmet';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta
        name='keywords'
        content={`
            addEventListener, getBoundingClientRect, image comparison slider, mousedown event, mousemove event,
            mouseup event, previous sibling, previousElementSibling, next sibling, nextElementSibling,
            set css style, set element width
        `}
    />
</Helmet>
<Markdown
    content={`
在这篇文章中，我们将创建一个滑块来比较两个 imges。滑块有三个元素组织如下:

~~~ html
<div class="container">
    <!-- 显示修改后的图像 -->
    <div class="modified-image"></div>

    <!-- 调整 -->
    <div class="resizer" id="dragMe"></div>

    <!-- 原始图像 -->
    <img src="/path/to/original/image.png" />
</div>
~~~

## The markup

最初，修改后的图像将占据容器的一半宽度。它绝对位于容器上：

~~~ css
.container {
    position: relative;
}
.modified-image {
    /* 绝对定位 */
    left: 0;
    position: absolute;
    top: 0;

    /* 取容器的全高和半宽 */
    height: 100%;
    width: 50%;
}
~~~

我们不使用 \`img\` 标签在此处显示修改后的图像，因为图像可以缩放。相反，我们将修改后的图像用作修改后的元素的背景：

~~~ html
<div
    class="modified-image"
    style="background-image: url('/path/to/modified/image.png')"
>
</div>
~~~

修改后的元素使用更多样式在所需位置显示背景图像：

~~~ css
.modified-image {
    background-position: top;
    background-repeat: no-repeat;
    background-size: auto 100%;
    ...
}
~~~

设置大小调整器的位置要容易得多。它显示在容器的中央：

~~~ css
.resizer {
    /* 绝对定位 */
    left: 50%;
    position: absolute;
    top: 0;

    /* 大小 */
    height: 100%;
    width: 2px;

    /* 背景 */
    background-color: #cbd5e0;

    /* 表示它可以调整大小 */
    cursor: ew-resize;
}
~~~

## 事件处理

当用户移动大小调整器时，我们计算鼠标已移动了多远。然后根据当前鼠标位置设置修改元素和调整大小元素的位置。

关于这个想法的更多信息，你可以查看[创建可调整大小的拆分视图](/create-resizable-split-views)文章。这是一段代码:

~~~ javascript
// 查询元素
const resizer = document.getElementById('dragMe');
const leftSide = resizer.previousElementSibling;

// 鼠标当前位置
let x = 0;
let y = 0;

// 修改元素宽度
let leftWidth = 0;

// 绑定 mousedown 事件
// 当用户拖动调整大小时触发
const mouseDownHandler = function(e) {
    // 获取当前鼠标位置
    x = e.clientX;
    y = e.clientY;
    leftWidth = leftSide.getBoundingClientRect().width;

    // 将侦听器绑定到 \`document\` 上
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function(e) {
    // 鼠标移动了多远
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    let newLeftWidth = (leftWidth + dx) * 100 / resizer.parentNode.getBoundingClientRect().width;
    newLeftWidth = Math.max(newLeftWidth, 0);
    newLeftWidth = Math.min(newLeftWidth, 100);

    // 设置修改和调整大小元素的宽度
    leftSide.style.width = \`\${newLeftWidth}%\`;
    resizer.style.left = \`\${newLeftWidth}%\`;
};

// 将事件处理
resizer.addEventListener('mousedown', mouseDownHandler);
~~~

当用户移动鼠标时，我们必须确保鼠标没有移动到容器外。这就是为什么我们必须将newLeftWidth与0和100个百分比进行比较:

~~~ javascript
const mouseMoveHandler = function(e) {
    ...

    newLeftWidth = Math.max(newLeftWidth, 0);
    newLeftWidth = Math.min(newLeftWidth, 100);
};
~~~

下面是你可以使用的演示。

_Photo by [frank mckenna](https://unsplash.com/@frankiefoto) on [Unsplash](https://unsplash.com/photos/OD9EOzfSOh0)_
`}
/>
<Demo src='/demo/create-an-image-comparison-slider/index.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'create-a-range-slider',
        'create-resizable-split-views',
        'get-siblings-of-an-element',
        'make-a-draggable-element',
        'set-css-style-for-an-element',
    ]}
/>
</>
    );
};
