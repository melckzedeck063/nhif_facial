import React from 'react'
import NavBar from '../containers/header'
import SideNav from '../sideBar/sideNav'
import ReactTable from './component/table_card'

import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md'

export default function PendingRequests() {

    const columns = [
        {
          Header: 'FirstName',
          accessor: 'firstname',
        },
        {
            Header: 'LastName',
            accessor: 'lastname',
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
          firstname: 'John',
          lastname: 'Doe',
          age: 30,
          email: 'john.doe@example.com',
          phone: '555-555-5555',
          address: '123 Main St',
          city: 'Anytown',
          country: 'USA',
        },
        {
          firstname: 'Melckzedeck',
          lastname : 'James',
          age: 30,
          email: 'john.doe@example.com',
          phone: '555-555-5555',
          address: '123 Main St',
          city: 'Anytown',
          country: 'USA',
        },
        // add more rows as needed
      ];

  return (
    <>
     <div className="flex w-full">
        <SideNav />
       <div className='w-full bg-white'>
          <NavBar  />
          <div className='py-2'>
            <div className="text-2xl text-sky-600 text-center font-bold">Pending Requests</div>
            <div className="w-11/12 mx-auto">
                <ReactTable cols={columns} data={data} />
            </div>
          </div>
        </div>
     </div>
    </>
  )
}
