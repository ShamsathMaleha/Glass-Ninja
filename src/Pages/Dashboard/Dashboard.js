import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../Shared/Sidebar/Sidebar';
import Sidebar2 from '../Shared/Sidebar/Sidebar2/Sidebar2';

const Dashboard = () => {
    
    return (
        <div >
            
            {/* <Sidebar></Sidebar> */}
            <Sidebar2></Sidebar2>
            <div className="my-5"><hr /></div>
            <div>
            <Outlet>
                
                </Outlet>
            </div>
        </div>
        
    );
};

export default Dashboard;