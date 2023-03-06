import React from 'react'
import ContainerElement from '../../../skeletons/containerElement'
import {
    Container, Heading, Cont, Button
} from './confirmation.style'

function Confirmation({loading, setLoading, order, checkoutToken, checkOrder}){   

    // console.log('Order', order) 
    return(

        <Container>
            {checkOrder ? <ContainerElement type='confirm-skeleton'/> : 
                <>
                    <Heading>Confirmation</Heading>
                    <Heading>Your order {order.customer_reference} is complete!</Heading>
                    <Cont>
                    <p>Dear {order.customer.firstname} {order.customer.lastname}, </p>
                    <p>
                        Thanks for shopping at Afrikarts Online store - we sent an email to <span>{order.customer.email}</span> with your full receipt. Please check spam if the email has not arrived within 5 minutes.
                    </p>
                    </Cont>
                    <Button to='/shop'>Shop again</Button>
                </>
            }
        </Container>
    )
}

export default Confirmation;
