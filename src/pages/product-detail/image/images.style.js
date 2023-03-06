import styled from 'styled-components/macro'
import {ArrowBack} from '@styled-icons/boxicons-regular/ArrowBack'
import {Link} from 'react-router-dom'
import {ChevronThinRight} from '@styled-icons/entypo/ChevronThinRight'
import {ChevronThinLeft} from '@styled-icons/entypo/ChevronThinLeft'
import {device} from '../../../device';

export const Container = styled.div`
    // position:relative;
    display:flex;
    flex-direction: column;
    gap:20px;
    width: 100%;
    //box-shadow: rgba(209, 196, 190, 0.9) 25px 0px 25px -25px inset ;
    padding:0 0 0 20px;
    //border:1px solid gray;

    // &::before{
    //     content:'';
    //     position:absolute;
    //     left:0px;
    //     width:1px;
    //     height: 18vw;
    //     background-color: rgba(0, 0, 0, 0.20);
    //     top:20%;
       
    // }

    @media ${device.tablet}{
        box-shadow: rgba(209, 196, 190, 0.9) 25px 0px 25px -25px inset ;
         &::before{display:none;}
    }

    @media ${device.mobileM}{
        background:var(--primary);
        box-shadow:none;
        padding:20px;

        &::before{display:none;}

    }
`;

export const MainCont = styled.div`
    display: flex;
    width:100%;
    height:100%;

    @media ${device.mobileM}{
        flex-direction:column;
    }
`;


export const Arrow = styled(ArrowBack)`
    height:15px;
`;

export const Back = styled(Link)`

    display:flex ;
    justify-content:center;
    align-items:center;
    align-self: flex-start;
    text-decoration: none;
    color:var(--black);
    gap:5px;
`;


export const ImgCont = styled.div`
    position:relative;
    display:flex ;
    justify-content: space-between;
    width:85%;
    min-height:30vw;
    height:100%;
   // border:1px solid gray;

   @media ${device.tablet}{
        min-height:36vw;
    }

    @media ${device.mobileM}{
        width:100%;
        min-height:75vw;

    }

    `;

export const SlideCont = styled.div`
    position:absolute;
    left:0;
    top:0;
    width:100%;

    display:flex;
    justify-content:center;
    //align-items:;

    opacity:${({activeIndex, index}) => (activeIndex  === index ? '1' : '0')};
    transition: opacity ease-in-out 0.3s;
    //border:1px solid gray;
    
    img{
        object-fit:contain;
        max-width:100%;
        height:30vw;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
        transition: opacity ease-in-out 0.3s;

        @media ${device.tablet}{
        height:36vw;
    }

    @media ${device.mobileM}{
        height:75vw
    }
        
    }
`;


export const ArrowCont = styled.div`
    width: 15%;
    //border:1px solid gray;
    

    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
   
    @media ${device.mobileM}{
        width:100%;
        flex-direction: row;
        margin-top:20px;
    }
    
`;

export const ArrowContSub = styled.div`
    height:auto;
    padding:10px;
    //border:1px solid gray;

    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap:20px;

    @media ${device.mobileM}{
        flex-direction: row;
    }
`;

export const RightArr = styled(ChevronThinRight)`
    height:12px;
`;
export const LeftArr = styled(ChevronThinLeft)`
    height:12px;
`;

export const Btn = styled.button`
    width:30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border:none;
    outline:none;
    //border-radius: 50%;
    background-color: transparent;
    //border:1px solid gray;

 `;

export const SlideCount = styled.div`
    font-size:0.95rem;
    font-weight:bold;
    font-family: var(--font-family-nont);
    transform:rotate(-0.25turn);

    @media ${device.mobileM}{
        transform:rotate(0deg);
    }
  
`;