import React, {Component} from 'react';

export class GeneralInfo extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            fullName: ''    
        }
    }

    handleFullNameChange = (event) => {
        this.setState({
            fullName: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>General Info</h3>
                <label>Full Name</label>
                <input type="text" value={this.state.fullName} onChange={this.handleFullNameChange}></input>
            </div>
        )
    }

}
