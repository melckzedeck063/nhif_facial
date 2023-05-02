import React from 'react';
import *  as FaIcons from 'react-icons/fa';

function DashCards({heading,data}) {
  return (
      <>
        <div className="bg-slate-50 p-6 shadow-md rounded-md">
            <div className="flex justify-between mx-auto">
                 <div className="">
                      <p className="text-sm">{ heading }</p>
                    <p className="flex space-x-4">
                          <span className="font-bold text-xl"> { data } </span>
                          <span className="text-green_deep mt-1">Requests</span>
                    </p>
                 </div>
                 <div className="bg-sky-600 p-1 rounded shadow">
                    <FaIcons.FaUser className='font-1xl text-white m-2'  />
                 </div>
            </div>
        </div>
      </>
  )
}

export default DashCards