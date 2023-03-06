import React, {useRef, useState, useEffect} from 'react'
import {
    Container,
    SubCont,
    Heading,
    Card,
    Title,
    ProductPrice,
    Image,
    Cont,
    CircleLeft,
    CircleRight,
    CardCont,
    CircleLeftCont,
    CircleRightCont,
} from './relatedProduct.style'

function RelatedProducts({loading, product, setCount, setActiveIndex}){
    const [slideLeft, setSlideLeft] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);
    const el = useRef();


  

    useEffect(() => {
        // console.log("offsetWidth" , el.current.offsetWidth)
        // console.log("clientWidth" , el.current.clientWidth)
        // console.log("scrollWidth" , el.current.scrollWidth)
    
        setSliderWidth(
            el.current.scrollWidth - el.current.offsetWidth
        );
      }, []);

    const moveRight = () => {
        let containerDiv = el.current;         
        setSlideLeft(containerDiv.scrollLeft += 150);
         }

     const moveLeft = () => {
        let containerDiv = el.current 
        setSlideLeft(containerDiv.scrollLeft -= 150);
    }

    const reset = () => {
        setCount(1)
        setActiveIndex(0);
        el.current.scrollLeft = 0;
        
    }

    // if(loading){
    //     return <RelatedProductSkeleton />
    // }

    
    return(
        <Container>
            <Heading>Similar Sculptures</Heading>
            <SubCont>
              
             <CircleLeftCont>
             {slideLeft > 0 && <CircleLeft onClick={moveLeft} />}
            </CircleLeftCont>   
            

            <CardCont ref={el} onClick={reset}>
                {product && product.related_products.map((item) => (
                   
                 <Card to={`/shop/${item.id}`} key={item.id}>
                    
                        <Image>
                            <img src= {item.image.url} alt={item.name} />
                        </Image>
                    
                        <Cont>
                        <Title>{item.name}</Title>
                        <ProductPrice>{item.price.formatted_with_symbol.slice(0, -3)}</ProductPrice>
                        </Cont>
                    </Card>
                 
                ))}
            </CardCont>
             
            <CircleRightCont>
            {slideLeft < sliderWidth &&<CircleRight onClick={moveRight}/>}
            </CircleRightCont>
            
            </SubCont>
        </Container>
    )
}

export default RelatedProducts