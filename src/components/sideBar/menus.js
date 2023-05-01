import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md';
import * as GrIcons from 'react-icons/gr';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';

export const Menus = [
    
    { title: "Dashboard", icon: <MdIcons.MdDashboard />, link: "#/dashboard" },
    { title: "All Users", icon: <HiIcons.HiDocument />, link: "/all_users" },
    {
        title: "Requests", icon: <MdIcons.MdPermMedia />, link: "#/vendors",
        submenu: true,
        submenuItems: [
            { title: "All Requests", icon: <GrIcons.GrDocument />, link: "/requests" },
            { title: "New Request", icon: <GrIcons.GrDocument />, link: "/new_request" },
            
        ]
    
    },
    {
        title: "Categories", icon: <MdIcons.MdPermMedia />, link: "#/categories",
        submenu: true,
        submenuItems: [
            { title: "All Categories", icon: <GrIcons.GrDocument />, link: "/all_categories" },
            { title: "Add Category", icon: <GrIcons.GrDocument />, link: "/add_category" },
            
        ]
    
    },
    {
        title: "Events", icon: <SiIcons.SiPolymerproject />, link: "#/projects",
        submenu: true, 
        submenuItems: [
            { title: "All Events", icon: <GrIcons.GrDocument />, link: "#/submenu1" },
            { title: "Add Event", icon: <GrIcons.GrDocument />, link: "/add_event" },
        ]
    },
    {
        title: "Products", icon: <FaIcons.FaSignOutAlt />,link: "#/products" ,
        submenu: true, 
        submenuItems: [
            { title: "All Products", icon: <GrIcons.GrDocument />, link: "/all_products" },
            { title: "Add Product", icon: <GrIcons.GrDocument />, link: "add_product" },
            
        ]
    },
    { title: "Reports", icon: <SiIcons.SiSimpleanalytics />, link: "#/reports" },
    { title: "Inbox", icon: <MdIcons.MdForwardToInbox />, link: "#/inbox" },
    // { title: "Profile", icon: <AiIcons.AiOutlineUser />, link: "#/profile", spacing: true },
    { title: "Settings", icon: <AiIcons.AiFillSetting />, link: "#/settings" },

]
