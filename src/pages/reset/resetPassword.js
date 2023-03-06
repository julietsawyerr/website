import React, {useState} from 'react';
import {FormInput} from '../../components/formInput/formInput'
import {useAuth} from '../../context/authContext';
import {
    Heading,
    Paragraph,
    Form,
    Input,
    WhiteSpace,
    WrapperDiv,
    Check, FormSpan, Success, 
    Warning, Alert, InputAlert, InputCont,
    MobileLoginCont, LoginLink

} from './reset.style';

function ResetPassword({bg=true}){
    const [emailError, setEmailError] = useState();
    const {resetPassword, email, setEmail, resetError, resetLoading, resetSuccess} = useAuth()

    const validateEmail = (e) => {
        if(email.length === 0){
            setEmailError('Email is required.')
            return false
        }
        if(!email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g)){
            setEmailError('Please enter a valid email.')
            return false
        }

        setEmailError('')
        return true
    }

    const handleChange = e => {
        setEmail(e.target.value) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        resetPassword()
    }

    return(
        <>
            <Heading>Reset Password</Heading>
            <WhiteSpace />
                <Paragraph>
                    Enter the email associated with your account and we'll send an email with instructions to reset your password.
                </Paragraph>
                 {resetSuccess && <Success><Check />{resetSuccess}</Success>}
                 {resetError && <Warning><Alert />{resetError}</Warning>}

                    <Form onSubmit={handleSubmit}>
                    <InputCont>
                            <FormInput 
                                type='email'
                                name='email'
                                value={email} 
                                onChange={handleChange} 
                                fieldName='Email Address' 
                                onKeyUp={() => validateEmail()} 
                            />
                            {emailError && <WrapperDiv><InputAlert /></WrapperDiv>}
                            {emailError && <FormSpan>{emailError}</FormSpan>} 
                        </InputCont>

                        <Input type='submit' disabled={resetLoading} value={resetLoading ? 'Please Wait...' : 'Send Instructions'} />
                    </Form>
                    <MobileLoginCont>
                        <Paragraph>
                            Password changed? <LoginLink to='/login'>Login</LoginLink>
                        </Paragraph>
                    </MobileLoginCont>
                    
        </>
    )
}

export default ResetPassword;