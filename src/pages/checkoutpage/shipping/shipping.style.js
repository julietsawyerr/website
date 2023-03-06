import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {device} from '../../../device';
import {User} from '@styled-icons/evil/User';
import { AlertCircle } from '@styled-icons/ionicons-solid/AlertCircle';

export const Container = styled.div`
    margin:30px 0;
`;

export const Heading = styled.h2`
    font-size: 1.2rem;
    font-family: var(--font-family-nunito);
    margin:0;
    text-transform:uppercase;
`;

export const ContactInfo = styled.div`
    display:flex;
    align-items:center;
    gap:5px;
    margin:10px 0;

    span{
        font-weight:bold;
        padding-right:5px;
    }

    small{
        font-size:0.9rem;
    }
`;

export const UserImg = styled(User)`
    width:60px;
    color:gray;
    // color:#6c3926ea;
`;

export  const Logout = styled.div`
    text-decoration:underline;
`;

export const LoginDetails =styled.div`
    display:flex;
    align-items:center;
    `;

export const InnerCont =styled.div`
    display:flex;
    flex-direction:column;
    // gap:5px;
`;


export const Form = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:10px;
    margin:10px 0;

    span{
        display:flex;
        gap:8px;
        // justify-content:flex-end;
        align-items:center;
        font-size: 0.90rem;
        color:var(--danger);
        padding: 5px 0 5px;
        // border-top:1px solid var(--danger);
        margin-top:2px;
        transition:all 3s ease;
    }
`;

export const InputCont = styled.div`
    position:relative;
`;

export const InputAlert = styled(AlertCircle)`
    position:absolute;
    right:10px;
    top: 50%;
    transform: translateY(-130%);
     width:20px;
     color:var(--danger);

     @media ${device.tablet}{
        width:20px;
    }
`; 

export const Alert = styled(AlertCircle)`
     width:30px;
     color:var(--danger);

     @media ${device.tablet}{
        width:50px;
    }
`; 

export const Inputs = styled.div`
    display:flex;
    width:100%;
    gap:10px;
    box-sizing:border-box;
`;

export const Half = styled.div`
    width:calc(50% - 5px);
    // border:1px solid gray;
`;

export const MenuItem = styled.option`
    background:var(--pale-silver);
    padding:20px 0;

    &::hover {
        background-color: yellow;
    }
`;

export const SubmitInput = styled.input.attrs({ type: 'submit' })`
     width:100%;
    text-decoration:none;
    text-align:center;
    padding:10px 0;
    color:var(--primary);
    background:var(--black);
    text-transform:uppercase;
    font-size:1rem;
    cursor:pointer;
    outline:none;
    border:none;
    margin-top:10px;



    //transform:translateY(150px);

    transition: all 0.3s ease;


    &:hover,
    &:disabled{
        background:var(--dark);
    }
`;


export const WrapperDiv = styled.div`
    position:absolute;
    right:0;
    top: 43px;
    transform: translateY(-130%);
    padding-right:10px;
    margin-top:0 auto;
`;