import React from 'react';
import './styles/Body.css';
import Listing from './Listing';
import ModalForm from './ModalForm';
import MyButton from './MyButton';

function RegisterationForm(props) {
    return(
        <div>

        </div>
    );
}

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
        this.exitModal = this.exitModal.bind(this);
        this.state = {modal_id: "modal-display"};
    }

    register() {
        console.log("register");
        // document.getElementById(this.state.modal_id).style.transition = "opacity 1s";
        // document.getElementsByClassName(`modal-form`)[0].style.transition = "opacity 1s";
        // document.getElementsByClassName(`black-background`)[0].style.transition = "opacity 1s";
        var form = document.getElementById(this.state.modal_id);

        form.style.visibility = "visible";
        form.style.visibility = "1";
        form.getElementById("modal-form").style.opacity = "1";
        form.getElementsById("black-background").style.opacity = "30%";
    }

    exitModal() {
        console.log("register");
        // document.getElementById(this.state.modal_id).style.transition = "opacity 1s";
        // document.getElementsByClassName(`modal-form`)[0].style.transition = "opacity 1s";
        // document.getElementsByClassName(`black-background`)[0].style.transition = "opacity 1s";
        
        document.getElementById(this.state.modal_id).style.opacity = "0";
        var form_elements = document.getElementsByClassName(`ModalForm`);
        form_elements.forEach((elem) => {
            elem.style.opacity = "0";
        })
         
        document.getElementById(this.state.modal_id).style.visibility = "hidden";
    }


    render() {
        return (
            <div id={this.props.id} className="app-body main">
                <Listing />
                <MyButton style={{width: "100px"}} onClick={this.register} >Register</MyButton>
                <ModalForm id={this.state.modal_id} onExit={this.exitModal} visibility="hidden" opacity="0">

                </ModalForm>
            </div>
        );
    }
}
export default Body;