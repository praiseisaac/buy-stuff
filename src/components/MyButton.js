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
                <a href={this.props.href} style={{textDecoration: "none"}}>
                    <div onClick={this.props.onClick} className={ "button " + this.props.className } style={this.props.style} type={this.props.type}>
                        <span style={{ display: "block", textAlign: "center", margin: "auto" }}>
                            {this.props.children}
                        </span>
                    </div>
                </a>

            </div>

        );
    }
}
export default MyButton;
