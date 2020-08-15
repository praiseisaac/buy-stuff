import React from 'react';
import './styles/MyButton.css';

class MyButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log("hello");
    }

    render() {
        return (
            <div>
                <a onClick={this.props.href} className={ this.props.className } style={this.props.style} type={this.props.type}>
                    {this.props.children}
                </a>
            </div>

        );
    }
}
export default MyButton;
