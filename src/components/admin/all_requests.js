import React from 'react'
import NavBar from '../containers/header'
import SideNav from '../sideBar/sideNav'
import ReactTable from './component/table_card'

export default function AllRequests() {
  return (
    <>
     <div className="flex w-full">
        <SideNav />
       <div className='w-full bg-white'>
          <NavBar  />
          <div className='py-2'>
            <div className="text-2xl text-sky-600 text-center font-bold">All Requests</div>
            <div className="w-11/12 mx-auto">
                <ReactTable />
            </div>
          </div>
        </div>
     </div>
    </>
  )
}
