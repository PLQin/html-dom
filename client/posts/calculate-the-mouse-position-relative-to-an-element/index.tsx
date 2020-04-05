import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='addEventListener, clientX, clientY, getBoundingClientRect, mouse position' />
</Helmet>
<Markdown
    content={`
以下代码计算鼠标相对于 \`clicked\` 元素的位置: 

~~~ javascript
ele.addEventListener('mousedown', function(e) {
    // 获取到 target 属性
    const target = e.target;

    // 从 target 中获取到元素的大小
    const rect = target.getBoundingClientRect();

    // 鼠标的相对位置
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
});
~~~
`}
/>
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'drag-and-drop-element-in-a-list',
        'drag-and-drop-table-column',
        'drag-and-drop-table-row',
        'get-the-position-of-an-element-relative-to-another',
        'get-the-position-of-an-element-relative-to-the-document',
        'make-a-draggable-element',
    ]}
/>
</>
    );
};
