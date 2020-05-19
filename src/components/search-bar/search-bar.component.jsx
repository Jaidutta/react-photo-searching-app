import React from 'react';
import './search-bar.style.css';

class SearchBar extends React.Component {
  constructor(){
    super()
    this.state = {
      term: ''
    }

  }

  onInputChange = event => {
    this.setState({term: event.target.value})
  }
  
  onFormSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.term)
  }

  render() {
    return(
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text" 
              onChange={this.onInputChange} 
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    )
  }
}
export default SearchBar
