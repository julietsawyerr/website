    import styled from 'styled-components/macro'
    import {Link} from 'react-router-dom'
    import {device} from '../../device';

    export const Container = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        padding-top:40px;
        width:100%;
        height:100%;
        //border:5px solid gray;

        @media ${device.tablet}{
            padding-top:0;
       }
    `;

    export const LeftCont = styled.div`
         display:flex;
        //flex-direction:column;
        //justify-content: flex-start;
        align-items: flex-start;
        width:15%;
        //border:1px solid gray;

        @media ${device.mobileM}{
            display:none;
       } 
    `; 

    export const Line = styled.div`   
        height:150px;
        width:1px;
        background-color: rgba(0, 0, 0, 0.20);
        transform:translateY(-70px);
        //border:1px solid gray;
  
        @media ${device.tablet}{
            height:80px;
            transform:translateY(-90px);
       }

       @media ${device.mobileL}{
        transform:translateY(-40px);
       }
    `;

    export const RightCont = styled.div`
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: flex-start;
        //padding-top:20px;
        width:85%;
         //border:3px solid gray;

       @media ${device.tablet}{
            width:85%;
        }

       @media ${device.mobileM}{
        width:80%;
        margin:0 auto;
        justify-content: flex-start;
        align-items: flex-start;
        padding-top: 10px;
        margin-bottom:40px;

       }
    `;


    export const HeadingTwo = styled.h1`
        font-family: var(--font-family-nunito);
        font-size:3vw;
        font-style: italic;
        text-transform:uppercase;
        font-weight:300;
        margin-top:0;
        letter-spacing: 1px;
        color: var(--black);
        padding:0;

        @media ${device.mobileM}{
            font-size:6vw;
       }

       @media ${device.laptopL}{
            font-size:2.8vw;
       }
`;

    export const HeadingOne = styled.h1`
        position:relative;
        font-family: var(--font-family-nunito);
        font-size:5vw;
        font-style: italic;
        text-transform:uppercase;
        font-weight:900;
        margin-top:0;
        transform:translateY(-3.7vw);
        //transform:translateY(-2.9vw);
        letter-spacing: -2px;
        color: var(--black);

        span{
            color:var(--secondary);
        }
        
        &::after{
            content:'';
            position:absolute;
            bottom:3px;
            left:0;
            width:100px;
            height:4px;
            background:var(--black);
        }

        @media ${device.laptopL}{
            font-size:4.8vw;
             transform:translateY(-3.4vw);
       }

        @media ${device.tablet}{
            transform:translateY(-3vw);
            &::after{
                bottom:0px;
            }
       }

       @media ${device.mobileM}{
            font-size:9vw;
            transform:translateY(-5vw);
       }
    `;

    export const Paragraph = styled.p`
        font-size:2.3vw;
        font-style: italic;
        font-family:var(--font-family-nunito);
        margin:0;
        transform:translateY(-5vw);
        color: var(--black);
        line-height: 1.3;
        //padding:-15px 0;

        @media ${device.mobileM}{
            font-size:5.6vw;
            transform:translateY(-5vw);
            //padding:25px 0  20px;
            
       }
        
    `;

    export const Explore = styled(Link)`
    display:flex;
    justify-content: center;
    align-items:center;
    text-decoration:none;
    font-family: var(--font-family-nunito);
    background:var(--black);
    font-size:1.3vw;
    transform:translateY(-2.5vw);
    //font-size:16px;
    font-style: italic;
    color:white;
    outline:none;
    padding: 10px 30px;
    border:none;
    border-radius:50px;
    letter-spacing:3px;
    box-shadow: 0 3px 15px -2px black;
    cursor:pointer;
    transition: all 0.5s ease;

    &:hover{
        
        transform: scale(.9);
        background: black;
        transition: all 0.5s ease;
        transform:translateY(-2.5vw);
  
    }

    @media ${device.laptopL}{
            font-size:1.1vw;
        }

    @media ${device.tablet}{
        font-size:1.6vw;
       }

       @media ${device.mobileM}{
        font-size:3vw;
        margin-top:15px;
        transform;none;
       }

    `;

    export const BottomText = styled.p`
        font-family: 'Segoe Script';
        transform:translateY(-2.5vw);
        font-size:1.6vw;
        //font-size:18px;
        line-height:1.2;
        padding-top:12px;

        @media ${device.laptopL}{
            font-size:1.5vw;
        }

        @media ${device.mobileM}{
            font-size:3.8vw;
            padding:20px 0  20px;
       }
    `;