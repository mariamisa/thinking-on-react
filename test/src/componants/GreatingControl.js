import React from 'react'

function UserGreeting(){
    return <p>hi user </p>
}
function GuestGreeting(){
    return <p>hi guest</p>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  export default Greeting;