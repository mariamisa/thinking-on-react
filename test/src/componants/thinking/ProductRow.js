import React from 'react'

export default function ProductRow(props) {
    return (
        <>
               <td>{props.details.name}</td>
               <td>{props.details.price}</td>
               </>
    )
}
