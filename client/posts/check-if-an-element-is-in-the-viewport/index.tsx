import React from 'react';
import { Helmet } from 'react-helmet';

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
            check element visible viewport, clientHeight, clientWidth, documentElement, getBoundingClientRect,
            innerHeight, innerWidth
        `}
                />
            </Helmet>
            <Markdown
                content={PostInfo}
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
