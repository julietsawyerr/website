import styled from 'styled-components/macro';
import {device} from '../../../device';


export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 90%;
    margin:0 auto;
    // border:1px solid gray;

    @media ${device.laptopXL}{
        width:80vw;
    }
`;


export const GridContainer = styled.div`
      display:grid;
    grid-template-columns:repeat(auto-fill, minmax(190px, 1fr));
    grid-column-gap: 10px;
    grid-row-gap: 30px;
    width:100%;
    //grid-gap:1px;
    padding:0px 0 30px;
    //border: 2px solid gray;

    @media ${device.tablet}{
        grid-template-columns:repeat(auto-fill, minmax(180px, 1fr));
    }

    @media ${device.laptopXL}{
        grid-column-gap: 30px;
        grid-row-gap: 30px;
    }

    @media ${device.desktop}{
        grid-column-gap: 50px;
    grid-row-gap: 50px;
    }
`;