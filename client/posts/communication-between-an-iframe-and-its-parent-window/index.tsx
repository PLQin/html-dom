import React from 'react';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';
import PostInfo from './post.md';

export default () => {
    return (
        <>
            <Markdown
                content={PostInfo}
            />
            <Demo src='/demo/communication-between-an-iframe-and-its-parent-window' />
            <RelatedPosts
                slugs={[
                    'attach-or-detach-an-event-handler',
                ]}
            />
        </>
    );
};
