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
                    'calculate-the-size-of-scrollbar',
                    'scale-a-text-to-fit-inside-of-an-element',
                ]}
            />
        </>
    );
};
