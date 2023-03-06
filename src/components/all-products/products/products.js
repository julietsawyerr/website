import React, { useContext } from 'react';
import {Context} from '../../../context/context'
import Product from '../product/product'
import ProductNav from '../productNav/productNav'
import {Container, GridContainer} from './products.style'
import ProductSkeleton from '../../../skeletons/product.skeleton'
import SkeletonElement from '../../../skeletons/skeletonElement'



function Products(props) {
    const {loading, filtered} = useContext(Context);
    let skeletonArr = Array.apply(null, {length: 12});
    

    if(loading){
        return (
                    <Container> 
                        <SkeletonElement type='navbar' />
                        <GridContainer>
                            {skeletonArr.map((item, index) => (
                                <ProductSkeleton key={index} />
                            ))}
                        </GridContainer>
                    </Container> 
        );
     }

    return (
        <Container>  
                <ProductNav/>
                    <GridContainer>
                        {filtered.map(item => (
                            <Product  key={item.id} item={item} />
                        ))}
                    </GridContainer>
        </Container>
    );
}

export default Products;