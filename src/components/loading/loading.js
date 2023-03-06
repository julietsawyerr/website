import React from 'react';
import { Oval } from  'react-loader-spinner';
import {Container} from './loader.style'


function Loading({height, width, color, check}) {
    
    return (
        <Container check = {check}>
            <Oval
                height = {height}
                width = {width}
                radius = "9"
                color = {color}
                ariaLabel = 'oval-loading'     
                wrapperStyle
                wrapperClass
            />
        </Container>
    );
}

                // height = "80"
                // width = "80"
                // radius = "9"
                // color = '#6C3926'

export default Loading;