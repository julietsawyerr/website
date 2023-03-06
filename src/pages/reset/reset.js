import React from 'react';
import Popup from '../../components/popup/popup'
import ResetPassword from './resetPassword';
import {useAuth} from '../../context/authContext';

import {
    Container, 
    HeadingTwo,
    Paragraph,
    Lside,
    Rside,
    LinkCont,
    Button,
    Cont,  PasswordIcon
} from './reset.style';

function Reset(){
    const {resetButtonPopup, resetErrorMsg} = useAuth()

    return(   
        <Container>
            <Lside>
                <ResetPassword />
            </Lside>

            <Rside>
                
                
            <Cont> 
                {/* <PasswordIcon /> */}
                <PasswordIcon />
                <HeadingTwo>Password Changed?</HeadingTwo>
                <Paragraph>Please login with the new password.</Paragraph>
            </Cont>  
                
           
                <LinkCont to='/login'>
                    <Button>Login</Button>
                </LinkCont>
   
            </Rside>
            <Popup trigger={resetButtonPopup}>
                {`Google Sign-in ${resetErrorMsg}.`}
            </Popup>
        </Container>
    )
} 
 
export default Reset;