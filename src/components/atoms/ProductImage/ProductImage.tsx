import React from 'react'

const ProductImage = ({video}:{video:string}) => {
    return (
      
        <div className="a-product-image" >
            <video playsInline autoPlay loop muted>
            <source
              src={`/videos/${video}.mp4`}
              type="video/mp4"
            />
          </video>
        </div>
    )
}

export default ProductImage
