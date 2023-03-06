import styled from 'styled-components/macro';
import {device} from '../../device'


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
        //margin:0 auto;
        width:100%;
        flex-direction:column;
    }

`;

export const LCont = styled.div`
    position:relative;
    width:55%;
    //border:1px solid gray;

    
    &::before{
        content:'';
        position:absolute;
        top:0px;
        left:0px;
        width:1px;
        height: 18vw;
        background-color: rgba(0, 0, 0, 0.20);       
    }

    @media ${device.tablet}{
        &::before{display:none;}
    }

    @media ${device.mobileM}{
        width:100%;

        &::before{display:none;}
    }

  
`;

export const RCont = styled.div`
   position:relative;
    width:45%;
    background-color: var(--pale-silver);
    

    &::after{
        content:'';
        position:absolute;
        left:0;
        top:0;
        width:5px;
        height: 70px;
        background-color: var(--secondary);
    }
   
 
    @media ${device.mobileM}{
        display:${({loading}) => loading ? 'none' : 'block'};
        width:100%;
        background-color:transparent;

        &::after{
            left:5%;
        }
    }

`;

