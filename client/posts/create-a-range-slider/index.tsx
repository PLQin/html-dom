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
            addEventListener, getBoundingClientRect, mousedown event, mousemove event, mouseup event, 
            previous sibling, previousElementSibling, next sibling, nextElementSibling, range input,
            range slider, set css style, set element width
        `}
                />
            </Helmet>
            <Markdown
                content={PostInfo}
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
