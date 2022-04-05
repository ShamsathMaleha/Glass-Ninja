
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/context/AuthProvider';
import Home from './Pages/HomeComponent/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

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

     


     </Routes>
     <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
