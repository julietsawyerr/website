import React, {useState, useEffect} from 'react'
// import handler from '../shippingHandler'
import {useAuth} from '../../../context/authContext'
import {FormInput, SelectInput} from '../../../components/formInput/formInput'

import {
    Container,
    Heading,
    Form, InputCont, InputAlert, 
    Inputs, Half, MenuItem, SubmitInput,
    ErrorMessage, Alert
} from './shipping.style'

import {commerce} from '../../../lib/commerce'

function ShippingForm({isAvailable, checkoutToken, next, loading, liveObject, setLiveObject, checkOpt, setCheckOpt}){
    const {currentUser} = useAuth();
   
    const [nameError, setNameError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [cityError, setCityError] = useState('');
    const [zipError, setZipError] = useState('');
    const [errMessage, setErrMessage] = useState(false)
    const [values, setValues] = useState({
        name:'',
        mobile:'',
        address:'',
        city:'',
        zip:''
    });

  const [email, setEmail] = useState('')
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [region, setRegion] = useState();
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

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
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince});
        
        setShippingOptions(options);
        setShippingOption(options[0].id);
      };

      const checkShippingOpts = async (checkoutTokenId, option, country) => {
        setCheckOpt(false)
        const checkoption = await commerce.checkout.checkShippingOption(checkoutTokenId, { id: option,  country: country})
         setLiveObject(checkoption.live) 
         setShippingOption(option);
        setCheckOpt(true)
    }

    useEffect(() => {
        if(shippingSubdivision){
            let stateList = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }))
            setRegion(stateList.find(item => (shippingSubdivision === item.id)))
        }

    }, [shippingSubdivision]);


    useEffect(() => {
           fetchShippingCountries(checkoutToken.id);  
    }, []);

    useEffect(() => {
        if (shippingCountry && shippingOption) {
            checkShippingOpts(checkoutToken.id, shippingOption, shippingCountry);
        } 

    }, [shippingCountry, shippingOption]);

    useEffect(() => {
        if(currentUser) setEmail(currentUser.email) 
    }, []);

    useEffect(() => {
        if(shippingCountry === 'NG') setCountryValue('Nigeria') 
        if(shippingCountry === 'GH') setCountryValue('Ghana') 
    }, [shippingCountry]);


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
        if(values.name.length === 0){
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
        if(values.mobile.length === 0){
            setMobileError('Mobile number required.')
            return false
        }

        setMobileError('')
        return true
    }

    const validateAddress = () => {
        if(values.address === ''){
            setAddressError('Address is required.')
            return false
        }

        setAddressError('')
        return true
    }


    const validateCity = () => {
        if(values.city === ''){
            setCityError('City is required.')
            return false
        }

        setCityError('')
        return true
    }

    const validateZip = () => {
        if(values.zip === ''){
            setZipError('Zip code is required')
            return false
        }

        if(shippingCountry === 'SA' && !values.zip.match(/^\\d{4}$/)){
            setZipError('Enter a valid zip.')
            return false
        }

        setZipError('')
        return true
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validateName()  || !validateMobile() || !validateCity() || !validateAddress() || !validateZip() || !shippingCountry === '' || !shippingSubdivision === '' || !shippingOption === '' || !region === '' || !countryValue === ''){
            return false
        }

        if(!isAvailable){
            setErrMessage(true)

            setTimeout(() => {
                setErrMessage(false)
            }, 5000)
            return false
        }

        next({...values, email, shippingCountry, countryValue, shippingSubdivision, shippingOption, region})
    }


   
    return(
        <>
            <Container>
            <Heading>Shipping Details</Heading>
            
                {errMessage && <ErrorMessage><Alert />Please ensure  that item(s) requested quantities are available</ErrorMessage>}
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
                            fieldName='Mobile Number e.g +234 816 000 0000' 
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
                            <FormInput 
                                type='text'
                                name='zip'
                                value={values.zip} 
                                onChange={handleChange} 
                                fieldName='zip' 
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
                                // onKeyUp={() => validateZip()}  
                            >
                                
                                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.label}
                                </MenuItem>
                                ))}
                        </SelectInput>
                            {/* {zipError && <span><InputAlert />{zipError}</span>}  */}
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
                                // onKeyUp={() => validateSubdivision()}  
                            >
                                {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                <MenuItem key={item.id} value={item.id} >
                                    {item.label}
                                </MenuItem>
                                ))}
                            </SelectInput>
                            {/* {cityError && <span><InputAlert />{cityError}</span>}  */}
                            </InputCont> 
                        </Half>
                    </Inputs>

                        {/* <InputCont>
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
                                </InputCont>  */}

                                <InputCont>
                                   <SubmitInput type='submit' disabled={!checkOpt} value={!checkOpt ? 'Please Wait...' : 'Continue to payment'} />
                                </InputCont>  
                                    
                </Form>
                
            </Container>
        </> 
    )
}

export default ShippingForm;
