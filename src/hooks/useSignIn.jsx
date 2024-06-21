import {auth} from '../firebase/firebaseConfig'
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { GlobalContext } from '../context/GlobalContext'
import { useContext } from 'react';
function useSignIn() {
    const signInWithEmailAndPassword = async (data) => {
        try{
            const result = await signInWithEmailAndPassword(auth,data.email,data.password)
            await updateProfile(auth.currentUser, {
              displayName: data.displayName,
              photoURL: data.photoURL
            })
            const userCredential = result.user
            const {dispatch} = useContext(GlobalContext)
            dispatch({type:"LOG_IN", payload: userCredential})
        }catch(error){
          const errorMessage =  error.message
          console.log(errorMessage);
        }
    }
  return {signInWithEmailAndPassword}
}

export {useSignIn}