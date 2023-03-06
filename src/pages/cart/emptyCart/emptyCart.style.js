import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {Cart} from '@styled-icons/fluentui-system-regular/Cart'
import {device} from '../../../device';



export const Container = styled.div`
    display:flex;
    width:90%;
    min-height:calc(100vh - 175px);
    height:100%; 
    margin:0 auto;

    @media ${device.laptopXL}{
        width:80vw;
    }
    
    @media ${device.tablet}{
        width:90%;
        margin:0 auto;
    }

    @media ${device.mobileM}{
        width:100%;
        flex-direction:column;
    }
`;

export const Lside = styled.div`
    position:relative;
    width:60%;
    padding:40px 0 0;
    //border:1px solid gray;

    &::after{
        content:'';
        position:absolute;
        left:0;
        top:40px;
        width:1px;
        height: 20vw;
        background-color: rgba(0, 0, 0, 0.20);
    }

    @media ${device.tablet}{
        padding:20px 0 30px;
    }

    @media ${device.mobileM}{
        width:100%;
        background:var(--primary);
        //border-radius:10px;
        padding:60px 0;

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
     display:flex;
     flex-direction:column;
    //border:1px solid gray;

    @media ${device.laptopXL}{
        height:550px;
    }

    @media ${device.tablet}{
        padding:30px;
    }

    @media ${device.mobileM}{
        width:90%;
        height:100%;
        padding:50px;
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


export const HeadingTwo = styled.h2`
    font-size: 1.5rem;
    font-family: var(--font-family-nunito);
    margin:0;
`;

export const Paragraph = styled.p`
    font-size:1rem;

`;

export const LinkCont = styled(Link)`
    text-decoration:none;
    margin-top:auto;


    @media ${device.tablet}{
        margin-bottom:0px;
    }

    @media ${device.mobileM}{
        margin-top:30px;
    }
`;

export const Button = styled.div`
    width:100%;
    text-decoration:none;
    text-align:center;
    padding:10px 0;
    color:var(--primary);
    background:var(--black);
    text-transform:uppercase;
    font-size:0.90rem;
    //transform:translateY(150px);

    transition: all 0.3s ease;


    &:hover{
        background:var(--dark);
    }
`;

export const ImgCont = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   // width:270px;
    //padding:10px 0;
    //border:1px solid gray;

    img{
        height:250px;

        @media ${device.tablet}{
            height:150px;
        }
    }

    span{
            font-size:1.1rem;
            font-weight:normal;
            transform:translateY(-5px);
            
        }

`;

export const BtmParagraph = styled.div`
    font-size:2.5rem;
        color:var(--black);
        text-align:center;
        font-weight:bold;
        margin:0;
        //transform:translateY(-15px);
        
`;


export const CartImg = styled(Cart)`
    width:280px;
    margin:0;
    padding:0;
`;


