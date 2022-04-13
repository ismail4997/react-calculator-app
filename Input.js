import React, {Component} from 'react';
import "./Input.css";
class Input extends Component {

    render() {
        return (
            
                
                <div className='button'>

                    

                    
                        <button className='clear' name='CE' onClick={ e =>this.props.onClick(e.target.name)}>CE</button>
                        <button className="clear" name='(' onClick={ e =>this.props.onClick(e.target.name)}>(</button>
                        <button className='clear' name=')' onClick={ e =>this.props.onClick(e.target.name)}>)</button>
                        <button className='operations' name='/' onClick={ e =>this.props.onClick(e.target.name)}>/</button><br/>
                        <button className='CE' name='7' onClick={ e =>this.props.onClick(e.target.name)}>7</button>
                        <button className='CE' name='8' onClick={ e =>this.props.onClick(e.target.name)}>8</button>
                        <button className='CE' name='9' onClick={ e =>this.props.onClick(e.target.name)}>9</button>
                        <button className='operations' name='*' onClick={ e =>this.props.onClick(e.target.name)}>*</button><br/>
                        <button className='CE' name='4' onClick={ e =>this.props.onClick(e.target.name)}>4</button>
                        <button className='CE' name='5' onClick={ e =>this.props.onClick(e.target.name)}>5</button>
                        <button className='CE' name='6' onClick={ e =>this.props.onClick(e.target.name)}>6</button>
                        <button className='operations' name='-' onClick={ e =>this.props.onClick(e.target.name)}>-</button><br/>
                        <button className='CE' name='1' onClick={ e =>this.props.onClick(e.target.name)}>1</button>
                        <button className='CE' name='2' onClick={ e =>this.props.onClick(e.target.name)}>2</button>
                        <button className='CE' name='3' onClick={ e =>this.props.onClick(e.target.name)}>3</button>
                        <button className='operations' name='+' onClick={ e =>this.props.onClick(e.target.name)}>+</button><br/>
                        <button className='clear' name='AC'onClick={ e =>this.props.onClick(e.target.name)}>AC</button>
                        <button className='CE' name='0' onClick={ e =>this.props.onClick(e.target.name)}>0</button>
                        <button className='CE' name='.' onClick={ e =>this.props.onClick(e.target.name)}>.</button>
                        <button className='operations' name='=' onClick={ e =>this.props.onClick(e.target.name)}>=</button><br/>
                         
                    
                </div>

            
        );
    }
}


export default Input;