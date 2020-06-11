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
        'check-if-the-native-date-input-is-supported',
        'copy-text-to-the-clipboard',
        'download-a-file',
        'drag-and-drop-element-in-a-list',
        'drag-and-drop-table-column',
        'drag-and-drop-table-row',
        'measure-the-width-of-given-text-of-given-font',
        'paste-as-plain-text',
        'print-an-image',
        'resize-an-image',
        'resize-columns-of-a-table',
        'resize-the-width-of-a-text-box-to-fit-its-content-automatically',
        'show-a-ghost-element-when-dragging-an-element',
        'show-or-hide-table-columns',
        'strip-html-from-a-given-text',
    ]}
/>
</>
    );
};
