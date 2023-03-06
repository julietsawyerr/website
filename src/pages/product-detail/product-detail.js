import React, {useContext, useState} from 'react'
import Details from './details/details'
import Image from './image/images'
import RelatedProducts from './relatedProduct/relatedProduct'
import { useParams } from "react-router-dom";
import {Context} from '../../context/context'
import ContainerElement from '../../skeletons/containerElement'
import {
    Container,
    LCont,
    RCont,
 } from './productdetail.style'

function ProductDetail(){
    const {productList, width, loading} = useContext(Context);
    const [activeIndex, setActiveIndex] = useState(0);
    const [count, setCount] = useState(1);
    let params = useParams();
    let breakpoint = 640;

      
    const getProduct = () => {
        const response = productList.find((item) => item.id === params.shopId);
       return response;
      }

    const product = getProduct();
      
    //   if(loading){
    //     return <Loading check='true' height='60' width='60' color='#6C3926'/>
    // }

    
    return(
        
        <Container>
           <LCont>
            {loading ? <ContainerElement type='left-cont' /> : 
            <>
                <Image product={product} count={count} setCount={setCount} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
                {breakpoint < width && <RelatedProducts product={product} setCount={setCount} setActiveIndex={setActiveIndex}/>}
            </>
            } 
               
            </LCont>

            <RCont loading={loading}>
                {loading ? <ContainerElement type='right-cont' /> : 
                <>
                    <Details product={product} />
                    {width <= breakpoint   && <RelatedProducts product={product} setCount={setCount} setActiveIndex={setActiveIndex}/>}
                  
                </>
                }
                
            </RCont>
          
        </Container>
    )
}

export default ProductDetail;


