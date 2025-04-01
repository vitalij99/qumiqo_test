import { Post } from '@/types';
import React from 'react';

import './postModal.scss';
import AuthorInfo from '@/app/_components/AuthorInfo/AuthorInfo';

const PostModal = ({
  modalPost,
  handleOpenModal,
}: {
  modalPost: Post | undefined;
  handleOpenModal: (id: string | undefined) => void;
}) => {
  if (!modalPost) {
    return null;
  }

  return (
    <>
      <div className="modal-button" onClick={() => handleOpenModal(undefined)}>
        <div className="modal-wrapper">
          <h3>{modalPost.title}</h3>
          <p>{modalPost.categories[0].updatedAt}</p>
          <AuthorInfo authorInfo={modalPost.author} />
        </div>
      </div>
    </>
  );
};

export default PostModal;
