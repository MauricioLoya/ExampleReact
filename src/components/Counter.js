import React, {Component} from 'react';

class Counter extends Component {

    state = {
        counter: 0
    };

    up = () => {
        this.setState({counter: this.state.counter + 1});
    };

    down = () => {
        this.setState({counter: this.state.counter - 1});
    };

    render() {
        return (
            <div>
                Counter: {this.state.counter}
                <button onClick={this.up}>Up</button>
                <button onClick={this.down}>Down</button>
            </div>
        );
    }
}

export default Counter;
