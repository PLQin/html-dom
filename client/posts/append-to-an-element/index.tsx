import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
将 \`ele\` 元素添加到 \`target\` 元素的末尾: 

~~~ javascript
target.appendChild(ele);
~~~
`}
/>
<RelatedPosts
    slugs={[
        'calculate-the-size-of-scrollbar',
        'copy-text-to-the-clipboard',
        'download-a-file',
        'insert-an-element-after-or-before-other-element',
        'insert-given-html-after-or-before-an-element',
        'prepend-to-an-element',
        'print-an-image',
        'resize-columns-of-a-table',
        'show-a-ghost-element-when-dragging-an-element',
        'sort-a-table-by-clicking-its-headers',
    ]}
/>
</>
    );
};
