import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
~~~ javascript
const cloned = ele.cloneNode(true);
~~~

使用 \`cloneNode(true)\` 方法将深度复制指定元素。在上面的示例代码中，原始元素 ele 的所有属性与子元素都将被 \`克隆\`。

传递 \`false\` 只会复制一个元素，该元素只会保留所有的属性和原始元素: 

~~~ javascript
const cloned = ele.cloneNode(false);
~~~
`}
/>
<RelatedPosts
    slugs={[
        'drag-and-drop-table-column',
        'drag-and-drop-table-row',
        'print-an-image',
    ]}
/>
</>
    );
};
