import React from 'react';
import './styles/Avatar.css';
import avatar from './images/beach-sunset.jpg';
// import {PrivateRouteBuyer} from './PrivateRouteBuyer';
import {Router, Route, Redirect} from 'react-router-dom';
import {history} from './../helpers/history';
import {buyerAuthService} from './../Buyer/services/buyerAuthService';

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBuyer: buyerAuthService.currentBuyerValue,
            orders: [],
            cart: [],
            view: "account"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log("hello");
    }

    componentDidMount(){
        try {
            this.setState({cart: this.state.currentBuyer._cart});
        } catch(e) {
            
        }

    }

    render() {
        return (
            <div style={{
                borderRadius: "20px",
                height: "40px",
                width: "60px",
                position: "absolute",
                right: "10px",
                display: "flex",
                justifyContent: "center"
            }}>
                <div style={{position: "absolute", left: "0px", height: "20px", width: "30px", backgroundColor: "red", color: "white", fontSize: "small", textAlign: "center", borderRadius: "5px"}}>99+</div>
                <div style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    height: "100%",
                    width: "40px"
                }}>

                <a href="/buyers">
                    <img src={avatar} alt="Avatar" style={{
                            maxHeight: "100%"
                        }}></img>
                </a>
                {/* <Route path="/" component={this.props.login} /> */}


            </div>
            </div>
            );
    }
}
export default Avatar;
