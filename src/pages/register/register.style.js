import styled from 'styled-components/macro';
import {Link} from 'react-router-dom'
import {device} from '../../device';
import { AlertCircle } from '@styled-icons/ionicons-solid/AlertCircle';
import {Google3} from '@styled-icons/icomoon/Google3';
import {CheckmarkCircle2} from '@styled-icons/evaicons-solid/CheckmarkCircle2'





export const Container = styled.div`
    display:flex;
    width:90%;
    // min-height:calc(100vh - 175px);
    // height:100%; 
    // margin-top:20px;
    // margin:20px auto 0px;

    @media ${device.laptopXL}{
        width:80vw;
    }

    @media ${device.tablet}{
        margin:0 auto;
    }

    @media ${device.mobileM}{
        width:100%;
        flex-direction:column;
        background:var(--primary)
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

export const Rside = styled.div`
    position: sticky;
    top:70px;
     width:40%;
    height:70vh;
     background:var(--pale-silver);
     padding:50px;
     display:flex;
     flex-direction:column;
     background:#431C17;
     background-image: url('images/gift.jpg');
    background-position: top;
    background-size: contain;
    background-repeat:no-repeat;

    &::after{
        content:'';
        position:absolute;
        left:0;
        top:0;
        width:5px;
        height: 70px;
        background-color: var(--secondary);
    } 

    ${Button}{
        color:var(--primary);
        background:#52302A;

        &:hover{
            background:#4E2D27;
        }
    }

    @media ${device.laptopXL}{
        height:550px;
    } 

   @media ${device.tablet}{
        padding:30px;
        background-image: url('images/mgift.jpg');
        background-size: contain;
        height:320px;

    }

    @media ${device.mobileM}{
        display:none;
    }

 
`;

export const Heading = styled.h1`
    font-size: 2rem;
    font-family: var(--font-family-nunito);
    margin-top:40px;

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

export const HeadingTwo = styled.h2`
    font-size: 1.5rem;
    font-family: var(--font-family-nunito);
    margin:0;
`;

export const Paragraph = styled.p`
    font-size:1rem;

`;

export const BottomDiv = styled.div`
    margin-top:auto;

    span{
        display:flex;
        justify-content:center;
        padding:0 0 10px;
        color:#E6E5E3;
    }
`;

export const LinkCont = styled(Link)`
    text-decoration:none;
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
    transition: all 0.3s ease;


    &:hover,
    &:disabled{
        background:var(--dark);
    }
`;

export const FButton = styled(Button)`
background: var(--secondary);
    color: var(--primary);
    text-transform: uppercase;
    margin: 10px auto 0;
    font-size:0.90rem;

    &:hover{
        background:#623422;
    }

    @media ${device.mobileM}{
        border:1px solid var(--gray);
        margin: 15px auto 0;
        background:var(--secondary);
        color:var(--primary);

         &:hover{
        background:var(--secondary);
        } 

`;


export const Google = styled(Google3)`
    ccolor:var(--primary);
    width:25px;
    margin-right:20px;

    @media ${device.mobileM}{
        width:20px;
    }
`;        

export const ImageCont = styled.img`
    position:absolute;
    width:100%;
    left:0;
    top:0;
    z-index:-1;
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

export const WrapperDiv = styled.div`
    position:absolute;
    right:0;
    top: 43px;
    transform: translateY(-130%);
    padding-right:10px;
    margin-top:0 auto;
  

`;

export const Alert = styled(AlertCircle)`
     width:30px;
     color:var(--danger);

     @media ${device.tablet}{
        width:25px;
    }
`;  

export const InputAlert = styled(AlertCircle)`
     width:20px;
     color:var(--danger);
     margin-left:10px;

     @media ${device.tablet}{
        width:20px;
    }
`; 

export const InputCont = styled.div`
    position:relative;
`;

export const PasswordState = styled.span`
    cursor:pointer;
    font-size:0.8rem;
    font-weight: bold;
    color:var(--black);
    text-decoration: underline;
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
`;

export const Requirement = styled.div`
    font-size:0.80rem;
    h3{
        font-weight:bold;
        margin-top:-5px;
    }

    ul{
        margin-left:15px;
        padding:0;
    }
`;
export const OVerlay = styled.div`
    background: rgba(0, 0, 0, 0.5);
`;

export const PopUp = styled.div`
    margin: auto;
    background: rgb(255, 255, 255);
    width: 50%;
    padding: 5px;
`;

export const Mark = styled(CheckmarkCircle2)`
    width:40px;
    height:40px;
    color: #3CB371;

    @media ${device.tablet}{
        width:80px;
        height:80px;
    }
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

