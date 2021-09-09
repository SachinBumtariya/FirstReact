//Class State example
import React, { Component } from 'react';

class Message extends Component{
    //class constructor
    constructor(){
        super()
        this.state = {
            Message : 'Welcome'
        }
    }
    changeMessage(){
        this.setState({
            Message : 'Button Clicked'
        })
    }
    render () {
        return (
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={() => this.changeMessage()} >Click</button>
            </div>
            
        )
    }
}
export default Message