import React from 'react'

export default function SearchBar(props) {
    return (
        <div>
            <input type="text" placeholder="search" onChange={props.onSearch} />
            <br></br>
            <input type="checkbox" onChange={props.onCheck}/> only show product on stock
        </div>
    )
}
