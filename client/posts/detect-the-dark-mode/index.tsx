import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';
import PostInfo from './post.md';

export default () => {
    return (
        <>
            <Helmet>
                <meta name='keywords' content='detect dark mode, prefers-color-scheme' />
            </Helmet>
            <Markdown
                content={PostInfo}
            />
            <RelatedPosts
                slugs={[
                    'detect-mobile-browsers',
                ]}
            />
        </>
    );
};
