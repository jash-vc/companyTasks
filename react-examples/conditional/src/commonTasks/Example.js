import React, { Component } from 'react'

export default class Example extends Component {
    constructor(props){
        super(props);
        this.state = { counter: 0 };
        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
    }
    add(){
        this.setState({counter: this.state.counter + 1})
    }
    sub(){
        this.setState({counter: this.state.counter - 1})
    }
    render() {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button style={{marginRight:10}} onClick={this.add}>Add</button>
                <button onClick={this.sub}>Subtract</button>
            </div>
        )
    }
}
Example.defaultProps = {
    counter: 0
};
