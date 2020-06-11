import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';
import PostInfo from './post.md';

export default () => {
    return (
        <>
            <Helmet>
                <meta name='keywords' content='check code run browser, detect browser' />
            </Helmet>
            <Markdown
                content={PostInfo}
            />
            <RelatedPosts
                slugs={[
                    'detect-internet-explorer-browser',
                    'detect-mac-os-browser',
                    'detect-mobile-browsers',
                ]}
            />
        </>
    );
};
