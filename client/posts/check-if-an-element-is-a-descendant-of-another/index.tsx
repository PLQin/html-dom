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
                    'detect-clicks-outside-of-an-element',
                    'get-the-parent-node-of-an-element',
                ]}
            />
        </>
    );
};
