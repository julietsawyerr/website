import styled from 'styled-components/macro'
import {device} from '../../device';
import {Instagram} from '@styled-icons/remix-line/Instagram'
import {Whatsapp} from '@styled-icons/remix-line/Whatsapp'

export const InstagramLogo = styled(Instagram)``;
export const WhatsappLogo = styled(Whatsapp)``;

export const Container = styled.div`
    position:absolute;
    bottom:0;
    display:flex;
    justify-content:center;
    width: 100%;
    height:80px;
    //margin-top: auto;
    /* border: 1px solid black; */

    @media ${device.laptopXL}{
        height:100px;
    }
    
`;

export const SubCont = styled.div`
    width:90%;
    display:flex;
    justify-content:flex-end;
    align-items: center;
    //border:1px solid black;
    margin:0 auto;

    @media ${device.laptopXL}{
        width:80vw;
    }

    @media ${device.mobileM}{
            width:80%;
    }
`;

export const Line = styled.div`
    width:7%;
    height:1px;
    background: var(--khaki);
    margin-right:5px;
    //opacity: ${({locatn}) => (locatn === '/' ? '0' : "1")};

    
    @media ${device.tablet}{
            width:9%;
            z-index:-1;        
    }

    @media ${device.mobileM}{
            width:90px;
            background: rgba(0, 0, 0, 0.60);
                     
    }
`;

export const ExternalLink = styled.a`
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width:50px;
    height: 50px;
    border: none;
    border-radius:50%;
    transition: all 0.3s ease;
    cursor:pointer;
    transform:translateX(8px);
    
    &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 45%;
    display: flex;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    
  }

  &:hover {
        &::after {
        background: rgba(0,0,0,.5);
        box-shadow: 0px 3px 10px rgba(0,0,0,.25);
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        margin-left: calc(-50% - 1px);
        transition: all 0.3s ease;
        }
    }


    
    ${InstagramLogo}, ${WhatsappLogo}{
        width:30px;
        height:30px;
        color:var(--khaki);
        

        @media ${device.tablet}{
            width:23px;
            height:23px;
        }

        @media ${device.mobileM}{
            width:25px;
            height:25px; 
            color:rgba(0, 0, 0, 0.60);
    }
    
}
    @media ${device.mobileM}{
            width:40px;
            height:40px; 
            //margin:0 5px;            
    }

    @media ${device.tablet}{
            width:32px;
            height:32px;

            ${InstagramLogo}{
                transform:translateX(-5px)
            }
        }
`;

export const Copyrite = styled.small`
    padding-right:20%;
    text-align:right;
    font-size:10px;
    line-height: 1.3;
    opacity: ${({locatn}) => (locatn === '/' ? '0' : "1")};

    @media ${device.mobileM}{
        padding-right:10%;
    }

`