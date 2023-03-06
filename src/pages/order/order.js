import React, {useEffect} from 'react'
import {commerce} from '../../lib/commerce';
import {
    Container, Rside, Lside, Heading,
    OrderCont
} from './order.style'

function Order(){

    const List = async () => {
        try {
            const token = await commerce.customer.login('julietsawyerr@gmail.com', 'http://localhost:3000/order');
            console.log('Token', token)
          } catch (error) {
            console.log(error)
          }
    }

    useEffect(() => {
        List()
    }, [])

    return(
            <Container>
                <Lside>
                    <Heading>My order</Heading>
                    <OrderCont>
                       
                    </OrderCont>
                </Lside>
                <Rside></Rside>
            </Container>
    )
}

export default Order