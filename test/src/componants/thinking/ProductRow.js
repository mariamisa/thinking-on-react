import React from 'react'

export default function ProductRow({details}) {
    return (
        <>
            <td style={{color:!details.stocked&& "red"}}>{details.name}</td>
            <td>{details.price}</td>
        </>
    )
}
