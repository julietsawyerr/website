import styled from 'styled-components/macro'
import {device} from '../../device';

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    padding: ${({check}) => (check === 'true' ? '100px 0' : '0px 25px')};

   @media ${device.mobileM}{

    padding: ${({check}) => (check === 'true' ? '120px 0' : '2px 0px')};
   }
`;