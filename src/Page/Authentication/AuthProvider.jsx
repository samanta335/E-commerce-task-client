import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../../Firebase/Firebase.config';


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider =new FacebookAuthProvider()

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
    
      const signUp = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };

      const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
      };
    
      const facebookSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
      };

      const logOut = () => {
        setLoading(true);
        return signOut(auth);
      };

      const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      };

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        // console.log(currentUser);
        setLoading (false)
    })
        return () => {
            return unsubscribe;
          };
        }, []);
      
    const auth = getAuth(app)
    const [user,setUser]= useState(null)
    const [loading, setLoading]=useState(true)
    
    const authInfo={
      user,
      loading,
      createUser,
      signUp,
      googleSignIn,
      facebookSignIn,
      updateUserProfile,
      logOut
}

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;