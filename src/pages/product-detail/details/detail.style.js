import styled from 'styled-components/macro'
import {device} from '../../../device'
import {ChatBubblesQuestion} from '@styled-icons/fluentui-system-filled/ChatBubblesQuestion'
import {ScFacebook} from '@styled-icons/evil/ScFacebook'
import {ScTwitter} from '@styled-icons/evil/ScTwitter'
import {Whatsapp} from '@styled-icons/boxicons-logos/Whatsapp'


export const Container = styled.div`
    // position:relative;
     padding-top:5px;
    //  background-color: var(--pale-silver);
     width:100%;
    padding:30px;

    //  &::after{
    //     content:'';
    //     position:absolute;
    //     left:0;
    //     top:0;
    //     width:5px;
    //     height: 70px;
    //     background-color: var(--secondary);
    // }

    @media ${device.tablet}{
        padding:20px;
    }

     @media ${device.mobileM}{
        width:90%;
        padding:20px;
        margin:0 auto;
        background-color: var(--pale-silver);
     }

     @media ${device.laptopL}{
        padding:40px;
    }
`;

export const Cont = styled.div`
    display:flex;
    justify-content:space-between;

    @media ${device.tablet}{
        flex-direction:column;
        gap:5px;
        margin-bottom: 15px;
    }
`;

export const PriceCont = styled.div`
    display:flex;
    align-items:center;
    gap:20px;
    align-items: center;
    width:auto;
    //border:1px solid gray;
`;

export const QuestionCont = styled(PriceCont)`
    width:55%;


    @media ${device.tablet}{
        width:100%;
    }
`;

export const BtnCont = styled.div`
    display:flex;
    align-items:center;
    gap:20px;
    align-items: center;
    //border:1px solid gray;

    @media ${device.tablet}{
        flex-direction:column;
        /* margin-bottom: 15px; */
    }
`;

export const Heading = styled.h1`
    margin:0;
    font-size: 1.5rem;
    font-family: var(--font-family-nunito);
    
`;


export const DiscountPrice = styled.h2`
    font-family: var(--font-family-roboto);
    font-size: 1.1rem;
    font-weight:500;
    margin:0;
`;


export const Price = styled(DiscountPrice)`
    /* font-family: var(--font-family-); */
    //font-size: 0.75rem;
    color:var(--dark);
    text-decoration: line-through;
    text-transform:uppercase;
`;

export const Table = styled.table`
    width:100%;
    text-align: center;
    margin:20px 0;
    font-size: 0.9rem;

    th{
        width:33%;
        padding:10px 0;
        background: var(--primary);
        border:none;
        outline: none;
        border-top:1px solid rgba(0, 0, 0, 0.20);;
        text-align: center;
    }

    td{
        width:33%;
        padding:15px;
        text-align: center;
    }

    span{
        font-weight:bold;
    }
`;

export const Button = styled.div`
    text-decoration: none;
    width:45%;
    padding:10px 0;
    text-align: center;
    font-size: 0.9rem;
    font-weight: bold;
    text-transform: uppercase;
    color:var(--primary);
    background-color: var(--black);
    cursor:pointer;
    border:none;
    outline: none;
    transition: all 0.3s ease;

    &:hover{
        background-color: var(--dark);
    }

    @media ${device.tablet}{
        width:100%;
    }
`;

export const Paragraph = styled.p`
    font-size: 0.9rem;
    /* width:45%; */
    
`;

export const Question = styled(ChatBubblesQuestion)`
    width:auto;
    height: 70px;
    margin-right:-10px;
    color:var(--black);

    @media ${device.tablet}{
        height: 50px;
    }
`;

export const QuestionLink = styled.a`
   color:var(--black);
   padding-left:5px;
   font-weight:bold;

   @media ${device.tablet}{
    padding-left:0px;
    }

    @media ${device.mobileM}{
    //padding-left:5px;
    }
`;

export const SocialCont = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:5px;
   

    //border:1px solid gray;

    h1{
        font-size: 1rem;
        //font-weight:600;
    }
`;


export const Facebook = styled(ScFacebook)``;
export const Twitter = styled(ScTwitter)``;
export const WhatsappIcon = styled(Whatsapp)``;

export const SocialIcon = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
    margin-top:10px;
    //border:1px solid gray;


`;

export const LinkIcon = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width:40px;
    height: 40px;
    border:1px solid var(--gray);
    border-radius: 50%;
    transition:all 0.3s ease;


    ${Facebook}, ${Twitter}, ${WhatsappIcon}{
         //width:40px;
         height: 25px;
        color:var(--gray);
        cursor: pointer;
    }

    &:hover{
        background-color: var(--black);

        ${Facebook}, ${Twitter}, ${WhatsappIcon}{
            color:var(--pale-silver);
        }

    }
`;

export const Description = styled.div`
    text-align: justify;
    font-size: 0.95rem;
    margin-top:30px;
    border-top:1px solid rgba(0, 0, 0, 0.20);;
    padding:20px 0 10px;

    @media ${device.mobileM}{
        //text-align: left;
    }
`;





