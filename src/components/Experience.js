import React, {Component} from 'react';

export default class Experience extends Component {

    constructor(props) {
        super(props);

        this.state = {
            company: '',
            position: '',
            dateFrom: '',
            dateTo: '',
            tasks: ''
        }
    }

    handleCompanyChange = event => {
        this.setState({
            company: event.target.value
        })
    }

    handlePositionChange = event => {
        this.setState({
            position: event.target.value
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
    handleTasksChange = event => {
        this.setState({
            tasks: event.target.value
        })
    }

    render() {
        return (
            <div className="experience">
                <h3>Experience</h3>
                <div>
                    <div>
                        <label>Company:</label>
                        <input type="text" value={this.state.company} onChange={this.handleCompanyChange}></input>
                    </div>
                    <div>
                        <label>Position:</label>
                        <input type="text" value={this.state.position} onChange={this.handlePositionChange}></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>From:</label>
                        <input type="date" value={this.state.dateFrom} onChange={this.handleDateFromChange}></input>
                    </div>
                    <div>
                        <label>To:</label>
                        <input type="date" value={this.state.dateTo} onChange={this.handleDateToChange}></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Tasks:</label>
                        <textarea type="text" value={this.state.tasks} onChange={this.handleTasksChange}></textarea>
                    </div>
                </div>
            </div>
        )
    }
}