
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/context/AuthProvider';
import Glasses from './GlassComponents/Glasses/Glasses';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/DashboardContent/MyOrders/MyOrders';
import Home from './Pages/HomeComponent/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import PrivateRoute from './PrivateRoute/PrivateRoute';


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
     </Route>

     


     </Routes>
     <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
