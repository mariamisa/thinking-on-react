import React from 'react';
import './App.css';
// import LOginController from './componants/LOginController'
// import Hidecomponant from './componants/Hidecomponant'
// import Form from './componants/Form'
// import Calc from './componants/Calculate'
// import Child from './componants/Children'
// import Signup from './componants/Signup'
import FilterTable from './componants/thinking/FilterableProductTable'

// function Mailbox(props){
//   const count=props.msg.length;
//   return(
//     <div>
//     {count>0&&<div>you have {count} messages </div>}
//     </div>
//   )
// }
// function DoubleNumber(props){
//   const doubled=props.numbers.map((el,index)=><li key={index.toString()}>{el*2}</li>)
//   return(
//     <div>
//       {doubled}
//     </div>
//   )
// }
function App() {
  // const messages=["hii","l love you","mariii"]
  // const numbers=[1,2,3,7]
  return (
    <div className="App">
      {/* <LOginController></LOginController>
      <Mailbox msg={messages}></Mailbox>
      <Hidecomponant></Hidecomponant>
      <DoubleNumber numbers={numbers}></DoubleNumber>
      <Form></Form>
      <Calc></Calc>
      <Child title="hi there" msg="welcome to my home">
        <h1>hiii from children</h1>
        <p>my name is mariam</p>
      </Child>
      <Signup></Signup> */}
      <FilterTable></FilterTable>

    </div>
  );
}

export default App;
