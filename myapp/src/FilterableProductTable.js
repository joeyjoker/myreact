import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };
        this.handleUserInput = this.handleUserInput.bind(this);


    }

    handleUserInput(type, value) {

        if (type === 'checkbox') {
            this.setState({
                inStockOnly: value
            });
        } else {
            this.setState({
                filterText: value
            });
        }
    }

    render() {

        return (
            <div>
                <SearchBar onUserInput={this.handleUserInput} />
                <ProductTable products={this.props.products} filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly} />
            </div>
        );

    }
}

export default FilterableProductTable;