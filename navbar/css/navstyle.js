import styled from 'styled-components/macro'
import { Menu } from '@styled-icons/heroicons-solid/Menu';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { Cart } from '@styled-icons/ionicons-outline/Cart';
import { ShoppingCart } from '@styled-icons/foundation/ShoppingCart';

import { User } from '@styled-icons/boxicons-regular/User';
import { UserCheck } from '@styled-icons/boxicons-regular/UserCheck';

import { NavLink } from 'react-router-dom';



export const Toolbar = styled.div`
    width:100%;
    height:80px;
    /* background:white;  */
    /* z-index:5; */

    @media(max-width:700px){
        position:relative;
    }
`;

export const ToolDiv = styled.div`
position:reletive;


    width: 90%;
    height:100%;
    margin:0 auto;
    display:flex;
    align-items:center;
    gap:20px;
    /* position:relative; */
 
    /* border:1px solid gray; */

  `;


export const Hamburger = styled.div`
    display:none;
    cursor:pointer;

    @media (max-width:700px){
        display:block;

    }
`;

export const StyledMenu = styled(Menu)`
    color:black;
    width:28px;
    height:28px;
`;

export const StyledCloseBtn = styled(CloseOutline)`
    color:black;
    width:28px;
    height:28px;
`;

export const Logo = styled.img`
    width:126px;
    height:42px;
    margin-right:80px;
    margin-top: -20px;

    @media(max-width:700px){
        margin-right:auto;
    }
  `;

export const IconBar = styled.div`
    display:flex;
    gap:10px;
    /* position:absolute;
    right:0; */

    /* @media(max-width:700px){
        position: absolute;
        right:0;
    
    } */
  `;

export const StyledCart = styled(Cart)`
    color:black;
    width:28px;
    height:28px;
`;

export const StyledCartFill = styled(ShoppingCart)`
    color:black;
    width:28px;
    height:28px;
`;

export const StyledUser = styled(User)`
    color:black;
    width:28px;
    height:28px;
`;

export const StyledUserCheck = styled(UserCheck)`
    color:black;
    width:28px;
    height:28px;
`;



export const NavBar = styled.div`
    margin-right:auto;
    display: flex;
    flex-direction:row;
    position:relative;
    z-index:2;
    

    @media(max-width:700px){
        z-index:2;
        align-items:center;
        position: absolute;
        left:150px;
        display:${({ isOpen }) => (isOpen ? 'block' : 'none')};
        width:100%;
        height:100vh;
        transition: height 10s ease;
        background:black;
        color:white;
        top:80px;
        left:0;
        flex-direction:column;      
    }
  `;

export const StyledLink = styled(NavLink)`
    display:block;
    font-size:1.1rem;
    color:black;
    margin:8px 15px;
    cursor:pointer;
    text-decoration:none;
    box-sizing:border-box;
    position: relative;

    &::after {
	position: absolute;
	content: "";
	width: 0%;
	height: 4px;
	background-color: black;
	left:0;
	bottom: -10px;
	transition: all 0.5s ease-in-out;
    }


    &:hover {
        &::after {
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

  @media(max-width:700px){
      color:white;
      text-align:center;
      padding:20px 0;
      margin:0;

      &:hover{
        background:#EDB4AD;
        color:black;
    } 
  }
`;
