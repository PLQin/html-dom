import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## 向元素中添加一个 class

Note that multiple parameters for the \`add()\` [isn't supported](https://caniuse.com/#feat=classlist) in IE 11.

~~~ javascript
ele.classList.add('class-name');

// 添加多个 class (IE 11不支持)
ele.classList.add('another', 'class', 'name');
~~~

## 从元素中删除一个 class

Note that multiple parameters for the \`remove()\` [isn't supported](https://caniuse.com/#feat=classlist) in IE 11.

~~~ javascript
ele.classList.remove('class-name');

// 删除多个class (IE 11不支持)
ele.classList.remove('another', 'class', 'name');
~~~

## 切换 class

~~~ javascript
ele.classList.toggle('class-name');
~~~
`}
/>
<RelatedPosts
    slugs={[
        'check-if-an-element-has-given-class',
        'drag-and-drop-element-in-a-list',
        'drag-and-drop-table-column',
        'drag-and-drop-table-row',
        'highlight-an-element-when-dragging-a-file-over-it',
        'resize-columns-of-a-table',
    ]}
/>
</>
    );
};
