import styled from 'styled-components/macro';
import {device} from '../../device'

export const Container = styled.div`
    display:flex;
    width:90%;
    // background:var(--pale-silver);
    min-height:calc(100vh - 195px);
    height:100%; 
    
    // border:1px solid gray;
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
        padding:25px;
    }

    @media ${device.mobileM}{
        display:none;
    }
`;

export const Heading = styled.h1`
    font-size: 1.5rem;
    font-family: var(--font-family-nunito);
    margin:20px 0;

    @media ${device.tablet}{
        margin-top:10px;
    }
    
`;

export const OrderCont = styled.div`
    width:100%;
    height:calc(100vh - 259px);
    // overflow-y:scroll;
    // border:1px solid gray;
`;

export const HeadingTwo = styled.h2`
    font-size:1rem;
    font-weight:bold;
`;