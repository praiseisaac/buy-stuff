import React from 'react';
import './styles/ModalForm.css';
import MyButton from './MyButton';


class ModalForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div id={this.props.id} style={{visibility: this.props.visibility, opacity: this.props.opacity}}>
                <div onClick={this.props.onExit} style={{opacity: this.props.opacity}} id="black-background" className="ModalForm black-background">
            </div>
            <div id="modal-form" className="ModalForm modal-form" style={{opacity: this.props.opacity}}>
                <form onSubmit={(e) => {e.preventDefault();}}>
                    <div>
                        {this.props.children}
                    </div>
                    <MyButton onClick={this.handleSubmit} type="submit" className="ModalForm submit-form">
                        Submit
                    </MyButton>
                    <MyButton onClick={this.props.onExit}>
                        Cancel
                    </MyButton>
                </form>
            </div>
            </div>

        );
    }
}
export default ModalForm;