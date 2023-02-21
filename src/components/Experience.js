import React, {Component} from 'react';
import uniqid from 'uniqid'
import AddedExperience from './AddedExperience'

export default class Experience extends Component {

    constructor() {
        super();

        this.state = {
            experience: {
                company: {
                    text: '',
                    id: ''
                },
                position: {
                    text: '',
                    id: ''
                },
                dateFrom: {
                    text: '',
                    id: ''
                },
                dateTo: {
                    text: '',
                    id: ''
                },
                tasks: {
                    text: '',
                    id: ''
                },
            },
            allExperience: [],
        };
    }

    handleCompanyChange = event => {
        this.setState({
            experience: {
                company: {
                    text: event.target.value,
                    id: uniqid()
                },
            }
        })
    }

    handlePositionChange = event => {
        this.setState({
            experience: {
                position: {
                    text: event.target.value,
                    id: uniqid()
                },
            }
        })
    }

    handleDateFromChange = event => {
        this.setState({
            experience: {
                dateFrom: {
                    text: event.target.value,
                    id: uniqid()
                },
            }
        })
    }
    handleDateToChange = event => {
        this.setState({
            experience: {
                dateTo: {
                    text: event.target.value,
                    id: uniqid()
                },
            }
        })
    }
    handleTasksChange = event => {
        this.setState({
            experience: {
                tasks: {
                    text: event.target.value,
                    id: uniqid()
                },
            }
        })
    }

    onSubmitExperience = event => {
        event.preventDefault();
        this.setState({
            allExperience: this.state.allExperience.concat(this.state.experience),
            experience: {
                company: {
                    text: '',
                    id: ''
                },
                position: {
                    text: '',
                    id: ''
                },
                dateFrom: {
                    text: '',
                    id: ''
                },
                dateTo: {
                    text: '',
                    id: ''
                },
                tasks: {
                    text: '',
                    id: ''
                },
            },
        })
    }

    render() {
        return (
            <div className="experience">
                <h3>Experience</h3>
                <AddedExperience allExperience={this.state.allExperience}/>
                <form onSubmit={this.onSubmitExperience}>
                    <div>
                        <div>
                            <label>Company:</label>
                            <input type="text" value={this.state.company.text} onChange={this.handleCompanyChange}></input>
                        </div>
                        <div>
                            <label>Position:</label>
                            <input type="text" value={this.state.position.text} onChange={this.handlePositionChange}></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>From:</label>
                            <input className="date" type="date" value={this.state.dateFrom.text} onChange={this.handleDateFromChange}></input>
                        </div>
                        <div>
                            <label>To:</label>
                            <input className="date" type="date" value={this.state.dateTo.text} onChange={this.handleDateToChange}></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Tasks:</label>
                            <textarea type="text" value={this.state.tasks.text} onChange={this.handleTasksChange}></textarea>
                        </div>
                    </div>
                    <button id="add-experience" type="submit">Save</button>
                </form>
            </div>
        )
    }
}