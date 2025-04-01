import AuthorInfo from '@/app/_components/AuthorInfo/AuthorInfo';
import { Author } from '@/types';
import Image from 'next/image';

import React from 'react';

const PostCardInfo = ({ authorInfo }: { authorInfo: Author }) => {
  return (
    <div className="author-info">
      <AuthorInfo authorInfo={authorInfo} />
      <div className="smile-wrapper">
        <Image
          className="smile-image"
          width={16}
          height={16}
          alt="smile"
          src="/post/smile.svg"
        />
      </div>
    </div>
  );
};

export default PostCardInfo;
