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
                    'export-a-table-to-csv',
                    'remove-an-element',
                    'trigger-an-event',
                ]}
            />
        </>
    );
};
