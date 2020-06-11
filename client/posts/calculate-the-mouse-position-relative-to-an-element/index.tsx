import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';
import PostInfo from './post.md';

export default () => {
    return (
        <>
            <Helmet>
                <meta name='keywords' content='addEventListener, clientX, clientY, getBoundingClientRect, mouse position' />
            </Helmet>
            <Markdown
                content={PostInfo}
            />
            <RelatedPosts
                slugs={[
                    'attach-or-detach-an-event-handler',
                    'drag-and-drop-element-in-a-list',
                    'drag-and-drop-table-column',
                    'drag-and-drop-table-row',
                    'drag-to-scroll',
                    'get-the-position-of-an-element-relative-to-another',
                    'get-the-position-of-an-element-relative-to-the-document',
                    'make-a-draggable-element',
                    'show-a-custom-context-menu-at-clicked-position',
                    'show-or-hide-table-columns',
                ]}
            />
        </>
    );
};
