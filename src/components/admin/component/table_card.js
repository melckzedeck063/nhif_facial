import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import ReactPaginate from 'react-paginate';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md'

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Age',
    accessor: 'age',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
  {
    Header: 'Address',
    accessor: 'address',
  },
  {
    Header: 'City',
    accessor: 'city',
  },
  {
    Header: 'State',
    accessor: 'state',
  },
  {
    Header: 'Country',
    accessor: 'country',
  },
  {
    Header: 'Actions',
    accessor: 'actions',
    Cell: () => (
      <>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded mr-2">
           <FaIcons.FaEdit className='font-2xl text-white m-1'  />
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 rounded">
            <MdIcons.MdDelete className='font-2xl text-white m-1'  />
        </button>
      </>
    ),
  },
];

const data = [
  {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    phone: '555-555-5555',
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    country: 'USA',
  },
  {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    phone: '555-555-5555',
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    country: 'USA',
  },
  // add more rows as needed
];

const ReactTable = () => {
  const columnsMemo = useMemo(() => columns, []);
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
              <tr {...row.getRowProps()} className='border-b border-slate-100'>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="p-2 font-light">
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