import React, {Component} from 'react';

export default class GeneralInfo extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            email: '',
            phoneNumber: ''
        }
    }

    handleFullNameChange = (event) => {
        this.setState({
            fullName: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePhoneNumberChange = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>General Info</h3>
                <label>Full Name:</label>
                <input type="text" value={this.state.fullName} onChange={this.handleFullNameChange}></input>
                <label>Email:</label>
                <input type="email" value={this.state.stateEmail} onChange={this.handleEmailChange}></input>
                <label>Phone #:</label>
                <input type="number" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange}></input>
            </div>
        )
    }

}
