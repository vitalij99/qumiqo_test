import Image from 'next/image';
import React from 'react';

import { Post } from '@/types';

import './postModal.scss';
import PaginationImage from '@/app/_components/PaginationImage/PaginationImage';
const BASE_Link = 'https://api.qumiqo.com';
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

  const date = new Date(modalPost.categories[0].updatedAt);

  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
  });

  return (
    <>
      <div className="modal-button" onClick={() => handleOpenModal(undefined)}>
        <div className="modal-wrapper" onClick={e => e.stopPropagation()}>
          <div className="modal-wrapper_info">
            <div>
              <h3 className="modal-title">{modalPost.title}</h3>
              <p className="modal-info">
                {formattedDate} • {modalPost.categories[0].name}
              </p>
            </div>

            <div className="modal-btn_wrapper">
              <button className="circle-wrapper btn-modal">
                <Image
                  width={18}
                  height={18}
                  alt="share"
                  src="./modal/share.svg"
                />
              </button>
              <button className="circle-wrapper btn-modal">
                <Image
                  width={18}
                  height={18}
                  alt="info circle"
                  src="./modal/info-circle.svg"
                />
              </button>
            </div>
          </div>
          <Image
            className="modal-image"
            width={764}
            height={612}
            alt={modalPost.title}
            src={`${BASE_Link}${modalPost.preview.thumbnail.filename}`}
          />
          <div className="modal-futter">
            <div className="modal-image_wrapper">
              <Image
                className="modal-image_pagination"
                width={78}
                height={66}
                alt={modalPost.title}
                src={`${BASE_Link}${modalPost.preview.thumbnail.filename}`}
              />
              <Image
                className="modal-image_pagination"
                width={78}
                height={66}
                alt={modalPost.title}
                src={`${BASE_Link}${modalPost.preview.thumbnail.filename}`}
              />
              <Image
                className="modal-image_pagination"
                width={78}
                height={66}
                alt={modalPost.title}
                src={`${BASE_Link}${modalPost.preview.thumbnail.filename}`}
              />
            </div>
            <PaginationImage />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostModal;
