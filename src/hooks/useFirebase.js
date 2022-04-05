import  { useEffect, useState } from 'react';
import { getAuth,  GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

import initializeAuth from '../firebase/firebase.initialize';





initializeAuth()

const useFirebase = () => {
    const [user, setUser]= useState({});
    const [error, setError]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const handleEmail = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
  
    const handlePassword = e => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
  
  const signInUsingGoogle =()=>{
   return signInWithPopup(auth, provider)
   .catch(error=>{
    setError(error.message)
})
    .finally(()=>{setLoading(false)});
  
  }

  const logOut = ()=>{
      setLoading(true)
      signOut(auth)
      .then(()=>{
        setUser({});
       
      })
      
      .finally(()=>{setLoading(false)}); 
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
        else {
            setUser({});
        }
        setLoading(false);
    });
    return () => unsubscribe;
}, [])


  useEffect(()=>{
      onAuthStateChanged(auth, user=>{
        if(user){
          setUser(user)
        }
      })
  }, [])


  return {
      user,
      error,
      loading,
      email,
      password,
      setUser,
      setError,
      signInUsingGoogle,
      handlePassword,
      handleEmail,
      logOut,
      
      
    
     

  }
}

export default useFirebase;