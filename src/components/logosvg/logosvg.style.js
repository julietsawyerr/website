import  styled from 'styled-components/macro'
import {device} from '../../device';
import {Link} from 'react-router-dom';

export const Logo = styled.svg`
    height: 35px;
    margin-top:-18px;
    user-select: none;
    

   

    @media ${device.mobileM}{
        g{
            fill:var(--khaki);
        }
        
    }    
    
`;

export const HomeLink = styled(Link)`
        @media ${device.tablet}{
            margin-right:auto;
        }
`;