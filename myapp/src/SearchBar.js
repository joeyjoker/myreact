import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { filterText: '',
            inStockOnly: false};
    this.handleChange = this.handleChange.bind(this);
  }

   handleChange(event) {
     const target = event.target;
     const name = target.name;
     const type = target.type;

     const value = type === 'checkbox' ? target.checked:target.value;
     this.setState({[name]:value});
     this.props.onUserInput(type,value);
    
  }

 
    render() {

      return (
      <form>
        <input type="text" name="filterText" placeholder="Search..." value={this.state.filterText} onChange={this.handleChange} />
        <p>
          <input type="checkbox" name="inStockOnly" checked={this.state.inStockOnly} onChange={this.handleChange}/>
          {' '}
          Only show products in stock
        </p>
      </form>
    );

    }
}

export default SearchBar;