import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const products=[
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];
export default class FilterableProductTable extends Component {
    state={
        filterText:"",
        inStockOnly:false
    }
    handelFilterText=(e)=>{
        this.setState({filterText:e.target.value})
    }
    handelOnStock=()=>{
        this.setState({inStockOnly:!this.state.inStockOnly})
    }
    render() {
        return (
            <div style={{margin:"auto",width:'50%',textAlign:"left",marginTop:50}}>
                <SearchBar
                 onSearch={this.handelFilterText}
                 onCheck={this.handelOnStock}
                 />
                <ProductTable inStockOnly={this.state.inStockOnly} filterText={this.state.filterText} products={products}/>
            </div>
        )
    }
}
