import React,{Component} from 'react'

//  function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//       return <p>The water would boil.</p>;
//     }
//     return <p>The water would not boil.</p>;
//   }
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
class TemperatureInput extends Component{
    state={temp:''}
    handelChange=(e)=>{
        this.setState({temp:e.target.value})
    }
    render() {
        return (
            <div>
                <p>{scaleNames[this.props.scaleNames]==='Celsius'?"c"+toCelsius(this.state.temp):"f"+toFahrenheit(this.state.temp)}</p>
                <input name="temp"
                onChange={this.handelChange}
                value={this.state.temp} /> 
            </div>
        )
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

export default class Calculator extends Component {
    render() {
        return (
            <div>

                <TemperatureInput scaleNames="c"></TemperatureInput>
                <TemperatureInput scaleNames="f"></TemperatureInput>
            </div>

        )
    }
}

