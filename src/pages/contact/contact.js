import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import {FormInput, TextArea} from '../../components/formInput/formInput'
import {
    Container, 
    Heading,
    HeadingTwo,
    Paragraph,
    ParagraphTwo,
    Lside,
    Rside,
    Form,
    Input,
    Cont,
    Locatn,
    EmailFill,
    Mobile,
    LetsChat,
    WhiteSpace,
    Icon, Success, Warning, Alert,
    Check, InputCont, InputAlert, MsgCont

} from './contact.style'

function Contact(){
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [mobileError, setMobileError] = useState('')
    const [messageError, setMessageError] = useState('')


    const [values, setValues] = useState({
        name:'',
        email:'',
        mobile:'',
        message:'',
    });
    const form = useRef();
   


    const validateName = (e) => { 
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
    
    const validateMobile = (e) => {
        if(values.mobile.length === 0){
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

    const validateEmail = (e) => {
        if(values.email.length === 0){
            setEmailError('Email is required.')
            return false
        }
        if(!values.email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g)){
            setEmailError('Please enter a valid email.')
            return false
        }

        setEmailError('')
        return true
    }

    const validateMessage = (e) => {
        let required = 30;
        let left = required - values.message.split(" ").length

        if(values.message.length === 0){
            setMessageError('Please enter a minimum of 30 words.')
            return false
        }
       

        if(left > 0){
            setMessageError(`${left} more words required`)
            return false
        }

        setMessageError('')
        return true
    }

    const handleChange = (e) => {
        setValues({
            ...values, 
            [e.target.name] :  e.target.value
        })
        // setErrorMsg('Enter your name.')
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if(!validateName() || !validateEmail() || !validateMobile() || !validateMessage()){
            setErrorMsg('Please fix the error(s).')

            setTimeout(function () {
              setErrorMsg('')
          }, 5000);
            return false
        }
        
        setLoading(true)
       
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
          .then((result) => {
            setLoading(false)
            setSuccessMsg(true)
          

            setTimeout(function () {
                setSuccessMsg(false)
            }, 6000);
        
            setValues(prev => ({
                ...prev,
                name:'',
                email:'',
                mobile: '',
                message:'',
            }))
            

          }, (error) => {
              console.log(error.text);
              setErrorMsg('Oops, Something went wrong!')
              setLoading(false)

              setTimeout(function () {
                setErrorMsg('')
            }, 5000);

            setValues(prev => ({
                ...prev,
                name:'',
                email:'',
                mobile: '',
                message:'',
            }))
            
          });

         
      };



    return(   
        <Container>
            <Lside>
               <Heading>Contact Us</Heading>
               <WhiteSpace />
               <Paragraph>Feel free to contact us at any time. We'll get back to you as soon as we can.</Paragraph>
             
               {successMsg && 
                    <Success>
                        <Check />
                        <MsgCont>
                        Thank you for contacting us. We'll get back to you as soon as possible'. 
                        </MsgCont>
                    </Success>
                } 

                {errorMsg && <Warning><Alert />{errorMsg}</Warning>}  

                <Form  ref={form} onSubmit={sendEmail}>  
                    <InputCont>
                        <FormInput 
                            type='text'
                            name='name'
                            value={values.name} 
                            onChange={handleChange} 
                            fieldName='Full Name' 
                            onKeyUp={() => validateName()} 
                        />
                        {nameError && <span><InputAlert />{nameError}</span>} 
                    </InputCont>   

                    <InputCont>
                        <FormInput 
                            type='email'
                            name='email'
                            value={values.email} 
                            onChange={handleChange} 
                            fieldName='Email Address' 
                            // patter='^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                            // errorMsg='Please enter a valid email address.' 
                            onKeyUp={() => validateEmail()} 
                        />
                         {emailError && <span><InputAlert  />{emailError}</span>} 
                    </InputCont>

                    <InputCont>
                        <FormInput 
                            type='tel'
                            name='mobile'
                            value={values.mobile} 
                            onChange={handleChange} 
                            fieldName='Mobile Number' 
                            // pattern="^[- +()0-9]+$"
                            // errorMsg='Please enter a valid mobile number.' 
                            onKeyUp={() => validateMobile()}  
                        />
                        {mobileError && <span><InputAlert />{mobileError}</span>} 
                    </InputCont> 

                    <InputCont>
                        <TextArea 
                            value={values.message}
                            name="message" 
                            fieldName='Message' 
                            onChange={handleChange}
                            onKeyUp={() => validateMessage()}  
                        />  
                        {messageError && <span><InputAlert t />{messageError}</span>}                
                    </InputCont>
                
                    <Input type='submit' disabled={loading} value={loading ? 'Please wait...' : 'Sent Message'}/>
                </Form>
            </Lside>

            <Rside>
                <HeadingTwo>
                        Get in touch
                    </HeadingTwo>
                    <Cont>
                        <Icon><Locatn /></Icon> <ParagraphTwo>10, Adeniyi Jones Aveune,
                         Ikeja Lagos (101233)</ParagraphTwo>
                    </Cont>

                    <Cont>
                    <Icon><EmailFill /></Icon> info@afrikarts.com
                </Cont>

                <Cont>
                    <Icon><Mobile/></Icon> 0803 570 4192
                </Cont>

                <Cont>
                <Icon><LetsChat/></Icon> Whatsapp Number:<br/>0803 570 4192
                </Cont>
                
            </Rside>
        </Container>
    )
}

export default Contact;