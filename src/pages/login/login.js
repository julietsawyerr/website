import React from 'react';
import LoginInfo from './loginInfo';
import {
    Container, 
    HeadingTwo,
    Paragraph,
    Lside,
    Rside,
    LinkCont,
    Button, 
} from './login.style';

function Login(){

    return(   
        <Container>
            <Lside>
               <LoginInfo />  
            </Lside>

            <Rside>
                <HeadingTwo>
                    Create Account
                </HeadingTwo>
                <Paragraph>
                    Create your Afrikarts customer account in just a few clicks! You can register either using your email address or through your Google account.
                </Paragraph>

                <LinkCont to='/register'>
                    <Button>Create Account</Button>
                </LinkCont>
            </Rside>
        </Container>
    )
} 
 
export default Login;