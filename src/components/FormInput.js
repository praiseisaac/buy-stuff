import React from 'react';

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", margin: "5px", textAlign: "left" }}>
            <label style={this.props.labelStyle}>{this.props.label}</label>
            <input style={this.props.inputStyle}  type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} readOnly={this.props.readOnly} value={this.props.value}></input>
        </div>
        );
    }
}
export default FormInput;
