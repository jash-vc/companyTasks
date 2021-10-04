import React, { Component } from 'react'

export default class Example3 extends Component {
    constructor(props){
        super(props);
        this.state={message:"Initial Message"}
    }
        componentDidMount(){
            this.setState({message: "component mounted"})
        }

        render() {
        return (
            <div>
                {this.state.message}
            </div>
        )
    }
}
