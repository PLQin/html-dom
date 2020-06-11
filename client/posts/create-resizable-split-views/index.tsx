import React from 'react';
import { Helmet } from 'react-helmet';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';
import PostInfo from './post.md';
import PostInfoTwo from './post_two.md';

export default () => {
    return (
<>
<Helmet>
    <meta
        name='keywords'
        content={`
            addEventListener, data attribute, getBoundingClientRect, mousedown event, mousemove event,
            mouseup event, next sibling, nextElementSibling, previous sibling, previousElementSibling,
            set css style, split view
        `}
    />
</Helmet>
<Markdown
    content={PostInfo}
/>
<Demo src='/demo/create-resizable-split-views/index.html' />
<Markdown
    content={PostInfoTwo}
/>
<Demo src='/demo/create-resizable-split-views/direction.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'create-a-range-slider',
        'create-an-image-comparison-slider',
        'drag-to-scroll',
        'get-set-and-remove-data-attributes',
        'get-siblings-of-an-element',
        'loop-over-a-nodelist',
        'make-a-draggable-element',
        'set-css-style-for-an-element',
        'zoom-an-image',
    ]}
/>
</>
    );
};
