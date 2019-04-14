import React, { Component } from 'react';
import Image from './image/Image';

import GridList from '@material-ui/core/GridList';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class ImageResults extends Component {
    state = {
        open: false,
        current_image: ''
    };

    handleClickOpen = img => {
        this.setState({ open: true, current_image: img });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { images } = this.props;
        return (
            <> 
                <GridList cols={3} cellHeight={180}>
                    {images.map(img => (
                        <Image key={ img.id } image={ img } openDialog={ this.handleClickOpen } />
                    ))}
                </GridList>
                <Dialog
                    open={ this.state.open }
                    onClose={ this.handleClose }
                >
                    <img src={ this.state.current_image } alt="" style={{ width: '100%' }} />
                    <DialogActions>
                        <IconButton onClick={this.handleClose} >
                            <CloseIcon />
                        </IconButton>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
}

export default ImageResults;