import React from 'react';
import {
    Container, 
    SubCont,
    Line,
    InstagramLogo,
    WhatsappLogo,
    ExternalLink
} from './footer.style'


function Footer(){
    return(
        <Container>
            <SubCont>
                <Line />
                <ExternalLink href='https://www.instagram.com/accounts/login/' target='-blank'>
                    <InstagramLogo />
                </ExternalLink>
                <ExternalLink href='https://wa.me/2348035704192' target='-blank'>
                    <WhatsappLogo/>
                </ExternalLink>
              
            </SubCont>
        </Container>
    )
}

export default Footer;