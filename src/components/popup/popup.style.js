import styled from 'styled-components/macro'
import {device} from '../../device';

export const Container = styled.div`
    display:flex;
    align-items:center;
    position:fixed;
    top:calc(100vh - 90px);
    left:${({trigger}) => (trigger ? '5%' : '-120%')};
    box-shadow: 0 3px 15px -2px black;
    z-index:1;
    transition: all 0.3s ease-in;

    @media ${device.mobileM}{
        display:${({trigger}) => (trigger ? 'flex' : 'none')};
        justify-content:center;
        width:100%;
        height:90px;
        padding:0;
        top:calc(${({height}) => (height && height + 'px')} - 90px);
        background: var(--black);
        left:0;
        background:white;
        opacity:${({trigger}) => (trigger ? '1' : '0')};  
    }
`;

export const Cont = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background:rgba(0,0,0,0.8);
    font-size:1rem;
    color:var(--primary);
    // font-weight:600;
    // font-family: var(--font-family-mont);
    padding:15px 30px 15px 25px;
    border-radius:3px;
    

    @media ${device.mobileM}{
        width:90%;
        padding:15px 0;
        background:rgba(0,0,0,0.8);
        border:1px solid #fff;
    }
    
`;
   

export const  Main = styled.div`
    font-size:1.1rem;
`;
    

