import React from 'react'
import {
    Container,
    LeftCont,
    RightCont,
    HeadingOne,
    HeadingTwo,
    Paragraph,
    Explore,
    BottomText,
    Line
} from './text.style'

function Text(){
    return(
        <Container>
            <LeftCont>
                <Line />
                </LeftCont>
            <RightCont>
                
                <HeadingTwo>stories</HeadingTwo>
                <HeadingOne>in <span>wood .</span></HeadingOne>
                <Paragraph>
                    Fill your spaces with the natural beauty of Afrikarts wood works
                </Paragraph>
                <Explore to='shop'>Explore</Explore>
                <BottomText>
                Get up to 30% off when you <br />order online
                </BottomText>
            </RightCont>
            

        </Container>
    )
}

export default Text;