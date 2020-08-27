import React, { Component } from 'react'
function Doc(props){
   return(
       <div>
         {props.title}
         {props.msg}
       </div>
   )
   }
function TextTempate(props){
    return(
        <di>
            <Doc title={props.title} msg={props.msg}></Doc>
            {props.children}
        </di>
    )
}
export default class Signup extends Component {
    state={name:""}
    handelChange=(e)=>{
        this.setState({name:e.target.value})
    }
    handelClick=(e)=>{
        alert(`welcome ${this.state.name} on my website`)
    }
    render() {
        return (
            <div>
                <TextTempate title="hi from sign up" msg="sign up now">
                    <input onChange={this.handelChange} value={this.state.name} />
                    <button onClick={this.handelClick}>sign up</button>
                </TextTempate>
            </div>
        )
    }
}
