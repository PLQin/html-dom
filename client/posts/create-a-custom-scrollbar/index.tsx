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
                <meta
                    name='keywords'
                    content={`
            custom scrollbar, drag to scroll, fake scrollbar, scrollbar-color, scrollbar-width,
            webkit-scrollbar, webkit-scrollbar-track, webkit-scrollbar-thumb,
        `}
                />
            </Helmet>
            <Markdown
                content={PostInfo}
            />
            <Demo src='/demo/create-a-custom-scrollbar/index.html' />
            <RelatedPosts
                slugs={[
                    'attach-or-detach-an-event-handler',
                    'determine-the-height-and-width-of-an-element',
                    'drag-to-scroll',
                    'position-an-element-absolutely-to-another-element',
                ]}
            />
        </>
    );
};
