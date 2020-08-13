import React from 'react';
import MyButton from './MyButton';
import './styles/NavBar.css';
import Avatar from './Avatar';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = { value: "" };
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    handleClick(e) {
        console.log("clicked");
    }

    render() {
        return (<div className="nav-bar">
            <div className="logo-avatar">
                <div className="logo">
                    <a href="#">
                        <div style={{ fontSize: "30px", color: "white" }}>Buy Stuff</div>
                    </a>
                </div>
                <Avatar />
            </div>

            <div className="search-div">
                <input value={this.state.value} onChange={this.handleChange} className="search-input" />
                {/* <MyButton height="100%" width="100px" backgroundColor="green" color="white">Button</MyButton> */}
                <MyButton className="search-button" onClick={this.handleClick}>Button</MyButton>
            </div>




        </div>);
    }
}
export default NavBar;