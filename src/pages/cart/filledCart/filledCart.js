import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {Context} from '../../../context/context'
import {useAuth} from '../../../context/authContext'
import Loading from '../../../components/loading/loading'
import {
    Container,
    Lside, 
    Rside,
    Heading,
    Table,
    ItemCont,
    Image,
    Paragraph,
    Price,
    TitleCont,
    Title,
    BodyCont,
    SmallFont,
    LText,
    RText,
    Clear,
    Remove,
    DelBtn,
    QtyCont,
    Increase,
    Decrease,
    GrayText, 
    CheckoutBtn, 
    Notice,
    ViewDetails,
    QuantityBtn,
    StockLeft, ClearIcon, HeadingCont
} from './filledCart.style'

function FilledCart(){
    const [checkedItem, setCheckedItem] = useState({});
    const [inventory, setInventory]= useState()
   const {productList, cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, width, loadingQty, clearCartLoading, removeItemLoading } = useContext(Context);
   const {currentUser} = useAuth()
   const breakpoint = 540;



   const handleQty = (lineItemId, productId, quantity) => {
        const resp = productList.some((item) => item.id === productId);
        const result = productList.find((item) => item.id === productId);

        if(resp && quantity !== result.inventory.available){
            handleUpdateCartQty(lineItemId, quantity + 1)
            
          }else{
            setCheckedItem(state => ({
                ...state, // <-- copy previous state
                [lineItemId]: !state[lineItemId] // <-- update value by index key
              }))

             setInventory(result.inventory.available)
              
              setTimeout(function () {
                setCheckedItem(state => ({
                    ...state, // <-- copy previous state
                    [lineItemId]: !state[lineItemId] // <-- update value by index key
                  }))
    
            }, 1500);
          
          }
 
   }



    return(
            <Container>
                <Lside>
                    <HeadingCont>
                        <Heading>Shopping Cart</Heading>
                        <Clear onClick={handleEmptyCart}>{clearCartLoading ? <Loading check ='false' height='22' width='22' color='#000'/> : <><ClearIcon />Clear cart</>}</Clear>
                    </HeadingCont>
                           
                    <Table>
                    <thead>
                    <tr>
                        <th>Item(s)</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    {cart.line_items.map((item) => (
                        <tbody key={item.id}>
                        <tr>
                            <td>
                                <ItemCont>
                                    <Image src={item.image.url} alt={item.name} />
                                    <Paragraph>{item.name}</Paragraph>
                                    <ViewDetails to={`/shop/${item.product_id}`}>View Details</ViewDetails>
                                </ItemCont>
                            </td>
                            <td><QtyCont>
                                <QuantityBtn disabled={loadingQty[item.id]} onClick={() => item.quantity > 1 ? handleUpdateCartQty(item.id, item.quantity - 1) : handleRemoveFromCart(item.id)}>
                                <Decrease  />
                                </QuantityBtn>   
                                    {item.quantity}
                                <QuantityBtn disabled={loadingQty[item.id]} onClick={() => handleQty(item.id, item.product_id, item.quantity)}>    
                                <Increase />   
                                </QuantityBtn>
                                </QtyCont>
                                {checkedItem[item.id] === true && <StockLeft>Only {inventory} left. </StockLeft>}
                            </td>
                            <td><Price>
                                    {item.quantity > 1 ? item.line_total.formatted_with_symbol.slice(0, -3) : item.price.formatted_with_symbol.slice(0, -3)}
                                    {item.quantity > 1 && <GrayText>{item.price.formatted_with_symbol.slice(0, -3)} x {item.quantity} items</GrayText>}
                                </Price>
                            </td>
                            <td><Remove width={width} onClick={() => handleRemoveFromCart(item.id)}>{width <= breakpoint ? <>{removeItemLoading[item.id] ? <Loading check ='false' height='16' width='16' color='#6C3926'/> : <DelBtn /> }</> : <>{removeItemLoading[item.id] ? <Loading check ='false' height='18' width='18' color='#6C3926'/> : <><DelBtn />Remove</>}</>}</Remove></td>
                            
                        </tr>
                        </tbody>
                        ))}
                </Table>

                </Lside>
                <Rside>
                    <TitleCont>
                        <Title>Order Summary</Title>
                        <Title>{cart.total_items} Items</Title>
                    </TitleCont>
                    <BodyCont>
                        <LText>Delivery Charge</LText>
                        <SmallFont>Add your delivery address at checkout to see delivery charge</SmallFont>
                    </BodyCont>
                    <BodyCont>
                        <LText>SubTotal</LText>
                        <RText>{cart.subtotal.formatted_with_symbol.slice(0, -3)}</RText>
                    </BodyCont>

                    <BodyCont>
                        <LText  className='bolder'>Total</LText>
                        <RText className='bolder'>{cart.subtotal.formatted_with_symbol.slice(0, -3)}</RText>
                    </BodyCont>
                    
                    <Link to={currentUser && currentUser.emailVerified ?  '/checkout' : '/login'}>
                        <CheckoutBtn>Continue to checkout</CheckoutBtn>
                    </Link>
                    <Notice><span>Please note:</span> Each piece is unique, made from a single block of wood, 
                            with the original wood color. Hence, there are same 
                            design in different color variation. </Notice>
                </Rside>
            </Container> 
    )
}

export default FilledCart