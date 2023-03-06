import React, {useState, useEffect, useContext} from 'react'
import { Steps } from 'antd';
import ShippingForm from './shipping/shipping'
import PaymentForm from './payment/payment'
import Confirmation from './confirmation/confirmation'
import Summary from './orderSummary/summary'
import {commerce} from '../../lib/commerce';
import {Context} from '../../context/context'
import ContainerElement from '../../skeletons/containerElement'
import {
    Container,
    Lside, 
    Rside,
    HeadingTwo,
} from './checkOut.style'

function CheckOut(){
    const [checkoutToken, setCheckoutToken] = useState(null);

    const [activeStep, setActiveStep]= useState(0)
    const [liveObject, setLiveObject] = useState({})
    const [shippingData, setShippingData] = useState({})
    const [loading, setLoading] = useState(false)
    const [checkOpt, setCheckOpt]= useState(false)
    const [isAvailable, setIsAvailable] = useState(true)
    const {cart, handleCaptureCheckout, order, checkOrder} = useContext(Context)
     
    
    // let shippo = require('shippo')('shippo_live_ddf53b6c55423188bd99ac2e5f954369f74e1d8b');

    useEffect(() => {
        if (cart.id) {
          const generateToken = async () => {
            try {
              const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                
              setCheckoutToken(token);
              setLiveObject(token.live);
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

    // const Step = Steps.Step;

    return(
        
        <Container>
            <Lside checkoutToken={checkoutToken}>
            <Steps
                    current={activeStep}
                    // onChange={(c) => setActiveStep(c)}
                    items={[
                    {
                        title: 'Shipping',
                    },
                    {
                        title: 'Payment',
                    },
                    {
                        title: 'Confirmation',
                    },
                    ]}
                />

            
            {!checkoutToken ?  <ContainerElement type='form-skeleton'/> : 
            <>
                {(checkoutToken && activeStep === 0)
                    ? <ShippingForm  isAvailable={isAvailable} checkoutToken={checkoutToken} nextStep={nextStep} next={next} loading={loading} setLiveObject={setLiveObject} checkOpt={checkOpt} setCheckOpt={setCheckOpt}/>
                    : (activeStep === 1)
                    ? <PaymentForm  backStep={backStep} shippingData={shippingData} checkoutToken={checkoutToken} liveObject={liveObject} nextStep={nextStep} handleCaptureCheckout={handleCaptureCheckout} />
                    :  (activeStep === 2)
                    && <Confirmation order={order} checkOrder={checkOrder} loading={loading} setLoading={setLoading} checkoutToken={checkoutToken} />}
                    
            </>}
            
            </Lside>

            <Rside activeStep={activeStep} checkoutToken={checkoutToken}>
            {!checkoutToken ?  <ContainerElement type='form-detail-skeleton'/> : 
                <>
                    <HeadingTwo>
                        Order Summary
                    </HeadingTwo>
                    <Summary setIsAvailable={setIsAvailable} cart={cart} checkoutToken={checkoutToken} liveObject={liveObject} loading={loading} checkOpt={checkOpt}/>
                </>

            }
            </Rside>
             
        </Container>
    )
}

export default CheckOut;