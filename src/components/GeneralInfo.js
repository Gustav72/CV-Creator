import React, {Component} from 'react';

export default 
class GeneralInfo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            isEditing: true,
        };
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
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

    handleSaveClick = () => {
        this.setState({
            isEditing: false
        });
    }

    handleEditClick = () => {
        this.setState({
            isEditing: true
        })
    }

    render() {
        return (
            <div>
                <h3>General Info</h3>
                { this.state.isEditing ? (  
                    <form id="general-info-edit" className="no-print">
                        <div>
                            <div>
                                <label>First Name:</label>
                                <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange}></input>
                            </div>
                            <div>
                                <label>Last Name:</label>
                                <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange}></input>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Email:</label>
                                <input type="email" value={this.state.stateEmail} onChange={this.handleEmailChange}></input>
                            </div>
                            <div>
                                <label>Phone #:</label>
                                <input type="number" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange}></input>
                            </div>
                        </div>
                        <div>
                            <button id="add-education" className="no-print" onClick={this.handleSaveClick}>Save</button>
                        </div>
                    </form>
                ) : (
                <div id="general-info-save">
                      <div>{this.state.firstName + ' ' + this.state.lastName} </div>
                      <div>{this.state.email}</div>
                      <div>{this.state.phoneNumber}</div>
                      <button id="add-education"  className="no-print" onClick={this.handleEditClick}>Edit</button>
                </div>
                    )}
            </div>
        );
    }
}