import styled from 'styled-components/macro'
import {device} from '../../device';
import {KeyboardArrowRight} from '@styled-icons/material-sharp/KeyboardArrowRight'

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    width:100%;
    height:100%;
    box-sizing: border-box;
`;

export const LeftCont = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    align-items: center;
    gap:20px;
    width:95%;
    height:100%;
    /* border:1px solid gray; */

    @media ${device.mobileM}{
       margin:10% auto 30px;
       height:auto;
       width:100%;
    }

    @media ${device.laptop}{
        width:97%;
    }
`;

export const RightCont = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    gap:30px;
    width:5%;
    height:100%;
    /* border:1px solid gray; */

    @media ${device.tablet}{
         height:auto;
         transform:translateY(-50px)
    }

    @media ${device.mobileL}{
        height:100%;
        transform:translateY(-40px)
    }

    @media ${device.mobileM}{
         display:none;
    }

    @media ${device.laptop}{
        width:4%;
        padding-left:10px;
    }
`;

export const Circle = styled.div`
    box-sizing:border-box;
    width:41vw;
    padding-bottom:38vw;
    border-radius: 50%;
    background:var(--primary);
    border-width:1.5vw;
    border-style: solid;
    border-color: #BBA68A #BBA68A #BBA68A transparent;
    /* transform: translateY(10px); */
    border-block-end-style:double;
    box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.3);
    transition: all 0.4s ease;

    //media query
    @media ${device.tablet}{
        transform: none;
        width:39vw;
        padding-bottom:36vw;
        transform: translateY(-30px);
    }

    @media ${device.mobileL}{
        transform: translateY(-15px);
    }

    @media ${device.laptopL}{
        width:36vw;
        padding-bottom:34vw;
        border-width:1.3vw;
    }

    @media ${device.laptopXL}{
        width:38vw;
        padding-bottom:35vw;
        border-width:1.3vw;
    }

    @media ${device.mobileM}{
        //background:var(--pale-silver);
        border-radius: 2%;
        width:70vw;
        padding-bottom:72vw;
        border-width:50px;
        border-color: transparent transparent var(--khaki) transparent; 
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
        transform:none;
    }
`;

export const SlideCont = styled.div`
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    //height:calc(100% - 10px);
    /* transform: translateY(15px); */
    //background:orange;

    display:flex;
    justify-content:center;
    align-items:center;
    opacity:${({activeIndex, index}) => (activeIndex  === index ? '1' : '0')};
    transition: opacity ease-in-out 0.9s;


    img{
        display:flex;
        align-self: center;
        object-fit:cover;
        max-width:100%;
        height:28vw;
        //height:380px;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
        transition: opacity ease-in-out 0.9s;


        @media ${device.tablet}{
            transform: translateY(-25px);
        }

        @media ${device.mobileL}{
            transform: translateY(-10px);
    }

    @media ${device.mobileM}{
        height:65vw;
        transform: translateY(-30px);
        
    }

    @media ${device.laptopL}{
        height:26vw;
    }
}
`;

export const Line = styled.div`
    width: 1px;
    height:100px;
    background:var(--khaki);

    @media ${device.tablet}{
        height:50px;
    }

`;


export const NumberCont = styled.div`
    position:relateive;
    width:16px;
    height:auto;
     /* border:1px solid gray;    */
`;

export const NumberSlide = styled.div`
    position:absolute;
    font-family: var(--font-family-mont);
    font-size:1rem;
    color:var(--khaki);
    transform:rotate(-0.25turn);
    letter-spacing:1px;
    opacity:${({activeIndex, index}) => (activeIndex  === index ? '1' : '0')};
    transition: opacity ease-in-out 0.4s;
`;

export const Arrow = styled(KeyboardArrowRight)`
    width:30px;
    height:30px;
    color:var(--khaki);
    cursor:pointer;
  
    
`;