import React, { Component } from 'react'

export default class Form extends Component {
    state={
        name:"mari",
        age:0,
        select:'lime'
    }
    //this call controlled componant its save form value to state
    handelChange=({target:{name,value}})=>{
        this.setState({[name]:value})
    }
    handelSubmit=(e)=>{
        // alert(`hi ${this.state.name}`)
        // console.log(this.fileInput)
        console.log(this.fileInput.current.files[0])
        e.preventDefault();
    }
    handelChangeSelect=(e)=>{
        this.setState({select:[e.target.value,...this.state.select]})
    }
    fileInput=React.createRef()
    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <input name="name"
                value={this.state.name}
                onChange={this.handelChange}/>
                <input name="age"
                onChange={this.handelChange}/>
                <input type="file" ref={this.fileInput}/>
                {/* multiple={true}  */}
                <select value={this.state.select} name="select" onChange={this.handelChangeSelect}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                    </select>
                <button>submit</button>

            </form> 
        )
    }
}
