import React, { useState, useEffect } from 'react';
import {commerce} from '../../lib/commerce';
let shippo = require('shippo')('shippo_live_ddf53b6c55423188bd99ac2e5f954369f74e1d8b');

const Checkout = () => {
  const [shippingRates, setShippingRates] = useState([]);
  const [selectedRate, setSelectedRate] = useState(null);

//   useEffect(() => {
//     const fetchShippingRates = async () => {
//       const cart = await commerce.cart.retrieve();
//       const items = cart.line_items.map((item) => ({
//         quantity: item.quantity,
//         weight: item.variant.weight,
//         width: item.variant.width,
//         length: item.variant.length,
//         height: item.variant.height,
//         price: item.variant.price,
//       }));
//       const address = {
//         name: cart.shipping_address.name,
//         street1: cart.shipping_address.address1,
//         city: cart.shipping_address.city,
//         state: cart.shipping_address.province_code,
//         zip: cart.shipping_address.zip,
//         country: cart.shipping_address.country_code,
//       };
    
       
//     }, [])

    useEffect(() => {
        const fetchShippingRates = async () => {
            const cart = await commerce.cart.retrieve();
            const items = cart.line_items.map((item) => ({
              quantity: item.quantity,
              weight: item.variant.weight,
              width: item.variant.width,
              length: item.variant.length,
              height: item.variant.height,
              price: item.variant.price,
            }));
            const address = {
              name: cart.shipping_address.name,
              street1: cart.shipping_address.address1,
              city: cart.shipping_address.city,
              state: cart.shipping_address.province_code,
              zip: cart.shipping_address.zip,
              country: cart.shipping_address.country_code,
            };

            const { street, city, country, postal_zip_code: zip, region } = merchant.address;
            const merchantAddress = {
              name: merchant.business_name,
              street1: street,
              city,
              zip,
              state: region,
              country
            };

            const shipment = await shippo.shipment.create({
                address_from: merchantAddress,
                address_to: JSON.parse(address),
                parcels: productDetail.data.map(({ meta: { shipping }}) => shipping),
              });
        }
    }, [])

}
