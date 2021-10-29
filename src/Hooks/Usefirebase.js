import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/Firebase-init";

initializeAuth()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

const auth = getAuth()
const GoogleProvider = new GoogleAuthProvider()

const loginUsingGoogle = () => {
   return signInWithPopup(auth, GoogleProvider)
}
useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        if(user){
            setUser(user)
        } else{
            setUser({})
        }
        setIsLoading(false)
    })
    return () => unSubscribe()
}, [])
const logOut = () => {
    signOut(auth).then(() => {
        setUser({})
      }).catch((err) => {
        setError(err.message)
      });
}

return {user, error, loginUsingGoogle, logOut, isLoading, setIsLoading}

}
export default useFirebase;