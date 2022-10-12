import React from 'react';
import ReactPaginate from 'react-paginate';

type Props = {
  totalPages: number,
  handlePagination: (selectedItem: { selected: number; }) => void,
}
export default function Pagination({ totalPages, handlePagination }: Props) {
  const paginationStyles = 'sm:px-3 px-1.5 sm:py-2 py-1 border border-gray-300 rounded hover:bg-gray-100 sm:text-base text-xs';
  return (
    <div className='flex justify-center py-3'>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePagination}
        containerClassName={'space-x-1 flex'}
        pageClassName={paginationStyles}
        previousClassName={paginationStyles}
        nextClassName={paginationStyles}
        breakClassName={paginationStyles}
        activeClassName={'px-3 py-2 border border-blue-500 rounded bg-blue-500 text-white'}
      /> 
    </div>
  );
}
