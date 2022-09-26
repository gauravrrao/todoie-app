import React from 'react'

const Product = ({title}) => {
    return (
        <>
        <div className='product'>
            <span className='radio-small-container'>
                <input type="radio" className='radio' />

                <span className='product-name'>{title}</span>
            </span>
            <span><b>...</b></span>
            
        </div>
        <hr />
        </>
    )
}

export default Product