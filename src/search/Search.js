import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

class Search extends Component {
  state = {
    search_image: '',
    amount: 15
  }

  handelInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAmountChange = e => {
      this.setState({ [e.target.name]: e.target.value })
  }

  render() {
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
      </div>
    )
  }
}

export default Search