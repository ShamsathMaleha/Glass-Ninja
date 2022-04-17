
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/context/AuthProvider';
import Glasses from './GlassComponents/Glasses/Glasses';
import Dashboard from './Pages/Dashboard/Dashboard';
import Review from './Pages/Reviews/Review/Review'
import MyOrders from './Pages/DashboardContent/MyOrders/MyOrders';
import Home from './Pages/HomeComponent/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AdminRoute from './AdminRoute/AdminRoute';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import ManageAllorders from './Pages/ManageAllOrders/ManageAllorders';
import ManageGlass from './Pages/ManageGlass/ManageGlass';
import AddNewGlass from './Pages/AddNewGlass/AddNewGlass';
import Purchase from './Pages/Purchase/Purchase';
// import Pay from './Pages/DashboardContent/Pay/Pay';


function App() {
  return (
    <div className="App">
      <AuthProvider>
     <BrowserRouter>
     <Header></Header>
     <Routes>
     <Route  path="/" element={<Home></Home>}>
      
     </Route>
     <Route  path="/login" element={<Login></Login>}>
      
     </Route>

     <Route path="/glasses" element={ <PrivateRoute><Glasses></Glasses></PrivateRoute> }>
        
     </Route>
     <Route path="dashboard" element={ <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute> }>
        <Route path="myOrder" element={ <MyOrders></MyOrders> }></Route>
        <Route path="review" element={ <Review></Review> }></Route>
        {/* <Route path="pay/:oID" element={ <Pay></Pay> }></Route> */}

        <Route path="makeAdmin" element={ <AdminRoute> <MakeAdmin></MakeAdmin> </AdminRoute> }></Route>
        <Route path="manageAllPurchase" element={ <AdminRoute> <ManageAllorders></ManageAllorders>   </AdminRoute> }></Route>
        <Route path="manageGlass" element={ <AdminRoute> <ManageGlass> </ManageGlass> </AdminRoute> }></Route>
        <Route path="addNewGlass" element={ <AdminRoute> <AddNewGlass></AddNewGlass> </AdminRoute> }></Route>

     </Route>

     <Route path="purchase/:id" element={<PrivateRoute><Purchase></Purchase> </PrivateRoute>}>
     

     </Route>
      {/* <Route path="*" element={<NotFound></NotFound> }>

      </Route> */}

     


     </Routes>
     <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
