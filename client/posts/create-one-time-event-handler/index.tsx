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
                    'attach-event-handlers-inside-other-handlers',
                    'attach-or-detach-an-event-handler',
                    'show-a-custom-context-menu-at-clicked-position',
                ]}
            />
        </>
    );
};
