import React from 'react';
import { Post } from '@/types';
import PostCard from '@/app/_components/PostCard/PostCard';

import './postlist.scss';

interface PropsPostList {
  posts: { data: Post[]; meta: any };
}

const PostList = ({ posts }: PropsPostList) => {
  return (
    <ul className="post-list">
      {posts && posts.data.map(post => <PostCard key={post._id} post={post} />)}
    </ul>
  );
};

export default PostList;
