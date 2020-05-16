import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import Ad from '../components/Ad';
import PostItem from '../components/PostItem';
import PostList from '../constants/PostList-zh';
import Layout from './Layout';

const HomePage = () => {
    const [totalStars, setTotalStars] = useState(0);

    useEffect(() => {
        fetch('https://api.github.com/repos/phuoc-ng/html-dom')
            .then(res => res.json())
            .then(data => setTotalStars(data.stargazers_count))
            .catch(console.log);
    });

    return (
        <Layout>
            <Helmet>
                <title>HTML DOM - 用原生JavaScript操作HTML_DOM</title>
                <meta name='description' content='用原生JavaScript操作HTML_DOM' />
            </Helmet>

            <h1 className='font-bold mt-32 text-center text-2xl sm:text-4xl px-1'>使用原生JS操作DOM</h1>
            <h4 className='font-light mb-16 text-xl text-center italic'>仅适用于现代浏览器或IE11+</h4>

            <div className="mb-12 text-center">
                <a
                    className="text-2xl bg-gray-400 px-4 py-2"
                    href="https://github.com/PLQin/html-dom"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    GitHub ∙ {totalStars} ★
                </a>
            </div>
            <div className='ml-auto mr-auto max-w-4xl'>
                <ul>
                    {
                        PostList.map((post, index) => {
                            return (
                                <PostItem
                                    key={post.slug}
                                    post={post}
                                    renderTitle={(title) => `${index + 1} — ${title}`}
                                />
                            );
                        })
                    }
                </ul>
            </div>
        </Layout>
    );
};

export default HomePage;
