import React from 'react';
import Image from 'next/image';
import { Author } from '@/types';
import Link from 'next/link';
import './authorInfo.scss';

const AuthorInfo = ({ authorInfo }: { authorInfo: Author }) => {
  return (
    <div className="author-info">
      <div className="author-info-image">
        <Link href="/">
          <Image
            className="author-image"
            width={30}
            height={30}
            alt="user"
            src="/post/user.png"
          />
        </Link>
        <Link href="/">
          <div className="author-info-wrapper">
            <span className="author-name">{authorInfo.name}</span>
            <span className="author-email">{authorInfo.email}</span>
          </div>
        </Link>
      </div>
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

export default AuthorInfo;
