import React from 'react';
import './image-list.style.css';
import ImageCard from '../image-card/image-card.component'
const ImageList = props => {
  const images =  props.images.map(image => {
     return <ImageCard  key={image.id} image={image}/>
   })

  return(
    <div className="image-list">{images}</div>
  )
}

export default ImageList