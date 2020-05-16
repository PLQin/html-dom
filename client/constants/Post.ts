interface Post {
    category: 'Basic' | 'Intermediate' | 'Advanced' | 'Tip';
    categoryZh?: string;
    slug: string;
    slugZh?: string;
}

export default Post;
