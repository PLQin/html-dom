import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import PostList from '../constants/PostList';
import { unslugify } from '../helpers/slugify';
import Layout from './Layout';

const HomePage = () => {
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
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                >
                    GitHub
                </a>
            </div>

            <div className='ml-auto mr-auto max-w-4xl'>
                <ul>
                {
                    PostList.map((post, index) => {
                        const idx = (index < 9) ? `0${index + 1}` : `${index + 1}`;
                        return (
                            <li key={post.slug} className='mb-4'>
                                <Link
                                    to={`/${post.slug}`}
                                    target='_blank'
                                    className='bg-gray-200 px-2 py-1 flex items-center justify-between'
                                >
                                    <span className='mr-2'>{idx} — {unslugify(post.slug)}</span>
                                    <span
                                        className={`
                                            p-1 text-sm text-white rounded
                                            ${post.level === 'Basic' ? 'bg-gray-600' : ''}
                                            ${post.level === 'Intermediate' ? 'bg-blue-600' : ''}
                                            ${post.level === 'Advanced' ? 'bg-red-600' : ''}
                                        `}
                                    >
                                        {post.level.toLowerCase()}
                                    </span>
                                </Link>
                            </li>
                        );
                    })
                }
                </ul>
            </div>
        </Layout>
    );
};

export default HomePage;
