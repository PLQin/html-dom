import React from 'react';
import { Helmet } from 'react-helmet';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';
import PostInfo from './post.md';

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
    content={PostInfo}
/>
<Demo src='/demo/create-an-image-comparison-slider/index.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'create-a-range-slider',
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
