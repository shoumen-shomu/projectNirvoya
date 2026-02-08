import React from 'react'

const Images = ({ imgSrc, className, loading = "lazy" }) => {
    return (
        <img 
            className={`${className}`} 
            src={imgSrc} 
            alt="product-img" 
            loading={loading}
        />
    )
}

export default Images