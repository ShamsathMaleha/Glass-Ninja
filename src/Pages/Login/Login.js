import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const {signInUsingGoogle,handlePassword,handleEmail,email,password}= useAuth();
    const navigate = useNavigate();
    const [error, setError]= useState('');
    const [loading, setLoading] = useState(true)
    const [user, setUser]= useState({});
    // const [password, setPassword]= useState('');
    
    const auth = getAuth();

          
    
   
    const signInWithEmail = e =>{
       
        if (password.length < 6) {
            setError('Please at least 6 or more character as password')
        }
        else {
            setLoading(true)
            signInWithEmailAndPassword(auth, email,password)
            .then(result=>{
              setUser(result.user);
              console.log(user)
              setError('')
              e.target.reset()
            //   history.push(redirect_uri)
            })
            .catch(error=>{
              setError(error.message)
              console.log(error.message)
          })
          .finally(()=>{setLoading(false)})
        
     
    }
    e.preventDefault();
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                navigate('/')
                
                
            })
    }
    

    return (
       <>




<div className="container " >
<div className="form w-50">
<div className="row d-flex justify-content-center"> 
<div className="col-sm-12 col-lg-9 ">
                             
<form onSubmit={signInWithEmail}>
    <h1>Log in</h1>
<input onBlur={handleEmail} required type="email" name="email" className="mt-5 mb-3 mx-auto inputs w-100" placeholder="Email" />
   
   <input required onBlur={handlePassword} type="password" className=" mx-auto inputs w-100" name="Password" placeholder="Password" />
    <p className="mt-2 text-danger">{error}</p>
   <button type="submit" className="buttons">Sign in</button>
</form>
<button onClick={handleGoogleLogin} className="btn btn-warning btn-lg btn-block mb-3 mx-3 text-white"> <img src="" width="20px " alt="" srcset="" /></button>

<br />
   <Link to="/register">Create account</Link>

   </div> 
   </div>
 </div>  
</div>
</>
    );
};

export default Login;