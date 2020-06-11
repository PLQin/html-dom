import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';
import PostInfo from './post.md';

export default () => {
    return (
        <>
            <Helmet>
                <meta name='keywords' content='addEventListener, attach event handler, detach event handler, removeEventListener' />
            </Helmet>
            <Markdown
                content={PostInfo}
            />
            <RelatedPosts
                slugs={[
                    'create-a-custom-scrollbar',
                    'create-a-range-slider',
                    'create-an-image-comparison-slider',
                    'create-resizable-split-views',
                    'drag-to-scroll',
                    'make-a-draggable-element',
                    'make-a-resizable-element',
                    'print-an-image',
                    'resize-columns-of-a-table',
                    'show-a-custom-context-menu-at-clicked-position',
                    'show-or-hide-table-columns',
                ]}
                relatedTitle="你可能会在其他文中看到技巧提示: "
            />
            <RelatedPosts
                slugs={[
                    'attach-or-detach-an-event-handler',
                    'create-one-time-event-handler',
                ]}
            />
        </>
    );
};
