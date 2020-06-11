import React from 'react';

import Markdown from '../../components/Markdown';
import PostInfo from './post.md';

export default () => {
    return (
        <Markdown
            content={PostInfo}
        />
    );
};
