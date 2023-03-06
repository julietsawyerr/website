import styled from 'styled-components/macro'
import {device} from '../../device';

 export const Container = styled.div`
    width: 100%;
    height:100%;
    min-height:calc(100vh - 175px); 
    margin:0 auto;
    //border:1px solid gray;

    @media ${device.tablet}{
        width:100%;
        margin:0px auto;
        
    }

    @media ${device.mobileM}{
       width:100%;
    }
`;



