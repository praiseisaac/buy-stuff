import React from 'react';
import './styles/MyForm.css';
import MyButton from './MyButton';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (<div id={this.props.id}>
            <div className="MyForm">
                <form onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                    <div className="MyForm children">
                        {this.props.children}
                    </div>
                    <div className="MyForm submit-buttons-div">
                        <MyButton onClick={this.props.onSubmit} className="MyForm submit-button">
                            Submit
                        </MyButton>
                        <MyButton onClick={this.props.onExit} className="MyForm cancel-button">
                            Cancel
                        </MyButton>
                    </div>
                </form>
            </div>
        </div>);
    }
}
export default Form;
