import React, { Component } from 'react'
import ImageResults from '../imageResults/ImageResults'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

class Search extends Component {
  state = {
    search_image: '',
    amount: 15,
    images: []
  }

  handelInputChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {

      const cors = 'https://cors-anywhere.herokuapp.com';
      const BASE_URL = 'https://pixabay.com/api';

      fetch(`${ cors }/${ BASE_URL }/?key=${ process.env.REACT_APP_PB_KEY }&q=${ this.state.search_image }&image_type=photo&per_page=${ this.state.amount }`)
      .then(res => res.json())
      .then(data => this.setState({ images: data.hits }))
      .catch(err => console.log(err))
    })
  }

  handleAmountChange = e => {
      this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const image_results = this.state.images.length > 0 ? <ImageResults images={ this.state.images }/> : null
    return (
      <div className="container">
        <TextField
          name="search_image"
          label="Search for image..."
          type="search"
          margin="normal"
          fullWidth={true}
          value={ this.state.search }
          onChange={ this.handelInputChange }
        />
        <br/><br/>
        <TextField
            select
            name="amount"
            value={ this.state.amount }
            onChange={ this.handleAmountChange }
            helperText="Select Amount of Images"
        >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={50}>50</MenuItem>
        </TextField>
        <br/>
        { image_results }
      </div>
    )
  }
}

export default Search