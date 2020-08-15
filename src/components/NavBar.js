import React from 'react';
import MyButton from './MyButton';
import './styles/NavBar.css';
import Avatar from './Avatar';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.state = {
            value: ""
        };
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleClick(e) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        window.location.href = "/search/name=" + this.state.value;
        // fetch("https://localhost:5001/api/listings/name=" + this.state.value, requestOptions).then(response => response.text()).then(result => console.log(result)).catch(error => console.log('error', error));
    }

    componentDidMount() {
        var search = window.location.toString().replace("%20"," ").split("/");
        try {
            search = search[search.length - 1].split("=")[1];
            this.setState({value: search});
        } catch (e) {
            this.setState({value: ""});
        }
    }

    keyPress(e){
      if(e.keyCode == 13){
          this.handleClick();
         // put the login here
      }
   }

    render() {
        return (<div className="nav-bar">
            <div className="logo-avatar">
                <div className="logo">
                    <a href={this.props.href}>
                        <div style={{
                                fontSize: "30px",
                                color: "white"
                            }}>Buy Stuff</div>
                    </a>
                </div>
                <Avatar login={this.props.login} page={this.props.page}/>
            </div>

            <div className="search-div">
                    <input value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange} className="search-input"/> {/* <MyButton height="100%" width="100px" backgroundColor="green" color="white">Button</MyButton> */}
                    <MyButton type="submit" className="search-button" onClick={this.handleClick}>Button</MyButton>
            </div>

        </div>);
    }
}
export default NavBar;
