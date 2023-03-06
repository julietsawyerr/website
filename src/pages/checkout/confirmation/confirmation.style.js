import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {device} from '../../../device';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin:50px 0;

    @media ${device.mobileM}{
        margin:30px 0 0;
    }
`;

export const Heading = styled.h2`
    font-size: 1.2rem;
    font-family: var(--font-family-nunito);
    margin:0;
    text-transform:uppercase;
`;

export const FormLoading = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:80%

`;


export const Paragraph = styled.p`
        margin:20px 0;
        // padding:10px 0;
        font-size:1rem;

`;


export const Cont = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:20px;
    padding:20px 0;

    p{
        margin-bottom:10px;
        font-size:0.95rem;
        
    }

    span{
        font-weight:bold;
    }
`;

export const Button = styled(Link)`

    background:var(--black);
    padding:10px;
    text-transform:uppercase;
    letter-spacing:1px;
    color:var(--primary);
    text-decoration:none;
    text-align:center;
    font-size:0.95rem;

    &:hover{
        background:var(--dark)
    }
`;