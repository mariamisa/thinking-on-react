import React from 'react'
import ProductRow from './ProductRow'
export default function ProductCategoryRow(props) {
    let data;
    if(props.filterText&&props.inStockOnly){
        data =props.data.filter(element=>element.name.toLowerCase().includes(props.filterText.toLowerCase())&&element.stocked===true)
    }
    else if(props.filterText){
        data =props.data.filter(element=>element.name.toLowerCase().includes(props.filterText.toLowerCase()))

    }else if(props.inStockOnly){
        data=props.data.filter(el=>el.stocked===true)
    }
    else{
        data=props.data
    }

    return (
        <>
        <tr>
            <th colSpan="2">{props.CategoryName}</th>
        </tr>
            {data.map((product,index)=><tr key={index.toString()}><ProductRow details={product}></ProductRow></tr>) }
            </>
    )
}
