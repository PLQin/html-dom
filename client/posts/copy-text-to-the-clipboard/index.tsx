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
        'copy-highlighted-code-to-the-clipboard',
        'paste-as-plain-text',
        'remove-an-element',
    ]}
/>
</>
    );
};
