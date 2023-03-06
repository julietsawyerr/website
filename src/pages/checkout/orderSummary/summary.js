import React, {useEffect, useState} from 'react'
import Loading from '../../../components/loading/loading'
import {commerce} from '../../../lib/commerce';
import { 
    Container,
    SubCont, Item, Image, Qty,
    ItemCont, Description, Price, LineTotal,
    LineTotalCont, SubTotal, Shipping, Cont, TotalDue, Cost,
    TotalCost
} from './summary.style'

function Summary({ setIsAvailable, cart, checkoutToken, liveObject, loading, checkOpt}){ 
    const [quantity, setQuantity] = useState({});


    useEffect(() => {
        if(cart.id){
            const checkQuantity = () => {
                liveObject.line_items.forEach( async (item) => {
                  try{
                    const checkQty = await commerce.checkout.checkQuantity(checkoutToken.id, item.id, {amount: item.quantity})
                    if(!checkQty.available){
                    setQuantity(state => ({
                        ...state, // <-- copy previous state
                        [item.id]: !state[item.id] // <-- update value by index key
                      }))
                      setIsAvailable(false)
                    }
                  }catch{

                  }
                })
            }
            checkQuantity()  
        } 
    }, [cart])

    return(
        <Container>
            {liveObject.line_items &&
            <>
                <LineTotalCont>
                <Cont>
                    <SubTotal>Subtotal</SubTotal>
                    <Cost>{liveObject.subtotal.formatted_with_symbol.slice(0, -3)}</Cost>
                </Cont>

                <Cont>
                    <Shipping>
                        Shipping Rate
                        <span>Delivery within 7 working days.</span>
                    </Shipping>
                    <Cost checkOpt={checkOpt}>{!checkOpt ? <span><Loading check ='false' height='22' width='22' color='#6C3926'/></span> : liveObject.shipping.price.formatted_with_symbol.slice(0, -3)}</Cost>
                </Cont>

                {/* <Cont>
                    <Shipping>Shipping Rate</Shipping>
                    <Cost>{liveObject.shipping.price.formatted_with_symbol.slice(0, -3)}</Cost>
                </Cont> */}

                <Cont>
                    <TotalDue>Total</TotalDue>
                    <TotalCost>{liveObject.total_due.formatted_with_symbol.slice(0, -3)}</TotalCost>
                </Cont>
            </LineTotalCont>

                {liveObject.line_items.map(item => (
                    <SubCont key={item.product_id}>
                        <ItemCont>
                            <Qty>{item.quantity}</Qty>
                            <Item>
                            <Image src= {item.image.url} alt={item.name}/>
                            </Item>
                            <Description>
                                {item.name}
                                <Price>
                                    {item.price.formatted_with_symbol.slice(0, -3)} x {item.quantity} item(s)
                                </Price>
                                <Price>
                                {quantity[item.id] === true && <span>Requested quantity is *NOT* available! </span>}
                                </Price>

                            </Description>
                        </ItemCont>
                        <LineTotal>{item.line_total.formatted_with_symbol.slice(0, -3)}</LineTotal>
                    </SubCont>
            ))}
            {/* <LineTotalCont>
                <Cont>
                    <SubTotal>Subtotal</SubTotal>
                    <Cost>{liveObject.subtotal.formatted_with_symbol.slice(0, -3)}</Cost>
                </Cont>

                <Cont>
                    <Shipping>Shipping Rate</Shipping>
                    <Cost>{checkOpt ? <span>Loading...</span> : liveObject.shipping.price.formatted_with_symbol.slice(0, -3)}</Cost>
                </Cont>

                <Cont>
                    <TotalDue>Total Due</TotalDue>
                    <TotalCost>{liveObject.total_due.formatted_with_symbol.slice(0, -3)}</TotalCost>
                </Cont>
            </LineTotalCont> */}
            </>}
        </Container>
    )
}

export default Summary;
