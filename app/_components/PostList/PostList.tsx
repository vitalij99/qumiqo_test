'use client';
import React, { useState } from 'react';
import { Post } from '@/types';
import PostCard from '@/app/_components/PostCard/PostCard';
import PostModal from '@/app/_components/PostModal/PostModal';

import './postlist.scss';

interface PropsPostList {
  posts: { data: Post[] };
}

const PostList = ({ posts }: PropsPostList) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPost, setModalPost] = useState<Post | undefined>();

  const togleModal = (id: string | undefined) => {
    if (!id) {
      setIsModalOpen(false);
      return;
    }
    setIsModalOpen(prev => !prev);
    const findPost = posts.data.find(item => item._id === id);
    setModalPost(findPost);
  };

  return (
    <>
      <ul className="post-list">
        {posts &&
          posts.data.map(post => (
            <PostCard handleOpenModal={togleModal} key={post._id} post={post} />
          ))}
      </ul>
      {isModalOpen && (
        <PostModal handleOpenModal={togleModal} modalPost={modalPost} />
      )}
    </>
  );
};

export default PostList;
