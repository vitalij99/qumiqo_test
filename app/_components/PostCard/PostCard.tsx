import { Post } from '@/types';
import React from 'react';
import AuthorInfo from '../AuthorInfo/AuthorInfo';
import Image from 'next/image';
import './postcard.scss';

const BASE_Link = 'https://api.qumiqo.com';
const PostCard = ({ post }: { post: Post }) => {
  const { author, preview } = post;
  return (
    <li className="postcard">
      <AuthorInfo authorInfo={author} />
      <Image
        className="postcard-image"
        width={323}
        height={270}
        src={`${BASE_Link}${preview.thumbnail.filename}`}
        alt=""
      />
    </li>
  );
};

export default PostCard;
