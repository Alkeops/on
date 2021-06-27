import React from 'react'

const ProductImage = () => {
    return (
      
        <div className="a-product-image" >
            <video playsInline autoPlay loop muted>
            <source
              src={`/videos/Adapta.mp4`}
              type="video/mp4"
            />
          </video>
        </div>
    )
}

export default ProductImage
