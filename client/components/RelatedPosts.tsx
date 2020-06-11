import React from 'react';

import PostList from '../constants/PostList-zh';
import PostItem from './PostItem';

interface RelatedPostsProps {
    slugs: string[];
    relatedTitle?: string;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ slugs, relatedTitle = '可能有用' }) => {
    const posts = PostList.filter((post) => slugs.indexOf(post.slug) >= 0);
    return (
        <>
            <h2 className='text-2xl sm:text-3xl mb-4 mt-8'>{relatedTitle}</h2>
            <ul>
                {
                    posts.map((post) => {
                        return (
                            <PostItem
                                key={post.slug}
                                post={post}
                                renderTitle={title => title}
                            />
                        );
                    })
                }
            </ul>
        </>
    );
};

export default RelatedPosts;
