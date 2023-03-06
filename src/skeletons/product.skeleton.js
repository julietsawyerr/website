import React from 'react'
import SkeletonElement from './skeletonElement'
import './style.css'

function ProductSkeleton(){
    return(
        <div className='skeleton-wrapper'>
            <div className='product-skeleton'>
                <div className='image-cont'>
                    <SkeletonElement type='product-img' />
                    <SkeletonElement type='small' />
                    <SkeletonElement type='price' />
                </div>
                <SkeletonElement type='divider' />  
                <div className='price-cont'>
                    <SkeletonElement type='price-two' />
                    <SkeletonElement type='avatar' />
                </div>

            </div>
        </div>
    )
}
export default ProductSkeleton;