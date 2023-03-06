import React, {useContext} from 'react';
import {Container, Main, AlertCont, Alert} from './layout.style'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import {useAuth} from '../context/authContext';
import {Context} from '../context/context'


function Layout({children}) {
    const {locatn, height} = useContext(Context);
    const {currentUser, showAlert} = useAuth();
    
    return (
        <Container locatn={locatn} height={height}>
            <AlertCont showAlert={showAlert} height={height}><Alert>{currentUser ? `Hello ${currentUser.displayName}, welcome back!` : "You've logged out."}</Alert></AlertCont>
                <Navbar />
                <Main locatn={locatn}>{children}</Main>
                {/* <AlertCont showAlert={showAlert}><Smile /><Alert>{currentUser ? `Welcome, ${currentUser.displayName}!` : "Bye!"}</Alert></AlertCont> */}
                
                <Footer/>
        </Container>
    );
}

export default Layout;