import React from 'react'
import './style.css'

function SkeletonElement({ type }){
    const classes = `skeleton ${type}`;
    return(
        <div className={classes}></div>
    )
}

export default SkeletonElement;