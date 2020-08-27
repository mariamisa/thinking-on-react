import React from 'react'

export default function Children(props) {
    console.log(props.children)
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.msg}</p>
            <div>{props.children}</div>
        </div>
    )
}
