import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic=useAxiosPublic()
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logout = () => {

        setLoading(true)
        signOut(auth)
    }

    const authInfo = {
        registerUser,
        login,
        updateUserProfile,
        logout,
        user,
        loading,
        setLoading,
        signInWithGoogle,

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            if(currentUser?.email){
                const user={email:currentUser.email}
                  axiosPublic.post('/jwt',user,{withCredentials:true})
                  .then(res=>console.log('login',res.data))
                  setLoading(false)
              }else{
                axiosPublic.post(`/logout`,{},{withCredentials:true})
                .then(res=>console.log('logout:',res.data))
             
            setLoading(false)}
            setLoading(false)
        })
        return () => unsubscribe()
    }, [auth,axiosPublic])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;