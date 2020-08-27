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
export default function ProductTable(props) {
    let array=props.products.map(el=>el.category)
    const category=[...new Set(array)]
    return (
        <div>
            <table>
                <TableHeader/>
                <tbody>
                {category.map((el,index)=><ProductCategoryRow key={index.toString()} CategoryName={el} filterText={props.filterText} inStockOnly={props.inStockOnly} data={props.products.filter(products=>products.category===el)}/>)}
                </tbody>
            </table>
        </div>
    )
}
