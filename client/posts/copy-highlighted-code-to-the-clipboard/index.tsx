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
            addEventListener, addRange, copy text clipboard, createRange, execCommand,
            getRangeAt, getSelection, rangeCount, removeAllRanges, selectNodeContents,
            window get selection
        `}
                />
            </Helmet>
            <Markdown
                content={PostInfo}
            />
            <Demo src='/demo/copy-highlighted-code-to-the-clipboard/index.html' />
            <RelatedPosts
                slugs={[
                    'attach-or-detach-an-event-handler',
                    'copy-text-to-the-clipboard',
                    'get-the-selected-text',
                    'paste-as-plain-text',
                    'save-and-restore-the-text-selection',
                    'select-the-text-content-of-an-element',
                ]}
            />
        </>
    );
};
