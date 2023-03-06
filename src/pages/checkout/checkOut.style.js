import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {Cart} from '@styled-icons/fluentui-system-regular/Cart'
import {device} from '../../device';



export const Container = styled.div`
    display:flex;
    width:90%;

    @media ${device.laptopXL}{
        width:80vw;
    }

    @media ${device.tablet}{
        margin:0 auto;
    }

    @media ${device.mobileM}{
        //margin:0 auto;
        width:100%;
        flex-direction:column;
    }
    
`;

export const Lside = styled.div`
position:relative;
width:60%;
padding:0px 50px;
//border:1px solid gray;

&::after{
    content:'';
    position:absolute;
    left:0;
    top:0px;
    width:1px;
    height: 20vw;
    background-color: rgba(0, 0, 0, 0.20);
}
@media ${device.tablet}{padding:0px 40px;}
@media ${device.mobileM}{
    width:90%;
    margin:0 auto;
    background:var(--primary);
    //border-radius:10px;
    padding:30px 0 0;

    &::after{display:none;}
}

    
.ant-steps {
    font-family:var(--poppins);

    svg{
        fill:var(--gray);
    }
}

    .ant-steps .ant-steps-item-finish .ant-steps-item-icon{
        background-color:var(--pale-silver);
        border-color: var(--gray);
    }



    .ant-steps .ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title::after {
        background-color: rgba(0, 0, 0, 0.20);
    }

  
    .ant-steps .ant-steps-item-process .ant-steps-item-icon {
        background-color: #6c3926ea;
        border-color: #6c3926ea;

        
    }


   

    .ant-steps .ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-tail::after {
        background-color: transparent;
       
    }

    

    .ant-steps.ant-steps-vertical {
        display:flex;
        flex-direction: row;
        overflow-x:scroll;
        scroll-behavior: smooth;
        scrollbar-width: none;

        &::-webkit-scrollbar{
            display:none;
        }

       
    }

  
`;

export const Rside = styled.div`
    position:relative;
     width:40%;
     background:var(--pale-silver);
     padding:50px 40px;
     display:flex;
     flex-direction:column;
    // border:1px solid gray;

    @media ${device.laptopXL}{
        height:100%;
    }

    @media ${device.tablet}{
        padding:30px;
    }

    @media ${device.mobileM}{
        display:${({checkoutToken, activeStep}) => !checkoutToken || activeStep > 0 ? 'none' : 'block'};
        width:90%;
        padding:30px 40px;
        margin:0 auto;
    }

    &::after{
        content:'';
        position:absolute;
        left:0;
        top:0;
        width:5px;
        height: 70px;
        background-color: var(--secondary);
    }
`;

export const Heading = styled.h1`
    font-size: 2rem;
    font-family: var(--font-family-nunito);
    margin:20px 0 20px 0;


    @media ${device.tablet}{
        margin:15px 0 20px 0;
    }
    
    @media ${device.mobileM}{
        margin-bottom:20px;
    }
`;


export const HeadingTwo = styled.h2`
    font-size: 1.2rem;
    font-family: var(--font-family-nunito);
    margin:0;
    text-transform:uppercase;
`;

export const Paragraph = styled.p`
    font-size:1rem;

`;

export const LinkCont = styled(Link)`
    text-decoration:none;
    margin-top:auto;
    margin-bottom:30px;

    @media ${device.tablet}{
        margin-bottom:0px;
    }

    @media ${device.mobileM}{
        margin-top:30px;
    }
`;

export const Button = styled.div`
    width:100%;
    text-decoration:none;
    text-align:center;
    padding:10px 0;
    color:var(--primary);
    background:var(--black);
    text-transform:uppercase;
    font-size:1rem;
    //transform:translateY(150px);

    transition: all 0.3s ease;


    &:hover{
        background:var(--dark);
    }
`;

export const ImgCont = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   // width:270px;
    //padding:10px 0;
    //border:1px solid gray;

    img{
        height:250px;

        @media ${device.tablet}{
            height:150px;
        }
    }

    span{
            font-size:1.1rem;
            font-weight:normal;
            transform:translateY(-5px);
            
        }

`;

export const BtmParagraph = styled.div`
    font-size:2.5rem;
        color:var(--black);
        text-align:center;
        font-weight:bold;
        margin:0;
        //transform:translateY(-15px);
        
`;


export const CartImg = styled(Cart)`
    width:280px;
    margin:0;
    padding:0;
`;

export const Stepper = styled.div`
    display:flex;
     gap:16vw;
    margin:30px 0;
`;


export const Step= styled.div`
    position:relative;
    display:inline-flex;
    align-items:center;
    // width:auto;
    color:var(--secondary);
    font-weight:${(activeStep, index) => (index === 0 ? 'bold' : '' )};
    margin:0 0 0 35px;
    // border:1px solid gray;
   

   

    &:before{
        position:absolute;
        // content:${(activeStep, index) => (activeStep === index ? '✓' : '•' )};
        content: '•';
        left:-35px;
        display:flex;
        justify-content:center;
        align-items:center;
        width:20px;
        height:20px;
        background:var(--secondary);
        color:white;
        
        border:2px solid var(--secondary);
        border-radius:50%;
    }

    &:after{
        position:absolute;
        content:'';
        // right:-16vw;
        left:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        width:14vw;
        height:1px;
        margin:0 1vw;
        background: var(--secondary);
        
    }

    &:last-child {
        &:after {
        width:0;
        height:0;

        }
    
`;


export const StepLabel= styled.div`
    width:contain;
    // border:1px solid gray;
`;


export const FormLoading = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:80%

`;