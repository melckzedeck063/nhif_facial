import React, {useState, useEffect} from 'react'
import NavBar from '../containers/header'
import SideNav from '../sideBar/sideNav'
import ReactTable from './component/table_card'

import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { getAllStaffs } from '../../store/actions/user_actions';

export default function AllStaffs() {

  const [renders, setRenders] =  useState(0);
  const dispatch = useDispatch();


  const staffs  =  useSelector(state  => state.users);
  // console.log(staffs.staffs);

  setTimeout(() => {
    if(renders  < 5){
      setRenders(renders => renders + 1);
    }
  }, 1000);

  useEffect(() =>{
    if(staffs && staffs.staffs &&  staffs.staffs.length < 1 &&  renders <= 3){
       dispatch( getAllStaffs() )
    }
  })

    const columns = [
        {
          Header: 'FirstName',
          accessor: 'firstName',
        },
        {
            Header: 'LastName',
            accessor: 'lastName',
          },
       
        {
          Header: 'Email',
          accessor: 'email',
        },
        {
          Header: 'Phone',
          accessor: 'telephone',
        },
        {
          Header: 'Position',
          accessor: 'role',
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
          firstname: '',
          lastname: '',
          age: 30,
          email: 'Loading',
          phone: '',
          postion: '',
          city: '',
          country: '',
        },
        
      ];

  return (
    <>
     <div className="flex w-full">
        <SideNav />
       <div className='w-full bg-white'>
          <NavBar  />
          <div className='py-2'>
            <div className="text-2xl text-sky-600 text-center font-bold">Our Staffs</div>
            {
              staffs.staffs?.data?.data ?(
              <div className="w-11/12 mx-auto">
                <ReactTable cols={columns} data={staffs.staffs.data.data} />
            </div>
              )
              : 
              <>
                <div className="w-11/12 mx-auto">
                <ReactTable cols={columns} data={data} />
            </div>
            </>
            }
          </div>
        </div>
     </div>
    </>
  )
}
