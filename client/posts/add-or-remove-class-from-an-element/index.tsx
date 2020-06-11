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
                    'check-if-an-element-has-given-class',
                    'drag-and-drop-element-in-a-list',
                    'drag-and-drop-table-column',
                    'drag-and-drop-table-row',
                    'highlight-an-element-when-dragging-a-file-over-it',
                    'resize-columns-of-a-table',
                    'show-a-custom-context-menu-at-clicked-position',
                ]}
            />
        </>
    );
};
