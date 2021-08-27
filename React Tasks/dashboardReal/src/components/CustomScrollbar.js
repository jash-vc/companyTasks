import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default class ColoredScrollbars extends Component {

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = { bottom: 0 };
        this.renderView = this.renderView.bind(this);
        this.renderThumb = this.renderThumb.bind(this);
    }
    renderView({ style, ...props }) {
        const { top } = this.state;
        const viewStyle = {
            paddingRight: 10,
        };
        return (
            <div
                className="box"
                style={{ ...style, ...viewStyle }}
                {...props} />
        );
    }
    renderThumb({ style, ...props }) {
        const { bottom } = this.state;
        const thumbStyle = {
            backgroundColor: `rgba(72, 99, 240, 0.5)`,
            borderRadius: "10px"
        };
        return (
            <div
                style={{ ...thumbStyle }}
                {...props} />
        );
    }

    render() {
        return (
            <Scrollbars
                renderView={this.renderView}
                renderThumbHorizontal={this.renderThumb}
                renderThumbVertical={this.renderThumb}
                {...this.props} />
        );
    }
}