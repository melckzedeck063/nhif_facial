import React, { useContext, useState } from 'react'
// import { Menus } from './menus'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io'
import * as BsIcons from 'react-icons/bs'
import * as BiIcons from 'react-icons/bi';
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as FiIcons  from 'react-icons/fi';

import image from '../../assets/images/NHIF_Official_Logo.png'
import { AuthContext } from '../../context';

function SideNav() {

  const [open, setOpen] = useState(true)
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subCategories, setSubCategories] = useState(false);
  const [subProducts, setSubProducts] = useState(false);
  const [subEvents, setSubEvents] = useState(false);
  const [subVendors, setSubVendors] = useState(false);
  const [subOrders, setSubOrders] = useState(false);
  const variants = {
    open: { x: "1%" },
    closed: { x: "1%" }
  }

  const [userRole, setUserRole] = useState("ADMIN");
  const navigate = useNavigate();

  const context = useContext(AuthContext);
  // console.log(context)
  
  const handleLogout = () => {
    context.handleLogout();
  }

  return (
    <>
      <motion.div
        animate={open ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <div className='shadow-3xl sticky top-0 z-40'>
          <div className={`pt-4 p-3 h-screen  bg-sky-600 backdrop-blur-sm ${open ? "w-44 xl:w-52 lg:w-52 duration-300" : "w-14 duration-300"}  text-gray-800 relative`}>
            <BsIcons.BsArrowLeft onClick={() => setOpen(!open)} className={`bg-white duration-300 text-slate-800 hover:font-bold hover:cursor-pointer rounded-full border border-cool-teal p-1 text-3xl absolute right-0.5 top-1 ${!open && "rotate-180"} `} />
            <div className="inline-flex mb-3 py-2 -ml-1 mt-2 space-x-2">
               <div className="h-12 w-12 mx-auto">
                 <img src={image} alt="" className={`${open? 'h-14 w-20 -mt-1' : 'h-10  w-12 mt-2 -ml-1'}`} />
                </div> 
              {/* <GiIcons.GiFarmTractor className={`bg-white ${!open ? "text-3xl font-medium ml-1 mt-1.5" : "text-4xl -ml-1"} rounded text-slate-700 cursor-pointer block float-left mr-2 ${open && "rotate-[360deg]"} duration-500`} /> */}
              <h1 className={`text-2xl mt-3 text-white font-bold origin-left ${!open && "scale-0"}`}>NHIF</h1>
            </div>
            <div className={`bg-light-white -ml-1 rounded-md flex items-center py-1 ${open ? "px-3" : "px-1"}`}>
              <BiIcons.BiSearch className={`font-bold text-xl text-white cursor-pointer block float-left ${open && "mr-1 text-lg"} ${!open && "text-2xl"}`} />
              <input type="search" placeholder='Search' className={`text-gray-100 text-base bg-transparent w-full focus:outline-none ${!open && "hidden"}`} />
            </div>
            <ul className="pt-1">

              <li className={`text-gray-800 py-2.5 space-x-1 text-sm hover:px-1  cursor-pointer hover:bg-light-white hover:text-gray-800 rounded-md mt-2`}>
                <Link style={{ textDecoration: "none" }} to='/dashboard' className="flex items-center hover:text-white no-underline text-gray-100 ">
                  <span className='text-xl block float-left pr-1'>
                    <MdIcons.MdDashboard />
                  </span>
                  <span className={`text-base flex-1 font-lightt ${!open && "hidden"}`}> Dashboard </span>
                </Link>
              </li>

              <li className={`text-gray-800 py-2.5 space-x-1 text-sm hover:px-1  cursor-pointer hover:bg-light-white hover:text-gray-800 rounded-md mt-2`}>
                <Link style={{ textDecoration: "none" }} to='#' className="flex items-center hover:text-white no-underline text-gray-100 ">
                  <span className='text-xl block float-left pr-1'>
                    <AiIcons.AiOutlineOrderedList />
                  </span>
                  <span className={`text-base flex-1 font-lightt ${!open && "hidden"}`}> Requests </span>
                  <IoIcons.IoMdArrowDropup className={`text-xl ${!open && "hidden"} ${!subVendors && "rotate-180"}`} onClick={() => setSubVendors(!subVendors)} />
                </Link>
              </li>
              {
                subVendors && open && (
                  <ul>
                    <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='/requests' className="no-underline hover:text-white text-gray-100"> All Requests </Link>
                    </li>
                    <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='/pending_requests' className="no-underline hover:text-white text-gray-100">Pending Requests </Link>
                    </li>
                    <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='/new_request' className="no-underline hover:text-white text-gray-100"> New Request </Link>
                    </li>
                  </ul>
                )
              }



              <li className={`text-gray-800 py-2.5 space-x-1 text-sm hover:px-1  cursor-pointer hover:bg-light-white hover:text-gray-800 rounded-md mt-2`}>
                <Link style={{ textDecoration: "none" }} to='#' className="flex items-center hover:text-white no-underline text-gray-100 ">
                  <span className='text-xl block float-left pr-1'>
                    <AiIcons.AiOutlineOrderedList />
                  </span>
                  <span className={`text-base flex-1 font-lightt ${!open && "hidden"}`}> Dependants </span>
                  <IoIcons.IoMdArrowDropup className={`text-xl ${!open && "hidden"} ${!subOrders && "rotate-180"}`} onClick={() => setSubOrders(!subOrders)} />
                </Link>
              </li>
              {
                subOrders && open && (
                  <ul>
                    <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='/dependants' className="no-underline hover:text-white text-gray-100"> My Dependants </Link>
                    </li>
                    <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='/new_dependant' className="no-underline hover:text-white text-gray-100"> Dependant Request  </Link>
                    </li>
                    
                  </ul>
                )
              }

              {/* <li className={`text-gray-800 py-2.5 space-x-1 text-sm hover:px-1  cursor-pointer hover:bg-light-white hover:text-gray-800 rounded-md mt-2`}>
                <Link style={{ textDecoration: "none" }} to='#' className="flex items-center hover:text-white no-underline text-gray-100 ">
                  <span className='text-xl block float-left pr-1'>
                    <MdIcons.MdCategory />
                  </span>
                  <span className={`text-base flex-1 font-lightt ${!open && "hidden"}`}> Categories </span>
                  <IoIcons.IoMdArrowDropup className={`text-xl ${!open && "hidden"} ${!subCategories && "rotate-180"}`} onClick={() => setSubCategories(!subCategories)} />
                </Link>
              </li>
              {
                subCategories && open && (
                  <ul>
                    <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='/all_categories' className="no-underline hover:text-white text-gray-100"> Product Categories </Link>
                    </li>
                    <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='/add_category' className="no-underline hover:text-white text-gray-100"> Post Categories </Link>
                    </li>
                    <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='/add_category' className="no-underline hover:text-white text-gray-100"> Event Categories </Link>
                    </li>
                  </ul>
                )
              } */}

              {/* <li className={`text-gray-800 py-2.5 space-x-1 text-sm hover:px-1  cursor-pointer hover:bg-light-white hover:text-gray-800 rounded-md mt-2`}>
                <Link style={{ textDecoration: "none" }} to='#' className="flex items-center hover:text-white no-underline text-gray-100 ">
                  <span className='text-xl block float-left pr-1'>
                    <FaIcons.FaProductHunt />
                  </span>
                  <span className={`text-base flex-1 font-lightt ${!open && "hidden"}`}> Verification </span>
                  <IoIcons.IoMdArrowDropup className={`text-xl ${!open && "hidden"} ${!subProducts && "rotate-180"}`} onClick={() => setSubProducts(!subProducts)} />
                </Link>
              </li>
              {
                subProducts && open && (
                  <ul>
                    <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='/product_list' className="no-underline hover:text-white text-gray-100"> Verify User </Link>
                    </li>
                    <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='/my-company-products' className="no-underline hover:text-white text-gray-100"> My Company Products </Link>
                    </li>
                    <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='/add_product' className="no-underline hover:text-white text-gray-100"> Active Products </Link>
                    </li>
                    <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='/add_product' className="no-underline hover:text-white text-gray-100"> Inactive Products </Link>
                    </li>
                  </ul>
                )
              } */}

              {/* <li className={`text-gray-800 py-2.5 space-x-1 text-sm hover:px-1  cursor-pointer hover:bg-light-white hover:text-gray-800 rounded-md mt-2`}>
                <Link style={{ textDecoration: "none" }} to='#' className="flex items-center hover:text-white no-underline text-gray-100 ">
                  <span className='text-xl block float-left pr-1'>
                    <MdIcons.MdEventNote />
                  </span>
                  <span className={`text-base flex-1 font-lightt ${!open && "hidden"}`}> Events & Posts </span>
                  <IoIcons.IoMdArrowDropup className={`text-xl ${!open && "hidden"} ${!subEvents && "rotate-180"}`} onClick={() => setSubEvents(!subEvents)} />
                </Link>
              </li>
              {
                subEvents && open && (
                  <ul>
                    <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='/all_events' className="no-underline hover:text-white text-gray-100"> All Events </Link>
                    </li>
                    <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='/all_posts' className="no-underline hover:text-white text-gray-100"> All Posts </Link>
                    </li>
                    <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='/all_corouser' className="no-underline hover:text-white text-gray-100"> Carousel Items </Link>
                    </li>
                  </ul>
                )
              } */}

              <li className={`text-gray-800 py-2.5 space-x-1 text-sm hover:px-1  cursor-pointer hover:bg-light-white hover:text-gray-800 rounded-md mt-2 ${userRole !== "ADMIN" && "hidden"}`}>
                <Link style={{ textDecoration: "none" }} to='#' className="flex items-center hover:text-white no-underline text-gray-100 ">
                  <span className='text-xl block float-left pr-1'>
                    <FaIcons.FaUserFriends />
                  </span>
                  <span className={`text-base flex-1 font-lightt ${!open && "hidden"}`}> Users </span>
                  <IoIcons.IoMdArrowDropup className={`text-xl ${!open && "hidden"} ${!subMenuOpen && "rotate-180"}`} onClick={() => setSubMenuOpen(!subMenuOpen)} />
                </Link>
              </li>
              {
                subMenuOpen && open && (
                  <ul>
                    <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='/staffs' className="no-underline hover:text-white text-gray-100"> Staffs</Link>
                    </li>
                    <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='/customers' className="no-underline hover:text-white text-gray-100"> Customers</Link>
                    </li>
                    {/* <li className="text-gray-800 p-2 px-3 space-x-2 text-sm flex items-center cursor-pointer hover:bg-light-white rounded-md ">
                      <Link style={{ textDecoration: "none" }} to='#' className="no-underline hover:text-white text-gray-100"> My Company Inactive Users </Link>
                    </li> */}
                  </ul>
                )
              }

              {/* <li className={`text-gray-800 py-2.5 space-x-1 text-sm  cursor-pointer hover:bg-light-white hover:text-gray-800 hover:px-1 rounded-md mt-2`}>
                <Link style={{ textDecoration: "none" }} to='/reports' className="flex items-center hover:text-white no-underline text-gray-100 ">
                  <span className='text-xl block float-left pr-1'>
                    <SiIcons.SiSimpleanalytics />
                  </span>
                  <span className={`text-base flex-1 ml-0.5 font-lightt ${!open && "hidden"}`}> Reports </span>

                </Link>
              </li> */}
              
              <li className={`text-gray-800 py-2.5 space-x-1 text-sm  cursor-pointer hover:bg-light-white hover:text-gray-800 hover:px-1 rounded-md mt-2`}>
                <Link style={{ textDecoration: "none" }} to='/reports' className="flex items-center hover:text-white no-underline text-gray-100 ">
                  <span className='text-xl block float-left pr-1'>
                    <SiIcons.SiSimpleanalytics />
                  </span>
                  <span className={`text-base flex-1 ml-0.5 font-lightt ${!open && "hidden"}`}> Verification </span>

                </Link>
              </li>

              <li className={`text-gray-800 py-2.5 space-x-1 text-sm hover:px-1  cursor-pointer hover:bg-light-white hover:text-gray-800 rounded-md mt-2`}>
                <Link style={{ textDecoration: "none" }} to='/app-settings' className="flex items-center hover:text-white no-underline text-gray-100 ">
                  <span className='text-xl block float-left pr-1'>
                    <AiIcons.AiFillSetting />
                  </span>
                  <span className={`text-base flex-1 font-lightt ${!open && "hidden"}`}> Settings </span>
                </Link>
              </li>

              <li  onClick={() =>  handleLogout()} className={`text-gray-800  bg-red-400 py-1.5 ml-2 space-x-3 pl-2 text-sm hover:px-1  cursor-pointer hover:bg-light-white hover:text-gray-800 rounded-md mt-2`}>
                <Link style={{ textDecoration: "none" }} to='#' className="flex items-center hover:text-white no-underline text-gray-100 ">
                  <span className='text-xl block float-left pr-1'>
                    <FiIcons.FiLogOut />
                  </span>
                  <span className={`text-base text-centerr flex-1 font-lightt ${!open && "hidden"}`}> Logout </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default SideNav
