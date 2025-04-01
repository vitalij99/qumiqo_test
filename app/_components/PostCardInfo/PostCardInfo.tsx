import React from 'react';
import Image from 'next/image';
import AuthorInfo from '@/app/_components/AuthorInfo/AuthorInfo';
import { Author } from '@/types';

import './postCardInfo.scss';

const PostCardInfo = ({ authorInfo }: { authorInfo: Author }) => {
  return (
    <div className="author-info">
      <AuthorInfo authorInfo={authorInfo} />
      <div className="circle-wrapper">
        <Image width={16} height={16} alt="smile" src="/post/smile.svg" />
      </div>
    </div>
  );
};

export default PostCardInfo;
