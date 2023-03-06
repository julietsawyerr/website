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
    margin-top: auto;
    //border: 1px solid orange;

    @media ${device.mobileM}{
        width:90%;
        margin:0 auto;
    }

    /* @media ${device.tablet}{
        transform:translateY(-200px); 
    } */

    
`;

export const SubCont = styled.div`
    width:100%;
      display:flex;
    justify-content:flex-end;
    align-items: center;
    //border:1px solid black;
`;

export const Line = styled.div`
    width:7%;
    height:1px;
    background: var(--khaki);
    margin-right:5px;

    
    @media ${device.tablet}{
            width:5%;
                     
    }

    @media ${device.mobileM}{
            width:90px;
            background:#575748;
                     
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
            color:#575748;
    }
    
}
    @media ${device.mobileM}{
            width:40px;
            height:40px; 
            margin:0 2px;            
    }

    @media ${device.tablet}{
            width:32px;
            height:32px;

            ${InstagramLogo}{
                transform:translateX(-5px)
            }
        }
`;