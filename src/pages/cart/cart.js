import React, {useContext} from 'react'
import EmptyCart from './emptyCart/emptyCart';
import FilledCart from './filledCart/filledCart'
import {Context} from '../../context/context'
import {
    Container,
} from './cart.style';

function Cart(){
    const {cart} = useContext(Context)

    return(
        
        <Container>
            {!cart.total_unique_items ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart;