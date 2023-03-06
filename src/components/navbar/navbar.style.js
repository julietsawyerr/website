import styled from "styled-components/macro";
import {device} from '../../device';
import {MenuAlt3} from '@styled-icons/heroicons-solid/MenuAlt3'
import {Close} from '@styled-icons/material/Close'
import {NavLink} from 'react-router-dom'
import {UserCircle} from '@styled-icons/boxicons-solid/UserCircle'

export const Container = styled.div`
    position:relative;
    box-sizing: border-box;
    width:100%;
    height:80px;
    user-select: none;
    -moz-user-select: none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   z-index:99;

   @media ${device.laptopXL}{
    height:100px;
}

`;


export const Subcontainer = styled.div`
    width:90%;
    height:80px;
    margin: 0 auto;
    //border:1px solid gray;
    display:flex;
    align-items: center;

    @media ${device.laptopXL}{
        height:100px;
        width:80vw;
    }
`;


export const Logo = styled.img`
    height: 35px;
    transform:translateY(-10px);

    @media ${device.tablet}{
        margin-right:auto;
        user-select: none;
    }
`;


export const NavbarContainer = styled.div`
    height: 80px;
    //border:1px solid gray;
    display:flex;
    align-items: center;
    gap:40px;
    margin:0 auto;

    @media ${device.tablet} { 
        position:fixed;
        left:${({open}) => (open ? '0' : '-120%')};
        top:0;
        flex-direction:column;
        justify-content:center;
        gap:25px;
        height:100vh;
        width:100vw;
        background:#6c3926ee;
        transition: all 0.3s ease;
        user-select: none;
        z-index: 1;
        
        
  }

  @media ${device.mobileM} {gap:40px; }

`;

export const Menu = styled(NavLink)`
display:block;
    position:relative;
    text-decoration:none;
    color:var(--black);
    font-family: var(--font-family-nunito);
    text-transform: uppercase;
    font-size:0.95rem;
    font-weight: 600;
    // width:100% !important;
    letter-spacing: 2px;
    user-select: none;

    &::after {
        position: absolute;
        content: "";
        width: 0%;
        height: 4px;
        background-color: #3D3635;
        left:0;
        bottom: -7px;
        transition: all 0.2s ease-in-out;
        }
    
        &:hover {
            &::after {  
                color:#3D3635;
                width: 100%;
                left: 0;
            }
        } 
    
        &.active {
             &::after {
                width: 100%;
                left: 0;
                }
            }


            @media ${device.tablet} { 
                color:var(--primary);
                &::after{display:none} 
                    
                
            }

`;

// icon

export const Bars = styled(MenuAlt3)`
     @media ${device.mobileM}{
        color:var(--khaki);
    }
`;


export const CloseBtn = styled(Close)`
    position:fixed;
    color:var(--primary);
    z-index:99;
`;  

export const Hamburger  = styled.div`
        //border:1px solid gray;
        margin-right: 20px;
        cursor:pointer;
        user-select: none;
        display:none;

        ${Bars}, ${CloseBtn}{
            width:30px;
            height:30px;
            transform: translateY(-3px);
            user-select: none;
        }

        @media ${device.tablet} {display:flex }
`;

export const User =styled.div`
        display:none;
        @media ${device.tablet} {
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width:100vw;
            margin:0 0 20px 0;
            user-select: none;
            -moz-user-select: none;
           -khtml-user-select: none;
           -webkit-user-select: none;
           -ms-user-select: none;

            // border: 1px solid var(--primary);
        }
`;

export const UserInfo = styled(User)`
    display:none;
    @media ${device.tablet} {
    display:flex;
    gap:30px;
    width:100% !important;
    border-bottom:none;
    // border-top:5px solid var(--primary);
    } 
`;


export const SpaceBtw = styled.div``;

export const UserIcon = styled(UserCircle)`
        width:80px;
        color:var(--primary);
`;


export const Display = styled.p`
        color:var(--primary);
        font-size:1.1rem;
        margin-bottom:0;
        width:100%;
        text-align:center;
`;

export const Small = styled.small`
        color:var(--primary);
        font-size:0.75rem;
`;

export const LogOutDiv = styled.div`
    color:var(--primary);
    font-family: var(--font-family-nunito);
    text-transform: uppercase;
    font-size:0.95rem;
    font-weight: 600;
    letter-spacing: 2px;
    user-select: none;
`;




