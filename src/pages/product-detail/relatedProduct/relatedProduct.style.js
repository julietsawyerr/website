import styled from 'styled-components/macro';
import {ChevronCircleRight} from '@styled-icons/fa-solid/ChevronCircleRight'
import {ChevronCircleLeft} from '@styled-icons/fa-solid/ChevronCircleLeft'
import {Link} from 'react-router-dom'
import {device} from '../../../device'


export const CircleRight = styled(ChevronCircleRight)`
    //right:0;
`;
export const CircleLeft = styled(ChevronCircleLeft)`
    //left:0;
`;

export const Container = styled.div`
    width:calc(100% - 30px);
    margin:30px 30px 0px 0;
    box-sizing: border-box;
    //border:1px solid gray;

    @media ${device.mobileM}{
        width:90%;
        margin:40px auto 0;
    }
`;

export const Heading= styled.h1`
    margin:0;
    font-size: 1.3rem;
`;


export const CircleLeftCont = styled.div`
    left:0;

`;

export const CircleRightCont = styled.div`
    right:0;
    
`;

export const SubCont = styled.div`
    position:relative;
    border-top:1px solid rgba(0, 0, 0, 0.20);
    border-bottom:1px solid rgba(0, 0, 0, 0.20);
    padding:20px 0;
    display:flex; 
    align-items: center;
   


    //border:1px solid gray;
    ${CircleRightCont}, ${CircleLeftCont}{
        position:absolute;
        width:40px;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        opacity:0;
    }

    ${CircleRight}, ${CircleLeft}{
        width:30px;
        color:var(--black); 
        cursor:pointer;
        transition: all 0.3s ease;

    }

    &:hover{
        ${CircleRightCont}, ${CircleLeftCont}{
            opacity:0.5;
        }
    }
`;


export const CardCont = styled.div`
    display:flex;
    gap: 19px;
    overflow-x:scroll;
    scroll-behavior: smooth;
    scrollbar-width: none;

    &::-webkit-scrollbar{
        display:none;
    }

    /* @media ${device.tablet}{
        flex-wrap: wrap;
    } */


`;


export const Card = styled(Link)`
    //border:1px solid gray;
    text-decoration:none;
    width: 145px;
    height:auto;
    /* margin-right:15px; */
    //background:rgba(225,225,225, 0.2);
    box-shadow: rgba(209, 196, 190, 0.9) 25px 0px 25px -20px inset, rgba(209, 196, 190, 0.9) -25px 0px 25px -20px inset;
    
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
   

`;

export const Image = styled.div`
    display:flex;
    justify-content: center;
    align-items:flex-start;
    width: 110px;
    height: 10vw;
    object-fit: contain;
    margin:10px;
    //border:1px solid gray;

    @media ${device.tablet}{
        height: 15vw
    }

    @media ${device.mobileM}{
        height: 30vw
    }

    @media ${device.laptopL}{
       height:8vw;
    }
    

    img{
        height:10vw;

        @media ${device.tablet}{
        height: 15vw
        }

        @media ${device.mobileM}{
            height: 30vw
        }

        @media ${device.laptopL}{
        height:8vw;
        }
    }
    
`;

export const Cont = styled.div`
    width: 100%;
    padding:0 10px 15px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    //border:1px solid gray;
`;


export const Title = styled.h1`
    font-family: var(--font-family-saira);
    font-size:1.1rem;
    font-weight:500;
    letter-spacing: 1px;
    color:var(--black);
    line-height:1.1;
    margin:0;

`;

export const ProductPrice = styled.h1`
    font-family: var(--font-family-mont);
    font-size: 0.75rem;
    color:var(--black);
    margin:0;
`;