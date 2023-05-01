import React from 'react'
import * as FaIcons from 'react-icons/fa';

function NewCards({data, heading}) {
  return (
      <>
          <div className="bg-slate-50 p-4 shadow-md rounded-md">
            <div className="w-11/12 mx-auto">
                <div className="flex space-x-4">
                  <div className="bg-sky-600 p-2 rounded shadow">
                     <FaIcons.FaUser className='font-2xl text-white m-2'  />
                  </div>
                  <div className="mt-2 font-medium">
                      {heading}
                  </div>
                </div>
                 <div className="py-1">
                    <div className="font-bold text-3xl text-slate-800"> {data}K</div>
                    <div className="h-2 bg-sky-300 rounded">
                          <div className={`bg-sky-700 rounded w-${data/4} p-1`}></div>
                    </div>
                 </div>
            </div>
        </div>
      </>
  )
}

export default NewCards