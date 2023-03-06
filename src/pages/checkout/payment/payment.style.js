import styled from 'styled-components/macro';
import {device} from '../../../device';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin:30px 0;

    @media ${device.mobileM}{
        margin:10px 0 0;
    }
`;

export const Heading = styled.h2`
    font-size: 1.2rem;
    font-family: var(--font-family-nunito);
    margin:0;
    text-transform:uppercase;
`;


export const ShipToCont = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const Change = styled.p`
    text-decoration:underline;
    cursor:pointer;
`;

export const Cont = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:20px;
     border-bottom:1px solid rgba(0, 0, 0, 0.10);
    padding:20px 0;

    p{
        margin:0;
        font-size:0.95rem
        
    }
`;

export const Contner = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:20px;
    padding:20px 0;

    p{
        margin:0;
        font-size:0.95rem
        
    }
`;

export const PayCont = styled.div`
    background-color: rgba(0, 0, 0, 0.10);
    border:1px solid rgba(0, 0, 0, 0.15);
    // box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding:30px;
    margin-top:10px;
`;

export const Button = styled.button`
    width: 100%;
    font-size:1rem;
    // font-weight:bold;
    background: var(--black);
    color: var(--primary);
    text-align: center;
    padding: 10px 0;
    text-transform: uppercase;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
    border: none;
    outline: none;
    cursor: pointer;
`;