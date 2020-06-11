import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import PostList from '../constants/PostList-zh';
import { slugify, unslugify } from '../helpers/slugify';
import Layout from './Layout';

interface PostLayoutProps {
    slug: string;
}

const PostLayout: React.FC<PostLayoutProps> = ({ children, slug }) => {
    const numTasks = PostList.length;
    const index = PostList.findIndex((post) => post.slug === slug);
    const title = unslugify(slug);
    const zhTitle = PostList.find((item) => {
        if ((item.slugZh || item.slug) && item.slug === slug) {
            return item;
        }
    });

    useEffect(() => {
        function TurnPage(e: any) {
            if (e.keyCode === 39) {
                window.location.href = slugify(PostList[index + 1].slug)
            }
            if (e.keyCode === 37) {
                window.location.href = slugify(PostList[index - 1].slug)
            }
        }

        document.addEventListener('keydown', TurnPage);

        return () => {
            document.removeEventListener('keydown', TurnPage)
        }
    }, []);

    return (
        <Layout>
            <Helmet>
                <title>HTML DOM - {zhTitle.slugZh || title}</title>
                <meta name='description' content={zhTitle.slugZh || title} />
            </Helmet>

            <div className='mt-32 text-center'>
                <span className='bg-black text-white text-3xl px-3 py-2 rounded'>{index + 1}/{numTasks}</span>
            </div>
            <h1 className='font-bold mt-4 mb-4 text-center text-3xl lg:text-4xl px-1'>{zhTitle.slugZh || title}</h1>

            <div className="mb-12 text-center">
                <a
                    className="text-2xl bg-gray-400 px-4 py-2"
                    href={`https://github.com/PLQin/html-dom/blob/master/client/posts/${slug}/index.tsx`}
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                >
                    编辑这个页面
                </a>
            </div>

            <div className='mb-4'>
                {children}
            </div>
            {index > 0 && (
                <div className='mb-2'>
                    <Link
                        className='text-xl sm:text-2xl'
                        to={`/${slugify(PostList[index - 1].slug)}`}
                        title={unslugify(PostList[index - 1].slug)}
                    >
                        ← {PostList[index - 1].slugZh || unslugify(PostList[index - 1].slug)}
                    </Link>
                </div>
            )}
            {index < numTasks - 1 && (
                <div className='mb-2 text-right'>
                    <Link
                        className='text-xl sm:text-2xl'
                        to={`/${slugify(PostList[index + 1].slug)}`}
                        title={PostList[index + 1].slugZh || unslugify(PostList[index + 1].slug)}
                    >
                        {PostList[index + 1].slugZh || unslugify(PostList[index + 1].slug)} →

                    </Link>
                </div>
            )}
        </Layout>
    );
};



export default PostLayout;
