import React from 'react';
import { Outlet, Route, Switch, useRouteMatch } from 'react-router-dom';

import Sidebar from '../Shared/Sidebar/Sidebar';

const Dashboard = () => {
    
    return (
        <div>
            
            <Sidebar></Sidebar>
            
            <div>
            <Outlet>
                
                </Outlet>
            </div>
        </div>
        
    );
};

export default Dashboard;