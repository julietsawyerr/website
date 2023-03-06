import React, {useState, useEffect} from 'react';
import {Images} from './slideImages'
import {
    Container,
    LeftCont,
    RightCont,
    Circle,
    SlideCont,
    Line,
    NumberCont,
    NumberSlide,
    Arrow
} from './slide.style'

function Slide(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const len = Images.length - 1;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex => activeIndex === len ? 0 : activeIndex + 1);
        }, 3500)
        return () => clearInterval(interval)
    }, [activeIndex, len])

    // const leftArrow = () => {
    //    if(activeIndex <= 0){
    //         setActiveIndex(len)
    //     }else{
    //         setActiveIndex(activeIndex => activeIndex - 1)
    //     }
        
    // }

    const rightArrow = () => {
        if(activeIndex >= len){
            setActiveIndex(0)
        }else{
            setActiveIndex(activeIndex => activeIndex + 1)   
        }
    }

    return (
        <Container>
           <LeftCont>
                <Circle />
                
                {Images.map((image, index) => (
                            <SlideCont
                                key={index}
                                activeIndex={activeIndex}
                                index={index}
                            >
                            <img src={`images/slide/${image.url}`} alt={image.title} /> 
                            </SlideCont>
                    ))}
           </LeftCont>

           <RightCont>
                <Line />
                <NumberCont>
                {Images.map((item, index) => (
                            <NumberSlide
                                key={index}
                                activeIndex={activeIndex}
                                index={index}
                            >
                           {item.id}
                            </NumberSlide>
                    ))}
                    
                </NumberCont>
                <Arrow onClick={rightArrow}/>
           </RightCont>
        </Container>
    );
}

export default Slide;