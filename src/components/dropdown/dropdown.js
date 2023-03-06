import React, {useState, useRef, useEffect, useContext} from 'react';
import {Context} from '../../context/context';
import {useAuth} from'../../context/authContext';
import {
    Container,
    Menu,
    Btn,
    UserIcon,
    CartIcon,
    ArrowDown,
    DropdownCont,
    DropdownMenu,
    BtnCont,
    LoginBtn,
    RegisterCont, 
    RegisterLink,
    Mobilemenu,
    Circle, 
    CartCircle,
    Dname, LogOut, LogoutCont, 
    UserCir, LogoutBtn, 
    // Heart,
    // OrderBtn
} from './dropdown.style'

function Dropdown(props) {
    const { cart } = useContext(Context)
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const{logout, currentUser} = useAuth()

    useEffect(() => {
        const close = (e) => {
            if(ref.current && !ref.current.contains(e.target)){
                setOpen(false)
            }
        };
        document.addEventListener('click', close);

        return () => {
            document.removeEventListener('click', close);

        }
    }, [open])

    const handleDisable = (e) => {
        if(!cart.total_items){
            e.preventDefault()
        }
        
    }

 
    return (
        <Container>
            <Btn ref={ref} className={open && 'active'} onClick={() => setOpen(prev => !prev)}>
                <UserIcon />
                Account
                <ArrowDown open={open} />
            </Btn>
            <DropdownCont>
                <DropdownMenu open={open}>

                {currentUser && currentUser.emailVerified  ? 
                <LogoutCont>
                <Dname><UserCir />Hi {currentUser.displayName && currentUser.displayName.split(' ')[0]}</Dname>
                {/* <OrderBtn to='order'><Heart />My Order</OrderBtn> */}
                <LogoutBtn onClick={() => logout()}><LogOut />Logout</LogoutBtn>
                </LogoutCont>
                :
                <>
                     <BtnCont>
                        <LoginBtn to='login' onClick={() => setOpen(open => !open)}>LOGIN</LoginBtn>
                    </BtnCont>
                    <RegisterCont>
                    New Customer? <RegisterLink to='register' onClick={() => setOpen(open => !open)}>Register</RegisterLink>
                    </RegisterCont>
                </> 
                }
                </DropdownMenu>
            </DropdownCont>

            <Menu to='cart'  onClick={handleDisable} disabled={!cart.total_items}>
                <CartIcon />
                Cart
                 <Circle> {cart.total_items > 0 ? cart.total_items : 0 }</Circle>
            </Menu>

            {/* Mobile menu */}
            <Mobilemenu to='login'><UserIcon /></Mobilemenu>
            <Mobilemenu to='cart' onClick={handleDisable} disabled={!cart.total_items}><CartIcon /><CartCircle>{cart.total_items > 0 ? cart.total_items : 0 }</CartCircle></Mobilemenu>

        </Container>
    );
}

export default Dropdown;