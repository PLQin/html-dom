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
            check element visible container, clientHeight, offsetTop, scrollTop
        `}
                />
            </Helmet>
            <Markdown
                content={PostInfo}
            />
            <RelatedPosts
                slugs={[
                    'check-if-an-element-is-in-the-viewport',
                    'scroll-an-element-to-ensure-it-is-visible-in-a-scrollable-container',
                ]}
            />
        </>
    );
};
