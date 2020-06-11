import React from 'react';
import { Helmet } from 'react-helmet';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';
import PostInfo from './post.md';

export default () => {
    return (
        <>
            <Helmet>
                <meta name='keywords' content='display number of characters, maxlength attribute' />
            </Helmet>
            <Markdown
                content={PostInfo}
            />
            <Demo src='/demo/count-the-number-of-characters-of-a-textarea/index.html' />
            <RelatedPosts
                slugs={[
                    'attach-or-detach-an-event-handler',
                    'get-or-set-the-html-of-an-element',
                    'get-set-and-remove-attributes',
                ]}
            />
        </>
    );
};
