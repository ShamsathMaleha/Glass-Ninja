import  { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, getIdToken, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

import initializeAuth from '../firebase/firebase.initialize';





initializeAuth()

const useFirebase = () => {
    const [user, setUser]= useState({});
    const [error, setError]= useState('');
    const [email, setEmail]= useState('');
    const [authError, setAuthError] = useState('')
    const [token, setToken] = useState('')

    const [password, setPassword]= useState('');
    const [loading, setLoading] = useState(true)
    const [admin, setAdmin] = useState(false)

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
  
//   const signInUsingGoogle =()=>{
//    return signInWithPopup(auth, provider)
//    .catch(error=>{
//     setError(error.message)
// })
//     .finally(()=>{setLoading(false)});
  
//   }


const signInUsingGoogle = (location, navigate) => {

    setLoading(true);
    signInWithPopup(auth, provider)
        .then((result) => {

            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT')
            setAuthError('');
            const destination = location?.state?.from || '/';
            navigate(destination)
        }).catch((error) => {
            setAuthError(error.message);
        }).finally(() => setLoading(false));
}

  const logOut = ()=>{
      setLoading(true)
      signOut(auth)
      .then(()=>{
        setUser({});
       
      })
      
      .finally(()=>{setLoading(false)}); 
  }



  const registerUser = (email, password, name, history) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            setAuthError('');
            const newUser = { email, displayName: name }
            setUser(newUser)
            // save user to db
            saveUser(email, name, 'POST')

          

            history.replace('/')

        })
        .catch((error) => {

            setAuthError(error.message);

        })
        .finally(() => setLoading(false))
}


const loginUser = (email, password, location, history) => {
  setLoading(true)

  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const destination = location?.state?.from || '/';
          history.replace(destination)
          setAuthError('');
      })
      .catch((error) => {
          setAuthError(error.message);


      })
      .finally(() => setLoading(false));

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

 // observer user state 
 useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            getIdToken(user)
                .then(idToken => {
                    setToken(idToken)
                })
            const uid = user.uid;
            setUser(user)
        } else {
            setUser({})
        }
        setLoading(false)
    });
    return () => unsubscribed
}, [])
 
 

  // check admin 
    useEffect(()=>{
        fetch(`https://immense-peak-94370.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))
    },[user.email])

    // SAVE USER DB
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://immense-peak-94370.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()


    }

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
      admin,
      loginUser,
      registerUser,
      
      
    
     

  }
}

export default useFirebase;