import React from 'react';
import FormInput from './../components/FormInput';

const inputStyle = {
    height: "40px",
    borderRadius: "3px",
    border: "1px solid grey",
    paddingInline: "10px",
    marginBottom: "10px",
    fontSize: "medium"
}

const addressInput = {
    height: "40px",
    width: "500px",
    borderRadius: "3px",
    border: "1px solid grey",
    paddingInline: "10px",
    marginBottom: "10px",
    fontSize: "medium"
}




class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "readonly",
            name: "readonly",
            address: "readonly"
        }
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(val) {
        switch (val) {
            case "address":
                this.setState({address: ""});
                break;
            default:

        }
    }

    render() {
        return (<div>
            <div id="Account account-content" style={{
                    marginInline: "30px"
                }}>
                <h1>Hi {this.props.currentBuyer._first_name}!</h1>
                <div>
                    <div style={{
                            display: "flex",
                            fontSize: "1.2rem"
                        }}><FormInput inputStyle={inputStyle} label="First Name: " name="first_name" value={this.props.currentBuyer._first_name} readOnly={this.state.name}/>
                    <FormInput inputStyle={inputStyle} label="Last Name: " name="last_name" value={this.props.currentBuyer._last_name} readOnly={this.state.name}/>

                        <div style={{
                                fontSize: "0.8rem",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "baseline",
                                justifyContent: "center",
                                marginInline: "10px"
                            }}>
                            Edit
                        </div>
                    </div>
                    <div style={{
                            display: "flex",
                            fontSize: "1.2rem"
                        }}>
                        <FormInput inputStyle={inputStyle} label="UserName: " name="username" value={this.props.currentBuyer._username} readOnly={this.state.username}/>
                        <div style={{
                                fontSize: "0.8rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                marginInline: "10px"
                            }}>Edit</div>
                    </div>
                    <div style={{
                            display: "flex",
                            fontSize: "1.2rem"
                        }}>
                        <FormInput inputStyle={addressInput} label="Address: " name="address" value={this.props.currentBuyer._address} readOnly={this.state.address}/>
                        <div style={{
                                fontSize: "0.8rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                marginInline: "10px"
                            }}><a>Edit</a></div>
                    </div>
                    <div>

                    </div>

                </div>
            </div>
        </div>
            );
    }
}
export default Account;
