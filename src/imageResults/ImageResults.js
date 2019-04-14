import React from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const ImageResults = ({ images }) => {
  return (
    <GridList cols={3} cellHeight={180}>
        {images.map(img => (
        <GridListTile key={img.id}>
            <img src={img.largeImageURL} alt={img.title} />
            <GridListTileBar
                title={img.tags}
                subtitle={<span>by: {img.user}</span>}
            />
        </GridListTile>
        ))}
    </GridList>
  )
}

export default ImageResults