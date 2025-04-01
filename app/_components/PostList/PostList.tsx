import { Post } from '@/types';
import React from 'react';
import PostCard from '../PostCard/PostCard';

interface PropsPostList {
  posts: { data: Post[]; meta: any };
}

const PostList = ({ posts }: PropsPostList) => {
  return (
    <ul>
      {posts && posts.data.map(post => <PostCard key={post._id} post={post} />)}
    </ul>
  );
};

export default PostList;
