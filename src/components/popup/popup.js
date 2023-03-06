import React, {useContext} from 'react'
import {Context} from '../../context/context';
import {Container, Cont} from './popup.style'


function Popup({children, trigger, setTrigger}){
    const {height} = useContext(Context);

    return(
        <Container trigger={trigger} height={height}><Cont>{children}</Cont></Container>
    )
}

export default Popup