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
    <meta name='keywords' content='addEventListener, 事件绑定, input event, 表单事件, keypress event, preventDefault, selectionEnd, selectionStart, setSelectionRange' />
</Helmet>
<Markdown
    content={PostInfo}
/>
<Demo src='/demo/allow-to-enter-particular-characters-only' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'prevent-the-default-action-of-an-event',
    ]}
/>
</>
    );
};
