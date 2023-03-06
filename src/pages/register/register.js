import React, {useState} from 'react';
import Popup from '../../components/popup/popup'
import {FormInput, PasswordInput} from '../../components/formInput/formInput';
import {useAuth} from '../../context/authContext';
import {
    Container, 
    Heading,
    Lside,
    Rside,
    LinkCont,
    Button,
    FButton,
    Form,
    Input,
    Google, Mark,
    BottomDiv, Success, 
    MobileLogin, Login, FormSpan, PasswordState,
    Warning, Alert, InputCont, InputAlert, WrapperDiv, Requirement

} from './register.style'



function Register(){
    const {signUp, 
            googleSignIn, 
            regErrorMsg,
            regButtonPopup, 
            values, setValues, 
            loading,  
            errorMessage, setErrorMessage, registerSuccess} = useAuth()
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordInstruction, setPasswordInstruction] = useState(false);
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(prev => !prev);
    }

    const validateName = (e) => { 
        if(values.userName.length === 0){
            setNameError('Name is required.')
            return false
        }

        if(!values.userName.match(/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/)){
            setNameError('Enter your full name.')
            return false
        }
        
        setNameError('')
        return true
        
    }
    

    const validateEmail = (e) => {
        if(values.email.length === 0){
            setEmailError('Email is required.')
            return false
        }
        if(!values.email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g)){
            setEmailError('Please enter a valid email.')
            return false
        }

        setEmailError('')
        return true
    }

    const validatePassword = (e) => {
        if(values.password.length === 0){
            setPasswordError('Password is required.')
            return false
        }
        if(!values.password.match(/^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{5,}$/)){
            setPasswordError('Please match the requirement below.')
            setPasswordInstruction(true)
            return false
        }

        if(values.password.match(/^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{5,}$/)){
            setPasswordInstruction(false)
        }

        setPasswordError('')
        return true
    }

    
    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!validateName() || !validateEmail() || !validatePassword() ){
            setErrorMessage('Please fix the error(s).')

            setTimeout(function () {
              setErrorMessage('')
          }, 5000);
            return false
        }

          signUp()
    }

    return(   
        <Container>
            <Lside>
            <Heading>Create Account</Heading>
            {registerSuccess && <Success><Mark />{registerSuccess}</Success>}
            {errorMessage && <Warning><Alert />{errorMessage}</Warning>}
                <Form onSubmit={handleSubmit} method='POST'>
                   <InputCont>
                        <FormInput 
                            type='text' 
                            name='userName' 
                            value={values.userName} 
                            onChange={handleChange}
                            fieldName='Full Name' 
                            onKeyUp={() => validateName()} 
                            />
                              {nameError && <WrapperDiv><InputAlert /></WrapperDiv>}
                              {nameError && <FormSpan>{nameError}</FormSpan>} 
                    </InputCont>

                    <InputCont>
                        <FormInput 
                            type='email'
                            name='email'
                            value={values.email} 
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
                            value={values.password} 
                            onChange={handleChange}
                            fieldName='Password' 
                            onKeyUp={() => validatePassword()} 
                            notice='Your password must have a minimum of 6 characters with at least 3 of these components: letters, numbers and special characters. Your password should not start with a special character.'
                        />
                        <WrapperDiv>
                         <PasswordState onClick={handleShow}>{show ? 'Hide' : 'Show'}</PasswordState>
                        {passwordError && <InputAlert  />}
                        </WrapperDiv>
                        {passwordError && <FormSpan>{passwordError}</FormSpan>} 
                    </InputCont>
                   {passwordInstruction && 
                   <InputCont>
                    <Requirement>
                        <h3>Password requirements</h3>
                        <ul>
                            <li>At least one lower case letter [a-z]</li>
                            <li>At least one number [0-9]</li>
                            <li>At least one special character [!@#$%^&*]</li>
                            <li>Minimum of 6 characters</li>
                        </ul>
                    </Requirement>
                    </InputCont>
                    }
                    
                    <Input type='submit' disabled={loading} value={loading ? 'Please wait...' : 'Create Account'} />
                </Form>
                <FButton onClick={() => googleSignIn()}><Google />Register with Google</FButton>

                
                <MobileLogin>Already have an account? 
                    <Login to='/login'> <Button>LOGIN</Button></Login>
                    {/* <FButton onClick={() => googleSignIn()}><Google />Continue with Google</FButton> */}
                </MobileLogin>
                
            </Lside>

            <Rside>
                <BottomDiv>
                    {/* <span>Already have an account?</span> */}
                    <LinkCont to='/login'>
                        <Button>LOGIN</Button>
                    </LinkCont>
                </BottomDiv>
            </Rside>
            <Popup trigger={regButtonPopup}>
                {`Google Sign-in ${regErrorMsg}.`}
            </Popup>
            </Container>
    )
}

export default Register;