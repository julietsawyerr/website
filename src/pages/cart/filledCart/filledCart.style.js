import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'
import {Delete} from '@styled-icons/fluentui-system-regular/Delete'
import {Plus} from '@styled-icons/boxicons-regular/Plus'
import {ArrowDown} from '@styled-icons/bootstrap/ArrowDown'
import {Minus} from '@styled-icons/evaicons-solid/Minus'

import {device} from '../../../device'


export const Container = styled.div`
    display:flex;
    width:90%;
    margin:0 auto;
    //border:1px solid gray;

    
    @media ${device.laptopXL}{
        width:80vw;
    }

    @media ${device.tablet}{
        flex-direction:column;
        width:100%;
        background:var(--primary);
        padding-bottom:50px;
    }

    @media ${device.mobileM}{
        flex-direction:column;
        widht:100%;
        padding-bottom:0px;
    
    }
`;

export const Lside = styled.div`
    position:relative;
    width:60%;
    padding: 20px 50px;
    //border:1px solid gray;

    &::after{
        content:'';
        position:absolute;
        left:0;
        top:0px;
        width:1px;
        height: 20vw;
        background-color: rgba(0, 0, 0, 0.20);
    }

    @media ${device.tablet}{
        width:100%;

        &::after{display:none}
    }

    @media ${device.mobileM}{
        width:90%;
        padding: 20px 0px;
        margin:0 auto;
    }
`;

export const Rside = styled.div`
    position: sticky;
     width:40%;
     top: 40px; 
     height:100%;
     background:var(--pale-silver);
     padding: 30px 45px;
    //border:1px solid gray;

    &::after{
        content:'';
        position:absolute;
        left:0;
        top:0;
        width:5px;
        height: 70px;
        background-color: var(--secondary);
    }

    @media ${device.tablet}{
        width:90%;
        margin:0 auto;
        padding: 30px 60px;
    }

    @media ${device.mobileM}{
        width:90%;
        margin:0 auto;
        padding: 30px;
    }
`;

export const HeadingCont = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
`;

export const Heading = styled.h1`
    font-size: 2rem;
    font-family: var(--font-family-nunito);
    margin:0;

    @media ${device.mobileM}{
        font-size:1.8rem;
    }
    
`;

export const Table = styled.table`
    width:100%;
    text-align: center;
    margin:20px 0;
    font-size: 0.9rem;

    

    th{
        width:25%;
        padding:10px 0;
        border:none;
        outline: none;
        text-align: center;
        background: var(--pale-silver);
        border-top:5px solid rgba(0, 0, 0, 0.05);
        // border-bottom: 1px solid rgba(0, 0, 0, 0.10);
    }

    tr{
        border-top:5px solid rgba(0, 0, 0, 0.05);
    }

    td{
        width:25%;
        padding:15px;
        text-align: center;
        vertical-align:middle;
       
        //border-bottom: 1px solid gray;
    }  


    // tr:last-child{
    //     border:none;
    // }

    @media ${device.mobileM}{
        td{
        padding: 15px 0;
        }
    }

   
`;

export const ItemCont = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:10px;
`;

export const Image = styled.img`
    height:8vw;
    object-fit:contain;

    @media ${device.mobileM}{
        height:16vw;
    }

`;

export const Paragraph = styled.p`
    font-size:0.9rem;
    margin:0;
`;

export const Price = styled.div`
    display:flex;
    flex-direction:column;
    gap:5px;
    font-family:var(--font-family-mont);
    font-size:0.9rem;
    font-weight:bold;
    margin:0;
`;

export const GrayText = styled.div`
    font-size:0.7rem;
    font-family:var(--font-family-mont);
    color:var(--gray);
`;

export const StockLeft = styled(GrayText)`
    color:var(--danger);
    //padding-top:3px;
    font-weight:bold;
`;

export const TitleCont = styled.div`
    display:flex;
    justify-content:space-between;
    padding-bottom:10px;
    border-bottom:1px solid rgba(0, 0, 0, 0.20);;
`;

export const Title = styled(Heading)`
    font-size:1.2rem;
`;

export const BodyCont = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 30px 0;

    .bolder {
        font-size:1rem;
        font-weight:bold;
    }
`;

export const LText = styled(Paragraph)`
    width:50%;

    @media ${device.tablet}{
        width:80%;
    }
`;

export const SmallFont = styled.small`
    font-size:0.65rem;
    text-align:right;
    width:50%;

    @media ${device.tablet}{
        font-size:0.75rem;
        width:20%;
    }

    @media ${device.tablet}{
        width:50%;
        font-size:0.70rem;
    }

`;

export const RText = styled(Paragraph)`
    width:50%;
    text-align:right;
    font-weight:bold;
    font-family:var(--font-family-mont);

`;

export const ClearIcon = styled(ArrowDown)`
        width:20px;
        height:20px;
        // background:red;
        color:var(--black);
        // padding-right:5px;
`;

export const Clear = styled.button`
    display:flex;
    gap:10px;
    align-items:flex-end;
    width:auto;
    font-family:var( --font-family-nunito);
    font-weight:bold;
    color:var(--black);
    background:transparent;
    padding:10px 10px;
    border:none;
    outline:none;
    // letter-spacing:1px;
    text-transform:uppercase;
    // border-radius:5px;
    cursor:pointer;

    &:hover{
   
    }

    @media ${device.mobileM}{
        gap:5px;
    }
    

`;

export const DelBtn = styled(Delete)``;

export const Remove = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:3px;
    border:1px solid var(--black);
    border-radius:5px;
    cursor:pointer;
    padding:${({width}) => (width <= 540 ? '5px' : '5px 10px 5px 5px')};
    transform:translateX(30px);
    background:transparent;

    ${DelBtn}{
        height:25px;
        color:var(--black);
        padding:0;
        margin:0;
    }
`;



export const Increase = styled(Plus)``;  

export const Decrease = styled(Minus)``;

export const QuantityBtn = styled.button`
    outline:none;
    border:none;
    cursor:pointer;
    background:transparent;

    ${Increase},${Decrease}{
    width:25px;
    color:var(--black);
    margin:0;
    padding:5px;
    border-radius:5px;
    }

    &:disabled{
        color:var(--gray);
        cursor:default;

        ${Increase},${Decrease}{
            color:var(--gray);
        }
    }
`;

export const QtyCont = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    font-size:1rem; 
`; 

export const Btn = styled.button`
    display:flex;
    align-items:center;
    width:25px;
    height:25px;
    border:1px solid var(--black);
    border-radius:5px;
    background:transparent;
    cursor:pointer;

`;

export const CheckoutBtn = styled.button`
    width:100%;
    background:var(--black);
    color:var(--primary);
    text-align:center;
    padding:10px 0;
    text-transform:uppercase;
    letter-spacing:1px;
    border:none;
    outline:none;
    cursor:pointer;

    &:hover{
        background:var(--dark)
    }
`;

export const Notice = styled.p`
    width:100%;
    padding: 10px;
    //font-size:0.85rem;
    //font-style:italic;
    margin-top:20px;
    border:none;
    outline:none;
    text-align:justify;

    span{
        font-weight:bold;
    }
`;

export const ViewDetails = styled(Link)`
    text-decoration:none;
    color:var(--black);
    font-size:0.70rem;
    font-weight:bold;
    transform:translateY(-10px);

    &:hover{
        text-decoration:underline;
    }
    
`;