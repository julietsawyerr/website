import React, { createContext, useContext, useState, useEffect} from 'react'
import {Context} from '../context/context'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword,
    sendEmailVerification, 
    signInWithEmailAndPassword,
    signInWithPopup, 
    GoogleAuthProvider,
    signOut, 
    onAuthStateChanged, 
    sendPasswordResetEmail,
    updateProfile } from "firebase/auth";
import {auth} from '../lib/firebase'

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
const [showAlert, setShowAlert] = useState(false)
const [currentUser, setCurrentUser] = useState();
const [values, setValues] = useState({
    userName:'',
    email:'',
    password: '',
})
const [loginValues, setLoginValues] = useState({
    email:'',
    password: '',
})

const [email, setEmail] = useState('')
const [errorMessage, setErrorMessage] = useState("");
const [loginError, setLoginError] = useState("");
const [resetError, setResetError] = useState("");
const [loading, setLoading] = useState(false);
const [resetLoading, setResetLoading] = useState(false);
const [loginLoading, setLoginLoading] = useState(false);

// Popup states
const [regButtonPopup, setRegButtonPopup] = useState(false);
const [loginButtonPopup, setLoginButtonPopup] = useState(false);
const [resetButtonPopup, setResetButtonPopup] = useState(false);
const [regErrorMsg, setRegErrorMsg] = useState(false);
const [loginErrorMsg, setLoginErrorMsg] = useState(false);
const [resetErrorMsg, setResetErrorMsg] = useState(false);
const [registerSuccess, setRegisterSuccess]=useState('');
const [resetSuccess, setResetSuccess]=useState('');


let navigate = useNavigate();
const {cart, handleEmptyCart, locatn} = useContext(Context);

    

    const signUp = () => {
        setLoading(true)
            
        if(currentUser && currentUser.emailVerified){
            setErrorMessage('Logout the current user to continue.')

            setTimeout(function () {
                setErrorMessage('')
                setLoading(false)

                // reset form after login
                setValues(prev => ({
                    ...prev,
                    userName:'',
                    email:'',
                    password: '',
                }))
            }, 5000);
           
            return false
        }

        createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            // Signed in 
            setLoading(false);
            const user = userCredential.user;
            updateProfile(user, {
                displayName: values.userName
            })

            //Email verification
            sendEmailVerification(auth.currentUser)

            //logout
            signOut(auth)
            
    
        })
            // ...
        .then(() => {

            // reset form

            setValues(prev => ({
                ...prev,
                userName:'',
                email:'',
                password: '',
            }))

            // Email verification sent message!
            setRegisterSuccess('Thanks for your registration, please check your inbox and  click the link provided in the email to verify your email address.')
            
            setTimeout(function () {
                setRegisterSuccess('')
            }, 6000);

         
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorCodeResult = errorCode.substring(5).charAt(0).toUpperCase() + errorCode.substring(6).replace(/[^\w\s]/gi, ' '); 
            setLoading(false);

            if(errorCode ===  'auth/invalid-email'){
                setErrorMessage('The provided value for the email user property is invalid.')
            }else if(errorCode === 'auth/email-already-in-use' || errorCode === 'auth/email-already-exists'){
                setErrorMessage('The provided email is already in use by an existing user.')
            }else{
                setErrorMessage(errorCodeResult)
            }

            if(error){
                setValues(prev => ({
                    ...prev,
                    email: ''
                }))

            }
          

            setTimeout(function () {
                setErrorMessage('')
            }, 5000);
            
            
        });
        
    }

    const login  = () => {
        setLoginLoading(true)


        if(currentUser && currentUser.emailVerified){
            setLoginError('Logout the current user to continue.')

            setTimeout(function () {
                setLoginError('')
                setLoginLoading(false)

                // reset form after login
                setLoginValues(prev => ({
                    ...prev, 
                    email: '',
                    password:''
                }))
            }, 5000);
           
            return false
        }

        signInWithEmailAndPassword(auth, loginValues.email, loginValues.password)
        .then((userCredential) => {
            // Signed in 
            setLoginLoading(false);

            const user = userCredential.user;
            
            if(!user.emailVerified){
                signOut(auth)
                setLoginError('Please verify your email address to continue.');
                setLoginValues(prev => ({
                    ...prev, 
                    email: '',
                    password:''
                }))

                
                setTimeout(function () {
                    setLoginError('')
                }, 5000);
                return false
            }

            setLoginValues(prev => ({
                ...prev, 
                email: '',
                password:''
            }))
       
        // navigate to the checkoutpage if cart is not empty
            if(cart.total_unique_items){
                navigate('/cart')
            }else{
                navigate('/shop')
            }

        //notify login
        setShowAlert(true)

        setTimeout(function () {
            setShowAlert(false)
        }, 5000);

        

        // reset form after login
        setLoginValues(prev => ({
            ...prev, 
            email: '',
            password:''
        }))
        })
        .catch((error) => {
            const errorCode = error && error.code;
            const errorCodeResult = errorCode && errorCode.substring(5).charAt(0).toUpperCase() + errorCode.substring(6).replace(/[^\w\s]/gi, ' '); 
            setLoginError(errorCodeResult)

            setTimeout(function () {
                setLoginError('')
            }, 5000);

            setLoginValues(prev => ({
                ...prev,
                email: '',
                password:''
            }))

            setLoginLoading(false)
        });
    }

    const googleSignIn = () => {
        if(currentUser && currentUser.emailVerified){
            setShowAlert(true)

            setTimeout(function () {
                setShowAlert(false)
            }, 5000);
            return false;
        }

        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log('Google', user)
            
            // navigate to the checkoutpage if cart is not empty
            if(cart.total_unique_items){
                navigate('/checkout')
            }else{
                navigate('/shop')
            }

            //notify login
            setShowAlert(true)

            setTimeout(function () {
                setShowAlert(false)
            }, 5000);
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            // const errorCodeResult = errorCode.substring(5).charAt(0).toUpperCase() + errorCode.substring(6).replace(/[^\w\s]/gi, ' ');   
            const errorCodeResult = errorCode.substring(5).replace(/[^\w\s]/gi, ' ');  

            if(locatn === '/login'){
                setLoginErrorMsg(errorCodeResult)
                setLoginButtonPopup(true)
           }

           if(locatn === '/register'){
                setRegErrorMsg(errorCodeResult)
                setRegButtonPopup(true)
            }

            if(locatn === '/reset'){
                setResetErrorMsg(errorCodeResult)
                setResetButtonPopup(true)
            }

            setTimeout(function () {
                if(locatn === '/login'){
                    setLoginButtonPopup(false)
               }
    
               if(locatn === '/register'){
                    setRegButtonPopup(false)
                }

                if(locatn === '/reset'){
                    setResetButtonPopup(false)
                }
            }, 5000);
    // ...
  });
    }



    const logout = () => {

        setTimeout(function () {
            signOut(auth).then(() => {
                // Sign-out successful.
                handleEmptyCart()
                navigate('/shop')
                // notify Sign-out successful.
            
                    setShowAlert(true)
        
                    setTimeout(function () {
                        setShowAlert(false)
                    }, 4000);
                
              }).catch((error) => {
                // An error happened.
              });
        }, 300);

        
    }

    const resetPassword  = () => {
        setResetLoading(true)
        sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            setResetLoading(false)
            setEmail('')
            setResetSuccess('Password reset instruction has been sent to your email address.')
            
            setTimeout(function () {
                setResetSuccess('')
            }, 6000);

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorCodeResult = errorCode.substring(5).charAt(0).toUpperCase() + errorCode.substring(6).replace(/[^\w\s]/gi, ' '); 
           setResetError(errorCodeResult)


           setTimeout(function () {
            setResetError('')
        }, 5000);

           setResetLoading(false);

           setEmail('')
            // ..
        });

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
         setCurrentUser(user)        
        })
        return unsubscribe
      }, [])

    //   console.log('currentUser', currentUser)

    const value = {
        currentUser,
        signUp,
        login,
        googleSignIn,
        logout,
        resetPassword,
        values,
        setValues,
        loginValues,
        setLoginValues,
        email,
        setEmail,
        errorMessage,
        setErrorMessage,
        loginError,
        setLoginError,
        resetError,
        loading,
        loginLoading,
        resetLoading,
        setLoading,
        showAlert,
        setShowAlert,
        regButtonPopup,
        setRegButtonPopup,
        loginButtonPopup,
        setLoginButtonPopup,
        resetButtonPopup,
        setResetButtonPopup,
        regErrorMsg, 
        loginErrorMsg, 
        resetErrorMsg,
        resetSuccess,
        registerSuccess,
    }


    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


