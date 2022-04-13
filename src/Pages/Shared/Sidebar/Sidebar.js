import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import AddNewBike from '../../AddNewBike/AddNewBike';
// import MyOrders from '../../DashboardContent/MyOrders/MyOrders';
// import Pay from '../../DashboardContent/Pay/Pay';
// import MakeAdmin from '../../MakeAdmin/MakeAdmin';
// import ManageAllorders from '../../ManageAllOrders/ManageAllorders';
// import ManageBike from '../../ManageBike/ManageBike';
// import AdminRoute from '../../Login/AdminRoute/AdminRoute'
// import Review from '../../Reviews/Review/Review';


const Sidebar = () => {
    const {user, admin,logOut} = useAuth()
    // const history = useHistory()
    // let { path, url } = useRouteMatch();


    const handleLogOut = ()=>{
        logOut()
            // history.push('/')
       

    }
    return (
        <div>
        {/* icon={<FaGem />} */}
        {/* icon={<FaHeart />} */}
        

        <Row className="w-100">
            <Col xs={12} md={3}>
               
                <ProSidebar >

                    <Menu  iconShape="square" >
                        <MenuItem >Dashboard
                            {/* <Link to={path}> </Link> */}
                        </MenuItem>

                        {!admin &&

                            <>
                                {/* <MenuItem >

                                    <Link to={`${url}/pay/:OId`}> Pay</Link>
                                </MenuItem> */}
                                <MenuItem >
                                    My Order
                                    <Link to={`/dashborad/myOrder`}> </Link>
                                </MenuItem>
                                <MenuItem >
                                    Review
                                    <Link to={`/review`}> </Link>
                                </MenuItem>
                            </>
                        }
                        {admin &&

                            <>
         
                                <MenuItem >
                                    Manage All Purchase
                                    <Link to={`/manageAllPurchase`}> </Link>
                                </MenuItem>
                                <MenuItem >
                                    Add New Glass
                                    <Link to={`/addNewBikes`}> </Link>
                                </MenuItem>
                                <MenuItem >
                                    Manage Glass
                                    <Link to={`/manageBike`}> </Link>
                                </MenuItem>
                                <MenuItem >
                                    Make Admin
                                    <Link to={`/makeAdmin`}> </Link>
                                </MenuItem>
                                
                            </>
                        }
                        <SubMenu title={user?.displayName} >
                            <MenuItem onClick={handleLogOut}>Log out </MenuItem>

                        </SubMenu>







                    </Menu>




                </ProSidebar>
                
            </Col>
            {/* <Container> */}
            <Col xs={12} md={9} className="text-start">
                {/* <Switch>
                    <Route exact path={path}>
                        <Dashboard />
                    </Route>
                    <Route  path={`${path}/pay/:OId`}>
                        <Pay />
                    </Route>
                    <Route exact path={`${path}/myOrder`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route exact path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute exact path={`${path}/manageAllPurchase`}>
                        <ManageAllorders></ManageAllorders>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/manageBike`}>
                        <ManageBike></ManageBike>
                    </AdminRoute>
                   
                    <AdminRoute exact path={`${path}/addNewBikes`}>
                        <AddNewBike></AddNewBike>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    
                </Switch> */}

            </Col>
        {/* </Container> */}
        </Row>




    </div>
);
};



export default Sidebar;