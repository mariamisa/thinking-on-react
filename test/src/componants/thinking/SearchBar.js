import React from 'react'

export default function SearchBar({onSearch,onCheck}) {
    return (
        <div>
            <input type="text" placeholder="search" onChange={onSearch} />
            <br></br>
            <input type="checkbox" onChange={onCheck}/> only show product on stock
        </div>
    )
}
