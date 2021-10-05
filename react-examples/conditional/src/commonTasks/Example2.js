import React, { Component } from 'react'

export default class Example2 extends Component {
    constructor(props){
        super(props);
        this.state = {color:"blue"};
        this.changeColor = this.changeColor.bind(this);
        this.originalState = this.originalState.bind(this);
    }
    changeColor(){
        this.setState({color: "red"});
    }
    originalState(){
        this.setState({color: "blue "});
    }
    render() {
        return (
            <div style={{width:100,height:100,backgroundColor:this.state.color,}} onMouseOver={this.changeColor} onMouseLeave={this.originalState}>
            </div>
        )
    }
}
