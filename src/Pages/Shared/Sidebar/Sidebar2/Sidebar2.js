import React from 'react';
import {AnimatePresence, motion} from 'framer-motion'
import './sidebar2.css'
import { MdManageAccounts, MdAddTask,MdOutlineHotelClass, MdAddchart, MdViewHeadline, MdAdminPanelSettings } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { useState } from 'react';
import { FiShoppingBag } from "react-icons/fi";
import Menus from '../../../../components/Menu/Menus';




const Sidebar2 = () => {

    const [open,setOpen] =useState(false);
    

    const {user, admin,logOut} = useAuth()
    const showAnimation={
        hidden:{
            width:0,
           
            opacity:0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            width: 'auto',
     
            opacity: 1,
            transition: {
                duration: 0.2,
            },
        },
    }

    
    return (
        <div>
            <div className="main-container">
                <motion.div animate={{width: !open ? '200px' : '45px'}} className="sidebar">

                    <div className="top-section">
                        <h2  className="logo">{!open && 'GlassKart'}</h2>
                        
                        <MdViewHeadline onClick={()=>setOpen(!open)}></MdViewHeadline>
                       
                    </div>

                    {!admin &&
                        <section className="routes">
                        <AnimatePresence>
                        <motion.div variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        >
        
                        <NavLink className="link" to="myOrder"><div className="icon"> <FiShoppingBag></FiShoppingBag> </div>{!open && 'My Order'}</NavLink>
                        <NavLink className="link" to="review"><div className="icon"> <MdOutlineHotelClass></MdOutlineHotelClass> </div>{!open && 'Review'} </NavLink>
        
                        </motion.div>
                        </AnimatePresence>
                        </section>
                    }
                {admin &&
                
                <section className="routes">
                <AnimatePresence>
                <motion.div variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                >
                <NavLink className="link" to="manageAllpurchase"><div className="icon"><MdManageAccounts></MdManageAccounts> </div>{!open && 'Manage All Purchase'} </NavLink>

                <NavLink className="link" to="addNewGlass"><div className="icon"><MdAddTask></MdAddTask> </div>{!open && 'Add New Glass'}</NavLink>
                <NavLink className="link" to="manageGlass"><div className="icon"><MdAddchart></MdAddchart> </div>{!open && 'Manage Glass'}</NavLink>
                <NavLink className="link" to="makeAdmin"><div className="icon"> <MdAdminPanelSettings></MdAdminPanelSettings> </div>{!open && 'Make Admin'} </NavLink>

                </motion.div>
                </AnimatePresence>
                </section>
                }
                
                </motion.div>
            </div>
        </div>
    );
};

export default Sidebar2;