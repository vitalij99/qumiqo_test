import { Post } from '@/types';
import React from 'react';

const PostCard = ({ post }: { post: Post }) => {
  const { _id: id } = post;
  return <li></li>;
};

export default PostCard;
