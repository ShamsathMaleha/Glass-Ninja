import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../Shared/Sidebar/Sidebar';

const Dashboard = () => {
    
    return (
        <div >
            
            <Sidebar></Sidebar>
            <div className="my-5"><hr /></div>
            <div>
            <Outlet>
                
                </Outlet>
            </div>
        </div>
        
    );
};

export default Dashboard;