import React from 'react'
import NavBar from '../containers/header'
import SideNav from '../sideBar/sideNav'
import ReactTable from './component/table_card'

import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md'


export default function MyDependants() {

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
          Header: 'Card',
          accessor: 'card_type',
        },
        {
          Header: 'Relation',
          accessor: 'relation',
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
          lastname : 'Doe',
          age: 30,
          email: 'john.doe@example.com',
          phone: '555-555-5555',
          card_type: 'Children Card',
          city: 'Anytown',
          relation: 'children',
          country: 'USA',
        },
        {
          firstname: 'Cotton',
          lastname : 'Zedeck',
          age: 30,
          email: 'john.doe@example.com',
          phone: '555-555-5555',
          card_type: 'Student Card',
          city: 'Anytown',
          relation: 'brother',
          country: 'USA',
        },
        // add more rows as needed
      ];

  return (
    <div>
        <div className="flex justify-between w-full">
            <SideNav />
            <div className="w-full bg-white">
                <NavBar />

                <div className='w-11/12 mx-auto py-2'>
                    <div className='text-2xl font-bold text-center text-sky-600'>My Dependants</div>
                    <ReactTable cols={columns} data={data} />
                </div>
            </div>
        </div>
    </div>
  )
}
