import styled from 'styled-components/macro'
// import { Checkmark } from '@styled-icons/ionicons-solid/Checkmark';
import { Checkmark } from '@styled-icons/zondicons/Checkmark';
import {Smile} from "@styled-icons/feather/Smile";
import {device} from '../device';

export const Container = styled.div`
    position:relative;
    width: 100%;
    min-height:100vh;
    height:100%;
    padding-bottom:${({locatn}) => (locatn === '/' ? '0' : '90px')};
    box-sizing: border-box;
    //padding-bottom:100px;
    //border:3px solid gray;

    @media ${device.mobileM}{
     min-height:${({height}) => (height && height + 'px')};
    }
`;


export const Main = styled.div`
    display:flex;
    justify-content:center;
    // width:${({locatn}) => (locatn === '/shop' ? '100%' : '90%')};
    width:100%;
    min-height:calc(100vh - 195px);
    height:100%; 
    margin:20px auto 0;
    //border:1px solid gray;

    @media ${device.laptopXL}{
        //  width:${({locatn}) => (locatn === '/shop' ? '100vw' : '80vw')};
    }

    @media ${device.tablet}{
        // width:${({locatn}) => (locatn === '/shop' || locatn === '/cart' ? '100%' : '90%')};
        margin:${({locatn}) => (locatn === '/' ? '20px auto' : '0 auto')};

    }

    @media ${device.mobileM}{
        min-height: 100%;
        margin:0 auto;
        // width:${({locatn}) => (locatn === '/' ? '85%' : '100%')};
        flex-direction:column;
        background:${({locatn}) => (locatn === '/' ? 'transparent' : 'var(--primary)')};
    }

`;

export const AlertCont = styled.span`
    display:flex;
    align-items:center;
    position:fixed;
    top:calc(100vh - 90px);
    left:${({showAlert}) => (showAlert ? '5%' : '-120%')};
    box-shadow: 0 3px 15px -2px black;
    z-index:1;
    transition: all 0.3s ease-in;

    @media ${device.mobileM}{
        justify-content:center;
        width:100%;
        height:90px;
        padding:0;
        top:calc(${({height}) => (height && height + 'px')} - 90px);
        background: var(--black);
        left:0;
        background:white;
        display:${({showAlert}) => (showAlert ? 'flex' : 'none')};  
    }
`;

export const Alert = styled.div`
display:flex;
justify-content:center;
align-items:center;
background:rgba(0,0,0,0.8);
font-size:1rem;
color:var(--primary);
// font-weight:600;
//font-family: var(--font-family-mont);
padding:15px 30px 15px 25px;
border-radius:3px;


@media ${device.mobileM}{
    width:90%;
    padding:15px 0;
    background:rgba(0,0,0,0.8);
    border:1px solid #fff;
}

`;

export const Check = styled(Checkmark)`
    color:var(--primary);
    height:20px;
   `;


export const Smiles = styled(Smile)`
    color:var(--primary);
    height:25px;
`;

