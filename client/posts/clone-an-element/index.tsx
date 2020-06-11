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
                    'drag-and-drop-table-column',
                    'drag-and-drop-table-row',
                    'print-an-image',
                ]}
            />
        </>
    );
};
