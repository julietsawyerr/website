import styled from 'styled-components/macro'
 import {device} from '../../device';

 export const Container = styled.div`
    //position:relative;
    width: 100%;
    min-height:calc(100vh - 175px);
    height:100%; 
    //margin-bottom: 100px;
    background:var(--primary);
 //border:5px solid gray;

`;

export const BgCont = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    height: 45vh;
    background:var(--primary);
    background-image: url(images/pbg.jpg);
    //background-blend-mode:multiply;
    background-position: left; 
    background-repeat: no-repeat; 
    background-size: cover; 
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    transition: all 0.5s ease;

    @media ${device.tablet}{
        //background-position: left;  
        background-image: url(images/pmbg.jpg);
    }


    @media ${device.mobileL}{
        background-position: center; 
        background-image: url(images/pmmbg.jpg);
    }

    @media ${device.mobileM}{
        height: 25vh;       
    }
`;

export const BlackCont = styled.div`
    display:flex;
    align-items:center;
    width:auto;
    background: rgba(0, 0, 0, 0.5);


    @media ${device.laptopXL}{
        margin-left:10vw;
        height:100%; 
    }
`;

export const TextCont = styled.div`
        /* display:flex;
        flex-direction:column; */
        //aspect-ratio: 2/1;
        width:auto;
        padding: 15px 65px 0px 65px;

        @media ${device.tablet}{
            padding: 10px 30px 0px 50px;
    }

    @media ${device.mobileM}{
            padding: 15px 20px 0px 20px;
    }
`;

export const HeadingOne = styled.h1`
    position:relative;
    display:flex;
    align-items: center;
    color:var(--primary);
    font-family: var(--font-family-saira);
    letter-spacing: 4px;
    font-size:2vw;
    font-weight:200;
    text-transform:uppercase;
    padding-left:20px;
    margin:0;

    &::after{
        content:'';
        position:absolute;
        left:60%;
        width:80px;
        height:1px;
        background:var(--khaki);
    }


    @media ${device.mobileM}{
        font-size: 4vw;

        &::after{
        content:'';
        position:absolute;
        left:65%;
        width:40px;
        height:1px;
        background:var(--khaki);
    }
    }
`; 

export const HeadingTwo = styled.h2`
   font-size:2.5vw;
   //font-size:2rem;
    font-family: 'Trajan Pro';
    font-weight:400;
    color:var(--primary);
    text-transform:uppercase;
    margin:0;
    //transform:translateY(-10px);

    @media ${device.laptop}{
        font-size:3vw;
    }

    @media ${device.tablet}{
        font-size:3.5vw;
    }

    @media ${device.mobileL}{
        font-size: 4vw;
    }

    @media ${device.mobileM}{
        font-size: 5vw;
    }
`;

export const HeadingThree = styled.h2`
    position:relative;
    display:flex;
    align-items: center;
    font-size:2.5vw;
    font-family: var(--font-family-saira);
    font-weight:200;
    color:var(--primary);
    text-transform:capitalize;
    margin:0;
    padding-left: 130px;
    transform:translateY(-15px);
  
    

    &::after{
        content:'';
        position:absolute;
        left:1%;
        width:70px;
        height:12px;
        background:var(--khaki);
        padding-left:50px;
    }

    @media ${device.laptop}{
        //font-size: ;
    }

    @media ${device.tablet}{
        transform:translateY(-12px);
        letter-spacing: 1px;
    }

    @media ${device.mobileL}{
        transform:translateY(-8px);
    }

    @media ${device.mobileM}{
        font-size: 5vw;
        padding-left: 90px;

        &::after{
        content:'';
        position:absolute;
        left:1%;
        width:30px;
        height:12px;
        background:var(--khaki);
        padding-left:50px;
    }
    }
`;