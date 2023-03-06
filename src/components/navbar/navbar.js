import React, {useState} from 'react';
import Dropdown from '../dropdown/dropdown';
import {useAuth} from '../../context/authContext';
import Logosvg from '../logosvg/logosvg'
import {
    Container,
    Subcontainer,
    Hamburger,
    Bars,
    CloseBtn, SpaceBtw,
    NavbarContainer, LogOutDiv,
    Menu, User, UserInfo, UserIcon, Display, Small, 
    } from './navbar.style'

function Navbar(){
    const [open, setOpen] = useState(false)
    const {currentUser, logout} = useAuth();
    
    const list = [
    <User>
        {currentUser && currentUser.emailVerified && 
            <>
                <UserIcon />
                <Display>{currentUser.displayName && currentUser.displayName}</Display>
                <Small>{currentUser.email}</Small>
            </>
        }
    </User>,
    <Menu to='/'>Home</Menu>, 
    <Menu to='shop'>Shop</Menu>,
    <Menu to='contact'>Contact</Menu>,
    <SpaceBtw/>,
    <UserInfo>
        {currentUser && currentUser.emailVerified ? 
            <>
                {/* <Menu to='order'>My Order</Menu> */}
                <LogOutDiv onClick={() => logout()}>Logout</LogOutDiv>
            </>
        :

            <>
            <Menu to='login'>Login</Menu>
            <Menu to='register'>Register</Menu>
            </>
        }
    </UserInfo>
    ]

      return(
        <Container>
            <Subcontainer>
                <Hamburger onClick={() => setOpen(prev => !prev)}>
                    {open ?  <CloseBtn /> : <Bars />}
                </Hamburger>
                <Logosvg />
                 
                <NavbarContainer open={open}>
                    {list.map((item, index ) => (
                        <div key={index} onClick={() => ( index !== 0 && setOpen(false))}>{item}</div>
                    ))}
                </NavbarContainer>
                <Dropdown />
            </Subcontainer>
        </Container>
    )
}

export default Navbar;