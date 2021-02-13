import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // em state digo que ao iniciar searchbar o valor inicial é "" emprty string. Constructor é a mesma coisa que o Initialize das classes em Ruby

    this.state = {
      term: ""
    }
  }

  handleUpdate = (event) => {
    this.setState ({
      term: event.target.value
    });

    this.props.searchFunction(event.target.value)
  }
  render() {
    return (
      <input
      value={this.state.term}
      type="text" className="form-control form-search"
      onChange={this.handleUpdate} />
    )
  }

}

export default SearchBar;
