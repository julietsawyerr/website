import React from 'react'
import Slide from '../../components/slide/slide'
import Text from '../../components/text/text'

import {
    Container,
    RightCont,
    LeftCont,
} from './home.style';

function Home(){

    return(
        <Container>
            <LeftCont>
                <Text />
            </LeftCont>
            <RightCont>
                <Slide />
            </RightCont>
        </Container>
    )
}

export default Home;