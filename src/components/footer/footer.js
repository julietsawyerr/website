import React, {useContext} from 'react';
import {Context} from '../../context/context';
import {
    Container, 
    SubCont,
    Line,
    Copyrite,
    InstagramLogo,
    WhatsappLogo,
    ExternalLink
} from './footer.style'


function Footer(){
    const {locatn} = useContext(Context)
     const d = new Date();
    let year = d.getFullYear();


    return(
        <Container>
            <SubCont>
                <Copyrite locatn={locatn}>Copyright &copy; {year} Afrikarts.<br/>
                    All Rights Reserved.</Copyrite>
                <Line locatn={locatn}/>
                <ExternalLink href='https://www.instagram.com/theafrikartsstore/' target='-blank'>
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