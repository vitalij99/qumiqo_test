import React from 'react';
import Image from 'next/image';
import { Post } from '@/types';

import PostCardInfo from '@/app/_components/PostCardInfo/PostCardInfo';
import './postCard.scss';

const BASE_Link = 'https://api.qumiqo.com';
const PostCard = ({
  post,
  handleOpenModal,
}: {
  post: Post;
  handleOpenModal: (id: string) => void;
}) => {
  const { author, preview, _id } = post;
  return (
    <li className="postcard">
      <PostCardInfo authorInfo={author} />
      <Image
        className="postcard-image"
        width={323}
        height={270}
        onClick={() => handleOpenModal(_id)}
        src={`${BASE_Link}${preview.thumbnail.filename}`}
        alt=""
      />
    </li>
  );
};

export default PostCard;
