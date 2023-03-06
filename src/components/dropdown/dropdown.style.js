import styled from 'styled-components/macro';
import {device} from '../../device';
import {NavLink, Link} from 'react-router-dom';
import {User} from '@styled-icons/fa-regular/User';
import {ShoppingCart} from '@styled-icons/material-outlined/ShoppingCart';
import {ArrowUpS} from '@styled-icons/remix-line/ArrowUpS';
import {ArrowDownS} from '@styled-icons/remix-line/ArrowDownS';
import { keyframes } from 'styled-components'
import {SignOut} from '@styled-icons/fluentui-system-regular/SignOut';
import {HeartOutlined} from '@styled-icons/entypo/HeartOutlined';
import {UserHeart} from '@styled-icons/remix-line/UserHeart';


const scaleUp = keyframes`
0% {
     transform: scale(1);
    }
   
    50% {
     transform: scale(0.95);
    }
   
    100% {
     transform: scale(1);
    }
`;
 
export const Menu = styled(NavLink)`
`;


export const Btn = styled.button``;

export const ArrowUp = styled(ArrowUpS)``;

export const ArrowDown = styled(ArrowDownS)``;

export const UserIcon = styled(User)`
    width:20px;
    height:20px;
    color: var(--khaki);
    transform:translateY(-3px);
    transition: all .3s ease-in-out;

    
`;

export const CartIcon = styled(ShoppingCart)`
    width:23px;
    height:23px;
    color: var(--khaki);
    transform:translateY(-3px);
    transition: all .3s ease-in-out;
    

    @media ${device.mobileM}{
        margin-right:20px;
    }

`;

export const Container = styled.div`
     position:relative;
    display:flex;
    justify-content: center;
    align-items: center; 
    gap:20px;
    //border:1px solid gray; 


    ${ArrowDown}, ${ArrowUp}{
        width:20px;
        height:20px;
        color: var(--khaki);
        //transform:${({open}) => (open ? 'rotate(0deg)' : 'rotate(180deg)')};
        transition: all .3s ease-in-out;
    }
       


    ${Menu}, ${Btn}{
        text-decoration: none;
        display: flex;
        align-items: center;
        gap:10px;
        padding:10px 15px;
        color:var(--khaki);
        border:2px solid var(--khaki);
        outline:none;
        border-radius:50px; 
        background:transparent; 
        font-family: var(--font-family-nunito);
        text-transform: uppercase;
        font-size:0.95rem;
        font-weight: 600;
        letter-spacing: 1px;
        cursor:pointer;
        transition: all .3s ease-in-out;
        
        &:hover, &.active{
            color:var(--primary);
            border:2px solid var(--secondary);
            background-image: linear-gradient(to top, #755449,  var(--secondary));
            box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.75);
            transition: all .3s ease-in-out;

            ${CartIcon}, ${UserIcon}, ${ArrowUp}, ${ArrowDown}{
                color:var(--primary);
            }

        }

        &[disabled]{
            cursor:default;
        }

        @media ${device.tablet} {display:none;}
    }    
`;

export const DropdownCont = styled.div`
    position:absolute;
    overflow:hidden;
    left:0;
    top:45px;
    width: 200px;
    height:200px;
    //background:orange;

    @media ${device.tablet}{
        display:none;
    }
    
`;

export const DropdownMenu = styled.div`
    position:absolute;
    top:13px;
    width:175px;
    height:auto;
    background-color:var(--primary);
    border-radius:5px;
    font-family: 'Poppins', sans-serif;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transform:${({open}) => (open ? 'translateY(0)' :  'translateY(-120%)' )};
    transition: all .3s ease-in-out;

    &::after{
        content:'';
        position:absolute;
        border-width: 10px;
        bottom: 100%;  /* At the top of the tooltip */
        left: 50%;
        margin-left: -10px;
        border-style: solid;
        border-color: transparent transparent #E1D8CC transparent;
        filter : drop-shadow(0px -1px 1px rgba(130,130,130,1));

    }
`;

export const BtnCont = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: var(--secondary);
    font-family: 'Poppins', sans-serif;;
    box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    border: none;
    cursor:pointer;
    margin:10px 10px 15px 10px;
        
    &::after {
    content: " ";
    width: 0%;
    height: 100%;
    background: var(--khaki);
    position: absolute;
    transition: all 0.3s ease-in-out;
    right: 0;
    }

    &:hover {
        &::after{
        right: auto;
        left: 0;
        width: 100%;
    }
    
    }

`;


export const LoginBtn = styled(NavLink)`
    text-align: center;
    text-decoration: none;
    width: 100%;
    padding: 10px 30px;
    color: var(--primary);
    font-size: 0.9em;
    font-weight: 600;
    letter-spacing: 0.1em;
    z-index: 20;
    transition: all .3s ease-in-out;

    &:hover {
    color: var(--secondary);
    animation: ${scaleUp} 0.3s ease-in-out;
    }
`;

export const RegisterCont =  styled.p`
    border-top: 1px solid gray;
    padding: 15px 10px 10px 10px;
    text-align:center;
    font-size:14px;
    color:var(--secondary);
`;

export const RegisterLink = styled(Link)`
    color:var(--secondary);
    font-weight:600;
`;


export const Mobilemenu = styled(Link)`
    display:none;

    @media ${device.tablet}{
        position:relative;
        display:flex;

        &[disabled]{
            cursor:not-allowed;
        }
    }
`;

export const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:25px;
    height:25px;
    font-size: 0.65rem;
    color:var(--black);
    background-color: var(--khaki);
    font-family: var(--font-family-mont);
    border-radius: 50%;
`;

export const CartCircle = styled(Circle)`
    position:absolute;
    left:15px;
    top:-13px;
    width:25px;
    height:25px;
    color:var(--khaki);
    background-color: rgba(0,0,0,0.7);
`;

export const LogoutCont = styled.div`
    margin:15px;
    // border:1px solid gray;
`;
    

export const Dname = styled.p`
    display: flex;
    // justify-content: center;
    align-items: center;
   

    // font-size:1rem;
    font-weight:bold;
    color:var(--secondary);
   
`;

export const LogoutBtn = styled(Dname)`
    cursor:pointer;
    font-weight:normal;
`;

export const OrderBtn = styled(Link)`
    display: flex;
    align-items: center;
    font-weight:normal;
    color:var(--secondary);
    text-decoration:none;
    cursor:pointer;
    
    `;

export const LogOut = styled(SignOut)`
    width:35px;
    color:var(--secondary);
    padding-right:10px;
`;

export const UserCir = styled(UserHeart)`
    width:35px;
    color:var(--secondary);
    padding-right:10px;
`;

export const Heart = styled(HeartOutlined)`
    width:35px;
    color:var(--secondary);
    padding-right:10px;
`;


// export const RegisterCont =  styled.p`
//     border-top: 1px solid gray;
//     padding: 15px 10px 10px 10px;
//     text-align:center;
//     font-size:14px;
//     color:var(--secondary);
// `;

// export const RegisterLink = styled(Link)`
//     color:var(--secondary);
//     font-weight:600;
// `;

