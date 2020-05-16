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
            addEventListener, getBoundingClientRect, mousedown event, mousemove event, mouseup event, 
            previous sibling, previousElementSibling, next sibling, nextElementSibling, range input,
            range slider, set css style, set element width
        `}
    />
</Helmet>
<Markdown
    content={`
    这篇文章介绍了两种创建范围滑块的流行方法。

    ## 1. 使用 \`range\` 类型的 input
    
    HTML提供了内置的 \`range\` input类型: 
    
    ~~~ html
    <input type="range" />
    ~~~
    
    在现代浏览器，IE 10和更高版本中受支持。但是有一些限制，例如：
    * 你不能定制按钮
    * 在撰写本文时，并非所有现代浏览器都[支持](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#Browser_compatibility)垂直滑块
    
    如果需要可自定义的滑块，请跳至下一部分。
    
    > ## 提示
    > 
    > 使用[本文](/check-if-the-native-date-input-is-supported)中提到的类似技术，我们可以检查范围输入是否受支持:
    >
    > ~~~ javascript
    > const isRangeInputSupported = function() {
    >     const ele = document.createElement('input');
    >     ele.setAttribute('type', 'range');
    >     // 如果浏览器不支持 \`range\` input 类型
    >     // \`type\` 属性将恢复为 \`text\`
    >     return ele.type !== 'text';
    > };
    > ~~~
    
    ## 2. 创建一个可自定义的范围滑块
    
    滑块是三个部分的组合：一个旋钮，以及位于旋钮左右两侧的两个侧面。
    
    ~~~ html
    <div class="container">
        <div class="left"></div>
        <div class="knob" id="knob"></div>
        <div class="right"></div>
    </div>
    ~~~
    
    这些部分放在同一行中。右元素获取可用宽度。因此，我们可以使用以下样式来构建布局:
    
    ~~~ css
    .container {
        /* 内容是水平居中的 */
        align-items: center;
        display: flex;
    
        /* 大小 */
        height: 1.5rem;
    }
    .right {
        /* 获取剩余宽度 */
        flex: 1;
        height: 2px;
    }
    ~~~
    
    你可以查看演示以查看元素的完整样式。
    
    > ## 资源
    >
    > 这个[页面](https://csslayout.io/patterns/slider)演示了范围滑块的最简单布局
    
    ### 触发事件
    
    让旋钮可[拖动](/make-a-draggable-element)的想法很简单:
    
    * 处理旋钮的 \`mousedown\` 事件。处理事件能够存储鼠标位置：
    
    ~~~ javascript
    // 查询元素
    const knob = document.getElementById('knob');
    const leftSide = knob.previousElementSibling;
    
    // 鼠标的当前位置
    let x = 0;
    let y = 0;
    let leftWidth = 0;
    
    // 处理 mousedown 事件
    // 当用户拖动按钮时就会触发
    const mouseDownHandler = function(e) {
        // 获取当前鼠标位置
        x = e.clientX;
        y = e.clientY;
        leftWidth = leftSide.getBoundingClientRect().width;
    
        //将监听器附加到 \`document\` 上
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };
    ~~~
    
    * 当旋钮移动时，根据当前和原始鼠标位置，我们知道鼠标移动了多远。然后为左侧设置宽度: 
    
    ~~~ javascript
    const mouseMoveHandler = function(e) {
        // 鼠标移动了多远
        const dx = e.clientX - x;
        const dy = e.clientY - y;
    
        const containerWidth = knob.parentNode.getBoundingClientRect().width;
        let newLeftWidth = (leftWidth + dx) * 100 / containerWidth;
        newLeftWidth = Math.max(newLeftWidth, 0);
        newLeftWidth = Math.min(newLeftWidth, 100);
    
        leftSide.style.width = \`\${newLeftWidth}%\`;
    };
    ~~~
    
    这篇文章中没有列出更多的小细节，但你可以在演示的源代码中看到它们。我总是建议在不使用事件监听时清理所有绑定的事件监听：
    
    ~~~ javascript
    // 当用户放下旋钮时触发
    const mouseUpHandler = function() {
        ...
    
        // 移除事件 \`mousemove\` 和 \`mouseup\`
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };
    ~~~
        // Remove the handlers of \`mousemove\` and \`mouseup\`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};
~~~

> ## 技巧
>
> 可以参考技巧文章 [将事件处理程序附加到其他处理程序中](/attach-event-handlers-inside-other-handlers).

## 案例

* [缩放图片](/zoom-an-image)

享受演示!
`}
/>
<Demo src='/demo/create-a-range-slider/index.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'create-an-image-comparison-slider',
        'create-resizable-split-views',
        'drag-to-scroll',
        'get-siblings-of-an-element',
        'make-a-draggable-element',
        'set-css-style-for-an-element',
        'zoom-an-image',
    ]}
/>
</>
    );
};
