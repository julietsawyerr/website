import styled from 'styled-components/macro';
import {Link} from 'react-router-dom'
import {device} from '../../device';
import { CheckmarkCircle } from '@styled-icons/ionicons-solid/CheckmarkCircle';
import { AlertCircle } from '@styled-icons/ionicons-solid/AlertCircle';
import {Google3} from '@styled-icons/icomoon/Google3';

export const Container = styled.div`
    display:flex;
    width:90%;

    @media ${device.laptopXL}{
        width:80vw;
    }

    @media ${device.tablet}{
        margin:0 auto;
    }

    @media ${device.mobileM}{
        width:100%;
        flex-direction:column;
        background:var(--primary);
    }

`;

export const Lside = styled.div`
    position:relative;
    width:60%;
    padding:0px 50px;
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

    @media ${device.mobileM}{
        width:90%;
        margin:0 auto;
        background:var(--primary);
        //border-radius:10px;
        padding:30px 0;

        &::after{display:none;}
    }
`;

export const Rside = styled.div`
    position: sticky;
    width:40%;
     top: 40px; 
     height:70vh;
     background:var(--pale-silver);
     padding:50px 40px;
     text-align:justify;
     display:flex;
     flex-direction:column;
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

    @media ${device.laptopXL}{
        height:550px;
    }

    @media ${device.tablet}{
        top: 25px; 
        height:85vh;
        padding:25px;
    }

    @media ${device.mobileM}{display:none;}


 
`;


export const Heading = styled.h1`
    font-size: 2rem;
    font-family: var(--font-family-nunito);
    margin:40px 0 0;

    @media ${device.tablet}{
        margin-top:10px;
    }
    
`;



export const Form = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:20px;
`;

export const ForgetPass = styled.span`
    width:auto;
    margin-left: auto;
    text-decoration:underline;
    color:black;
`;

export const FormSpan = styled.span`
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
    text-decoration:none;
`;



export const HeadingTwo = styled.h2`
    font-size: 1.5rem;
    font-family: var(--font-family-nunito);
    margin:0 5px 15px;
`;

export const Paragraph = styled.p`
    font-size:1rem;
    margin:0 5px 25px;

    @media ${device.tablet}{
        width:100%;
    }

    @media ${device.mobileM}{
        width:100%;
        margin:0 0 25px;
    }
    
`;


export const LinkCont = styled(Link)`
    text-decoration:none;
    margin-top:auto;  
`;

export const Button = styled.div`
    width:100%;
    text-decoration:none;
    text-align:center;
    padding:7px 0;
    color:var(--primary);
    background:var(--black);
    text-transform:uppercase;
    font-size:0.90rem;
    cursor:pointer;
    //transform:translateY(150px);

    transition: all 0.3s ease;


    &:hover{
        background:var(--dark);
    }
`;

export const Input = styled.input.attrs({ type: 'submit' })`
     width:100%;
    text-decoration:none;
    text-align:center;
    padding:10px 0;
    color:var(--primary);
    background:var(--black);
    text-transform:uppercase;
    font-size:0.90rem;
    cursor:pointer;
    outline:none;
    border:none;



    //transform:translateY(150px);

    transition: all 0.3s ease;


    &:hover,
    &:disabled{
        background:var(--dark);
    }
`;

export const FButton = styled(Button)`
    background:var(--secondary);
    color:var(--primary);
    // border:1px solid var(--gray);
    margin: 15px auto 0;
    text-transform:uppercase;
    font-size:0.90rem;

    &:hover{
        background:#623422;
        // font-weight:bold;
    }

      @media ${device.mobileM}{
        border:${({bg}) => (bg ? 'none' : '1px solid var(--gray)')};
        border-bottom:1px solid var(--gray);
        margin: 15px auto 0;
        background:${({bg}) => (bg ? 'transparent' : 'var(--secondary)')};
        color:${({bg}) => (bg ? 'var(--black)' : 'var(--primary)')};
        
        &:hover{
        background:var(--secondary);
    }

    @media ${device.mobileL}{
        margin: 15px auto 0;
    }
`;

export const DividerCont = styled.div`
    width:100%;
    height:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 20px auto;
    display:none;


    &::after{
        content:'';
        position:absolute;
        width:70%;
        height:1px;
        background:var(--black);
    }
`;

export const WhiteSpace = styled.div`
   margin-top:15px;
`;

export const Google = styled(Google3)`
    color:var(--primary);
    width:25px;
    margin-right:20px;

    @media ${device.mobileM}{
        color:var(--primary);
        width:20px;
    }
`;        


export const Success = styled.div`
    display:flex;
    gap:15px;
    align-items:center;
    position:relative;
    font-size:0.90rem;
     width:100%;
     margin:20px 0;
     padding:10px 20px;
     /* background:var(--pale-silver); */
     background:rgba(177,210,123, 0.3);
     border-radius: 5px;
     //color:var(--success);
     box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

     &::before{
        position:absolute;
        content:'';
        width:5px;
        height:100%;
        left:0;
        top:0;
        border-radius: 5px  0 0 5px;
        background:var(--success);
     }

    //  @media ${device.tablet}{
    //     align-items:flex-start;
    // }

`;

export const Check = styled(CheckmarkCircle)`
    color:var(--success);
    width:40px;
    /* margin-right:10px;  */

    @media ${device.tablet}{
        width:90px;
    }
`;

export const MobileLogin = styled.div`
     display:none;
     @media ${device.mobileM}{
        width:100%;
        display:flex;
        flex-direction:column;
        gap:10px;
        justify-content:center;
        align-items:center;
        font-size:1rem;
        background:transparent;
        color:var(--black);
        // border-bottom:1px solid var(--gray);
        padding:3px 0;
        margin: 20px auto;
        padding-top: 40px;
        border-top:1px solid gray;
     }
`;

export const Login = styled(Link)`
     width:100%;    
     text-decoration:none;
`;

export const ResetBtn = styled(Login)`
     color:var(--black);
`;

export const Warning = styled.div`
    display:flex;
    gap:10px;
    align-items:center;
    background-color: rgba(0, 0, 0, 0.06);
    padding:10px;
    margin:15px 0;
    box-shadow: rgba(215, 67, 56, 0.24) 0px 3px 8px;
    border:2px solid #d7433855;
    color:var(--dark);
    border-radius:5px;

    @media ${device.mobileM}{
        font-size:0.95rem;
    }
`;

export const Alert = styled(AlertCircle)`
     width:30px;
     color:var(--danger);;

     @media ${device.tablet}{
        width:30px;
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

export const InputAlert = styled(AlertCircle)`
     width:20px;
     color:var(--danger);
     margin-left:10px;

     @media ${device.tablet}{
        width:20px;
    }
`; 

export const PasswordState = styled.span`
    cursor:pointer;
    font-size:0.8rem;
    font-weight: bold;
    color:var(--black);
    text-decoration: underline;
`;


export const InputCont = styled.div`
    position:relative;
`;


