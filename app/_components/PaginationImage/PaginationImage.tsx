import React from 'react';
import './paginationImage.scss';

const PAGINATION = [1, 2, 3, 4];

const PaginationImage = ({ action = 2 }) => {
  return (
    <div className="pagination-image_wrapper">
      {PAGINATION.map(item => (
        <span
          className={`pagination-item ${action === item ? 'action' : ''}`}
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default PaginationImage;
