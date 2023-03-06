import React from 'react'
import {
    Container,
    Lside,
    Rside,
    HeadingTwo,
    Paragraph,
    LinkCont,
    Button,
    ImgCont,
    BtmParagraph
} from './emptyCart.style'

function EmptyCart(){
    return(
        
        <Container>
            <Lside>

                <ImgCont>
                    {/* <CartImg /> */}
                    <img src='images/sad.png' alt='' />
                    <BtmParagraph> oops!</BtmParagraph>
                    <span> 0 Item...</span>
                    
                </ImgCont>
            </Lside>

            <Rside>
                <HeadingTwo>
                    Your cart is currently empty!
                </HeadingTwo>
                <Paragraph>
                    Looks like you have not added anything to your cart. Go ahead and explore our shop Page.
                </Paragraph>

                <LinkCont to='/shop'>
                    <Button>Return to shop</Button>
                </LinkCont>
            </Rside>
             
        </Container>
    )
}

export default EmptyCart;