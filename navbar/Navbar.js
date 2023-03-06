import React, {useState} from 'react';
import { Container, Toolbar, ToolDiv, Logo, NavBar, StyledLink, IconBar, Hamburger, StyledMenu, StyledCloseBtn, StyledCart, StyledUser, SlideBg } from './css/navstyle';

import * as ROUTES from '../constants/routes'

function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <Toolbar>
                    <ToolDiv>
                        <Hamburger onClick={() => setIsOpen(isOpen => !isOpen)}>
                            {isOpen ? <StyledCloseBtn /> : <StyledMenu/>  }
                        </Hamburger>
                        <Logo src='images/logo.png' alt='Afrikarts' />
                       
                        <NavBar isOpen={isOpen}>
                            <StyledLink to={ROUTES.HOME} onClick={() => setIsOpen(false)}>Home</StyledLink>
                            <StyledLink to={ROUTES.ABOUT} onClick={() => setIsOpen(false)}>About</StyledLink>
                            <StyledLink to={ROUTES.PORTFOLIO} onClick={() => setIsOpen(false)}>Portfolio</StyledLink>
                            <StyledLink to={ROUTES.CONTACT} onClick={() => setIsOpen(false)}>Contact</StyledLink>
                        </NavBar>

                        <IconBar>
                            <StyledUser />
                            <StyledCart />
                        </IconBar>
                    </ToolDiv>
                </Toolbar>
            
        </div>
    );
}

export default Navbar;