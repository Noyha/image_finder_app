import React from 'react'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton';
import ZoomIn from '@material-ui/icons/ZoomIn';

const Image = ({ image, style }) => {
  return (
    <GridListTile style={ style }>
        <img src={ image.largeImageURL } alt={ image.title } />
        <GridListTileBar
            title={ image.tags }
            subtitle={<span>by: { image.user }</span>}
            actionIcon={
                <IconButton style={{ color: "#ffffff" }}>
                  <ZoomIn/>
                </IconButton>
            }
        />
    </GridListTile>
  )
}

export default Image
