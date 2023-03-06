import React, {useState} from 'react';
import Popup from '../../components/popup/popup'
import {FormInput, PasswordInput} from '../../components/formInput/formInput'
import {useAuth} from '../../context/authContext';
import {
    Heading,
    Paragraph,
    Button,
    FButton,
    Form,
    Input,
    Google,
    WrapperDiv, ResetBtn, ForgetPass,
    Login, MobileLogin, PasswordState,
    Warning, Alert, InputCont, FormSpan, InputAlert

} from './login.style';

function LoginInfo(){
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [show, setShow] = useState(false);
    const {login, googleSignIn, loginValues, setLoginValues, loginLoading, loginError, setLoginError, loginErrorMsg, loginButtonPopup} = useAuth()

    const handleShow = () => {
        setShow(prev => !prev);
    }

    const validateEmail = (e) => {
        if(loginValues.email.length === 0){
            setEmailError('Email is required.')
            return false
        }
        if(!loginValues.email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g)){
            setEmailError('Please enter a valid email.')
            return false
        }

        setEmailError('')
        return true
    }

    const validatePassword = (e) => {
        if(loginValues.password.length === 0){
            setPasswordError('Password is required.')
            return false
        }
        if(!loginValues.password.match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{6,}$/)){
            setPasswordError('Please enter your password.')
            return false
        }

        setPasswordError('')
        return true
    }

    const handleChange = (e) => {
        setLoginValues({...loginValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validateEmail() || !validatePassword() ){
            setLoginError('Please fix the error(s).')

            setTimeout(function () {
              setLoginError('')
          }, 5000);
            return false
        }
        
        login()
    }

    return(
        <>
            <Heading>Welcome Back!</Heading>
                <Paragraph>Login to continue.</Paragraph>

                {loginError && <Warning><Alert />{loginError}</Warning>}
                    <Form onSubmit={handleSubmit}>
                    <InputCont>
                            <FormInput 
                                type='email'
                                name='email'
                                value={loginValues.email} 
                                onChange={handleChange} 
                                fieldName='Email Address' 
                                onKeyUp={() => validateEmail()} 
                            />

                            {emailError && <WrapperDiv><InputAlert /></WrapperDiv>}
                            {emailError && <FormSpan>{emailError}</FormSpan>} 
                        </InputCont>

                        <InputCont>
                            <PasswordInput 
                                type={show ? 'text' : 'password'} 
                                name='password' 
                                value={loginValues.password} 
                                onChange={handleChange}
                                fieldName='Password' 
                                notice=''
                                onKeyUp={() => validatePassword()} 
                            />
                            <WrapperDiv>
                                <PasswordState onClick={handleShow}>{show ? 'Hide' : 'Show'}</PasswordState>
                                {passwordError && <InputAlert  />}
                            </WrapperDiv>
                            {passwordError && <FormSpan>{passwordError}</FormSpan>} 
                        </InputCont>

                        <ForgetPass><ResetBtn to='/reset'>Forgot your password?</ResetBtn></ForgetPass>
                        
                        <Input type='submit' disabled={loginLoading} value={loginLoading ? 'Please Wait...' : 'Login'} />
                    </Form>
                    <FButton onClick={() => googleSignIn()}><Google />Login with Google</FButton>

                    
                    <MobileLogin>Don't have an account? 
                    <Login to='/register'> <Button>CREATE ACCOUNT</Button></Login>
                    </MobileLogin>
                    <Popup trigger={loginButtonPopup}>
                        {`Google Sign-in ${loginErrorMsg}.`}
                    </Popup>
        </>
    )
}

export default LoginInfo;