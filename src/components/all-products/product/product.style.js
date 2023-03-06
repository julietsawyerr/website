import styled from 'styled-components/macro'
import {device} from '../../../device';
import {InfoSquare} from '@styled-icons/bootstrap/InfoSquare'
import {AddShoppingCart} from '@styled-icons/material-rounded/AddShoppingCart'
import {CartCheckFill} from '@styled-icons/bootstrap/CartCheckFill'
import {Link} from 'react-router-dom'


export const Details = styled(InfoSquare)`
    width:18px;
    height:18px;
    color:var(--black);
    /* border-right: 1px solid var(--black); */
    cursor:pointer;
`;
export const Cart = styled(AddShoppingCart)`
     width:18px;
    height:18px;
    color:var(--black);
    cursor:pointer;
    transition: all 0.3s ease;

    @media ${device.tablet}{
        width:15px;
    height:15px;
    }
`;

export const Fill = styled(CartCheckFill)`
    width:18px;
    height:18px;
    color:var(--black);
    cursor:pointer;
    transition: all 0.3s ease;

    @media ${device.tablet}{
        width:15px;
    height:15px;
    }
`;


export const ImgCont = styled.div`
    display:flex;
    justify-content:center;
    margin:0 auto;
    border-radius:6px;
    padding:20px 0;
    width:100%;
    transition:all 0.2s ease-in-out;
`;

export const Image = styled.img`
    height:25vh;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    /* border-radius:6px; */

    @media ${device.desktop}{
        height:15vh;

    }

    @media ${device.laptopXL}{
        height:20vh;
    }

    @media ${device.tablet}{
        height:18vw;
    }

    @media ${device.mobileL}{
        height:20vw;
    } 
    @media ${device.mobileM}{
        height:20vh;
    }
`;



export const Container = styled.div`
    position: relative;
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    text-decoration:none;
    background:rgba(225,225,225,0.2);
    border-radius:6px;
    box-shadow: rgba(209, 196, 190, 0.25) 0px 30px 60px -12px inset, rgba(209, 196, 190, 0.9) 0px 18px 36px -18px inset;
    transition: all 0.2s ease-in-out;  

    &:hover{
        //background:var(--pale-silver);

        ${Image}{
            transform:scale(1.1);
            transition: all 0.2s ease-in-out;
        }
    }
`;



export const LinkContainer = styled(Link)`
    text-decoration: none;
    width:100%;
    height:auto;

    &[disabled]{
        cursor: default;
        
    }

`;




export const TextCont = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    padding:0 20px 10px;
    //border:1px solid gray;


`;

export const ImgCategory = styled.p`
    font-family: var(--font-family-poppins);
    font-size:12px;
    color:var(--gray);
    margin:0
`;

export const Title = styled.h1`
    font-family: var(--font-family-saira);
    font-size:1.4rem;
    font-weight:500;
    letter-spacing: 1px;
    color:var(--black);
    line-height:1.1;
    margin:0;

`;

export const PriceCont = styled.div`
    width:auto;
    display:flex;
    //flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:10px;
`;


export const ProductPrice = styled.h1`
    font-family: var(--font-family-mont);
    font-size: 1rem;
    color:var(--secondary);
    margin:0;

    span{
        position:relative;
        font-family: var(--font-family-poppins); 
    }

    span::after{
        content:'';
        width:14px;
        height:1px;
        //background:black;
        position:absolute;
        left:-1px;
        bottom:8px;
        //border-color: var(--black);
        border-bottom:6px solid var(--seconday);
        border-bottom-style: double;
        
    }

    @media ${device.tablet}{
        font-size: 0.85rem;

        span::after{
            width:13px;
        }
    }
`;

export const OldPrice = styled(ProductPrice)`
    font-family: var(--font-family-lato);
    font-size:0.75rem;
    color:var(--gray);
    text-transform:capitalize;
    text-decoration:line-through;
`;

export const BtnCont = styled.div`
    display:flex;
    padding-top:10px;
    flex-direction:row;
    justify-content:center;
    gap:5px;
    //border:1px solid gray;
`;


export const CartBtn = styled.div`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width:40px;
    height:40px;
    background-color: var(--primary);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;

   &:hover{
    background-color: var(--secondary);
    border:none;

    ${Cart}{
        color:var(--primary);
    }
   }

   @media ${device.tablet}{
    width:30px;
    height:30px;
   }
`;

export const SubCont = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    //border:1px solid gray;
    padding: 10px 20px;
    background-color: var(--pale-silver);

    border-top: 3px solid transparent;
    border-image: linear-gradient(to right, var(--secondary) 0%, var(--secondary) 30%, var(--khaki) 30%, var(--khaki) 100%);
    border-image-slice: 1;

    @media ${device.tablet}{
        padding:10px 10px 10px 20px;
    }
`;

