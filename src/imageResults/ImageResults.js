import React from 'react'
import Image from './image/Image'

import GridList from '@material-ui/core/GridList';

const ImageResults = ({ images }) => {
  return (
    <GridList cols={3} cellHeight={180}>
        {images.map(img => (
            <Image key={ img.id } image={ img } />
        ))}
    </GridList>
  )
}

export default ImageResults