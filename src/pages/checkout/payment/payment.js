import React from 'react'
import { usePaystackPayment } from 'react-paystack';
// import { PaystackButton } from 'react-paystack'
import {
    Container, Heading, Cont, PayCont,
    Button, ShipToCont, Change, Contner
} from './payment.style'

function PaymentForm({ backStep, checkoutToken, shippingData, liveObject, nextStep, handleCaptureCheckout, order}){
    const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY
    const amount = parseFloat(liveObject.total_with_tax.raw) * 100;
    const name = shippingData.name.split(' ')
    const ref = String((new Date()).getTime())

    

    const config = {
        reference:ref,
        email: shippingData.email,
        amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: publicKey,
    };

      // you can call this function anything
    const onSuccess = (reference) => {
        //Implementation for whatever you want to do with reference and after success call.
        const orderData = {
            line_items: liveObject.line_items,
            customer: { firstname: name[0], lastname: name[1], email: shippingData.email},
            shipping: { name: shippingData.mobile, street: shippingData.address, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
            fulfillment: { shipping_method: shippingData.shippingOption },
            billing: { name: shippingData.name, street: shippingData.address, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
            payment: {
              gateway: 'paystack',
              paystack: {
                 reference: reference.reference
              },
            },
          };

        handleCaptureCheckout(checkoutToken.id, orderData);
          
        nextStep()
    };

  // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const initializePayment = usePaystackPayment(config);

    return(
        <Container>

            <Cont>
            <Heading>Payment Due</Heading>
            <p>All transactions are secure and encrypted.</p>
            <PayCont>
                <Button 
                onClick={() => {
                        initializePayment(onSuccess, onClose)
                    }}>Pay {liveObject.total_due.formatted_with_symbol}</Button>
                {/* <PaystackButton {...componentProps} /> */}
            </PayCont>
            </Cont> 
            
            <Cont>
            <Heading>Contact</Heading>
            <p>{shippingData.email}</p>
            </Cont>

             <ShipToCont>      
            <Contner>
            <Heading>Ship to</Heading>
            <p>{shippingData.name}</p>
            <p>{shippingData.address}, {shippingData.city}, </p>
            <p>{shippingData.region.label}, {shippingData.countryValue}</p>
            </Contner>
            <Change onClick={() => backStep()}>Change</Change>
            </ShipToCont> 

            
           
        </Container>
        
    )
}

export default PaymentForm;
