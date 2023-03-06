import React, {useState, useEffect} from 'react'
// import handler from '../shippingHandler'
import {useAuth} from '../../../context/authContext';
import {RegularInput, FormInput, SelectInput} from '../../../components/formInput/formInput'
import Loading from '../../../components/loading/loading'

import {
    Container,
    Heading,
    Wrap, UserImg, ContactInfo,
    Logout, InnerCont, LoginDetails,
    Form, InputCont, InputAlert, 
    AlertCircle, Inputs, Half, MenuItem, SubmitInput
} from './shipping.style'

import {commerce} from '../../../lib/commerce'

function ShippingForm({checkoutToken, next, loading}){
    const {currentUser, logout} = useAuth();
    const [nameError, setNameError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [cityError, setCityError] = useState('');
    const [zipError, setZipError] = useState('');
    const [values, setValues] = useState({
        name:'',
        mobile:'',
        address:'',
        city:'',
        zip:''
    });

    const [fname, setFname] = useState('')
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

//   const shippinghandlers = handler()

//   console.log('token', function ShippingForm({checkoutToken}){


    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[1]);
      };

      const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
    
        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
      };

      const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });
    
        setShippingOptions(options);
        setShippingOption(options[0].id);
      };

    console.log('SHIPPING OPTIONS', shippingOptions)
    //   console.log('SHIPPING subdivision', shippingSubdivision)

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id); 
    }, []);


    useEffect(() => {
        if (shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);

    useEffect(() => {
        if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [shippingSubdivision]);

    const handleChange = (e) => {
        setValues({
            ...values, 
            [e.target.name] :  e.target.value
        })
    }

    const validateName = () => { 
        if(values.name.length == 0){
            setNameError('Name is required.')
            return false
        }

        if(!values.name.match(/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/)){
            setNameError('Enter your full name.')
            return false
        }

        setNameError('')
        return true
        
    }

    const validateMobile = () => {
        if(values.mobile.length == 0){
            setMobileError('Mobile number required.')
            return false
        }
        if(!values.mobile.match(/^[- +()0-9]{7,}$/)){
            setMobileError('Enter a valid mobile number.')
            return false
        }

        setMobileError('')
        return true
    }

    const validateAddress = () => {}

    const validateCity = () => {}

    const validateZip = () => {}

    const validateStreet = () => {}

    const handleSubmit = (e) => {
        e.preventDefault();
        next({...values, shippingCountry, shippingSubdivision, shippingOption})
    }

    if(loading){
        return <Loading check='true' height='60' width='60' color='#6C3926'/>
     }

    return(
        <>

            <Container>
                

            <Heading>Shipping Address</Heading>

                <Form method='POST' onSubmit={handleSubmit}>
                <InputCont>
                        <FormInput 
                            type='text'
                            name='name'
                            value={values.name} 
                            onChange={handleChange} 
                            fieldName='Name (e.g John Doe)' 
                            onKeyUp={() => validateName()} 
                        />
                        {nameError && <span><InputAlert />{nameError}</span>} 
                    </InputCont>  

                    <InputCont>
                        <FormInput 
                            type='tel'
                            name='mobile'
                            value={values.mobile} 
                            onChange={handleChange} 
                            fieldName='Mobile Number' 
                            onKeyUp={() => validateMobile()}  
                        />
                        {mobileError && <span><InputAlert />{mobileError}</span>} 
                    </InputCont> 

                    <InputCont>
                        <FormInput 
                            type='text'
                            name='address'
                            value={values.address} 
                            onChange={handleChange} 
                            fieldName='Street Address' 
                            onKeyUp={() => validateAddress()}  
                        />
                        {addressError && <span><InputAlert />{addressError}</span>} 
                    </InputCont> 

                    <Inputs>
                        <Half>
                            <InputCont>
                            <FormInput 
                                type='text'
                                name='city'
                                value={values.city} 
                                onChange={handleChange} 
                                fieldName='Town/City' 
                                onKeyUp={() => validateCity()}  
                            />
                            {cityError && <span><InputAlert />{cityError}</span>} 
                            </InputCont> 
                        </Half>

                        <Half>
                            <InputCont>
                            <RegularInput 
                                type='text'
                                name='zip'
                                value={values.zip} 
                                onChange={handleChange} 
                                fieldName='zip (Optional)' 
                                onKeyUp={() => validateZip()}  
                            />
                            {zipError && <span><InputAlert />{zipError}</span>} 
                            </InputCont> 
                        </Half>
                    </Inputs>

                    <Inputs>
                        <Half>
                            <InputCont>
                            <SelectInput 
                                type='text'
                                name='country'
                                value={shippingCountry} 
                                onChange={(e) => setShippingCountry(e.target.value)} 
                                fieldName='Country' 
                                onKeyUp={() => validateZip()}  
                            >
                                
                                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.label}
                                </MenuItem>
                                ))}
                        </SelectInput>
                            {zipError && <span><InputAlert />{zipError}</span>} 
                            </InputCont> 
                        </Half>

                        <Half>
                            <InputCont>
                            <SelectInput
                                type='text'
                                name='state'
                                value={shippingSubdivision} 
                                onChange={(e) => setShippingSubdivision(e.target.value)} 
                                fieldName='State/Province' 
                                onKeyUp={() => validateCity()}  
                            >
                                {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.label}
                                </MenuItem>
                                ))}
                            </SelectInput>
                            {cityError && <span><InputAlert />{cityError}</span>} 
                            </InputCont> 
                        </Half>
                    </Inputs>

                        <InputCont>
                                <SelectInput
                                    type='text'
                                    name='state'
                                    value={shippingOption} 
                                    onChange={(e) => setShippingOption(e.target.value)} 
                                    fieldName='Shipping Rate' 
                                    onKeyUp={() => validateCity()}  
                                >
                                    {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.label}
                                    </MenuItem>
                                    ))}
                                </SelectInput>
                                {cityError && <span><InputAlert />{cityError}</span>} 
                                </InputCont> 

                                <InputCont>
                                    <SubmitInput type='submit' value='Continue' />
                                </InputCont>         
                </Form>
                
            </Container>
        </> 
    )
}

export default ShippingForm;
