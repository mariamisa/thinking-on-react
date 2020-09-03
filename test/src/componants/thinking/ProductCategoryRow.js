import React from 'react'
import ProductRow from './ProductRow'

export default function ProductCategoryRow(
    {CategoryName,data,filterText,inStockOnly}) {

    let products=data.filter(element=>element.name.toLowerCase().includes(filterText.toLowerCase())&&(inStockOnly?element.stocked===true:true));
    
    return (
        <>
            <tr>
                <th colSpan="2">{CategoryName}</th>
            </tr>
            {products.map((product,index)=><tr key={index.toString()}>
                <ProductRow details={product}/>
            </tr>) }
        </>
    )
}
