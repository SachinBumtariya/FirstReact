//Binding Event Handler with 4 method
import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello' 
        }

        // 3rd method
        // this.clickHandler = this.clickHandler.bind(this)
    }
    // 1 to 3 method
    // clickHandler(){
    //     this.setState({
    //         message : 'Goodbye'
    //     })
    //     console.log(this)
    // }
    //
    //4th method
    clickHandler = () => {
        this.setState({
            message : 'Goodbye'
        })
    }
    render() {
        return (
            <div>
               <div>{this.state.message}</div>
               {/* 1st method binding in render */}
                {/* <button onClick={this.clickhandler.bind(this)}>Bind Event</button> */}

                {/* 2nd method using arrow fun in render */}
                {/* <button onClick={() => this.clickHandler()}>Bind Event</button> */}

                {/* 3rd method binding in the class constructor */}
                {/* <button onClick={this.clickHandler}>Bind Event</button> */}

                {/* 4th method  using arrow fun as class property*/}
                <button onClick={this.clickHandler}>Bind Event</button> 
                
            </div>
        )
    }
}

export default EventBind