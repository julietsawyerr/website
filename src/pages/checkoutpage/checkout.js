import React, {useState, useEffect, useContext} from 'react'
import ShippingForm from './shipping/shipping'
import PaymentForm from './payment/payment'
import Confirmation from './confirmation/confirmation'
import {commerce} from '../../lib/commerce';
import {Context} from '../../context/context'

import {
    Container,
    Lside,
    Rside,
    HeadingTwo,
    Paragraph,
    LinkCont,
    Button,
    ImgCont,
    BtmParagraph
} from './checkout.style'

function Checkout(){
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep]= useState(0)
    const [shippingData, setShippingData] = useState({})
    const [loading, setLoading] = useState(false)
    const {cart} = useContext(Context)


    useEffect(() => {
        setLoading(true)
        if (cart.id) {
          const generateToken = async () => {
            try {
              const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
    
              setCheckoutToken(token);
              setLoading(false)
            } catch {
            //   if (activeStep !== steps.length) history.push('/');
            }
          };
    
          generateToken();
        }
      }, [cart]);

      const nextStep = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
      const backStep = () => setActiveStep(prevActiveStep => prevActiveStep - 1);
  
      const next = (data) => {
          setShippingData(data)
          nextStep()
      }

      const Form = () => (activeStep === 0)
      ? <ShippingForm checkoutToken={checkoutToken} next={next} loading={loading}/>
      : <PaymentForm shippingData={shippingData}/>

    

    return(
        
        <Container>
            <Lside>
            {activeStep === 2 ? <Confirmation /> : <Form />} 
            </Lside>

            <Rside>
                <HeadingTwo>
                    Your cart is currently empty!
                </HeadingTwo>
                <Paragraph>
                    Looks like you have not added anything to your cart. Go ahead and explore our shop Page.
                </Paragraph>

                <LinkCont to='/shop'>
                    <Button>Return to shop</Button>
                </LinkCont>
            </Rside>
             
        </Container>
    )
}

export default Checkout;