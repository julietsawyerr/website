import React, {useContext} from 'react'
import {Context} from '../../../context/context'
import {
    Container,
    ImgCont,
    TextCont,
    ImgCategory,
    Title,
    Image,
    PriceCont,
    ProductPrice,
    OldPrice,
    CartBtn,
    Cart,
    SubCont,
    LinkContainer,
    // Fill
} from './product.style'

function Product({item, onAddToCart}) {
    const {handleAddToCart, cart} = useContext(Context);
    const slicedPrice = item.price.formatted_with_symbol.slice(0, -3);
        
    const addToCart = () => {
        let isItemInCart = cart.line_items && cart.line_items.some(el=> el.product_id === item.id);

        if(!isItemInCart){
            handleAddToCart(item.id, 1)  
        }
    }


    if(item.inventory.available === 0){
        return
    }
    // console.log('Cart', cart.line_items)
 
    return (
        <Container >
            <LinkContainer to={`/shop/${item.id}`}>
                <ImgCont >
                    <Image src= {item.image.url} alt={item.name}/>
                </ImgCont>
                
                <TextCont>
                    <ImgCategory>{item.categories[0].name}</ImgCategory>
                    <Title>{item.name}</Title>

                </TextCont>
            </LinkContainer>
            <SubCont>
                <PriceCont>
                    <ProductPrice>{slicedPrice}</ProductPrice> 
                    <OldPrice>{item.attributes[6].value}</OldPrice> 
                </PriceCont>
        
                <CartBtn  onClick={() => addToCart()}><Cart /></CartBtn> 
            </SubCont>
        </Container>
    );
}

export default Product;