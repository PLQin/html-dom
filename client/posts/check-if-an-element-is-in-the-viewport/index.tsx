import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta
        name='keywords'
        content={`
            check element visible viewport, clientHeight, clientWidth, documentElement, getBoundingClientRect,
            innerHeight, innerWidth
        `}
    />
</Helmet>
<Markdown
    content={`
如果 \`ele\` 元素 在 viewport(可视区域) 中可见，以下函数则返回 \`true\` 

~~~ javascript
const isInViewport = function(ele) {
    const rect = ele.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
~~~
`}
/>
<RelatedPosts
    slugs={[
        'check-if-an-element-is-visible-in-a-scrollable-container',
        'get-the-document-height-and-width',
        'scroll-an-element-to-ensure-it-is-visible-in-a-scrollable-container',
    ]}
/>
</>
    );
};
