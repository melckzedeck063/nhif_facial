import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import ReactPaginate from 'react-paginate';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md'


const ReactTable = ({cols,data}) => {

  // console.log(cols);
  
  const columnsMemo = useMemo(() => cols, []);
  const dataMemo = useMemo(() => data, []);

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, pageCount, gotoPage, nextPage, previousPage, canNextPage, canPreviousPage } = useTable({
    columns: columnsMemo,
    data: dataMemo,
    initialState: { pageIndex: 0 },
  }, usePagination);

  const handlePageChange = (selectedItem) => {
    gotoPage(selectedItem.selected);
  };

  return (
    <>
      <div className='shadow-md rounded-md py-2 bg-slate-50'>
      <table {...getTableProps()} className="table-auto w-full">
        <thead className="bg-sky-600">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="p-2 text-left text-white">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className='border-b border-slate-200'>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="p-2 font-light text-sm">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-end my-4">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel="..."
          breakClassName="ml-3"
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName="flex items-center"
          previousLinkClassName="px-3 py-1 border rounded hover:bg-gray-200"
          nextLinkClassName="px-3 py-1 border rounded hover:bg-gray-200 ml-3"
          disabledClassName="opacity-50 pointer-events-none"
          activeClassName="font-bold"
        />
      </div>
      </div>
    </>
  );
};

export default ReactTable