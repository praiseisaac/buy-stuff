import React from 'react';
import './styles/Landing.css';
import Listing from './Listing';
import ModalForm from './ModalForm';
import MyButton from './MyButton';
import {config} from './../config';
import FormInput from './FormInput';
import {Route, Redirect} from 'react-router-dom';
import { buyerAuthService } from './../Buyer/services/buyerAuthService';

// function ListingsList(props){
//     const listings = (
//         <div>props.listings.map((listing) => </div>

//     ))

//     return (
//         <div>

//         </div>
//     )
// }

function RegisterationForm(props) {
    if (props.type === "seller") {
        return (<div>

            <ModalForm action="/sellers" style={props.style} onExit={props.onExit} onSubmit={props.onSubmit}>
                <div>Sell Anything</div>
                <div>
                    <FormInput label="First Name: " name="first_name" placeholder="First Name"/>
                    <FormInput label="Last Name: " name="last_name" placeholder="Last Name"/>
                    <FormInput label="User Name: " name="username" placeholder="User Name"/>
                    <FormInput type="password" label="Password: " name="password" placeholder="password"/>
                    <FormInput label="Email: " name="email" placeholder="example@email.com"/>
                    <FormInput label="Address (line 1):" name="address_line_1" placeholder="Line 1"/>
                    <FormInput label="City: " name="city" placeholder="City"/>
                    <FormInput label="State: " name="state" placeholder="State"/>
                </div>
            </ModalForm>
        </div>);
    } else if (props.type === "buyer") {
        return (<div>
            <div>

                <ModalForm action="/buyers" style={props.style} onExit={props.onExit} onSubmit={props.onSubmit}>
                    <div>Buy Anything</div>
                    <div>
                        <FormInput label="First Name: " name="first_name" placeholder="First Name"/>
                        <FormInput label="Last Name: " name="last_name" placeholder="Last Name"/>
                        <FormInput label="User Name: " name="username" placeholder="User Name"/>
                        <FormInput type="password" label="Password: " name="password" placeholder="password"/>
                        <FormInput label="Email: " name="email" placeholder="example@email.com"/>
                        <FormInput label="Address (line 1):" name="address_line_1" placeholder="Line 1"/>
                        <FormInput label="City: " name="city" placeholder="City"/>
                        <FormInput label="State: " name="state" placeholder="State"/>

                    </div>
                </ModalForm>
            </div>
        </div>);
    } else {
        return (<div>
            <ModalForm style={props.style} onExit={props.onExit}>
                Void
            </ModalForm>
        </div>);
    }

}

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.registerSeller = this.registerSeller.bind(this);
        this.registerBuyer = this.registerBuyer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.exitModal = this.exitModal.bind(this);
        this.state = {
            modal_id: "modal-display",
            type: "",
            listings: []
        };
    }

    registerSeller() {
        console.log("seller");
        this.setState({type: "seller"});
        var form = document.getElementById(this.state.modal_id);

        form.style.visibility = "visible";
        form.style.opacity = "1";
    }

    registerBuyer() {
        console.log("buyer");
        this.setState({type: "buyer"});
        var form = document.getElementById(this.state.modal_id);

        form.style.visibility = "visible";
        form.style.opacity = "1";
    }

    handleSubmit() {
        console.log(this.state.type);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var form = document.getElementById("modal-display").getElementsByTagName("form")[0].elements;
        var first_name = form["first_name"].value;
        var last_name = form["last_name"].value;
        var address = form["address_line_1"].value + ", " + form["city"].value + ", " + form["state"].value;
        var password = form["password"].value;
        var username = form["username"].value;
        var email = form["email"].value;

        var api = "";

        if (this.state.type === "seller") {
            api = "sellers";
        } else if (this.state.type === "buyer") {
            api = "buyers";
        }

        var raw = JSON.stringify({
            "_email": email,
            "_username": username,
            "_first_name": first_name,
            "_last_name": last_name,
            "_address": address,
            "_password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${config.apiUrl}/${api}`, requestOptions).then(response => response.json()).then(result => {
            console.log("Success");
            buyerAuthService.login(email, password).then(user => {
                const {from} = this.props.location.state || {
                    from: {
                        pathname: `/buyers`
                    }
                };
                this.props.history.push(from);
                // console.log(user);
            });
        }).catch(error => console.log('error', error));

    }

    componentDidMount() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        var search = window.location.toString().split("/");
        try {
            search = search[search.length - 1];
        } catch (e) {
            search = ""
        }


        fetch(`${config.apiUrl}/listings/${search}`, requestOptions).then(response => response.json()).then(result => {
            // <Listing title={element["_title"]} price={element["_price"]}/>
            this.setState({listings: result});
        }).catch(error => console.log('error', error));

    }

    gotoSeller() {
        return <Redirect to="/buyers"/>
    }

    gotoBuyer() {
        return <Redirect to="/sellers"/>
    }

    exitModal() {
        console.log("register");
        var form = document.getElementById(this.state.modal_id);
        form.style.opacity = "0";
        form.style.visibility = "hidden";
    }

    render() {
        return (<div id={this.props.id} className="app-body main" style={{
                margin: "20px"
            }}>
            <div id="landing-info" style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                <MyButton className="registeration-button" onClick={this.registerSeller}>Start Selling</MyButton>
                <MyButton className="registeration-button" onClick={this.registerBuyer}>Start Buying</MyButton>
                <MyButton className="registeration-button" href="/sellers">Login as Seller</MyButton>
                <MyButton className="registeration-button" href="/buyers">Login as Buyer</MyButton>
            </div>

            <div style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                <div id="listings-list" style={{
                        display: "grid",
                        gridTemplateColumns: "auto auto auto auto"
                    }}>
                    {
                        this.state.listings.map((element) => {
                            {
                                return <Listing title={element._title} price={element._price} rating={element._rating}/>
                            }
                        })
                    }
                </div>
            </div>

            <div id={this.state.modal_id} style={{
                    transition: "opacity 0.5s, visibility 0.5s",
                    opacity: "0",
                    visibility: "hidden"
                }}>
                <RegisterationForm onExit={this.exitModal} type={this.state.type} onSubmit={this.handleSubmit}></RegisterationForm>
            </div>
        </div>);
    }
}
export default Landing;
