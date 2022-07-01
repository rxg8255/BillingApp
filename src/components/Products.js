import React, { Component } from 'react';
import { Input } from 'antd';
import ProductsList from './ProductsList';

const { Search } = Input;

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productslist: {},
            searchValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({searchValue: event.target.value});
    }
    
    render() {
        return (
            <div>
                <Search value={this.state.searchValue} placeholder="search for products" enterButton onChange={this.handleChange}/>
                <ProductsList searchValue = {this.state.searchValue}/>
            </div>
        );
    }
}

export default Products;