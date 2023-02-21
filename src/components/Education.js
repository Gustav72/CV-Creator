import React, {Component} from 'react';

export default class Education extends Component {

    constructor(props) {
        super(props);

        this.state = {
            institution: '',
            fieldOfFocus: '',
            dateFrom: '',
            dateTo: '',
        }
    }

    handleInstitutionChange = (event) => {
        this.setState({
            institution: event.target.value
        })
    }
    handleFieldOfFocusChange = (event) => {
        this.setState({
            fieldOfFocus: event.target.value
        })
    }
    handleDateFromChange = event => {
        this.setState({
            dateFrom: event.target.value
        })
    }
    handleDateToChange = event => {
        this.setState({
            dateTo: event.target.value
        })
    }

    render() {
        return (
            <div className="education">
                <h3>Education</h3>
                <form>
                    <div>
                        <div>
                            <label>Institution:</label>
                            <input type="text" value={this.state.institution} onChange={this.handleInstitutionChange}></input>
                        </div>
                        <div>
                            <label>Field of Focus:</label>
                            <input type="text" value={this.state.fieldOfFocus} onChange={this.handleFieldOfFocusChange}></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>From:</label>
                            <input className="date" type="date" value={this.state.dateFrom} onChange={this.handleDateFromChange}></input>
                        </div>
                        <div>
                            <label>To:</label>
                            <input className="date" type="date" value={this.state.dateTo} onChange={this.handleDateToChange}></input>
                        </div>
                    </div>
                    <button id="add-experience" type="submit">Save</button>
                </form>
            </div>
        )
    }
}