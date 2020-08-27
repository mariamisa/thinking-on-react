import React, { Component } from 'react'
import GreatingControl from './GreatingControl'

 function LoginButton(props) {
    return (
        <button onClick={props.onclick}>login</button>
    )
}
function LogOutButton(props) {
    return (
        <button onClick={props.onclick}>log out</button>
    )
}

export default class LOginController extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handleLoginClick = this.handleLoginClick.bind(this);
    //     this.handleLogoutClick = this.handleLogoutClick.bind(this);
    //     this.state = {isLoggin: false};
    //   }
      state = {isLoggin: false};
      handleLoginClick=()=>{
        this.setState({isLoggin:true})
    }
    handleLogoutClick=()=>{
        this.setState({isLoggin:false})
    }
    render() {
        // let button;
        // if(!this.state.isLoggin){
        //     button=<LoginButton onclick={this.handleLoginClick}>login</LoginButton>
        // }
        // else{
        //     button=<LogOutButton onclick={this.handleLogoutClick}>LoginButton</LogOutButton>
        // }

        return(
            <>
            <GreatingControl isLoggedIn={this.state.isLoggin}></GreatingControl>
            {!this.state.isLoggin?<LoginButton onclick={this.handleLoginClick}>login</LoginButton>:
            <LogOutButton onclick={this.handleLogoutClick}>LoginButton</LogOutButton>
            }
            </>
        )
       
    }
}
