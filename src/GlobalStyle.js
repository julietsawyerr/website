import { createGlobalStyle } from "styled-components";
import {device} from './device';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
    }

    body{
        margin:0;
        padding:0;
        font-family:var(--font-family-poppins);
        font-size:0.9rem;
        height:-webkit-fill-available;
        background-image: linear-gradient(
            to right,
            #E1D8CC 0%,
            #E1D8CC 65%,
            #6c3926ea 65%,
            #6c3926ea 100%
        ),
        
        url('images/wood.jpg');
        background-position: right top;
        background-repeat: repeat;
        background-size: 35% 100% 100%;

        //Media Queries
        @media ${device.mobileM}{
        font-size:0.75rem;
        background: #E1D8CC;
        background-image: linear-gradient(
            to top,
            #E1D8CC 0%,
            #E1D8CC 65%,
            #6c3926ea 65%,
            #6c3926ea 100%
        ),
        
        url('images/mbg.jpg');
        background-position: top;
        background-repeat: repeat-x;
        background-size: 35% 100% 100%;
        }

     
    }  
`;

export default GlobalStyle;