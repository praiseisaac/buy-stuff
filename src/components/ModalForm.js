import React from 'react';
import './styles/ModalForm.css';
import MyButton from './MyButton';


class ModalForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        
    }

    render() {
        return (
            <div id={this.props.id}>
                <div onClick={this.props.onExit} id="black-background" className="ModalForm black-background">
                </div>
                <div id="modal-form" className="modal-form">
                    <div className="inner">
                        <form action={this.props.action}>
                            <div>
                                {this.props.children}
                            </div>
                            <div className="ModalForm submit-buttons-div">
                              <MyButton onClick={this.props.onSubmit} type="submit" className="ModalForm submit-button">
                                Submit
                            </MyButton>
                            <MyButton onClick={this.props.onExit} className="ModalForm cancel-button">
                                Cancel
                            </MyButton>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        );
    }
}
export default ModalForm;
