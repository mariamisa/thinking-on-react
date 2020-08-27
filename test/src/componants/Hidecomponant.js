import React, { Component } from 'react'

function Warning(props){
    if(!props.warning){
        return null
    }
    return <div>warning</div>
}
export default class Hidecomponant extends Component {
    state={isWarn:false}
    handelWarn=()=>{
        this.setState({isWarn:!this.state.isWarn})
    }
    render() {
        return (
            <div>
                <Warning warning={this.state.isWarn}></Warning>
                <button onClick={this.handelWarn}>
                    {this.state.isWarn?"hide":"show"}</button>
            </div>
        )
    }
}
