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
                    'attach-or-detach-an-event-handler',
                    'check-if-an-element-is-a-descendant-of-another',
                ]}
            />
        </>
    );
};
