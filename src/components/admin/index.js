import React from 'react'
import { useState } from 'react';
// import { getAllOrders, getMyOrders } from '../../store/actions/order_actions';
// import * as BsIcons from 'react-icons/bs';
// import * as HiIcons from 'react-icons/hi'
import * as FaIcons from 'react-icons/fa'

// import { useDispatch, useSelector } from 'react-redux';
// import SideNav from '../sideBar/sideNav';

import DashCard  from './component/dashboard_cards';
import NewCard from './component/new_cards'

import DataChart from './charts/data_chart';
import PieChart from './charts/new_chart';
// import { dashboardSummary } from '../../store/actions/dashboard_actions';
import { useEffect } from 'react';
import NavBar from '../containers/header';
import SideNav from '../sideBar/sideNav'

function Dashboard() {
   
  const [userRole, setUserRole] = useState("");
  const [renders, setRenders] = useState(0);
//   const dispatch = useDispatch();

  setTimeout(() => {
    if (renders < 5) {
        setRenders( renders + 1 )
    }
}, 600);

// const dash_summary  = useSelector(state => state.Dashboards)
// console.log(dash_summary)

// useEffect(() => {
//   if (dash_summary && !dash_summary.dashboard_data && renders < 3 ) {
//       dispatch( dashboardSummary() )
//   }
// })

//   if (userRole === "") {
//     const storage = sessionStorage.getItem('authenticatedUser');
//     const { roles } = JSON.parse(storage);
//     // console.log(roles)
//     if (roles.includes("ADMIN" && "SELLER")) {
//       setUserRole("ADMIN")
//       return setUserRole("ADMIN")
//     }
//     else if (roles.includes("SELLER" && !"ADMIN")) {
//        return setUserRole("SELLER")
//     }

//   }

  


  return (
      <>
          <div>
              <div className="flex w-full"> 
          <SideNav />
          
          
          <div  className="w-full bg-slate-200">
            {/* <AdminHeader /> */}
            <NavBar  />
            
            <div className="w-full p-4 xl:p-5 lg:p-6 md:p-5 mx-auto py-12">
            <div className="mx-auto">
                {/* {
                  dash_summary && dash_summary.dashboard_data ? (
                    dash_summary && dash_summary.dashboard_data && dash_summary.dashboard_data.error === false ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-11/12 mx-auto mb-4">
                  <DashCard heading={"RECEIVED ORDERS"} data={12} />
                  <DashCard heading={"PENDING ORDERS"} data={12} />
                  <DashCard heading={"PROCESSED ORDERS"} data={12}/>
                  <DashCard heading={"DELIVERED ORDERS"} data={12}  />
                </div>
                     
                    ) : <> */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-11/12 mx-auto mb-4">
                  <DashCard heading={"RECEIVED REQUESTS"} data={0} />
                  <DashCard heading={"PENDING REQUESTS"} data={0} />
                  <DashCard heading={"PROCESSED REQUESTS"} data={0}/>
                  <DashCard heading={"DELIVERED REQUESTS"} data={0}  />
                </div>
                      {/* </> */}
                  {/* ) :  null
                } */}
                
             
                     
                      {/* {
                        dash_summary && dash_summary.dashboard_data ? (
                       dash_summary && dash_summary.dashboard_data && dash_summary.dashboard_data.error === false ? (
                          <>
                  <div className="grid xsm:grid-cols-1  gap-2 sm:grid-cols-1 grid-cols-2 mt-2 w-11/12 mx-auto">
                    <div className="mb-3">
                      <PieChart content={dash_summary && dash_summary.dashboard_data? dash_summary.dashboard_data.data.graphData.pieChartData : ""} />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2 w-11/12 mx-auto">
                    <NewCard data={'$28.4'} heading={"Sales"} />
                    <NewCard data={64} heading={"Orders"} />
                  </div>
                  
                  </div>
                  <div className="py-6 bg-white shadow-xl rounded px-1 text-white w-11/12 mx-auto my-6">
                    <DataChart  content={dash_summary && dash_summary.dashboard_data? dash_summary.dashboard_data.data.graphData.lineChartData : ""} />
                  </div>
                  </>
                    ) : */}
                      <div className="grid grid-cols-1 gap-2 w-11/12 mx-auto">
                          <NewCard data={'28.4'} heading={"STAFFS"} />
                          <NewCard data={64} heading={"CUSTOMERS"} />
                        </div>
                        {/* ) :  null 
                     } */}
                  
                  {/* <div className="py-6 bg-white shadow-xl rounded px-1 text-white w-11/12 mx-auto my-6">
                  </div> */}
                  

               </div>
              </div>
                  </div>
            </div>
          </div> 
      </>
  )
}

export default Dashboard
