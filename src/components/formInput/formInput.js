import React from 'react';
import './inputStyle.css'



export function FormInput(props) {
    const {fieldName, type, name, value, onChange, onKeyUp} = props
    return (
        <div className="input-container">
            <input 
                type={type}
                name={name}
                value={value} 
                // pattern={pattern}
                required={true}
                onChange={onChange}
                onKeyUp={onKeyUp}
                
            />
            <label className={value && 'filled'} htmlFor={name}>{fieldName}</label>
        </div>  
    );
}

export function RegularInput(props) {
    const {fieldName, type, name, value, onChange, onKeyUp} = props
    return (
        <div className="input-container">
            <input 
                type={type}
                name={name}
                value={value} 
                onChange={onChange}
                onKeyUp={onKeyUp}
                
            />
            <label className={value && 'filled'} htmlFor={name}>{fieldName}</label>
        </div>  
    );
}

export function PasswordInput(props) {
    const {type, fieldName, name, value, errorMsg, onChange, onKeyUp} = props

    return (
        <div className="input-container">
            <input 
                type={type} 
                name={name}
                value={value}
                required={true}
                onChange={onChange}
                onKeyUp={onKeyUp}  
            />
            <label className={value && 'filled'} htmlFor={name}>{fieldName}</label>
            <span className='error-msg'>{errorMsg}</span>
        </div> 
    );
}

export function TextArea(props) {
    const {fieldName, name, value, pattern, onChange, onKeyUp} = props
  
    
    return (
        <div className="input-container">
            <textarea
               value={value}
                name={name} 
                rows="4" cols="50"
                pattern={pattern}
                required={true}       
                onChange={onChange}
                onKeyUp={onKeyUp}
             /> 

            <label className={value && 'filled'} htmlFor={name}>{fieldName}</label>
        </div>  
    );
}

export function SelectInput(props) {
    const {fieldName, name, value, onChange, onKeyUp, children} = props
    return (
        <div className="input-container">
            <select
                name={name}
                value={value} 
                onChange={onChange}
                onKeyUp={onKeyUp}
            >
                {children}
            </select>
            <label className={value && 'filled'} htmlFor={name}>{fieldName}</label>
        </div>  
    );
}





