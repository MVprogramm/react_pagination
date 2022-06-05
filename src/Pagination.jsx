import React from 'react';
import { ProgressPlugin } from 'webpack';

import './pagination.scss';

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage
}) => {
  const startPage = 1;
  const endPage = Math.ceil(totalItems / itemsPerPage);

  let isPrevPageAvailable;
  currentPage === startPage
    ? isPrevPageAvailable = false
    : isPrevPageAvailable = true;
 

  let isNextPageAvailable;
  currentPage === endPage
    ? isNextPageAvailable = false
    : isNextPageAvailable = true;
  
  return (
    <div className="pagination">
      <button 
        className="btn"
        onClick={goNext}
        disabled={isPrevPageAvailable}
      >
        { isPrevPageAvailable && '←' }
      </button>
      <span className="pagination__page">{ currentPage }</span>
      <button 
        className="btn"
        onClick={goPrev}
        disabled={isNextPageAvailable}
      >
        { isNextPageAvailable && '→' }
      </button>
  </div>
  )
};

export default Pagination;

