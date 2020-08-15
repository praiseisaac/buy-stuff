import React from 'react';
import MyForm from './../components/MyForm';
import FormInput from './../components/FormInput';
import { buyerAuthService } from './services/buyerAuthService';

class BuyerLogin extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setSubmitting = this.setSubmitting.bind(this);
        if (buyerAuthService.currentUserValue) {
            this.props.history.push('/');
        }
    }

    setSubmitting(val) {
        if (val === false) {
            alert("Failed to login");
        }
    }

    handleSubmit() {
        console.log("logged iin");
        var form = document.getElementById("buyer-login-form").getElementsByTagName("form")[0].elements;
        var password = form["password"].value;
        var email = form["email"].value;


        buyerAuthService.login(email, password).then(
                user => {
                    const { from } = this.props.location.state || { from: { pathname: `/buyers` } };
                    this.props.history.push(from);
                    window.location.href = "/buyers"
                    // console.log(user);
                }
        );

    }

    render() {
        return (
            <div>
                <MyForm id="buyer-login-form" onSubmit={this.handleSubmit}>
                    <div>
                        <div>Login</div>
                        <div>
                            <FormInput label="Email: " name="email" placeholder="example@email.com" />
                            <FormInput type="password" label="Password: " name="password" placeholder="password" />
                        </div>
                    </div>
                </MyForm>
            </div>
        );
    }
}
export default BuyerLogin;
