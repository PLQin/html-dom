import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';
import PostInfo from './post.md';

export default () => {
    return (
        <>
            <Helmet>
                <meta name='keywords' content='detect mobile browser, matchMedia, userAgent' />
            </Helmet>
            <Markdown
                content={PostInfo}
            />
            <RelatedPosts
                slugs={[
                    'check-if-the-code-is-running-in-the-browser',
                    'check-if-the-touch-events-are-supported',
                    'detect-internet-explorer-browser',
                    'detect-mac-os-browser',
                    'detect-the-dark-mode',
                ]}
            />
        </>
    );
};
