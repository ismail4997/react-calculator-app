import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import Input from './components/Input';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "AC"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button // concat the string with the other button  
            })
        }
    };

    // the function that calculates the value
    calculate = () => {
        var checkResult = '' // if the user enters the -- sign it will be counted as +
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        // simple saves the result in the checkResult 
        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + "" // will evaluate the numbers for you
            })
        } catch (e) {     

            this.setState({
                result: "error", // this will quote any error if you mistype any thing
                

            })

        }
    };

    // reset button clears the screen
    reset = () => {
        this.setState({
            result: ""
        })
    };

    
    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)// this gets the value back and erase the data 
        })
    };

    render() {
        return (
            <div className='letsStyle'>

                <div className="calculator-container">
                    <h3 className='text'> Calculator </h3>
                    <Result result={this.state.result}/>
                    <Input onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;