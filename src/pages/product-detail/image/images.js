import React from 'react';
import {
    Container,
    Arrow,
    Back,
    ImgCont,
    SlideCont,
    ArrowCont,
    Btn,
    RightArr,
    LeftArr,
    SlideCount, 
    MainCont,
    ArrowContSub,
} from './images.style'

function Image({loading, product, count, setCount, activeIndex, setActiveIndex}){
    const len = product && product.assets.length-1;

       const leftArrow = () => {
       if(activeIndex <= 0){
            setActiveIndex(len);
            setCount(product.assets.length);
        }else{
            setActiveIndex(activeIndex => activeIndex - 1)
            setCount(prev => prev - 1);
        } 
    }

    const rightArrow = () => {
        if(activeIndex >= len){
            setActiveIndex(0)
            setCount(1);
        }else{
            setActiveIndex(activeIndex => activeIndex + 1) ;
            setCount(prev => prev + 1);  
        }
    }

    // if(loading){
    //     return <ImageSkeleton />
    // }

    return(
        <Container>
            <Back to='/shop'><Arrow /> Back to shop</Back>
            <MainCont>
                <ImgCont>
                {product && product.assets.map((image, index) => (
                                <SlideCont
                                    key={image.id}
                                    activeIndex={activeIndex}
                                    index={index}
                                >
                                <img src={image.url} alt='' /> 
                                </SlideCont>
                        ))} 
                </ImgCont>
                <ArrowCont>
                    <ArrowContSub>
                        <Btn onClick={() => leftArrow()}><LeftArr /></Btn>
                        <SlideCount>0{count}</SlideCount>
                        <Btn onClick={() => rightArrow()}><RightArr /></Btn>
                    </ArrowContSub>
                </ArrowCont>
            </MainCont>
        </Container>
    )
}

export default Image