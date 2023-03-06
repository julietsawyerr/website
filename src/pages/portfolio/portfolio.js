import React from 'react';
import Products from '../../components/all-products/products/products';


import {
    Container,
    BgCont,
    TextCont,
    HeadingOne,
    HeadingTwo,
    HeadingThree,
    BlackCont
} from './portfolio.style'

function Portfolio(){
    return(
        
        <Container>
                <BgCont>
                    <BlackCont>
                        <TextCont>
                            <HeadingOne>exquisite</HeadingOne>
                            <HeadingTwo>home Decor</HeadingTwo>
                            <HeadingThree>sculptures</HeadingThree>
                        </TextCont>
                    </BlackCont>
                </BgCont>
                <Products />
        </Container>
    )
}

export default Portfolio;