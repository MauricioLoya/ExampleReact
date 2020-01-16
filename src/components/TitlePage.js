import React, {Component} from 'react';

class TitlePage extends Component {
    render() {
        console.log('PROPS', this.props);
        return (
            <div>
                <h3>{this.props.name.toUpperCase()}</h3>
            </div>
        );
    }
}

export default TitlePage;
