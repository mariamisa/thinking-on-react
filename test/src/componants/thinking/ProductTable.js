import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'

function TableHeader(){
    return( 
        <thead>
            <tr>
            <th>name</th>
            <th>price</th>
            </tr>
        </thead>
    )
}
export default function ProductTable({products,filterText,inStockOnly}) {
    let array=products.map(el=>el.category)
    const category=[...new Set(array)]
    return (
        <div>
            <table>
                <TableHeader/>
                <tbody>
                {category.map((el,index)=><ProductCategoryRow key={index.toString()} CategoryName={el} filterText={filterText} inStockOnly={inStockOnly} data={products.filter(products=>products.category===el)}/>)}
                </tbody>
            </table>
        </div>
    )
}
