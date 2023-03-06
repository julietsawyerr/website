import React, {useContext} from 'react'
import {Context} from '../../../context/context'
import {
    Container,
    Button
} from './productNav.style'

function ProductNav(){
    const {filterItems, listCategories, isActive} = useContext(Context)

    return (
        <Container>
            {listCategories.map((item, index )=> (
                <Button  className={isActive === item && 'active'} key={index} type='button' onClick={() => filterItems(item)}>{item}</Button>
            ))}
        </Container>
    )
}

export default ProductNav;