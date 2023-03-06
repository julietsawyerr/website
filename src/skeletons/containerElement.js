import React from 'react'
import SkeletonElement from '../skeletons/skeletonElement'
import './style.css'

function ContainerElement({ type }){
    const classes = `container ${type}`;
    return(
        <div className={classes}>
        <SkeletonElement type='small' />
        <SkeletonElement type='imageLg' />
        <SkeletonElement type='price' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
        <SkeletonElement type='space' />

        <SkeletonElement type='small' />
        <SkeletonElement type='imageLg' />
        <SkeletonElement type='price' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
        </div>
    )
}

export default ContainerElement;