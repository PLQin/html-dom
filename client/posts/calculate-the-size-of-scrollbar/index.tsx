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
                    'append-to-an-element',
                    'create-an-element',
                    'determine-the-height-and-width-of-an-element',
                    'remove-an-element',
                ]}
            />
        </>
    );
};
