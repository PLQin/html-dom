import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';
import PostInfo from './post.md';

export default () => {
    return (
        <>
            <Markdown
                content={PostInfo}
            />
            <RelatedPosts
                slugs={[
                    'get-css-styles-of-an-element',
                    'get-the-first-scrollable-parent-of-an-element',
                ]}
            />
        </>
    );
};
