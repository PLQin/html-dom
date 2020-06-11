import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';
import PostInfo from './post.md';

export default () => {
    return (
        <>
            <Helmet>
                <meta name='keywords' content='navigator userAgent, check internet explorer browser' />
            </Helmet>
            <Markdown
                content={PostInfo}
            />
            <RelatedPosts
                slugs={[
                    'check-if-the-code-is-running-in-the-browser',
                    'detect-mac-os-browser',
                    'detect-mobile-browsers',
                ]}
            />
        </>
    );
};
