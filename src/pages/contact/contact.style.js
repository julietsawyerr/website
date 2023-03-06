import styled from 'styled-components/macro';
import {Link} from 'react-router-dom'
import {device} from '../../device';
 import {Location} from '@styled-icons/evil/Location'
 //import {Location} from '@styled-icons/entypo/Location'
import {Mail} from '@styled-icons/fluentui-system-regular/Mail'
import {Chat} from '@styled-icons/fluentui-system-regular/Chat'
import {Smartphone} from '@styled-icons/feather/Smartphone'
import {FacebookCircle} from '@styled-icons/remix-line/FacebookCircle'
// import {CheckmarkCircle} from '@styled-icons/ionicons-outline/CheckmarkCircle'
import { CheckmarkCircle } from '@styled-icons/ionicons-solid/CheckmarkCircle';
import { AlertCircle } from '@styled-icons/ionicons-solid/AlertCircle';

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
        margin:0px auto;
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
     height:80vh;
     background:var(--pale-silver);
     padding:60px 50px 60px; 
     display:flex;
     flex-direction:column;

     @media ${device.laptopXL}{
        height:550px;
        padding:60px 50px 80px 50px; 
     }
     
    @media ${device.tablet}{
        padding:30px 30px 50px;
        height:85%;
    }

    @media ${device.mobileM}{
        width:90%;
        padding:40px;
        margin:0 auto;
    }

    &::after{
        content:'';
        position:absolute;
        left:0;
        top:0;
        width:5px;
        height: 70px;
        background-color: var(--secondary);
    } 
`;


export const Heading = styled.h1`
    font-size: 2rem;
    font-family: var(--font-family-nunito);
    margin:20px 0 0;


    @media ${device.tablet}{
        margin:15px 0 0;
    }
    
    @media ${device.mobileM}{
        margin:0;
    }
`;



export const Form = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:20px;

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

export const HeadingTwo = styled.h2`
    font-size: 1.5rem;
    font-family: var(--font-family-nunito);
    margin:0 5px 15px;
    text-align:left;
`;

export const HeadingThree = styled.h2`
    font-size: 1.1rem;
    font-family: var(--font-family-nunito);
    margin:0 0 3px;
    text-align:left;
`;

export const MsgCont = styled.div`
    display:flex;
    flex-direction:column;
`;

export const Paragraph = styled.p`
    font-size:1rem;
    margin:0 5px 25px;
    width:70%;

    @media ${device.tablet}{
        width:100%;
    } 
`;

export const  ParagraphTwo = styled(Paragraph)`
    width:70%;
    margin:0;
`;


export const ForgetPass = styled.div`
    display:flex;
    justify-content:flex-end;
    margin:0 0 20px;
    text-decoration:underline;
    font-weight:bold;
    cursor:pointer;
    
`;

export const LinkCont = styled(Link)`
    text-decoration:none;
    margin-top:auto;
    //margin-bottom:30px;

    /* @media ${device.tablet}{
        margin-bottom:0px;
    }

    @media ${device.mobileM}{
        margin-top:30px;
    } */
`;

export const Button = styled.div`
    width:100%;
    text-decoration:none;
    text-align:center;
    padding:7px 0;
    color:var(--primary);
    background:var(--black);
    text-transform:uppercase;
    font-size:1rem;
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
    background:transparent;
    color:var(--black);
    border-bottom:1px solid var(--gray);
    padding:3px 0;
    margin: 20px auto;
    text-transform:capitalize;
    //background:var(--info);

    &:hover{
       background:transparent;
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

export const Fb = styled(FacebookCircle)`
    color:#666362;
    width:35px;
    margin-left:10px;
`; 

export const Success = styled.div`
display:flex;
gap:10px;
align-items:center;
background-color: rgba(0, 0, 0, 0.06);
padding:10px;
margin:15px 0;
box-shadow: rgba(46, 139, 87, 0.24) 0px 3px 8px;
border:2px solid #3CB37155;
color:var(--dark);
border-radius:5px;

@media ${device.mobileM}{
    font-size:0.95rem;
}
`;

export const Check = styled(CheckmarkCircle)`
    color:#3CB371;
    width:30px;
    // margin-right:10px; 

    @media ${device.tablet}{
        width:60px;
    }
`;

export const Cont = styled.div`
    display:flex;
    gap:15px;
    align-items:center;
    margin: 15px 0;
    font-size:1rem;

    
`;

export const Icon = styled.div`
     display:flex;
     justify-content:center;
     align-items:center;
     width:40px;
     height:40px;
     border-radius:50%;
     background:var(--gray);



`;

export const Locatn = styled(Location)`
    height:22px;
    color:var(--pale-silver);
    margin:0;
`;

export const EmailFill = styled(Mail)`
     height:20px;
     color:var(--pale-silver);

`;

export const Mobile = styled(Smartphone)`
     height:20px;
     color:var(--pale-silver);
`;

export const LetsChat = styled(Chat)`
     height:20px;
     color:var(--pale-silver);
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
     color:var(--danger);

     @media ${device.tablet}{
        width:50px;
    }
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
