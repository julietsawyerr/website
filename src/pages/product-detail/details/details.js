import React, {useContext} from 'react';
import Loading from '../../../components/loading/loading'
import {Context} from '../../../context/context';
import { useNavigate } from "react-router-dom";
import {
    Container,
    Cont,
    Heading,
    PriceCont,
    DiscountPrice,
    Price,
    Table,
    Button,
    Paragraph,
    Question,
    QuestionLink,
    SocialCont,
    SocialIcon,
    Facebook,
    Twitter,
    WhatsappIcon,
    LinkIcon,
    Description,
    BtnCont,
    QuestionCont,
} from './detail.style'

function Details({loading, product}){

    
    const {handleAddToCart, loadingCart, cart} = useContext(Context)
    let navigate = useNavigate();
    const postUrl = encodeURI(document.location.href);
    const PostTitle = encodeURIComponent(product.name)
    const whatsappUrl = `whatsapp://send?text=${PostTitle} ${postUrl}`
    const hashtag = encodeURIComponent('Afrikarts-Sculptures,Arts,Home-Decor,Gift-Art,Art-lovers')
    const fbUrl = `https://www.facebook.com/sharer.php?u=${postUrl}`
    const twitterUrl = `https://twitter.com/share?url=${postUrl}&text=${PostTitle}&hashtags=${hashtag}`

   
    const cartProductId = cart.line_items && cart.line_items.map((item) => item.product_id);
    const checkId = cartProductId && cartProductId.includes(product.id);
    
    //console.log("check", checkId)
  
   
  
    const handleBtn = () => {
        if(checkId){
                navigate("/cart")
            }else{
            handleAddToCart(product.id, 1)
        }
          
    }




    return(
        <Container>
            <Cont>
                    <Heading>{product.name}</Heading>
                    <PriceCont>
                        <DiscountPrice>{product.price.formatted_with_symbol.slice(0, -3)}</DiscountPrice>
                        <Price>{product.attributes[6].value}</Price>
                    </PriceCont>
                </Cont>
                <Table>
                    <thead>
                    <tr>
                        <th>Material</th>
                        <th>Color</th>
                        <th>Stock</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>{product.attributes[3].value}</td>
                        <td>{product.attributes[5].value}</td>
                        <td>{product.inventory.available === 0 ? <span>Out of stock</span> : product.inventory.available}</td>
                    </tr>
                    </tbody>

                    <thead>
                    <tr>
                        <th>width</th>
                        <th>Height</th>
                        <th>Weight</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>{product.attributes[0].value}</td>
                        <td>{product.attributes[1].value}</td>
                        <td>{product.attributes[2].value}</td>
                    </tr>
                    </tbody>
                </Table>
                
                <BtnCont>
                    {/* {cart.total_items !== 0 } */}
                  <Button onClick={handleBtn}>{loadingCart ?  <Loading check ='false' height='18' width='18' color='#ffffff'/> :  "Buy Now"}</Button> 
                    <QuestionCont>
                        <Question />
                        <Paragraph>
                        Have questions about this product?
                        <QuestionLink href='https://wa.me/2348035704192' target='_blank'>Let's Chat</QuestionLink></Paragraph>
                    </QuestionCont>
                </BtnCont>

                <SocialCont>
                    <h1>Share with Friends</h1>
                    <SocialIcon>
                        <LinkIcon href={fbUrl} target='_blank'><Facebook /></LinkIcon>
                        <LinkIcon href={twitterUrl} target='_blank' ><Twitter /></LinkIcon>
                        <LinkIcon href={whatsappUrl} data-action="share/whatsapp/share" target='_blank'><WhatsappIcon /></LinkIcon>
                    </SocialIcon>
                </SocialCont>
                <Description dangerouslySetInnerHTML={{__html: product.description}} />
        </Container>
    )
}

export default Details